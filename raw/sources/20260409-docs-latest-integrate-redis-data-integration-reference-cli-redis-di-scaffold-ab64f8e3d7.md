---
title: redis-di scaffold
url: https://redis.io/docs/latest/integrate/redis-data-integration/reference/cli/redis-di-scaffold/
retrieved_utc: '2026-04-09T20:45:54.701150+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/integrate/redis-data-integration/reference/cli/redis-di-scaffold/index.html.md
---

# redis-di scaffold

```json metadata
{
  "title": "redis-di scaffold",
  "description": "Generates configuration files for RDI",
  "categories": ["redis-di"],
  "tableOfContents": {"sections":[{"id":"usage","title":"Usage"},{"id":"options","title":"Options"},{"id":"cli-help","title":"CLI help"}]}

,
  "codeExamples": []
}
```
## Usage

```
Usage: redis-di scaffold [OPTIONS]
```

## Options

- `log_level`:
  - Type: Choice(['TRACE', 'DEBUG', 'INFO', 'WARNING', 'ERROR', 'CRITICAL'])
  - Default: `info`
  - Usage: `--log-level
-l`

- `db_type` (REQUIRED):
  - Type: Choice([<DbType.CASSANDRA: 'cassandra'>, <DbType.MARIADB: 'mariadb'>, <DbType.MONGODB: 'mongodb'>, <DbType.MYSQL: 'mysql'>, <DbType.ORACLE: 'oracle'>, <DbType.POSTGRESQL: 'postgresql'>, <DbType.SQLSERVER: 'sqlserver'>, <DbType.SPANNER: 'spanner'>])
  - Default: `none`
  - Usage: `--db-type`

  DB type

- `db_flavor`:
  - Type: Choice([<DbFlavor.MONGODB_ATLAS: 'mongodb-atlas'>, <DbFlavor.MONGODB_REPLICA_SET: 'mongodb-replica-set'>, <DbFlavor.MONGODB_SHARDED_CLUSTER: 'mongodb-sharded-cluster'>])
  - Default: `none`
  - Usage: `--db-flavor`

  DB flavor

  Output to directory or stdout

- `directory`:
  - Type: STRING
  - Default: `none`
  - Usage: `--dir`

  Directory containing RDI configuration

- `preview`:
  - Type: STRING
  - Default: `none`
  - Usage: `--preview`

  Print the content of the scaffolded config file to CLI output

- `help`:
  - Type: BOOL
  - Default: `false`
  - Usage: `--help`

  Show this message and exit.

## CLI help

```
Usage: redis-di scaffold [OPTIONS]

  Generates configuration files for RDI

Options:
  -l, --log-level [TRACE|DEBUG|INFO|WARNING|ERROR|CRITICAL]
                                  [default: INFO]
  --db-type [cassandra|mariadb|mongodb|mysql|oracle|postgresql|sqlserver|spanner]
                                  DB type  [required]
  --db-flavor [mongodb-atlas|mongodb-replica-set|mongodb-sharded-cluster]
                                  DB flavor
  Output formats: [mutually_exclusive, required]
                                  Output to directory or stdout
    --dir TEXT                    Directory containing RDI configuration
    --preview TEXT                Print the content of the scaffolded config
                                  file to CLI output
  --help                          Show this message and exit.
```
