---
title: Redis Enterprise for Kubernetes 7.22.2-38 (March 2026) release notes
url: https://redis.io/docs/latest/operate/kubernetes/release-notes/7-22-2-releases/7-22-2-38-march2026/
retrieved_utc: '2026-04-09T20:45:55.362025+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/kubernetes/release-notes/7-22-2-releases/7-22-2-38-march2026/index.html.md
---

# Redis Enterprise for Kubernetes 7.22.2-38 (March 2026) release notes

```json metadata
{
  "title": "Redis Enterprise for Kubernetes 7.22.2-38 (March 2026) release notes",
  "description": "Maintenance release to support Redis Enterprise Software version 7.22.2-93 with bug and security fixes.",
  "categories": ["docs","operate","kubernetes"],
  "tableOfContents": {"sections":[{"id":"highlights","title":"Highlights"},{"id":"resolved-issues","title":"Resolved issues"},{"children":[{"id":"openshift-downloads","title":"Openshift downloads"}],"id":"downloads","title":"Downloads"},{"id":"known-limitations","title":"Known limitations"}]}

,
  "codeExamples": []
}
```
## Highlights

This is a maintenance release to support Redis Enterprise Software version 7.22.2-93. For supported distributions and known limitations, see the [7.22.2 releases]().

## Resolved issues

- Fixed pod readiness failures due to expired license <!--RED-185977--> 

## Downloads

- **Redis Enterprise**: `redislabs/redis:7.22.2-93`
- **Operator**: `redislabs/operator:7.22.2-38`
- **Services Rigger**: `redislabs/k8s-controller:7.22.2-38`
- **Call Home Client**: `redislabs/re-call-home-client:7.22.2-38`

### Openshift downloads

- **OLM operator bundle**: `v7.22.2-38.0`
- **Call Home Client**: `redislabs/call-home-client:7.22.2-38`

## Known limitations

See [7.22.2 releases]() for information on known limitations.
