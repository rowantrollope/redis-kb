---
title: TOPK.ADD
url: https://redis.io/docs/latest/commands/topk.add/
retrieved_utc: '2026-04-09T20:45:35.137373+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/topk.add/index.html.md
---

# TOPK.ADD

```json metadata
{
  "title": "TOPK.ADD",
  "description": "Adds an item to a Top-k sketch. Multiple items can be added at the same time.",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"name":"key","type":"key"},{"multiple":true,"name":"items","type":"string"}],
  "syntax_fmt": "TOPK.ADD key items [items ...]",
  "complexity": "O(n * k) where n is the number of items and k is the depth",
  "group": "topk",
  "acl_categories": ["@topk","@write","@slow"],
  "since": "2.0.0",
  "tableOfContents": {"sections":[{"id":"parameters","title":"Parameters"},{"id":"example","title":"Example"},{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": []
}
```
Adds an item to a Top-k sketch. 
Multiple items can be added at the same time.
If an item enters the Top-K sketch, the item that is expelled (if any) is returned.
This allows dynamic heavy-hitter detection of items being entered or expelled from Top-K sketch. 

## Parameters

* **key**: the name of the sketch where items are added.
* **item**: the items to be added.

## Example

```
redis> TOPK.ADD topk foo bar 42
1) (nil)
2) baz
3) (nil)
```

## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Supported">&#x2705; Supported</span><br /> | <span title="Supported"><nobr>&#x2705; Flexible & Annual</nobr></span><br /><span title="Supported">&#x2705; Free & Fixed</nobr></span> |  |

## Return information

**RESP2:**

One of the following:

* [Array]() of [bulk string replies]() containing either dropped elements or [nil (null bulk string)]().
* [Simple error reply]() in these cases: incorrect number of arguments or non-existant key.

**RESP3:**

One of the following:

* [Array]() of [bulk string replies]() containing either dropped elements or [null]().
* [Simple error reply]() in these cases: incorrect number of arguments, non-existant key, or key of the incorrect type.

