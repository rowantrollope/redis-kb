---
title: CF.INFO
url: https://redis.io/docs/latest/commands/cf.info/
retrieved_utc: '2026-04-09T20:46:02.422287+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/cf.info/index.html.md
---

# CF.INFO

```json metadata
{
  "title": "CF.INFO",
  "description": "Returns information about a Cuckoo Filter",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"name":"key","type":"key"}],
  "syntax_fmt": "CF.INFO key",
  "complexity": "O(1)",
  "group": "cf",
  "acl_categories": ["@cuckoo","@read","@fast"],
  "since": "1.0.0",
  "tableOfContents": {"sections":[{"id":"required-arguments","title":"Required arguments"},{"id":"examples","title":"Examples"},{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": []
}
```Returns information about a cuckoo filter.

## Required arguments

<details open><summary><code>key</code></summary>

is key name for a cuckoo filter.
</details>

## Examples


redis> CF.INFO cf
 1) Size
 2) (integer) 1080
 3) Number of buckets
 4) (integer) 512
 5) Number of filter
 6) (integer) 1
 7) Number of items inserted
 8) (integer) 0
 9) Number of items deleted
10) (integer) 0
11) Bucket size
12) (integer) 2
13) Expansion rate
14) (integer) 1
15) Max iteration
16) (integer) 20


## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Supported">&#x2705; Supported</span><br /> | <span title="Supported">&#x2705; Flexible & Annual</span><br /><span title="Supported">&#x2705; Free & Fixed</nobr></span> |  |

## Return information

One of the following:

**RESP2:**

* [Array reply]() with argument name ([Simple string reply]()) and value ([Integer reply]()) pairs.
* [Simple error reply]() if invalid arguments are passed, `key` does not exist, or `key` is not of the correct type.

**RESP3:**

* [Map reply]() with argument name ([Simple string reply]()) and value ([Integer reply]()) pairs.
* [Simple error reply]() if invalid arguments are passed, `key` does not exist, or `key` is not of the correct type.

