---
title: COMMAND GETKEYSANDFLAGS
url: https://redis.io/docs/latest/commands/command-getkeysandflags/
retrieved_utc: '2026-04-09T20:46:03.349108+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/command-getkeysandflags/index.html.md
---

# COMMAND GETKEYSANDFLAGS

```json metadata
{
  "title": "COMMAND GETKEYSANDFLAGS",
  "description": "Extracts the key names and access flags for an arbitrary command.",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"display_text":"command","name":"command","type":"string"},{"display_text":"arg","multiple":true,"name":"arg","optional":true,"type":"string"}],
  "syntax_fmt": "COMMAND GETKEYSANDFLAGS command [arg [arg ...]]",
  "complexity": "O(N) where N is the number of arguments to the command",
  "group": "server",
  "command_flags": ["loading","stale"],
  "acl_categories": ["@slow","@connection"],
  "since": "7.0.0",
  "arity": -3,
  "tableOfContents": {"sections":[{"id":"examples","title":"Examples"},{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": []
}
```Returns [Array reply]() of keys from a full Redis command and their usage flags.

`COMMAND GETKEYSANDFLAGS` is a helper command to let you find the keys from a full Redis command together with flags indicating what each key is used for.

[`COMMAND`]() provides information on how to find the key names of each command (see `firstkey`, [key specifications](), and `movablekeys`),
but in some cases it's not possible to find keys of certain commands and then the entire command must be parsed to discover some / all key names.
You can use [`COMMAND GETKEYS`]() or `COMMAND GETKEYSANDFLAGS` to discover key names directly from how Redis parses the commands.

Refer to [key specifications]() for information about the meaning of the key flags.

## Examples


COMMAND GETKEYS MSET a b c d e f
COMMAND GETKEYS EVAL "not consulted" 3 key1 key2 key3 arg1 arg2 arg3 argN
COMMAND GETKEYSANDFLAGS LMOVE mylist1 mylist2 left left


## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |

## Return information

**RESP2:**

[Array reply](../../develop/reference/protocol-spec#arrays): a list of keys from the given command and their usage flags.

**RESP3:**

[Array reply](../../develop/reference/protocol-spec#arrays): a list of keys from the given command and their usage flags.


