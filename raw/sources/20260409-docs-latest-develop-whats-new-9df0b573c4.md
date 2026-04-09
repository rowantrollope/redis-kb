---
title: What's new?
url: https://redis.io/docs/latest/develop/whats-new/
retrieved_utc: '2026-04-09T20:45:55.016479+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/develop/whats-new/index.html.md
---

# What's new?

```json metadata
{
  "title": "What's new?",
  "description": "High-level description of important updates to the Develop section",
  "categories": ["docs","operate","rs","rc"],
  "tableOfContents": {"sections":[{"children":[{"id":"tools","title":"Tools"},{"id":"redis-ai-vectors","title":"Redis AI \u0026 Vectors"},{"id":"data-types","title":"Data Types"},{"id":"client-libraries","title":"Client Libraries"},{"id":"documentation-updates","title":"Documentation Updates"},{"id":"redis-version-updates","title":"Redis Version Updates"}],"id":"q1-2026-january-march-updates","title":"Q1 2026 (January - March) Updates"},{"children":[{"id":"tools","title":"Tools"},{"id":"redis-ai-vectors","title":"Redis AI \u0026 Vectors"},{"id":"client-libraries","title":"Client Libraries"},{"id":"documentation-updates","title":"Documentation Updates"}],"id":"q4-2025-october-december-updates","title":"Q4 2025 (October - December) Updates"},{"children":[{"id":"tools","title":"Tools"},{"id":"redis-ai-vectors","title":"Redis AI \u0026 Vectors"},{"id":"data-types","title":"Data Types"},{"id":"client-libraries","title":"Client Libraries"},{"id":"documentation-updates","title":"Documentation Updates"}],"id":"q3-2025-july-september-updates","title":"Q3 2025 (July - September) Updates"},{"children":[{"id":"tools","title":"Tools"},{"id":"redis-ai-vectors","title":"Redis AI \u0026 Vectors"},{"id":"redis-80-82-features","title":"Redis 8.0 \u0026 8.2 Features"},{"id":"data-types","title":"Data Types"},{"id":"client-libraries","title":"Client Libraries"},{"id":"documentation-structure-navigation","title":"Documentation Structure \u0026 Navigation"},{"id":"protocol-technical-updates","title":"Protocol \u0026 Technical Updates"}],"id":"q2-2025-april-june-updates","title":"Q2 2025 (April - June) Updates"},{"children":[{"id":"tools","title":"Tools"},{"id":"redis-ai-vectors","title":"Redis AI \u0026 Vectors"},{"id":"data-types","title":"Data Types"},{"id":"commands-api-docs","title":"Commands \u0026 API Docs"},{"id":"search-query","title":"Search \u0026 Query"},{"id":"client-libraries","title":"Client Libraries"}],"id":"q1-2025-january-march-updates","title":"Q1 2025 (January - March) Updates"},{"id":"q4-2024-october-december-updates","title":"Q4 2024 (October - December) Updates"},{"id":"q3-2024-july-september-updates","title":"Q3 2024 (July - September) Updates"}]}

,
  "codeExamples": []
}
```
## Q1 2026 (January - March) Updates

### Tools

- Redis Insight [v3.2.0 release notes]()
- Redis Insight [v3.0.3 release notes]()
- Redis Insight [v2.68.0 release notes]()
- Redis Insight [v2.66.0 release notes]()

---

### Redis AI & Vectors

- Added [Featureform documentation]() for feature engineering workflows
  - [Overview]()
  - [Quickstart guide]()
  - [Provider connections]()
  - [Datasets and transformations]()
  - [Features and labels]()
  - [Training sets and feature views]()
  - [Streaming features]()
- Added [n8n vector store integration]()
- Updated [RedisVL 0.7.0 documentation]()
- Updated [RedisVL 0.9.1 documentation]()
- Updated [RedisVL 0.12.1 documentation]() (28 pages)

---

### Data Types

- Enhanced [example progression]() with metadata for:
  - [Strings]()
  - [Hashes]()
  - [Lists]()
  - [Sets]()
  - [Sorted sets]()
  - [Bitmaps]()
  - [Geospatial]()
  - [JSON]()
  - [Time series]()
  - [Vector sets]()

---

### Client Libraries

#### Ruby (NEW)
- Added [Ruby client documentation]()
- Landing page code examples for redis-rb

#### ioredis (NEW)
- Added [ioredis connect page]()

#### node-redis (JavaScript)
- Added Smart client handoffs section in the Connect page

#### Rust
- Added [Rust AMR/EntraID connection page]()
- Added Rust error handling documentation
- Added Rust transactions and pipelines documentation

#### Python (redis-py)
- Updated failover documentation with initial health checks
- Added failback configuration details
- Added observability page
- Added Smart client handoffs section in the Connect page

#### Java (Jedis)
- Added failback configuration section
- Updated failover behavior documentation

#### Java (Lettuce)
- Added failover documentation
- Added `LagAwareStrategy` dependencies
- Added Smart client handoffs section in the Connect page

#### .NET (NRedisStack)
- Added [FusionCache integration page]()

#### Go
- Added observability page
- Added Smart client handoffs section in the Connect page

---

### Documentation Updates

- Added BinderHub support for "Run in browser" functionality with Python examples
- Added Jupyter notebook support with pre-configured environments
- Enhanced example progression metadata across all data types
- Added testable code example shortcodes with language-specific markers
- Fixed fuzzy search documentation with specific attribute examples
- Updated client library description differences across all major clients
- Added observability overview with OpenTelemetry metrics
- Added Smart client handoffs overview
- Docs for n8n Redis vector store integration
- Added railroad diagrams and API methods to all command pages

---

### Redis Version Updates

- [Redis 8.6]() - Stream idempotency, least recently modified eviction policies, hot key detection, TLS certificate-based authentication, enhanced time series with NaN support, memory optimizations
- [Redis 8.4]() - Updated documentation (removed RC1 designation)

## Q4 2025 (October - December) Updates

### Tools

- Enhanced Redis Insight documentation with autocomplete features

---

### Redis AI & Vectors

- Launched [AI Agent Builder]() - interactive code generator for production-ready AI agents
- Documented [RedisVL 0.9.0]() (28 pages):
  - Vector search and indexing
  - Semantic caching
  - Message history management
  - Rerankers and routers
  - Vectorizers
- Added [AI video tutorials]() with YouTube content
- Added [AI notebook collection]() with notebook links
- Added [LangCache documentation]() with API examples

---

### Client Libraries

#### Rust (NEW)
- Added [Rust client documentation]()
- Enabled Rust-Sync and Rust-Async client variants
- Landing page code examples for Rust

#### Java (Jedis)
- Added [vector set embedding examples]()

#### .NET (NRedisStack)
- Added [vector set embedding examples]()
- Enabled C#-Sync and C#-Async client variants with async examples

---

### Documentation Updates

- Integrated BinderHub for "Run in browser" functionality with Python examples
- Launched Testable Code Examples (TCE) framework for hands-on learning
- Added new integration guides (cloud platforms, monitoring tools, AI/ML frameworks)

---

## Q3 2025 (July - September) Updates

### Tools

- Added [redis-cli installation instructions]()

---

### Redis AI & Vectors

- Updated [vector types documentation]() for INT8 and UINT8
- Added [GEO search precision information]()
- Enhanced [LangCache SDK]() with savings calculator and improved API documentation

---

### Data Types

- [Bitmaps]():
  - Added BITOP documentation with Python testable code examples
  - Added bit operation diagrams

---

### Client Libraries

#### Java (Jedis)
- Added [vector set embedding examples]()

#### .NET (NRedisStack)
- Added [vector set embedding examples]()
- Enabled C#-Sync and C#-Async client variants with async examples on the landing page

#### Rust (NEW)
- Added initial [Rust client documentation]()
- Enabled Rust-Sync and Rust-Async client variants
- Landing page code examples for Rust

---

### Documentation Updates

- Added [close/quit details]() to client landing pages
- Added [redlock-universal]() to Redlock implementations list
- Fixed [keyspace notifications]() typo
- Updated Unicode quotes to ASCII throughout documentation
- Fixed broken links and improved cross-references

## Q2 2025 (April - June) Updates

### Tools

- Redis Insight [v2.70.1 release notes]()
- Redis Insight [v1.4.0 release notes]()
- Updated [Redis Insight pages]() with consistent image-card layout
- Added Redis Insight SVG icons and download links across [tools documentation]()

---

### Redis AI & Vectors

- Reorganized [search and query documentation]() under AI section
- Added [AI video tutorials]() with YouTube content
- Added [AI notebook collection]() with 8 new notebook links
- Expanded vector examples across multiple clients:
  - [Python vector sets]()
  - [Go vector sets]()
  - [JavaScript vector sets]()
  - [Lettuce vector queries]()
  - [Lettuce vector sets]()
- Updated [redisvl documentation]() for versions 0.6.0-0.8.2
- Added [LangCache SDK]() documentation with [API reference]()

---

### Redis 8.0 & 8.2 Features

- [Redis Open Source 8.2 documentation]()
- Updated [Redis 8.0 release notes]()
- [Redis Search expiration capabilities]() in Redis 8
- Enhanced [TAG documentation]() per GitHub issues
- [Vector quantization and compression]() moved to dedicated page

---

### Data Types

- TimeSeries:
  - [Enhanced time series examples]() with query and aggregation info
  - Added testable code examples (TCE) support
- Probabilistic:
  - Added testable examples for [Python](), [C#](), [Java](), and [Go]()
  - Updated [Cuckoo filter documentation]()

---

### Client Libraries

#### Python (redis-py)
- Added [reconnection examples]()
- Enhanced [timeout and retry details]()
- Fixed [pip install command]() for redis-py entraid extension
- Added [Binder environment links]() for Python examples

#### Java (Jedis)
- Updated to [latest Jedis version]()
- Added [reconnection examples]()
- Enhanced [probabilistic data type examples]()

#### Node.js
- Added [command reliability information]()
- Fixed [reconnection details]()

#### .NET (NRedisStack)
- Added [retries and timeouts]() to production usage advice
- Enhanced [dialect 2 notes]()

#### Go (go-redis)
- Added [retries and timeouts]() to production usage
- Enhanced [dialect 2 notes]()
- Added [Connect with AMR]() page.

#### Lettuce
- Updated to [latest Lettuce version]()
- Added [command reliability information]()
- Added [JSON query examples]()

#### PHP (Predis)
- Enhanced [dialect 2 notes]()

---

### Documentation Structure & Navigation

- Reorganized [develop section navigation]() with improved sidebar structure
- Moved [programmability section]() into develop area
- Relocated [patterns folder]() to clients section
- Added [Using commands section]() to develop area
- Enhanced [keyspace notifications]() and [pub/sub]() documentation
- Updated [transactions]() and [pipeline]() pages
- Added comprehensive aliases for backward compatibility

---

### Protocol & Technical Updates

- Fixed [RESP protocol specification]() attribute byte documentation
- Enhanced [FT.AGGREGATE expression precedence]() documentation
- Updated [distributed locks]() documentation
- Fixed [FP32 vectorsets endianness]() documentation

## Q1 2025 (January - March) Updates

### Tools

- Redis Insight [v2.66 release notes]()
- Updated CLI output samples for [`bigkeys`, `memkeys`, `keystats`]()

---

### Redis AI & Vectors

- Expanded vector examples:
  - [Python]()
  - [Node.js]()
  - [Java (Jedis)]()
  - [Go]()
  - [.NET]()
- Updated AI integrations:
  - [AI overview]()
  - [RAG intro]()
  - [Redis in AI]()

---

### Data Types

- TimeSeries:
  - [`COMPACTION_POLICY`]()
  - [Client-side caching update]()
- JSON:
  - [Active memory defragmentation]()
- Probabilistic:
  - [Bloom filter]()
  - [Count-min sketch]()
  - [Top-K]()
  - [Cuckoo filter]()

---

### Commands & API Docs

- Pages updated for format and accuracy:
  - [ACL SETUSER]()
  - [JSON.GET]()
  - [TS.ADD]()
  - [SCAN]()
  - [SORT]()
- RESP3 reply types documented in [Hiredis command page]()
- [CSC behavior clarified]()

---

### Search & Query

- Best practices:
  - [Dev-to-prod guide]()
  - [Scalable queries]()
  - [Index lifecycle]()
- New/updated topics:
  - [Autocomplete]()
  - [Escaping & tokenization]()
  - [Geo indexing]()
  - [Sorting, scoring, stemming]()

---

### Client Libraries

#### Go
- [Trans/pipe examples]()
- [JSON queries]()

#### .NET
- [Vector search]()
- [Trans/pipe usage]()
- [JSON queries]()

#### Java (Jedis)
- [Vector search]()
- [Trans/pipe usage]()

#### Node.js
- [Vector queries]()
- [Trans/pipe examples]()
- [JSON queries]()

#### Redis-py
- [ScanIter usage]()
- [Vector search]()
- [Trans/pipe usage]()
- [JSON queries]()

#### Lettuce
- [Cluster connection]()
- [Production usage]()

#### Hiredis
- Full client guide:
  - [Overview]()
  - [Connect]()
  - [Issue commands]()
  - [Handle replies]()
  - [Transactions and pipelines]()



## Q4 2024 (October - December) Updates

* Updated the RESP3 specification document to include the [attribute type]().
* Updates to the [key eviction]() page.
* Updates to the Redis Insight page related to its new Redis Search auto-completion [feature]().
* Restructured and added testable connection examples to the [client pages]().
* Added [Redis Open Source]() and [Redis Stack]() release notes.
* Added new [Redis for AI]() page.
* Added new [Predis (PHP client library)]() page.

## Q3 2024 (July - September) Updates

* Updated the [RAG with Redis quick start guide]().
* Updates for [Redis Open Source version 7.4]().
* Added new [Redis Insight debugging]() page.
* Completed a major re-write/restructuring of the [vector indexing page]().
* Added new [client-side caching page]().
* Added new documentation for the [RDI in Redis Insight feature]().
* Added new documentation for the [Redis for VS Code feature]().
* Added multi-language code examples to Redis Search [query]() pages.
* Added client-side caching information to the [supported clients]() pages.
* Numerous changes to the [Redis client content]().
