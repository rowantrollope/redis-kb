---
title: Redis Cloud changelog (December 2023)
url: https://redis.io/docs/latest/operate/rc/changelog/2023/december-2023/
retrieved_utc: '2026-04-09T20:45:59.341755+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rc/changelog/2023/december-2023/index.html.md
---

# Redis Cloud changelog (December 2023)

```json metadata
{
  "title": "Redis Cloud changelog (December 2023)",
  "description": "New features, enhancements, and other changes added to Redis Cloud during December 2023.",
  "categories": ["docs","operate","rc"],
  "tableOfContents": {"sections":[{"children":[{"id":"active-active-json-support","title":"Active-Active JSON support"},{"id":"mutual-tls-enhancements","title":"Mutual TLS enhancements"}],"id":"new-features","title":"New features"}]}

,
  "codeExamples": []
}
```
## New features

### Active-Active JSON support

[Active-Active databases]() on Redis Cloud now support the [JSON]() data type.

See [Create an Active-Active subscription]() to learn how to create an Active-Active subscription.

### Mutual TLS enhancements

Databases that support [Transport layer security (TLS)]() now support multiple client certificates for use with mutual TLS. This makes it easier to rotate client certificates outside of a maintenance window. In addition, you can now provide a client Certificate Authority chain to trust any leaf certificate it signed for more flexibility.

See [Transport layer security (TLS)]() to learn how to enable TLS. 

