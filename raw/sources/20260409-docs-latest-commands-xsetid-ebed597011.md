---
title: XSETID
url: https://redis.io/docs/latest/commands/xsetid/
retrieved_utc: '2026-04-09T20:45:38.397405+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/xsetid/index.html.md
---

# XSETID

```json metadata
{
  "title": "XSETID",
  "description": "An internal command for replicating stream values.",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"display_text":"key","key_spec_index":0,"name":"key","type":"key"},{"display_text":"last-id","name":"last-id","type":"string"},{"display_text":"entries-added","name":"entries-added","optional":true,"since":"7.0.0","token":"ENTRIESADDED","type":"integer"},{"display_text":"max-deleted-id","name":"max-deleted-id","optional":true,"since":"7.0.0","token":"MAXDELETEDID","type":"string"}],
  "syntax_fmt": "XSETID key last-id [ENTRIESADDEDÂ entries-added]\n  [MAXDELETEDIDÂ max-deleted-id]",
  "complexity": "O(1)",
  "group": "stream",
  "command_flags": ["write","denyoom","fast"],
  "acl_categories": ["@write","@stream","@fast"],
  "since": "5.0.0",
  "arity": -3,
  "key_specs": [{"RW":true,"begin_search":{"spec":{"index":1},"type":"index"},"find_keys":{"spec":{"keystep":1,"lastkey":0,"limit":0},"type":"range"},"update":true}],
  "tableOfContents": {"sections":[{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": []
}
```The `XSETID` command is an internal command.
It is used by a Redis master to replicate the last delivered ID of streams.

## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |

## Return information

**RESP2:**

[Simple string reply](../../develop/reference/protocol-spec#simple-strings): `OK`.

**RESP3:**

[Simple string reply](../../develop/reference/protocol-spec#simple-strings): `OK`.


