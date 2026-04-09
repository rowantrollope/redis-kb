---
title: "Sentinel Operations Notes"
last_updated: 2026-04-09
tags: [sentinel, failover, quorum, resilience]
source_count: 1
---

# Sentinel Operations Notes

This page summarizes the official Redis Sentinel guidance fetched on 2026-04-09 from `raw/sources/20260409-redis-sentinel-official-docs.md`.

## What Sentinel is responsible for

- monitoring primaries and replicas
- notifying operators or automation when Redis is unhealthy
- promoting a replica during failover
- telling clients where the current primary lives

Sentinel is not a replacement for understanding replication durability limits. It orchestrates failover on top of asynchronous replication.

## Deployment floor

- Run at least **three** Sentinel processes.
- Place them in independent failure domains.
- Keep port `26379` reachable between Sentinel nodes.
- Use a writable Sentinel config file, because Sentinel persists live state into it.

Two-Sentinel deployments are specifically risky because they cannot safely authorize failover in the right partitions.

## Quorum vs majority

The docs make an important distinction:

- **quorum** decides when enough Sentinels agree that a primary looks down
- **majority authorization** decides whether a failover may actually proceed

Operationally, this means a minority partition should not be able to promote a new primary just because it locally suspects a failure.

## Failure-domain guidance

- Avoid placing Sentinel and Redis nodes so that one machine loss removes both data and the votes needed to fail over.
- Be very cautious with Docker, NAT, or port remapping because Sentinel relies on peer discovery and address correctness.
- Expect eventual consistency after partitions heal; Sentinel converges configurations, but acknowledged writes can still be lost in the failover window.

## TILT mode

Sentinel has a protection mode called **TILT** for cases where local time progression looks abnormal, such as long event-loop stalls or heavy host pauses.

When in TILT mode:

- Sentinel keeps observing the system
- but it stops trusting itself enough to make normal failure judgments

If you see TILT, investigate host pauses, clock behavior, or process starvation before trusting the failover layer.

## Practical defaults

1. Start with three Sentinels across separate machines or zones.
2. Set quorum with the majority rule in mind, not as a shortcut around partition safety.
3. Test client-side Sentinel support before relying on it in incidents.

Related: [[Replication Safety Notes]], [[Failover Instability Runbook]], [[High Latency Triage Runbook]].
