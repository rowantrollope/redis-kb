---
title: SUBSCRIBE
url: https://redis.io/docs/latest/commands/subscribe/
retrieved_utc: '2026-04-09T20:46:07.828664+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/subscribe/index.html.md
---

# SUBSCRIBE

```json metadata
{
  "title": "SUBSCRIBE",
  "description": "Listens for messages published to channels.",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"display_text":"channel","multiple":true,"name":"channel","type":"string"}],
  "syntax_fmt": "SUBSCRIBE channel [channel ...]",
  "complexity": "O(N) where N is the number of channels to subscribe to.",
  "group": "pubsub",
  "command_flags": ["pubsub","noscript","loading","stale"],
  "acl_categories": ["@pubsub","@slow"],
  "since": "2.0.0",
  "arity": -2,
  "tableOfContents": {"sections":[{"id":"behavior-change-history","title":"Behavior change history"},{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": []
}
```Subscribes the client to the specified channels.

Once the client enters the subscribed state it is not supposed to issue any
other commands, except for additional `SUBSCRIBE`, [`SSUBSCRIBE`](), [`PSUBSCRIBE`](), [`UNSUBSCRIBE`](), [`SUNSUBSCRIBE`](), 
[`PUNSUBSCRIBE`](), [`PING`](), [`RESET`]() and [`QUIT`]() commands.
However, if RESP3 is used (see [`HELLO`]()) it is possible for a client to issue any commands while in subscribed state.

For more information, see [Pub/sub]().

## Behavior change history

*   `>= 6.2.0`: [`RESET`]() can be called to exit subscribed state.

## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |

## Return information

**RESP2:**

When successful, this command doesn't return anything. Instead, for each channel, one message with the first element being the string `subscribe` is pushed as a confirmation that the command succeeded.

**RESP3:**

When successful, this command doesn't return anything. Instead, for each channel, one message with the first element being the string `subscribe` is pushed as a confirmation that the command succeeded.


