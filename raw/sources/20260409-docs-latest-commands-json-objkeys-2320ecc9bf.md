---
title: JSON.OBJKEYS
url: https://redis.io/docs/latest/commands/json.objkeys/
retrieved_utc: '2026-04-09T20:46:05.109609+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/json.objkeys/index.html.md
---

# JSON.OBJKEYS

```json metadata
{
  "title": "JSON.OBJKEYS",
  "description": "Returns the key names of JSON objects located at the paths that match a given path expression",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"name":"key","type":"key"},{"name":"path","optional":true,"type":"string"}],
  "syntax_fmt": "JSON.OBJKEYS key [path]",
  "complexity": "O(N) when path is evaluated to a single value, where N is the number of keys in the object, O(N) when path is evaluated to multiple values, where N is the size of the key",
  "group": "json",
  "acl_categories": ["@json","@read","@slow"],
  "since": "1.0.0",
  "tableOfContents": {"sections":[{"id":"required-arguments","title":"Required arguments"},{"id":"optional-arguments","title":"Optional arguments"},{"id":"examples","title":"Examples"},{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"},{"id":"see-also","title":"See also"},{"id":"related-topics","title":"Related topics"}]}

,
  "codeExamples": []
}
```Returns the key names of JSON objects located at the paths that match a given path expression.


A JSON object is a structure within a JSON document that contains an unordered set of key-value pairs (also called name-value pairs). Do not confuse Redis keys with JSON object keys.


[Examples](#examples)

## Required arguments

<details open><summary><code>key</code></summary> 

is a Redis key storing a value of type JSON.

</details>

## Optional arguments

<details open><summary><code>path</code></summary> 

is either 

- A JSONPath expression
  - The root "`$`", or any string that starts with "`$.`" or "`$[`".
  - Resolves to all matching locations in `key`.
- A legacy path expression 
  - Any string that does not match the JSONPath syntax above.
  - Allow the leading "`.`" to be omitted (for example, "`name`" and "`.name`" are equivalent).
  - Resolves to only the first matching location in `key`.

Default: "`.`" (legacy path pointing to the root of the document).

</details>

## Examples


redis> JSON.SET doc $ '{"a":[3], "nested": {"a": {"b":2, "c": 1}}}'
OK
redis> JSON.OBJKEYS doc $..a
1) (nil)
2) 1) "b"
   2) "c"


## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Supported">&#x2705; Supported</span><br /> | <span title="Supported">&#x2705; Flexible & Annual</span><br /><span title="Supported">&#x2705; Free & Fixed</nobr></span> |  |

## Return information

**RESP2:**

If `path` is a JSONPath expression:

- A [simple error]() if `key` does not exist.
- An empty [array reply]() if `path` has no matches.
- An [array reply]() where each array element corresponds to one match:
  - [`nil`]() if the match is not an object.
  - An [array reply]() of [bulk string replies]() containing the object's key names if the match is an object.

If `path` is a legacy path expression:

- [`nil`]() if `key` does not exist.
- [`nil`]() if `path` has no matches.
- A [simple error]() if the first match is not an object.
- An [array reply]() of [bulk string replies]() containing the object's key names of the first match.

**RESP3:**

If `path` is a JSONpath expression:

- A [simple error]() if `key` does not exist.
- An empty [array reply]() if `path` has no matches.
- An [array reply]() where each array element corresponds to one match:
  - [`nil`]() if the match is not an object.
  - An [array reply]() of [bulk string replies]() containing the object's key names if the match is an object.

If `path` is a legacy path expression:

- [`nil`]() if `key` does not exist.
- [`nil`]() if `path` has no matches.
- A [simple error]() if the first match is not an object.
- An [array reply]() of [bulk string replies]() containing the object's key names of the first match.



## See also

[`JSON.OBJLEN`]()

## Related topics

* [The JSON data type]()
* [JSONPath]()
* [Index and search JSON documents]()
