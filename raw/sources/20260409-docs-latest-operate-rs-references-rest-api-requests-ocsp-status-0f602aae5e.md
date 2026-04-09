---
title: OCSP status requests
url: https://redis.io/docs/latest/operate/rs/references/rest-api/requests/ocsp/status/
retrieved_utc: '2026-04-09T20:46:07.779737+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/references/rest-api/requests/ocsp/status/index.html.md
---

# OCSP status requests

```json metadata
{
  "title": "OCSP status requests",
  "description": "OCSP status requests",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[{"children":[{"id":"request-get-request","title":"Request {#get-request}"},{"id":"response-get-response","title":"Response {#get-response}"},{"id":"error-codes-get-error-codes","title":"Error codes {#get-error-codes}"},{"id":"status-codes-get-status-codes","title":"Status codes {#get-status-codes}"}],"id":"get-ocsp-status-get-status","title":"Get OCSP status {#get-status}"}]}

,
  "codeExamples": []
}
```
| Method | Path | Description |
|--------|------|-------------|
| [GET](#get-status) | `/v1/ocsp/status` | Get OCSP status |

## Get OCSP status {#get-status}

	GET /v1/ocsp/status

Gets the latest cached status of the proxy certificateâs OCSP response.

#### Required permissions

| Permission name |
|-----------------|
| [view_ocsp_status]() |

### Request {#get-request} 

#### Example HTTP request

	GET /v1/ocsp/status 


#### Request headers

| Key | Value | Description |
|-----|-------|-------------|
| Host | cnm.cluster.fqdn | Domain name |
| Accept | application/json | Accepted media type |

### Response {#get-response} 

Returns an [OCSP status object]().

#### Example JSON body

```json
{
    "responder_url": "http://responder.ocsp.url.com",
    "cert_status": "REVOKED",
    "produced_at": "Wed, 22 Dec 2021 12:50:11 GMT",
    "this_update": "Wed, 22 Dec 2021 12:50:11 GMT",
    "next_update": "Wed, 22 Dec 2021 14:50:00 GMT",
    "revocation_time": "Wed, 22 Dec 2021 12:50:04 GMT"
}
```

### Error codes {#get-error-codes} 

When errors occur, the server returns a JSON object with `error_code` and `message` fields that provide additional information. The following are possible `error_code` values:

| Code | Description |
|------|-------------|
| ocsp_unsupported_by_capability | Not all nodes support OCSP capability | 
| invalid_ocsp_response | The server returned a response that is not OCSP-compatible |

### Status codes {#get-status-codes} 

| Code | Description |
|------|-------------|
| [200 OK](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.2.1) | Success |
| [406 Not Acceptable](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.4.7) | Feature not supported in all nodes |