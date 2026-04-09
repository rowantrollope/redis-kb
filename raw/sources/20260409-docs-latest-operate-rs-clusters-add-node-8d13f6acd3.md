---
title: Add a node
url: https://redis.io/docs/latest/operate/rs/clusters/add-node/
retrieved_utc: '2026-04-09T20:45:55.392180+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/clusters/add-node/index.html.md
---

# Add a node

```json metadata
{
  "title": "Add a node",
  "description": "Add a node to your existing Redis Software cluster.",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[{"id":"prerequisites","title":"Prerequisites"},{"id":"add-node","title":"Add node"},{"id":"verify-node","title":"Verify node"}]}

,
  "codeExamples": []
}
```When you install Redis Software on the first node of a cluster, you create the new cluster.
After you install the first node, you can add more nodes to the cluster.

## Prerequisites

Before you add a node to the cluster:

- The clocks on all nodes must always be [synchronized]().

    If the clock in the node you are trying to join to the cluster is not synchronized with the nodes already in the cluster,
    the action fails and an error message is shown indicating that you must synchronize the clocks first.

- You must [update the DNS records]()
    each time a node is added or replaced.

- We recommend that you add nodes one after the other rather than in parallel
    to avoid errors that occur because the connection to the other nodes in the cluster cannot be verified.

## Add node

To add a node to an existing cluster:

1. [Install the Redis Software installation package]() on a clean installation
    of a [supported operating system]().

1. To connect to the Cluster Manager UI of the new Redis Software installation, go to: <https://URL or IP address:8443>

    For example, if you installed Redis Software on a machine with IP addressÂ 10.0.1.34, go toÂ `https://10.0.1.34:8443`.

    
TheÂ management UI uses TLS encryption with a default certificate.
You can also [replace the TLS certificate]()
with a custom certificate.
    

1. Select **Join cluster**.

1. For **Cluster identification**, enter the internal IP address or DNS name of a node that is a cluster member.

    If the node only has one IP address, enter that IP address.

1. For **Cluster sign in**, enter the credentials of the cluster administrator.

    The cluster administrator is the user account that you create when you configure the first node in the cluster.

1. Click **Next**.

1. Configure storage and network settings:

    1. Enter a path forÂ [*Ephemeral storage*](), or leave the default path.

    1. Enter a path forÂ [*Persistent storage*](),
        or leave the default path.

    1. To enable [*Redis Flex or Auto Tiering*](),
        select **Enable flash storage** and enter the path to the flash storage.

    1. If the cluster is configured to support [rack-zone awareness](), set the **Rack-zone ID** for the new node.

    1. If your machine has multiple IP addresses, assign a single IPv4 type address for **Node-to-node communication (internal traffic)** and multiple IPv4/IPv6 type addresses for **External traffic**.

1. Select **Join cluster**.

The node is added to the cluster.
You can see it in the list of nodes in the cluster.

If you see an error when you add the node, try adding the node again.

## Verify node

We recommend that you verify the node is functioning properly using one of the following methods:

- Cluster Manager UI method:

    1. On the **Nodes** screen, click  for the node you want to verify.
    
    1. Select **Verify node** from the list.

    

- Command-line method:

    Run the [`rlcheck`]() utility from the node's command line.
