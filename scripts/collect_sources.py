#!/usr/bin/env python3
"""Collect Redis SRE sources into raw/sources.

Supports:
- Bulk ingest from raw/source_catalog.yaml
- Filtering by tag
- Ingesting one-off URLs
"""

from __future__ import annotations

import argparse
import datetime as dt
import pathlib
import re
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


def slugify(value: str) -> str:
    value = value.strip().lower()
    value = re.sub(r"[^a-z0-9]+", "-", value)
    return value.strip("-")[:80]


def load_catalog(path: pathlib.Path) -> list[Source]:
    payload = yaml.safe_load(path.read_text())
    return [Source(**item) for item in payload.get("sources", [])]


def fetch_markdown(url: str, timeout: int = 25) -> str:
    response = requests.get(url, timeout=timeout, headers={"User-Agent": "redis-kb-bot/1.0"})
    response.raise_for_status()
    soup = BeautifulSoup(response.text, "html.parser")

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


def save_source(source: Source) -> pathlib.Path:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    stamp = dt.datetime.now(dt.UTC).strftime("%Y%m%d")
    filename = f"{stamp}-{slugify(source.title)}.md"
    path = OUT_DIR / filename
    content = fetch_markdown(source.url)

    frontmatter = (
        "---\n"
        f"title: \"{source.title}\"\n"
        f"url: \"{source.url}\"\n"
        f"retrieved_utc: \"{dt.datetime.now(dt.UTC).isoformat()}\"\n"
        f"tags: {source.tags}\n"
        "---\n\n"
    )
    path.write_text(frontmatter + content)
    return path


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--limit", type=int, default=5)
    parser.add_argument("--tag", type=str)
    parser.add_argument("--url", type=str, help="One-off URL to ingest")
    parser.add_argument("--title", type=str, default="ad-hoc source")
    args = parser.parse_args()

    ingested: list[pathlib.Path] = []

    if args.url:
        ingested.append(save_source(Source(title=args.title, url=args.url, tags=["ad-hoc"])))
    else:
        sources = load_catalog(CATALOG)
        if args.tag:
            sources = [s for s in sources if args.tag in s.tags]
        for source in sources[: args.limit]:
            try:
                ingested.append(save_source(source))
            except Exception as exc:  # noqa: BLE001
                print(f"[WARN] failed {source.url}: {exc}")

    for path in ingested:
        print(path.relative_to(ROOT))


if __name__ == "__main__":
    main()
