---
title: Networking
url: https://redis.io/docs/latest/operate/kubernetes/networking/
retrieved_utc: '2026-04-09T20:45:57.218777+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/kubernetes/networking/index.html.md
---

# Networking

```json metadata
{
  "title": "Networking",
  "description": "Configure networking and external access for Redis Enterprise clusters and databases on Kubernetes.",
  "categories": ["docs","operate","kubernetes"],
  "tableOfContents": {"sections":[{"id":"database-connectivity","title":"Database connectivity"},{"id":"external-routing-methods","title":"External routing methods"},{"id":"automatic-ingress-configuration","title":"Automatic ingress configuration"},{"id":"ingressorroutespec-for-active-active-databases","title":"ingressOrRouteSpec for Active-Active databases"},{"id":"oss-cluster-api-support","title":"OSS Cluster API support"},{"id":"rec-domain-name","title":"REC domain name"}]}

,
  "codeExamples": []
}
```
Configure networking and external access for your Redis Enterprise deployment on Kubernetes. By default, Kubernetes doesn't allow external access to your Redis databases. Redis Enterprise for Kubernetes provides several methods to route external traffic to your clusters and databases.

## Database connectivity

Connect applications to your Redis Enterprise databases:

- [Database connectivity]() - Comprehensive guide to in-cluster and external database access, service discovery, and credentials management.

## External routing methods

Choose the appropriate method for your environment to enable external access:

- [Ingress routing]() - Use NGINX or HAProxy ingress controllers with `ingress` API resources
- [Istio ingress routing]() - Use Istio service mesh with `Gateway` and `VirtualService` API resources
- [OpenShift routes]() - Use OpenShift-specific route resources for external traffic

## Automatic ingress configuration

For Active-Active databases, configure automatic ingress creation:

- [REC external routing]() - Use `ingressOrRouteSpec` field in RedisEnterpriseCluster (REC) for automatic ingress creation

## `ingressOrRouteSpec` for Active-Active databases

Versions 6.4.2 or later of Redis Enterprise for Kubernetes include a feature for ingress configuration. The `ingressOrRouteSpec` field is available in the RedisEnterpriseCluster spec to automatically create an Ingress (or route) for the API service and databases (REAADB) on that REC. See [REC external routing]() for more details.

This feature only supports automatic Ingress creation for Active-Active databases created and managed with the RedisEnterpriseActiveActiveDatabase (REAADB) custom resource. Use with the standard Redis Enterprise database (REDB) is not currently supported.

## OSS Cluster API support

[OSS Cluster API]() is supported for both internal and external clients:

- **Internal clients** running on pods within the same Kubernetes cluster can connect directly to Redis Enterprise pods using pod IPs.
- **External clients** outside the Kubernetes cluster can connect through LoadBalancer services when `enableExternalAccess: true` is configured in the database specification. This creates a separate LoadBalancer service for each Redis Enterprise pod. Note that LoadBalancers are resources that can significantly increase operational costs.

See [Enable cluster-aware clients (OSS Cluster API)]() for configuration details.

## REC domain name

The RedisEnterpriseCluster does not support custom domain names. Domain names for the REC are in the following format: `<rec-name>.<namespace>.svc.cluster.local`.
