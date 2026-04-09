---
title: Role object
url: https://redis.io/docs/latest/operate/rs/references/rest-api/objects/role/
retrieved_utc: '2026-04-09T20:46:07.084473+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/references/rest-api/objects/role/index.html.md
---

# Role object

```json metadata
{
  "title": "Role object",
  "description": "An object that represents a role",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[]}

,
  "codeExamples": []
}
```
An API object that represents a role.

| Name | Type/Value | Description |
|------|------------|-------------|
| uid | integer | Role's unique ID |
| account_id | integer | SM account ID |
| action_uid | string | Action UID. If it exists, progress can be tracked by the GET /actions/{uid} API (read-only) |
| management | 'admin'<br />'db_member'<br />'db_viewer'<br />'cluster_member'<br />'cluster_viewer'<br />'user_manager'<br />'none' | [Management role]() |
| name | string | Role's name |
