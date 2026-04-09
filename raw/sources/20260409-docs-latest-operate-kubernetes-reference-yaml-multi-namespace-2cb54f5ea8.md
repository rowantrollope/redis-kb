---
title: Multi-namespace examples
url: https://redis.io/docs/latest/operate/kubernetes/reference/yaml/multi-namespace/
retrieved_utc: '2026-04-09T20:45:57.218163+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/kubernetes/reference/yaml/multi-namespace/index.html.md
---

# Multi-namespace examples

```json metadata
{
  "title": "Multi-namespace examples",
  "description": "YAML examples for deploying Redis Enterprise across multiple Kubernetes namespaces.",
  "categories": ["docs","operate","kubernetes"],
  "tableOfContents": {"sections":[{"id":"operator-service-account","title":"Operator service account"},{"id":"operator-cluster-role","title":"Operator cluster role"},{"id":"operator-cluster-role-binding","title":"Operator cluster role binding"},{"id":"consumer-role","title":"Consumer role"},{"id":"consumer-role-binding","title":"Consumer role binding"},{"id":"next-steps","title":"Next steps"},{"id":"related-documentation","title":"Related documentation"}]}

,
  "codeExamples": []
}
```
Multi-namespace deployment lets a single Redis Enterprise operator manage clusters and databases in different namespaces, providing better resource isolation and organization.

Multi-namespace deployment enables:
- Namespace isolation: Separate Redis Enterprise resources by team, environment, or application
- Centralized management: Single operator manages multiple namespaces
- Resource sharing: Efficient use of cluster resources across namespaces
- Flexible RBAC: Fine-grained permissions per namespace

This example shows:
- Operator namespace: `redis-enterprise-operator` (where the operator and REC run)
- Consumer namespaces: `app-production`, `app-staging` (where REDB resources are created)

For complete deployment instructions, see [Manage databases in multiple namespaces]().

## Operator service account

Deploy these resources in the namespace where the Redis Enterprise operator runs.



## Operator cluster role

Grant the operator cluster-wide permissions to manage resources across namespaces.



## Operator cluster role binding



## Consumer role



## Consumer role binding



Consumer namespace configuration:

- `subjects.name`: Must match the operator service account name
- `subjects.namespace`: Must be the operator namespace, not the consumer namespace
- `roleRef.name`: Must match the consumer role name

## Next steps

- [Configure networking across namespaces]()
- [Set up monitoring for multi-namespace deployment]()
- [Learn about resource management]()

## Related documentation

- [Manage databases in multiple namespaces]()
- [RBAC configuration]()
- [Kubernetes namespaces](https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/)
