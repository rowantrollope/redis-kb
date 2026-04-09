---
title: Hashtag
url: https://redis.io/docs/latest/operate/oss_and_stack/stack-with-enterprise/gears-v1/jvm/classes/gearsbuilder/hashtag/
retrieved_utc: '2026-04-09T20:45:58.000798+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/oss_and_stack/stack-with-enterprise/gears-v1/jvm/classes/gearsbuilder/hashtag/index.html.md
---

# Hashtag

```json metadata
{
  "title": "Hashtag",
  "description": "Returns a string that maps to the current shard.",
  "categories": ["docs","operate","stack"],
  "tableOfContents": {"sections":[{"id":"parameters","title":"Parameters"},{"id":"returns","title":"Returns"},{"id":"example","title":"Example"}]}

,
  "codeExamples": []
}
```
```java
public static java.lang.String hashtag()
```

Returns a string that maps to the current shard according to the cluster slot mapping.


You can use the `hashtag` function when you need to create a key that resides on the current shard. 


## Parameters

None

## Returns

Returns a string that maps to the current shard.

## Example

The following example uses the `hashtag` function to calculate the hslot. The string maps to the current shard.

```java
GearsBuilder.execute(
    "SET", 
    String.format("key{%s}", GearsBuilder.hashtag()), 
    "1"
);
```
