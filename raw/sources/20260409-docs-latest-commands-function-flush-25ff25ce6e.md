---
title: FUNCTION FLUSH
url: https://redis.io/docs/latest/commands/function-flush/
retrieved_utc: '2026-04-09T20:46:04.276652+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/function-flush/index.html.md
---

# FUNCTION FLUSH

```json metadata
{
  "title": "FUNCTION FLUSH",
  "description": "Deletes all libraries and functions.",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"arguments":[{"display_text":"async","name":"async","token":"ASYNC","type":"pure-token"},{"display_text":"sync","name":"sync","token":"SYNC","type":"pure-token"}],"name":"flush-type","optional":true,"type":"oneof"}],
  "syntax_fmt": "FUNCTION FLUSH [ASYNC | SYNC]",
  "complexity": "O(N) where N is the number of functions deleted",
  "group": "scripting",
  "command_flags": ["write","noscript"],
  "acl_categories": ["@write","@slow","@scripting"],
  "since": "7.0.0",
  "arity": -2,
  "tableOfContents": {"sections":[{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": []
}
```Deletes all the libraries.

Unless called with the optional mode argument, the `lazyfree-lazy-user-flush` configuration directive sets the effective behavior. Valid modes are:

* `ASYNC`: Asynchronously flush the libraries.
* `SYNC`: Synchronously flush the libraries.

For more information please refer to [Introduction to Redis Functions]().

## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |

## Return information

**RESP2:**

[Simple string reply](../../develop/reference/protocol-spec#simple-strings): `OK`.

**RESP3:**

[Simple string reply](../../develop/reference/protocol-spec#simple-strings): `OK`.


