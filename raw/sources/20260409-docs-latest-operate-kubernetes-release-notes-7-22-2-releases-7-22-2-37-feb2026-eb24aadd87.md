---
title: Redis Enterprise for Kubernetes 7.22.2-37 (February 2026) release notes
url: https://redis.io/docs/latest/operate/kubernetes/release-notes/7-22-2-releases/7-22-2-37-feb2026/
retrieved_utc: '2026-04-09T20:45:55.383277+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/kubernetes/release-notes/7-22-2-releases/7-22-2-37-feb2026/index.html.md
---

# Redis Enterprise for Kubernetes 7.22.2-37 (February 2026) release notes

```json metadata
{
  "title": "Redis Enterprise for Kubernetes 7.22.2-37 (February 2026) release notes",
  "description": "Maintenance release to support Redis Enterprise Software version 7.22.2-79 with bug and security fixes.",
  "categories": ["docs","operate","kubernetes"],
  "tableOfContents": {"sections":[{"id":"highlights","title":"Highlights"},{"children":[{"id":"openshift-downloads","title":"Openshift downloads"}],"id":"downloads","title":"Downloads"},{"id":"known-limitations","title":"Known limitations"}]}

,
  "codeExamples": []
}
```
## Highlights

This is a maintenance release to support Redis Enterprise Software version 7.22.2-79. For supported distributions and known limitations, see the [7.22.2 releases]().

## Downloads

- **Redis Enterprise**: `redislabs/redis:7.22.2-79`
- **Operator**: `redislabs/operator:7.22.2-37`
- **Services Rigger**: `redislabs/k8s-controller:7.22.2-37`
- **Call Home Client**: `redislabs/re-call-home-client:7.22.2-37`

### Openshift downloads

- **OLM operator bundle**: `v7.22.2-37.1`
- **Call Home Client**: `redislabs/call-home-client:7.22.2-37`

## Known limitations

- **Expired license causes pod readiness failures, blocking recovery and upgrades** <!--RED-185977--> If a pod is stuck during upgrade, manually update the licenses via the REST API.

For all other known limitations, see [7.22.2 releases](). 
