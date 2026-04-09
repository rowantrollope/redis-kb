---
title: PSUBSCRIBE
url: https://redis.io/docs/latest/commands/psubscribe/
retrieved_utc: '2026-04-09T20:46:06.348493+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/psubscribe/index.html.md
---

# PSUBSCRIBE

```json metadata
{
  "title": "PSUBSCRIBE",
  "description": "Listens for messages published to channels that match one or more patterns.",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"display_text":"pattern","multiple":true,"name":"pattern","type":"pattern"}],
  "syntax_fmt": "PSUBSCRIBE pattern [pattern ...]",
  "complexity": "O(N) where N is the number of patterns to subscribe to.",
  "group": "pubsub",
  "command_flags": ["pubsub","noscript","loading","stale"],
  "acl_categories": ["@pubsub","@slow"],
  "since": "2.0.0",
  "arity": -2,
  "tableOfContents": {"sections":[{"id":"behavior-change-history","title":"Behavior change history"},{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": []
}
```Subscribes the client to the given patterns.

Supported glob-style patterns:

* `h?llo` subscribes to `hello`, `hallo` and `hxllo`
* `h*llo` subscribes to `hllo` and `heeeello`
* `h[ae]llo` subscribes to `hello` and `hallo,` but not `hillo`

Use `\` to escape special characters if you want to match them verbatim.

Once the client enters the subscribed state it is not supposed to issue any other commands, except for additional [`SUBSCRIBE`](), [`SSUBSCRIBE`](), `PSUBSCRIBE`, [`UNSUBSCRIBE`](), [`SUNSUBSCRIBE`](), [`PUNSUBSCRIBE`](), [`PING`](), [`RESET`]() and [`QUIT`]() commands.
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

When successful, this command doesn't return anything. Instead, for each pattern, one message with the first element being the string `psubscribe` is pushed as a confirmation that the command succeeded.

**RESP3:**

When successful, this command doesn't return anything. Instead, for each pattern, one message with the first element being the string `psubscribe` is pushed as a confirmation that the command succeeded.


