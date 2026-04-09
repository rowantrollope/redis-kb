---
title: CRDB flush requests
url: https://redis.io/docs/latest/operate/rs/references/rest-api/requests/crdbs/flush/
retrieved_utc: '2026-04-09T20:46:04.015241+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/references/rest-api/requests/crdbs/flush/index.html.md
---

# CRDB flush requests

```json metadata
{
  "title": "CRDB flush requests",
  "description": "Flush Active-Active database requests",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[{"children":[{"id":"request-put-request","title":"Request {#put-request}"},{"id":"response-put-response","title":"Response {#put-response}"}],"id":"flush-an-active-active-database-put-crdbs-flush","title":"Flush an Active-Active database {#put-crdbs-flush}"}]}

,
  "codeExamples": []
}
```
| Method | Path | Description |
|--------|------|-------------|
| [PUT](#put-crdbs-flush) | `/v1/crdbs/{crdb_guid}/flush` | Flush an Active-Active database |

## Flush an Active-Active database {#put-crdbs-flush}

```sh
PUT /v1/crdbs/{crdb_guid}/flush
```

Flush an Active-Active database.

### Request {#put-request}

#### Example HTTP request

```sh
PUT /v1/crdbs/552bbccb-99f3-4142-bd17-93d245f0bc79/flush
```

#### Headers

| Key | Value | Description |
|-----|-------|-------------|
| X-Task-ID | string | Specified task ID |
| X-Result-TTL | integer | Time (in seconds) to keep task result |

#### URL parameters

| Field | Type | Description |
|-------|------|-------------|
| crdb_guid | string | Globally unique Active-Active database ID (GUID) |

#### Query parameters

| Field | Type | Description |
|-------|------|-------------|
| async_flush | boolean | Perform asynchronous flush operation (optional) |

### Response {#put-response}

Returns a [CRDB task object]().

#### Status codes {#put-status-codes}

| Code | Description |
|------|-------------|
| [200 OK](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.2.1) | Action was successful. |
| [400 Bad Request](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.4.1) | The request is invalid or malformed. |
| [401 Unauthorized](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.4.2) | Unauthorized request. Invalid credentials |
| [404 Not Found](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.4.5) | Configuration or Active-Active database not found. |
| [406 Not Acceptable](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.4.7) | Configuration cannot be accepted, typically because it was already committed. |
