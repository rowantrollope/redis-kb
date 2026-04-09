---
title: redis.lookup
url: https://redis.io/docs/latest/integrate/redis-data-integration/reference/data-transformation/lookup/
retrieved_utc: '2026-04-09T20:45:54.867938+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/integrate/redis-data-integration/reference/data-transformation/lookup/index.html.md
---

# redis.lookup

```json metadata
{
  "title": "redis.lookup",
  "description": "Lookup data from Redis using the given command and key",
  "categories": ["docs","integrate","rs","rdi"],
  "group": "di",
  "tableOfContents": {"sections":[{"id":"args-redis-command-arguments-args","title":"args\\[\\]: Redis command arguments {#args}"}]}

,
  "codeExamples": []
}
```
**Properties**

| Name              | Type       | Description                                   | Required |
| ----------------- | ---------- | --------------------------------------------- | -------- |
| **connection**    | `string`   | Connection name                               | yes      |
| **cmd**           | `string`   | The command to execute                        | yes      |
| [**args**](#args) | `string[]` | Redis command arguments                       | yes      |
| **language**      | `string`   | Language<br/>Enum: `"jmespath"`, `"sql"`<br/> | yes      |
| **field**         | `string`   | The target field to write the result to<br/>  | yes      |

**Additional Properties:** not allowed

## args\[\]: Redis command arguments {#args}

The list of expressions that produce arguments.

**Items**

**Item Type:** `string`
