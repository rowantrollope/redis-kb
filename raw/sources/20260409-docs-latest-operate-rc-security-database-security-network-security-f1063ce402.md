---
title: Network security
url: https://redis.io/docs/latest/operate/rc/security/database-security/network-security/
retrieved_utc: '2026-04-09T20:45:56.419962+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rc/security/database-security/network-security/index.html.md
---

# Network security

```json metadata
{
  "title": "Network security",
  "description": "",
  "categories": ["docs","operate","rc"],
  "tableOfContents": {"sections":[{"id":"ip-and-subnet-restrictions-ip","title":"IP and subnet restrictions {#ip}"},{"children":[{"id":"vpcs-with-aws","title":"VPCs with AWS"},{"id":"vpcs-with-google-cloud","title":"VPCs with Google Cloud"},{"id":"vpcs-with-azure","title":"VPCs with Azure"}],"id":"virtual-private-clouds","title":"Virtual private clouds"}]}

,
  "codeExamples": []
}
```
Redis Cloud supports two types of network security: database-level CIDR allow lists and [VPC](#virtual-private-clouds)-wide CIDR allow lists.

These features are available in most Redis Cloud configurations, as shown here:

| Cloud&nbsp;provider | VPC peering | IP restrictions |
|:-------------------:|-------------|-----------------|
| AWS | Redis Cloud Pro | Paid Redis Cloud Essentials and Redis Cloud Pro |
| Google Cloud | Redis Cloud Pro | Paid Redis Cloud Essentials and Redis Cloud Pro |
| Azure | Redis Cloud Pro | Redis Cloud Pro |

## IP and subnet restrictions {#ip}

You can restrict database access to a configurable
set of source IP addresses and subnets. This is roughly equivalent
to using [iptables](https://en.wikipedia.org/wiki/Iptables) to limit access to a host.

To restrict a database to a specific set of source IP addresses or subnets, see [Configure CIDR allow list]().

## Virtual private clouds

A [Virtual Private Cloud](https://en.wikipedia.org/wiki/Virtual_private_cloud) (VPC) is an isolated set of resources within a [public cloud](https://en.wikipedia.org/wiki/Cloud_computing#Public_cloud), usually having its own subnets and VLAN.

Redis Cloud Pro databases are almost always deployed in a Redis VPC. In most cases, you'll need to create a [VPC peering connection]() to access these databases. A VPC peering connection allows unrestricted network access between two VPCs.

Connection creation and supported features vary by public cloud provider. Learn more about VPC usage for [AWS](#vpcs-with-aws), [Google Cloud](#vpcs-with-google-cloud), and [Azure](#vpcs-with-azure).

### VPCs with AWS

Subscriptions that run on AWS support two VPC options. To ensure that that you can securely connect to your database, you need to [create a VPC peering connection]().

If you create a VPC peering connection, you can also [configure a CIDR allow list]() to allow connections only from specific IP address blocks or security groups.

### VPCs with Google Cloud

Subscriptions that run on Google Cloud *require* a VPC peering connection. See [Google Cloud VPC peering]() to learn how to set up VPC peering for Google Cloud.

### VPCs with Azure

When you request a Redis Cloud Annual subscription, all databases will be deployed in your own Azure VPC.
