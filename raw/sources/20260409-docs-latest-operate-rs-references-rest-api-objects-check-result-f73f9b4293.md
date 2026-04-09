---
title: Check result object
url: https://redis.io/docs/latest/operate/rs/references/rest-api/objects/check_result/
retrieved_utc: '2026-04-09T20:46:02.520482+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/references/rest-api/objects/check_result/index.html.md
---

# Check result object

```json metadata
{
  "title": "Check result object",
  "description": "An object that contains the results of a cluster check",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[]}

,
  "codeExamples": []
}
```
Cluster check result

| Name | Type/Value | Description |
|------|------------|-------------|
| cluster_test_result | boolean | Indication if any of the tests failed |
| nodes | 
[{
  "node_uid": integer,
  "result": boolean,
  "error": string
}, ...]
 | Nodes results |
