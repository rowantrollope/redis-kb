---
title: Redis Cloud changelog (July 2024)
url: https://redis.io/docs/latest/operate/rc/changelog/2024/july-2024/
retrieved_utc: '2026-04-09T20:45:57.602363+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rc/changelog/2024/july-2024/index.html.md
---

# Redis Cloud changelog (July 2024)

```json metadata
{
  "title": "Redis Cloud changelog (July 2024)",
  "description": "New features, enhancements, and other changes added to Redis Cloud during July 2024.",
  "categories": ["docs","operate","rc"],
  "tableOfContents": {"sections":[{"children":[{"id":"query-performance-factor-preview","title":"Query performance factor preview"},{"id":"redis-74-preview","title":"Redis 7.4 Preview"}],"id":"new-features","title":"New Features"}]}

,
  "codeExamples": []
}
```
## New Features


### Query performance factor preview

When you create a Pro database with [Search and query]() capabilities, you can now choose to boost your query capabilities with the Query performance factor. The query performance factor adds dedicated power specifically for Search and query. For more information, see [Search and query sizing]().

You can take advantage of extra query speed for free during the preview period.

The query performance factor is available for Redis Cloud Pro databases on Redis 7.2 and later.

### Redis 7.4 Preview

A preview of Redis 7.4 is now available on [Redis Cloud Essentials databases]() in select regions on Amazon Web Services and Google Cloud.

Redis 7.4 offers hash field expiration and other feature set improvements. For more information on the changes in Redis 7.4, see the [Redis 7.4 release blog post](https://redis.io/blog/announcing-redis-community-edition-and-redis-stack-74).

#### Redis database version 7.4 breaking changes {#redis-74-breaking-changes}

When new versions of Redis Community Edition change existing commands, upgrading your database to a new version can potentially break some functionality. Before you upgrade, read the provided list of breaking changes that affect Redis Software and update any applications that connect to your database to handle these changes.

Confirm your Redis database version (`redis_version`) using the Cluster Manager UI or run the following [`INFO`]() command with [`redis-cli`]():

```sh
$ redis-cli -p <port> INFO
"# Server
redis_version:7.0.8
..."
```

##### Security behavior changes

- [#13108](https://github.com/redis/redis/pull/13108) Lua: LRU eviction for scripts generated with `EVAL`. 

##### Other general behavior changes

- [#13133](https://github.com/redis/redis/pull/13133) Lua: allocate VM code with jemalloc instead of libc and count it as used memory.

- [#12171](https://github.com/redis/redis/pull/12171) `ACL LOAD`: do not disconnect all clients.

