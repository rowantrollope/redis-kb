---
title: Redis access control list (ACL) requests
url: https://redis.io/docs/latest/operate/rs/references/rest-api/requests/redis_acls/
retrieved_utc: '2026-04-09T20:46:06.675106+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/references/rest-api/requests/redis_acls/index.html.md
---

# Redis access control list (ACL) requests

```json metadata
{
  "title": "Redis access control list (ACL) requests",
  "description": "Redis access control list (ACL) requests",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[{"children":[{"id":"permissions","title":"Permissions"},{"id":"request-get-all-request","title":"Request {#get-all-request}"},{"id":"response-get-all-response","title":"Response {#get-all-response}"},{"id":"status-codes-get-all-status-codes","title":"Status codes {#get-all-status-codes}"}],"id":"get-all-redis-acls-get-all-redisacls","title":"Get all Redis ACLs {#get-all-redis_acls}"},{"children":[{"id":"permissions","title":"Permissions"},{"id":"request-get-request","title":"Request {#get-request}"},{"id":"response-get-response","title":"Response {#get-response}"},{"id":"status-codes-get-status-codes","title":"Status codes {#get-status-codes}"}],"id":"get-redis-acl-get-redisacl","title":"Get Redis ACL {#get-redis_acl}"},{"children":[{"id":"permissions","title":"Permissions"},{"id":"request-put-request","title":"Request {#put-request}"},{"id":"response-put-response","title":"Response {#put-response}"},{"id":"error-codes-put-error-codes","title":"Error codes {#put-error-codes}"},{"id":"status-codes-put-status-codes","title":"Status codes {#put-status-codes}"}],"id":"update-redis-acl-put-redisacl","title":"Update Redis ACL {#put-redis_acl}"},{"children":[{"id":"permissions","title":"Permissions"},{"id":"request-post-request","title":"Request {#post-request}"},{"id":"response-post-response","title":"Response {#post-response}"},{"id":"error-codes-post-error-codes","title":"Error codes {#post-error-codes}"},{"id":"status-codes-post-status-codes","title":"Status codes {#post-status-codes}"},{"id":"examples","title":"Examples"}],"id":"create-redis-acl-post-redisacl","title":"Create Redis ACL {#post-redis_acl}"},{"children":[{"id":"permissions","title":"Permissions"},{"id":"request-delete-request","title":"Request {#delete-request}"},{"id":"response-delete-response","title":"Response {#delete-response}"},{"id":"status-codes-delete-status-codes","title":"Status codes {#delete-status-codes}"}],"id":"delete-redis-acl-delete-redisacl","title":"Delete Redis ACL {#delete-redis_acl}"}]}

,
  "codeExamples": []
}
```
| Method | Path | Description |
|--------|------|-------------|
| [GET](#get-all-redis_acls) | `/v1/redis_acls` | Get all Redis ACLs |
| [GET](#get-redis_acl) | `/v1/redis_acls/{uid}` | Get a single Redis ACL |
| [PUT](#put-redis_acl) | `/v1/redis_acls/{uid}` | Update a Redis ACL |
| [POST](#post-redis_acl) | `/v1/redis_acls` | Create a new Redis ACL |
| [DELETE](#delete-redis_acl) | `/v1/redis_acls/{uid}` | Delete a Redis ACL |

## Get all Redis ACLs {#get-all-redis_acls}

```sh
GET /v1/redis_acls
```

Get all Redis ACL objects.

### Permissions

| Permission name | Roles |
|-----------------|-------|
| [view_all_redis_acls_info]() | admin<br />cluster_member<br />cluster_viewer<br />db_member<br />db_viewer<br />user_manager |

### Request {#get-all-request}

#### Example HTTP request

```sh
GET /v1/redis_acls
```

#### Headers

| Key | Value | Description |
|-----|-------|-------------|
| Host | cnm.cluster.fqdn | Domain name |
| Accept | application/json | Accepted media type |

### Response {#get-all-response}

Returns a JSON array of [Redis ACL objects]().

#### Example JSON body

```json
[
    {
     "uid": 1,
     "name": "Full Access",
     "acl": "+@all ~*"
    },
    {
     "uid": 2,
     "name": "Read Only",
     "acl": "+@read ~*"
    },
    {
     "uid": 3,
     "name": "Not Dangerous",
     "acl": "+@all -@dangerous ~*"
    },
    {
     "uid": 17,
     "name": "Geo",
     "acl": "~* +@geo"
    }
]
```

### Status codes {#get-all-status-codes}

| Code | Description |
|------|-------------|
| [200 OK](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.2.1) | No error |
| [501 Not Implemented](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.5.2) | Cluster doesn't support redis_acl yet. |

## Get Redis ACL {#get-redis_acl}

```sh
GET /v1/redis_acls/{int: uid}
```

Get a single Redis ACL object.

### Permissions

| Permission name | Roles |
|-----------------|-------|
| [view_redis_acl_info]() | admin<br />cluster_member<br />cluster_viewer<br />db_member<br />db_viewer<br />user_manager |

### Request {#get-request}

#### Example HTTP request

```sh
GET /v1/redis_acls/1
```

#### Headers

| Key | Value | Description |
|-----|-------|-------------|
| Host | cnm.cluster.fqdn | Domain name |
| Accept | application/json | Accepted media type |


#### URL parameters

| Field | Type | Description |
|-------|------|-------------|
| uid | integer | The object's unique ID. |

### Response {#get-response}

Returns a [Redis ACL object]().

#### Example JSON body

```json
{
     "uid": 17,
     "name": "Geo",
     "acl": "~* +@geo"
}
```

### Status codes {#get-status-codes}

| Code | Description |
|------|-------------|
| [200 OK](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.2.1) | Success. |
| [403 Forbidden](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.4.4) | Operation is forbidden. |
| [404 Not Found](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.4.5) | redis_acl does not exist. |
| [501 Not Implemented](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.5.2) | Cluster doesn't support redis_acl yet. |

## Update Redis ACL {#put-redis_acl}

```sh
PUT /v1/redis_acls/{int: uid}
```

Update an existing Redis ACL object.

### Permissions

| Permission name | Roles |
|-----------------|-------|
| [update_redis_acl]() | admin<br />user_manager |

### Request {#put-request}

#### Example HTTP request

```sh
PUT /v1/redis_acls/17
```

#### Example JSON body

```json
{
     "acl": "~* +@geo -@dangerous"
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
| dry_run |  | Validate the updated [Redis ACL object]() but don't apply the update. |

#### URL parameters

| Field | Type | Description |
|-------|------|-------------|
| uid | integer | The Redis ACL's unique ID. |

#### Request body

Include a [Redis ACL object]() with updated fields in the request body.

### Response {#put-response}

Returns the updated [Redis ACL object]().

#### Example JSON body

```json
{
     "uid": 17,
     "name": "Geo",
     "acl": "~* +@geo -@dangerous"
}
```

### Error codes {#put-error-codes}

| Code | Description |
|------|-------------|
| unsupported_resource | The cluster is not yet able to handle this resource type. This could happen in a partially upgraded cluster, where some of the nodes are still on a previous version.|
| name_already_exists | An object of the same type and name exists|
| invalid_param | A parameter has an illegal value|

### Status codes {#put-status-codes}

| Code | Description |
|------|-------------|
| [200 OK](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.2.1) | Success, redis_acl was updated. |
| [400 Bad Request](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.4.1) | Bad or missing configuration parameters. |
| [404 Not Found](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.4.5) | Attempting to change a non-existent redis_acl. |
| [409 Conflict](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.4.10) | Cannot change a read-only object |
| [501 Not Implemented](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.5.2) | Cluster doesn't support redis_acl yet. |

## Create Redis ACL {#post-redis_acl}

```sh
POST /v1/redis_acls
```

Create a new Redis ACL object.

### Permissions

| Permission name | Roles |
|-----------------|-------|
| [create_redis_acl]() | admin<br />user_manager |

### Request {#post-request}

#### Example HTTP request

```sh
POST /v1/redis_acls
```

#### Example JSON body

```json
{
     "name": "Geo",
     "acl": "~* +@geo"
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
| dry_run |  | Validate the new [Redis ACL object]() but don't apply the update. |

#### Request body

Include a [Redis ACL object]() in the request body.

### Response {#post-response}

Returns the newly created [Redis ACL object]().

#### Example JSON body

```json
{
     "uid": 17,
     "name": "Geo",
     "acl": "~* +@geo"
}
```

### Error codes {#post-error-codes}

Possible `error_code` values:

| Code | Description |
|------|-------------|
| unsupported_resource | The cluster is not yet able to handle this resource type. This could happen in a partially upgraded cluster, where some of the nodes are still on a previous version. |
| name_already_exists | An object of the same type and name exists |
| missing_field | A needed field is missing |
| invalid_param | A parameter has an illegal value |

### Status codes {#post-status-codes}

| Code | Description |
|------|-------------|
| [200 OK](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.2.1) | Success, redis_acl is created. |
| [400 Bad Request](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.4.1) | Bad or missing configuration parameters. |
| [501 Not Implemented](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.5.2) | Cluster doesn't support redis_acl yet. |

### Examples

#### cURL

```sh
curl -k -u "[username]:[password]" -X POST \
     -H 'Content-Type: application/json' \
     -d '{ "name": "Geo", "acl": "~* +@geo" }' \
     https://[host][:port]/v1/redis_acls
```

#### Python

```python
import requests
import json

url = "https://[host][:port]/v1/redis_acls"

headers = {
  'Content-Type': 'application/json'
}

payload = json.dumps({
    "name": "Geo",
    "acl": "~* +@geo"
})
auth=("[username]", "[password]")

response = requests.request("POST", url,
           auth=auth, headers=headers, payload=payload, verify=False)

print(response.text)
```

## Delete Redis ACL {#delete-redis_acl}

```sh
DELETE /v1/redis_acls/{int: uid}
```

Delete a Redis ACL object.

### Permissions

| Permission name | Roles |
|-----------------|-------|
| [delete_redis_acl]() | admin<br />user_manager |

### Request {#delete-request}

#### Example HTTP request

```sh
DELETE /v1/redis_acls/1
```

#### Headers

| Key | Value | Description |
|-----|-------|-------------|
| Host | cnm.cluster.fqdn | Domain name |
| Accept | application/json | Accepted media type |

#### URL parameters

| Field | Type | Description |
|-------|------|-------------|
| uid | integer | The redis_acl unique ID. |

### Response {#delete-response}

Returns a status code that indicates the Redis ACL deletion success or failure.

### Status codes {#delete-status-codes}

| Code | Description |
|------|-------------|
| [200 OK](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.2.1) | Success, the redis_acl is deleted. |
| [406 Not Acceptable](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.4.7) | The request is not acceptable. |
| [409 Conflict](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.4.10) | Cannot delete a read-only object |
| [501 Not Implemented](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.5.2) | Cluster doesn't support redis_acl yet. |
