---
title: Backup job settings object
url: https://redis.io/docs/latest/operate/rs/references/rest-api/objects/job_scheduler/backup_job_settings/
retrieved_utc: '2026-04-09T20:46:02.018470+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/references/rest-api/objects/job_scheduler/backup_job_settings/index.html.md
---

# Backup job settings object

```json metadata
{
  "title": "Backup job settings object",
  "description": "Documents the backup_job_settings object used with Redis Software REST API calls.",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[]}

,
  "codeExamples": []
}
```
| Name | Type/Value | Description |
|------|------------|-------------|
| cron_expression | string |Â [CRON expression](https://en.wikipedia.org/wiki/Cron#CRON_expression) that defines the backup schedule |
| enabled | boolean (default: true) | Indicates whether this job is enabled |
