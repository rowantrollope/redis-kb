---
title: FlatMap
url: https://redis.io/docs/latest/operate/oss_and_stack/stack-with-enterprise/gears-v1/jvm/classes/gearsbuilder/flatmap/
retrieved_utc: '2026-04-09T20:45:57.947308+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/oss_and_stack/stack-with-enterprise/gears-v1/jvm/classes/gearsbuilder/flatmap/index.html.md
---

# FlatMap

```json metadata
{
  "title": "FlatMap",
  "description": "Maps a single input record to one or more output records.",
  "categories": ["docs","operate","stack"],
  "tableOfContents": {"sections":[{"id":"parameters","title":"Parameters"},{"id":"returns","title":"Returns"},{"id":"example","title":"Example"}]}

,
  "codeExamples": []
}
```
```java
public <I extends java.io.Serializable> GearsBuilder<I> flatMapâ(
	gears.operations.FlatMapOperation<T,âI> flatmapper)
```

Maps a single input record to one or more output records.

The FlatMap operation must return an [`Iterable`](https://docs.oracle.com/javase/8/docs/api/java/lang/Iterable.html). RedisGears 
splits the elements from the `Iterable` object and processes them as individual records.

## Parameters
 
Type parameters:

| Name | Description |
|------|-------------|
| I | The template type of the returned builder object |

Function parameters:

| Name | Type | Description |
|------|------|-------------|
| flatmapper | <nobr>FlatMapOperation<T,âI></nobr> | For each input record, returns one or more output records |

## Returns

Returns a GearsBuilder object with a new template type.

## Example

```java
GearsBuilder.CreateGearsBuilder(reader).flatMap(r->{
   	return r.getListVal();
}); 
```