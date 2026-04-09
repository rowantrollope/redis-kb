---
title: MSETNX
url: https://redis.io/docs/latest/commands/msetnx/
retrieved_utc: '2026-04-09T20:46:05.839247+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/msetnx/index.html.md
---

# MSETNX

```json metadata
{
  "title": "MSETNX",
  "description": "Atomically modifies the string values of one or more keys only when all keys don't exist.",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"arguments":[{"display_text":"key","key_spec_index":0,"name":"key","type":"key"},{"display_text":"value","name":"value","type":"string"}],"multiple":true,"name":"data","type":"block"}],
  "syntax_fmt": "MSETNX key value [key value ...]",
  "complexity": "O(N) where N is the number of keys to set.",
  "group": "string",
  "command_flags": ["write","denyoom"],
  "acl_categories": ["@write","@string","@slow"],
  "since": "1.0.1",
  "arity": -3,
  "key_specs": [{"OW":true,"begin_search":{"spec":{"index":1},"type":"index"},"find_keys":{"spec":{"keystep":2,"lastkey":-1,"limit":0},"type":"range"},"insert":true}],
  "tableOfContents": {"sections":[{"id":"examples","title":"Examples"},{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": []
}
```
This command's behavior varies in clustered Redis environments. See the [multi-key operations]() page for more information.



Sets the given keys to their respective values.
`MSETNX` will not perform any operation at all even if just a single key already
exists.

Because of this semantic `MSETNX` can be used in order to set different keys
representing different fields of a unique logic object in a way that ensures
that either all the fields or none at all are set.

`MSETNX` is atomic, so all given keys are set at once.
It is not possible for clients to see that some of the keys were updated while
others are unchanged.

## Examples


MSETNX key1 "Hello" key2 "there"
MSETNX key2 "new" key3 "world"
MGET key1 key2 key3


## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |

## Return information

**RESP2:**

One of the following:
* [Integer reply](../../develop/reference/protocol-spec#integers): `0` if no key was set (at least one key already existed).
* [Integer reply](../../develop/reference/protocol-spec#integers): `1` if all the keys were set.

**RESP3:**

One of the following:
* [Integer reply](../../develop/reference/protocol-spec#integers): `0` if no key was set (at least one key already existed).
* [Integer reply](../../develop/reference/protocol-spec#integers): `1` if all the keys were set.


