---
title: Migrate a database to Active-Active
url: https://redis.io/docs/latest/operate/rs/databases/import-export/migrate-to-active-active/
retrieved_utc: '2026-04-09T20:46:05.701252+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/databases/import-export/migrate-to-active-active/index.html.md
---

# Migrate a database to Active-Active

```json metadata
{
  "title": "Migrate a database to Active-Active",
  "description": "Use Replica Of to migrate your database to an Active-Active database.",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[{"id":"prerequisites","title":"Prerequisites"},{"children":[{"id":"migrate-from-the-same-cluster","title":"Migrate from the same cluster"},{"id":"migrate-from-a-different-cluster","title":"Migrate from a different cluster"}],"id":"migrate-from-a-redis-software-cluster","title":"Migrate from a Redis Software cluster"},{"id":"migrate-from-redis-open-source","title":"Migrate from Redis Open Source"},{"id":"stop-sync-after-migration","title":"Stop sync after migration"}]}

,
  "codeExamples": []
}
```
If you have data in a single-region Redis Software database that you want to migrate to an [Active-Active database](),
you'll need to create a new Active-Active database and migrate the data into the new database as a [Replica Of]() the existing database.
This process will gradually populate the data in the Active-Active database.

Before data migration starts, all data is flushed from the Active-Active database.
The data is migrated to the Active-Active instance where you configured migration, and the data from that instance is copied to the other Active-Active instances.

When data migration is finished, turn off migration and connect your applications to the Active-Active database.



## Prerequisites

- During the migration, any applications that connect to the Active-Active database must be **read-only** to ensure the dataset is identical to the source database during the migration process. However, you can continue to write to the source database during the migration process.

- If you used the mDNS protocol for the cluster name (FQDN),
the [client mDNS prerequisites]() must be met in order to communicate with other clusters.

## Migrate from a Redis Software cluster

You can migrate a Redis Software database from the [same cluster](#migrate-from-the-same-cluster) or a [different cluster](#migrate-from-a-different-cluster).

### Migrate from the same cluster

To migrate a database to Active-Active in the same Redis Software cluster:

1. Create a new Active-Active database. For prerequisites and detailed instructions, see [Create an Active-Active geo-replicated database]().

1. After the Active-Active database is active, click **Edit** on the **Configuration** screen.

1. Expand the **Migrate to Active-Active** section:

    

1. Click **+ Add source database**.

1. In the **Migrate to Active-Active** dialog, select **Current cluster**:

    

1. Select the source database from the list.

1. Click **Add source**.

1. Click **Save**.

### Migrate from a different cluster


For a source database on a different Redis Software cluster,
you can [compress the replication data]() to save bandwidth.


To migrate a database to Active-Active in different Redis Software clusters:

1. Sign in to the Cluster Manager UI of the cluster hosting the source database.

    1. In **Databases**, select the source database and then select the **Configuration** tab.

    1. In the **Replica Of** section, select **Use this database as a source for another database**.

    1. Copy the Replica Of source URL.

        

        To change the internal password, select **Regenerate password**.

        If you regenerate the password, replication to existing destinations fails until their credentials are updated with the new password.

1. Sign in to the Cluster Manager UI of the destination databaseâs cluster.

1. Create a new Active-Active database. For prerequisites and detailed instructions, see [Create an Active-Active geo-replicated database]().

1. After the Active-Active database is active, click **Edit** on the **Configuration** screen.

1. Expand the **Migrate to Active-Active** section:

    

1. Click **+ Add source database**.

1. In the **Migrate to Active-Active** dialog, select **External**:

    

1. For **Source database URL**, enter the Replica Of source URL you copied in step 1.

1. Click **Add source**.

1. Click **Save**.

## Migrate from Redis Open Source

To migrate a Redis Open Source database to Active-Active:

1. Create a new Active-Active database. For prerequisites and detailed instructions, see [Create an Active-Active geo-replicated database]().

1. After the Active-Active database is active, click **Edit** on the **Configuration** screen.

1. Expand the **Migrate to Active-Active** section:

    

1. Click **+ Add source database**.

1. In the **Migrate to Active-Active** dialog, select **External**:

    

1. Enter the **Source database URL**:

    - If the database has a password:

        ```sh
        redis://:<password>@<host>:<port>
        ```

        Where the password is the Redis password represented with URL encoding escape characters.

    - If the database does not have a password:

        ```sh
        redis://<host>:<port>
        ```

1. Click **Add source**.

1. Click **Save**.

## Stop sync after migration

1. Wait until the migration is complete, indicated by the **Status** _Synced_. 

    
Migration can take minutes to hours to complete depending on the dataset size and network quality.
    

1. On the Active-Active database's **Configuration** screen, click **Edit**.

1. In the **Migrate to Active-Active** section, click **Stop sync**:

    

1. In the **Stop synchronization** dialog, click **Stop** to proceed.

1. Redirect client connections to the Active-Active database after **Status** changes to _Sync stopped_:

    
