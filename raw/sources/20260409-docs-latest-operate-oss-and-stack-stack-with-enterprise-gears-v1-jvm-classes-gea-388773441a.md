---
title: Filter
url: https://redis.io/docs/latest/operate/oss_and_stack/stack-with-enterprise/gears-v1/jvm/classes/gearsbuilder/filter/
retrieved_utc: '2026-04-09T20:45:57.907241+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/oss_and_stack/stack-with-enterprise/gears-v1/jvm/classes/gearsbuilder/filter/index.html.md
---

# Filter

```json metadata
{
  "title": "Filter",
  "description": "Filters out records in the pipe based on a given condition.",
  "categories": ["docs","operate","stack"],
  "tableOfContents": {"sections":[{"id":"parameters","title":"Parameters"},{"id":"returns","title":"Returns"},{"id":"example","title":"Example"}]}

,
  "codeExamples": []
}
```
```java
public GearsBuilder<T> filterâ(
    gears.operations.FilterOperation<T> filter)
```

Filters out records in the pipe based on a given condition.

The filter operation should contain a conditional statement and return a boolean for each record:
- If `true`, the record will continue through the pipe. 
- If `false`, it filters out the record.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| filter | FilterOperation<T> | A function that checks a condition for each record in the pipe. Returns a boolean. |

## Returns

Returns a GearsBuilder object with the same template type as the input builder.

## Example

Get all records that contain the substring "person:":

```java
GearsBuilder.CreateGearsBuilder(reader).
    filter(r->{
        return r.getKey().contains("person:");
});
```