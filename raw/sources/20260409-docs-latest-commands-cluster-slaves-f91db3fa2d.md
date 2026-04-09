---
title: CLUSTER SLAVES
url: https://redis.io/docs/latest/commands/cluster-slaves/
retrieved_utc: '2026-04-09T20:46:03.113928+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/cluster-slaves/index.html.md
---

# CLUSTER SLAVES

```json metadata
{
  "title": "CLUSTER SLAVES",
  "description": "Lists the replica nodes of a master node.",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"display_text":"node-id","name":"node-id","type":"string"}],
  "syntax_fmt": "CLUSTER SLAVES node-id",
  "complexity": "O(N) where N is the number of replicas.",
  "group": "cluster",
  "command_flags": ["admin","stale"],
  "acl_categories": ["@admin","@slow","@dangerous"],
  "since": "3.0.0",
  "arity": 3,
  "tableOfContents": {"sections":[{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": []
}
```**A note about the word slave used in this man page and command name**: starting with Redis version 5, if not for backward compatibility, the Redis project no longer uses the word slave. Please use the new command [`CLUSTER REPLICAS`](). The command `CLUSTER SLAVES` will continue to work for backward compatibility.

The command provides a list of replica nodes replicating from the specified
master node. The list is provided in the same format used by [`CLUSTER NODES`]() (please refer to its documentation for the specification of the format).

The command will fail if the specified node is not known or if it is not
a master according to the node table of the node receiving the command.

Note that if a replica is added, moved, or removed from a given master node,
and we ask `CLUSTER SLAVES` to a node that has not yet received the
configuration update, it may show stale information. However eventually
(in a matter of seconds if there are no network partitions) all the nodes
will agree about the set of nodes associated with a given master.

## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Not supported">&#x274c; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> | <span title="Not supported">&#x274c; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> | Deprecated as of Redis v5.0.0. |

## Return information

**RESP2:**

[Array reply](../../develop/reference/protocol-spec#arrays): a list of replica nodes replicating from the specified master node provided in the same format used by `CLUSTER NODES`.

**RESP3:**

[Array reply](../../develop/reference/protocol-spec#arrays): a list of replica nodes replicating from the specified master node provided in the same format used by `CLUSTER NODES`.


