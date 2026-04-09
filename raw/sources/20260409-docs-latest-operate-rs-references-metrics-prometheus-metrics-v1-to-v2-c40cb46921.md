---
title: Transition from Prometheus v1 to Prometheus v2
url: https://redis.io/docs/latest/operate/rs/references/metrics/prometheus-metrics-v1-to-v2/
retrieved_utc: '2026-04-09T20:45:57.648247+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/references/metrics/prometheus-metrics-v1-to-v2/index.html.md
---

# Transition from Prometheus v1 to Prometheus v2

```json metadata
{
  "title": "Transition from Prometheus v1 to Prometheus v2",
  "description": "Transition from v1 metrics to v2 PromQL equivalents.",
  "categories": ["docs","integrate","rs"],
  "group": "observability",
  "tableOfContents": {"sections":[]}

,
  "codeExamples": []
}
```
You can integrate Redis Software with Prometheus and tools such as [Grafana](), [Datadog](), [Dynatrace](), or [New Relic]() to create dashboards for important metrics.

As of Redis Software version 7.8.2, [PromQL (Prometheus Query Language)](https://prometheus.io/docs/prometheus/latest/querying/basics/) metrics are available. V1 metrics are deprecated but still available.

To transition from v1 metrics to v2 metrics, you need to change the `metrics_path` in your Prometheus configuration file from `/` to `/v2` to use the new scraping endpoint.

Here's an example of the updated scraping configuration in `prometheus.yml`:

```yaml
scrape_configs:
  # Scrape Redis Software
  - job_name: redis-enterprise
    scrape_interval: 30s
    scrape_timeout: 30s
    metrics_path: /v2
    scheme: https
    tls_config:
      insecure_skip_verify: true
    static_configs:
      - targets: ["<cluster_name>:8070"]
```

It is possible to scrape both v1 and v2 endpoints simultaneously during the transition period to prepare dashboards and ensure a smooth transition.

You can use the following tables to transition from v1 metrics to equivalent v2 PromQL. For a list of all available v2 metrics, see [Prometheus metrics v2]().


