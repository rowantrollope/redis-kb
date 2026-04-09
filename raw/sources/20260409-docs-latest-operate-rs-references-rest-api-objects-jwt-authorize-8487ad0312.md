---
title: JWT authorize object
url: https://redis.io/docs/latest/operate/rs/references/rest-api/objects/jwt_authorize/
retrieved_utc: '2026-04-09T20:46:05.180168+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/references/rest-api/objects/jwt_authorize/index.html.md
---

# JWT authorize object

```json metadata
{
  "title": "JWT authorize object",
  "description": "An object for user authentication or a JW token refresh request",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[]}

,
  "codeExamples": []
}
```
An API object for user authentication or a JW token refresh request.

| Name | Type/Value | Description |
|------|------------|-------------|
| password | string | The userâs password (required) |
| ttl | integer (range: 1-86400) (default: 300) | Time to live - The amount of time in seconds the token will be valid |
| username | string | The userâs username (required) |
