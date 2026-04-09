---
title: redis-di delete-all-contexts
url: https://redis.io/docs/latest/integrate/redis-data-integration/reference/cli/redis-di-delete-all-contexts/
retrieved_utc: '2026-04-09T20:45:54.563721+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/integrate/redis-data-integration/reference/cli/redis-di-delete-all-contexts/index.html.md
---

# redis-di delete-all-contexts

```json metadata
{
  "title": "redis-di delete-all-contexts",
  "description": "Deletes all contexts",
  "categories": ["redis-di"],
  "tableOfContents": {"sections":[{"id":"usage","title":"Usage"},{"id":"options","title":"Options"},{"id":"cli-help","title":"CLI help"}]}

,
  "codeExamples": []
}
```
## Usage

```
Usage: redis-di delete-all-contexts [OPTIONS]
```

## Options

- `log_level`:
  - Type: Choice(['TRACE', 'DEBUG', 'INFO', 'WARNING', 'ERROR', 'CRITICAL'])
  - Default: `info`
  - Usage: `--log-level
-l`

- `force`:
  - Type: BOOL
  - Default: `false`
  - Usage: `--force
-f`

  Force operation. Skips verification prompts

- `help`:
  - Type: BOOL
  - Default: `false`
  - Usage: `--help`

  Show this message and exit.

## CLI help

```
Usage: redis-di delete-all-contexts [OPTIONS]

  Deletes all contexts

Options:
  -l, --log-level [TRACE|DEBUG|INFO|WARNING|ERROR|CRITICAL]
                                  [default: INFO]
  -f, --force                     Force operation. Skips verification prompts
  --help                          Show this message and exit.
```
