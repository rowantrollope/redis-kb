---
title: Enable a module for a database
url: https://redis.io/docs/latest/operate/oss_and_stack/stack-with-enterprise/install/add-module-to-database/
retrieved_utc: '2026-04-09T20:45:56.320910+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/oss_and_stack/stack-with-enterprise/install/add-module-to-database/index.html.md
---

# Enable a module for a database

```json metadata
{
  "title": "Enable a module for a database",
  "description": "",
  "categories": ["docs","operate","stack"],
  "tableOfContents": {"sections":[{"id":"automatically-enabled-capabilities-in-redis-8","title":"Automatically enabled capabilities in Redis 8"},{"children":[{"id":"prerequisites","title":"Prerequisites"},{"id":"create-a-database-and-enable-capabilities","title":"Create a database and enable capabilities"}],"id":"create-a-database-with-a-module","title":"Create a database with a module"},{"id":"module-configuration-options","title":"Module configuration options"}]}

,
  "codeExamples": []
}
```
Modules add additional functionality to Redis databases for specific use cases. You can enable modules when you create a database.

## Automatically enabled capabilities in Redis 8

Databases created with or upgraded to Redis version 8 or later automatically enable the capabilities (modules) bundled with Redis Software as follows:



## Create a database with a module

You can only add modules to a database when you first create it. You cannot add modules to an existing database.

### Prerequisites

- [Installed the module on the cluster]()
- [Upgraded the module]() to the latest version

### Create a database and enable capabilities

In the Redis Software Cluster Manager UI, follow these steps to add modules to a database:

1. From the **Databases** screen, select **Quick database** or **Create database**.

1. In the **Capabilities** section, select one or more capabilities:

    

    
You cannot use RediSearch 1.x and RediSearch 2.x in the same database.
    

1. To use custom configuration for capabilities:

    1. Select **Parameters**.
    
    1. Enter the [configuration options](#module-configuration-options).
    
    1. Select **Done**.

1. Configure additional database settings.

    
Depending on the [features supported by an enabled module](), certain database configuration fields may not be available.
    

1. Select **Create**.

## Module configuration options

- [RediSearch configuration options]()

- [RedisTimeSeries configuration options]()

- [RedisBloom configuration options]()