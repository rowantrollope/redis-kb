---
title: JSON.DEL
url: https://redis.io/docs/latest/commands/json.del/
retrieved_utc: '2026-04-09T20:46:05.016333+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/json.del/index.html.md
---

# JSON.DEL

```json metadata
{
  "title": "JSON.DEL",
  "description": "Deletes a value",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"name":"key","type":"key"},{"name":"path","optional":true,"type":"string"}],
  "syntax_fmt": "JSON.DEL key [path]",
  "complexity": "O(N) when path is evaluated to a single value where N is the size of the deleted value, O(N) when path is evaluated to multiple values, where N is the size of the key",
  "group": "json",
  "acl_categories": ["@json","@write","@slow"],
  "since": "1.0.0",
  "tableOfContents": {"sections":[{"id":"required-arguments","title":"Required arguments"},{"id":"optional-arguments","title":"Optional arguments"},{"id":"examples","title":"Examples"},{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"},{"id":"see-also","title":"See also"},{"id":"related-topics","title":"Related topics"}]}

,
  "codeExamples": []
}
```Delete a value

[Examples](#examples)

## Required arguments

<details open><summary><code>key</code></summary> 

is key to modify.
</details>

## Optional arguments

<details open><summary><code>path</code></summary> 

is JSONPath to specify. Default is root `$`. Nonexisting paths are ignored.


 
Deleting an object's root is equivalent to deleting the key from Redis.


</details>

## Examples

<details open>
<summary><b>Delete a value</b></summary>

Create a JSON document.


redis> JSON.SET doc $ '{"a": 1, "nested": {"a": 2, "b": 3}}'
OK


Delete specified values.


redis> JSON.DEL doc $..a
(integer) 2


Get the updated document.


redis> JSON.GET doc $
"[{\"nested\":{\"b\":3}}]"

</details>

## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Supported">&#x2705; Supported</span><br /> | <span title="Supported">&#x2705; Flexible & Annual</span><br /><span title="Supported">&#x2705; Free & Fixed</nobr></span> |  |

## Return information

**RESP2:**

[Integer reply](): the number of paths deleted (0 or more).

**RESP3:**

[Integer reply](): the number of paths deleted (0 or more).



## See also

[`JSON.SET`]() | [`JSON.ARRLEN`]() 

## Related topics

* [RedisJSON]()
* [Index and search JSON documents]()

