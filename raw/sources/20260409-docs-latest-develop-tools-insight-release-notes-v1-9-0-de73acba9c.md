---
title: RedisInsight v1.9, January 2021
url: https://redis.io/docs/latest/develop/tools/insight/release-notes/v1.9.0/
retrieved_utc: '2026-04-09T20:46:00.401683+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/develop/tools/insight/release-notes/v1.9.0/index.html.md
---

# RedisInsight v1.9, January 2021

```json metadata
{
  "title": "RedisInsight v1.9, January 2021",
  "description": "RedisInsight v1.9.0",
  "categories": null,
  "tableOfContents": {"sections":[{"children":[{"id":"headlines","title":"Headlines:"},{"id":"full-details","title":"Full Details:"}],"id":"190-january-2021","title":"1.9.0 (January 2021)"}]}

,
  "codeExamples": []
}
```
## 1.9.0 (January 2021)

This is the General Availability Release of RedisInsight 1.9 (v1.9.0)!

### Headlines:

- RedisGraph tools is getting improved with better UX and new interactions capabilities
- Adding the ability to configure a database, by just using its direct URL to auto fill all required fields
- CLI is now providing ability to configure your favorite key-bindings between Emacs or Vim

### Full Details:

- Core:
    - Support for configuration of Redis where the number of databases goes over the default 16.
    - Ability to add a Redis database using a shareable URL.
- RedisGraph
    - UX improvements for large queries: fixed long pause while results are being rendered.
    - Made various improvements to interactions with the graph visualization:
    - Selected node's size increased to make it easier to distinguish.
    - Zoom via mouse wheel.
    - Double click to zoom in.
    - Double right-click to zoom out.
    - Keyboard shortcuts to zoom.
    - Center on node on fetching direct neighbours.
    - Halo masking indirect edges on selected node.
    - Button to reset view: center entire graph.
    - Button to center on the selected node.
    - New zoom buttons
- CLI
    - Basic navigation key-bindings for Emacs and Vim.
    - UX improvements: the inputs and other controls are now disabled and a message is shown while the command is executing.
