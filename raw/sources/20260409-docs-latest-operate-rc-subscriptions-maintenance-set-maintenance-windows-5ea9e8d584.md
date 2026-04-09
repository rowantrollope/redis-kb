---
title: Set maintenance windows
url: https://redis.io/docs/latest/operate/rc/subscriptions/maintenance/set-maintenance-windows/
retrieved_utc: '2026-04-09T20:46:07.423365+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rc/subscriptions/maintenance/set-maintenance-windows/index.html.md
---

# Set maintenance windows

```json metadata
{
  "title": "Set maintenance windows",
  "description": "Shows how to set manual maintenance windows and skip maintenance.",
  "categories": ["docs","operate","rc"],
  "tableOfContents": {"sections":[{"id":"set-manual-maintenance-windows","title":"Set manual maintenance windows"},{"id":"skip-maintenance-temporarily","title":"Skip maintenance temporarily"}]}

,
  "codeExamples": []
}
```
By default, Redis will maintain your Redis Cloud subscriptions and databases as needed. During maintenance, you may notice some latency when connecting to your databases. For more information about the types of maintenance and how Redis maintains your subscriptions, see [Maintenance]().

For Redis Cloud Pro plans, Redis will perform maintenance automatically while limiting service disruption as much as possible. If you want to control when Redis performs maintenance for a Redis Cloud Pro subscription, you can [set manual maintenance windows](#set-manual-maintenance-windows) to ensure non-urgent maintenance will occur at set times. Configuring or altering the maintenance window will not have any impact on your subscription or databases.


You can only set manual maintenance windows for Redis Cloud Pro plans. A Redis Cloud Essentials database has a set maintenance window based on the region where it is located. See [Essentials maintenance]() for more information.


## Set manual maintenance windows

To set manual maintenance windows for a single Redis Cloud Pro subscription:

1. From the [Redis Cloud console](https://cloud.redis.io/), select the **Subscriptions** menu and then select your subscription from the list.

1. Select the **Overview** tab.

1. In the **Maintenance Windows** panel, select **Manual**.

1. Click **Activate** to confirm your selection.

1. Enter the maintenance window time frame details.

    

    - Select the days that Redis can perform maintenance in the **Days** drop-down.
    - Select the time that Redis can start performing maintenance on those days in the **From** drop-down.
    - Select the amount of time that Redis can perform maintenance in the **Duration** drop-down.
    - Select **+ Time Frame** to add another time frame for maintenance.
    - Select **Advance notification** if you want to be notified of maintenance in advance.

    
You must [contact support](https://redis.io/support/) to request and be approved for advance maintenance notifications, otherwise skip this step as the this option does not appear by default.
    

    Redis recommends allowing maintenance on at least two different days for 8 hours on each day.

1. Click **Save**.

## Skip maintenance temporarily

To skip maintenance temporarily for a subscription:

1. From the [Redis Cloud console](https://cloud.redis.io/), select the **Subscriptions** menu and then select your subscription from the list.

1. Select the **Overview** tab.

1. In the **Maintenance Windows** panel, select **Skip the next 14 days**.

1. Click **Continue** to confirm your selection.

You will only be allowed to skip maintenance once per month. 

During the skipped maintenance period, Redis will not perform any minor or major upgrades. Redis may perform [urgent maintenance]() on your subscription, but only if it is absolutely necessary.


