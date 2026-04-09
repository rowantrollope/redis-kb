---
title: TDIGEST.MAX
url: https://redis.io/docs/latest/commands/tdigest.max/
retrieved_utc: '2026-04-09T20:45:34.496095+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/tdigest.max/index.html.md
---

# TDIGEST.MAX

```json metadata
{
  "title": "TDIGEST.MAX",
  "description": "Returns the maximum observation value from a t-digest sketch",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"name":"key","type":"key"}],
  "syntax_fmt": "TDIGEST.MAX key",
  "complexity": "O(1)",
  "group": "tdigest",
  "acl_categories": ["@tdigest","@read","@fast"],
  "since": "2.4.0",
  "tableOfContents": {"sections":[{"id":"required-arguments","title":"Required arguments"},{"id":"examples","title":"Examples"},{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": []
}
```Returns the maximum observation value from a t-digest sketch.

## Required arguments

<details open><summary><code>key</code></summary>

is the key name for an existing t-digest sketch.
</details>

## Examples


redis> TDIGEST.CREATE t
OK
redis> TDIGEST.MAX t
"nan"
redis> TDIGEST.ADD t 3 4 1 2 5
OK
redis>TDIGEST.MAX t
"5"


## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Supported">&#x2705; Supported</span><br /> | <span title="Supported">&#x2705; Flexible & Annual</span><br /><span title="Supported">&#x2705; Free & Fixed</nobr></span> |  |

## Return information

**RESP2:**

One of the following:

* [Bulk string reply]() as floating-point representing the maximum observation value from the given sketch. The result is always accurate. `nan` is returned if the sketch is empty.
* [Simple string reply]() in these cases: incorrect number of arguments or incorrect key type.

**RESP3:**

One of the following:

* [Double reply]() representing the maximum observation value from the given sketch. The result is always accurate. `nan` is returned if the sketch is empty.
* [Simple string reply]() in these cases: incorrect number of arguments or incorrect key type.

