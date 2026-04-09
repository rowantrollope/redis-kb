---
title: JSON.OBJLEN
url: https://redis.io/docs/latest/commands/json.objlen/
retrieved_utc: '2026-04-09T20:46:05.109916+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/json.objlen/index.html.md
---

# JSON.OBJLEN

```json metadata
{
  "title": "JSON.OBJLEN",
  "description": "Returns the number of keys of the object at path",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"name":"key","type":"key"},{"name":"path","optional":true,"type":"string"}],
  "syntax_fmt": "JSON.OBJLEN key [path]",
  "complexity": "O(1) when path is evaluated to a single value, O(N) when path is evaluated to multiple values, where N is the size of the key",
  "group": "json",
  "acl_categories": ["@json","@read","@slow"],
  "since": "1.0.0",
  "tableOfContents": {"sections":[{"id":"required-arguments","title":"Required arguments"},{"id":"optional-arguments","title":"Optional arguments"},{"id":"examples","title":"Examples"},{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"},{"id":"see-also","title":"See also"},{"id":"related-topics","title":"Related topics"}]}

,
  "codeExamples": []
}
```Report the number of keys in the JSON object at `path` in `key`

[Examples](#examples)

## Required arguments

<details open><summary><code>key</code></summary> 

is key to parse. Returns `null` for nonexistent keys.
</details>

## Optional arguments

<details open><summary><code>path</code></summary> 

is JSONPath to specify. Default is root `$`. Returns `null` for nonexistant path.

</details>

## Examples


redis> JSON.SET doc $ '{"a":[3], "nested": {"a": {"b":2, "c": 1}}}'
OK
redis> JSON.OBJLEN doc $..a
1) (nil)
2) (integer) 2


## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Supported">&#x2705; Supported</span><br /> | <span title="Supported">&#x2705; Flexible & Annual</span><br /><span title="Supported">&#x2705; Free & Fixed</nobr></span> |  |

## Return information

**RESP2:**

With `$`-based path argument: [Array reply]() of [integer replies]() or [null replies](), where each element is the number of keys in the object, or `null` if the matching value is not an object.

With `.`-based path argument: [Integer reply]() representing the number of keys in the object, or [null reply]() if the matching value is not an object.

**RESP3:**

With `$`-based path argument (default): [Array reply]() of [integer replies]() or [null replies](), where each element is the number of keys in the object, or `null` if the matching value is not an object.

With `.`-based path argument: [Integer reply]() representing the number of keys in the object, or [null reply]() if the matching value is not an object.



## See also

[`JSON.ARRINDEX`]() | [`JSON.ARRINSERT`]() 

## Related topics

* [RedisJSON]()
* [Index and search JSON documents]()
