---
title: HOTKEYS HELP
url: https://redis.io/docs/latest/commands/hotkeys-help/
retrieved_utc: '2026-04-09T20:46:04.631209+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/hotkeys-help/index.html.md
---

# HOTKEYS HELP

```json metadata
{
  "title": "HOTKEYS HELP",
  "description": "Returns helpful text about HOTKEYS commands and parameters.",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "syntax_fmt": "HOTKEYS HELP",
  "complexity": "O(1)",
  "group": "server",
  "command_flags": ["loading","stale"],
  "acl_categories": ["@admin"],
  "since": "8.6.1",
  "arity": 2,
  "tableOfContents": {"sections":[{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": []
}
```
Returns helpful text about `HOTKEYS` commands and parameters.

## Return information

**RESP2:**

Returns an [array reply]() with the list of `HOTKEYS` subcommands and their descriptions.

**RESP3:**

Returns an [array reply]() with the list of `HOTKEYS` subcommands and their descriptions.


