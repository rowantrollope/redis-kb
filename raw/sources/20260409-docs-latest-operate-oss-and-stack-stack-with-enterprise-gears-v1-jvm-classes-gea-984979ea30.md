---
title: SetError
url: https://redis.io/docs/latest/operate/oss_and_stack/stack-with-enterprise/gears-v1/jvm/classes/gearsfuture/seterror/
retrieved_utc: '2026-04-09T20:45:58.238424+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/oss_and_stack/stack-with-enterprise/gears-v1/jvm/classes/gearsfuture/seterror/index.html.md
---

# SetError

```json metadata
{
  "title": "SetError",
  "description": "Sets an error message.",
  "categories": ["docs","operate","stack"],
  "tableOfContents": {"sections":[{"id":"parameters","title":"Parameters"},{"id":"returns","title":"Returns"},{"id":"example","title":"Example"}]}

,
  "codeExamples": []
}
```
```java
public void setErrorâ(java.lang.String error) 
	throws java.lang.Exception
```

Sets an error message for an asynchronous computation.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| error | string | An error message |

## Returns

None

## Example

```java
GearsFuture<Boolean> f = new GearsFuture<Boolean>();
try {
	f.setError("An error has occurred during asyncForeach");
} catch (Exception e) {
	e.printStackTrace();
}
```
