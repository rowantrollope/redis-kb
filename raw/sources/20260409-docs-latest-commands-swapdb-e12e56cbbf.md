---
title: SWAPDB
url: https://redis.io/docs/latest/commands/swapdb/
retrieved_utc: '2026-04-09T20:45:33.943200+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/swapdb/index.html.md
---

# SWAPDB

```json metadata
{
  "title": "SWAPDB",
  "description": "Swaps two Redis databases.",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"display_text":"index1","name":"index1","type":"integer"},{"display_text":"index2","name":"index2","type":"integer"}],
  "syntax_fmt": "SWAPDB index1 index2",
  "complexity": "O(N) where N is the count of clients watching or blocking on keys from both databases.",
  "group": "server",
  "command_flags": ["write","fast"],
  "acl_categories": ["@keyspace","@write","@fast","@dangerous"],
  "since": "4.0.0",
  "arity": 3,
  "tableOfContents": {"sections":[{"id":"examples","title":"Examples"},{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": []
}
```This command swaps two Redis databases, so that immediately all the
clients connected to a given database will see the data of the other database, and
the other way around. Example:

    SWAPDB 0 1

This will swap database 0 with database 1. All the clients connected with database 0 will immediately see the new data, exactly like all the clients connected with database 1 will see the data that was formerly of database 0.

## Examples

```
SWAPDB 0 1
```

## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Not supported">&#x274c; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> | <span title="Not supported">&#x274c; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> |  |

## Return information

**RESP2:**

[Simple string reply](../../develop/reference/protocol-spec#simple-strings): `OK`.

**RESP3:**

[Simple string reply](../../develop/reference/protocol-spec#simple-strings): `OK`.


