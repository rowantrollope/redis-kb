---
title: SCRIPT LOAD
url: https://redis.io/docs/latest/commands/script-load/
retrieved_utc: '2026-04-09T20:46:07.279971+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/script-load/index.html.md
---

# SCRIPT LOAD

```json metadata
{
  "title": "SCRIPT LOAD",
  "description": "Loads a server-side Lua script to the script cache.",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"display_text":"script","name":"script","type":"string"}],
  "syntax_fmt": "SCRIPT LOAD script",
  "complexity": "O(N) with N being the length in bytes of the script body.",
  "group": "scripting",
  "command_flags": ["noscript","stale"],
  "acl_categories": ["@slow","@scripting"],
  "since": "2.6.0",
  "arity": 3,
  "tableOfContents": {"sections":[{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": []
}
```Load a script into the scripts cache, without executing it.
After the specified command is loaded into the script cache it will be callable
using [`EVALSHA`]() with the correct SHA1 digest of the script, exactly like after
the first successful invocation of [`EVAL`]().

The script is guaranteed to stay in the script cache forever (unless `SCRIPT
FLUSH` is called).

The command works in the same way even if the script was already present in the
script cache.

For more information about [`EVAL`]() scripts please refer to [Introduction to Eval Scripts]().

## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |

## Return information

**RESP2:**

[Bulk string reply](../../develop/reference/protocol-spec#bulk-strings): the SHA1 digest of the script added into the script cache.

**RESP3:**

[Bulk string reply](../../develop/reference/protocol-spec#bulk-strings): the SHA1 digest of the script added into the script cache.


