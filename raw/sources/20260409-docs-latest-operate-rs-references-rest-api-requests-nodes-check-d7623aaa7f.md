---
title: Check node requests
url: https://redis.io/docs/latest/operate/rs/references/rest-api/requests/nodes/check/
retrieved_utc: '2026-04-09T20:46:02.514868+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/references/rest-api/requests/nodes/check/index.html.md
---

# Check node requests

```json metadata
{
  "title": "Check node requests",
  "description": "Requests that run checks on a cluster node.",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[{"children":[{"id":"request-get-request","title":"Request {#get-request}"},{"id":"response-get-response","title":"Response {#get-response}"},{"id":"status-codes-get-status-codes","title":"Status codes {#get-status-codes}"}],"id":"check-node-get-node-check","title":"Check node {#get-node-check}"}]}

,
  "codeExamples": []
}
```
| Method | Path | Description |
|--------|------|-------------|
| [GET](#get-node-check) | `/v1/nodes/check/{uid}` | Runs checks on a cluster node |

## Check node {#get-node-check}

	GET /v1/nodes/check/{int: uid}

Runs the following checks on a cluster node:

| Check name | Description |
|-----------|-------------|
| bootstrap_status | Verifies the local node's bootstrap process completed without errors. |
| services | Verifies all Redis Software services are running. |
| port_range | Verifies the [`ip_local_port_range`](https://www.kernel.org/doc/html/latest/networking/ip-sysctl.html) doesn't conflict with the ports Redis Software might assign to shards. |
| pidfiles | Verifies all active local shards have PID files. |
| capabilities | Verifies all binaries have the proper capability bits. |
| existing_sockets | Verifies sockets exist for all processes that require them. |
| host_settings | Verifies the following:<br />â¢ Linux `overcommit_memory` setting is 1.<br />â¢ `transparent_hugepage` is disabled.<br />â¢ Socket maximum connections setting `somaxconn` is 1024. |
| tcp_connectivity | Verifies this node can connect to all other alive nodes. |

#### Required permissions

| Permission name |
|-----------------|
| [view_node_check]() |

### Request {#get-request} 

#### Example HTTP request

	GET /v1/nodes/check/1


#### Request headers

| Key | Value | Description |
|-----|-------|-------------|
| Host | cnm.cluster.fqdn | Domain name |
| Accept | application/json | Accepted media type |

#### URL parameters

| Field | Type | Description |
|-------|------|-------------|
| uid | integer | The node's unique ID. |


### Response {#get-response} 

Returns a JSON object with the node's check results.

When errors occur, the server returns a JSON object with `result: false` and an `error` field that provides additional information. If an error occurs during a check, the `error` field only includes a message for the first check that fails.

Possible `error` messages:

- "bootstrap request to cnm_http failed,resp_code: ...,resp_content: ..."
- "process ... is not running or not responding (...)"
- "could not communicate with 'supervisorctl': ..."
- "connectivity check failed retrieving ports for testing"

#### Example JSON body

```json
{
    "node_uid": 1,
    "result": true
}
```

### Status codes {#get-status-codes} 

| Code | Description |
|------|-------------|
| [200 OK](https://www.rfc-editor.org/rfc/rfc9110.html#name-200-ok) | No error |
