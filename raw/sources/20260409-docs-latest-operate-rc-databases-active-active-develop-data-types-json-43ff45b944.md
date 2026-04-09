---
title: JSON in Active-Active databases
url: https://redis.io/docs/latest/operate/rc/databases/active-active/develop/data-types/json/
retrieved_utc: '2026-04-09T20:46:04.941975+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rc/databases/active-active/develop/data-types/json/index.html.md
---

# JSON in Active-Active databases

```json metadata
{
  "title": "JSON in Active-Active databases",
  "description": "Information about using JSON with an Active-Active database.",
  "categories": ["docs","operate","rs","rc"],
  "tableOfContents": {"sections":[{"id":"prerequisites","title":"Prerequisites"}]}

,
  "codeExamples": []
}
```Active-Active databases support JSON data structures.

The design is based on [A Conflict-Free Replicated JSON Datatype](https://arxiv.org/abs/1608.03960) by Kleppmann and Beresford, but the implementation includes some changes. Several [conflict resolution rule](#conflict-resolution-rules) examples were adapted from this paper as well.

## Prerequisites

To use JSON in an Active-Active database, you must enable JSON during database creation.

Active-Active Redis Cloud databases add JSON by default. See [Create an Active-Active subscription]() in the Redis Cloud documentation for details.

In Redis Software, Active-Active databases created with or upgraded to Redis version 8 or later automatically enable JSON. For earlier Redis versions, see [Create an Active-Active JSON database]() in the Redis Stack and Redis Software documentation for instructions.



