---
title: BZMPOP
url: https://redis.io/docs/latest/commands/bzmpop/
retrieved_utc: '2026-04-09T20:46:02.308828+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/bzmpop/index.html.md
---

# BZMPOP

```json metadata
{
  "title": "BZMPOP",
  "description": "Removes and returns a member by score from one or more sorted sets. Blocks until a member is available otherwise. Deletes the sorted set if the last element was popped.",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"display_text":"timeout","name":"timeout","type":"double"},{"display_text":"numkeys","name":"numkeys","type":"integer"},{"display_text":"key","key_spec_index":0,"multiple":true,"name":"key","type":"key"},{"arguments":[{"display_text":"min","name":"min","token":"MIN","type":"pure-token"},{"display_text":"max","name":"max","token":"MAX","type":"pure-token"}],"name":"where","type":"oneof"},{"display_text":"count","name":"count","optional":true,"token":"COUNT","type":"integer"}],
  "syntax_fmt": "BZMPOP timeout numkeys key [key ...] \u003cMIN | MAX\u003e [COUNTÂ count]",
  "complexity": "O(K) + O(M*log(N)) where K is the number of provided keys, N being the number of elements in the sorted set, and M being the number of elements popped.",
  "group": "sorted-set",
  "command_flags": ["write","blocking","movablekeys"],
  "acl_categories": ["@write","@sortedset","@slow","@blocking"],
  "since": "7.0.0",
  "arity": -5,
  "key_specs": [{"RW":true,"access":true,"begin_search":{"spec":{"index":2},"type":"index"},"delete":true,"find_keys":{"spec":{"firstkey":1,"keynumidx":0,"keystep":1},"type":"keynum"}}],
  "tableOfContents": {"sections":[{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": []
}
```
This command's behavior varies in clustered Redis environments. See the [multi-key operations]() page for more information.



`BZMPOP` is the blocking variant of [`ZMPOP`]().

When any of the sorted sets contains elements, this command behaves exactly like [`ZMPOP`]().
When used inside a [`MULTI`]()/[`EXEC`]() block or a Lua script, this command behaves exactly like [`ZMPOP`]().
When all sorted sets are empty, Redis will block the connection until another client adds members to one of the keys or until the `timeout` (a double value specifying the maximum number of seconds to block) elapses.
A `timeout` of zero can be used to block indefinitely.

See [`ZMPOP`]() for more information.

## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |

## Return information

**RESP2:**

One of the following:
* [Nil reply](../../develop/reference/protocol-spec#bulk-strings): when no element could be popped.
* [Array reply](../../develop/reference/protocol-spec#arrays): a two-element array with the first element being the name of the key from which elements were popped, and the second element is an array of the popped elements. Every entry in the elements array is also an array that contains the member and its score.

**RESP3:**

One of the following:
* [Null reply](../../develop/reference/protocol-spec#nulls): when no element could be popped.
* [Array reply](../../develop/reference/protocol-spec#arrays): a two-element array with the first element being the name of the key from which elements were popped, and the second element is an array of the popped elements. Every entry in the elements array is also an array that contains the member and its score.


