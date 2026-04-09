---
title: Rack awareness examples
url: https://redis.io/docs/latest/operate/kubernetes/reference/yaml/rack-awareness/
retrieved_utc: '2026-04-09T20:45:55.699204+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/kubernetes/reference/yaml/rack-awareness/index.html.md
---

# Rack awareness examples

```json metadata
{
  "title": "Rack awareness examples",
  "description": "YAML examples for rack-aware Redis Enterprise deployments that distribute nodes across availability zones.",
  "categories": ["docs","operate","kubernetes"],
  "tableOfContents": {"sections":[{"id":"prerequisites","title":"Prerequisites"},{"id":"service-account","title":"Service account"},{"id":"cluster-role","title":"Cluster role"},{"id":"cluster-role-binding","title":"Cluster role binding"},{"children":[{"id":"common-zone-labels","title":"Common zone labels"}],"id":"rack-aware-redis-enterprise-cluster","title":"Rack-aware Redis Enterprise cluster"},{"id":"redis-enterprise-database","title":"Redis Enterprise database"},{"id":"apply-the-configuration","title":"Apply the configuration"},{"children":[{"id":"nodes-not-distributed-across-zones","title":"Nodes not distributed across zones"},{"id":"cluster-role-permissions-denied","title":"Cluster role permissions denied"},{"id":"database-shards-not-distributed","title":"Database shards not distributed"}],"id":"troubleshooting","title":"Troubleshooting"},{"id":"next-steps","title":"Next steps"},{"id":"related-documentation","title":"Related documentation"}]}

,
  "codeExamples": []
}
```
This page provides YAML examples for deploying Redis Enterprise with [rack awareness](). Rack awareness distributes Redis Enterprise nodes and database shards across different availability zones or failure domains to improve high availability and fault tolerance.

## Prerequisites

- Label [Kubernetes nodes](https://kubernetes.io/docs/concepts/architecture/nodes/) with zone information
- Typically uses the standard label `topology.kubernetes.io/zone`
- Verify node labels: `kubectl get nodes -o custom-columns="name:metadata.name","rack\\zone:metadata.labels.topology\.kubernetes\.io/zone"`
- Install the [Redis Enterprise operator]()

For complete deployment instructions, see [Deploy on Kubernetes]().

## Service account

The service account for rack-aware deployments is the same as [basic deployments]().



## Cluster role

Rack awareness requires additional permissions to read [node labels](https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/) across the cluster.



Cluster role configuration:

- `name`: ClusterRole name for rack awareness permissions
- `rules`: Permissions to read nodes and their labels cluster-wide
- `resources`: Access to `nodes` resource for zone label discovery

Key permissions:

- `nodes`: Read access to discover node zone labels
- `get, list, watch`: Monitor node changes and zone assignments

## Cluster role binding

The [ClusterRoleBinding](https://kubernetes.io/docs/reference/access-authn-authz/rbac/#rolebinding-and-clusterrolebinding) grants cluster-wide permissions to the service account.



Cluster role binding configuration:

- `subjects.name`: Must match the service account name
- `subjects.namespace`: Namespace where the operator is deployed
- `roleRef.name`: Must match the cluster role name

## Rack-aware Redis Enterprise cluster

The rack-aware [REC configuration]() includes the `rackAwarenessNodeLabel` field.



Rack-aware cluster configuration:

- `metadata.name`: Cluster name (cannot be changed after creation)
- `spec.rackAwarenessNodeLabel`: Node label used for zone identification
- `spec.nodes`: Minimum 3 nodes, ideally distributed across zones

Edit the values in the downloaded YAML file based on your environment, such as increasing nodes for better zone distribution, using custom zone labels, adding resource specifications, or enabling persistent storage.

### Common zone labels

Different Kubernetes distributions use different zone labels:

- `Standard`: `topology.kubernetes.io/zone`
- `Legacy`: `failure-domain.beta.kubernetes.io/zone`
- `Custom`: Your organization's specific labeling scheme

Verify the correct label on your nodes:

```bash
kubectl get nodes -o custom-columns="name:metadata.name","rack\\zone:metadata.labels.topology\.kubernetes\.io/zone"
```

## Redis Enterprise database

Database configuration for rack-aware clusters is the same as [basic deployments]().

**Important**: For rack awareness to be effective, ensure your database has replication enabled. Rack awareness distributes primary and replica shards across zones, so databases without replication will not benefit from zone distribution.



## Apply the configuration

To deploy rack-aware Redis Enterprise clusters, follow [Deploy on Kubernetes]() and ensure your Kubernetes nodes have proper zone labels. For detailed rack awareness configuration, see the [node selection recommendations]().

## Troubleshooting

### Nodes not distributed across zones

- Verify node labels are correct
- Check that sufficient nodes exist in each zone
- Ensure the `rackAwarenessNodeLabel` matches actual node labels

### Cluster role permissions denied

- Verify the ClusterRole and ClusterRoleBinding are applied
- Check that the service account name matches in all resources

### Database shards not distributed

- Confirm the cluster has rack awareness enabled
- **Check that the database has replication enabled** - rack awareness distributes primary/replica pairs across zones
- Verify the database has multiple shards
- Ensure sufficient nodes exist across zones

## Next steps

- [Configure Active-Active databases]()
- [Set up multi-namespace deployment]()
- [Learn about database replication]()

## Related documentation

- [Node selection recommendations]()
- [REC API reference]()
- [REDB API reference]()
- [Kubernetes node affinity](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/)
- [Redis Enterprise cluster architecture]()
