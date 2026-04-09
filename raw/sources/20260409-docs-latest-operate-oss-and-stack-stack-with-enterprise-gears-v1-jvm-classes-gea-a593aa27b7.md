---
title: Map
url: https://redis.io/docs/latest/operate/oss_and_stack/stack-with-enterprise/gears-v1/jvm/classes/gearsbuilder/map/
retrieved_utc: '2026-04-09T20:45:58.079510+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/oss_and_stack/stack-with-enterprise/gears-v1/jvm/classes/gearsbuilder/map/index.html.md
---

# Map

```json metadata
{
  "title": "Map",
  "description": "Maps records one-to-one.",
  "categories": ["docs","operate","stack"],
  "tableOfContents": {"sections":[{"id":"parameters","title":"Parameters"},{"id":"returns","title":"Returns"},{"id":"example","title":"Example"}]}

,
  "codeExamples": []
}
```
```java
public <I extends java.io.Serializable> GearsBuilder<I> mapâ(
	gears.operations.MapOperation<T,âI> mapper)
```

Maps each input record in the pipe to an output record, one-to-one.

## Parameters
 
Type parameters:

| Name | Description |
|------|-------------|
| I | The template type of the returned builder |

Function parameters:

| Name | Type | Description |
|------|------|-------------|
| mapper | <nobr>MapOperation<T,âI></nobr> | For each input record, returns a new output record |

## Returns

Returns a GearsBuilder object with a new template type.

## Example

Map each record to its string value:

```java
GearsBuilder.CreateGearsBuilder(reader).
 		map(r->{
    		return r.getStringVal();
});
```
