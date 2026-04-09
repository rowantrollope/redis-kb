---
title: VINFO
url: https://redis.io/docs/latest/commands/vinfo/
retrieved_utc: '2026-04-09T20:45:36.995731+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/vinfo/index.html.md
---

# VINFO

```json metadata
{
  "title": "VINFO",
  "description": "Return information about a vector set.",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "syntax_fmt": "VINFO key",
  "complexity": "O(1)",
  "group": "vector_set",
  "since": "8.0.0",
  "tableOfContents": {"sections":[{"id":"required-arguments","title":"Required arguments"},{"id":"related-topics","title":"Related topics"},{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": []
}
```
Return metadata and internal details about a vector set, including size, dimensions, quantization type, and graph structure.

```shell
VINFO word_embeddings
1) quant-type
2) int8
3) vector-dim
4) (integer) 300
5) size
6) (integer) 3000000
7) max-level
8) (integer) 12
9) vset-uid
10) (integer) 1
11) hnsw-max-node-uid
12) (integer) 3000000
```

## Required arguments

<details open>
<summary><code>key</code></summary>

is the name of the key that holds the vector set.
</details>

## Related topics

- [Vector sets]()

## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Supported">&#x2705; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> |  |

## Return information

**RESP2:**

One of the following:
* [Array reply](../../develop/reference/protocol-spec#arrays) containing metadata and internal details about a vector set, including size, dimensions, quantization type, and graph structure.
* [Array reply](../../develop/reference/protocol-spec#arrays) (null array reply) for unknown key.

**RESP3:**

One of the following:
* [Array reply](../../develop/reference/protocol-spec#arrays) containing metadata and internal details about a vector set, including size, dimensions, quantization type, and graph structure.
* [Null reply](../../develop/reference/protocol-spec#nulls) for unknown key.


