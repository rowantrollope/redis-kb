---
title: SETRANGE
url: https://redis.io/docs/latest/commands/setrange/
retrieved_utc: '2026-04-09T20:46:07.394487+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/setrange/index.html.md
---

# SETRANGE

```json metadata
{
  "title": "SETRANGE",
  "description": "Overwrites a part of a string value with another by an offset. Creates the key if it doesn't exist.",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"display_text":"key","key_spec_index":0,"name":"key","type":"key"},{"display_text":"offset","name":"offset","type":"integer"},{"display_text":"value","name":"value","type":"string"}],
  "syntax_fmt": "SETRANGE key offset value",
  "complexity": "O(1), not counting the time taken to copy the new string in place. Usually, this string is very small so the amortized complexity is O(1). Otherwise, complexity is O(M) with M being the length of the value argument.",
  "group": "string",
  "command_flags": ["write","denyoom"],
  "acl_categories": ["@write","@string","@slow"],
  "since": "2.2.0",
  "arity": 4,
  "key_specs": [{"RW":true,"begin_search":{"spec":{"index":1},"type":"index"},"find_keys":{"spec":{"keystep":1,"lastkey":0,"limit":0},"type":"range"},"update":true}],
  "tableOfContents": {"sections":[{"id":"patterns","title":"Patterns"},{"id":"examples","title":"Examples"},{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": []
}
```Overwrites part of the string stored at _key_, starting at the specified offset,
for the entire length of _value_.
If the offset is larger than the current length of the string at _key_, the
string is padded with zero-bytes to make _offset_ fit.
Non-existing keys are considered as empty strings, so this command will make
sure it holds a string large enough to be able to set _value_ at _offset_.

Note that the maximum offset that you can set is 2^29 -1 (536870911), as Redis
Strings are limited to 512 megabytes.
If you need to grow beyond this size, you can use multiple keys.

**Warning**: When setting the last possible byte and the string value stored at
_key_ does not yet hold a string value, or holds a small string value, Redis
needs to allocate all intermediate memory which can block the server for some
time.
On a 2010 MacBook Pro, setting byte number 536870911 (512MB allocation) takes
~300ms, setting byte number 134217728 (128MB allocation) takes ~80ms, setting
bit number 33554432 (32MB allocation) takes ~30ms and setting bit number 8388608
(8MB allocation) takes ~8ms.
Note that once this first allocation is done, subsequent calls to `SETRANGE` for
the same _key_ will not have the allocation overhead.

## Patterns

Thanks to `SETRANGE` and the analogous [`GETRANGE`]() commands, you can use Redis
strings as a linear array with O(1) random access.
This is a very fast and efficient storage in many real world use cases.

## Examples

Basic usage:


SET key1 "Hello World"
SETRANGE key1 6 "Redis"
GET key1


Example of zero padding:


SETRANGE key2 6 "Redis"
GET key2


## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |

## Return information

**RESP2:**

[Integer reply](../../develop/reference/protocol-spec#integers): the length of the string after it was modified by the command.

**RESP3:**

[Integer reply](../../develop/reference/protocol-spec#integers): the length of the string after it was modified by the command.


