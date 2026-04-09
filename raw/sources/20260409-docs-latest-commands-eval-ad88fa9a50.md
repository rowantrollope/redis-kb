---
title: EVAL
url: https://redis.io/docs/latest/commands/eval/
retrieved_utc: '2026-04-09T20:46:03.822989+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/eval/index.html.md
---

# EVAL

```json metadata
{
  "title": "EVAL",
  "description": "Executes a server-side Lua script.",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"display_text":"script","name":"script","type":"string"},{"display_text":"numkeys","name":"numkeys","type":"integer"},{"display_text":"key","key_spec_index":0,"multiple":true,"name":"key","optional":true,"type":"key"},{"display_text":"arg","multiple":true,"name":"arg","optional":true,"type":"string"}],
  "syntax_fmt": "EVAL script numkeys [key [key ...]] [arg [arg ...]]",
  "complexity": "Depends on the script that is executed.",
  "group": "scripting",
  "command_flags": ["noscript","stale","skip_monitor","no_mandatory_keys","movablekeys"],
  "acl_categories": ["@slow","@scripting"],
  "since": "2.6.0",
  "arity": -3,
  "key_specs": [{"RW":true,"access":true,"begin_search":{"spec":{"index":2},"type":"index"},"find_keys":{"spec":{"firstkey":1,"keynumidx":0,"keystep":1},"type":"keynum"},"notes":"We cannot tell how the keys will be used so we assume the worst, RW and UPDATE","update":true}],
  "tableOfContents": {"sections":[{"id":"examples","title":"Examples"},{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": []
}
```
This command's behavior varies in clustered Redis environments. See the [multi-key operations]() page for more information.



Invoke the execution of a server-side Lua script.

The first argument is the script's source code.
Scripts are written in [Lua](https://lua.org) and executed by the embedded [Lua 5.1]() interpreter in Redis.

The second argument is the number of input key name arguments, followed by all the keys accessed by the script.
These names of input keys are available to the script as the [_KEYS_ global runtime variable]()
Any additional input arguments **should not** represent names of keys.

**Important:**
to ensure the correct execution of scripts, both in standalone and clustered deployments, all names of keys that a script accesses must be explicitly provided as input key arguments.
The script **should only** access keys whose names are given as input arguments.
Scripts **should never** access keys with programmatically-generated names or based on the contents of data structures stored in the database.

**Note:**
in some cases, users will abuse Lua EVAL by embedding values in the script instead of providing them as argument, and thus generating a different script on each call to EVAL.
These are added to the Lua interpreter and cached to redis-server, consuming a large amount of memory over time.
Starting from Redis 7.4, scripts loaded with `EVAL` or [`EVAL_RO`]() will be deleted from redis after a certain number (least recently used order).
The number of evicted scripts can be viewed through [`INFO`]()'s `evicted_scripts`.

Please refer to the [Redis Programmability]() and [Introduction to Eval Scripts]() for more information about Lua scripts.

## Examples

The following example will run a script that returns the first argument that it gets.

```
> EVAL "return ARGV[1]" 0 hello
"hello"
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


