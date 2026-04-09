---
title: Search concepts
url: https://redis.io/docs/latest/develop/ai/search-and-query/advanced-concepts/
retrieved_utc: '2026-04-09T20:45:53.651956+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/develop/ai/search-and-query/advanced-concepts/index.html.md
---

# Search concepts

```json metadata
{
  "title": "Search concepts",
  "description": "Details about query syntax, aggregation, scoring, and other search and query options",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "tableOfContents": {"sections":[{"id":"indexing-features","title":"Indexing features"},{"id":"query-features","title":"Query features"},{"id":"full-text-search-features","title":"Full-text search features"},{"id":"cluster-support","title":"Cluster support"},{"id":"supported-platforms","title":"Supported platforms"}]}

,
  "codeExamples": []
}
```
Redis Open Source supports the following Redis Search features. This article provides you an overview.

## Indexing features

* Secondary indexing
* Vector indexing
* Index on [JSON]() documents
* Full-text indexing of multiple fields in a document
* Incremental indexing without performance loss
* Document deletion and updating with index garbage collection


## Query features

* Multi-field queries
* Query on [JSON]() documents
* [Aggregation]()
* Boolean queries with AND, OR, and NOT operators between subqueries
* Optional query clauses
* Retrieval of full document contents or only their IDs
* Exact phrase search and slop-based search
* Numeric filters and ranges
* Geo-filtering using Redis [geo commands](?group=geo)
* [Vector search]()
* [Key and field expiration behavior]()


## Full-text search features

* [Prefix-based searches]()
* Field weights
* [Auto-complete]() and fuzzy prefix suggestions
* [Stemming]()-based query expansion for [many languages]() using [Snowball](http://snowballstem.org/)
* Support for custom functions for query expansion and scoring (see [Extensions]())
* Unicode support (UTF-8 input required)
* Document ranking

## Cluster support

The Redis Search features of Redis Open Source are also available for distributed databases that can scale to billions of documents and hundreds of servers.

## Supported platforms
Redis Open Source is developed and tested on Linux and macOS on x86_64 CPUs.

Atom CPUs are not supported.

<br/>