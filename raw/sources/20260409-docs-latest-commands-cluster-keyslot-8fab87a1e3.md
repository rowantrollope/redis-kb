---
title: CLUSTER KEYSLOT
url: https://redis.io/docs/latest/commands/cluster-keyslot/
retrieved_utc: '2026-04-09T20:46:02.929041+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/cluster-keyslot/index.html.md
---

# CLUSTER KEYSLOT

```json metadata
{
  "title": "CLUSTER KEYSLOT",
  "description": "Returns the hash slot for a key.",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"display_text":"key","name":"key","type":"string"}],
  "syntax_fmt": "CLUSTER KEYSLOT key",
  "complexity": "O(N) where N is the number of bytes in the key",
  "group": "cluster",
  "command_flags": ["stale"],
  "acl_categories": ["@slow"],
  "since": "3.0.0",
  "arity": 3,
  "tableOfContents": {"sections":[{"id":"example","title":"Example"},{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": []
}
```Returns an integer identifying the hash slot the specified key hashes to.
This command is mainly useful for debugging and testing, since it exposes
via an API the underlying Redis implementation of the hashing algorithm.
Example use cases for this command:

1. Client libraries may use Redis in order to test their own hashing algorithm, generating random keys and hashing them with both their local implementation and using Redis `CLUSTER KEYSLOT` command, then checking if the result is the same.
2. Humans may use this command in order to check what is the hash slot, and then the associated Redis Cluster node, responsible for a given key.

## Example

```
> CLUSTER KEYSLOT somekey
(integer) 11058
> CLUSTER KEYSLOT foo{hash_tag}
(integer) 2515
> CLUSTER KEYSLOT bar{hash_tag}
(integer) 2515
```

Note that the command implements the full hashing algorithm, including support for **hash tags**, that is the special property of Redis Cluster key hashing algorithm, of hashing just what is between `{` and `}` if such a pattern is found inside the key name, in order to force multiple keys to be handled by the same node.

## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | Only supported with the [OSS cluster API](). |

## Return information

**RESP2:**

[Integer reply](../../develop/reference/protocol-spec#integers): The hash slot number for the specified key

**RESP3:**

[Integer reply](../../develop/reference/protocol-spec#integers): The hash slot number for the specified key


