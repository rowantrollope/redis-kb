---
title: Redis Enterprise for Kubernetes 7.4.6-6 (March 2025) release notes
url: https://redis.io/docs/latest/operate/kubernetes/release-notes/7-4-6-releases/7-4-6-6-mar25/
retrieved_utc: '2026-04-09T20:45:55.908594+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/kubernetes/release-notes/7-4-6-releases/7-4-6-6-mar25/index.html.md
---

# Redis Enterprise for Kubernetes 7.4.6-6 (March 2025) release notes

```json metadata
{
  "title": "Redis Enterprise for Kubernetes 7.4.6-6 (March 2025) release notes",
  "description": "This is a maintenance release to support Redis Enterprise Software version 7.4.6-233 (7.4.6-232 for OpenShift).",
  "categories": ["docs","operate","kubernetes"],
  "tableOfContents": {"sections":[{"id":"highlights","title":"Highlights"},{"children":[{"id":"openshift-images","title":"OpenShift images"}],"id":"downloads","title":"Downloads"}]}

,
  "codeExamples": []
}
```
## Highlights

This is a maintenance release to support [Redis Enterprise Software version 7.4.6-232](). For version changes, supported distributions, and known limitations, see the [release notes for 7.4.6]().

If you are not using OpenShift, you must use the `7.4.6-233` Redis Enterprise image listed below. The `7.4.6-232` image only supports OpenShift, and may cause the upgrade to fail if used with other distributions.

To upgrade successfully, use the correct Redis Enterprise image for your K8s distribution.

- OpenShift: `registry.connect.redhat.com/redislabs/redis-enterprise:7.4.6-232.rhel8-openshift`
- Non-OpenShift distributions: `redislabs/redis:7.4.6-233`


## Downloads

- **Redis Enterprise**: `redislabs/redis:7.4.6-233`
- **Operator**: `redislabs/operator:7.4.6-6`
- **Services Rigger**: `redislabs/k8s-controller:7.4.6-6`

### OpenShift images

- **Redis Enterprise**: `registry.connect.redhat.com/redislabs/redis-enterprise:7.4.6-232.rhel8-openshift`
- **Operator**: `registry.connect.redhat.com/redislabs/redis-enterprise-operator:7.4.6-6`
- **Services Rigger**: `registry.connect.redhat.com/redislabs/services-manager:7.4.6-6`
- **OLM operator bundle**: `v7.4.6-6.3`
