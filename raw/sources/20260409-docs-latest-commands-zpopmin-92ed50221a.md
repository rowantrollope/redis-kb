---
title: ZPOPMIN
url: https://redis.io/docs/latest/commands/zpopmin/
retrieved_utc: '2026-04-09T20:45:38.931321+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/zpopmin/index.html.md
---

# ZPOPMIN

```json metadata
{
  "title": "ZPOPMIN",
  "description": "Returns the lowest-scoring members from a sorted set after removing them. Deletes the sorted set if the last member was popped.",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"display_text":"key","key_spec_index":0,"name":"key","type":"key"},{"display_text":"count","name":"count","optional":true,"type":"integer"}],
  "syntax_fmt": "ZPOPMIN key [count]",
  "complexity": "O(log(N)*M) with N being the number of elements in the sorted set, and M being the number of elements popped.",
  "group": "sorted-set",
  "command_flags": ["write","fast"],
  "acl_categories": ["@write","@sortedset","@fast"],
  "since": "5.0.0",
  "arity": -2,
  "key_specs": [{"RW":true,"access":true,"begin_search":{"spec":{"index":1},"type":"index"},"delete":true,"find_keys":{"spec":{"keystep":1,"lastkey":0,"limit":0},"type":"range"}}],
  "tableOfContents": {"sections":[{"id":"examples","title":"Examples"},{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": []
}
```Removes and returns up to `count` members with the lowest scores in the sorted
set stored at `key`.

When left unspecified, the default value for `count` is 1. Specifying a `count`
value that is higher than the sorted set's cardinality will not produce an
error. When returning multiple elements, the one with the lowest score will
be the first, followed by the elements with greater scores.

## Examples


ZADD myzset 1 "one"
ZADD myzset 2 "two"
ZADD myzset 3 "three"
ZPOPMIN myzset


## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |

## Return information

**RESP2:**

* [Array reply](../../develop/reference/protocol-spec#arrays): a list of popped elements and scores.

**RESP3:**

* [Array reply](../../develop/reference/protocol-spec#arrays): a list of popped elements and scores.


