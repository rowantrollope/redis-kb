---
title: Reference
url: https://redis.io/docs/latest/operate/kubernetes/reference/
retrieved_utc: '2026-04-09T20:46:00.209063+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/kubernetes/reference/index.html.md
---

# Reference

```json metadata
{
  "title": "Reference",
  "description": "Resources to help you manage Redis Enterprise custom resources on Kubernetes.",
  "categories": ["docs","operate","kubernetes"],
  "tableOfContents": {"sections":[{"children":[{"id":"create-custom-resources","title":"Create custom resources"},{"id":"view-custom-resources","title":"View custom resources"},{"id":"modify-custom-resources","title":"Modify custom resources"}],"id":"work-with-custom-resources","title":"Work with custom resources"},{"children":[{"id":"example-categories","title":"Example categories"}],"id":"yaml-examples","title":"YAML examples"},{"children":[{"id":"core-resources","title":"Core resources"},{"id":"active-active-resources","title":"Active-Active resources"}],"id":"api-reference","title":"API reference"},{"id":"compatibility","title":"Compatibility"},{"id":"best-practices","title":"Best practices"}]}

,
  "codeExamples": []
}
```
This reference documentation covers Redis Enterprise custom resources, API specifications, and practical instructions for creating, configuring, and managing Redis Enterprise deployments on Kubernetes.

## Work with custom resources

Redis Enterprise for Kubernetes uses custom resources to manage clusters and databases. Use standard Kubernetes tools to create, modify, and delete these resources.

### Create custom resources

Use `kubectl apply` with YAML manifests to create custom resources:

```bash
kubectl apply -f my-redis-cluster.yaml
kubectl apply -f my-redis-database.yaml
```

### View custom resources

Use these commands to list and inspect existing custom resources:

```bash
# List Redis Enterprise clusters
kubectl get rec

# List Redis Enterprise databases
kubectl get redb

# List Active-Active databases
kubectl get reaadb

# List remote clusters
kubectl get rerc

# Get detailed information about a specific resource
kubectl describe rec my-cluster
kubectl describe redb my-database
```

### Modify custom resources

Edit the YAML manifest and reapply to update custom resources:

```bash
# Edit and apply updated manifest
kubectl apply -f updated-redis-cluster.yaml

# Or edit directly (not recommended for production)
kubectl edit rec my-cluster
kubectl edit redb my-database
```

## YAML examples

Find complete YAML examples for common deployment scenarios:

- [YAML examples]() - Ready-to-use YAML configurations for different deployment types

### Example categories

- [Basic deployment]() - Essential YAML files for simple Redis Enterprise deployment
- [Rack awareness]() - YAML examples for rack-aware deployments across availability zones
- [Active-Active]() - YAML examples for Active-Active databases across multiple clusters
- [Multi-namespace]() - YAML examples for deploying across multiple namespaces

## API reference

Review complete API specifications for all Redis Enterprise custom resources:

### Core resources

- [Redis Enterprise cluster API (REC)]() - Manage Redis Enterprise clusters
- [Redis Enterprise database API (REDB)]() - Manage Redis databases

### Active-Active resources

- [Active-Active database API (REAADB)]() - Manage Active-Active databases
- [Remote cluster API (RERC)]() - Configure remote cluster connections

## Compatibility

Check supported Kubernetes distributions and versions:

- [Supported Kubernetes distributions]() - Compatible Kubernetes platforms and versions

## Best practices

Follow these best practices when working with custom resources:

- **Use version control**: Store your YAML manifests in version control systems
- **Validate before applying**: Use `kubectl apply --dry-run=client` to validate changes
- **Monitor resource status**: Check resource status after you apply changes
- **Follow naming conventions**: Use consistent naming for easier management
- **Document configurations**: Add annotations and labels to describe resource purpose