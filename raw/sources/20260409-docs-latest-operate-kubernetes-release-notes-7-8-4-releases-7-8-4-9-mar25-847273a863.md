---
title: Redis Enterprise for Kubernetes 7.8.4-9 (March 2025) release notes
url: https://redis.io/docs/latest/operate/kubernetes/release-notes/7-8-4-releases/7-8-4-9-mar25/
retrieved_utc: '2026-04-09T20:45:51.491005+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/kubernetes/release-notes/7-8-4-releases/7-8-4-9-mar25/index.html.md
---

# Redis Enterprise for Kubernetes 7.8.4-9 (March 2025) release notes

```json metadata
{
  "title": "Redis Enterprise for Kubernetes 7.8.4-9 (March 2025) release notes",
  "description": "Maintenance release to support Redis Enterprise Software version 7.8.4-95.",
  "categories": ["docs","operate","kubernetes"],
  "tableOfContents": {"sections":[{"id":"supported-distributions","title":"Supported distributions"},{"id":"downloads","title":"Downloads"}]}

,
  "codeExamples": []
}
```
This is a maintenance release to support [Redis Enterprise Software version 7.8.4-95]() and OpenShift 4.17 and 4.18.

For version changes and known limitations, see the [release notes for 7.8.2-6 (Nov 2024)]().

## Supported distributions

The following table shows supported distributions at the time of this release. You can also find this list in [Supported Kubernetes distributions]().

<span title="Check mark icon">&#x2705;</span> Supported â This distribution is supported for this version of Redis Enterprise Software for Kubernetes.

<span title="Deprecation warning" class="font-serif">:warning:</span> Deprecated â This distribution is still supported for this version of Redis Enterprise Software for Kubernetes, but support will be removed in a future release.

<span title="X icon">&#x274c;</span> End of life â Support for this distribution ended.

Any distribution not listed below is not supported for production workloads.

| **Kubernetes version** | **1.25** | **1.26** | **1.27** | **1.28** | **1.29** | **1.30** | **1.31** |
|---|---|---|---|---|---|---|---|
| **Community Kubernetes** |  |  | <span title="X icon">&#x274c;</span> | <span title="Check mark icon">&#x2705;</span> | <span title="Check mark icon">&#x2705;</span> | <span title="Check mark icon">&#x2705;</span> | <span title="Check mark icon">&#x2705;</span> |
| **Amazon EKS** |  | <span title="X icon">&#x274c;</span> | <span title="Deprecation warning" class="font-serif">:warning:</span> | <span title="Check mark icon">&#x2705;</span> | <span title="Check mark icon">&#x2705;</span> | <span title="Check mark icon">&#x2705;</span> |  |
| **Azure AKS** |  |  | <span title="Deprecation warning" class="font-serif">:warning:</span> | <span title="Check mark icon">&#x2705;</span> | <span title="Check mark icon">&#x2705;</span> | <span title="Check mark icon">&#x2705;</span> |  |
| **Google GKE** |  |  | <span title="X icon">&#x274c;</span> | <span title="Check mark icon">&#x2705;</span> | <span title="Check mark icon">&#x2705;</span> | <span title="Check mark icon">&#x2705;</span> |  |
| **Rancher RKE2** |  | <span title="Deprecation warning" class="font-serif">:warning:</span> | <span title="Check mark icon">&#x2705;</span> | <span title="Check mark icon">&#x2705;</span> |  |  |  |
| **VMware TKG 2.3** |  | <span title="Deprecation warning" class="font-serif">:warning:</span> |  |  |  |  |  |
| **VMware TKG 2.4** |  | <span title="Check mark icon">&#x2705;</span> | <span title="Check mark icon">&#x2705;</span> |  |  |  |  |
| **OpenShift** | **4.12** | **4.13** | **4.14** | **4.15** | **4.16** | **4.17** | **4.18** |
| **** | <span title="Check mark icon">&#x2705;</span> | <span title="Check mark icon">&#x2705;</span> | <span title="Check mark icon">&#x2705;</span> | <span title="Check mark icon">&#x2705;</span> | <span title="Check mark icon">&#x2705;</span> | <span title="Check mark icon">&#x2705;</span> | <span title="Check mark icon">&#x2705;</span> |
| **VMWare TKGI** | **1.16** | **1.17** | **1.18** | **1.19** |  |  |  |
| **** | <span title="X icon">&#x274c;</span> | <span title="Check mark icon">&#x2705;</span> | <span title="Check mark icon">&#x2705;</span> | <span title="Check mark icon">&#x2705;</span> |  |  |  |

## Downloads

- **Redis Enterprise**: `redislabs/redis:7.8.4-95`
- **Operator**: `redislabs/operator:7.8.4-9`
- **Services Rigger**: `redislabs/k8s-controller:7.8.4-9`
- **OLM operator bundle** : `v7.8.4-9.0`