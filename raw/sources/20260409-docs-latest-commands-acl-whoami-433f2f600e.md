---
title: ACL WHOAMI
url: https://redis.io/docs/latest/commands/acl-whoami/
retrieved_utc: '2026-04-09T20:46:01.730349+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/acl-whoami/index.html.md
---

# ACL WHOAMI

```json metadata
{
  "title": "ACL WHOAMI",
  "description": "Returns the authenticated username of the current connection.",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "syntax_fmt": "ACL WHOAMI",
  "complexity": "O(1)",
  "group": "server",
  "command_flags": ["noscript","loading","stale"],
  "acl_categories": ["@slow"],
  "since": "6.0.0",
  "arity": 2,
  "tableOfContents": {"sections":[{"id":"examples","title":"Examples"},{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": []
}
```Return the username the current connection is authenticated with.
New connections are authenticated with the "default" user. They
can change user using [`AUTH`]().

## Examples

```
> ACL WHOAMI
"default"
```

## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | Not supported for [scripts](). |

## Return information

**RESP2:**

[Bulk string reply](../../develop/reference/protocol-spec#bulk-strings): the username of the current connection.

**RESP3:**

[Bulk string reply](../../develop/reference/protocol-spec#bulk-strings): the username of the current connection.


