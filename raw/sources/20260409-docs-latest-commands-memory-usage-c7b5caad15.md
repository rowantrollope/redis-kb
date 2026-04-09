---
title: MEMORY USAGE
url: https://redis.io/docs/latest/commands/memory-usage/
retrieved_utc: '2026-04-09T20:46:05.651999+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/memory-usage/index.html.md
---

# MEMORY USAGE

```json metadata
{
  "title": "MEMORY USAGE",
  "description": "Estimates the memory usage of a key.",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"display_text":"key","key_spec_index":0,"name":"key","type":"key"},{"display_text":"count","name":"count","optional":true,"token":"SAMPLES","type":"integer"}],
  "syntax_fmt": "MEMORY USAGE key [SAMPLESÂ count]",
  "complexity": "O(N) where N is the number of samples.",
  "group": "server",
  "command_flags": ["readonly"],
  "acl_categories": ["@read","@slow"],
  "since": "4.0.0",
  "arity": -3,
  "key_specs": [{"RO":true,"begin_search":{"spec":{"index":2},"type":"index"},"find_keys":{"spec":{"keystep":1,"lastkey":0,"limit":0},"type":"range"}}],
  "tableOfContents": {"sections":[{"id":"examples","title":"Examples"},{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": []
}
```The `MEMORY USAGE` command reports the number of bytes that a key and its value
require to be stored in RAM.

The reported usage is the total of memory allocations for data and
administrative overheads that a key and its value require.

For nested data types, the optional `SAMPLES` option can be provided, where
`count` is the number of sampled nested values. The samples are averaged to estimate the total size.
By default, this option is set to `5`. To sample the all of the nested values, use `SAMPLES 0`.

## Examples

With Redis v7.2.0 64-bit and **jemalloc**, the empty string measures as follows:

```
> SET "" ""
OK
> MEMORY USAGE ""
(integer) 56
```

These bytes are pure overhead at the moment as no actual data is stored, and are
used for maintaining the internal data structures of the server (include internal allocator fragmentation). Longer keys and
values show asymptotically linear usage.

```
> SET foo bar
OK
> MEMORY USAGE foo
(integer) 56
> SET foo2 mybar
OK
> MEMORY USAGE foo2
(integer) 64
> SET foo3 0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789
OK
> MEMORY USAGE foo3
(integer) 160
```

## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
|<span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | Not supported for [scripts]() in Redis versions earlier than 7. |

Note: key memory usage is different on Redis Software or Redis Cloud active-active databases than on non-active-active databases. This is because memory usage includes some amount of CRDB overhead.

## Return information

**RESP2:**

One of the following:
* [Integer reply](../../develop/reference/protocol-spec#integers): the memory usage in bytes.
* [Nil reply](../../develop/reference/protocol-spec#bulk-strings): if the key does not exist.

**RESP3:**

One of the following:
* [Integer reply](../../develop/reference/protocol-spec#integers): the memory usage in bytes.
* [Null reply](../../develop/reference/protocol-spec#nulls): if the key does not exist.


