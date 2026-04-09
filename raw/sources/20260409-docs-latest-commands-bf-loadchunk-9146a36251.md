---
title: BF.LOADCHUNK
url: https://redis.io/docs/latest/commands/bf.loadchunk/
retrieved_utc: '2026-04-09T20:46:02.146908+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/bf.loadchunk/index.html.md
---

# BF.LOADCHUNK

```json metadata
{
  "title": "BF.LOADCHUNK",
  "description": "Restores a filter previously saved using SCANDUMP",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"name":"key","type":"key"},{"name":"iterator","type":"integer"},{"name":"data","type":"string"}],
  "syntax_fmt": "BF.LOADCHUNK key iterator data",
  "complexity": "O(n), where n is the capacity",
  "group": "bf",
  "acl_categories": ["@bloom","@write","@slow"],
  "since": "1.0.0",
  "tableOfContents": {"sections":[{"id":"required-arguments","title":"Required arguments"},{"id":"examples","title":"Examples"},{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": []
}
```Restores a Bloom filter previously saved using [`BF.SCANDUMP`]().

See the [`BF.SCANDUMP`]() command for example usage.

<note><b>Notes</b>

- This command overwrites the Bloom filter stored under `key`. 
- Make sure that the Bloom filter is not changed between invocations.

</note>

## Required arguments

<details open><summary><code>key</code></summary>

is key name for a Bloom filter to restore.
</details>

<details open><summary><code>iterator</code></summary>

Iterator value associated with `data` (returned by [`BF.SCANDUMP`]())
</details>

<details open><summary><code>data</code></summary>

Current data chunk (returned by [`BF.SCANDUMP`]())
</details>

## Examples

See [`BF.SCANDUMP`]() for an example.

## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Supported">&#x2705; Supported</span><br /> | <span title="Supported">&#x2705; Flexible & Annual</span><br /><span title="Supported">&#x2705; Free & Fixed</nobr></span> |  |

## Return information

**RESP2:**

One of the following:
* [Simple string reply](): `OK` if executed correctly.
* [Simple error reply]() in these cases: invalid arguments, wrong key type, or when invalid data was passed.

**RESP3:**

One of the following:
* [Simple string reply](): `OK` if executed correctly.
* [Simple error reply]() in these cases: invalid arguments, wrong key type, or when invalid data was passed.

