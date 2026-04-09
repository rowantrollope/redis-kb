---
title: Configure password complexity rules
url: https://redis.io/docs/latest/operate/rs/security/access-control/manage-passwords/password-complexity-rules/
retrieved_utc: '2026-04-09T20:45:56.436497+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/security/access-control/manage-passwords/password-complexity-rules/index.html.md
---

# Configure password complexity rules

```json metadata
{
  "title": "Configure password complexity rules",
  "description": "Enable password complexity rules and configure minimum password length.",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[{"id":"enable-password-complexity-rules","title":"Enable password complexity rules"},{"id":"change-minimum-password-length","title":"Change minimum password length"},{"id":"deactivate-password-complexity-rules","title":"Deactivate password complexity rules"}]}

,
  "codeExamples": []
}
```
Redis Software provides optional password complexity rules that meet common requirements.  When enabled, these rules require the password to have:

- At least 8 characters
- At least one uppercase character
- At least one lowercase character
- At least one number
- At least one special character 

These requirements reflect v6.2.12 and later. Earlier versions did not support numbers or special characters as the first or the last character of a password. This restriction was removed in v6.2.12.

In addition, the password:

- Cannot contain the user's email address or the reverse of the email address.
- Cannot have more than three repeating characters.

Password complexity rules apply when a new user account is created and when the password is changed.  Password complexity rules are not applied to accounts authenticated by an external identity provider.  

## Enable password complexity rules

To enable password complexity rules, use one of the following methods:

- Cluster Manager UI:

    1. Go to **Cluster > Security > Preferences**, then select **Edit**.

    1. In the **Password** section, enable **Complexity rules**.

    1. Select **Save**.

- [Update cluster]() REST API request:

    ```sh
    PUT https://[host][:port]/v1/cluster
    { "password_complexity": true }
    ```

## Change minimum password length

When password complexity rules are enabled, passwords must have at least 8 characters by default.

If you change the minimum password length, the new minimum is enforced for new users and when existing users change their passwords.

To change the minimum password length, use one of the following methods:

- Cluster Manager UI:

    1. Go to **Cluster > Security > Preferences**.
    
    1. Click **Edit**.

    1. In the **Password** section, enable **Complexity rules**.

    1. Set the number of characters for **Minimum password length**.

        

    1. Click **Save**.

- [Update cluster]() REST API request:

    ```sh
    PUT https://[host][:port]/v1/cluster
    { "password_min_length": <integer between 8-256> }
    ```

## Deactivate password complexity rules

To deactivate password complexity rules, use one of the following methods:

- Cluster Manager UI:

    1. Go to **Cluster > Security > Preferences**, then select **Edit**.

    1. In the **Password** section, turn off **Complexity rules**.

    1. Select **Save**.

- [Update cluster]() REST API request:

    ```sh
    PUT https://[host][:port]/v1/cluster
    { "password_complexity": false }
    ```
