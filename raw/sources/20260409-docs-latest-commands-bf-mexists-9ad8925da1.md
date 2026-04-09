---
title: BF.MEXISTS
url: https://redis.io/docs/latest/commands/bf.mexists/
retrieved_utc: '2026-04-09T20:46:02.170814+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/bf.mexists/index.html.md
---

# BF.MEXISTS

```json metadata
{
  "title": "BF.MEXISTS",
  "description": "Checks whether one or more items exist in a Bloom Filter",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"name":"key","type":"key"},{"multiple":true,"name":"item","type":"string"}],
  "syntax_fmt": "BF.MEXISTS key item [item ...]",
  "complexity": "O(k * n), where k is the number of hash functions and n is the number of items",
  "group": "bf",
  "acl_categories": ["@bloom","@read","@slow"],
  "since": "1.0.0",
  "tableOfContents": {"sections":[{"id":"required-arguments","title":"Required arguments"},{"id":"examples","title":"Examples"},{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": []
}
```Determines whether one or more items were added to a Bloom filter.

This command is similar to [`BF.EXISTS`](), except that more than one item can be checked.

## Required arguments

<details open><summary><code>key</code></summary>

is key name for a Bloom filter.

</details>

<details open><summary><code>item...</code></summary>

One or more items to check.
</details>

## Examples


redis> BF.MADD bf item1 item2
1) (integer) 1
2) (integer) 1
redis> BF.MEXISTS bf item1 item2 item3
1) (integer) 1
2) (integer) 1
3) (integer) 0


## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Supported">&#x2705; Supported</span><br /> | <span title="Supported">&#x2705; Flexible & Annual</span><br /><span title="Supported">&#x2705; Free & Fixed</nobr></span> |  |

## Return information

**RESP2:**

One of the following:
* [Array reply]() of [integer replies](), where `1` means that, with high probability, `item` was already added to the filter, and `0` means that `key` does not exist or that `item` was definitely not added to the filter.
* [Simple error reply]() in these cases: in these cases: invalid arguments, wrong key type, or when the key was not found.

**RESP3:**

One of the following:
* [Array reply]() of [boolean replies](), where `true` means that, with high probability, `item` was already added to the filter, and `false` means that `key` does not exist or that `item` was definitely not added to the filter.
* [Simple error reply]() in these cases: in these cases: invalid arguments, wrong key type, or when the key was not found.


