---
title: BF.EXISTS
url: https://redis.io/docs/latest/commands/bf.exists/
retrieved_utc: '2026-04-09T20:46:02.128029+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/bf.exists/index.html.md
---

# BF.EXISTS

```json metadata
{
  "title": "BF.EXISTS",
  "description": "Checks whether an item exists in a Bloom Filter",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"name":"key","type":"key"},{"name":"item","type":"string"}],
  "syntax_fmt": "BF.EXISTS key item",
  "complexity": "O(k), where k is the number of hash functions used by the last sub-filter",
  "group": "bf",
  "acl_categories": ["@bloom","@read","@slow"],
  "since": "1.0.0",
  "tableOfContents": {"sections":[{"id":"required-arguments","title":"Required arguments"},{"id":"examples","title":"Examples"},{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": []
}
```Determines whether a given item was added to a Bloom filter.

This command is similar to [`BF.MEXISTS`](), except that only one item can be checked.

## Required arguments

<details open><summary><code>key</code></summary>

is key name for a Bloom filter.

</details>

<details open><summary><code>item</code></summary>

is an item to check.
</details>

## Examples


redis> BF.ADD bf item1
(integer) 1
redis> BF.EXISTS bf item1
(integer) 1
redis> BF.EXISTS bf item2
(integer) 0


## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Supported">&#x2705; Supported</span><br /> | <span title="Supported">&#x2705; Flexible & Annual</span><br /><span title="Supported">&#x2705; Free & Fixed</nobr></span> |  |

## Return information

**RESP2:**

One of the following:
* [Integer reply](): `1` means that, with high probability, `item` was already added to the filter, and `0` means that either the `key` does not exist or that the `item` had not been added to the filter.
* [Simple error reply]() if invalid arguments are passed.

**RESP3:**

One of the following:
* [Boolean reply](): `true` means that, with high probability, `item` was already added to the filter, and `false` means that either `key` does not exist or that `item` had not been added to the filter.
* [Simple error reply]() if invalid arguments are passed or `key` is not of the correct type.

