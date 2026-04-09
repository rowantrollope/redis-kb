---
title: GearsBuilder
url: https://redis.io/docs/latest/operate/oss_and_stack/stack-with-enterprise/gears-v1/jvm/classes/gearsbuilder/
retrieved_utc: '2026-04-09T20:45:58.539660+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/oss_and_stack/stack-with-enterprise/gears-v1/jvm/classes/gearsbuilder/index.html.md
---

# GearsBuilder

```json metadata
{
  "title": "GearsBuilder",
  "description": "Creates a RedisGears pipeline of operations to transform data.",
  "categories": ["docs","operate","stack"],
  "tableOfContents": {"sections":[{"id":"functions","title":"Functions"}]}

,
  "codeExamples": []
}
```
The `GearsBuilder` class allows you to create a pipeline of RedisGears functions that transform data.

It requires a reader to supply data to the pipe.

To create a `GearsBuilder` object, follow this example code:

```java
BaseReader reader = ...; // Initialize the reader
builder = GearsBuilder.CreateGearsBuilder(reader);
```

## Functions

