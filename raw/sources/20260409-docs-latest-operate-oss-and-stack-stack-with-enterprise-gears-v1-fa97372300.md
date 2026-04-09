---
title: Gears
url: https://redis.io/docs/latest/operate/oss_and_stack/stack-with-enterprise/gears-v1/
retrieved_utc: '2026-04-09T20:45:59.147552+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/oss_and_stack/stack-with-enterprise/gears-v1/index.html.md
---

# Gears

```json metadata
{
  "title": "Gears",
  "description": "RedisGears supports batch and event-driven processing for Redis data.",
  "categories": ["docs","operate","stack"],
  "tableOfContents": {"sections":[{"id":"what-is-redisgears","title":"What is RedisGears?"},{"id":"supported-languages","title":"Supported languages"},{"id":"getting-started-with-redisgears","title":"Getting started with RedisGears"},{"id":"write-behind-caching-patterns","title":"Write-behind caching patterns"},{"id":"more-info","title":"More info"}]}

,
  "codeExamples": []
}
```## What is RedisGears?

RedisGears is an engine for data processing in Redis. RedisGears supports batch and event-driven processing for Redis data. To use RedisGears, you write functions that describe how your data should be processed. You then submit this code to your Redis deployment for remote execution.

## Supported languages

As of RedisGears v1.2, you can enable a plugin to select which programming language to use. It currently supports code written in either [Python]() or [Java]().

Prior to v1.2, RedisGears only supported Python. However, an internal C API exists and can be used by other Redis modules. Support for other languages is being planned.

## Getting started with RedisGears

RedisGears is implemented by a Redis module. To use RedisGears, you'll need to make sure that your Redis deployment has the module installed. [Redis Software](https://docs.redislabs.com/latest/rs/) supports the module natively.

If you're running Redis Open Source, you'll also need to [install the RedisGears module]() before using it.

To get started with RedisGears, see the quick start tutorial for [Python]() or [Java]().

## Write-behind caching patterns

Redis users typically implement caching by using the look-aside pattern. However, with RedisGears, you can implement write-behind caching strategies as well.

Redis publishes RedisGears recipes to support write-behind. You can learn how to use these recipes in our write-behind caching guides for [Python]() and [Java]().

## More info

- [RedisGears source](https://github.com/RedisGears/RedisGears)
