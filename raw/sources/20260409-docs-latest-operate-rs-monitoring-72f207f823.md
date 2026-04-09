---
title: Monitoring with metrics and alerts
url: https://redis.io/docs/latest/operate/rs/monitoring/
retrieved_utc: '2026-04-09T20:45:59.161235+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/monitoring/index.html.md
---

# Monitoring with metrics and alerts

```json metadata
{
  "title": "Monitoring with metrics and alerts",
  "description": "Use the metrics that measure the performance of your Redis Software clusters, nodes, databases, and shards to track the performance of your databases.",
  "categories": ["docs","operate","rs","kubernetes"],
  "tableOfContents": {"sections":[{"id":"view-metrics-and-configure-alerts","title":"View metrics and configure alerts"},{"id":"metrics-stream-engine","title":"Metrics stream engine"},{"id":"integrate-with-external-monitoring-tools","title":"Integrate with external monitoring tools"},{"id":"metrics-reference","title":"Metrics reference"}]}

,
  "codeExamples": []
}
```
You can use the metrics that measure the performance of your Redis Software clusters, nodes, databases, and shards
to monitor the performance of your databases.

## View metrics and configure alerts

In the Redis Software Cluster Manager UI, you can view metrics, configure alerts, and send notifications based on alert parameters. You can also access metrics and configure alerts through the REST API.

See [Metrics and alerts for monitoring v1]() for more information.

## Metrics stream engine

The new metrics stream engine is generally available as of [Redis Software version 8.0]() This new engine exposes the v2 Prometheus scraping endpoint at `https://<IP>:8070/v2`, exports all time-series metrics to external monitoring tools, and enables real-time monitoring.

See [Metrics stream engine for monitoring v2]() for more information.

## Integrate with external monitoring tools

To integrate Redis Software metrics into your monitoring environment, see the following integration guides:

- [Grafana]()

- [Datadog]()

- [Dynatrace]()

- [New Relic]()

For a detailed tutorial to deploy a complete monitoring stack with Prometheus and Grafana, see [Redis Software Observability with Prometheus and Grafana](https://redis.io/learn/operate/observability/redis-software-prometheus-and-grafana).

Filter [Libraries and tools]() by "observability" for additional tools and guides.

## Metrics reference

Make sure you read the [definition of each metric]()
so that you understand exactly what it represents.
