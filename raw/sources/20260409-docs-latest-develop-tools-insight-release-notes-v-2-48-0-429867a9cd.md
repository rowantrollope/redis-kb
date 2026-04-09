---
title: Redis Insight v2.48.0, April 2024
url: https://redis.io/docs/latest/develop/tools/insight/release-notes/v.2.48.0/
retrieved_utc: '2026-04-09T20:45:51.411560+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/develop/tools/insight/release-notes/v.2.48.0/index.html.md
---

# Redis Insight v2.48.0, April 2024

```json metadata
{
  "title": "Redis Insight v2.48.0, April 2024",
  "description": "Redis Insight v2.48",
  "categories": null,
  "tableOfContents": {"sections":[{"children":[{"id":"highlights","title":"Highlights"},{"id":"details","title":"Details"}],"id":"248-april-2024","title":"2.48 (April 2024)"}]}

,
  "codeExamples": []
}
```## 2.48 (April 2024)
This is the General Availability (GA) release of Redis Insight 2.48.

### Highlights
- New look, equally fast.
- Learn Redis faster by uploading sample data and a concise tutorial for empty databases.
- Enhance the security and scalability when running Redis Insight on Docker behind a proxy by adding support for the static proxy subpath.


### Details

**Features and improvements**
- [#3233](https://github.com/RedisInsight/RedisInsight/pull/3233) New look, equally fast. We've refreshed our Redis Insight app to align with our new brand look.
- [#3224](https://github.com/RedisInsight/RedisInsight/pull/3224) Jumpstart your Redis journey by uploading sample data with JSON and basic data structures for empty databases. To upload the sample data, navigate to the Browser screen for your empty database and initiate the upload process with just a click.
- [#2711](https://github.com/RedisInsight/RedisInsight/pull/2711) Enhance the security and scalability by running Redis Insight on Docker [behind a proxy](https://github.com/RedisInsight/RedisInsight-reverse-proxy) using the newly added support for the static proxy subpath. Use the `RIPROXYPATH` environment variable to configure the subpath proxy path.
