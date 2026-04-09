---
title: Index and query documents
url: https://redis.io/docs/latest/develop/clients/redis-py/queryjson/
retrieved_utc: '2026-04-09T20:45:56.348856+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/develop/clients/redis-py/queryjson/index.html.md
---

# Index and query documents

```json metadata
{
  "title": "Index and query documents",
  "description": "Learn how to use Redis Search with JSON and hash documents.",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "topics": ["Redis Search","JSON","hash"],
  "relatedPages": ["/develop/clients/redis-py/vecsearch","/develop/ai/search-and-query"],
  "scope": "example",
  "tableOfContents": {"sections":[{"id":"initialize","title":"Initialize"},{"id":"create-data","title":"Create data"},{"id":"add-the-index","title":"Add the index"},{"id":"add-the-data","title":"Add the data"},{"id":"query-the-data","title":"Query the data"},{"id":"differences-with-hash-documents","title":"Differences with hash documents"},{"id":"more-information","title":"More information"}]}

,
  "codeExamples": []
}
```
This example shows how to create a
[search index]()
for [JSON]() documents and
run queries against the index. It then goes on to show the slight differences
in the equivalent code for [hash]()
documents.

From [v6.0.0](https://github.com/redis/redis-py/releases/tag/v6.0.0) onwards,
`redis-py` uses query dialect 2 by default.
Redis Search methods such as [`ft().search()`]()
will explicitly request this dialect, overriding the default set for the server.
See
[Query dialects]()
for more information.


## Initialize

Make sure that you have [Redis Open Source]()
or another Redis server available. Also install the
[`redis-py`]() client library if you
haven't already done so.

Add the following dependencies. All of them are applicable to both JSON and hash,
except for the `Path` class, which is specific to JSON (see
[Path]() for a description of the
JSON path syntax).



## Create data

Create some test data to add to your database. The example data shown
below is compatible with both JSON and hash objects.



## Add the index

Connect to your Redis database. The code below shows the most
basic connection but see
[Connect to the server]()
to learn more about the available connection options.



The example uses an index called `idx:users` for JSON documents and adds
some JSON documents with the `user:` key prefix. To avoid errors, first
delete any existing index or documents whose names that might
conflict with the example:



Create an index for the JSON data. The code below specifies that only JSON documents with
the key prefix `user:` are indexed. For more information, see
[Query syntax]().



## Add the data

Add the three sets of user data to the database as
[JSON]() objects.
If you use keys with the `user:` prefix then Redis will index the
objects automatically as you add them:



## Query the data

You can now use the index to search the JSON objects. The
[query]()
below searches for objects that have the text "Paul" in any field
and have an `age` value in the range 30 to 40:




Specify query options to return only the `city` field:




Use an
[aggregation query]()
to count all users in each city.



## Differences with hash documents

Indexing for hash documents is very similar to JSON indexing but you
need to specify some slightly different options.

When you create the schema for a hash index, you don't need to
add aliases for the fields, since you use the basic names to access
the fields anyway. Also, you must use `HASH` for the `IndexType`
when you create the index.

First delete any existing index or documents
whose names might conflict with the hash example:




Create a new index called `hash-idx:users`, which is otherwise the same as
the `idx:users` index used for JSON documents in the previous examples:




You use [`hset()`]() to add the hash
documents instead of [`json().set()`](),
but the same flat `userX` dictionaries work equally well with either
hash or JSON:



The query commands work the same here for hash as they do for JSON (but
the name of the hash index is different). The format of the result is
almost the same except that the fields are returned directly in the
result `Document` object instead of in an enclosing `json` dictionary:



## More information

See the [Redis Search]() docs
for a full description of all query features with examples.
