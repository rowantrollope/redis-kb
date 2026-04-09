---
title: Create and edit database users
url: https://redis.io/docs/latest/operate/rc/security/access-control/data-access-control/create-assign-users/
retrieved_utc: '2026-04-09T20:45:55.988833+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rc/security/access-control/data-access-control/create-assign-users/index.html.md
---

# Create and edit database users

```json metadata
{
  "title": "Create and edit database users",
  "description": "Create a database user and assign it a role.",
  "categories": ["docs","operate","rc"],
  "tableOfContents": {"sections":[{"id":"create-a-user","title":"Create a user"},{"id":"assign-roles-to-existing-users","title":"Assign roles to existing users"}]}

,
  "codeExamples": []
}
```
Before you create a database user, you must [create a data access role]() to assign to that user.

## Create a user

To create a user:

1. Go to **Data Access Control** from the [Redis Cloud console](https://cloud.redis.io/#/) menu.

    

1. Select the **Users** tab.

    

2. Select `+` to create a new user.

    

3. Enter a username in the **Username** field.

    

    
An error occurs if a user tries to connect to a memcached database with the username `admin`. Do not use `admin` for a username if the user will be connecting to a memcached database.
    

1. Select a [**Role**]() from the list.

    

1. Enter and confirm the user's password. ACL user passwords must be between 8 and 128 characters long.

    Then, select the check mark to save the user. 

    


## Assign roles to existing users

To assign a data access role to an existing user:

1. Go to **Data Access Control** from the [Redis Cloud console](https://cloud.redis.io/#/) menu.

    

1. Select the **Users** tab.

    

1. Point to the user and select the **Edit*** icon when it appears.

    

1. Select a [**Role**]() from the list.

    

1. Select the check mark to save the user. 

    