---
title: Configure password expiration
url: https://redis.io/docs/latest/operate/rs/security/access-control/manage-passwords/password-expiration/
retrieved_utc: '2026-04-09T20:45:58.078333+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/security/access-control/manage-passwords/password-expiration/index.html.md
---

# Configure password expiration

```json metadata
{
  "title": "Configure password expiration",
  "description": "Configure password expiration to enforce expiration of a user's password after a specified number of days.",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[{"id":"enable-password-expiration","title":"Enable password expiration"},{"id":"deactivate-password-expiration","title":"Deactivate password expiration"}]}

,
  "codeExamples": []
}
```
## Enable password expiration


Password expiration is calculated from the time the password was last updated, not from when the policy is enabled. Passwords that were set long enough ago to already be expired will immediately be locked out when you enable this policy. Before enabling password expiration, verify all user passwords have been updated recently enough to avoid immediate lockouts.


To enforce an expiration of a user's password after a specified number of days:

- Use the Cluster Manager UI:

    1. Go to **Cluster > Security > Preferences**, then select **Edit**.

    1. In the **Password** section, turn on **Expiration**.

    1. Enter the number of days before passwords expire.

    1. Select **Save**.

- Use the `cluster` endpoint of the REST API

    ``` REST
    PUT https://[host][:port]/v1/cluster
    {"password_expiration_duration":<number_of_days>}
    ```

## Deactivate password expiration

To deactivate password expiration:

- Use the Cluster Manager UI:

    1. Go to **Cluster > Security > Preferences**, then select **Edit**.

    1. In the **Password** section, turn off **Expiration**.

    1. Select **Save**.

- Use the `cluster` REST API endpoint to set `password_expiration_duration` to `0` (zero).
