---
title: "High Latency Triage Runbook"
last_updated: 2026-04-08
tags: [runbook, latency, troubleshooting]
source_count: 2
---

# High Latency Triage Runbook

## Immediate checks
- Validate impact scope (single shard, entire cluster, single AZ).
- Capture `INFO`, `LATENCY LATEST`, `SLOWLOG GET 128`, and host CPU/load.
- Confirm client-side timeout/retry storms.

## Command checklist
```bash
redis-cli -h <host> -p <port> INFO all
redis-cli LATENCY DOCTOR
redis-cli SLOWLOG GET 128
redis-cli --latency -i 0.1
```

## Decision flow
1. If CPU is saturated and `commandstats` shows hot commands, throttle or optimize command patterns.
2. If disk/fsync pressure is high, review AOF fsync policy and persistence backlog.
3. If network RTT is high, assess client placement and packet loss.
4. If only one node is impacted, consider failover or traffic shift.

Related: [[Performance Digest]], [[Resilience Digest]].
