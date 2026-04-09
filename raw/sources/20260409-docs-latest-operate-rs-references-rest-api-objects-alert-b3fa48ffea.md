---
title: Alert object
url: https://redis.io/docs/latest/operate/rs/references/rest-api/objects/alert/
retrieved_utc: '2026-04-09T20:46:01.834777+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/references/rest-api/objects/alert/index.html.md
---

# Alert object

```json metadata
{
  "title": "Alert object",
  "description": "An object that contains alert info",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[]}

,
  "codeExamples": []
}
```
You can view, configure, and enable various alerts for the cluster.

Alerts are bound to a cluster object (such as a [BDB]() or [node]()), and the cluster's state determines whether the alerts turn on or off.

  Name  | Type/Value | Description | Writable
|-------|------------|-------------|----------|
| change_time | string | Timestamp when alert state last changed | |
| change_value | object | Contains data relevant to the evaluation time when the alert went on/off (thresholds, sampled values, etc.) | |
| enabled | boolean | If true, alert is enabled | x |
| severity | 'DEBUG'<br />'INFO'<br />'WARNING'<br />'ERROR'<br />'CRITICAL' | The alert's severity | |
| state | boolean | If true, alert is currently triggered | |
| threshold | string | Represents an alert threshold when applicable | x |
