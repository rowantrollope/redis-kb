---
title: JSON.TOGGLE
url: https://redis.io/docs/latest/commands/json.toggle/
retrieved_utc: '2026-04-09T20:46:05.163315+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/json.toggle/index.html.md
---

# JSON.TOGGLE

```json metadata
{
  "title": "JSON.TOGGLE",
  "description": "Toggles a boolean value",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"name":"key","type":"key"},{"name":"path","type":"string"}],
  "syntax_fmt": "JSON.TOGGLE key path",
  "complexity": "O(1) when path is evaluated to a single value, O(N) when path is evaluated to multiple values, where N is the size of the key",
  "group": "json",
  "acl_categories": ["@json","@write","@slow"],
  "since": "2.0.0",
  "tableOfContents": {"sections":[{"id":"required-arguments","title":"Required arguments"},{"id":"optional-arguments","title":"Optional arguments"},{"id":"examples","title":"Examples"},{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"},{"id":"see-also","title":"See also"},{"id":"related-topics","title":"Related topics"}]}

,
  "codeExamples": []
}
```Toggle a Boolean value stored at `path`

[Examples](#examples)

## Required arguments

<details open><summary><code>key</code></summary> 

is key to modify.
</details>

## Optional arguments

<details open><summary><code>path</code></summary> 

is JSONPath to specify. Default is root `$`. 

</details>

## Examples

<details open>
<summary><b>Toggle a Boolean value stored at <code>path</code></b></summary>

Create a JSON document.


redis> JSON.SET doc $ '{"bool": true}'
OK


Toggle the Boolean value.


redis> JSON.TOGGLE doc $.bool
1) (integer) 0


Get the updated document.


redis> JSON.GET doc $
"[{\"bool\":false}]"


Toggle the Boolean value.


redis> JSON.TOGGLE doc $.bool
1) (integer) 1


Get the updated document.


redis> JSON.GET doc $
"[{\"bool\":true}]"

</details>

## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Supported">&#x2705; Supported</span><br /> | <span title="Supported">&#x2705; Flexible & Annual</span><br /><span title="Supported">&#x2705; Free & Fixed</nobr></span> |  |

## Return information

**RESP2:**

With `$`-based path argument: [Array reply]() of [integer replies]() or [null replies](), where each element is the new value (`0` if `false` or `1` if `true`), or `null` if the matching value is not Boolean.

With `.`-based path argument: [Integer reply]() representing the new value (`0` if `false` or `1` if `true`), or [null reply]() if the matching value is not Boolean.

**RESP3:**

With `$`-based path argument (default): [Array reply]() of [integer replies]() or [null replies](), where each element is the new value (`0` if `false` or `1` if `true`), or `null` if the matching value is not Boolean.

With `.`-based path argument: [Integer reply]() representing the new value (`0` if `false` or `1` if `true`), or [null reply]() if the matching value is not Boolean.



## See also

[`JSON.SET`]() | [`JSON.GET`]() 

## Related topics

* [RedisJSON]()
* [Index and search JSON documents]()

