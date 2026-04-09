---
title: GETEX
url: https://redis.io/docs/latest/commands/getex/
retrieved_utc: '2026-04-09T20:46:04.437804+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/getex/index.html.md
---

# GETEX

```json metadata
{
  "title": "GETEX",
  "description": "Returns the string value of a key after setting its expiration time.",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"display_text":"key","key_spec_index":0,"name":"key","type":"key"},{"arguments":[{"display_text":"seconds","name":"seconds","token":"EX","type":"integer"},{"display_text":"milliseconds","name":"milliseconds","token":"PX","type":"integer"},{"display_text":"unix-time-seconds","name":"unix-time-seconds","token":"EXAT","type":"unix-time"},{"display_text":"unix-time-milliseconds","name":"unix-time-milliseconds","token":"PXAT","type":"unix-time"},{"display_text":"persist","name":"persist","token":"PERSIST","type":"pure-token"}],"name":"expiration","optional":true,"type":"oneof"}],
  "syntax_fmt": "GETEX key [EXÂ seconds | PXÂ milliseconds | EXATÂ unix-time-seconds |\n  PXATÂ unix-time-milliseconds | PERSIST]",
  "complexity": "O(1)",
  "group": "string",
  "command_flags": ["write","fast"],
  "acl_categories": ["@write","@string","@fast"],
  "since": "6.2.0",
  "arity": -2,
  "key_specs": [{"RW":true,"access":true,"begin_search":{"spec":{"index":1},"type":"index"},"find_keys":{"spec":{"keystep":1,"lastkey":0,"limit":0},"type":"range"},"notes":"RW and UPDATE because it changes the TTL","update":true}],
  "tableOfContents": {"sections":[{"id":"options","title":"Options"},{"id":"examples","title":"Examples"},{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": []
}
```Get the value of `key` and optionally set its expiration.
`GETEX` is similar to [`GET`](), but is a write command with additional options.

## Options

The `GETEX` command supports a set of options that modify its behavior:

* `EX` *seconds* -- Set the specified expire time, in seconds.
* `PX` *milliseconds* -- Set the specified expire time, in milliseconds.
* `EXAT` *timestamp-seconds* -- Set the specified Unix time at which the key will expire, in seconds.
* `PXAT` *timestamp-milliseconds* -- Set the specified Unix time at which the key will expire, in milliseconds.
* [`PERSIST`]() -- Remove the time to live associated with the key.

## Examples


SET mykey "Hello"
GETEX mykey
TTL mykey
GETEX mykey EX 60
TTL mykey


## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active\*</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active\*</nobr></span> | \*Not supported for HyperLogLog. |

## Return information

**RESP2:**

[Bulk string reply](../../develop/reference/protocol-spec#bulk-strings): the value of `key`
[Nil reply](../../develop/reference/protocol-spec#bulk-strings): if `key` does not exist.

**RESP3:**

[Bulk string reply](../../develop/reference/protocol-spec#bulk-strings): the value of `key`
[Null reply](../../develop/reference/protocol-spec#nulls): if `key` does not exist.


