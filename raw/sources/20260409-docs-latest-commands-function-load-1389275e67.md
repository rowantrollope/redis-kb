---
title: FUNCTION LOAD
url: https://redis.io/docs/latest/commands/function-load/
retrieved_utc: '2026-04-09T20:46:04.293950+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/function-load/index.html.md
---

# FUNCTION LOAD

```json metadata
{
  "title": "FUNCTION LOAD",
  "description": "Creates a library.",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"display_text":"replace","name":"replace","optional":true,"token":"REPLACE","type":"pure-token"},{"display_text":"function-code","name":"function-code","type":"string"}],
  "syntax_fmt": "FUNCTION LOAD [REPLACE] function-code",
  "complexity": "O(1) (considering compilation time is redundant)",
  "group": "scripting",
  "command_flags": ["write","denyoom","noscript"],
  "acl_categories": ["@write","@slow","@scripting"],
  "since": "7.0.0",
  "arity": -3,
  "tableOfContents": {"sections":[{"id":"examples","title":"Examples"},{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": []
}
```Load a library to Redis.

The command's gets a single mandatory parameter which is the source code that implements the library.
The library payload must start with Shebang statement that provides a metadata about the library (like the engine to use and the library name).
Shebang format: `#!<engine name> name=<library name>`. Currently engine name must be `lua`.

For the Lua engine, the implementation should declare one or more entry points to the library with the [`redis.register_function()` API]().
Once loaded, you can call the functions in the library with the [`FCALL`]() (or [`FCALL_RO`]() when applicable) command.

When attempting to load a library with a name that already exists, the Redis server returns an error.
The `REPLACE` modifier changes this behavior and overwrites the existing library with the new contents.

The command will return an error in the following circumstances:

* An invalid _engine-name_ was provided.
* The library's name already exists without the `REPLACE` modifier.
* A function in the library is created with a name that already exists in another library (even when `REPLACE` is specified).
* The engine failed in creating the library's functions (due to a compilation error, for example).
* No functions were declared by the library.

For more information please refer to [Introduction to Redis Functions]().

## Examples

The following example will create a library named `mylib` with a single function, `myfunc`, that returns the first argument it gets.

```
redis> FUNCTION LOAD "#!lua name=mylib \n redis.register_function('myfunc', function(keys, args) return args[1] end)"
mylib
redis> FCALL myfunc 0 hello
"hello"
```

## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |

## Return information

**RESP2:**

[Bulk string reply](../../develop/reference/protocol-spec#bulk-strings): the library name that was loaded.

**RESP3:**

[Bulk string reply](../../develop/reference/protocol-spec#bulk-strings): the library name that was loaded.


