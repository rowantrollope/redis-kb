---
title: MULTI
url: https://redis.io/docs/latest/commands/multi/
retrieved_utc: '2026-04-09T20:46:05.838965+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/multi/index.html.md
---

# MULTI

```json metadata
{
  "title": "MULTI",
  "description": "Starts a transaction.",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "syntax_fmt": "MULTI",
  "complexity": "O(1)",
  "group": "transactions",
  "command_flags": ["noscript","loading","stale","fast","allow_busy"],
  "acl_categories": ["@fast","@transaction"],
  "since": "1.2.0",
  "arity": 1,
  "tableOfContents": {"sections":[{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": []
}
```
This command's behavior varies in clustered Redis environments. See the [multi-key operations]() page for more information.



Marks the start of a [transaction][tt] block.
Subsequent commands will be queued for atomic execution using [`EXEC`]().

[tt]: /develop/interact/transactions

## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |

## Return information

**RESP2:**

[Simple string reply](../../develop/reference/protocol-spec#simple-strings): `OK`.

**RESP3:**

[Simple string reply](../../develop/reference/protocol-spec#simple-strings): `OK`.


