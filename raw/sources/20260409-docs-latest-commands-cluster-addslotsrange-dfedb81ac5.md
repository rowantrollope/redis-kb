---
title: CLUSTER ADDSLOTSRANGE
url: https://redis.io/docs/latest/commands/cluster-addslotsrange/
retrieved_utc: '2026-04-09T20:46:02.833414+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/cluster-addslotsrange/index.html.md
---

# CLUSTER ADDSLOTSRANGE

```json metadata
{
  "title": "CLUSTER ADDSLOTSRANGE",
  "description": "Assigns new hash slot ranges to a node.",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"arguments":[{"display_text":"start-slot","name":"start-slot","type":"integer"},{"display_text":"end-slot","name":"end-slot","type":"integer"}],"multiple":true,"name":"range","type":"block"}],
  "syntax_fmt": "CLUSTER ADDSLOTSRANGE start-slot end-slot [start-slot end-slot ...]",
  "complexity": "O(N) where N is the total number of the slots between the start slot and end slot arguments.",
  "group": "cluster",
  "command_flags": ["admin","stale","no_async_loading"],
  "acl_categories": ["@admin","@slow","@dangerous"],
  "since": "7.0.0",
  "arity": -4,
  "tableOfContents": {"sections":[{"id":"example","title":"Example"},{"id":"usage-in-redis-cluster","title":"Usage in Redis Cluster"},{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": []
}
```The `CLUSTER ADDSLOTSRANGE` is similar to the [`CLUSTER ADDSLOTS`]() command in that they both assign hash slots to nodes.

The difference between the two commands is that [`CLUSTER ADDSLOTS`]() takes a list of slots to assign to the node, while `CLUSTER ADDSLOTSRANGE` takes a list of slot ranges (specified by start and end slots) to assign to the node.

## Example

To assign slots 1 2 3 4 5 to the node, the [`CLUSTER ADDSLOTS`]() command is:

    > CLUSTER ADDSLOTS 1 2 3 4 5
    OK

The same operation can be completed with the following `CLUSTER ADDSLOTSRANGE` command:

    > CLUSTER ADDSLOTSRANGE 1 5
    OK

## Usage in Redis Cluster

This command only works in cluster mode and is useful in the following Redis Cluster operations:

1. To create a new cluster, `CLUSTER ADDSLOTSRANGE` is used to initially set up master nodes splitting the available hash slots among them.
2. In order to fix a broken cluster where certain slots are unassigned.

## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Not supported">&#x274c; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> | <span title="Not supported">&#x274c; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> |  |

## Return information

**RESP2:**

[Simple string reply](../../develop/reference/protocol-spec#simple-strings): `OK` if the command was successful. Otherwise an error is returned.

**RESP3:**

[Simple string reply](../../develop/reference/protocol-spec#simple-strings): `OK` if the command was successful. Otherwise an error is returned.


