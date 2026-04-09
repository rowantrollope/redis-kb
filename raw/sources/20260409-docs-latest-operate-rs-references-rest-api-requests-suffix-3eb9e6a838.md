---
title: Suffix requests
url: https://redis.io/docs/latest/operate/rs/references/rest-api/requests/suffix/
retrieved_utc: '2026-04-09T20:46:07.865334+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/references/rest-api/requests/suffix/index.html.md
---

# Suffix requests

```json metadata
{
  "title": "Suffix requests",
  "description": "DNS suffix requests",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[{"children":[{"id":"request-get-request","title":"Request {#get-request}"},{"id":"response-get-response","title":"Response {#get-response}"},{"id":"status-codes-get-status-codes","title":"Status codes {#get-status-codes}"}],"id":"get-suffix-get-suffix","title":"Get suffix {#get-suffix}"}]}

,
  "codeExamples": []
}
```
| Method | Path | Description |
|--------|------|-------------|
| [GET](#get-suffix) | `/v1/suffix/{name}` | Get a single DNS suffix |

## Get suffix {#get-suffix}

	GET /v1/suffix/{string: name}

Get a single DNS suffix.

### Request {#get-request} 

#### Example HTTP request

	GET /v1/suffix/cluster.fqdn 


#### Request headers

| Key | Value | Description |
|-----|-------|-------------|
| Host | cnm.cluster.fqdn | Domain name |
| Accept | application/json | Accepted media type |


#### URL parameters

| Field | Type | Description |
|-------|------|-------------|
| name | string | The unique name of the suffix requested. |

### Response {#get-response} 

Returns a [suffix object]().

#### Example JSON body

```json
{
    "name": "cluster.fqdn",
    "// additional fields..."
}
```

### Status codes {#get-status-codes} 

| Code | Description |
|------|-------------|
| [200 OK](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.2.1) | No error |
| [404 Not Found](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.4.5) | Suffix name does not exist |
