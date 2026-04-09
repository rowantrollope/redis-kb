---
title: SISMEMBER
url: https://redis.io/docs/latest/commands/sismember/
retrieved_utc: '2026-04-09T20:46:07.487307+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/sismember/index.html.md
---

# SISMEMBER

```json metadata
{
  "title": "SISMEMBER",
  "description": "Determines whether a member belongs to a set.",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"display_text":"key","key_spec_index":0,"name":"key","type":"key"},{"display_text":"member","name":"member","type":"string"}],
  "syntax_fmt": "SISMEMBER key member",
  "complexity": "O(1)",
  "group": "set",
  "command_flags": ["readonly","fast"],
  "acl_categories": ["@read","@set","@fast"],
  "since": "1.0.0",
  "arity": 3,
  "key_specs": [{"RO":true,"begin_search":{"spec":{"index":1},"type":"index"},"find_keys":{"spec":{"keystep":1,"lastkey":0,"limit":0},"type":"range"}}],
  "tableOfContents": {"sections":[{"id":"examples","title":"Examples"},{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": []
}
```Returns if `member` is a member of the set stored at `key`.

## Examples


SADD myset "one"
SISMEMBER myset "one"
SISMEMBER myset "two"


## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |

## Return information

**RESP2:**

One of the following:
* [Integer reply](../../develop/reference/protocol-spec#integers): `0` if the element is not a member of the set, or when the key does not exist.
* [Integer reply](../../develop/reference/protocol-spec#integers): `1` if the element is a member of the set.

**RESP3:**

One of the following:
* [Integer reply](../../develop/reference/protocol-spec#integers): `0` if the element is not a member of the set, or when the key does not exist.
* [Integer reply](../../develop/reference/protocol-spec#integers): `1` if the element is a member of the set.


