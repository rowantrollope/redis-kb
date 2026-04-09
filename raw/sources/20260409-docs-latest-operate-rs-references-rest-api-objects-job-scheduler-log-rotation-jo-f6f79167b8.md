---
title: Log rotation job settings object
url: https://redis.io/docs/latest/operate/rs/references/rest-api/objects/job_scheduler/log_rotation_job_settings/
retrieved_utc: '2026-04-09T20:46:05.461948+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/references/rest-api/objects/job_scheduler/log_rotation_job_settings/index.html.md
---

# Log rotation job settings object

```json metadata
{
  "title": "Log rotation job settings object",
  "description": "Documents the log_rotation_job_settings object used with Redis Software REST API calls.",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[]}

,
  "codeExamples": []
}
```
| Name | Type/Value | Description |
|------|------------|-------------|
| cron_expression | string | [CRON expression](https://en.wikipedia.org/wiki/Cron#CRON_expression) that defines the log rotation scheduleÂ |
| enabled | boolean (default: true) | Indicates whether this job is enabled |
