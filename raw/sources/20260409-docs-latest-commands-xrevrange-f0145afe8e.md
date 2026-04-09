---
title: XREVRANGE
url: https://redis.io/docs/latest/commands/xrevrange/
retrieved_utc: '2026-04-09T20:45:38.264190+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/xrevrange/index.html.md
---

# XREVRANGE

```json metadata
{
  "title": "XREVRANGE",
  "description": "Returns the messages from a stream within a range of IDs in reverse order.",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"display_text":"key","key_spec_index":0,"name":"key","type":"key"},{"display_text":"end","name":"end","type":"string"},{"display_text":"start","name":"start","type":"string"},{"display_text":"count","name":"count","optional":true,"token":"COUNT","type":"integer"}],
  "syntax_fmt": "XREVRANGE key end start [COUNTÂ count]",
  "complexity": "O(N) with N being the number of elements returned. If N is constant (e.g. always asking for the first 10 elements with COUNT), you can consider it O(1).",
  "group": "stream",
  "command_flags": ["readonly"],
  "acl_categories": ["@read","@stream","@slow"],
  "since": "5.0.0",
  "arity": -4,
  "key_specs": [{"RO":true,"access":true,"begin_search":{"spec":{"index":1},"type":"index"},"find_keys":{"spec":{"keystep":1,"lastkey":0,"limit":0},"type":"range"}}],
  "tableOfContents": {"sections":[{"id":"examples","title":"Examples"},{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": []
}
```This command is exactly like [`XRANGE`](), but with the notable difference of
returning the entries in reverse order, and also taking the start-end
range in reverse order: in `XREVRANGE` you need to state the *end* ID
and later the *start* ID, and the command will produce all the element
between (or exactly like) the two IDs, starting from the *end* side.

So for instance, to get all the elements from the higher ID to the lower
ID one could use:

    XREVRANGE somestream + -

Similarly to get just the last element added into the stream it is
enough to send:

    XREVRANGE somestream + - COUNT 1

## Examples


XADD writers * name Virginia surname Woolf
XADD writers * name Jane surname Austen
XADD writers * name Toni surname Morrison
XADD writers * name Agatha surname Christie
XADD writers * name Ngozi surname Adichie
XLEN writers
XREVRANGE writers + - COUNT 1


## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |

## Return information

**RESP2:**

[Array reply](../../develop/reference/protocol-spec#arrays): The command returns the entries with IDs matching the specified range. The returned entries are complete, which means that the ID and all the fields they are composed of are returned. Moreover, the entries are returned with their fields and values in the same order as `XADD` added them.

**RESP3:**

[Array reply](../../develop/reference/protocol-spec#arrays): The command returns the entries with IDs matching the specified range. The returned entries are complete, which means that the ID and all the fields they are composed of are returned. Moreover, the entries are returned with their fields and values in the same order as `XADD` added them.


