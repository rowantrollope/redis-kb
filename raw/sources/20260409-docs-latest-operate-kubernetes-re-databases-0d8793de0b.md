---
title: Redis Enterprise databases (REDB)
url: https://redis.io/docs/latest/operate/kubernetes/re-databases/
retrieved_utc: '2026-04-09T20:45:56.742204+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/kubernetes/re-databases/index.html.md
---

# Redis Enterprise databases (REDB)

```json metadata
{
  "title": "Redis Enterprise databases (REDB)",
  "description": "Create and manage Redis Enterprise databases (REDB) on Kubernetes using the Redis Enterprise operator.",
  "categories": ["docs","operate","kubernetes"],
  "tableOfContents": {"sections":[{"id":"database-management","title":"Database management"},{"id":"replication-and-high-availability","title":"Replication and high availability"},{"id":"advanced-database-configurations","title":"Advanced database configurations"},{"id":"database-connectivity","title":"Database connectivity"},{"id":"monitoring-and-troubleshooting","title":"Monitoring and troubleshooting"},{"id":"related-topics","title":"Related topics"}]}

,
  "codeExamples": []
}
```
A Redis Enterprise database (REDB) is a custom Kubernetes resource that represents a Redis database running on a Redis Enterprise cluster. The Redis Enterprise operator manages REDB resources and handles database creation, configuration, scaling, and lifecycle operations.

REDB resources define database specifications including memory limits, persistence settings, security configurations, networking options, and Redis modules. You can deploy databases on existing Redis Enterprise clusters (REC) and manage them by using standard Kubernetes tools and workflows.

## Database management

Create and manage Redis Enterprise databases on your cluster:

- [Database controller]() - Understand how the database controller manages REDB resources and database lifecycle

## Replication and high availability

Set up database replication for high availability and disaster recovery:

- [Create replica databases]() - Configure replica databases for read scaling and disaster recovery scenarios

## Advanced database configurations

Explore advanced database features and configurations:

- [Active-Active databases]() - Set up globally distributed Active-Active databases across multiple Kubernetes clusters

## Database connectivity

Connect applications to your Redis Enterprise databases:

- [Database connectivity]() - Comprehensive guide to in-cluster and external database access, service discovery, and credentials management.
- [Networking]() - Configure ingress, routes, and service exposure for database access
- [Security]() - Set up TLS, authentication, and access control for secure database connections

## Monitoring and troubleshooting

Monitor database performance and troubleshoot issues:

- [Logs]() - Collect and analyze database logs for troubleshooting
- [Connect to Prometheus operator]() - Monitor database metrics with Prometheus

## Related topics

- [Redis Enterprise clusters (REC)]() - Manage the underlying cluster infrastructure
- [REDB API reference]() - Complete API specification for REDB resources
- [Active-Active database API]() - API reference for Active-Active databases
- [Remote cluster API]() - API reference for remote cluster configurations
