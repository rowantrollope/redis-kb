---
title: ZDIFF
url: https://redis.io/docs/latest/commands/zdiff/
retrieved_utc: '2026-04-09T20:45:38.451381+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/zdiff/index.html.md
---

# ZDIFF

```json metadata
{
  "title": "ZDIFF",
  "description": "Returns the difference between multiple sorted sets.",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"display_text":"numkeys","name":"numkeys","type":"integer"},{"display_text":"key","key_spec_index":0,"multiple":true,"name":"key","type":"key"},{"display_text":"withscores","name":"withscores","optional":true,"token":"WITHSCORES","type":"pure-token"}],
  "syntax_fmt": "ZDIFF numkeys key [key ...] [WITHSCORES]",
  "complexity": "O(L + (N-K)log(N)) worst case where L is the total number of elements in all the sets, N is the size of the first set, and K is the size of the result set.",
  "group": "sorted-set",
  "command_flags": ["readonly","movablekeys"],
  "acl_categories": ["@read","@sortedset","@slow"],
  "since": "6.2.0",
  "arity": -3,
  "key_specs": [{"RO":true,"access":true,"begin_search":{"spec":{"index":1},"type":"index"},"find_keys":{"spec":{"firstkey":1,"keynumidx":0,"keystep":1},"type":"keynum"}}],
  "tableOfContents": {"sections":[{"id":"examples","title":"Examples"},{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": []
}
```
This command's behavior varies in clustered Redis environments. See the [multi-key operations]() page for more information.



This command is similar to [`ZDIFFSTORE`](), but instead of storing the resulting
sorted set, it is returned to the client.

## Examples


ZADD zset1 1 "one"
ZADD zset1 2 "two"
ZADD zset1 3 "three"
ZADD zset2 1 "one"
ZADD zset2 2 "two"
ZDIFF 2 zset1 zset2
ZDIFF 2 zset1 zset2 WITHSCORES


## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |

## Return information

**RESP2:**

* [Array reply](../../develop/reference/protocol-spec#arrays): the result of the difference including, optionally, scores when the _WITHSCORES_ option is used.

**RESP3:**

* [Array reply](../../develop/reference/protocol-spec#arrays): the result of the difference including, optionally, scores when the _WITHSCORES_ option is used.


