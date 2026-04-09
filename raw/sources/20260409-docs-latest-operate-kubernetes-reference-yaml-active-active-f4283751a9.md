---
title: Active-Active examples
url: https://redis.io/docs/latest/operate/kubernetes/reference/yaml/active-active/
retrieved_utc: '2026-04-09T20:45:56.149708+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/kubernetes/reference/yaml/active-active/index.html.md
---

# Active-Active examples

```json metadata
{
  "title": "Active-Active examples",
  "description": "YAML examples for Active-Active Redis Enterprise databases across multiple Kubernetes clusters.",
  "categories": ["docs","operate","kubernetes"],
  "tableOfContents": {"sections":[{"id":"applying-the-configuration","title":"Applying the configuration"},{"id":"namespace-examples","title":"Namespace examples"},{"id":"rec-examples","title":"REC examples"},{"children":[{"id":"rerc-configuration","title":"RERC configuration"}],"id":"rerc-examples","title":"RERC examples"},{"children":[{"id":"reaadb-configuration","title":"REAADB configuration"}],"id":"active-active-database-examples","title":"Active-Active database examples"},{"id":"related-documentation","title":"Related documentation"}]}

,
  "codeExamples": []
}
```
This page provides YAML examples for deploying Active-Active Redis Enterprise databases across multiple Kubernetes clusters. Active-Active databases provide multi-master replication with conflict resolution, enabling global distribution and local read/write access.

For complete deployment instructions, see [Active-Active databases]().

## Applying the configuration

To deploy Active-Active databases using these YAML files, follow [Create Active-Active database (REAADB)](), which provides detailed instructions for preparing clusters, creating RERC resources, and deploying REAADB configurations.

## Namespace examples

A namespace is an abstraction used by Kubernetes to support multiple virtual clusters on the same physical cluster.

`ns-illinois.yaml` is used in [Create Active-Active database]().



`ns-virginia.yaml` is used in [Create Active-Active database]().



## REC examples

A Redis Enterprise cluster is a collection of Redis Enterprise nodes that pools system resources across nodes and supports multi-tenant database instances.

`rec-chicago.yaml` is used in [Create Active-Active database]() and [Create RERC]().



`rec-arlington.yaml` is used in [Create Active-Active database]() and [Create RERC]().



## RERC examples

RedisEnterpriseRemoteCluster represents a remote participating cluster.

`rerc-ohare.yaml` is used in the [Create RERC]() section.



`rerc-raegan.yaml` is used in the [Create RERC]() section.



### RERC configuration

- [metadata.name](): Unique name for this remote cluster reference
- [spec.recName](): Name of the remote REC
- [spec.recNamespace](): Namespace of the remote REC
- [spec.apiFqdnUrl](): API endpoint URL for the remote cluster
- [spec.dbFqdnSuffix](): Database hostname suffix for the remote cluster
- [spec.secretName](): Secret containing authentication credentials

Edit the values in the downloaded YAML file for your specific setup, updating the remote cluster details, API endpoints, and secret names to match your actual environment.

## Active-Active database examples

Active-Active databases are geo-distributed databases that span multiple Redis Enterprise clusters and use multi-primary replication and conflict-free replicated data types (CRDTs).

`reaadb-boeing.yaml` is used in the [Create Active-Active database]() section.



### REAADB configuration

- [metadata.name](): Active-Active database name
- [spec.participatingClusters](): List of RERC names that participate in this database
- [spec.globalConfigurations](): Database settings applied to all participating clusters

Edit the downloaded YAML file to add global database settings such as memory allocation, shard count, replication settings, database secrets, Redis modules, and database-specific Redis configuration.

## Related documentation

- [Active-Active databases (index)]()
- [Prepare participating clusters]()
- [Create Active-Active database (REAADB)]()
- [Edit global configuration]()
- [Sync global database secret]()
- [RERC API reference]()
- [REAADB API reference]()
- [Networking configuration]()
