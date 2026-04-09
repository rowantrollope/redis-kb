---
title: RPUSHX
url: https://redis.io/docs/latest/commands/rpushx/
retrieved_utc: '2026-04-09T20:46:07.167522+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/rpushx/index.html.md
---

# RPUSHX

```json metadata
{
  "title": "RPUSHX",
  "description": "Appends an element to a list only when the list exists.",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"display_text":"key","key_spec_index":0,"name":"key","type":"key"},{"display_text":"element","multiple":true,"name":"element","type":"string"}],
  "syntax_fmt": "RPUSHX key element [element ...]",
  "complexity": "O(1) for each element added, so O(N) to add N elements when the command is called with multiple arguments.",
  "group": "list",
  "command_flags": ["write","denyoom","fast"],
  "acl_categories": ["@write","@list","@fast"],
  "since": "2.2.0",
  "arity": -3,
  "key_specs": [{"RW":true,"begin_search":{"spec":{"index":1},"type":"index"},"find_keys":{"spec":{"keystep":1,"lastkey":0,"limit":0},"type":"range"},"insert":true}],
  "tableOfContents": {"sections":[{"id":"examples","title":"Examples"},{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": []
}
```Inserts specified values at the tail of the list stored at `key`, only if `key`
already exists and holds a list.
In contrary to [`RPUSH`](), no operation will be performed when `key` does not yet
exist.

## Examples


RPUSH mylist "Hello"
RPUSHX mylist "World"
RPUSHX myotherlist "World"
LRANGE mylist 0 -1
LRANGE myotherlist 0 -1


## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |

## Return information

**RESP2:**

[Integer reply](../../develop/reference/protocol-spec#integers): the length of the list after the push operation.

**RESP3:**

[Integer reply](../../develop/reference/protocol-spec#integers): the length of the list after the push operation.


