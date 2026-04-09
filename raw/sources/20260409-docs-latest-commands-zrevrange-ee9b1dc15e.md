---
title: ZREVRANGE
url: https://redis.io/docs/latest/commands/zrevrange/
retrieved_utc: '2026-04-09T20:45:39.271902+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/zrevrange/index.html.md
---

# ZREVRANGE

```json metadata
{
  "title": "ZREVRANGE",
  "description": "Returns members in a sorted set within a range of indexes in reverse order.",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"display_text":"key","key_spec_index":0,"name":"key","type":"key"},{"display_text":"start","name":"start","type":"integer"},{"display_text":"stop","name":"stop","type":"integer"},{"display_text":"withscores","name":"withscores","optional":true,"token":"WITHSCORES","type":"pure-token"}],
  "syntax_fmt": "ZREVRANGE key start stop [WITHSCORES]",
  "complexity": "O(log(N)+M) with N being the number of elements in the sorted set and M the number of elements returned.",
  "group": "sorted-set",
  "command_flags": ["readonly"],
  "acl_categories": ["@read","@sortedset","@slow"],
  "since": "1.2.0",
  "arity": -4,
  "key_specs": [{"RO":true,"access":true,"begin_search":{"spec":{"index":1},"type":"index"},"find_keys":{"spec":{"keystep":1,"lastkey":0,"limit":0},"type":"range"}}],
  "tableOfContents": {"sections":[{"id":"examples","title":"Examples"},{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": []
}
```Returns the specified range of elements in the sorted set stored at `key`.
The elements are considered to be ordered from the highest to the lowest score.
Descending lexicographical order is used for elements with equal score.

Apart from the reversed ordering, `ZREVRANGE` is similar to [`ZRANGE`]().

## Examples


ZADD myzset 1 "one"
ZADD myzset 2 "two"
ZADD myzset 3 "three"
ZREVRANGE myzset 0 -1
ZREVRANGE myzset 2 3
ZREVRANGE myzset -2 -1


## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | Deprecated as of Redis v6.2.0. |

## Return information

**RESP2:**

* [Array reply](../../develop/reference/protocol-spec#arrays): a list of members in the specified range, optionally with their scores if _WITHSCORE_ was used.

**RESP3:**

* [Array reply](../../develop/reference/protocol-spec#arrays): a list of members in the specified range, optionally with their scores if _WITHSCORE_ was used.


