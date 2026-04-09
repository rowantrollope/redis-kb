---
title: Set up a new cluster
url: https://redis.io/docs/latest/operate/rs/clusters/new-cluster-setup/
retrieved_utc: '2026-04-09T20:45:54.919648+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/clusters/new-cluster-setup/index.html.md
---

# Set up a new cluster

```json metadata
{
  "title": "Set up a new cluster",
  "description": "How to set up a new cluster using the management UI.",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[]}

,
  "codeExamples": []
}
```A Redis Software cluster typically consists of several nodes.
For production deployments, we recommend an uneven number of nodes, with a minimum of three.


In a cluster that consists of only one node, some features and capabilities are not enabled,
such as database replication that provides high availability.


To set up a new cluster, you must first [install the Redis Software package]()
and then set up the cluster as described below.
After the cluster is created you can [add multiple nodes to the cluster]().

To create a cluster:

1. In a browser, go to `https://<name or IP address of the machine with Redis Software installed>:8443`.
    For example, if you installed Redis SoftwareÂ on a machine with IP address 10.0.1.34, go to <https://10.0.1.34:8443>.

    
- TheÂ management UI uses a [self-signed certificate for TLS encryption]().
- If the machine has both an internal IP address and an external IP address, use the external IP address to access the setup UI.
    

1. Select **Create new cluster**.

1. Enter an email and password for the administrator account, then select **Next** to proceed to cluster setup.

1. Enter your cluster license key if you have one. Otherwise, the cluster uses the trial license by default.

1. In the **Configuration** section:

    1. For **FQDN (Fully Qualified Domain Name)**, enter a unique name for the cluster.

        See the [instructions for DNS setup]()
        to make sure your cluster is reachable by name.

    1. Choose whether to [**Enable private & public endpoints support**]().

    1. Choose whether to [**Enable rack-zone awareness**]().

1. Click **Next**.

1. Configure storage and network settings:

    1. Enter a path forÂ [*Ephemeral storage*](), or leave the default path.

    1. Enter a path forÂ [*Persistent storage*](),
        or leave the default path.

    1. To enable [*Redis Flex or Auto Tiering*](),
        select **Enable flash storage** and enter the path to the flash storage.

    1. If the cluster is configured to support [rack-zone awareness](), set the **Rack-zone ID** for the new node.

    1. If your machine has multiple IP addresses, assign a single IPv4 type address for **Node-to-node communication (internal traffic)** and multiple IPv4/IPv6 type addresses for **External traffic**.

1. Select **Create cluster**.

1. Click **OK** to confirm that you are aware of the replacement of the HTTPS TLS certificate on the node,
    and proceed through the browser warning.

After a short wait, your cluster is created and you can sign in to the Cluster Manager UI.

You can now access any of the management capabilities, including:

- [Creating a new database]()
- [Joining a new node to a cluster]()
