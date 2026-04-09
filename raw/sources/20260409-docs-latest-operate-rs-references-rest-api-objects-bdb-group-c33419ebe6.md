---
title: BDB group object
url: https://redis.io/docs/latest/operate/rs/references/rest-api/objects/bdb_group/
retrieved_utc: '2026-04-09T20:46:02.086086+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/references/rest-api/objects/bdb_group/index.html.md
---

# BDB group object

```json metadata
{
  "title": "BDB group object",
  "description": "An object that represents a group of databases with a shared memory pool",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[]}

,
  "codeExamples": []
}
```
An API object that represents a group of databases that share a memory pool.

| Name | Type/Value | Description |
|------|------------|-------------|
| uid          | integer          | Cluster unique ID of the database group |
| members      | array of strings | A list of UIDs of member databases (read-only) |
| memory_size  | integer          | The common memory pool size limit for all databases in the group, expressed in bytes |
