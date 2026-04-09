---
title: SORT_RO
url: https://redis.io/docs/latest/commands/sort_ro/
retrieved_utc: '2026-04-09T20:46:07.622482+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/sort_ro/index.html.md
---

# SORT_RO

```json metadata
{
  "title": "SORT_RO",
  "description": "Returns the sorted elements of a list, a set, or a sorted set.",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"display_text":"key","key_spec_index":0,"name":"key","type":"key"},{"display_text":"pattern","key_spec_index":1,"name":"by-pattern","optional":true,"token":"BY","type":"pattern"},{"arguments":[{"display_text":"offset","name":"offset","type":"integer"},{"display_text":"count","name":"count","type":"integer"}],"name":"limit","optional":true,"token":"LIMIT","type":"block"},{"display_text":"pattern","key_spec_index":1,"multiple":true,"multiple_token":true,"name":"get-pattern","optional":true,"token":"GET","type":"pattern"},{"arguments":[{"display_text":"asc","name":"asc","token":"ASC","type":"pure-token"},{"display_text":"desc","name":"desc","token":"DESC","type":"pure-token"}],"name":"order","optional":true,"type":"oneof"},{"display_text":"sorting","name":"sorting","optional":true,"token":"ALPHA","type":"pure-token"}],
  "syntax_fmt": "SORT_RO key [BYÂ pattern] [LIMITÂ offset count] [GETÂ pattern [GET\n  pattern ...]] [ASC | DESC] [ALPHA]",
  "complexity": "O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is O(N).",
  "group": "generic",
  "command_flags": ["readonly","movablekeys"],
  "acl_categories": ["@read","@set","@sortedset","@list","@slow","@dangerous"],
  "since": "7.0.0",
  "arity": -2,
  "key_specs": [{"RO":true,"access":true,"begin_search":{"spec":{"index":1},"type":"index"},"find_keys":{"spec":{"keystep":1,"lastkey":0,"limit":0},"type":"range"}},{"RO":true,"access":true,"begin_search":{"spec":{},"type":"unknown"},"find_keys":{"spec":{},"type":"unknown"},"notes":"For the optional BY/GET keyword. It is marked 'unknown' because the key names derive from the content of the key we sort"}],
  "tableOfContents": {"sections":[{"id":"examples","title":"Examples"},{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": []
}
```Read-only variant of the [`SORT`]() command. It is exactly like the original [`SORT`]() but refuses the `STORE` option and can safely be used in read-only replicas.

Since the original [`SORT`]() has a `STORE` option it is technically flagged as a writing command in the Redis command table. For this reason read-only replicas in a Redis Cluster will redirect it to the master instance even if the connection is in read-only mode (see the [`READONLY`]() command of Redis Cluster).

The `SORT_RO` variant was introduced in order to allow [`SORT`]() behavior in read-only replicas without breaking compatibility on command flags.

See original [`SORT`]() for more details.

## Examples

```
SORT_RO mylist BY weight_*->fieldname GET object_*->fieldname
```

## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |

## Return information

**RESP2:**

[Array reply](../../develop/reference/protocol-spec#arrays): a list of sorted elements.

**RESP3:**

[Array reply](../../develop/reference/protocol-spec#arrays): a list of sorted elements.


