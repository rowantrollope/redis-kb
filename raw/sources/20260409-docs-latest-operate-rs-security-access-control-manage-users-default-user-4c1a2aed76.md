---
title: Manage default user
url: https://redis.io/docs/latest/operate/rs/security/access-control/manage-users/default-user/
retrieved_utc: '2026-04-09T20:45:58.599073+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/security/access-control/manage-users/default-user/index.html.md
---

# Manage default user

```json metadata
{
  "title": "Manage default user",
  "description": "Manage a database's default user.",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[{"id":"authenticate-as-default-user","title":"Authenticate as default user"},{"id":"change-default-database-password","title":"Change default database password"},{"id":"deactivate-default-user","title":"Deactivate default user"}]}

,
  "codeExamples": []
}
```
When you [create a database](), default user database access is enabled by default (**Unauthenticated access** is selected). This gives the default user full access to the database and enables compatibility with versions of Redis before Redis 6.

Select **Password-only authentication**, then enter and confirm a default database password to require authentication for connections to the database.



## Authenticate as default user

When you configure a password for your database, all connections to the database must authenticate using the [AUTH]() command. See Redis security's [authentication]() section for more information.

```sh
AUTH <default-database-password>
```

## Change default database password

To change the default user's password:

1. From the database's **Security** tab, select **Edit**.

1. In the **Access Control** section, select **Password-only authentication** as the **Access method**.

1. Enter and re-enter the new password.

1. Select **Save**.

## Deactivate default user

If you set up [role-based access control]() with [access control lists]() (ACLs) for your database and don't require backwards compatibility with versions earlier than Redis 6, you can [deactivate the default user]().


- Before you deactivate default user access, make sure the role associated with the database is [assigned to a user](). Otherwise, the database will be inaccessible.

- If you enabled the default database password during the creation of an [Active-Active database](), you should not turn off the default database password because it could prevent the removal of participating database instances.


To deactivate the default user:

1. From the database's **Security** tab, select **Edit**.

1. In the **Access Control** section, select **Using ACL only** as the **Access method**.

    

1. Choose at least one role and Redis ACL to access the database.

1. Select **Save**.
