---
title: Replica syncer state requests
url: https://redis.io/docs/latest/operate/rs/references/rest-api/requests/bdbs/syncer_state/replica/
retrieved_utc: '2026-04-09T20:46:06.882039+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/references/rest-api/requests/bdbs/syncer_state/replica/index.html.md
---

# Replica syncer state requests

```json metadata
{
  "title": "Replica syncer state requests",
  "description": "Replica syncer state requests",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[{"children":[{"id":"permissions","title":"Permissions"},{"id":"request-get-request","title":"Request {#get-request}"},{"id":"response-get-response","title":"Response {#get-response}"}],"id":"get-replica-syncer-state-get-syncer-state","title":"Get replica syncer state {#get-syncer-state}"}]}

,
  "codeExamples": []
}
```
| Method | Path | Description |
|--------|------|-------------|
| [GET](#get-syncer-state) | `/v1/bdbs/{uid}/syncer_state/replica` | Get a CRDB replica's syncer state |

## Get replica syncer state {#get-syncer-state}

```sh
GET /v1/bdbs/{int: uid}/syncer_state/replica
```

Get a CRDB replica's syncer state as JSON.

### Permissions

| Permission name | Roles   |
|-----------------|---------|
| [view_bdb_info]() |  admin<br />cluster_member<br />cluster_viewer<br />db_member<br />db_viewer<br />user_manager |

### Request {#get-request}

#### Example HTTP request

```sh
GET /v1/bdbs/1/syncer_state/replica
```

#### Headers

| Key | Value |
|-----|-------|
| Host | The domain name or IP of the cluster. |
| Accept | application/json |

#### URL parameters

| Field | Type | Description |
|-------|------|-------------|
| uid | integer | The unique ID of the database requested. |

### Response {#get-response}

Returns a JSON object that represents the syncer state.

#### Example JSON body

```json
{
    "DB": 22,
    "RunID": 1584086516,
    // additional fields...
}
```

#### Status codes {#get-status-codes}

| Code | Description |
|------|-------------|
| [200 OK](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.2.1) | OK |
| [404 Not Found](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.4.5) | Syncer state key does not exist |
| [500 Internal Server Error](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.5.1) | Internal error |
| [503 Service Unavailable](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.5.4) | Redis connection error, service unavailable |
