# Redis LLM Wiki Operating Schema

This repository follows the LLM wiki pattern from Karpathy's `llm-wiki.md`.

## Directory contract
- `raw/` contains immutable source material (scraped pages, notes, logs, configs, benchmark outputs).
- `wiki/` contains LLM-maintained synthesized knowledge in Markdown.
- `scripts/` contains ingestion/lint/index tooling.
- `frontend/` contains a local UI for browsing and searching the wiki.

## Ingest workflow (required)
1. Add source URL to `raw/source_catalog.yaml`.
2. Run `python3 scripts/collect_sources.py` (with optional `--limit`, `--tag`, `--url`).
3. Run `python3 scripts/build_wiki.py` to refresh overview/index/topic pages.
4. Run `python3 scripts/lint_wiki.py` and resolve issues if severe.
5. Append a dated entry to `wiki/log.md`.

## Authoring conventions
- Every wiki page should include YAML frontmatter with `title`, `last_updated`, `tags`, `source_count`.
- Prefer cross-links (`[[Page Name]]`) between operational topics.
- Preserve uncertainty explicitly; do not state unverified claims as facts.

## Search
- Primary local search should use qmd if installed.
- Fallback search command: `rg -n "<query>" wiki raw`.

## Safety
- Never delete files under `raw/sources` during normal updates.
- Treat `raw/incident_samples` and `raw/config_samples` as red-zone folders that may contain sensitive data.
