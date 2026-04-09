---
title: LDAP mapping object
url: https://redis.io/docs/latest/operate/rs/references/rest-api/objects/ldap_mapping/
retrieved_utc: '2026-04-09T20:46:05.333311+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/references/rest-api/objects/ldap_mapping/index.html.md
---

# LDAP mapping object

```json metadata
{
  "title": "LDAP mapping object",
  "description": "An object that represents a mapping between an LDAP group and roles",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[]}

,
  "codeExamples": []
}
```
An API object that represents an [LDAP mapping]() between an LDAP group and [roles]().

| Name | Type/Value | Description |
|------|------------|-------------|
| uid | integer | LDAP mapping's unique ID |
| account_id | integer | SM account ID |
| action_uid | string | Action UID. If it exists, progress can be tracked by the `GET`&nbsp;`/actions/{uid}` API (read-only) |
| bdbs_email_alerts | complex object | UIDs of databases that associated email addresses will receive alerts for |
| cluster_email_alerts | boolean | Activate cluster email alerts for an associated email |
| dn | string | An LDAP group's distinguished name |
| email | string | Email address used for alerts (if set) |
| email_alerts | boolean (default:&nbsp;true) | Activate email alerts for an associated email |
| name | string | Role's name |
| role_uids | array of integers | List of role UIDs associated with the LDAP group |
