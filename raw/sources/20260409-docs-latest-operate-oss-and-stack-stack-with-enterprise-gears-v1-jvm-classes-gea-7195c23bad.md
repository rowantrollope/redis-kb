---
title: Repartition
url: https://redis.io/docs/latest/operate/oss_and_stack/stack-with-enterprise/gears-v1/jvm/classes/gearsbuilder/repartition/
retrieved_utc: '2026-04-09T20:45:58.190772+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/oss_and_stack/stack-with-enterprise/gears-v1/jvm/classes/gearsbuilder/repartition/index.html.md
---

# Repartition

```json metadata
{
  "title": "Repartition",
  "description": "Moves records between shards according to the extracted data.",
  "categories": ["docs","operate","stack"],
  "tableOfContents": {"sections":[{"id":"parameters","title":"Parameters"},{"id":"returns","title":"Returns"},{"id":"example","title":"Example"}]}

,
  "codeExamples": []
}
```
```java
public GearsBuilder<T> repartitionâ(
	gears.operations.ExtractorOperation<T> extractor)
```

Moves records between the shards. The extracted data determines the new shard location for each record.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| extractor | <nobr>ExtractorOperation<T></nobr> | Extracts a specific value from each record |

## Returns

Returns a GearsBuilder object with a new template type.

## Example

Repartition by value:

```java
GearsBuilder.CreateGearsBuilder(reader).
   	repartition(r->{
   		return r.getStringVal();
});
```