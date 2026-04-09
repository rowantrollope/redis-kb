---
title: FCALL_RO
url: https://redis.io/docs/latest/commands/fcall_ro/
retrieved_utc: '2026-04-09T20:46:03.968945+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/fcall_ro/index.html.md
---

# FCALL_RO

```json metadata
{
  "title": "FCALL_RO",
  "description": "Invokes a read-only function.",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"display_text":"function","name":"function","type":"string"},{"display_text":"numkeys","name":"numkeys","type":"integer"},{"display_text":"key","key_spec_index":0,"multiple":true,"name":"key","optional":true,"type":"key"},{"display_text":"arg","multiple":true,"name":"arg","optional":true,"type":"string"}],
  "syntax_fmt": "FCALL_RO function numkeys [key [key ...]] [arg [arg ...]]",
  "complexity": "Depends on the function that is executed.",
  "group": "scripting",
  "command_flags": ["readonly","noscript","stale","skip_monitor","no_mandatory_keys","movablekeys"],
  "acl_categories": ["@slow","@scripting"],
  "since": "7.0.0",
  "arity": -3,
  "key_specs": [{"RO":true,"access":true,"begin_search":{"spec":{"index":2},"type":"index"},"find_keys":{"spec":{"firstkey":1,"keynumidx":0,"keystep":1},"type":"keynum"},"notes":"We cannot tell how the keys will be used so we assume the worst, RO and ACCESS"}],
  "tableOfContents": {"sections":[{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": []
}
```This is a read-only variant of the [`FCALL`]() command that cannot execute commands that modify data.

For more information about when to use this command vs [`FCALL`](), please refer to [Read-only scripts]().

For more information please refer to [Introduction to Redis Functions]().

## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |

## Return information

**RESP2:**

The return value depends on the function that was executed.

**RESP3:**

The return value depends on the function that was executed.


