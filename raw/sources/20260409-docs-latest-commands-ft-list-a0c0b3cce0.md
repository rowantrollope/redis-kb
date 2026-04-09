---
title: FT._LIST
url: https://redis.io/docs/latest/commands/ft._list/
retrieved_utc: '2026-04-09T20:46:04.057145+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/ft._list/index.html.md
---

# FT._LIST

```json metadata
{
  "title": "FT._LIST",
  "description": "Returns a list of all existing indexes",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "syntax_fmt": "FT._LIST",
  "complexity": "O(1)",
  "group": "search",
  "command_flags": ["readonly"],
  "acl_categories": ["@admin","@search","@slow"],
  "since": "2.0.0",
  "tableOfContents": {"sections":[{"id":"examples","title":"Examples"},{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": []
}
```Returns a list of all existing indexes.


The prefix `_` in the command indicates, this is a temporary command.

In the future, a [`SCAN`]() type of command will be added, for use when a database
contains a large number of indices.


## Examples

```sql
FT._LIST
1) "idx"
2) "movies"
3) "imdb"
```

## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis Cloud<br />Flexible & Annual | Redis Cloud<br />Free & Fixed | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:-----------------|:------|
| <span title="Supported">&#x2705; Supported</span> | <span title="Supported">&#x2705; Supported</span> | <span title="Supported">&#x2705; Supported</nobr></span> |  |

## Return information

**RESP2:**

[Array]() of index names as [simple strings]().

**RESP3:**

[Set]() of index names as [simple strings]().


