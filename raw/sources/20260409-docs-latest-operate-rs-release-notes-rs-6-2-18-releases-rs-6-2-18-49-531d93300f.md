---
title: Redis Enterprise Software release notes 6.2.18-49 (October 2022)
url: https://redis.io/docs/latest/operate/rs/release-notes/rs-6-2-18-releases/rs-6-2-18-49/
retrieved_utc: '2026-04-09T20:45:59.328965+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/release-notes/rs-6-2-18-releases/rs-6-2-18-49/index.html.md
---

# Redis Enterprise Software release notes 6.2.18-49 (October 2022)

```json metadata
{
  "title": "Redis Enterprise Software release notes 6.2.18-49 (October 2022)",
  "description": "New REST API endpoint to check whether a node is a primary or a replica. Added metrics to track certificate expiration time.",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[{"id":"new-features-and-enhancements","title":"New features and enhancements"},{"id":"known-upgrade-limitations","title":"Known upgrade limitations"}]}

,
  "codeExamples": []
}
```
This is a maintenance release for â[âRedis Enterprise Software version 6.2.18](https://redis.io/downloads/#software).

The following table shows the MD5 checksums for the available packages:

| Package | MD5 checksum (6.2.18-49 October release) |
|:--------|:-------------|
| Ubuntu 16 | `89029a28a2b0e3ad379559b94d00ae32` |
| Ubuntu 18 | `830e8704c0f6902a04df9ff53cc5e41f` |
| RedHat Enterprise Linux (RHEL) 7<br/>Oracle Enterprise Linux (OL) 7 | `766d2f8448fc28d0ea67cac20387a9e3` |
| RedHat Enterprise Linux (RHEL) 8<br/>Oracle Enterprise Linux (OL) 8 | `7e31fb3e3416b404513dad508669f836` |

## New features and enhancements

- The [`/nodes/status`]() REST API endpoint indicates whether a node is the primary.  (RS82566)
- Added metrics to track certificates expiration time (RS56040)

#### Redis modules 

Redis Enterprise Software v6.2.18-49 (October release) includes the following Redis modules:

- [RediSearch v2.4.11]()
- [RedisJSON v2.2.0]()
- [RedisBloom v2.2.18](release-notes/redisbloom-2.2-release-notes/#v2218-july-2022)
- [RedisGraph v2.8.17]()
- [RedisTimeSeries v1.6.17]()

See [Upgrade modules]() to learn how to upgrade a module for a database. 

## Known upgrade limitations

Before you upgrade a cluster that hosts Active-Active databases with modules to v6.2.18, perform the following steps:

1. Use `crdb-cli` to verify that the modules (`modules`) and their versions (in `module_list`) are as they appear in the database configuration and in the default database configuration:

    ```sh
    crdb-cli crdb get --crdb-guid <crdb-guid>
    ```

1. From the admin console's **redis modules** tab, validate that these modules with their specific versions are loaded to the cluster.

1. If one or more of the modules/versions are missing or if you need help, [contact Redis support](https://redis.com/company/support/) before taking additional steps.