---
title: JSON.STRAPPEND
url: https://redis.io/docs/latest/commands/json.strappend/
retrieved_utc: '2026-04-09T20:46:05.143414+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/json.strappend/index.html.md
---

# JSON.STRAPPEND

```json metadata
{
  "title": "JSON.STRAPPEND",
  "description": "Appends a string to a JSON string value at path",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"name":"key","type":"key"},{"name":"path","optional":true,"type":"string"},{"name":"value","type":"string"}],
  "syntax_fmt": "JSON.STRAPPEND key [path] value",
  "complexity": "O(1) when path is evaluated to a single value, O(N) when path is evaluated to multiple values, where N is the size of the key",
  "group": "json",
  "acl_categories": ["@json","@write","@slow"],
  "since": "1.0.0",
  "tableOfContents": {"sections":[{"id":"required-arguments","title":"Required arguments"},{"id":"optional-arguments","title":"Optional arguments"},{"id":"examples","title":"Examples"},{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"},{"id":"see-also","title":"See also"},{"id":"related-topics","title":"Related topics"}]}

,
  "codeExamples": []
}
```Append the `json-string` values to the string at `path`

[Examples](#examples)

## Required arguments

<details open><summary><code>key</code></summary> 

is key to modify.
</details>

<details open><summary><code>value</code></summary> 

is value to append to one or more strings. 


To specify a string as an array value to append, wrap the quoted string with an additional set of single quotes. Example: `'"silver"'`. For more detailed use, see [Examples](#examples).

</details>

## Optional arguments

<details open><summary><code>path</code></summary> 

is JSONPath to specify. Default is root `$`.
</details>

## Examples


redis> JSON.SET doc $ '{"a":"foo", "nested": {"a": "hello"}, "nested2": {"a": 31}}'
OK
redis> JSON.STRAPPEND doc $..a '"baz"'
1) (integer) 6
2) (integer) 8
3) (nil)
redis> JSON.GET doc $
"[{\"a\":\"foobaz\",\"nested\":{\"a\":\"hellobaz\"},\"nested2\":{\"a\":31}}]"


## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Supported">&#x2705; Supported</span><br /> | <span title="Supported">&#x2705; Flexible & Annual</span><br /><span title="Supported">&#x2705; Free & Fixed</nobr></span> |  |

## Return information

**RESP2:**

With `$`-based path argument: [Array reply]() of [integer replies]() or [null replies](), where each element is the string's new length, or `null` if the matching value is not a string.

With `.`-based path argument: [Integer reply]() representing the string's new length, or [null reply]() if the matching value is not a string.

**RESP3:**

With `$`-based path argument (default): [Array reply]() of [integer replies]() or [null replies](), where each element is the string's new length, or `null` if the matching value is not a string.

With `.`-based path argument: [Integer reply]() representing the string's new length, or [null reply]() if the matching value is not a string.



## See also

`JSON.ARRAPEND` | [`JSON.ARRINSERT`]() 

## Related topics

* [RedisJSON]()
* [Index and search JSON documents]()

