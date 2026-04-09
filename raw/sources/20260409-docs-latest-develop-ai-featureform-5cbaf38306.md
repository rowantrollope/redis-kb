---
title: Featureform
url: https://redis.io/docs/latest/develop/ai/featureform/
retrieved_utc: '2026-04-09T20:45:58.509970+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/develop/ai/featureform/index.html.md
---

# Featureform

```json metadata
{
  "title": "Featureform",
  "description": "Build feature engineering workflows with Featureform and Redis.",
  "categories": ["docs","develop","ai"],
  "tableOfContents": {"sections":[{"id":"get-started","title":"Get started"},{"id":"next-steps","title":"Next steps"},{"id":"what-this-section-covers","title":"What this section covers"}]}

,
  "codeExamples": []
}
```
Featureform helps data teams define, materialize, and serve machine learning features by using a declarative Python SDK on top of existing data systems.

Featureform works with offline systems such as Snowflake, BigQuery, and Databricks or Spark, then uses Redis as the low-latency online store for feature serving.

## Get started

- [Overview]()
- [Quickstart]()
- [Connect providers]()
- [Define datasets and transformations]()
- [Define features and labels]()
- [Work with training sets and feature views]()

## Next steps

- [Streaming features]()

## What this section covers

- The Python SDK workflow for registering providers, datasets, transformations, entities, features, labels, training sets, and feature views
- The distinction between metadata registration and materialization in the current API
- Point-in-time correct feature definitions for both batch and streaming workflows
