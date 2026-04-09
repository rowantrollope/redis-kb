---
title: Debug info requests
url: https://redis.io/docs/latest/operate/rs/references/rest-api/requests/debuginfo/
retrieved_utc: '2026-04-09T20:46:03.666809+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/references/rest-api/requests/debuginfo/index.html.md
---

# Debug info requests

```json metadata
{
  "title": "Debug info requests",
  "description": "Debug info requests",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[{"id":"get-debug-info-for-all-nodes-in-the-cluster","title":"Get debug info for all nodes in the cluster"},{"id":"get-debug-info-for-the-current-node","title":"Get debug info for the current node"}]}

,
  "codeExamples": []
}
```

These REST API paths are deprecated as of Redis Software version 7.4.2. Use the new paths [`/v1/cluster/debuginfo`](), [`/v1/nodes/debuginfo`](), and [`/v1/bdbs/debuginfo`]() instead.


Downloads a support package, which includes logs and information about the cluster, nodes, databases, and shards, as a tar file called `filename.tar.gz`. Extract the files from the tar file to access the debug info.

## Get debug info for all nodes in the cluster

| Method | Path | Description |
|--------|------|-------------|
| [GET]() | `/v1/debuginfo/all` | Gets debug info for all nodes |
| [GET]() | `/v1/debuginfo/all/bdb/{bdb_uid}` | Gets debug info for a database from all nodes |

## Get debug info for the current node

| Method | Path | Description |
|--------|------|-------------|
| [GET]() | `/v1/debuginfo/node` | Gets debug info for the current node |
| [GET]() | `/v1/debuginfo/node/bdb/{bdb_uid}` | Gets debug info for a database from the current node |
