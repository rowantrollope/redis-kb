---
title: Redis Data Integration (RDI)
url: https://redis.io/docs/latest/operate/rdi/
retrieved_utc: '2026-04-09T20:45:58.694677+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rdi/index.html.md
---

# Redis Data Integration (RDI)

```json metadata
{
  "title": "Redis Data Integration (RDI)",
  "description": "Keep Redis in sync with a primary database in near real time.",
  "categories": ["docs","operate"],
  "tableOfContents": {"sections":[]}

,
  "codeExamples": []
}
```
Redis Data Integration (RDI) is a [change data capture](https://en.wikipedia.org/wiki/Change_data_capture) (CDC) system that tracks changes to the data in a non-Redis source database and makes corresponding changes to a Redis target database. You can use the target as a cache to improve performance because it will typically handle read queries much faster than the source.

See the main [RDI docs section]()
under [Libraries and tools]() to learn how to install and use RDI on your own servers.  See the
[Redis Cloud RDI guide]() to learn how to set up RDI for a cloud database.
