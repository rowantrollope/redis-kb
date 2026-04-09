---
title: Replace a cluster node
url: https://redis.io/docs/latest/operate/rs/clusters/replace-node/
retrieved_utc: '2026-04-09T20:46:00.343077+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/clusters/replace-node/index.html.md
---

# Replace a cluster node

```json metadata
{
  "title": "Replace a cluster node",
  "description": "Replace a node in your cluster that is down.",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[]}

,
  "codeExamples": []
}
```A failed node will appear as `Down` () in the **Nodes** list.

To replace a failed node: 

1. Prepare a new node identical to the old one.

1.  Install and
    configure Redis Software on the node. See [Install and setup]() for more information.

    
If you are using [Redis Flex or Auto Tiering](), make sure the required flash storage is set up on this new node.
    

1. [Add the node]() to the cluster. Make sure the new node has as much available memory as the faulty
    node.

    If the new node does not have enough memory, you will be prompted to add a node with enough memory.

1. A message will appear informing you that the cluster has a faulty node
    and that the new node will replace the faulty node.

    
- If there is a faulty node in the cluster to which you are adding a node, Redis Software will use the new node to replace the faulty one.
- Any existing [DNS records]() must be updated
each time a node is added or replaced.
    
