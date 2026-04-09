---
title: "Cluster Scaling Notes"
last_updated: 2026-04-09
tags: [cluster, scaling, sharding, failover]
source_count: 1
---

# Cluster Scaling Notes

This page summarizes the official Redis cluster scaling guidance fetched on 2026-04-09 from `raw/sources/20260409-redis-cluster-scaling-official-docs.md`.

## Cluster model to remember

- Redis Cluster shards data across **16384 hash slots**.
- Each primary owns a subset of slots.
- Scaling means moving slots between nodes rather than rebuilding the whole cluster.

The key operational upside is that slot movement and resharding are designed to happen without full downtime.

## Networking requirements

Each node needs two reachable ports:

- the normal Redis command port, usually `6379`
- the cluster bus port, usually command port + `10000`

The docs are explicit that clients should use the command port only, but cluster nodes must reach each other on both paths or the cluster behaves incorrectly.

## Availability model

- Cluster can survive some failures, but not loss of a majority of primaries.
- Replicas can be promoted when their primary fails.
- Because replication is asynchronous, failover can still lose acknowledged writes.

This makes Cluster highly available, but not strongly consistent.

## Sizing and config defaults that matter

- The practical minimal topology for a robust testbed is three primaries and three replicas.
- `cluster-node-timeout` influences failure detection and when nodes stop accepting queries.
- `cluster-require-full-coverage yes` protects correctness by refusing writes when part of the keyspace is uncovered.
- `cluster-migration-barrier` controls replica migration behavior when masters lose coverage.

## Operational patterns

- Use cluster-aware clients only.
- Plan multi-key operations around hash-slot locality or hash tags.
- Run `redis-cli --cluster check` after topology changes.
- Treat manual failover as safer than crash-induced failover when you are intentionally rotating roles.

## Where teams get surprised

- A cluster can look healthy from one node while another node cannot reach a majority.
- Resharding is operationally normal, but client behavior during topology change still needs testing.
- Failover can preserve consistency of accepted topology state while still losing some acknowledged writes.

Related: [[Sentinel Operations Notes]], [[Replication Safety Notes]], [[Operations Digest]].
