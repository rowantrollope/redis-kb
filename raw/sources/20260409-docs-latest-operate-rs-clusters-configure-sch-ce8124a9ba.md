---
title: Smart client handoffs
url: https://redis.io/docs/latest/operate/rs/clusters/configure/sch/
retrieved_utc: '2026-04-09T20:46:00.343380+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/clusters/configure/sch/index.html.md
---

# Smart client handoffs

```json metadata
{
  "title": "Smart client handoffs",
  "description": "Enable Smart client handoffs for your Redis Software cluster.",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[]}

,
  "codeExamples": []
}
```
Smart client handoffs (SCH) is a feature of Redis Cloud and Redis Software servers that lets them actively notify clients about planned server maintenance shortly before it happens. This lets a client reconnect or otherwise respond gracefully without significant interruptions in service.
See [Smart client handoffs]() for more information about SCH.

SCH is supported only for [rolling upgrades]().


To enable SCH on a Redis Software server, you must use the
[/v1/cluster]()
REST API request to set the `client_maint_notifications` option to `true`.
The example below shows how to do this using the
[`curl`](https://curl.se/) command line utility:

```bash
curl -k -X PUT -H "accept: application/json" \
    -H "content-type: application/json" \
    -u "<username>:<password>" \
    -d '{ "client_maint_notifications": true }' \
    https://<host>:<port>/v1/cluster
```
