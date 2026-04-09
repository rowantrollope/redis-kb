---
title: SLOWLOG GET
url: https://redis.io/docs/latest/commands/slowlog-get/
retrieved_utc: '2026-04-09T20:46:07.546475+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/slowlog-get/index.html.md
---

# SLOWLOG GET

```json metadata
{
  "title": "SLOWLOG GET",
  "description": "Returns the slow log's entries.",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"display_text":"count","name":"count","optional":true,"type":"integer"}],
  "syntax_fmt": "SLOWLOG GET [count]",
  "complexity": "O(N) where N is the number of entries returned",
  "group": "server",
  "command_flags": ["admin","loading","stale"],
  "acl_categories": ["@admin","@slow","@dangerous"],
  "since": "2.2.12",
  "arity": -2,
  "tableOfContents": {"sections":[{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": []
}
```The `SLOWLOG GET` command returns entries from the slow log in chronological order.

The Redis Slow Log is a system to log queries that exceeded a specified execution time.
The execution time does not include I/O operations like talking with the client, sending the reply and so forth, but just the time needed to actually execute the command (this is the only stage of command execution where the thread is blocked and can not serve other requests in the meantime).

A new entry is added to the slow log whenever a command exceeds the execution time threshold defined by the `slowlog-log-slower-than` configuration directive.
The maximum number of entries in the slow log is governed by the `slowlog-max-len` configuration directive.

By default the command returns latest ten entries in the log. The optional `count` argument limits the number of returned entries, so the command returns at most up to `count` entries, the special number -1 means return all entries.

Each entry from the slow log is comprised of the following six values:

1. A unique progressive identifier for every slow log entry.
2. The unix timestamp at which the logged command was processed.
3. The amount of time needed for its execution, in microseconds.
4. The array composing the arguments of the command.
5. Client IP address and port.
6. Client name if set via the [`CLIENT SETNAME`]() command.

The entry's unique ID can be used in order to avoid processing slow log entries multiple times (for instance you may have a script sending you an email alert for every new slow log entry).
The ID is never reset in the course of the Redis server execution, only a server
restart will reset it.

## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | Not supported for [scripts](). Also, the client IP address, port, and name are not returned by Redis Software. |

## Return information

**RESP2:**

[Array reply](../../develop/reference/protocol-spec#arrays): a list of slow log entries per the above format.

**RESP3:**

[Array reply](../../develop/reference/protocol-spec#arrays): a list of slow log entries per the above format.


