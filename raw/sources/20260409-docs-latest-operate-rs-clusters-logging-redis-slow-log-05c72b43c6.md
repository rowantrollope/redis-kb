---
title: View and manage Redis slow log
url: https://redis.io/docs/latest/operate/rs/clusters/logging/redis-slow-log/
retrieved_utc: '2026-04-09T20:46:07.522195+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/clusters/logging/redis-slow-log/index.html.md
---

# View and manage Redis slow log

```json metadata
{
  "title": "View and manage Redis slow log",
  "description": "",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[{"id":"redis-software-slow-log-enhancements","title":"Redis Software slow log enhancements"},{"id":"view-slow-log","title":"View slow log"},{"id":"change-slow-log-threshold","title":"Change slow log threshold"},{"id":"change-maximum-entries","title":"Change maximum entries"}]}

,
  "codeExamples": []
}
```
[Redis slow log]() is one of the best
tools for debugging and tracing your Redis database, especially if you
experience high latency and high CPU usage with Redis operations.
Because Redis is based on a single threaded architecture, Redis slow log
can be much more useful than slow log mechanisms of multi-threaded
database systems such as MySQL slow query log.

Unlike tools that introduce lock overhead, which complicates the debugging
process, Redis slow log is highly effective at showing the actual processing time of each command.

## Redis Software slow log enhancements 

Redis Software includes enhancements to the standard Redis
slow log capabilities that allow you to analyze the execution time
complexity of each command. This enhancement can help you better analyze
Redis operations, allowing you to compare the differences between
execution times of the same command, observe spikes in CPU usage, and
more.

This is especially useful with complex commands such as
[ZUNIONSTORE](),
[ZINTERSTORE](), and
[ZRANGEBYSCORE]().

The enhanced Redis Software slow log adds the **Complexity info** field to the
output data.

View the complexity info data by its respective command in the table
below:

| Command | Value of interest | Complexity |
|------------|-----------------|-----------------|
| LINSERT | N - list len | O(N) |
| LREM | N - list len | O(N) |
| LTRIM | N - number of removed elements | O(N) |
| PUBLISH | N - number of channel subscribers</br>M - number of subscribed patterns | O(N+M) |
| PSUBSCRIBE | N - number of patterns client is subscribed to</br>argc - number of arguments passed to the command | O(argc\*N) |
| PUNSUBSCRIBE | N - number of patterns client is subscribed to</br>M - total number of subscribed patterns</br>argc - number of arguments passed to the command | O(argc\*(N+M)) |
| SDIFF | N - total number of elements in all sets | O(N) |
| SDIFFSTORE | N - total number of elements in all sets | O(N) |
| SINTER                | N - number of elements in smallest set</br>argc - number of arguments passed to the command | O(argc\*N) |
| SINTERSTORE           | N - number of elements in smallest set</br>argc - number of arguments passed to the command | O(argc\*N) |
| SMEMBERS              | N - number of elements in a set | O(N) |
| SORT                  | N - number of elements in the when no sorting list/set/zset</br>M - number of elements in result | O(N+M\*log(M))O(N) |
| SUNION                | N - number of elements in all sets | O(N) |
| SUNIONSTORE           | N - number of elements in all sets | O(N) |
| UNSUBSCRIBE           | N - total number of clients subscribed to all channels | O(N) |
| ZADD                  | N - number of elements in the zset | O(log(N)) |
| ZCOUNT                | N - number of elements in the zset</br>M - number of elements between min and max | O(log(N)+M) |
| ZINCRBY               | N - number of elements in the zset | O(log(N)) |
| ZINTERSTORE           | N â number of elements in the smallest zset</br>K â number of zsets</br>M â number of elements in the results set | O(N\*K)+O(M\*log(M)) |
| ZRANGE                | N â number of elements in the zset</br>M â number of results | O(log(N)+M) |
| ZRANGEBYSCORE         | N â number of elements in the zset</br>M â number of results | O(log(N)+M) |
| ZRANK                 | N â number of elements in the zset | O(log(N)) |
| ZREM                  | N â number of elements in the zset</br>argc â number of arguments passed to the command | O(argc\*log(N)) |
| ZREMRANGEBYRANK       | N â number of elements in the zset</br>argc â number of arguments passed to the command | O(log(N)+M) |
| ZREMRANGEBYSCORE      | N â number of elements in the zset</br>M â number of elements removed | O(log(N)+M) |
| ZREVRANGE             | N â number of elements in the zset</br>M â number of results | O(log(N)+M) |
| ZREVRANK              | N â number of elements in the zset | O(log(N)) |
| ZUNIONSTORE           | N â sum of element counts of all zsets</br>M â element count of result | O(N)+O(M\*log(M)) |

## View slow log

To view slow log entries for Redis Software databases, use one of the following methods:

- Cluster Manager UI:

    1. To access the slow log in the Cluster Manager UI, your [cluster management role]() must be Admin, Cluster Member, or DB Member.
    
    1. Select a database from the **Databases** list.

    1. On the database's **Configuration** screen, select the **Slowlog** tab.

- Command line:

    Use [`redis-cli`]() to run [`SLOWLOG GET`]():

    ```sh
    redis-cli -h <endpoint> -p <port> SLOWLOG GET <count>
    ```

## Change slow log threshold

The slow log includes all database commands that take longer than ten milliseconds (10,000 microseconds) by default. You can use [`redis-cli`]() to view or change this threshold.

To check the current threshold, run [`CONFIG GET`]():

```sh
redis-cli -h <endpoint> -p <port> CONFIG GET slowlog-log-slower-than
```

To change the threshold, run [`CONFIG SET`]():

```sh
redis-cli -h <endpoint> -p <port> CONFIG SET slowlog-log-slower-than <value_in_microseconds>
```

## Change maximum entries

The slow log retains the last 128 entries by default. You can use [`redis-cli`]() to view or change the maximum number of entries.

To check the current maximum, run [`CONFIG GET`]():

```sh
redis-cli -h <endpoint> -p <port> CONFIG GET slowlog-max-len
```

To change the maximum, run [`CONFIG SET`]():

```sh
redis-cli -h <endpoint> -p <port> CONFIG SET slowlog-max-len <value>
```
