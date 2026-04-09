---
title: RedisGears Python plugin
url: https://redis.io/docs/latest/operate/oss_and_stack/stack-with-enterprise/gears-v1/python/
retrieved_utc: '2026-04-09T20:45:59.290635+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/oss_and_stack/stack-with-enterprise/gears-v1/python/index.html.md
---

# RedisGears Python plugin

```json metadata
{
  "title": "RedisGears Python plugin",
  "description": "The RedisGears Python plugin allows you to run RedisGears functions with Python.",
  "categories": ["docs","operate","stack"],
  "tableOfContents": {"sections":[{"id":"more-info","title":"More info"}]}

,
  "codeExamples": []
}
```
With the RedisGears Python plugin, you can write RedisGears functions in [Python](https://www.python.org/) and run them on a [Redis Software]() cluster.

The Python plugin allows both batch processing and event-driven processing.

Before you can run RedisGears with Python, you will need to [install the RedisGears module and the Python plugin]() on your Redis Software cluster and [enable them for your database]().

Once you have written your code, upload it to a node on your Redis Software cluster. Use the `RG.PYEXECUTE` command with the `redis-cli` command-line tool to run your code.

## More info

- [RedisGears Python quick start]()
- [RedisGears recipes]()