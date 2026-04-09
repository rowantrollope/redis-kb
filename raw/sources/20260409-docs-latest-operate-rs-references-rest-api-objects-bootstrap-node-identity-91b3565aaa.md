---
title: Node identity object
url: https://redis.io/docs/latest/operate/rs/references/rest-api/objects/bootstrap/node_identity/
retrieved_utc: '2026-04-09T20:46:05.899799+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/references/rest-api/objects/bootstrap/node_identity/index.html.md
---

# Node identity object

```json metadata
{
  "title": "Node identity object",
  "description": "Documents the node_identity object used with Redis Software REST API calls.",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[]}

,
  "codeExamples": []
}
```
| Name | Type/Value | Description |
|------|------------|-------------|
| bigstore_driver | 'rocksdb' | Bigstore driver name or none (deprecated, use the [cluster object]()'s `bigstore_driver` instead) |
| bigstore_enabled | boolean (default: false) | If `true`, then flash storage is enabled on this node for [Redis Flex and Auto Tiering]() databases. Configurable during [bootstrapping](). After bootstrapping, it is read-only. |
| identity | [identity]() object | Node identity |
| limits | [limits]() object | Node limits |
| paths | [paths]() object | Storage paths object |
