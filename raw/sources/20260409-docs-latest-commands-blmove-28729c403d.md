---
title: BLMOVE
url: https://redis.io/docs/latest/commands/blmove/
retrieved_utc: '2026-04-09T20:46:02.251935+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/blmove/index.html.md
---

# BLMOVE

```json metadata
{
  "title": "BLMOVE",
  "description": "Pops an element from a list, pushes it to another list and returns it. Blocks until an element is available otherwise. Deletes the list if the last element was moved.",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"display_text":"source","key_spec_index":0,"name":"source","type":"key"},{"display_text":"destination","key_spec_index":1,"name":"destination","type":"key"},{"arguments":[{"display_text":"left","name":"left","token":"LEFT","type":"pure-token"},{"display_text":"right","name":"right","token":"RIGHT","type":"pure-token"}],"name":"wherefrom","type":"oneof"},{"arguments":[{"display_text":"left","name":"left","token":"LEFT","type":"pure-token"},{"display_text":"right","name":"right","token":"RIGHT","type":"pure-token"}],"name":"whereto","type":"oneof"},{"display_text":"timeout","name":"timeout","type":"double"}],
  "syntax_fmt": "BLMOVE source destination \u003cLEFT | RIGHT\u003e \u003cLEFT | RIGHT\u003e timeout",
  "complexity": "O(1)",
  "group": "list",
  "command_flags": ["write","denyoom","blocking"],
  "acl_categories": ["@write","@list","@slow","@blocking"],
  "since": "6.2.0",
  "arity": 6,
  "key_specs": [{"RW":true,"access":true,"begin_search":{"spec":{"index":1},"type":"index"},"delete":true,"find_keys":{"spec":{"keystep":1,"lastkey":0,"limit":0},"type":"range"}},{"RW":true,"begin_search":{"spec":{"index":2},"type":"index"},"find_keys":{"spec":{"keystep":1,"lastkey":0,"limit":0},"type":"range"},"insert":true}],
  "tableOfContents": {"sections":[{"id":"pattern-reliable-queue","title":"Pattern: Reliable queue"},{"id":"pattern-circular-list","title":"Pattern: Circular list"},{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": []
}
```
This command's behavior varies in clustered Redis environments. See the [multi-key operations]() page for more information.



`BLMOVE` is the blocking variant of [`LMOVE`]().
When `source` contains elements, this command behaves exactly like [`LMOVE`]().
When used inside a [`MULTI`]()/[`EXEC`]() block or a Lua script, this command behaves exactly like [`LMOVE`]().
When `source` is empty, Redis will block the connection until another client
pushes to it or until `timeout` (a double value specifying the maximum number of seconds to block) is reached.
A `timeout` of zero can be used to block indefinitely.

This command comes in place of the now deprecated [`BRPOPLPUSH`](). Doing
`BLMOVE RIGHT LEFT` is equivalent.

See [`LMOVE`]() for more information.

## Pattern: Reliable queue

Please see the pattern description in the [`LMOVE`]() documentation.

## Pattern: Circular list

Please see the pattern description in the [`LMOVE`]() documentation.

## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |

## Return information

**RESP2:**

One of the following:
* [Bulk string reply](../../develop/reference/protocol-spec#bulk-strings): the element being popped from the _source_ and pushed to the _destination_.
* [Nil reply](../../develop/reference/protocol-spec#bulk-strings): the operation timed-out

**RESP3:**

One of the following:
* [Bulk string reply](../../develop/reference/protocol-spec#bulk-strings): the element being popped from the _source_ and pushed to the _destination_.
* [Null reply](../../develop/reference/protocol-spec#nulls): the operation timed-out


