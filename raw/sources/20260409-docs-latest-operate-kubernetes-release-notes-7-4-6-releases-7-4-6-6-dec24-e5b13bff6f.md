---
title: Redis Enterprise for Kubernetes 7.4.6-6 (Dec 2024) release notes
url: https://redis.io/docs/latest/operate/kubernetes/release-notes/7-4-6-releases/7-4-6-6-dec24/
retrieved_utc: '2026-04-09T20:45:56.053704+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/kubernetes/release-notes/7-4-6-releases/7-4-6-6-dec24/index.html.md
---

# Redis Enterprise for Kubernetes 7.4.6-6 (Dec 2024) release notes

```json metadata
{
  "title": "Redis Enterprise for Kubernetes 7.4.6-6 (Dec 2024) release notes",
  "description": "This is a maintenance release to support Redis Enterprise Software version 7.4.6-102 and contains a suggested fix needed to upgrade to newer versions.",
  "categories": ["docs","operate","kubernetes"],
  "tableOfContents": {"sections":[{"id":"highlights","title":"Highlights"},{"children":[{"id":"resolved-issues","title":"Resolved issues"}],"id":"new-in-this-release","title":"New in this release"},{"children":[{"id":"openshift-images","title":"OpenShift images"}],"id":"downloads","title":"Downloads"}]}

,
  "codeExamples": []
}
```
## Highlights

This is a maintenance release to support [Redis Enterprise Software version 7.4.6-102](). This version also contains a suggested fix needed to upgrade to newer versions. For version changes, supported distributions, and known limitations, see the [release notes for 7-4-6-2 (July 2024)]().

## New in this release

### Resolved issues

- Fixed service rigger crashing after REC upgrade (RED-144785)

## Downloads

- **Redis Enterprise**: `redislabs/redis:7.4.6-102`
- **Operator**: `redislabs/operator:7.4.6-6`
- **Services Rigger**: `redislabs/k8s-controller:7.4.6-6`


### OpenShift images

- **Redis Enterprise**: `registry.connect.redhat.com/redislabs/redis-enterprise:7.4.6-102.rhel8-openshift`
- **Operator**: `registry.connect.redhat.com/redislabs/redis-enterprise-operator:7.4.6-6`
- **Services Rigger**: `registry.connect.redhat.com/redislabs/services-manager:7.4.6-6`
- **OLM operator bundle** : `v7.4.6-6.1`
