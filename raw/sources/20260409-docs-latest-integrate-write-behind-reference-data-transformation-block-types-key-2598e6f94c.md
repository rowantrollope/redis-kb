---
title: key
url: https://redis.io/docs/latest/integrate/write-behind/reference/data-transformation-block-types/key/
retrieved_utc: '2026-04-09T20:45:54.319525+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/integrate/write-behind/reference/data-transformation-block-types/key/index.html.md
---

# key

```json metadata
{
  "title": "key",
  "description": "Set the Redis key for this data entry",
  "categories": ["docs","integrate","rs","rdi"],
  "group": "di",
  "tableOfContents": {"sections":[]}

,
  "codeExamples": []
}
```
Set the Redis key for this data entry

**Properties**

| Name           | Type     | Description                                   | Required |
| -------------- | -------- | --------------------------------------------- | -------- |
| **expression** | `string` | Expression<br/>                               | yes      |
| **language**   | `string` | Language<br/>Enum: `"jmespath"`, `"sql"`<br/> | yes      |

**Additional Properties:** not allowed

**Example**

```yaml
source:
  server_name: redislabs
  schema: dbo
  table: emp
key:
  expression: concat([InvoiceId, '.', CustomerId])
  language: jmespath
```
