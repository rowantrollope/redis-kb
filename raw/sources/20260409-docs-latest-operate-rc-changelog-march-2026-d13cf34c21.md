---
title: Redis Cloud changelog (March 2026)
url: https://redis.io/docs/latest/operate/rc/changelog/march-2026/
retrieved_utc: '2026-04-09T20:45:58.311600+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rc/changelog/march-2026/index.html.md
---

# Redis Cloud changelog (March 2026)

```json metadata
{
  "title": "Redis Cloud changelog (March 2026)",
  "description": "New features, enhancements, and other changes added to Redis Cloud during March 2026.",
  "categories": ["docs","operate","rc"],
  "tableOfContents": {"sections":[{"children":[{"id":"passwordless-authentication-for-redis-cloud-pro","title":"Passwordless authentication for Redis Cloud Pro"},{"id":"redis-84-on-redis-cloud-pro","title":"Redis 8.4 on Redis Cloud Pro"},{"id":"automatic-database-upgrades","title":"Automatic database upgrades"}],"id":"new-features","title":"New features"}]}

,
  "codeExamples": []
}
```
## New features

### Passwordless authentication for Redis Cloud Pro

Passwordless authentication is now available for Redis Cloud Pro databases on subscriptions that have [blocked the public endpoint](). For more information, see [Turn on passwordless authentication for the default user]().
### Redis 8.4 on Redis Cloud Pro

Redis 8.4 is now available for [Redis Cloud Pro databases]() in select regions.

Redis 8.4 builds on the foundation of Redis 8.2 with significant enhancements to cluster operations, string manipulation, and stream processing capabilities. For more information on the changes in Redis 8.4, see [What's new in Redis 8.4]() and review the Redis Open Source [8.4 release notes]().

### Automatic database upgrades

All Redis Cloud databases running Redis 8.4 and later will be automatically upgraded to the next minor version upon release. For example, all Redis 8.4 databases will be upgraded to Redis 8.6 when it is available on Redis Cloud.

Redis Cloud Pro users can opt out of minor version auto-upgrades. See [Version management]() for more details.
