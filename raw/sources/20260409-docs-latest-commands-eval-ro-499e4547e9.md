---
title: EVAL_RO
url: https://redis.io/docs/latest/commands/eval_ro/
retrieved_utc: '2026-04-09T20:46:03.847792+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/eval_ro/index.html.md
---

# EVAL_RO

```json metadata
{
  "title": "EVAL_RO",
  "description": "Executes a read-only server-side Lua script.",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"display_text":"script","name":"script","type":"string"},{"display_text":"numkeys","name":"numkeys","type":"integer"},{"display_text":"key","key_spec_index":0,"multiple":true,"name":"key","optional":true,"type":"key"},{"display_text":"arg","multiple":true,"name":"arg","optional":true,"type":"string"}],
  "syntax_fmt": "EVAL_RO script numkeys [key [key ...]] [arg [arg ...]]",
  "complexity": "Depends on the script that is executed.",
  "group": "scripting",
  "command_flags": ["readonly","noscript","stale","skip_monitor","no_mandatory_keys","movablekeys"],
  "acl_categories": ["@slow","@scripting"],
  "since": "7.0.0",
  "arity": -3,
  "key_specs": [{"RO":true,"access":true,"begin_search":{"spec":{"index":2},"type":"index"},"find_keys":{"spec":{"firstkey":1,"keynumidx":0,"keystep":1},"type":"keynum"},"notes":"We cannot tell how the keys will be used so we assume the worst, RO and ACCESS"}],
  "tableOfContents": {"sections":[{"id":"examples","title":"Examples"},{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": []
}
```This is a read-only variant of the [`EVAL`]() command that cannot execute commands that modify data.

For more information about when to use this command vs [`EVAL`](), please refer to [Read-only scripts]().

For more information about [`EVAL`]() scripts please refer to [Introduction to Eval Scripts]().

## Examples

```
> SET mykey "Hello"
OK

> EVAL_RO "return redis.call('GET', KEYS[1])" 1 mykey
"Hello"

> EVAL_RO "return redis.call('DEL', KEYS[1])" 1 mykey
(error) ERR Error running script (call to b0d697da25b13e49157b2c214a4033546aba2104): @user_script:1: @user_script: 1: Write commands are not allowed from read-only scripts.
```

## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |

## Return information

**RESP2:**

The return value depends on the script that was executed.

**RESP3:**

The return value depends on the script that was executed.


