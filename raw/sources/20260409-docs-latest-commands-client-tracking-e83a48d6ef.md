---
title: CLIENT TRACKING
url: https://redis.io/docs/latest/commands/client-tracking/
retrieved_utc: '2026-04-09T20:46:02.724827+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/client-tracking/index.html.md
---

# CLIENT TRACKING

```json metadata
{
  "title": "CLIENT TRACKING",
  "description": "Controls server-assisted client-side caching for the connection.",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"arguments":[{"display_text":"on","name":"on","token":"ON","type":"pure-token"},{"display_text":"off","name":"off","token":"OFF","type":"pure-token"}],"name":"status","type":"oneof"},{"display_text":"client-id","name":"client-id","optional":true,"token":"REDIRECT","type":"integer"},{"display_text":"prefix","multiple":true,"multiple_token":true,"name":"prefix","optional":true,"token":"PREFIX","type":"string"},{"display_text":"bcast","name":"bcast","optional":true,"token":"BCAST","type":"pure-token"},{"display_text":"optin","name":"optin","optional":true,"token":"OPTIN","type":"pure-token"},{"display_text":"optout","name":"optout","optional":true,"token":"OPTOUT","type":"pure-token"},{"display_text":"noloop","name":"noloop","optional":true,"token":"NOLOOP","type":"pure-token"}],
  "syntax_fmt": "CLIENT TRACKING \u003cON | OFF\u003e [REDIRECTÂ client-id] [PREFIXÂ prefix\n  [PREFIX prefix ...]] [BCAST] [OPTIN] [OPTOUT] [NOLOOP]",
  "complexity": "O(1). Some options may introduce additional complexity.",
  "group": "connection",
  "command_flags": ["noscript","loading","stale"],
  "acl_categories": ["@slow","@connection"],
  "since": "6.0.0",
  "arity": -3,
  "tableOfContents": {"sections":[{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": []
}
```This command enables the tracking feature of the Redis server, that is used
for [server assisted client side caching]().

When tracking is enabled Redis remembers the keys that the connection
requested, in order to send later invalidation messages when such keys are
modified. Invalidation messages are sent in the same connection (only available
when the RESP3 protocol is used) or redirected in a different connection
(available also with RESP2 and Pub/Sub). A special *broadcasting* mode is
available where clients participating in this protocol receive every
notification just subscribing to given key prefixes, regardless of the
keys that they requested. Given the complexity of the argument please
refer to [the main client side caching documentation]() for the details. This manual page is only a reference for the options of this subcommand.

In order to enable tracking, use:

    CLIENT TRACKING on ... options ...

The feature will remain active in the current connection for all its life,
unless tracking is turned off with `CLIENT TRACKING off` at some point.

The following are the list of options that modify the behavior of the
command when enabling tracking:

* `REDIRECT <id>`: send invalidation messages to the connection with the specified ID. The connection must exist. You can get the ID of a connection using [`CLIENT ID`](). If the connection we are redirecting to is terminated, when in RESP3 mode the connection with tracking enabled will receive `tracking-redir-broken` push messages in order to signal the condition.
* `BCAST`: enable tracking in broadcasting mode. In this mode invalidation messages are reported for all the prefixes specified, regardless of the keys requested by the connection. Instead when the broadcasting mode is not enabled, Redis will track which keys are fetched using read-only commands, and will report invalidation messages only for such keys.
* `PREFIX <prefix>`: for broadcasting, register a given key prefix, so that notifications will be provided only for keys starting with this string. This option can be given multiple times to register multiple prefixes. If broadcasting is enabled without this option, Redis will send notifications for every key. You can't delete a single prefix, but you can delete all prefixes by disabling and re-enabling tracking. Using this option adds the additional time complexity of O(N^2), where N is the total number of prefixes tracked. 
* `OPTIN`: when broadcasting is NOT active, normally don't track keys in read only commands, unless they are called immediately after a `CLIENT CACHING yes` command.
* `OPTOUT`: when broadcasting is NOT active, normally track keys in read only commands, unless they are called immediately after a `CLIENT CACHING no` command.
* `NOLOOP`: don't send notifications about keys modified by this connection itself.

## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |

## Return information

**RESP2:**

[Simple string reply](../../develop/reference/protocol-spec#simple-strings): `OK` if the connection was successfully put in tracking mode or if the tracking mode was successfully disabled. Otherwise, an error is returned.

**RESP3:**

[Simple string reply](../../develop/reference/protocol-spec#simple-strings): `OK` if the connection was successfully put in tracking mode or if the tracking mode was successfully disabled. Otherwise, an error is returned.


