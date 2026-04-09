---
title: Data access control
url: https://redis.io/docs/latest/operate/rc/security/access-control/data-access-control/
retrieved_utc: '2026-04-09T20:45:55.994578+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rc/security/access-control/data-access-control/index.html.md
---

# Data access control

```json metadata
{
  "title": "Data access control",
  "description": "Control who can access your databases using the default user database password and role-based access control.",
  "categories": ["docs","operate","rc"],
  "tableOfContents": {"sections":[{"id":"default-user","title":"Default user"},{"id":"role-based-access-control","title":"Role-based access control"}]}

,
  "codeExamples": []
}
```
## Default user

When you create a Redis Cloud database, your database is given a randomly generated password called the [**Default user password**](). Learn how to [change the default user password]() or [turn off default user access]().

## Role-based access control

With [role-based access control (RBAC)](), you create roles and assign users to those roles to grant different levels of access to the database.

- [Enable RBAC]()
- [Configure ACLs]()
- [Create roles]()
- [Create and edit database users]()
- [Active-Active roles]()