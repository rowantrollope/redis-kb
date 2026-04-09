---
title: MSETEX
url: https://redis.io/docs/latest/commands/msetex/
retrieved_utc: '2026-04-09T20:46:05.843713+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/msetex/index.html.md
---

# MSETEX

```json metadata
{
  "title": "MSETEX",
  "description": "Atomically sets multiple string keys with a shared expiration in a single operation. Supports flexible argument parsing where condition and expiration flags can appear in any order.",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"display_text":"numkeys","name":"numkeys","type":"integer"},{"arguments":[{"display_text":"key","key_spec_index":0,"name":"key","type":"key"},{"display_text":"value","name":"value","type":"string"}],"multiple":true,"name":"data","type":"block"},{"arguments":[{"display_text":"nx","name":"nx","token":"NX","type":"pure-token"},{"display_text":"xx","name":"xx","token":"XX","type":"pure-token"}],"name":"condition","optional":true,"type":"oneof"},{"arguments":[{"display_text":"seconds","name":"seconds","token":"EX","type":"integer"},{"display_text":"milliseconds","name":"milliseconds","token":"PX","type":"integer"},{"display_text":"unix-time-seconds","name":"unix-time-seconds","token":"EXAT","type":"unix-time"},{"display_text":"unix-time-milliseconds","name":"unix-time-milliseconds","token":"PXAT","type":"unix-time"},{"display_text":"keepttl","name":"keepttl","token":"KEEPTTL","type":"pure-token"}],"name":"expiration","optional":true,"type":"oneof"}],
  "syntax_fmt": "MSETEX numkeys key value [key value ...] [NX | XX] [EXÂ seconds |\n  PXÂ milliseconds | EXATÂ unix-time-seconds |\n  PXATÂ unix-time-milliseconds | KEEPTTL]",
  "complexity": "O(N) where N is the number of keys to set.",
  "group": "string",
  "command_flags": ["write","denyoom","movablekeys"],
  "acl_categories": ["@write","@string","@slow"],
  "since": "8.4.0",
  "arity": -4,
  "key_specs": [{"OW":true,"begin_search":{"spec":{"index":1},"type":"index"},"find_keys":{"spec":{"firstkey":1,"keynumidx":0,"keystep":2},"type":"keynum"},"update":true}],
  "tableOfContents": {"sections":[{"id":"required-arguments","title":"Required arguments"},{"id":"optional-arguments","title":"Optional arguments"},{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": []
}
```Atomically sets multiple string keys with an optional shared expiration in a single operation.

## Required arguments

<details open><summary><code>numkeys</code></summary>

The number of keys being set.

</details>

<details open><summary><code>key value [key value ...]</code></summary>

A series of key/value pairs.

</details>

## Optional arguments

<details open><summary><code>condition and expiration flags</code></summary>

The `MSETEX` command supports a set of options that modify its behavior:

* `NX` -- Set the keys and their expiration time only if none of the specified keys exist.
* `XX` -- Set the keys and their expiration time only if all of the specified keys already exist.
* `EX seconds` -- Set the specified expiration time in seconds (a positive integer).
* `PX milliseconds` -- Set the specified expiration time in milliseconds (a positive integer).
* `EXAT unix-time-seconds` -- Set the specified Unix time in seconds (a positive integer) at which the key(s) will expire.
* `PXAT unix-time-milliseconds` -- Set the specified Unix time in milliseconds (a positive integer) at which the key(s) will expire.
* `KEEPTTL` -- Retain the time to live associated with the keys.

</details>

## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Not supported">&#x274c; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> | <span title="Not supported">&#x274c; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> |  |

## Return information

**RESP2:**

[Integer reply](): 0 if none of the keys were set; 1 if all of the keys were set.

**RESP3:**

[Integer reply](): 0 if none of the keys were set; 1 if all of the keys were set.


