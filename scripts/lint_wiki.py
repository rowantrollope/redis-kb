#!/usr/bin/env python3
"""Lightweight wiki lint checks."""

from __future__ import annotations

import pathlib
import re
import sys

ROOT = pathlib.Path(__file__).resolve().parents[1]
WIKI = ROOT / "wiki"


def markdown_files() -> list[pathlib.Path]:
    return sorted(WIKI.rglob("*.md"))


def check_frontmatter(path: pathlib.Path, text: str) -> list[str]:
    if path.name in {"index.md", "log.md"}:
        return []
    if not text.startswith("---\n"):
        return ["missing frontmatter"]
    return []


def check_links(path: pathlib.Path, text: str) -> list[str]:
    issues = []
    for match in re.finditer(r"\((wiki/[^)]+\.md)\)", text):
        target = ROOT / match.group(1)
        if not target.exists():
            issues.append(f"broken relative link: {match.group(1)}")
    return issues


def main() -> None:
    all_issues = []
    for path in markdown_files():
        text = path.read_text(errors="ignore")
        issues = check_frontmatter(path, text) + check_links(path, text)
        for issue in issues:
            all_issues.append((path, issue))

    if all_issues:
        for path, issue in all_issues:
            print(f"[WARN] {path.relative_to(ROOT)}: {issue}")
        sys.exit(1)

    print("Wiki lint passed")


if __name__ == "__main__":
    main()
