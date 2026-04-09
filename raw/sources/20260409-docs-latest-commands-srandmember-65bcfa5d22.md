---
title: SRANDMEMBER
url: https://redis.io/docs/latest/commands/srandmember/
retrieved_utc: '2026-04-09T20:46:07.669395+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/srandmember/index.html.md
---

# SRANDMEMBER

```json metadata
{
  "title": "SRANDMEMBER",
  "description": "Get one or multiple random members from a set",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"display_text":"key","key_spec_index":0,"name":"key","type":"key"},{"display_text":"count","name":"count","optional":true,"since":"2.6.0","type":"integer"}],
  "syntax_fmt": "SRANDMEMBER key [count]",
  "complexity": "Without the count argument O(1), otherwise O(N) where N is the absolute value of the passed count.",
  "group": "set",
  "command_flags": ["readonly"],
  "acl_categories": ["@read","@set","@slow"],
  "since": "1.0.0",
  "arity": -2,
  "key_specs": [{"RO":true,"access":true,"begin_search":{"spec":{"index":1},"type":"index"},"find_keys":{"spec":{"keystep":1,"lastkey":0,"limit":0},"type":"range"}}],
  "tableOfContents": {"sections":[{"id":"examples","title":"Examples"},{"id":"specification-of-the-behavior-when-count-is-passed","title":"Specification of the behavior when count is passed"},{"id":"distribution-of-returned-elements","title":"Distribution of returned elements"},{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": []
}
```When called with just the `key` argument, return a random element from the set value stored at `key`.

If the provided `count` argument is positive, return an array of **distinct elements**.
The array's length is either `count` or the set's cardinality ([`SCARD`]()), whichever is lower.

If called with a negative `count`, the behavior changes and the command is allowed to return the **same element multiple times**.
In this case, the number of returned elements is the absolute value of the specified `count`.

## Examples


SADD myset one two three
SRANDMEMBER myset
SRANDMEMBER myset 2
SRANDMEMBER myset -5


## Specification of the behavior when count is passed

When the `count` argument is a positive value this command behaves as follows:

* No repeated elements are returned.
* If `count` is bigger than the set's cardinality, the command will only return the whole set without additional elements.
* The order of elements in the reply is not truly random, so it is up to the client to shuffle them if needed.

When the `count` is a negative value, the behavior changes as follows:

* Repeating elements are possible.
* Exactly `count` elements, or an empty array if the set is empty (non-existing key), are always returned.
* The order of elements in the reply is truly random.

## Distribution of returned elements

Note: this section is relevant only for Redis 5 or below, as Redis 6 implements a fairer algorithm. 

The distribution of the returned elements is far from perfect when the number of elements in the set is small, this is due to the fact that we used an approximated random element function that does not really guarantees good distribution.

The algorithm used, that is implemented inside dict.c, samples the hash table buckets to find a non-empty one. Once a non empty bucket is found, since we use chaining in our hash table implementation, the number of elements inside the bucket is checked and a random element is selected.

This means that if you have two non-empty buckets in the entire hash table, and one has three elements while one has just one, the element that is alone in its bucket will be returned with much higher probability.

## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |

## Return information

**RESP2:**

One of the following:
* [Bulk string reply](../../develop/reference/protocol-spec#bulk-strings): without the additional _count_ argument, the command returns a randomly selected member, or a [Nil reply](../../develop/reference/protocol-spec#bulk-strings) when _key_ doesn't exist.
* [Array reply](../../develop/reference/protocol-spec#arrays): when the optional _count_ argument is passed, the command returns an array of members, or an empty array when _key_ doesn't exist.

**RESP3:**

One of the following:
* [Bulk string reply](../../develop/reference/protocol-spec#bulk-strings): without the additional _count_ argument, the command returns a randomly selected member, or a [Null reply](../../develop/reference/protocol-spec#nulls) when _key_ doesn't exist.
* [Array reply](../../develop/reference/protocol-spec#arrays): when the optional _count_ argument is passed, the command returns an array of members, or an empty array when _key_ doesn't exist.


