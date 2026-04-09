---
title: CMS.MERGE
url: https://redis.io/docs/latest/commands/cms.merge/
retrieved_utc: '2026-04-09T20:46:03.245384+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/cms.merge/index.html.md
---

# CMS.MERGE

```json metadata
{
  "title": "CMS.MERGE",
  "description": "Merges several sketches into one sketch",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"name":"destination","type":"key"},{"name":"numKeys","type":"integer"},{"multiple":true,"name":"source","type":"key"},{"arguments":[{"name":"weights","token":"WEIGHTS","type":"pure-token"},{"multiple":true,"name":"weight","type":"double"}],"name":"weight","optional":true,"type":"block"}],
  "syntax_fmt": "CMS.MERGE destination numKeys source [source ...] [WEIGHTS weight\n  [weight ...]]",
  "complexity": "O(n) where n is the number of sketches",
  "group": "cms",
  "acl_categories": ["@cms","@write"],
  "since": "2.0.0",
  "tableOfContents": {"sections":[{"id":"examples","title":"Examples"},{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": []
}
```
This command's behavior varies in clustered Redis environments. See the [multi-key operations]() page for more information.



Merges several sketches into one sketch. All sketches must have identical width and depth. Weights can be used to multiply certain sketches. Default weight is 1. 

### Parameters:

* **dest**: The name of destination sketch. Must be initialized. 
* **numKeys**: Number of sketches to be merged.
* **src**: Names of source sketches to be merged.
* **weight**: Multiple of each sketch. Default =1.

## Examples

```
redis> CMS.MERGE dest 2 test1 test2 WEIGHTS 1 3
OK
```

## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Supported">&#x2705; Supported</span><br /> | <span title="Supported">&#x2705; Flexible & Annual</span><br /><span title="Supported">&#x2705; Free & Fixed</nobr></span> |  |

## Return information

**RESP2:**

One of the following:

* [Simple string reply]() `OK` if executed correctly.
* [Simple error reply]() in these cases: non-existent key or destination key is not of the same width and/or depth.

**RESP3:**

One of the following:

* [Simple string reply]() `OK` if executed correctly.
* [Simple error reply]() in these cases: non-existent key or destination key is not of the same width and/or depth.

