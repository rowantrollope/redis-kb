---
title: BITFIELD_RO
url: https://redis.io/docs/latest/commands/bitfield_ro/
retrieved_utc: '2026-04-09T20:46:02.220906+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/bitfield_ro/index.html.md
---

# BITFIELD_RO

```json metadata
{
  "title": "BITFIELD_RO",
  "description": "Performs arbitrary read-only bitfield integer operations on strings.",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"display_text":"key","key_spec_index":0,"name":"key","type":"key"},{"arguments":[{"display_text":"encoding","name":"encoding","type":"string"},{"display_text":"offset","name":"offset","type":"integer"}],"multiple":true,"multiple_token":true,"name":"get-block","optional":true,"token":"GET","type":"block"}],
  "syntax_fmt": "BITFIELD_RO key [GETÂ encoding offset [GET encoding offset ...]]",
  "complexity": "O(1) for each subcommand specified",
  "group": "bitmap",
  "command_flags": ["readonly","fast"],
  "acl_categories": ["@read","@bitmap","@fast"],
  "since": "6.0.0",
  "arity": -2,
  "key_specs": [{"RO":true,"access":true,"begin_search":{"spec":{"index":1},"type":"index"},"find_keys":{"spec":{"keystep":1,"lastkey":0,"limit":0},"type":"range"}}],
  "tableOfContents": {"sections":[{"id":"examples","title":"Examples"},{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": []
}
```Read-only variant of the [`BITFIELD`]() command.
It is like the original [`BITFIELD`]() but only accepts `GET` subcommand and can safely be used in read-only replicas.

Since the original [`BITFIELD`]() has `SET` and `INCRBY` options it is technically flagged as a writing command in the Redis command table.
For this reason read-only replicas in a Redis Cluster will redirect it to the master instance even if the connection is in read-only mode (see the [`READONLY`]() command of Redis Cluster).

Since Redis 6.2, the `BITFIELD_RO` variant was introduced in order to allow [`BITFIELD`]() behavior in read-only replicas without breaking compatibility on command flags.

See original [`BITFIELD`]() for more details.

## Examples

```
BITFIELD_RO hello GET i8 16
```

## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |

## Return information

**RESP2:**

[Array reply](../../develop/reference/protocol-spec#arrays): each entry being the corresponding result of the sub-command given at the same position.

**RESP3:**

[Array reply](../../develop/reference/protocol-spec#arrays): each entry being the corresponding result of the sub-command given at the same position.


