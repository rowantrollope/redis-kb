---
title: FT.SUGGET
url: https://redis.io/docs/latest/commands/ft.sugget/
retrieved_utc: '2026-04-09T20:46:04.232759+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/ft.sugget/index.html.md
---

# FT.SUGGET

```json metadata
{
  "title": "FT.SUGGET",
  "description": "Gets completion suggestions for a prefix",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"name":"key","type":"string"},{"name":"prefix","type":"string"},{"name":"fuzzy","optional":true,"token":"FUZZY","type":"pure-token"},{"name":"withscores","optional":true,"token":"WITHSCORES","type":"pure-token"},{"name":"withpayloads","optional":true,"token":"WITHPAYLOADS","type":"pure-token"},{"name":"max","optional":true,"token":"MAX","type":"integer"}],
  "syntax_fmt": "FT.SUGGET key prefix [FUZZY] [WITHSCORES] [WITHPAYLOADS] [MAXÂ max]",
  "complexity": "O(1)",
  "group": "suggestion",
  "command_flags": ["readonly"],
  "acl_categories": ["@search"],
  "since": "1.0.0",
  "tableOfContents": {"sections":[{"id":"required-arguments","title":"Required arguments"},{"id":"optional-arguments","title":"Optional arguments"},{"id":"return","title":"Return"},{"id":"example","title":"Example"},{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"},{"id":"see-also","title":"See also"},{"id":"related-topics","title":"Related topics"}]}

,
  "codeExamples": []
}
```
Get completion suggestions for a prefix

## Required arguments

<details open>
<summary><code>key</code></summary>

is suggestion dictionary key.
</details>

<details open>
<summary><code>prefix</code></summary>

is prefix to complete on.
</details>

## Optional arguments

<details open>
<summary><code>FUZZY</code></summary> 

performs a fuzzy prefix search, including prefixes at Levenshtein distance of 1 from the prefix sent.
</details>

<details open>
<summary><code>MAX num</code></summary> 

limits the results to a maximum of `num` (default: 5).
</details>

<details open>
<summary><code>WITHSCORES</code></summary> 

also returns the score of each suggestion. This can be used to merge results from multiple instances.
</details>

<details open>
<summary><code>WITHPAYLOADS</code></summary> 

returns optional payloads saved along with the suggestions. If no payload is present for an entry, it returns a null reply.
</details>

## Return

FT.SUGGET returns an array reply, which is a list of the top suggestions matching the prefix, optionally with score after each entry.

## Example

<details open>
<summary><b>Get completion suggestions for a prefix</b></summary>


127.0.0.1:6379> FT.SUGGET sug hell FUZZY MAX 3 WITHSCORES
1) "hell"
2) "2147483648"
3) "hello"
4) "0.70710676908493042"

</details>

## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Supported">&#x2705; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> | <span title="Not supported">&#x274c; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> | Not supported on clustered databases. |

## Return information

**RESP2:**

[Array]() of the top suggestions matching the prefix, optionally with a score after each entry.

**RESP3:**

[Array]() of the top suggestions matching the prefix, optionally with a score after each entry.



## See also

[`FT.SUGADD`]() | [`FT.SUGDEL`]() | [`FT.SUGLEN`]() 

## Related topics

[RediSearch]()
