---
title: RedisJSON 2.8 release notes
url: https://redis.io/docs/latest/operate/oss_and_stack/stack-with-enterprise/release-notes/redisjson/redisjson-2.8-release-notes/
retrieved_utc: '2026-04-09T20:46:00.758298+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/oss_and_stack/stack-with-enterprise/release-notes/redisjson/redisjson-2.8-release-notes/index.html.md
---

# RedisJSON 2.8 release notes

```json metadata
{
  "title": "RedisJSON 2.8 release notes",
  "description": "RedisJSON 2.8 introduces bug fixes.",
  "categories": ["docs","operate","stack"],
  "tableOfContents": {"sections":[{"id":"requirements","title":"Requirements"},{"id":"v2816-november-2025","title":"v2.8.16 (November 2025)"},{"id":"v2815-october-2025","title":"v2.8.15 (October 2025)"},{"id":"v2814-september-2025","title":"v2.8.14 (September 2025)"},{"id":"v289-april-2025","title":"v2.8.9 (April 2025)"},{"id":"v288-january-2025","title":"v2.8.8 (January 2025)"},{"id":"v284-september-2024","title":"v2.8.4 (September 2024)"},{"children":[{"id":"headlines","title":"Headlines:"}],"id":"v28-ga-v283-july-2024","title":"v2.8 GA (v2.8.3) (July 2024)"}]}

,
  "codeExamples": []
}
```
## Requirements

RedisJSON v2.8.16 requires:

- Minimum Redis compatibility version (database): 7.4
- Minimum Redis Enterprise Software version (cluster): 7.8

## v2.8.16 (November 2025)

This is a maintenance release for RedisJSON 2.8.

Update urgency: `LOW`: No need to upgrade unless there are new features you want to use.

Details:

Bug fixes:
- [#1446](https://github.com/redisjson/redisjson/pull/1446) Rare race condition in async flush (MOD-12014).

## v2.8.15 (October 2025)

This is a maintenance release for RedisJSON 2.8.

Update urgency: `LOW`: No need to upgrade unless there are new features you want to use.

Details:

Improvements:

- Added support for Rocky Linux 9 and RHEL9 ARM.

## v2.8.14 (September 2025)

This is a maintenance release for RedisJSON 2.8.

Update urgency: `MODERATE`: Program an upgrade of the server, but it's not urgent.

Details:

Bug fixes
- [#1374](https://github.com/redisjson/redisjson/pull/1374) - `JSON.DEL` doesnât delete all matching object members / array elements (MOD-11032, MOD-11067).

## v2.8.9 (April 2025)

This is a maintenance release for RedisJSON 2.8.

Update urgency: `LOW`: No need to upgrade unless there are new features you want to use.

Details:

Bug fixes
- [#1329](https://github.com/redisjson/redisjson/pull/1329) Memory usage calculation: some allocations are counted twice (MOD-9169) 

Improvements:
- [#1335](https://github.com/redisjson/redisjson/pull/1335) Added support for Azure Linux 3 (MOD-9172)

## v2.8.8 (January 2025)

This is a maintenance release for RedisJSON 2.8

Update urgency: `LOW`: No need to upgrade unless there are new features you want to use.

Details:  

- Bug fixes:
  - [#1313](https://github.com/redisjson/redisjson/pull/1313) (Redis Enterprise A-A only) Potential crash on `JSON.DEBUG MEMORY` (MOD-8412)

- Improvements:
  - [#1262](https://github.com/redisjson/redisjson/pull/1262) Support active memory defragmentation (MOD-7888)
  - [#1308](https://github.com/redisjson/redisjson/pull/1308) Added support for Ubuntu 22 and macOS 13 and 14

## v2.8.4 (September 2024)

This is a maintenance release for RedisJSON 2.8

Update urgency: `MODERATE`: Program an upgrade of the server, but it's not urgent.

Details:

- Bug fixes:

  - [#1225](https://github.com/redisjson/redisjson/pull/1225) Crash on SET commands with recursive overlapping paths (MOD-7279)
  - HDT#261 (Redis Enterprise A-A only) Crash when a JSON contains an EOF character (MOD-7464)

## v2.8 GA (v2.8.3) (July 2024)

This is the General Availability release of RedisJSON 2.8

### Headlines:

RedisJSON 2.8 introduces bug fixes.

Details

- Bug fixes

  - [#1212](https://github.com/RedisJSON/RedisJSON/pull/1212) `JSON.MSET`- AOF commands are duplicated multiple times (MOD-7293)


- The version inside Redis will be 2.8.3 in semantic versioning. Since the version of a module in Redis is numeric, we could not add a GA flag.
- Minimal Redis version: 7.4

