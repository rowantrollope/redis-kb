---
title: Database connection auditing configuration object
url: https://redis.io/docs/latest/operate/rs/references/rest-api/objects/db-conns-auditing-config/
retrieved_utc: '2026-04-09T20:46:03.607825+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/references/rest-api/objects/db-conns-auditing-config/index.html.md
---

# Database connection auditing configuration object

```json metadata
{
  "title": "Database connection auditing configuration object",
  "description": "An object for database connection auditing settings",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[]}

,
  "codeExamples": []
}
```
Database connection auditing configuration

| Name | Type/Value | Description |
|------|------------|-------------|
| audit_address | string | TCP/IP address where one can listen for notifications. |
| audit_port | integer | Port where one can listen for notifications. |
| audit_protocol | `TCP`<br />`local` | Protocol used to process notifications. For production systems, `TCP` is the only valid value. |
| audit_reconnect_interval | integer | Interval (in seconds) between attempts to reconnect to the listener. Default is 1 second. |
| audit_reconnect_max_attempts | integer | Maximum number of attempts to reconnect. Default is 0 (infinite). |
