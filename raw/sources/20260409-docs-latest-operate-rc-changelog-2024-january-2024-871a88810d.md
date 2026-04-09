---
title: Redis Cloud changelog (January 2024)
url: https://redis.io/docs/latest/operate/rc/changelog/2024/january-2024/
retrieved_utc: '2026-04-09T20:45:59.163897+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rc/changelog/2024/january-2024/index.html.md
---

# Redis Cloud changelog (January 2024)

```json metadata
{
  "title": "Redis Cloud changelog (January 2024)",
  "description": "New features, enhancements, and other changes added to Redis Cloud during January 2024.",
  "categories": ["docs","operate","rc"],
  "tableOfContents": {"sections":[{"children":[{"id":"transit-gateway","title":"Transit Gateway"},{"id":"billing-admin-role","title":"Billing Admin role"},{"id":"database-tags","title":"Database tags"},{"id":"network-data-cost-breakdowns","title":"Network data cost breakdowns"}],"id":"new-features","title":"New features"},{"id":"deprecations","title":"Deprecations"}]}

,
  "codeExamples": []
}
```
## New features

### Transit Gateway 

You can now connect your Flexible subscriptions hosted on Amazon Web Services (AWS) to [AWS Transit Gateway](https://docs.aws.amazon.com/vpc/latest/tgw/how-transit-gateways-work.html). See [Connect to Transit Gateway]() to learn how to connect your Flexible subscription to Transit Gateway.

### Billing Admin role

You can now add a user with the Billing Admin role in the [Access Management]() screen. Billing Admins can view and edit settings related to billing and payments. They can add and remove payment methods and change the payment method for a subscription, but they cannot change any other subscription or database settings.

See [Team Management roles]() to see an overview of user roles and their permissions.

### Database tags

You can now add [tags]() to your database.

Tags are key-value pairs that let you categorize your databases. You can create tags and add them to your databases to associate them with each other. Once you've added tags, you can filter your databases in the [database list]() by tag key or value. 

See [Manage tags]() to learn how to add tags to your database.

### Network data cost breakdowns

Invoices for customers with Flexible and Annual subscriptions now include a breakdown of network data costs for the subscription. To download an invoice, go to the [Billing and Payments]() page on the [Redis Cloud console](https://cloud.redis.io/).

Customers with Annual subscriptions can also find a breakdown of network data costs in the consumption report.

## Deprecations

- 
