---
title: ZINTER
url: https://redis.io/docs/latest/commands/zinter/
retrieved_utc: '2026-04-09T20:45:38.631348+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/zinter/index.html.md
---

# ZINTER

```json metadata
{
  "title": "ZINTER",
  "description": "Returns the intersect of multiple sorted sets.",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"display_text":"numkeys","name":"numkeys","type":"integer"},{"display_text":"key","key_spec_index":0,"multiple":true,"name":"key","type":"key"},{"display_text":"weight","multiple":true,"name":"weight","optional":true,"token":"WEIGHTS","type":"integer"},{"arguments":[{"display_text":"sum","name":"sum","token":"SUM","type":"pure-token"},{"display_text":"min","name":"min","token":"MIN","type":"pure-token"},{"display_text":"max","name":"max","token":"MAX","type":"pure-token"}],"name":"aggregate","optional":true,"token":"AGGREGATE","type":"oneof"},{"display_text":"withscores","name":"withscores","optional":true,"token":"WITHSCORES","type":"pure-token"}],
  "syntax_fmt": "ZINTER numkeys key [key ...] [WEIGHTSÂ weight [weight ...]]\n  [AGGREGATEÂ \u003cSUM | MIN | MAX\u003e] [WITHSCORES]",
  "complexity": "O(N*K)+O(M*log(M)) worst case with N being the smallest input sorted set, K being the number of input sorted sets and M being the number of elements in the resulting sorted set.",
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



This command is similar to [`ZINTERSTORE`](), but instead of storing the resulting
sorted set, it is returned to the client.

For a description of the `WEIGHTS` and `AGGREGATE` options, see [`ZUNIONSTORE`]().

## Examples


ZADD zset1 1 "one"
ZADD zset1 2 "two"
ZADD zset2 1 "one"
ZADD zset2 2 "two"
ZADD zset2 3 "three"
ZINTER 2 zset1 zset2
ZINTER 2 zset1 zset2 WITHSCORES


## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |

## Return information

**RESP2:**

* [Array reply](../../develop/reference/protocol-spec#arrays): the result of the intersection including, optionally, scores when the _WITHSCORES_ option is used.

**RESP3:**

* [Array reply](../../develop/reference/protocol-spec#arrays): the result of the intersection including, optionally, scores when the _WITHSCORES_ option is used.


