---
title: SSCAN
url: https://redis.io/docs/latest/commands/sscan/
retrieved_utc: '2026-04-09T20:46:07.670756+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/sscan/index.html.md
---

# SSCAN

```json metadata
{
  "title": "SSCAN",
  "description": "Iterates over members of a set.",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"display_text":"key","key_spec_index":0,"name":"key","type":"key"},{"display_text":"cursor","name":"cursor","type":"integer"},{"display_text":"pattern","name":"pattern","optional":true,"token":"MATCH","type":"pattern"},{"display_text":"count","name":"count","optional":true,"token":"COUNT","type":"integer"}],
  "syntax_fmt": "SSCAN key cursor [MATCHÂ pattern] [COUNTÂ count]",
  "complexity": "O(1) for every call. O(N) for a complete iteration, including enough command calls for the cursor to return back to 0. N is the number of elements inside the collection.",
  "group": "set",
  "command_flags": ["readonly"],
  "acl_categories": ["@read","@set","@slow"],
  "since": "2.8.0",
  "arity": -3,
  "key_specs": [{"RO":true,"access":true,"begin_search":{"spec":{"index":1},"type":"index"},"find_keys":{"spec":{"keystep":1,"lastkey":0,"limit":0},"type":"range"}}],
  "tableOfContents": {"sections":[{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": []
}
```See [`SCAN`]() for `SSCAN` documentation.

## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |

## Return information

**RESP2:**

[Array reply](../../develop/reference/protocol-spec#arrays): specifically, an array with two elements:
* The first element is a [Bulk string reply](../../develop/reference/protocol-spec#bulk-strings) that represents an unsigned 64-bit number, the cursor.
* The second element is an [Array reply](../../develop/reference/protocol-spec#arrays) with the names of scanned members.

**RESP3:**

[Array reply](../../develop/reference/protocol-spec#arrays): specifically, an array with two elements:
* The first element is a [Bulk string reply](../../develop/reference/protocol-spec#bulk-strings) that represents an unsigned 64-bit number, the cursor.
* The second element is an [Array reply](../../develop/reference/protocol-spec#arrays) with the names of scanned members.


