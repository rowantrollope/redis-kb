---
title: Cluster debug info requests
url: https://redis.io/docs/latest/operate/rs/references/rest-api/requests/cluster/debuginfo/
retrieved_utc: '2026-04-09T20:46:03.651014+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/references/rest-api/requests/cluster/debuginfo/index.html.md
---

# Cluster debug info requests

```json metadata
{
  "title": "Cluster debug info requests",
  "description": "Documents the Redis Software REST API /cluster/debuginfo requests.",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[{"children":[{"id":"request-get-request","title":"Request {#get-request}"},{"id":"response-get-response","title":"Response {#get-response}"},{"id":"status-codes-get-status-codes","title":"Status codes {#get-status-codes}"}],"id":"get-cluster-debug-info-get-cluster-debuginfo","title":"Get cluster debug info {#get-cluster-debuginfo}"}]}

,
  "codeExamples": []
}
```
| Method | Path | Description |
|--------|------|-------------|
| [GET](#get-cluster-debuginfo) | `/v1/cluster/debuginfo` | Get debug info from all nodes and databases |

## Get cluster debug info {#get-cluster-debuginfo}

	GET /v1/cluster/debuginfo

Downloads a tar file that contains debug info from all nodes and databases.

#### Required permissions

| Permission name |
|-----------------|
| [view_debugging_info]() |

### Request {#get-request} 

#### Example HTTP request

	GET /v1/cluster/debuginfo

### Response {#get-response} 

Downloads the debug info in a tar file called `filename.tar.gz`. Extract the files from the tar file to access the debug info for all nodes.

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
