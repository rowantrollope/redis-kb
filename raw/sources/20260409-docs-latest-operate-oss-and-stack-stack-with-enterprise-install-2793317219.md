---
title: Install and upgrade modules
url: https://redis.io/docs/latest/operate/oss_and_stack/stack-with-enterprise/install/
retrieved_utc: '2026-04-09T20:45:52.842086+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/oss_and_stack/stack-with-enterprise/install/index.html.md
---

# Install and upgrade modules

```json metadata
{
  "title": "Install and upgrade modules",
  "description": "",
  "categories": ["docs","operate","stack"],
  "tableOfContents": {"sections":[{"id":"automatically-enabled-capabilities-in-redis-8","title":"Automatically enabled capabilities in Redis 8"}]}

,
  "codeExamples": []
}
```
Several modules that provide additional Redis capabilities, such as search and query, JSON, time series, and probabilistic data structures, come packaged with [Redis Software](). As of version 8.0, Redis Software includes multiple feature sets, compatible with different Redis database versions.

However, if you want to use additional modules or upgrade a module to a more recent version, you need to:

1. [Install a module package]() on the cluster.
1. [Enable a module]() for a new database or [upgrade a module]() in an existing database.

## Automatically enabled capabilities in Redis 8

Databases created with or upgraded to Redis version 8 or later automatically enable the capabilities (modules) bundled with Redis Software as follows:


