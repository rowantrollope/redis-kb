---
title: Redis Cloud changelog (December 2024)
url: https://redis.io/docs/latest/operate/rc/changelog/2024/december-2024/
retrieved_utc: '2026-04-09T20:45:56.990737+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rc/changelog/2024/december-2024/index.html.md
---

# Redis Cloud changelog (December 2024)

```json metadata
{
  "title": "Redis Cloud changelog (December 2024)",
  "description": "New features, enhancements, and other changes added to Redis Cloud during December 2024.",
  "categories": ["docs","operate","rc"],
  "tableOfContents": {"sections":[{"children":[{"id":"logs-viewer-role","title":"Logs Viewer role"},{"id":"redis-flex-preview-on-redis-cloud-essentials","title":"Redis Flex preview on Redis Cloud Essentials"}],"id":"new-features","title":"New features"}]}

,
  "codeExamples": []
}
```
## New features

### Logs Viewer role

You can now add a user with the **Logs Viewer** role in the [Access Management]() screen. Logs Viewers can only use the [Redis Cloud API]() [`GET logs/`](https://api.redislabs.com/v1/swagger-ui/index.html#/Account/getAccountSystemLogs) endpoint. 

See [Team Management roles]() to see an overview of user roles and their permissions.

### Redis Flex preview on Redis Cloud Essentials

Redis Flex is now available in Preview on Redis Cloud Essentials.

Redis Flex databases have a tiered solid state drive (SSD) and RAM architecture. Using SSDs instead of RAM significantly reduces infrastructure costs, which means developers can build applications that require large datasets using the same Redis API.

See [Create a Redis Flex database]() for more info.