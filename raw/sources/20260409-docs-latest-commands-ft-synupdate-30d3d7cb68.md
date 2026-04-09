---
title: FT.SYNUPDATE
url: https://redis.io/docs/latest/commands/ft.synupdate/
retrieved_utc: '2026-04-09T20:46:04.251220+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/ft.synupdate/index.html.md
---

# FT.SYNUPDATE

```json metadata
{
  "title": "FT.SYNUPDATE",
  "description": "Creates or updates a synonym group with additional terms",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"name":"index","type":"string"},{"name":"synonym_group_id","type":"string"},{"name":"skipinitialscan","optional":true,"token":"SKIPINITIALSCAN","type":"pure-token"},{"multiple":true,"name":"term","type":"string"}],
  "syntax_fmt": "FT.SYNUPDATE index synonym_group_id [SKIPINITIALSCAN] term [term\n  ...]",
  "complexity": "O(1)",
  "group": "search",
  "command_flags": ["readonly"],
  "acl_categories": ["@search"],
  "since": "1.2.0",
  "tableOfContents": {"sections":[{"id":"required-arguments","title":"Required arguments"},{"id":"optional-parameters","title":"Optional parameters"},{"id":"examples","title":"Examples"},{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"},{"id":"see-also","title":"See also"},{"id":"related-topics","title":"Related topics"}]}

,
  "codeExamples": []
}
```
Update a synonym group

[Examples](#examples)

## Required arguments

<details open>
<summary><code>index</code></summary>

is index name.
</details>

<details open>
<summary><code>synonym_group_id</code></summary>

is synonym group to return.
</details>

Use FT.SYNUPDATE to create or update a synonym group with additional terms. The command triggers a scan of all documents.

## Optional parameters

<details open>
<summary><code>SKIPINITIALSCAN</code></summary>

does not scan and index, and only documents that are indexed after the update are affected.
</details>

## Examples

<details open>
<summary><b>Update a synonym group</b></summary>


127.0.0.1:6379> FT.SYNUPDATE idx synonym hello hi shalom
OK



127.0.0.1:6379> FT.SYNUPDATE idx synonym SKIPINITIALSCAN hello hi shalom
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
* [Simple error reply]() in these cases: no such index.

**RESP3:**

One of the following:
* [Simple string reply](): `OK` if executed correctly.
* [Simple error reply]() in these cases: no such index.



## See also

[`FT.SYNDUMP`]() 

## Related topics

[RediSearch]()