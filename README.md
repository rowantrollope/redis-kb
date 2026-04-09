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
make setup
make wiki
```

Then run the frontend:

```bash
make frontend
```

The default frontend port is `3010` so it does not collide with common local services on `3000`.
The development server uses webpack mode because Turbopack currently mis-resolves Tailwind when the app reads wiki files from outside `frontend/`.
Override it if needed:

```bash
make frontend PORT=3020
```

If you prefer the underlying commands directly, use the repo-local virtualenv instead of the system Python:

```bash
python3 -m venv .venv
./.venv/bin/pip install -r requirements.txt
./.venv/bin/python scripts/collect_sources.py --limit 8
./.venv/bin/python scripts/build_wiki.py
./.venv/bin/python scripts/lint_wiki.py
cd frontend
npm install
npm run dev -- --hostname 127.0.0.1 --port 3010
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
