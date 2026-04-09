---
title: "Latency Diagnosis Notes"
last_updated: 2026-04-09
tags: [latency, performance, troubleshooting]
source_count: 1
---

# Latency Diagnosis Notes

This page summarizes the official Redis latency diagnosis guidance fetched on 2026-04-09 from `raw/sources/20260409-redis-latency-diagnosis-official-docs.md`.

## Quick checklist from the official docs

- measure **intrinsic latency** on the server host, not the client
- enable Redis latency monitoring early
- inspect `SLOWLOG` and command patterns
- check `latest_fork_usec` and persistence activity
- disable transparent huge pages on Linux hosts
- treat old or noisy virtualized environments as possible root causes

## Intrinsic latency first

Redis can only be as fast as the runtime environment allows.
The docs recommend using `redis-cli --intrinsic-latency` on the server host to understand the floor imposed by the VM or physical machine.

If intrinsic latency is already multiple milliseconds, Redis tuning alone will not get you back to sub-millisecond service behavior.

## Persistence and fork pressure

Redis uses `fork()` for background save and AOF rewrite operations.
That introduces latency directly in the main thread during the fork window, and the impact grows with dataset size and some virtualization platforms.

What to watch:

- `latest_fork_usec`
- RDB/AOF cadence during incidents
- whether latency spikes line up with persistence operations

## Transparent huge pages

The official docs call out transparent huge pages as a source of major latency penalties after fork-heavy operations.
If Linux hosts still have THP enabled, disable that before spending time on higher-level tuning.

## Slow commands vs environment issues

There are two broad buckets:

- Redis is slow because the host is slow or pause-prone.
- Redis is slow because command shape, persistence, or traffic patterns are bad.

Use both environment and command-level checks together:

- host/VM latency floor
- `SLOWLOG`
- latency monitor output
- commandstats and workload shape

Related: [[High Latency Triage Runbook]], [[Persistence Strategy Notes]], [[Performance Digest]].
