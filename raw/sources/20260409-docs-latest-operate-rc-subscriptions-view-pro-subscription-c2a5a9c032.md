---
title: View and edit Redis Cloud Pro plan
url: https://redis.io/docs/latest/operate/rc/subscriptions/view-pro-subscription/
retrieved_utc: '2026-04-09T20:45:57.435153+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rc/subscriptions/view-pro-subscription/index.html.md
---

# View and edit Redis Cloud Pro plan

```json metadata
{
  "title": "View and edit Redis Cloud Pro plan",
  "description": "",
  "categories": ["docs","operate","rc"],
  "tableOfContents": {"sections":[{"id":"databases-tab","title":"Databases tab"},{"id":"overview-tab","title":"Overview tab"},{"id":"connectivity-tab","title":"Connectivity tab"},{"id":"security-tab","title":"Security tab"},{"id":"regions-tab","title":"Regions tab"}]}

,
  "codeExamples": []
}
```To view the details of a Redis Cloud Pro subscription:

1.  Sign in to the [Redis Cloud console](https://cloud.redis.io/#) and select **Subscriptions**.

1.  If you have more than one subscription, select the target subscription from the subscription list.

    

1.  Your subscription details appear, along with a summary of your database details.

    

From here, you can:

- Select **Create database in this subscription** to [add a database to your subscription]().

    

- View the Status icon to learn the status of your subscription.  Active subscriptions display a green circle with a check mark. Pending subscriptions display an animated yellow circle.

     &nbsp; 

Because subscriptions represent active deployments, there aren't many details you can change.  If your needs change, [create a new subscription]() and then [migrate the existing data]() to the new databases.

In addition, you can view and edit the following subscription details:

1.  The **Databases** tab lists the databases in your subscription and summarizes their settings.

2.  The **Overview** tab displays subscription settings for your Redis Cloud Pro subscription.

3.  The **Connectivity** tab lets you limit access to the subscription by defining a VPC peering or other connectivity options.

4.  The **Security** tab lets you set security settings for the databases in your subscription.

5.  The **Regions** tab lets you manage the regions in your Active-Active subscription (_Active-Active subscriptions only_).

The following sections provide more info.

## **Databases** tab

The **Databases** tab summarizes the databases in your subscription.  



The following details are provided:

| Detail | Description |
|:---------|:--------------|
| **Status** | An icon indicating whether the database is active (a green circle) or pending (yellow circle)<br/>&nbsp; |
| **Name** | The database name |
| **Endpoint** | Use the **Copy** button to copy the endpoint URI to the Clipboard |
| **Memory** | Memory size of the database, showing the current size and the maximum size |
| **Throughput** | Maximum operations per second supported for the database |
| **Capabilities** | Identifies advanced capabilities attached to the database |
| **Options** | Icons showing options associated with the database |

To view full details of a database, click its name in the list.

## **Overview** tab

The **Overview** summarizes the options used to create the subscription.



- The general settings panel describes the cloud vendor, region, and high-availability settings for your subscription.

    Select **Edit** to change the name of the subscription.

    


    | Setting | Description |
    |:---------|:--------------|
    | **Cloud vendor** | Your subscription cloud vendor |
    | **Plan description** | Brief summary of subscription, including the plan type, cloud provider, and region |
    | **Auto Tiering** | Checked when Auto Tiering is enabled |
    | **Multi-AZ** | Checked when multiple availability zones are enabled |
    | **Active-Active Redis** | Checked when Active-Active Redis is enabled for your subscription |
    | **Region** | Describes the region your subscription is deployed to |
    | **Availability Zones** | The availability zones your subscription is deployed in (Visible if you selected availability zones on creation) |


- The **Price** panel shows the monthly cost of your Redis Cloud Pro subscription.

- The **Payment Method** panel shows the current payment details.

    Select the **Edit payment method** button to change the credit card associated with this subscription.

    

    Select **Add credit card** to add a new credit card.

- The **Maintenance Window** panel shows your current [maintenance window settings]().

    See [Maintenance]() for more information about subscription maintenance on Redis Cloud.

- The **Provisioned cloud resources** panel shows the storage resources used by your subscription.

  If your subscription is attached to a cloud account, the details appear in the panel header.

- The **Redis price** panel breaks down your subscription price.

## **Connectivity** tab

The **Connectivity** tabs helps secure your subscription.  



Here, you can:

- Set up a [VPC peering]() relationship between the virtual private cloud (VPC) hosting your subscription and another VPC.

- Set up a [CIDR allow list]() containing IP addresses or security groups permitted to access your subscription (_[Bring your own Cloud]() only_).

- Set up [Private Service Connect]() (*Google Cloud only*), [Transit Gateway]() (*AWS only*), or [AWS PrivateLink]() (*AWS only*).

See the individual links to learn more.

## **Security** tab

The **Security** tab lets you set security settings for the databases in your subscription.

Here, you can [block public endpoints]() for all databases in the subscription.

## **Regions** tab

The **Regions** tab is only available for Active-Active subscriptions.  It lets you manage the regions in your Active-Active subscription.



See [Manage regions for an Active-Active database]() for more information.
