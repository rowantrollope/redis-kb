---
title: Sync object
url: https://redis.io/docs/latest/operate/rs/references/rest-api/objects/shard/sync/
retrieved_utc: '2026-04-09T20:45:33.981951+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/references/rest-api/objects/shard/sync/index.html.md
---

# Sync object

```json metadata
{
  "title": "Sync object",
  "description": "Documents the sync object used with Redis Software REST API calls.",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[]}

,
  "codeExamples": []
}
```
| Name | Type/Value | Description |
|------|------------|-------------|
| progress  | integer        | Number of bytes remaining in current sync |
| status    | 'in_progress'<br />'idle'<br />'link_down' | Indication of the shard's current sync status |
