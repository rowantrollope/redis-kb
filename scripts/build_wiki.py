#!/usr/bin/env python3
"""Build synthesized wiki artifacts from raw sources."""

from __future__ import annotations

import datetime as dt
import pathlib
from collections import defaultdict

import yaml

ROOT = pathlib.Path(__file__).resolve().parents[1]
RAW_SOURCES = ROOT / "raw" / "sources"
WIKI = ROOT / "wiki"
PAGES = WIKI / "pages"
INDEX = WIKI / "index.md"
LOG = WIKI / "log.md"
OVERVIEW = WIKI / "overview.md"

TOPIC_RULES = {
    "cluster": ["cluster", "slot", "reshard", "gossip"],
    "sentinels": ["sentinel", "failover", "quorum"],
    "performance": ["latency", "throughput", "pipeline", "benchmark"],
    "resilience": ["backup", "restore", "ha", "availability", "recovery"],
    "persistence": ["aof", "rdb", "persistence"],
    "security": ["tls", "acl", "auth", "security"],
    "troubleshooting": ["incident", "troubleshoot", "debug", "error", "timeout"],
}


def read_sources() -> list[pathlib.Path]:
    return sorted(RAW_SOURCES.glob("*.md"))


def parse_source(path: pathlib.Path) -> tuple[str, str, list[str]]:
    text = path.read_text(errors="ignore")
    if text.startswith("---"):
        parts = text.split("---", 2)
        if len(parts) == 3:
            metadata = yaml.safe_load(parts[1]) or {}
            title = metadata.get("title") or path.stem
            tags = metadata.get("tags") or []
            return title, parts[2], tags
    return path.stem, text, []


def classify(text: str) -> set[str]:
    t = text.lower()
    topics = set()
    for topic, needles in TOPIC_RULES.items():
        if any(n in t for n in needles):
            topics.add(topic)
    if not topics:
        topics.add("operations")
    return topics


def summarize(text: str, max_lines: int = 12) -> list[str]:
    lines = []
    in_code_block = False
    for raw in text.splitlines():
        line = raw.strip()
        if line.startswith("```"):
            in_code_block = not in_code_block
            continue
        if in_code_block:
            continue
        if len(line) < 40:
            continue
        if line.startswith(("#", "-", "`")):
            continue
        lines.append(line)
        if len(lines) >= max_lines:
            break
    return lines


def write_topic_pages(topic_map: dict[str, list[tuple[str, pathlib.Path, list[str]]]]) -> None:
    for topic, items in topic_map.items():
        path = PAGES / topic / f"{topic}-digest.md"
        path.parent.mkdir(parents=True, exist_ok=True)
        stamp = dt.date.today().isoformat()
        chunks = [
            "---",
            f'title: "{topic.title()} Digest"',
            f"last_updated: " + stamp,
            f"tags: [{topic}, digest]",
            f"source_count: {len(items)}",
            "---",
            "",
            f"# {topic.title()} Digest",
            "",
            "Auto-compiled synthesis from raw sources.",
            "",
        ]
        for title, src_path, points in items:
            chunks.append(f"## {title}")
            chunks.append(f"Source file: `{src_path.relative_to(ROOT)}`")
            for p in points[:5]:
                chunks.append(f"- {p}")
            chunks.append("")

        path.write_text("\n".join(chunks))


def write_index(topic_map: dict[str, list[tuple[str, pathlib.Path, list[str]]]], source_count: int) -> None:
    stamp = dt.date.today().isoformat()
    lines = [
        "# Redis SRE LLM Wiki Index",
        "",
        f"Last updated: {stamp}",
        f"Total raw sources: {source_count}",
        "",
        "## Topic pages",
    ]
    for topic in sorted(topic_map):
        path = f"wiki/pages/{topic}/{topic}-digest.md"
        lines.append(f"- [{topic.title()} Digest]({path}) — synthesized operational notes.")

    INDEX.write_text("\n".join(lines) + "\n")


def write_overview(topic_map: dict[str, list[tuple[str, pathlib.Path, list[str]]]], source_count: int) -> None:
    stamp = dt.date.today().isoformat()
    lines = [
        "---",
        'title: "Redis SRE Knowledge Base Overview"',
        f"last_updated: {stamp}",
        "tags: [overview, redis, sre]",
        f"source_count: {source_count}",
        "---",
        "",
        "# Redis SRE Knowledge Base",
        "",
        "This wiki is intended to support a future `redis-sre-agent` by keeping durable operational knowledge.",
        "",
        "## Coverage snapshot",
    ]
    for topic, items in sorted(topic_map.items()):
        lines.append(f"- **{topic}**: {len(items)} source-backed sections.")

    lines.extend(
        [
            "",
            "## Workflow",
            "1. Add/refresh sources in `raw/source_catalog.yaml`.",
            "2. Run ingestion (`collect_sources.py`).",
            "3. Rebuild wiki (`build_wiki.py`).",
            "4. Lint links and structure (`lint_wiki.py`).",
            "",
            "## Search",
            "- Preferred: qmd hybrid search (when installed).",
            "- Fallback: `rg -n \"<term>\" wiki raw`.",
        ]
    )
    OVERVIEW.write_text("\n".join(lines) + "\n")


def append_log(source_count: int) -> None:
    LOG.parent.mkdir(parents=True, exist_ok=True)
    if not LOG.exists():
        LOG.write_text("# Redis KB Log\n\n")
    stamp = dt.datetime.now(dt.UTC).strftime("%Y-%m-%d")
    with LOG.open("a") as f:
        f.write(f"## [{stamp}] build | automated refresh\n")
        f.write(f"- Rebuilt wiki digests from {source_count} raw source files.\n")
        f.write("- Refreshed index and overview pages.\n\n")


def main() -> None:
    sources = read_sources()
    topic_map: dict[str, list[tuple[str, pathlib.Path, list[str]]]] = defaultdict(list)

    for path in sources:
        title, body, tags = parse_source(path)
        top_points = summarize(body)
        text_for_classification = "\n".join([title, " ".join(tags), body])
        for topic in classify(text_for_classification):
            topic_map[topic].append((title, path, top_points))

    write_topic_pages(topic_map)
    write_index(topic_map, len(sources))
    write_overview(topic_map, len(sources))
    append_log(len(sources))
    print(f"Generated topics: {', '.join(sorted(topic_map))}")


if __name__ == "__main__":
    main()
