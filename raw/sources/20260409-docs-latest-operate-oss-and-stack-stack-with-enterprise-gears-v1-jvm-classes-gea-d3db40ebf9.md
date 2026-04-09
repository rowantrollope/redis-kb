---
title: CallNextArray
url: https://redis.io/docs/latest/operate/oss_and_stack/stack-with-enterprise/gears-v1/jvm/classes/gearsbuilder/callnextarray/
retrieved_utc: '2026-04-09T20:45:57.731528+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/oss_and_stack/stack-with-enterprise/gears-v1/jvm/classes/gearsbuilder/callnextarray/index.html.md
---

# CallNextArray

```json metadata
{
  "title": "CallNextArray",
  "description": "Calls the next execution that overrides the command or the original command itself.",
  "categories": ["docs","operate","stack"],
  "tableOfContents": {"sections":[{"id":"parameters","title":"Parameters"},{"id":"returns","title":"Returns"},{"id":"example","title":"Example"}]}

,
  "codeExamples": []
}
```
```java
public static native java.lang.Object callNextArray(
    java.lang.String[] command)
```

When you override a Redis command with the [`CommandOverrider`](), use `callNextArray` to run the next execution that overrides the command or the original command itself.

It accepts an array of strings, which represents the command arguments.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| args | array of strings | Redis command arguments |

## Returns

Returns the command result. It could be a string or an array of strings, depending on the command.

## Example

```java
GearsBuilder.callNextArray(new String[]{"restaurant:1", "reviews", "50"});
```