---
title: CLUSTER SLOT-STATS
url: https://redis.io/docs/latest/commands/cluster-slot-stats/
retrieved_utc: '2026-04-09T20:46:03.119394+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/cluster-slot-stats/index.html.md
---

# CLUSTER SLOT-STATS

```json metadata
{
  "title": "CLUSTER SLOT-STATS",
  "description": "Return an array of slot usage statistics for slots assigned to the current node.",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"arguments":[{"arguments":[{"name":"start-slot","type":"integer"},{"name":"end-slot","type":"integer"}],"name":"slotsrange","token":"SLOTSRANGE","type":"block"},{"arguments":[{"name":"metric","type":"string"},{"name":"limit","optional":true,"token":"LIMIT","type":"integer"},{"arguments":[{"name":"asc","token":"ASC","type":"pure-token"},{"name":"desc","token":"DESC","type":"pure-token"}],"name":"order","optional":true,"type":"oneof"}],"name":"orderby","token":"ORDERBY","type":"block"}],"name":"filter","type":"oneof"}],
  "syntax_fmt": "CLUSTER SLOT-STATS \u003cSLOTSRANGEÂ start-slot end-slot | ORDERBYÂ metric\n  [LIMITÂ limit] [ASC | DESC]\u003e",
  "complexity": "O(N) where N is the total number of slots based on arguments. O(N*log(N)) with ORDERBY subcommand.",
  "group": "cluster",
  "command_flags": ["STALE","LOADING"],
  "since": "8.2.0",
  "arity": -4,
  "tableOfContents": {"sections":[{"id":"options","title":"Options"},{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": []
}
```
Use this command to get an array of slot usage statistics for the slots assigned to the current shard. If you're working with a Redis cluster, this data helps you understand overall slot usage, spot hot or cold slots, plan slot migrations to balance load, or refine your application logic to better distribute keys.

## Options

`CLUSTER SLOT-STATS` has two mutually exclusive options:

* `ORDERBY`: Sorts the slot statistics by the specified metric. Use ASC or DESC to sort in ascending or descending order. If multiple slots have the same value, the command uses the slot number as a tiebreaker, sorted in ascending order.

* `SLOTSRANGE`: Limits the results to a specific, inclusive range of slots. Results are always sorted by slot number in ascending order.

The command reports on the following statistics:

* `KEY-COUNT`: Number of keys stored in the slot.
* `CPU-USEC`: CPU time (in microseconds) spent handling the slot.
* `MEMORY-BYTES`: Number of bytes allocated by the slot.
* `NETWORK-BYTES-IN`: Total inbound network traffic (in bytes) received by the slot.
* `NETWORK-BYTES-OUT`: Total outbound network traffic (in bytes) sent from the slot.


All metrics except `KEY-COUNT` require that `cluster-slot-stats-enabled` is set to `yes` in the `redis.conf` file.


## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Not supported">&#x274c; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> | <span title="Not supported">&#x274c; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> |  |

## Return information

**RESP2:**

One of the following:

* [Array reply](): a nested list of slot usage statistics.
* [Simple error]() otherwise.

**RESP3:**

One of the following:

* [Array reply](): a nested list of slot usage statistics.
* [Simple error]() otherwise.

