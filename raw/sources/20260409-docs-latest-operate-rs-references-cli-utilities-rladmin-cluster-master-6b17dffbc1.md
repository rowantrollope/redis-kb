---
title: rladmin cluster master
url: https://redis.io/docs/latest/operate/rs/references/cli-utilities/rladmin/cluster/master/
retrieved_utc: '2026-04-09T20:46:05.577088+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/references/cli-utilities/rladmin/cluster/master/index.html.md
---

# rladmin cluster master

```json metadata
{
  "title": "rladmin cluster master",
  "description": "Identifies or changes the cluster's master node.",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[]}

,
  "codeExamples": []
}
```
Identifies the cluster's master node. Use `set` to change the cluster's master to a different node.

```sh
cluster master [ set <node_id> ]
```

### Parameters

| Parameter | Type/Value | Description |
|-----------|------------|-------------|
| node_id | integer | Unique node ID |

### Returns

Returns the ID of the cluster's master node. Otherwise, it returns an error message.

### Example

Identify the cluster's master node:

```sh
$ rladmin cluster master
Node 1 is the cluster master node
```

Change the cluster master to node 3:

```sh
$ rladmin cluster master set 3
Node 3 set to be the cluster master node
```
