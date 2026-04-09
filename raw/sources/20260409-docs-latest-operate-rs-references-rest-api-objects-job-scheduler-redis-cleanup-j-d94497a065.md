---
title: Redis cleanup job settings object
url: https://redis.io/docs/latest/operate/rs/references/rest-api/objects/job_scheduler/redis_cleanup_job_settings/
retrieved_utc: '2026-04-09T20:46:06.670294+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/references/rest-api/objects/job_scheduler/redis_cleanup_job_settings/index.html.md
---

# Redis cleanup job settings object

```json metadata
{
  "title": "Redis cleanup job settings object",
  "description": "Documents the redis_cleanup_job_settings object used with Redis Software REST API calls.",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[]}

,
  "codeExamples": []
}
```
Deprecated and replaced with `persistence_cleanup_scan_interval`.

| Name | Type/Value | Description |
|------|------------|-------------|
| cron_expression | string | [CRON expression](https://en.wikipedia.org/wiki/Cron#CRON_expression) that defines the Redis cleanup scheduleÂ |
