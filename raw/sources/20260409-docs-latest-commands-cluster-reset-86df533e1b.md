---
title: CLUSTER RESET
url: https://redis.io/docs/latest/commands/cluster-reset/
retrieved_utc: '2026-04-09T20:46:03.084425+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/cluster-reset/index.html.md
---

# CLUSTER RESET

```json metadata
{
  "title": "CLUSTER RESET",
  "description": "Resets a node.",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"arguments":[{"display_text":"hard","name":"hard","token":"HARD","type":"pure-token"},{"display_text":"soft","name":"soft","token":"SOFT","type":"pure-token"}],"name":"reset-type","optional":true,"type":"oneof"}],
  "syntax_fmt": "CLUSTER RESET [HARD | SOFT]",
  "complexity": "O(N) where N is the number of known nodes. The command may execute a FLUSHALL as a side effect.",
  "group": "cluster",
  "command_flags": ["admin","noscript","stale"],
  "acl_categories": ["@admin","@slow","@dangerous"],
  "since": "3.0.0",
  "arity": -2,
  "tableOfContents": {"sections":[{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": []
}
```Reset a Redis Cluster node, in a more or less drastic way depending on the
reset type, that can be **hard** or **soft**. Note that this command
**does not work for masters if they hold one or more keys**, in that case
to completely reset a master node keys must be removed first, e.g. by using [`FLUSHALL`]() first,
and then `CLUSTER RESET`.

Effects on the node:

1. All the other nodes in the cluster are forgotten.
2. All the assigned / open slots are reset, so the slots-to-nodes mapping is totally cleared.
3. If the node is a replica it is turned into an (empty) master. Its dataset is flushed, so at the end the node will be an empty master.
4. **Hard reset only**: a new Node ID is generated.
5. **Hard reset only**: `currentEpoch` and `configEpoch` vars are set to 0.
6. The new configuration is persisted on disk in the node cluster configuration file.

This command is mainly useful to re-provision a Redis Cluster node
in order to be used in the context of a new, different cluster. The command
is also extensively used by the Redis Cluster testing framework in order to
reset the state of the cluster every time a new test unit is executed.

If no reset type is specified, the default is **soft**.

## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Not supported">&#x274c; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> | <span title="Not supported">&#x274c; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> |  |

## Return information

**RESP2:**

[Simple string reply](../../develop/reference/protocol-spec#simple-strings): `OK` if the command was successful. Otherwise an error is returned.

**RESP3:**

[Simple string reply](../../develop/reference/protocol-spec#simple-strings): `OK` if the command was successful. Otherwise an error is returned.


