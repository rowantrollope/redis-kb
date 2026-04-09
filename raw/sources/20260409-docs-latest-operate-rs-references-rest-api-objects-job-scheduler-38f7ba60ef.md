---
title: Job scheduler object
url: https://redis.io/docs/latest/operate/rs/references/rest-api/objects/job_scheduler/
retrieved_utc: '2026-04-09T20:46:04.912265+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/references/rest-api/objects/job_scheduler/index.html.md
---

# Job scheduler object

```json metadata
{
  "title": "Job scheduler object",
  "description": "An object for job scheduler settings",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[]}

,
  "codeExamples": []
}
```
An API object that represents the job scheduler settings in the cluster.

| Name | Type/Value | Description |
|------|------------|-------------|
| backup_job_settings | [backup_job_settings]() object | Backup job settings |
| <span class="break-all">bdb_usage_report_job_settings</span> | <span class="break-all">[bdb_usage_report_job_settings]()</span> object | Job settings for database usage reports |
| <span class="break-all">cert_rotation_job_settings</span> | <span class="break-all">[cert_rotation_job_settings]()</span> object | Job settings for internal certificate rotation |
| <span class="break-all">log_rotation_job_settings</span> | <span class="break-all">[log_rotation_job_settings]()</span> object | Log rotation job settings |
| <span class="break-all">node_checks_job_settings</span> | <span class="break-all">[node_checks_job_settings]()</span> object | Node checks job settings |
| <span class="break-all">redis_cleanup_job_settings</span> | <span class="break-all">[redis_cleanup_job_settings]()</span> object | Redis cleanup job settings (deprecated as of Redis Software v6.4.2, replaced with persistence_cleanup_scan_interval) |
| rotate_ccs_job_settings | [rotate_ccs_job_settings]() object | Rotate CCS job settings |
