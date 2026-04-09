---
title: Connect to a Redis Cloud database
url: https://redis.io/docs/latest/operate/rc/databases/connect/
retrieved_utc: '2026-04-09T20:45:55.110062+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rc/databases/connect/index.html.md
---

# Connect to a Redis Cloud database

```json metadata
{
  "title": "Connect to a Redis Cloud database",
  "description": "",
  "categories": ["docs","operate","rc"],
  "tableOfContents": {"sections":[{"children":[{"id":"open-in-your-browser-ri-browser","title":"Open in your browser {#ri-browser}"},{"id":"install-and-open-on-your-computer-ri-app","title":"Install and open on your computer {#ri-app}"}],"id":"redis-insight-using-redisinsight","title":"Redis Insight {#using-redisinsight}"},{"children":[{"id":"redis-cli-using-rediscli","title":"redis-cli {#using-rediscli}"}],"id":"redis-client-using-redis-client","title":"Redis client {#using-redis-client}"},{"id":"more-info","title":"More info"}]}

,
  "codeExamples": []
}
```
After you [create your database](), you can connect to it.

To connect to the database, you need your username and password. By default, your database is protected by a [**Default user**]() called `default` and a masked **Default user password**. You can see the default user password in the **Security** section of the **Configuration** details for your database. Select the eye icon to show or hide the password.    



If you've turned on [Role-based access control]() for your database and [turned off the default User](), use the username and password for your data access role.

Once you have the username and password, select **Connect** to open the connection wizard.




For [Active-Active databases](), you connect to one of the database instances. Choose the region you want to connect to from the region selection to access the connection information for that instance.


The connection wizard provides the following database connection methods:

- [Redis Insight](#using-redisinsight)

- [`redis-cli`](#using-rediscli) utility

- [Redis client](#using-redis-client) for your preferred programming language



## Redis Insight {#using-redisinsight}

[Redis Insight]() is a free Redis GUI that lets you visualize your Redis data and learn more about Redis.

You can connect to your database with Redis Insight in two ways:

1. [Open your database in Redis Insight in your browser](#ri-browser).

1. [Download and Install Redis Insight](#ri-app) on Windows, macOS, and Linux.

### Open in your browser {#ri-browser}


Opening your database with Redis Insight in your browser is only available for Essentials databases. For all other databases, [Download and install Redis Insight](#ri-app) on your computer.


If Redis Insight on Redis Cloud is available for your database, select **Launch Redis Insight web** from the connection wizard to open it.



You can also select **Launch** from the database page under **View and manage data with Redis Insight** to open Redis Insight in your browser.



Redis Insight will open in a new tab. 

This browser-based version of Redis Insight has a subset of the features of Redis Insight. For more information, see [Open with Redis Insight on Redis Cloud]().

### Install and open on your computer {#ri-app}

1. If you haven't downloaded Redis Insight, select **Download** under **Redis Insight** in the Connection wizard to download it. 

1. [Install Redis Insight]().

1. Once installed, select **Open with Redis Insight**.

1. A pop-up asks if you wish to open the link with Redis Insight. Select **Open Redis Insight** to connect to your database with Redis Insight.

If you get an error when connecting with Redis Insight, [manually connect to your database]() from Redis Insight.

You can use Redis Insight to view your data, run Redis commands, and analyze database performance. See the [Redis Insight docs]() for more info.

## Redis client {#using-redis-client}

A Redis client is a software library or tool that enables applications to interact with a Redis server. Each client has its own syntax and installation process. For help with a specific client, see the client's documentation.

The connection wizard provides code snippets to connect to your database with the following programming languages:

- .NET using [NRedisStack]()
- node.js using [node-redis]()
- Python using [redis-py]()
- Java using [Jedis]() and [Lettuce]()
- Go using [go-redis]()
- PHP using [Predis]()



If the username and password are not already filled in, replace `<username>` and `<password>` with your username and password.

See [Clients]() to learn how to connect with the official Redis clients.

### redis-cli {#using-rediscli}

The [`redis-cli`]() utility is installed when you install Redis.  It provides a command-line interface that lets you work with your database using core [Redis commands]().

To run `redis-cli`, [install Redis]() on your machine. After it's installed, copy the `redis-cli` command under **Redis CLI** in the connection wizard and enter it into your terminal. If the username and password are not already filled in, replace `<username>` and `<password>` with your username and password.

See [Redis CLI]() to learn how to use `redis-cli`.

## More info

- [Connect your application]()
- [Connect with TLS]()
- [Default user]()
- [Role-based access control]()