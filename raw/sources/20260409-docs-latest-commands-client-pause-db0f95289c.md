---
title: CLIENT PAUSE
url: https://redis.io/docs/latest/commands/client-pause/
retrieved_utc: '2026-04-09T20:46:02.663070+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/client-pause/index.html.md
---

# CLIENT PAUSE

```json metadata
{
  "title": "CLIENT PAUSE",
  "description": "Suspends commands processing.",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"display_text":"timeout","name":"timeout","type":"integer"},{"arguments":[{"display_text":"write","name":"write","token":"WRITE","type":"pure-token"},{"display_text":"all","name":"all","token":"ALL","type":"pure-token"}],"name":"mode","optional":true,"since":"6.2.0","type":"oneof"}],
  "syntax_fmt": "CLIENT PAUSE timeout [WRITE | ALL]",
  "complexity": "O(1)",
  "group": "connection",
  "command_flags": ["admin","noscript","loading","stale"],
  "acl_categories": ["@admin","@slow","@dangerous","@connection"],
  "since": "3.0.0",
  "arity": -3,
  "tableOfContents": {"sections":[{"id":"behavior-change-history","title":"Behavior change history"},{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": []
}
````CLIENT PAUSE` is a connections control command able to suspend all the Redis clients for the specified amount of time (in milliseconds).

The command performs the following actions:

* It stops processing all the pending commands from normal and pub/sub clients for the given mode. However interactions with replicas will continue normally. Note that clients are formally paused when they try to execute a command, so no work is taken on the server side for inactive clients.
* However it returns OK to the caller ASAP, so the `CLIENT PAUSE` command execution is not paused by itself.
* When the specified amount of time has elapsed, all the clients are unblocked: this will trigger the processing of all the commands accumulated in the query buffer of every client during the pause.

Client pause currently supports two modes:

* `ALL`: This is the default mode. All client commands are blocked.
* `WRITE`: Clients are only blocked if they attempt to execute a write command.

For the `WRITE` mode, some commands have special behavior:

* [`EVAL`]()/[`EVALSHA`](): Will block client for all scripts.
* [`PUBLISH`](): Will block client.
* [`PFCOUNT`](): Will block client.
* [`WAIT`](): Acknowledgments will be delayed, so this command will appear blocked.

This command is useful as it makes able to switch clients from a Redis instance to another one in a controlled way. For example during an instance upgrade the system administrator could do the following:

* Pause the clients using `CLIENT PAUSE`
* Wait a few seconds to make sure the replicas processed the latest replication stream from the master.
* Turn one of the replicas into a master.
* Reconfigure clients to connect with the new master.

Since Redis 6.2, the recommended mode for client pause is `WRITE`. This mode will stop all replication traffic, can be
aborted with the [`CLIENT UNPAUSE`]() command, and allows reconfiguring the old master without risking accepting writes after the
failover. This is also the mode used during cluster failover.

For versions before 6.2, it is possible to send `CLIENT PAUSE` in a MULTI/EXEC block together with the `INFO replication` command in order to get the current master offset at the time the clients are blocked. This way it is possible to wait for a specific offset in the replica side in order to make sure all the replication stream was processed.

Since Redis 3.2.10 / 4.0.0, this command also prevents keys to be evicted or
expired during the time clients are paused. This way the dataset is guaranteed
to be static not just from the point of view of clients not being able to write, but also from the point of view of internal operations.

## Behavior change history

*   `>= 3.2.0`: Client pause prevents client pause and key eviction as well.

## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Not supported">&#x274c; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> | <span title="Not supported">&#x274c; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> |  |

## Return information

**RESP2:**

[Simple string reply](../../develop/reference/protocol-spec#simple-strings): `OK` or an error if the timeout is invalid.

**RESP3:**

[Simple string reply](../../develop/reference/protocol-spec#simple-strings): `OK` or an error if the timeout is invalid.


