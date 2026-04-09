---
title: Redis products
url: https://redis.io/docs/latest/operate/
retrieved_utc: '2026-04-09T20:46:06.033474+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/index.html.md
---

# Redis products

```json metadata
{
  "title": "Redis products",
  "description": "Products, services, and tools to operate a Redis database.",
  "categories": null,
  "tableOfContents": {"sections":[{"children":[{"id":"high-availability-and-durability","title":"High availability and durability"},{"id":"logging-and-monitoring","title":"Logging and monitoring"},{"id":"security","title":"Security"}],"id":"product-features","title":"Product features"}]}

,
  "codeExamples": []
}
```
|  Redis Cloud |  Redis Software |
|:-----------|:--------------|
| <ul><li> [Get started with Redis Cloud]() </li><li> [Create a database]() </li><li> [Connect to your database]() </li><li> [Subscriptions]() </li><li>[REST API]()</li></ul> | <ul><li> [Install Redis Software]() </li><li> [Set up a new cluster]() </li><li> [Create a database]() </li><li> [Connect to your database]() </li><li>[REST API]()</li></ul> |
|  **Redis Open Source** |  **Redis for Kubernetes** |
| <ul><li> [Install Redis 8 in Redis Open Source]() </li><li> [Install Redis Stack]() (&#8804; 7.4) </li><li> [Manage Redis]() </li></ul> | <ul><li> [Deploy Redis for Kubernetes]() </li><li> [Architecture]() </li><li> [API Reference]() </li></ul> |
|  **Redis Insight** |  **Redis Data Integration (RDI)** |
| <ul><li> [Install Redis Insight]() </li><li> [Use Redis Insight]() </li><li> [Download Redis Insight](https://redis.io/downloads/#insight) </li></ul> | <ul><li> [RDI overview]() </li><li> [Install RDI]() </li> <li> [RDI pipelines]() </li> </ul> |

## Product features

### High availability and durability

<!-- | Feature | RC        | RS         | Open Source       | K8s          | -->
| | <nobr> Redis</nobr> Cloud | <nobr> Redis</nobr> Software | <nobr> Redis</nobr> Open Source | <nobr> Redis for</nobr> Kubernetes |
|:-----------|:--------------|:-----------|:--------------|:--------------|
| Clustering | [Clustering]() | [Clustering]() | [Scale with Redis Cluster]() | [Redis Enterprise clusters (REC)]() |
| Replication | [Replication]() | [Replication]() | [Replication]() | [Create replica databases]()|
| Active-Active geo-distribution | [Active-Active Redis]() | [Active-Active Redis]() |  | [Active-Active databases]() |
| Rolling upgrades | [Upgrade database version]() | [Upgrade Redis Software]() |  | [Upgrade Redis for K8s]() |
| Redis Flex/Auto tiering | [Create a Redis Flex database]() | [Redis Flex]() |  | [Redis Flex]() |
| Persistence | [Data persistence]() | [Persistence]() | [Persistence]() | [Persistence volumes]()|
| Recovery | Automatic | [Recover cluster]() | [Manual failover]() | [Cluster recovery]() |
| Backups | [Back up a database]() | [Schedule backups]() | [Persistence]() | [REDB spec.backup]() |

### Logging and monitoring

<!-- | Feature | RC        | RS         | Open Source       | K8s          | -->
| | <nobr> Redis</nobr> Cloud | <nobr> Redis</nobr> Software | <nobr> Redis</nobr> Open Source | <nobr> Redis for</nobr> Kubernetes |
|:-----------|:--------------|:-----------|:--------------|:--------------|
| Monitoring | [Monitor performance]() | [Monitoring]() | [INFO](), [MONITOR](), and [LATENCY DOCTOR]()<br/>[Analysis with Redis Insight]() | [Export metrics to Prometheus]() |
| Logging | [System logs]() | [Logging]() | `/var/log/redis/redis.log`<br/>[SLOWLOG]()<br/>[Keyspace notifications]() | [Logs]() |
| Alerts | [Alerts]() | [Alerts and events]() | [Pub/sub with Redis Sentinel]() | [REDB alertSettings]() |
| Support | [Contact support](https://redis.io/support/) | [Create support package]() |  | [Contact support](https://redis.io/support/) |

### Security

<!-- | Feature | RC        | RS         | Open Source       | K8s          | -->
| | <nobr> Redis</nobr> Cloud | <nobr> Redis</nobr> Software | <nobr> Redis</nobr> Open Source | <nobr><div class="h-3 w-3 rounded-md border border-redis-pen-600 inline-block mr-1" style="background-color: #8A99A0"></div> Redis for</nobr> Kubernetes |
|:-----------|:--------------|:-----------|:--------------|:--------------|
| Transport Layer Security (TLS) | [TLS]() | [TLS]() | [TLS]() | [REDB tlsMode]() |
| Role-based access control (RBAC) | [Role-based access control]() | [Access control]() | [Access control list]() | [REC credentials]() |
| Lightweight Directory Access Protocol (LDAP) |  | [LDAP authentication]() |  | [Enable LDAP]() |
| Single sign-on (SSO) | [SAML SSO]() |  |  |  |
| Self-signed certificates |  | [Certificates]() | [Certificate configuration]() | [REC certificates]() |
| Internode encryption | [Encryption at rest]() | [Internode encryption]() |  | [Enable internode encryption]() |
| Auditing |  | [Audit events]() | [Keyspace notifications]() |  |
