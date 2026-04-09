---
title: Current node database debug info requests
url: https://redis.io/docs/latest/operate/rs/references/rest-api/requests/debuginfo/node/bdb/
retrieved_utc: '2026-04-09T20:46:02.052462+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/references/rest-api/requests/debuginfo/node/bdb/index.html.md
---

# Current node database debug info requests

```json metadata
{
  "title": "Current node database debug info requests",
  "description": "Documents the Redis Software REST API debuginfo/node/bdb requests.",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[{"children":[{"id":"request-get-request","title":"Request {#get-request}"},{"id":"response-get-response","title":"Response {#get-response}"},{"id":"status-codes-get-status-codes","title":"Status codes {#get-status-codes}"}],"id":"get-database-debug-info-for-current-node-get-debuginfo-node-bdb","title":"Get database debug info for current node {#get-debuginfo-node-bdb}"}]}

,
  "codeExamples": []
}
```

This REST API path is deprecated as of Redis Software version 7.4.2. Use the new path [`/v1/bdbs/debuginfo`]() instead.


| Method | Path | Description |
|--------|------|-------------|
| [GET](#get-debuginfo-node-bdb) | `/v1/debuginfo/node/bdb/{bdb_uid}` | Get debug info for the current node regarding a specific database |

## Get database debug info for current node {#get-debuginfo-node-bdb}

	GET /v1/debuginfo/node/bdb/{int: bdb_uid}

Downloads a tar file that contains debug info for the specified database (`bdb_uid`) from the current node.

#### Required permissions

| Permission name |
|-----------------|
| [view_debugging_info]() |

### Request {#get-request} 

#### Example HTTP request

	GET /v1/debuginfo/node/bdb/1 

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
