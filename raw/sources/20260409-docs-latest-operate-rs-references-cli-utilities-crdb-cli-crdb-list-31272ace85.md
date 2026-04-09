---
title: crdb-cli crdb list
url: https://redis.io/docs/latest/operate/rs/references/cli-utilities/crdb-cli/crdb/list/
retrieved_utc: '2026-04-09T20:46:05.388102+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/references/cli-utilities/crdb-cli/crdb/list/index.html.md
---

# crdb-cli crdb list

```json metadata
{
  "title": "crdb-cli crdb list",
  "description": "Shows a list of all Active-Active databases.",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[]}

,
  "codeExamples": []
}
```
Shows a list of all Active-Active databases.

```sh
crdb-cli crdb list
```

### Parameters

None

### Returns

Returns a list of all Active-Active databases that the cluster participates in. Each database is represented with a unique GUID, the name of the database, an instance ID, and the FQDN of the cluster that hosts the instance.

### Example

```sh
$ crdb-cli crdb list
CRDB-GUID                             NAME       REPL-ID  CLUSTER-FQDN
d84f6fe4-5bb7-49d2-a188-8900e09c6f66  database1  1        cluster1.redis.local
d84f6fe4-5bb7-49d2-a188-8900e09c6f66  database1  2        cluster2.redis.local
```
