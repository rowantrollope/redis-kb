---
title: rladmin cluster reset_password
url: https://redis.io/docs/latest/operate/rs/references/cli-utilities/rladmin/cluster/reset_password/
retrieved_utc: '2026-04-09T20:46:06.995969+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/references/cli-utilities/rladmin/cluster/reset_password/index.html.md
---

# rladmin cluster reset_password

```json metadata
{
  "title": "rladmin cluster reset_password",
  "description": "Changes the password for a given email.",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[]}

,
  "codeExamples": []
}
```
Changes the password for the user associated with the specified email address.

Enter a new password when prompted. Then enter the same password when prompted a second time to confirm the password change.

```sh
rladmin cluster reset_password <user email>
```

### Parameters

| Parameter | Type/Value | Description |
|-----------|------------|-------------|
| user email | email address | The email address of the user that needs a password reset |

### Returns

Reports whether the password change succeeded or an error occurred. 

### Example

```sh
$ rladmin cluster reset_password user@example.com
New password: 
New password (again): 
Password changed.
```