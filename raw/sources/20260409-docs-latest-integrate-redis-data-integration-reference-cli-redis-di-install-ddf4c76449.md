---
title: redis-di install
url: https://redis.io/docs/latest/integrate/redis-data-integration/reference/cli/redis-di-install/
retrieved_utc: '2026-04-09T20:45:54.646918+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/integrate/redis-data-integration/reference/cli/redis-di-install/index.html.md
---

# redis-di install

```json metadata
{
  "title": "redis-di install",
  "description": "Installs RDI",
  "categories": ["redis-di"],
  "tableOfContents": {"sections":[{"id":"usage","title":"Usage"},{"id":"options","title":"Options"},{"id":"cli-help","title":"CLI help"}]}

,
  "codeExamples": []
}
```
## Usage

```
Usage: redis-di install [OPTIONS]
```

## Options

- `log_level`:
  - Type: Choice(['TRACE', 'DEBUG', 'INFO', 'WARNING', 'ERROR', 'CRITICAL'])
  - Default: `warning`
  - Usage: `--log-level
-l`

- `file`:
  - Type: <click.types.Path object>
  - Default: `none`
  - Usage: `-f
--file`

  Path to a YAML configuration file for silent installation

- `online`:
  - Type: BOOL
  - Default: `false`
  - Usage: `--online`

  Run installer in online mode

- `k3s_only`:
  - Type: BOOL
  - Default: `false`
  - Usage: `--k3s-only`

  Install only k3s components

- `https_port`:
  - Type: INT
  - Default: `443`
  - Usage: `--https-port`

  HTTPS port for Traefik

- `installation_dir`:
  - Type: <click.types.Path object>
  - Default: `none`
  - Usage: `--installation-dir`

  Custom installation directory

- `help`:
  - Type: BOOL
  - Default: `false`
  - Usage: `--help`

  Show this message and exit.

## CLI help

```
Usage: redis-di install [OPTIONS]

  Installs RDI

Options:
  -l, --log-level [TRACE|DEBUG|INFO|WARNING|ERROR|CRITICAL]
                                  [default: WARNING]
  -f, --file FILE                 Path to a YAML configuration file for silent
                                  installation
  --installation-dir DIRECTORY    Custom installation directory
  --help                          Show this message and exit.
```
