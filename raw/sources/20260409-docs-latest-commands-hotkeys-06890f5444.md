---
title: HOTKEYS
url: https://redis.io/docs/latest/commands/hotkeys/
retrieved_utc: '2026-04-09T20:46:04.596284+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/hotkeys/index.html.md
---

# HOTKEYS

```json metadata
{
  "title": "HOTKEYS",
  "description": "A container for hotkeys tracking commands.",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "syntax_fmt": "HOTKEYS",
  "complexity": "Depends on subcommand.",
  "group": "server",
  "acl_categories": ["@slow"],
  "since": "8.6.0",
  "arity": -2,
  "tableOfContents": {"sections":[{"id":"usage","title":"Usage"}]}

,
  "codeExamples": []
}
```
This is a container command for hotkeys tracking commands that provides a method for identifying hotkeys inside a Redis server during a specified tracking time period.

Hotkeys in this context are defined by two metrics:
* Percentage of CPU time spent on the key from the total time during the tracking period.
* Percentage of network bytes (input + output) used for the key from the total network bytes used by Redis during the tracking period.

## Usage

The general workflow is for the user to initiate a hotkeys tracking process which should run for some time. The keys' metrics are recorded inside a probabilistic data structure, after which the user is able to fetch the top K metrics.

Available subcommands:

- [`HOTKEYS START`]() - Starts hotkeys tracking with specified metrics.
- [`HOTKEYS STOP`]() - Stops hotkeys tracking but preserves data.
- [`HOTKEYS GET`]() - Returns tracking results and metadata.
- [`HOTKEYS RESET`]() - Releases resources used for tracking.
