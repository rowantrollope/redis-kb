---
title: Time series commands
url: https://redis.io/docs/latest/operate/oss_and_stack/stack-with-enterprise/timeseries/commands/
retrieved_utc: '2026-04-09T20:45:55.964648+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/oss_and_stack/stack-with-enterprise/timeseries/commands/index.html.md
---

# Time series commands

```json metadata
{
  "title": "Time series commands",
  "description": "Lists time series commands and provides links to the command reference pages.",
  "categories": ["docs","operate","stack"],
  "tableOfContents": {"sections":[]}

,
  "codeExamples": []
}
```
The following table lists time series commands. See the command links for more information about each command's syntax, arguments, and examples.

| Command | Redis<br />Software | Redis<br />Cloud | Description |
|:--------|:----------------------|:-----------------|:------|
| [TS.ADD]() | <span title="Supported">&#x2705; Supported</span><br /><span><br /></span> | <span title="Supported"><nobr>&#x2705; Flexible & Annual</nobr></span><br /><span title="Supported">&#x2705; Free & Fixed</nobr></span> | Appends a sample to a time series. |
| [TS.ALTER]() | <span title="Supported">&#x2705; Supported</span><br /><span><br /></span> | <span title="Supported">&#x2705; Flexible & Annual</span><br /><span title="Supported">&#x2705; Free & Fixed</nobr></span> | Updates the retention, chunk size, duplicate policy, or labels for an existing time series. |
| [TS.CREATE]() | <span title="Supported">&#x2705; Supported</span><br /><span><br /></span> | <span title="Supported">&#x2705; Flexible & Annual</span><br /><span title="Supported">&#x2705; Free & Fixed</nobr></span> | Creates a new time series. |
| [TS.CREATERULE]() | <span title="Supported">&#x2705; Supported</span><br /><span><br /></span> | <span title="Supported">&#x2705; Flexible & Annual</span><br /><span title="Supported">&#x2705; Free & Fixed</nobr></span> | Creates a compaction rule for [downsampling](). |
| [TS.DECRBY]() | <span title="Supported">&#x2705; Supported</span><br /><span><br /></span> | <span title="Supported">&#x2705; Flexible & Annual</span><br /><span title="Supported">&#x2705; Free & Fixed</nobr></span> | Decreases the value of the latest sample in a time series by the specified number. Either modifies the existing sample or adds the decreased value as a new sample, depending on the timestamp option. |
| [TS.DEL]() | <span title="Supported">&#x2705; Supported</span><br /><span><br /></span> | <span title="Supported">&#x2705; Flexible & Annual</span><br /><span title="Supported">&#x2705; Free & Fixed</nobr></span> | Removes all samples between two timestamps for a given time series. |
| [TS.DELETERULE]() | <span title="Supported">&#x2705; Supported</span><br /><span><br /></span> | <span title="Supported">&#x2705; Flexible & Annual</span><br /><span title="Supported">&#x2705; Free & Fixed</nobr></span> | Removes a compaction rule. |
| [TS.GET]() | <span title="Supported">&#x2705; Supported</span><br /><span><br /></span> | <span title="Supported">&#x2705; Flexible & Annual</span><br /><span title="Supported">&#x2705; Free & Fixed</nobr></span> | Returns the last sample in a time series. |
| [TS.INCRBY]() | <span title="Supported">&#x2705; Supported</span><br /><span><br /></span> | <span title="Supported">&#x2705; Flexible & Annual</span><br /><span title="Supported">&#x2705; Free & Fixed</nobr></span> | Increases the value of the latest sample in a time series by the specified number. Either modifies the existing sample or adds the increased value as a new sample, depending on the timestamp option. |
| [TS.INFO]() | <span title="Supported">&#x2705; Supported</span><br /><span><br /></span> | <span title="Supported">&#x2705; Flexible & Annual</span><br /><span title="Supported">&#x2705; Free & Fixed</nobr></span> | Returns time series information and statistics. |
| [TS.MADD]() | <span title="Supported">&#x2705; Supported</span><br /><span><br /></span> | <span title="Supported">&#x2705; Flexible & Annual</span><br /><span title="Supported">&#x2705; Free & Fixed</nobr></span> | Appends multiple samples to one or more time series. |
| [TS.MGET]() | <span title="Supported">&#x2705; Supported</span><br /><span><br /></span> | <span title="Supported">&#x2705; Flexible & Annual</span><br /><span title="Supported">&#x2705; Free & Fixed</nobr></span> | Returns multiple samples with [labels]() that match the filter. |
| [TS.MRANGE]() | <span title="Supported">&#x2705; Supported</span><br /><span><br /></span> | <span title="Supported">&#x2705; Flexible & Annual</span><br /><span title="Supported">&#x2705; Free & Fixed</nobr></span> | For multiple time series, runs a query against samples within a range of timestamps, from earliest to latest. Supports [filtering]() and [aggregation](). |
| [TS.MREVRANGE]() | <span title="Supported">&#x2705; Supported</span><br /><span><br /></span> | <span title="Supported">&#x2705; Flexible & Annual</span><br /><span title="Supported">&#x2705; Free & Fixed</nobr></span> | For multiple time series, runs a query against samples within a range of timestamps in reverse order, from latest to earliest. Supports [filtering]() and [aggregation](). |
| [TS.QUERYINDEX]() | <span title="Supported">&#x2705; Supported</span><br /><span><br /></span> | <span title="Supported">&#x2705; Flexible & Annual</span><br /><span title="Supported">&#x2705; Free & Fixed</nobr></span> | Returns the keys of all time series with [labels]() that match the given filters. |
| [TS.RANGE]() | <span title="Supported">&#x2705; Supported</span><br /><span><br /></span> | <span title="Supported">&#x2705; Flexible & Annual</span><br /><span title="Supported">&#x2705; Free & Fixed</nobr></span> | From the start of a single time series, runs a query against samples within a range of timestamps. Supports [filtering]() and [aggregation](). |
| [TS.REVRANGE]() | <span title="Supported">&#x2705; Supported</span><br /><span><br /></span> | <span title="Supported">&#x2705; Flexible & Annual</span><br /><span title="Supported">&#x2705; Free & Fixed</nobr></span> | From the end of a single time series, runs a query against samples within a range of timestamps in reverse order. Supports [filtering]() and [aggregation](). |
