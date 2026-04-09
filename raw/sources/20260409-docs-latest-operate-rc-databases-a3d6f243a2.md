---
title: Manage databases
url: https://redis.io/docs/latest/operate/rc/databases/
retrieved_utc: '2026-04-09T20:45:55.493196+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rc/databases/index.html.md
---

# Manage databases

```json metadata
{
  "title": "Manage databases",
  "description": "",
  "categories": ["docs","operate","rc"],
  "tableOfContents": {"sections":[{"id":"common-database-tasks","title":"Common database tasks"},{"id":"additional-tasks","title":"Additional tasks"},{"id":"configuration-details","title":"Configuration details"},{"id":"compatibility","title":"Compatibility"}]}

,
  "codeExamples": []
}
```
Databases are the heart of any Redis Cloud deployment.  

Here's how to perform a variety of tasks:

## Common database tasks

- [Create a database]()

    - [Create an Essentials database]()
    - [Create a Pro database with a new subscription]()
    - [Create a Pro database in an existing subscription]()
    - [Create an Active-Active database]()

- [View and edit databases]()

- [Delete database]()

If you're new to Redis Cloud, see the [Quick Start]().

## Additional tasks

- [Monitor database performance]() 

- [Import data into databases]() 

- [Back up databases]()

- [Secure database access]()

## Configuration details

These topics provide background details that can help you tailor your databases to better fit your needs.

- [Clustering Redis databases](): Redis Cloud uses clustering to manage very large databases (25 GB and larger). Learn how to manage clustering and how to use hashing policies to manage the process.

- [Data eviction policies](): Data eviction policies control what happens when new data exceeds the memory limits of a database. Learn the available policies and how to control them.

- [Data persistence](): Data persistence enables recovery in the event of memory loss or other catastrophic failure. Learn which options are available and how to apply specific settings to individual databases.

- [High availability and replication](): Replication allows for automatic failover and greater fault tolerance. It can prevent data loss in the event of a hardware or zone failure.  Learn which options are available for Redis Cloud subscriptions.

- [Advanced Capabilities](): Advanced capabilities extend Redis database functionality by adding new data types and options. Learn about the advanced capability options that are available for your database.

## Compatibility

Redis Cloud does not support certain commands. Instead of using these commands, Redis Cloud automatically handles features like replication and lets you [manage your database]() from the [Redis Cloud console](https://cloud.redis.io/) or [Redis Cloud REST API]().

For more details, see:

- [Redis Cloud compatibility]()

- [Command compatibility]()

- [Configuration compatibility]()
