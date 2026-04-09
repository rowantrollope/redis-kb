---
title: When to use RDI
url: https://redis.io/docs/latest/integrate/redis-data-integration/when-to-use/
retrieved_utc: '2026-04-09T20:45:53.377982+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/integrate/redis-data-integration/when-to-use/index.html.md
---

# When to use RDI

```json metadata
{
  "title": "When to use RDI",
  "description": "Understand when (and when not) to use RDI.",
  "categories": ["docs","integrate","rs","rdi"],
  "group": "di",
  "tableOfContents": {"sections":[{"children":[{"id":"decision-tree-for-using-rdi","title":"Decision tree for using RDI"}],"id":"guidelines-for-using-rdi","title":"Guidelines for using RDI"}]}

,
  "codeExamples": []
}
```
RDI is designed to support apps that must use a disk-based database as the system of record
but must also be fast and scalable. This is a common requirement for mobile and web
apps with a rapidly-growing number of users; the performance of the main database is fine at first
but it will soon struggle to handle the increasing demand without a cache.

## Guidelines for using RDI

Use the information in the sections below to determine whether RDI is a good fit for your architecture.

```decision-tree
```



### Decision tree for using RDI

Use the decision tree below to determine whether RDI is a good fit for your architecture:


