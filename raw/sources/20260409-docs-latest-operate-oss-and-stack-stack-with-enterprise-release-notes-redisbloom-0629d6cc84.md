---
title: RedisBloom 1.0 release notes
url: https://redis.io/docs/latest/operate/oss_and_stack/stack-with-enterprise/release-notes/redisbloom/redisbloom-1.0-release-notes/
retrieved_utc: '2026-04-09T20:46:01.300826+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/oss_and_stack/stack-with-enterprise/release-notes/redisbloom/redisbloom-1.0-release-notes/index.html.md
---

# RedisBloom 1.0 release notes

```json metadata
{
  "title": "RedisBloom 1.0 release notes",
  "description": "First GA release of RedisBloom.",
  "categories": ["docs","operate","stack"],
  "tableOfContents": {"sections":[{"id":"requirements","title":"Requirements"},{"id":"v103-december-2017","title":"v1.0.3 (December 2017)"},{"id":"v102-november-2017","title":"v1.0.2 (November 2017)"},{"id":"v100-september-2017","title":"v1.0.0 (September 2017)"}]}

,
  "codeExamples": []
}
```## Requirements

RedisBloom v1.0.3 requires:

- Minimum Redis compatibility version (database): 4.0
- Minimum Redis Enterprise Software version (cluster): 5.0

## v1.0.3 (December 2017)

This contains a single fix, issue #[19](https://github.com/RedisBloom/RedisBloom/issues/19).

From this version onwards, `EXISTS`/`MEXISTS` returns 0 if the (Redis) key does not exist in the database.  Earlier versions returned an error.

## v1.0.2 (November 2017)

This fixes a build issue (fixed s3 config in circle yaml).

## v1.0.0 (September 2017)

This is the first GA release of ReBloom.
