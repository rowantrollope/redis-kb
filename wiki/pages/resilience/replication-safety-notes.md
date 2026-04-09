---
title: "Replication Safety Notes"
last_updated: 2026-04-09
tags: [replication, resilience, failover, durability]
source_count: 1
---

# Replication Safety Notes

This page summarizes the official Redis replication guidance fetched on 2026-04-09 from `raw/sources/20260409-redis-replication-official-docs.md`.

## What Redis replication actually guarantees

- Redis replication is asynchronous by default.
- Replicas acknowledge processed offsets back to the primary, but the primary does not wait on every write.
- The `WAIT` command can reduce the probability of losing a write, but it does **not** turn Redis into a strongly consistent CP system.

The practical reading is: replication helps availability and recovery, but it does not remove failover write-loss windows by itself.

## Sync behavior to expect

- Under healthy conditions, the primary streams write effects to replicas.
- After a disconnect, a replica first tries partial resynchronization.
- If backlog history is no longer sufficient, Redis falls back to a full resynchronization using an RDB snapshot plus buffered commands.

That means replication backlog sizing matters operationally: small backlogs increase the odds of expensive full syncs after transient network issues.

## Replica-side behavior that surprises people

- The primary keeps serving during replica synchronization.
- Replicas can often keep serving reads from the old dataset while an initial sync is happening, if configured to do so.
- There is still a brief blocking window when the old dataset is replaced and the new one is loaded.

## High-risk deployment pattern to avoid

The Redis docs strongly warn against a primary with persistence disabled plus automatic restart:

1. The primary crashes and restarts empty.
2. Replicas reconnect and replicate the empty state.
3. The whole topology converges on lost data.

If persistence is disabled on a primary, automatic restart behavior becomes a data-loss multiplier.

## What to monitor

- replication offset progression
- replica lag and reconnect frequency
- frequency of partial vs full resync behavior
- backlog sizing relative to disconnect patterns
- whether persistence settings on primaries and replicas match your recovery assumptions

Related: [[Persistence Strategy Notes]], [[Sentinel Operations Notes]], [[Failover Instability Runbook]].
