---
title: JSON schema requests
url: https://redis.io/docs/latest/operate/rs/references/rest-api/requests/jsonschema/
retrieved_utc: '2026-04-09T20:46:05.162847+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/references/rest-api/requests/jsonschema/index.html.md
---

# JSON schema requests

```json metadata
{
  "title": "JSON schema requests",
  "description": "API object JSON schema requests",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[{"children":[{"id":"request-get-request","title":"Request {#get-request}"},{"id":"response-get-response","title":"Response {#get-response}"},{"id":"status-codes-get-status-codes","title":"Status codes {#get-status-codes}"}],"id":"get-object-json-schema-get-jsonschema","title":"Get object JSON schema {#get-jsonschema}"}]}

,
  "codeExamples": []
}
```
| Method | Path | Description |
|--------|------|-------------|
| [GET](#get-jsonschema) | `/v1/jsonschema` | Get JSON schema of API objects |

## Get object JSON schema {#get-jsonschema}

	GET /v1/jsonschema

Get the JSON schema of various [Redis Software REST API objects]().

### Request {#get-request} 

#### Example HTTP request

	GET /v1/jsonschema?object=bdb 

#### Request headers

| Key | Value | Description |
|-----|-------|-------------|
| Host | cnm.cluster.fqdn | Domain name |
| Accept | application/json | Accepted media type |

#### Query parameters

| Field | Type | Description |
|-------|------|-------------|
| object | string | Optional. The API object name: 'cluster', 'node', 'bdb' etc. |

### Response {#get-response} 

Returns the JSON schema of the specified API object.

#### Example JSON body

```json
{
     "type": "object",
     "description": "An API object that represents a managed database in the cluster.",
     "properties": {
          "...."
     },
     "...."
}
```

### Status codes {#get-status-codes} 

| Code | Description |
|------|-------------|
| [200 OK](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.2.1) | Success. |
| [406 Not Acceptable](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.4.7) | Invalid object. |
