---
title: Redis 8.4 release notes and breaking changes
url: https://redis.io/docs/latest/operate/rc/changelog/version-release-notes/8-4/
retrieved_utc: '2026-04-09T20:45:52.718949+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rc/changelog/version-release-notes/8-4/index.html.md
---

# Redis 8.4 release notes and breaking changes

```json metadata
{
  "title": "Redis 8.4 release notes and breaking changes",
  "description": "Release notes and breaking changes for Redis 8.4 on Redis Cloud.",
  "categories": ["docs","operate","rc"],
  "tableOfContents": {"sections":[{"id":"known-limitations","title":"Known limitations"}]}

,
  "codeExamples": []
}
```
Redis 8.4 builds on the foundation of Redis 8.2 with significant enhancements to cluster operations, string manipulation, and stream processing capabilities.. For more information on the changes in Redis 8.4, see [What's new in Redis 8.4]() and review the Redis Open Source [8.4 release notes]().

## Known limitations

When using Redis 8.4, be aware of these current limitations:

- Search commands (`FT.SEARCH`, `FT.AGGREGATE`, `FT.CURSOR`, `FT.HYBRID`) and time series commands (`TS.MGET`, `TS.MRANGE`, `TS.MREVRANGE`, `TS.QUERYINDEX`) may return partial results or duplicates during atomic slot migration.
- `FT.PROFILE`, `FT.EXPLAIN`, and `FT.EXPLAINCLI` don't include `FT.HYBRID` options.
- `FT.HYBRID` metrics aren't displayed in `FT.INFO` and `INFO` commands.
- Several `FT.HYBRID` options (`EXPLAINSCORE`, `SHARD_K_RATIO`, `YIELD_DISTANCE_AS`, `WITHCURSOR`) are not yet available.
- Post-filtering after the `COMBINE` step using `FILTER` is not currently supported.


