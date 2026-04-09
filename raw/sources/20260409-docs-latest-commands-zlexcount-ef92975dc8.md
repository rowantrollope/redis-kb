---
title: ZLEXCOUNT
url: https://redis.io/docs/latest/commands/zlexcount/
retrieved_utc: '2026-04-09T20:45:39.035706+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/zlexcount/index.html.md
---

# ZLEXCOUNT

```json metadata
{
  "title": "ZLEXCOUNT",
  "description": "Returns the number of members in a sorted set within a lexicographical range.",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"display_text":"key","key_spec_index":0,"name":"key","type":"key"},{"display_text":"min","name":"min","type":"string"},{"display_text":"max","name":"max","type":"string"}],
  "syntax_fmt": "ZLEXCOUNT key min max",
  "complexity": "O(log(N)) with N being the number of elements in the sorted set.",
  "group": "sorted-set",
  "command_flags": ["readonly","fast"],
  "acl_categories": ["@read","@sortedset","@fast"],
  "since": "2.8.9",
  "arity": 4,
  "key_specs": [{"RO":true,"access":true,"begin_search":{"spec":{"index":1},"type":"index"},"find_keys":{"spec":{"keystep":1,"lastkey":0,"limit":0},"type":"range"}}],
  "tableOfContents": {"sections":[{"id":"examples","title":"Examples"},{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": []
}
```When all the elements in a sorted set are inserted with the same score, in order to force lexicographical ordering, this command returns the number of elements in the sorted set at `key` with a value between `min` and `max`.

The `min` and `max` arguments have the same meaning as described for
[`ZRANGEBYLEX`]().

Note: the command has a complexity of just O(log(N)) because it uses elements ranks (see [`ZRANK`]()) to get an idea of the range. Because of this there is no need to do a work proportional to the size of the range.

## Examples


ZADD myzset 0 a 0 b 0 c 0 d 0 e
ZADD myzset 0 f 0 g
ZLEXCOUNT myzset - +
ZLEXCOUNT myzset [b [f


## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |

## Return information

**RESP2:**

[Integer reply](../../develop/reference/protocol-spec#integers): the number of members in the specified score range.

**RESP3:**

[Integer reply](../../develop/reference/protocol-spec#integers): the number of members in the specified score range.


