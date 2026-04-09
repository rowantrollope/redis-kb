---
title: Upgrade Redis database version
url: https://redis.io/docs/latest/operate/rc/databases/version-management/upgrade-version/
retrieved_utc: '2026-04-09T20:45:52.007624+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rc/databases/version-management/upgrade-version/index.html.md
---

# Upgrade Redis database version

```json metadata
{
  "title": "Upgrade Redis database version",
  "description": "Describes when you can upgrade your database to the latest available version for each plan type.",
  "categories": ["docs","operate","rc"],
  "tableOfContents": {"sections":[{"id":"upgrade-database","title":"Upgrade database"},{"id":"manually-revert-upgrade","title":"Manually revert upgrade"}]}

,
  "codeExamples": []
}
```
You can upgrade databases that are not on the latest available version of Redis to a later database version at any time.


Please keep in mind the following before upgrading your database version:

- We recommend that you [back up your data]() before upgrading to make it easier to [manually revert the upgrade](#manually-revert-upgrade) if needed.

- We recommend that you upgrade your database during off-peak hours or during application maintenance to minimize reconnections.

- Review the breaking changes for the new database version before upgrading: 
    - [Redis 7.2]() 
    - [Redis 7.4]()
    - [Redis 8.0]()
    - [Redis 8.2]()
    - [Redis 8.4]()

- You must upgrade the target database in an [Active-Passive]() setup before you upgrade the source database to prevent compatibility issues.


## Upgrade database

**Single-region database:**

To upgrade a single-region Redis Cloud database: 

1. Choose your database from the **Databases** list to open your database page. Select **More actions > Version upgrade**.

    <img src="../../../../../images/rc/databases-more-actions-menu.png" alt="The More Actions menu on the Database page." width=40% >
    
    You can also select **More actions > Version upgrade** from the database list.

1. Select the target version from the **Select version** list.

    <img src="../../../../../images/rc/database-version-upgrade.png" alt="The Redis version upgrade screen." width=80% >

    If your database has not been backed up before, we recommend that you back up your database. Select **Go to backup** to go to the [backup settings]().

1. Select **Upgrade Now** to start the upgrade.

    <img src="../../../../../images/rc/button-upgrade-now.png" alt="The upgrade button." width=100px >

The database will start upgrading to the selected version immediately. The upgrade may take a few minutes. 

You can continue to use the Redis Cloud console for other tasks during the upgrade.

**Active-Active database:**

To request to upgrade all databases in an [Active-Active]() subscription:

1. Choose your Active-Active subscription from the **Subscriptions** list to open your subscription page. Select **Version upgrade**.

    <img src="../../../../../images/rc/button-version-upgrade.png" width=150px alt="Version upgrade button." >

1. Select the version to upgrade your databases from the list and select **Upgrade** to submit the upgrade request.

    <img src="../../../../../images/rc/version-upgrade-request.png" width=80% alt="Version upgrade request list with version 8.2 selected." >

The upgrade will start in 1-3 weeks from your request, according to your subscription's [maintenance windows](). All databases in the subscription will be upgraded to the same version.



## Manually revert upgrade

Automatically reverting to a previous Redis database version is not supported on Redis Cloud.

If you [backed up your database]() before you upgraded your database version, you can:

1. [Delete your database]() without deleting your subscription.
1. [Create a new database]() in your subscription with the following settings:
    - **Port number**: Use the same port number as the old database.
    - **Version**: Select the original version of Redis.
1. [Import the backup files]() into the new database.

This allows you to connect to the database on the previous version without changing your connection details in your application.

If you did not back up your database before upgrading:

1. [Back up your database]().
1. [Create a new database]() in your subscription and select the original version of Redis.
1. [Import the backup files]() into the new database.
1. Change connection details in your application from the old database to the new database.