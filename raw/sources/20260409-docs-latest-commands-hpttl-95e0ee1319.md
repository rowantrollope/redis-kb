---
title: HPTTL
url: https://redis.io/docs/latest/commands/hpttl/
retrieved_utc: '2026-04-09T20:46:04.685026+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/hpttl/index.html.md
---

# HPTTL

```json metadata
{
  "title": "HPTTL",
  "description": "Returns the TTL in milliseconds of a hash field.",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"display_text":"key","key_spec_index":0,"name":"key","type":"key"},{"arguments":[{"display_text":"numfields","name":"numfields","type":"integer"},{"display_text":"field","multiple":true,"name":"field","type":"string"}],"name":"fields","token":"FIELDS","type":"block"}],
  "syntax_fmt": "HPTTL key FIELDSÂ numfields field [field ...]",
  "complexity": "O(N) where N is the number of specified fields",
  "group": "hash",
  "command_flags": ["readonly","fast"],
  "acl_categories": ["@read","@hash","@fast"],
  "since": "7.4.0",
  "arity": -5,
  "key_specs": [{"RO":true,"access":true,"begin_search":{"spec":{"index":1},"type":"index"},"find_keys":{"spec":{"keystep":1,"lastkey":0,"limit":0},"type":"range"}}],
  "tableOfContents": {"sections":[{"id":"example","title":"Example"},{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": []
}
```Like [`HTTL`](), this command returns the remaining TTL (time to live) of a field that has an
expiration set, but in milliseconds instead of seconds.

## Example

```
redis> HPTTL no-key FIELDS 3 field1 field2 field3
(nil)
redis> HSET mykey field1 "hello" field2 "world"
(integer) 2
redis> HEXPIRE mykey 300 FIELDS 2 field1 field3
1) (integer) 1
2) (integer) -2
redis> HPTTL mykey FIELDS 3 field1 field2 field3
1) (integer) 292202
2) (integer) -1
3) (integer) -2
```

## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |

## Return information

**RESP2:**

* [Array reply](../../develop/reference/protocol-spec#arrays). For each field:
    - [Integer reply](../../develop/reference/protocol-spec#integers): `-2` if no such field exists in the provided hash key, or the provided key does not exist.
    - [Integer reply](../../develop/reference/protocol-spec#integers): `-1` if the field exists but has no associated expiration set.
    - [Integer reply](../../develop/reference/protocol-spec#integers): the TTL in milliseconds.

**RESP3:**

* [Array reply](../../develop/reference/protocol-spec#arrays). For each field:
    - [Integer reply](../../develop/reference/protocol-spec#integers): `-2` if no such field exists in the provided hash key, or the provided key does not exist.
    - [Integer reply](../../develop/reference/protocol-spec#integers): `-1` if the field exists but has no associated expiration set.
    - [Integer reply](../../develop/reference/protocol-spec#integers): the TTL in milliseconds.


