---
title: CRDB purge requests
url: https://redis.io/docs/latest/operate/rs/references/rest-api/requests/crdbs/purge/
retrieved_utc: '2026-04-09T20:46:06.456227+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/references/rest-api/requests/crdbs/purge/index.html.md
---

# CRDB purge requests

```json metadata
{
  "title": "CRDB purge requests",
  "description": "Purge removed Active-Active database requests",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[{"children":[{"id":"request-put-request","title":"Request {#put-request}"},{"id":"response-put-response","title":"Response {#put-response}"},{"id":"status-codes-put-status-codes","title":"Status codes {#put-status-codes}"}],"id":"purge-data-from-removed-instance-put-crdbs-purge","title":"Purge data from removed instance {#put-crdbs-purge}"}]}

,
  "codeExamples": []
}
```
| Method | Path | Description |
|--------|------|-------------|
| [PUT](#put-crdbs-purge) | `/v1/crdbs/{crdb_guid}/purge` | Purge data from an instance that was forcibly removed from the Active-Active database |

## Purge data from removed instance {#put-crdbs-purge}

	PUT /v1/crdbs/{crdb_guid}/purge

Purge the data from an instance that was removed from the
Active-Active database by force.

When you force the removal of an instance from an Active-Active
database, the removed instance keeps the data and configuration
according to the last successful synchronization.

To delete the data and configuration from the forcefully removed
instance you must use this API (Must be executed locally on the
removed instance).

### Request {#put-request} 

#### Example HTTP request

    PUT /v1/crdbs/1/purge

#### URL parameters

| Field | Type | Description |
|-------|------|-------------|
| crdb_guid | string | Globally unique Active-Active database ID (GUID) |

#### Request body

| Field | Type | Description |
|-------|------|-------------|
| instances | array of integers | Array of unique instance IDs |

### Response {#put-response} 

Returns a [CRDB task object]().

### Status codes {#put-status-codes} 

| Code | Description |
|------|-------------|
| [200 OK](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.2.1) | Action was successful. |
| [400 Bad Request](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.4.1) | The request is invalid or malformed. |
| [401 Unauthorized](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.4.2) | Unauthorized request. Invalid credentials |
| [404 Not Found](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.4.5) | Configuration, instance, or Active-Active database not found. |
