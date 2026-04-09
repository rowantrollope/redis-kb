---
title: CLIENT INFO
url: https://redis.io/docs/latest/commands/client-info/
retrieved_utc: '2026-04-09T20:46:02.603892+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/client-info/index.html.md
---

# CLIENT INFO

```json metadata
{
  "title": "CLIENT INFO",
  "description": "Returns information about the connection.",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "syntax_fmt": "CLIENT INFO",
  "complexity": "O(1)",
  "group": "connection",
  "command_flags": ["noscript","loading","stale"],
  "acl_categories": ["@slow","@connection"],
  "since": "6.2.0",
  "arity": 2,
  "tableOfContents": {"sections":[{"id":"examples","title":"Examples"},{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": []
}
```The command returns information and statistics about the current client connection in a mostly human readable format.

The reply format is identical to that of [`CLIENT LIST`](), and the content consists only of information about the current client.

## Examples


CLIENT INFO


## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |

## Return information

**RESP2:**

[Bulk string reply](../../develop/reference/protocol-spec#bulk-strings): a unique string for the current client, as described at the `CLIENT LIST` page.

**RESP3:**

[Bulk string reply](../../develop/reference/protocol-spec#bulk-strings): a unique string for the current client, as described at the `CLIENT LIST` page.


