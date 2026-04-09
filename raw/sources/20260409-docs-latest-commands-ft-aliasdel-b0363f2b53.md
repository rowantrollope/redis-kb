---
title: FT.ALIASDEL
url: https://redis.io/docs/latest/commands/ft.aliasdel/
retrieved_utc: '2026-04-09T20:46:04.062176+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/ft.aliasdel/index.html.md
---

# FT.ALIASDEL

```json metadata
{
  "title": "FT.ALIASDEL",
  "description": "Deletes an alias from the index",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"name":"alias","type":"string"}],
  "syntax_fmt": "FT.ALIASDEL alias",
  "complexity": "O(1)",
  "group": "search",
  "acl_categories": ["@search"],
  "since": "1.0.0",
  "tableOfContents": {"sections":[{"id":"required-arguments","title":"Required arguments"},{"id":"examples","title":"Examples"},{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"},{"id":"see-also","title":"See also"}]}

,
  "codeExamples": []
}
```
Remove an alias from an index

[Examples](#examples)

## Required arguments

<details open>
<summary><code>alias</code></summary>

is index alias to be removed.
</details>

## Examples

<details open>
<summary><b>Remove an alias from an index</b></summary>

Remove an alias from an index.


127.0.0.1:6379> FT.ALIASDEL alias
OK

</details>

## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis Cloud<br />Flexible & Annual | Redis Cloud<br />Free & Fixed | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:-----------------|:------|
| <span title="Supported">&#x2705; Supported</span> | <span title="Supported">&#x2705; Supported</span> | <span title="Supported">&#x2705; Supported</nobr></span> |  |

## Return information

**RESP2:**

One of the following:
* [Simple string reply](): `OK` if executed correctly.
* [Simple error reply]() in these cases: alias does not exist.

**RESP3:**

One of the following:
* [Simple string reply](): `OK` if executed correctly.
* [Simple error reply]() in these cases: alias does not exist.



## See also

[`FT.ALIASADD`]() | [`FT.ALIASUPDATE`]()
