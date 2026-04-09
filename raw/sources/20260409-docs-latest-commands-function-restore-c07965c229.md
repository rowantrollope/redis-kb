---
title: FUNCTION RESTORE
url: https://redis.io/docs/latest/commands/function-restore/
retrieved_utc: '2026-04-09T20:46:04.299412+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/function-restore/index.html.md
---

# FUNCTION RESTORE

```json metadata
{
  "title": "FUNCTION RESTORE",
  "description": "Restores all libraries from a payload.",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"display_text":"serialized-value","name":"serialized-value","type":"string"},{"arguments":[{"display_text":"flush","name":"flush","token":"FLUSH","type":"pure-token"},{"display_text":"append","name":"append","token":"APPEND","type":"pure-token"},{"display_text":"replace","name":"replace","token":"REPLACE","type":"pure-token"}],"name":"policy","optional":true,"type":"oneof"}],
  "syntax_fmt": "FUNCTION RESTORE serialized-value [FLUSH | APPEND | REPLACE]",
  "complexity": "O(N) where N is the number of functions on the payload",
  "group": "scripting",
  "command_flags": ["write","denyoom","noscript"],
  "acl_categories": ["@write","@slow","@scripting"],
  "since": "7.0.0",
  "arity": -3,
  "tableOfContents": {"sections":[{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": []
}
```Restore libraries from the serialized payload.

You can use the optional _policy_ argument to provide a policy for handling existing libraries.
The following policies are allowed:

* **APPEND:** appends the restored libraries to the existing libraries and aborts on collision. 
  This is the default policy.
* **FLUSH:** deletes all existing libraries before restoring the payload.
* **REPLACE:** appends the restored libraries to the existing libraries, replacing any existing ones in case of name collisions. Note that this policy doesn't prevent function name collisions, only libraries.

For more information please refer to [Introduction to Redis Functions]().

## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |

## Return information

**RESP2:**

[Simple string reply](../../develop/reference/protocol-spec#simple-strings): `OK`.

**RESP3:**

[Simple string reply](../../develop/reference/protocol-spec#simple-strings): `OK`.


