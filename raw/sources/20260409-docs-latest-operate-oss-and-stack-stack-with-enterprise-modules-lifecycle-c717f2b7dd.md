---
title: Module lifecycle
url: https://redis.io/docs/latest/operate/oss_and_stack/stack-with-enterprise/modules-lifecycle/
retrieved_utc: '2026-04-09T20:45:53.588440+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/oss_and_stack/stack-with-enterprise/modules-lifecycle/index.html.md
---

# Module lifecycle

```json metadata
{
  "title": "Module lifecycle",
  "description": "",
  "categories": ["docs","operate","stack"],
  "tableOfContents": {"sections":[{"id":"module-release-numbering","title":"Module release numbering"},{"children":[{"id":"redisearch","title":"RediSearch"},{"id":"redisjson","title":"RedisJSON"},{"id":"redisgraph","title":"RedisGraph"},{"id":"redistimeseries","title":"RedisTimeSeries"},{"id":"redisbloom","title":"RedisBloom"},{"id":"redisgears","title":"RedisGears"}],"id":"module-end-of-life-schedule-modules-endoflife-schedule","title":"Module end-of-life schedule {#modules-endoflife-schedule}"}]}

,
  "codeExamples": []
}
```Redis Software follows the [Redis Software lifecycle]().  (For complete details, see the Redis Software [subscription agreement](https://redis.com/software-subscription-agreement).)

The modules included in Redis Stack also follow a release lifecycle and schedule. Here, you'll find the "end-of-life" dates for each module and release.

## Module release numbering

Redis modules use a three-place numbering scheme to identify released versions.

The format is "Major1.Major2.Minor".

- Major sections of the version number represent fundamental changes to functionality and feature capabilities. The _Major1_ and _Major2_ part of the version number are incremented according to the size and scale of the changes in each release.

- The _Minor_ section of the version number represents quality improvements and fixes to existing capabilities.  The minor release number is increased when release quality improves.

## Module end-of-life schedule {#modules-endoflife-schedule}

End-of-Life for a given Major version is 18 months after the formal release of
that version or 12 months after the release of the next subsequent (following) version, whichever comes last.

### RediSearch



### RedisJSON



### RedisGraph



### RedisTimeSeries



### RedisBloom



### RedisGears


