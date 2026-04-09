---
title: Cluster Manager settings requests
url: https://redis.io/docs/latest/operate/rs/references/rest-api/requests/cm_settings/
retrieved_utc: '2026-04-09T20:46:03.195599+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/references/rest-api/requests/cm_settings/index.html.md
---

# Cluster Manager settings requests

```json metadata
{
  "title": "Cluster Manager settings requests",
  "description": "REST API requests for Cluster Manager UI settings",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[{"children":[{"id":"permissions","title":"Permissions"},{"id":"request-get-request","title":"Request {#get-request}"},{"id":"response-get-response","title":"Response {#get-response}"}],"id":"get-cm-settings-get-cm-settings","title":"Get CM settings {#get-cm-settings}"},{"children":[{"id":"permissions","title":"Permissions"},{"id":"request-put-request","title":"Request {#put-request}"},{"id":"response-put-response","title":"Response {#put-response}"}],"id":"update-cm-settings-put-cm-settings","title":"Update CM settings {#put-cm-settings}"}]}

,
  "codeExamples": []
}
```
| Method | Path | Description |
|--------|------|-------------|
| [GET](#get-cm-settings) | `/v1/cm_settings` | Get Cluster Manager UI settings |
| [PUT](#put-cm-settings) | `/v1/cm_settings` | Update Cluster Manager UI settings |

## Get CM settings {#get-cm-settings}

```sh
GET /v1/cm_settings
```

Get Cluster Manager UI settings.

### Permissions

| Permission name | Roles |
|-----------------|-------|
| [view_cluster_info]() | admin<br />cluster_member<br />cluster_viewer<br />db_member<br />db_viewer<br />user_manager |

### Request {#get-request}

#### Example HTTP request

```sh
GET /v1/cm_settings
```

#### Headers

| Key | Value | Description |
|-----|-------|-------------|
| Host | cnm.cluster.fqdn | Domain name |
| Accept | application/json | Accepted media type |

### Response {#get-response}

Returns a [cm_settings object]().

#### Example JSON body

```json
{
    "timezone": "UTC"
}
```

#### Status codes {#get-status-codes}

| Code | Description |
|------|-------------|
| [200 OK](https://www.rfc-editor.org/rfc/rfc9110.html#name-200-ok) | No error |

## Update CM settings {#put-cm-settings}

```sh
PUT /v1/cm_settings
```

Update Cluster Manager UI settings.

### Permissions

| Permission name | Roles |
|-----------------|-------|
| [update_cluster]() | admin |

### Request {#put-request}

#### Example HTTP request

```sh
PUT /v1/cm_settings
```

#### Example JSON body

```json
{
    "timezone": "US/Pacific"
}
```

#### Headers

| Key | Value | Description |
|-----|-------|-------------|
| Host | cnm.cluster.fqdn | Domain name |
| Accept | application/json | Accepted media type |


#### Body

Include a [cm_settings object]() with updated fields in the request body.

### Response {#put-response}

Returns a [cm_settings object]() with the updated fields.

#### Example JSON body

```json
{
    "timezone": "US/Pacific"
}
```

#### Status codes {#put-status-codes}

| Code | Description |
|------|-------------|
| [200 OK](https://www.rfc-editor.org/rfc/rfc9110.html#name-200-ok) | Success, time zone config has been set. |
| [400 Bad Request](https://www.rfc-editor.org/rfc/rfc9110.html#name-400-bad-request) | Bad or missing configuration parameters. |
