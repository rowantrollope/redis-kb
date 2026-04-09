---
title: PSETEX
url: https://redis.io/docs/latest/commands/psetex/
retrieved_utc: '2026-04-09T20:46:06.337666+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/psetex/index.html.md
---

# PSETEX

```json metadata
{
  "title": "PSETEX",
  "description": "Sets both string value and expiration time in milliseconds of a key. The key is created if it doesn't exist.",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"display_text":"key","key_spec_index":0,"name":"key","type":"key"},{"display_text":"milliseconds","name":"milliseconds","type":"integer"},{"display_text":"value","name":"value","type":"string"}],
  "syntax_fmt": "PSETEX key milliseconds value",
  "complexity": "O(1)",
  "group": "string",
  "command_flags": ["write","denyoom"],
  "acl_categories": ["@write","@string","@slow"],
  "since": "2.6.0",
  "arity": 4,
  "key_specs": [{"OW":true,"begin_search":{"spec":{"index":1},"type":"index"},"find_keys":{"spec":{"keystep":1,"lastkey":0,"limit":0},"type":"range"},"update":true}],
  "tableOfContents": {"sections":[{"id":"examples","title":"Examples"},{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": []
}
````PSETEX` works exactly like [`SETEX`]() with the sole difference that the expire
time is specified in milliseconds instead of seconds.

## Examples


PSETEX mykey 1000 "Hello"
PTTL mykey
GET mykey


## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |

## Return information

**RESP2:**

[Simple string reply](../../develop/reference/protocol-spec#simple-strings): `OK`.

**RESP3:**

[Simple string reply](../../develop/reference/protocol-spec#simple-strings): `OK`.


