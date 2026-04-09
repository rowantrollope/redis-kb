---
title: Migrate data between Redis Cloud databases
url: https://redis.io/docs/latest/operate/rc/databases/migrate-databases/
retrieved_utc: '2026-04-09T20:45:56.394180+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rc/databases/migrate-databases/index.html.md
---

# Migrate data between Redis Cloud databases

```json metadata
{
  "title": "Migrate data between Redis Cloud databases",
  "description": "Shows two ways to migrate data from one Redis Cloud database to another.",
  "categories": ["docs","operate","rc"],
  "tableOfContents": {"sections":[{"id":"transfer-via-import","title":"Transfer via import"},{"children":[{"id":"general-active-passive-syncing-process","title":"General Active-Passive syncing process"},{"id":"detailed-active-passive-syncing-process-sync-using-active-passive","title":"Detailed Active-Passive syncing process {#sync-using-active-passive}"}],"id":"sync-using-active-passive","title":"Sync using Active-Passive"},{"id":"active-passive-memory-requirements","title":"Active-Passive memory requirements"}]}

,
  "codeExamples": []
}
```There are times when you need to migrate data from one Redis Cloud database to another.  

Here are two common ways to do this.

Each approach is suitable for different situations and the steps can vary according to your needs.

## Transfer via import 

The most common way to transfer data to a new database is to import a copy of the data into it.

Here's how it works:

1.  [Select an export storage destination]() and verify that it's ready for use and has sufficient space.

1.  [Export]() the data from the original database to the storage location.

1.  [Import]() the exported data into the target database, the one hosted by the new subscription.

The migrated data reflects the state of the data at the time it was originally exported.  

If you have apps or other connections actively using the source database, consider scheduling downtime for the migration to avoid loss.

This approach also lets you transfer data between databases hosted by different services. 

## Sync using Active-Passive

If your target database is hosted on Redis Cloud Pro, you can use Active-Passive to sync the source database to the target database.  The source database can be hosted on Redis Cloud Pro or Redis Cloud Essentials.

The source database remains active while the data migrates.

The following sections describe Active-Passive syncing processes.

### General Active-Passive syncing process

To migrate data using Active-Passive syncing, specify the target database as an Active-Passive replica of the source database:

1.  Get the source database's public endpoint from the **General** section of the database's **Configuration** tab.
2.  Activate the target database as an Active-Passive replica for the source.
3.  Stop all writes to the source database and wait for the data to sync.
4.  Turn off Active-Passive for the target database.
5.  Switch apps and other connections to the target database.


Before you use Active-Passive, be aware of the following limitations:

- An error will appear when syncing the two databases if the source and target databases are hosted on different Redis Cloud accounts. [Contact support](https://redis.io/support/) if you want to migrate a database between accounts using Active-Passive.

- As long as Active-Passive is enabled, data in the target database will not expire and will not be evicted regardless of the set [data eviction policy](). **Do not write to the target database while Active-Passive is enabled.** We recommend that you turn off Active-Passive after the databases are synced. 

- Turning on Active-Passive will flush the target database. Make sure that your target database has no important data before you turn on Active-Passive.


### Detailed Active-Passive syncing process {#sync-using-active-passive}

Follow these detailed steps to migrate data using Active-Passive syncing:

1.  Select **Databases** from the [Redis Cloud console](https://cloud.redis.io/) menu and select the target database in the list.

    

1.  From the **Configuration** tab of the target database, select **Edit**.

    

1.  In the **Durability** section, enable **Active-Passive Redis** and then select **Add Source**.

    

    

1. This will open the **Add Active-Passive Redis** screen. Select where the source database is located.

    

    - Select **Current account** if the source database is located in this Redis Cloud account. 
    
        Select the source database from the **Source database** list. You can type in the database's name to find it.

        

    - If the source database is hosted externally, select **External**.

        1.  In the **Enter the source URI** field, type `redis://` and then paste in the public endpoint details. 

            

        1. Select if the source database requires Transport Layer Security (TLS).
        
            - If the source database requires TLS, select **TLS** and enter the public server certificate in the **Server Certificate** field.

            

            - If the source database requires client authentication, select **Mutual TLS**.

                1. Enter the public server certificate in the **Server Certificate** field.

                    

                1. Select **Download** to download the client certificate. 

                    

                1. Configure the source database to accept the client certificate.

1. Select **Save Active-Passive** to save your Active-Passive settings.

    

    For an external database, we'll verify the endpoint at this step. If the endpoint can't be verified, make sure that you've copied the details directly from the source database and that the value you entered starts with `redis://`.

1.  Select **Save Database** to begin updating the database.

    

    Initially, the database status is __Pending__, which means the update task is still running.  

    

    The sync process doesn't begin until the database becomes `Active`.  

    

    When data has fully migrated to the target database, database status reports `Synced`.  

    

Active-Passive sync lets you migrate data while apps and other connections are using the source database.  Once the data is migrated, you should migrate active connections to the target database.


Do not write to the target database until turning off Active-Passive. Writing to the target database of an Active-Passive setup can cause data consistency issues and replication failures. See [Active-Passive replication considerations]() for more information.


## Active-Passive memory requirements

Active-Passive sync requires more memory than data import.  On average, you need an extra 25% memory on top of other requirements, though specific requirements depend on the data types and other factors.  

To illustrate, suppose you want to migrate a 1&nbsp;GB source database without replication to a target database with replication enabled.  Here, the target database memory limit should be at least 2.5&nbsp;GB to avoid data loss.

Once the databases are synced, you can disable Active-Passive for the target database.  Before doing so, however, verify that apps and other connections have switched to the target database; otherwise, you may lose data.

