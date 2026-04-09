---
title: Configure CIDR allow list
url: https://redis.io/docs/latest/operate/rc/security/cidr-whitelist/
retrieved_utc: '2026-04-09T20:45:56.234287+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rc/security/cidr-whitelist/index.html.md
---

# Configure CIDR allow list

```json metadata
{
  "title": "Configure CIDR allow list",
  "description": "The CIDR allow list permits traffic between a range of IP addresses and the Redis Cloud VPC.",
  "categories": ["docs","operate","rc"],
  "tableOfContents": {"sections":[{"id":"define-cidr-allow-list","title":"Define CIDR allow list"},{"id":"continue-learning-with-redis-university","title":"Continue learning with Redis University"}]}

,
  "codeExamples": []
}
```
The [CIDR](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) [allow list](https://en.wikipedia.org/wiki/Whitelist) lets you restrict traffic to your Redis Cloud database. When you configure an allow list, only the [IP addresses](https://en.wikipedia.org/wiki/IP_address) defined in the list can connect to the database. Traffic from all other IP addresses is blocked.



To use the CIDR allow list, you must be on either paid Redis Cloud Essentials or on Redis Cloud Pro.  This feature is not supported on free Redis Cloud Essentials plans.


## Define CIDR allow list

To define the CIDR allow list for a database:

1. Select **Databases** from the [Redis Cloud console](https://cloud.redis.io/) menu and then select your database from the list.

1. From the database's **Configuration** screen, select the **Edit database** button.

1. In the **Security** section, turn on the **CIDR allow list** toggle.

1. Enter the first IP address (in CIDR format) you want to allow in the text box and then select the check mark to add it to the allow list:

    
   
1. To allow additional IP addresses:

    1. Select **Add CIDR**.

    1. Enter the new IP address in the text box and then select check to add it to the allow list.

        

    The number of CIDR allow list entries that you can add is based on your Redis Cloud plan. Redis Cloud Essentials plans can have between 4 and 32 entries depending on the plan. Redis Cloud Pro plans can have up to 32 entries.

1. Select **Save database** to apply your changes.


The database CIDR allow list applies to both the public endpoint and the private endpoint. If you use connectivity options such as [VPC Peering]() and [Transit Gateway]() to connect to your database via the private endpoint, you must also add those IPs to your database's CIDR allow list.


## Continue learning with Redis University


