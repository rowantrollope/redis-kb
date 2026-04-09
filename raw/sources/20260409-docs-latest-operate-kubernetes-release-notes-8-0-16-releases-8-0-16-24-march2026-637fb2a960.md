---
title: Redis Enterprise for Kubernetes 8.0.16-24 (March 2026) release notes
url: https://redis.io/docs/latest/operate/kubernetes/release-notes/8-0-16-releases/8-0-16-24-march2026/
retrieved_utc: '2026-04-09T20:45:56.813033+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/kubernetes/release-notes/8-0-16-releases/8-0-16-24-march2026/index.html.md
---

# Redis Enterprise for Kubernetes 8.0.16-24 (March 2026) release notes

```json metadata
{
  "title": "Redis Enterprise for Kubernetes 8.0.16-24 (March 2026) release notes",
  "description": "Feature release with OSS Cluster API support for external clients, ARM architecture support, and Redis Software 8.0.16-64.",
  "categories": ["docs","operate","kubernetes"],
  "tableOfContents": {"sections":[{"id":"resolved-issues","title":"Resolved issues"},{"children":[{"id":"openshift-downloads","title":"Openshift downloads"}],"id":"downloads","title":"Downloads"}]}

,
  "codeExamples": []
}
```
Redis Enterprise for Kubernetes 8.0.16-24 is a maintenance release of [Redis Enterprise for Kubernetes 8.0.10](). 

For version changes, supported distributions, and known limitations, see the [release notes for 8.0.10]().

## Resolved issues

- Fixed a UBI9 dependency error that blocked operator image builds <!--RED-187506-->
- Added testing for OpenShift 4.21 <!--RED-190160-->
- Fixed Vault cache timeouts <!--RED-189494-->

## Downloads

- **Redis Enterprise**: `redislabs/redis:8.0.16-64`
- **Operator**: `redislabs/operator:8.0.16-24`
- **Services Rigger**: `redislabs/k8s-controller:8.0.16-24`
- **Callhome client**: `redislabs/re-call-home-client:8.0.16-24`

### Openshift downloads

- **OLM operator bundle**: `8.0.16-24.4`
- **Call Home Client**: `redislabs/call-home-client:8.0.16-24`
