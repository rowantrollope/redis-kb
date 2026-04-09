#!/usr/bin/env python3
"""Collect Redis SRE sources into raw/sources.

Supports:
- Bulk ingest from raw/source_catalog.yaml
- Filtering by tag
- Ingesting one-off URLs
- Expanding sitemap-backed source manifests
"""

from __future__ import annotations

import argparse
import concurrent.futures
import datetime as dt
import hashlib
import pathlib
import re
import urllib.parse
import xml.etree.ElementTree as ET
from dataclasses import dataclass

import requests
import yaml
from bs4 import BeautifulSoup

ROOT = pathlib.Path(__file__).resolve().parents[1]
CATALOG = ROOT / "raw" / "source_catalog.yaml"
OUT_DIR = ROOT / "raw" / "sources"


@dataclass
class Source:
    title: str
    url: str
    tags: list[str]
    kind: str = "page"
    prefixes: list[str] | None = None


def slugify(value: str) -> str:
    value = value.strip().lower()
    value = re.sub(r"[^a-z0-9]+", "-", value)
    return value.strip("-")[:80]


def load_catalog(path: pathlib.Path) -> list[Source]:
    payload = yaml.safe_load(path.read_text())
    return [Source(**item) for item in payload.get("sources", [])]


def short_hash(value: str) -> str:
    return hashlib.sha1(value.encode("utf-8")).hexdigest()[:10]


def title_from_url(url: str) -> str:
    parsed = urllib.parse.urlparse(url)
    parts = [part for part in parsed.path.split("/") if part]
    if not parts:
        return parsed.netloc

    leaf = parts[-1]
    if leaf in {"index.html.md", "index.html"} and len(parts) > 1:
        leaf = parts[-2]

    leaf = re.sub(r"\.md$", "", leaf)
    return leaf.replace("-", " ").replace("_", " ").strip().title() or url


def markdown_url_for_redis_docs(url: str) -> str:
    parsed = urllib.parse.urlparse(url)
    if parsed.netloc != "redis.io" or not parsed.path.startswith("/docs/latest/"):
        return url
    if parsed.path.endswith(".md"):
        return url

    path = parsed.path
    if path.endswith("/"):
        path = f"{path}index.html.md"
    elif path.endswith("/index.html"):
        path = f"{path}.md"
    elif "." not in path.rsplit("/", 1)[-1]:
        path = f"{path}/index.html.md"
    else:
        return url

    return urllib.parse.urlunparse(parsed._replace(path=path, params="", query="", fragment=""))


def extract_markdown_title(text: str) -> str | None:
    match = re.search(r"^#\s+(.+)$", text, flags=re.MULTILINE)
    return match.group(1).strip() if match else None


def fetch_html_as_markdown(html: str, url: str) -> str:
    soup = BeautifulSoup(html, "html.parser")

    for node in soup(["script", "style", "noscript"]):
        node.decompose()

    title = soup.title.get_text(strip=True) if soup.title else url
    lines = [f"# {title}", "", f"Source: {url}", ""]

    for element in soup.find_all(["h1", "h2", "h3", "p", "li", "code"], limit=1200):
        text = element.get_text(" ", strip=True)
        if not text:
            continue
        if element.name == "h1":
            lines.append(f"## {text}")
        elif element.name == "h2":
            lines.append(f"### {text}")
        elif element.name == "h3":
            lines.append(f"#### {text}")
        elif element.name == "li":
            lines.append(f"- {text}")
        elif element.name == "code":
            lines.append(f"`{text}`")
        else:
            lines.append(text)

    return "\n".join(lines)


def fetch_markdown(url: str, timeout: int = 25) -> tuple[str, str]:
    response = requests.get(url, timeout=timeout, headers={"User-Agent": "redis-kb-bot/1.0"})
    response.raise_for_status()
    content_type = response.headers.get("content-type", "").lower()
    text = response.text

    if url.endswith(".md") or "markdown" in content_type or "text/plain" in content_type:
        return text, url

    soup = BeautifulSoup(text, "html.parser")
    markdown_link = soup.find("link", attrs={"type": "text/markdown"})
    if markdown_link and markdown_link.get("href"):
        alt_url = urllib.parse.urljoin(url, markdown_link["href"])
        if alt_url != url:
            alt_response = requests.get(alt_url, timeout=timeout, headers={"User-Agent": "redis-kb-bot/1.0"})
            alt_response.raise_for_status()
            return alt_response.text, alt_url

    return fetch_html_as_markdown(text, url), url


def load_sitemap_sources(source: Source) -> list[Source]:
    response = requests.get(source.url, timeout=30, headers={"User-Agent": "redis-kb-bot/1.0"})
    response.raise_for_status()
    root = ET.fromstring(response.text)
    namespace = {"sm": "http://www.sitemaps.org/schemas/sitemap/0.9"}
    urls = [node.text.strip() for node in root.findall(".//sm:url/sm:loc", namespace) if node.text]

    if source.prefixes:
        urls = [url for url in urls if any(url.startswith(prefix) for prefix in source.prefixes)]

    return [
        Source(
            title=title_from_url(url),
            url=url,
            tags=source.tags,
        )
        for url in urls
    ]


def expand_sources(sources: list[Source]) -> list[Source]:
    expanded: list[Source] = []
    for source in sources:
        if source.kind == "sitemap":
            expanded.extend(load_sitemap_sources(source))
        else:
            expanded.append(source)
    return expanded


def save_source(source: Source) -> pathlib.Path:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    stamp = dt.datetime.now(dt.UTC).strftime("%Y%m%d")
    source_url = source.url
    fetch_url = markdown_url_for_redis_docs(source_url)
    try:
        content, resolved_url = fetch_markdown(fetch_url)
    except requests.RequestException:
        if fetch_url == source_url:
            raise
        content, resolved_url = fetch_markdown(source_url)
    title = extract_markdown_title(content) or source.title or title_from_url(source_url)
    path_slug = slugify(urllib.parse.urlparse(source_url).path.replace("/", "-"))
    filename = f"{stamp}-{path_slug or slugify(title)}-{short_hash(source_url)}.md"
    path = OUT_DIR / filename
    metadata = {
        "title": title,
        "url": source_url,
        "retrieved_utc": dt.datetime.now(dt.UTC).isoformat(),
        "tags": source.tags,
    }
    if resolved_url != source_url:
        metadata["fetched_url"] = resolved_url
    frontmatter = "---\n" + yaml.safe_dump(metadata, sort_keys=False).strip() + "\n---\n\n"
    path.write_text(frontmatter + content)
    return path


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--limit", type=int, default=5, help="Maximum sources to ingest. Use 0 for no limit.")
    parser.add_argument("--tag", type=str)
    parser.add_argument("--url", type=str, help="One-off URL to ingest")
    parser.add_argument("--title", type=str, default="ad-hoc source")
    parser.add_argument("--sitemap-url", type=str, help="Expand and ingest every URL from a sitemap.")
    parser.add_argument(
        "--sitemap-prefix",
        action="append",
        default=[],
        help="Optional URL prefix filter for sitemap expansion. Repeatable.",
    )
    parser.add_argument("--jobs", type=int, default=6, help="Concurrent fetch jobs for bulk imports.")
    args = parser.parse_args()

    ingested: list[pathlib.Path] = []
    errors = 0

    if args.url:
        sources = [Source(title=args.title, url=args.url, tags=["ad-hoc"])]
    elif args.sitemap_url:
        sources = load_sitemap_sources(
            Source(
                title=args.title,
                url=args.sitemap_url,
                tags=["official", "docs", "sitemap"],
                kind="sitemap",
                prefixes=args.sitemap_prefix or None,
            )
        )
    else:
        sources = load_catalog(CATALOG)
        if args.tag:
            sources = [s for s in sources if args.tag in s.tags]
        sources = expand_sources(sources)

    if args.limit > 0:
        sources = sources[: args.limit]

    if not sources:
        print("[INFO] no sources matched the requested filters")
        return

    print(f"[INFO] ingesting {len(sources)} sources")
    with concurrent.futures.ThreadPoolExecutor(max_workers=max(1, args.jobs)) as executor:
        futures = {executor.submit(save_source, source): source for source in sources}
        for index, future in enumerate(concurrent.futures.as_completed(futures), start=1):
            source = futures[future]
            try:
                path = future.result()
                ingested.append(path)
                if index <= 10 or index % 50 == 0 or index == len(sources):
                    print(f"[{index}/{len(sources)}] {source.url} -> {path.relative_to(ROOT)}")
            except Exception as exc:  # noqa: BLE001
                errors += 1
                print(f"[WARN] failed {source.url}: {exc}")

    print(f"[INFO] completed {len(ingested)} ingested, {errors} failed")


if __name__ == "__main__":
    main()
