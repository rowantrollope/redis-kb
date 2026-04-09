---
title: Combined queries
url: https://redis.io/docs/latest/develop/ai/search-and-query/query/combined/
retrieved_utc: '2026-04-09T20:45:53.822470+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/develop/ai/search-and-query/query/combined/index.html.md
---

# Combined queries

```json metadata
{
  "title": "Combined queries",
  "description": "Combine query expressions",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "tableOfContents": {"sections":[{"id":"and","title":"AND"},{"id":"or","title":"OR"},{"id":"not","title":"NOT"},{"id":"numeric-filter","title":"Numeric filter"},{"id":"pre-filter-for-a-knn-vector-query","title":"Pre-filter for a KNN  vector query"}]}

,
  "codeExamples": [{"codetabsId":"query_combined-stepcombined1","description":"AND operator: Combine multiple query expressions using space to find documents matching all criteria when you need to narrow results with multiple filters","difficulty":"beginner","id":"combined1","languages":[{"id":"redis-cli","panelId":"panel_redis-cli_query_combined-stepcombined1"},{"clientId":"redis-py","clientName":"redis-py","id":"Python","langId":"python","panelId":"panel_Python_query_combined-stepcombined1"},{"id":"Node-js","panelId":"panel_Nodejs_query_combined-stepcombined1"}]},{"codetabsId":"query_combined-stepcombined2","description":"AND with full-text: Combine full-text search with structured queries using AND when you need to find documents with specific text and matching field values","difficulty":"beginner","id":"combined2","languages":[{"id":"redis-cli","panelId":"panel_redis-cli_query_combined-stepcombined2"},{"clientId":"redis-py","clientName":"redis-py","id":"Python","langId":"python","panelId":"panel_Python_query_combined-stepcombined2"},{"id":"Node-js","panelId":"panel_Nodejs_query_combined-stepcombined2"}]},{"codetabsId":"query_combined-stepcombined3","description":"OR operator: Combine multiple expressions using the pipe operator to find documents matching any criteria when you need to broaden results with alternatives","difficulty":"intermediate","id":"combined3","languages":[{"id":"redis-cli","panelId":"panel_redis-cli_query_combined-stepcombined3"},{"clientId":"redis-py","clientName":"redis-py","id":"Python","langId":"python","panelId":"panel_Python_query_combined-stepcombined3"},{"id":"Node-js","panelId":"panel_Nodejs_query_combined-stepcombined3"}]},{"codetabsId":"query_combined-stepcombined4","description":"OR within a field: Use OR to search for multiple values within a single field when you need to match any of several options in one field","difficulty":"intermediate","id":"combined4","languages":[{"id":"redis-cli","panelId":"panel_redis-cli_query_combined-stepcombined4"},{"clientId":"redis-py","clientName":"redis-py","id":"Python","langId":"python","panelId":"panel_Python_query_combined-stepcombined4"},{"id":"Node-js","panelId":"panel_Nodejs_query_combined-stepcombined4"}]},{"codetabsId":"query_combined-stepcombined5","description":"OR across multiple fields: Combine OR operators across different fields when you need to match alternatives in multiple field criteria","difficulty":"intermediate","id":"combined5","languages":[{"id":"redis-cli","panelId":"panel_redis-cli_query_combined-stepcombined5"},{"clientId":"redis-py","clientName":"redis-py","id":"Python","langId":"python","panelId":"panel_Python_query_combined-stepcombined5"},{"id":"Node-js","panelId":"panel_Nodejs_query_combined-stepcombined5"}]},{"codetabsId":"query_combined-stepcombined6","description":"NOT operator: Negate query expressions using minus to exclude documents matching criteria when you need to filter out unwanted results","difficulty":"intermediate","id":"combined6","languages":[{"id":"redis-cli","panelId":"panel_redis-cli_query_combined-stepcombined6"},{"clientId":"redis-py","clientName":"redis-py","id":"Python","langId":"python","panelId":"panel_Python_query_combined-stepcombined6"},{"id":"Node-js","panelId":"panel_Nodejs_query_combined-stepcombined6"}]},{"codetabsId":"query_combined-stepcombined7","description":"Vector pre-filtering: Use structured queries as pre-filters before KNN vector search when you need to find similar items within a specific subset of data","difficulty":"advanced","id":"combined7","languages":[{"id":"redis-cli","panelId":"panel_redis-cli_query_combined-stepcombined7"},{"clientId":"redis-py","clientName":"redis-py","id":"Python","langId":"python","panelId":"panel_Python_query_combined-stepcombined7"},{"id":"Node-js","panelId":"panel_Nodejs_query_combined-stepcombined7"}]}]
}
```## Code Examples Legend

The code examples below show how to perform the same operations in different programming languages and client libraries:

- **Redis CLI**: Command-line interface for Redis
- **C# (Synchronous)**: StackExchange.Redis synchronous client
- **C# (Asynchronous)**: StackExchange.Redis asynchronous client
- **Go**: go-redis client
- **Java (Synchronous - Jedis)**: Jedis synchronous client
- **Java (Asynchronous - Lettuce)**: Lettuce asynchronous client
- **Java (Reactive - Lettuce)**: Lettuce reactive/streaming client
- **JavaScript (Node.js)**: node-redis client
- **PHP**: Predis client
- **Python**: redis-py client
- **Rust (Synchronous)**: redis-rs synchronous client
- **Rust (Asynchronous)**: redis-rs asynchronous client

Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.

---


A combined query is a combination of several query types, such as:

* [Exact match]()
* [Range]()
* [Full-text]()
* [Geospatial]()
* [Vector search]()

You can use logical query operators to combine query expressions for numeric, tag, and text fields. For vector fields, you can combine a KNN query with a pre-filter.


The operators are interpreted slightly differently depending on the query dialect used. The default dialect is `DIALECT 1`; see [this article]() for information on how to change the dialect version. This article uses the second version of the query dialect, `DIALECT 2`, and uses additional brackets (`(...)`) to help clarify the examples. Further details can be found in the [query syntax documentation](). 


The examples in this article use the following schema:

| Field name    | Field type   |
| -----------   | ----------   |
| `description` | `TEXT`       |
| `condition`   | `TAG`        |
| `price`       | `NUMERIC`    |
| `vector`      | `VECTOR`     |

## AND

The binary operator ` ` (space) is used to intersect the results of two or more expressions.

```
FT.SEARCH index "(expr1) (expr2)"
```

If you want to perform an intersection based on multiple values within a specific text field, then you should use the following simplified notion:

```
FT.SEARCH index "@text_field:( value1 value2 ... )"
```

The following example shows you a query that finds bicycles in new condition and in a price range from 500 USD to 1000 USD:

#### Code Examples

AND operator: Combine multiple query expressions using space to find documents matching all criteria when you need to narrow results with multiple filters

**Difficulty:** Beginner

**Redis CLI:**

```
FT.SEARCH idx:bicycle "@price:[500 1000] @condition:{new}"
```

**Available in:** Redis CLI, JavaScript (Node.js), Python

**JavaScript (Node.js):**

```javascript
const res1 = await client.ft.search('idx:bicycle', '@price:[500 1000] @condition:{new}');
console.log(res1.total); // >>> 1
console.log(res1); // >>>
//{
//  total: 1,
//  documents: [ { id: 'bicycle:5', value: [Object: null prototype] } ]
//}
```

**Python:**

```python
q = Query("@price:[500 1000] @condition:{new}")
res = index.search(q)
print(res.total) # >>> 1
```



You might also be interested in bicycles for kids. The query below shows you how to combine a full-text search with the criteria from the previous query:

#### Code Examples

AND with full-text: Combine full-text search with structured queries using AND when you need to find documents with specific text and matching field values

**Difficulty:** Beginner

**Redis CLI:**

```
FT.SEARCH idx:bicycle "kids (@price:[500 1000] @condition:{used})"
```

**Available in:** Redis CLI, JavaScript (Node.js), Python

**JavaScript (Node.js):**

```javascript
const res2 = await client.ft.search('idx:bicycle', 'kids @price:[500 1000] @condition:{used}');
console.log(res2.total); // >>> 1
console.log(res2); // >>>
// {
//   total: 1,
//   documents: [ { id: 'bicycle:2', value: [Object: null prototype] } ]
// }
```

**Python:**

```python
q = Query("kids @price:[500 1000] @condition:{used}")
res = index.search(q)
print(res.total) # >>> 1
```



## OR

You can use the binary operator `|` (vertical bar) to perform a union.

```
FT.SEARCH index "(expr1) | (expr2)"
```


The logical `AND` takes precedence over `OR` when using dialect version two. The expression `expr1 expr2 | expr3 expr4` means `(expr1 expr2) | (expr3 expr4)`. Version one of the query dialect behaves differently. Using parentheses in query strings is advised to ensure the order is clear.
 


If you want to perform the union based on multiple values within a single tag or text field, then you should use the following simplified notion:

```
FT.SEARCH index "@text_field:( value1 | value2 | ... )"
```

```
FT.SEARCH index "@tag_field:{ value1 | value2 | ... }"
```

The following query shows you how to find used bicycles that contain either the word 'kids' or 'small':

#### Code Examples

OR operator: Combine multiple expressions using the pipe operator to find documents matching any criteria when you need to broaden results with alternatives

**Difficulty:** Intermediate

**Redis CLI:**

```
FT.SEARCH idx:bicycle "(kids | small) @condition:{used}"
```

**Available in:** Redis CLI, JavaScript (Node.js), Python

**JavaScript (Node.js):**

```javascript
const res3 = await client.ft.search('idx:bicycle', '(kids | small) @condition:{used}');
console.log(res3.total); // >>> 2
console.log(res3); // >>>
//{
//  total: 2,
//  documents: [
//    { id: 'bicycle:2', value: [Object: null prototype] },
//    { id: 'bicycle:1', value: [Object: null prototype] }
//  ]
//}
```

**Python:**

```python
q = Query("(kids | small) @condition:{used}")
res = index.search(q)
print(res.total) # >>> 2
```



The previous query searches across all text fields. The following example shows you how to limit the search to the description field:

#### Code Examples

OR within a field: Use OR to search for multiple values within a single field when you need to match any of several options in one field

**Difficulty:** Intermediate

**Redis CLI:**

```
FT.SEARCH idx:bicycle "@description:(kids | small) @condition:{used}"
```

**Available in:** Redis CLI, JavaScript (Node.js), Python

**JavaScript (Node.js):**

```javascript
const res4 = await client.ft.search('idx:bicycle', '@description:(kids | small) @condition:{used}');
console.log(res4.total); // >>> 2
console.log(res4); // >>>
//{
//  total: 2,
//  documents: [
//    { id: 'bicycle:2', value: [Object: null prototype] },
//    { id: 'bicycle:1', value: [Object: null prototype] }
//  ]
//}
```

**Python:**

```python
q = Query("@description:(kids | small) @condition:{used}")
res = index.search(q)
print(res.total) # >>> 0
```



If you want to extend the search to new bicycles, then the below example shows you how to do that:

#### Code Examples

OR across multiple fields: Combine OR operators across different fields when you need to match alternatives in multiple field criteria

**Difficulty:** Intermediate

**Redis CLI:**

```
FT.SEARCH idx:bicycle "@description:(kids | small) @condition:{new | used}"
```

**Available in:** Redis CLI, JavaScript (Node.js), Python

**JavaScript (Node.js):**

```javascript
const res5 = await client.ft.search('idx:bicycle', '@description:(kids | small) @condition:{new | used}');
console.log(res5.total); // >>> 3
console.log(res5); // >>>
//{
//  total: 3,
//  documents: [
//    { id: 'bicycle:1', value: [Object: null prototype] },
//    { id: 'bicycle:0', value: [Object: null prototype] },
//    { id: 'bicycle:2', value: [Object: null prototype] }
//  ]
//}
```

**Python:**

```python
q = Query("@description:(kids | small) @condition:{new | used}")
res = index.search(q)
print(res.total) # >>> 0
```



## NOT

A minus (`-`) in front of a query expression negates the expression.

```
FT.SEARCH index "-(expr)"
```

If you want to exclude new bicycles from the search within the previous price range, you can use this query:

#### Code Examples

NOT operator: Negate query expressions using minus to exclude documents matching criteria when you need to filter out unwanted results

**Difficulty:** Intermediate

**Redis CLI:**

```
FT.SEARCH idx:bicycle "@price:[500 1000] -@condition:{new}"
```

**Available in:** Redis CLI, JavaScript (Node.js), Python

**JavaScript (Node.js):**

```javascript
const res6 = await client.ft.search('idx:bicycle', '@price:[500 1000] -@condition:{new}');
console.log(res6.total); // >>> 2
console.log(res6); // >>>
//{
//  total: 2,
//  documents: [
//    { id: 'bicycle:2', value: [Object: null prototype] },
//    { id: 'bicycle:9', value: [Object: null prototype] }
//  ]
//}
```

**Python:**

```python
q = Query("@price:[500 1000] -@condition:{new}")
res = index.search(q)
print(res.total) # >>> 2
```



## Numeric filter

The [FT.SEARCH]() command allows you to combine any query expression with a numeric filter.

```
FT.SEARCH index "expr" FILTER numeric_field start end
```

Please see the [range query article]() to learn more about numeric range queries and such filters.


## Pre-filter for a KNN  vector query

You can use a simple or more complex query expression with logical operators as a pre-filter in a KNN vector query. 

```
FT.SEARCH index "(filter_expr)=>[KNN num_neighbours @field $vector]" PARAMS 2 vector "binary_data" DIALECT 2
```

Here is an example:

#### Code Examples

Vector pre-filtering: Use structured queries as pre-filters before KNN vector search when you need to find similar items within a specific subset of data

**Difficulty:** Advanced

**Redis CLI:**

```
FT.SEARCH idx:bikes_vss "(@price:[500 1000] @condition:{new})=>[KNN 3 @vector $query_vector]" PARAMS 2 "query_vector" "Z\xf8\x15:\xf23\xa1\xbfZ\x1dI>\r\xca9..." DIALECT 2
```

**Available in:** Redis CLI, JavaScript (Node.js), Python

**JavaScript (Node.js):**

```javascript
const res7 = await client.ft.search('idx:bicycle', 
  '(@price:[500 1000] -@condition:{new})=>[KNN 3 @vector $query_vector]', {
    PARAMS: { query_vector: vector_query },
    DIALECT: 2
  }
);
console.log(res7.total); // >>> 2
console.log(res7); // >>>
//{
//  total: 2,
//  documents: [
//    { id: 'bicycle:2', value: [Object: null prototype] },
//    { id: 'bicycle:9', value: [Object: null prototype] }
//  ]
//}
```

**Python:**

```python
q = Query("(@price:[500 1000] -@condition:{new})=>[KNN 3 @vector $query_vector]").dialect(2)
# put query string here
res = index.search(q,{ 'query_vector': query_vector })
print(res.total) # >>> 2
```



The [vector search article]() provides further details about vector queries in general.
