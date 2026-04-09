---
title: CRDB instance info object
url: https://redis.io/docs/latest/operate/rs/references/rest-api/objects/crdb/instance_info/
retrieved_utc: '2026-04-09T20:46:04.897415+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/references/rest-api/objects/crdb/instance_info/index.html.md
---

# CRDB instance info object

```json metadata
{
  "title": "CRDB instance info object",
  "description": "An object that represents Active-Active instance info",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[]}

,
  "codeExamples": []
}
```
An object that represents Active-Active instance info.

| Name | Type/Value | Description |
|------|------------|-------------|
| id | integer | Unique instance ID |
| cluster | [CRDB cluster_info]() object | |
| compression | integer | Compression level when syncing from this source |
| db_config | [CRDB database_config]() object | Database configuration for this specific instance. Use `db_config` only when you need to override or add configuration values that differ from the `default_db_config` in the main [CRDB object](). |
| db_uid | string | ID of local database instance. This field is likely to be empty for instances other than the local one. |
