---
title: Redis Cloud changelog (March 2025)
url: https://redis.io/docs/latest/operate/rc/changelog/march-2025/
retrieved_utc: '2026-04-09T20:45:59.514234+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rc/changelog/march-2025/index.html.md
---

# Redis Cloud changelog (March 2025)

```json metadata
{
  "title": "Redis Cloud changelog (March 2025)",
  "description": "New features, enhancements, and other changes added to Redis Cloud during March 2025.",
  "categories": ["docs","operate","rc"],
  "tableOfContents": {"sections":[{"children":[{"id":"redis-insight-on-redis-cloud","title":"Redis Insight on Redis Cloud"},{"id":"redis-hashing-policy","title":"Redis hashing policy"}],"id":"new-features","title":"New features"},{"id":"deprecations","title":"Deprecations"}]}

,
  "codeExamples": []
}
```
## New features

### Redis Insight on Redis Cloud

Users with select Redis Cloud Essentials databases can now open a browser-based version of [Redis Insight]() directly from Redis Cloud. See [Connect to your database]() to learn how to open Redis Insight from Redis Cloud.

This browser-based version of Redis Insight has a subset of the features of Redis Insight on desktop. For more information, see [Open with Redis Insight on Redis Cloud]().

### Redis hashing policy

Accounts created after March 31, 2025, can select the new [Redis hashing policy]() for their databases when creating a new database. 

The Redis hashing policy is identical to the [hashing policy used by Redis Community Edition](). This policy is recommended for most users. Select it if any of the following conditions apply:
- This is your first Redis Cloud account, and you are starting fresh.
- You are migrating data from Redis Community Edition or other Redis-managed platforms.
- Your application does not use hashtags in database key names.
- Your application uses binary data as key names.

See [Clustering]() for more information.

## Deprecations

- The [Custom hashing policy]() is no longer available for accounts created after March 31, 2025. For all other accounts, this policy is not recommended and will be deprecated in the future. Only select a custom hashing policy if you are already using a custom hashing policy with your existing Redis Cloud databases.