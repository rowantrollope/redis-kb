---
title: Services configuration object
url: https://redis.io/docs/latest/operate/rs/references/rest-api/objects/services_configuration/
retrieved_utc: '2026-04-09T20:46:07.333862+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/references/rest-api/objects/services_configuration/index.html.md
---

# Services configuration object

```json metadata
{
  "title": "Services configuration object",
  "description": "An object for optional cluster services settings",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[]}

,
  "codeExamples": []
}
```
Optional cluster services settings

| Name | Type/Value | Description |
|------|------------|-------------|
| alert_mgr | [alert_mgr]() object | Whether to enable/disable the alert manager processes |
| call_home_agent | [call_home_agent]() object | Whether to enable/disable the call_home_agent process, which sends daily usage statistics to Redis |
| cm_server | [cm_server]() object | Whether to enable/disable the CM server |
| crdb_coordinator | [crdb_coordinator]() object | Whether to enable/disable the CRDB coordinator process |
| crdb_worker | [crdb_worker]() object | Whether to enable/disable the CRDB worker processes |
| entraid_agent_mgr | [entraid_agent_mgr]() object | Whether to enable/disable the Entra ID agent manager process |
| ldap_agent_mgr | [ldap_agent_mgr]() object | Whether to enable/disable the LDAP agent manager processes |
| mdns_server | [mdns_server]() object | Whether to enable/disable the multicast DNS server |
| pdns_server | [pdns_server]() object | Whether to enable/disable the PDNS server |
| sentinel_service | [sentinel_service]() object | Whether to enable/disable the Sentinel service process |
| stats_archiver | [stats_archiver]() object | Whether to enable/disable the stats archiver service |
