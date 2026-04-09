---
title: RedisInsight v1.1, December 2019
url: https://redis.io/docs/latest/develop/tools/insight/release-notes/v1.1.0/
retrieved_utc: '2026-04-09T20:46:01.000667+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/develop/tools/insight/release-notes/v1.1.0/index.html.md
---

# RedisInsight v1.1, December 2019

```json metadata
{
  "title": "RedisInsight v1.1, December 2019",
  "description": "Stability improvements and other fixes",
  "categories": null,
  "tableOfContents": {"sections":[{"children":[{"id":"headlines","title":"Headlines"},{"id":"details","title":"Details"}],"id":"redisinsight-v110-release-notes-december-2019","title":"RedisInsight v1.1.0 release notes (December 2019)"}]}

,
  "codeExamples": []
}
```## RedisInsight v1.1.0 release notes (December 2019)

### Headlines

- This release improves overall stability and provides fixes for issues found after the previous release.

### Details

- Minor Enhancements:
    - Core:
        - Enable mouse wheel support inside the `querycard`.
    - Browser:
        - Enable enter key press for adding keys in browser
    - RediSearch:
        - Disable HIGHLIGHT markup in JSON view.
    - Browser:
        - Improve error message when database is unreachable
        - Add a reload/refresh button to refresh the value of a key
        - Enable enter key press for adding keys in browser
        - Improve error message for unsupported value types
- Bug Fixes:
    - RedisGraph:
        - Fix initial node placement in the view.
        - Fix initial zoom with respect to the number of nodes in the result.
    - Other minor fixes.
