---
title: CMS.QUERY
url: https://redis.io/docs/latest/commands/cms.query/
retrieved_utc: '2026-04-09T20:46:03.319860+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/cms.query/index.html.md
---

# CMS.QUERY

```json metadata
{
  "title": "CMS.QUERY",
  "description": "Returns the count for one or more items in a sketch",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"name":"key","type":"key"},{"multiple":true,"name":"item","type":"string"}],
  "syntax_fmt": "CMS.QUERY key item [item ...]",
  "complexity": "O(n) where n is the number of items",
  "group": "cms",
  "acl_categories": ["@cms","@read"],
  "since": "2.0.0",
  "tableOfContents": {"sections":[{"id":"examples","title":"Examples"},{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": []
}
```Returns the count for one or more items in a sketch.

### Parameters:

* **key**: The name of the sketch.
* **item**: One or more items for which to return the count.

## Examples

```
redis> CMS.QUERY test foo bar
1) (integer) 10
2) (integer) 42
```

## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Supported">&#x2705; Supported</span><br /> | <span title="Supported">&#x2705; Flexible & Annual</span><br /><span title="Supported">&#x2705; Free & Fixed</nobr></span> |  |

## Return information

**RESP2:**

One of the following:

* [Array]() of [integer replies]()  representing the min-counts of each of the provided items in the sketch.
* [Simple error reply]() in these cases: invalid arguments, missing key, or wrong key type.

**RESP3:**

One of the following:

* [Array]() of [integer replies]() representing the min-counts of each of the provided items in the sketch.
* [Simple error reply]() in these cases: invalid arguments, missing key, or wrong key type.

