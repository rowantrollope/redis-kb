---
title: crdb-cli task cancel
url: https://redis.io/docs/latest/operate/rs/references/cli-utilities/crdb-cli/task/cancel/
retrieved_utc: '2026-04-09T20:46:02.332598+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/references/cli-utilities/crdb-cli/task/cancel/index.html.md
---

# crdb-cli task cancel

```json metadata
{
  "title": "crdb-cli task cancel",
  "description": "Attempts to cancel a specified Active-Active database task.",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[]}

,
  "codeExamples": []
}
```
Cancels the Active-Active database task specified by the task ID.

```sh
crdb-cli task cancel --task-id <task_id>
```

### Parameters

| Parameter           | Value  | Description                         |
|---------------------|--------|-------------------------------------|
| task-id \<task_id\>  | string | An Active-Active database task ID (required) |

### Returns

Attempts to cancel an Active-Active database task.

Be aware that tasks may complete before they can be cancelled.

### Example

```sh
$ crdb-cli task cancel --task-id 2901c2a3-2828-4717-80c0-6f27f1dd2d7c 
```
