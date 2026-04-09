---
title: CLIENT CACHING
url: https://redis.io/docs/latest/commands/client-caching/
retrieved_utc: '2026-04-09T20:46:02.558610+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/client-caching/index.html.md
---

# CLIENT CACHING

```json metadata
{
  "title": "CLIENT CACHING",
  "description": "Instructs the server whether to track the keys in the next request.",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"arguments":[{"display_text":"yes","name":"yes","token":"YES","type":"pure-token"},{"display_text":"no","name":"no","token":"NO","type":"pure-token"}],"name":"mode","type":"oneof"}],
  "syntax_fmt": "CLIENT CACHING \u003cYES | NO\u003e",
  "complexity": "O(1)",
  "group": "connection",
  "command_flags": ["noscript","loading","stale"],
  "acl_categories": ["@slow","@connection"],
  "since": "6.0.0",
  "arity": 3,
  "tableOfContents": {"sections":[{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": []
}
```This command controls the tracking of the keys in the next command executed
by the connection, when tracking is enabled in `OPTIN` or `OPTOUT` mode.
Please check the
[client side caching documentation]() for
background information.

When tracking is enabled Redis, using the [`CLIENT TRACKING`]() command, it is
possible to specify the `OPTIN` or `OPTOUT` options, so that keys
in read only commands are not automatically remembered by the server to
be invalidated later. When we are in `OPTIN` mode, we can enable the
tracking of the keys in the next command by calling `CLIENT CACHING yes`
immediately before it. Similarly when we are in `OPTOUT` mode, and keys
are normally tracked, we can avoid the keys in the next command to be
tracked using `CLIENT CACHING no`.

Basically the command sets a state in the connection, that is valid only
for the next command execution, that will modify the behavior of client
tracking.

## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |

## Return information

**RESP2:**

[Simple string reply](../../develop/reference/protocol-spec#simple-strings): `OK` or an error if the argument is not "yes" or "no".

**RESP3:**

[Simple string reply](../../develop/reference/protocol-spec#simple-strings): `OK` or an error if the argument is not "yes" or "no".


