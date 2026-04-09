---
title: CLUSTER MEET
url: https://redis.io/docs/latest/commands/cluster-meet/
retrieved_utc: '2026-04-09T20:46:03.320522+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/cluster-meet/index.html.md
---

# CLUSTER MEET

```json metadata
{
  "title": "CLUSTER MEET",
  "description": "Forces a node to handshake with another node.",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"display_text":"ip","name":"ip","type":"string"},{"display_text":"port","name":"port","type":"integer"},{"display_text":"cluster-bus-port","name":"cluster-bus-port","optional":true,"since":"4.0.0","type":"integer"}],
  "syntax_fmt": "CLUSTER MEET ip port [cluster-bus-port]",
  "complexity": "O(1)",
  "group": "cluster",
  "command_flags": ["admin","stale","no_async_loading"],
  "acl_categories": ["@admin","@slow","@dangerous"],
  "since": "3.0.0",
  "arity": -4,
  "tableOfContents": {"sections":[{"id":"implementation-details-meet-and-ping-packets","title":"Implementation details: MEET and PING packets"},{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": []
}
````CLUSTER MEET` is used in order to connect different Redis nodes with cluster
support enabled, into a working cluster.

The basic idea is that nodes by default don't trust each other, and are
considered unknown, so that it is unlikely that different cluster nodes will
mix into a single one because of system administration errors or network
addresses modifications.

So in order for a given node to accept another one into the list of nodes
composing a Redis Cluster, there are only two ways:

1. The system administrator sends a `CLUSTER MEET` command to force a node to meet another one.
2. An already known node sends a list of nodes in the gossip section that we are not aware of. If the receiving node trusts the sending node as a known node, it will process the gossip section and send a handshake to the nodes that are still not known.

Note that Redis Cluster needs to form a full mesh (each node is connected with each other node), but in order to create a cluster, there is no need to send all the `CLUSTER MEET` commands needed to form the full mesh. What matter is to send enough `CLUSTER MEET` messages so that each node can reach each other node through a *chain of known nodes*. Thanks to the exchange of gossip information in heartbeat packets, the missing links will be created.

So, if we link node A with node B via `CLUSTER MEET`, and B with C, A and C will find their ways to handshake and create a link.

Another example: if we imagine a cluster formed of the following four nodes called A, B, C and D, we may send just the following set of commands to A:

1. `CLUSTER MEET B-ip B-port`
2. `CLUSTER MEET C-ip C-port`
3. `CLUSTER MEET D-ip D-port`

As a side effect of `A` knowing and being known by all the other nodes, it will send gossip sections in the heartbeat packets that will allow each other node to create a link with each other one, forming a full mesh in a matter of seconds, even if the cluster is large.

Moreover `CLUSTER MEET` does not need to be reciprocal. If I send the command to A in order to join B, I don't need to also send it to B in order to join A.

If the optional `cluster_bus_port` argument is not provided, the default of port + 10000 will be used.

## Implementation details: MEET and PING packets

When a given node receives a `CLUSTER MEET` message, the node specified in the
command still does not know the node we sent the command to. So in order for
the node to force the receiver to accept it as a trusted node, it sends a
`MEET` packet instead of a [`PING`]() packet. The two packets have exactly the
same format, but the former forces the receiver to acknowledge the node as
trusted.

## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Not supported">&#x274c; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> | <span title="Not supported">&#x274c; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> |  |

## Return information

**RESP2:**

[Simple string reply](../../develop/reference/protocol-spec#simple-strings): `OK` if the command was successful. If the address or port specified are invalid an error is returned.

**RESP3:**

[Simple string reply](../../develop/reference/protocol-spec#simple-strings): `OK` if the command was successful. If the address or port specified are invalid an error is returned.


