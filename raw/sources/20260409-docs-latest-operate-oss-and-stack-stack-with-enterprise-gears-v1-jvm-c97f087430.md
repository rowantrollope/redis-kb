---
title: RedisGears JVM plugin
url: https://redis.io/docs/latest/operate/oss_and_stack/stack-with-enterprise/gears-v1/jvm/
retrieved_utc: '2026-04-09T20:45:59.450638+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/oss_and_stack/stack-with-enterprise/gears-v1/jvm/index.html.md
---

# RedisGears JVM plugin

```json metadata
{
  "title": "RedisGears JVM plugin",
  "description": "The RedisGears JVM plugin allows you to run RedisGears functions in the Java virtual machine.",
  "categories": ["docs","operate","stack"],
  "tableOfContents": {"sections":[{"id":"more-info","title":"More info"}]}

,
  "codeExamples": []
}
```
With the [RedisGears JVM plugin](https://github.com/RedisGears/JVMPlugin), you can write RedisGears functions in [Java](https://en.wikipedia.org/wiki/Java_(programming_language)) and run them on a [Redis Software]() cluster. It currently supports [JVM](https://en.wikipedia.org/wiki/Java_virtual_machine) version 11.

Similar to the Python plugin, the JVM plugin allows both batch processing and event-driven processing.

Before you can run RedisGears with Java, you will need to [install the RedisGears module and the JVM plugin]() on your Redis Software cluster and [enable them for your database]().

Once you have written your code, compile and package it into a [JAR](https://en.wikipedia.org/wiki/JAR_(file_format)) file and upload it to a node on your Redis Software cluster. Use the `RG.JEXECUTE` command with the `redis-cli` command-line tool to run your code.

## More info

- [RedisGears JVM quick start]()
- [RedisGears Java classes and functions]()
- [RedisGears recipes]()