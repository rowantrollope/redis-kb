---
title: Database debug info requests
url: https://redis.io/docs/latest/operate/rs/references/rest-api/requests/bdbs/debuginfo/
retrieved_utc: '2026-04-09T20:46:03.662135+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/references/rest-api/requests/bdbs/debuginfo/index.html.md
---

# Database debug info requests

```json metadata
{
  "title": "Database debug info requests",
  "description": "Documents the Redis Software REST API /bdbs/debuginfo requests.",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[{"children":[{"id":"request-get-all-request","title":"Request {#get-all-request}"},{"id":"response-get-all-response","title":"Response {#get-all-response}"},{"id":"status-codes-get-all-status-codes","title":"Status codes {#get-all-status-codes}"}],"id":"get-debug-info-from-all-databases-get-all-debuginfo-bdb","title":"Get debug info from all databases {#get-all-debuginfo-bdb}"},{"children":[{"id":"request-get-request","title":"Request {#get-request}"},{"id":"response-get-response","title":"Response {#get-response}"},{"id":"status-codes-get-status-codes","title":"Status codes {#get-status-codes}"}],"id":"get-database-debug-info-get-debuginfo-bdb","title":"Get database debug info {#get-debuginfo-bdb}"}]}

,
  "codeExamples": []
}
```
| Method | Path | Description |
|--------|------|-------------|
| [GET](#get-all-debuginfo-bdb) | `/v1/bdbs/debuginfo` | Get debug info from all databases |
| [GET](#get-debuginfo-bdb) | `/v1/bdbs/{bdb_uid}/debuginfo` | Get debug info from a specific database |

## Get debug info from all databases {#get-all-debuginfo-bdb}

	GET /v1/bdbs/debuginfo

Downloads a tar file that contains debug info from all databases.

#### Required permissions

| Permission name |
|-----------------|
| [view_debugging_info]() |

### Request {#get-all-request} 

#### Example HTTP request

	GET /v1/bdbs/debuginfo

### Response {#get-all-response} 

Downloads the debug info in a tar file called `filename.tar.gz`. Extract the files from the tar file to access the debug info.

#### Response headers

| Key | Value | Description |
|-----|-------|-------------|
| Content-Type | application/x-gzip | Media type of request/response body |
| Content-Length | 653350 | Length of the response body in octets |
| Content-Disposition | attachment; filename=debuginfo.tar.gz | Display response in browser 

### Status codes {#get-all-status-codes} 

| Code | Description |
|------|-------------|
| [200 OK](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.2.1) | Success. |
| [500 Internal Server Error](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.5.1) | Failed to get debug info. |


## Get database debug info {#get-debuginfo-bdb}

	GET /v1/bdbs/{int: bdb_uid}/debuginfo

Downloads a tar file that contains debug info from the database specified by `bdb_uid`.

#### Required permissions

| Permission name |
|-----------------|
| [view_debugging_info]() |

### Request {#get-request} 

#### Example HTTP request

	GET /v1/bdbs/1/debuginfo

### Response {#get-response} 

Downloads the debug info in a tar file called `filename.tar.gz`. Extract the files from the tar file to access the debug info.

#### Response headers

| Key | Value | Description |
|-----|-------|-------------|
| Content-Type | application/x-gzip | Media type of request/response body |
| Content-Length | 653350 | Length of the response body in octets |
| Content-Disposition | attachment; filename=debuginfo.tar.gz | Display response in browser 

### Status codes {#get-status-codes} 

| Code | Description |
|------|-------------|
| [200 OK](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.2.1) | Success. |
| [500 Internal Server Error](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.5.1) | Failed to get debug info. |
