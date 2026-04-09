---
title: Create users
url: https://redis.io/docs/latest/operate/rs/security/access-control/create-users/
retrieved_utc: '2026-04-09T20:45:54.114758+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/security/access-control/create-users/index.html.md
---

# Create users

```json metadata
{
  "title": "Create users",
  "description": "Create users and assign access control roles.",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[{"id":"prerequisites","title":"Prerequisites"},{"id":"add-users","title":"Add users"},{"id":"assign-roles-to-users","title":"Assign roles to users"},{"id":"next-steps","title":"Next steps"}]}

,
  "codeExamples": []
}
```
## Prerequisites

Before you create other users:

1. Review the [access control overview]() to learn how to use role-based access control (RBAC) to manage users' cluster access and database access.

1. Create roles you can assign to users. See [Create roles with cluster access only](), [Create roles with database access only](), or [Create roles with combined access]() for instructions.

## Add users

To add a user to the cluster:

1. From the **Access Control > Users** tab in the Cluster Manager UI, select **+ Add user**.

    {{<image filename="images/rs/screenshots/access-control/7-22-updates/users-screen.png" alt="The list of existing users on the Access Control > Users screen.">}}

1. Enter the name, email, and password of the new user.

    

    
To use [single sign-on (SSO)](), users must have email addresses.
    

1. Select the **Alerts** the user should receive by email:

    - **Receive alerts for databases** - The alerts that are enabled for the selected databases will be sent to the user. Choose **All databases** or **Customize** to select the individual databases to send alerts for.
    
    - **Receive cluster alerts** - The alerts that are enabled for the cluster in **Cluster > Alerts Settings** are sent to the user.

1. Click **Add permissions**.

1. Assign a **Role** to the user to grant permissions for cluster management and data access.

    

1. Click **Save user**.

## Assign roles to users

Assign a role, associated with specific databases and access control lists (ACLs), to a user to grant database access:

1. From the **Access Control > Users** tab in the Cluster Manager UI, select an existing user from the list of users.

1. Click the **Edit** button.

1. In the **User roles** section, click **Edit**.

    

1. Select a role to assign to the user.

    

1. Click **Done** to close the **Roles** dialog.

1. Click **Save**.

## Next steps

Depending on the type of the user's assigned role (cluster management role or data access role), the user can now:

- [Connect to a database]() associated with the role and run limited Redis commands, depending on the role's Redis ACLs.

- Sign in to the Redis Software Cluster Manager UI.

- Make a [REST API]() request.
