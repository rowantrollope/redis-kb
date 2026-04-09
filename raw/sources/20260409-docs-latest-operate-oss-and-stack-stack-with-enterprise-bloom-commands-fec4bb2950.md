---
title: Probabilistic data structure commands
url: https://redis.io/docs/latest/operate/oss_and_stack/stack-with-enterprise/bloom/commands/
retrieved_utc: '2026-04-09T20:45:55.964257+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/oss_and_stack/stack-with-enterprise/bloom/commands/index.html.md
---

# Probabilistic data structure commands

```json metadata
{
  "title": "Probabilistic data structure commands",
  "description": "Lists probabilistic data structure commands and provides links to the command reference pages.",
  "categories": ["docs","operate","stack"],
  "tableOfContents": {"sections":[{"id":"bloom-filter-commands","title":"Bloom filter commands"},{"id":"cuckoo-filter-commands","title":"Cuckoo filter commands"},{"id":"count-min-sketch-commands","title":"Count-min sketch commands"},{"id":"top-k-commands","title":"Top-k commands"},{"id":"t-digest-sketch-commands","title":"T-digest sketch commands"}]}

,
  "codeExamples": []
}
```
The following tables list probabilistic data structure commands. See the command links for more information about each command's syntax, arguments, and examples.

## Bloom filter commands

| Command | Redis<br />Software | Redis<br />Cloud | Description |
|:--------|:----------------------|:-----------------|:------|
| [BF.ADD]() | <span title="Supported">&#x2705; Supported</span><br /><span><br /></span> | <span title="Supported"><nobr>&#x2705; Flexible & Annual</nobr></span><br /><span title="Supported">&#x2705; Free & Fixed</nobr></span> | Adds an item to the filter. |
| [BF.EXISTS]() | <span title="Supported">&#x2705; Supported</span><br /><span><br /></span> | <span title="Supported">&#x2705; Flexible & Annual</span><br /><span title="Supported">&#x2705; Free & Fixed</nobr></span> | Checks if an item exists in the filter. |
| [BF.INFO]() | <span title="Supported">&#x2705; Supported</span><br /><span><br /></span> | <span title="Supported">&#x2705; Flexible & Annual</span><br /><span title="Supported">&#x2705; Free & Fixed</nobr></span> | Returns information about a Bloom filter. |
| [BF.INSERT]() | <span title="Supported">&#x2705; Supported</span><br /><span><br /></span> | <span title="Supported">&#x2705; Flexible & Annual</span><br /><span title="Supported">&#x2705; Free & Fixed</nobr></span> | Adds multiple items to a filter. If the key does not exist, it creates a new filter. |
| [BF.LOADCHUNK]() | <span title="Supported">&#x2705; Supported</span><br /><span><br /></span> | <span title="Supported">&#x2705; Flexible & Annual</span><br /><span title="Supported">&#x2705; Free & Fixed</nobr></span> | Restores a Bloom filter previously saved with [BF.SCANDUMP](). |
| [BF.MADD]() | <span title="Supported">&#x2705; Supported</span><br /><span><br /></span> | <span title="Supported">&#x2705; Flexible & Annual</span><br /><span title="Supported">&#x2705; Free & Fixed</nobr></span> | Adds multiple items to the filter. |
| [BF.MEXISTS]() | <span title="Supported">&#x2705; Supported</span><br /><span><br /></span> | <span title="Supported">&#x2705; Flexible & Annual</span><br /><span title="Supported">&#x2705; Free & Fixed</nobr></span> | For multiple items, checks if each item exists in the filter. |
| [BF.RESERVE]() | <span title="Supported">&#x2705; Supported</span><br /><span><br /></span> | <span title="Supported">&#x2705; Flexible & Annual</span><br /><span title="Supported">&#x2705; Free & Fixed</nobr></span> | Creates a Bloom filter. Sets the false positive rate and capacity. |
| [BF.SCANDUMP]() | <span title="Supported">&#x2705; Supported</span><br /><span><br /></span> | <span title="Supported">&#x2705; Flexible & Annual</span><br /><span title="Supported">&#x2705; Free & Fixed</nobr></span> | Starts an incremental save of a Bloom filter. |

## Cuckoo filter commands

| Command | Redis<br />Software | Redis<br />Cloud | Description |
|:--------|:----------------------|:-----------------|:------|
| [CF.ADD]() | <span title="Supported">&#x2705; Supported</span><br /><span><br /></span> | <span title="Supported"><nobr>&#x2705; Flexible & Annual</nobr></span><br /><span title="Supported">&#x2705; Free & Fixed</nobr></span> | Adds an item to a filter. |
| [CF.ADDNX]() | <span title="Supported">&#x2705; Supported</span><br /><span><br /></span> | <span title="Supported">&#x2705; Flexible & Annual</span><br /><span title="Supported">&#x2705; Free & Fixed</nobr></span> | Adds an item to a filter only if the item does not already exist. |
| [CF.COUNT]() | <span title="Supported">&#x2705; Supported</span><br /><span><br /></span> | <span title="Supported">&#x2705; Flexible & Annual</span><br /><span title="Supported">&#x2705; Free & Fixed</nobr></span> | Returns the probable number of times an item occurs in the filter. |
| [CF.DEL]() | <span title="Supported">&#x2705; Supported</span><br /><span><br /></span> | <span title="Supported">&#x2705; Flexible & Annual</span><br /><span title="Supported">&#x2705; Free & Fixed</nobr></span> | Removes one instance of an item from the filter. |
| [CF.EXISTS]() | <span title="Supported">&#x2705; Supported</span><br /><span><br /></span> | <span title="Supported">&#x2705; Flexible & Annual</span><br /><span title="Supported">&#x2705; Free & Fixed</nobr></span> | Checks if an item exists in the filter. |
| [CF.INFO]() | <span title="Supported">&#x2705; Supported</span><br /><span><br /></span> | <span title="Supported">&#x2705; Flexible & Annual</span><br /><span title="Supported">&#x2705; Free & Fixed</nobr></span> | Returns information about a cuckoo filter. |
| [CF.INSERT]() | <span title="Supported">&#x2705; Supported</span><br /><span><br /></span> | <span title="Supported">&#x2705; Flexible & Annual</span><br /><span title="Supported">&#x2705; Free & Fixed</nobr></span> | Adds multiple items to a filter. Optionally sets the capacity if the filter does not already exist. |
| [CF.INSERTNX]() | <span title="Supported">&#x2705; Supported</span><br /><span><br /></span> | <span title="Supported">&#x2705; Flexible & Annual</span><br /><span title="Supported">&#x2705; Free & Fixed</nobr></span> | Adds multiple items to a filter if they do not already exist. Optionally sets the capacity if the filter does not already exist. |
| [CF.LOADCHUNK]() | <span title="Supported">&#x2705; Supported</span><br /><span><br /></span> | <span title="Supported">&#x2705; Flexible & Annual</span><br /><span title="Supported">&#x2705; Free & Fixed</nobr></span> | Restores a cuckoo filter previously saved with [CF.SCANDUMP](). |
| [CF.MEXISTS]() | <span title="Supported">&#x2705; Supported</span><br /><span><br /></span> | <span title="Supported">&#x2705; Flexible & Annual</span><br /><span title="Supported">&#x2705; Free & Fixed</nobr></span> | For multiple items, checks if each item exists in the filter. |
| [CF.RESERVE]() | <span title="Supported">&#x2705; Supported</span><br /><span><br /></span> | <span title="Supported">&#x2705; Flexible & Annual</span><br /><span title="Supported">&#x2705; Free & Fixed</nobr></span> | Creates a cuckoo filter and sets its capacity. |
| [CF.SCANDUMP]() | <span title="Supported">&#x2705; Supported</span><br /><span><br /></span> | <span title="Supported">&#x2705; Flexible & Annual</span><br /><span title="Supported">&#x2705; Free & Fixed</nobr></span> | Starts an incremental save of a cuckoo filter. |

## Count-min sketch commands

| Command | Redis<br />Software | Redis<br />Cloud | Description |
|:--------|:----------------------|:-----------------|:------|
| [CMS.INCRBY]() | <span title="Supported">&#x2705; Supported</span><br /><span><br /></span> | <span title="Supported"><nobr>&#x2705; Flexible & Annual</nobr></span><br /><span title="Supported">&#x2705; Free & Fixed</nobr></span> | Increases item counts. |
| [CMS.INFO]() | <span title="Supported">&#x2705; Supported</span><br /><span><br /></span> | <span title="Supported">&#x2705; Flexible & Annual</span><br /><span title="Supported">&#x2705; Free & Fixed</nobr></span> | Returns width, depth, and total count of the sketch. |
| [CMS.INITBYDIM]() | <span title="Supported">&#x2705; Supported</span><br /><span><br /></span> | <span title="Supported">&#x2705; Flexible & Annual</span><br /><span title="Supported">&#x2705; Free & Fixed</nobr></span> | Initializes a count-min sketch to the specified dimensions (width and depth). |
| [CMS.INITBYPROB]() | <span title="Supported">&#x2705; Supported</span><br /><span><br /></span> | <span title="Supported">&#x2705; Flexible & Annual</span><br /><span title="Supported">&#x2705; Free & Fixed</nobr></span> | Initializes a count-min sketch to allow the specified overestimation percent for the item count and the probability of overestimation. |
| [CMS.MERGE]() | <span title="Supported">&#x2705; Supported</span><br /><span><br /></span> | <span title="Supported">&#x2705; Flexible & Annual</span><br /><span title="Supported">&#x2705; Free & Fixed</nobr></span> | Merges several sketches into one sketch. |
| [CMS.QUERY]() | <span title="Supported">&#x2705; Supported</span><br /><span><br /></span> | <span title="Supported">&#x2705; Flexible & Annual</span><br /><span title="Supported">&#x2705; Free & Fixed</nobr></span> | Returns the count for one or more items in a sketch. |

## Top-k commands

| Command | Redis<br />Software | Redis<br />Cloud | Description |
|:--------|:----------------------|:-----------------|:------|
| [TOPK.ADD]() | <span title="Supported">&#x2705; Supported</span><br /><span><br /></span> | <span title="Supported"><nobr>&#x2705; Flexible & Annual</nobr></span><br /><span title="Supported">&#x2705; Free & Fixed</nobr></span> | Adds an item to the data structure. |
| [TOPK.COUNT]() | <span title="Supported">&#x2705; Supported</span><br /><span><br /></span> | <span title="Supported">&#x2705; Flexible & Annual</span><br /><span title="Supported">&#x2705; Free & Fixed</nobr></span> | Returns probable item counts. |
| [TOPK.INCRBY]() | <span title="Supported">&#x2705; Supported</span><br /><span><br /></span> | <span title="Supported">&#x2705; Flexible & Annual</span><br /><span title="Supported">&#x2705; Free & Fixed</nobr></span> | Increases the score of an item by the specified number. |
| [TOPK.INFO]() | <span title="Supported">&#x2705; Supported</span><br /><span><br /></span> | <span title="Supported">&#x2705; Flexible & Annual</span><br /><span title="Supported">&#x2705; Free & Fixed</nobr></span> | Returns the number of required items (k), width, depth, and decay values. |
| [TOPK.LIST]() | <span title="Supported">&#x2705; Supported</span><br /><span><br /></span> | <span title="Supported">&#x2705; Flexible & Annual</span><br /><span title="Supported">&#x2705; Free & Fixed</nobr></span> | Returns the keys of items in the top-k list. Optionally returns their item counts. |
| [TOPK.QUERY]() | <span title="Supported">&#x2705; Supported</span><br /><span><br /></span> | <span title="Supported">&#x2705; Flexible & Annual</span><br /><span title="Supported">&#x2705; Free & Fixed</nobr></span> | Checks whether an item is one of top-k items. |
| [TOPK.RESERVE]() | <span title="Supported">&#x2705; Supported</span><br /><span><br /></span> | <span title="Supported">&#x2705; Flexible & Annual</span><br /><span title="Supported">&#x2705; Free & Fixed</nobr></span> | Initializes a top-k with the specified number of top occurring items to keep, width, depth, and decay. |

## T-digest sketch commands

| Command | Redis<br />Software | Redis<br />Cloud | Description |
|:--------|:----------------------|:-----------------|:------|
| [TDIGEST.ADD]() | <span title="Supported">&#x2705; Supported</span><br /><span><br /></span> | <span title="Supported"><nobr>&#x2705; Flexible & Annual</nobr></span><br /><span title="Supported">&#x2705; Free & Fixed</nobr></span> | Adds one or more samples to a t-digest sketch. |
| [TDIGEST.CDF]() | <span title="Supported">&#x2705; Supported</span><br /><span><br /></span> | <span title="Supported">&#x2705; Flexible & Annual</span><br /><span title="Supported">&#x2705; Free & Fixed</nobr></span> | Estimates the fraction of all observations which are less than or equal to the specified value. |
| [TDIGEST.CREATE]() | <span title="Supported">&#x2705; Supported</span><br /><span><br /></span> | <span title="Supported">&#x2705; Flexible & Annual</span><br /><span title="Supported">&#x2705; Free & Fixed</nobr></span> | Allocates memory and initializes a t-digest sketch. |
| [TDIGEST.INFO]() | <span title="Supported">&#x2705; Supported</span><br /><span><br /></span> | <span title="Supported">&#x2705; Flexible & Annual</span><br /><span title="Supported">&#x2705; Free & Fixed</nobr></span> | Returns information about the t-digest sketch. |
| [TDIGEST.MAX]() | <span title="Supported">&#x2705; Supported</span><br /><span><br /></span> | <span title="Supported">&#x2705; Flexible & Annual</span><br /><span title="Supported">&#x2705; Free & Fixed</nobr></span> | Returns the maximum value from the sketch. |
| [TDIGEST.MERGE]() | <span title="Supported">&#x2705; Supported</span><br /><span><br /></span> | <span title="Supported">&#x2705; Flexible & Annual</span><br /><span title="Supported">&#x2705; Free & Fixed</nobr></span> | Copies values from one sketch to another. |
| [TDIGEST.MIN]() | <span title="Supported">&#x2705; Supported</span><br /><span><br /></span> | <span title="Supported">&#x2705; Flexible & Annual</span><br /><span title="Supported">&#x2705; Free & Fixed</nobr></span> | Returns the minimum value from the sketch. |
| [TDIGEST.QUANTILE]() | <span title="Supported">&#x2705; Supported</span><br /><span><br /></span> | <span title="Supported">&#x2705; Flexible & Annual</span><br /><span title="Supported">&#x2705; Free & Fixed</nobr></span> | Estimates one or more cutoffs. |
| [TDIGEST.RESET]() | <span title="Supported">&#x2705; Supported</span><br /><span><br /></span> | <span title="Supported">&#x2705; Flexible & Annual</span><br /><span title="Supported">&#x2705; Free & Fixed</nobr></span> | Resets the sketch and reinitializes it. |
| [TDIGEST.TRIMMED_MEAN]() | <span title="Supported">&#x2705; Supported</span><br /><span><br /></span> | <span title="Supported">&#x2705; Flexible & Annual</span><br /><span title="Supported">&#x2705; Free & Fixed</nobr></span> | Estimates the mean value from the sketch, excluding values outside the specified range. |
