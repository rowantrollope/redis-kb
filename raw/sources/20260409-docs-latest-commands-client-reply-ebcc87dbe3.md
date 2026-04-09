---
title: CLIENT REPLY
url: https://redis.io/docs/latest/commands/client-reply/
retrieved_utc: '2026-04-09T20:46:02.689904+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/client-reply/index.html.md
---

# CLIENT REPLY

```json metadata
{
  "title": "CLIENT REPLY",
  "description": "Instructs the server whether to reply to commands.",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"arguments":[{"display_text":"on","name":"on","token":"ON","type":"pure-token"},{"display_text":"off","name":"off","token":"OFF","type":"pure-token"},{"display_text":"skip","name":"skip","token":"SKIP","type":"pure-token"}],"name":"action","type":"oneof"}],
  "syntax_fmt": "CLIENT REPLY \u003cON | OFF | SKIP\u003e",
  "complexity": "O(1)",
  "group": "connection",
  "command_flags": ["noscript","loading","stale"],
  "acl_categories": ["@slow","@connection"],
  "since": "3.2.0",
  "arity": 3,
  "tableOfContents": {"sections":[{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": []
}
```Sometimes it can be useful for clients to completely disable replies from the Redis server. For example when the client sends fire and forget commands or performs a mass loading of data, or in caching contexts where new data is streamed constantly. In such contexts to use server time and bandwidth in order to send back replies to clients, which are going to be ignored, is considered wasteful.

The `CLIENT REPLY` command controls whether the server will reply the client's commands. The following modes are available:

* `ON`. This is the default mode in which the server returns a reply to every command.
* `OFF`. In this mode the server will not reply to client commands.
* `SKIP`. This mode skips the reply of command immediately after it.

## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |

## Return information

**RESP2:**

[Simple string reply](../../develop/reference/protocol-spec#simple-strings): `OK` when called with `ON`. When called with either `OFF` or `SKIP` sub-commands, no reply is made.

**RESP3:**

[Simple string reply](../../develop/reference/protocol-spec#simple-strings): `OK` when called with `ON`. When called with either `OFF` or `SKIP` sub-commands, no reply is made.


