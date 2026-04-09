---
title: XDELEX
url: https://redis.io/docs/latest/commands/xdelex/
retrieved_utc: '2026-04-09T20:45:37.738796+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/xdelex/index.html.md
---

# XDELEX

```json metadata
{
  "title": "XDELEX",
  "description": "Deletes one or multiple entries from the stream.",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"display_text":"key","key_spec_index":0,"name":"key","type":"key"},{"arguments":[{"display_text":"keepref","name":"keepref","token":"KEEPREF","type":"pure-token"},{"display_text":"delref","name":"delref","token":"DELREF","type":"pure-token"},{"display_text":"acked","name":"acked","token":"ACKED","type":"pure-token"}],"name":"condition","optional":true,"type":"oneof"},{"arguments":[{"display_text":"numids","name":"numids","type":"integer"},{"display_text":"id","multiple":true,"name":"id","type":"string"}],"name":"ids","token":"IDS","type":"block"}],
  "syntax_fmt": "XDELEX key [KEEPREF | DELREF | ACKED] IDSÂ numids id [id ...]",
  "complexity": "O(1) for each single item to delete in the stream, regardless of the stream size.",
  "group": "stream",
  "command_flags": ["write","fast"],
  "acl_categories": ["@write","@stream","@fast"],
  "since": "8.2.0",
  "arity": -5,
  "key_specs": [{"RW":true,"begin_search":{"spec":{"index":1},"type":"index"},"delete":true,"find_keys":{"spec":{"keystep":1,"lastkey":0,"limit":0},"type":"range"}}],
  "tableOfContents": {"sections":[{"id":"required-arguments","title":"Required arguments"},{"id":"optional-arguments","title":"Optional arguments"},{"id":"examples","title":"Examples"},{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": []
}
```
Deletes one or multiple entries from the stream at the specified `key`.

`XDELEX` is an extension of the Redis Streams [`XDEL`]() command that provides more control over how message entries are deleted concerning consumer groups.

## Required arguments

<details open>
<summary><code>key</code></summary>

The name of the stream key.
</details>

<details open>
<summary><code>IDS numids id [id ...]</code></summary>

The IDS block specifying which entries to delete:
- `numids`: The number of IDs that follow
- `id [id ...]`: One or more stream entry IDs to delete

Note: The IDS block can be at any position in the command, same as other commands.
</details>

## Optional arguments

<details open>
<summary><code>KEEPREF | DELREF | ACKED</code></summary>

Specifies how to handle consumer group references when deleting entries. Available since Redis 8.2. If no option is specified, `KEEPREF` is used by default:

- `KEEPREF` (default): Deletes the specified entries from the stream, but preserves existing references to these entries in all consumer groups' PEL (Pending Entries List). This behavior is similar to [`XDEL`]().
- `DELREF`: Deletes the specified entries from the stream and also removes all references to these entries from all consumer groups' pending entry lists, effectively cleaning up all traces of the messages. If an entry ID is not in the stream, but there are dangling references, `XDELEX` with `DELREF` would still remove all those references.
- `ACKED`: Only deletes entries that were read and acknowledged by all consumer groups.
</details>

The command provides fine-grained control over stream entry deletion, particularly useful when working with consumer groups where you need to manage pending entry references carefully.

## Examples


XADD mystream * field1 value1
XADD mystream * field2 value2
XADD mystream * field3 value3
XRANGE mystream - +
XDELEX mystream KEEPREF IDS 2 1526919030474-55 1526919030474-56
XRANGE mystream - +


## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |

## Return information

**RESP2:**

One of the following:

* [Array reply](): -1 for each requested ID when the given key does not exist.
* [Array reply](../../develop/reference/protocol-spec#arrays): For each ID:
    * [Integer reply](../../develop/reference/protocol-spec#integers): -1 if no such ID exists in the provided stream key.
    * [Integer reply](../../develop/reference/protocol-spec#integers): 1 if the entry was deleted from the stream.
    * [Integer reply](../../develop/reference/protocol-spec#integers): 2 if the entry was not deleted and there are still existing references (`ACKED` option); also, if there are no consumer groups.

**RESP3:**

One of the following:

* [Array reply](): -1 for each requested ID when the given key does not exist.
* [Array reply](../../develop/reference/protocol-spec#arrays): For each ID:
    * [Integer reply](../../develop/reference/protocol-spec#integers): -1 if no such ID exists in the provided stream key.
    * [Integer reply](../../develop/reference/protocol-spec#integers): 1 if the entry was deleted from the stream.
    * [Integer reply](../../develop/reference/protocol-spec#integers):  2 if the entry was not deleted and there are still existing references (`ACKED` option); also, if there are no consumer groups.


