---
title: Redis Enterprise for Kubernetes
url: https://redis.io/docs/latest/operate/kubernetes/
retrieved_utc: '2026-04-09T20:45:56.524575+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/kubernetes/index.html.md
---

# Redis Enterprise for Kubernetes

```json metadata
{
  "title": "Redis Enterprise for Kubernetes",
  "description": "Deploy and manage Redis Enterprise on Kubernetes with the Redis Enterprise operator.",
  "categories": ["docs","operate","kubernetes"],
  "tableOfContents": {"sections":[{"id":"get-started","title":"Get started"},{"id":"redis-enterprise-clusters-rec","title":"Redis Enterprise clusters (REC)"},{"id":"redis-enterprise-databases-redb","title":"Redis Enterprise databases (REDB)"},{"id":"active-active-databases","title":"Active-Active databases"},{"id":"security","title":"Security"},{"id":"reference","title":"Reference"},{"id":"logs-monitoring","title":"Logs \u0026 monitoring"},{"id":"upgrade","title":"Upgrade"},{"id":"release-notes","title":"Release notes"},{"id":"related-info","title":"Related info"}]}

,
  "codeExamples": []
}
```
Redis Enterprise for Kubernetes brings Redis Enterprise to Kubernetes environments through the Redis Enterprise operator. You can deploy, scale, and manage Redis Enterprise clusters and databases by using native Kubernetes resources and workflows.

Redis Enterprise for Kubernetes provides all the enterprise features of Redis Software:

- Linear scalability with Redis clustering
- High availability with automatic failover
- Active-Active geo-distribution
- Redis Flex for cost optimization
- Enterprise-grade security and encryption
- 24/7 support

The Redis Enterprise operator simplifies deployment and management by providing custom resource definitions (CRDs) for Redis Enterprise clusters (REC) and databases (REDB). This approach enables GitOps workflows and Kubernetes-native operations.

## Get started

Deploy Redis Enterprise on your Kubernetes cluster and create your first database.

- [Quick start deployment]()
- [Deploy with Helm]()
- [Deploy on OpenShift]()
- [Supported Kubernetes distributions]()

## Redis Enterprise clusters (REC)

Create and manage [Redis Enterprise clusters]() on Kubernetes.

- [Connect to admin console]()
- [Redis Flex]()
- [Multi-namespace deployment]()
- [Cluster recovery]()
- [REC API reference]()

## Redis Enterprise databases (REDB)

Create and manage [Redis Enterprise databases]() using Kubernetes resources.

- [Database controller]()
- [Create replica databases]()
- [REDB API reference]()

## Active-Active databases

Set up globally distributed [Active-Active databases]() across multiple Kubernetes clusters.

- [Prepare participating clusters]()
- [Create Active-Active database]()
- [Global configuration]()
- [REAADB API reference]()
- [Remote cluster API reference]()

## Security

Manage [secure connections]() and access control for your Redis Enterprise deployment.

- [Manage REC credentials]()
- [Manage REC certificates]()
- [Internode encryption]()
- [LDAP authentication]()

## Reference

Use the Kubernetes API and command-line tools to manage your Redis Enterprise deployment.

- [Redis Enterprise cluster API (REC)]()
- [Redis Enterprise database API (REDB)]()
- [Active-Active database API (REAADB)]()
- [Remote cluster API (RERC)]()

## Logs & monitoring

Monitor and troubleshoot your Redis Enterprise deployment.

- [Collect logs]()
- [Connect to Prometheus operator]()

## Upgrade

Keep your Redis Enterprise deployment up to date.

- [Upgrade Redis cluster]()
- [Upgrade with OpenShift CLI]()
- [Upgrade with OLM]()

## Release notes

Stay informed about new features, enhancements, and fixes.

- [Release notes]()

## Related info

- [Redis Enterprise Software]()
- [Redis Cloud]()
- [Redis Open Source]()
- [Glossary]()