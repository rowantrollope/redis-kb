---
title: rladmin cluster debug_info
url: https://redis.io/docs/latest/operate/rs/references/cli-utilities/rladmin/cluster/debug_info/
retrieved_utc: '2026-04-09T20:46:03.660534+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/references/cli-utilities/rladmin/cluster/debug_info/index.html.md
---

# rladmin cluster debug_info

```json metadata
{
  "title": "rladmin cluster debug_info",
  "description": "Creates a support package.",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[]}

,
  "codeExamples": []
}
```
Downloads a support package to the specified path. If you do not specify a path, it downloads the package to the default path specified in the cluster configuration file.

```sh
rladmin cluster debug_info
        [ node <ID> ]
        [ path <path> ]
```

### Parameters

| Parameter | Type/Value | Description |
|-----------|------------|-------------|
| node | integer | Downloads a support package for the specified node |
| path | filepath | Specifies the location where the support package should download |

### Returns

Reports the progress of the support package download.

### Example

```sh
$ rladmin cluster debug_info node 1
Preparing the debug info files package
Downloading...
[==================================================]
Downloading complete. File /tmp/debuginfo.20220511-215637.node-1.tar.gz is saved.
```
