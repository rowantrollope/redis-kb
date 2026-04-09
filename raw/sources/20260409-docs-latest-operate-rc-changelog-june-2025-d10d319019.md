---
title: Redis Cloud changelog (June 2025)
url: https://redis.io/docs/latest/operate/rc/changelog/june-2025/
retrieved_utc: '2026-04-09T20:45:59.354988+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rc/changelog/june-2025/index.html.md
---

# Redis Cloud changelog (June 2025)

```json metadata
{
  "title": "Redis Cloud changelog (June 2025)",
  "description": "New features, enhancements, and other changes added to Redis Cloud during June 2025.",
  "categories": ["docs","operate","rc"],
  "tableOfContents": {"sections":[{"children":[{"id":"block-public-endpoints","title":"Block public endpoints"},{"id":"free-database-selection","title":"Free database selection"}],"id":"new-features","title":"New features"},{"children":[{"id":"faster-scaling-with-redis-hashing-policy","title":"Faster scaling with Redis hashing policy"}],"id":"enhancements","title":"Enhancements"}]}

,
  "codeExamples": []
}
```
## New features

### Block public endpoints

Users with Redis Cloud Pro databases can now choose to block public endpoints for all databases in their subscription. See [Block public endpoints]() for more information.

### Free database selection

You can now create a free database from the [Create a database]() page. Free databases are perfect for learning and exploring Redis. You get 30 MB of space for you to learn Redis concepts and develop application prototypes.

You can only have one free database per account. If you already have a free database, you can [delete it]() or [upgrade it to a paid Essentials plan]() before creating a new one.

## Enhancements

### Faster scaling with Redis hashing policy

Starting June 24, 2025, accounts with the [Redis hashing policy]() can create databases that scale faster. This makes resharding operations up to 40% faster than before.

Faster scaling requires a new database created after June 24, 2025, running Redis 7.4 or later, with the [Redis hashing policy]() selected.

For these databases, this enhancement is enabled automatically, ensuring that all future resharding operations complete faster than ever.
