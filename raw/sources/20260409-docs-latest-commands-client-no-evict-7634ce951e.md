---
title: CLIENT NO-EVICT
url: https://redis.io/docs/latest/commands/client-no-evict/
retrieved_utc: '2026-04-09T20:46:02.653391+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/client-no-evict/index.html.md
---

# CLIENT NO-EVICT

```json metadata
{
  "title": "CLIENT NO-EVICT",
  "description": "Sets the client eviction mode of the connection.",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"arguments":[{"display_text":"on","name":"on","token":"ON","type":"pure-token"},{"display_text":"off","name":"off","token":"OFF","type":"pure-token"}],"name":"enabled","type":"oneof"}],
  "syntax_fmt": "CLIENT NO-EVICT \u003cON | OFF\u003e",
  "complexity": "O(1)",
  "group": "connection",
  "command_flags": ["admin","noscript","loading","stale"],
  "acl_categories": ["@admin","@slow","@dangerous","@connection"],
  "since": "7.0.0",
  "arity": 3,
  "tableOfContents": {"sections":[{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": []
}
```The `CLIENT NO-EVICT` command sets the [client eviction](#client-eviction) mode for the current connection.

When turned on and client eviction is configured, the current connection will be excluded from the client eviction process even if we're above the configured client eviction threshold.

When turned off, the current client will be re-included in the pool of potential clients to be evicted (and evicted if needed).

See [client eviction](#client-eviction) for more details.

## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Not supported">&#x274c; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> | <span title="Not supported">&#x274c; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> |  |

## Return information

**RESP2:**

One of the following:

* [Simple string reply](): `OK` if the command was successful.
* [Simple error reply]() in these cases: wrong number of or invalid arguments.

**RESP3:**

One of the following:

* [Simple string reply](): `OK` if the command was successful.
* [Simple error reply]() in these cases: wrong number of or invalid arguments.


