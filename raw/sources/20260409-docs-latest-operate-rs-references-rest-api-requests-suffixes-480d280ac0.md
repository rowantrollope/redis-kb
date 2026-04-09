---
title: Suffixes requests
url: https://redis.io/docs/latest/operate/rs/references/rest-api/requests/suffixes/
retrieved_utc: '2026-04-09T20:46:07.869663+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/references/rest-api/requests/suffixes/index.html.md
---

# Suffixes requests

```json metadata
{
  "title": "Suffixes requests",
  "description": "DNS suffixes requests",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[{"children":[{"id":"request-get-all-request","title":"Request {#get-all-request}"},{"id":"response-get-all-response","title":"Response {#get-all-response}"},{"id":"status-codes-get-all-status-codes","title":"Status codes {#get-all-status-codes}"}],"id":"get-all-suffixes-get-all-suffixes","title":"Get all suffixes {#get-all-suffixes}"}]}

,
  "codeExamples": []
}
```
| Method | Path | Description |
|--------|------|-------------|
| [GET](#get-all-suffixes) | `/v1/suffixes` | Get all DNS suffixes |

## Get all suffixes {#get-all-suffixes}

	GET /v1/suffixes

Get all DNS suffixes in the cluster.

### Request {#get-all-request} 

#### Example HTTP request

	GET /v1/suffixes 


#### Request headers

| Key | Value | Description |
|-----|-------|-------------|
| Host | cnm.cluster.fqdn | Domain name |
| Accept | application/json | Accepted media type |

### Response {#get-all-response} 

The response body contains a JSON array with all suffixes, represented as [suffix objects]().

#### Example JSON body

```json
[
    {
        "name": "cluster.fqdn",
        "// additional fields..."
    },
    {
        "name": "internal.cluster.fqdn",
        "// additional fields..."
    }
]
```

### Status codes {#get-all-status-codes} 

| Code | Description |
|------|-------------|
| [200 OK](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.2.1) | No error |
