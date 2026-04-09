---
title: Redis Data Integration release notes 1.14.0 (August 2025)
url: https://redis.io/docs/latest/integrate/redis-data-integration/release-notes/rdi-1-14-0/
retrieved_utc: '2026-04-09T20:46:01.454720+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/integrate/redis-data-integration/release-notes/rdi-1-14-0/index.html.md
---

# Redis Data Integration release notes 1.14.0 (August 2025)

```json metadata
{
  "title": "Redis Data Integration release notes 1.14.0 (August 2025)",
  "description": "New RDI API v2 with enhanced pipeline management. Improved Oracle RAC support with configuration scaffolding. Enhanced metrics and monitoring capabilities. Better TLS/mTLS support across components.",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[{"id":"whats-new-in-1140","title":"What's New in 1.14.0"},{"id":"limitations","title":"Limitations"}]}

,
  "codeExamples": []
}
```

RDIâs mission is to help Redis customers sync Redis Enterprise with live data from their slow disk-based databases to:

- Meet the required speed and scale of read queries and provide an excellent and predictable user experience.
- Save resources and time when building pipelines and coding data transformations.
- Reduce the total cost of ownership by saving money on expensive database read replicas.

RDI keeps the Redis cache up to date with changes in the primary database, using a [_Change Data Capture (CDC)_](https://en.wikipedia.org/wiki/Change_data_capture) mechanism.
It also lets you _transform_ the data from relational tables into convenient and fast data structures that match your app's requirements. You specify the transformations using a configuration system, so no coding is required.

## What's New in 1.14.0

- Added support for Google Cloud Spanner databases:
  - Compatible with both Google SQL and PostgreSQL dialects
  - Secure data collection through Apache Flink with built-in TLS/mTLS support
- Fixing: MariaDB TLS connection not working when using TLS to the RDI database
- Introduced RDI operator metrics for better monitoring and troubleshooting of the work of the operator
- The `redis-di status` command now shows a detailed breakdown of the processor processing times:
  - Separate `Transform time` metric showing how long data transformations take
  - Distinct `Write time` metric indicating Redis write operation duration

## Limitations

RDI can write data to a Redis Active-Active database. However, it doesn't support writing data to two or more Active-Active replicas. Writing data from RDI to several Active-Active replicas could easily harm data integrity as RDI is not synchronous with the source database commits.
