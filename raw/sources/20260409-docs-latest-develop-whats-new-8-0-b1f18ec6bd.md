---
title: Redis 8.0
url: https://redis.io/docs/latest/develop/whats-new/8-0/
retrieved_utc: '2026-04-09T20:45:53.340016+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/develop/whats-new/8-0/index.html.md
---

# Redis 8.0

```json metadata
{
  "title": "Redis 8.0",
  "description": "What's new in Redis 8.0",
  "categories": ["docs","operate","rs","rc"],
  "tableOfContents": {"sections":[{"children":[{"id":"vector-set-beta","title":"Vector set [beta]"},{"id":"new-hash-commands","title":"New hash commands"}],"id":"new-features","title":"New features"},{"children":[{"id":"redis-search-improvements","title":"Redis Search Improvements"},{"id":"access-control-improvements","title":"Access Control Improvements"},{"id":"performance-improvements","title":"Performance improvements"}],"id":"improvements","title":"Improvements"},{"children":[{"id":"breaking-changes","title":"Breaking changes"},{"id":"other-changes","title":"Other changes"}],"id":"changes","title":"Changes"},{"id":"component-versions","title":"Component versions"}]}

,
  "codeExamples": []
}
```
Redis 8.0 introduces powerful new capabilities, including the beta release of the Vector Set data structure, designed for AI use cases such as semantic search and recommendation systems.

This release also delivers over 30 performance improvements, including:
- Up to 87% faster command execution
- Up to 18% faster replication

Additionally, the Redis Community Edition has been renamed to Redis Open Source, marking a shift toward a unified, modern distribution. This version offers the full power of Redis â no modules, no fragmentation â just Redis.

Below is a detailed breakdown of these updates.

## New features
### Vector set [beta]
The new `Vector set` data structure supports high-dimensional vector similarity search, which is ideal for AI use cases such as semantic search and recommendation systems. Vector set complements Redisâs existing vector search capabilities via Redis Search and is currently available in beta. APIs and behaviors may change in future releases.

### New hash commands
Redis 8 builds on Redis 7.4âs introduction of field-level expiration in hashes and adds three new commands for working with hashes:
- [HGETEX](https://redis.io/docs/latest/commands/hgetex/): Fetch a hash field and optionally set an expiration
- [HSETEX](https://redis.io/docs/latest/commands/hsetex/): Set a hash field and optionally set an expiration
- [HGETDEL](https://redis.io/docs/latest/commands/hgetdel/): Fetch and delete a hash field

These commands simplify common caching and session management usage patterns.

## Improvements
### Redis Search Improvements
Redis Search allows users to use Redis as a document database, a vector database, a secondary index, and a search engine. With Redis Search, users can define indexes for hash and JSON documents, and use a rich query language for vector search, full-text search, geospatial queries, and aggregations.

Use cases include:

- Vector Search: Search based on semantic similarity using vector embeddings stored in `JSON` or `hashes`
- Exact Matching: Lookups using filters, tags, and ranges
- Full-Text Search: Supports stemming, synonyms, and fuzzy matching

Redis Search powers a wide range of applications, from AI retrieval-augmented generation (RAG) systems to full-featured search engines.

### Access Control Improvements
Access Control Lists (ACLs) have been updated to support the new data structures introduced in Redis 8. Existing ACL categories such as `@read` and `@write` now include commands for `JSON`, `time series`, `VECTOR`, and `probabilistic` data structures.

These updates allow for more precise control over which operations users can perform on each data structure.

### Performance improvements
Redis 8 delivers the largest performance leap in Redis history with over 30 optimizations, including:
- Up to 87% lower command latency
- 35% memory savings for replica nodes
- 16x more query processing capacity with horizontal and vertical scaling

These improvements benefit both single-node and clustered deployments. More details are available in the [Redis 8 GA](https://redis.io/blog/redis-8-ga/) blog post.

## Changes

### Breaking changes
#### ACL behavior
Commands from included modules are now covered under standard categories (e.g., `+@read`, `+@write`). For example, a user with `+@all` `-@write` will no longer be able to execute `JSON.SET` as they could before.
Explicit inclusion of new command categories is required to maintain access.

#### Redis Search



### Other changes
#### One Redis
Over time, Redis introduced several modules to address new use cases such as search, vector similarity, time series analysis, and probabilistic modeling. While these modules extended Redisâs functionality, managing version compatibility and module installation introduced friction.

Redis Stack partially solved this by bundling modules together, but it also created fragmentation across the ecosystem.

Redis 8 merges Redis Stack and Redis Community Edition into a single unified distribution: Redis Open Source. All previously modular functionality is now built into the Redis Open Source package, eliminating the need to manage separate modules. You now get a single, consistent feature set across all deployments.

## Component versions
Redis 8.0 delivers just Redis â no modules, no fragmentation.
