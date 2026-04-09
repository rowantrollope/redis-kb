---
title: Manage Auto Tiering storage engine
url: https://redis.io/docs/latest/operate/rs/databases/flash/storage-engine/
retrieved_utc: '2026-04-09T20:46:01.226925+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/databases/flash/storage-engine/index.html.md
---

# Manage Auto Tiering storage engine

```json metadata
{
  "title": "Manage Auto Tiering storage engine",
  "description": "Manage the storage engine used for your database with auto tiering enabled.",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[{"children":[{"id":"change-the-storage-engine","title":"Change the storage engine"}],"id":"manage-the-storage-engine","title":"Manage the storage engine"},{"id":"monitor-the-storage-engine","title":"Monitor the storage engine"}]}

,
  "codeExamples": []
}
```
## Manage the storage engine

Auto Tiering supports two storage engines:

- Speedb: Redis proprietary storage engine. The default and recommended storage engine as of Redis Software version 7.2.4.

- [RocksDB](https://rocksdb.org/): Used up to Redis version 6.2. Deprecated for later Redis versions.

Redis Flex supports Speedb only.

Switching between storage engines requires guidance by Redis Support or your Account Manager.

### Change the storage engine

1. Change the cluster level configuration for default storage engine.

  * API:

      ``` sh
      curl -k -u <username>:<password> -X PUT -H "Content-Type: application/json" -d '{"bigstore_driver":"speedb"}' https://localhost:9443/v1/cluster
     ```

  * CLI:

      ```sh
      rladmin cluster config bigstore_driver {speedb | rocksdb}
      ```

2. Restart the each database on the cluster one by one.

     ```sh
     rladmin restart db { db:<id> | <name> }
     ```

 We recommend restarting your database at times with low usage and avoiding peak hours. For databases without persistence enabled, we also recommend using export to backup your database first.

## Monitor the storage engine

To get the current cluster level default storage engine run:

* Use the `rladmin info cluster` command look for âbigstore_driverâ.

* Use the REST API:

     ```sh
     curl -k -u <username>:<password> -X GET -H "Content-Type: application/json" https://localhost:9443/v1/cluster
     ```

Versions of Redis Software 7.2 and later provide a metric called `bdb_bigstore_shard_count` to help track the shard count per database, filtered by `bdb_id` and by storage engine as shown below:


  ```sh
  bdb_bigstore_shard_count{bdb="1",cluster="mycluster.local",driver="rocksdb"} 1.0
  bdb_bigstore_shard_count{bdb="1",cluster="mycluster.local",driver="speedb"} 2.0
  ```

For more about metrics for Redis Softwareâs integration with Prometheus, see [Prometheus integration]().
