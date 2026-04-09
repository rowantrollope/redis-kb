---
title: Database availability requests
url: https://redis.io/docs/latest/operate/rs/references/rest-api/requests/bdbs/availability/
retrieved_utc: '2026-04-09T20:46:01.992975+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/references/rest-api/requests/bdbs/availability/index.html.md
---

# Database availability requests

```json metadata
{
  "title": "Database availability requests",
  "description": "REST API requests to check database availability",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[{"children":[{"id":"permissions","title":"Permissions"},{"id":"request-get-endpoint-request","title":"Request {#get-endpoint-request}"},{"id":"response-get-endpoint-response","title":"Response {#get-endpoint-response}"},{"id":"error-codes-get-endpoint-error-codes","title":"Error codes {#get-endpoint-error-codes}"},{"id":"status-codes-get-endpoint-status-codes","title":"Status codes {#get-endpoint-status-codes}"}],"id":"get-database-endpoint-availability-get-db-endpoint-availability","title":"Get database endpoint availability {#get-db-endpoint-availability}"},{"children":[{"id":"permissions","title":"Permissions"},{"id":"request-get-db-request","title":"Request {#get-db-request}"},{"id":"response-get-db-response","title":"Response {#get-db-response}"},{"id":"error-codes-get-db-error-codes","title":"Error codes {#get-db-error-codes}"},{"id":"status-codes-get-db-status-codes","title":"Status codes {#get-db-status-codes}"}],"id":"get-database-availability-get-db-availability","title":"Get database availability {#get-db-availability}"}]}

,
  "codeExamples": []
}
```
| Method | Path | Description |
|--------|------|-------------|
| [GET](#get-db-endpoint-availability) | `/v1/local/bdbs/{uid}/endpoint/availability` | Verifies local database endpoint availability |
| [GET](#get-db-availability) | `/v1/bdbs/{uid}/availability` | Verifies database availability |

## Get database endpoint availability {#get-db-endpoint-availability}

```sh
GET /v1/local/bdbs/{uid}/endpoint/availability
```

Verifies the local database endpoint is available. This request does not redirect to the primary node.

### Permissions

| Permission name | Roles |
|-----------------|-------|
| [view_bdb_info]() | admin<br />cluster_member<br />cluster_viewer<br />db_member<br />db_viewer<br />user_manager |

### Request {#get-endpoint-request}

#### Example HTTP requests

To check database endpoint availability without any additional checks:

```sh
GET /v1/local/bdbs/1/endpoint/availability
```

To perform a lag-aware database endpoint availability check using the cluster's default lag tolerance threshold:

```sh
GET /v1/local/bdbs/1/endpoint/availability?extend_check=lag
```

To perform a lag-aware database endpoint availability check and override the cluster's default lag tolerance threshold:

```sh
GET /v1/local/bdbs/1/endpoint/availability?extend_check=lag&availability_lag_tolerance_ms=100
```

#### Headers

| Key | Value | Description |
|-----|-------|-------------|
| Host | cnm.cluster.fqdn | Domain name |
| Accept | application/json | Accepted media type |

#### URL parameters

| Field | Type | Description |
|-------|------|-------------|
| uid | integer | The unique ID of the database. |

#### Query parameters

| Field | Type | Description |
|-------|------|-------------|
| extend_check | list of comma-separated strings | List of additional availability checks to perform (optional)<br />Values:<br />**lag**: Enables lag-aware checks to assess replication health. Determines if a replica is sufficiently synced with the primary for failover/failback scenarios. |
| availability_lag_tolerance_ms | integer | Overrides the cluster's default lag tolerance threshold when using `extend_check=lag`. Recommended value: 100 milliseconds. |

### Response {#get-endpoint-response}

Returns the status code `200 OK` if the local database endpoint is available.

If the local database endpoint is unavailable, returns an error status code and a JSON object that contains `error_code` and `description` fields.

### Error codes {#get-endpoint-error-codes}

When errors are reported, the server may return a JSON object with
`error_code` and `description` fields that provide additional information.
The following are possible `error_code` values:

| Code | Description |
|------|-------------|
| no_quorum | Master healthcheck failed (no quorum in the cluster) |
| db_not_found | Database does not exist in the cluster |
| bdb_endpoint_unavailable | Local database endpoint is not available | 

### Status codes {#get-endpoint-status-codes}

| Code | Description |
|------|-------------|
| [200 OK](https://www.rfc-editor.org/rfc/rfc9110.html#name-200-ok) | Database endpoint is available. |
| [400 Bad Request](https://www.rfc-editor.org/rfc/rfc9110.html#name-400-bad-request) | Invalid schema. |
| [404 Not Found](https://www.rfc-editor.org/rfc/rfc9110.html#name-404-not-found) | Database not found. |
| [503 Service Unavailable](https://www.rfc-editor.org/rfc/rfc9110.html#name-503-service-unavailable) | Database endpoint is unavailable. |


## Get database availability {#get-db-availability}

```sh
GET /v1/bdbs/{uid}/availability
```

Gets the availability status of a database.

- If the OSS Cluster API is enabled, verifies all endpoints for this database are available.

- Otherwise, verifies the database has at least one available endpoint.

### Permissions

| Permission name | Roles |
|-----------------|-------|
| [view_bdb_info]() | admin<br />cluster_member<br />cluster_viewer<br />db_member<br />db_viewer<br />user_manager |

### Request {#get-db-request}

#### Example HTTP requests


To check database availability without any additional checks:

```sh
GET /v1/bdbs/1/availability
```

To perform a lag-aware database availability check using the cluster's default lag tolerance threshold:

```sh
GET /v1/bdbs/1/availability?extend_check=lag
```

To perform a lag-aware database availability check and override the cluster's default lag tolerance threshold:

```sh
GET /v1/bdbs/1/availability?extend_check=lag&availability_lag_tolerance_ms=100
```

#### Headers

| Key | Value | Description |
|-----|-------|-------------|
| Host | cnm.cluster.fqdn | Domain name |
| Accept | application/json | Accepted media type |

#### URL parameters

| Field | Type | Description |
|-------|------|-------------|
| uid | integer | The unique ID of the database. |

#### Query parameters

| Field | Type | Description |
|-------|------|-------------|
| extend_check | list of comma-separated strings | List of additional availability checks to perform (optional)<br />Values:<br />**lag**: Enables lag-aware checks to assess replication health. Determines if a replica is sufficiently synced with the primary for failover/failback scenarios. |
| availability_lag_tolerance_ms | integer | Overrides the cluster's default lag tolerance threshold when using `extend_check=lag`. Recommended value: 100 milliseconds. |

### Response {#get-db-response}

Returns the status code `200 OK` if the database is available.

If the database is unavailable, returns an error status code and a JSON object that contains `error_code` and `description` fields.

### Error codes {#get-db-error-codes}

When errors are reported, the server may return a JSON object with
`error_code` and `description` fields that provide additional information.
The following are possible `error_code` values:

| Code | Description |
|------|-------------|
| no_quorum | Master healthcheck failed (no quorum in the cluster) |
| db_not_found | Database does not exist in the cluster |
| bdb_unavailable | Database is not available | 

### Status codes {#get-db-status-codes}

| Code | Description |
|------|-------------|
| [200 OK](https://www.rfc-editor.org/rfc/rfc9110.html#name-200-ok) | Database is available. |
| [400 Bad Request](https://www.rfc-editor.org/rfc/rfc9110.html#name-400-bad-request) | Invalid schema. |
| [404 Not Found](https://www.rfc-editor.org/rfc/rfc9110.html#name-404-not-found) | Database not found. |
| [503 Service Unavailable](https://www.rfc-editor.org/rfc/rfc9110.html#name-503-service-unavailable) | Database is unavailable or doesn't have quorum. |
