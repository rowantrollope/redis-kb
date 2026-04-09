---
title: Create roles with combined access
url: https://redis.io/docs/latest/operate/rs/security/access-control/create-combined-roles/
retrieved_utc: '2026-04-09T20:45:55.304227+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/security/access-control/create-combined-roles/index.html.md
---

# Create roles with combined access

```json metadata
{
  "title": "Create roles with combined access",
  "description": "Create roles with both cluster and database access.",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[{"id":"define-redis-acls","title":"Define Redis ACLs"},{"id":"create-roles-with-acls-and-cluster-access-create-role","title":"Create roles with ACLs and cluster access {#create-role}"}]}

,
  "codeExamples": []
}
```
To create a role that grants database access privileges and allows access to the Cluster Management UI and REST API:

1. [Define Redis ACLs](#define-redis-acls) that determine database access privileges.

1. [Create a role with ACLs](#create-role) added and choose a **Management role** other than **None**.

## Define Redis ACLs

You can use the [Cluster Manager UI](#define-acls-ui) or the [REST API](#define-acls-rest-api) to define Redis ACL rules that you can assign to roles.

**Cluster Manager UI:**

To define a Redis ACL rule using the Cluster Manager UI:

1. From **Access Control > Roles > Data ACLs**, you can either:

    - Select an existing Redis ACL from the list to edit it.

    - Click **+ Add Redis ACL** to create a new Redis ACL.

1. Enter a descriptive name for the Redis ACL. This will be used to associate the ACL rule with the role.

1. Define the ACL rule. For more information about Redis ACL rules and syntax, see the [Redis ACL overview]().

1. Click **Save**.

**REST API:**

To define a Redis ACL rule using the REST API, use a [create Redis ACL]() request. For more information about Redis ACL rules and syntax, see the [Redis ACL overview]().

Example request:

```sh
POST /v1/redis_acls
{ 
  "name": "Test_ACL_1",
  "acl": "+@read +FT.INFO +FT.SEARCH"
}
```

Example response body:

```json
{ 
  "acl": "+@read +FT.INFO +FT.SEARCH",
  "name": "Test_ACL_1",
  "uid": 11
}
```

To associate the Redis ACL with a role and database, use the `uid` from the response as the `redis_acl_uid` when you add `roles_permissions` to the database.




For multi-key commands on multi-slot keys, the return value is `failure`, but the command runs on the keys that are allowed.


## Create roles with ACLs and cluster access {#create-role}

You can create a role that grants database access privileges and allows access to the Cluster Management UI and REST API.

**Cluster Manager UI:**

To define a role for combined access using the Cluster Manager UI:

1. From **Access Control** > **Roles**, you can:

    - Select a role from the list of existing roles to edit it.

    - Click **+ Add role** to create a new role.

    <img src="../../../../../images/rs/screenshots/access-control/7-22-updates/roles-screen.png" alt="Add role with name">

1. Enter a descriptive name for the role. This will be used to reference the role when configuring users.

1. Choose a **Management role** other than **None**. For details about permissions granted by each role, see [Cluster Manager UI permissions]() and [REST API permissions]().

    <img src="../../../../../images/rs/screenshots/access-control/7-22-updates/create-role-combined-access-select-management-role.png" alt="Add role with name">
    
1. Click **+ Add ACL**.

1.  Choose a Redis ACL and databases to associate with the role.

    <img src="../../../../../images/rs/screenshots/access-control/7-22-updates/create-role-combined-access-select-db.png" alt="Add databases to access">

1. Click the check mark to confirm.

1. Click **Save**.

**REST API:**

To define a role for combined access using the REST API:

1. Use a [create role]() request:

    ```sh
    POST /v1/roles
    { 
      "name": "<role-name>",
      "management": "db_viewer | db_member | cluster_viewer | cluster_member | admin" 
    }
    ```

    Example response body:

    ```json
    { 
      "management": "admin",
      "name": "<role-name>",
      "uid": 7
    }
    ```

    To associate the role with a Redis ACL and database, use the `uid` from the response as the `role_uid` when you add `roles_permissions` to the database.

2. [Update a database's configuration]() to add `roles_permissions` with the role and Redis ACL:

    ```sh
    POST /v1/bdbs/<database-id>
    {
      "roles_permissions":
      [
        {
          "role_uid": <integer>,
          "redis_acl_uid": <integer>
        }
      ]
    }
    ```



You can [assign the new role to users]() to grant database access and access to the Cluster Manager UI and REST API.
