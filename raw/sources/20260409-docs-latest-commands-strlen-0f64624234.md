---
title: STRLEN
url: https://redis.io/docs/latest/commands/strlen/
retrieved_utc: '2026-04-09T20:46:07.821481+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/strlen/index.html.md
---

# STRLEN

```json metadata
{
  "title": "STRLEN",
  "description": "Returns the length of a string value.",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"display_text":"key","key_spec_index":0,"name":"key","type":"key"}],
  "syntax_fmt": "STRLEN key",
  "complexity": "O(1)",
  "group": "string",
  "command_flags": ["readonly","fast"],
  "acl_categories": ["@read","@string","@fast"],
  "since": "2.2.0",
  "arity": 2,
  "key_specs": [{"RO":true,"begin_search":{"spec":{"index":1},"type":"index"},"find_keys":{"spec":{"keystep":1,"lastkey":0,"limit":0},"type":"range"}}],
  "tableOfContents": {"sections":[{"id":"examples","title":"Examples"},{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": []
}
```Returns the length of the string value stored at `key`.
An error is returned when `key` holds a non-string value.

## Examples


SET mykey "Hello world"
STRLEN mykey
STRLEN nonexisting


## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |

## Return information

**RESP2:**

[Integer reply](../../develop/reference/protocol-spec#integers): the length of the string stored at key, or 0 when the key does not exist.

**RESP3:**

[Integer reply](../../develop/reference/protocol-spec#integers): the length of the string stored at key, or 0 when the key does not exist.


