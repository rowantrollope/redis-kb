---
title: "Redis SRE Knowledge Base Overview"
last_updated: 2026-04-08
tags: [overview, redis, sre]
source_count: 3
---

# Redis SRE Knowledge Base

This wiki is intended to support a future `redis-sre-agent` by keeping durable operational knowledge.

## Coverage snapshot
- **operations**: 1 source-backed sections.
- **performance**: 2 source-backed sections.
- **resilience**: 1 source-backed sections.
- **security**: 1 source-backed sections.

## Workflow
1. Add/refresh sources in `raw/source_catalog.yaml`.
2. Run ingestion (`collect_sources.py`).
3. Rebuild wiki (`build_wiki.py`).
4. Lint links and structure (`lint_wiki.py`).

## Search
- Preferred: qmd hybrid search (when installed).
- Fallback: `rg -n "<term>" wiki raw`.
