---
title: LMPOP
url: https://redis.io/docs/latest/commands/lmpop/
retrieved_utc: '2026-04-09T20:46:05.446318+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/lmpop/index.html.md
---

# LMPOP

```json metadata
{
  "title": "LMPOP",
  "description": "Returns multiple elements from a list after removing them. Deletes the list if the last element was popped.",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"display_text":"numkeys","name":"numkeys","type":"integer"},{"display_text":"key","key_spec_index":0,"multiple":true,"name":"key","type":"key"},{"arguments":[{"display_text":"left","name":"left","token":"LEFT","type":"pure-token"},{"display_text":"right","name":"right","token":"RIGHT","type":"pure-token"}],"name":"where","type":"oneof"},{"display_text":"count","name":"count","optional":true,"token":"COUNT","type":"integer"}],
  "syntax_fmt": "LMPOP numkeys key [key ...] \u003cLEFT | RIGHT\u003e [COUNTÂ count]",
  "complexity": "O(N+M) where N is the number of provided keys and M is the number of elements returned.",
  "group": "list",
  "command_flags": ["write","movablekeys"],
  "acl_categories": ["@write","@list","@slow"],
  "since": "7.0.0",
  "arity": -4,
  "key_specs": [{"RW":true,"access":true,"begin_search":{"spec":{"index":1},"type":"index"},"delete":true,"find_keys":{"spec":{"firstkey":1,"keynumidx":0,"keystep":1},"type":"keynum"}}],
  "tableOfContents": {"sections":[{"id":"examples","title":"Examples"},{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": []
}
```
This command's behavior varies in clustered Redis environments. See the [multi-key operations]() page for more information.



Pops one or more elements from the first non-empty list key from the list of provided key names.

`LMPOP` and [`BLMPOP`]() are similar to the following, more limited, commands:

- [`LPOP`]() or [`RPOP`]() which take only one key, and can return multiple elements.
- [`BLPOP`]() or [`BRPOP`]() which take multiple keys, but return only one element from just one key.

See [`BLMPOP`]() for the blocking variant of this command.

Elements are popped from either the left or right of the first non-empty list based on the passed argument.
The number of returned elements is limited to the lower between the non-empty list's length, and the count argument (which defaults to 1).

## Examples


LMPOP 2 non1 non2 LEFT COUNT 10
LPUSH mylist "one" "two" "three" "four" "five"
LMPOP 1 mylist LEFT
LRANGE mylist 0 -1
LMPOP 1 mylist RIGHT COUNT 10
LPUSH mylist "one" "two" "three" "four" "five"
LPUSH mylist2 "a" "b" "c" "d" "e"
LMPOP 2 mylist mylist2 right count 3
LRANGE mylist 0 -1
LMPOP 2 mylist mylist2 right count 5
LMPOP 2 mylist mylist2 right count 10
EXISTS mylist mylist2


## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |

## Return information

**RESP2:**

One of the following:
* [Nil reply](../../develop/reference/protocol-spec#bulk-strings): if no element could be popped.
* [Array reply](../../develop/reference/protocol-spec#arrays): a two-element array with the first element being the name of the key from which elements were popped and the second element being an array of elements.

**RESP3:**

One of the following:
* [Null reply](../../develop/reference/protocol-spec#nulls): if no element could be popped.
* [Array reply](../../develop/reference/protocol-spec#arrays): a two-element array with the first element being the name of the key from which elements were popped and the second element being an array of elements.


