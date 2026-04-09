---
title: APPEND
url: https://redis.io/docs/latest/commands/append/
retrieved_utc: '2026-04-09T20:46:01.949809+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/append/index.html.md
---

# APPEND

```json metadata
{
  "title": "APPEND",
  "description": "Appends a string to the value of a key. Creates the key if it doesn't exist.",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"display_text":"key","key_spec_index":0,"name":"key","type":"key"},{"display_text":"value","name":"value","type":"string"}],
  "syntax_fmt": "APPEND key value",
  "complexity": "O(1). The amortized time complexity is O(1) assuming the appended value is small and the already present value is of any size, since the dynamic string library used by Redis will double the free space available on every reallocation.",
  "group": "string",
  "command_flags": ["write","denyoom","fast"],
  "acl_categories": ["@write","@string","@fast"],
  "since": "2.0.0",
  "arity": 3,
  "key_specs": [{"RW":true,"begin_search":{"spec":{"index":1},"type":"index"},"find_keys":{"spec":{"keystep":1,"lastkey":0,"limit":0},"type":"range"},"insert":true}],
  "tableOfContents": {"sections":[{"id":"examples","title":"Examples"},{"id":"pattern-time-series","title":"Pattern: Time series"},{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": []
}
```If `key` already exists and is a string, this command appends the `value` at the
end of the string.
If `key` does not exist it is created and set as an empty string, so `APPEND`
will be similar to [`SET`]() in this special case.

## Examples


EXISTS mykey
APPEND mykey "Hello"
APPEND mykey " World"
GET mykey


## Pattern: Time series

The `APPEND` command can be used to create a very compact representation of a
list of fixed-size samples, usually referred as _time series_.
Every time a new sample arrives we can store it using the command

```
APPEND timeseries "fixed-size sample"
```

Accessing individual elements in the time series is not hard:

* [`STRLEN`]() can be used in order to obtain the number of samples.
* [`GETRANGE`]() allows for random access of elements.
  If our time series have associated time information we can easily implement
  a binary search to get range combining [`GETRANGE`]() with the Lua scripting
  engine available in Redis 2.6.
* [`SETRANGE`]() can be used to overwrite an existing time series.

The limitation of this pattern is that we are forced into an append-only mode
of operation, there is no way to cut the time series to a given size easily
because Redis currently lacks a command able to trim string objects.
However the space efficiency of time series stored in this way is remarkable.

Hint: it is possible to switch to a different key based on the current Unix
time, in this way it is possible to have just a relatively small amount of
samples per key, to avoid dealing with very big keys, and to make this pattern
more friendly to be distributed across many Redis instances.

An example sampling the temperature of a sensor using fixed-size strings (using
a binary format is better in real implementations).


APPEND ts "0043"
APPEND ts "0035"
GETRANGE ts 0 3
GETRANGE ts 4 7


## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |

## Return information

**RESP2:**

[Integer reply](../../develop/reference/protocol-spec#integers): the length of the string after the append operation.

**RESP3:**

[Integer reply](../../develop/reference/protocol-spec#integers): the length of the string after the append operation.


