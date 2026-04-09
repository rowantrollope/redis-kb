---
title: EXEC
url: https://redis.io/docs/latest/commands/exec/
retrieved_utc: '2026-04-09T20:46:03.862305+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/exec/index.html.md
---

# EXEC

```json metadata
{
  "title": "EXEC",
  "description": "Executes all commands in a transaction.",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "syntax_fmt": "EXEC",
  "complexity": "Depends on commands in the transaction",
  "group": "transactions",
  "command_flags": ["noscript","loading","stale","skip_slowlog"],
  "acl_categories": ["@slow","@transaction"],
  "since": "1.2.0",
  "arity": 1,
  "tableOfContents": {"sections":[{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": []
}
```
This command's behavior varies in clustered Redis environments. See the [multi-key operations]() page for more information.



Executes all previously queued commands in a [transaction][tt] and restores the
connection state to normal.

[tt]: /develop/interact/transactions

When using [`WATCH`](), `EXEC` will execute commands only if the watched keys were
not modified, allowing for a [check-and-set mechanism][ttc].

[ttc]: /develop/interact/transactions#cas

## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |

## Return information

**RESP2:**

One of the following:
* [Array reply](../../develop/reference/protocol-spec#arrays): each element being the reply to each of the commands in the atomic transaction.
* [Nil reply](../../develop/reference/protocol-spec#bulk-strings): the transaction was aborted because a `WATCH`ed key was touched.

**RESP3:**

One of the following:
* [Array reply](../../develop/reference/protocol-spec#arrays): each element being the reply to each of the commands in the atomic transaction.
* [Null reply](../../develop/reference/protocol-spec#nulls): the transaction was aborted because a `WATCH`ed key was touched.


