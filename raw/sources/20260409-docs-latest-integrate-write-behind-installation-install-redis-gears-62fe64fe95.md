---
title: Install RedisGears for Redis Data Integration
url: https://redis.io/docs/latest/integrate/write-behind/installation/install-redis-gears/
retrieved_utc: '2026-04-09T20:45:59.146605+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/integrate/write-behind/installation/install-redis-gears/index.html.md
---

# Install RedisGears for Redis Data Integration

```json metadata
{
  "title": "Install RedisGears for Redis Data Integration",
  "description": "Install and set up RedisGears for a Write-behind deployment",
  "categories": ["docs","integrate","rs","rdi"],
  "group": "di",
  "tableOfContents": {"sections":[{"children":[{"id":"ubuntu-2004","title":"Ubuntu 20.04"},{"id":"ubuntu-1804","title":"Ubuntu 18.04"},{"id":"rhel8","title":"RHEL8"},{"id":"rhel7","title":"RHEL7"}],"id":"download-redisgears","title":"Download RedisGears"}]}

,
  "codeExamples": []
}
```
Write-behind requires that [RedisGears](https://redis.com/modules/redis-gears) module with the [Python plugin](https://docs.redis.com/latest/modules/redisgears/python/) is installed on the Redis Enterprise cluster.

The Python plugin can be installed explicitly or alongside with the [JVM plugin](https://docs.redis.com/latest/modules/redisgears/jvm/) if the latter is needed on the cluster for other purposes.

Use the [`redis-di create`]() command in Write-behind CLI to install RedisGears.

## Download RedisGears

Download RedisGears based on the Linux distribution of where Redis Enterprise is installed.

### Ubuntu 20.04

```bash
curl -s --tlsv1.3 https://redismodules.s3.amazonaws.com/redisgears/redisgears.Linux-ubuntu20.04-x86_64.-withdeps.zip -o /tmp/redis-gears.zip
```

### Ubuntu 18.04

```bash
curl -s --tlsv1.3 https://redismodules.s3.amazonaws.com/redisgears/redisgears.Linux-ubuntu18.04-x86_64.-withdeps.zip -o /tmp/redis-gears.zip
```

### RHEL8

```bash
curl -s https://redismodules.s3.amazonaws.com/redisgears/redisgears.Linux-rhel8-x86_64.-withdeps.zip -o /tmp/redis-gears.zip
```

### RHEL7

```bash
curl -s https://redismodules.s3.amazonaws.com/redisgears/redisgears.Linux-rhel7-x86_64.-withdeps.zip -o /tmp/redis-gears.zip
```
