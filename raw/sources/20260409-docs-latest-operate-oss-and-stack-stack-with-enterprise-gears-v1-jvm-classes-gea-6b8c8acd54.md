---
title: Foreach
url: https://redis.io/docs/latest/operate/oss_and_stack/stack-with-enterprise/gears-v1/jvm/classes/gearsbuilder/foreach/
retrieved_utc: '2026-04-09T20:45:57.946758+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/oss_and_stack/stack-with-enterprise/gears-v1/jvm/classes/gearsbuilder/foreach/index.html.md
---

# Foreach

```json metadata
{
  "title": "Foreach",
  "description": "For each record in the pipe, runs some operations.",
  "categories": ["docs","operate","stack"],
  "tableOfContents": {"sections":[{"id":"parameters","title":"Parameters"},{"id":"returns","title":"Returns"},{"id":"example","title":"Example"}]}

,
  "codeExamples": []
}
```
```java
public GearsBuilder<T> foreachâ(
    gears.operations.ForeachOperation<T> foreach)
```

Defines a set of operations to run for each record in the pipe.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| foreach | ForeachOperation<T> | The set of operations to run for each record |

## Returns

Returns a GearsBuilder object with a new template type.

## Example

For each person hash, add a new full_name field that combines their first and last names:

```java
GearsBuilder.CreateGearsBuilder(reader).foreach(r->{
    String firstName = r.getHashVal().get("first_name");
    String lastName = r.getHashVal().get("last_name");
   	r.getHashVal().put("full_name", firstName + lastName);
}); 
```