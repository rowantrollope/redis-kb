---
title: SLOWLOG HELP
url: https://redis.io/docs/latest/commands/slowlog-help/
retrieved_utc: '2026-04-09T20:46:07.536871+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/slowlog-help/index.html.md
---

# SLOWLOG HELP

```json metadata
{
  "title": "SLOWLOG HELP",
  "description": "Show helpful text about the different subcommands",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "syntax_fmt": "SLOWLOG HELP",
  "complexity": "O(1)",
  "group": "server",
  "command_flags": ["loading","stale"],
  "acl_categories": ["@slow"],
  "since": "6.2.0",
  "arity": 2,
  "tableOfContents": {"sections":[{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": []
}
```The `SLOWLOG HELP` command returns a helpful text describing the different subcommands.

## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Not supported">&#x274c; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> | <span title="Not supported">&#x274c; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> |  |

## Return information

**RESP2:**

[Array reply](../../develop/reference/protocol-spec#arrays): a list of sub-commands and their descriptions.

**RESP3:**

[Array reply](../../develop/reference/protocol-spec#arrays): a list of sub-commands and their descriptions.


