---
title: Log
url: https://redis.io/docs/latest/operate/oss_and_stack/stack-with-enterprise/gears-v1/jvm/classes/gearsbuilder/log/
retrieved_utc: '2026-04-09T20:45:58.005794+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/oss_and_stack/stack-with-enterprise/gears-v1/jvm/classes/gearsbuilder/log/index.html.md
---

# Log

```json metadata
{
  "title": "Log",
  "description": "Writes a log message to the Redis log file.",
  "categories": ["docs","operate","stack"],
  "tableOfContents": {"sections":[{"id":"parameters","title":"Parameters"},{"id":"returns","title":"Returns"},{"id":"example","title":"Example"}]}

,
  "codeExamples": []
}
```
```java
public static void logâ(java.lang.String msg)

public static void logâ(java.lang.String msg, LogLevel level)
```

Writes a log message to the Redis log file. If you do not specify a `LogLevel`, it will default to `NOTICE`.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| msg | string | The message to write to the log |
| level | LogLevel | The log level (DEBUG, NOTICE, VERBOSE, WARNING) |

## Returns

None

## Example

```java
GearsBuilder.log(
    "Setting keys to expire after 1 month", 
    LogLevel.WARNING
);
```