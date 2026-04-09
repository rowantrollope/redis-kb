---
title: Redis ACL object
url: https://redis.io/docs/latest/operate/rs/references/rest-api/objects/redis_acl/
retrieved_utc: '2026-04-09T20:46:06.729889+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/references/rest-api/objects/redis_acl/index.html.md
---

# Redis ACL object

```json metadata
{
  "title": "Redis ACL object",
  "description": "An object that represents a Redis access control list (ACL)",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[]}

,
  "codeExamples": []
}
```
An API object that represents a Redis [access control list (ACL)]()

| Name | Type/Value | Description |
|------|------------|-------------|
| uid | integer | Object's unique ID |
| account_id | integer | SM account ID |
| acl | string | Redis ACL's string |
| action_uid | string | Action UID. If it exists, progress can be tracked by the `GET`&nbsp;`/actions/{uid}` API (read-only) |
| name | string | Redis ACL's name |
| min_version | string | Minimum database version that supports this ACL. Read only |
| max_version | string | Maximum database version that supports this ACL. Read only |

