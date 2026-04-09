---
title: Enable the API
url: https://redis.io/docs/latest/operate/rc/api/get-started/enable-the-api/
retrieved_utc: '2026-04-09T20:45:54.182268+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rc/api/get-started/enable-the-api/index.html.md
---

# Enable the API

```json metadata
{
  "title": "Enable the API",
  "description": "Use the Redis Cloud dashboard to enable the REST API.",
  "categories": ["docs","operate","rc"],
  "tableOfContents": {"sections":[]}

,
  "codeExamples": []
}
```
If you have a Redis Cloud account, you can use a REST API to manage your subscriptions and databases programmatically.

For security reasons, the Redis Cloud API is inactive by default.

To enable the API:

1. Sign in to your [Redis Cloud account](https://cloud.redis.io) as an account owner.
1. From the menu, choose **Access Management**.
1. When the **Access Management** screen appears, select the **API Keys** tab.

    

1. If a **Copy** button appears to the right of the API account key, the API is enabled.  This button copies the account key to the Clipboard.

    

    If you see an **Enable API** button, select it to enable the API and generate your API account key.

    

To authenticate REST API calls, you need to use both the API account key and an [API user key]() to make API calls.

Only account owners can see the access key in the account settings and give API access to other users.


Make sure that you keep your access keys secret. Anyone who sends an API request with a valid access key can make changes to your account.


To manage your API keys or to limit IP addresses for user keys, see [Manage API keys]().
