---
title: XGROUP CREATE
url: https://redis.io/docs/latest/commands/xgroup-create/
retrieved_utc: '2026-04-09T20:45:37.742383+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/xgroup-create/index.html.md
---

# XGROUP CREATE

```json metadata
{
  "title": "XGROUP CREATE",
  "description": "Creates a consumer group.",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"display_text":"key","key_spec_index":0,"name":"key","type":"key"},{"display_text":"group","name":"group","type":"string"},{"arguments":[{"display_text":"id","name":"id","type":"string"},{"display_text":"new-id","name":"new-id","token":"$","type":"pure-token"}],"name":"id-selector","type":"oneof"},{"display_text":"mkstream","name":"mkstream","optional":true,"token":"MKSTREAM","type":"pure-token"},{"display_text":"entries-read","name":"entriesread","optional":true,"token":"ENTRIESREAD","type":"integer"}],
  "syntax_fmt": "XGROUP CREATE key group \u003cid | $\u003e [MKSTREAM]\n  [ENTRIESREADÂ entries-read]",
  "complexity": "O(1)",
  "group": "stream",
  "command_flags": ["write","denyoom"],
  "acl_categories": ["@write","@stream","@slow"],
  "since": "5.0.0",
  "arity": -5,
  "key_specs": [{"RW":true,"begin_search":{"spec":{"index":2},"type":"index"},"find_keys":{"spec":{"keystep":1,"lastkey":0,"limit":0},"type":"range"},"insert":true}],
  "tableOfContents": {"sections":[{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": []
}
```Create a new consumer group uniquely identified by `<groupname>` for the stream stored at `<key>`

Every group has a unique name in a given stream. 
When a consumer group with the same name already exists, the command returns a `-BUSYGROUP` error.

The command's `<id>` argument specifies the last delivered entry in the stream from the new group's perspective.
The special ID `$` is the ID of the last entry in the stream, but you can substitute it with any valid ID.

For example, if you want the group's consumers to fetch the entire stream from the beginning, use zero as the starting ID for the consumer group:

    XGROUP CREATE mystream mygroup 0

By default, the `XGROUP CREATE` command expects that the target stream exists, and returns an error when it doesn't.
If a stream does not exist, you can create it automatically with length of 0 by using the optional `MKSTREAM` subcommand as the last argument after the `<id>`:

    XGROUP CREATE mystream mygroup $ MKSTREAM

To enable consumer group lag tracking, specify the optional `entries_read` named argument with an arbitrary ID.
An arbitrary ID is any ID that isn't the ID of the stream's first entry, last entry, or zero ("0-0") ID.
Use it to find out how many entries are between the arbitrary ID (excluding it) and the stream's last entry.
Set the `entries_read` the stream's `entries_added` subtracted by the number of entries.

## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |

## Return information

**RESP2:**

[Simple string reply](../../develop/reference/protocol-spec#simple-strings): `OK`.

**RESP3:**

[Simple string reply](../../develop/reference/protocol-spec#simple-strings): `OK`.


