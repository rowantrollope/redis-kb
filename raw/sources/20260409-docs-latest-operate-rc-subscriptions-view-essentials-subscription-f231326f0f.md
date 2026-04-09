---
title: View and Upgrade Redis Cloud Essentials plan
url: https://redis.io/docs/latest/operate/rc/subscriptions/view-essentials-subscription/
retrieved_utc: '2026-04-09T20:45:56.622577+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rc/subscriptions/view-essentials-subscription/index.html.md
---

# View and Upgrade Redis Cloud Essentials plan

```json metadata
{
  "title": "View and Upgrade Redis Cloud Essentials plan",
  "description": "",
  "categories": ["docs","operate","rc"],
  "tableOfContents": {"sections":[{"children":[{"id":"change-high-availability-and-persistence","title":"Change high availability and persistence"},{"id":"change-subscription-plan","title":"Change subscription plan"},{"id":"change-payment-method","title":"Change payment method"},{"id":"save-changes","title":"Save changes"}],"id":"upgrade-plan","title":"Upgrade plan"},{"id":"subscription-overview","title":"Subscription overview"}]}

,
  "codeExamples": []
}
```To view the details of a Redis Cloud Essentials subscription:

1.  Sign in to the [Redis Cloud console](https://cloud.redis.io/) and select the **Subscriptions** list.

1.  Select the target subscription from the subscription list.

    

1.  Your subscription details appear, along with a summary of your database details.

    

From here, you can:

- Select the **Plan upgrade** button to update your subscription plan, high availability settings, or payment method.

    

- Select the **Overview** tab to view and edit subscription details.

The following sections provide more details.

## Upgrade plan

Use the **Plan upgrade** button to update your Redis Cloud Essentials plan, your high availability settings, or your payment method. Upgrading your database between Redis Cloud Essentials plans does not impact database availability during the update.



For information on how to upgrade to Redis Cloud Pro, see [upgrade subscription plan from Essentials to Pro]().

### Change high availability and persistence

To change your plan's [high availability]() and [data persistence]() settings, change them in the **Configure your settings** panel.



You can switch between **No replication** and **Single-zone replication** at any time, but you cannot choose **Multi-zone replication** after your subscription is created. You also cannot switch from **Multi-zone replication** to another high availability option.

### Change subscription plan

To change your subscription plan, select the desired plan from the list and select the **Upgrade plan** button:



Each Redis Cloud Essentials plan provides a variety of benefits, including increased memory and number of connections.
For a comparison of available plans, see [Redis Cloud Essentials plans]().

When you change your plan, your data and endpoints are not disrupted.  

If you upgrade a free plan to a paid plan, you need to add a payment method.

If you change your subscription to a lower plan, make sure your data fits within the limits of the new plan; otherwise, the change attempt will fail.





### Change payment method

To change your subscription payment method, update the **Payment method** settings.  You can select a known payment method from the drop-down list or use the **Add** button to add a new one.



Payment method changes require the Owner or Billing Admin roles. To verify your role, select **Access Management** from the admin menu and then locate your credentials in the **Team** tab.

### Save changes

Use the **Update Database** button to save changes.



## Subscription overview

The **Overview** tab summarizes your Redis Cloud Essentials subscription details using a series of panels:



The following details are displayed:

| Detail | Description |
|:---------|:--------------|
| **Subscription description** | Brief summary of subscription, including the plan type, cloud provider, region, and data size limit |
| **Cloud vendor** | Your database's cloud vendor |
| **Availability** | Describes high availability settings |
| **Region** | The region your subscription is deployed to |
| **Plan** | The maximum database size of your Essentials plan. Also displays the cost for paid plans. |
| **Databases** | Maximum number of databases for your plan |
| **Connections** | Maximum number of concurrent connections |
| **CIDR allow rules** | Maximum number of authorization rules |
| **Data persistence** | Indicates whether persistence is supported for your subscription |
| **Daily & instant backups** | Indicates whether backups are supported for your subscription |
| **Replication** | Indicates whether replication is supported for your subscription |
| **Clustering** | Indicates whether clustering is supported for your subscription |

The **Delete Database** button lets you [delete your database]().


