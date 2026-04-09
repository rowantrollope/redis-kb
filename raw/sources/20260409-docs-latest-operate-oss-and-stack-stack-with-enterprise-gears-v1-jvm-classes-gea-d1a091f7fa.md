---
title: CreateGearsBuilder
url: https://redis.io/docs/latest/operate/oss_and_stack/stack-with-enterprise/gears-v1/jvm/classes/gearsbuilder/creategearsbuilder/
retrieved_utc: '2026-04-09T20:45:57.801281+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/oss_and_stack/stack-with-enterprise/gears-v1/jvm/classes/gearsbuilder/creategearsbuilder/index.html.md
---

# CreateGearsBuilder

```json metadata
{
  "title": "CreateGearsBuilder",
  "description": "Creates a new GearsBuilder object.",
  "categories": ["docs","operate","stack"],
  "tableOfContents": {"sections":[{"id":"parameters","title":"Parameters"},{"id":"returns","title":"Returns"},{"id":"example","title":"Example"}]}

,
  "codeExamples": []
}
```
```java
public static <I extends java.io.Serializable> GearsBuilder<I> CreateGearsBuilderâ(
    gears.readers.BaseReader<I> reader)

public static <I extends java.io.Serializable> GearsBuilder<I> CreateGearsBuilderâ(
    gears.readers.BaseReader<I> reader, 
    java.lang.String desc)
```

Creates a new `GearsBuilder` object. Use this function instead of a `GearsBuilder` constructor to avoid type warnings.

## Parameters

Type Parameters:

| Name | Description |
|------|-------------|
| I | The template type of the returned builder. The reader determines the type. |

Parameters:

| Name | Type | Description |
|------|------|-------------|
| desc | string | The description |
| reader | BaseReader<I> | The pipe reader |

## Returns

Returns a new GearsBuilder object.

## Example

```java
GearsBuilder.CreateGearsBuilder(reader);
```