---
title: Default user
url: https://redis.io/docs/latest/operate/rc/security/access-control/data-access-control/default-user/
retrieved_utc: '2026-04-09T20:45:53.128682+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rc/security/access-control/data-access-control/default-user/index.html.md
---

# Default user

```json metadata
{
  "title": "Default user",
  "description": "Learn how to change your default user password or turn off access using the default user password.",
  "categories": ["docs","operate","rc"],
  "tableOfContents": {"sections":[{"id":"change-password","title":"Change password"},{"id":"turn-off-default-user","title":"Turn off default user"}]}

,
  "codeExamples": []
}
```
Password-based authentication is a basic but essential Redis security feature. When you create a Redis Cloud database, your database is given a randomly generated password called the **Default user password**.

This password appears in the **Security** section of the **Configuration** tab of the database details screen.



Use the copy button to copy the password to the clipboard:



You'll need to use this password whenever you connect to your database using a Redis client. See [Connect to a database]() for more info.

If you have [blocked the public endpoint]() for your Redis Cloud Pro subscription, you can also turn on passwordless authentication for the default user. See [Block public endpoints]() for more info.

See your [Redis client's documentation]() to learn how to provide your password when connecting.

## Change password

To change the default user password for your database:

1. From the database **Configuration** tab, select **Edit**.

    

1. Under the **Security** section, enter the new password in the **Default user password** field. Database passwords must be less than 50 characters long.

1. Select **Save database** to update the password.

    

## Turn off default user

After you set up [role-based access control]() to limit who can access your database, we recommend that you turn off default user access.

To turn off the default user for a database:

1. From the database **Configuration** tab, select **Edit**.

    

1. Under the **Security** section, select the **Default User** switch to turn it off.

1. Select **Save database**.

    