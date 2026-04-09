---
title: CRDB updates requests
url: https://redis.io/docs/latest/operate/rs/references/rest-api/requests/crdbs/updates/
retrieved_utc: '2026-04-09T20:45:36.244963+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/references/rest-api/requests/crdbs/updates/index.html.md
---

# CRDB updates requests

```json metadata
{
  "title": "CRDB updates requests",
  "description": "Update Active-Active configuration requests",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[{"children":[{"id":"request-post-request","title":"Request {#post-request}"},{"id":"response-post-response","title":"Response {#post-response}"},{"id":"status-codes-post-status-codes","title":"Status codes {#post-status-codes}"}],"id":"modify-active-active-configuration-post-crdbs-updates","title":"Modify Active-Active configuration {#post-crdbs-updates}"}]}

,
  "codeExamples": []
}
```
| Method | Path | Description |
|--------|------|-------------|
| [POST](#post-crdbs-updates) | `/v1/crdbs/{crdb_guid}/updates` | Modify Active-Active confgurarion |

## Modify Active-Active configuration {#post-crdbs-updates}

	POST /v1/crdbs/{crdb_guid}/updates

Modify Active-Active configuration.


This is a very powerful API request and can cause damage if used incorrectly.


In order to add or remove instances, you must use this API. For simple configuration updates, it is recommended to use PATCH on /crdbs/{crdb_guid} instead.

Updating default_db_config affects both existing and new instances that may be added.

When you update db_config, it changes the configuration of the database that you specify. This field overrides corresponding fields (if any) in default_db_config.

### Request {#post-request} 

#### Example HTTP request

    POST /v1/crdbs/1/updates

#### Request headers

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
| dry_run | boolean | Validate the request without applying changes (optional) |

#### Request body

Include a [CRDB modify_request object]() with updated fields in the request body.

### Response {#post-response} 

Returns a [CRDB task object]().

### Status codes {#post-status-codes} 

| Code | Description |
|------|-------------|
| [200 OK](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.2.1) | The request has been accepted. |
| [400 Bad Request](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.4.1) | The posted Active-Active database contains invalid parameters. |
| [401 Unauthorized](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.4.2) | Unauthorized request. Invalid credentials |
| [404 Not Found](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.4.5) | Configuration, instance or Active-Active database not found. |
| [406&nbsp;Not&nbsp;Acceptable](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.4.7) | The posted Active-Active database cannot be accepted. |
