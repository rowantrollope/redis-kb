---
title: Hardware requirements
url: https://redis.io/docs/latest/operate/rs/installing-upgrading/install/plan-deployment/hardware-requirements/
retrieved_utc: '2026-04-09T20:45:55.540261+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/installing-upgrading/install/plan-deployment/hardware-requirements/index.html.md
---

# Hardware requirements

```json metadata
{
  "title": "Hardware requirements",
  "description": "Redis Software hardware requirements for development and production environments.",
  "categories": ["docs","operate","rs","kubernetes"],
  "tableOfContents": {"sections":[{"children":[{"id":"general-database-sizing-general-sizing","title":"General database sizing {#general-sizing}"},{"id":"active-active-database-sizing-active-active-sizing","title":"Active-Active database sizing {#active-active-sizing}"},{"id":"sizing-databases-with-auto-tiering-enabled-redis-on-flash-sizing","title":"Sizing databases with Auto Tiering enabled  {#redis-on-flash-sizing}"}],"id":"sizing-considerations","title":"Sizing considerations"}]}

,
  "codeExamples": []
}
```

## Sizing considerations

### General database sizing {#general-sizing}

Factors to consider when sizing your database.

- **Dataset size** â Your limit should be greater than your dataset size to leave room for overhead.
- **Database throughput** â High throughput needs more shards, leading to a higher memory limit.
- [**Modules**]() â Using modules with your database consumes more memory.
- [**Database clustering**]() â Allows you to spread your data into shards across multiple nodes.
- [**Database replication**]() â Enabling replication doubles memory consumption.

### Active-Active database sizing {#active-active-sizing}

Additional factors for sizing Active-Active databases:

- [**Active-Active replication**]() â Requires double the memory of regular replication, which can be up to two times (2x) the original data size per instance.
- [**Database replication backlog**]() â For synchronization between shards. By default, this is set to 1% of the database size.
- [**Active-Active replication backlog**]() â For synchronization between clusters. By default, this is set to 1% of the database size.


Active-Active databases have a lower threshold for activating the eviction policy, because it requires propagation to all participating clusters. The eviction policy starts to evict keys when one of the Active-Active instances reaches 80% of its memory limit.


### Sizing databases with Auto Tiering enabled  {#redis-on-flash-sizing}

Additional factors for sizing  databases with Auto Tiering enabled:

- [**Database persistence**]() â Auto Tiering uses dual database persistence where both the primary and replica shards persist to disk. This may add some processor and network overhead, especially in cloud configurations with network-attached storage.

