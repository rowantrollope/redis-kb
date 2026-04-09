---
title: rladmin node recovery_path set
url: https://redis.io/docs/latest/operate/rs/references/cli-utilities/rladmin/node/recovery-path/
retrieved_utc: '2026-04-09T20:46:06.593059+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/references/cli-utilities/rladmin/node/recovery-path/index.html.md
---

# rladmin node recovery_path set

```json metadata
{
  "title": "rladmin node recovery_path set",
  "description": "Sets a node's local recovery path.",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[]}

,
  "codeExamples": []
}
```
Sets the node's local recovery path, which specifies the directory where [persistence files]() are stored. You can use these persistence files to [recover a failed database]().

```sh
rladmin node <ID> recovery_path set <path>
```

### Parameters

| Parameter | Type/Value                     | Description                                                                                   |
|-----------|--------------------------------|-----------------------------------------------------------------------------------------------|
| node      | integer                        | Sets the recovery path for the specified node                                            |
| path      | filepath                       | Path to the folder where persistence files are stored                                         |

### Returns

Returns `Updated successfully` if the recovery path was set. Otherwise, it returns an error.

### Example

```sh
$ rladmin node 2 recovery_path set /var/opt/redislabs/persist/redis
Updated successfully.
```
