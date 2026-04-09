---
title: ShardsIDReader
url: https://redis.io/docs/latest/operate/oss_and_stack/stack-with-enterprise/gears-v1/jvm/classes/readers/shardsidreader/
retrieved_utc: '2026-04-09T20:45:58.720857+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/oss_and_stack/stack-with-enterprise/gears-v1/jvm/classes/readers/shardsidreader/index.html.md
---

# ShardsIDReader

```json metadata
{
  "title": "ShardsIDReader",
  "description": "Gets the shard ID for each shard in a database.",
  "categories": ["docs","operate","stack"],
  "tableOfContents": {"sections":[{"id":"parameters","title":"Parameters"},{"id":"output-records","title":"Output records"},{"id":"example","title":"Example"}]}

,
  "codeExamples": []
}
```
The `ShardsIDReader` creates a single record on each shard that represents the current shard's ID.
 
Use this reader when you want to run an operation on each shard in the database.

## Parameters

None

## Output records

Creates a record for each shard with the shard's cluster identifier.

## Example

```java
ShardsIDReader reader = new ShardsIDReader();
```