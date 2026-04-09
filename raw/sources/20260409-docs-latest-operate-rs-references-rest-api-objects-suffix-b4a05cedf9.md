---
title: Suffix object
url: https://redis.io/docs/latest/operate/rs/references/rest-api/objects/suffix/
retrieved_utc: '2026-04-09T20:46:07.868816+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/references/rest-api/objects/suffix/index.html.md
---

# Suffix object

```json metadata
{
  "title": "Suffix object",
  "description": "An object that represents a DNS suffix",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[]}

,
  "codeExamples": []
}
```
An API object that represents a DNS suffix in the cluster.

| Name | Type/Value | Description |
|------|------------|-------------|
| default | boolean | Suffix is the default suffix for the cluster (read-only) |
| internal | boolean | Does the suffix point to internal IP addresses (read-only) |
| mdns | boolean | Support for multicast DNS (read-only) |
| name | string | Unique suffix name that represents its zone (read-only) |
| slaves | array of strings | Frontend DNS servers to be updated by this suffix |
| use_aaaa_ns | boolean | Suffix uses AAAA NS entries (read-only) |