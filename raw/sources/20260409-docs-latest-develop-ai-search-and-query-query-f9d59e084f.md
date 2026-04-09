---
title: Querying data
url: https://redis.io/docs/latest/develop/ai/search-and-query/query/
retrieved_utc: '2026-04-09T20:45:53.282893+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/develop/ai/search-and-query/query/index.html.md
---

# Querying data

```json metadata
{
  "title": "Querying data",
  "description": "Understand how to query, search, and aggregate Redis data",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "tableOfContents": {"sections":[]}

,
  "codeExamples": []
}
```
Redis Open Source distinguishes between the [FT.SEARCH]() and [FT.AGGREGATE]() query commands. You should use [FT.SEARCH]() if you want to perform selections and projections only. If you also need to apply mapping functions, group, or aggregate data, use the [FT.AGGREGATE]() command. 

* **Selection**: A selection allows you to return all documents that fulfill specific criteria.
* **Projection**: Projections are used to return specific fields of the result set. You can also map/project to calculated field values.
* **Aggregation**: Aggregations collect and summarize data across several fields.

Here is a short SQL comparison using the [bicycle dataset](./data/bicycles.txt):

|Type| SQL | Redis |
|----------| --- | ----------- |
| Selection | `SELECT * FROM bicycles WHERE price >= 1000` | `FT.SEARCH idx:bicycle "@price:[1000 +inf]"` |
| Simple projection | `SELECT id, price FROM bicycles` | `FT.SEARCH idx:bicycle "*" RETURN 2 __key, price` |
| Calculated projection| `SELECT id, price-price*0.1 AS discounted FROM bicycles`| `FT.AGGREGATE idx:bicycle "*" LOAD 2 __key price APPLY "@price-@price*0.1" AS discounted`| 
| Aggregation | `SELECT condition, AVG(price) AS avg_price FROM bicycles GROUP BY condition` | `FT.AGGREGATE idx:bicycle "*" GROUPBY 1 @condition REDUCE AVG 1 @price AS avg_price` |

The following articles provide an overview of how to query data with the [FT.SEARCH]() command:

* [Exact match queries]()
* [Range queries]()
* [Full-text search ]()
* [Geospatial queries]()
* [Vector search]()
* [Combined queries]()

You can find further details about aggregation queries with [FT.AGGREGATE]() in the following article:

* [Aggregation queries]()