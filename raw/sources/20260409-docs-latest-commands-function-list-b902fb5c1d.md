---
title: FUNCTION LIST
url: https://redis.io/docs/latest/commands/function-list/
retrieved_utc: '2026-04-09T20:46:04.297087+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/function-list/index.html.md
---

# FUNCTION LIST

```json metadata
{
  "title": "FUNCTION LIST",
  "description": "Returns information about all libraries.",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"display_text":"library-name-pattern","name":"library-name-pattern","optional":true,"token":"LIBRARYNAME","type":"string"},{"display_text":"withcode","name":"withcode","optional":true,"token":"WITHCODE","type":"pure-token"}],
  "syntax_fmt": "FUNCTION LIST [LIBRARYNAMEÂ library-name-pattern] [WITHCODE]",
  "complexity": "O(N) where N is the number of functions",
  "group": "scripting",
  "command_flags": ["noscript"],
  "acl_categories": ["@slow","@scripting"],
  "since": "7.0.0",
  "arity": -2,
  "tableOfContents": {"sections":[{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": []
}
```Return information about the functions and libraries.

You can use the optional `LIBRARYNAME` argument to specify a pattern for matching library names.
The optional `WITHCODE` modifier will cause the server to include the libraries source implementation in the reply.

The following information is provided for each of the libraries in the response:

* **library_name:** the name of the library.
* **engine:** the engine of the library.
* **functions:** the list of functions in the library.
  Each function has the following fields:
  * **name:** the name of the function.
  * **description:** the function's description.
  * **flags:** an array of [function flags]().
* **library_code:** the library's source code (when given the `WITHCODE` modifier).

For more information please refer to [Introduction to Redis Functions]().

## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |

## Return information

**RESP2:**

[Array reply](../../develop/reference/protocol-spec#arrays): information about functions and libraries.

**RESP3:**

[Array reply](../../develop/reference/protocol-spec#arrays): information about functions and libraries.


