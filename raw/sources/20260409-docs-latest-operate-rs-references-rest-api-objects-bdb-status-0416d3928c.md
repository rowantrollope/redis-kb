---
title: BDB status field
url: https://redis.io/docs/latest/operate/rs/references/rest-api/objects/bdb/status/
retrieved_utc: '2026-04-09T20:46:07.772047+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/references/rest-api/objects/bdb/status/index.html.md
---

# BDB status field

```json metadata
{
  "title": "BDB status field",
  "description": "Documents the bdb status field used with Redis Software REST API calls.",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[]}

,
  "codeExamples": []
}
```
The BDB status field is a read-only field that represents the database status.

Possible status values:

| Status | Description | Possible next status |
|--------|-------------|----------------------|
| 'active' | Database is active and no special action is in progress | 'active-change-pending' <br />'import-pending' <br />'delete-pending' |
| 'active-change-pending' | |'active' |
| 'creation-failed' | Initial database creation failed | |
| 'delete-pending' | Database deletion is in progress | |
| 'import-pending' | Dataset import is in progress | 'active' |
| 'pending' | Temporary status during database creation | 'active'<br />'creation-failed' |
| 'recovery' | Not currently relevant (intended for future use) | |


