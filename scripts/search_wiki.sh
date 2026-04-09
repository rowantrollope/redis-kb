#!/usr/bin/env bash
set -euo pipefail

QUERY=${1:-}
if [[ -z "$QUERY" ]]; then
  echo "usage: scripts/search_wiki.sh \"query\""
  exit 1
fi

if command -v qmd >/dev/null 2>&1; then
  qmd search "$QUERY"
else
  rg -n "$QUERY" wiki raw || true
fi
