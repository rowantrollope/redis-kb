---
title: ZREMRANGEBYSCORE
url: https://redis.io/docs/latest/commands/zremrangebyscore/
retrieved_utc: '2026-04-09T20:45:39.280467+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/zremrangebyscore/index.html.md
---

# ZREMRANGEBYSCORE

```json metadata
{
  "title": "ZREMRANGEBYSCORE",
  "description": "Removes members in a sorted set within a range of scores. Deletes the sorted set if all members were removed.",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"display_text":"key","key_spec_index":0,"name":"key","type":"key"},{"display_text":"min","name":"min","type":"double"},{"display_text":"max","name":"max","type":"double"}],
  "syntax_fmt": "ZREMRANGEBYSCORE key min max",
  "complexity": "O(log(N)+M) with N being the number of elements in the sorted set and M the number of elements removed by the operation.",
  "group": "sorted-set",
  "command_flags": ["write"],
  "acl_categories": ["@write","@sortedset","@slow"],
  "since": "1.2.0",
  "arity": 4,
  "key_specs": [{"RW":true,"begin_search":{"spec":{"index":1},"type":"index"},"delete":true,"find_keys":{"spec":{"keystep":1,"lastkey":0,"limit":0},"type":"range"}}],
  "tableOfContents": {"sections":[{"id":"examples","title":"Examples"},{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": []
}
```Removes all elements in the sorted set stored at `key` with a score between
`min` and `max` (inclusive).

## Examples


ZADD myzset 1 "one"
ZADD myzset 2 "two"
ZADD myzset 3 "three"
ZREMRANGEBYSCORE myzset -inf (2
ZRANGE myzset 0 -1 WITHSCORES


## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |

## Return information

**RESP2:**

[Integer reply](../../develop/reference/protocol-spec#integers): the number of members removed.

**RESP3:**

[Integer reply](../../develop/reference/protocol-spec#integers): Number of members removed.


