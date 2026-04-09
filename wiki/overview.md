---
title: "Redis SRE Knowledge Base Overview"
last_updated: 2026-04-09
tags: [overview, redis, sre]
source_count: 2324
---

# Redis SRE Knowledge Base

This wiki is intended to support a future `redis-sre-agent` by keeping durable operational knowledge.

## Coverage snapshot
- **cluster**: 1009 source-backed sections.
- **operations**: 143 source-backed sections.
- **performance**: 407 source-backed sections.
- **persistence**: 511 source-backed sections.
- **resilience**: 1947 source-backed sections.
- **security**: 1176 source-backed sections.
- **sentinels**: 239 source-backed sections.
- **troubleshooting**: 1018 source-backed sections.

## Workflow
1. Add/refresh sources in `raw/source_catalog.yaml`.
2. Run ingestion (`collect_sources.py`).
3. Rebuild wiki (`build_wiki.py`).
4. Lint links and structure (`lint_wiki.py`).

## Search
- Preferred: qmd hybrid search (when installed).
- Fallback: `rg -n "<term>" wiki raw`.
