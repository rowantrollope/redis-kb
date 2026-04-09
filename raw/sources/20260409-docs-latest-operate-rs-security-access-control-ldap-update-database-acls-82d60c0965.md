---
title: Update database ACLs
url: https://redis.io/docs/latest/operate/rs/security/access-control/ldap/update-database-acls/
retrieved_utc: '2026-04-09T20:45:57.584963+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/security/access-control/ldap/update-database-acls/index.html.md
---

# Update database ACLs

```json metadata
{
  "title": "Update database ACLs",
  "description": "Describes how to use the Cluster Manager UI to update database access control lists (ACLs) to authorize access to roles authorizing LDAP user access.",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[{"id":"more-info","title":"More info"}]}

,
  "codeExamples": []
}
```
To grant LDAP users access to a database, assign the mapped access role to the access control list (ACL) for the database.

1.  In the Cluster Manager UI, go to **Databases**, then select the database from the list.

1.  From the **Security** tab, select the **Edit** button.

1.  In the **Access Control List** section, select **+ Add ACL**.

    

1.  Select the appropriate roles and then save your changes.

If you assign multiple roles to an ACL and a user is authorized by more than one of these roles, their access is determined by the first "matching" rule in the list.  

If the first rule gives them read access and the third rule authorizes write access, the user will only be able to read data.  

As a result, we recommend ordering roles so that higher access roles appear before roles with more limited access. 


## More info

- Enable and configure [role-based LDAP]()
- Map LDAP groups to [access control roles]()
- Learn more about Redis Software [security and practices]()
