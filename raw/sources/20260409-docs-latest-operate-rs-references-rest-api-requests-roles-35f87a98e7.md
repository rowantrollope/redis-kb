---
title: Roles requests
url: https://redis.io/docs/latest/operate/rs/references/rest-api/requests/roles/
retrieved_utc: '2026-04-09T20:46:07.124725+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/references/rest-api/requests/roles/index.html.md
---

# Roles requests

```json metadata
{
  "title": "Roles requests",
  "description": "Roles requests",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[{"children":[{"id":"permissions","title":"Permissions"},{"id":"request-get-all-request","title":"Request {#get-all-request}"},{"id":"response-get-all-response","title":"Response {#get-all-response}"}],"id":"get-all-roles-get-all-roles","title":"Get all roles {#get-all-roles}"},{"children":[{"id":"permissions","title":"Permissions"},{"id":"request-get-request","title":"Request {#get-request}"},{"id":"response-get-response","title":"Response {#get-response}"}],"id":"get-role","title":"Get role"},{"children":[{"id":"permissions","title":"Permissions"},{"id":"request-put-request","title":"Request {#put-request}"},{"id":"response-put-response","title":"Response {#put-response}"},{"id":"error-codes-put-error-codes","title":"Error codes {#put-error-codes}"}],"id":"update-role-put-role","title":"Update role {#put-role}"},{"children":[{"id":"permissions","title":"Permissions"},{"id":"request-post-request","title":"Request {#post-request}"},{"id":"response-post-response","title":"Response {#post-response}"},{"id":"error-codes-post-error-codes","title":"Error codes {#post-error-codes}"},{"id":"examples","title":"Examples"}],"id":"create-role-post-role","title":"Create role {#post-role}"},{"children":[{"id":"permissions","title":"Permissions"},{"id":"request-delete-request","title":"Request {#delete-request}"},{"id":"response-delete-response","title":"Response {#delete-response}"}],"id":"delete-role-delete-role","title":"Delete role {#delete-role}"}]}

,
  "codeExamples": []
}
```
| Method | Path | Description |
|--------|------|-------------|
| [GET](#get-all-roles) | `/v1/roles` | Get all roles |
| [GET](#get-role) | `/v1/roles/{uid}` | Get a single role |
| [PUT](#put-role) | `/v1/roles/{uid}` | Update an existing role |
| [POST](#post-role) | `/v1/roles` | Create a new role |
| [DELETE](#delete-role) | `/v1/roles/{uid}` | Delete a role |

## Get all roles {#get-all-roles}

```sh
GET /v1/roles
```

Get all roles' details.

### Permissions

| Permission name | Roles |
|-----------------|-------|
| [view_all_roles_info]() | admin<br />cluster_member<br />cluster_viewer<br />db_member<br />db_viewer<br />user_manager |

### Request {#get-all-request}

#### Example HTTP request

```sh
GET /v1/roles
```

#### Headers

| Key | Value | Description |
|-----|-------|-------------|
| Host | cnm.cluster.fqdn | Domain name |
| Accept | application/json | Accepted media type |

### Response {#get-all-response}

Returns a JSON array of [role objects]().

#### Example JSON body

```json
[
    {
        "uid": 1,
        "name": "Admin",
        "management": "admin"
    },
    {
        "uid": 2,
        "name": "Cluster Member",
        "management": "cluster_member"
    },
    {
        "uid": 3,
        "name": "Cluster Viewer",
        "management": "cluster_viewer"
    },
    {
        "uid": 4,
        "name": "DB Member",
        "management": "db_member"
    },
    {
        "uid": 5,
        "name": "DB Viewer",
        "management": "db_viewer"
    },
    {
        "uid": 6,
        "name": "None",
        "management": "none"
    },
    {
        "uid": 17,
        "name": "DBA",
        "management": "admin"
    }
]
```

#### Status codes {#get-all-status-codes}

| Code | Description |
|------|-------------|
| [200 OK](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.2.1) | No error |
| [501 Not Implemented](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.5.2) | Cluster doesn't support roles yet. |

## Get role

```sh
GET /v1/roles/{int: uid}
```

Get the details of a single role.

### Permissions

| Permission name | Roles |
|-----------------|-------|
| [view_role_info]() | admin<br />cluster_member<br />cluster_viewer<br />db_member<br />db_viewer<br />user_manager |

### Request {#get-request}

#### Example HTTP request

```sh
GET /v1/roles/1
```


#### Headers

| Key | Value | Description |
|-----|-------|-------------|
| Host | cnm.cluster.fqdn | Domain name |
| Accept | application/json | Accepted media type |


#### URL parameters

| Field | Type | Description |
|-------|------|-------------|
| uid | integer | The role's unique ID. |

### Response {#get-response}

Returns a [role object]().

#### Example JSON body

```json
{
     "uid": 17,
     "name": "DBA",
     "management": "admin"
}
```

#### Status codes {#get-status-codes}

| Code | Description |
|------|-------------|
| [200 OK](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.2.1) | Success. |
| [403 Forbidden](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.4.4) | Operation is forbidden. |
| [404 Not Found](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.4.5) | Role does not exist. |
| [501 Not Implemented](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.5.2) | Cluster doesn't support roles yet. |

## Update role {#put-role}

```sh
PUT /v1/roles/{int: uid}
```

Update an existing role's details.

### Permissions

| Permission name | Roles |
|-----------------|-------|
| [update_role]() | admin<br />user_manager |

### Request {#put-request}

#### Example HTTP request

```sh
PUT /v1/roles/17
```

#### Example JSON body

```json
{
     "management": "cluster_member"
}
```

#### Headers

| Key | Value | Description |
|-----|-------|-------------|
| Host | cnm.cluster.fqdn | Domain name |
| Accept | application/json | Accepted media type |

#### Query parameters

| Field   | Type | Description |
|---------|------|---------------|
| dry_run |  | Validate the updated [role object]() but don't apply the update. |

#### URL parameters

| Field | Type | Description |
|-------|------|-------------|
| uid | integer | The role's unique ID. |

#### Body

Include a [role object]() with updated fields in the request body.

### Response {#put-response}

Returns a [role object]() with the updated fields.

#### Example JSON body

```json
{
     "uid": 17,
     "name": "DBA",
     "management": "cluster_member"
}
```

### Error codes {#put-error-codes}

Possible `error_code` values:

| Code | Description |
|------|-------------|
| unsupported_resource | The cluster is not yet able to handle this resource type. This could happen in a partially upgraded cluster, where some of the nodes are still on a previous version.|
| name_already_exists | An object of the same type and name exists.|
| change_last_admin_role_not_allowed | At least one user with admin role should exist.|

#### Status codes {#put-status-codes}

| Code | Description |
|------|-------------|
| [200 OK](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.2.1) | Success, role is created. |
| [400 Bad Request](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.4.1) | Bad or missing configuration parameters. |
| [404 Not Found](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.4.5) | Attempting to change a non-existant role. |
| [501 Not Implemented](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.5.2) | Cluster doesn't support roles yet. |

## Create role {#post-role}

```sh
POST /v1/roles
```

Create a new role.

### Permissions

| Permission name | Roles |
|-----------------|-------|
| [create_role]() | admin<br />user_manager |

### Request {#post-request}

#### Example HTTP request

```sh
POST /v1/roles
```

#### Example JSON body

```json
{
     "name": "DBA",
     "management": "admin"
}
```

#### Headers

| Key | Value | Description |
|-----|-------|-------------|
| Host | cnm.cluster.fqdn | Domain name |
| Accept | application/json | Accepted media type |

#### Query parameters

| Field   | Type | Description |
|---------|------|---------------|
| dry_run |  | Validate the new [role object]() but don't apply the update. |

#### Body

Include a [role object]() in the request body.

### Response {#post-response}

Returns the newly created [role object]().

#### Example JSON body

```json
{
     "uid": 17,
     "name": "DBA",
     "management": "admin"
}
```

### Error codes {#post-error-codes}

Possible `error_code`values:

| Code | Description |
|------|-------------|
| unsupported_resource | The cluster is not yet able to handle this resource type. This could happen in a partially upgraded cluster, where some of the nodes are still on a previous version. |
| name_already_exists | An object of the same type and name exists |
| missing_field | A needed field is missing |

#### Status codes {#post-status-codes}

| Code | Description |
|------|-------------|
| [200 OK](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.2.1) | Success, role is created. |
| [400 Bad Request](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.4.1) | Bad or missing configuration parameters. |
| [501 Not Implemented](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.5.2) | Cluster doesn't support roles yet. |

### Examples

#### cURL

```sh
curl -k -u "[username]:[password]" -X POST \
     -H 'Content-Type: application/json' \
     -d '{ "name": "DBA", "management": "admin" }' \
     https://[host][:port]/v1/roles
```

#### Python

```python
import requests
import json

url = "https://[host][:port]/v1/roles"

headers = {
  'Content-Type': 'application/json'
}

payload = json.dumps({
    "name": "DBA",
    "management": "admin"
})
auth=("[username]", "[password]")

response = requests.request("POST", url,
           auth=auth, headers=headers, payload=payload, verify=False)

print(response.text)
```

## Delete role {#delete-role}

```sh
DELETE /v1/roles/{int: uid}
```

Delete a role object.

### Permissions

| Permission name | Roles |
|-----------------|-------|
| [delete_role]() | admin<br />user_manager |

### Request {#delete-request}

#### Example HTTP request

```sh
DELETE /v1/roles/1
```

#### Headers

| Key | Value | Description |
|-----|-------|-------------|
| Host | cnm.cluster.fqdn | Domain name |
| Accept | application/json | Accepted media type |


#### URL parameters

| Field | Type | Description |
|-------|------|-------------|
| uid | integer | The role unique ID. |

### Response {#delete-response}

Returns a status code to indicate role deletion success or failure.

#### Status codes {#delete-status-codes}

| Code | Description |
|------|-------------|
| [200 OK](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.2.1) | Success, the role is deleted. |
| [404 Not Found](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.4.5) | Role does not exist. |
| [406 Not Acceptable](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.4.7) | The request is not acceptable. |
| [501 Not Implemented](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.5.2) | Cluster doesn't support roles yet. |
