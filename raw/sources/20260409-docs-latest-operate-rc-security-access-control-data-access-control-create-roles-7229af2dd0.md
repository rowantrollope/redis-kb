---
title: Assign permissions to roles
url: https://redis.io/docs/latest/operate/rc/security/access-control/data-access-control/create-roles/
retrieved_utc: '2026-04-09T20:45:55.461877+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rc/security/access-control/data-access-control/create-roles/index.html.md
---

# Assign permissions to roles

```json metadata
{
  "title": "Assign permissions to roles",
  "description": "",
  "categories": ["docs","operate","rc"],
  "tableOfContents": {"sections":[]}

,
  "codeExamples": []
}
```
To assign [Redis ACLs]() to a data access role:

1. Go to **Data Access Control** from the [Redis Cloud console](https://cloud.redis.io/#/) menu.

    

1. Select the **Roles** tab.

    

1. Select `+` to create a new role or point to an existing role and select the pencil icon to edit it.

    

1. Enter a name for the role.

    

1. Select an **ACL rule** to assign to the role.

    

1. Select one or more databases from the **Databases** list and click the check mark to confirm the association.

    

1. Select **Save role**.

When you assign a user-defined ACL rule to a role and associate it with one or more databases, we'll verify that the ACL rule will work with the selected databases. The database may go into an Inactive state for a few seconds while we verify the ACL rule.

After you create a role, you can assign it to a user. Users with this role can access the databases according to the role's associated Redis ACLs. For more information, see [Assign roles to users]().

To assign Redis ACLs to a role for an [Active-Active database](), see [Active-Active access roles]().



