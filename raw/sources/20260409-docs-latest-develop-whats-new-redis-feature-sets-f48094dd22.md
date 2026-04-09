---
title: Redis feature sets
url: https://redis.io/docs/latest/develop/whats-new/redis-feature-sets/
retrieved_utc: '2026-04-09T20:45:57.289789+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/develop/whats-new/redis-feature-sets/index.html.md
---

# Redis feature sets

```json metadata
{
  "title": "Redis feature sets",
  "description": "Highlights of what's new for Redis feature sets",
  "categories": ["docs","operate","rs","rc"],
  "tableOfContents": {"sections":[]}

,
  "codeExamples": []
}
```
A Redis feature set includes a specific Redis database version along with the advanced capabilities and data structures provided by compatible module versions.

To use a new feature introduced in a later feature set, you must upgrade the corresponding components according to the following table.

| Redis feature set | What's new |
|-------------------|------------|
| **Feature set version:** 8.6| See [here]()|
| **Feature set version:** 8.4| See [here]()|
| **Feature set version:** 8.2| See [here]()|
| **Feature set version:** 8.0| See [here]()|
| **Feature set version:** 7.4<br /><br />**Component versions:**<br />[Redis 7.4]()<br />[Search 2.10]()<br />[JSON 2.8]()<br />[Time series 1.12]()<br />[Bloom 2.8]() | **Hash**: <br>- [Expiration of individual hash fields](). <br> **Streams**: <br>- To start reading from the last stream message, use [`XREAD`]() with the new ID value `+`.<br> **Time series**: <br>Insertion-filter for close samples. <br> **JSON**: <br>- A fix to not duplicate `AOF` commands multiple times in [`JSON.MSET`](). <br> **Probabilistic**: <br>- Returns an error if [`CMS.MERGE`]() results in an overflow or underflow. <br> **Redis Search**: <br>- New `BFLOAT16` and `FLOAT16` vector data types, reducing memory consumed by vectors while preserving accuracy. <br>- Support for indexing empty and missing values and enhanced developer experience for queries with exact matching capabilities. <br>- You can match `TAG` fields without needing to escape special characters. <br>- Expanded geospatial search with new `INTERSECT` and `DISJOINT` operators, improved reporting of the memory consumed by the index, and exposed full-text scoring in aggregation pipelines. |
| **Feature set version:** 7.2<br /><br />**Component versions:**<br />[Redis 7.2](https://raw.githubusercontent.com/redis/redis/7.2/00-RELEASENOTES)<br />[Search 2.8]()<br />[JSON 2.6]()<br />[Time series 1.10]()<br />[Bloom 2.6]()<br />[Gears 2.0](https://github.com/RedisGears/RedisGears/releases) | - Performance and resource utilization improvements, including significant memory and speed optimizations for lists, sets, and sorted sets.<br />**JSON**:<br />- New JSON commands: [`JSON.MERGE`]() and [`JSON.MSET`]().<br />**Redis Search:**<br />- [Geo polygon search]().<br>**Compatibility changes**:<br>- Redis 7.2 uses a new format (version 11) for RDB files, which is incompatible with older versions.<br />- Redis feature set 7.2 does not include [graph capabilities](https://redis.io/blog/redisgraph-eol/). |
| **Feature set version:** 6.2<br /><br />**Component versions:**<br />[Redis 6.2](https://raw.githubusercontent.com/redis/redis/6.2/00-RELEASENOTES)<br />[Search 2.6]()<br />[JSON 2.4]()<br />[Time series 1.8]()<br />[Bloom 2.4]()<br />[Graph 2.10]() | **Time series**:<br />- Time series gap filling.<br />**JSON**:<br />- Improved JSON path parser.<br />**Probabilistic:**<br />- New probabilistic data structure t-digest.<br />**Redis Search:**<br />- Wildcard queries for `TEXT` and `TAG`.<br />- Suffix search.<br />- Multi-value indexing and queries.<br />**Graph**:<br />- New pathfinding algorithms for graphs. |

