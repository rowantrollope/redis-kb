---
title: Uninstall Redis Software
url: https://redis.io/docs/latest/operate/rs/installing-upgrading/uninstalling/
retrieved_utc: '2026-04-09T20:45:59.247776+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/installing-upgrading/uninstalling/index.html.md
---

# Uninstall Redis Software

```json metadata
{
  "title": "Uninstall Redis Software",
  "description": "",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[{"id":"uninstall-redis-software","title":"Uninstall Redis Software"}]}

,
  "codeExamples": []
}
```
Use the script `rl_uninstall.sh` to uninstall Redis Software and remove its files from a node. The script also deletes all Redis data and configuration from the node.

The uninstall script does not remove the node from the cluster, but the node's status changes to down. For node removal instructions, see [Remove a cluster node]().

## Uninstall Redis Software

To uninstall Redis Software from a cluster node:

1. Navigate to the script's location, which is in `/opt/redislabs/bin/` by default.

1. Run the uninstall script as the root user:

    ```sh
    sudo ./rl_uninstall.sh
    ```

When you run the uninstall script on a node, it only uninstalls Redis Software from that node. To uninstall Redis Software for the entire cluster, run the uninstall script on each cluster node.
