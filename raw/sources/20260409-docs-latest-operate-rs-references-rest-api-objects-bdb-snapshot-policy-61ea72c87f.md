---
title: Snapshot policy object
url: https://redis.io/docs/latest/operate/rs/references/rest-api/objects/bdb/snapshot_policy/
retrieved_utc: '2026-04-09T20:46:07.587092+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/references/rest-api/objects/bdb/snapshot_policy/index.html.md
---

# Snapshot policy object

```json metadata
{
  "title": "Snapshot policy object",
  "description": "Documents the snapshot_policy object used with Redis Software REST API calls.",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[]}

,
  "codeExamples": []
}
```
| Name | Type/Value | Description |
|------|------------|-------------|
| secs   | integer | Interval in seconds between snapshots |
| writes | integer | Number of write changes required to trigger a snapshot |
