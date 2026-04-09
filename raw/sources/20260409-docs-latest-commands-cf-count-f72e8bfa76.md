---
title: CF.COUNT
url: https://redis.io/docs/latest/commands/cf.count/
retrieved_utc: '2026-04-09T20:46:02.722201+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/cf.count/index.html.md
---

# CF.COUNT

```json metadata
{
  "title": "CF.COUNT",
  "description": "Return the number of times an item might be in a Cuckoo Filter",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"name":"key","type":"key"},{"name":"item","type":"string"}],
  "syntax_fmt": "CF.COUNT key item",
  "complexity": "O(k), where k is the number of sub-filters",
  "group": "cf",
  "acl_categories": ["@cuckoo","@read","@slow"],
  "since": "1.0.0",
  "tableOfContents": {"sections":[{"id":"required-arguments","title":"Required arguments"},{"id":"examples","title":"Examples"},{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": []
}
```Returns an estimation of the number of times a given item was added to a cuckoo filter.

If you just want to check that a given item was added to a cuckoo filter, use [`CF.EXISTS`]().

## Required arguments

<details open><summary><code>key</code></summary>

is key name for a cuckoo filter.

</details>

<details open><summary><code>item</code></summary>

is an item to check.
</details>

## Examples


redis> CF.INSERT cf ITEMS item1 item2 item2
1) (integer) 1
2) (integer) 1
3) (integer) 1
redis> CF.COUNT cf item1
(integer) 1
redis> CF.COUNT cf item2
(integer) 2


## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Supported">&#x2705; Supported</span><br /> | <span title="Supported">&#x2705; Flexible & Annual</span><br /><span title="Supported">&#x2705; Free & Fixed</nobr></span> |  |

## Return information

**RESP2:**

One of the following:
* [Integer reply](), where a positive value is an estimation of the number of times `item` was added to the filter. An overestimation is possible, but not an underestimation. `0` means that `key` does not exist or that `item` had not been added to the filter. See the note in [`CF.DEL`]().
* [Simple error]() in these cases: invalid arguments or wrong key type.

**RESP3:**

One of the following:
* [Integer reply](), where a positive value is an estimation of the number of times `item` was added to the filter. An overestimation is possible, but not an underestimation. `0` means that `key` does not exist or that `item` had not been added to the filter. See the note in [`CF.DEL`]().
* [Simple error]() in these cases: invalid arguments or wrong key type.


