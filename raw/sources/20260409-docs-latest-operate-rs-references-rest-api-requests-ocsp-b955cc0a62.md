---
title: OCSP requests
url: https://redis.io/docs/latest/operate/rs/references/rest-api/requests/ocsp/
retrieved_utc: '2026-04-09T20:46:05.988237+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/references/rest-api/requests/ocsp/index.html.md
---

# OCSP requests

```json metadata
{
  "title": "OCSP requests",
  "description": "OCSP requests",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[{"children":[{"id":"request-get-request","title":"Request {#get-request}"},{"id":"response-get-response","title":"Response {#get-response}"},{"id":"error-codes-get-error-codes","title":"Error codes {#get-error-codes}"},{"id":"status-codes-get-status-codes","title":"Status codes {#get-status-codes}"}],"id":"get-ocsp-configuration-get-ocsp","title":"Get OCSP configuration {#get-ocsp}"},{"children":[{"id":"request-put-request","title":"Request {#put-request}"},{"id":"response-put-response","title":"Response {#put-response}"},{"id":"error-codes-put-error-codes","title":"Error codes {#put-error-codes}"},{"id":"status-codes-put-status-codes","title":"Status codes {#put-status-codes}"}],"id":"update-ocsp-configuration-put-ocsp","title":"Update OCSP configuration {#put-ocsp}"}]}

,
  "codeExamples": []
}
```
| Method | Path | Description |
|--------|------|-------------|
| [GET](#get-ocsp) | `/v1/ocsp` | Get OCSP configuration |
| [PUT](#put-ocsp) | `/v1/ocsp` | Update OCSP configuration |

## Get OCSP configuration {#get-ocsp}

	GET /v1/ocsp

Gets the cluster's OCSP configuration.

#### Required permissions

| Permission name |
|-----------------|
| [view_ocsp_config]() |

### Request {#get-request} 

#### Example HTTP request

	GET /v1/ocsp 


#### Request headers

| Key | Value | Description |
|-----|-------|-------------|
| Host | cnm.cluster.fqdn | Domain name |
| Accept | application/json | Accepted media type |

### Response {#get-response} 

Returns an [OCSP configuration object]().

#### Example JSON body

```json
{
    "ocsp_functionality": true,
    "responder_url": "http://responder.ocsp.url.com",
    "query_frequency": 3800,
    "response_timeout": 2,
    "recovery_frequency": 80,
    "recovery_max_tries": 20
}
```

### Error codes {#get-error-codes} 

When errors occur, the server returns a JSON object with `error_code` and `message` fields that provide additional information. The following are possible `error_code` values:

| Code | Description |
|------|-------------|
| ocsp_unsupported_by_capability | Not all nodes support OCSP capability | 

### Status codes {#get-status-codes} 

| Code | Description |
|------|-------------|
| [200 OK](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.2.1) | Success |
| [406 Not Acceptable](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.4.7) | Feature not supported in all nodes |

## Update OCSP configuration {#put-ocsp}

	PUT /v1/ocsp

Updates the cluster's OCSP configuration.

#### Required permissions

| Permission name |
|-----------------|
| [config_ocsp]() |

### Request {#put-request} 

#### Example HTTP request

	PUT /v1/ocsp 

#### Example JSON body

```json
{
    "ocsp_functionality": true,
    "query_frequency": 3800,
    "response_timeout": 2,
    "recovery_frequency": 80,
    "recovery_max_tries": 20
}
```

#### Request headers

| Key | Value | Description |
|-----|-------|-------------|
| Host | cnm.cluster.fqdn | Domain name |
| Accept | application/json | Accepted media type |

#### Request body

Include an [OCSP configuration object]() with updated fields in the request body.

### Response {#put-response} 

Returns the updated [OCSP configuration object]().

### Error codes {#put-error-codes} 

When errors occur, the server returns a JSON object with `error_code` and `message` fields that provide additional information. The following are possible `error_code` values:

| Code | Description |
|------|-------------|
| invalid_schema | An illegal parameter or a parameter with an illegal value |
| no_responder_url | Tried to enable OCSP with no responder URL configured |
| ocsp_unsupported_by_capability | Not all nodes support OCSP capability |

### Status codes {#put-status-codes} 

| Code | Description |
|------|-------------|
| [200 OK](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.2.1) | Success, OCSP config has been set |
| [400 Bad Request](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.4.1) | Bad or missing configuration parameters |
| [406 Not Acceptable](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.4.7) | Feature not supported in all nodes |
