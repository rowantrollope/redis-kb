---
title: FT.TAGVALS
url: https://redis.io/docs/latest/commands/ft.tagvals/
retrieved_utc: '2026-04-09T20:46:04.248715+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/ft.tagvals/index.html.md
---

# FT.TAGVALS

```json metadata
{
  "title": "FT.TAGVALS",
  "description": "Returns the distinct tags indexed in a Tag field",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"name":"index","type":"string"},{"name":"field_name","type":"string"}],
  "syntax_fmt": "FT.TAGVALS index field_name",
  "complexity": "O(N)",
  "group": "search",
  "command_flags": ["readonly"],
  "acl_categories": ["@dangerous","@read","@search","@slow"],
  "since": "1.0.0",
  "tableOfContents": {"sections":[{"id":"required-arguments","title":"Required arguments"},{"id":"limitations","title":"Limitations"},{"id":"examples","title":"Examples"},{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"},{"id":"see-also","title":"See also"},{"id":"related-topics","title":"Related topics"}]}

,
  "codeExamples": []
}
```
Return a distinct set of values indexed in a Tag field

[Examples](#examples)

## Required arguments

<details open>
<summary><code>index</code></summary>

is full-text index name. You must first create the index using [`FT.CREATE`]().
</details>

<details open>
<summary><code>field_name</code></summary>

is name of a Tag file defined in the schema.
</details>

Use FT.TAGVALS if your tag indexes things like cities, categories, and so on.

## Limitations

FT.TAGVALS provides no paging or sorting, and the tags are not alphabetically sorted. FT.TAGVALS only operates on [tag fields]().
The returned strings are lowercase with whitespaces removed, but otherwise unchanged.

## Examples

<details open>
<summary><b>Return a set of values indexed in a Tag field</b></summary>


127.0.0.1:6379> FT.TAGVALS idx myTag
1) "Hello"
2) "World"

</details>

## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis Cloud<br />Flexible & Annual | Redis Cloud<br />Free & Fixed | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:-----------------|:------|
| <span title="Supported">&#x2705; Supported</span> | <span title="Supported">&#x2705; Supported</span> | <span title="Supported">&#x2705; Supported</nobr></span> |  |

## Return information

**RESP2:**

One of the following:
* [Array]() of distinct tag values as [bulk strings]().
* [Simple error reply]() in these cases: no such index, not a tag field.

**RESP3:**

One of the following:
* [Set]() of distinct tag values as [bulk strings]().
* [Simple error reply]() in these cases: no such index, not a tag field.



## See also

[`FT.CREATE`]()

## Related topics

- [Tag fields]()
- [RediSearch]()
