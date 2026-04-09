---
title: COMMAND INFO
url: https://redis.io/docs/latest/commands/command-info/
retrieved_utc: '2026-04-09T20:46:03.378965+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/command-info/index.html.md
---

# COMMAND INFO

```json metadata
{
  "title": "COMMAND INFO",
  "description": "Returns information about one, multiple or all commands.",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"display_text":"command-name","multiple":true,"name":"command-name","optional":true,"type":"string"}],
  "syntax_fmt": "COMMAND INFO [command-name [command-name ...]]",
  "complexity": "O(N) where N is the number of commands to look up",
  "group": "server",
  "command_flags": ["loading","stale"],
  "acl_categories": ["@slow","@connection"],
  "since": "2.8.13",
  "arity": -2,
  "tableOfContents": {"sections":[{"id":"examples","title":"Examples"},{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": []
}
```Returns [Array reply]() of details about multiple Redis commands.

Same result format as [`COMMAND`]() except you can specify which commands
get returned.

If you request details about non-existing commands, their return
position will be nil.

## Examples


COMMAND INFO get set eval
COMMAND INFO foo evalsha config bar


## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |

## Return information

**RESP2:**

[Array reply](../../develop/reference/protocol-spec#arrays): a nested list of command details.

**RESP3:**

[Array reply](../../develop/reference/protocol-spec#arrays): a nested list of command details.


