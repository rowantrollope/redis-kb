---
title: Disk sizing for heavy write scenarios
url: https://redis.io/docs/latest/operate/rs/clusters/optimize/disk-sizing-heavy-write-scenarios/
retrieved_utc: '2026-04-09T20:46:03.772135+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/clusters/optimize/disk-sizing-heavy-write-scenarios/index.html.md
---

# Disk sizing for heavy write scenarios

```json metadata
{
  "title": "Disk sizing for heavy write scenarios",
  "description": "Sizing considerations for persistent disk space for heavy throughput databases.",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[{"id":"estimate-required-disk-space","title":"Estimate required disk space"},{"children":[{"id":"example-1","title":"Example 1"},{"id":"example-2","title":"Example 2"},{"id":"example-3","title":"Example 3"},{"id":"example-4","title":"Example 4"}],"id":"examples","title":"Examples"}]}

,
  "codeExamples": []
}
```In extreme write scenarios when append-only files (AOF) are enabled, the AOF rewrite process can require considerably more disk space for [database persistence]().

For disk size requirements for standard usage, see [Hardware requirements]().

## Estimate required disk space

To estimate the required persistent disk space for AOF rewrite purposes in extreme write scenarios, use the following formula:

**X (1 + 3Y + YÂ²)**

Where:
- **X** = size of each shard in GB
- **Y** = number of shards


## Examples

The following examples show how to calculate the persistent disk space required for heavy write scenarios for different database configurations, where:

- **Database size** is the memory limit configured for the database.

- **Number of shards** is the total number of shards (primary shards + replica shards).

### Example 1

- Database size = 10 GB
- Number of shards = 4

1. Calculate the shard size:

    ```sh
    Shard size = database size / number of shards
               = 10 GB / 4 shards
               = 2.5 GB per shard
    ```

1. Use the formula to calculate the required persistent disk space:

    ```sh
    Disk space = X (1 + 3Y + YÂ²)
               = 2.5 (1 + 3 Ã 4 + 4Â²)
               = 2.5 (1 + 12 + 16)
               = 2.5 Ã 29
               = 72.5 GB
    ```

1. Round up to 73 GB of required disk space.

### Example 2

- Database size = 10 GB
- Number of shards = 16

1. Calculate the shard size:

    ```sh
    Shard size = database size / number of shards
               = 10 GB / 16 shards
               = 0.625 GB per shard
    ```

1. Use the formula to calculate the required persistent disk space:

    ```sh
    Disk space = X (1 + 3Y + YÂ²)
               = 0.625 (1 + 3 Ã 16 + 16Â²)
               = 0.625 (1 + 48 + 256)
               = 0.625 Ã 305
               = 190.625 GB
    ```

1. Round up to 191 GB of required disk space.

### Example 3

- Database size = 40 GB
- Number of shards = 5

1. Calculate the shard size:

    ```sh
    Shard size = database size / number of shards
               = 40 GB / 5 shards
               = 8 GB per shard
    ```

1. Use the formula to calculate the required persistent disk space:

    ```sh
    Disk space = X (1 + 3Y + YÂ²)
               = 8 (1 + 3 Ã 5 + 5Â²)
               = 8 (1 + 15 + 25)
               = 8 Ã 41
               = 328 GB
    ```

1. Required disk space: 328 GB.

### Example 4

- Database size = 40 GB
- Number of shards = 15

1. Calculate the shard size:

    ```sh
    Shard size = database size / number of shards
               = 40 GB / 15 shards
               = 2.67 GB per shard
    ```

1. Use the formula to calculate the required persistent disk space:

    ```sh
    Disk space = X (1 + 3Y + YÂ²)
               = 2.67 (1 + 3 Ã 15 + 15Â²)
               = 2.67 (1 + 45 + 225)
               = 2.67 Ã 271
               = 723.57 GB
    ```

1. Round up to 724 GB of required disk space.


