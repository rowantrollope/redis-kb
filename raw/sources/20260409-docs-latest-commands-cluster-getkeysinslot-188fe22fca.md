---
title: CLUSTER GETKEYSINSLOT
url: https://redis.io/docs/latest/commands/cluster-getkeysinslot/
retrieved_utc: '2026-04-09T20:46:02.916837+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/cluster-getkeysinslot/index.html.md
---

# CLUSTER GETKEYSINSLOT

```json metadata
{
  "title": "CLUSTER GETKEYSINSLOT",
  "description": "Returns the key names in a hash slot.",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"display_text":"slot","name":"slot","type":"integer"},{"display_text":"count","name":"count","type":"integer"}],
  "syntax_fmt": "CLUSTER GETKEYSINSLOT slot count",
  "complexity": "O(N) where N is the number of requested keys",
  "group": "cluster",
  "command_flags": ["stale"],
  "acl_categories": ["@slow"],
  "since": "3.0.0",
  "arity": 4,
  "tableOfContents": {"sections":[{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": []
}
```The command returns an array of keys names stored in the contacted node and
hashing to the specified hash slot. The maximum number of keys to return
is specified via the `count` argument, so that it is possible for the user
of this API to batch-processing keys.

The main usage of this command is during rehashing of cluster slots from one
node to another. The way the rehashing is performed is exposed in the Redis
Cluster specification, or in a more simple to digest form, as an appendix
of the [`CLUSTER SETSLOT`]() command documentation.

During atomic slot migration operations (available since Redis 8.4.0), keys being imported or trimmed will be filtered out from the results.


```
> CLUSTER GETKEYSINSLOT 7000 3
1) "key_39015"
2) "key_89793"
3) "key_92937"
```

## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Not supported">&#x274c; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> | <span title="Not supported">&#x274c; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> |  |

## Return information

**RESP2:**

[Array reply](../../develop/reference/protocol-spec#arrays): an array with up to count elements.

**RESP3:**

[Array reply](../../develop/reference/protocol-spec#arrays): an array with up to count elements.


