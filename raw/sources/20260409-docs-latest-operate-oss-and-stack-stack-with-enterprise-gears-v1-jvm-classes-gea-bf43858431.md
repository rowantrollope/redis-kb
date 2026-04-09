---
title: Run
url: https://redis.io/docs/latest/operate/oss_and_stack/stack-with-enterprise/gears-v1/jvm/classes/gearsbuilder/run/
retrieved_utc: '2026-04-09T20:45:58.221377+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/oss_and_stack/stack-with-enterprise/gears-v1/jvm/classes/gearsbuilder/run/index.html.md
---

# Run

```json metadata
{
  "title": "Run",
  "description": "Runs the pipeline of functions immediately.",
  "categories": ["docs","operate","stack"],
  "tableOfContents": {"sections":[{"id":"parameters","title":"Parameters"},{"id":"returns","title":"Returns"},{"id":"example","title":"Example"}]}

,
  "codeExamples": []
}
```
```java
public void run()

public void runâ(boolean jsonSerialize, boolean collect)
```

Runs the pipeline of functions immediately upon execution. It will only run once.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| collect | boolean | Whether or not to collect the results from the entire cluster before returning them |
| jsonSerialize | boolean | Whether or not to serialize the results to JSON before returning them |

## Returns

None

## Example

```java
GearsBuilder.CreateGearsBuilder(reader).run();
```