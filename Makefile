.PHONY: ingest build lint wiki frontend

ingest:
	python3 scripts/collect_sources.py --limit 8

build:
	python3 scripts/build_wiki.py

lint:
	python3 scripts/lint_wiki.py

wiki: ingest build lint

frontend:
	cd frontend && npm run dev
