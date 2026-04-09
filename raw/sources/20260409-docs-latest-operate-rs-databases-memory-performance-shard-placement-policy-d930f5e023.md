---
title: Shard placement policy
url: https://redis.io/docs/latest/operate/rs/databases/memory-performance/shard-placement-policy/
retrieved_utc: '2026-04-09T20:45:56.551918+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/databases/memory-performance/shard-placement-policy/index.html.md
---

# Shard placement policy

```json metadata
{
  "title": "Shard placement policy",
  "description": "Detailed info about the shard placement policy.",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[{"children":[{"id":"dense-shard-placement-policy","title":"Dense shard placement policy"},{"id":"sparse-shard-placement-policy","title":"Sparse shard placement policy"}],"id":"shard-placement-policies","title":"Shard placement policies"},{"id":"related-articles","title":"Related articles"}]}

,
  "codeExamples": []
}
```In Redis Software, the location of master and replica shards on the cluster nodes can impact the database and node performance.
Master shards and their corresponding replica shards are always placed on separate nodes for data resiliency.
The shard placement policy helps to maintain optimal performance and resiliency.



## Shard placement policies

### Dense shard placement policy

In the dense policy, the cluster places the database shards on as few nodes as possible.
When the node is not able to host all of the shards, some shards are moved to another node to maintain optimal node health.

For example, for a database with two master and two replica shards on a cluster with three nodes and a dense shard placement policy,
the two master shards are hosted on one node and the two replica shards are hosted on another node.

For Redis on RAM databases without the OSS cluster API enabled, use the dense policy to optimize performance.



*Figure: Three nodes with two master shards (red) and two replica shards (white) with a dense placement policy*

### Sparse shard placement policy

In the sparse policy, the cluster places shards on as many nodes as possible to distribute the shards of a database across all available nodes.
When all nodes have database shards, the shards are distributed evenly across the nodes to maintain optimal node health.

For example, for a database with two master and two replica shards on a cluster with three nodes and a sparse shard placement policy:

- Node 1 hosts one of the master shards
- Node 2 hosts the replica for the first master shard
- Node 3 hosts the second master shard
- Node 1 hosts for the replica shard for master shard 2

For Redis on RAM databases with OSS cluster API enabled and for databases with Auto Tiering enabled, use the sparse policy to optimize performance.



*Figure: Three nodes with two master shards (red) and two replica shards (white) with a sparse placement policy*

## Related articles

You can [configure the shard placement policy]() for each database.
