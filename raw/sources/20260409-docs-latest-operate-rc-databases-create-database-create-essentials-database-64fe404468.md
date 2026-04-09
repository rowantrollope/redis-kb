---
title: Create an Essentials database
url: https://redis.io/docs/latest/operate/rc/databases/create-database/create-essentials-database/
retrieved_utc: '2026-04-09T20:45:53.103108+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rc/databases/create-database/create-essentials-database/index.html.md
---

# Create an Essentials database

```json metadata
{
  "title": "Create an Essentials database",
  "description": "Shows how to create an Essentials database.",
  "categories": ["docs","operate","rc"],
  "tableOfContents": {"sections":[]}

,
  "codeExamples": []
}
```
Redis Cloud Essentials is cost-efficient and designed for low-throughput scenarios. You can quickly scale up your Essentials database as your application grows.

 

3. Select the type of [subscription]() you need. For this guide, select **Essentials**.

    

    
This guide shows how to create a paid Essentials database.
- If you want to create a free Essentials database, see [Create a free database](). You can only have one free database per account.
- If you'd rather create a Pro database, see [Create a Pro database with a new subscription]().
- If you already have a Pro subscription and want to add a database to it, see [Create a Pro database in an existing subscription]().
    
    
    After you select **Essentials**, the rest of the database details will appear.

    

1. Select **RAM** or **Flex** to choose between a database that uses only RAM or one that uses both RAM and Flash memory. 

    Choose Flex for larger datasets and cost-efficient scale when you can tolerate single-digit millisecond latency for warm data. Choose RAM when you need the absolute lowest latency for all data. To learn more about Flex, see [Create a Flex database]().

1. Redis will generate a database name for you. If you want to change it, you can do so in the **Name** field.  

1. Choose a **Cloud vendor** for your database from the list. You can choose between **Amazon Web Services (AWS)**, **Google Cloud**, and **Microsoft Azure** for the Cloud Vendor. 

    

1. Choose a **Region** from the list. See [Supported regions]() for a list of supported regions by cloud vendor.

1. Select the **Database version** you want to use.

1. The **Type** of database controls the protocol and advanced capabilities. Leave this as **Redis** unless you have a legacy application that uses **Memcached**.

1. Select your desired memory limit.

    

    For a comparison of available plans, see [Redis Cloud Essentials plans]().

1. Choose your **High availability (replication)** settings.

    Redis Cloud supports the following high availability settings:

    - **None**: You will have a single copy of your database without replication.
    - **Single-Zone**: Your database will have a primary and a replica located in the same cloud zone. If anything happens to the primary, the replica takes over and becomes the new primary.
    - **Multi-Zone**: The primary and its replicas are stored in different zones. This means that your database can remain online even if an entire zone becomes unavailable.

    See [High availability]() for more information about these settings.

1. Choose your **Data persistence** settings from the list.

    Redis Cloud supports the following data persistence options:

    - An **Append-Only File** maintains a record (sometimes called a _redo log_ or _journal_) of write operations.  This allows the data to be restored by using the record to reconstruct the database up to the point of failure. For Essentials databases, Redis updates the Append-Only file every second.

    - A **Snapshot** is a copy of the in-memory database, taken at periodic intervals (one, six, or twelve hours). You can restore data to the snapshot's point in time. 
    
    See [Data persistence]() for more information about these settings.

1.  Enter your payment details.

    If you haven't previously entered a payment method, use the **Add Credit Card** button to add one.

    

    

1. Select **Confirm & pay** to create your database.



When you create your database, there's a brief pause while your request is processed and then the **Database details** page appears.

You can now [connect to your database]() and start working with Redis.