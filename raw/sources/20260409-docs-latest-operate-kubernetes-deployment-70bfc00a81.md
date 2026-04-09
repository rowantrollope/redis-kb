---
title: Deployment
url: https://redis.io/docs/latest/operate/kubernetes/deployment/
retrieved_utc: '2026-04-09T20:45:55.029481+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/kubernetes/deployment/index.html.md
---

# Deployment

```json metadata
{
  "title": "Deployment",
  "description": "Deploy Redis Enterprise for Kubernetes using the Redis Enterprise operator on various Kubernetes distributions.",
  "categories": ["docs","operate","kubernetes"],
  "tableOfContents": {"sections":[{"id":"quick-start","title":"Quick start"},{"id":"deployment-methods","title":"Deployment methods"},{"id":"container-images","title":"Container images"},{"id":"compatibility","title":"Compatibility"},{"id":"prerequisites","title":"Prerequisites"},{"id":"next-steps","title":"Next steps"}]}

,
  "codeExamples": []
}
```
Deploy Redis Enterprise for Kubernetes by using the Redis Enterprise operator. The operator provides a simple way to deploy and manage Redis Enterprise clusters on various Kubernetes distributions, both on-premises and in the cloud.

The Redis Enterprise operator uses custom resource definitions (CRDs) to manage Redis Enterprise clusters (REC) and databases (REDB) as native Kubernetes resources. This approach enables GitOps workflows and Kubernetes-native operations.

## Quick start

Get started quickly with a basic Redis Enterprise deployment:

- [Deploy Redis Enterprise for Kubernetes]() - Step-by-step guide for most Kubernetes distributions
- [Deploy on OpenShift]() - Specific instructions for OpenShift environments

## Deployment methods

Choose the deployment method that best fits your environment:

- [Deploy with Helm]() - Use Helm charts for simplified deployment and management
- [Deploy with operator bundle]() - Direct deployment using kubectl and operator manifests

## Container images

Understand the container images used by the Redis Enterprise operator:

- [Container images]() - Details about Redis Enterprise container images and registries

## Compatibility

Before installing, verify compatibility with your environment:

- [Supported Kubernetes distributions]() - Check which Redis Enterprise operator version supports your Kubernetes distribution

## Prerequisites

Before deploying Redis Enterprise for Kubernetes, ensure you have:

- A Kubernetes cluster running a [supported distribution]()
- Minimum of three worker nodes for high availability
- Kubernetes client (kubectl) configured to access your cluster
- Access to container registries (DockerHub, Red Hat Container Catalog, or private registry)
- Sufficient resources as outlined in [sizing recommendations]()

## Next steps

After deployment, you can:

- [Create a Redis Enterprise cluster (REC)]()
- [Create Redis Enterprise databases (REDB)]()
- [Configure networking]()
- [Set up security]()