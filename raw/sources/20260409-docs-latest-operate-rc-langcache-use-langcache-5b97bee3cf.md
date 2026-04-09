---
title: Use the LangCache API on Redis Cloud
url: https://redis.io/docs/latest/operate/rc/langcache/use-langcache/
retrieved_utc: '2026-04-09T20:45:54.983318+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rc/langcache/use-langcache/index.html.md
---

# Use the LangCache API on Redis Cloud

```json metadata
{
  "title": "Use the LangCache API on Redis Cloud",
  "description": "",
  "categories": ["docs","operate","rc"],
  "tableOfContents": {"sections":[]}

,
  "codeExamples": []
}
```
You can use the [LangCache API and SDK]() from your client app to store and retrieve LLM, RAG, or agent responses. 

To access the LangCache API, you need:

- LangCache API base URL
- LangCache service API key
- Cache ID

For LangCache on Redis Cloud, the base URL and cache ID are available in the LangCache service's **Configuration** page in the [**Connectivity** section]().

The LangCache API key is only available immediately after you create the LangCache service. If you lost this value, you will need to [replace the service API key]() to be able to use the LangCache API.

When you call the API, you need to pass the LangCache API key in the `Authorization` header as a Bearer token and the Cache ID as the `cacheId` path parameter. 

See the [LangCache API and SDK examples]() for more information on how to use the LangCache API.
