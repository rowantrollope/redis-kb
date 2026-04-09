---
title: TS.INFO
url: https://redis.io/docs/latest/commands/ts.info/
retrieved_utc: '2026-04-09T20:45:35.684540+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/ts.info/index.html.md
---

# TS.INFO

```json metadata
{
  "title": "TS.INFO",
  "description": "Returns information and statistics for a time series",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"name":"key","type":"key"},{"name":"DEBUG","optional":true,"type":"string"}],
  "syntax_fmt": "TS.INFO key [DEBUG]",
  "complexity": "O(1)",
  "group": "timeseries",
  "acl_categories": ["@timeseries","@read","@fast"],
  "since": "1.0.0",
  "tableOfContents": {"sections":[{"id":"required-arguments","title":"Required arguments"},{"id":"optional-arguments","title":"Optional arguments"},{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"},{"id":"examples","title":"Examples"},{"id":"see-also","title":"See also"},{"id":"related-topics","title":"Related topics"}]}

,
  "codeExamples": []
}
```
Return information and statistics for a time series.

[Examples](#examples)

## Required arguments

<details open>
<summary><code>key</code></summary> 
is key name of the time series.
</details>

## Optional arguments

<details open>
<summary><code>[DEBUG]</code></summary>

is an optional flag to get a more detailed information about the chunks.
</details>

## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Supported">&#x2705; Supported</span><br /> | <span title="Supported">&#x2705; Flexible & Annual</span><br /><span title="Supported">&#x2705; Free & Fixed</nobr></span> |  |

## Return information

**RESP2:**

[Array reply]() with information about the time series as flattened name-value pairs:

| Name<br>[Simple string reply]() | Description
| ---------------------------- | -
| `totalSamples`    | [Integer reply]()<br> Total number of samples in this time series
| `memoryUsage`     | [Integer reply]()<br> Total number of bytes allocated for this time series, which is the sum of <br> - The memory used for storing the series' configuration parameters (retention period, duplication policy, etc.)<br>- The memory used for storing the series' compaction rules<br>- The memory used for storing the series' labels (key-value pairs)<br>- The memory used for storing the chunks (chunk header + compressed/uncompressed data)
| `firstTimestamp`  | [Integer reply]()<br> First timestamp present in this time series (Unix timestamp in milliseconds)
| `lastTimestamp`   | [Integer reply]()<br> Last timestamp present in this time series  (Unix timestamp in milliseconds)
| `retentionTime`   | [Integer reply]()<br> The retention period, in milliseconds, for this time series
| `chunkCount`      | [Integer reply]()<br> Number of chunks used for this time series
| `chunkSize`       | [Integer reply]()<br> The initial allocation size, in bytes, for the data part of each new chunk.<br>Actual chunks may consume more memory. Changing the chunk size (using [`TS.ALTER`]()) does not affect existing chunks.
| `chunkType`       | [Simple string reply]()<br> The chunks type: `compressed` or `uncompressed`
| `duplicatePolicy` | [Simple string reply]() or [Nil reply]()<br> The [duplicate policy]() of this time series
| `labels`          | [Array reply]() or [Nil reply]()<br> Metadata labels of this time series<br> Each element is a 2-elements [Array reply]() of ([Bulk string reply](), [Bulk string reply]()) representing (label, value)
| `sourceKey`       | [Bulk string reply]() or [Nil reply]()<br>Key name for source time series in case the current series is a target of a [compaction rule]()
| `rules`           | [Array reply]()<br> [Compaction rules]() defined in this time series<br> Each rule is an [Array reply]() with 4 elements:<br>- [Bulk string reply](): The compaction key<br>- [Integer reply](): The bucket duration<br>- [Simple string reply](): The aggregator<br>- [Integer reply](): The alignment (since RedisTimeSeries v1.8)

When [`DEBUG`]() is specified, the response also contains:

| Name<br>[Simple string reply]() | Description
| ---------------------------- | -
| `keySelfName`     | [Bulk string reply]()<br> Name of the key
| `Chunks`          | [Array reply]() with information about the chunks<br>Each element is an [Array reply]() of information about a single chunk in a name([Simple string reply]())-value pairs:<br>- `startTimestamp` - [Integer reply]() - First timestamp present in the chunk<br>- `endTimestamp` - [Integer reply]() - Last timestamp present in the chunk<br>- `samples` - [Integer reply]() - Total number of samples in the chunk<br>- `size` - [Integer reply]() - the chunk's internal data size (without overheads) in bytes<br>- `bytesPerSample` - [Bulk string reply]() (double) - Ratio of `size` and `samples`

**RESP3:**

[Map reply]() with information about the time series. The map contains the same fields as described in the RESP2 response, but organized as key-value pairs in a map structure rather than a flattened array.

When [`DEBUG`]() is specified, the response also contains the additional `keySelfName` and `Chunks` fields as described above.



## Examples

<details open>
<summary><b>Find information about a temperature/humidity time series by location and sensor type</b></summary>

Create a set of sensors to measure temperature and humidity in your study and kitchen.


127.0.0.1:6379> TS.CREATE telemetry:study:temperature LABELS room study type temperature
OK
127.0.0.1:6379> TS.CREATE telemetry:study:humidity LABELS room study type humidity
OK
127.0.0.1:6379> TS.CREATE telemetry:kitchen:temperature LABELS room kitchen type temperature
OK
127.0.0.1:6379> TS.CREATE telemetry:kitchen:humidity LABELS room kitchen type humidity
OK


Find information about the time series for temperature in the kitchen.


127.0.0.1:6379> TS.INFO telemetry:kitchen:temperature
 1) totalSamples
 2) (integer) 0
 3) memoryUsage
 4) (integer) 4246
 5) firstTimestamp
 6) (integer) 0
 7) lastTimestamp
 8) (integer) 0
 9) retentionTime
10) (integer) 0
11) chunkCount
12) (integer) 1
13) chunkSize
14) (integer) 4096
15) chunkType
16) compressed
17) duplicatePolicy
18) (nil)
19) labels
20) 1) 1) "room"
       2) "kitchen"
    2) 1) "type"
       2) "temperature"
21) sourceKey
22) (nil)
23) rules
24) (empty array)


Query the time series using DEBUG to get more information about the chunks.


127.0.0.1:6379> TS.INFO telemetry:kitchen:temperature DEBUG
 1) totalSamples
 2) (integer) 0
 3) memoryUsage
 4) (integer) 4246
 5) firstTimestamp
 6) (integer) 0
 7) lastTimestamp
 8) (integer) 0
 9) retentionTime
10) (integer) 0
11) chunkCount
12) (integer) 1
13) chunkSize
14) (integer) 4096
15) chunkType
16) compressed
17) duplicatePolicy
18) (nil)
19) labels
20) 1) 1) "room"
       2) "kitchen"
    2) 1) "type"
       2) "temperature"
21) sourceKey
22) (nil)
23) rules
24) (empty array)
25) keySelfName
26) "telemetry:kitchen:temperature"
27) Chunks
28) 1)  1) startTimestamp
        2) (integer) 0
        3) endTimestamp
        4) (integer) 0
        5) samples
        6) (integer) 0
        7) size
        8) (integer) 4096
        9) bytesPerSample
       10) "inf"


</details>

## See also

[`TS.RANGE`]() | [`TS.QUERYINDEX`]() | [`TS.GET`]()

## Related topics

[RedisTimeSeries]()
