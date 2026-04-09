---
title: CRDB object
url: https://redis.io/docs/latest/operate/rs/references/rest-api/objects/crdb/
retrieved_utc: '2026-04-09T20:46:03.462013+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/references/rest-api/objects/crdb/index.html.md
---

# CRDB object

```json metadata
{
  "title": "CRDB object",
  "description": "An object that represents an Active-Active database",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[]}

,
  "codeExamples": []
}
```
An object that represents an Active-Active database.

| Name | Type/Value | Description |
|------|------------|-------------|
| guid | string | The global unique ID of the Active-Active database |
| causal_consistency | boolean | Enables causal consistency across CRDT instances |
| default_db_config| [CRDB database_config]() object | Default database configuration applied to all instances in the CRDB object. In most cases, instances should use the same configuration. If you need to override `default_db_config` or add configuration values for specific instances, you can use `db_config` in individual [instance objects](). |
| encryption | boolean | Encrypt communication |
| featureset_version | integer | Active-Active database active FeatureSet version
| instances | array of [CRDB instance_info]() objects | |
| local_databases | [{
  "bdb_uid": string,
  "id": integer
}, ...]  | Mapping of instance IDs for local databases to local BDB IDs |
| managed_by | string | The component that manages the Active-Active database |
| modules | [{
  "featureset_version": integer,
  "module_name": string
}, ...]  | Modules used by the Active-Active database |
| name | string | Name of Active-Active database |
| protocol_version | integer | Active-Active database active protocol version |
| volatile_config_fields | array of strings | A list of database configuration fields that will be set even if unchanged |
