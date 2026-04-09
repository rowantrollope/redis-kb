---
title: RENAMENX
url: https://redis.io/docs/latest/commands/renamenx/
retrieved_utc: '2026-04-09T20:46:06.883548+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/renamenx/index.html.md
---

# RENAMENX

```json metadata
{
  "title": "RENAMENX",
  "description": "Renames a key only when the target key name doesn't exist.",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"display_text":"key","key_spec_index":0,"name":"key","type":"key"},{"display_text":"newkey","key_spec_index":1,"name":"newkey","type":"key"}],
  "syntax_fmt": "RENAMENX key newkey",
  "complexity": "O(1)",
  "group": "generic",
  "command_flags": ["write","fast"],
  "acl_categories": ["@keyspace","@write","@fast"],
  "since": "1.0.0",
  "arity": 3,
  "key_specs": [{"RW":true,"access":true,"begin_search":{"spec":{"index":1},"type":"index"},"delete":true,"find_keys":{"spec":{"keystep":1,"lastkey":0,"limit":0},"type":"range"}},{"OW":true,"begin_search":{"spec":{"index":2},"type":"index"},"find_keys":{"spec":{"keystep":1,"lastkey":0,"limit":0},"type":"range"},"insert":true}],
  "tableOfContents": {"sections":[{"id":"examples","title":"Examples"},{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": []
}
```
This command's behavior varies in clustered Redis environments. See the [multi-key operations]() page for more information.



Renames `key` to `newkey` if `newkey` does not yet exist.
It returns an error when `key` does not exist.

In Cluster mode, both `key` and `newkey` must be in the same **hash slot**, meaning that in practice only keys that have the same hash tag can be reliably renamed in cluster.

## Examples


SET mykey "Hello"
SET myotherkey "World"
RENAMENX mykey myotherkey
GET myotherkey


## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | For Active-Active or clustered databases, the original key and new key must be in the same hash slot. |

## Return information

**RESP2:**

One of the following:
* [Integer reply](../../develop/reference/protocol-spec#integers): `1` if _key_ was renamed to _newkey_.
* [Integer reply](../../develop/reference/protocol-spec#integers): `0` if _newkey_ already exists.

**RESP3:**

One of the following:
* [Integer reply](../../develop/reference/protocol-spec#integers): `1` if _key_ was renamed to _newkey_.
* [Integer reply](../../develop/reference/protocol-spec#integers): `0` if _newkey_ already exists.


