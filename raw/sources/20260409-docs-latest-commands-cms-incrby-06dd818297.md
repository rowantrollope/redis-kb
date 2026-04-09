---
title: CMS.INCRBY
url: https://redis.io/docs/latest/commands/cms.incrby/
retrieved_utc: '2026-04-09T20:46:03.193961+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/cms.incrby/index.html.md
---

# CMS.INCRBY

```json metadata
{
  "title": "CMS.INCRBY",
  "description": "Increases the count of one or more items by increment",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"name":"key","type":"key"},{"arguments":[{"name":"item","type":"string"},{"name":"increment","type":"integer"}],"multiple":true,"name":"items","type":"block"}],
  "syntax_fmt": "CMS.INCRBY key item increment [item increment ...]",
  "complexity": "O(n) where n is the number of items",
  "group": "cms",
  "acl_categories": ["@cms","@write"],
  "since": "2.0.0",
  "tableOfContents": {"sections":[{"id":"examples","title":"Examples"},{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": []
}
```
Increases the count of item by increment. Multiple items can be increased with one call. 

### Parameters:

* **key**: The name of the sketch.
* **item**: The item which counter is to be increased.
* **increment**: Amount by which the item counter is to be increased.

## Examples

```
redis> CMS.INCRBY test foo 10 bar 42
1) (integer) 10
2) (integer) 42
```

## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Supported">&#x2705; Supported</span><br /> | <span title="Supported"><nobr>&#x2705; Flexible & Annual</nobr></span><br /><span title="Supported">&#x2705; Free & Fixed</nobr></span> |  |

## Return information

**RESP2:**

One of the following:

* [Array]() of [integer replies]() representing updated min-counts of each of the provided items in the sketch.
* [Simple error reply]() in these cases: invalid arguments, missing key, overflow, or wrong key type.

**RESP3:**

One of the following:

* [Array]() of [integer replies]() representing updated min-counts of each of the provided items in the sketch.
* [Simple error reply]() in these cases: invalid arguments, missing key, overflow, or wrong key type.

