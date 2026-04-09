---
title: FUNCTION HELP
url: https://redis.io/docs/latest/commands/function-help/
retrieved_utc: '2026-04-09T20:46:04.272549+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/function-help/index.html.md
---

# FUNCTION HELP

```json metadata
{
  "title": "FUNCTION HELP",
  "description": "Returns helpful text about the different subcommands.",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "syntax_fmt": "FUNCTION HELP",
  "complexity": "O(1)",
  "group": "scripting",
  "command_flags": ["loading","stale"],
  "acl_categories": ["@slow","@scripting"],
  "since": "7.0.0",
  "arity": 2,
  "tableOfContents": {"sections":[{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": []
}
```The `FUNCTION HELP` command returns a helpful text describing the different subcommands.

## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |

## Return information

**RESP2:**

[Array reply](../../develop/reference/protocol-spec#arrays): a list of sub-commands and their descriptions

**RESP3:**

[Array reply](../../develop/reference/protocol-spec#arrays): a list of sub-commands and their descriptions.


