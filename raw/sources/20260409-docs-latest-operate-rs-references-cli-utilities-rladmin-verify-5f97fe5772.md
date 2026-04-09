---
title: rladmin verify
url: https://redis.io/docs/latest/operate/rs/references/cli-utilities/rladmin/verify/
retrieved_utc: '2026-04-09T20:45:36.817576+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/references/cli-utilities/rladmin/verify/index.html.md
---

# rladmin verify

```json metadata
{
  "title": "rladmin verify",
  "description": "Prints verification reports for the cluster.",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[{"children":[{"id":"parameters","title":"Parameters"},{"id":"returns","title":"Returns"},{"id":"examples","title":"Examples"}],"id":"verify-balance","title":"verify balance"},{"children":[{"id":"parameters","title":"Parameters"},{"id":"returns","title":"Returns"},{"id":"example","title":"Example"}],"id":"verify-rackaware","title":"verify rack_aware"}]}

,
  "codeExamples": []
}
```
Prints verification reports for the cluster.

## `verify balance`

Prints a balance report that displays all of the unbalanced endpoints or nodes in the cluster.

```sh
rladmin verify balance [ node <ID> ]
```

The [proxy policy]() determines which nodes or endpoints to report as unbalanced.

A node is unbalanced if:
- `all-nodes` proxy policy and the node has no endpoint

An endpoint is unbalanced in the following cases:
- `single` proxy policy and one of the following is true:  
    - Shard placement is [`sparse`]() and none of the master shards are on the node
    - Shard placement is [`dense`]() and some master shards are on a different node from the endpoint
- `all-master-shards` proxy policy and one of the following is true:  
    - None of the master shards are on the node
    - Some master shards are on a different node from the endpoint

### Parameters

| Parameter | Type/Value | Description |
|-----------|------------|-------------|
| node | integer | Specify a node ID to return a balance table for that node only (optional) |

### Returns

Returns a table of unbalanced endpoints and nodes in the cluster.

### Examples

Verify all nodes:

```sh
$ rladmin verify balance       
The table presents all of the unbalanced endpoints/nodes in the cluster
BALANCE:
NODE:ID  DB:ID  NAME  ENDPOINT:ID  PROXY_POLICY  LOCAL SHARDS   TOTAL SHARDS
```

Verify a specific node:

```sh
$ rladmin verify balance node 1
The table presents all of the unbalanced endpoints/nodes in the cluster
BALANCE:
NODE:ID  DB:ID  NAME  ENDPOINT:ID  PROXY_POLICY  LOCAL SHARDS   TOTAL SHARDS
```

## `verify rack_aware`

Verifies that the cluster complies with the rack awareness policy and reports any discovered rack collisions, if [rack-zone awareness]() is enabled.

```sh
rladmin verify rack_aware
```

### Parameters

None

### Returns

Returns whether the cluster is rack aware. If rack awareness is enabled, it returns any rack collisions.

### Example

```sh
$ rladmin verify rack_aware

Cluster policy is not configured for rack awareness.
```
