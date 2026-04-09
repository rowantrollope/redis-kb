---
title: BDB replica sources status field
url: https://redis.io/docs/latest/operate/rs/references/rest-api/objects/bdb/replica_sources_status/
retrieved_utc: '2026-04-09T20:46:06.916400+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/references/rest-api/objects/bdb/replica_sources_status/index.html.md
---

# BDB replica sources status field

```json metadata
{
  "title": "BDB replica sources status field",
  "description": "Documents the bdb replica_sources status field used with Redis Software REST API calls.",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[]}

,
  "codeExamples": []
}
```
The `replica_sources` status field relates to the [Replica Of]() feature, which enables the creation of a Redis database (single- or multi-shard) that synchronizes data from another Redis database (single- or multi-shard).

The status field represents the Replica Of sync status for a specific sync source.

Possible status values:

| Status | Description | Possible next status |
|--------|-------------|----------------------|
| 'out-of-sync' | Sync process is disconnected from source and trying to reconnect | 'syncing' |
| 'syncing' | Sync process is in progress | 'in-sync' <br />'out-of-sync' |
| 'in-sync' | Sync process finished successfully, and new commands are syncing on a regular basis | 'syncing' <br />'out-of-sync'


