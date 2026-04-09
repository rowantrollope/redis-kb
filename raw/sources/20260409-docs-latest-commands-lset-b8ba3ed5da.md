---
title: LSET
url: https://redis.io/docs/latest/commands/lset/
retrieved_utc: '2026-04-09T20:46:05.526969+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/lset/index.html.md
---

# LSET

```json metadata
{
  "title": "LSET",
  "description": "Sets the value of an element in a list by its index.",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"display_text":"key","key_spec_index":0,"name":"key","type":"key"},{"display_text":"index","name":"index","type":"integer"},{"display_text":"element","name":"element","type":"string"}],
  "syntax_fmt": "LSET key index element",
  "complexity": "O(N) where N is the length of the list. Setting either the first or the last element of the list is O(1).",
  "group": "list",
  "command_flags": ["write","denyoom"],
  "acl_categories": ["@write","@list","@slow"],
  "since": "1.0.0",
  "arity": 4,
  "key_specs": [{"RW":true,"begin_search":{"spec":{"index":1},"type":"index"},"find_keys":{"spec":{"keystep":1,"lastkey":0,"limit":0},"type":"range"},"update":true}],
  "tableOfContents": {"sections":[{"id":"examples","title":"Examples"},{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": []
}
```Sets the list element at `index` to `element`.
For more information on the `index` argument, see [`LINDEX`]().

An error is returned for out of range indexes.

## Examples


RPUSH mylist "one"
RPUSH mylist "two"
RPUSH mylist "three"
LSET mylist 0 "four"
LSET mylist -2 "five"
LRANGE mylist 0 -1


## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |

## Return information

**RESP2:**

[Simple string reply](../../develop/reference/protocol-spec#simple-strings): `OK`.

**RESP3:**

[Simple string reply](../../develop/reference/protocol-spec#simple-strings): `OK`.


