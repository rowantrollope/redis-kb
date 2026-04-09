---
title: TOPK.COUNT
url: https://redis.io/docs/latest/commands/topk.count/
retrieved_utc: '2026-04-09T20:45:35.104334+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/topk.count/index.html.md
---

# TOPK.COUNT

```json metadata
{
  "title": "TOPK.COUNT",
  "description": "Return the count for one or more items in a sketch",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"name":"key","type":"key"},{"multiple":true,"name":"item","type":"string"}],
  "syntax_fmt": "TOPK.COUNT key item [item ...]",
  "complexity": "O(n) where n is the number of items",
  "group": "topk",
  "acl_categories": ["@topk","@read","@slow"],
  "since": "2.0.0",
  "tableOfContents": {"sections":[{"id":"parameters","title":"Parameters"},{"id":"examples","title":"Examples"},{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": []
}
```Returns counts for each item present in the sketch. 
Multiple items can be requested at once.
Please note this number will never be higher than the real count and will likely be lower.

This command has been deprecated. The count value is not a representative of
the number of appearances of an item.

## Parameters

* **key**: the name of the sketch where items are to be counted.
* **item**: the items to be counted.

## Examples

```
redis> TOPK.COUNT topk foo 42 nonexist
1) (integer) 3
2) (integer) 1
3) (integer) 0
```

## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Supported">&#x2705; Supported</span><br /> | <span title="Supported">&#x2705; Flexible & Annual</span><br /><span title="Supported">&#x2705; Free & Fixed</nobr></span> |  |

## Return information

**RESP2:**

One of the following:

* [Array]() of [integer replies]() representing the count of each specified item. For non-existant items, `0` is returned.
* [Simple error reply]() in these cases: incorrect number of arguments, non-existant key, or key of the incorrect type.

**RESP3:**

One of the following:

* [Array]() of [integer replies]() representing the count of each specified item. For non-existant items, `0` is returned.
* [Simple error reply]() in these cases: incorrect number of arguments, non-existant key, or key of the incorrect type.

