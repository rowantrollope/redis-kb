.PHONY: setup python-setup frontend-setup ingest build lint wiki frontend frontend-build

VENV := .venv
PYTHON := $(VENV)/bin/python
PIP := $(VENV)/bin/pip
PORT ?= 3010
HOST ?= 127.0.0.1

setup: python-setup frontend-setup

python-setup:
	test -d $(VENV) || python3 -m venv $(VENV)
	$(PIP) install -r requirements.txt

frontend-setup:
	cd frontend && npm install

ingest: python-setup
	$(PYTHON) scripts/collect_sources.py --limit 8

build: python-setup
	$(PYTHON) scripts/build_wiki.py

lint: python-setup
	$(PYTHON) scripts/lint_wiki.py

wiki: ingest build lint

frontend-build: frontend-setup
	cd frontend && npm run build

frontend: frontend-setup
	cd frontend && npm run dev -- --hostname $(HOST) --port $(PORT)
