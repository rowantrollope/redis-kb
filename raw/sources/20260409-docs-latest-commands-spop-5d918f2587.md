---
title: SPOP
url: https://redis.io/docs/latest/commands/spop/
retrieved_utc: '2026-04-09T20:46:07.644277+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/spop/index.html.md
---

# SPOP

```json metadata
{
  "title": "SPOP",
  "description": "Returns one or more random members from a set after removing them. Deletes the set if the last member was popped.",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"display_text":"key","key_spec_index":0,"name":"key","type":"key"},{"display_text":"count","name":"count","optional":true,"since":"3.2.0","type":"integer"}],
  "syntax_fmt": "SPOP key [count]",
  "complexity": "Without the count argument O(1), otherwise O(N) where N is the value of the passed count.",
  "group": "set",
  "command_flags": ["write","fast"],
  "acl_categories": ["@write","@set","@fast"],
  "since": "1.0.0",
  "arity": -2,
  "key_specs": [{"RW":true,"access":true,"begin_search":{"spec":{"index":1},"type":"index"},"delete":true,"find_keys":{"spec":{"keystep":1,"lastkey":0,"limit":0},"type":"range"}}],
  "tableOfContents": {"sections":[{"id":"examples","title":"Examples"},{"id":"distribution-of-returned-elements","title":"Distribution of returned elements"},{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": []
}
```Removes and returns one or more random members from the set value store at `key`.

This operation is similar to [`SRANDMEMBER`](), that returns one or more random elements from a set but does not remove it.

By default, the command pops a single member from the set. When provided with
the optional `count` argument, the reply will consist of up to `count` members,
depending on the set's cardinality.

## Examples


SADD myset "one"
SADD myset "two"
SADD myset "three"
SPOP myset
SMEMBERS myset
SADD myset "four"
SADD myset "five"
SPOP myset 3
SMEMBERS myset


## Distribution of returned elements

Note that this command is not suitable when you need a guaranteed uniform distribution of the returned elements. For more information about the algorithms used for `SPOP`, look up both the Knuth sampling and Floyd sampling algorithms.

## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |

## Return information

**RESP2:**

One of the following:
* [Nil reply](../../develop/reference/protocol-spec#bulk-strings): if the key does not exist.
* [Bulk string reply](../../develop/reference/protocol-spec#bulk-strings): when called without the _count_ argument, the removed member.
* [Array reply](../../develop/reference/protocol-spec#arrays): when called with the _count_ argument, a list of the removed members.

**RESP3:**

One of the following:
* [Null reply](../../develop/reference/protocol-spec#nulls): if the key does not exist.
* [Bulk string reply](../../develop/reference/protocol-spec#bulk-strings): when called without the _count_ argument, the removed member.
* [Array reply](../../develop/reference/protocol-spec#arrays): when called with the _count_ argument, a list of the removed members.


