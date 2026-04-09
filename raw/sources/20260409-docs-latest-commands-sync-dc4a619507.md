---
title: SYNC
url: https://redis.io/docs/latest/commands/sync/
retrieved_utc: '2026-04-09T20:45:34.015038+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/sync/index.html.md
---

# SYNC

```json metadata
{
  "title": "SYNC",
  "description": "An internal command used in replication.",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "syntax_fmt": "SYNC",
  "group": "server",
  "command_flags": ["admin","noscript","no_async_loading","no_multi"],
  "acl_categories": ["@admin","@slow","@dangerous"],
  "since": "1.0.0",
  "arity": 1,
  "tableOfContents": {"sections":[{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": []
}
```Initiates a replication stream from the master.

The `SYNC` command is called by Redis replicas for initiating a replication
stream from the master. It has been replaced in newer versions of Redis by
 [`PSYNC`]().

For more information about replication in Redis please check the
[replication page][tr].

[tr]: /operate/oss_and_stack/management/replication

## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Not supported">&#x274c; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> | <span title="Not supported">&#x274c; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> |  |

## Return information

**RESP2:**

**Non-standard return value**, a bulk transfer of the data followed by `PING` and write requests from the master.

**RESP3:**

**Non-standard return value**, a bulk transfer of the data followed by `PING` and write requests from the master.


