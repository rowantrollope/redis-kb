---
title: Cloud database security
url: https://redis.io/docs/latest/operate/rc/security/database-security/
retrieved_utc: '2026-04-09T20:45:55.400076+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rc/security/database-security/index.html.md
---

# Cloud database security

```json metadata
{
  "title": "Cloud database security",
  "description": "",
  "categories": ["docs","operate","rc"],
  "tableOfContents": {"sections":[{"id":"passwords-users-and-roles","title":"Passwords, users, and roles"},{"id":"network-security","title":"Network security"},{"id":"transport-layer-security-tls","title":"Transport Layer Security (TLS)"},{"id":"disk-encryption","title":"Disk encryption"},{"id":"continue-learning-with-redis-university","title":"Continue learning with Redis University"}]}

,
  "codeExamples": []
}
```
Redis Cloud provides several features to help you secure your databases. These include
[password-based authentication]() and [role-based access control](),
[network security](), [TLS](), and [encryption-at-rest]().

## Passwords, users, and roles

All Redis Cloud databases [require a password]() to connect. However, we recommend enabling [role-based access control]() (RBAC) for additional security. With RBAC, you can define
all the roles you need, with the appropriate permissions, and assign those roles
to your users.

## Network security

Redis Cloud supports two types of network security: [IP Restrictions](#ip) and [VPCs](#virtual-private-clouds). We recommend that you employ at least one of these network security options to constrain access to your databases.

## Transport Layer Security (TLS)

Redis Cloud supports [Transport Layer Security]() (TLS) for database access. TLS, often called "SSL", ensures the privacy of the TCP connection between your application and database. When client
authentication is activated, TLS ensures that only clients with an authorized key can access to your Redis databases.

We strongly recommend enabling TLS for any application transmitting sensitive data across the wire.

## Disk encryption

Redis Cloud provides encryption for all data stored on disk in Redis databases. See our [encryption at rest documentation]() for specific details.

## Continue learning with Redis University


