---
title: Redis data types
url: https://redis.io/docs/latest/develop/data-types/
retrieved_utc: '2026-04-09T20:45:57.069638+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/develop/data-types/index.html.md
---

# Redis data types

```json metadata
{
  "title": "Redis data types",
  "description": "Overview of data types supported by Redis",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "tableOfContents": {"sections":[{"children":[{"id":"strings","title":"Strings"},{"id":"lists","title":"Lists"},{"id":"sets","title":"Sets"},{"id":"hashes","title":"Hashes"},{"id":"sorted-sets","title":"Sorted sets"},{"id":"vector-sets","title":"Vector sets"},{"id":"streams","title":"Streams"},{"id":"geospatial-indexes","title":"Geospatial indexes"},{"id":"bitmaps","title":"Bitmaps"},{"id":"bitfields","title":"Bitfields"},{"id":"json","title":"JSON"},{"id":"probabilistic-data-types","title":"Probabilistic data types"},{"id":"hyperloglog","title":"HyperLogLog"},{"id":"bloom-filter","title":"Bloom filter"},{"id":"cuckoo-filter","title":"Cuckoo filter"},{"id":"t-digest","title":"t-digest"},{"id":"top-k","title":"Top-K"},{"id":"count-min-sketch","title":"Count-min sketch"}],"id":"data-types","title":"Data types"},{"id":"time-series","title":"Time series"},{"id":"adding-extensions","title":"Adding extensions"}]}

,
  "codeExamples": []
}
```
Redis is a data structure server.
At its core, Redis provides a collection of native data types that help you solve a wide variety of problems, from [caching]() to
[queuing]() to
[event processing]().
Below is a short description of each data type, with links to broader overviews and command references.
Each overview includes a comprehensive tutorial with code samples.

## Data types

[Redis Open Source]()
implements the following data types:

- [String](#strings)
- [Hash](#hashes)
- [List](#lists)
- [Set](#sets)
- [Sorted set](#sorted-sets)
- [Vector set](#vector-sets)
- [Stream](#streams)
- [Bitmap](#bitmaps)
- [Bitfield](#bitfields)
- [Geospatial](#geospatial-indexes)
- [JSON](#json)
- [Probabilistic data types](#probabilistic-data-types)
- [Time series](#time-series)

See [Compare data types]()
for advice on which of the general-purpose data types is best for common tasks.

### Strings 

[Redis strings]() are the most basic Redis data type, representing a sequence of bytes.
For more information, see:

* [Overview of Redis strings]()
* [Redis string command reference](?group=string)

### Lists

[Redis lists]() are lists of strings sorted by insertion order.
For more information, see:

* [Overview of Redis lists]()
* [Redis list command reference](?group=list)

### Sets

[Redis sets]() are unordered collections of unique strings that act like the sets from your favorite programming language (for example, [Java HashSets](https://docs.oracle.com/javase/7/docs/api/java/util/HashSet.html), [Python sets](https://docs.python.org/3.10/library/stdtypes.html#set-types-set-frozenset), and so on).
With a Redis set, you can add, remove, and test for existence in O(1) time (in other words, regardless of the number of set elements).
For more information, see:

* [Overview of Redis sets]()
* [Redis set command reference](?group=set)

### Hashes

[Redis hashes]() are record types modeled as collections of field-value pairs.
As such, Redis hashes resemble [Python dictionaries](https://docs.python.org/3/tutorial/datastructures.html#dictionaries), [Java HashMaps](https://docs.oracle.com/javase/8/docs/api/java/util/HashMap.html), and [Ruby hashes](https://ruby-doc.org/core-3.1.2/Hash.html).
For more information, see:

* [Overview of Redis hashes]()
* [Redis hashes command reference](?group=hash)

### Sorted sets

[Redis sorted sets]() are collections of unique strings that maintain order by each string's associated score.
For more information, see:

* [Overview of Redis sorted sets]()
* [Redis sorted set command reference](?group=sorted-set)

### Vector sets

[Redis vector sets]() are a specialized data type designed for managing high-dimensional vector data, enabling fast and efficient vector similarity search within Redis. Vector sets are optimized for use cases involving machine learning, recommendation systems, and semantic search, where each vector represents a data point in multi-dimensional space. Vector sets supports the [HNSW](https://en.wikipedia.org/wiki/Hierarchical_navigable_small_world) (hierarchical navigable small world) algorithm, allowing you to store, index, and query vectors based on the cosine similarity metric. With vector sets, Redis provides native support for hybrid search, combining vector similarity with structured [filters]().
For more information, see:

* [Overview of Redis vector sets]()
* [Redis vector set command reference](?group=vector_set)

### Streams

A [Redis stream]() is a data structure that acts like an append-only log.
Streams help record events in the order they occur and then syndicate them for processing.
For more information, see:

* [Overview of Redis Streams]()
* [Redis Streams command reference](?group=stream)

### Geospatial indexes

[Redis geospatial indexes]() are useful for finding locations within a given geographic radius or bounding box.
For more information, see:

* [Overview of Redis geospatial indexes]()
* [Redis geospatial indexes command reference](?group=geo)

### Bitmaps

[Redis bitmaps]() let you perform bitwise operations on strings. 
For more information, see:

* [Overview of Redis bitmaps]()
* [Redis bitmap command reference](?group=bitmap)

### Bitfields

[Redis bitfields]() efficiently encode multiple counters in a string value.
Bitfields provide atomic get, set, and increment operations and support different overflow policies.
For more information, see:

* [Overview of Redis bitfields]()
* The [`BITFIELD`]() command.

### JSON

[Redis JSON]() provides
structured, hierarchical arrays and key-value objects that match
the popular [JSON](https://www.json.org/json-en.html) text file
format. You can import JSON text into Redis objects and access,
modify, and query individual data elements.
For more information, see:

- [Overview of Redis JSON]()
- [JSON command reference](?group=json)

### Probabilistic data types

These data types let you gather and calculate statistics in a way
that is approximate but highly efficient. The following types are
available:

- [HyperLogLog](#hyperloglog)
- [Bloom filter](#bloom-filter)
- [Cuckoo filter](#cuckoo-filter)
- [t-digest](#t-digest)
- [Top-K](#top-k)
- [Count-min sketch](#count-min-sketch)

### HyperLogLog

The [Redis HyperLogLog]() data structures provide probabilistic estimates of the cardinality (i.e., number of elements) of large sets. For more information, see:

* [Overview of Redis HyperLogLog]()
* [Redis HyperLogLog command reference](?group=hyperloglog)

### Bloom filter

[Redis Bloom filters]()
let you check for the presence or absence of an element in a set. For more
information, see:

- [Overview of Redis Bloom filters]()
- [Bloom filter command reference](?group=bf)

### Cuckoo filter

[Redis Cuckoo filters]()
let you check for the presence or absence of an element in a set. They are similar to
[Bloom filters](#bloom-filter) but with slightly different trade-offs between features
and performance. For more information, see:

- [Overview of Redis Cuckoo filters]()
- [Cuckoo filter command reference](?group=cf)

### t-digest

[Redis t-digest]()
structures estimate percentiles from a stream of data values. For more
information, see:

- [Redis t-digest overview]()
- [t-digest command reference](?group=tdigest)

### Top-K

[Redis Top-K]()
structures estimate the ranking of a data point within a stream of values.
For more information, see:

- [Redis Top-K overview]()
- [Top-K command reference](?group=topk)

### Count-min sketch

[Redis Count-min sketch]()
estimate the frequency of a data point within a stream of values.
For more information, see:

- [Redis Count-min sketch overview]()
- [Count-min sketch command reference](?group=cms)

## Time series

[Redis time series]()
structures let you store and query timestamped data points.
For more information, see:

- [Redis time series overview]()
- [Time series command reference](?group=timeseries)

## Adding extensions

To extend the features provided by the included data types, use one of these options:

1. Write your own custom [server-side functions in Lua]().
1. Write your own Redis module using the [modules API]() or check out the [community-supported modules]().
