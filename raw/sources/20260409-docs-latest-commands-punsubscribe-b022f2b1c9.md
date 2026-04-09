---
title: PUNSUBSCRIBE
url: https://redis.io/docs/latest/commands/punsubscribe/
retrieved_utc: '2026-04-09T20:46:06.443542+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/punsubscribe/index.html.md
---

# PUNSUBSCRIBE

```json metadata
{
  "title": "PUNSUBSCRIBE",
  "description": "Stops listening to messages published to channels that match one or more patterns.",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"display_text":"pattern","multiple":true,"name":"pattern","optional":true,"type":"pattern"}],
  "syntax_fmt": "PUNSUBSCRIBE [pattern [pattern ...]]",
  "complexity": "O(N) where N is the number of patterns to unsubscribe.",
  "group": "pubsub",
  "command_flags": ["pubsub","noscript","loading","stale"],
  "acl_categories": ["@pubsub","@slow"],
  "since": "2.0.0",
  "arity": -1,
  "tableOfContents": {"sections":[{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": []
}
```Unsubscribes the client from the given patterns, or from all of them if none is
given.

When no patterns are specified, the client is unsubscribed from all the
previously subscribed patterns.
In this case, a message for every unsubscribed pattern will be sent to the
client.

## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |

## Return information

**RESP2:**

When successful, this command doesn't return anything. Instead, for each pattern, one message with the first element being the string `punsubscribe` is pushed as a confirmation that the command succeeded.

**RESP3:**

When successful, this command doesn't return anything. Instead, for each pattern, one message with the first element being the string `punsubscribe` is pushed as a confirmation that the command succeeded.


