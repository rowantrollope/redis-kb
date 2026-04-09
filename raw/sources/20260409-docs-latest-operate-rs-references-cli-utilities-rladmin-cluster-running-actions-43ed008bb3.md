---
title: rladmin cluster running_actions
url: https://redis.io/docs/latest/operate/rs/references/cli-utilities/rladmin/cluster/running_actions/
retrieved_utc: '2026-04-09T20:46:07.178189+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/references/cli-utilities/rladmin/cluster/running_actions/index.html.md
---

# rladmin cluster running_actions

```json metadata
{
  "title": "rladmin cluster running_actions",
  "description": "Lists all active tasks.",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[]}

,
  "codeExamples": []
}
```
Lists all active tasks running on the cluster.

```sh
rladmin cluster running_actions
```

### Parameters

None

### Returns

Returns details about any active tasks running on the cluster. 

### Example

```sh
$ rladmin cluster running_actions
Got 1 tasks:
1) Task: maintenance_on (ce391d81-8d51-4ce2-8f63-729c7ac2589e) Node: 1 Status: running
```