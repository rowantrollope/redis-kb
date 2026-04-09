---
title: HOTKEYS STOP
url: https://redis.io/docs/latest/commands/hotkeys-stop/
retrieved_utc: '2026-04-09T20:46:04.639090+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/hotkeys-stop/index.html.md
---

# HOTKEYS STOP

```json metadata
{
  "title": "HOTKEYS STOP",
  "description": "Stops hotkeys tracking.",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "syntax_fmt": "HOTKEYS STOP",
  "complexity": "O(1)",
  "group": "server",
  "command_flags": ["admin","noscript"],
  "acl_categories": ["@admin","@slow","@dangerous"],
  "since": "8.6.0",
  "arity": 2,
  "tableOfContents": {"sections":[{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": []
}
```Stops hotkeys tracking but preserves the collected data.

After stopping, the tracking data remains available through [`HOTKEYS GET`]() until [`HOTKEYS RESET`]() is called or a new tracking session is started.

## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Not supported">&#x274c; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> | <span title="Not supported">&#x274c; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> |  |

## Return information

**RESP2:**

One of the following:

- [Simple string reply](): `OK` when tracking is successfully stopped.
- [Simple error reply](): when tracking is not currently active.

**RESP3:**

One of the following:

- [Simple string reply](): `OK` when tracking is successfully stopped.
- [Simple error reply](): when tracking is not currently active.


