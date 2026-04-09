---
title: Prometheus metrics v2
url: https://redis.io/docs/latest/operate/rs/references/metrics/prometheus-metrics-v2/
retrieved_utc: '2026-04-09T20:45:58.173970+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/references/metrics/prometheus-metrics-v2/index.html.md
---

# Prometheus metrics v2

```json metadata
{
  "title": "Prometheus metrics v2",
  "description": "V2 metrics available to Prometheus as of Redis Software version 7.8.2.",
  "categories": ["docs","integrate","rs"],
  "group": "observability",
  "tableOfContents": {"sections":[]}

,
  "codeExamples": []
}
```
You can integrate Redis Software with Prometheus and tools such as [Grafana](), [Datadog](), [Dynatrace](), or [New Relic]() to create dashboards for important metrics.

The v2 metrics in the following tables are available as of Redis Software version 7.8.0. For help transitioning from v1 metrics to v2 PromQL, see [Prometheus v1 metrics and equivalent v2 PromQL]().

The v2 scraping endpoint also exposes metrics for `node_exporter` version 1.8.1. For more information, see the [Prometheus node_exporter GitHub repository](https://github.com/prometheus/node_exporter).


