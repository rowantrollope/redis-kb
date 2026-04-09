---
title: COMMAND LIST
url: https://redis.io/docs/latest/commands/command-list/
retrieved_utc: '2026-04-09T20:46:03.364407+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/command-list/index.html.md
---

# COMMAND LIST

```json metadata
{
  "title": "COMMAND LIST",
  "description": "Returns a list of command names.",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"arguments":[{"display_text":"module-name","name":"module-name","token":"MODULE","type":"string"},{"display_text":"category","name":"category","token":"ACLCAT","type":"string"},{"display_text":"pattern","name":"pattern","token":"PATTERN","type":"pattern"}],"name":"filterby","optional":true,"token":"FILTERBY","type":"oneof"}],
  "syntax_fmt": "COMMAND LIST [FILTERBYÂ \u003cMODULEÂ module-name | ACLCATÂ category |\n  PATTERNÂ pattern\u003e]",
  "complexity": "O(N) where N is the total number of Redis commands",
  "group": "server",
  "command_flags": ["loading","stale"],
  "acl_categories": ["@slow","@connection"],
  "since": "7.0.0",
  "arity": -2,
  "tableOfContents": {"sections":[{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": []
}
```Return an array of the server's command names.

You can use the optional _FILTERBY_ modifier to apply one of the following filters:

 - **MODULE module-name**: get the commands that belong to the module specified by _module-name_.
 - **ACLCAT category**: get the commands in the [ACL category]() specified by _category_.
 - **PATTERN pattern**: get the commands that match the given glob-like _pattern_.

## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |

## Return information

**RESP2:**

[Array reply](../../develop/reference/protocol-spec#arrays): a list of command names.

**RESP3:**

[Array reply](../../develop/reference/protocol-spec#arrays): a list of command names.


