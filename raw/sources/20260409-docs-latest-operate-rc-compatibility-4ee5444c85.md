---
title: Redis Cloud compatibility with Redis Open Source
url: https://redis.io/docs/latest/operate/rc/compatibility/
retrieved_utc: '2026-04-09T20:46:00.325513+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rc/compatibility/index.html.md
---

# Redis Cloud compatibility with Redis Open Source

```json metadata
{
  "title": "Redis Cloud compatibility with Redis Open Source",
  "description": "Redis Cloud compatibility with Redis Open Source.",
  "categories": ["docs","operate","rc"],
  "tableOfContents": {"sections":[{"id":"resp-compatibility","title":"RESP compatibility"},{"id":"client-side-caching-compatibility","title":"Client-side caching compatibility"},{"id":"compatibility-with-redis-cluster-api","title":"Compatibility with Redis Cluster API"}]}

,
  "codeExamples": []
}
```
Both [Redis Software]() and Redis Cloud are compatible with Redis Open Source.



## RESP compatibility

Redis Software and Redis Cloud support RESP2 and RESP3. In Redis Cloud, you can choose between RESP2 and RESP3 when you [create a database]() and you can change it when you [edit a database](). For more information about the different RESP versions, see the [Redis serialization protocol specification](#resp-versions).

## Client-side caching compatibility

Redis Software and Redis Cloud support [client-side caching]() for databases with Redis versions 7.4 or later. See [Client-side caching compatibility with Redis Software and Redis Cloud]() for more information about compatibility.

## Compatibility with Redis Cluster API

Redis Cloud supportsÂ [Redis Cluster API]() on Redis Cloud Pro if it is enabled for a database. Review [Redis Cluster API architecture]() to determine if you should enable this feature for your database.