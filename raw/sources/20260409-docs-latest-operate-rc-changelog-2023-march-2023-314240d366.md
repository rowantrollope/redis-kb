---
title: Redis Cloud changelog (March 2023)
url: https://redis.io/docs/latest/operate/rc/changelog/2023/march-2023/
retrieved_utc: '2026-04-09T20:46:00.128594+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rc/changelog/2023/march-2023/index.html.md
---

# Redis Cloud changelog (March 2023)

```json metadata
{
  "title": "Redis Cloud changelog (March 2023)",
  "description": "New features, enhancements, and other changes added to Redis Cloud during March 2023.",
  "categories": ["docs","operate","rc"],
  "tableOfContents": {"sections":[{"children":[{"id":"redis-70-preview","title":"Redis 7.0 preview"}],"id":"new-features-and-enhancements","title":"New features and enhancements"},{"id":"breaking-changes","title":"Breaking changes"},{"id":"deprecations","title":"Deprecations"}]}

,
  "codeExamples": []
}
```
This changelog lists new features, enhancements, and other changes added to Redis Cloud during March 2023.

## New features and enhancements

### Redis 7.0 preview

A preview of Redis 7.0 is available for [Fixed subscriptions]() in selected regions in AWS and GCP. However, some Redis 7.0 functionality might not be fully available during preview. Redis 7.0 also introduces several changes to existing Redis commands; see the [list of breaking changes](#redis-70-breaking-changes) for more details.

The following tables show which new open source Redis 7.0 commands are supported in Redis 7.0 subscriptions.

#### [Cluster management commands](?group=cluster)

| <span style="min-width: 10em; display: table-cell">Command</span> | Supported |
|:--------|:----------|
| [CLUSTER ADDSLOTSRANGE]() | <span title="Not supported">&#x274c; Not supported</span> |
| [CLUSTER DELSLOTSRANGE]() | <span title="Not supported">&#x274c; Not supported</span> |
| [CLUSTER LINKS]() | <span title="Not supported">&#x274c; Not supported</span> |
| [CLUSTER SHARDS]() | <span title="Not supported">&#x274c; Not supported</span> |

#### [Connection management commands](?group=connection)

| <span style="min-width: 10em; display: table-cell">Command</span> | Supported |
|:--------|:----------|
| [CLIENT NO-EVICT]() | <span title="Not supported">&#x274c; Not supported</span> |

#### Data type commands

| Data type | Command | Supported |
|:----------|:--------|:----------|
| [List](?group=list) | [BLMPOP]() | <span title="Supported">&#x2705; Supported</span>|
| [List](?group=list) | [LMPOP]() | <span title="Supported">&#x2705; Supported</span>|
| [Set](?group=set) | [SINTERCARD]() | <span title="Supported">&#x2705; Supported</span>|
| [Sorted set](?group=sorted-set) | [BZMPOP]() | <span title="Supported">&#x2705; Supported</span>|
| [Sorted set](?group=sorted-set) | [ZINTERCARD]() | <span title="Supported">&#x2705; Supported</span>|
| [Sorted set](?group=sorted-set) | [BZMPOP]() | <span title="Supported">&#x2705; Supported</span>|

#### [Keys (generic) commands](?group=generic)

| <span style="min-width: 10em; display: table-cell">Command</span> | Supported |
|:--------|:----------|
| [EXPIRETIME]() | <span title="Supported">&#x2705; Supported</span>|
| [PEXPIRETIME]() | <span title="Supported">&#x2705; Supported</span>|
| [SORT_RO]() | <span title="Supported">&#x2705; Supported</span>|

#### [Pub/sub commands](?group=pubsub)

| <span style="min-width: 10em; display: table-cell">Command</span> | Supported |
|:--------|:----------|
| [PUBSUB SHARDCHANNELS]() | <span title="Supported">&#x2705; Supported</span>|
| [PUBSUB SHARDNUMSUB]() | <span title="Supported">&#x2705; Supported</span>|
| [SPUBLISH]() | <span title="Not supported">&#x274c; Not supported</span> |
| [SSUBSCRIBE]() | <span title="Not supported">&#x274c; Not supported</span> |
| [SUNSUBSCRIBE]() | <span title="Not supported">&#x274c; Not supported</span> |

#### [Scripting and function commands](?group=scripting)

| <span style="min-width: 10em; display: table-cell">Command</span> | Supported |
|:--------|:----------|
| [EVAL_RO]() | <span title="Not supported">&#x274c; Not supported</span> |
| [EVALSHA_RO]() | <span title="Not supported">&#x274c; Not supported</span> |
| [FUNCTION DELETE]() | <span title="Supported">&#x2705; Supported</span>|
| [FUNCTION DUMP]() | <span title="Supported">&#x2705; Supported</span>|
| [FUNCTION FLUSH]() | <span title="Supported">&#x2705; Supported</span>|
| [FUNCTION HELP]() | <span title="Supported">&#x2705; Supported</span>|
| [FUNCTION KILL]() | <span title="Supported">&#x2705; Supported</span>|
| [FUNCTION LIST]() | <span title="Supported">&#x2705; Supported</span>|
| [FUNCTION LOAD]() | <span title="Supported">&#x2705; Supported</span>|
| [FUNCTION RESTORE]() | <span title="Supported">&#x2705; Supported</span>|
| [FUNCTION STATS]() | <span title="Not supported">&#x274c; Not supported</span> |

#### [Server management commands](?group=server)

| <span style="min-width: 10em; display: table-cell">Command</span> | Supported |
|:--------|:----------|
| [ACL DRYRUN]() | <span title="Not supported">&#x274c; Not supported</span> |
| [COMMAND DOCS]() | <span title="Supported">&#x2705; Supported</span>|
| [COMMAND GETKEYSANDFLAGS]() | <span title="Supported">&#x2705; Supported</span>|
| [COMMAND LIST]() | <span title="Supported">&#x2705; Supported</span>|
| [MODULE LOADEX]() | <span title="Not supported">&#x274c; Not supported</span> |
| [LATENCY HISTOGRAM]() | <span title="Not supported">&#x274c; Not supported</span> |

## Breaking changes



## Deprecations

- [`CLUSTER SLOTS`]() is deprecated as of Redis 7.0
