---
title: FLUSHDB
url: https://redis.io/docs/latest/commands/flushdb/
retrieved_utc: '2026-04-09T20:46:04.005899+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/flushdb/index.html.md
---

# FLUSHDB

```json metadata
{
  "title": "FLUSHDB",
  "description": "Remove all keys from the current database.",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"arguments":[{"display_text":"async","name":"async","since":"4.0.0","token":"ASYNC","type":"pure-token"},{"display_text":"sync","name":"sync","since":"6.2.0","token":"SYNC","type":"pure-token"}],"name":"flush-type","optional":true,"type":"oneof"}],
  "syntax_fmt": "FLUSHDB [ASYNC | SYNC]",
  "complexity": "O(N) where N is the number of keys in the selected database",
  "group": "server",
  "command_flags": ["write"],
  "acl_categories": ["@keyspace","@write","@slow","@dangerous"],
  "since": "1.0.0",
  "arity": -1,
  "tableOfContents": {"sections":[{"id":"notes","title":"Notes"},{"id":"behavior-change-history","title":"Behavior change history"},{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": []
}
```
This command's behavior varies in clustered Redis environments. See the [multi-key operations]() page for more information.



Delete all the keys of the currently selected DB.
This command never fails.

By default, `FLUSHDB` will synchronously flush all keys from the database.
Starting with Redis 6.2, setting the **lazyfree-lazy-user-flush** configuration directive to "yes" changes the default flush mode to asynchronous.

It is possible to use one of the following modifiers to dictate the flushing mode explicitly:

* `ASYNC`: flushes the database asynchronously
* `SYNC`: flushes the database synchronously

## Notes

* An asynchronous `FLUSHDB` command only deletes keys that were present at the time the command was invoked. Keys created during an asynchronous flush will be unaffected.
* This command does not delete functions.
* When using Redis Cluster, this command is identical to `FLUSHALL` since a Redis Cluster supports only one database with an ID of zero.

## Behavior change history

*   `>= 6.2.0`: Default flush behavior now configurable by the **lazyfree-lazy-user-flush** configuration directive.

## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Supported">&#x2705; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active\*</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> | \*Can use the [Active-Active flush API request](). |

## Return information

**RESP2:**

[Simple string reply](../../develop/reference/protocol-spec#simple-strings): `OK`.

**RESP3:**

[Simple string reply](../../develop/reference/protocol-spec#simple-strings): `OK`.


