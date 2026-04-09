---
title: Configure subscription CIDR allow list
url: https://redis.io/docs/latest/operate/rc/subscriptions/bring-your-own-cloud/subscription-whitelist/
retrieved_utc: '2026-04-09T20:46:07.831268+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rc/subscriptions/bring-your-own-cloud/subscription-whitelist/index.html.md
---

# Configure subscription CIDR allow list

```json metadata
{
  "title": "Configure subscription CIDR allow list",
  "description": "The CIDR allow list permits traffic between a range of IP addresses and the Redis Cloud VPC.",
  "categories": ["docs","operate","rc"],
  "tableOfContents": {"sections":[{"id":"allow-ip-address-or-security-group","title":"Allow IP address or security group"}]}

,
  "codeExamples": []
}
```
The [CIDR](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) [allow list](https://en.wikipedia.org/wiki/Whitelist) lets you restrict traffic to your Redis Cloud database. When you configure an allow list, only the [IP addresses](https://en.wikipedia.org/wiki/IP_address) defined in the list can connect to the database. Traffic from all other IP addresses is blocked.

If you use [Redis Cloud Bring your Own Cloud]() to host your Redis Cloud deployment, you can configure a subscription-wide allow list
to restrict traffic to all databases associated with the subscription.

The subscription CIDR allow list defines a range of IP addresses and [AWS security groups](https://docs.aws.amazon.com/managedservices/latest/userguide/about-security-groups.html) that control inbound and outbound traffic to the Redis Cloud [VPC](https://en.wikipedia.org/wiki/Virtual_private_cloud). When you add security groups to the allow list, you can also use the same security groups to manage access to your application.


The subscription-level allow list is available for Redis Cloud Bring your Own Cloud. If you don't have Redis Cloud Bring your Own Cloud, you can configure a [CIDR allow list]() for each database.


## Allow IP address or security group

To add IP addresses or [AWS security groups](https://docs.aws.amazon.com/managedservices/latest/userguide/about-security-groups.html) to a subscription's allow list:

1. From the [Redis Cloud console](https://cloud.redis.io/) menu, select **Subscriptions** and then select your subscription from the list.

1. Select **Connectivity > Allow List**.

1. If the allow list is empty, select **Add allow list**.

    

1. Select an entry **Type** from the list:

    

1. In the **Value** box, enter one of these options:

    - An IP address in CIDR format

    - The AWS security group ID

1. Select the check to add the entry to the allow list.

1. To allow additional IP addresses or security groups:

    1. Select **Add** to add a new entry.

    

    1. Select the new entry's **Type**, enter the **Value**, and select the check to add it to the allow list.

        
    
    You can also select the **Edit** button to change an entry or the **Delete** button to remove it.

    &nbsp;
    
1. Select **Apply all changes** to apply the allow list updates.

    