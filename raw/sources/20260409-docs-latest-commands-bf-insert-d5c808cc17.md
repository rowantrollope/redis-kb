---
title: BF.INSERT
url: https://redis.io/docs/latest/commands/bf.insert/
retrieved_utc: '2026-04-09T20:46:02.137819+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/bf.insert/index.html.md
---

# BF.INSERT

```json metadata
{
  "title": "BF.INSERT",
  "description": "Adds one or more items to a Bloom Filter. A filter will be created if it does not exist",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"name":"key","type":"key"},{"name":"capacity","optional":true,"token":"CAPACITY","type":"integer"},{"name":"error","optional":true,"token":"ERROR","type":"double"},{"name":"expansion","optional":true,"token":"EXPANSION","type":"integer"},{"name":"nocreate","optional":true,"token":"NOCREATE","type":"pure-token"},{"name":"nonscaling","optional":true,"token":"NONSCALING","type":"pure-token"},{"name":"items","token":"ITEMS","type":"pure-token"},{"multiple":true,"name":"item","type":"string"}],
  "syntax_fmt": "BF.INSERT key [CAPACITYÂ capacity] [ERRORÂ error]\n  [EXPANSIONÂ expansion] [NOCREATE] [NONSCALING] ITEMS item [item\n  ...]",
  "complexity": "O(k * n), where k is the number of hash functions and n is the number of items",
  "group": "bf",
  "acl_categories": ["@bloom","@write","@slow"],
  "since": "1.0.0",
  "tableOfContents": {"sections":[{"id":"required-arguments","title":"Required arguments"},{"id":"optional-arguments","title":"Optional arguments"},{"id":"examples","title":"Examples"},{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": []
}
```Creates a new Bloom filter if the `key` does not exist using the specified error rate, capacity, and expansion, then adds all specified items to the Bloom Filter.

This command is similar to [`BF.MADD`](), except that the error rate, capacity, and expansion can be specified. It is a sugarcoated combination of [`BF.RESERVE`]() and [`BF.MADD`]().

## Required arguments

<details open><summary><code>key</code></summary>

is key name for a Bloom filter to add items to.

If `key` does not exist, a new Bloom filter is created.
</details>

<details open><summary><code>ITEMS item...</code></summary>

One or more items to add.
</details>

## Optional arguments

<details open><summary><code>NOCREATE</code></summary>

Indicates that the filter should not be created if it does not already exist.
If the filter does not yet exist, an error is returned rather than creating it automatically.
This may be used where a strict separation between filter creation and filter addition is desired.
It is an error to specify `NOCREATE` together with either `CAPACITY` or `ERROR`.
</details>

<details open><summary><code>CAPACITY capacity</code></summary>

Specifies the desired `capacity` for the filter to be created.
This parameter is ignored if the filter already exists.
If the filter is automatically created and this parameter is absent, then the module-level `capacity` is used.
See [`BF.RESERVE`]() for more information about the impact of this value.
</details>

<details open><summary><code>ERROR error</code></summary>
    
Specifies the `error` ratio of the newly created filter if it does not yet exist.
If the filter is automatically created and `error` is not specified then the module-level error rate is used.
See [`BF.RESERVE`]() for more information about the format of this value.
</details>

<details open><summary><code>NONSCALING</code></summary>

Prevents the filter from creating additional sub-filters if initial capacity is reached.
Non-scaling filters require slightly less memory than their scaling counterparts. The filter returns an error when `capacity` is reached.
</details>

<details open><summary><code>EXPANSION expansion</code></summary>

When `capacity` is reached, an additional sub-filter is created.
The size of the new sub-filter is the size of the last sub-filter multiplied by `expansion`, specified as a positive integer.

If the number of elements to be stored in the filter is unknown, use an `expansion` of `2` or more to reduce the number of sub-filters.
Otherwise, use an `expansion` of `1` to reduce memory consumption. The default value is `2`.
</details>

## Examples

Add three items to a filter, then create the filter with default parameters if it does not already exist.


BF.INSERT filter ITEMS foo bar baz


Add one item to a filter, then create the filter with a capacity of 10000 if it does not already exist.


BF.INSERT filter CAPACITY 10000 ITEMS hello


Add two items to a filter, then return error if the filter does not already exist.


BF.INSERT filter NOCREATE ITEMS foo bar


## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Supported">&#x2705; Supported</span><br /> | <span title="Supported">&#x2705; Flexible & Annual</span><br /><span title="Supported">&#x2705; Free & Fixed</nobr></span> |  |

## Return information

**RESP2:**

One of the following: where each element is one of these options:
* [Array reply](), where each element is one of the following options:
  * [Integer reply]() `1` for successfully adding an item, or `0` if there's a probability that the item was already added to the filter.
  * [Simple string reply]() when the item cannot be added because the filter is full.
* [Simple error reply]() when the number of arguments or key type is wrong, and also when `NOCREATE` is specified and `key` does not exist.

**RESP3:**

One of the following: where each element is one of these options:
* [Array reply](), where each element is one of the following options:
  * [Boolean reply]() `true` for successfully adding an item, or `false` if there's a probability that the item was already added to the filter.
  * [Simple string reply]() when the item cannot be added because the filter is full.
* [Simple error reply]() when the number of arguments or key type is wrong, and also when `NOCREATE` is specified and `key` does not exist.

