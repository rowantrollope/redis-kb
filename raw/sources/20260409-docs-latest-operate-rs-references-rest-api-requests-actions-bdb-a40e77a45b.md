---
title: Database actions requests
url: https://redis.io/docs/latest/operate/rs/references/rest-api/requests/actions/bdb/
retrieved_utc: '2026-04-09T20:46:02.063607+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/references/rest-api/requests/actions/bdb/index.html.md
---

# Database actions requests

```json metadata
{
  "title": "Database actions requests",
  "description": "Database actions requests",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[{"children":[{"id":"request-get-request","title":"Request {#get-request}"},{"id":"response-get-response","title":"Response {#get-response}"},{"id":"status-codes-get-status-codes","title":"Status codes {#get-status-codes}"}],"id":"get-database-actions-get-db-actions","title":"Get database actions {#get-db-actions}"}]}

,
  "codeExamples": []
}
```
| Method | Path | Description |
|--------|------|-------------|
| [GET](#get-db-actions) | `/v1/actions/bdb/{bdb_uid}` | Get the status of a specific database's actions |

## Get database actions {#get-db-actions}

```
GET /v1/actions/bdb/{bdb_uid}
```

Get the status of all currently executing, pending, or completed state-machine-related actions for a specific database. This API tracks short-lived API requests that return `action_uid`.

#### Required permissions

| Permission name |
|-----------------|
| [view_status_of_cluster_action]() |

### Request {#get-request}

#### Example HTTP request

```
GET /v1/actions/bdb/1
```

#### URL parameters

| Field | Type | Description |
|-------|------|-------------|
| bdb_uid | string | Unique database ID |

### Response {#get-response}

Returns an array of JSON objects with attributes from [actions]() and [state machines]().

Each action contains the following attributes: `name`, `action_uid`, `status`, and `progress`.

#### Example JSON body

```json
[
    {
        "action_uid": "8afc7f70-f3ae-4244-a5e9-5133e78b2e97",
        "heartbeat": 1703067908,
        "name": "SMUpdateBDB",
        "object_name": "bdb:1",
        "pending_ops": {},
        "progress": 50.0,
        "state": "proxy_policy",
        "status": "active"
    }
]
```

### Status codes {#get-status-codes}

| Code | Description |
|------|-------------|
| [200 OK](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.2.1) | No error, response provides info about state-machine actions |
| [404 Not Found](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.4.5) | bdb not found |
