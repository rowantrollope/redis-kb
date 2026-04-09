---
title: Google Cloud Marketplace team management
url: https://redis.io/docs/latest/operate/rc/cloud-integrations/gcp-marketplace/team-management/
retrieved_utc: '2026-04-09T20:45:34.834314+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rc/cloud-integrations/gcp-marketplace/team-management/index.html.md
---

# Google Cloud Marketplace team management

```json metadata
{
  "title": "Google Cloud Marketplace team management",
  "description": "Shows how to add users in a legacy version of the Google Cloud Marketplace subscription.",
  "categories": ["docs","operate","rc"],
  "tableOfContents": {"sections":[]}

,
  "codeExamples": []
}
```

This article applies to an earlier Google Cloud marketplace listing. For the current [Redis Cloud - Pay as You Go](https://console.cloud.google.com/marketplace/product/redis-marketplace-isaas/redis-enterprise-cloud-flexible-plan) listing, manage your team through the [Access Management]() screen. See [Sign up for Redis Cloud with Google Cloud Marketplace]() for more information.


If you subscribed to Redis Cloud through Google Cloud Marketplace using the **Redis Cloud** listing, use the IAM section of the Google Cloud console to manage your team.

To grant Redis Cloud access to a Google Cloud user, select **Add** to add a member, insert the email address, and then assign the following roles to the user:
- To designate a viewer, assign `editor`, `serviceusage.serviceUsageViewer`, and `redisenterprisecloud.viewer`
- To designate an owner, assign `editor`, `serviceusage.serviceUsageViewer`, and `redisenterprisecloud.admin`


If these roles are not available, you can add them to your project.

1. Select **Manage Roles**.
2. Use the filter table field to locate the role. (Search for "service usage viewer" or "Redis Cloud admin".)
3. Select the role.
4. Select **Create role from selection** and then select **Create**.
5. Use IAM to add a member and assign the desired role.

Users must sign in to Redis Cloud using their single sign-on credentials before they appear in the team member list.
