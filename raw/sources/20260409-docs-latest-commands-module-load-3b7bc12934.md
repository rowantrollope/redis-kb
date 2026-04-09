---
title: MODULE LOAD
url: https://redis.io/docs/latest/commands/module-load/
retrieved_utc: '2026-04-09T20:46:05.742868+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/module-load/index.html.md
---

# MODULE LOAD

```json metadata
{
  "title": "MODULE LOAD",
  "description": "Loads a module.",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"display_text":"path","name":"path","type":"string"},{"display_text":"arg","multiple":true,"name":"arg","optional":true,"type":"string"}],
  "syntax_fmt": "MODULE LOAD path [arg [arg ...]]",
  "complexity": "O(1)",
  "group": "server",
  "command_flags": ["admin","noscript","no_async_loading"],
  "acl_categories": ["@admin","@slow","@dangerous"],
  "since": "4.0.0",
  "arity": -3,
  "tableOfContents": {"sections":[{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": []
}
```Loads a module from a dynamic library at runtime.

This command loads and initializes the Redis module from the dynamic library
specified by the `path` argument. The `path` should be the absolute path of the
library, including the full filename. Any additional arguments are passed
unmodified to the module.

**Note**: modules can also be loaded at server startup with `loadmodule`
configuration directive in `redis.conf`.


As of Redis 8 in Redis Open Source, loading a module using the Redis CLI with configuration parameters is deprecated.


## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Not supported">&#x274c; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> | <span title="Not supported">&#x274c; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> |  |

## Return information

**RESP2:**

[Simple string reply](../../develop/reference/protocol-spec#simple-strings): `OK` if the module was loaded.

**RESP3:**

[Simple string reply](../../develop/reference/protocol-spec#simple-strings): `OK` if the module was loaded.


