---
title: DELEX
url: https://redis.io/docs/latest/commands/delex/
retrieved_utc: '2026-04-09T20:46:03.709103+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/delex/index.html.md
---

# DELEX

```json metadata
{
  "title": "DELEX",
  "description": "Conditionally removes the specified key based on value or hash digest comparison.",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"display_text":"key","key_spec_index":0,"name":"key","type":"key"},{"arguments":[{"display_text":"ifeq-value","name":"ifeq-value","token":"IFEQ","type":"string"},{"display_text":"ifne-value","name":"ifne-value","token":"IFNE","type":"string"},{"display_text":"ifdeq-digest","name":"ifdeq-digest","token":"IFDEQ","type":"integer"},{"display_text":"ifdne-digest","name":"ifdne-digest","token":"IFDNE","type":"integer"}],"name":"condition","optional":true,"type":"oneof"}],
  "syntax_fmt": "DELEX key [IFEQÂ ifeq-value | IFNEÂ ifne-value | IFDEQÂ ifdeq-digest |\n  IFDNEÂ ifdne-digest]",
  "complexity": "O(1) for IFEQ/IFNE, O(N) for IFDEQ/IFDNE where N is the length of the string value.",
  "group": "string",
  "command_flags": ["write","fast"],
  "acl_categories": ["@write","@string","@fast"],
  "since": "8.4.0",
  "arity": -2,
  "key_specs": [{"RW":true,"begin_search":{"spec":{"index":1},"type":"index"},"delete":true,"find_keys":{"spec":{"keystep":1,"lastkey":0,"limit":0},"type":"range"}}],
  "tableOfContents": {"sections":[{"id":"hash-digest","title":"Hash Digest"},{"id":"options","title":"Options"},{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": []
}
```
Conditionally removes the specified key based on value or hash digest comparison.

## Hash Digest

A hash digest is a fixed-size numerical representation of a string value, computed using the XXH3 hash algorithm. Redis uses this hash digest for efficient comparison operations without needing to compare the full string content. You can retrieve a key's hash digest using the [`DIGEST`]() command, which returns it as a hexadecimal string that you can use with the `IFDEQ` and `IFDNE` options, and also the [`SET`]() command's `IFDEQ` and `IFDNE` options.

## Options

The DELEX command supports a set of options that modify its behavior.
Only one of the options can be specified.

* `IFEQ ifeq-value` -- Remove the key if the value is equal to the specified value.
* `IFNE ifne-value` -- Remove the key if the value is not equal to the specified value.
* `IFDEQ ifeq-digest` -- Remove the key if its hash digest is equal to the specified hash digest.
* `IFDNE ifne-digest` -- Remove the key if its hash digest is not equal to the specified hash digest.

In 8.4, keys must be of type string when using one of the options above. If no options are specified, the key is removed regardless of its type.

## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Not supported">&#x274c; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> | <span title="Not supported">&#x274c; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> |  |

## Return information

**RESP2:**

One of the following:
- [Integer reply](): 0 if not deleted (the key does not exist or a specified `IFEQ/IFNE/IFDEQ/IFDNE` condition is false), or 1 if deleted.
- [Simple error reply]() if the key exists but holds a value that is not a string and one of `IFEQ, IFNE, IFDEQ,` or `IFDNE` is specified.

**RESP3:**

One of the following:
- [Integer reply](): 0 if not deleted (the key does not exist or a specified `IFEQ/IFNE/IFDEQ/IFDNE` condition is false), or 1 if deleted.
- [Simple error reply]() if the key exists but holds a value that is not a string and one of `IFEQ, IFNE, IFDEQ,` or `IFDNE` is specified.


