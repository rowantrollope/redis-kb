---
title: Transition cluster manager alerts to Prometheus alerts
url: https://redis.io/docs/latest/operate/rs/references/alerts/alerts-v1-to-v2/
retrieved_utc: '2026-04-09T20:45:58.272290+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/references/alerts/alerts-v1-to-v2/index.html.md
---

# Transition cluster manager alerts to Prometheus alerts

```json metadata
{
  "title": "Transition cluster manager alerts to Prometheus alerts",
  "description": "Transition from internal cluster manager alerts to external monitoring alerts using Prometheus.",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[]}

,
  "codeExamples": []
}
```
As Redis Software transitions from the [deprecated monitoring system]() to the [new metrics stream engine](), some internal cluster manager alerts were deprecated in favor of external monitoring solutions.

You can use the following table to transition from the deprecated alerts and set up equivalent alerts in Prometheus with [PromQL (Prometheus Query Language)](https://prometheus.io/docs/prometheus/latest/querying/basics/):

