---
title: Debezium Server configuration file
url: https://redis.io/docs/latest/integrate/write-behind/reference/debezium/
retrieved_utc: '2026-04-09T20:45:57.793677+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/integrate/write-behind/reference/debezium/index.html.md
---

# Debezium Server configuration file

```json metadata
{
  "title": "Debezium Server configuration file",
  "description": "Application properties settings used to configure Debezim Server for source database servers",
  "categories": ["docs","integrate","rs","rdi"],
  "group": "di",
  "tableOfContents": {"sections":[]}

,
  "codeExamples": []
}
```
The `application.properties` file configures Debezium Server configuration to support source databases. It contains sections that define the sink connector (Redis) configuration and the source connector configuration.
This file needs to be saved in the host running Debezium Server.

The following topics describe `application.properties` for specific database servers:
