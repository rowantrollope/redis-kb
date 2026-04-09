---
title: Node debug info requests
url: https://redis.io/docs/latest/operate/rs/references/rest-api/requests/nodes/debuginfo/
retrieved_utc: '2026-04-09T20:46:03.672063+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/references/rest-api/requests/nodes/debuginfo/index.html.md
---

# Node debug info requests

```json metadata
{
  "title": "Node debug info requests",
  "description": "Documents the Redis Software REST API /nodes/debuginfo requests.",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[{"children":[{"id":"request-get-all-request","title":"Request {#get-all-request}"},{"id":"response-get-all-response","title":"Response {#get-all-response}"},{"id":"status-codes-get-all-status-codes","title":"Status codes {#get-all-status-codes}"}],"id":"get-debug-info-from-all-nodes-get-debuginfo-all-nodes","title":"Get debug info from all nodes {#get-debuginfo-all-nodes}"},{"children":[{"id":"request-get-request","title":"Request {#get-request}"},{"id":"response-get-response","title":"Response {#get-response}"},{"id":"status-codes-get-status-codes","title":"Status codes {#get-status-codes}"}],"id":"get-node-debug-info-get-debuginfo-node","title":"Get node debug info {#get-debuginfo-node}"}]}

,
  "codeExamples": []
}
```
| Method | Path | Description |
|--------|------|-------------|
| [GET](#get-debuginfo-all-nodes) | `/v1/nodes/debuginfo` | Get debug info from all nodes |
| [GET](#get-debuginfo-node) | `/v1/nodes/{node_uid}/debuginfo` | Get debug info from a specific node |

## Get debug info from all nodes {#get-debuginfo-all-nodes}

	GET /v1/nodes/debuginfo

Downloads a tar file that contains debug info from all nodes.

#### Required permissions

| Permission name |
|-----------------|
| [view_debugging_info]() |

### Request {#get-all-request} 

#### Example HTTP request

	GET /v1/nodes/debuginfo

### Response {#get-all-response} 

Downloads the debug info in a tar file called `filename.tar.gz`. Extract the files from the tar file to access the debug info.

#### Response headers

| Key | Value | Description |
|-----|-------|-------------|
| Content-Type | application/x-gzip | Media type of request/response body |
| Content-Length | 653350 | Length of the response body in octets |
| Content-Disposition | attachment; filename=debuginfo.tar.gz | Display response in browser or download as attachment |

### Status codes {#get-all-status-codes} 

| Code | Description |
|------|-------------|
| [200 OK](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.2.1) | Success. |
| [500 Internal Server Error](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.5.1) | Failed to get debug info. |

## Get node debug info {#get-debuginfo-node}

	GET /v1/nodes/{int: node_uid}/debuginfo

Downloads a tar file that contains debug info from a specific node.

#### Required permissions

| Permission name |
|-----------------|
| [view_debugging_info]() |

### Request {#get-request} 

#### Example HTTP request

	GET /v1/nodes/1/debuginfo

### Response {#get-response} 

Downloads the debug info in a tar file called `filename.tar.gz`. Extract the files from the tar file to access the debug info.

#### Response headers

| Key | Value | Description |
|-----|-------|-------------|
| Content-Type | application/x-gzip | Media type of request/response body |
| Content-Length | 653350 | Length of the response body in octets |
| Content-Disposition | attachment; filename=debuginfo.tar.gz | Display response in browser or download as attachment |

### Status codes {#get-status-codes} 

| Code | Description |
|------|-------------|
| [200 OK](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.2.1) | Success. |
| [500 Internal Server Error](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.5.1) | Failed to get debug info. |
