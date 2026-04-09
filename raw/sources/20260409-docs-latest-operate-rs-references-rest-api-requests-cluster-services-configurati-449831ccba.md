---
title: Cluster services configuration requests
url: https://redis.io/docs/latest/operate/rs/references/rest-api/requests/cluster/services_configuration/
retrieved_utc: '2026-04-09T20:46:07.359174+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/references/rest-api/requests/cluster/services_configuration/index.html.md
---

# Cluster services configuration requests

```json metadata
{
  "title": "Cluster services configuration requests",
  "description": "Cluster services configuration requests",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[{"children":[{"id":"request-get-request","title":"Request {#get-request}"},{"id":"response-get-response","title":"Response {#get-response}"},{"id":"status-codes-get-status-codes","title":"Status codes {#get-status-codes}"}],"id":"get-cluster-services-configuration-get-cluster-servicesconfig","title":"Get cluster services configuration {#get-cluster-services_config}"},{"children":[{"id":"request-put-request","title":"Request {#put-request}"},{"id":"response-put-response","title":"Response {#put-response}"},{"id":"status-codes-put-status-codes","title":"Status codes {#put-status-codes}"}],"id":"update-cluster-services-configuration-put-cluster-servicesconfig","title":"Update cluster services configuration {#put-cluster-services_config}"}]}

,
  "codeExamples": []
}
```
| Method | Path | Description |
|--------|------|-------------|
| [GET](#get-cluster-services_config) | `/v1/cluster/services_configuration` | Get cluster services settings |
| [PUT](#put-cluster-services_config) | `/v1/cluster/services_configuration` | Update cluster services settings |

## Get cluster services configuration {#get-cluster-services_config}

	GET /v1/cluster/services_configuration

Get cluster services settings.

#### Required permissions

| Permission name |
|-----------------|
| [view_cluster_info]() |

### Request {#get-request} 

#### Example HTTP request

	GET /v1/cluster/services_configuration 

#### Request headers

| Key | Value | Description |
|-----|-------|-------------|
| Host | cnm.cluster.fqdn | Domain name |
| Accept | application/json | Accepted media type |

### Response {#get-response} 

Returns a [services configuration object]().

#### Example JSON body

```json
{
     "cm_server": {
         "operating_mode": "disabled"
     },
     "mdns_server": {
         "operating_mode": "enabled"
     },
     "// additional services..."
}
```

### Status codes {#get-status-codes} 

| Code | Description |
|------|-------------|
| [200 OK](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.2.1) | No error |

## Update cluster services configuration {#put-cluster-services_config}

	PUT /v1/cluster/services_configuration

Update the cluster services settings.

#### Required permissions

| Permission name |
|-----------------|
| [update_cluster]() |

### Request {#put-request} 

#### Example HTTP request

	PUT /v1/cluster/services_configuration 

#### Example JSON body

```json
{
     "cm_server": {
         "operating_mode": "disabled"
     },
     "// additional services..."
}
```

#### Request headers

| Key | Value | Description |
|-----|-------|-------------|
| Host | cnm.cluster.fqdn | Domain name |
| Accept | application/json | Accepted media type |

#### Request body

Include a [services configuration object]() with updated fields in the request body.

### Response {#put-response} 

Returns the updated [services configuration object]().

#### Example JSON body

```json
{
     "cm_server": {
         "operating_mode": "disabled"
     },
     "mdns_server": {
         "operating_mode": "enabled"
     },
     "// additional services..."
}
```

### Status codes {#put-status-codes} 

| Code | Description |
|------|-------------|
| [200 OK](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.2.1) | No error |
