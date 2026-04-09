---
title: SUNSUBSCRIBE
url: https://redis.io/docs/latest/commands/sunsubscribe/
retrieved_utc: '2026-04-09T20:45:33.945943+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/sunsubscribe/index.html.md
---

# SUNSUBSCRIBE

```json metadata
{
  "title": "SUNSUBSCRIBE",
  "description": "Stops listening to messages posted to shard channels.",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"display_text":"shardchannel","multiple":true,"name":"shardchannel","optional":true,"type":"string"}],
  "syntax_fmt": "SUNSUBSCRIBE [shardchannel [shardchannel ...]]",
  "complexity": "O(N) where N is the number of shard channels to unsubscribe.",
  "group": "pubsub",
  "command_flags": ["pubsub","noscript","loading","stale"],
  "acl_categories": ["@pubsub","@slow"],
  "since": "7.0.0",
  "arity": -1,
  "key_specs": [{"begin_search":{"spec":{"index":1},"type":"index"},"find_keys":{"spec":{"keystep":1,"lastkey":-1,"limit":0},"type":"range"},"not_key":true}],
  "tableOfContents": {"sections":[{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": []
}
```Unsubscribes the client from the given shard channels, or from all of them if none is given.

When no shard channels are specified, the client is unsubscribed from all the previously subscribed shard channels. 
In this case a message for every unsubscribed shard channel will be sent to the client. 

Note: The global channels and shard channels needs to be unsubscribed from separately.

For more information about sharded Pub/Sub, see [Sharded Pub/Sub]().

## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |

## Return information

**RESP2:**

When successful, this command doesn't return anything. Instead, for each shard channel, one message with the first element being the string `sunsubscribe` is pushed as a confirmation that the command succeeded.

**RESP3:**

When successful, this command doesn't return anything. Instead, for each shard channel, one message with the first element being the string `sunsubscribe` is pushed as a confirmation that the command succeeded.


