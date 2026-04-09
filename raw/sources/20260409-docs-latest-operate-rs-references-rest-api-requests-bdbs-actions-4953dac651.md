---
title: Database actions requests
url: https://redis.io/docs/latest/operate/rs/references/rest-api/requests/bdbs/actions/
retrieved_utc: '2026-04-09T20:46:01.767248+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/references/rest-api/requests/bdbs/actions/index.html.md
---

# Database actions requests

```json metadata
{
  "title": "Database actions requests",
  "description": "Database action requests",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[{"id":"backup","title":"Backup"},{"id":"export","title":"Export"},{"id":"import","title":"Import"},{"id":"optimize-shards-placement","title":"Optimize shards placement"},{"id":"rebalance","title":"Rebalance"},{"id":"recover","title":"Recover"},{"id":"resume-traffic","title":"Resume traffic"},{"id":"stop-traffic","title":"Stop traffic"}]}

,
  "codeExamples": []
}
```
## Backup

| Method | Path | Description |
|--------|------|-------------|
| [PUT]() | `/v1/bdbs/{uid}/actions/backup_reset_status` | Reset database backup status |

## Export

| Method | Path | Description |
|--------|------|-------------|
| [PUT]() | `/v1/bdbs/{uid}/actions/export_reset_status` | Reset database export status |
| [POST]() | `/v1/bdbs/{uid}/actions/export` | Initiate database export |

## Import

| Method | Path | Description |
|--------|------|-------------|
| [PUT]() | `/v1/bdbs/{uid}/actions/import_reset_status` | Reset database import status |
| [POST]() | `/v1/bdbs/{uid}/actions/import` | Initiate manual dataset import |

## Optimize shards placement

| Method | Path | Description |
|--------|------|-------------|
| [GET]() | `/v1/bdbs/{uid}/actions/optimize_shards_placement` | Get optimized shards placement for a database  |

## Rebalance

| Method | Path | Description |
|--------|------|-------------|
| [PUT]() | `/v1/bdbs/{uid}/actions/rebalance` | Rebalance database shards |

## Recover

| Method | Path | Description |
|--------|------|-------------|
| [GET]() | `/v1/bdbs/{uid}/actions/recover` | Get database recovery plan  |
| [POST]() | `/v1/bdbs/{uid}/actions/recover` | Recover database  |

## Resume traffic
| Method | Path | Description |
|--------|------|-------------|
| [POST]() | `/v1/bdbs/{uid}/actions/resume_traffic` | Resume database traffic |

## Stop traffic
| Method | Path | Description |
|--------|------|-------------|
| [POST]() | `/v1/bdbs/{uid}/actions/stop_traffic` | Stop database traffic |
