---
title: Configure shard placement
url: https://redis.io/docs/latest/operate/rs/databases/configure/shard-placement/
retrieved_utc: '2026-04-09T20:45:58.723959+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/databases/configure/shard-placement/index.html.md
---

# Configure shard placement

```json metadata
{
  "title": "Configure shard placement",
  "description": "Configure shard placement to improve performance.",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[{"id":"default-shard-placement-policy","title":"Default shard placement policy"},{"id":"shard-placement-policy-for-a-database","title":"Shard placement policy for a database"}]}

,
  "codeExamples": []
}
```In Redis Software, the location of master and replica shards on the cluster nodes can impact the database and node performance.
Master shards and their corresponding replica shards are always placed on separate nodes for data resiliency.
The [shard placement policy]() helps to maintain optimal performance and resiliency.



## Default shard placement policy

When you create a new cluster, the cluster configuration has a `dense` default shard placement policy.
When you create a database, this default policy is applied to the new database.

To see the current default shard placement policy, run `rladmin info cluster`:



To change the default shard placement policy so that new databases are created with the `sparse` shard placement policy, run:

```sh
rladmin tune cluster default_shards_placement [ dense | sparse ]
```

## Shard placement policy for a database

To see the shard placement policy for a database in `rladmin status`.



To change the shard placement policy for a database, run:

```sh
rladmin tune db { db:<ID> | <database-name> } shards_placement { dense | sparse }
```
