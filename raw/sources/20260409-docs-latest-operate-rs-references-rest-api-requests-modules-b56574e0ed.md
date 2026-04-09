---
title: Modules requests
url: https://redis.io/docs/latest/operate/rs/references/rest-api/requests/modules/
retrieved_utc: '2026-04-09T20:46:05.790469+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/references/rest-api/requests/modules/index.html.md
---

# Modules requests

```json metadata
{
  "title": "Modules requests",
  "description": "Redis modules requests",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[{"children":[{"id":"request-list-request","title":"Request {#list-request}"},{"id":"response-list-response","title":"Response {#list-response}"}],"id":"list-modules-list-modules","title":"List modules {#list-modules}"},{"children":[{"id":"request-get-request","title":"Request {#get-request}"},{"id":"response-get-response","title":"Response {#get-response}"},{"id":"status-codes-get-status-codes","title":"Status codes {#get-status-codes}"}],"id":"get-module-get-module","title":"Get module {#get-module}"}]}

,
  "codeExamples": []
}
```
| Method | Path | Description |
|--------|------|-------------|
| [GET](#list-modules) | `/v1/modules` | List available modules |
| [GET](#get-module) | `/v1/modules/{uid}` | Get a specific module |

## List modules {#list-modules}

```sh
GET /v1/modules
```

List available modules, i.e. modules stored within the CCS.

#### Permissions

| Permission name | Roles |
|-----------------|-------|
| [view_cluster_modules]() | admin<br />cluster_member<br />cluster_viewer<br />db_member<br />db_viewer<br />user_manager |

### Request {#list-request}

#### Example HTTP request

```sh
GET /v1/modules
```

#### Headers

| Key | Value | Description |
|-----|-------|-------------|
| Host | 127.0.0.1:9443 | Domain name |
| Accept | \*/\* | Accepted media type |

### Response {#list-response}

Returns a JSON array of [module objects]().

#### Status codes {#list-status-codes}

| Code | Description |
|------|-------------|
| [200 OK](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.2.1) | No error |

## Get module {#get-module}

```sh
GET /v1/modules/{string: uid}
```

Get specific available modules, i.e. modules stored within the CCS.

#### Permissions

| Permission name | Roles |
|-----------------|-------|
| [view_cluster_modules]() | admin<br />cluster_member<br />cluster_viewer<br />db_member<br />db_viewer<br />user_manager |

### Request {#get-request}

#### Example HTTP request

```sh
GET /v1/modules/1
```

#### Headers

| Key | Value | Description |
|-----|-------|-------------|
| Host | 127.0.0.1:9443 | Domain name |
| Accept | \*/\* | Accepted media type |

#### URL parameters

| Field | Type | Description |
|-------|------|-------------|
| uid | integer | The module's unique ID. |

### Response {#get-response}

Returns a [module object]().

### Status codes {#get-status-codes}

| Code | Description |
|------|-------------|
| [200 OK](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.2.1) | No error |
| [404 Not Found](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.4.5) | Module does not exist. |
