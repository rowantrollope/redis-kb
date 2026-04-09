---
title: GEORADIUS_RO
url: https://redis.io/docs/latest/commands/georadius_ro/
retrieved_utc: '2026-04-09T20:46:04.352863+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/georadius_ro/index.html.md
---

# GEORADIUS_RO

```json metadata
{
  "title": "GEORADIUS_RO",
  "description": "Returns members from a geospatial index that are within a distance from a coordinate.",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"display_text":"key","key_spec_index":0,"name":"key","type":"key"},{"display_text":"longitude","name":"longitude","type":"double"},{"display_text":"latitude","name":"latitude","type":"double"},{"display_text":"radius","name":"radius","type":"double"},{"arguments":[{"display_text":"m","name":"m","token":"M","type":"pure-token"},{"display_text":"km","name":"km","token":"KM","type":"pure-token"},{"display_text":"ft","name":"ft","token":"FT","type":"pure-token"},{"display_text":"mi","name":"mi","token":"MI","type":"pure-token"}],"name":"unit","type":"oneof"},{"display_text":"withcoord","name":"withcoord","optional":true,"token":"WITHCOORD","type":"pure-token"},{"display_text":"withdist","name":"withdist","optional":true,"token":"WITHDIST","type":"pure-token"},{"display_text":"withhash","name":"withhash","optional":true,"token":"WITHHASH","type":"pure-token"},{"arguments":[{"display_text":"count","name":"count","token":"COUNT","type":"integer"},{"display_text":"any","name":"any","optional":true,"since":"6.2.0","token":"ANY","type":"pure-token"}],"name":"count-block","optional":true,"type":"block"},{"arguments":[{"display_text":"asc","name":"asc","token":"ASC","type":"pure-token"},{"display_text":"desc","name":"desc","token":"DESC","type":"pure-token"}],"name":"order","optional":true,"type":"oneof"}],
  "syntax_fmt": "GEORADIUS_RO key longitude latitude radius \u003cM | KM | FT | MI\u003e\n  [WITHCOORD] [WITHDIST] [WITHHASH] [COUNTÂ count [ANY]] [ASC | DESC]",
  "complexity": "O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.",
  "group": "geo",
  "command_flags": ["readonly"],
  "acl_categories": ["@read","@geo","@slow"],
  "since": "3.2.10",
  "arity": -6,
  "key_specs": [{"RO":true,"access":true,"begin_search":{"spec":{"index":1},"type":"index"},"find_keys":{"spec":{"keystep":1,"lastkey":0,"limit":0},"type":"range"}}],
  "tableOfContents": {"sections":[{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": []
}
```Read-only variant of the [`GEORADIUS`]() command.

This command is identical to the [`GEORADIUS`]() command, except that it doesn't support the optional `STORE` and `STOREDIST` parameters.

## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | Deprecated as of Redis v6.2.0. |

## Return information

**RESP2:**

One of the following:
* If no `WITH*` option is specified, an [Array reply](../../develop/reference/protocol-spec#arrays) of matched member names
* If `WITHCOORD`, `WITHDIST`, or `WITHHASH` options are specified, the command returns an [Array reply](../../develop/reference/protocol-spec#arrays) of arrays, where each sub-array represents a single item:
    * The distance from the center as a floating point number, in the same unit specified in the radius.
    * The Geohash integer.
    * The coordinates as a two items x,y array (longitude,latitude).

**RESP3:**

One of the following:
* If no `WITH*` option is specified, an [Array reply](../../develop/reference/protocol-spec#arrays) of matched member names
* If `WITHCOORD`, `WITHDIST`, or `WITHHASH` options are specified, the command returns an [Array reply](../../develop/reference/protocol-spec#arrays) of arrays, where each sub-array represents a single item:
    * The distance from the center as a floating point number, in the same unit specified in the radius.
    * The Geohash integer.
    * The coordinates as a two items x,y array (longitude,latitude).


