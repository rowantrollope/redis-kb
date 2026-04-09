---
title: Data transformation
url: https://redis.io/docs/latest/integrate/write-behind/data-transformation/
retrieved_utc: '2026-04-09T20:45:56.287625+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/integrate/write-behind/data-transformation/index.html.md
---

# Data transformation

```json metadata
{
  "title": "Data transformation",
  "description": "",
  "categories": ["docs","integrate","rs","rdi"],
  "group": "di",
  "tableOfContents": {"sections":[{"id":"more-info","title":"More info"}]}

,
  "codeExamples": []
}
```
The key functionality that Write-behind performs is mapping the data coming from [Debezium Server](https://debezium.io/documentation/reference/stable/operations/debezium-server.html) (representing a Source Database row data or row state change) into a Redis key with a value of [Hash]() or [JSON]().
There are two types of data transformations in Write-behind:

1. By default, each source row is converted into one hash or one JSON key in Redis.
  This conversion uses the Debezium schema-based conversion. The incoming data includes the schema and Write-behind uses a set of handlers to automatically convert each source column to a Redis Hash field or JSON type based on the Debezium type in the schema. See
  [data type conversion]()
  for a full reference on these conversions.

1. If the user wants to add or modify this default mapping, Write-behind provides declarative data transformations. These transformations are represented in YAML files. Each file contains a job, which is a set of transformations per source table. See
[declarative transformations]() for more information.



## More info

