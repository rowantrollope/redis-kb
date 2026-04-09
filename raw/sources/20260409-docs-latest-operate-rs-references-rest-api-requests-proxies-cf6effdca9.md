---
title: Proxy requests
url: https://redis.io/docs/latest/operate/rs/references/rest-api/requests/proxies/
retrieved_utc: '2026-04-09T20:46:06.319038+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/references/rest-api/requests/proxies/index.html.md
---

# Proxy requests

```json metadata
{
  "title": "Proxy requests",
  "description": "Proxy requests",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[{"children":[{"id":"permissions","title":"Permissions"},{"id":"request-get-all-request","title":"Request {#get-all-request}"},{"id":"response-get-all-response","title":"Response {#get-all-response}"},{"id":"status-codes-get-all-status-codes","title":"Status codes {#get-all-status-codes}"}],"id":"get-all-proxies-get-all-proxies","title":"Get all proxies {#get-all-proxies}"},{"children":[{"id":"permissions","title":"Permissions"},{"id":"request-get-request","title":"Request {#get-request}"},{"id":"response-get-response","title":"Response {#get-response}"},{"id":"status-codes-get-status-codes","title":"Status codes {#get-status-codes}"}],"id":"get-proxy-get-proxy","title":"Get proxy {#get-proxy}"},{"children":[{"id":"permissions","title":"Permissions"},{"id":"request-put-request","title":"Request {#put-request}"},{"id":"response-put-response","title":"Response {#put-response}"},{"id":"status-codes-put-status-codes","title":"Status codes {#put-status-codes}"}],"id":"update-proxy-put-proxy","title":"Update proxy {#put-proxy}"},{"children":[{"id":"permissions","title":"Permissions"},{"id":"request-put-all-request","title":"Request {#put-all-request}"},{"id":"response-put-all-response","title":"Response {#put-all-response}"},{"id":"status-codes-put-all-status-codes","title":"Status codes {#put-all-status-codes}"}],"id":"update-all-proxies-put-all-proxies","title":"Update all proxies {#put-all-proxies}"}]}

,
  "codeExamples": []
}
```
| Method | Path | Description |
|--------|------|-------------|
| [GET](#get-all-proxies) | `/v1/proxies` | Get all proxies |
| [GET](#get-proxy) | `/v1/proxies/{uid}` | Get a proxy |
| [PUT](#put-proxy) | `/v1/proxies/{uid}` | Update a proxy |
| [PUT](#put-all-proxies) | `/v1/proxies` | Update all proxies |

## Get all proxies {#get-all-proxies}

```sh
GET /v1/proxies
```

Get all the proxies in the cluster.

### Permissions

| Permission name | Roles |
|-----------------|-------|
| [view_all_proxies_info]() | admin<br />cluster_member<br />cluster_viewer<br />db_member<br />db_viewer<br />user_manager |

### Request {#get-all-request}

#### Example HTTP request

```sh
GET /v1/proxies
```

#### Headers

| Key | Value | Description |
|-----|-------|-------------|
| Host | cnm.cluster.fqdn | Domain name |
| Accept | application/json | Accepted media type |

### Response {#get-all-response}

Returns a JSON array of [proxy objects]().

#### Example JSON body

```json
[
    {
         "uid": 1,
         "client_keepintvl": 30,
         "max_worker_server_conns": 16384,
         "client_keepcnt": 6,
         "max_threads": 64,
         "ignore_bdb_cconn_output_buff_limits": false,
         "dynamic_threads_scaling": false,
         "max_worker_client_conns": 16384,
         "max_servers": 4096,
         "client_keepidle": 180,
         "duration_usage_threshold": 30,
         "max_worker_txns": 65536,
         "threads": 3,
         "max_listeners": 1024,
         "conns": 500000,
         "ignore_bdb_cconn_limit": false,
         "threads_usage_threshold": 80,
         "backlog": 1024
    },
    {
        "uid": 2,
        "threads": 3,
        // additional fields...
    }
]
```

### Status codes {#get-all-status-codes}

| Code | Description |
|------|-------------|
| [200 OK](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.2.1) | No error |

## Get proxy {#get-proxy}

```sh
GET /v1/proxies/{int: uid}
```

Get a single proxy's info.

### Permissions

| Permission name | Roles |
|-----------------|-------|
| [view_proxy_info]() | admin<br />cluster_member<br />cluster_viewer<br />db_member<br />db_viewer<br />user_manager |

### Request {#get-request}

#### Example HTTP request

```sh
GET /v1/proxies/1
```

#### Headers

| Key | Value | Description |
|-----|-------|-------------|
| Host | cnm.cluster.fqdn | Domain name |
| Accept | application/json | Accepted media type |

#### URL parameters

| Field | Type | Description |
|-------|------|-------------|
| uid | integer | The proxy's unique node ID |

### Response {#get-response}

Returns a [proxy object]().

#### Example JSON body

```json
{
     "uid": 1,
     "client_keepintvl": 30,
     "max_worker_server_conns": 16384,
     "client_keepcnt": 6,
     "max_threads": 64,
     "ignore_bdb_cconn_output_buff_limits": false,
     "dynamic_threads_scaling": false,
     "max_worker_client_conns": 16384,
     "max_servers": 4096,
     "client_keepidle": 180,
     "duration_usage_threshold": 30,
     "max_worker_txns": 65536,
     "threads": 3,
     "max_listeners": 1024,
     "conns": 500000,
     "ignore_bdb_cconn_limit": false,
     "threads_usage_threshold": 80,
     "backlog": 1024
}
```

### Status codes {#get-status-codes}

| Code | Description |
|------|-------------|
| [200 OK](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.2.1) | No error |
| [404 Not Found](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.4.5) | Proxy UID does not exist |

## Update proxy {#put-proxy}

```sh
PUT /v1/proxies/{int: uid}
```

Updates a proxy object, notifies the proxy, and waits for acknowledgment (ACK) unless the node is dead.

Automatically restarts the proxy service if `allow_restart` is `true` and any updated parameters require a restart for the changes to take effect. For example, a restart is required if you change `threads` to a lower number.

However, if `allow_restart` is `false`, such changes only take effect after the next proxy restart.

### Permissions

| Permission name | Roles |
|-----------------|-------|
| [update_proxy]() | admin<br />user_manager |

### Request {#put-request}

#### Example HTTP request

```sh
PUT /v1/proxies/1
```

#### Example JSON body

```json
{
  "allow_restart": true,
  "proxy": {
    "threads": 8
  }
}
```

#### Headers

| Key | Value | Description |
|-----|-------|-------------|
| Host | cnm.cluster.fqdn | Domain name |
| Accept | application/json | Accepted media type |
| Content-Type | application/json | Request body media type |

#### URL parameters

| Field | Type | Description |
|-------|------|-------------|
| uid | integer | The unique ID of the updated proxy. Corresponds to the node ID. |

#### Request body

Include a JSON object in the request body. The JSON object can contain the boolean field `allow_restart` and a [proxy object]() with updated fields.

### Response {#put-response}

Returns a status code to indicate the success or failure of the proxy update.

### Status codes {#put-status-codes}

| Code | Description |
|------|-------------|
| [200 OK](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.2.1) | No error, the request has been processed |
| [400 Bad Request](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.4.1) | Bad content provided |
| [404 Not Found](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.4.5) | Proxy does not exist |
| [500 Internal Server Error](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.5.1) | Error while waiting for confirmation from proxy |
| [504 Gateway Timeout](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.5.5) | Timeout while waiting for confirmation from proxy |

## Update all proxies {#put-all-proxies}

```sh
PUT /v1/proxies
```

Updates all the proxy objects, notifies the proxies, and waits for acknowledgment (ACK) unless the node is dead.

Automatically restarts the relevant proxy services if `allow_restart` is `true` and any updated parameters require a restart for the changes to take effect.

However, if `allow_restart` is `false`, such changes only take effect after the next proxy restart.

### Permissions

| Permission name | Roles |
|-----------------|-------|
| [update_proxy]() | admin<br />user_manager |

### Request {#put-all-request}

#### Example HTTP request

```sh
PUT /v1/proxies
```

#### Example JSON body

```json
{
  "allow_restart": true,
  "proxy": {
    "threads": 8,
    "max_threads": 12
  }
}
```

#### Headers

| Key | Value | Description |
|-----|-------|-------------|
| Host | cnm.cluster.fqdn | Domain name |
| Accept | application/json | Accepted media type |
| Content-Type | application/json | Request body media type |

#### Request body

Include a JSON object in the request body. The JSON object can contain the boolean field `allow_restart` and a [proxy object]() with updated fields.

### Response {#put-all-response}

Returns a status code to indicate the success or failure of the proxy updates.

### Status codes {#put-all-status-codes}

| Code | Description |
|------|-------------|
| [200 OK](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.2.1) | No error, the request has been processed |
| [400 Bad Request](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.4.1) | Bad content provided |
| [500 Internal Server Error](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.5.1) | Error while waiting for confirmation from proxy |
| [504 Gateway Timeout](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.5.5) | Timeout while waiting for confirmation from proxy |
