---
title: Redis 7.4 release notes and breaking changes
url: https://redis.io/docs/latest/operate/rc/changelog/version-release-notes/7-4/
retrieved_utc: '2026-04-09T20:45:54.488862+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rc/changelog/version-release-notes/7-4/index.html.md
---

# Redis 7.4 release notes and breaking changes

```json metadata
{
  "title": "Redis 7.4 release notes and breaking changes",
  "description": "Release notes and breaking changes for Redis 7.4 on Redis Cloud.",
  "categories": ["docs","operate","rc"],
  "tableOfContents": {"sections":[{"children":[{"id":"security-behavior-changes","title":"Security behavior changes"},{"id":"other-general-behavior-changes","title":"Other general behavior changes"}],"id":"breaking-changes","title":"Breaking changes"}]}

,
  "codeExamples": []
}
```
Redis 7.4 offers hash field expiration and other feature set improvements. For more information on the changes in Redis 7.4, see [What's new in Redis 7.4]().

## Breaking changes

When new versions of Redis Community Edition change existing commands, upgrading your database to a new version can potentially break some functionality. Before you upgrade, read the provided list of breaking changes that affect Redis Cloud and update any applications that connect to your database to handle these changes.

If you're upgrading from Redis 6.4, also review the [Redis 7.2 breaking changes]() before upgrading.

### Security behavior changes

- [#13108](https://github.com/redis/redis/pull/13108) Lua: LRU eviction for scripts generated with `EVAL`. 

### Other general behavior changes

- [#13133](https://github.com/redis/redis/pull/13133) Lua: allocate VM code with jemalloc instead of libc and count it as used memory.

- [#12171](https://github.com/redis/redis/pull/12171) `ACL LOAD`: do not disconnect all clients.