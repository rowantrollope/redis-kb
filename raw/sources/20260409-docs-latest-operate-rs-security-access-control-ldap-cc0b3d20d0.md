---
title: LDAP authentication
url: https://redis.io/docs/latest/operate/rs/security/access-control/ldap/
retrieved_utc: '2026-04-09T20:45:58.009239+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/security/access-control/ldap/index.html.md
---

# LDAP authentication

```json metadata
{
  "title": "LDAP authentication",
  "description": "Describes how Redis Software integrates LDAP authentication and authorization. Also describes how to enable LDAP for your deployment of Redis Enterprise Software.",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[{"id":"how-it-works","title":"How it works"},{"id":"prerequisites","title":"Prerequisites"},{"id":"enable-ldap","title":"Enable LDAP"},{"id":"more-info","title":"More info"}]}

,
  "codeExamples": []
}
```
Redis Software supports [Lightweight Directory Access Protocol](https://en.wikipedia.org/wiki/Lightweight_Directory_Access_Protocol) (LDAP) authentication and authorization through its [role-based access controls]() (RBAC).  You can use LDAP to authorize access to the Cluster Manager UI and to control database access.

You can configure LDAP roles using the Redis Software Cluster Manager UI or [REST API]().

## How it works

Here's how role-based LDAP integration works:



1.  A user signs in with their LDAP credentials.  

    Based on the LDAP configuration details, the username is mapped to an LDAP Distinguished Name.

1.  A simple [LDAP bind request](https://en.wikipedia.org/wiki/Lightweight_Directory_Access_Protocol#Bind_(authenticate)) is attempted using the Distinguished Name and the password.  The sign-in fails if the bind fails.

1.  Obtain the userâs LDAP group memberships.

    Using configured LDAP details, obtain a list of the userâs group memberships.

1.  Compare the userâs LDAP group memberships to those mapped to local roles.

1.  Determine if one of the user's groups is authorized to access the target resource.  If so, the user is granted the level of access authorized to the role.  

To access the Cluster Manager UI, the user needs to belong to an LDAP group mapped to an administrative role.  

For database access, the user needs to belong to an LDAP group mapped to a role listed in the databaseâs access control list (ACL).  The rights granted to the group determine the user's level of access. 

## Prerequisites 

Before you enable LDAP in Redis Software, you need:

1. The following LDAP details:

    - Server URI, including host, port, and protocol details.  
    - Certificate details for secure protocols.  
    - Bind credentials, including Distinguished Name, password, and (optionally) client public and private keys for certificate authentication.  
    - Authentication query details, whether template or query.  
    - Authorization query details, whether attribute or query.  
    - The Distinguished Names of LDAP groups youâll use to authorize access to Redis Software resources. 

1. The LDAP groups that correspond to the levels of access you wish to authorize.  Each LDAP group will be mapped to a Redis Software access control role.

1. A Redis Software access control role for each LDAP group. Before you enable LDAP, you need to set up [role-based access controls]() (RBAC).

## Enable LDAP

To enable LDAP:

1.  From **Access Control > LDAP** in the Cluster Manager UI, select the **Configuration** tab and [enable LDAP access]().

    

2.  Map LDAP groups to [access control roles]().

3.  Update database access control lists (ACLs) to [authorize role access]().  

If you already have appropriate roles, you can update them to include LDAP groups.

## More info

- Enable and configure [role-based LDAP]()
- Map LDAP groups to [access control roles]()
- Update database ACLs to [authorize LDAP access]()
- Learn more about Redis Software [security and practices]()

