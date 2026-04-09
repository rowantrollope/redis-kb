---
title: ACL LOAD
url: https://redis.io/docs/latest/commands/acl-load/
retrieved_utc: '2026-04-09T20:46:01.662226+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/acl-load/index.html.md
---

# ACL LOAD

```json metadata
{
  "title": "ACL LOAD",
  "description": "Reloads the rules from the configured ACL file.",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "syntax_fmt": "ACL LOAD",
  "complexity": "O(N). Where N is the number of configured users.",
  "group": "server",
  "command_flags": ["admin","noscript","loading","stale"],
  "acl_categories": ["@admin","@slow","@dangerous"],
  "since": "6.0.0",
  "arity": 2,
  "tableOfContents": {"sections":[{"id":"examples","title":"Examples"},{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": []
}
```When Redis is configured to use an ACL file (with the `aclfile` configuration
option), this command will reload the ACLs from the file, replacing all
the current ACL rules with the ones defined in the file. The command makes
sure to have an *all or nothing* behavior, that is:

* If every line in the file is valid, all the ACLs are loaded.
* If one or more line in the file is not valid, nothing is loaded, and the old ACL rules defined in the server memory continue to be used.

## Examples

```
> ACL LOAD
+OK

> ACL LOAD
-ERR /tmp/foo:1: Unknown command or category name in ACL...
```

## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Not supported">&#x274c; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> | <span title="Not supported">&#x274c; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> |  |

## Return information

**RESP2:**

[Simple string reply](../../develop/reference/protocol-spec#simple-strings): `OK` on success.
The command may fail with an error for several reasons: if the file is not readable, if there is an error inside the file, and in such cases, the error will be reported to the user in the error.
Finally, the command will fail if the server is not configured to use an external ACL file.

**RESP3:**

[Simple string reply](../../develop/reference/protocol-spec#simple-strings): `OK` on success.
The command may fail with an error for several reasons: if the file is not readable, if there is an error inside the file, and in such cases, the error will be reported to the user in the error.
Finally, the command will fail if the server is not configured to use an external ACL file.


