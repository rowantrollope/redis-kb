---
title: FT.CURSOR DEL
url: https://redis.io/docs/latest/commands/ft.cursor-del/
retrieved_utc: '2026-04-09T20:46:04.112796+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/ft.cursor-del/index.html.md
---

# FT.CURSOR DEL

```json metadata
{
  "title": "FT.CURSOR DEL",
  "description": "Deletes a cursor",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"name":"index","type":"string"},{"name":"cursor_id","type":"integer"}],
  "syntax_fmt": "FT.CURSOR DEL index cursor_id",
  "complexity": "O(1)",
  "group": "search",
  "acl_categories": ["@read","@search"],
  "since": "1.1.0",
  "tableOfContents": {"sections":[{"id":"required-arguments","title":"Required arguments"},{"id":"examples","title":"Examples"},{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"},{"id":"see-also","title":"See also"},{"id":"related-topics","title":"Related topics"}]}

,
  "codeExamples": []
}
```
Delete a cursor

[Examples](#examples)

## Required arguments

<details open>
<summary><code>index</code></summary>

is index name.
</details>

<details open>
<summary><code>cursor_id</code></summary>

is id of the cursor.
</details>

## Examples

<details open>
<summary><b>Delete a cursor</b></summary>


redis> FT.CURSOR DEL idx 342459320
OK


Check that the cursor is deleted.


127.0.0.1:6379> FT.CURSOR DEL idx 342459320
(error) Cursor does not exist

</details>

## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis Cloud<br />Flexible & Annual | Redis Cloud<br />Free & Fixed | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:-----------------|:------|
| <span title="Supported">&#x2705; Supported</span> | <span title="Supported">&#x2705; Supported</span> | <span title="Supported">&#x2705; Supported</nobr></span> |  |

## Return information

**RESP2:**

One of the following:
* [Simple string reply](): `OK` if executed correctly.
* [Simple error reply]() in these cases: cursor does not exist.

**RESP3:**

One of the following:
* [Simple string reply](): `OK` if executed correctly.
* [Simple error reply]() in these cases: cursor does not exist.



## See also

[`FT.CURSOR READ`]() 

## Related topics

[RediSearch]()