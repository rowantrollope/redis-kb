---
title: Supported connection clients
url: https://redis.io/docs/latest/operate/rs/databases/connect/supported-clients-browsers/
retrieved_utc: '2026-04-09T20:45:54.948640+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/databases/connect/supported-clients-browsers/index.html.md
---

# Supported connection clients

```json metadata
{
  "title": "Supported connection clients",
  "description": "Info about Redis client libraries and supported clients when using the discovery service.",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[{"children":[{"id":"discovery-service","title":"Discovery service"}],"id":"redis-client-libraries","title":"Redis client libraries"}]}

,
  "codeExamples": []
}
```You can connect to Redis Software databases programmatically using client libraries.

## Redis client libraries

To connect an application to a Redis database hosted by Redis Software, use a [client library]() appropriate for your programming language.

You can also use the `redis-cli` utility to connect to a database from the command line.

For examples of each approach, see the [Redis Software quickstart]().

Note: You cannot use client libraries to configure Redis Software.  Instead, use:

- The Redis Software [Cluster Manager UI]()
- The [REST API]()
- Command-line utilities, such as [`rladmin`]()

### Discovery service

We recommend the following clients when using a [discovery service]() based on the Redis Sentinel API:

- [redis-py]() (Python client)
- [NRedisStack]() (.NET client)
- [Jedis]() (synchronous Java client)
- [Lettuce]() (asynchronous Java client)
- [go-redis]() (Go client)
- [Hiredis](https://github.com/redis/hiredis) (C client)

If you need to use another client, you can use [Sentinel Tunnel](https://github.com/RedisLabs/sentinel_tunnel)
to discover the current Redis master with Sentinel and create a TCP tunnel between a local port on the client and the master.

