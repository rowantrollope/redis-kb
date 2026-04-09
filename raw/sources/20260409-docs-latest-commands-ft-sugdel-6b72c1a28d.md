---
title: FT.SUGDEL
url: https://redis.io/docs/latest/commands/ft.sugdel/
retrieved_utc: '2026-04-09T20:46:04.219841+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/ft.sugdel/index.html.md
---

# FT.SUGDEL

```json metadata
{
  "title": "FT.SUGDEL",
  "description": "Deletes a string from a suggestion index",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"name":"key","type":"string"},{"name":"string","type":"string"}],
  "syntax_fmt": "FT.SUGDEL key string",
  "complexity": "O(1)",
  "group": "suggestion",
  "acl_categories": ["@search","@write"],
  "since": "1.0.0",
  "tableOfContents": {"sections":[{"id":"required-arguments","title":"Required arguments"},{"id":"examples","title":"Examples"},{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"},{"id":"see-also","title":"See also"},{"id":"related-topics","title":"Related topics"}]}

,
  "codeExamples": []
}
```
Delete a string from a suggestion index

[Examples](#examples)

## Required arguments

<details open>
<summary><code>key</code></summary>

is suggestion dictionary key.
</details>

<details open>
<summary><code>string</code></summary> 

is suggestion string to index.
</details>

## Examples

<details open>
<summary><b>Delete a string from a suggestion index</b></summary>


127.0.0.1:6379> FT.SUGDEL sug "hello"
(integer) 1
127.0.0.1:6379> FT.SUGDEL sug "hello"
(integer) 0

</details>

## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Supported">&#x2705; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> | <span title="Not supported">&#x274c; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> | Not supported on clustered databases. |

## Return information

**RESP2:**

[Integer reply](): 1 if the suggestion was deleted, 0 if it was not found.

**RESP3:**

[Integer reply](): 1 if the suggestion was deleted, 0 if it was not found.



## See also

[`FT.SUGGET`]() | [`FT.SUGADD`]() | [`FT.SUGLEN`]() 

## Related topics

[RediSearch]()