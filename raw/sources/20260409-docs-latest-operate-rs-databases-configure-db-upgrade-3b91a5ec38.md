---
title: Change database upgrade configuration
url: https://redis.io/docs/latest/operate/rs/databases/configure/db-upgrade/
retrieved_utc: '2026-04-09T20:45:55.287579+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/databases/configure/db-upgrade/index.html.md
---

# Change database upgrade configuration

```json metadata
{
  "title": "Change database upgrade configuration",
  "description": "Configure cluster-wide policies that affect default database upgrades.",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[{"id":"edit-upgrade-configuration","title":"Edit upgrade configuration"},{"children":[{"id":"database-shard-parallel-upgrade","title":"Database shard parallel upgrade"},{"id":"resp3-support","title":"RESP3 support"}],"id":"upgrade-configuration-settings-upgrade-config-settings","title":"Upgrade configuration settings {#upgrade-config-settings}"}]}

,
  "codeExamples": []
}
```
Database upgrade configuration includes cluster-wide policies that affect default database upgrades.

## Edit upgrade configuration

To edit database upgrade configuration using the Cluster Manager UI:

1. On the **Databases** screen, select  to open a list of additional actions.

1. Select **Upgrade configuration**.

1. Change database [upgrade configuration settings](#upgrade-config-settings).

1. Select **Save**.

## Upgrade configuration settings {#upgrade-config-settings}

### Database shard parallel upgrade

To change the number of shards upgraded in parallel during database upgrades, use one of the following methods:

- Cluster Manager UI â Edit **Database shard parallel upgrade** in [**Upgrade configuration**](#edit-upgrade-configuration)

- [rladmin tune cluster](): 
    
    ```sh
    rladmin tune cluster parallel_shards_upgrade { all | <integer> }
    ```

- [Update cluster policy]() REST API request:

    ```sh
    PUT /v1/cluster/policy 
    { "parallel_shards_upgrade": <integer> }
    ```

### RESP3 support

The cluster-wide option `resp3_default` determines the default value of the `resp3` option, which enables or deactivates RESP3 for a database, upon upgrading a database to version 7.2 or later. `resp3_default` is set to `enabled` by default.

To change `resp3_default` to `disabled`, use one of the following methods:

- Cluster Manager UI â Edit **RESP3 support** in [**Upgrade configuration**](#edit-upgrade-configuration)

- [rladmin tune cluster](): 
    
    ```sh
    rladmin tune cluster resp3_default { enabled | disabled }
    ```

- [Update cluster policy]() REST API request:

    ```sh
    PUT /v1/cluster/policy 
    { "resp3_default": <boolean> }
    ```
