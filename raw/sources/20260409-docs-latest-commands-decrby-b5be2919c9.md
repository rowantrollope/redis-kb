---
title: DECRBY
url: https://redis.io/docs/latest/commands/decrby/
retrieved_utc: '2026-04-09T20:46:03.680000+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/decrby/index.html.md
---

# DECRBY

```json metadata
{
  "title": "DECRBY",
  "description": "Decrements a number from the integer value of a key. Uses 0 as initial value if the key doesn't exist.",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"display_text":"key","key_spec_index":0,"name":"key","type":"key"},{"display_text":"decrement","name":"decrement","type":"integer"}],
  "syntax_fmt": "DECRBY key decrement",
  "complexity": "O(1)",
  "group": "string",
  "command_flags": ["write","denyoom","fast"],
  "acl_categories": ["@write","@string","@fast"],
  "since": "1.0.0",
  "arity": 3,
  "key_specs": [{"RW":true,"access":true,"begin_search":{"spec":{"index":1},"type":"index"},"find_keys":{"spec":{"keystep":1,"lastkey":0,"limit":0},"type":"range"},"update":true}],
  "tableOfContents": {"sections":[{"id":"examples","title":"Examples"},{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": []
}
```The `DECRBY` command reduces the value stored at the specified `key` by the specified `decrement`.
If the key does not exist, it is initialized with a value of `0` before performing the operation.
If the key's value is not of the correct type or cannot be represented as an integer, an error is returned.
This operation is limited to 64-bit signed integers.

See [`INCR`]() for extra information on increment/decrement operations.

## Examples


SET mykey "10"
DECRBY mykey 3


## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |

## Return information

**RESP2:**

[Integer reply](../../develop/reference/protocol-spec#integers): the value of the key after decrementing it.

**RESP3:**

[Integer reply](../../develop/reference/protocol-spec#integers): the value of the key after decrementing it.


