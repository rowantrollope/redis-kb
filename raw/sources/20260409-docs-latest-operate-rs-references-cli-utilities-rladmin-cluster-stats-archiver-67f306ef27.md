---
title: rladmin cluster stats_archiver
url: https://redis.io/docs/latest/operate/rs/references/cli-utilities/rladmin/cluster/stats_archiver/
retrieved_utc: '2026-04-09T20:46:07.734714+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/references/cli-utilities/rladmin/cluster/stats_archiver/index.html.md
---

# rladmin cluster stats_archiver

```json metadata
{
  "title": "rladmin cluster stats_archiver",
  "description": "Enables/deactivates the stats archiver.",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[]}

,
  "codeExamples": []
}
```
Enables or deactivates the stats archiver, which logs statistics in CSV (comma-separated values) format.

```sh
rladmin cluster stats_archiver { enabled | disabled }
```

### Parameters

| Parameter | Description |
|-----------|-------------|
| enabled | Turn on the stats archiver |
| disabled | Turn off the stats archiver |

### Returns

Returns the updated status of the stats archiver. 

### Example

```sh
$ rladmin cluster stats_archiver enabled 
Status: enabled
```