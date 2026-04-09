---
title: COMMAND DOCS
url: https://redis.io/docs/latest/commands/command-docs/
retrieved_utc: '2026-04-09T20:46:03.321153+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/command-docs/index.html.md
---

# COMMAND DOCS

```json metadata
{
  "title": "COMMAND DOCS",
  "description": "Returns documentary information about one, multiple or all commands.",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"display_text":"command-name","multiple":true,"name":"command-name","optional":true,"type":"string"}],
  "syntax_fmt": "COMMAND DOCS [command-name [command-name ...]]",
  "complexity": "O(N) where N is the number of commands to look up",
  "group": "server",
  "command_flags": ["loading","stale"],
  "acl_categories": ["@slow","@connection"],
  "since": "7.0.0",
  "arity": -2,
  "tableOfContents": {"sections":[{"id":"examples","title":"Examples"},{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": []
}
```Return documentary information about commands.

By default, the reply includes all of the server's commands.
You can use the optional _command-name_ argument to specify the names of one or more commands.

The reply includes a map for each returned command.
The following keys may be included in the mapped reply:

* **summary:** short command description.
* **since:** the Redis version that added the command (or for module commands, the module version).
* **group:** the functional group to which the command belongs.
  Possible values are:
  - _bitmap_
  - _cluster_
  - _connection_
  - _generic_
  - _geo_
  - _hash_
  - _hyperloglog_
  - _list_
  - _module_
  - _pubsub_
  - _scripting_
  - _sentinel_
  - _server_
  - _set_
  - _sorted-set_
  - _stream_
  - _string_
  - _transactions_
* **complexity:** a short explanation about the command's time complexity.
* **doc_flags:** an array of documentation flags.
  Possible values are:
  - _deprecated:_ the command is deprecated.
  - _syscmd:_ a system command that isn't meant to be called by users.
* **deprecated_since:** the Redis version that deprecated the command (or for module commands, the module version)..
* **replaced_by:** the alternative for a deprecated command.
* **history:** an array of historical notes describing changes to the command's output or arguments. It should not contain information about behavioral changes.
  Each entry is an array itself, made up of two elements:
  1. The Redis version that the entry applies to.
  2. The description of the change.
* **arguments:** an array of maps that describe the command's arguments.
  Please refer to the [Redis command arguments][td] page for more information.

[td]: /develop/reference/command-arguments

## Examples


COMMAND DOCS SET


## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |

## Return information

**RESP2:**

[Array reply](../../develop/reference/protocol-spec#arrays): a map, as a flattened array, where each key is a command name, and each value is the documentary information.

**RESP3:**

[Map reply](../../develop/reference/protocol-spec#maps): a map where each key is a command name, and each value is the documentary information.


