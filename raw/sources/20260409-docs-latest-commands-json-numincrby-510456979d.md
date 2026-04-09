---
title: JSON.NUMINCRBY
url: https://redis.io/docs/latest/commands/json.numincrby/
retrieved_utc: '2026-04-09T20:46:05.064178+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/json.numincrby/index.html.md
---

# JSON.NUMINCRBY

```json metadata
{
  "title": "JSON.NUMINCRBY",
  "description": "Increments the numeric value at path by a value",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"name":"key","type":"key"},{"name":"path","type":"string"},{"name":"value","type":"double"}],
  "syntax_fmt": "JSON.NUMINCRBY key path value",
  "complexity": "O(1) when path is evaluated to a single value, O(N) when path is evaluated to multiple values, where N is the size of the key",
  "group": "json",
  "acl_categories": ["@json","@write","@slow"],
  "since": "1.0.0",
  "tableOfContents": {"sections":[{"id":"required-arguments","title":"Required arguments"},{"id":"examples","title":"Examples"},{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"},{"id":"see-also","title":"See also"},{"id":"related-topics","title":"Related topics"}]}

,
  "codeExamples": []
}
```Increment the number value stored at `path` by `number`

[Examples](#examples)

## Required arguments

<details open><summary><code>key</code></summary> 

is key to modify.
</details>

<details open><summary><code>path</code></summary> 

is JSONPath to specify.
</details>

<details open><summary><code>value</code></summary> 

is number value to increment. 
</details>

## Examples

<details open>
<summary><b>Increment number values</b></summary>

Create a document.


redis> JSON.SET doc . '{"a":"b","b":[{"a":2}, {"a":5}, {"a":"c"}]}'
OK


Increment a value of `a` object by 2. The command fails to find a number and returns `null`.


redis> JSON.NUMINCRBY doc $.a 2
"[null]"


Recursively find and increment a value of all `a` objects. The command increments numbers it finds and returns `null` for nonnumber values.


redis> JSON.NUMINCRBY doc $..a 2
"[null,4,7,null]"


</details>

## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Supported">&#x2705; Supported</span><br /> | <span title="Supported">&#x2705; Flexible & Annual</span><br /><span title="Supported">&#x2705; Free & Fixed</nobr></span> |  |

## Return information

**RESP2:**

With `$`-based path argument: [Bulk string reply]() containing a JSON-encoded string with the new value(s), or [null reply]() if the matching value is not a number.

With `.`-based path argument: [Bulk string reply]() representing the stringified new value, [null reply]() if the matching value is not a number, or [simple error reply]() on error.

**RESP3:**

With `$`-based path argument (default): [Array reply]() of [integer replies]() or [null replies](), where each element is the new value, or `null` if the matching value is not a number, or [simple error reply]() on error.

With `.`-based path argument: [Bulk string reply]() representing the stringified new value, [null reply]() if the matching value is not a number, or [simple error reply]() on error.



## See also

[`JSON.ARRINDEX`]() | [`JSON.ARRINSERT`]() 

## Related topics

* [RedisJSON]()
* [Index and search JSON documents]()
