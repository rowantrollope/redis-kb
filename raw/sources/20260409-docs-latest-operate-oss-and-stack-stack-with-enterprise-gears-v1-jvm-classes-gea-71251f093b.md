---
title: SetResult
url: https://redis.io/docs/latest/operate/oss_and_stack/stack-with-enterprise/gears-v1/jvm/classes/gearsfuture/setresult/
retrieved_utc: '2026-04-09T20:45:58.233285+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/oss_and_stack/stack-with-enterprise/gears-v1/jvm/classes/gearsfuture/setresult/index.html.md
---

# SetResult

```json metadata
{
  "title": "SetResult",
  "description": "Sets a computation to run asynchronously.",
  "categories": ["docs","operate","stack"],
  "tableOfContents": {"sections":[{"id":"parameters","title":"Parameters"},{"id":"returns","title":"Returns"},{"id":"example","title":"Example"}]}

,
  "codeExamples": []
}
```
```java
public void setResultâ(I result) 
	throws java.lang.Exception
```

Sets a computation to run asynchronously.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| result | template type I | The result of a computation |

## Returns

None

## Example

```java
GearsBuilder.CreateGearsBuilder(reader).map(r->r.getKey()).
	asyncFilter(r->{
		GearsFuture<Boolean> f = new GearsFuture<Boolean>();
		try {
			f.setResult(r.equals("x"));	
		} catch (Exception e) {
			e.printStackTrace();
		}			
		return f;
});
```
