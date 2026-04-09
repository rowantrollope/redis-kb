---
title: BDB usage report job settings object
url: https://redis.io/docs/latest/operate/rs/references/rest-api/objects/job_scheduler/bdb_usage_report_job_settings/
retrieved_utc: '2026-04-09T20:46:02.070295+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/references/rest-api/objects/job_scheduler/bdb_usage_report_job_settings/index.html.md
---

# BDB usage report job settings object

```json metadata
{
  "title": "BDB usage report job settings object",
  "description": "Documents the bdb_usage_report_job_settings object used with Redis Software REST API calls.",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[]}

,
  "codeExamples": []
}
```
| Name | Type/Value | Description |
|------|------------|-------------|
| cron_expression | string | [CRON expression](https://en.wikipedia.org/wiki/Cron#CRON_expression) that defines the database usage report scheduleÂ |
| enabled | boolean (default: true) | Indicates whether this job is enabled |
| file_retention_days | integer, 1-1000 (default: 365) | Number of days after a file is closed before it is deleted |
