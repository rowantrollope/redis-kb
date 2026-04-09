---
title: Probabilistic
url: https://redis.io/docs/latest/develop/data-types/probabilistic/
retrieved_utc: '2026-04-09T20:46:01.368687+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/develop/data-types/probabilistic/index.html.md
---

# Probabilistic

```json metadata
{
  "title": "Probabilistic",
  "description": "Probabilistic data structures in Redis",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "tableOfContents": {"sections":[]}

,
  "codeExamples": []
}
```
*Probabilistic data structures* give approximations of statistics such as
counts, frequencies, and rankings rather than precise values.
The advantage of using approximations is that they are adequate for
many common purposes but are much more efficient to calculate. They
sometimes have other advantages too, such as obfuscating times, locations,
and other sensitive data.

Probabilistic data structures are available as part of Redis Open Source and they are available in Redis Software and Redis Cloud.
See
[Install Redis Open Source]() or
[Install Redis Software]()
for full installation instructions.