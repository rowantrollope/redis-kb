---
title: Store JSON in Active-Active databases
url: https://redis.io/docs/latest/operate/oss_and_stack/stack-with-enterprise/json/active-active/
retrieved_utc: '2026-04-09T20:45:57.659300+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/oss_and_stack/stack-with-enterprise/json/active-active/index.html.md
---

# Store JSON in Active-Active databases

```json metadata
{
  "title": "Store JSON in Active-Active databases",
  "description": "JSON support and conflict resolution rules for Active-Active databases.",
  "categories": ["docs","operate","stack"],
  "tableOfContents": {"sections":[{"id":"create-an-active-active-json-database","title":"Create an Active-Active JSON database"}]}

,
  "codeExamples": []
}
```
RedisJSON v2.2 adds support for JSON in [Active-Active Redis Software databases]().

The design is based on [A Conflict-Free Replicated JSON Datatype](https://arxiv.org/abs/1608.03960) by Kleppmann and Beresford, but the implementation includes some changes. Several [conflict resolution rule](#conflict-resolution-rules) examples were adapted from this paper as well.

## Create an Active-Active JSON database

To use JSON in an Active-Active database, you must enable JSON during database creation.

Active-Active Redis Cloud databases add JSON by default. See [Create an Active-Active database]() in the Redis Cloud documentation for details.

In Redis Software, Active-Active databases created with or upgraded to Redis version 8 or later automatically enable JSON. For earlier Redis versions, you can enable JSON during database creation:

1. See [Create an Active-Active geo-replicated database]() in the Redis Software documentation for prerequisites and detailed steps.

1. In the **Capabilities** section of the **Create Active-Active database** screen, select **JSON**:

    

    
When you select **JSON**, **Search and Query** is also selected by default to allow you to index and query JSON documents. If you do not want to use these additional features, you can clear the **Search and Query** check box.
    

1. Configure additional database settings.

1. Select **Create**.



