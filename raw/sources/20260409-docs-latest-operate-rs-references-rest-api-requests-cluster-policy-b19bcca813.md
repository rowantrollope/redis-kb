---
title: Cluster policy requests
url: https://redis.io/docs/latest/operate/rs/references/rest-api/requests/cluster/policy/
retrieved_utc: '2026-04-09T20:46:06.292996+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/references/rest-api/requests/cluster/policy/index.html.md
---

# Cluster policy requests

```json metadata
{
  "title": "Cluster policy requests",
  "description": "Cluster policy requests",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[{"children":[{"id":"request-get-request","title":"Request {#get-request}"},{"id":"response-get-response","title":"Response {#get-response}"},{"id":"status-codes-get-status-codes","title":"Status codes {#get-status-codes}"}],"id":"get-cluster-policy-get-cluster-policy","title":"Get cluster policy {#get-cluster-policy}"},{"children":[{"id":"request-put-request","title":"Request {#put-request}"},{"id":"response-put-response","title":"Response {#put-response}"},{"id":"status-codes-put-status-codes","title":"Status codes {#put-status-codes}"}],"id":"update-cluster-policy-put-cluster-policy","title":"Update cluster policy {#put-cluster-policy}"}]}

,
  "codeExamples": []
}
```
| Method | Path | Description |
|--------|------|-------------|
| [GET](#get-cluster-policy) | `/v1/cluster/policy` | Get cluster policy settings |
| [PUT](#put-cluster-policy) | `/v1/cluster/policy` | Update cluster policy settings |

## Get cluster policy {#get-cluster-policy}

	GET /v1/cluster/policy

Gets the cluster's current policy settings.

#### Required permissions

| Permission name |
|-----------------|
| [view_cluster_info]() |

### Request {#get-request} 

#### Example HTTP request

	GET /v1/cluster/policy 


#### Request headers

| Key | Value | Description |
|-----|-------|-------------|
| Host | cnm.cluster.fqdn | Domain name |
| Accept | application/json | Accepted media type |

### Response {#get-response} 

Returns a [cluster settings object]().

#### Example JSON body

```json
{
    "db_conns_auditing": false,
    "default_non_sharded_proxy_policy": "single",
    "default_provisioned_redis_version": "6.0",
    "default_sharded_proxy_policy": "single",
    "default_shards_placement": "dense",
    "redis_upgrade_policy": "major",
    "// additional fields..."
}
```

### Status codes {#get-status-codes} 

| Code | Description |
|------|-------------|
| [200 OK](https://www.rfc-editor.org/rfc/rfc9110.html#name-200-ok) | Success |

## Update cluster policy {#put-cluster-policy}

	PUT /v1/cluster/policy

Update cluster policy settings.

#### Required permissions

| Permission name |
|-----------------|
| [update_cluster]() |

### Request {#put-request} 

#### Example HTTP request

	PUT /v1/cluster/policy

#### Example JSON body

```json
{
    "default_shards_placement": "sparse",
    "default_sharded_proxy_policy": "all-nodes"
}
```

#### Request headers

| Key | Value | Description |
|-----|-------|-------------|
| Host | cnm.cluster.fqdn | Domain name |
| Accept | application/json | Accepted media type |

#### Request body

Include a [cluster settings object]() with updated fields in the request body.

### Response {#put-response} 

Returns a status code that indicates the success or failure of the cluster settings update.

### Status codes {#put-status-codes} 

| Code | Description |
|------|-------------|
| [200 OK](https://www.rfc-editor.org/rfc/rfc9110.html#name-200-ok) | Success |
| [400 Bad Request](https://www.rfc-editor.org/rfc/rfc9110.html#name-400-bad-request) | Failed to set parameters |
