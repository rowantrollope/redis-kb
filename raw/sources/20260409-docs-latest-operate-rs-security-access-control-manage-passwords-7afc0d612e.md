---
title: Set password policies
url: https://redis.io/docs/latest/operate/rs/security/access-control/manage-passwords/
retrieved_utc: '2026-04-09T20:45:56.551404+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/security/access-control/manage-passwords/index.html.md
---

# Set password policies

```json metadata
{
  "title": "Set password policies",
  "description": "Set password policies.",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[]}

,
  "codeExamples": []
}
```
Redis Software provides several ways to manage the passwords of local accounts, including:

- [Password complexity rules]()

- [Password expiration]()

- [Password rotation]()

You can also manage a user's ability to [sign in]() and control [session timeout]().

To enforce more advanced password policies, we recommend using [LDAP integration]() with an external identity provider, such as Active Directory.


Redis Software securely stores all user passwords using a cryptographic hash function. The default password hashing algorithm is `SHA-256`, but you can [change the password hashing algorithm]() to `PBKDF2` as of Redis Software version 7.8.6-13.

