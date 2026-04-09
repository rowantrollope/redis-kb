---
title: COMMAND COUNT
url: https://redis.io/docs/latest/commands/command-count/
retrieved_utc: '2026-04-09T20:46:03.242524+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/command-count/index.html.md
---

# COMMAND COUNT

```json metadata
{
  "title": "COMMAND COUNT",
  "description": "Returns a count of commands.",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "syntax_fmt": "COMMAND COUNT",
  "complexity": "O(1)",
  "group": "server",
  "command_flags": ["loading","stale"],
  "acl_categories": ["@slow","@connection"],
  "since": "2.8.13",
  "arity": 2,
  "tableOfContents": {"sections":[{"id":"examples","title":"Examples"},{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": []
}
```Returns [Integer reply]() of number of total commands in this Redis server.

## Examples


COMMAND COUNT


## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |

## Return information

**RESP2:**

[Integer reply](../../develop/reference/protocol-spec#integers): the number of commands returned by `COMMAND`.

**RESP3:**

[Integer reply](../../develop/reference/protocol-spec#integers): the number of commands returned by `COMMAND`.


