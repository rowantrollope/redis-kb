---
title: GEORADIUSBYMEMBER
url: https://redis.io/docs/latest/commands/georadiusbymember/
retrieved_utc: '2026-04-09T20:46:04.344668+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/georadiusbymember/index.html.md
---

# GEORADIUSBYMEMBER

```json metadata
{
  "title": "GEORADIUSBYMEMBER",
  "description": "Queries a geospatial index for members within a distance from a member, optionally stores the result.",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"display_text":"key","key_spec_index":0,"name":"key","type":"key"},{"display_text":"member","name":"member","type":"string"},{"display_text":"radius","name":"radius","type":"double"},{"arguments":[{"display_text":"m","name":"m","token":"M","type":"pure-token"},{"display_text":"km","name":"km","token":"KM","type":"pure-token"},{"display_text":"ft","name":"ft","token":"FT","type":"pure-token"},{"display_text":"mi","name":"mi","token":"MI","type":"pure-token"}],"name":"unit","type":"oneof"},{"display_text":"withcoord","name":"withcoord","optional":true,"token":"WITHCOORD","type":"pure-token"},{"display_text":"withdist","name":"withdist","optional":true,"token":"WITHDIST","type":"pure-token"},{"display_text":"withhash","name":"withhash","optional":true,"token":"WITHHASH","type":"pure-token"},{"arguments":[{"display_text":"count","name":"count","token":"COUNT","type":"integer"},{"display_text":"any","name":"any","optional":true,"token":"ANY","type":"pure-token"}],"name":"count-block","optional":true,"type":"block"},{"arguments":[{"display_text":"asc","name":"asc","token":"ASC","type":"pure-token"},{"display_text":"desc","name":"desc","token":"DESC","type":"pure-token"}],"name":"order","optional":true,"type":"oneof"},{"arguments":[{"display_text":"key","key_spec_index":1,"name":"storekey","token":"STORE","type":"key"},{"display_text":"key","key_spec_index":2,"name":"storedistkey","token":"STOREDIST","type":"key"}],"name":"store","optional":true,"type":"oneof"}],
  "syntax_fmt": "GEORADIUSBYMEMBER key member radius \u003cM | KM | FT | MI\u003e [WITHCOORD]\n  [WITHDIST] [WITHHASH] [COUNTÂ count [ANY]] [ASC | DESC] [STOREÂ key\n  | STOREDISTÂ key]",
  "complexity": "O(N+log(M)) where N is the number of elements inside the bounding box of the circular area delimited by center and radius and M is the number of items inside the index.",
  "group": "geo",
  "command_flags": ["write","denyoom","movablekeys"],
  "acl_categories": ["@write","@geo","@slow"],
  "since": "3.2.0",
  "arity": -5,
  "key_specs": [{"RO":true,"access":true,"begin_search":{"spec":{"index":1},"type":"index"},"find_keys":{"spec":{"keystep":1,"lastkey":0,"limit":0},"type":"range"}},{"OW":true,"begin_search":{"spec":{"keyword":"STORE","startfrom":5},"type":"keyword"},"find_keys":{"spec":{"keystep":1,"lastkey":0,"limit":0},"type":"range"},"update":true},{"OW":true,"begin_search":{"spec":{"keyword":"STOREDIST","startfrom":5},"type":"keyword"},"find_keys":{"spec":{"keystep":1,"lastkey":0,"limit":0},"type":"range"},"update":true}],
  "tableOfContents": {"sections":[{"id":"examples","title":"Examples"},{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": []
}
```
This command's behavior varies in clustered Redis environments. See the [multi-key operations]() page for more information.



This command is exactly like [`GEORADIUS`]() with the sole difference that instead
of taking, as the center of the area to query, a longitude and latitude value, it takes the name of a member already existing inside the geospatial index represented by the sorted set.

The position of the specified member is used as the center of the query.

Please check the example below and the [`GEORADIUS`]() documentation for more information about the command and its options.

Note that [`GEORADIUSBYMEMBER_RO`]() is also available since Redis 3.2.10 and Redis 4.0.0 in order to provide a read-only command that can be used in replicas. See the [`GEORADIUS`]() page for more information.

## Examples


GEOADD Sicily 13.583333 37.316667 "Agrigento"
GEOADD Sicily 13.361389 38.115556 "Palermo" 15.087269 37.502669 "Catania"
GEORADIUSBYMEMBER Sicily Agrigento 100 km


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


