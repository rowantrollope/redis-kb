---
title: redis-di upgrade
url: https://redis.io/docs/latest/integrate/redis-data-integration/reference/cli/redis-di-upgrade/
retrieved_utc: '2026-04-09T20:45:54.788838+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/integrate/redis-data-integration/reference/cli/redis-di-upgrade/index.html.md
---

# redis-di upgrade

```json metadata
{
  "title": "redis-di upgrade",
  "description": "Upgrades RDI without losing data or downtime",
  "categories": ["redis-di"],
  "tableOfContents": {"sections":[{"id":"usage","title":"Usage"},{"id":"options","title":"Options"},{"id":"cli-help","title":"CLI help"}]}

,
  "codeExamples": []
}
```
## Usage

```
Usage: redis-di upgrade [OPTIONS]
```

## Options

- `log_level`:
  - Type: Choice(['TRACE', 'DEBUG', 'INFO', 'WARNING', 'ERROR', 'CRITICAL'])
  - Default: `info`
  - Usage: `--log-level
-l`

- `rdi_namespace`:
  - Type: STRING
  - Default: `rdi`
  - Usage: `--rdi-namespace`

  RDI Kubernetes namespace

- `rdi_host` (REQUIRED):
  - Type: STRING
  - Default: `none`
  - Usage: `--rdi-host`

  Host/IP of RDI Database

- `rdi_port` (REQUIRED):
  - Type: <IntRange 1<=x<=65535>
  - Default: `none`
  - Usage: `--rdi-port`

  Port of RDI Database

- `rdi_user`:
  - Type: STRING
  - Default: `none`
  - Usage: `--rdi-user`

  RDI Database Username

- `rdi_password`:
  - Type: STRING
  - Default: `none`
  - Usage: `--rdi-password`

  RDI Database Password

- `rdi_key`:
  - Type: STRING
  - Default: `none`
  - Usage: `--rdi-key`

  Private key file to authenticate with

- `rdi_cert`:
  - Type: STRING
  - Default: `none`
  - Usage: `--rdi-cert`

  Client certificate file to authenticate with

- `rdi_cacert`:
  - Type: STRING
  - Default: `none`
  - Usage: `--rdi-cacert`

  CA certificate file to verify with

- `rdi_key_password`:
  - Type: STRING
  - Default: `none`
  - Usage: `--rdi-key-password`

  Password for unlocking an encrypted private key

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
Usage: redis-di upgrade [OPTIONS]

  Upgrades RDI without losing data or downtime

Options:
  -l, --log-level [TRACE|DEBUG|INFO|WARNING|ERROR|CRITICAL]
                                  [default: INFO]
  --rdi-namespace TEXT            RDI Kubernetes namespace  [default: rdi]
  --rdi-host TEXT                 Host/IP of RDI Database  [required]
  --rdi-port INTEGER RANGE        Port of RDI Database  [1<=x<=65535;
                                  required]
  --rdi-user TEXT                 RDI Database Username
  --rdi-password TEXT             RDI Database Password
  --rdi-key TEXT                  Private key file to authenticate with
  --rdi-cert TEXT                 Client certificate file to authenticate with
  --rdi-cacert TEXT               CA certificate file to verify with
  --rdi-key-password TEXT         Password for unlocking an encrypted private
                                  key
  -f, --force                     Force operation. Skips verification prompts
  --help                          Show this message and exit.
```
