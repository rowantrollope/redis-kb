---
title: Policy object
url: https://redis.io/docs/latest/operate/rs/references/rest-api/objects/bootstrap/policy/
retrieved_utc: '2026-04-09T20:46:06.268704+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/references/rest-api/objects/bootstrap/policy/index.html.md
---

# Policy object

```json metadata
{
  "title": "Policy object",
  "description": "Documents the policy object used with Redis Software REST API calls.",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[]}

,
  "codeExamples": []
}
```
| Name | Type/Value | Description |
|------|------------|-------------|
| default_fork_evict_ram | boolean (default:&nbsp;false) | If true, the databases should evict data from RAM to ensure successful replication or persistence |
| default_non_sharded_proxy_policy | **'single'** <br />'all-master-shards'<br />'all-nodes' | Default proxy_policy for newly created non-sharded databases' endpoints |
| default_sharded_proxy_policy | 'single'<br /> **'all-master-shards'** <br />'all-nodes' | Default proxy_policy for newly created sharded databases' endpoints |
| default_shards_placement | 'dense'<br /> **'sparse'** | Default shards_placement for newly created databases |
| rack_aware | boolean | Cluster rack awareness |
| shards_overbooking | boolean (default:&nbsp;true) | If true, all databases' memory_size settings are ignored during shards placement |
