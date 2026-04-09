---
title: AsyncMap
url: https://redis.io/docs/latest/operate/oss_and_stack/stack-with-enterprise/gears-v1/jvm/classes/gearsbuilder/asyncmap/
retrieved_utc: '2026-04-09T20:45:57.715295+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/oss_and_stack/stack-with-enterprise/gears-v1/jvm/classes/gearsbuilder/asyncmap/index.html.md
---

# AsyncMap

```json metadata
{
  "title": "AsyncMap",
  "description": "Asynchronously maps records one-to-one.",
  "categories": ["docs","operate","stack"],
  "tableOfContents": {"sections":[{"id":"parameters","title":"Parameters"},{"id":"returns","title":"Returns"},{"id":"example","title":"Example"}]}

,
  "codeExamples": []
}
```
```java
public <I extends java.io.Serializable> GearsBuilder<I> asyncMapâ(
	gears.operations.AsyncMapOperation<T,âI> mapper)
```

The `asyncMap` function allows you to use a [`GearsFuture`]() object to asynchronously map each input record in the pipe to an output record, one-to-one.

## Parameters
 
Type parameters:

| Name | Description |
|------|-------------|
| I | The template type of the returned builder |

Function parameters:

| Name | Type | Description |
|------|------|-------------|
| mapper | <nobr>AsyncMapOperation<T,âI></nobr> | For each input record, returns a new output record |

## Returns

Returns a GearsBuilder object with a new template type.

## Example

```java
GearsBuilder.CreateGearsBuilder(reader).
	asyncMap(r->{
		GearsFuture<String> f = new GearsFuture<String>();
		new Thread(new Runnable() {
				
			@Override
			public void run() {
				try {
					Thread.sleep(1);
					
					f.setResult("done");
				} catch (Exception e) {
					e.printStackTrace();
				}					
			}
		}).start();
		return f;
});
```
