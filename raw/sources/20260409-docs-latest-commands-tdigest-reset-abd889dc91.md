---
title: TDIGEST.RESET
url: https://redis.io/docs/latest/commands/tdigest.reset/
retrieved_utc: '2026-04-09T20:45:34.626758+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/tdigest.reset/index.html.md
---

# TDIGEST.RESET

```json metadata
{
  "title": "TDIGEST.RESET",
  "description": "Resets a t-digest sketch (empties the sketch and re-initializes it).",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"name":"key","type":"key"}],
  "syntax_fmt": "TDIGEST.RESET key",
  "complexity": "O(1)",
  "group": "tdigest",
  "acl_categories": ["@tdigest","@write","@fast"],
  "since": "2.4.0",
  "tableOfContents": {"sections":[{"id":"required-arguments","title":"Required arguments"},{"id":"example","title":"Example"},{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": []
}
```Resets a t-digest sketch: empties the sketch and re-initializes it.

## Required arguments

<details open><summary><code>key</code></summary>

is the key name for an existing t-digest sketch.
</details>

## Example


redis> TDIGEST.RESET t
OK


## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Supported">&#x2705; Supported</span><br /> | <span title="Supported">&#x2705; Flexible & Annual</span><br /><span title="Supported">&#x2705; Free & Fixed</nobr></span> |  |

## Return information

**RESP2:**

One of the following:

* [Simple string reply]() `OK` if executed correctly.
* [Simple error reply]() in these cases: key does not exist or is of the wrong type, or incorrect number of arguments.

**RESP3:**

One of the following:

* [Simple string reply]() `OK` if executed correctly.
* [Simple error reply]() in these cases: key does not exist or is of the wrong type, or incorrect number of arguments.

