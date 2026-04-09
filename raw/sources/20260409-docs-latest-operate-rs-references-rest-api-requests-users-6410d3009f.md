---
title: Users requests
url: https://redis.io/docs/latest/operate/rs/references/rest-api/requests/users/
retrieved_utc: '2026-04-09T20:45:36.504287+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/references/rest-api/requests/users/index.html.md
---

# Users requests

```json metadata
{
  "title": "Users requests",
  "description": "User requests",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[{"children":[{"id":"permissions","title":"Permissions"},{"id":"request-get-all-request","title":"Request {#get-all-request}"},{"id":"response-get-all-response","title":"Response {#get-all-response}"},{"id":"status-codes-get-all-status-codes","title":"Status codes {#get-all-status-codes}"}],"id":"get-all-users-get-all-users","title":"Get all users {#get-all-users}"},{"children":[{"id":"permissions","title":"Permissions"},{"id":"request-get-request","title":"Request {#get-request}"},{"id":"response-get-response","title":"Response {#get-response}"},{"id":"status-codes-get-status-codes","title":"Status codes {#get-status-codes}"}],"id":"get-user-get-user","title":"Get user {#get-user}"},{"children":[{"id":"permissions","title":"Permissions"},{"id":"request-put-request","title":"Request {#put-request}"},{"id":"response-put-response","title":"Response {#put-response}"},{"id":"error-codes-put-error-codes","title":"Error codes {#put-error-codes}"},{"id":"status-codes-put-status-codes","title":"Status codes {#put-status-codes}"}],"id":"update-user-put-user","title":"Update user {#put-user}"},{"children":[{"id":"permissions","title":"Permissions"},{"id":"request-post-request","title":"Request {#post-request}"},{"id":"response-post-response","title":"Response {#post-response}"},{"id":"error-codes-post-error-codes","title":"Error codes {#post-error-codes}"},{"id":"status-codes-post-status-codes","title":"Status codes {#post-status-codes}"},{"id":"examples","title":"Examples"}],"id":"create-user-post-user","title":"Create user {#post-user}"},{"children":[{"id":"permissions","title":"Permissions"},{"id":"request-delete-request","title":"Request {#delete-request}"},{"id":"response-delete-response","title":"Response {#delete-response}"},{"id":"status-codes-delete-status-codes","title":"Status codes {#delete-status-codes}"}],"id":"delete-user-delete-user","title":"Delete user {#delete-user}"}]}

,
  "codeExamples": []
}
```
| Method | Path | Description |
|--------|------|-------------|
| [GET](#get-all-users) | `/v1/users` | Get all users |
| [GET](#get-user) | `/v1/users/{uid}` | Get a single user |
| [PUT](#put-user) | `/v1/users/{uid}` | Update a user's configuration |
| [POST](#post-user) | `/v1/users` | Create a new user |
| [DELETE](#delete-user) | `/v1/users/{uid}` | Delete a user |

## Get all users {#get-all-users}

```sh
GET /v1/users
```

Get a list of all users.

### Permissions

| Permission name | Roles |
|-----------------|-------|
| [view_all_users_info]() | admin<br />user_manager |

### Request {#get-all-request}

#### Example HTTP request

```sh
GET /v1/users
```

#### Headers

| Key | Value | Description |
|-----|-------|-------------|
| Host | cnm.cluster.fqdn | Domain name |
| Accept | application/json | Accepted media type |

### Response {#get-all-response}

Returns a JSON array of [user objects]().

#### Example JSON body

```json
[
    {
        "uid": 1,
        "password_issue_date": "2017-03-02T09:43:34Z",
        "email": "user@example.com",
        "name": "John Doe",
        "email_alerts": true,
        "bdbs_email_alerts": ["1","2"],
        "role": "admin",
        "auth_method": "regular",
        "status": "active"
    },
    {
        "uid": 2,
        "password_issue_date": "2017-03-02T09:43:34Z",
        "email": "user2@example.com",
        "name": "Jane Poe",
        "email_alerts": true,
        "role": "db_viewer",
        "auth_method": "regular",
        "status": "active"
    }
]
```

### Status codes {#get-all-status-codes}

| Code | Description |
|------|-------------|
| [200 OK](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.2.1) | No error |

## Get user {#get-user}

```sh
GET /v1/users/{int: uid}
```

Get a single user's details.

### Permissions

| Permission name | Roles |
|-----------------|-------|
| [view_user_info]() | admin<br />user_manager |

### Request {#get-request}

#### Example HTTP request

```sh
GET /v1/users/1
```

#### Headers

| Key | Value | Description |
|-----|-------|-------------|
| Host | cnm.cluster.fqdn | Domain name |
| Accept | application/json | Accepted media type |

#### URL parameters

| Field | Type | Description |
|-------|------|-------------|
| uid | integer | The user's unique ID |

### Response {#get-response}

Returns a [user object]() that contains the details for the specified user ID.

#### Example JSON body

```json
{
    "uid": 1,
    "password_issue_date": "2017-03-07T15:11:08Z",
    "role": "db_viewer",
    "email_alerts": true,
    "bdbs_email_alerts": ["1","2"],
    "email": "user@example.com",
    "name": "John Doe",
    "auth_method": "regular",
    "status": "active"
}
```

### Status codes {#get-status-codes}

| Code | Description |
|------|-------------|
| [200 OK](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.2.1) | Success. |
| [403 Forbidden](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.4.4) | Operation is forbidden. |
| [404 Not Found](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.4.5) | User does not exist. |

## Update user {#put-user}

```sh
PUT /v1/users/{int: uid}
```

Update an existing user's configuration.

### Permissions

| Permission name | Roles |
|-----------------|-------|
| [update_user]() | admin<br />user_manager |

Any user can change their own name, password, or alert preferences.

### Request {#put-request}

#### Example HTTP request

```sh
PUT /v1/users/1
```

#### Example JSON body

```json
{
     "email_alerts": false,
     "role_uids": [ 2, 4 ]
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
| dry_run |  | Validate the updated [user object]() but don't apply the update. |

#### URL parameters

| Field | Type | Description |
|-------|------|-------------|
| uid | integer | The user's unique ID |


#### Request body

Include a [user object]() with updated fields in the request body.

### Response {#put-response}

Returns the updated [user object]().

#### Example JSON body

```json
{
     "uid": 1,
     "password_issue_date": "2017-03-07T15:11:08Z",
     "email": "user@example.com",
     "name": "Jane Poe",
     "email_alerts": false,
     "role": "db_viewer",
     "role_uids": [ 2, 4 ],
     "auth_method": "regular"
}
```


For [RBAC-enabled clusters](), the returned user details include `role_uids` instead of `role`.


### Error codes {#put-error-codes}

When errors are reported, the server may return a JSON object with    `error_code` and `message` field that provide additional information.    The following are possible `error_code` values:

| Code | Description |
|------|-------------|
| password_not_complex | The given password is not complex enough (Only works when the password_complexity feature is enabled).|
| new_password_same_as_current | The given new password is identical to the old password.|
| email_already_exists | The given email is already taken.|
| change_last_admin_role_not_allowed | At least one user with admin role should exist.|

### Status codes {#put-status-codes}

| Code | Description |
|------|-------------|
| [200 OK](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.2.1) | Success, the user is updated. |
| [400 Bad Request](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.4.1) | Bad or missing configuration parameters. |
| [404 Not Found](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.4.5) | Attempting to change a non-existing user. |
| [406 Not Acceptable](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.4.7) | The requested configuration is invalid. |

## Create user {#post-user}

```sh
POST /v1/users
```

Create a new user.

### Permissions

| Permission name | Roles |
|-----------------|-------|
| [create_new_user]() | admin<br />user_manager |

### Request {#post-request}

#### Example HTTP request

```sh
POST /v1/users
```

#### Headers

| Key | Value | Description |
|-----|-------|-------------|
| Host | cnm.cluster.fqdn | Domain name |
| Accept | application/json | Accepted media type |

#### Query parameters

| Field   | Type | Description |
|---------|------|---------------|
| dry_run |  | Validate the new [user object]() but don't apply the update. |

#### Body

Include a single [user object]() in the request body. The user object must have an email, password, and role.


For [RBAC-enabled clusters](), use `role_uids` instead of `role` in the request body.


`email_alerts` can be configured either as:

- `true` - user will receive alerts for all databases configured in `bdbs_email_alerts`. The user will receive alerts for all databases by default if `bdbs_email_alerts` is not configured. `bdbs_email_alerts` can be a list of database UIDs or `[âallâ]` meaning all databases.

- `false` - user will not receive alerts for any databases

##### Example JSON body

```json
{
     "email": "newuser@example.com",
     "password": "my-password",
     "name": "Pat Doe",
     "email_alerts": true,
     "bdbs_email_alerts": ["1","2"],
     "role_uids": [ 3, 4 ],
     "auth_method": "regular"
}
```

### Response {#post-response}

Returns the newly created [user object]().

#### Example JSON body

```json
{
     "uid": 1,
     "password_issue_date": "2017-03-07T15:11:08Z",
     "email": "newuser@example.com",
     "name": "Pat Doe",
     "email_alerts": true,
     "bdbs_email_alerts": ["1","2"],
     "role": "db_viewer",
     "role_uids": [ 3, 4 ],
     "auth_method": "regular"
}
```

### Error codes {#post-error-codes}

When errors are reported, the server may return a JSON object with `error_code` and `message` field that provide additional information.

The following are possible `error_code` values:

| Code | Description |
|------|-------------|
| password_not_complex | The given password is not complex enough (Only works when the password_complexity feature is enabled).|
| email_already_exists | The given email is already taken.|
| name_already_exists | The given name is already taken.|

### Status codes {#post-status-codes}

| Code | Description |
|------|-------------|
| [200 OK](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.2.1) | Success, user is created. |
| [400 Bad Request](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.4.1) | Bad or missing configuration parameters. |
| [409 Conflict](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.4.10) | User with the same email already exists. |

### Examples

#### cURL

```sh
$ curl -k -X POST -u '[username]:[password]' \
       -H 'Content-Type: application/json' \
       -d '{ "email": "newuser@example.com", \
           "password": "my-password", \
           "name": "Pat Doe", \
           "email_alerts": true, \
           "bdbs_email_alerts": ["1","2"], \
           "role_uids": [ 3, 4 ], \
           "auth_method": "regular" }' \
       'https://[host][:port]/v1/users'
```

#### Python

```python
import requests
import json

url = "https://[host][:port]/v1/users"
auth = ("[username]", "[password]")

payload = json.dumps({
  "email": "newuser@example.com",
  "password": "my-password",
  "name": "Pat Doe",
  "email_alerts": True,
  "bdbs_email_alerts": [
    "1",
    "2"
  ],
  "role_uids": [
    3,
    4
  ],
  "auth_method": "regular"
})

headers = {
  'Content-Type': 'application/json'
}

response = requests.request("POST", url, auth=auth, headers=headers, data=payload, verify=False)

print(response.text)
```

## Delete user {#delete-user}

```sh
DELETE /v1/users/{int: uid}
```

Delete a user.

### Permissions

| Permission name | Roles |
|-----------------|-------|
| [delete_user]() | admin<br />user_manager |

### Request {#delete-request}

#### Example HTTP request

```sh
DELETE /v1/users/1
```

#### Headers

| Key | Value | Description |
|-----|-------|-------------|
| Host | cnm.cluster.fqdn | Domain name |
| Accept | application/json | Accepted media type |

#### URL parameters

| Field | Type | Description |
|-------|------|-------------|
| uid | integer | The user's unique ID |

### Response {#delete-response}

Returns a status code to indicate the success or failure of the user deletion.

### Status codes {#delete-status-codes}

| Code | Description |
|------|-------------|
| [200 OK](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.2.1) | Success, the user is deleted. |
| [406 Not Acceptable](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.4.7) | The request is not acceptable. |
