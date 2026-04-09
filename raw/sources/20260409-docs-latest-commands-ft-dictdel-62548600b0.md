---
title: FT.DICTDEL
url: https://redis.io/docs/latest/commands/ft.dictdel/
retrieved_utc: '2026-04-09T20:46:04.149387+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/ft.dictdel/index.html.md
---

# FT.DICTDEL

```json metadata
{
  "title": "FT.DICTDEL",
  "description": "Deletes terms from a dictionary",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"name":"dict","type":"string"},{"multiple":true,"name":"term","type":"string"}],
  "syntax_fmt": "FT.DICTDEL dict term [term ...]",
  "complexity": "O(1)",
  "group": "search",
  "acl_categories": ["@search"],
  "since": "1.4.0",
  "tableOfContents": {"sections":[{"id":"required-arguments","title":"Required arguments"},{"id":"examples","title":"Examples"},{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"},{"id":"see-also","title":"See also"},{"id":"related-topics","title":"Related topics"}]}

,
  "codeExamples": []
}
```
Delete terms from a dictionary

[Examples](#examples)

## Required arguments

<details open>
<summary><code>dict</code></summary>

is dictionary name.
</details>

<details open>
<summary><code>term</code></summary>

term to delete from the dictionary.
</details>

## Examples

<details open>
<summary><b>Delete terms from a dictionary</b></summary>


127.0.0.1:6379> FT.DICTDEL dict foo bar "hello world"
(integer) 3

</details>

## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis Cloud<br />Flexible & Annual | Redis Cloud<br />Free & Fixed | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:-----------------|:------|
| <span title="Supported">&#x2705; Supported</span> | <span title="Supported">&#x2705; Supported</span> | <span title="Supported">&#x2705; Supported</nobr></span> |  |

## Return information

**RESP2:**

[Integer reply](): the number of terms deleted from the dictionary.

**RESP3:**

[Integer reply](): the number of terms deleted from the dictionary.



## See also

[`FT.DICTADD`]() | [`FT.DICTDUMP`]()

## Related topics

[RediSearch]()
