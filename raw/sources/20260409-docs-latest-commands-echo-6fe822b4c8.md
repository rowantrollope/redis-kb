---
title: ECHO
url: https://redis.io/docs/latest/commands/echo/
retrieved_utc: '2026-04-09T20:46:03.781600+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/echo/index.html.md
---

# ECHO

```json metadata
{
  "title": "ECHO",
  "description": "Returns the given string.",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"display_text":"message","name":"message","type":"string"}],
  "syntax_fmt": "ECHO message",
  "complexity": "O(1)",
  "group": "connection",
  "command_flags": ["loading","stale","fast"],
  "acl_categories": ["@fast","@connection"],
  "since": "1.0.0",
  "arity": 2,
  "tableOfContents": {"sections":[{"id":"examples","title":"Examples"},{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": []
}
```Returns `message`.

## Examples


ECHO "Hello World!"


## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |

## Return information

**RESP2:**

[Bulk string reply](../../develop/reference/protocol-spec#bulk-strings): the given string.

**RESP3:**

[Bulk string reply](../../develop/reference/protocol-spec#bulk-strings): the given string.


