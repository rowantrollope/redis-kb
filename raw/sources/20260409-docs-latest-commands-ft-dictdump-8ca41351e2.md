---
title: FT.DICTDUMP
url: https://redis.io/docs/latest/commands/ft.dictdump/
retrieved_utc: '2026-04-09T20:46:04.147692+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/ft.dictdump/index.html.md
---

# FT.DICTDUMP

```json metadata
{
  "title": "FT.DICTDUMP",
  "description": "Dumps all terms in the given dictionary",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"name":"dict","type":"string"}],
  "syntax_fmt": "FT.DICTDUMP dict",
  "complexity": "O(N), where N is the size of the dictionary",
  "group": "search",
  "command_flags": ["readonly"],
  "acl_categories": ["@search"],
  "since": "1.4.0",
  "tableOfContents": {"sections":[{"id":"required-argumemts","title":"Required argumemts"},{"id":"examples","title":"Examples"},{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"},{"id":"see-also","title":"See also"},{"id":"related-topics","title":"Related topics"}]}

,
  "codeExamples": []
}
```
Dump all terms in the given dictionary

[Examples](#examples)

## Required argumemts

<details open>
<summary><code>dict</code></summary>

is dictionary name.
</details>

## Examples

<details open>
<summary><b>Dump all terms in the dictionary</b></summary>


127.0.0.1:6379> FT.DICTDUMP dict
1) "foo"
2) "bar"
3) "hello world"

</details>

## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis Cloud<br />Flexible & Annual | Redis Cloud<br />Free & Fixed | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:-----------------|:------|
| <span title="Supported">&#x2705; Supported</span> | <span title="Supported">&#x2705; Supported</span> | <span title="Supported">&#x2705; Supported</nobr></span> |  |

## Return information

**RESP2:**

[Array]() of dictionary terms.

**RESP3:**

[Set]() of dictionary terms.



## See also

[`FT.DICTADD`]() | [`FT.DICTDEL`]()

## Related topics

[RediSearch]()

