---
title: SCRIPT FLUSH
url: https://redis.io/docs/latest/commands/script-flush/
retrieved_utc: '2026-04-09T20:46:07.257185+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/script-flush/index.html.md
---

# SCRIPT FLUSH

```json metadata
{
  "title": "SCRIPT FLUSH",
  "description": "Removes all server-side Lua scripts from the script cache.",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"arguments":[{"display_text":"async","name":"async","token":"ASYNC","type":"pure-token"},{"display_text":"sync","name":"sync","token":"SYNC","type":"pure-token"}],"name":"flush-type","optional":true,"since":"6.2.0","type":"oneof"}],
  "syntax_fmt": "SCRIPT FLUSH [ASYNC | SYNC]",
  "complexity": "O(N) with N being the number of scripts in cache",
  "group": "scripting",
  "command_flags": ["noscript"],
  "acl_categories": ["@slow","@scripting"],
  "since": "2.6.0",
  "arity": -2,
  "tableOfContents": {"sections":[{"id":"behavior-change-history","title":"Behavior change history"},{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": []
}
```Flush the Lua scripts cache.

By default, `SCRIPT FLUSH` will synchronously flush the cache.
Starting with Redis 6.2, setting the **lazyfree-lazy-user-flush** configuration directive to "yes" changes the default flush mode to asynchronous.

It is possible to use one of the following modifiers to dictate the flushing mode explicitly:

* `ASYNC`: flushes the cache asynchronously
* `SYNC`: flushes the cache synchronously

For more information about [`EVAL`]() scripts please refer to [Introduction to Eval Scripts]().

## Behavior change history

*   `>= 6.2.0`: Default flush behavior now configurable by the **lazyfree-lazy-user-flush** configuration directive.

## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |

## Return information

**RESP2:**

[Simple string reply](../../develop/reference/protocol-spec#simple-strings): `OK`.

**RESP3:**

[Simple string reply](../../develop/reference/protocol-spec#simple-strings): `OK`.


