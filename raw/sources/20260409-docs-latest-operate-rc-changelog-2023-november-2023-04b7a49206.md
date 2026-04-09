---
title: Redis Cloud changelog (November 2023)
url: https://redis.io/docs/latest/operate/rc/changelog/2023/november-2023/
retrieved_utc: '2026-04-09T20:45:59.395032+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rc/changelog/2023/november-2023/index.html.md
---

# Redis Cloud changelog (November 2023)

```json metadata
{
  "title": "Redis Cloud changelog (November 2023)",
  "description": "New features, enhancements, and other changes added to Redis Cloud during November 2023.",
  "categories": ["docs","operate","rc"],
  "tableOfContents": {"sections":[{"children":[{"id":"new-fixed-plans","title":"New Fixed plans"},{"id":"redis-72-fixed-region-support","title":"Redis 7.2 Fixed region support"}],"id":"new-features","title":"New features"},{"children":[{"id":"heroku-add-on-free-database-limit","title":"Heroku add-on free database limit"}],"id":"deprecations","title":"Deprecations"}]}

,
  "codeExamples": []
}
```
## New features

### New Fixed plans

Redis is updating our [Fixed subscriptions]() on Redis Cloud. These plans offer increased capacity at lower prices compared to legacy plans.

See [Fixed plan subscription tiers]() for an updated list of all Fixed plans.

### Redis 7.2 Fixed region support

You can now use Redis 7.2 on [Fixed subscriptions]() in `us-east-1` on Amazon Web Services. New Fixed subscriptions created in `us-east-1` will use Redis 7.2, and existing subscriptions will continue to use Redis 6.2.

Redis 7.2 introduces several changes to existing Redis commands; see the [list of breaking changes]() published in June's changelog for more details.

## Deprecations

### Heroku add-on free database limit

Heroku add-ons for [Redis Cloud](https://elements.heroku.com/addons/rediscloud) and [Memcached Cloud](https://elements.heroku.com/addons/memcachedcloud) are limited to one free database per Heroku account. As of November 1st, users will not be able to add a new free database if they already have one or more free databases. There will be no impact to existing free and paid databases.

Additionally, Heroku Review and CI Apps will provision a 100 MB database for the [Redis Cloud](https://elements.heroku.com/addons/rediscloud) and [Memcached Cloud](https://elements.heroku.com/addons/memcachedcloud) add-on selections.

