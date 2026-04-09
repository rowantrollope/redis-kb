---
title: RedisInsight v1.14, may 2023
url: https://redis.io/docs/latest/develop/tools/insight/release-notes/v1.14.0/
retrieved_utc: '2026-04-09T20:45:53.024414+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/develop/tools/insight/release-notes/v1.14.0/index.html.md
---

# RedisInsight v1.14, may 2023

```json metadata
{
  "title": "RedisInsight v1.14, may 2023",
  "description": "RedisInsight v1.14.0",
  "categories": null,
  "tableOfContents": {"sections":[{"id":"1140-may-2023","title":"1.14.0 (May 2023)"},{"id":"headlines","title":"Headlines"},{"children":[{"id":"core","title":"Core"},{"id":"memory-analysis","title":"Memory analysis"}],"id":"details","title":"Details"}]}

,
  "codeExamples": []
}
```
## 1.14.0 (May 2023)

RedisInsight version 1.X was retired on April 30, 2023, and will no longer be supported.
To continue using the best RedisInsight features and capabilities, download the latest RedisInsight version 2.Y from our [website](https://redis.com/redis-enterprise/redis-insight/) or install it from an app store.

This is the maintenance release of RedisInsight 1.14 (v1.14.0).

## Headlines
- Export connections to RedisInsight v2.

## Details

### Core
  - Added support for exporting database connections to easily migrate them to RedisInsight v2 by bulk exporting to a file.
  - Fixed Prompt verification bug for Sentinel instances.

### Memory analysis
  - Added support for `setlistpack` and `streamlistpack3` Redis 7 encoding types parsing.
