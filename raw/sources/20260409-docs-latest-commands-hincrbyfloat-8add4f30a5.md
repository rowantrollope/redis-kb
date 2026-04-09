---
title: HINCRBYFLOAT
url: https://redis.io/docs/latest/commands/hincrbyfloat/
retrieved_utc: '2026-04-09T20:46:04.576599+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/hincrbyfloat/index.html.md
---

# HINCRBYFLOAT

```json metadata
{
  "title": "HINCRBYFLOAT",
  "description": "Increments the floating point value of a field by a number. Uses 0 as initial value if the field doesn't exist.",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"display_text":"key","key_spec_index":0,"name":"key","type":"key"},{"display_text":"field","name":"field","type":"string"},{"display_text":"increment","name":"increment","type":"double"}],
  "syntax_fmt": "HINCRBYFLOAT key field increment",
  "complexity": "O(1)",
  "group": "hash",
  "command_flags": ["write","denyoom","fast"],
  "acl_categories": ["@write","@hash","@fast"],
  "since": "2.6.0",
  "arity": 4,
  "key_specs": [{"RW":true,"access":true,"begin_search":{"spec":{"index":1},"type":"index"},"find_keys":{"spec":{"keystep":1,"lastkey":0,"limit":0},"type":"range"},"update":true}],
  "tableOfContents": {"sections":[{"id":"examples","title":"Examples"},{"id":"implementation-details","title":"Implementation details"},{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": []
}
```Increment the specified `field` of a hash stored at `key`, and representing a
floating point number, by the specified `increment`. If the increment value
is negative, the result is to have the hash field value **decremented** instead of incremented.
If the field does not exist, it is set to `0` before performing the operation.
An error is returned if one of the following conditions occur:

* The key contains a value of the wrong type (not a hash).
* The current field content or the specified increment are not parsable as a
  double precision floating point number.

The exact behavior of this command is identical to the one of the [`INCRBYFLOAT`]()
command, please refer to the documentation of [`INCRBYFLOAT`]() for further
information.

## Examples


HSET mykey field 10.50
HINCRBYFLOAT mykey field 0.1
HINCRBYFLOAT mykey field -5
HSET mykey field 5.0e3
HINCRBYFLOAT mykey field 2.0e2


## Implementation details

The command is always propagated in the replication link and the Append Only
File as a [`HSET`]() operation, so that differences in the underlying floating point
math implementation will not be sources of inconsistency.

## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |

## Return information

**RESP2:**

[Bulk string reply](../../develop/reference/protocol-spec#bulk-strings): the value of the field after the increment operation.

**RESP3:**

[Bulk string reply](../../develop/reference/protocol-spec#bulk-strings): The value of the field after the increment operation.


