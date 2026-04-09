---
title: Redis Cloud changelog (May 2024)
url: https://redis.io/docs/latest/operate/rc/changelog/2024/may-2024/
retrieved_utc: '2026-04-09T20:45:58.080148+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rc/changelog/2024/may-2024/index.html.md
---

# Redis Cloud changelog (May 2024)

```json metadata
{
  "title": "Redis Cloud changelog (May 2024)",
  "description": "New features, enhancements, and other changes added to Redis Cloud during May 2024.",
  "categories": ["docs","operate","rc"],
  "tableOfContents": {"sections":[{"children":[{"id":"multi-domain-saml-setup","title":"Multi-domain SAML setup"},{"id":"saml-domain-verification","title":"SAML domain verification"},{"id":"active-active-search-and-query-support","title":"Active-Active Search and query support"}],"id":"new-features","title":"New features"},{"children":[{"id":"dataset-size","title":"Dataset size"}],"id":"enhancements","title":"Enhancements"},{"children":[{"id":"end-of-triggers-and-functions-preview","title":"End of Triggers and Functions preview"}],"id":"deprecations","title":"Deprecations"}]}

,
  "codeExamples": []
}
```
## New features

### Multi-domain SAML setup

[SAML single sign-on]() now supports multiple username domains. Select **Manage domains** on the **Single sign-on** screen to associate additional domains to your SAML setup.

### SAML domain verification

We added domain verification to [SAML single sign-on]() to enhance security. Before you set up SAML in Redis Cloud, you must first [verify domain ownership]() for any domains associated with your SAML setup.

If you have an active SAML configuration, you can still sign in with SAML SSO, but your domains will be set to **Unverified**. You should [verify domain ownership]() as soon as possible.

### Active-Active Search and query support

[Active-Active databases]() on Redis Cloud now support [Search and query]().

See [Create an Active-Active database]() to learn how to create an Active-Active database.

See [Search and query Active-Active databases]() to learn how to use Search and query on Active-Active databases.

## Enhancements

### Dataset size

We now distinguish between dataset size and memory limit to reduce confusion.

For Redis Cloud Essentials, the plan size refers to the full memory limit, not the dataset size. If you select high availability for an Essentials database, your dataset size will be half of the plan size. Both the total memory limit and dataset size are listed under **Database details** when you create an Essentials database.

For Redis Cloud Pro, you define your dataset size when you create the database, and we calculate your total memory limit automatically based on the features you choose.

See [Dataset size]() for more information.

## Deprecations

### End of Triggers and Functions preview

Redis has discontinued the "Triggers and Functions" preview feature. You are no longer able to create a database with Triggers and Functions.  

- Commands such as TFCALL, TFCALLASYNC, and TFUNCTION are now deprecated and will return error messages upon execution.
- Any JavaScript functions stored in Redis will be automatically removed, and JavaScript-based triggers will be disabled.
- Lua functions and scripts will remain unaffected by this change.