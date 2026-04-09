---
title: Count
url: https://redis.io/docs/latest/operate/oss_and_stack/stack-with-enterprise/gears-v1/jvm/classes/gearsbuilder/count/
retrieved_utc: '2026-04-09T20:45:57.787507+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/oss_and_stack/stack-with-enterprise/gears-v1/jvm/classes/gearsbuilder/count/index.html.md
---

# Count

```json metadata
{
  "title": "Count",
  "description": "Counts the number of records in the pipe.",
  "categories": ["docs","operate","stack"],
  "tableOfContents": {"sections":[{"id":"parameters","title":"Parameters"},{"id":"returns","title":"Returns"},{"id":"example","title":"Example"}]}

,
  "codeExamples": []
}
```
```java
public GearsBuilder<java.lang.Integer> count()
```

Counts the number of records in the pipe and returns the total as a single record.

## Parameters
 
None

## Returns

Returns a GearsBuilder object with a new template type of `Integer`.

## Example

```java
GearsBuilder.CreateGearsBuilder(reader).count();
```