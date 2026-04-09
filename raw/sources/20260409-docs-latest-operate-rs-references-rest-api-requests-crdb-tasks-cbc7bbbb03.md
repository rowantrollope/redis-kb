---
title: CRDB tasks requests
url: https://redis.io/docs/latest/operate/rs/references/rest-api/requests/crdb_tasks/
retrieved_utc: '2026-04-09T20:46:03.489863+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/references/rest-api/requests/crdb_tasks/index.html.md
---

# CRDB tasks requests

```json metadata
{
  "title": "CRDB tasks requests",
  "description": "Active-Active database task status requests",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[{"children":[{"id":"request-get-all-request","title":"Request {#get-all-request}"},{"id":"response-get-all-response","title":"Response {#get-all-response}"}],"id":"get-all-running-tasks-get-all-crdbtasks","title":"Get all running tasks {#get-all-crdb_tasks}"},{"children":[{"id":"request-get-request","title":"Request {#get-request}"},{"id":"response-get-response","title":"Response {#get-response}"},{"id":"status-codes-get-status-codes","title":"Status codes {#get-status-codes}"}],"id":"get-task-status-get-crdbtask","title":"Get task status {#get-crdb_task}"},{"children":[{"id":"request-post-cancel-request","title":"Request {#post-cancel-request}"},{"id":"response-post-cancel-response","title":"Response {#post-cancel-response}"}],"id":"cancel-task-post-crdbtask-cancel","title":"Cancel task {#post-crdb_task-cancel}"}]}

,
  "codeExamples": []
}
```
| Method | Path | Description |
|--------|------|-------------|
| [GET](#get-all-crdb_tasks) | `/v1/crdb_tasks` | Get all running tasks |
| [GET](#get-crdb_task) | `/v1/crdb_tasks/{task_id}` | Get the status of an executed task |
| [POST](#post-crdb_task-cancel) | `/v1/crdb_tasks/{task_id}/actions/cancel` | Cancel a running or queued task |

## Get all running tasks {#get-all-crdb_tasks}

```sh
GET /v1/crdb_tasks
```

Get all running tasks.

### Request {#get-all-request}

#### Example HTTP request

```sh
GET /v1/crdb_tasks
```

### Response {#get-all-response}

Returns a JSON array of [CRDB task objects]().

#### Status codes {#get-all-status-codes}

| Code | Description |
|------|-------------|
| [200 OK](https://www.rfc-editor.org/rfc/rfc9110.html#name-200-ok) | A list of running tasks. |
| [401 Unauthorized](https://www.rfc-editor.org/rfc/rfc9110.html#name-401-unauthorized) | Unauthorized request. Invalid credentials. |

## Get task status {#get-crdb_task}

	GET /v1/crdb_tasks/{task_id}

Get the status of an executed task.

The status of a completed task is kept for 500 seconds by default.

### Request {#get-request} 

#### Example HTTP request

    GET /v1/crdb_tasks/1

#### Request headers

| Key | Value | Description |
|-----|-------|-------------|
| X-Result-TTL | integer | Task time to live |

#### URL parameters

| Field | Type | Description |
|-------|------|-------------|
| task_id | string | Task ID |

#### Query parameters

| Field | Type | Description |
|-------|------|-------------|
| verbose | boolean | Return detailed task information (optional) |

### Response {#get-response} 

Returns a [CRDB task object]().

### Status codes {#get-status-codes} 

| Code | Description |
|------|-------------|
| [200 OK](https://www.rfc-editor.org/rfc/rfc9110.html#name-200-ok) | Task status. |
| [401 Unauthorized](https://www.rfc-editor.org/rfc/rfc9110.html#name-401-unauthorized) | Unauthorized request. Invalid credentials |
| [404 Not Found](https://www.rfc-editor.org/rfc/rfc9110.html#name-404-not-found) | Task not found. |

## Cancel task {#post-crdb_task-cancel}

```sh
POST /v1/crdb_tasks/{task_id}/actions/cancel
```

Gracefully cancels a running or queued task.

A task that already reached the commit phase cannot be canceled.

### Request {#post-cancel-request}

#### Example HTTP request

```sh
POST /v1/crdb_tasks/1/actions/cancel
```

#### URL parameters

| Field | Type | Description |
|-------|------|-------------|
| task_id | string | Task ID |

#### Query parameters

| Field | Type | Description |
|-------|------|-------------|
| force | boolean | Cancel even if the task is in the commit phase. **WARNING**: This can break the CRDB in the cluster configuration store (CCS), so use with caution. (optional) |

### Response {#post-cancel-response}

Returns a status code.

#### Status codes {#post-cancel-status-codes}

| Code | Description |
|------|-------------|
| [200 OK](https://www.rfc-editor.org/rfc/rfc9110.html#name-200-ok) | The request has been accepted. |
| [401 Unauthorized](https://www.rfc-editor.org/rfc/rfc9110.html#name-401-unauthorized) | Unauthorized request. Invalid credentials. |
| [404 Not Found](https://www.rfc-editor.org/rfc/rfc9110.html#name-404-not-found) | Task not found. |
| [406 Not Acceptable](https://www.rfc-editor.org/rfc/rfc9110.html#name-406-not-acceptable) | Task cannot be canceled. |
| [409 Conflict](https://www.rfc-editor.org/rfc/rfc9110.html#name-409-conflict) | Failed to cancel task. |
