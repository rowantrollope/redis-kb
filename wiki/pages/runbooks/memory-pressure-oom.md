---
title: "Memory Pressure / OOM Runbook"
last_updated: 2026-04-08
tags: [runbook, memory, eviction]
source_count: 2
---

# Memory Pressure / OOM Runbook

## Signals
- `used_memory` approaching `maxmemory`.
- Elevated evictions or `OOM command not allowed` errors.
- Fragmentation ratio persistently high.

## Response
1. Verify `maxmemory-policy` aligns with workload semantics.
2. Identify top keyspace contributors (`--bigkeys`, sampled scans).
3. Apply short-term TTL reductions for low-value keys.
4. Reduce allocator fragmentation pressure (restart/failover window if required).

## Follow-up
- Add memory SLO alerts on growth slope, not only static thresholds.
- Revisit data model (hash packing, key cardinality, TTL hygiene).

Related: [[Performance Digest]], [[Security Digest]].
