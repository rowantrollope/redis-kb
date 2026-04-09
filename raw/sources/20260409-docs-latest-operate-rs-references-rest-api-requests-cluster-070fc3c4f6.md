---
title: Cluster requests
url: https://redis.io/docs/latest/operate/rs/references/rest-api/requests/cluster/
retrieved_utc: '2026-04-09T20:46:02.799265+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/references/rest-api/requests/cluster/index.html.md
---

# Cluster requests

```json metadata
{
  "title": "Cluster requests",
  "description": "Cluster settings requests",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[{"children":[{"id":"request-get-request","title":"Request {#get-request}"},{"id":"response-get-response","title":"Response {#get-response}"},{"id":"status-codes-get-status-codes","title":"Status codes {#get-status-codes}"}],"id":"get-cluster-info-get-cluster","title":"Get cluster info {#get-cluster}"},{"children":[{"id":"request-put-request","title":"Request {#put-request}"},{"id":"response-put-response","title":"Response {#put-response}"},{"id":"error-codes-put-error-codes","title":"Error codes {#put-error-codes}"},{"id":"status-codes-put-status-codes","title":"Status codes {#put-status-codes}"}],"id":"update-cluster-settings-put-cluster","title":"Update cluster settings {#put-cluster}"}]}

,
  "codeExamples": []
}
```
| Method | Path | Description |
|--------|------|-------------|
| [GET](#get-cluster) | `/v1/cluster` | Get cluster info |
| [PUT](#put-cluster) | `/v1/cluster` | Update cluster settings |

## Get cluster info {#get-cluster}

	GET /v1/cluster

Get cluster info.

#### Required permissions

| Permission name |
|-----------------|
| [view_cluster_info]() |

### Request {#get-request} 

#### Example HTTP request

	GET /v1/cluster 

#### Request headers

| Key | Value | Description |
|-----|-------|-------------|
| Host | cnm.cluster.fqdn | Domain name |
| Accept | application/json | Accepted media type |

### Response {#get-response} 

Returns a [cluster object]().

#### Example JSON body

```json
{
   "name": "my-rlec-cluster",
   "alert_settings": { "..." },
   "created_time": "2015-04-29T09:09:25Z",
   "email_alerts": false,
   "email_from": "",
   "rack_aware": false,
   "smtp_host": "",
   "smtp_password": "",
   "smtp_port": 25,
   "smtp_tls_mode": "none",
   "smtp_username": ""
}
```

### Status codes {#get-status-codes} 

| Code | Description |
|------|-------------|
| [200 OK](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.2.1) | No error |

## Update cluster settings {#put-cluster}

	PUT /v1/cluster

Update cluster settings.

If called with the `dry_run` URL query string, the function will
validate the [cluster object](), but will not apply the requested
changes.

#### Required permissions

| Permission name |
|-----------------|
| [update_cluster]() |

### Request {#put-request} 

#### Example HTTP request

	PUT /v1/cluster 

#### Example JSON body

```json
{
    "email_alerts": true,
    "alert_settings": {
        "node_failed": true,
        "node_memory": {
            "enabled": true,
            "threshold": "80"
        }
    }
}
```

The above request will enable email alerts and alert reporting for node failures and node removals.

#### Request headers

| Key | Value | Description |
|-----|-------|-------------|
| Host | cnm.cluster.fqdn | Domain name |
| Accept | application/json | Accepted media type |

#### URL parameters

| Field | Type | Description |
|-------|------|-------------|
| dry_run | string | Validate but don't apply the new cluster settings |

#### Request body

Include a [cluster object]() with updated fields in the request body.

### Response {#put-response} 

#### Example JSON body

```json
{
    "name": "mycluster.mydomain.com",
    "email_alerts": true,
    "alert_settings": {
        "node_failed": true,
        "node_memory": {
            "enabled": true,
            "threshold": "80"
        }
    },
    "// additional fields..."
}
```

### Error codes {#put-error-codes} 

When errors are reported, the server may return a JSON object with `error_code` and `message` field that provide additional information. The following are possible `error_code` values:

| Code | Description |
|------|-------------|
| bad_nginx_conf | â¢ Designated port is already bound.<br></br>â¢ nginx configuration is illegal. | 
| bad_debuginfo_path | â¢ Debuginfo path doesn't exist.<br></br>â¢ Debuginfo path is inaccessible. | 
| config_edit_conflict | Cluster config was edited by another source simultaneously. | 

### Status codes {#put-status-codes} 

| Code | Description |
|------|-------------|
| [200 OK](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.2.1) | No error. |
| [400 Bad Request](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.4.1) | Bad content provided. |

