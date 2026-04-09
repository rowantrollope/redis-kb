---
title: Security
url: https://redis.io/docs/latest/operate/rc/security/
retrieved_utc: '2026-04-09T20:45:58.280940+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rc/security/index.html.md
---

# Security

```json metadata
{
  "title": "Security",
  "description": "",
  "categories": ["docs","operate","rc"],
  "tableOfContents": {"sections":[{"id":"redis-cloud-console-security-admin-console-security","title":"Redis Cloud console security {#admin-console-security}"},{"id":"database-security","title":"Database security"},{"id":"api-security","title":"API security"},{"id":"continue-learning-with-redis-university","title":"Continue learning with Redis University"}]}

,
  "codeExamples": []
}
```
Redis Cloud provides a number of ways to secure subscriptions and databases.

As a Redis Cloud user, consider these security domains:

- The [Redis Cloud console](#admin-console-security)
- [Your databases]()
- The [Redis Cloud API]()

First, you might want to review our [shared responsibility model]() for security.

## Redis Cloud console security {#admin-console-security}

The Redis Cloud console is the web application you use to manage your Redis Cloud deployments. 

Secure access to the Redis Cloud console by:

- Assigning appropriate roles to [team members with access]().

- Enabling [multi-factor authentication]().

- Enabling [SAML SSO]().


A user session on Redis Cloud expires after 30 minutes. You'll be signed out of Redis Cloud after 30 minutes of inactivity.


## Database security

You have several options when it comes to securing your Redis Cloud databases. For more information, see [Cloud database security](). Options include:

- [Encryption at rest]()
- [Role-based access control]()
- [TLS]()
- [Network security]() using
- [VPC peering]() and [CIDR whitelist]()

## API security

The Redis Cloud API allows you to programmatically administer your subscriptions and database deployments. This API is disabled by default. When you [enable the API](), you can then [manage the API keys]() for all owners of your Redis Cloud account. For an overview of the security features of the API, see the [API authentication documentation]().

## Continue learning with Redis University

