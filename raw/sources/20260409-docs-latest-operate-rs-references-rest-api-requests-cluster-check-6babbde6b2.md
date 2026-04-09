---
title: Check all cluster nodes requests
url: https://redis.io/docs/latest/operate/rs/references/rest-api/requests/cluster/check/
retrieved_utc: '2026-04-09T20:46:02.516357+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/references/rest-api/requests/cluster/check/index.html.md
---

# Check all cluster nodes requests

```json metadata
{
  "title": "Check all cluster nodes requests",
  "description": "Requests that run checks on all cluster nodes.",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[{"children":[{"id":"request-get-request","title":"Request {#get-request}"},{"id":"response-get-response","title":"Response {#get-response}"},{"id":"status-codes-get-status-codes","title":"Status codes {#get-status-codes}"}],"id":"check-all-nodes-get-cluster-check","title":"Check all nodes {#get-cluster-check}"}]}

,
  "codeExamples": []
}
```
| Method | Path | Description |
|--------|------|-------------|
| [GET](#get-cluster-check) | `/v1/cluster/check` | Runs checks on all cluster nodes |

## Check all nodes {#get-cluster-check}

	GET /v1/cluster/check

Runs the following checks on all cluster nodes:

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
| [view_all_nodes_checks]() |

### Request {#get-request} 

#### Example HTTP request

	GET /v1/cluster/check


#### Request headers

| Key | Value | Description |
|-----|-------|-------------|
| Host | cnm.cluster.fqdn | Domain name |
| Accept | application/json | Accepted media type |


### Response {#get-response} 

Returns a JSON array with results from all nodes.

When errors occur, the server returns a JSON object with `result: false` and an `error` field that provides additional information for each node that had an error. If an error occurs during a check, the `error` field only includes a message for the first check that fails on each node.

Possible `error` messages:

- "bootstrap request to cnm_http failed,resp_code: ...,resp_content: ..."
- "process ... is not running or not responding (...)"
- "could not communicate with 'supervisorctl': ..."
- "connectivity check failed retrieving ports for testing"

#### Example JSON body

```json
{
  "cluster_test_result": false,
  "nodes": [
    {
      "node_uid": "1",
      "result": true
    },
    {
      "node_uid": "2",
      "result": true
    },
    {
      "node_uid": "3",
      "result": false,
      "error": "process alert_mgr is not running or not responding ([Errno 111] Connection refused)"
    }
  ]
}
```

### Status codes {#get-status-codes} 

| Code | Description |
|------|-------------|
| [200 OK](https://www.rfc-editor.org/rfc/rfc9110.html#name-200-ok) | No error |
