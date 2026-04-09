---
title: redis-di set-context
url: https://redis.io/docs/latest/integrate/redis-data-integration/reference/cli/redis-di-set-context/
retrieved_utc: '2026-04-09T20:45:54.709750+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/integrate/redis-data-integration/reference/cli/redis-di-set-context/index.html.md
---

# redis-di set-context

```json metadata
{
  "title": "redis-di set-context",
  "description": "Sets a context to be the active one",
  "categories": ["redis-di"],
  "tableOfContents": {"sections":[{"id":"usage","title":"Usage"},{"id":"options","title":"Options"},{"id":"cli-help","title":"CLI help"}]}

,
  "codeExamples": []
}
```
## Usage

```
Usage: redis-di set-context [OPTIONS] CONTEXT_NAME
```

## Options

- `log_level`:
  - Type: Choice(['TRACE', 'DEBUG', 'INFO', 'WARNING', 'ERROR', 'CRITICAL'])
  - Default: `info`
  - Usage: `--log-level
-l`

- `context_name` (REQUIRED):
  - Type: STRING
  - Default: `none`
  - Usage: `context-name`

- `help`:
  - Type: BOOL
  - Default: `false`
  - Usage: `--help`

  Show this message and exit.

## CLI help

```
Usage: redis-di set-context [OPTIONS] CONTEXT_NAME

  Sets a context to be the active one

Options:
  -l, --log-level [TRACE|DEBUG|INFO|WARNING|ERROR|CRITICAL]
                                  [default: INFO]
  --help                          Show this message and exit.
```
