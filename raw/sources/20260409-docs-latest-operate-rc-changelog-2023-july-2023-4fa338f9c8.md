---
title: Redis Cloud changelog (July 2023)
url: https://redis.io/docs/latest/operate/rc/changelog/2023/july-2023/
retrieved_utc: '2026-04-09T20:45:59.763494+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rc/changelog/2023/july-2023/index.html.md
---

# Redis Cloud changelog (July 2023)

```json metadata
{
  "title": "Redis Cloud changelog (July 2023)",
  "description": "New features, enhancements, and other changes added to Redis Cloud during July 2023.",
  "categories": ["docs","operate","rc"],
  "tableOfContents": {"sections":[{"children":[{"id":"new-acl-capabilities","title":"New ACL capabilities"}],"id":"new-features","title":"New features"},{"id":"deprecations","title":"Deprecations"}]}

,
  "codeExamples": []
}
```
This changelog lists new features, enhancements, and other changes added to Redis Cloud during July 2023.

## New features

### New ACL capabilities

You can now use [Selectors](#selectors) and [Key Permissions](#selectors) in your [ACL rules]() for all Redis 7.2 databases. 

In addition, the admin console now returns an error if you try to enter an invalid ACL. It will also associate the ACL rule with the supported database version when you [add it to a role]().

## Deprecations

- RedisGraph is no longer available when you select Redis Stack on Fixed. For more information, see the [RedisGraph end of life announcement](https://redis.com/blog/redisgraph-eol/).
- You are no longer able to [create an ACL rule]() using the rule builder. Instead, use [ACL syntax](https://redis.io/docs/management/security/acl/) to define your ACL rules.