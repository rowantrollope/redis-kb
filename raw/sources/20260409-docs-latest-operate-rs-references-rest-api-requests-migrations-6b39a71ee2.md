---
title: Migrations requests
url: https://redis.io/docs/latest/operate/rs/references/rest-api/requests/migrations/
retrieved_utc: '2026-04-09T20:46:05.701505+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/references/rest-api/requests/migrations/index.html.md
---

# Migrations requests

```json metadata
{
  "title": "Migrations requests",
  "description": "REST API request to get the migration status of a database in the cluster when using Replica Of.",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[{"children":[{"id":"request-get-request","title":"Request {#get-request}"},{"id":"response-get-response","title":"Response {#get-response}"}],"id":"get-migration-status-get-migrations","title":"Get migration status {#get-migrations}"}]}

,
  "codeExamples": []
}
```
| Method | Path | Description |
|--------|------|-------------|
| [GET](#get-migrations) | `/v1/migrations/<uid>` | Get database migration status |

## Get migration status {#get-migrations}

```sh
GET /v1/migrations/<uid>
```

Gets the migration status of a database in the cluster when using Replica Of.

#### Required permissions

| Permission name | Roles |
|-----------------|-------|
| [view_bdb_info]() | admin<br />cluster_member<br />cluster_viewer<br />db_member<br />db_viewer<br />user_manager |

### Request {#get-request}

#### Example HTTP request

```sh
GET /v1/migrations/1
```

#### Headers

| Key | Value | Description |
|-----|-------|-------------|
| Host | cnm.cluster.fqdn | Domain name |
| Accept | application/json | Accepted media type |

#### URL parameters

| Field | Type | Description |
|-------|------|-------------|
| uid | integer | The database's unique ID |

### Response {#get-response}

Returns a JSON array with all data required by the migration orchestrator.

#### Example response body

```json
{
  "migration": {
    "status": "string",
    "lag": 0,
    "rdb_size": 0,
    "rdb_transferred": 0,
    "run_id": "string",
    "flush_counter": 0,
    "source_shards": [
      {
        "replication_id": "string",
        "replication_offset": 0
      }
    ],
    "error": {
      "error_code": "string",
      "message": "string",
      "timestamp": "2019-08-24T14:15:22Z"
    }
  }
}
```

#### Status codes {#get-status-codes}

| Code | Description |
|------|-------------|
| [200 OK](https://www.rfc-editor.org/rfc/rfc9110.html#name-200-ok) | No error |
| [404 Not Found](https://www.rfc-editor.org/rfc/rfc9110.html#name-404-not-found) | Database does not exist |
