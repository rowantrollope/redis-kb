---
title: RESTORE-ASKING
url: https://redis.io/docs/latest/commands/restore-asking/
retrieved_utc: '2026-04-09T20:46:07.039444+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/restore-asking/index.html.md
---

# RESTORE-ASKING

```json metadata
{
  "title": "RESTORE-ASKING",
  "description": "An internal command for migrating keys in a cluster.",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"display_text":"key","key_spec_index":0,"name":"key","type":"key"},{"display_text":"ttl","name":"ttl","type":"integer"},{"display_text":"serialized-value","name":"serialized-value","type":"string"},{"display_text":"replace","name":"replace","optional":true,"since":"3.0.0","token":"REPLACE","type":"pure-token"},{"display_text":"absttl","name":"absttl","optional":true,"since":"5.0.0","token":"ABSTTL","type":"pure-token"},{"display_text":"seconds","name":"seconds","optional":true,"since":"5.0.0","token":"IDLETIME","type":"integer"},{"display_text":"frequency","name":"frequency","optional":true,"since":"5.0.0","token":"FREQ","type":"integer"}],
  "syntax_fmt": "RESTORE-ASKING key ttl serialized-value [REPLACE] [ABSTTL]\n  [IDLETIMEÂ seconds] [FREQÂ frequency]",
  "complexity": "O(1) to create the new key and additional O(N*M) to reconstruct the serialized value, where N is the number of Redis objects composing the value and M their average size. For small string values the time complexity is thus O(1)+O(1*M) where M is small, so simply O(1). However for sorted set values the complexity is O(N*M*log(N)) because inserting values into sorted sets is O(log(N)).",
  "group": "server",
  "command_flags": ["write","denyoom","asking"],
  "acl_categories": ["@keyspace","@write","@slow","@dangerous"],
  "since": "3.0.0",
  "arity": -4,
  "key_specs": [{"OW":true,"begin_search":{"spec":{"index":1},"type":"index"},"find_keys":{"spec":{"keystep":1,"lastkey":0,"limit":0},"type":"range"},"update":true}],
  "tableOfContents": {"sections":[{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"}]}

,
  "codeExamples": []
}
```The `RESTORE-ASKING` command is an internal command.
It is used by a Redis cluster master during slot migration.

## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Not supported">&#x274c; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> | <span title="Not supported">&#x274c; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> |  |
