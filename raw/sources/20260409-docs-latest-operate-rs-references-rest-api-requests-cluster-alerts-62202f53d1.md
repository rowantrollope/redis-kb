---
title: Cluster alerts requests
url: https://redis.io/docs/latest/operate/rs/references/rest-api/requests/cluster/alerts/
retrieved_utc: '2026-04-09T20:46:01.901557+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/references/rest-api/requests/cluster/alerts/index.html.md
---

# Cluster alerts requests

```json metadata
{
  "title": "Cluster alerts requests",
  "description": "Cluster alert requests",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[{"children":[{"id":"request-get-all-request","title":"Request {#get-all-request}"},{"id":"response-get-all-response","title":"Response {#get-all-response}"},{"id":"status-codes-get-all-status-codes","title":"Status codes {#get-all-status-codes}"}],"id":"get-all-cluster-alerts-get-all-alerts","title":"Get all cluster alerts {#get-all-alerts}"},{"children":[{"id":"request-get-request","title":"Request {#get-request}"},{"id":"response-get-response","title":"Response {#get-response}"},{"id":"status-codes-get-status-codes","title":"Status codes {#get-status-codes}"}],"id":"get-cluster-alert-get-alert","title":"Get cluster alert {#get-alert}"}]}

,
  "codeExamples": []
}
```
| Method | Path | Description |
|--------|------|-------------|
| [GET](#get-all-alerts) | `/v1/cluster/alerts` | Get all cluster alerts |
| [GET](#get-alert) | `/v1/cluster/alerts/{alert}` | Get a specific cluster alert |

## Get all cluster alerts {#get-all-alerts}

	GET /v1/cluster/alerts

Get all alert states for the cluster object.

#### Required permissions

| Permission name |
|-----------------|
| [view_cluster_alerts]() |

### Request {#get-all-request} 

#### Example HTTP request

	GET /v1/cluster/alerts 

#### Request headers

| Key | Value | Description |
|-----|-------|-------------|
| Host | cnm.cluster.fqdn | Domain name |
| Accept | application/json | Accepted media type |

#### Query parameters

| Field | Type | Description |
|-------|------|-------------|
| ignore_settings | boolean | Retrieve updated alert state regardless of the clusterâs alert_settings. When not present, a disabled alert will always be retrieved as disabled with a false state. (optional) |

### Response {#get-all-response} 

Returns a hash of [alert objects]() and their states.

#### Example JSON body

```json
{
    "cluster_too_few_nodes_for_replication": {
        "change_time": "2014-12-22T11:48:00Z",
        "change_value": {
            "state": false
        },
       "enabled": true,
       "state": "off",
       "severity": "WARNING",
    },
    "..."
}
```

### Status codes {#get-all-status-codes} 

| Code | Description |
|------|-------------|
| [200 OK](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.2.1) | No error |

## Get cluster alert {#get-alert}

	GET /v1/cluster/alerts/{alert}

Get a cluster alert state.

#### Required permissions

| Permission name |
|-----------------|
| [view_cluster_alerts]() |

### Request {#get-request} 

#### Example HTTP request

	GET /v1/cluster/alerts/cluster_too_few_nodes_for_replication 

#### Request headers

| Key | Value | Description |
|-----|-------|-------------|
| Host | cnm.cluster.fqdn | Domain name |
| Accept | application/json | Accepted media type |

#### Query parameters

| Field | Type | Description |
|-------|------|-------------|
| ignore_settings | boolean | Retrieve updated alert state regardless of the clusterâs alert_settings. When not present, a disabled alert will always be retrieved as disabled with a false state. (optional) |

### Response {#get-response} 

Returns an [alert object]().

#### Example JSON body

```json
{
    "change_time": "2014-12-22T11:48:00Z",
    "change_value": {
        "state": false
    },
   "enabled": true,
   "state": "off",
   "severity": "WARNING",
}
```

### Status codes {#get-status-codes} 

| Code | Description |
|------|-------------|
| [200 OK](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.2.1) | No error |
| [404 Not Found](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.4.5) | Specified alert does not exist |
