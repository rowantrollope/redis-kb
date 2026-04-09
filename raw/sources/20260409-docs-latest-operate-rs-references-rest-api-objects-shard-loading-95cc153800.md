---
title: Loading object
url: https://redis.io/docs/latest/operate/rs/references/rest-api/objects/shard/loading/
retrieved_utc: '2026-04-09T20:46:05.472378+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/references/rest-api/objects/shard/loading/index.html.md
---

# Loading object

```json metadata
{
  "title": "Loading object",
  "description": "Documents the loading object used with Redis Software REST API calls.",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[]}

,
  "codeExamples": []
}
```
| Name | Type/Value | Description |
|------|------------|-------------|
| progress  | number, (range: 0-100) | Percentage of bytes already loaded |
| status    | 'in_progress'<br />'idle' | Status of the load of a dump file (read-only) |
