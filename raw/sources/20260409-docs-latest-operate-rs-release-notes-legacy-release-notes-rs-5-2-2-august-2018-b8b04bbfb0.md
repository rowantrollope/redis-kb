---
title: Redis Enterprise Software 5.2.2 (August 2018)
url: https://redis.io/docs/latest/operate/rs/release-notes/legacy-release-notes/rs-5-2-2-august-2018/
retrieved_utc: '2026-04-09T20:46:00.140047+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/release-notes/legacy-release-notes/rs-5-2-2-august-2018/index.html.md
---

# Redis Enterprise Software 5.2.2 (August 2018)

```json metadata
{
  "title": "Redis Enterprise Software 5.2.2 (August 2018)",
  "description": "",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[{"id":"overview","title":"Overview"},{"id":"new-capabilities","title":"New capabilities"},{"id":"important-fixes","title":"Important fixes"},{"id":"known-limitations","title":"Known limitations"}]}

,
  "codeExamples": []
}
```Redis Enterprise Software (RS) 5.2.2 is now available.

RS 5.2.2 is a minor version that includes important fixes and minor enhancements to Redis Enterprise 5.2.

## Overview

If you are upgrading from a previous version, make sure to review the upgrade instructions before beginning the upgrade process. You can upgrade to RS 5.2.2 from RS 4.5 and above. If you have a version older than 4.5, you should first upgrade to version 5.0 (or at least 4.5).

## New capabilities

Support for Redis version 4.0.10
RediSearch Enterprise, which is installed with Redis Enterprise Software by default, has been updated to a newer version (1.4.0)

## Important fixes

- RED-21080 â Fixed the memory limit calculation for RoF databases
- RED-20825 â Updated the âRAM limitâ of RoF databases to a range between 10% and 100%
- RED-20506 â Fixed high CPU and File Descriptors utilization by the node watchdog process (node_wd)
- RED-20275 â Fixed wrong metrics values while importing a dataset into an RoF database
- RED-20214 â Fixed obstacles to login to the UI when using an LDAP integration
- RED-20162 â Fixed known limitation of being able to activate "Require SSL for All Communication" to Redis Enterprise CRDBs via Rest API without providing a certificate
- RED-19758 â Upgraded NGINX from 1.10.3 to 1.13.12
- RED-19415, RED-18945 â Improved support for Lettuce client with OSS Cluster enabled
- RED-19287 â Fixed a scenario of a stuck shard migration process
- RED-18459 â Updated the data persistence (AOF / Snapshot) of RoF databases to be handled, by default, by the replica shard/s
- RED-20541â Improved handling of aof file when its tail is corrupted (using aof-load-corrupt-tail flag)
- RED-21936 â Improved handling of CRDB configuration update when URL parameter was supplied at creation time
- RED-19760 â Added the capability to control the minimum TLS version that can be used for encrypting the Discovery Service data

## Known limitations

- When updating the general settings of a cluster, the âusernameâ and âpasswordâ fields in the email server settings cannot be left empty. In case one wants to update the general settings and prefer to leave the âusernameâ and âpasswordâ fields empty, the REST API should be used.
- An issue prevents the user from defining âmin_data_TLS_versionâ on the source cluster when working with Replica Of or CRDB.
