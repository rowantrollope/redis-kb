---
title: Security
url: https://redis.io/docs/latest/operate/rs/security/
retrieved_utc: '2026-04-09T20:45:58.705427+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/security/index.html.md
---

# Security

```json metadata
{
  "title": "Security",
  "description": "",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[{"id":"recommended-security-practices","title":"Recommended security practices"},{"id":"redis-trust-center","title":"Redis Trust Center"}]}

,
  "codeExamples": []
}
```
Redis Software provides various features to secure your deployment:

| Login and passwords | Users and roles | Encryption and TLS | Certificates and audit |
|---------------------|-----------------|--------------------|-----------------------|
| [Password attempts and session timeout]() | [Cluster and database access explained]() | [Enable TLS]() | [Create certificates]() |
| [Password complexity]() | [Create users]() | [Configure TLS protocols]() | [Monitor certificates]() |
| [Password expiration]() | [Create roles]() | [Configure cipher suites]() | [Update certificates]() |
| [Default database access]() | [Redis ACLs]() | [Encrypt private keys on disk]() | [Enable OCSP stapling]() |
| [Rotate user passwords]() | [Integrate with LDAP]() | [Internode encryption]() | [Audit database connections]() |
| [Single sign-on (SSO)]() | | | |

## Recommended security practices

See [Recommended security practices]() to learn how to protect Redis Software.

## Redis Trust Center

Visit our [Trust Center](https://trust.redis.io/) to learn more about Redis security policies. If you find a suspected security bug, you can [submit a report](https://hackerone.com/redis-vdp?type=team).
