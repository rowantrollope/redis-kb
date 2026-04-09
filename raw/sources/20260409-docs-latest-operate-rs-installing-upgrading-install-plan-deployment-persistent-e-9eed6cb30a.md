---
title: Persistent and ephemeral node storage
url: https://redis.io/docs/latest/operate/rs/installing-upgrading/install/plan-deployment/persistent-ephemeral-storage/
retrieved_utc: '2026-04-09T20:45:58.120389+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/installing-upgrading/install/plan-deployment/persistent-ephemeral-storage/index.html.md
---

# Persistent and ephemeral node storage

```json metadata
{
  "title": "Persistent and ephemeral node storage",
  "description": "Configure paths for persistent storage and ephemeral storage.",
  "categories": ["docs","operate","rs","kubernetes"],
  "tableOfContents": {"sections":[{"id":"persistent-storage","title":"Persistent storage"},{"id":"ephemeral-storage","title":"Ephemeral storage"},{"id":"disk-size-requirements","title":"Disk size requirements"}]}

,
  "codeExamples": []
}
```For each node in the cluster, you can configure paths for both persistent
storage and ephemeral storage. To do so, the volume must have full permissions for user and group `redislabs` or users:group `redislabs:redislabs`. See the [Customize system user and group]() page for instructions.


The persistent storageÂ and ephemeral storage discussed in this document are not related
to Redis persistence or AWS ephemeral drives.


## Persistent storage

Persistent storage is mandatory. The cluster uses persistent storage to store
information that needs to persist if a shard or a node fails,
such as server logs, configurations, and files.

To set the frequency of syncs, you can configure [persistence]()
options for a database.
    
The persistent volume must be a storage area network (SAN)
using an EXT4 or XFS file system and be connected as an external storage volume.
    
When using append-only file (AOF) persistence, use flash-based storage
for the persistent volume.

## Ephemeral storage

Ephemeral storage is optional. If configured, temporary information that does not need to be persisted is stored by the cluster in the ephemeral storage.
This improves performance and helps reduce the load on the persistent storage.

Ephemeral storage must be a locally attached volume on each node.

## Disk size requirements

For disk size requirements, see:

- [Hardware
    requirements]()
    for general guidelines regarding the ideal disk size for each type of
    storage.
- [Disk size requirements for extreme write
    scenarios]()
    for special considerations when dealing with a high rate of write
    commands.
