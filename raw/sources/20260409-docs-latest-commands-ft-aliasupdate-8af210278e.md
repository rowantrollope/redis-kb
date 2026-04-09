---
title: FT.ALIASUPDATE
url: https://redis.io/docs/latest/commands/ft.aliasupdate/
retrieved_utc: '2026-04-09T20:46:04.059581+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/ft.aliasupdate/index.html.md
---

# FT.ALIASUPDATE

```json metadata
{
  "title": "FT.ALIASUPDATE",
  "description": "Adds or updates an alias to the index",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"name":"alias","type":"string"},{"name":"index","type":"string"}],
  "syntax_fmt": "FT.ALIASUPDATE alias index",
  "complexity": "O(1)",
  "group": "search",
  "acl_categories": ["@search"],
  "since": "1.0.0",
  "tableOfContents": {"sections":[{"id":"required-arguments","title":"Required arguments"},{"id":"examples","title":"Examples"},{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"},{"id":"see-also","title":"See also"},{"id":"related-topics","title":"Related topics"}]}

,
  "codeExamples": []
}
```
Add an alias to an index. If the alias is already associated with another
index, FT.ALIASUPDATE removes the alias association with the previous index.

[Examples](#examples)

## Required arguments

<details open>
<summary><code>alias index</code></summary>

is alias to be added to an index.
</details>

## Examples

<details open>
<summary><b>Update an index alias</b></summary>

Update the alias of an index.


127.0.0.1:6379> FT.ALIASUPDATE alias idx
OK


## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis Cloud<br />Flexible & Annual | Redis Cloud<br />Free & Fixed | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:-----------------|:------|
| <span title="Supported">&#x2705; Supported</span> | <span title="Supported">&#x2705; Supported</span> | <span title="Supported">&#x2705; Supported</nobr></span> |  |

## Return information

**RESP2:**

One of the following:
* [Simple string reply](): `OK` if executed correctly.
* [Simple error reply]() in these cases: index does not exist.

**RESP3:**

One of the following:
* [Simple string reply](): `OK` if executed correctly.
* [Simple error reply]() in these cases: index does not exist.



## See also

[`FT.ALIASADD`]() | [`FT.ALIASDEL`]() 

## Related topics

[RediSearch]()