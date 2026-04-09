---
title: SCRIPT EXISTS
url: https://redis.io/docs/latest/commands/script-exists/
retrieved_utc: '2026-04-09T20:46:07.242131+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/script-exists/index.html.md
---

# SCRIPT EXISTS

```json metadata
{
  "title": "SCRIPT EXISTS",
  "description": "Determines whether server-side Lua scripts exist in the script cache.",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"display_text":"sha1","multiple":true,"name":"sha1","type":"string"}],
  "syntax_fmt": "SCRIPT EXISTS sha1 [sha1 ...]",
  "complexity": "O(N) with N being the number of scripts to check (so checking a single script is an O(1) operation).",
  "group": "scripting",
  "command_flags": ["noscript"],
  "acl_categories": ["@slow","@scripting"],
  "since": "2.6.0",
  "arity": -3,
  "tableOfContents": {"sections":[{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": []
}
```Returns information about the existence of the scripts in the script cache.

This command accepts one or more SHA1 digests and returns a list of ones or
zeros to signal if the scripts are already defined or not inside the script
cache.
This can be useful before a pipelining operation to ensure that scripts are
loaded (and if not, to load them using [`SCRIPT LOAD`]()) so that the pipelining
operation can be performed solely using [`EVALSHA`]() instead of [`EVAL`]() to save
bandwidth.

For more information about [`EVAL`]() scripts please refer to [Introduction to Eval Scripts]().

## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |

## Return information

**RESP2:**

[Array reply](../../develop/reference/protocol-spec#arrays): an array of integers that correspond to the specified SHA1 digest arguments.

**RESP3:**

[Array reply](../../develop/reference/protocol-spec#arrays): an array of integers that correspond to the specified SHA1 digest arguments.


