---
title: SCRIPT DEBUG
url: https://redis.io/docs/latest/commands/script-debug/
retrieved_utc: '2026-04-09T20:46:07.229141+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/script-debug/index.html.md
---

# SCRIPT DEBUG

```json metadata
{
  "title": "SCRIPT DEBUG",
  "description": "Sets the debug mode of server-side Lua scripts.",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"arguments":[{"display_text":"yes","name":"yes","token":"YES","type":"pure-token"},{"display_text":"sync","name":"sync","token":"SYNC","type":"pure-token"},{"display_text":"no","name":"no","token":"NO","type":"pure-token"}],"name":"mode","type":"oneof"}],
  "syntax_fmt": "SCRIPT DEBUG \u003cYES | SYNC | NO\u003e",
  "complexity": "O(1)",
  "group": "scripting",
  "command_flags": ["noscript"],
  "acl_categories": ["@slow","@scripting"],
  "since": "3.2.0",
  "arity": 3,
  "tableOfContents": {"sections":[{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": []
}
```Set the debug mode for subsequent scripts executed with [`EVAL`](). Redis includes a
complete Lua debugger, codename LDB, that can be used to make the task of
writing complex scripts much simpler. In debug mode Redis acts as a remote
debugging server and a client, such as `redis-cli`, can execute scripts step by
step, set breakpoints, inspect variables and more - for additional information
about LDB refer to the [Redis Lua debugger]() page.

**Important note:** avoid debugging Lua scripts using your Redis production
server. Use a development server instead.

LDB can be enabled in one of two modes: asynchronous or synchronous. In
asynchronous mode the server creates a forked debugging session that does not
block and all changes to the data are **rolled back** after the session
finishes, so debugging can be restarted using the same initial state. The
alternative synchronous debug mode blocks the server while the debugging session
is active and retains all changes to the data set once it ends.

* `YES`. Enable non-blocking asynchronous debugging of Lua scripts (changes are discarded).
* `SYNC`. Enable blocking synchronous debugging of Lua scripts (saves changes to data).
* `NO`. Disables scripts debug mode.

For more information about [`EVAL`]() scripts please refer to [Introduction to Eval Scripts]().

## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Not supported">&#x274c; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> | <span title="Not supported">&#x274c; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> |  |

## Return information

**RESP2:**

[Simple string reply](../../develop/reference/protocol-spec#simple-strings): `OK`.

**RESP3:**

[Simple string reply](../../develop/reference/protocol-spec#simple-strings): `OK`.


