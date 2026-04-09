# redis-kb

Personal Redis management LLM wiki, inspired by Karpathy's `llm-wiki` pattern.

## Goals

- Build a durable knowledge base for Redis SRE workflows (setup, scaling, failover, incidents, performance tuning).
- Preserve immutable raw sources and generated wiki pages separately.
- Keep the wiki incrementally maintainable for a future `redis-sre-agent`.
- Provide a local frontend (Next.js + Tailwind, shadcn-style cards) for browsing/search.

## Repository layout

- `raw/source_catalog.yaml` — curated source inventory.
- `raw/sources/*.md` — fetched raw documents.
- `wiki/` — generated and maintained synthesized markdown wiki.
- `scripts/collect_sources.py` — source ingestion scraper.
- `scripts/build_wiki.py` — synthesis/index/log generation.
- `scripts/lint_wiki.py` — structure/link/frontmatter checks.
- `frontend/` — local UI.

## Quickstart

```bash
python3 -m pip install -r requirements.txt
python3 scripts/collect_sources.py --limit 8
python3 scripts/build_wiki.py
python3 scripts/lint_wiki.py
```

Then run the frontend:

```bash
cd frontend
npm install
npm run dev
```

## qmd integration (recommended)

`qmd` is recommended as the local markdown search engine as the wiki grows.

### Install qmd (example)

Follow official instructions from: <https://github.com/julio-pix/qmd>

### Example usage

```bash
# from repo root
qmd index wiki raw/sources
qmd search "redis sentinel quorum split brain"
```

If qmd is unavailable, use fallback grep:

```bash
rg -n "sentinel|failover|latency|oom" wiki raw
```

## Notes on current environment

Some source domains may reject scraping from constrained environments (proxy/CDN restrictions). The ingest script records warnings and continues where possible so you can keep building incrementally.
