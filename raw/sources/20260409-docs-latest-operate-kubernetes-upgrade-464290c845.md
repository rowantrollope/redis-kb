---
title: Upgrade Redis Enterprise for Kubernetes
url: https://redis.io/docs/latest/operate/kubernetes/upgrade/
retrieved_utc: '2026-04-09T20:45:55.293098+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/kubernetes/upgrade/index.html.md
---

# Upgrade Redis Enterprise for Kubernetes

```json metadata
{
  "title": "Upgrade Redis Enterprise for Kubernetes",
  "description": "Upgrade Redis Enterprise operator, clusters, and databases on Kubernetes.",
  "categories": ["docs","operate","kubernetes"],
  "tableOfContents": {"sections":[{"id":"upgrade-methods","title":"Upgrade methods"},{"id":"upgrade-process","title":"Upgrade process"},{"id":"upgrade-compatibility","title":"Upgrade compatibility"},{"id":"rhel9-based-image","title":"RHEL9-based image"}]}

,
  "codeExamples": []
}
```
Keep your Redis Enterprise deployment up to date with the latest features, security patches, and bug fixes. The upgrade process involves updating three main components in sequence: the Redis Enterprise operator, Redis Enterprise clusters (REC), and Redis Enterprise databases (REDB).

## Upgrade methods

Choose the appropriate upgrade method for your deployment:

- [Upgrade Redis Enterprise for Kubernetes]() - Standard upgrade process for most Kubernetes distributions
- [Upgrade with OpenShift CLI]() - OpenShift-specific upgrade using CLI tools
- [Upgrade with OpenShift OperatorHub]() - Upgrade using OpenShift OperatorHub and OLM
- [Upgrade with Helm]() - Helm-specific upgrade instructions for chart-based deployments

## Upgrade process

The upgrade process includes updating three components in order:

1. **Upgrade the Redis Enterprise operator** - Update the operator to the latest version
2. **Upgrade the Redis Enterprise cluster (REC)** - Update cluster nodes and infrastructure
3. **Upgrade Redis Enterprise databases (REDB)** - Update database versions and configurations

## Upgrade compatibility

When upgrading, both your Kubernetes version and Redis operator version need to be supported at all times.

If your current Kubernetes distribution is not [supported](), upgrade to a supported distribution before upgrading. 

## RHEL9-based image

As of version 7.8.2-6, Redis Enterprise images are based on Red Hat Enterprise Linux 9 (RHEL9). This means upgrades require:

- [Cluster version of 7.4.2-2 or later](https://redis.io/docs/latest/operate/kubernetes/7.4.6/upgrade/).
- Database version 7.2 or later.
- RHEL9 compatible binaries for any modules you need.

For detailed steps, see the relevant upgrade page:

- [OpenShift CLI]()
- [OpenShift OperatorHub]()
- [Kubernetes]()