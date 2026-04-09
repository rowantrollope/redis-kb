---
title: "Failover Instability Runbook"
last_updated: 2026-04-08
tags: [runbook, sentinel, cluster, ha]
source_count: 2
---

# Failover Instability Runbook

## Symptoms
- Repeated role flapping (master/replica oscillation).
- Sentinel quorum disagreements.
- Replica resync loops with large replication backlog churn.

## Steps
1. Check quorum placement and network partition indicators.
2. Validate Sentinel config consistency and epoch progression.
3. Inspect replication lag and backlog sizing.
4. Pause automation that may trigger redundant failovers.
5. Stabilize write traffic and perform controlled failover if needed.

## Hardening
- Spread sentinels across failure domains.
- Tune failover timeout and down-after thresholds from incident data.
- Practice game days with packet loss / node pause scenarios.

Related: [[Resilience Digest]], [[Operations Digest]].
