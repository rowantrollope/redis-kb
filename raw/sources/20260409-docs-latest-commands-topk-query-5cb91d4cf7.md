---
title: TOPK.QUERY
url: https://redis.io/docs/latest/commands/topk.query/
retrieved_utc: '2026-04-09T20:45:35.099454+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/topk.query/index.html.md
---

# TOPK.QUERY

```json metadata
{
  "title": "TOPK.QUERY",
  "description": "Checks whether one or more items are in a sketch",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"name":"key","type":"key"},{"multiple":true,"name":"item","type":"string"}],
  "syntax_fmt": "TOPK.QUERY key item [item ...]",
  "complexity": "O(n) where n is the number of items",
  "group": "topk",
  "acl_categories": ["@topk","@read","@slow"],
  "since": "2.0.0",
  "tableOfContents": {"sections":[{"id":"parameters","title":"Parameters"},{"id":"example","title":"Example"},{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": []
}
```Checks whether one or more items are one of the Top-K items.

## Parameters

* **key**: the name of the sketch.
* **item**: the items to be queried.

## Example

```
redis> TOPK.QUERY topk 42 nonexist
1) (integer) 1
2) (integer) 0
```

## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Supported">&#x2705; Supported</span><br /> | <span title="Supported">&#x2705; Flexible & Annual</span><br /><span title="Supported">&#x2705; Free & Fixed</nobr></span> |  |

## Return information

**RESP2:**

One of the following:

* [Array]() of [integer replies](): `1` if an item is in the Top-K or `0` otherwise.
* [Simple error reply]() in these cases: non-existant key or key of the incorrect type.

**RESP3:**

* [Array]() of [boolean replies](): `true` if an item is in the Top-K or `false` otherwise.
* [Simple error reply]() in these cases: non-existant key or key of the incorrect type.

