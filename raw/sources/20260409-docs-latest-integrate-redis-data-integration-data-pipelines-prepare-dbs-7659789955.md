---
title: Prepare source databases
url: https://redis.io/docs/latest/integrate/redis-data-integration/data-pipelines/prepare-dbs/
retrieved_utc: '2026-04-09T20:45:51.832941+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/integrate/redis-data-integration/data-pipelines/prepare-dbs/index.html.md
---

# Prepare source databases

```json metadata
{
  "title": "Prepare source databases",
  "description": "Enable CDC features in your source databases",
  "categories": ["docs","integrate","rs","rdi"],
  "group": "di",
  "tableOfContents": {"sections":[]}

,
  "codeExamples": []
}
```
Each database uses a different mechanism to track changes to its data and
generally, these mechanisms are not switched on by default.
RDI's Debezium collector uses these mechanisms for change data capture (CDC),
so you must prepare your source database before you can use it with RDI.

RDI supports the following source databases:



The pages in this section give detailed instructions to get your source
database ready for Debezium to use:
