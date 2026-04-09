---
title: XGROUP CREATECONSUMER
url: https://redis.io/docs/latest/commands/xgroup-createconsumer/
retrieved_utc: '2026-04-09T20:45:37.892959+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/xgroup-createconsumer/index.html.md
---

# XGROUP CREATECONSUMER

```json metadata
{
  "title": "XGROUP CREATECONSUMER",
  "description": "Creates a consumer in a consumer group.",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"display_text":"key","key_spec_index":0,"name":"key","type":"key"},{"display_text":"group","name":"group","type":"string"},{"display_text":"consumer","name":"consumer","type":"string"}],
  "syntax_fmt": "XGROUP CREATECONSUMER key group consumer",
  "complexity": "O(1)",
  "group": "stream",
  "command_flags": ["write","denyoom"],
  "acl_categories": ["@write","@stream","@slow"],
  "since": "6.2.0",
  "arity": 5,
  "key_specs": [{"RW":true,"begin_search":{"spec":{"index":2},"type":"index"},"find_keys":{"spec":{"keystep":1,"lastkey":0,"limit":0},"type":"range"},"insert":true}],
  "tableOfContents": {"sections":[{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": []
}
```Create a consumer named `<consumername>` in the consumer group `<groupname>` of the stream that's stored at `<key>`.

Consumers are also created automatically whenever an operation, such as [`XREADGROUP`](), references a consumer that doesn't exist.
This is valid for [`XREADGROUP`]() only when there is data in the stream.

## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |

## Return information

**RESP2:**

[Integer reply](../../develop/reference/protocol-spec#integers): the number of created consumers, either 0 or 1.

**RESP3:**

[Integer reply](../../develop/reference/protocol-spec#integers): the number of created consumers, either 0 or 1.


