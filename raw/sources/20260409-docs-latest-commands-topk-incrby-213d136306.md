---
title: TOPK.INCRBY
url: https://redis.io/docs/latest/commands/topk.incrby/
retrieved_utc: '2026-04-09T20:45:35.217880+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/topk.incrby/index.html.md
---

# TOPK.INCRBY

```json metadata
{
  "title": "TOPK.INCRBY",
  "description": "Increases the count of one or more items by increment",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"name":"key","type":"key"},{"arguments":[{"name":"item","type":"string"},{"name":"increment","type":"integer"}],"multiple":true,"name":"items","type":"block"}],
  "syntax_fmt": "TOPK.INCRBY key item increment [item increment ...]",
  "complexity": "O(n * k * incr) where n is the number of items, k is the depth and incr is the increment",
  "group": "topk",
  "acl_categories": ["@topk","@write","@slow"],
  "since": "2.0.0",
  "tableOfContents": {"sections":[{"id":"return","title":"Return"},{"id":"example","title":"Example"},{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": []
}
```Increase the score of an item in the data structure by `increment`. 
Multiple items' scores can be increased at once.
If an item enters the Top-K list, the item that is expelled (if any) is returned.

### Parameters

* **key**: the name of the sketch.
* **item**: the items to be incremented.
* **increment**: the value by which items will be incremented. The `increment` must be greater or equal to 1 and less than or equal to 100,000 to avoid server freeze.

## Return

[Array]() of [Simple string reply]() - if an element was dropped from the TopK list, [Nil reply]() otherwise..

## Example

```
redis> TOPK.INCRBY topk foo 3 bar 2 42 30
1) (nil)
2) (nil)
3) foo
```

## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Supported">&#x2705; Supported</span><br /> | <span title="Supported">&#x2705; Flexible & Annual</span><br /><span title="Supported">&#x2705; Free & Fixed</nobr></span> |  |

## Return information

**RESP2:**

One of the following:

* [Array]() of [bulk string replies]() containing either dropped elements or [nil (null bulk string)]().
* [Simple error reply]() in these cases: incorrect number of arguments, non-existant key, key of the incorrect type, or an incorrect increment (less than 0 or greater than 100,000).

**RESP3:**

One of the following:

* [Array]() of [bulk string replies]() containing either dropped elements or [null]().
* [Simple error reply]() in these cases: incorrect number of arguments, non-existant key, key of the incorrect type, or an incorrect increment (less than 0 or greater than 100,000).

