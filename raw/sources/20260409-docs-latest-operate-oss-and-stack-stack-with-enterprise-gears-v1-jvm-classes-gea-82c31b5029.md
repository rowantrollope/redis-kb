---
title: ConfigGet
url: https://redis.io/docs/latest/operate/oss_and_stack/stack-with-enterprise/gears-v1/jvm/classes/gearsbuilder/config-get/
retrieved_utc: '2026-04-09T20:45:57.749130+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/oss_and_stack/stack-with-enterprise/gears-v1/jvm/classes/gearsbuilder/config-get/index.html.md
---

# ConfigGet

```json metadata
{
  "title": "ConfigGet",
  "description": "Gets the value of a RedisGears configuration setting.",
  "categories": ["docs","operate","stack"],
  "tableOfContents": {"sections":[{"id":"parameters","title":"Parameters"},{"id":"returns","title":"Returns"},{"id":"example","title":"Example"}]}

,
  "codeExamples": []
}
```
```java
public static java.lang.String configGetâ(java.lang.String key)
```

Gets the value of a RedisGears [configuration setting]().


You can set configuration values when you load the module or use the `RG.CONFIGSET` command.


## Parameters

| Name | Type | Description |
|------|------|-------------|
| key | string | The configuration setting to get |

## Returns

Returns the configuration value of a RedisGears configuration setting.

## Example

```java
GearsBuilder.configGet("ExecutionMaxIdleTime");
```