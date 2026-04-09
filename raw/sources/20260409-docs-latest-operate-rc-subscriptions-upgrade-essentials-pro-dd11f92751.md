---
title: Upgrade database from Redis Cloud Essentials to Redis Cloud Pro
url: https://redis.io/docs/latest/operate/rc/subscriptions/upgrade-essentials-pro/
retrieved_utc: '2026-04-09T20:45:57.592090+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rc/subscriptions/upgrade-essentials-pro/index.html.md
---

# Upgrade database from Redis Cloud Essentials to Redis Cloud Pro

```json metadata
{
  "title": "Upgrade database from Redis Cloud Essentials to Redis Cloud Pro",
  "description": "Upgrade your Redis Cloud Essentials subscription to a Redis Cloud Pro subscription.",
  "categories": ["docs","operate","rc"],
  "tableOfContents": {"sections":[{"children":[{"id":"create-redis-cloud-pro-database-create-rcp","title":"Create Redis Cloud Pro database {#create-rcp}"},{"id":"migrate-database","title":"Migrate database"}],"id":"upgrade-essentials-subscription-to-pro","title":"Upgrade Essentials subscription to Pro"}]}

,
  "codeExamples": []
}
```
Redis Cloud Essentials supports low throughput workflows. It supports a range of availability, persistence, and backup options, and can be great for testing and prototyping. However, if your databases need higher throughput, or you're missing features that are not available with Redis Cloud Essentials, you may want to upgrade Redis Cloud Essentials to Redis Cloud Pro.

For more information about the different subscription plans, see [Subscription plans]().

To upgrade your Essentials plan, see [Upgrade subscription plan]().

## Upgrade Essentials subscription to Pro

To follow the steps in this guide, you must have a database with [Redis Cloud Essentials]() that you want to upgrade to Redis Cloud Pro.

To upgrade your Essentials database to Redis Cloud Pro:

1. [Create a new database in Redis Cloud Pro](#create-rcp) with the right specifications to be able to migrate your database.

1. [Migrate your Essentials database](#migrate-database) to your new Redis Cloud Pro database.

### Create Redis Cloud Pro database {#create-rcp}

[Create a new database]() with the following specifications:

- Select **Redis Cloud Pro** for your subscription type.
- Select the **Version** that matches the Redis version your Essentials subscriptions use.
- In the [**Sizing tab**](), create your databases with the following specifications:
    - Set the memory limit to comply with [Active-Passive memory requirements]() if you want to migrate your database using [Active-Passive]().
    - Select any advanced capabilities that your Essentials database offers. You can find a list of enabled advanced capabilities in the [Configuration tab]() of your database.

### Migrate database

You can migrate your Redis Cloud Essentials database to your new Redis Cloud Pro subscription using any method in the [Migrate databases]() guide. This guide uses [Active-Passive]() to migrate databases between subscriptions in the same account.


Before you follow this guide, be aware of the following limitations:

- This guide is for migrating databases between subscriptions in the same Redis Cloud console account. [Contact support](https://redis.io/support/) if you want to migrate a database between accounts using Active-Passive.

- As long as Active-Passive is enabled, data in the target database will not expire and will not be evicted regardless of the set [data eviction policy](). We recommend that you turn off Active-Passive after the databases are synced. 


1. Select the database you want to migrate your data to. This will be your target database.

1. From the **Configuration** tab of the target database, select **Edit**.

    

1. In the **Durability** section, enable **Active-Passive Redis** and then select **Add Source**.

    

    

1. This will open the **Add Active-Passive Redis** screen. Select **Current account** to connect a database in your current account.

    

1. Select your Redis Cloud Essentials database from the **Source database** list. This will be your source database. You can type in the database's name to find it.

    

1. Select **Save Database** to begin updating the database.

    

    Initially, the database status is __Pending__, which means the update task is still running.  

    

    The sync process doesn't begin until the database becomes `Active`.  

    

    When data has fully migrated to the target database, database status reports `Synced`.  

    

    Active-Passive sync lets you migrate data while apps and other connections are using the source database. Once the data is migrated, you should migrate active connections to the target database before you move on.

1. After your data and connections are migrated, turn off **Active-Passive Redis** from the target database.

1. [Delete the source database]().



