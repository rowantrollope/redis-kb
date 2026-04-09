---
title: Accumulate
url: https://redis.io/docs/latest/operate/oss_and_stack/stack-with-enterprise/gears-v1/jvm/classes/gearsbuilder/accumulate/
retrieved_utc: '2026-04-09T20:45:57.678193+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/oss_and_stack/stack-with-enterprise/gears-v1/jvm/classes/gearsbuilder/accumulate/index.html.md
---

# Accumulate

```json metadata
{
  "title": "Accumulate",
  "description": "Reduces many records in the pipe to a single record.",
  "categories": ["docs","operate","stack"],
  "tableOfContents": {"sections":[{"id":"parameters","title":"Parameters"},{"id":"returns","title":"Returns"},{"id":"examples","title":"Examples"}]}

,
  "codeExamples": []
}
```
```java
public <I extends java.io.Serializable> GearsBuilder<I> accumulateâ(
    gears.operations.AccumulateOperation<T,âI> accumulator)

public <I extends java.io.Serializable> GearsBuilder<I> accumulateâ(
    I initialValue, 
    gears.operations.AccumulateOperation<T,âI> accumulator)
```

Accumulate is a many-to-one function that iterates through the records in the pipe and reduces them to a single record.

You can provide a parameter to set the initial accumulator value. Otherwise, the initial accumulator object is null.

## Parameters
 
Type parameters:

| Name | Description |
|------|-------------|
| I | The template type of the returned builder |

Function parameters:

| Name | Type | Description |
|------|------|-------------|
| accumulator | <nobr>AccumulateOperation<T,âI></nobr> | A function with logic to update the accumulator value with each record |
| initialValue | template type I | The initial value of the accumulated object |

## Returns

Returns a GearsBuilder object with a new template type.

## Examples

Both of the following examples count the number of records in the pipeline.

Without the `initialValue` parameter:

```java
GearsBuilder.CreateGearsBuilder(reader).accumulate((a, r)->{
    Integer ret = null;
    if (a == null) {
	    ret = 1;
    } else {
	    ret = (Integer)a;
    }
    return ret + 1;
});
```

With the `initialValue` parameter set to 0:

```java
GearsBuilder.CreateGearsBuilder(reader).accumulate(0, (a, r)->{
   	return a + 1;
});
```
