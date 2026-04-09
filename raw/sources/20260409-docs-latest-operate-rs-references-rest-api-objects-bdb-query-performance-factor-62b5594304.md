---
title: Query performance factor object
url: https://redis.io/docs/latest/operate/rs/references/rest-api/objects/bdb/query_performance_factor/
retrieved_utc: '2026-04-09T20:46:06.477544+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/references/rest-api/objects/bdb/query_performance_factor/index.html.md
---

# Query performance factor object

```json metadata
{
  "title": "Query performance factor object",
  "description": "Configuration object for query performance factor",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[]}

,
  "codeExamples": []
}
```
Configures [query performance factor]() and related fields.

| Field | Type/Value | Description |
|-------|------------|-------------|
| active | boolean (default: false) | If true, enables query performance factor for the database |
| scaling_factor | integer (range: 0-16) (default: 0) | Scales the magnitude of the query performance factor |

