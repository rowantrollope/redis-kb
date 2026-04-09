---
title: ZUNIONSTORE
url: https://redis.io/docs/latest/commands/zunionstore/
retrieved_utc: '2026-04-09T20:45:39.542466+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/zunionstore/index.html.md
---

# ZUNIONSTORE

```json metadata
{
  "title": "ZUNIONSTORE",
  "description": "Stores the union of multiple sorted sets in a key.",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"display_text":"destination","key_spec_index":0,"name":"destination","type":"key"},{"display_text":"numkeys","name":"numkeys","type":"integer"},{"display_text":"key","key_spec_index":1,"multiple":true,"name":"key","type":"key"},{"display_text":"weight","multiple":true,"name":"weight","optional":true,"token":"WEIGHTS","type":"integer"},{"arguments":[{"display_text":"sum","name":"sum","token":"SUM","type":"pure-token"},{"display_text":"min","name":"min","token":"MIN","type":"pure-token"},{"display_text":"max","name":"max","token":"MAX","type":"pure-token"}],"name":"aggregate","optional":true,"token":"AGGREGATE","type":"oneof"}],
  "syntax_fmt": "ZUNIONSTORE destination numkeys key [key ...] [WEIGHTSÂ weight\n  [weight ...]] [AGGREGATEÂ \u003cSUM | MIN | MAX\u003e]",
  "complexity": "O(N)+O(M log(M)) with N being the sum of the sizes of the input sorted sets, and M being the number of elements in the resulting sorted set.",
  "group": "sorted-set",
  "command_flags": ["write","denyoom","movablekeys"],
  "acl_categories": ["@write","@sortedset","@slow"],
  "since": "2.0.0",
  "arity": -4,
  "key_specs": [{"OW":true,"begin_search":{"spec":{"index":1},"type":"index"},"find_keys":{"spec":{"keystep":1,"lastkey":0,"limit":0},"type":"range"},"update":true},{"RO":true,"access":true,"begin_search":{"spec":{"index":2},"type":"index"},"find_keys":{"spec":{"firstkey":1,"keynumidx":0,"keystep":1},"type":"keynum"}}],
  "tableOfContents": {"sections":[{"id":"examples","title":"Examples"},{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": []
}
```
This command's behavior varies in clustered Redis environments. See the [multi-key operations]() page for more information.



Computes the union of `numkeys` sorted sets given by the specified keys, and
stores the result in `destination`.
It is mandatory to provide the number of input keys (`numkeys`) before passing
the input keys and the other (optional) arguments.

By default, the resulting score of an element is the sum of its scores in the
sorted sets where it exists.

Using the `WEIGHTS` option, it is possible to specify a multiplication factor
for each input sorted set.
This means that the score of every element in every input sorted set is
multiplied by this factor before being passed to the aggregation function.
When `WEIGHTS` is not given, the multiplication factors default to `1`.

With the `AGGREGATE` option, it is possible to specify how the results of the
union are aggregated.
This option defaults to `SUM`, where the score of an element is summed across
the inputs where it exists.
When this option is set to either `MIN` or `MAX`, the resulting set will contain
the minimum or maximum score of an element across the inputs where it exists.

If `destination` already exists, it is overwritten.

## Examples


ZADD zset1 1 "one"
ZADD zset1 2 "two"
ZADD zset2 1 "one"
ZADD zset2 2 "two"
ZADD zset2 3 "three"
ZUNIONSTORE out 2 zset1 zset2 WEIGHTS 2 3
ZRANGE out 0 -1 WITHSCORES


## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |

## Return information

**RESP2:**

[Integer reply](../../develop/reference/protocol-spec#integers): the number of elements in the resulting sorted set.

**RESP3:**

[Integer reply](../../develop/reference/protocol-spec#integers): the number of elements in the resulting sorted set.


