---
title: Database passwords requests
url: https://redis.io/docs/latest/operate/rs/references/rest-api/requests/bdbs/passwords/
retrieved_utc: '2026-04-09T20:46:06.095657+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/references/rest-api/requests/bdbs/passwords/index.html.md
---

# Database passwords requests

```json metadata
{
  "title": "Database passwords requests",
  "description": "Database password requests",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[{"children":[{"id":"request-put-request","title":"Request {#put-request}"},{"id":"response-put-response","title":"Response {#put-response}"},{"id":"status-codes-put-status-codes","title":"Status codes {#put-status-codes}"}],"id":"update-database-password-put-bdbs-password","title":"Update database password {#put-bdbs-password}"},{"children":[{"id":"request-post-request","title":"Request {#post-request}"},{"id":"response-post-response","title":"Response {#post-response}"},{"id":"status-codes-post-status-codes","title":"Status codes {#post-status-codes}"}],"id":"add-database-password-post-bdbs-password","title":"Add database password {#post-bdbs-password}"},{"children":[{"id":"request-delete-request","title":"Request {#delete-request}"},{"id":"response-delete-response","title":"Response {#delete-response}"},{"id":"status-codes-delete-status-codes","title":"Status codes {#delete-status-codes}"}],"id":"delete-database-password-delete-bdbs-password","title":"Delete database password {#delete-bdbs-password}"}]}

,
  "codeExamples": []
}
```
| Method | Path | Description |
|--------|------|-------------|
| [PUT](#put-bdbs-password) | `/v1/bdbs/{uid}/passwords` | Update database password |
| [POST](#post-bdbs-password) | `/v1/bdbs/{uid}/passwords` | Add database password |
| [DELETE](#delete-bdbs-password) | `/v1/bdbs/{uid}/passwords` | Delete database password |

## Update database password {#put-bdbs-password}

	PUT /v1/bdbs/{int: uid}/passwords

Set a single password for the bdb's default user (i.e., for `AUTH`&nbsp;`<password>` authentications).

#### Required permissions

| Permission name |
|-----------------|
| [update_bdb]() |

### Request {#put-request} 

#### Example HTTP request

	PUT /v1/bdbs/1/passwords 

#### Example JSON body

```json
{
    "password": "new password"
}
```

The above request resets the password of the bdb to ânew passwordâ.

#### Request headers

| Key | Value | Description |
|-----|-------|-------------|
| Host | cnm.cluster.fqdn | Domain name |
| Accept | application/json | Accepted media type |


#### URL parameters

| Field | Type | Description |
|-------|------|-------------|
| uid | integer | The unique ID of the database to update the password. |


#### Request body

| Field | Type | Description |
|-------|------|-------------|
| password | string | New password |

### Response {#put-response} 

Returns a status code that indicates password update success or failure.

### Status codes {#put-status-codes} 

| Code | Description |
|------|-------------|
| [200 OK](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.2.1) | The password was changed. |
| [404 Not Found](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.4.5) | A nonexistent database. |
| [406 Not Acceptable](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.4.7) | Invalid configuration parameters provided. |

## Add database password {#post-bdbs-password}

	POST /v1/bdbs/{int: uid}/passwords

Add a password to the bdb's default user (i.e., for `AUTH`&nbsp;`<password>` authentications).

#### Required permissions

| Permission name |
|-----------------|
| [update_bdb]() |

### Request {#post-request} 

#### Example HTTP request

	POST /v1/bdbs/1/passwords 

#### Example JSON body

```json
{
    "password": "password to add"
}
```

The above request adds a password to the bdb.

#### Request headers

| Key | Value | Description |
|-----|-------|-------------|
| Host | cnm.cluster.fqdn | Domain name |
| Accept | application/json | Accepted media type |

#### URL parameters

| Field | Type | Description |
|-------|------|-------------|
| uid | integer | The unique ID of the database to add password. |

#### Request body

| Field | Type | Description |
|-------|------|-------------|
| password | string | Password to add |

### Response {#post-response} 

Returns a status code that indicates password creation success or failure.

### Status codes {#post-status-codes} 

| Code | Description |
|------|-------------|
| [200 OK](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.2.1) | The password was added. |
| [404 Not Found](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.4.5) | A nonexistent database. |
| [406 Not Acceptable](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.4.7) | Invalid configuration parameters provided. |

## Delete database password {#delete-bdbs-password}

	DELETE /v1/bdbs/{int: uid}/passwords

Delete a password from the bdb's default user (i.e., for `AUTH`&nbsp;`<password>` authentications).

#### Required permissions

| Permission name |
|-----------------|
| [update_bdb]() |

### Request {#delete-request} 

#### Example HTTP request

	DELETE /v1/bdbs/1/passwords 

#### Example JSON body

```json
{
    "password": "password to delete"
}
```

The above request deletes a password from the bdb.

#### Request headers

| Key | Value | Description |
|-----|-------|-------------|
| Host | cnm.cluster.fqdn | Domain name |
| Accept | application/json | Accepted media type |

#### URL parameters

| Field | Type | Description |
|-------|------|-------------|
| uid | integer | The unique ID of the database to delete password. |

#### Request body

| Field | Type | Description |
|-------|------|-------------|
| password | string | Password to delete |

### Response {#delete-response} 

Returns a status code that indicates password deletion success or failure.

### Status codes {#delete-status-codes} 

| Code | Description |
|------|-------------|
| [200 OK](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.2.1) | The password was deleted. |
| [404 Not Found](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.4.5) | A nonexistent database. |
| [406 Not Acceptable](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.4.7) | Invalid configuration parameters provided. |
