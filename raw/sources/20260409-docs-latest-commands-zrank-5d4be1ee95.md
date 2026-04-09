---
title: ZRANK
url: https://redis.io/docs/latest/commands/zrank/
retrieved_utc: '2026-04-09T20:45:39.068439+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/zrank/index.html.md
---

# ZRANK

```json metadata
{
  "title": "ZRANK",
  "description": "Returns the index of a member in a sorted set ordered by ascending scores.",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"display_text":"key","key_spec_index":0,"name":"key","type":"key"},{"display_text":"member","name":"member","type":"string"},{"display_text":"withscore","name":"withscore","optional":true,"token":"WITHSCORE","type":"pure-token"}],
  "syntax_fmt": "ZRANK key member [WITHSCORE]",
  "complexity": "O(log(N))",
  "group": "sorted-set",
  "command_flags": ["readonly","fast"],
  "acl_categories": ["@read","@sortedset","@fast"],
  "since": "2.0.0",
  "arity": -3,
  "key_specs": [{"RO":true,"access":true,"begin_search":{"spec":{"index":1},"type":"index"},"find_keys":{"spec":{"keystep":1,"lastkey":0,"limit":0},"type":"range"}}],
  "tableOfContents": {"sections":[{"id":"examples","title":"Examples"},{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": []
}
```Returns the rank of `member` in the sorted set stored at `key`, with the scores
ordered from low to high.
The rank (or index) is 0-based, which means that the member with the lowest
score has rank `0`.

The optional `WITHSCORE` argument supplements the command's reply with the score of the element returned.

Use [`ZREVRANK`]() to get the rank of an element with the scores ordered from high
to low.

## Examples


ZADD myzset 1 "one"
ZADD myzset 2 "two"
ZADD myzset 3 "three"
ZRANK myzset "three"
ZRANK myzset "four"
ZRANK myzset "three" WITHSCORE
ZRANK myzset "four" WITHSCORE


## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |

## Return information

**RESP2:**

One of the following:
* [Nil reply](../../develop/reference/protocol-spec#bulk-strings): if the key does not exist or the member does not exist in the sorted set.
* [Integer reply](../../develop/reference/protocol-spec#integers): the rank of the member when _WITHSCORE_ is not used.
* [Array reply](../../develop/reference/protocol-spec#arrays): the rank and score of the member when _WITHSCORE_ is used.

**RESP3:**

One of the following:
* [Null reply](../../develop/reference/protocol-spec#nulls): if the key does not exist or the member does not exist in the sorted set.
* [Integer reply](../../develop/reference/protocol-spec#integers): the rank of the member when _WITHSCORE_ is not used.
* [Array reply](../../develop/reference/protocol-spec#arrays): the rank and score of the member when _WITHSCORE_ is used.


