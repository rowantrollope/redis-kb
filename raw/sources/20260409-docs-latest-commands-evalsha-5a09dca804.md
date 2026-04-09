---
title: EVALSHA
url: https://redis.io/docs/latest/commands/evalsha/
retrieved_utc: '2026-04-09T20:46:03.856517+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/evalsha/index.html.md
---

# EVALSHA

```json metadata
{
  "title": "EVALSHA",
  "description": "Executes a server-side Lua script by SHA1 digest.",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"display_text":"sha1","name":"sha1","type":"string"},{"display_text":"numkeys","name":"numkeys","type":"integer"},{"display_text":"key","key_spec_index":0,"multiple":true,"name":"key","optional":true,"type":"key"},{"display_text":"arg","multiple":true,"name":"arg","optional":true,"type":"string"}],
  "syntax_fmt": "EVALSHA sha1 numkeys [key [key ...]] [arg [arg ...]]",
  "complexity": "Depends on the script that is executed.",
  "group": "scripting",
  "command_flags": ["noscript","stale","skip_monitor","no_mandatory_keys","movablekeys"],
  "acl_categories": ["@slow","@scripting"],
  "since": "2.6.0",
  "arity": -3,
  "key_specs": [{"RW":true,"access":true,"begin_search":{"spec":{"index":2},"type":"index"},"find_keys":{"spec":{"firstkey":1,"keynumidx":0,"keystep":1},"type":"keynum"},"update":true}],
  "tableOfContents": {"sections":[{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": []
}
```
This command's behavior varies in clustered Redis environments. See the [multi-key operations]() page for more information.



Evaluate a script from the server's cache by its SHA1 digest.

The server caches scripts by using the [`SCRIPT LOAD`]() command.
The command is otherwise identical to [`EVAL`]().

Please refer to the [Redis Programmability]() and [Introduction to Eval Scripts]() for more information about Lua scripts.

## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |

## Return information

**RESP2:**

The return value depends on the script that was executed.

**RESP3:**

The return value depends on the script that was executed.


