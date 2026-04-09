---
title: Encrypt REST API requests
url: https://redis.io/docs/latest/operate/rs/references/rest-api/encryption/
retrieved_utc: '2026-04-09T20:45:56.320495+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/references/rest-api/encryption/index.html.md
---

# Encrypt REST API requests

```json metadata
{
  "title": "Encrypt REST API requests",
  "description": "",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[{"id":"require-https-for-api-endpoints","title":"Require HTTPS for API endpoints"}]}

,
  "codeExamples": []
}
```
## Require HTTPS for API endpoints

By default, the Redis Software API supports communication over HTTP and HTTPS. However, you can turn off support for HTTP to ensure that API requests are encrypted.

Before you turn off HTTP support, be sure to migrate any scripts or proxy configurations that use HTTP to the encrypted API endpoint to prevent broken connections.

To turn off HTTP support for API endpoints, run:

```sh
rladmin cluster config http_support disabled
```
