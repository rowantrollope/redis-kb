---
title: MEMORY MALLOC-STATS
url: https://redis.io/docs/latest/commands/memory-malloc-stats/
retrieved_utc: '2026-04-09T20:46:05.654270+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/memory-malloc-stats/index.html.md
---

# MEMORY MALLOC-STATS

```json metadata
{
  "title": "MEMORY MALLOC-STATS",
  "description": "Returns the allocator statistics.",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "syntax_fmt": "MEMORY MALLOC-STATS",
  "complexity": "Depends on how much memory is allocated, could be slow",
  "group": "server",
  "acl_categories": ["@slow"],
  "since": "4.0.0",
  "arity": 2,
  "tableOfContents": {"sections":[{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": []
}
```The `MEMORY MALLOC-STATS` command provides an internal statistics report from
the memory allocator.

This command is currently implemented only when using **jemalloc** as an
allocator, and evaluates to a benign NOOP for all others.

## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Not supported">&#x274c; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> | <span title="Not supported">&#x274c; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> |  |

## Return information

**RESP2:**

[Bulk string reply](../../develop/reference/protocol-spec#bulk-strings): a long string of statistics.

**RESP3:**

[Verbatim string reply](../../develop/reference/protocol-spec#verbatim-strings): a long string of statistics.


