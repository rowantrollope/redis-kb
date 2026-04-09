---
title: Redis 8.0 release notes and breaking changes
url: https://redis.io/docs/latest/operate/rc/changelog/version-release-notes/8-0/
retrieved_utc: '2026-04-09T20:45:53.289655+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rc/changelog/version-release-notes/8-0/index.html.md
---

# Redis 8.0 release notes and breaking changes

```json metadata
{
  "title": "Redis 8.0 release notes and breaking changes",
  "description": "Release notes and breaking changes for Redis 8.0 on Redis Cloud.",
  "categories": ["docs","operate","rc"],
  "tableOfContents": {"sections":[{"children":[{"id":"redis-search","title":"Redis Search"}],"id":"breaking-changes","title":"Breaking changes"}]}

,
  "codeExamples": []
}
```
Redis 8.0 introduces powerful new capabilities, including the beta release of the Vector Set data structure, designed for AI use cases such as semantic search and recommendation systems. Redis 8 also merges Redis Stack and Redis Community Edition into a single unified distribution: Redis Open Source. For more information on the changes in Redis 8.0, see [What's new in Redis 8.0]().

## Breaking changes

When new versions of Redis Open Source change existing commands, upgrading your database to a new version can potentially break some functionality. Before you upgrade, read the provided list of breaking changes that affect Redis Cloud and update any applications that connect to your database to handle these changes.

Make sure to review all breaking changes between your current version of Redis and the version you are upgrading to. 



### Redis Search


