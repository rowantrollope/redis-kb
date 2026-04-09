---
title: Upgrade an existing Redis Software deployment
url: https://redis.io/docs/latest/operate/rs/installing-upgrading/upgrading/
retrieved_utc: '2026-04-09T20:45:58.744588+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/installing-upgrading/upgrading/index.html.md
---

# Upgrade an existing Redis Software deployment

```json metadata
{
  "title": "Upgrade an existing Redis Software deployment",
  "description": "How to upgrade a cluster's Redis Software version, database version, and operating system.",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[{"id":"upgrade-redis-software","title":"Upgrade Redis Software"},{"id":"upgrade-redis-database","title":"Upgrade Redis database"},{"id":"upgrade-operating-system","title":"Upgrade operating system"}]}

,
  "codeExamples": []
}
```
## Upgrade Redis Software

To upgrade Redis Software:

1. Verify appropriate [network ports]() are either open or used by Redis Software.

1. Complete all [prerequisites]() before starting the upgrade.

1. Upgrade the software on all nodes of the cluster using one of the following methods:
    
    - [In-place upgrade]() - Directly upgrade Redis Software on each node in the cluster. Although this method is simpler than the rolling upgrade method, it might cause brief service interruptions as each node is upgraded.
    
    - [Rolling upgrade]() - Minimize downtime by adding new nodes with an updated Redis Software version to the cluster, one at a time, while keeping the rest of the cluster operational. This method is recommended for production environments that require continuous availability.

## Upgrade Redis database

[Upgrade each database]() in the cluster or [upgrade an Active-Active database]() to enable new features and important fixes.

## Upgrade operating system

To upgrade the cluster's operating system:

1. Complete all [prerequisites]()  before starting the upgrade.

2. Use one of the following rolling upgrade methods:

    - [Extra node method]() - Recommended if you have additional resources available.

    - [Replace node method]() - Recommended if you cannot temporarily allocate additional resources.