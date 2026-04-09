---
title: HOTKEYS RESET
url: https://redis.io/docs/latest/commands/hotkeys-reset/
retrieved_utc: '2026-04-09T20:46:04.621524+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/hotkeys-reset/index.html.md
---

# HOTKEYS RESET

```json metadata
{
  "title": "HOTKEYS RESET",
  "description": "Release the resources used for hotkey tracking.",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "syntax_fmt": "HOTKEYS RESET",
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
```Release the resources used for hotkey tracking.

This command can only be executed when hotkey tracking is stopped. It will return an error if tracking is currently active. Use [`HOTKEYS STOP`]() first to stop tracking, then use `HOTKEYS RESET` to free the allocated resources.

## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Not supported">&#x274c; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> | <span title="Not supported">&#x274c; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> |  |

## Return information

**RESP2:**

One of the following:

- [Simple string reply](): `OK` when resources are successfully released.
- [Simple error reply](): when tracking is currently active.

**RESP3:**

One of the following:

- [Simple string reply](): `OK` when resources are successfully released.
- [Simple error reply](): when tracking is currently active.


