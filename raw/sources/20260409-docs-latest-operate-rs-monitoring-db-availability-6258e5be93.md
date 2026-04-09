---
title: Check database availability for monitoring and load balancers
url: https://redis.io/docs/latest/operate/rs/monitoring/db-availability/
retrieved_utc: '2026-04-09T20:45:59.620238+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/monitoring/db-availability/index.html.md
---

# Check database availability for monitoring and load balancers

```json metadata
{
  "title": "Check database availability for monitoring and load balancers",
  "description": "Verify if a Redis Software database is available to perform read and write operations and can respond to queries from client applications.",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[{"id":"check-database-availability-for-monitoring","title":"Check database availability for monitoring"},{"id":"check-local-database-endpoint-availability-for-load-balancers","title":"Check local database endpoint availability for load balancers"},{"children":[{"id":"change-default-availability-lag-tolerance-threshold","title":"Change default availability lag tolerance threshold"},{"id":"lag-aware-database-availability-checks","title":"Lag-aware database availability checks"},{"id":"lag-aware-endpoint-availability-checks","title":"Lag-aware endpoint availability checks"}],"id":"use-lag-aware-availability-checks-for-disaster-recovery-lag-aware","title":"Use lag-aware availability checks for disaster recovery {#lag-aware}"},{"id":"availability-by-database-status","title":"Availability by database status"},{"id":"known-issues","title":"Known issues"}]}

,
  "codeExamples": []
}
```
You can use the [database availability API]() to verify whether a Redis Software database is available to perform read and write operations and can respond to queries from client applications. Load balancers and automated monitoring tools can use this API to monitor database availability.


Database availability does not guarantee data availability.


## Check database availability for monitoring

To monitor database availability, use the following REST API request:

```sh
GET /v1/bdbs/<database_id>/availability
```

If the OSS Cluster API is enabled, this request verifies all endpoints for this database are available. Otherwise, it verifies the database has at least one available endpoint.

Returns the status code 200 OK if the database is available.

If the database is unavailable, returns an error status code and a JSON object that contains [`error_code` and `description` fields]().

## Check local database endpoint availability for load balancers

To check database availability when using a load balancer and the recommended `all-nodes` proxy policy, use the local database endpoints for each node:

```sh
GET /v1/local/bdbs/<database_id>/endpoint/availability
```

Returns HTTP status code 200 OK if all primary (master) shards are reachable from the local database endpoint.

If the local database endpoint is unavailable, returns an error status code and a JSON object that contains [`error_code` and `description` fields]().

## Use lag-aware availability checks for disaster recovery {#lag-aware}

The database availability API supports lag-aware availability checks that consider replication lag tolerance. You can reduce the risk of data inconsistencies during disaster recovery by incorporating lag-aware availability checks into your disaster recovery solution and ensuring failover-failback flows only occur when databases are accessible and sufficiently synchronized.

### Change default availability lag tolerance threshold

The lag tolerance threshold is 100 milliseconds by default. Depending on factors such as workload, network conditions, and throughput, you might want to adjust the lag tolerance threshold.

To change the default threshold for the entire cluster, set `availability_lag_tolerance_ms` with an [update cluster]() request:

```sh
PUT /v1/cluster
{ "availability_lag_tolerance_ms": 100 }
```

### Lag-aware database availability checks

To perform a lag-aware database availability check using the cluster's default lag tolerance threshold:

```sh
GET /v1/bdbs/<database_id>/availability?extend_check=lag
```

To perform a lag-aware database availability check and override the cluster's default lag tolerance threshold:

```sh
GET /v1/bdbs/<database_id>/availability?extend_check=lag&availability_lag_tolerance_ms=100
```

### Lag-aware endpoint availability checks

To perform a lag-aware database endpoint availability check using the cluster's default lag tolerance threshold:

```sh
GET /v1/local/bdbs/<database_id>/endpoint/availability?extend_check=lag
```

To perform a lag-aware database endpoint availability check and override the cluster's default lag tolerance threshold:

```sh
GET /v1/local/bdbs/<database_id>/endpoint/availability?extend_check=lag&availability_lag_tolerance_ms=100
```


## Availability by database status

The following table shows the relationship between a database's status and availability. For more details about the database status values, see [BDB status field]().

| Database status | Availability |
|-----------------|--------------|
| active          | <span title="Available">&#x2705;</span> Available |
| active-change-pending | <span title="Available">&#x2705;</span> Available |
| creation-failed | <span title="Not available">:x:</span> Not available |
| delete-pending  | <span title="Availability not guaranteed" class="font-serif">:warning:</span> Availability not guaranteed |
| import-pending  | <span title="Available">&#x2705;</span> Available |
| pending         | <span title="Available">&#x2705;</span> Available |
| recovery        | <span title="Not available">:x:</span> Not available |

## Known issues

- RS155734: Endpoint availability metrics do not work as expected due to a calculation error.
