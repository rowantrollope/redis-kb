---
title: BLMPOP
url: https://redis.io/docs/latest/commands/blmpop/
retrieved_utc: '2026-04-09T20:46:02.253237+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/blmpop/index.html.md
---

# BLMPOP

```json metadata
{
  "title": "BLMPOP",
  "description": "Pops the first element from one of multiple lists. Blocks until an element is available otherwise. Deletes the list if the last element was popped.",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"display_text":"timeout","name":"timeout","type":"double"},{"display_text":"numkeys","name":"numkeys","type":"integer"},{"display_text":"key","key_spec_index":0,"multiple":true,"name":"key","type":"key"},{"arguments":[{"display_text":"left","name":"left","token":"LEFT","type":"pure-token"},{"display_text":"right","name":"right","token":"RIGHT","type":"pure-token"}],"name":"where","type":"oneof"},{"display_text":"count","name":"count","optional":true,"token":"COUNT","type":"integer"}],
  "syntax_fmt": "BLMPOP timeout numkeys key [key ...] \u003cLEFT | RIGHT\u003e [COUNTÂ count]",
  "complexity": "O(N+M) where N is the number of provided keys and M is the number of elements returned.",
  "group": "list",
  "command_flags": ["write","blocking","movablekeys"],
  "acl_categories": ["@write","@list","@slow","@blocking"],
  "since": "7.0.0",
  "arity": -5,
  "key_specs": [{"RW":true,"access":true,"begin_search":{"spec":{"index":2},"type":"index"},"delete":true,"find_keys":{"spec":{"firstkey":1,"keynumidx":0,"keystep":1},"type":"keynum"}}],
  "tableOfContents": {"sections":[{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": []
}
```
This command's behavior varies in clustered Redis environments. See the [multi-key operations]() page for more information.



`BLMPOP` is the blocking variant of [`LMPOP`]().

When any of the lists contains elements, this command behaves exactly like [`LMPOP`]().
When used inside a [`MULTI`]()/[`EXEC`]() block or a Lua script, this command behaves exactly like [`LMPOP`]().
When all lists are empty, Redis will block the connection until another client pushes to it or until the `timeout` (a double value specifying the maximum number of seconds to block) elapses.
A `timeout` of zero can be used to block indefinitely.

See [`LMPOP`]() for more information.

## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |

## Return information

**RESP2:**

One of the following:
* [Nil reply](../../develop/reference/protocol-spec#bulk-strings): when no element could be popped and the _timeout_ is reached.
* [Array reply](../../develop/reference/protocol-spec#arrays): a two-element array with the first element being the name of the key from which elements were popped, and the second element being an array of the popped elements.

**RESP3:**

One of the following:
* [Null reply](../../develop/reference/protocol-spec#nulls): when no element could be popped and the _timeout_ is reached.
* [Array reply](../../develop/reference/protocol-spec#arrays): a two-element array with the first element being the name of the key from which elements were popped, and the second element being an array of the popped elements.


