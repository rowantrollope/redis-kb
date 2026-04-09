---
title: Logrotate settings object
url: https://redis.io/docs/latest/operate/rs/references/rest-api/objects/cluster/logrotate_settings/
retrieved_utc: '2026-04-09T20:46:05.482020+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/references/rest-api/objects/cluster/logrotate_settings/index.html.md
---

# Logrotate settings object

```json metadata
{
  "title": "Logrotate settings object",
  "description": "Documents the logrotate_settings object used with Redis Software REST API calls.",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[]}

,
  "codeExamples": []
}
```
| Name | Type/Value | Description |
|------|------------|-------------|
| maxage | integer (default: 7) | Remove rotated logs older than the specified number of days |
| maxsize | string (default: 200M) | The log will rotate after it reaches the specified size |
| rotate | integer (default: 10) | Determines how many times the log will be rotated. If set to 0, old versions are removed rather than rotated. |