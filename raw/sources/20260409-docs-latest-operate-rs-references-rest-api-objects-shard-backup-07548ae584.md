---
title: Backup object
url: https://redis.io/docs/latest/operate/rs/references/rest-api/objects/shard/backup/
retrieved_utc: '2026-04-09T20:46:01.997949+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/references/rest-api/objects/shard/backup/index.html.md
---

# Backup object

```json metadata
{
  "title": "Backup object",
  "description": "Documents the backup object used with Redis Software REST API calls.",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[]}

,
  "codeExamples": []
}
```
| Name | Type/Value | Description |
|------|------------|-------------|
| progress  | number, (range: 0-100) | Shard backup progress (percentage) |
| status    | 'exporting'<br />'succeeded'<br />'failed' | Status of scheduled periodic backup process |
