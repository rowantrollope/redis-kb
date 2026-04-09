---
title: Create roles with cluster access only
url: https://redis.io/docs/latest/operate/rs/security/access-control/create-cluster-roles/
retrieved_utc: '2026-04-09T20:45:55.184096+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/security/access-control/create-cluster-roles/index.html.md
---

# Create roles with cluster access only

```json metadata
{
  "title": "Create roles with cluster access only",
  "description": "Create roles with cluster access only.",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[{"id":"default-management-roles","title":"Default management roles"},{"id":"cluster-manager-ui-permissions","title":"Cluster Manager UI permissions"},{"id":"create-roles-for-cluster-access-create-cluster-role","title":"Create roles for cluster access {#create-cluster-role}"}]}

,
  "codeExamples": []
}
```
Roles with cluster access allow access to the Cluster Management UI and REST API.

## Default management roles

Redis Software includes five predefined roles that determine a user's level of access to the Cluster Manager UI and [REST API]().

1. **DB Viewer** - Read database settings
1. **DB Member** - Administer databases
1. **Cluster Viewer** - Read cluster settings
1. **Cluster Member** - Administer the cluster
1. **User Manager** - Administer users
1. **Admin** - Full cluster access
1. **None** - For data access only - cannot access the Cluster Manager UI or use the REST API

For more details about the privileges granted by each of these roles, see [Cluster Manager UI permissions](#cluster-manager-ui-permissions) or [REST API permissions]().

## Cluster Manager UI permissions

Here's a summary of the Cluster Manager UI actions permitted by each default management role:

| Action | DB Viewer | DB Member | Cluster Viewer | Cluster Member | Admin | User Manager |
|--------|:---------:|:---------:|:--------------:|:-----------:|:------:|:------:|
| Create, edit, delete users and LDAP mappings | <span title="Not allowed">&#x274c; No</span> | <span title="Not allowed">&#x274c; No</span> | <span title="Not allowed">&#x274c; No</span> | <span title="Not allowed">&#x274c; No</span> | <span title="Allowed">&#x2705; Yes</span> | <span title="Allowed">&#x2705; Yes</span> |
| Create support package | <span title="Not allowed">&#x274c; No</span> | <span title="Allowed">&#x2705; Yes</span> | <span title="Not allowed">&#x274c; No</span> | <span title="Allowed">&#x2705; Yes</span> | <span title="Allowed">&#x2705; Yes</span> | <span title="Not allowed">&#x274c; No</span> |
| Edit database configuration | <span title="Not allowed">&#x274c; No</span> | <span title="Allowed">&#x2705; Yes</span> | <span title="Not allowed">&#x274c; No</span> | <span title="Allowed">&#x2705; Yes</span> | <span title="Allowed">&#x2705; Yes</span> | <span title="Not allowed">&#x274c; No</span> |
| Reset slow log | <span title="Not allowed">&#x274c; No</span> | <span title="Allowed">&#x2705; Yes</span> | <span title="Not allowed">&#x274c; No</span> | <span title="Allowed">&#x2705; Yes</span> | <span title="Allowed">&#x2705; Yes</span> | <span title="Not allowed">&#x274c; No</span> |
| View cluster configuration | <span title="Not allowed">&#x274c; No</span> | <span title="Not allowed">&#x274c; No</span> | <span title="Allowed">&#x2705; Yes</span> | <span title="Allowed">&#x2705; Yes</span> | <span title="Allowed">&#x2705; Yes</span> | <span title="Allowed">&#x2705; Yes</span> |
| View cluster logs | <span title="Not allowed">&#x274c; No</span> | <span title="Allowed">&#x2705; Yes</span> | <span title="Allowed">&#x2705; Yes</span> | <span title="Allowed">&#x2705; Yes</span> | <span title="Allowed">&#x2705; Yes</span><br /> | <span title="Allowed">&#x2705; Yes</span><br /> |
| View cluster metrics | <span title="Not allowed">&#x274c; No</span> | <span title="Not allowed">&#x274c; No</span> | <span title="Allowed">&#x2705; Yes</span> | <span title="Allowed">&#x2705; Yes</span> | <span title="Allowed">&#x2705; Yes</span> | <span title="Allowed">&#x2705; Yes</span> |
| View database configuration | <span title="Allowed">&#x2705; Yes</span> | <span title="Allowed">&#x2705; Yes</span> | <span title="Allowed">&#x2705; Yes</span> | <span title="Allowed">&#x2705; Yes</span> | <span title="Allowed">&#x2705; Yes</span> | <span title="Allowed">&#x2705; Yes</span> |
| View database metrics | <span title="Allowed">&#x2705; Yes</span> | <span title="Allowed">&#x2705; Yes</span> | <span title="Allowed">&#x2705; Yes</span> | <span title="Allowed">&#x2705; Yes</span> | <span title="Allowed">&#x2705; Yes</span> | <span title="Allowed">&#x2705; Yes</span> |
| View node configuration | <span title="Not allowed">&#x274c; No</span> | <span title="Not allowed">&#x274c; No</span> | <span title="Allowed">&#x2705; Yes</span> | <span title="Allowed">&#x2705; Yes</span> | <span title="Allowed">&#x2705; Yes</span> | <span title="Allowed">&#x2705; Yes</span> |
| View node metrics | <span title="Not allowed">&#x274c; No</span> | <span title="Not allowed">&#x274c; No</span> | <span title="Allowed">&#x2705; Yes</span> | <span title="Allowed">&#x2705; Yes</span> | <span title="Allowed">&#x2705; Yes</span> | <span title="Allowed">&#x2705; Yes</span> |
| View Redis database password | <span title="Not allowed">&#x274c; No</span> | <span title="Allowed">&#x2705; Yes</span> | <span title="Not allowed">&#x274c; No</span> | <span title="Allowed">&#x2705; Yes</span> | <span title="Allowed">&#x2705; Yes</span> | <span title="Allowed">&#x2705; Yes</span> |
| View slow log | <span title="Not allowed">&#x274c; No</span> | <span title="Allowed">&#x2705; Yes</span> | <span title="Not allowed">&#x274c; No</span> | <span title="Allowed">&#x2705; Yes</span> | <span title="Allowed">&#x2705; Yes</span> | <span title="Not allowed">&#x274c; No</span> |
| View and edit cluster settings | <span title="Not allowed">&#x274c; No</span> | <span title="Not allowed">&#x274c; No</span> | <span title="Not allowed">&#x274c; No</span> | <span title="Not allowed">&#x274c; No</span> | <span title="Allowed">&#x2705; Yes</span> | <span title="Not allowed">&#x274c; No</span> |

## Create roles for cluster access {#create-cluster-role}

You can use the [Cluster Manager UI](#create-roles-ui) or the [REST API](#define-roles-rest-api) to create a role that grants cluster access but does not grant access to any databases.

**Cluster Manager UI:**

To create a role that grants cluster access using the Cluster Manager UI:

1. From **Access Control** > **Roles**, you can:

    - Select a role from the list of existing roles to edit it.

    - Click **+ Add role** to create a new role.

    <img src="../../../../../images/rs/screenshots/access-control/7-22-updates/roles-screen.png" alt="Add role with name">

1. Enter a descriptive name for the role.

1. Choose a **Management role** to determine cluster management permissions.

    <img src="../../../../../images/rs/screenshots/access-control/7-22-updates/rbac-create-role-cluster-only.png" alt="Select a cluster management role to set the level of cluster management permissions for the new role.">
    
1. To prevent database access when using this role, do not add any ACLs.

1. Click **Save**.

**REST API:**

To [create a role]() that grants cluster access using the REST API:

```sh
POST /v1/roles
{ 
  "name": "<role-name>",
  "management": "db_viewer | db_member | cluster_viewer | cluster_member | user_manager | admin" 
}
```



You can [assign the new role to users]() to grant cluster access.
