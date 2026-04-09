---
title: JSON.TYPE
url: https://redis.io/docs/latest/commands/json.type/
retrieved_utc: '2026-04-09T20:46:05.163553+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/json.type/index.html.md
---

# JSON.TYPE

```json metadata
{
  "title": "JSON.TYPE",
  "description": "Returns the type of the JSON value at path",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"name":"key","type":"key"},{"name":"path","optional":true,"type":"string"}],
  "syntax_fmt": "JSON.TYPE key [path]",
  "complexity": "O(1) when path is evaluated to a single value, O(N) when path is evaluated to multiple values, where N is the size of the key",
  "group": "json",
  "acl_categories": ["@json","@read","@slow"],
  "since": "1.0.0",
  "tableOfContents": {"sections":[{"id":"required-arguments","title":"Required arguments"},{"id":"optional-arguments","title":"Optional arguments"},{"id":"examples","title":"Examples"},{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"},{"id":"see-also","title":"See also"},{"id":"related-topics","title":"Related topics"}]}

,
  "codeExamples": []
}
```Report the type of JSON value at `path`

[Examples](#examples)

## Required arguments

<details open><summary><code>key</code></summary> 

is key to parse.
</details>

## Optional arguments

<details open><summary><code>path</code></summary> 

is JSONPath to specify. Default is root `$`. Returns null if the `key` or `path` do not exist.

</details>

## Examples


redis> JSON.SET doc $ '{"a":2, "nested": {"a": true}, "foo": "bar"}'
OK
redis> JSON.TYPE doc $..foo
1) "string"
redis> JSON.TYPE doc $..a
1) "integer"
2) "boolean"
redis> JSON.TYPE doc $..dummy
(empty array)


## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Supported">&#x2705; Supported</span><br /> | <span title="Supported">&#x2705; Flexible & Annual</span><br /><span title="Supported">&#x2705; Free & Fixed</nobr></span> |  |

## Return information

**RESP2:**

With `$`-based path argument: [Array reply]() of [bulk string replies](), where each element is the type of the matching value.

With `.`-based path argument: [Bulk string reply]() representing the type of the matching value.

**RESP3:**

With `$`-based path argument (default): [Array reply]() of [array replies]() of [bulk string replies](), where each nested array contains the type of the matching value.

With `.`-based path argument: [Array reply]() of [bulk string replies]() representing the type of the matching value.



## See also

[`JSON.SET`]() | [`JSON.ARRLEN`]() 

## Related topics

* [RedisJSON]()
* [Index and search JSON documents]()
