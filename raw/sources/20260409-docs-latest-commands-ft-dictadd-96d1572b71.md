---
title: FT.DICTADD
url: https://redis.io/docs/latest/commands/ft.dictadd/
retrieved_utc: '2026-04-09T20:46:04.109092+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/ft.dictadd/index.html.md
---

# FT.DICTADD

```json metadata
{
  "title": "FT.DICTADD",
  "description": "Adds terms to a dictionary",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"name":"dict","type":"string"},{"multiple":true,"name":"term","type":"string"}],
  "syntax_fmt": "FT.DICTADD dict term [term ...]",
  "complexity": "O(1)",
  "group": "search",
  "acl_categories": ["@search"],
  "since": "1.4.0",
  "tableOfContents": {"sections":[{"id":"required-arguments","title":"Required arguments"},{"id":"examples","title":"Examples"},{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"},{"id":"see-also","title":"See also"},{"id":"related-topics","title":"Related topics"}]}

,
  "codeExamples": []
}
```
Add terms to a dictionary

[Examples](#examples)

## Required arguments

<details open>
<summary><code>dict</code></summary>

is dictionary name.
</details>

<details open>
<summary><code>term</code></summary>

term to add to the dictionary.
</details>

## Examples

<details open>
<summary><b>Add terms to a dictionary</b></summary>


127.0.0.1:6379> FT.DICTADD dict foo bar "hello world"
(integer) 3

</details>

## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis Cloud<br />Flexible & Annual | Redis Cloud<br />Free & Fixed | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:-----------------|:------|
| <span title="Supported">&#x2705; Supported</span> | <span title="Supported">&#x2705; Supported</span> | <span title="Supported">&#x2705; Supported</nobr></span> |  |

## Return information

**RESP2:**

[Integer reply](): the number of new terms added to the dictionary.

**RESP3:**

[Integer reply](): the number of new terms added to the dictionary.



## See also

[`FT.DICTDEL`]() | [`FT.DICTDUMP`]()

## Related topics

[RediSearch]()