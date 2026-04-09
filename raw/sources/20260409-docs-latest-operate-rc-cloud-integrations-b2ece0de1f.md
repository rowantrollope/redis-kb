---
title: Manage marketplace integrations
url: https://redis.io/docs/latest/operate/rc/cloud-integrations/
retrieved_utc: '2026-04-09T20:45:57.223827+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rc/cloud-integrations/index.html.md
---

# Manage marketplace integrations

```json metadata
{
  "title": "Manage marketplace integrations",
  "description": "Describes how to integrate Redis Cloud subscriptions into existing cloud provider services, whether existing subscriptions or through vendor marketplaces.",
  "categories": ["docs","operate","rc"],
  "tableOfContents": {"sections":[{"id":"marketplace-billing-considerations","title":"Marketplace billing considerations"}]}

,
  "codeExamples": []
}
```
By default, Redis Cloud subscriptions are hosted in cloud vendor accounts owned and managed by Redis.

To integrate Redis Cloud into an existing cloud vendor account, you can:

- Subscribe to Redis Cloud through [AWS Marketplace]().

- Subscribe to Redis Cloud through [Google Cloud Marketplace]().

When you subscribe to Redis Cloud through a cloud vendor marketplace, billing is handled through the marketplace.

Redis also offers monthly and annual commitments through cloud vendor marketplaces. [Contact sales](https://redis.io/meeting/) if you're interested in a monthly or annual offer.

## Marketplace billing considerations

Cloud vendor marketplaces provide a convenient way to handle multiple subscription fees.  However, this also means that billing issues impact multiple subscriptions, including Redis Cloud.

When billing details change, you should verify that each service is operating normally and reflects the updated billing details.  Otherwise, you might experience unexpected consequences, such as data loss or subscription removal.

For best results, we recommend:

- [Backing up all data]() _before_ updating billing details.

- Contacting [support](https://redis.io/support/) or your account team for assistance.