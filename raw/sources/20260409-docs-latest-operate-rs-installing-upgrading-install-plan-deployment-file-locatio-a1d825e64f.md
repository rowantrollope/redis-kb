---
title: File locations
url: https://redis.io/docs/latest/operate/rs/installing-upgrading/install/plan-deployment/file-locations/
retrieved_utc: '2026-04-09T20:45:58.549973+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/installing-upgrading/install/plan-deployment/file-locations/index.html.md
---

# File locations

```json metadata
{
  "title": "File locations",
  "description": "Redis Software file installation locations.",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[{"id":"application-directories","title":"Application directories"},{"id":"configuration-and-data-directories","title":"Configuration and data directories"}]}

,
  "codeExamples": []
}
```
To ensure that Redis Software functions properly, be careful with the files in the application directories. If you modify or delete the application files, Redis Software might not work as expected.


## Application directories

The directories that Redis Software installs into are:

| **Path** | **Description** |
|------------|-----------------|
| /opt/redislabs | Main installation directory for all Redis Software binaries |
| /opt/redislabs/bin | Binaries for all the utilities for command-line access and management, such as [`rladmin`]() or [`redis-cli`]() |
| /opt/redislabs/config | System configuration files |
| /opt/redislabs/lib | System library files |
| /opt/redislabs/sbin | System binaries for tweaking provisioning |

## Configuration and data directories

The default directories that Redis Software uses for data and metadata are:

| **Path** | **Description** |
|------------|-----------------|
| /var/opt/redislabs | Default storage location for the cluster data, system logs, backups, and ephemeral, persisted data |
| /var/opt/redislabs/log | System logs for Redis Software |
| /var/opt/redislabs/run | Socket files for Redis Software |
| /etc/opt/redislabs | Default location for cluster manager configuration and certificates |
| /tmp | The /tmp filesystem is for temporary files and should be sized according to this formula: `<number-of-cluster-nodes> * <size-of-/var/opt/redislabs/log-filesystem>`  |

You can change these file locations for:

- [Ephemeral and persistence storage]() during cluster setup
- [Socket files]() after cluster setup


To specify custom paths for ephemeral and persistent storage during cluster setup, you must install Redis Software using [custom installation directories](). If you use the default installation, you cannot specify custom storage paths and will receive a "path not mounted" error.

