---
title: "Persistence Strategy Notes"
last_updated: 2026-04-09
tags: [persistence, rdb, aof, durability]
source_count: 1
---

# Persistence Strategy Notes

This page summarizes the official Redis persistence guidance fetched on 2026-04-09 from `raw/sources/20260409-redis-persistence-official-docs.md`.
Managed Redis services may package or tune these settings differently, so treat this as Redis Open Source guidance first.

## Decision baseline

- Use **RDB** when compact backups and faster restarts matter more than minimizing the last few minutes of write loss.
- Use **AOF** when durability matters more and you want an append-only record of write traffic.
- Use **RDB + AOF** when the dataset matters enough that you want both backup-friendly snapshots and a more durable write history.

The Redis docs explicitly lean toward using both persistence methods when you care meaningfully about data safety.

## RDB tradeoffs

- RDB creates point-in-time snapshots, which makes it simple to archive, copy, and restore historical versions.
- Redis can usually restart from large RDB files faster than from AOF replay.
- The downside is durability: if the node crashes between snapshots, recent writes are lost.
- Snapshotting also depends on `fork()`, so very large datasets or slow CPUs can introduce latency pauses during persistence windows.

## AOF tradeoffs

- AOF records write operations and replays them on restart, so it is generally the more durable choice.
- The default `fsync every second` policy is the common compromise: much better durability than snapshots alone, but still not zero-risk.
- AOF rewrite keeps the file from growing forever, but rewrites still add disk and memory pressure during busy periods.
- Since Redis 7, AOF uses a multi-part format with base and incremental files tracked by a manifest.

## Operational implications

- If you disable persistence entirely, do it only for data that can be rebuilt or dropped.
- Avoid running a primary with persistence disabled unless you have thought through restart behavior very carefully.
- Monitor persistence operations alongside latency because both RDB snapshotting and AOF maintenance depend on background work and `fork()`.

## Default operating stance

1. Start with both RDB and AOF for stateful workloads.
2. Move to RDB-only only if the workload can tolerate snapshot-window loss.
3. Move to no persistence only if Redis is acting as a disposable cache and the rebuild path is tested.

Related: [[Replication Safety Notes]], [[Latency Diagnosis Notes]], [[Memory Pressure / OOM Runbook]].
