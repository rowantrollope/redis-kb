---
title: Resume database traffic requests
url: https://redis.io/docs/latest/operate/rs/references/rest-api/requests/bdbs/actions/resume_traffic/
retrieved_utc: '2026-04-09T20:46:07.073505+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/references/rest-api/requests/bdbs/actions/resume_traffic/index.html.md
---

# Resume database traffic requests

```json metadata
{
  "title": "Resume database traffic requests",
  "description": "REST API requests to resume traffic for a database",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[{"children":[{"id":"request-post-request","title":"Request {#post-request}"},{"id":"response-post-response","title":"Response {#post-response}"}],"id":"resume-database-traffic-post-bdbs-actions-resume-traffic","title":"Resume database traffic {#post-bdbs-actions-resume-traffic}"}]}

,
  "codeExamples": []
}
```
| Method | Path | Description |
|--------|------|-------------|
| [POST](#post-bdbs-actions-resume-traffic) | `/v1/bdbs/{uid}/actions/resume_traffic` | Resume database traffic |

## Resume database traffic {#post-bdbs-actions-resume-traffic}

```sh
POST /v1/bdbs/{int: uid}/actions/resume_traffic
```

Resume traffic handling for the database.

Use this action to resume read and write traffic on a database, where traffic was previously paused using the [`stop_traffic`]() action.

#### Required permissions

| Permission name | Roles |
|-----------------|-------|
| [update_bdb_with_action]() | admin<br />cluster_member<br />db_member |

### Request {#post-request}

#### Example HTTP request

```sh
POST /v1/bdbs/1/actions/resume_traffic
```

#### URL parameters

| Field | Type | Description |
|-------|------|-------------|
| uid | integer | The unique ID of the database. |

### Response {#post-response}

Returns a JSON object with an `action_uid`. You can track the action's progress with a [`GET /v1/actions/<action_uid>`]() request.

#### Status codes {#post-status-codes}

| Code | Description |
|------|-------------|
| [200 OK](https://www.rfc-editor.org/rfc/rfc9110.html#name-200-ok) | The request is accepted and is being processed. The database state will be `active-change-pending` until the request has been fully processed. |
| [404 Not Found](https://www.rfc-editor.org/rfc/rfc9110.html#name-404-not-found) | Attempting to perform an action on a nonexistent database. |
| [409 Conflict](https://www.rfc-editor.org/rfc/rfc9110.html#name-409-conflict) | Attempting to change a database while it is busy with another configuration change. This is a temporary condition, and the request should be reattempted later. |
