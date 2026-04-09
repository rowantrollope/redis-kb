---
title: Change password hashing algorithm requests
url: https://redis.io/docs/latest/operate/rs/references/rest-api/requests/cluster/change_password_hashing_algorithm/
retrieved_utc: '2026-04-09T20:46:02.467347+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/references/rest-api/requests/cluster/change_password_hashing_algorithm/index.html.md
---

# Change password hashing algorithm requests

```json metadata
{
  "title": "Change password hashing algorithm requests",
  "description": "REST API requests to change the hashing algorithm for user passwords.",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[{"children":[{"id":"request-patch-request","title":"Request {#patch-request}"},{"id":"response-patch-response","title":"Response {#patch-response}"},{"id":"status-codes-patch-status-codes","title":"Status codes {#patch-status-codes}"}],"id":"change-password-hashing-algorithm-patch-change-password-hashing-algorithm","title":"Change password hashing algorithm {#patch-change-password-hashing-algorithm}"}]}

,
  "codeExamples": []
}
```
| Method | Path | Description |
|--------|------|-------------|
| [PATCH](#patch-change-password-hashing-algorithm) | `/v1/cluster/change_password_hashing_algorithm` | Change the hashing policy for user passwords |

## Change password hashing algorithm {#patch-change-password-hashing-algorithm}

	PATCH /v1/cluster/change_password_hashing_algorithm

Changes the password hashing algorithm for the entire cluster. When you change the hashing algorithm, it rehashes the administrator password and passwords for all users, including default users.

The hashing algorithm options are `SHA-256` or `PBKDF2`. The default hashing algorithm is `SHA-256`.

#### Required permissions

| Permission name |
|-----------------|
| [update_cluster]() |

### Request {#patch-request} 

#### Example HTTP request

	PATCH /v1/cluster/change_password_hashing_algorithm

#### Example JSON body

```json
{ "algorithm": "PBKDF2" }
```

#### Request headers

| Key | Value | Description |
|-----|-------|-------------|
| Host | cnm.cluster.fqdn | Domain name |
| Accept | application/json | Accepted media type |

#### Request body

Include a JSON object `{ "algorithm": "<option>" }` in the request body. The hashing algorithm options are `SHA-256` or `PBKDF2`.

### Response {#patch-response} 

Returns a status code that indicates the success or failure of the update.

### Status codes {#patch-status-codes} 

| Code | Description |
|------|-------------|
| [200 OK](https://www.rfc-editor.org/rfc/rfc9110.html#name-200-ok) | Success |
| [400 Bad Request](https://www.rfc-editor.org/rfc/rfc9110.html#name-400-bad-request) | Supported algorithm must be provided, or this algorithm is already set |
