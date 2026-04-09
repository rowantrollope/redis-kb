---
title: CRDB cluster info object
url: https://redis.io/docs/latest/operate/rs/references/rest-api/objects/crdb/cluster_info/
retrieved_utc: '2026-04-09T20:46:03.153523+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/references/rest-api/objects/crdb/cluster_info/index.html.md
---

# CRDB cluster info object

```json metadata
{
  "title": "CRDB cluster info object",
  "description": "An object that represents Active-Active cluster info",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[]}

,
  "codeExamples": []
}
```
Configuration details for a cluster that is part of an Active-Active database.

| Name | Type/Value | Description |
|------|------------|-------------|
| credentials | 
{
  "username": string,
  "password": string
}  | Cluster access credentials (required) |
| name | string | Cluster fully qualified name, used to uniquely identify the cluster. Typically this is the same as the hostname used in the URL, although in some configruations the URL may point to a different name/address. (required) |
| replication_endpoint | string | Address to use for peer replication. If not specified, it is assumed that standard cluster naming conventions apply. |
| replication_tls_sni | string | Cluster SNI for TLS connections |
| url | string | Cluster access URL (required) |
