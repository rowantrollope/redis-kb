---
title: "Persistence Digest"
last_updated: 2026-04-09
tags: [persistence, digest]
source_count: 511
---

# Persistence Digest

Auto-compiled synthesis from raw sources.

## ACL CAT
Source file: `raw/sources/20260409-docs-latest-commands-acl-cat-c8bce03b76.md`
- If a category name is given, the command shows all the Redis commands in
- ACL categories are very useful in order to create ACL rules that include or
- exclude a large set of commands at once, without specifying every single
- command. For instance, the following rule will let the user `karin` perform
- everything but the most dangerous operations that may affect the server

## BGREWRITEAOF
Source file: `raw/sources/20260409-docs-latest-commands-bgrewriteaof-50e0c6ac5c.md`
- The rewrite will create a small optimized version of the current Append Only
- If `BGREWRITEAOF` fails, no data gets lost as the old AOF will be untouched.
- The rewrite will be only triggered by Redis if there is not already a background
- * If a Redis child is creating a snapshot on disk, the AOF rewrite is _scheduled_ but not started until the saving child producing the RDB file terminates. In this case the `BGREWRITEAOF` will still return a positive status reply, but with an appropriate message.  You can check if an AOF rewrite is scheduled looking at the [`INFO`]() command as of Redis 2.6 or successive versions.
- * If an AOF rewrite is already in progress the command returns an error and no

## BGSAVE
Source file: `raw/sources/20260409-docs-latest-commands-bgsave-dbbb4ec137.md`
- Normally the OK code is immediately returned.
- Redis forks, the parent continues to serve the clients, the child saves the DB
- An error is returned if there is already a background save running or if there
- is another non-background-save process running, specifically an in-progress AOF
- If `BGSAVE SCHEDULE` is used, the command will immediately return `OK` when an

## BLPOP
Source file: `raw/sources/20260409-docs-latest-commands-blpop-91a1e93b31.md`
- This command's behavior varies in clustered Redis environments. See the [multi-key operations]() page for more information.
- It is the blocking version of [`LPOP`]() because it blocks the connection when there
- are no elements to pop from any of the given lists.
- An element is popped from the head of the first list that is non-empty, with the
- given keys being checked in the order that they are given.

## CLUSTER NODES
Source file: `raw/sources/20260409-docs-latest-commands-cluster-nodes-63b541a084.md`
- given by the set of known nodes, the state of the connection we have with such
- nodes, their flags, properties and assigned slots, and so forth.
- configuration of the node we are contacting, in a serialization format which
- happens to be exactly the same as the one used by Redis Cluster itself in
- order to store on disk the cluster state (however the on disk cluster state

## CONFIG RESETSTAT
Source file: `raw/sources/20260409-docs-latest-commands-config-resetstat-67108c2aba.md`
- The following is a non-exhaustive list of values that are reset:
- * Connections received, rejected and evicted
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Not supported">&#x274c; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> | <span title="Not supported">&#x274c; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> |  |

## CONFIG REWRITE
Source file: `raw/sources/20260409-docs-latest-commands-config-rewrite-a1eb7f3d45.md`
- The rewrite is performed in a very conservative way:
- * Comments and the overall structure of the original redis.conf are preserved as much as possible.
- * If an option already exists in the old redis.conf file, it will be rewritten at the same position (line number).
- * If an option was not already present, but it is set to its default value, it is not added by the rewrite process.
- * If an option was not already present, but it is set to a non-default value, it is appended at the end of the file.

## CONFIG SET
Source file: `raw/sources/20260409-docs-latest-commands-config-set-accadd8bad.md`
- You can change both trivial parameters or switch from one to another persistence
- The list of configuration parameters supported by `CONFIG SET` can be obtained
- issuing a `CONFIG GET *` command, that is the symmetrical command used to obtain
- information about the configuration of a running Redis instance.
- All the configuration parameters set using `CONFIG SET` are immediately loaded

## DEL
Source file: `raw/sources/20260409-docs-latest-commands-del-245af6ee94.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- This command's behavior varies in clustered Redis environments. See the [multi-key operations]() page for more information.
- Foundational: Delete one or more keys using DEL (ignores non-existent keys, returns count of deleted keys)
- **Available in:** Redis CLI, C, C# (Synchronous), Go, Java (Asynchronous - Lettuce), Java (Reactive - Lettuce), Java (Synchronous - Jedis), JavaScript (Node.js), JavaScript (Node.js), PHP, Python, Rust (Asynchronous), Rust (Synchronous)

## DUMP
Source file: `raw/sources/20260409-docs-latest-commands-dump-b9a5f68325.md`
- The returned value can be synthesized back into a Redis key using the [`RESTORE`]()
- The serialization format is opaque and non-standard, however it has a few
- * It contains a 64-bit checksum that is used to make sure errors will be
- The [`RESTORE`]() command makes sure to check the checksum before synthesizing a
- * Values are encoded in the same format used by RDB.

## EXISTS
Source file: `raw/sources/20260409-docs-latest-commands-exists-0da4a9d0e0.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- This command's behavior varies in clustered Redis environments. See the [multi-key operations]() page for more information.
- The user should be aware that if the same existing key is mentioned in the arguments multiple times, it will be counted multiple times. So if `somekey` exists, `EXISTS somekey somekey` will return 2.
- Foundational: Check if one or more keys exist using EXISTS (returns count of existing keys, useful for conditional logic)

## EXPIRE
Source file: `raw/sources/20260409-docs-latest-commands-expire-c86e986973.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- After the timeout has expired, the key will automatically be deleted.
- A key with an associated timeout is often said to be _volatile_ in Redis
- The timeout will only be cleared by commands that delete or overwrite the

## EXPIREAT
Source file: `raw/sources/20260409-docs-latest-commands-expireat-0929100b3e.md`
- specifying the number of seconds representing the TTL (time to live), it takes
- an absolute [Unix timestamp][hewowu] (seconds since January 1, 1970). A
- timestamp in the past will delete the key immediately.
- [hewowu]: http://en.wikipedia.org/wiki/Unix_time
- Please for the specific semantics of the command refer to the documentation of

## FAILOVER
Source file: `raw/sources/20260409-docs-latest-commands-failover-1cd108e6f3.md`
- The failover is not synchronous, instead a background task will handle coordinating the failover.
- It is designed to limit data loss and unavailability of the cluster during the failover.
- This command is analogous to the [`CLUSTER FAILOVER`]() command for non-clustered Redis and is similar to the failover support provided by sentinel.
- The specific details of the default failover flow are as follows:
- 1. The master will internally start a `CLIENT PAUSE WRITE`, which will pause incoming writes and prevent the accumulation of new data in the replication stream.

## FLUSHALL
Source file: `raw/sources/20260409-docs-latest-commands-flushall-1af5d460a5.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- This command's behavior varies in clustered Redis environments. See the [multi-key operations]() page for more information.
- Delete all the keys of all the existing databases, not just the currently selected one.
- By default, `FLUSHALL` will synchronously flush all the databases.

## GET
Source file: `raw/sources/20260409-docs-latest-commands-get-d236f38e8a.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- If the key does not exist the special value `nil` is returned.
- An error is returned if the value stored at `key` is not a string, because `GET`
- Foundational: Retrieve the string value of a key using GET (returns nil if key doesn't exist)

## HDEL
Source file: `raw/sources/20260409-docs-latest-commands-hdel-9ea23bc4a7.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- Removes the specified fields from the hash stored at `key`.
- Specified fields that do not exist within this hash are ignored.
- If `key` does not exist, it is treated as an empty hash and this command returns

## HEXPIRE
Source file: `raw/sources/20260409-docs-latest-commands-hexpire-58dd6fc81a.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- Set an expiration (TTL or time to live) on one or more fields of a given hash key. You must specify at least one field.
- Field(s) will automatically be deleted from the hash key when their TTLs expire.
- Field expirations will only be cleared by commands that delete or overwrite the

## HGET
Source file: `raw/sources/20260409-docs-latest-commands-hget-850863fc43.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- Returns the value associated with `field` in the hash stored at `key`.
- Foundational: Retrieve a single field value from a hash using HGET (returns nil if field or key doesn't exist)
- **Available in:** Redis CLI, C, C# (Synchronous), Go, Java (Asynchronous - Lettuce), Java (Reactive - Lettuce), Java (Synchronous - Jedis), JavaScript (Node.js), JavaScript (Node.js), PHP, Python, Rust (Asynchronous), Rust (Synchronous)

## HGETALL
Source file: `raw/sources/20260409-docs-latest-commands-hgetall-3133e869e7.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- Returns all fields and values of the hash stored at `key`.
- In the returned value, every field name is followed by its value, so the length
- of the reply is twice the size of the hash.

## HMGET
Source file: `raw/sources/20260409-docs-latest-commands-hmget-aa54db420b.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- Returns the values associated with the specified `fields` in the hash stored at
- For every `field` that does not exist in the hash, a `nil` value is returned.
- Because non-existing keys are treated as empty hashes, running `HMGET` against

## HSET
Source file: `raw/sources/20260409-docs-latest-commands-hset-1772765dac.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- Sets the specified fields to their respective values in the hash stored at `key`.
- This command overwrites the values of specified fields that exist in the hash.
- If `key` doesn't exist, a new key holding a hash is created.

## HVALS
Source file: `raw/sources/20260409-docs-latest-commands-hvals-d47139be30.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- Returns all values in the hash stored at `key`.
- Foundational: Retrieve all values from a hash using HVALS (returns only values without field names, useful when you only need the data)
- **Available in:** Redis CLI, C, C# (Synchronous), Go, Java (Asynchronous - Lettuce), Java (Reactive - Lettuce), Java (Synchronous - Jedis), JavaScript (Node.js), JavaScript (Node.js), PHP, Python, Rust (Asynchronous), Rust (Synchronous)

## INCR
Source file: `raw/sources/20260409-docs-latest-commands-incr-3b7da405fe.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- Increments the number stored at `key` by one.
- If the key does not exist, it is set to `0` before performing the operation.
- An error is returned if the key contains a value of the wrong type or contains a

## INFO
Source file: `raw/sources/20260409-docs-latest-commands-info-b042b9e571.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- The `INFO` command returns information and statistics about the server in a
- format that is simple to parse by computers and easy to read by humans.
- The optional parameter can be used to select a specific section of information:

## KEYS
Source file: `raw/sources/20260409-docs-latest-commands-keys-5fb825df3c.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- This command's behavior varies in clustered Redis environments. See the [multi-key operations]() page for more information.
- While the time complexity for this operation is O(N), the constant times are
- For example, Redis running on an entry level laptop can scan a 1 million key

## LATENCY GRAPH
Source file: `raw/sources/20260409-docs-latest-commands-latency-graph-8bb7cdd4bc.md`
- The vertical labels under each graph column represent the amount of seconds,
- minutes, hours or days ago the event happened. For example "15s" means that the
- first graphed event happened 15 seconds ago.
- The graph is normalized in the min-max scale so that the zero (the underscore
- in the lower row) is the minimum, and a # in the higher row is the maximum.

## LATENCY HISTORY
Source file: `raw/sources/20260409-docs-latest-commands-latency-history-a332594e60.md`
- This is useful to an application that wants to fetch raw data in order to perform monitoring, display graphs, and so forth.
- The command will return up to 160 timestamp-latency pairs for the `event`.
- For more information refer to the [Latency Monitoring Framework page][lm].
- [lm]: /operate/oss_and_stack/management/optimization/latency-monitor.md
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |

## LATENCY RESET
Source file: `raw/sources/20260409-docs-latest-commands-latency-reset-42e004f25e.md`
- When the command is called without arguments, it resets all the
- events, discarding the currently logged latency spike events, and resetting
- It is possible to reset only specific events by providing the `event` names
- For more information refer to the [Latency Monitoring Framework page][lm].
- [lm]: /operate/oss_and_stack/management/optimization/latency-monitor.md

## LLEN
Source file: `raw/sources/20260409-docs-latest-commands-llen-b6f55bf139.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- Returns the length of the list stored at `key`.
- If `key` does not exist, it is interpreted as an empty list and `0` is returned.
- An error is returned when the value stored at `key` is not a list.

## LPOP
Source file: `raw/sources/20260409-docs-latest-commands-lpop-b8d4a5e749.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- Removes and returns the first elements of the list stored at `key`.
- By default, the command pops a single element from the beginning of the list.
- When provided with the optional `count` argument, the reply will consist of up

## LPUSH
Source file: `raw/sources/20260409-docs-latest-commands-lpush-0a15d8ca33.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- Insert all the specified values at the head of the list stored at `key`.
- If `key` does not exist, it is created as empty list before performing the push
- When `key` holds a value that is not a list, an error is returned.

## LRANGE
Source file: `raw/sources/20260409-docs-latest-commands-lrange-ab9b4cfbfb.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- Returns the specified elements of the list stored at `key`.
- The offsets `start` and `stop` are zero-based indexes, with `0` being the first
- element of the list (the head of the list), `1` being the next element and so

## MEMORY STATS
Source file: `raw/sources/20260409-docs-latest-commands-memory-stats-ba6247309d.md`
- The information about memory usage is provided as metrics and their respective
- values. The following metrics are reported:
- *   `peak.allocated`: Peak memory consumed by Redis in bytes (see [`INFO`]()'s
- *   `total.allocated`: Total number of bytes allocated by Redis using its
- allocator (see [`INFO`]()'s `used_memory`)

## MEMORY USAGE
Source file: `raw/sources/20260409-docs-latest-commands-memory-usage-c7b5caad15.md`
- The reported usage is the total of memory allocations for data and
- administrative overheads that a key and its value require.
- For nested data types, the optional `SAMPLES` option can be provided, where
- By default, this option is set to `5`. To sample the all of the nested values, use `SAMPLES 0`.
- With Redis v7.2.0 64-bit and **jemalloc**, the empty string measures as follows:

## MGET
Source file: `raw/sources/20260409-docs-latest-commands-mget-f0128ecdc2.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- This command's behavior varies in clustered Redis environments. See the [multi-key operations]() page for more information.
- Returns the values of all specified keys.
- For every key that does not hold a string value or does not exist, the special

## PING
Source file: `raw/sources/20260409-docs-latest-commands-ping-3d163cd425.md`
- 1. Testing whether a connection is still alive.
- 1. Verifying the server's ability to serve data - an error is returned when this isn't the case (e.g., during load from persistence or accessing a stale replica).
- If the client is subscribed to a channel or a pattern, it will instead return a
- multi-bulk with a "pong" in the first position and an empty bulk in the second
- position, unless an argument is provided in which case it returns a copy

## Redis 6.2 Commands Reference
Source file: `raw/sources/20260409-docs-latest-commands-redis-6-2-commands-e6431c67fe.md`
- This page provides a comprehensive reference of all Redis commands available in Redis 6.2, organized by functional group. Each command includes its description and syntax in a collapsible section for easy navigation.
- Redis 6.2 includes all commands from previous versions plus new commands introduced in 6.2. Commands marked with **â­ New in 6.2** were added in this release.
- Command page links take you to the *current implementation* of each command.
- String commands operate on string values, the most basic Redis data type.
- <summary><strong><a href="/commands/append/">APPEND</a></strong> - Appends a string to the value of a key. Creates the key if it doesn't exist.</summary>

## Redis 7.2 Commands Reference
Source file: `raw/sources/20260409-docs-latest-commands-redis-7-2-commands-dd090ef4f7.md`
- This page provides a comprehensive reference of all Redis commands available in Redis 7.2, organized by functional group. Each command includes its description and syntax in a collapsible section for easy navigation.
- Redis 7.2 includes all commands from previous versions plus new commands introduced in 7.2. Commands marked with **â­ New in 7.2** were added in this release.
- Command page links take you to the *current implementation* of each command.
- String commands operate on string values, the most basic Redis data type.
- <summary><strong><a href="/commands/append/">APPEND</a></strong> - Appends a string to the value of a key. Creates the key if it doesn't exist.</summary>

## Redis 7.4 Commands Reference
Source file: `raw/sources/20260409-docs-latest-commands-redis-7-4-commands-7758b99965.md`
- This page provides a comprehensive reference of all Redis commands available in Redis 7.4, organized by functional group. Each command includes its description and syntax in a collapsible section for easy navigation.
- Redis 7.4 includes all commands from previous versions plus new commands introduced in 7.4. Commands marked with **â­ New in 7.4** were added in this release.
- Command page links take you to the *current implementation* of each command.
- String commands operate on string values, the most basic Redis data type.
- <summary><strong><a href="/commands/append/">APPEND</a></strong> - Appends a string to the value of a key. Creates the key if it doesn't exist.</summary>

## Redis 8.0 Commands Reference
Source file: `raw/sources/20260409-docs-latest-commands-redis-8-0-commands-301ba84ca3.md`
- This page provides a comprehensive reference of all Redis commands available in Redis 8.0, organized by functional group. Each command includes its description and syntax in a collapsible section for easy navigation.
- Redis 8.0 includes all commands from previous versions plus new commands introduced in 8.0. Commands marked with **â­ New in 8.0** were added in this release.
- Command page links take you to the *current implementation* of each command.
- String commands operate on string values, the most basic Redis data type.
- <summary><strong><a href="/commands/append/">APPEND</a></strong> - Appends a string to the value of a key. Creates the key if it doesn't exist.</summary>

## Redis 8.2 Commands Reference
Source file: `raw/sources/20260409-docs-latest-commands-redis-8-2-commands-382742c6b8.md`
- This page provides a comprehensive reference of all Redis commands available in Redis 8.2, organized by functional group. Each command includes its description and syntax in a collapsible section for easy navigation.
- Redis 8.2 includes all commands from previous versions plus new commands introduced in 8.2. Commands marked with **â­ New in 8.2** were added in this release.
- Command page links take you to the *current implementation* of each command.
- String commands operate on string values, the most basic Redis data type.
- <summary><strong><a href="/commands/append/">APPEND</a></strong> - Appends a string to the value of a key. Creates the key if it doesn't exist.</summary>

## Redis 8.4 Commands Reference
Source file: `raw/sources/20260409-docs-latest-commands-redis-8-4-commands-b2084a511a.md`
- This page provides a comprehensive reference of all Redis commands available in Redis 8.4, organized by functional group. Each command includes its description and syntax in a collapsible section for easy navigation.
- Redis 8.4 includes all commands from previous versions plus new commands introduced in 8.4. Commands marked with **â­ New in 8.4** were added in this release.
- Command page links take you to the *current implementation* of each command.
- String commands operate on string values, the most basic Redis data type.
- <summary><strong><a href="/commands/append/">APPEND</a></strong> - Appends a string to the value of a key. Creates the key if it doesn't exist.</summary>

## Redis 8.6 Commands Reference
Source file: `raw/sources/20260409-docs-latest-commands-redis-8-6-commands-b1ac17f9bc.md`
- This page provides a comprehensive reference of all Redis commands available in Redis 8.6, organized by functional group. Each command includes its description and syntax in a collapsible section for easy navigation.
- Redis 8.6 includes all commands from previous versions plus new commands introduced in 8.6. Commands marked with **â­ New in 8.6** were added in this release.
- String commands operate on string values, the most basic Redis data type.
- <summary><strong><a href="/commands/append/">APPEND</a></strong> - Appends a string to the value of a key. Creates the key if it doesn't exist.</summary>
- **Description:** Appends a string to the value of a key. Creates the key if it doesn't exist.

## REPLICAOF
Source file: `raw/sources/20260409-docs-latest-commands-replicaof-50743a8c74.md`
- If a Redis server is already acting as replica, the command `REPLICAOF` NO ONE will turn off the replication, turning the Redis server into a MASTER.  In the proper form `REPLICAOF` hostname port will make the server a replica of another server listening at the specified hostname and port.
- If a server is already a replica of some master, `REPLICAOF` hostname port will stop the replication against the old server and start the synchronization against the new one, discarding the old dataset.
- The form `REPLICAOF` NO ONE will stop replication, turning the server into a MASTER, but will not discard the already replicated data. So, if the old master stops working, it is possible to turn the replica into a master and set the application to use this new master in read/write. Later when the other Redis server is fixed, it can be reconfigured to work as a replica.
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|

## RESTORE
Source file: `raw/sources/20260409-docs-latest-commands-restore-cda0359d39.md`
- provided serialized value (obtained via [`DUMP`]()).
- If `ttl` is 0 the key is created without any expire, otherwise the specified
- If the `ABSTTL` modifier was used, `ttl` should represent an absolute
- [Unix timestamp][hewowu] (in milliseconds) in which the key will expire.
- [hewowu]: http://en.wikipedia.org/wiki/Unix_time

## RPOP
Source file: `raw/sources/20260409-docs-latest-commands-rpop-d1e687a236.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- Removes and returns the last elements of the list stored at `key`.
- By default, the command pops a single element from the end of the list.
- When provided with the optional `count` argument, the reply will consist of up

## RPUSH
Source file: `raw/sources/20260409-docs-latest-commands-rpush-0c8217eca2.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- Insert all the specified values at the tail of the list stored at `key`.
- If `key` does not exist, it is created as empty list before performing the push
- When `key` holds a value that is not a list, an error is returned.

## SADD
Source file: `raw/sources/20260409-docs-latest-commands-sadd-88ecaa86bc.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- Add the specified members to the set stored at `key`.
- Specified members that are already a member of this set are ignored.
- If `key` does not exist, a new set is created before adding the specified

## SAVE
Source file: `raw/sources/20260409-docs-latest-commands-save-c37b7e38c7.md`
- _point in time_ snapshot of all the data inside the Redis instance, in the form
- You almost never want to call `SAVE` in production environments where it will
- However in case of issues preventing Redis to create the background saving child
- (for instance errors in the fork(2) system call), the `SAVE` command can be a
- good last resort to perform the dump of the latest dataset.

## SCAN
Source file: `raw/sources/20260409-docs-latest-commands-scan-2752f45a35.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- This command's behavior varies in clustered Redis environments. See the [multi-key operations]() page for more information.
- The `SCAN` command and the closely related commands [`SSCAN`](), [`HSCAN`]() and [`ZSCAN`]() are used in order to incrementally iterate over a collection of elements.
- * `SCAN` iterates the set of keys in the currently selected Redis database.

## SELECT
Source file: `raw/sources/20260409-docs-latest-commands-select-ceece1bfea.md`
- New connections always use the database 0.
- Selectable Redis databases are a form of namespacing: all databases are still persisted in the same RDB / AOF file. However different databases can have keys with the same name, and commands like [`FLUSHDB`](), [`SWAPDB`]() or [`RANDOMKEY`]() work on specific databases.
- In practical terms, Redis databases should be used to separate different keys belonging to the same application (if needed), and not to use a single Redis instance for multiple unrelated applications.
- When using Redis Cluster, the `SELECT` command cannot be used, since Redis Cluster only supports database zero. In the case of a Redis Cluster, having multiple databases would be useless and an unnecessary source of complexity. Commands operating atomically on a single database would not be possible with the Redis Cluster design and goals.
- Since the currently selected database is a property of the connection, clients should track the currently selected database and re-select it on reconnection. While there is no command in order to query the selected database in the current connection, the [`CLIENT LIST`]() output shows, for each client, the currently selected database.

## SET
Source file: `raw/sources/20260409-docs-latest-commands-set-c832b1c787.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- If `key` already holds a value, it is overwritten, regardless of its type.
- Any previous time to live associated with the key is discarded on successful `SET` operation.
- The `SET` command supports a set of options that modify its behavior:

## SHUTDOWN
Source file: `raw/sources/20260409-docs-latest-commands-shutdown-a965a30408.md`
- * If there are any replicas lagging behind in replication:
- * Pause clients attempting to write by performing a [`CLIENT PAUSE`]() with the `WRITE` option.
- * Wait up to the configured `shutdown-timeout` (default 10 seconds) for replicas to catch up the replication offset.
- * Perform a blocking SAVE if at least one **save point** is configured.
- * Flush the Append Only File if AOF is enabled.

## SLAVEOF
Source file: `raw/sources/20260409-docs-latest-commands-slaveof-bc0015937c.md`
- The `SLAVEOF` command can change the replication settings of a replica on the fly.
- If a Redis server is already acting as replica, the command `SLAVEOF` NO ONE will
- turn off the replication, turning the Redis server into a MASTER.
- In the proper form `SLAVEOF` hostname port will make the server a replica of
- another server listening at the specified hostname and port.

## SMEMBERS
Source file: `raw/sources/20260409-docs-latest-commands-smembers-7094eeffa7.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- Returns all the members of the set value stored at `key`.
- This has the same effect as running [`SINTER`]() with one argument `key`.
- Foundational: Retrieve all members of a set using SMEMBERS (returns unordered collection, useful for iterating all set members)

## TTL
Source file: `raw/sources/20260409-docs-latest-commands-ttl-6732a49e75.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- Returns the remaining time to live of a key that has a timeout.
- This introspection capability allows a Redis client to check how many seconds a
- given key will continue to be part of the dataset.

## WAITAOF
Source file: `raw/sources/20260409-docs-latest-commands-waitaof-668867766d.md`
- When `numlocal` is set to 1, the command blocks until the data written to the Redis instance is confirmed to be persisted to the local AOF file.
- If the timeout, specified in milliseconds, is reached, the command returns even if the specified number of acknowledgments has not been met.
- The command **will always return** the number of masters and replicas that have fsynced all write commands sent by the current client before the `WAITAOF` command, both in the case where the specified thresholds were met, and when the timeout is reached.
- 1. When `WAITAOF` returns, all the previous write commands sent in the context of the current connection are guaranteed to be fsynced to the AOF of at least the number of masters and replicas returned by `WAITAOF`.
- 2. If the command is sent as part of a [`MULTI`]() transaction (or any other context that does not allow blocking, such as inside scripts), the command does not block but instead returns immediately the number of masters and replicas that fsynced all previous write commands.

## XADD
Source file: `raw/sources/20260409-docs-latest-commands-xadd-da78de076a.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- Appends the specified stream entry to the stream at the specified `key`.
- If the key does not exist, `XADD` will create a new key with the given stream value as a side effect of running this command.
- You can turn off key creation with the `NOMKSTREAM` option.

## XCLAIM
Source file: `raw/sources/20260409-docs-latest-commands-xclaim-0495679de7.md`
- of a pending message, so that the new owner is the consumer specified as the
- command argument. Normally this is what happens:
- 1. There is a stream with an associated consumer group.
- 2. Some consumer A reads a message via [`XREADGROUP`]() from a stream, in the context of that consumer group.
- 3. As a side effect a pending message entry is created in the Pending Entries List (PEL) of the consumer group: it means the message was delivered to a given consumer, but it was not yet acknowledged via [`XACK`]().

## ZADD
Source file: `raw/sources/20260409-docs-latest-commands-zadd-3456edb2fb.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- Adds all the specified members with the specified scores to the sorted set
- It is possible to specify multiple score / member pairs.
- If a specified member is already a member of the sorted set, the score is

## ZRANGE
Source file: `raw/sources/20260409-docs-latest-commands-zrange-e92b9fc60f.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- Returns the specified range of elements in the sorted set stored at `<key>`.
- Starting with Redis 6.2.0, this command can replace the following commands: [`ZREVRANGE`](), [`ZRANGEBYSCORE`](), [`ZREVRANGEBYSCORE`](), [`ZRANGEBYLEX`]() and [`ZREVRANGEBYLEX`]().
- The order of elements is from the lowest to the highest score. Elements with the same score are ordered lexicographically.

## Redis AI ecosystem integrations
Source file: `raw/sources/20260409-docs-latest-develop-ai-ecosystem-integrations-3a20d2c52b.md`
- Redis integrates with a wide range of AI frameworks, platforms, and tools to enhance your AI applications. This page highlights key ecosystem integrations that can help you build more powerful, efficient, and scalable AI solutions with Redis.
- | [**Kong AI Gateway & Redis**](https://redis.io/blog/kong-ai-gateway-and-redis/) | [**Unstructured & Redis**](https://redis.io/blog/faster-ai-workflows-with-unstructured-redis/) | [**Mem0 & Redis**](https://redis.io/blog/smarter-memory-management-for-ai-agents-with-mem0-and-redis/) |
- | Combine Kong's AI Gateway with Redis for efficient AI request routing, caching, and rate limiting to optimize your AI infrastructure. | Accelerate AI workflows by using Redis to cache document processing results from Unstructured, reducing processing time and costs. | Implement smarter memory management for AI agents with Mem0's integration with Redis, providing persistent, queryable memory for LLMs. |
- | [**LiteLLM & Redis**](https://docs.litellm.ai/docs/caching/all_caches#initialize-cache---in-memory-redis-s3-bucket-redis-semantic-disk-cache-qdrant-semantic) | [**LangGraph & Redis**](https://redis.io/blog/langgraph-redis-build-smarter-ai-agents-with-memory-persistence/) | [**LangChain & Redis**](https://redis.io/blog/langchain-redis-partner-package/) |
- | Optimize LLM performance with LiteLLM's Redis caching capabilities, supporting both traditional and semantic caching to reduce costs and latency. | Build smarter AI agents with LangGraph's Redis integration for memory persistence, state management, and multi-agent coordination. | Leverage LangChain's Redis integration for vector storage, memory, and caching to create more capable AI applications with improved performance. |

## Configuration parameters
Source file: `raw/sources/20260409-docs-latest-develop-ai-search-and-query-administration-configuration-4b4c0d3445.md`
- As of Redis 8 in Redis Open Source (Redis 8), configuration parameters for Redis Search are now set in the following ways:
- * At load time via your `redis.conf` file.
- * At run time (where applicable) using the [`CONFIG SET`]() command.
- Also, Redis 8 persists Redis Search configuration parameters just like any other configuration parameters (e.g., using the [`CONFIG REWRITE`]() command).
- The following table summarizes which configuration parameters can be set at run-time, and compatibility with Redis Software and Redis Cloud.

## Technical overview
Source file: `raw/sources/20260409-docs-latest-develop-ai-search-and-query-administration-overview-e7734c8dee.md`
- Redis Search is a powerful text search and secondary indexing engine that is built on top of Redis Open Source.
- Unlike other Redis search libraries, it does not use the internal data structures of Redis such as sorted sets. Using its own highly optimized data structures and algorithms, it allows for advanced search features, high performance, and a low memory footprint. It can perform simple text searches, as well as complex structured queries, filtering by numeric properties and geographical distances.
- Redis Search supports continuous indexing with no performance degradation, maintaining concurrent loads of querying and indexing. This makes it ideal for searching frequently updated databases without the need for batch indexing and service interrupts.
- The Enterprise version of Redis Search supports scaling the search engine across many servers, allowing it to easily grow to billions of documents on hundreds of servers.
- All of this is done while taking advantage of Redis's robust architecture and infrastructure. Using Redis's protocol, replication, persistence, and clustering, Redis Search delivers a powerful yet simple to manage and maintain search and indexing engine that can be used as a standalone database, or to augment existing Redis databases with advanced powerful indexing capabilities.

## Geospatial indexing
Source file: `raw/sources/20260409-docs-latest-develop-ai-search-and-query-indexing-geoindex-4f5f3860df.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- points are specified as numeric longitude-latitude pairs.
- [Well-Known Text (WKT)](https://en.wikipedia.org/wiki/Well-known_text_representation_of_geometry)
- format to specify both points and polygons using either geographical

## Aggregation queries
Source file: `raw/sources/20260409-docs-latest-develop-ai-search-and-query-query-aggregation-c0f2ea07a0.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- An aggregation query allows you to perform the following actions:
- This article explains the basic usage of the [FT.AGGREGATE]() command. For further details, see the [command specification]() and the [aggregations reference documentation]().
- The examples in this article use a schema with the following fields:

## Exact match queries
Source file: `raw/sources/20260409-docs-latest-develop-ai-search-and-query-query-exact-match-2628b072b1.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- An exact match query allows you to select all documents where a field matches a specific value.
- You can use exact match queries on several field types. The query syntax varies depending on the type.
- The examples in this article use a schema with the following fields:

## Full-text search
Source file: `raw/sources/20260409-docs-latest-develop-ai-search-and-query-query-full-text-37aa82598d.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- A full-text search finds words or phrases within larger texts. You can search within a specific text field or across all text fields.
- This article provides a good overview of the most relevant full-text search capabilities. Please find further details about all the full-text search features in the [reference documentation]().
- The examples in this article use a schema with the following fields:

## Geospatial queries
Source file: `raw/sources/20260409-docs-latest-develop-ai-search-and-query-query-geo-spatial-4165612475.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- The geospatial feature in Redis Open Source allows you to query for data associated with geographic locations. You can either query for locations within a specific radius or based on geometric shapes, such as polygons. A polygon shape could, for instance, represent a lake or the layout of a building.
- The examples in this article use the following schema:
- Redis version 7.2.0 or higher is required to use the `GEOSHAPE` field type.

## Range queries
Source file: `raw/sources/20260409-docs-latest-develop-ai-search-and-query-query-range-2958d99376.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- A range query on a numeric field returns the values that are in between a given start and end value:
- You can also use the `FILTER` argument, but you need to know that the query execution plan is different because the filter is applied after the query string (e.g., `*`) is evaluated:
- Start and end values are by default inclusive, but you can prepend `(` to a value to exclude it from the range.

## NRedisStack guide (C#/.NET)
Source file: `raw/sources/20260409-docs-latest-develop-clients-dotnet-c03904f671.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- [NRedisStack](https://github.com/redis/NRedisStack) is the .NET client for Redis.
- The sections below explain how to install `NRedisStack` and connect your application
- You can also access Redis with an object-mapping client interface. See

## Probabilistic data types
Source file: `raw/sources/20260409-docs-latest-develop-clients-dotnet-prob-482c32e5e4.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- that let you calculate values approximately rather than exactly.
- The types fall into two basic categories:
- the number of items in a set of distinct values, and whether or not a given value is

## Pipelines and transactions
Source file: `raw/sources/20260409-docs-latest-develop-clients-dotnet-transpipe-4918de3b13.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- Redis lets you send a sequence of commands to the server together in a batch.
- There are two types of batch that you can use:
- to the server together in a single communication. The server then sends back

## Vector set embeddings
Source file: `raw/sources/20260409-docs-latest-develop-clients-dotnet-vecsets-38fa8d970d.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- you store a set of unique keys, each with its own associated vector.
- You can then retrieve keys from the set according to the similarity between
- their stored vectors and a query vector that you specify.

## Connect to the server
Source file: `raw/sources/20260409-docs-latest-develop-clients-go-connect-9541c81616.md`
- The following example shows the simplest way to connect to a Redis server:
- You can also connect using a connection string:
- After connecting, you can test the connection by  storing and retrieving
- To connect to a Redis cluster, use `NewClusterClient()`. You can specify
- one or more cluster endpoints with the `Addrs` option:

## go-redis guide (Go)
Source file: `raw/sources/20260409-docs-latest-develop-clients-go-eb21a98ff6.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- [`go-redis`](https://github.com/redis/go-redis) is the [Go](https://go.dev/) client for Redis.
- The sections below explain how to install `go-redis` and connect your application to a Redis database.
- a Go module, so you must initialize a Go module before you start, or add your code to

## Error handling
Source file: `raw/sources/20260409-docs-latest-develop-clients-go-error-handling-df586625a7.md`
- go-redis uses **explicit error returns** following Go's idiomatic error handling pattern. Code examples in the documentation often omit error handling for brevity,
- This page explains how go-redis's error handling works and how to apply
- some common error handling patterns. For an overview of error types and handling
- for more information on connection management, timeouts, and other aspects of
- In Go, functions return errors as a second return value. You can check for errors explicitly with code like the following:

## Observability
Source file: `raw/sources/20260409-docs-latest-develop-clients-go-observability-d7592a1fd9.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- instrumentation to collect metrics. This can be very helpful for
- diagnosing problems and improving the performance and connection resiliency of
- for an introduction to Redis client observability and a reference guide for the

## Probabilistic data types
Source file: `raw/sources/20260409-docs-latest-develop-clients-go-prob-d1efe6eb0f.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- that let you calculate values approximately rather than exactly.
- The types fall into two basic categories:
- the number of items in a set of distinct values, and whether or not a given value is

## Production usage
Source file: `raw/sources/20260409-docs-latest-develop-clients-go-produsage-d1126ed800.md`
- This guide offers recommendations to get the best reliability and
- performance in your production environment.
- Each item in the checklist below links to the section
- for a recommendation. Use the checklist icons to record your
- progress in implementing the recommendations.

## Index and query documents
Source file: `raw/sources/20260409-docs-latest-develop-clients-go-queryjson-3f57e226db.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- run queries against the index. It then goes on to show the slight differences
- From [v9.8.0](https://github.com/redis/go-redis/releases/tag/v9.8.0) onwards,
- Redis Search methods such as [`FTSearch()`]()

## Pipelines and transactions
Source file: `raw/sources/20260409-docs-latest-develop-clients-go-transpipe-82bf32bdfd.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- Redis lets you send a sequence of commands to the server together in a batch.
- There are two types of batch that you can use:
- to the server together in a single communication. The server then sends back

## Index and query vectors
Source file: `raw/sources/20260409-docs-latest-develop-clients-go-vecsearch-0a03e68b86.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- lets you index vector fields in [hash]()
- Among other things, vector fields can store *text embeddings*, which are AI-generated vector
- representations of the semantic information in pieces of text. The

## Vector set embeddings
Source file: `raw/sources/20260409-docs-latest-develop-clients-go-vecsets-b88dadeb08.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- you store a set of unique keys, each with its own associated vector.
- You can then retrieve keys from the set according to the similarity between
- their stored vectors and a query vector that you specify.

## hiredis guide (C)
Source file: `raw/sources/20260409-docs-latest-develop-clients-hiredis-7a04a3adff.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- [`hiredis`](https://github.com/redis/hiredis) is the
- [C language](https://en.wikipedia.org/wiki/C_(programming_language))
- The sections below explain how to install `hiredis` and connect your application

## ioredis guide (JavaScript)
Source file: `raw/sources/20260409-docs-latest-develop-clients-ioredis-0b10d25da5.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- [`ioredis`](https://github.com/redis/ioredis) is a Redis client for Node.js/JavaScript.
- The sections below explain how to install `ioredis` and connect your application
- Redis actively maintains and supports `ioredis` since it is in widespread use, but

## Jedis guide (Java)
Source file: `raw/sources/20260409-docs-latest-develop-clients-jedis-ca9c9a8408.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- [Jedis](https://github.com/redis/jedis) is a synchronous Java client for Redis.
- a more advanced Java client that also supports asynchronous and reactive connections.
- The sections below explain how to install `Jedis` and connect your application

## Probabilistic data types
Source file: `raw/sources/20260409-docs-latest-develop-clients-jedis-prob-33d01da997.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- that let you calculate values approximately rather than exactly.
- The types fall into two basic categories:
- the number of items in a set of distinct values, and whether or not a given value is

## Pipelines and transactions
Source file: `raw/sources/20260409-docs-latest-develop-clients-jedis-transpipe-cd3c73b18a.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- Redis lets you send a sequence of commands to the server together in a batch.
- There are two types of batch that you can use:
- to the server together in a single communication. The server then sends back

## Vector set embeddings
Source file: `raw/sources/20260409-docs-latest-develop-clients-jedis-vecsets-d4f48b7cc9.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- you store a set of unique keys, each with its own associated vector.
- You can then retrieve keys from the set according to the similarity between
- their stored vectors and a query vector that you specify.

## Lettuce guide (Java)
Source file: `raw/sources/20260409-docs-latest-develop-clients-lettuce-1150b468d6.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- [Lettuce](https://github.com/redis/lettuce/tree/main/src/main) is an advanced Java client for Redis
- that supports synchronous, asynchronous, and reactive connections.
- If you only need synchronous connections then you may find the other Java client

## Index and query vectors
Source file: `raw/sources/20260409-docs-latest-develop-clients-lettuce-vecsearch-3af300f0fd.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- lets you index vector fields in [hash]()
- Among other things, vector fields can store *text embeddings*, which are AI-generated vector
- representations of the semantic information in pieces of text. The

## Vector set embeddings
Source file: `raw/sources/20260409-docs-latest-develop-clients-lettuce-vecsets-be80cedaaf.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- you store a set of unique keys, each with its own associated vector.
- You can then retrieve keys from the set according to the similarity between
- their stored vectors and a query vector that you specify.

## node-redis guide (JavaScript)
Source file: `raw/sources/20260409-docs-latest-develop-clients-nodejs-c0eab7f90c.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- [`node-redis`](https://github.com/redis/node-redis) is the Redis client for Node.js/JavaScript.
- The sections below explain how to install `node-redis` and connect your application
- node-redis is the recommended client library for Node.js/JavaScript,

## Index and query vectors
Source file: `raw/sources/20260409-docs-latest-develop-clients-nodejs-vecsearch-c447616975.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- lets you index vector fields in [hash]()
- Vector fields can store *text embeddings*, which are AI-generated vector
- between two embeddings measures their semantic similarity. When you compare the

## Vector set embeddings
Source file: `raw/sources/20260409-docs-latest-develop-clients-nodejs-vecsets-879f14597f.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- you store a set of unique keys, each with its own associated vector.
- You can then retrieve keys from the set according to the similarity between
- their stored vectors and a query vector that you specify.

## Distributed Locks with Redis
Source file: `raw/sources/20260409-docs-latest-develop-clients-patterns-distributed-locks-0882037cfd.md`
- different processes must operate with shared resources in a mutually
- There are a number of libraries and blog posts describing how to implement
- a DLM (Distributed Lock Manager) with Redis, but every library uses a different
- approach, and many use a simple approach with lower guarantees compared to
- what can be achieved with slightly more complex designs.

## Predis guide (PHP)
Source file: `raw/sources/20260409-docs-latest-develop-clients-php-56dc579a88.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- [`Predis`](https://github.com/predis/predis) is the recommended [PHP](https://php.net/)
- The sections below explain how to install `Predis` and connect your application to a Redis database.
- Although we provide basic documentation for `Predis`, it is a third-party

## Observability
Source file: `raw/sources/20260409-docs-latest-develop-clients-redis-py-observability-8757bc4df6.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- instrumentation to collect metrics. This can be very helpful for
- diagnosing problems and improving the performance and connection resiliency of
- for an introduction to Redis client observability and a reference guide for the

## Probabilistic data types
Source file: `raw/sources/20260409-docs-latest-develop-clients-redis-py-prob-1caf80f70c.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- that let you calculate values approximately rather than exactly.
- The types fall into two basic categories:
- the number of items in a set of distinct values, and whether or not a given value is

## Pipelines and transactions
Source file: `raw/sources/20260409-docs-latest-develop-clients-redis-py-transpipe-422968363c.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- Redis lets you send a sequence of commands to the server together in a batch.
- There are two types of batch that you can use:
- to the server together in a single communication. The server then sends back

## Index and query vectors
Source file: `raw/sources/20260409-docs-latest-develop-clients-redis-py-vecsearch-36654ce3f7.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- lets you index vector fields in [hash]()
- Among other things, vector fields can store *text embeddings*, which are AI-generated vector
- representations of the semantic information in pieces of text. The

## Vector set embeddings
Source file: `raw/sources/20260409-docs-latest-develop-clients-redis-py-vecsets-f9ce195f81.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- you store a set of unique keys, each with its own associated vector.
- You can then retrieve keys from the set according to the similarity between
- their stored vectors and a query vector that you specify.

## redis-rb guide (Ruby)
Source file: `raw/sources/20260409-docs-latest-develop-clients-ruby-8e1409eab5.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- [redis-rb](https://github.com/redis/redis-rb) is the Ruby client for Redis.
- The sections below explain how to install `redis-rb` and connect your application
- To install `redis-rb`, run the following command:

## redis-rs guide (Rust)
Source file: `raw/sources/20260409-docs-latest-develop-clients-rust-c18a50fa34.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- [`redis-rs`](https://github.com/redis-rs/redis-rs) is the [Rust](https://www.rust-lang.org/) client for Redis.
- The sections below explain how to install `redis-rs` and connect your application to a Redis database.
- Although we provide basic documentation for `redis-rs`, it is a third-party

## Pipelines and transactions
Source file: `raw/sources/20260409-docs-latest-develop-clients-rust-transpipe-d812d80ca9.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- Redis lets you send a sequence of commands to the server together in a batch.
- There are two types of batch that you can use:
- to the server together in a single communication. The server then sends back

## Redis bitfields
Source file: `raw/sources/20260409-docs-latest-develop-data-types-bitfields-170c8f2c95.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- [View all bitmap commands](https://redis.io/commands/?group=bitmap)
- | Command | Summary | Complexity | Since |
- |---------|---------|------------|-------|

## Redis bitmaps
Source file: `raw/sources/20260409-docs-latest-develop-data-types-bitmaps-025eefde2e.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- [View all bitmap commands](https://redis.io/commands/?group=bitmap)
- | Command | Summary | Complexity | Since |
- |---------|---------|------------|-------|

## Redis geospatial
Source file: `raw/sources/20260409-docs-latest-develop-data-types-geospatial-cefe176a38.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- [View all geo commands](https://redis.io/commands/?group=geo)
- | Command | Summary | Complexity | Since |
- |---------|---------|------------|-------|

## Redis hashes
Source file: `raw/sources/20260409-docs-latest-develop-data-types-hashes-dac35c5219.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- [View all hash commands](https://redis.io/commands/?group=hash)
- | Command | Summary | Complexity | Since |
- |---------|---------|------------|-------|

## Developer notes
Source file: `raw/sources/20260409-docs-latest-develop-data-types-json-developer-1775550674.md`
- Developing Redis JSON involves setting up the development environment (which can be either Linux-based or macOS-based), building RedisJSON (the Redis module providing JSON), running tests and benchmarks, and debugging both the JSON module and its tests.
- To clone the RedisJSON module and its submodules, run:
- There are several reasons to use an isolated environment for development, like keeping your workstation clean and developing for a different Linux distribution.
- You can use a virtual machine as an isolated development environment. To set one up, you can use [Vagrant](https://www.vagrantup.com) or Docker.
- To set up a virtual machine with Docker:

## JSON
Source file: `raw/sources/20260409-docs-latest-develop-data-types-json-f795f92e67.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- [View all json commands](https://redis.io/commands/?group=json)
- | Command | Summary | Complexity | Since |
- |---------|---------|------------|-------|

## Path
Source file: `raw/sources/20260409-docs-latest-develop-data-types-json-path-f69c0fd2e6.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- Paths let you access specific elements within a JSON document. Since no standard for JSON path syntax exists, Redis JSON implements its own. JSON's syntax is based on common best practices and intentionally resembles [JSONPath](http://goessner.net/articles/JsonPath/).
- JSON supports two query syntaxes: [JSONPath syntax](#jsonpath-syntax) and the [legacy path syntax](#legacy-path-syntax) from the first version of JSON.
- JSON knows which syntax to use depending on the first character of the path query. If the query starts with the character `$`, it uses JSONPath syntax. Otherwise, it defaults to the legacy path syntax.

## Redis lists
Source file: `raw/sources/20260409-docs-latest-develop-data-types-lists-8ec9bceff4.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- [View all list commands](https://redis.io/commands/?group=list)
- | Command | Summary | Complexity | Since |
- |---------|---------|------------|-------|

## Bloom filter
Source file: `raw/sources/20260409-docs-latest-develop-data-types-probabilistic-bloom-filter-7e5adf7c91.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- [View all bf commands](https://redis.io/commands/?group=bf)
- | Command | Summary | Complexity | Since |
- |---------|---------|------------|-------|

## Count-min sketch
Source file: `raw/sources/20260409-docs-latest-develop-data-types-probabilistic-count-min-sketch-f1e40b2e8d.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- [View all cms commands](https://redis.io/commands/?group=cms)
- | Command | Summary | Complexity | Since |
- |---------|---------|------------|-------|

## Cuckoo filter
Source file: `raw/sources/20260409-docs-latest-develop-data-types-probabilistic-cuckoo-filter-e4010a148a.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- [View all cf commands](https://redis.io/commands/?group=cf)
- | Command | Summary | Complexity | Since |
- |---------|---------|------------|-------|

## HyperLogLog
Source file: `raw/sources/20260409-docs-latest-develop-data-types-probabilistic-hyperloglogs-3cb22b5562.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- [View all hyperloglog commands](https://redis.io/commands/?group=hyperloglog)
- | Command | Summary | Complexity | Since |
- |---------|---------|------------|-------|

## t-digest
Source file: `raw/sources/20260409-docs-latest-develop-data-types-probabilistic-t-digest-521b41ff72.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- [View all tdigest commands](https://redis.io/commands/?group=tdigest)
- | Command | Summary | Complexity | Since |
- |---------|---------|------------|-------|

## Top-K
Source file: `raw/sources/20260409-docs-latest-develop-data-types-probabilistic-top-k-ab8057c283.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- [View all topk commands](https://redis.io/commands/?group=topk)
- | Command | Summary | Complexity | Since |
- |---------|---------|------------|-------|

## Redis sets
Source file: `raw/sources/20260409-docs-latest-develop-data-types-sets-c26c1665c5.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- [View all set commands](https://redis.io/commands/?group=set)
- | Command | Summary | Complexity | Since |
- |---------|---------|------------|-------|

## Redis sorted sets
Source file: `raw/sources/20260409-docs-latest-develop-data-types-sorted-sets-f747d4e0e1.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- [View all sorted-set commands](https://redis.io/commands/?group=sorted-set)
- | Command | Summary | Complexity | Since |
- |---------|---------|------------|-------|

## Redis Streams
Source file: `raw/sources/20260409-docs-latest-develop-data-types-streams-d6349cd00d.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- [View all stream commands](https://redis.io/commands/?group=stream)
- | Command | Summary | Complexity | Since |
- |---------|---------|------------|-------|

## Idempotent message processing
Source file: `raw/sources/20260409-docs-latest-develop-data-types-streams-idempotency-32a137ecb0.md`
- In Redis 8.6, streams support idempotent message processing (at-most-once production) to prevent duplicate entries when using at-least-once delivery patterns. This feature enables reliable message submission with automatic deduplication.
- Idempotent message processing ensures that handling the same message multiple times produces the same system state as handling it once.
- Beginning with Redis 8.6, streams support idempotent message processing (at-most-once production) to prevent duplicate entries when producers resend messages.
- Producers may need to resend messages under two scenarios:
- 1. Producer-Redis network issues (disconnection and reconnection).

## Redis Strings
Source file: `raw/sources/20260409-docs-latest-develop-data-types-strings-5044776fe2.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- [View all string commands](https://redis.io/commands/?group=string)
- | Command | Summary | Complexity | Since |
- |---------|---------|------------|-------|

## Time series
Source file: `raw/sources/20260409-docs-latest-develop-data-types-timeseries-e831e8f0a5.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- [View all timeseries commands](https://redis.io/commands/?group=timeseries)
- | Command | Summary | Complexity | Since |
- |---------|---------|------------|-------|

## Redis vector sets
Source file: `raw/sources/20260409-docs-latest-develop-data-types-vector-sets-f03d22597d.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- [View all module commands](https://redis.io/commands/?group=vector_set)
- | Command | Summary | Complexity | Since |
- |---------|---------|------------|-------|

## Memory optimization
Source file: `raw/sources/20260409-docs-latest-develop-data-types-vector-sets-memory-4ec89abe4e.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- Redis vector sets are efficient, but vector similarity indexing and graph traversal require memory tradeoffs. This guide helps you manage memory use through quantization, graph tuning, and attribute choices.
- Vector sets support three quantization levels:
- | Mode       | Memory usage  | Recall | Notes                           |

## Performance
Source file: `raw/sources/20260409-docs-latest-develop-data-types-vector-sets-performance-4c4ddbc9fa.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- Vector similarity queries using the [`VSIM`]() are threaded by default. Redis uses up to 32 threads to process these queries in parallel.
- Inserting vectors with the [`VADD`]() command is more computationally expensive than querying:
- Quantization greatly impacts both speed and memory:

## Redis as an in-memory data structure store quick start guide
Source file: `raw/sources/20260409-docs-latest-develop-get-started-data-store-98f87f9a83.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- This quick start guide shows you how to:
- 4. Scan the keyspace for keys that match a specific pattern
- The examples in this article refer to a simple bicycle inventory.

## Redis as a document database quick start guide
Source file: `raw/sources/20260409-docs-latest-develop-get-started-document-database-e55e0d0d54.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- This quick start guide shows you how to:
- The examples in this article refer to a simple bicycle inventory that contains JSON documents with the following structure:
- The easiest way to get started with [Redis]() is to use Redis Cloud:

## Redis FAQ
Source file: `raw/sources/20260409-docs-latest-develop-get-started-faq-7e62804340.md`
- * Redis has a different evolution path in the key-value DBs where values can contain more complex data types, with atomic operations defined on those data types. Redis data types are closely related to fundamental data structures and are exposed to the programmer as such, without additional abstraction layers.
- * Redis is an in-memory but persistent on disk database, so it represents a different trade off where very high write and read speed is achieved with the limitation of data sets that can't be larger than memory. Another advantage of
- in-memory databases is that the memory representation of complex data structures
- is much simpler to manipulate compared to the same data structures on disk, so
- Redis can do a lot with little internal complexity. At the same time the

## Redis for GenAI apps
Source file: `raw/sources/20260409-docs-latest-develop-get-started-redis-in-ai-07522879de.md`
- Redis enables high-performance, scalable, and reliable data management, making it a key component for GenAI apps, chatbots, and AI agents. By leveraging Redis for fast data retrieval, caching, and vector search capabilities, you can enhance AI-powered interactions, reduce latency, and improve user experience.
- Redis excels in storing and indexing vector embeddings that semantically represent unstructured data. With vector search, Redis retrieves similar questions and relevant data, lowering LLM inference costs and latency. It fetches pertinent portions of chat history, enriching context for more accurate and relevant responses. These features make Redis an ideal choice for RAG systems and GenAI apps requiring fast data access.
- [RedisVL]() is a Python library with an integrated CLI, offering seamless integration with Redis to enhance GenAI applications.
- Explore how Redis optimizes various GenAI applications through specific use cases, tutorials, and demo code repositories.
- Redis improves session persistence and caching for conversational agents managing high interaction volumes. See the [Flowise Conversational Agent with Redis](https://redis.io/learn/howtos/solutions/flowise/conversational-agent) tutorial and demo for implementation details.

## Redis programmability
Source file: `raw/sources/20260409-docs-latest-develop-programmability-654a626f4a.md`
- Redis provides a programming interface that lets you execute custom scripts on the server itself. In Redis 7 and beyond, you can use [Redis Functions]() to manage and run your scripts. In Redis 6.2 and below, you use [Lua scripting with the EVAL command]() to program the server.
- Redis is, by [definition](https://github.com/redis/redis/blob/unstable/MANIFESTO#L7), a _"domain-specific language for abstract data types"_.
- The language that Redis speaks consists of its [commands]().
- Most the commands specialize at manipulating core [data types]() in different ways.
- In many cases, these commands provide all the functionality that a developer requires for managing application data in Redis.

## Scripting with Lua
Source file: `raw/sources/20260409-docs-latest-develop-programmability-eval-intro-0173d81686.md`
- Redis lets users upload and execute Lua scripts on the server.
- Scripts can employ programmatic control structures and use most of the [commands]() while executing to access the database.
- Because scripts execute in the server, reading and writing data from scripts is very efficient.
- Redis guarantees the script's atomic execution.
- While executing the script, all server activities are blocked during its entire runtime.

## Redis functions
Source file: `raw/sources/20260409-docs-latest-develop-programmability-functions-intro-bb73700249.md`
- Redis Functions is an API for managing code to be executed on the server. This feature, which became available in Redis 7, supersedes the use of [EVAL]() in prior versions of Redis.
- Prior versions of Redis made scripting available only via the [`EVAL`]() command, which allows a Lua script to be sent for execution by the server.
- The core use cases for [Eval Scripts]() is executing part of your application logic inside Redis, efficiently and atomically.
- Such script can perform conditional updates across multiple keys, possibly combining several different data types.
- Using [`EVAL`]() requires that the application sends the entire script for execution every time.

## Redis Lua API reference
Source file: `raw/sources/20260409-docs-latest-develop-programmability-lua-api-5e7f63b52b.md`
- Redis includes an embedded [Lua 5.1](https://www.lua.org/) interpreter.
- The interpreter runs user-defined [ephemeral scripts]() and [functions](). Scripts run in a sandboxed context and can only access specific Lua packages. This page describes the packages and APIs available inside the execution's context.
- The sandboxed Lua context attempts to prevent accidental misuse and reduce potential threats from the server's environment.
- Scripts should never try to access the Redis server's underlying host systems.
- That includes the file system, network, and any other attempt to perform a system call other than those supported by the API.

## Key eviction
Source file: `raw/sources/20260409-docs-latest-develop-reference-eviction-6a0d6954b9.md`
- Redis is commonly used as a cache to speed up read accesses to a slower server
- or database. Since cache entries are copies of persistently-stored data, it
- is usually safe to evict them when the cache runs out of memory (they can be
- cached again in the future if necessary).
- Redis lets you specify an eviction policy to evict keys automatically

## Redis modules API
Source file: `raw/sources/20260409-docs-latest-develop-reference-modules-1321b22d5c.md`
- The modules documentation is composed of the following pages:
- * Introduction to Redis modules (this file). An overview about Redis Modules system and API. It's a good idea to start your reading here.
- * [Implementing native data types]() covers the implementation of native data types into modules.
- * [Blocking operations]() shows how to write blocking commands that will not reply immediately, but will block the client, without blocking the Redis server, and will provide a reply whenever will be possible.
- * [Redis modules API reference]() is generated from module.c top comments of RedisModule functions. It is a good reference in order to understand how each function works.

## Modules API reference
Source file: `raw/sources/20260409-docs-latest-develop-reference-modules-modules-api-ref-9d908d68a0.md`
- <!-- This file is generated from module.c using
- redis/redis:utils/generate-module-api-doc.rb -->
- * [Heap allocation raw functions](#section-heap-allocation-raw-functions)
- * [Module information and time measurement](#section-module-information-and-time-measurement)
- * [Automatic memory management for modules](#section-automatic-memory-management-for-modules)

## Modules API for native types
Source file: `raw/sources/20260409-docs-latest-develop-reference-modules-modules-native-types-bee753bda1.md`
- Redis modules can access Redis built-in data structures both at high level,
- by calling Redis commands, and at low level, by manipulating the data structures
- By using these capabilities in order to build new abstractions on top of existing
- Redis data structures, or by using strings DMA in order to encode modules
- data structures into Redis strings, it is possible to create modules that

## Redis CLI
Source file: `raw/sources/20260409-docs-latest-develop-tools-cli-b434c7f7fe.md`
- In interactive mode, `redis-cli` has basic line editing capabilities to provide a familiar typing experience.
- To launch the program in special modes, you can use several options, including:
- * Simulate a replica and print the replication stream it receives from the primary.
- * Check the latency of a Redis server and display statistics.
- * Request ASCII-art spectrogram of latency samples and frequencies.

## Redis Insight v2.70.0, May 2025
Source file: `raw/sources/20260409-docs-latest-develop-tools-insight-release-notes-v-2-70-0-5d826206ba.md`
- This is the General Availability (GA) release of Redis Insight 2.70.
- | Windows | AMAdQy5TsKc/76OAH4NdJ+abe/ogRdBGTPmVmAMgCG3O74hGZ0Q5h53HMaGzaOpTM+bEiRqTfi/i/iHgTNRmDA== |
- | Linux AppImage | 6E1d++C6C4M8P/onVHrdsC1CwsdQ1dYysLedbIhsgmsxR9t37LA+mdxIWFOCi0Z/XZqox/kGb/EjPxRIyF2apw== |
- | Linux Debian| 3opZq01Di5DCBEX1tYaO59dHbHmeG2928RrIZAcJKiZnGNLNbOeg3AuXalkYuzb3i/kIBLeEKQIwwzW7GFw0VA== |
- | Linux RPM | bC7FpokqgG7/gMqHQRy4pB6U1leu5pWXAcS0jPfUveQHfrbth2zcNlCCIiZ7QW4eUbxeObmDK8dfiL3GojSBLg== |

## RedisInsight v1.0, November 2019
Source file: `raw/sources/20260409-docs-latest-develop-tools-insight-release-notes-v1-0-0-0979ad5247.md`
- This is the initial release after [Redis acquired RDBTools](https://www.redislabs.com/blog/redisinsight-gui/).

## RedisInsight v1.6, June 2020
Source file: `raw/sources/20260409-docs-latest-develop-tools-insight-release-notes-v1-6-0-193e7e322a.md`
- Maintenance release for RedisInsight 1.6 including bug fixes and enhancements.
- Maintenance release for RedisInsight 1.6 including bug fixes and enhancements.
- Maintenance release for RedisInsight 1.6 including bug fixes and enhancements.
- This is the General Availability Release of RedisInsight 1.6!

## RedisInsight v1.7, September 2020
Source file: `raw/sources/20260409-docs-latest-develop-tools-insight-release-notes-v1-7-0-451349aebe.md`
- Maintenance release for RedisInsight 1.7 including bug fixes and enhancements.

## RedisInsight v1.8, November 2020
Source file: `raw/sources/20260409-docs-latest-develop-tools-insight-release-notes-v1-8-0-1e2d6eb91a.md`
- This is a maintenance release of RedisInsight 1.8 (v1.8.3)!
- This fixes the crash on MacOS Big Sur (11.1) for the MacOS package.
- RedisInsight is supported on Mac hardware with Intel chips, but not for Mac hardware with the Apple M1 (ARM) chip.
- This is the maintenance release of RedisInsight 1.8 (v1.8.2)!
- Maintenance release for RedisInsight 1.8 including bug fixes and enhancements.

## Token bucket rate limiter with Redis and Go
Source file: `raw/sources/20260409-docs-latest-develop-use-cases-rate-limiter-go-c9db92cb2b.md`
- This guide shows you how to implement a distributed token bucket rate limiter using Redis and Lua scripts in Go with the [`go-redis`]() client library.
- Rate limiting is a critical technique for controlling the rate at which operations are performed. Common use cases include:
- * Limiting API requests per user or IP address
- * Preventing abuse and protecting against denial-of-service attacks
- * Ensuring fair resource allocation across multiple clients

## Redis session store with Go
Source file: `raw/sources/20260409-docs-latest-develop-use-cases-session-store-go-248010bda2.md`
- This guide shows you how to implement a Redis-backed session store in Go with the [`go-redis`]() client library. It includes a small local web server built with Go's standard `net/http` package so you can see the session lifecycle end to end.
- Session storage is a common Redis use case for web applications. Instead of keeping session state in local process memory, you store it in Redis and send the browser only an opaque session ID in a cookie.
- * Shared sessions across multiple app servers
- * Fast reads and updates for small pieces of per-user state
- * A clean separation between browser cookies and server-side session data

## Transactions
Source file: `raw/sources/20260409-docs-latest-develop-using-commands-transactions-b457db9a9b.md`
- Redis Transactions allow the execution of a group of commands
- in a single step, they are centered around the commands
- [`MULTI`](), [`EXEC`](), [`DISCARD`]() and [`WATCH`]().
- Redis Transactions make two important guarantees:
- * All the commands in a transaction are serialized and executed

## Redis 8.2
Source file: `raw/sources/20260409-docs-latest-develop-whats-new-8-2-fadaad472d.md`
- Redis 8.2 builds on the foundation of Redis 8.0 with significant performance and memory optimizations, enhanced streaming capabilities, and improved cluster management tools.
- This release delivers major improvements across multiple areas:
- Below is a detailed breakdown of these updates.
- Redis 8.2 includes important security fixes:
- Redis 8.2 introduces powerful new commands that simplify consumer group management and stream lifecycle operations:

## Redis 8.4
Source file: `raw/sources/20260409-docs-latest-develop-whats-new-8-4-1ff98cca6f.md`
- Redis 8.4 builds on the foundation of Redis 8.2 with significant enhancements to cluster operations, string manipulation, and stream processing capabilities.
- This release delivers major improvements across multiple areas:
- Below is a detailed breakdown of these updates.
- Redis 8.4 introduces the [`CLUSTER MIGRATION`]() command, which enables atomic slot migration between cluster nodes. This command ensures zero-downtime cluster operations by moving slots and their associated data in a single atomic operation, eliminating the brief unavailability window that previously occurred during slot migrations.
- Redis 8.4 extends string manipulation capabilities with powerful new commands that enable atomic compare-and-set operations:

## Redis 8.6
Source file: `raw/sources/20260409-docs-latest-develop-whats-new-8-6-de08feff7b.md`
- Redis 8.6 builds on the foundation of Redis 8.4 with significant enhancements to stream reliability, memory management, and security features.
- This release delivers major improvements across multiple areas:
- Below is a detailed breakdown of these updates.
- Redis 8.6 includes important security and privacy enhancements:
- Redis 8.6 introduces powerful idempotency features for [Redis Streams]() that provide at-most-once delivery guarantees:

## Redis feature sets
Source file: `raw/sources/20260409-docs-latest-develop-whats-new-redis-feature-sets-f48094dd22.md`
- A Redis feature set includes a specific Redis database version along with the advanced capabilities and data structures provided by compatible module versions.
- To use a new feature introduced in a later feature set, you must upgrade the corresponding components according to the following table.
- | **Feature set version:** 8.6| See [here]()|
- | **Feature set version:** 8.4| See [here]()|
- | **Feature set version:** 8.2| See [here]()|

## Open Source
Source file: `raw/sources/20260409-docs-latest-get-started-a09450b57f.md`
- Since 2009, the Redis open source project has inspired an enthusiastic and active community of users and contributors. The Redis core source repository is hosted under [https://github.com/redis/redis](https://github.com/redis/redis) along with many of the client libraries. See the [Redis Open Source]() page for more details and links.
- You can install Redis from source or from an executable/distribution for your OS.
- * Install Redis on Linux using [APT](), [RPM](), or [Snap]()
- * [Install Redis with Redis Stack and Redis Insight]()
- The following quick start guides will show you how to use Redis for the following specific purposes:

## Glossary
Source file: `raw/sources/20260409-docs-latest-glossary-165453db33.md`
- Allows you to manage permissions based on key patterns.
- More info: [redis.io/operate/oss_and_stack/management/security/acl](); [ACL wikipedia](https://en.wikipedia.org/wiki/Access-control_list); [Database access control](); [Update database ACLs](); [Role-based access control]()
- Geo-distributed databases that span multiple [Redis Enterprise Software]() [clusters](). Active-Active databases, also known as conflict-free replicated databases (CRDB), depend on [multi-primary replication]() and [conflict-free replicated data types (CRDTs)]() to power a simple development experience for geo-distributed applications.
- More info: [Active-Active geo-distributed Redis](), [Geo-distributed Active-Active Redis applications](), [Developing applications for Active-Active databases]()
- A "member database" of a global [Active-Active database]() which is made up of its own master and replica [shards]() spanning a single [cluster]().

## Pulumi provider for Redis Cloud
Source file: `raw/sources/20260409-docs-latest-integrate-pulumi-provider-for-redis-cloud-24565522f9.md`
- [Pulumi](https://www.pulumi.com/) is an automation tool that allows you to easily provision infrastructure as code. Pulumi allows developers to write infrastructure code using programming languages rather than using domain-specific languages.
- With the [Redis Cloud Resource Provider](https://www.pulumi.com/registry/packages/rediscloud/), you can create Redis Cloud resources in a programming language. The Pulumi Redis Cloud Provider supports the following programming languages:
- The Redis Cloud Pulumi provider is based on the [Redis Cloud Terraform provider]().
- The Redis Cloud Pulumi Redis Cloud provider supports Redis Cloud Pro. It does not support Redis Cloud Essentials.
- See [Get started with Pulumi]() for an example of how to use the Pulumi provider with Python.

## Redis Data Integration
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-14d3848c9c.md`
- This is the first General Availability version of Redis Data Integration (RDI).
- RDI's purpose is to help Redis customers sync Redis Enterprise with live data from their slow disk based databases in order to:
- If you use a relational database as the system of record for your app,
- that its performance doesn't scale well as your userbase grows. It may be
- acceptable for a few thousand users but for a few million, it can become a

## FAQ
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-faq-3c379c42bc.md`
- You must purchase a commercial license for RDI with Redis Enterprise. This includes two extra
- Redis Enterprise shards (primary and replica) for the staging database.
- RDI uses mechanisms that are specific for each of the supported
- lists any changes in a database view that RDI can query.
- RDI uses the concept of *processing units*. Each processing unit uses 1 CPU core and can process

## Redis Data Integration release notes 1.16.2 (March 2026)
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-release-notes-rdi-1-16-2-49a6ee2248.md`
- This maintenance release replaces the 1.16.1 release.
- RDI's mission is to help Redis customers sync Redis Enterprise with live data from their slow disk-based databases to:
- RDI keeps the Redis cache up to date with changes in the primary database, using a [_Change Data Capture (CDC)_](https://en.wikipedia.org/wiki/Change_data_capture) mechanism.
- It also lets you _transform_ the data from relational tables into convenient and fast data structures that match your app's requirements. You specify the transformations using a configuration system, so no coding is required.
- RDI can write data to a Redis Active-Active database. However, it doesn't support writing data to two or more Active-Active replicas. Writing data from RDI to several Active-Active replicas could easily harm data integrity as RDI is not synchronous with the source database commits.

## Redis Data Integration release notes 1.6.0 (February 2025)
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-release-notes-rdi-1-6-0-4e65e35200.md`
- > This maintenance release replaces the 1.4.4 release.
- RDIâs mission is to help Redis customers sync Redis Enterprise with live data from their slow disk-based databases to:
- RDI keeps the Redis cache up to date with changes in the primary database, using a [_Change Data Capture (CDC)_](https://en.wikipedia.org/wiki/Change_data_capture) mechanism.
- It also lets you _transform_ the data from relational tables into convenient and fast data structures that match your app's requirements. You specify the transformations using a configuration system, so no coding is required.
- RDI can write data to a Redis Active-Active database. However, it doesn't support writing data to two or more Active-Active replicas. Writing data from RDI to several Active-Active replicas could easily harm data integrity as RDI is not synchronous with the source database commits.

## Terraform provider for Redis Cloud
Source file: `raw/sources/20260409-docs-latest-integrate-terraform-provider-for-redis-cloud-a7b1c978e1.md`
- [Terraform](https://developer.hashicorp.com/terraform) is an open source automation tool developed by Hashicorp that allows you to easily provision infrastructure as code.
- Redis develops and maintains a [Terraform provider for Redis Cloud](https://registry.terraform.io/providers/RedisLabs/rediscloud/latest). The Redis Cloud Terraform provider allows many of the same actions as found in the [Redis Cloud API]().
- See [Get started with Terraform]() for an example of how to use the Terraform provider.
- The Terraform provider represents API actions as data sources and resources. Data sources are read-only and allow you to get information, while resources allow you to create and manage infrastructure.
- The Redis Cloud Terraform provider allows for the following data sources:

## Get started with Terraform
Source file: `raw/sources/20260409-docs-latest-integrate-terraform-provider-for-redis-cloud-get-started-375d88468f.md`
- Here, you'll learn how to use the [Redis Cloud Terraform Provider]() to create a subscription and a database.
- 1. [Install Terraform](https://developer.hashicorp.com/terraform/tutorials/aws-get-started/install-cli).
- 1. [Create a Redis Cloud account]() if you do not have one already.
- 1. Get your Redis Cloud [API keys](). Set them to the following environment variables:
- 1. Create a file to contain the Terraform configuration called `main.tf`.

## Redis products
Source file: `raw/sources/20260409-docs-latest-operate-5a121233bd.md`
- | <ul><li> [Get started with Redis Cloud]() </li><li> [Create a database]() </li><li> [Connect to your database]() </li><li> [Subscriptions]() </li><li>[REST API]()</li></ul> | <ul><li> [Install Redis Software]() </li><li> [Set up a new cluster]() </li><li> [Create a database]() </li><li> [Connect to your database]() </li><li>[REST API]()</li></ul> |
- |  **Redis Open Source** |  **Redis for Kubernetes** |
- | <ul><li> [Install Redis 8 in Redis Open Source]() </li><li> [Install Redis Stack]() (&#8804; 7.4) </li><li> [Manage Redis]() </li></ul> | <ul><li> [Deploy Redis for Kubernetes]() </li><li> [Architecture]() </li><li> [API Reference]() </li></ul> |
- |  **Redis Insight** |  **Redis Data Integration (RDI)** |
- | <ul><li> [Install Redis Insight]() </li><li> [Use Redis Insight]() </li><li> [Download Redis Insight](https://redis.io/downloads/#insight) </li></ul> | <ul><li> [RDI overview]() </li><li> [Install RDI]() </li> <li> [RDI pipelines]() </li> </ul> |

## Active-Active databases
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-active-active-b3866913e1.md`
- Redis Enterprise [Active-Active]() databases on Kubernetes provide read and write access to the same dataset from different Kubernetes clusters. This enables globally distributed applications with local read and write access, automatic conflict resolution, and seamless failover capabilities.
- Active-Active databases use multi-master replication to keep data synchronized across participating clusters, allowing applications to read and write data locally while maintaining global consistency.
- There are two methods for creating an Active-Active database with Redis Enterprise for Kubernetes:
- We recommend creating new Active-Active databases using the RedisEnterpriseActiveActiveDatabase (REAADB) custom resource. This allows you to manage your Active-Active database with the operator and ensures you have the latest features and functionality.
- Versions 6.4.2-6 or later fully support the Active-Active controller. Some of these features were available as a preview in 6.4.2-4 and 6.4.2-5. Please upgrade to 6.4.2-6 for the full set of general availability features and bug fixes.

## Create Active-Active databases with crdb-cli
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-active-active-create-aa-crdb-cli-ac488f0c0f.md`
- On Kubernetes, Redis Enterprise [Active-Active]() databases provide read-and-write access to the same dataset from different Kubernetes clusters. For more general information about Active-Active, see the [Redis Enterprise Software docs]().
- Creating an Active-Active database requires routing [network access]() between two Redis Enterprise clusters residing in different Kubernetes clusters. Without the proper access configured for each cluster, syncing between the databases instances will fail.
- 1. Documenting values to be used in later steps. It's important these values are correct and consistent.
- 1. Editing the Redis Enterprise cluster (REC) spec file to include the `ActiveActive` section. This will be slightly different depending on the K8s distribution you are using.
- 1. Creating the database with the `crdb-cli` command. These values must match up with values in the REC resource spec.

## Flex on Kubernetes
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-flex-8941fa1334.md`
- Flex extends your database capacity by combining RAM and flash (SSD) storage. This tiered architecture keeps frequently accessed (hot) data in RAM for sub-millisecond latency while storing less active (warm) data on flash to reduce costs and increase capacity.
- Flex databases work with your existing Redis applications and the Redis API without modification.
- Flex moves data between RAM and flash based on access patterns:
- Redis uses an [LRU (least recently used)]() eviction policy to manage data placement. When memory pressure increases, Flex identifies cold objects, transfers them to flash, and frees RAM for new or frequently accessed keys.
- This process requires no application changes. Your existing Redis commands work across both storage tiers.

## Plan a Redis Flex deployment on Kubernetes
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-flex-plan-c2318a180e.md`
- Review the hardware requirements, sizing guidelines, and known limitations before you deploy Redis Flex.
- For more information about storage configuration, see [Kubernetes local volumes](https://kubernetes.io/docs/concepts/storage/volumes/#local).
- Provision Flash capacity that exceeds your total database size. The extra space accounts for:
- | SSD type              | Recommendation                 |
- |-----------------------|--------------------------------|

## Configure Ingress for external routing
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-networking-ingress-a8ff0357f7.md`
- Before creating an Ingress, you'll need:
- Make sure your Ingress controller has `ssl-passthrough`enabled. This is enabled by default for HAProxy, but disabled by default for NGINX. See the [NGINX User Guide](https://kubernetes.github.io/ingress-nginx/user-guide/tls/#ssl-passthrough) for details.
- 1. Retrieve the hostname of your Ingress controller's `LoadBalancer` service.
- Below is example output for an HAProxy running on a K8s cluster hosted by AWS.
- 1. Choose the hostname you will use to access your database (this value will be represented in this article with `<my-db-hostname>`).

## Recover a Redis Enterprise cluster on Kubernetes
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-re-clusters-cluster-recovery-2bc7436f12.md`
- the cluster stops responding to client connections.
- When this happens, you must recover the cluster to restore the connections.
- You can also perform cluster recovery to reset cluster nodes, to troubleshoot issues, or in a case of active/passive failover.
- The Redis Enterprise for Kubernetes automates these recovery steps:
- 1. Recreates a fresh Redis Enterprise cluster

## Expand PersistentVolumeClaim (PVC)
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-re-clusters-expand-pvc-f5f871de44.md`
- This article outlines steps to increase the size of the persistent volume claim for your Redis Enterprise cluster (REC).
- This feature is only supported in versions 7.4.2-12 and above.
- [PersistentVolumeClaims (PVC)](https://kubernetes.io/docs/concepts/storage/persistent-volumes/#expanding-persistent-volumes-claims) are created by the Redis Enterprise operator and used by the RedisEnterpriseCluster (REC). PVCs are created with a specific size and [can be expanded](https://kubernetes.io/docs/concepts/storage/persistent-volumes/#expanding-persistent-volumes-claims) with the following steps, if the underlying [storage class](https://kubernetes.io/docs/concepts/storage/storage-classes/) supports it.
- This process involves deleting and recreating the REC StatefulSet with a larger persistent volume size. The pods owned by the StatefulSet are not restarted or affected by the deletion and recreation process, except when they are left without an owner momentarily.
- Shrinking (reducing the size) of your PVC is not allowed. This process only allows you to expand (size up) your PVC.

## Redis Enterprise databases (REDB)
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-re-databases-0d8793de0b.md`
- A Redis Enterprise database (REDB) is a custom Kubernetes resource that represents a Redis database running on a Redis Enterprise cluster. The Redis Enterprise operator manages REDB resources and handles database creation, configuration, scaling, and lifecycle operations.
- REDB resources define database specifications including memory limits, persistence settings, security configurations, networking options, and Redis modules. You can deploy databases on existing Redis Enterprise clusters (REC) and manage them by using standard Kubernetes tools and workflows.
- Create and manage Redis Enterprise databases on your cluster:
- Set up database replication for high availability and disaster recovery:
- Explore advanced database features and configurations:

## Use persistent volumes in Redis Enterprise clusters
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-recommendations-persistent-volumes-888319afb9.md`
- Redis Enterprise for Kubernetes can only use storage classes supported by block storage. Block storage is mounted at the Kubernetes node level and utilizes EXT4 or XFS file systems. It can be sourced from enterprise-grade SANs or cloud environments such as EBS, Azure Managed Disks, or GCP persistent disks.
- NFS, NFS-like, and multi-read-write/shared storage options are not supported. These types of storage are often slow and can cause locking behaviors that are incompatible with the requirements of database storage.
- To deploy a Redis Enterprise cluster with Redis Enterprise operator the
- spec should include a *persistentSpec* section, in the
- Persistence storage is a requirement for production deployments.

## RedisEnterpriseActiveActiveDatabase API Reference
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-reference-api-redis-enterprise-active-active-data-aa55c2a192.md`
- RedisEnterpriseActiveActiveDatabase is the Schema for the redisenterpriseactiveactivedatabase API
- <td>RedisEnterpriseActiveActiveDatabase</td>
- <td><a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.27/#objectmeta-v1-meta">metadata</a></td>
- <td>Refer to the Kubernetes API documentation for the fields of the `metadata` field.</td>
- RedisEnterpriseActiveActiveDatabaseSpec defines the desired state of RedisEnterpriseActiveActiveDatabase<br/>

## RedisEnterpriseCluster API Reference
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-reference-api-redis-enterprise-cluster-api-5d17e56c8c.md`
- RedisEnterpriseCluster is the Schema for the redisenterpriseclusters API
- <td><a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.27/#objectmeta-v1-meta">metadata</a></td>
- <td>Refer to the Kubernetes API documentation for the fields of the `metadata` field.</td>
- RedisEnterpriseClusterSpec defines the desired state of RedisEnterpriseCluster<br/>
- RedisEnterpriseClusterSpec defines the desired state of RedisEnterpriseCluster

## RedisEnterpriseDatabase API Reference
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-reference-api-redis-enterprise-database-api-59e8b41ca6.md`
- RedisEnterpriseDatabase is the Schema for the redisenterprisedatabases API
- <td><a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.27/#objectmeta-v1-meta">metadata</a></td>
- <td>Refer to the Kubernetes API documentation for the fields of the `metadata` field.</td>
- RedisEnterpriseDatabaseSpec defines the desired state of RedisEnterpriseDatabase<br/>
- RedisEnterpriseDatabaseStatus defines the observed state of RedisEnterpriseDatabase<br/>

## Redis Enterprise for Kubernetes 7.4.2-12 (May 2024) release notes
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-release-notes-7-4-2-releases-7-4-2-12-1c898cd016.md`
- This release has many enhancements, most notably support for persistent volume expansion in the REC. Also, some essential changes in module handling support newer capabilities prompted by changes in the underlying Redis Enterprise around versioning.
- | **CRD** | **Field** | **Change** | **Description** |
- | REC | spec.persistentSpec.enablePersistentVolumeResize | ADD | Set to "true" to allow changes in volumeSize after REC creation (for sizing up only) |
- | REC | status.persistenceStatus | ADD | Indicates the status of persistent volume expansion |
- | REC | spec.redisEnterpriseIPFamily | ADD | Configure which IP family to use when Kubernetes cluster has Dual Stack networking enabled  |

## Redis Enterprise for Kubernetes Release Notes 5.4.10-8 (January 2020)
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-release-notes-previous-releases-k8s-5-4-10-8-41033ffa4f.md`
- This release includes Redis Enterprise (RS) version [5.4.10-22]() and introduces new feature and bug fixes.
- This is a maintenance release providing support for the Redis Enterprise Software release 5.4.10 and includes multiple enhancements.
- Follow these [instructions]() for upgrading to this Kubernetes operator release.
- Pay special attention to the yaml file naming changes and new yaml files that have been created for this release. These are highlighted in the quick start guide.
- See the top 4 articles in the new [Additonal Topics](https://github.com/RedisLabs/redis-enterprise-k8s-docs/blob/92a2eff4b8c4ccafac459138f12e5f38acde825c/docs/topics.md#additional-topics) documentation section.

## Redis Enterprise for Kubernetes Release Notes 6.0.6-11 (July 2020)
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-release-notes-previous-releases-k8s-6-0-6-11-ebdc1ea258.md`
- The Redis Enterprise K8s 6.0.6-11 release is a *maintenance release* on top of [6.0.6-6](https://github.com/RedisLabs/redis-enterprise-k8s-docs/releases/tag/v6.0.6-6) providing support for the latest [Redis Enterprise Software release 6.0.6-39](https://docs.redislabs.com/latest/rs/release-notes/rs-6-0-may-2020/) and includes several bug fixes.
- To upgrade your deployment to this latest release, see ["Upgrade a Redis Enterprise cluster (REC) on Kubernetes"]().

## Redis Enterprise for Kubernetes Release Notes 6.0.6-6 (June 2020)
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-release-notes-previous-releases-k8s-6-0-6-6-df991d03e5.md`
- To upgrade your deployment to this latest release, see ["Upgrade a Redis Enterprise cluster (REC) on Kubernetes"]().
- If you are running Active-Active (CRBD) databases on a previous release, do not upgrade to 6.0.6-6 at this time. There is an issue with the upgrade process that is currently being investigated (RED43635). For more information and support please [contact Redis support](https://redislabs.com/company/support/).
- and manage databases on a Redis Enterprise cluster via a custom resource (RED36516).
- has been added to the cluster CR (see podTolerations) (RED33069).
- added to the cluster CR (see podAnnotations) (RED35613).

## Install Redis
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-install-archive-install-redis-e6240a2392.md`
- This is a an installation guide. You'll learn how to install, run, and experiment with the Redis server process.
- While you can install Redis on any of the platforms listed below, you might also consider using Redis Cloud by creating a [free account](https://redis.com/try-free?utm_source=redisio&utm_medium=referral&utm_campaign=2023-09-try_free&utm_content=cu-redis_cloud_users). You can also download [Redis Insight](), a free developer tool that works with Redis.
- How you install Redis depends on your operating system. See the guide below that best fits your needs:
- Refer to [Redis Administration]() for detailed setup tips.
- After you have Redis up and running, you can connect using `redis-cli`.

## Run Redis Stack on Docker
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-install-archive-install-stack-docker-bb2b842063.md`
- To get started with Redis Stack using Docker, you first need to select a Docker image:
- * `redis/redis-stack` contains both Redis Stack server and Redis Insight. This container is best for local development because you can use the embedded Redis Insight to visualize your data.
- * `redis/redis-stack-server` provides Redis Stack server only. This container is best for production deployment.
- To start Redis Stack server using the `redis-stack-server` image, run the following command in your terminal:
- docker run -d --name redis-stack-server -p 6379:6379 redis/redis-stack-server:latest

## Run Redis Open Source on Docker
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-install-install-stack-docker-688117899b.md`
- Follow the Docker installation instructions for your operating system:
- On Windows, make sure Docker is configured to run Linux-based containers.
- To start the Redis Open Source server using the `redis:<version>` image, run the following command in your terminal:
- docker run -d --name redis -p 6379:6379 redis:<version>
- You can then connect to the server using `redis-cli`, just as you connect to any Redis instance.

## Upgrade a Redis cluster to Redis 8
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-install-upgrade-cluster-0bede035e9.md`
- It's essential to practice upgrading Redis in a controlled environment before upgrading it in a production environment.
- Docker is an excellent tool to use for this purpose.
- Follow these instructions to upgrade a Redis cluster. This guide assumes you have installed Redis using one of the supported methods listed [here]().
- Before upgrading, create a snapshot of your current dataset on each node (identified by its port) using the following command:
- Repeat for every node in your cluster, both masters and replicas.

## Upgrade a standalone Redis instance to Redis 8
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-install-upgrade-standalone-59febb1a2e.md`
- It's essential to practice upgrading Redis in a controlled environment before upgrading it in a production environment.
- Docker is an excellent tool to use for this purpose.
- Follow these instructions to upgrade a single-node Redis server. This guide assumes you have installed Redis using one of the supported methods listed [here]().
- Before upgrading, create a snapshot of your current dataset using the following command:
- This creates or updates an `RDB` file, for example `dump.rdb`, in your Redis data directory. If you use AOF persistence, the files will be named `appendonly.aof.*` and they will be written in the `appendonlydir` directory inside the data directory. The AOF-related directory and file names are the defaults. Use the names defined in your `redis.conf` file if different from the defaults.

## Redis administration
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-management-admin-386fe0d937.md`
- * Deploy Redis using the Linux operating system. Redis is also tested on OS X, and from time to time on FreeBSD and OpenBSD systems. However, Linux is where most of the stress testing is performed, and where most production deployments are run.
- * Set the Linux kernel overcommit memory setting to 1. Add `vm.overcommit_memory = 1` to `/etc/sysctl.conf`. Then, reboot or run the command `sysctl vm.overcommit_memory=1` to activate the setting. See [FAQ: Background saving fails with a fork() error on Linux?]() for details.
- * To ensure the Linux kernel feature Transparent Huge Pages does not impact Redis memory usage and latency, run the command: `echo never > /sys/kernel/mm/transparent_hugepage/enabled` to disable it. See [Latency Diagnosis - Latency induced by transparent huge pages]() for additional context.
- * Ensured that swap is enabled and that your swap file size is equal to amount of memory on your system. If Linux does not have swap set up, and your Redis instance accidentally consumes too much memory, Redis can crash when it is out of memory, or the Linux kernel OOM killer can kill the Redis process. When swapping is enabled, you can detect latency spikes and act on them.
- * Set an explicit `maxmemory` option limit in your instance to make sure that it will report errors instead of failing when the system memory limit is near to be reached. Note that `maxmemory` should be set by calculating the overhead for Redis, other than data, and the fragmentation overhead. So if you think you have 10 GB of free memory, set it to 8 or 9.

## Redis configuration
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-management-config-2fd6ffafbd.md`
- Redis is able to start without a configuration file using a built-in default
- configuration, however this setup is only recommended for testing and
- The proper way to configure Redis is by providing a Redis configuration file,
- usually called `redis.conf`. Beginning with Redis 8 in Redis Open Source, there are two configuration files:
- * `redis.conf` - contains the configuration settings for Redis server only.

## Redis benchmark
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-management-optimization-benchmarks-25321d80a3.md`
- Redis includes the `redis-benchmark` utility that simulates running commands done
- by N clients at the same time sending M total queries (it is similar to the
- Apache's `ab` utility). Below you'll find the full output of a benchmark executed
- Usage: redis-benchmark [-h <host>] [-p <port>] [-c <clients>] [-n <requests]> [-k <boolean>]
- SADD, random members and scores for ZADD.

## Diagnosing latency issues
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-management-optimization-latency-f63745f59a.md`
- This document will help you understand what the problem could be if you
- are experiencing latency problems with Redis.
- In this context *latency* is the maximum delay between the time a client
- issues a command and the time the reply to the command is received by the
- client. Usually Redis processing time is extremely low, in the sub microsecond

## Redis latency monitoring
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-management-optimization-latency-monitor-6ae3c3503e.md`
- Redis is often used for demanding use cases, where it
- serves a large number of queries per second per instance, but also has strict latency requirements for the average response
- While Redis is an in-memory system, it deals with the operating system in
- different ways, for example, in the context of persisting to disk.
- Moreover Redis implements a rich set of commands. Certain commands

## Memory optimization
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-management-optimization-memory-optimization-177c296b57.md`
- Since Redis 2.2 many data types are optimized to use less space up to a certain size.
- Hashes, Lists, Sets composed of just integers, and Sorted Sets, when smaller than a given number of elements, and up to a maximum element size, are encoded in a very memory-efficient way that uses *up to 10 times less memory* (with 5 times less memory used being the average saving).
- This is completely transparent from the point of view of the user and API.
- Since this is a CPU / memory tradeoff it is possible to tune the maximum
- number of elements and maximum element size for special encoded types

## Redis persistence
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-management-persistence-9d6e91705d.md`
- Persistence refers to the writing of data to durable storage, such as a solid-state disk (SSD). Redis provides a range of persistence options. These include:
- * **RDB** (Redis Database): RDB persistence performs point-in-time snapshots of your dataset at specified intervals.
- * **AOF** (Append Only File): AOF persistence logs every write operation received by the server. These operations can then be replayed again at server startup, reconstructing the original dataset. Commands are logged using the same format as the Redis protocol itself.
- * **No persistence**: You can disable persistence completely. This is sometimes used when caching.
- * **RDB + AOF**: You can also combine both AOF and RDB in the same instance.

## Redis replication
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-management-replication-4dab402367.md`
- At the base of Redis replication (excluding the high availability features provided as an additional layer by Redis Cluster or Redis Sentinel) there is a *leader follower* (master-replica) replication that is simple to use and configure. It allows replica Redis instances to be exact copies of master instances. The replica will automatically reconnect to the master every time the link breaks, and will attempt to be an exact copy of it *regardless* of what happens to the master.
- This system works using three main mechanisms:
- 1. When a master and a replica instance are well-connected, the master keeps the replica updated by sending a stream of commands to the replica to replicate the effects on the dataset happening on the master side due to: client writes, keys expired or evicted, any other action changing the master dataset.
- 2. When the link between the master and the replica breaks, for network issues or because a timeout is sensed in the master or the replica, the replica reconnects and attempts to proceed with a partial resynchronization: it means that it will try to just obtain the part of the stream of commands it missed during the disconnection.
- 3. When a partial resynchronization is not possible, the replica will ask for a full resynchronization. This will involve a more complex process in which the master needs to create a snapshot of all its data, send it to the replica, and then continue sending the stream of commands as the dataset changes.

## Scale with Redis Cluster
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-management-scaling-f0544aeae8.md`
- Redis scales horizontally with a deployment topology called Redis Cluster.
- This topic will teach you how to set up, test, and operate Redis Cluster in production.
- You will learn about the availability and consistency characteristics of Redis Cluster from the end user's point of view.
- If you plan to run a production Redis Cluster deployment or want to understand better how Redis Cluster works internally, consult the [Redis Cluster specification](). To learn how Redis Enterprise handles scaling, see [Linear Scaling with Redis Enterprise](https://redis.com/redis-enterprise/technology/linear-scaling-redis-enterprise/).
- Redis Cluster provides a way to run a Redis installation where data is automatically sharded across multiple Redis nodes.

## ACL
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-management-security-acl-daeb460323.md`
- The Redis ACL, short for Access Control List, is the feature that allows certain
- connections to be limited in terms of the commands that can be executed and the
- keys that can be accessed. The way it works is that, after connecting, a client
- is required to provide a username and a valid password to authenticate. If authentication succeeded, the connection is associated with a given
- user and the limits the user has. Redis can be configured so that new

## Redis security
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-management-security-e71e416d07.md`
- This document provides an introduction to the topic of security from the point of
- view of Redis. It covers the access control provided by Redis, code security concerns,
- attacks that can be triggered from the outside by selecting malicious inputs, and
- You can learn more about access control, data protection and encryption, secure Redis architectures, and secure deployment techniques by taking the [Redis University security course](https://university.redis.com/courses/ru330/).
- For security-related contacts, open an issue on GitHub, or when you feel it

## High availability with Redis Sentinel
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-management-sentinel-e06308621e.md`
- Redis Sentinel provides high availability for Redis when not using [Redis Cluster]().
- Redis Sentinel also provides other collateral tasks such as monitoring,
- notifications and acts as a configuration provider for clients.
- This is the full list of Sentinel capabilities at a macroscopic level (i.e. the *big picture*):
- * **Monitoring**. Sentinel constantly checks if your master and replica instances are working as expected.

## ARM support
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-reference-arm-6a781e62be.md`
- Redis versions 4.0 and above support the ARM processor in general, and
- the Raspberry Pi specifically, as a main platform. Every new release of Redis is tested on the Pi
- environment, and we update this documentation page with information about supported devices and other useful information. While Redis does run on Android, in the future we look forward to extend our testing efforts to Android
- to also make it an officially supported platform.
- We believe that Redis is ideal for IoT and embedded devices for several

## Virtual memory (deprecated)
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-reference-internals-internals-vm-10ffa1ecd9.md`
- **Note: This document was written by the creator of Redis, Salvatore Sanfilippo, early in the development of Redis (c. 2010). Virtual Memory was deprecated in Redis 2.4 and removed in Redis 2.6, so this documentation exists only for historical interest.**
- This document details the internals of the Redis Virtual Memory subsystem prior to Redis 2.6. The intended audience is not the final user but programmers willing to understand or modify the Virtual Memory implementation.
- The goal of the VM subsystem is to free memory transferring Redis Objects from memory to disk. This is a very generic command, but specifically, Redis transfers only objects associated with _values_. In order to understand better this concept we'll show, using the DEBUG command, how a key holding a value looks from the point of view of the Redis internals:
- Key at:0x100101d00 refcount:1, value at:0x100101ce0 refcount:1 encoding:raw serializedlength:4
- As you can see from the above output, the Redis top level hash table maps Redis Objects (keys) to other Redis Objects (values). The Virtual Memory is only able to swap _values_ on disk, the objects associated to _keys_ are always taken in memory: this trade off guarantees very good lookup performances, as one of the main design goals of the Redis VM is to have performances similar to Redis with VM disabled when the part of the dataset frequently used fits in RAM.

## Redis design draft #2 (historical)
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-reference-internals-rdd-6cecac3155.md`
- **Note: this document was written by the creator of Redis, Salvatore Sanfilippo, early in the development of Redis (c. 2013), as part of a series of design drafts. This is preserved for historical interest.**
- * Author: Salvatore Sanfilippo `antirez@gmail.com`
- * GitHub issue [#1048](https://github.com/redis/redis/issues/1048)
- The Redis RDB format lacks a simple way to add info fields to an RDB file
- without causing a backward compatibility issue even if the added meta data

## Redis signal handling
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-reference-signals-4674d54f39.md`
- This document provides information about how Redis reacts to different POSIX signals such as `SIGTERM` and `SIGSEGV`.
- The information in this document **only applies to Redis version 2.6 or greater**.
- The `SIGTERM` and `SIGINT` signals tell Redis to shut down gracefully. When the server receives this signal,
- it does not immediately exit. Instead, it schedules
- a shutdown similar to the one performed by the [`SHUTDOWN`](/commands/shutdown) command. The scheduled shutdown starts as soon as possible, specifically as long as the

## Debugging
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-deprecated-features-trig-15332f3864.md`
- There are two methods you can use to debug your Redis Stack functions:
- 1. Make judicious use of the `redis.log` function, which writes to the Redis log file.
- If you have access to the Redis log files, `redis.log` is a good method to use when debugging. However, there is a drawback. Redis Cloud users do not have access to the Redis log files, and it's pretty common that only system administrators have access to them on self-hosted installations. Fortunately, you can also use Redis pub/sub, which will be discussed in the next section.
- You don't have to do anything special to use `redis.log`, as it's always available. Here is an example:
- After loading the library and executing the function with `TFCALL`, you'll see something like the following in your Redis log file:

## Configuration
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-deprecated-features-trig-228c44d48d.md`
- Redis Stack's triggers and functions feature provides configuration options to control its operation. These options can be set when the module is bootstrapped and, in some cases, at runtime.
- The following sections describe the configuration options and how to set them.
- You can set your configuration options when the module is loaded.
- When the module is loaded at start time, the module configuration can be defined in the Redis configuration file. When loading the module at runtime the configuration can be given to the [`MODULE LOADEX`]() command. Each configuration must be prefixed with the module name, `redisgears_2.<configuration name>`.
- You may set certain configuration options at runtime. Setting a configuration at runtime is done using [`CONFIG SET`]() command. Here each configuration must be prefixed with the module name, `redisgears_2.<configuration name>`.

## JavaScript API
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-deprecated-features-trig-9febc3a80d.md`
- The triggers and functions JavaScript API provides a singleton instance of an object named *redis*. The *redis* instance enables registered functions to interact with the Redis server on which they are running. Following is the API provided by the *redis* instance.
- Register a new function that can later be invoke using `TFCALL` command.
- Register a new async function that can later be invoke using `TFCALLASYNC` command.
- Register a key space notification trigger that will run whenever a key space notification fired.
- Register a stream trigger that will be invoke whenever a data is added to a stream.

## Keyspace triggers
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-deprecated-features-trig-e54f1d2be6.md`
- Keyspace triggers allow you to register a function that will be executed whenever an event occurs in the database. Most events are triggered by command invocations, but there are two special events that can occur independently of a command:
- 1. Expired: This event is fired when a key expires from the database.
- 2. Evicted: This event is fired when a key is evicted from the database.
- For a complete list of supported events, please refer to the [Redis keyspace notifications page]().
- To register a keyspace trigger, you need to use the `redis.registerKeySpaceTrigger` API when loading your library. The following example demonstrates how to register a database trigger that adds a "last updated" field whenever a hash key is modified:

## Redis Software and Redis Open Source feature compatibility
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-enterprise-capabilities-7c69d4f952.md`
- This article describes compatibility between Redis Software features and Redis Open Source features. Version numbers indicate the minimum module version required for feature support.
- The following table shows which Redis Open Source features are supported by Redis Software and Redis Cloud.
- | Feature | Redis<br/>Software | Redis<br/>Cloud |
- |:-------|:-------------------------|:-----------------------|
- | [Search and query]() | &#x2705; Supported | &#x2705; Supported |

## Install a module on a cluster
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-install-add-module-to-cl-faf1116575.md`
- [Redis Software]() comes packaged with several modules that provide additional Redis capabilities such as [search and query](), [JSON](), [time series](), and [probabilistic data structures](). As of version 8.0, Redis Software includes multiple feature sets, compatible with different Redis database versions. You can view the installed modules, their versions, and their minimum compatible Redis database versions from **Cluster > Modules** in the Cluster Manager UI.
- To use other modules or upgrade an existing module to a more recent version, you need to install the new module package on your cluster.
- Some module versions are not supported or recommended for use with Redis Software.
- The module must be packaged as a `.zip` file containing:
- To install or upgrade a module on a [Redis Software]() cluster, you need a module package.

## RedisBloom 2.4 release notes
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-release-notes-redisbloom-35f77da4dd.md`
- This is a maintenance release for RedisBloom 2.4.
- Update urgency: `LOW`: No need to upgrade unless there are new features you want to use.
- This is a maintenance release for RedisBloom 2.4.
- Update urgency: `MODERATE`: Program an upgrade of the server, but it's not urgent.
- This is a maintenance release for RedisBloom 2.4.

## RedisBloom 2.2 release notes
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-release-notes-redisbloom-745d9c7e78.md`
- This is a maintenance release for RedisBloom 2.2.
- Update urgency: `MODERATE`: Program an upgrade of the server, but it's not urgent.
- This is a maintenance release for RedisBloom 2.2.
- Update urgency: `HIGH`: There is a critical bug that may affect a subset of users. Upgrade!
- This is a maintenance release for RedisBloom 2.2.

## RedisBloom 2.0 release notes
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-release-notes-redisbloom-ac503617c9.md`
- We are proud to announce that we doubled the number of probabilistic data structures that are generally available in RedisBloom.  Full documentation is available on [redisbloom.io](https://redisbloom.io)

## RedisBloom 2.8 release notes
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-release-notes-redisbloom-bced11e8df.md`
- This is a maintenance release for RedisBloom 2.8.
- Update urgency: `MODERATE`: Program an upgrade of the server, but it's not urgent.
- This is a maintenance release for RedisBloom 2.8
- Update urgency: `LOW`: No need to upgrade unless there are new features you want to use.
- This is a maintenance release for RedisBloom 2.8.

## RedisBloom 2.6 release notes
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-release-notes-redisbloom-d985f835a8.md`
- This is a maintenance release for RedisBloom 2.6.
- Update urgency: `LOW`: No need to upgrade unless there are new features you want to use.
- This is a maintenance release for RedisBloom 2.6.
- Update urgency: `MODERATE`: Program an upgrade of the server, but it's not urgent.
- This is a maintenance release for RedisBloom 2.6.

## Redis Open Source 8.6 release notes
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-release-notes-redisce-re-3ab8e3ed8a.md`
- Update urgency: `SECURITY`: There are security fixes in the release.
- Update urgency: `SECURITY`: There are security fixes in the release.
- This is the General Availability release of Redis 8.6 in Redis Open Source.
- This limitation will be removed in the next patch.
- This is the first Release Candidate of Redis 8.6 in Redis Open Source.

## Redis Community Edition 7.4 release notes
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-release-notes-redisce-re-3fe14a0272.md`
- Update urgency: `SECURITY`: There are security fixes in the release.
- Update urgency: `HIGH`: There is a critical bug that may affect a subset of users.
- Update urgency: `SECURITY`: There are security fixes in the release.
- Update urgency: `SECURITY`: There are security fixes in the release.
- * (CVE-2025-27151) redis-check-aof may lead to stack overflow and potential RCE

## Redis Open Source 8.0 release notes
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-release-notes-redisce-re-73cb6bdbc9.md`
- Update urgency: `SECURITY`: There are security fixes in the release.
- Update urgency: `HIGH`: There are critical bugs that may affect a subset of users.
- Update urgency: `SECURITY`: There are security fixes in the release.
- Update urgency: `SECURITY`: There are security fixes in the release.
- * (CVE-2025-32023) Fix out-of-bounds write in `HyperLogLog` commands

## Redis Open Source 8.4 release notes
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-release-notes-redisce-re-9f780462f6.md`
- Update urgency: `SECURITY`: There are security fixes in the release.
- Update urgency: `SECURITY`: There are security fixes in the release.
- This is the General Availability (GA) release of Redis 8.4 in Redis Open Source.
- This is the first Release Candidate of Redis 8.4 in Redis Open Source.
- Release Candidates are feature-complete pre-releases. Pre-releases are not suitable for production use.

## Redis Open Source 8.2 release notes
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-release-notes-redisce-re-d628d5f813.md`
- Update urgency: `SECURITY`: There are security fixes in the release.
- Update urgency: `SECURITY`: There are security fixes in the release.
- Update urgency: `SECURITY`: There is a security fix in the release.
- Update urgency: `SECURITY`: There are security fixes in the release.
- Update urgency: `MODERATE`: Program an upgrade of the server, but it's not urgent.

## RediSearch 2.4 release notes
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-release-notes-redisearch-089b6f4a11.md`
- This is a maintenance release for RediSearch 2.4
- Update urgency: `HIGH`: There is a critical bug that may affect a subset of users. Upgrade!
- This is a maintenance release for RediSearch 2.4.
- Update urgency: `MODERATE`: Program an upgrade of the server, but it's not urgent.
- This is a maintenance release for RediSearch 2.4.

## RediSearch 2.0 release notes
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-release-notes-redisearch-42d67b3f32.md`
- This is a maintenance release for RediSearch 2.0.
- Update urgency: `MODERATE` - Program an upgrade of the server, but it's not urgent.
- This is a maintenance release for version 2.0.
- This is a maintenance release for version 2.0.
- This is a maintenance release for version 2.0.

## RediSearch 2.10 release notes
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-release-notes-redisearch-68b52a82a6.md`
- This is a maintenance release for RediSearch 2.10.
- Update urgency: `LOW`: No need to upgrade unless there are new features you want to use.
- Full Changelog: https://github.com/RediSearch/RediSearch/compare/v2.10.24...v2.10.25
- This is a maintenance release for RediSearch 2.10.
- Update urgency: `LOW`: No need to upgrade unless there are new features you want to use.

## RediSearch 2.8 release notes
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-release-notes-redisearch-b7424deb0d.md`
- This is a maintenance release for RediSearch 2.8.
- Update urgency: `LOW`: No need to upgrade unless there are new features you want to use.
- Full Changelog: https://github.com/RediSearch/RediSearch/compare/v2.8.31...v2.8.32
- This is a maintenance release for RediSearch 2.8.
- Update urgency: `LOW`: No need to upgrade unless there are new features you want to use.

## RediSearch 1.4 release notes
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-release-notes-redisearch-ca33b6c2ab.md`
- This is a maintenance release for version 1.4.
- This is a maintenance release for version 1.4.
- This release improves overall stability and provides fixes for issues found after the previous release.
- This is a maintenance release for version 1.4.
- This release improves overall stability and provides fixes for issues found after the previous release.

## RediSearch 2.6 release notes
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-release-notes-redisearch-d69ec69277.md`
- This is a maintenance release for RediSearch 2.6.
- Update urgency: `HIGH` : There is a critical bug that may affect a subset of users. Upgrade!
- This is a maintenance release for RediSearch 2.6.
- Update urgency: `HIGH`: There is a critical bug that may affect a subset of users. Upgrade!
- This is a maintenance release for RediSearch 2.6.

## RedisGears 1.2 release notes
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-release-notes-redisgears-52002c2e0d.md`
- This is a maintenance release for RedisGears 1.2.
- Update urgency: `LOW`: No need to upgrade unless there are new features or fixes.
- This is a maintenance release for RedisGears 1.2.
- Update urgency: `HIGH`: There is a critical bug that may affect a subset of users. Upgrade!
- This is a maintenance release for RedisGears 1.2.

## RedisGears 1.0 release notes
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-release-notes-redisgears-debd78ab5f.md`
- To learn more, see the linked pull requests.
- This is a maintenance release for RedisGears 1.0
- Update urgency: `LOW` : No need to upgrade unless there are new features you want to use.
- This is a maintenance release for RedisGears 1.0.
- Update urgency: `MODERATE` - Program an upgrade of the server, but it's not urgent.

## RedisGraph 2.0 release notes
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-release-notes-redisgraph-4cafe24870.md`
- This is a maintenance release for version 2.0.
- This is a maintenance release for version 2.0.
- This is a maintenance release for version 2.0.
- This is a maintenance release for version 2.0.
- This is a maintenance release for version 2.0.

## RedisGraph 2.10 release notes
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-release-notes-redisgraph-c0e8b8d514.md`
- This is a maintenance release for RedisGraph 2.10.
- Update urgency: `MODERATE`: Program an upgrade of the server, but it's not urgent.
- This is a maintenance release for RedisGraph 2.10.
- Update urgency: `MODERATE`: Program an upgrade of the server, but it's not urgent.
- This is a maintenance release for RedisGraph 2.10.

## RedisGraph 2.8 release notes
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-release-notes-redisgraph-d66b2bce5d.md`
- This is a maintenance release for RedisGraph 2.8.
- Update urgency: `HIGH`: There is a critical bug that may affect a subset of users. Upgrade!
- This is a maintenance release for RedisGraph 2.8.
- Update urgency: `MODERATE`: Program an upgrade of the server, but it's not urgent.
- This is a maintenance release for RedisGraph 2.8.

## RedisJSON 2.0 release notes
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-release-notes-redisjson--4086c3da14.md`
- This is a maintenance release for RedisJSON 2.0.
- Update urgency: `LOW` - No need to upgrade unless there are new features you want to use.
- This is a maintenance release for RedisJSON 2.0.
- Update urgency: `LOW`: No need to upgrade unless there are new features you want to use.
- This is a maintenance release for RedisJSON 2.0.

## RedisJSON 2.8 release notes
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-release-notes-redisjson--a2c65fcc7c.md`
- This is a maintenance release for RedisJSON 2.8.
- Update urgency: `LOW`: No need to upgrade unless there are new features you want to use.
- This is a maintenance release for RedisJSON 2.8.
- Update urgency: `LOW`: No need to upgrade unless there are new features you want to use.
- This is a maintenance release for RedisJSON 2.8.

## RedisJSON 2.4 release notes
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-release-notes-redisjson--f0d5882142.md`
- This is a maintenance release for RedisJSON 2.4.
- Update urgency: `MODERATE`: Program an upgrade of the server, but it's not urgent.
- This is a maintenance release for RedisJSON 2.4.
- Update urgency: `LOW`: No need to upgrade unless there are new features you want to use.
- This is a maintenance release for RedisJSON 2.4

## Redis Stack 6.2.6 release notes
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-release-notes-redisstack-09427be94f.md`
- This is a maintenance release for Redis Stack Server 6.2.6
- Update urgency: `SECURITY`: there are security fixes in the release.
- [Docker](https://hub.docker.com/r/redis/redis-stack) | [Download](https://redis.io/downloads/#stack)
- This version includes security fixes for the **Redis** server, addressing potential vulnerabilities such as an RCE when using Lua library components, and a denial-of-service (DoS) risk due to unbounded pattern matching.
- Additionally, this maintenance release includes the latest version of **Redis Insight**.

## Redis Stack 7.4 release notes
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-release-notes-redisstack-48129879d0.md`
- This is a maintenance release for Redis Stack Server 7.4.0.
- Update urgency: `SECURITY`: there are security fixes in the release.
- [Docker](https://hub.docker.com/r/redis/redis-stack) | [Download](https://redis.io/downloads/#stack)
- This version includes security fixes for the **Redis** server, addressing potential vulnerabilities such as an RCE when using Lua library components, and a denial-of-service (DoS) risk due to malformed ACL selectors or unbounded pattern matching.
- Additionally, this maintenance release includes the latest version of **Redis Insight**.

## Redis Stack 7.2 release notes
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-release-notes-redisstack-da9228e445.md`
- This is a maintenance release for Redis Stack Server 7.2.0.
- Update urgency: `SECURITY`: there are security fixes in the release.
- [Docker](https://hub.docker.com/r/redis/redis-stack) | [Download](https://redis.io/downloads/#stack)
- This version includes security fixes for the **Redis** server, addressing potential vulnerabilities such as an RCE when using Lua library components, and a denial-of-service (DoS) risk due to malformed ACL selectors or unbounded pattern matching.
- Additionally, this maintenance release contains a bug fix to prevent crashes in cluster mode and includes the latest version of **Redis Insight**.

## RedisTimeSeries 1.4 release notes
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-release-notes-redistimes-9a6c5c861e.md`
- This is a maintenance release for RedisTimeSeries 1.4.
- Update urgency: `MODERATE`: Program an upgrade of the server, but it's not urgent.
- This is a maintenance release for RedisTimeSeries 1.4.
- Update urgency: `MODERATE`: Program an upgrade of the server, but it's not urgent.
- This is a maintenance release for RedisTimeSeries 1.4.

## RedisTimeSeries 1.6 release notes
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-release-notes-redistimes-c938ce4c9a.md`
- This is a maintenance release for RedisTimeSeries 1.6.
- Update urgency: `MODERATE`: Program an upgrade of the server, but it's not urgent.
- This is a maintenance release for RedisTimeSeries 1.6.
- Update urgency: `HIGH`: There is a critical bug that may affect a subset of users. Upgrade!
- This is a maintenance release for RedisTimeSeries 1.6.

## RedisTimeSeries 1.8 release notes
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-release-notes-redistimes-f6f53a021b.md`
- This is a maintenance release for RedisTimeSeries 1.8.
- Update urgency: `MODERATE`: Program an upgrade of the server, but it's not urgent.
- This is a maintenance release for RedisTimeSeries 1.8.
- Update urgency: `MODERATE`: Plan an upgrade of the server, but it's not urgent.
- This is a maintenance release for RedisTimeSeries 1.8.

## Search and query Active-Active databases
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-search-search-active-act-938fdca29a.md`
- You can run search operations on any instance of an Active-Active database.
- 1. Create an Active-Active database with RediSearch 2.x enabled. Active-Active databases created with or upgraded to Redis version 8 or later automatically enable search and query.
- 1. [Create the index]() on each instance of the database.
- 1. If you are using [synonyms](), you need to add them to each replica.
- 1. The index is maintained by each instance outside of the database keyspace, so only updates to the hashes in the databases are synchronized.

## Database backup and import
Source file: `raw/sources/20260409-docs-latest-operate-rc-api-examples-back-up-and-import-data-5bc9221eb6.md`
- When you create or update a database, you can specify the (optional) `periodicBackupPath` parameter
- This parameter enables periodic and on-demand backup operations for the specified database.
- The number of database backups that can run simultaneously on a cluster is limited to 4 by default.
- For Redis Cloud Pro databases, back up a database with [`POST /subscriptions/{subscriptionId}/databases/{databaseId}/backup`](). For Redis Cloud Essentials databases, use [`POST /fixed/subscriptions/{subscriptionId}/databases/{databaseId}/backup`]().
- On-demand database backup is an [asynchronous operation]().

## Manage databases
Source file: `raw/sources/20260409-docs-latest-operate-rc-databases-a3d6f243a2.md`
- Databases are the heart of any Redis Cloud deployment.
- Here's how to perform a variety of tasks:
- If you're new to Redis Cloud, see the [Quick Start]().
- These topics provide background details that can help you tailor your databases to better fit your needs.
- Redis Cloud does not support certain commands. Instead of using these commands, Redis Cloud automatically handles features like replication and lets you [manage your database]() from the [Redis Cloud console](https://cloud.redis.io/) or [Redis Cloud REST API]().

## Create an Active-Active database
Source file: `raw/sources/20260409-docs-latest-operate-rc-databases-active-active-create-active-active-database-d23d291300.md`
- Active-Active databases store data across multiple regions and availability zones.  This improves scalability, performance, and availability, especially when compared to standalone databases. See [Active-Active Redis]() for more information.
- To deploy Active-Active databases in Redis Cloud, you need a Redis Cloud Pro plan that enables Active-Active Redis and defines the regions for each copy of your databases.
- Active-Active databases consist of multiple copies (also called _instances_) deployed to different regions throughout the world.
- This reduces latency for local users and improves availability should a region fail.
- Redis Cloud maintains consistency among instances in the background; that is, each copy eventually includes updates from every region.  As a result, memory limit and throughput increase.

## Active-Active Redis applications
Source file: `raw/sources/20260409-docs-latest-operate-rc-databases-active-active-develop-4ce7517986.md`
- developers have to think about race conditions and complex combinations
- of events under geo-failovers and cross-region write conflicts. In Redis Cloud, Active-Active databases
- simplify developing such applications by directly using built-in smarts
- for handling conflicting writes based on the data type in use. Instead
- of depending on just simplistic "last-writer-wins" type conflict

## Hashes in an Active-Active databases
Source file: `raw/sources/20260409-docs-latest-operate-rc-databases-active-active-develop-data-types-hashes-1d6433cc14.md`
- values. They are used for managing distributed user or app session
- state, user preferences, form data and so on. Hash fields contain string
- type and string types operate just like the standard Redis string types
- when it comes to CRDTs. Fields in hashes can be initialized as a string
- using HSET or HMSET or can be used to initialize counter types that are

## Lists in Active-Active databases
Source file: `raw/sources/20260409-docs-latest-operate-rc-databases-active-active-develop-data-types-lists-53b2a7d612.md`
- is possible to add elements to a Redis List that push new elements to
- the head (on the left) or to the tail (on the right) of the list. Redis
- lists can be used to easily implement queues (using LPUSH and RPOP, for
- example) and stacks (using LPUSH and LPOP, for
- Lists in Active-Active databases are just the same as regular Redis Lists. See the

## Sets in Active-Active databases
Source file: `raw/sources/20260409-docs-latest-operate-rc-databases-active-active-develop-data-types-sets-757cd3c2c0.md`
- add, remove, and test for the existence of members with Redis commands.
- A Redis set maintains a unique collection of elements. Sets can be great
- for maintaining a list of events (click streams), users (in a group
- conversation), products (in recommendation lists), engagements (likes,
- Sets in Active-Active databases behave the same and maintain additional metadata to

## Sorted sets in Active-Active databases
Source file: `raw/sources/20260409-docs-latest-operate-rc-databases-active-active-develop-data-types-sorted-sets-39955de5f3.md`
- [Redis Geospatial (Geo)]() is based on Sorted Sets, so the same Active-Active database development instructions apply to Geo.
- Similar to Redis Sets, Redis Sorted Sets are non-repeating collections
- of Strings. The difference between the two is that every member of a
- Sorted Set is associated with a score used to order the Sorted Set from
- lowest to highest. While members are unique, they may have the same

## Streams in Active-Active databases
Source file: `raw/sources/20260409-docs-latest-operate-rc-databases-active-active-develop-data-types-streams-6a110b449f.md`
- You add entries to a stream with the XADD command. You access stream entries using the XRANGE, XREADGROUP, and XREAD commands (however, see the caveat about XREAD below).
- Active-Active databases allow you to write to the same logical stream from more than one region.
- Streams are synchronized across the regions of an Active-Active database.
- In the example below, we write to a stream concurrently from two regions. Notice that after syncing, both regions have identical streams:
- <td><code>XADD messages * text hello</code></td>

## Develop applications with Active-Active databases
Source file: `raw/sources/20260409-docs-latest-operate-rc-databases-active-active-develop-develop-for-aa-f76dcbcd0a.md`
- Application developers may have to understand a large number of race
- conditions between updates to various sites, network, and cluster
- failures that could reorder the events and change the outcome of the
- updates performed across geo-distributed writes.
- Active-Active databases (formerly known as CRDB) are geo-distributed databases that span multiple Redis Software clusters.

## Back up and export a database
Source file: `raw/sources/20260409-docs-latest-operate-rc-databases-back-up-data-d57d303a7d.md`
- The backup options for Redis Cloud databases depend on your plan:
- The number of database backups that can run simultaneously on a subscription is limited to 4 by default.
- Backups are saved to predefined storage locations available to your subscription. Backup locations need to be available before you turn on database backups.  To learn more, see [Set up backup storage locations](#set-up-backup-storage-locations).
- Backups are saved in RDB format. If the database is comprised of multiple shards, an RDB file will be created for each shard of the database. For more information on restoring data from a backup, see [Restore from an RDB file]().
- Here, you'll learn how to store backups using different cloud providers.

## Data persistence
Source file: `raw/sources/20260409-docs-latest-operate-rc-databases-configuration-data-persistence-a2a3131443.md`
- Data can be persisted in one of two ways:
- The AOF file records write operations made to the database; it can be updated every second or on every write (_Redis Cloud Pro plans only_).
- AOF files provide greater protection (durability) than snapshots at the cost of resources and recovery time.
- Although snapshot recovery is faster, the risk of data loss is higher, depending on the time between failure and the most recent snapshot.
- If you turn off data persistence, data is lost when the database goes down.

## Create an Essentials database
Source file: `raw/sources/20260409-docs-latest-operate-rc-databases-create-database-create-essentials-database-64fe404468.md`
- Redis Cloud Essentials is cost-efficient and designed for low-throughput scenarios. You can quickly scale up your Essentials database as your application grows.
- 3. Select the type of [subscription]() you need. For this guide, select **Essentials**.
- This guide shows how to create a paid Essentials database.
- After you select **Essentials**, the rest of the database details will appear.
- 1. Select **RAM** or **Flex** to choose between a database that uses only RAM or one that uses both RAM and Flash memory.

## Create a Flex database
Source file: `raw/sources/20260409-docs-latest-operate-rc-databases-create-database-create-flex-database-28503fc0df.md`
- Flex allows your dataset to span both high-performance RAM and cost-efficient dedicated Flash memory. Flex automatically manages data placement between the two tiers, keeping frequently accessed (âhotâ) data in RAM for sub-millisecond latency, while moving less active (âwarmâ) data to Flash to optimize capacity and cost. This dual memory architecture delivers predictable performance at scale, enabling larger datasets without compromising speed or operational simplicity.
- Flex databases are currently compatible with most existing Redis applications, except for applications that use Search and Query and Time Series.
- Flex is available on both Redis Cloud Essentials and Redis Cloud Pro.
- Flex is ideal for workloads that demand large-scale, low-latency data access with the flexibility to optimize cost and performance.
- Flex is **not** a durable data store. It is designed for performance, elasticity, and scalability, not for long-term data persistence. While Flex can temporarily retain data in memory or Flash, it should not be used as a primary system of record or persistent storage layer.

## Create a Pro database in an existing subscription
Source file: `raw/sources/20260409-docs-latest-operate-rc-databases-create-database-create-pro-database-existing-375491fb32.md`
- This guide shows how to create a Pro database in an existing subscription.
- To create a database in an already existing Pro subscription:
- 1. Sign in to the [Redis Cloud console](https://cloud.redis.io).
- This displays the **Create database** screen.
- 1. Select the type of [subscription]() you need. For this guide, select **Existing subscription**, and then select your existing Pro subscription from the list.

## Create a Pro database with a new subscription
Source file: `raw/sources/20260409-docs-latest-operate-rc-databases-create-database-create-pro-database-new-481f182fbd.md`
- Redis Cloud Pro supports more databases, larger databases, greater throughput, and unlimited connections compared to Redis Cloud Essentials. Redis Cloud Pro databases are perfect for teams building mission-critical systems in the cloud.
- 3. Select the type of [subscription]() you need. For this guide, select **Pro**.
- This guide shows how to create a Pro database with a new subscription.
- After you select **Pro**, the **Database settings** section will appear.
- You can choose to create your database in one of two ways:

## Create a database
Source file: `raw/sources/20260409-docs-latest-operate-rc-databases-create-database-db0fd879a5.md`
- A database is the heart of any Redis Cloud deployment.
- The process for Creating a database depends on the type of [subscription plan]() you need.
- An **Essentials** plan is a fixed monthly price for a single database. It is cost-efficient and designed for low-throughput scenarios. It supports a range of availability, persistence, and backup options. Pricing supports low throughput workloads.
- A **Free** plan is a type of Essentials plan designed for learning and building test projects. It gives you enough space to learn Redis concepts and develop application prototypes. You can upgrade to a paid Essentials plan at any time.
- A **Pro** plan is an hourly price based on capacity. It supports more databases, larger databases, greater throughput, and unlimited connections.

## Import data into a database
Source file: `raw/sources/20260409-docs-latest-operate-rc-databases-import-data-e9235f9a24.md`
- Data imported into an existing database overwrites existing data.
- As a result, the number of keys in the source and destination databases can be different after the import is complete.
- Make sure the Redis version of the source database is compatible with the database where the data will be imported.
- To import a dataset from any publicly available Redis Open Source server:
- 1. Select **Databases** from the Redis Cloud console menu and then select the target database from the database list.

## View and edit databases
Source file: `raw/sources/20260409-docs-latest-operate-rc-databases-view-edit-database-d63dc65202.md`
- Use the **Databases** menu of the Redis Cloud console to manage your databases.
- 1. Sign in to the [Redis Cloud console](https://cloud.redis.io/).  (Create an account if you don't already have one.)
- 2. Select the **Databases** menu to display a [searchable list of all databases](#manage-the-database-list).
- 4. Select the database name to open the **Database** page.
- The **Database** screen lets you review:

## Redis Cloud quick start
Source file: `raw/sources/20260409-docs-latest-operate-rc-rc-quickstart-863f55d94d.md`
- If you're new to Redis Cloud, this quick start helps you get up and running.
- 1.  Create an account and a free database
- If you already have an account, see [Create an Essentials database]() to create a Free 30 MB Essentials database. Free plans are a type of Essentials plans; this provides an easy upgrade path when you need it.
- If you already have a database, see [Manage databases]().
- To create a new account with a free database:

## Develop highly available and resilient apps with Redis Cloud
Source file: `raw/sources/20260409-docs-latest-operate-rc-resilient-apps-0dec2cec19.md`
- You can set up your Redis Cloud databases and Redis Client libraries to ensure your app re-connects to your database after unexpected failover events or network outages and minimize data losses.
- These settings can be turned on when you create or edit your database.
- Enabling [Data persistence]() allows Redis to save your data to a durable storage medium, such as a disk, to ensure data availability in case of memory loss or system failure.
- Redis Cloud supports the following data persistence options:
- Append-only files provide greater protection than snapshots at the cost of resources and recovery time.

## Encryption at rest
Source file: `raw/sources/20260409-docs-latest-operate-rc-security-encryption-at-rest-18167df39b.md`
- Redis Cloud deployments are always encrypted at rest.
- Persistent data is written to encrypted EBS volumes. For more information, see [Amazon EBS encryption](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html).
- When Auto Tiering is enabled, the flash memory data is written to encrypted NVMe SSD volumes. For more information, see [SSD instance store volumes](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ssd-instance-store.html).
- All data written to disk on Google Cloud-based Redis Cloud deployments is encrypted by default. When deploying
- a Redis Cloud database on Google Cloud, you don't need to take any actions to enable this encryption.

## Manage subscriptions
Source file: `raw/sources/20260409-docs-latest-operate-rc-subscriptions-dc579d357c.md`
- This page helps you manage your Redis Cloud subscriptions; it briefly compares available plans and shows where to find help with common tasks.
- As of April 2024, Redis Cloud supports the following subscription plans:
- | Feature | Redis Cloud Essentials (free) | Redis Cloud Essentials (paid) | Essentials with Redis Flex | Redis Cloud Pro |
- | Memory size | 30 MB | 250 MB-12 GB | 1 GB-100GB | 50 TB |
- | Concurrent connections | 30 | 256-10000 | 1024-10000 | Unlimited |

## Upgrade database from Redis Cloud Essentials to Redis Cloud Pro
Source file: `raw/sources/20260409-docs-latest-operate-rc-subscriptions-upgrade-essentials-pro-dd11f92751.md`
- Redis Cloud Essentials supports low throughput workflows. It supports a range of availability, persistence, and backup options, and can be great for testing and prototyping. However, if your databases need higher throughput, or you're missing features that are not available with Redis Cloud Essentials, you may want to upgrade Redis Cloud Essentials to Redis Cloud Pro.
- For more information about the different subscription plans, see [Subscription plans]().
- To upgrade your Essentials plan, see [Upgrade subscription plan]().
- To follow the steps in this guide, you must have a database with [Redis Cloud Essentials]() that you want to upgrade to Redis Cloud Pro.
- To upgrade your Essentials database to Redis Cloud Pro:

## Redis Cloud Essentials plans
Source file: `raw/sources/20260409-docs-latest-operate-rc-subscriptions-view-essentials-subscription-essentials-pla-9dfd61b120.md`
- Redis Cloud Essentials is cost-efficient and designed for low-throughput scenarios. It supports a range of availability, persistence, and backup options.
- [Essentials plan pricing](https://redis.io/pricing/#monthly) scales according to the memory size of the database defined in the subscription.  Additional limits also apply, as shown in the tables below.
- The 30 MB Essentials plan is free; it's designed for learning and building test projects. It gives you enough space to learn Redis concepts and develop application prototypes.
- Our paid plans start at 250 MB and offer extra features, like high availability and backups (both daily and instant). They are great for bigger projects or production environments that require increased storage, reliability, and other features to support your operational needs.
- Essentials plans have bandwidth and throughput limits described in the tables below. We will notify you before limiting your database usage if you exceed these limits.

## View and Upgrade Redis Cloud Essentials plan
Source file: `raw/sources/20260409-docs-latest-operate-rc-subscriptions-view-essentials-subscription-f231326f0f.md`
- 1.  Sign in to the [Redis Cloud console](https://cloud.redis.io/) and select the **Subscriptions** list.
- 1.  Select the target subscription from the subscription list.
- 1.  Your subscription details appear, along with a summary of your database details.
- The following sections provide more details.
- Use the **Plan upgrade** button to update your Redis Cloud Essentials plan, your high availability settings, or your payment method. Upgrading your database between Redis Cloud Essentials plans does not impact database availability during the update.

## Redis Software
Source file: `raw/sources/20260409-docs-latest-operate-rs-1a95e6a2a8.md`
- [Redis Software](https://redis.io/software/) is a self-managed, enterprise-grade version of Redis.
- With Redis Software, you get many enterprise-grade capabilities, including:
- You can run self-managed Redis Software in an on-premises data center or on your preferred cloud platform.
- If you prefer a fully managed Redis database-as-a-service, available on major public cloud services, consider setting up a [Redis Cloud]() subscription. You can [try Redis Cloud](https://redis.io/try-free/) for free.
- Build a small-scale cluster with the Redis Software container image.

## Manage clusters
Source file: `raw/sources/20260409-docs-latest-operate-rs-clusters-acb4b7a4b2.md`
- You can manage your Redis Software clusters with several different tools:

## Recover a failed cluster
Source file: `raw/sources/20260409-docs-latest-operate-rs-clusters-cluster-recovery-237d5d834a.md`
- you must use the cluster configuration file and database data to recover the cluster.
- For cluster recovery in a Kubernetes deployment, see [Recover a Redis Enterprise cluster on Kubernetes]().
- To recover a cluster and re-create it as it was before the failure,
- you must restore the cluster configuration `ccs-redis.rdb` to the cluster nodes.
- To recover databases in the new cluster, you must restore the databases from persistence files such as backup files, append-only files (AOF), or RDB snapshots.

## Configure clusters
Source file: `raw/sources/20260409-docs-latest-operate-rs-clusters-configure-a65a4baf47.md`

## Call home client
Source file: `raw/sources/20260409-docs-latest-operate-rs-clusters-configure-call-home-123e81d4f7.md`
- The call home client collects data hourly and sends daily usage statistics to Redis with a POST request to `https://usage.redis.io/callHome`. Reports include memory usage, shard details, enabled features, and other operational metrics. To prevent increased load when multiple clusters are running, the daily report is sent at a random time.
- These reports provide insights into license consumption, which helps Redis to ensure performance metrics align with contractual agreements, optimize service delivery, and offer proactive customer support.
- We recommend contacting [Redis support](https://redis.io/support/) before making changes to call home behavior.
- The following example shows the data collected hourly for each database:
- The cluster collects usage data hourly by default.

## Alerts and events
Source file: `raw/sources/20260409-docs-latest-operate-rs-clusters-logging-alerts-events-66d6345e2c.md`
- The following alerts and events can appear in `syslog` and the Cluster Manager UI logs.
- | Alert | UI message | Severity | Notes |
- |-------|------------|----------|-------|
- | aof_slow_disk_io | Redis performance is degraded as a result of disk I/O limits | True: error, False: info | Node alert |
- | authentication_err | Error authenticating with the source database | error | BDB event |

## rsyslog logging
Source file: `raw/sources/20260409-docs-latest-operate-rs-clusters-logging-rsyslog-logging-aa57df57b6.md`
- Redis Software logs information from a variety of components in response to actions and events that occur within the cluster.
- In some cases, a single action, such as removing a node from the cluster, may actually consist of several events. These actions may generate multiple log entries.
- All log entries displayed in the Cluster Manager UI are also written to `syslog`.  You can configure `rsyslog` to monitor `syslog`. Enabled alerts are logged to `syslog` and appear with other log entries.
- You can also [manage your logs]() with a remote logging server and log rotation.
- Log entries are categorized into events and alerts. Both types of entries appear in the logs, but alert log entries also include a boolean `"state"` parameter that indicates whether the alert is enabled or disabled.

## Disk sizing for heavy write scenarios
Source file: `raw/sources/20260409-docs-latest-operate-rs-clusters-optimize-disk-sizing-heavy-write-scenarios-dced4b7957.md`
- For disk size requirements for standard usage, see [Hardware requirements]().
- To estimate the required persistent disk space for AOF rewrite purposes in extreme write scenarios, use the following formula:
- The following examples show how to calculate the persistent disk space required for heavy write scenarios for different database configurations, where:
- 1. Use the formula to calculate the required persistent disk space:
- 1. Round up to 73 GB of required disk space.

## Turn off services to free system memory
Source file: `raw/sources/20260409-docs-latest-operate-rs-clusters-optimize-turn-off-services-63a8c6c5ef.md`
- In most deployments, either all of these services are required,
- or there are enough memory resources on the nodes for the database requirements.
- In a deployment with limited memory resources, certain services can be disabled from API endpoint to free system memory or using the `rladmin` command.
- Before you turn off a service, make sure that your deployment does not depend on that service.
- After you turn off a service, you can re-enable in the same way.

## Use the WAIT command to improve data safety and durability
Source file: `raw/sources/20260409-docs-latest-operate-rs-clusters-optimize-wait-d9a5b98e52.md`
- to another replica for high availability and persist in-memory data on
- disk permanently for durability. With the [`WAIT`]() command, you can
- control the consistency and durability guarantees for the replicated and
- Any updates that are issued to the database are typically performed with the following flow:
- 1. Proxy communicates with the correct primary shard in the system that contains the given key.

## Remove a node
Source file: `raw/sources/20260409-docs-latest-operate-rs-clusters-remove-node-402ad45ba4.md`
- You can configure [email alerts from the cluster]() to notify you of cluster changes, including when a node is removed.
- Read through these explanations thoroughly before taking
- Permanently removing a node means you are decreasing cluster capacity.
- Before trying to remove a node, make sure that the cluster has enough
- capacity for all resources without that node, otherwise you cannot remove the node.

## Manage databases
Source file: `raw/sources/20260409-docs-latest-operate-rs-databases-7334ea436a.md`
- You can manage your Redis Software databases with several different tools:

## Active-Active geo-distributed Redis
Source file: `raw/sources/20260409-docs-latest-operate-rs-databases-active-active-6d2bf2fbb0.md`
- The Redis Software implementation of CRDT is called an Active-Active database (formerly known as CRDB).
- With Active-Active databases, applications can read and write to the same data set from different geographical locations seamlessly and with latency less than one millisecond (ms),
- without changing the way the application connects to the database.
- Active-Active databases also provide disaster recovery and accelerated data read-access for geographically distributed users.
- The [high availability]() that Active-Active replication provides is built upon a number of Redis Software features (such as [clustering](), [replication](), and [replica HA]()) as well as some features unique to Active-Active ([multi-primary replication](), [automatic conflict resolution](), and [strong eventual consistency]()).

## Enable causal consistency
Source file: `raw/sources/20260409-docs-latest-operate-rs-databases-active-active-causal-consistency-bfbf431c49.md`
- the order of operations on a specific key are maintained across all Active-Active database instances.
- For example, if operations A and B were applied on the same key and the effect of A was observed by the instance that initiated B before B was applied to the key.
- All instances of an Active-Active database would then observe the effect of A before observing the effect of B.
- This way, any causal relationship between operations on the same key is also observed and maintained by every replica.
- When you create an Active-Active database, you can enable causal consistency in the Cluster Manager UI:

## Create an Active-Active geo-replicated database
Source file: `raw/sources/20260409-docs-latest-operate-rs-databases-active-active-create-7a188eed70.md`
- to replicas of the dataset in different geographical locations.
- The participating Redis Software clusters that host the instances can be distributed in different geographic locations.
- Every instance of an Active-Active database can receive write operations, and all operations are [synchronized]() to all instances without conflict.
- 1. **Create a service account** - On each participating cluster, create a dedicated user account with the Admin role.
- 1. **Confirm connectivity** - Confirm network connectivity between the participating clusters.

## Delete Active-Active databases
Source file: `raw/sources/20260409-docs-latest-operate-rs-databases-active-active-delete-23f080b2f6.md`
- When you delete an Active-Active database (formerly known as CRDB),
- all instances of the Active-Active database are deleted from all participating clusters.
- This action is immediate, non-reversible, and has no rollback.
- Because Active-Active databases are made up of instances on multiple participating clusters,
- to restore a deleted Active-Active database you must create the database again with all of its instances

## Hashes in an Active-Active databases
Source file: `raw/sources/20260409-docs-latest-operate-rs-databases-active-active-develop-data-types-hashes-6b0e7af266.md`
- values. They are used for managing distributed user or app session
- state, user preferences, form data and so on. Hash fields contain string
- type and string types operate just like the standard Redis string types
- when it comes to CRDTs. Fields in hashes can be initialized as a string
- using HSET or HMSET or can be used to initialize counter types that are

## Lists in Active-Active databases
Source file: `raw/sources/20260409-docs-latest-operate-rs-databases-active-active-develop-data-types-lists-84aae9e595.md`
- is possible to add elements to a Redis List that push new elements to
- the head (on the left) or to the tail (on the right) of the list. Redis
- lists can be used to easily implement queues (using LPUSH and RPOP, for
- example) and stacks (using LPUSH and LPOP, for
- Lists in Active-Active databases are just the same as regular Redis Lists. See the

## Sets in Active-Active databases
Source file: `raw/sources/20260409-docs-latest-operate-rs-databases-active-active-develop-data-types-sets-7d8327cae0.md`
- add, remove, and test for the existence of members with Redis commands.
- A Redis set maintains a unique collection of elements. Sets can be great
- for maintaining a list of events (click streams), users (in a group
- conversation), products (in recommendation lists), engagements (likes,
- Sets in Active-Active databases behave the same and maintain additional metadata to

## Sorted sets in Active-Active databases
Source file: `raw/sources/20260409-docs-latest-operate-rs-databases-active-active-develop-data-types-sorted-sets-756ef6a2e7.md`
- [Redis Geospatial (Geo)]() is based on Sorted Sets, so the same Active-Active database development instructions apply to Geo.
- Similar to Redis Sets, Redis Sorted Sets are non-repeating collections
- of Strings. The difference between the two is that every member of a
- Sorted Set is associated with a score used to order the Sorted Set from
- lowest to highest. While members are unique, they may have the same

## Streams in Active-Active databases
Source file: `raw/sources/20260409-docs-latest-operate-rs-databases-active-active-develop-data-types-streams-b6e55997af.md`
- You add entries to a stream with the XADD command. You access stream entries using the XRANGE, XREADGROUP, and XREAD commands (however, see the caveat about XREAD below).
- Active-Active databases allow you to write to the same logical stream from more than one region.
- Streams are synchronized across the regions of an Active-Active database.
- In the example below, we write to a stream concurrently from two regions. Notice that after syncing, both regions have identical streams:
- <td><code>XADD messages * text hello</code></td>

## Develop applications with Active-Active databases
Source file: `raw/sources/20260409-docs-latest-operate-rs-databases-active-active-develop-develop-for-aa-265e2ea720.md`
- Application developers may have to understand a large number of race
- conditions between updates to various sites, network, and cluster
- failures that could reorder the events and change the outcome of the
- updates performed across geo-distributed writes.
- Active-Active databases (formerly known as CRDB) are geo-distributed databases that span multiple Redis Software clusters.

## Active-Active Redis applications
Source file: `raw/sources/20260409-docs-latest-operate-rs-databases-active-active-develop-fe42d9a5b1.md`
- developers have to think about race conditions and complex combinations
- of events under geo-failovers and cross-region write conflicts. In Redis Software (RS), Active-Active databases
- simplify developing such applications by directly using built-in smarts
- for handling conflicting writes based on the data type in use. Instead
- of depending on just simplistic "last-writer-wins" type conflict

## Disaster recovery strategies for Active-Active databases
Source file: `raw/sources/20260409-docs-latest-operate-rs-databases-active-active-disaster-recovery-f825c3f717.md`
- An application deployed with an Active-Active database connects to a database member that is geographically nearby. If that database member becomes unavailable, the application can fail over to a secondary Active-Active database member, and fail back to the original database member again if it recovers.
- However, because Active-Active Redis databases do not have a built-in [failover](https://en.wikipedia.org/wiki/Failover) or failback mechanism for application connections, you must implement one of the following [disaster recovery strategies](#disaster-recovery-strategies).
- Depending on your requirements for Recovery Point Objective, Recovery Time Objective, consistency, scalability, resources, maintainability, and other factors, choose one of the following strategies to fail over to a secondary Active-Active member or fail back to the primary member:
- When implementing a disaster recovery strategy for an Active-Active database, consider the following:
- Depending on the failover strategy, you can use the following health checks to detect Active-Active database failures and determine whether to fail over to a secondary Active-Active member, or fail back to the primary member after the preferred endpoint is back online.

## Get started with Redis Software Active-Active databases
Source file: `raw/sources/20260409-docs-latest-operate-rs-databases-active-active-get-started-99600623dd.md`
- To get started, this article will help you set up an Active-Active database, formerly known as CRDB (conflict-free replicated database), spanning across two Redis Software
- clusters for test and development environments. Here are the steps:
- 1. Run two Redis Software Docker containers.
- 1. Create a new Redis Software Active-Active database.
- 1. Test connectivity to the Active-Active database.

## Manage Active-Active databases
Source file: `raw/sources/20260409-docs-latest-operate-rs-databases-active-active-manage-67287a12c8.md`
- You can configure and manage your Active-Active database from either the Cluster Manager UI or the command line.
- Most Active-Active database settings can be changed after database creation. One notable exception is database clustering, which can't be turned on or off after the database has been created.
- As of Redis Software version 8.0.16, the Cluster Manager UI supports both [global](#change-global-configuration) and [local](#change-local-configuration) configuration changes for Active-Active databases. In earlier versions, configuration changes made in the Cluster Manager UI applied only to the local instance and required additional manual updates for each participating cluster.
- Global configuration changes are applied to all participating clusters in the Active-Active database. However, if your Active-Active mesh contains local configurations, they will continue to override global settings on the database instances where they are applied.
- Applying global configuration changes will override any local settings created using the API or earlier Cluster Manager UI versions. To keep local changes, manage them in the [**Local** configuration tab](#change-local-configuration).

## Considerations for planning Active-Active databases
Source file: `raw/sources/20260409-docs-latest-operate-rs-databases-active-active-planning-ac3bafd81d.md`
- In Redis Software, Active-Active geo-distribution is based on [conflict-free replicated data type (CRDT) technology](https://en.wikipedia.org/wiki/Conflict-free_replicated_data_type). Compared to databases without geo-distribution, Active-Active databases have more complex replication and networking, as well as a different data type.
- Because of the complexities of Active-Active databases, there are special considerations to keep in mind while planning your Active-Active database.
- See [Active-Active Redis]() for more information about geo-distributed replication. For more info on other high availability features, see [Durability and high availability]().
- You need at least [two participating clusters]() for an Active-Active database. If your database requires more than ten participating clusters, contact Redis support. You can [add or remove participating clusters]() after database creation.
- If an Active-Active database [runs on flash memory](), you cannot add participating clusters that run on RAM only.

## Syncer process
Source file: `raw/sources/20260409-docs-latest-operate-rs-databases-active-active-syncer-6197ab1fdb.md`
- Each node in a cluster containing an instance of an Active-Active database hosts a process called the syncer.
- 1. Connects to the proxy on another participating cluster
- 1. Reads data from that database instance
- 1. Writes the data to the local cluster's primary(master) shard
- Some replication capabilities are also included in [Redis Open Source]().

## Configure database settings
Source file: `raw/sources/20260409-docs-latest-operate-rs-databases-configure-6babd63b98.md`
- You can manage your Redis Software databases with several tools:
- You can change the configuration of a Redis Software database at any time.<!--more-->
- To edit the configuration of a database using the Cluster Manager UI:
- 1. On the **Databases** screen, select the database you want to edit.
- 1. From the **Configuration** tab, select **Edit**.

## Configure database persistence
Source file: `raw/sources/20260409-docs-latest-operate-rs-databases-configure-database-persistence-fc789ab1a7.md`
- Data is stored in RAM or a combination of RAM and flash memory ([Redis Flex and Auto Tiering]()), which risks data loss during process or server failures. Redis Software supports multiple methods to persist data to disk on a per-database basis to ensure data durability.
- You can configure [persistence](https://redis.com/redis-enterprise/technology/durable-redis/) during database creation or by editing an existing database. Although the persistence model can be changed dynamically, the switch can take time depending on the database size and the models being switched.
- You can configure persistence when you [create a database](), or you can edit an existing database's configuration:
- 1. From the **Databases** list, select the database, then select **Configuration**.
- 1. For **Persistence**, select an [option](#data-persistence-options) from the list.

## Enable OSS Cluster API
Source file: `raw/sources/20260409-docs-latest-operate-rs-databases-configure-oss-cluster-api-4210614df7.md`
- Review [OSS Cluster API]() to determine if you should enable this feature for your database.
- The OSS Cluster API is supported only when a database meets specific criteria.
- The OSS Cluster API setting applies to individual databases instead of the entire cluster.
- For Kubernetes deployments, see [Enable cluster-aware clients (OSS Cluster API)]().
- You can use the Cluster Manager UI, the `rladmin` utility, or the REST API to enable OSS Cluster API support for a database.

## Troubleshooting pocket guide for Redis Software
Source file: `raw/sources/20260409-docs-latest-operate-rs-databases-connect-troubleshooting-guide-f25d113e2e.md`
- If your client or application cannot connect to your database, verify the following.
- 1. Run the [`free`](https://man7.org/linux/man-pages/man1/free.1.html) command to check memory usage:
- 1. Used CPU should be less than `80%`. To check CPU usage, use `top` or `vmstat`.
- Run [`top`](https://man7.org/linux/man-pages/man1/top.1.html):
- Run [`vmstat`](https://man7.org/linux/man-pages/man8/vmstat.8.html):

## Durability and high availability
Source file: `raw/sources/20260409-docs-latest-operate-rs-databases-durability-ha-7f699607a3.md`
- When you [replicate your database](), each database instance (primary shard) is copied to a replica shard. When a primary shard fails, the cluster automatically promotes a replica shard to primary.
- [Clustering]() (or sharding) breaks your database into individual instances (shards) and spreads them across several nodes. Clustering lets you add resources to your cluster to scale your database and prevents node failures from causing availability loss.
- [Database persistence]() gives your database durability against process or server failures by saving data to disk at set intervals.
- [Active-Active Redis Software databases]() allow reading and writing to the same dataset from multiple clusters in different geographic locations. This increases the durability of your database by reducing the likelihood of data or availability loss. It also reduces data access latency by serving requests from the nearest cluster.
- [Rack-zone awareness]() maps each node in your Redis Software cluster to a physical rack or logical zone. The cluster uses this information to distribute primary shards and their replica shards in different racks or zones. This ensures data availability if a rack or zone fails.

## Consistency during replication
Source file: `raw/sources/20260409-docs-latest-operate-rs-databases-durability-ha-consistency-cfff9a3007.md`
- to another database instance for high availability and persist in-memory data on
- disk permanently for durability. With the [`WAIT`]() command, you can
- control the consistency and durability guarantees for the replicated and
- Any updates that are issued to the database are typically performed with the following flow:
- 2. The proxy communicates with the correct primary (also known as master) shard in the system that contains the given key.

## Database replication
Source file: `raw/sources/20260409-docs-latest-operate-rs-databases-durability-ha-replication-e154165c4c.md`
- When replication is enabled, your dataset is replicated to a replica shard,
- which is constantly synchronized with the primary shard. If the primary
- shard fails, an automatic failover happens and the replica shard is promoted.  That is, it becomes the new primary shard.
- When the old primary shard recovers, it becomes
- the replica shard of the new primary shard. This auto-failover mechanism

## Redis Flex and Auto Tiering
Source file: `raw/sources/20260409-docs-latest-operate-rs-databases-flash-679f180bf8.md`
- Developers can build applications that require large datasets using the same Redis API.
- Using SSDs can significantly reduce the infrastructure costs compared to only DRAM deployments.
- Frequently used data, called hot data, belongs in the fastest memory level to deliver a real-time user experience.
- Data that is accessed less frequently, called warm data, can be kept in a slightly slower memory tier.
- Redis Flex maintains hot data in DRAM, keeps warm data in SSDs, and transfers data between tiers automatically.

## Manage Auto Tiering storage engine
Source file: `raw/sources/20260409-docs-latest-operate-rs-databases-flash-storage-engine-53649b0132.md`
- Auto Tiering supports two storage engines:
- Switching between storage engines requires guidance by Redis Support or your Account Manager.
- 1. Change the cluster level configuration for default storage engine.
- 2. Restart the each database on the cluster one by one.
- We recommend restarting your database at times with low usage and avoiding peak hours. For databases without persistence enabled, we also recommend using export to backup your database first.

## Flush database data
Source file: `raw/sources/20260409-docs-latest-operate-rs-databases-import-export-flush-616f88ef8c.md`
- you can flush the data from the database.
- You can use the Cluster Manager UI to flush data from Active-Active databases.
- The flush command deletes ALL in-memory and persistence data in the database.
- We recommend that you [back up your database]() before you flush the data.
- From the command line, you can flush a database with the redis-cli command or with your favorite Redis client.

## Import data into a database
Source file: `raw/sources/20260409-docs-latest-operate-rs-databases-import-export-import-data-8f979779bd.md`
- files of a specific Redis Software database to restore data.
- You can either import from a single file or from multiple files,
- such as when you want to import from a backup of a clustered database.
- Importing data erases all existing content in the database.
- To import data into a database using the Cluster Manager UI:

## Replica Of geo-distributed Redis
Source file: `raw/sources/20260409-docs-latest-operate-rs-databases-import-export-replica-of-24981eb10c.md`
- to replicas of the dataset from different geographical locations.
- The Redis Software implementation of active-passive replication is called Replica Of.
- In Replica Of, an administrator designates a database as a replica (destination) of one or more databases (sources).
- After the initial data load from source to destination is completed,
- all write commands are synchronized from the sources to the destination.

## Schedule periodic backups
Source file: `raw/sources/20260409-docs-latest-operate-rs-databases-import-export-schedule-backups-6ed410d087.md`
- Periodic backups provide a way to restore data with minimal data loss.  With Redis Software, you can schedule periodic backups to occur once a day (every 24 hours), twice a day (every twelve hours), every four hours, or every hour.
- As of v6.2.8, you can specify the start time in UTC for 24-hour or 12-hour backups.
- To make an on-demand backup, [export your data]().
- You can schedule backups to a variety of locations, including:
- The backup process creates compressed (.gz) RDB files that you can [import into a database](). If the database name is longer than 30 characters, only the first 30 are used in backup file names.

## Memory and performance
Source file: `raw/sources/20260409-docs-latest-operate-rs-databases-memory-performance-02ded694b2.md`
- architecture to help optimize storage and performance.
- Database memory limits define the maximum size your database can reach across all database replicas and [shards]() on the cluster. Your memory limit will also determine the number of shards you'll need.
- Besides your dataset, the memory limit must also account for replication, Active-Active overhead, and module overhead, and a number of other factors. These can significantly increase your database size, sometimes increasing it by four times or more.
- For more information on memory limits, see [Database memory limits]().
- When a database exceeds its memory limit, eviction policies determine which data is removed. The eviction policy removes keys based on frequency of use, how recently used, randomly, expiration date, or a combination of these factors. The policy can also be set to `noeviction` to return a memory limit error when trying to insert more data.

## Database memory limits
Source file: `raw/sources/20260409-docs-latest-operate-rs-databases-memory-performance-memory-limit-c6394148e6.md`
- database can reach in the cluster, across all database replicas and
- shards, including both primary and replica shards.
- If the total size of the database in the cluster reaches the memory
- Factors to consider when sizing your database:
- Additional factors for Active-Active databases:

## Recover a failed database
Source file: `raw/sources/20260409-docs-latest-operate-rs-databases-recover-3664bf8e66.md`
- 1. [Restore the cluster configuration]() from the CCS files
- 1. Recover the databases with their previous configuration and data
- To restore data to databases in the new cluster,
- you must restore the database persistence files (backup, AOF, or snapshot files) to the databases.
- These files are stored in the [persistence storage location]().

## Create a support package
Source file: `raw/sources/20260409-docs-latest-operate-rs-installing-upgrading-creating-support-package-4bace6fa83.md`
- and need to [contact Redis support](https://redis.io/support/) for assistance, you can [create a support package](#create-support-package) that gathers all essential information to help debug
- The process of creating the support package can take several minutes and generates load on the system.
- To create a support package from the Cluster Manager UI:
- 1. In the navigation menu, select **Support**.
- <img src="../../../../images/rs/screenshots/create-support-package/support-package-dialog.png" alt="Select Support from the navigation menu and create a support package.">

## Configure AWS EC2 instances for Redis Software
Source file: `raw/sources/20260409-docs-latest-operate-rs-installing-upgrading-install-plan-deployment-configuring--71b0d711a5.md`
- and running Redis Software on Amazon Elastic Cloud Compute (EC2) instances.
- AWS EC2 instances are ephemeral, but your persistent database storage should
- not be. If you require a persistent storage location for your database,
- the storage must be located outside of the instance. When you
- set up an instance, make sure it has a properly sized EBS-backed volume

## File locations
Source file: `raw/sources/20260409-docs-latest-operate-rs-installing-upgrading-install-plan-deployment-file-locatio-a1d825e64f.md`
- To ensure that Redis Software functions properly, be careful with the files in the application directories. If you modify or delete the application files, Redis Software might not work as expected.
- The directories that Redis Software installs into are:
- | /opt/redislabs | Main installation directory for all Redis Software binaries |
- | /opt/redislabs/bin | Binaries for all the utilities for command-line access and management, such as [`rladmin`]() or [`redis-cli`]() |
- | /opt/redislabs/config | System configuration files |

## Hardware requirements
Source file: `raw/sources/20260409-docs-latest-operate-rs-installing-upgrading-install-plan-deployment-hardware-req-ff663679b1.md`
- Factors to consider when sizing your database.
- Additional factors for sizing Active-Active databases:
- Active-Active databases have a lower threshold for activating the eviction policy, because it requires propagation to all participating clusters. The eviction policy starts to evict keys when one of the Active-Active instances reaches 80% of its memory limit.
- Additional factors for sizing  databases with Auto Tiering enabled:

## Persistent and ephemeral node storage
Source file: `raw/sources/20260409-docs-latest-operate-rs-installing-upgrading-install-plan-deployment-persistent-e-9eed6cb30a.md`
- storage and ephemeral storage. To do so, the volume must have full permissions for user and group `redislabs` or users:group `redislabs:redislabs`. See the [Customize system user and group]() page for instructions.
- The persistent storageÂ and ephemeral storage discussed in this document are not related
- to Redis persistence or AWS ephemeral drives.
- Persistent storage is mandatory. The cluster uses persistent storage to store
- information that needs to persist if a shard or a node fails,

## Upgrade an Active-Active database
Source file: `raw/sources/20260409-docs-latest-operate-rs-installing-upgrading-upgrading-upgrade-active-active-9acf6136f3.md`
- To upgrade an [Active-Active (CRDB) database]():
- 1. [Upgrade Redis Software]() on each node in the clusters where the Active-Active instances are located.
- 1. [Check the status](#check-database-status) of all Active-Active database instances.
- 1. [Upgrade all Active-Active database instances](#upgrade-database-instances) to a later version of Redis.
- 1. If the status indicates `OLD CRDB FEATURESET VERSION`, [upgrade the featureset version](#upgrade-featureset-version). See [Feature version guidelines](#feature-version-guidelines) for more information.

## Upgrade a Redis Software database
Source file: `raw/sources/20260409-docs-latest-operate-rs-installing-upgrading-upgrading-upgrade-database-3f0e4140ae.md`
- When you upgrade an existing database, it uses the latest bundled Redis version unless you specify a different version with the `redis_version` option in the [REST API]() or [`rladmin upgrade db`]().
- To view available Redis database versions:
- The default Redis database version differs between Redis Software releases as follows:
- | Redis<br />Software | Bundled Redis<br />DB versions | Default DB version<br />(upgraded/new databases) |
- | 8.0.10 | 6.2, 7.2, 7.4, 8.0, 8.2, 8.4 | 8.4 |

## Set up a Redis Software cluster behind a load balancer
Source file: `raw/sources/20260409-docs-latest-operate-rs-networking-cluster-lba-setup-b5e40a4ea6.md`
- Normally, Redis Software uses DNS to provide dynamic database endpoints.
- A DNS name such as `redis-12345.clustername.domain` gives clients access to the database resource:
- When DNS cannot be used, clients can still connect to the endpoints with the IP addresses,
- but the benefits of load balancing and automatic updates to IP addresses won't be available.
- You can compensate for the lack of DNS resolution with load balancers that can expose services and provide service discovery.

## Network port configurations
Source file: `raw/sources/20260409-docs-latest-operate-rs-networking-port-configurations-9a36a45700.md`
- All Redis Software deployments span multiple physical/virtual nodes. You'll need to keep several ports open between these nodes. This document describes the various port ranges and their uses.
- Whenever you create a new database, you must verify that the ports assigned to the new database's endpoints are open. The cluster will not perform this verification for you.
- Redis Software's port usage falls into three general categories:
- | Protocol | Port | Configurable | Connection source | Description |
- |----------|------|--------------|-------------------|-------------|

## Command-line utilities
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-cli-utilities-b5f8e6a6a9.md`
- Redis Software includes a set of utilities to help you manage and test your cluster. To use a utility, run it from the command line.
- Administrators can use these CLI tools to manage and test a Redis Software cluster. You can find the binaries in the `/opt/redislabs/bin/` directory.
- The `/opt/redislabs/bin/` directory also contains utilities used internally by Redis Software and for troubleshooting.
- Do not use these tools for normal operations.
- | bdb-cli | `redis-cli` connected to a database. |

## crdb-cli
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-cli-utilities-crdb-cli-41da0ce067.md`
- An [Active-Active database]() (also known as CRDB or conflict-free replicated database)
- replicates your data across Redis Software clusters located in geographically distributed regions.
- Active-Active databases allow read-write access in all locations, making them ideal for distributed applications that require fast response times and disaster recovery.
- The Active-Active database on an individual cluster is called an **instance**.
- Each cluster that hosts an instance is called a **participating cluster**.

## crdb-cli crdb add-instance
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-cli-utilities-crdb-cli-crdb-add-instance-df8c7e08c1.md`
- Adds a peer replica to an existing Active-Active database in order to host the database on another cluster. This creates an additional active instance of the database on the specified cluster.
- | crdb-guid | string  | The GUID of the database (required) |
- | instance fqdn=\<cluster_fqdn\>,username=\<username\>,password=\<password\>,url=https://\<hostname-or-IP\>:9443,replication_endpoint=\<hostname-or-IP\>:\<port\>,replication_tls_sni=\<hostname\> | strings | The connection information for the new participating cluster (required)<br/><br/>**Required:**<br/>â¢ `fqdn` - Cluster fully qualified domain name<br/>â¢ `username` - Cluster username<br/>â¢ `password` - Cluster password<br/><br/>**Optional:**<br/>â¢ `url` - URL to access the cluster's REST API<br/>â¢ `replication_endpoint` - Address to access the database instance for peer replication<br/>â¢ `replication_tls_sni` - Cluster [Server Name Indication (SNI)](https://en.wikipedia.org/wiki/Server_Name_Indication) hostname for TLS connections |
- | compression | 0-6 | The level of data compression: <br /><br > 0 = No compression <br /><br > 6 = High compression and resource load (Default: 3) |
- | wait | | Prevents `crdb-cli` from running another command before this command finishes |

## crdb-cli crdb create
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-cli-utilities-crdb-cli-crdb-create-78ee69b0b1.md`
- Before you create an Active-Active database, you must have:
- | Parameter&nbsp;&&nbsp;options(s)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                                                                             | Value                                           | Description                                                                                                                                                                                                                  |
- |---------------------------------------------------------------------------------------|-------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
- | name \<CRDB_name\>                                                                  | string                                          | Name of the Active-Active database (required)                                                                                                                                                                                |
- | memory-size \<maximum_memory\>                                                                | size in bytes, megabytes (MB), or gigabytes (GB) | Maximum database memory (required)                                                                                                                                                                                           |

## crdb-cli crdb delete
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-cli-utilities-crdb-cli-crdb-delete-d8bed09e1b.md`
- This command is irreversible. If the data in your database is important, back it up before you delete the database.
- | Parameter           | Value  | Description                         |
- |---------------------|--------|-------------------------------------|
- | crdb-guid | string | The GUID of the database (required) |
- | no-wait             |        | Does not wait for the task to complete |

## crdb-cli crdb commands
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-cli-utilities-crdb-cli-crdb-e700d8e902.md`
- Use `crdb-cli crdb` commands to manage Active-Active databases.

## crdb-cli crdb flush
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-cli-utilities-crdb-cli-crdb-flush-9fb84235dc.md`
- Clears all keys from an Active-Active database.
- This command is irreversible. If the data in your database is important, back it up before you flush the database.
- | Parameter           | Value  | Description                         |
- |---------------------|--------|-------------------------------------|
- | crdb-guid  | string | The GUID of the database (required) |

## crdb-cli crdb get
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-cli-utilities-crdb-cli-crdb-get-5e444c11e7.md`
- Shows the current configuration of an Active-Active database.
- | Parameter           | Value  | Description                         |
- |---------------------|--------|-------------------------------------|
- | crdb-guid  | string | The GUID of the database (required) |
- Returns the current configuration of the database.

## crdb-cli crdb health-report
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-cli-utilities-crdb-cli-crdb-health-report-2413b9b4eb.md`
- Shows the health report of the API management layer of an Active-Active database.
- | Parameter           | Value  | Description                         |
- |---------------------|--------|-------------------------------------|
- | crdb-guid  | string | The GUID of the database (required) |
- Returns the health report of the API management layer of the database.

## crdb-cli crdb list
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-cli-utilities-crdb-cli-crdb-list-31272ace85.md`
- Shows a list of all Active-Active databases.
- Returns a list of all Active-Active databases that the cluster participates in. Each database is represented with a unique GUID, the name of the database, an instance ID, and the FQDN of the cluster that hosts the instance.

## crdb-cli crdb purge-instance
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-cli-utilities-crdb-cli-crdb-purge-instance-3c98ab6fae.md`
- Deletes data from a local instance and removes the instance from the Active-Active database.
- Once this command finishes, the other replicas must remove this instance with [`crdb-cli crdb remove-instance --force`]().
- | Parameter                 | Value  | Description                                      |
- |---------------------------|--------|--------------------------------------------------|
- | crdb-guid        | string | The GUID of the database (required)              |

## crdb-cli crdb remove-instance
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-cli-utilities-crdb-cli-crdb-remove-instance-0ed9e718d3.md`
- Removes a peer replica instance from the Active-Active database and deletes the instance and its data from the participating cluster.
- If the cluster cannot communicate with the instance that you want to remove, you can:
- 1. Use the `--force` option to remove the instance from the Active-Active database without purging the data from the instance.
- 1. RunÂ [`crdb-cli crdb purge-instance`]()Â from the removed instance to delete the Active-Active database and its data.
- | Parameter                    | Value  | Description|

## crdb-cli crdb update
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-cli-utilities-crdb-cli-crdb-update-af433df88b.md`
- Updates the configuration of an Active-Active database.
- If you want to change the configuration of the local instance only, use [`rladmin`]() instead.
- | Parameter                                                           | Value                                                                                                                         | Description                                                                                                                                                              |
- |---------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
- | crdb-guid \<guid\>                                                 | string                                                                                                                        | GUID of the Active-Active database (required)                                                                                                                            |

## crdb-cli task cancel
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-cli-utilities-crdb-cli-task-cancel-7e1c6df4cd.md`
- Cancels the Active-Active database task specified by the task ID.
- | Parameter           | Value  | Description                         |
- |---------------------|--------|-------------------------------------|
- | task-id \<task_id\>  | string | An Active-Active database task ID (required) |
- Attempts to cancel an Active-Active database task.

## crdb-cli task commands
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-cli-utilities-crdb-cli-task-fdcf338794.md`
- The `crdb-cli task` commands help investigate Active-Active database performance issues.  They should not be used except as directed by Support.

## crdb-cli task list
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-cli-utilities-crdb-cli-task-list-3dae2a1cf0.md`
- Lists active and recent Active-Active database tasks.
- A table listing current and recent Active-Active tasks.  Each entry includes the following:
- | Task ID | String containing the unique ID associated with the task<br/>Example: `e1c49470-ae0b-4df8-885b-9c755dd614d0` |
- | CRDB-GUID | String containing the unique ID associated with the Active-Active database affected by the task<br/>Example: `1d7741cc-1110-4e2f-bc6c-935292783d24` |
- | Operation | String describing the task action<br/>Example: `create_crdb` |

## crdb-cli task status
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-cli-utilities-crdb-cli-task-status-44ca7b69e6.md`
- Shows the status of a specified Active-Active database task.
- | Parameter           | Value  | Description                         |
- |---------------------|--------|-------------------------------------|
- | task-id \<task_id\>  | string | An Active-Active database task ID (required) |
- | verbose              | N/A    | Returns detailed information when specified |

## rladmin cluster config
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-cli-utilities-rladmin-cluster-config-0a2fdfbd9f.md`
- | Parameter | Type/Value | Description |
- |-----------|------------|-------------|
- | audit_address | string | TCP/IP address where a listener can capture [audit event notifications]() |
- | audit_port | string | Port where a listener can capture [audit event notifications]() |
- | audit_protocol | `tcp`<br/>`local` | Protocol used for [audit event notifications]()<br/>For production systems, only `tcp` is supported. |

## rladmin cluster recover
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-cli-utilities-rladmin-cluster-recover-57dd3876e3.md`
- Recovers a cluster from a backup file. The default location of the configuration backup file is `/var/opt/redislabs/persist/ccs/ccs-redis.rdb`.
- | Parameter | Type/Value | Description |
- |-----------|------------|-------------|
- | addr | IP address | Sets a node's internal IP address. If not provided, the node sets the address automatically. (optional) |
- | ccs_persistent_path | filepath | Path to the location of CCS snapshots (default is the same as persistent_path) (optional) |

## rladmin info
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-cli-utilities-rladmin-info-76c27c2ffe.md`
- Shows the current configuration of specified databases, proxies, clusters, or nodes.
- Lists the current configuration for the cluster.
- Returns the current configuration for the cluster.
- Shows the current configuration for databases.
- | db:id     | ID of the specified database (optional) |

## rladmin node recovery_path set
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-cli-utilities-rladmin-node-recovery-path-b706fd0518.md`
- Sets the node's local recovery path, which specifies the directory where [persistence files]() are stored. You can use these persistence files to [recover a failed database]().
- | Parameter | Type/Value                     | Description                                                                                   |
- |-----------|--------------------------------|-----------------------------------------------------------------------------------------------|
- | node      | integer                        | Sets the recovery path for the specified node                                            |
- | path      | filepath                       | Path to the folder where persistence files are stored                                         |

## rladmin node remove
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-cli-utilities-rladmin-node-remove-6d13d5b8a3.md`
- Removes the specified node from the cluster.
- | Parameter             | Type/Value                     | Description                                                 |
- |-----------------------|--------------------------------|-------------------------------------------------------------|
- | node                  | integer                        | The node to remove from the cluster                    |
- | wait_for_persistence  | `enabled`<br />`disabled`      | Ensures persistence files are available for recovery. The cluster policy `persistent_node_removal` determines the default value. |

## rladmin placement
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-cli-utilities-rladmin-placement-6385762ade.md`
- Configures the shard placement policy for a specified database.
- | Parameter | Type/Value                     | Description                                                                                   |
- |-----------|--------------------------------|-----------------------------------------------------------------------------------------------|
- | db        | db:\<id\><br /> name           | Configures shard placement for the specified database                                         |
- | dense     |                                | Places new shards on the same node as long as it has resources                                |

## rladmin recover
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-cli-utilities-rladmin-recover-2e878ab9ec.md`
- Recovers databases in recovery mode after events such as cluster failure, and restores the databases' configurations and data from stored persistence files. See [Recover a failed database]() for detailed instructions.
- Database persistence files are stored in `/var/opt/redislabs/persist/redis/` by default, but you can specify a different directory to use for database recovery with [`rladmin node <id> recovery_path set <path>`]().
- Recovers all databases in recovery mode.
- | Parameters         | Type/Value | Description                                 |
- |--------------------|------------|---------------------------------------------|

## rladmin restart
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-cli-utilities-rladmin-restart-db080357a2.md`
- Schedules a restart of the Redis Software processes on primary and replica instances of a specific database.
- | Parameter      | Type/Value                     | Description                                                           |
- |----------------|--------------------------------|-----------------------------------------------------------------------|
- | db             | db:\<id\><br /> name           | Restarts Redis Software processes for the specified database                |
- | discard_data   |                                | Allows discarding data if there is no persistence or replication      |

## rladmin status
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-cli-utilities-rladmin-status-529a49c252.md`
- Displays the current cluster status and topology information.
- Displays the current status of all nodes, databases, database endpoints, and shards on the cluster.
- | extra \<parameter\> | Extra options that show more information |
- | issues_only | Filters out all items that have an `OK` status  |
- | extra all | Shows all `extra` information |

## rladmin tune
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-cli-utilities-rladmin-tune-6143ca9f8b.md`
- Configures parameters for databases, proxies, nodes, and clusters.
- | Parameters                             | Type/Value                        | Description                                                                                                                  |
- |----------------------------------------|-----------------------------------|------------------------------------------------------------------------------------------------------------------------------|
- | acl_pubsub_default | `resetchannels`<br /> `allchannels` | Default pub/sub ACL rule for all databases in the cluster:<br />â¢`resetchannels` blocks access to all channels (restrictive)<br />â¢`allchannels` allows access to all channels (permissive) |
- | automatic_node_offload | `enabled`<br />`disabled` | Define whether automatic node offload migration will take place |

## rladmin upgrade
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-cli-utilities-rladmin-upgrade-74a95552a7.md`
- Schedules a restart of the primary and replica processes of a database and then upgrades the database to the latest version of Redis.
- For more information, see [Upgrade an existing Redis Software Deployment]().
- As of v6.2.4, the default behavior for `upgrade db` has changed.  It is now controlled by a new parameter that sets the default upgrade policy used to create new databases and to upgrade ones already in the cluster.  To learn more, see [`tune cluster default_redis_version`]().
- As of Redis Software version 7.8.2, `upgrade db` will always upgrade modules.
- | Parameters                 | Type/Value               | Description                                                                                                            |

## Key commands compatibility
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-compatibility-commands-generic-7119eec824.md`
- The following table shows which Redis Open Source [key (generic) commands](?group=generic) are compatible with standard and Active-Active databases in Redis Software and Redis Cloud.
- | Command | Redis<br />Software | Redis<br />Cloud | Notes |
- |:--------|:----------------------|:-----------------|:------|
- | [COPY]() | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active\*</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active\*</nobr></span> | For Active-Active or clustered databases, the source and destination keys must be in the same hash slot.<br /><br />\*Not supported for stream consumer group info. |
- | [DEL]() | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |

## Server management commands compatibility
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-compatibility-commands-server-e1aac9fac8.md`
- The following tables show which Redis Open Source [server management commands](?group=server) are compatible with standard and Active-Active databases in Redis Software and Redis Cloud.
- Several access control list (ACL) commands are not available in Redis Software. Instead, you can manage access controls from the [Redis Software Cluster Manager UI]() and the [Redis Cloud console]().
- | <span style="min-width: 9em; display: table-cell">Command</span> | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:--------|:----------------------|:-----------------|:------|
- | [ACL CAT]() | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | Not supported for [scripts](). |

## Benchmark an Auto Tiering enabled database
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-memtier-benchmark-e616b314d6.md`
- But what does the performance look like as compared to a memory-only database, one stored solely in RAM?
- These scenarios use the `memtier_benchmark` utility to evaluate the performance of a Redis Software deployment, including the trial version.
- The `memtier_benchmark` utility is located in `/opt/redislabs/bin/` of Redis Software deployments.  To test performance for cloud provider deployments, see the [memtier-benchmark GitHub project](https://github.com/RedisLabs/memtier_benchmark).
- For additional, such as assistance with larger clusters, [contact support](https://redislabs.com/company/support/).
- These tests assume you're using a trial version of Redis Software and want to test the performance of a Auto Tiering enabled database in the following scenarios:

## Resource usage metrics
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-metrics-resource-usage-710ec2df55.md`
- The following metrics are available in the Redis Software Cluster Manager UI.
- **Components measured**: Cluster, Node, and Database
- **Components measured**:  Cluster and Node
- Percent of the CPU used by the main thread.
- **Components measured**: Database and Shard

## BDB object
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-objects-bdb-9d08a4dec7.md`
- An API object that represents a managed database in the cluster.
- | uid | integer; Cluster unique ID of database. Can be set during creation but cannot be updated. |
- | action_uid | string; Currently running action's UID (read-only) |
- | active_defrag_cycle_max | integer, (range: 1-99); Maximum CPU percentage used for defragmentation when the upper threshold is reached |
- | active_defrag_cycle_min | integer, (range: 1-99) (default: 1); Minimal CPU percentage used for defragmentation when the lower threshold is reached |

## BDB dataset import sources object
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-objects-bdb-dataset-import-sources-eaf17559f3.md`
- You can import data to a database from the following location types:
- The source file to import should be in the [RDB]() format. It can also be in a compressed (gz) RDB file.
- Supply an array of dataset import source objects to import data from multiple files.
- For all import location objects, you need to specify the location type via the `type` field.
- Any additional required parameters may differ based on the import location type.

## BDB replica sync field
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-objects-bdb-replica-sync-2cf80be2bc.md`
- The BDB `replica_sync` field relates to the [Replica Of]() feature, which enables the creation of a Redis database (single- or multi-shard) that synchronizes data from another Redis database (single- or multi-shard).
- You can use the `replica_sync` field to enable, disable, or pause the [Replica Of]() sync process. The BDB `crdt_sync` field has a similar purpose for the Redis CRDB.
- | Status | Description | Possible next status |
- |--------|-------------|----------------------|
- | 'disabled' | (default value) Disables the sync process and represents that no sync is currently configured or running. | 'enabled' |

## Syncer sources object
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-objects-bdb-syncer-sources-9da68ab5a8.md`
- | uid | integer | Unique ID of this source |
- | client_cert | string | Client certificate to use if encryption is enabled |
- | client_key | string | Client key to use if encryption is enabled |
- | compression | integer, <nobr>(range: 0-6)</nobr> | Compression level for the replication link |
- | encryption | boolean | Encryption enabled/disabled |

## Bootstrap object
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-objects-bootstrap-678895973d.md`
- | action | 'create_cluster'<br />'join_cluster'<br />'recover_cluster' | Action to perform |
- | cluster | [cluster_identity]() object | Cluster to join or create |
- | cnm_https_port | integer | Port to join a cluster with non-default cnm_https port |
- | crdb_coordinator_port | integer, (range: 1024-65535) (default: 9081) | CRDB coordinator port |
- | credentials | [credentials]() object | Cluster admin credentials |

## Policy object
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-objects-bootstrap-policy-8807b1bc67.md`
- | default_fork_evict_ram | boolean (default:&nbsp;false) | If true, the databases should evict data from RAM to ensure successful replication or persistence |
- | default_non_sharded_proxy_policy | **'single'** <br />'all-master-shards'<br />'all-nodes' | Default proxy_policy for newly created non-sharded databases' endpoints |
- | default_sharded_proxy_policy | 'single'<br /> **'all-master-shards'** <br />'all-nodes' | Default proxy_policy for newly created sharded databases' endpoints |
- | default_shards_placement | 'dense'<br /> **'sparse'** | Default shards_placement for newly created databases |
- | rack_aware | boolean | Cluster rack awareness |

## Cluster object
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-objects-cluster-82ff8f034c.md`
- An API object that represents the cluster.
- | alert_settings | [alert_settings]() object | Cluster and node alert settings |
- | <span class="break-all">availability_lag_tolerance_ms</span> | integer (default: 100) | The maximum replication lag in milliseconds tolerated between source and replicas during [lag-aware database availability checks](). |
- | bigstore_driver | "speedb"<br />"rocksdb" | Storage engine for [Redis Flex or Auto Tiering]() |
- | <span class="break-all">cluster_ssh_public_key</span> | string | Cluster's autogenerated SSH public key |

## Alert settings object
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-objects-cluster-alert-settings-90db58eab7.md`
- | cluster_certs_about_to_expire | <span class="break-all">[cluster_alert_settings_with_threshold]()</span> object | Cluster certificate will expire in x days |
- | cluster_even_node_count | boolean (default: false) | True high availability requires an odd number of nodes in the cluster |
- | cluster_flash_overcommit | boolean (default: false) | Flash memory committed to databases is larger than cluster total flash memory |
- | cluster_inconsistent_rl_sw | boolean (default: false) | Some nodes in the cluster are running different versions of Redis Software |
- | cluster_internal_bdb | boolean (default: false) | Issues with internal cluster databases |

## Cluster settings object
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-objects-cluster-settings-f7026010bb.md`
- | acl_pubsub_default | `resetchannels`<br /> `allchannels` | Default pub/sub ACL rule for all databases in the cluster:<br />â¢`resetchannels` blocks access to all channels (restrictive)<br />â¢`allchannels` allows access to all channels (permissive) |
- | auto_recovery | boolean (default: false) | Defines whether to use automatic recovery after shard failure |
- | automatic_node_offload | boolean (default: true) | Defines whether the cluster will automatically migrate shards from a node, in case the node is overbooked |
- | <span class="break-all">bigstore_migrate_node_threshold</span> | integer | Minimum free memory (excluding reserved memory) allowed on a node before automatic migration of shards from it to free more memory |
- | <span class="break-all">bigstore_migrate_node_threshold_p</span> | integer | Minimum free memory (excluding reserved memory) allowed on a node before automatic migration of shards from it to free more memory |

## CRDB object
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-objects-crdb-94db85f49e.md`
- An object that represents an Active-Active database.
- | guid | string | The global unique ID of the Active-Active database |
- | causal_consistency | boolean | Enables causal consistency across CRDT instances |
- | default_db_config| [CRDB database_config]() object | Default database configuration applied to all instances in the CRDB object. In most cases, instances should use the same configuration. If you need to override `default_db_config` or add configuration values for specific instances, you can use `db_config` in individual [instance objects](). |
- | encryption | boolean | Encrypt communication |

## CRDB cluster info object
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-objects-crdb-cluster-info-7ff46d477c.md`
- Configuration details for a cluster that is part of an Active-Active database.
- }  | Cluster access credentials (required) |
- | name | string | Cluster fully qualified name, used to uniquely identify the cluster. Typically this is the same as the hostname used in the URL, although in some configruations the URL may point to a different name/address. (required) |
- | replication_endpoint | string | Address to use for peer replication. If not specified, it is assumed that standard cluster naming conventions apply. |
- | replication_tls_sni | string | Cluster SNI for TLS connections |

## CRDB database config object
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-objects-crdb-database-config-344c788741.md`
- An object that represents the database configuration. This configuration object is used in two contexts within CRDB objects:
- | aof_policy | **'appendfsync-every-sec'** <br />'appendfsync-always' | Policy for Append-Only File data persistence |
- | <span class="break-all">authentication_admin_pass</span> | string | Administrative databases access token |
- | <span class="break-all">authentication_redis_pass</span> | string | Redis AUTH password (deprecated as of Redis Software v7.2, replaced with multiple passwords feature in version 6.0.X) |
- | bigstore | boolean (default: false) | Database driver is Auto Tiering |

## CRDB health report object
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-objects-crdb-health-report-c8ea684133.md`
- An object that represents an Active-Active database health report.
- | active_config_version | integer | Active configuration version |
- | cluster_name | string | Name of local Active-Active cluster |
- | configurations | array of [health_report_configuration]() objects | Stored database configurations |
- | connection_error | string | Error string if remote cluster is not available |

## CRDB health report configuration object
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-objects-crdb-health-report-health-rep-cc88c8d0c8.md`
- An object that represents the database configuration to include in an Active-Active database health report.
- | causal_consistency | boolean | Enables causal consistency across Active-Active replicas |
- | encryption | boolean | Intercluster encryption |
- | featureset_version | integer | CRDB active FeatureSet version |
- | protocol_version | integer | CRDB active protocol version |

## CRDB instance info object
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-objects-crdb-instance-info-37ac0766be.md`
- An object that represents Active-Active instance info.
- | cluster | [CRDB cluster_info]() object | |
- | compression | integer | Compression level when syncing from this source |
- | db_config | [CRDB database_config]() object | Database configuration for this specific instance. Use `db_config` only when you need to override or add configuration values that differ from the `default_db_config` in the main [CRDB object](). |
- | db_uid | string | ID of local database instance. This field is likely to be empty for instances other than the local one. |

## CRDB modify request object
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-objects-crdb-modify-request-7907868c1e.md`
- An object to update an Active-Active database.
- | add_instances | array of [CRDB instance_info]() objects | List of new CRDB instances |
- | crdb | [CRDB]() object | An object that represents an Active-Active database |
- | force_update | boolean | (Warning: This flag can cause unintended and dangerous changes) Force the configuration update and increment the configuration version even if there is no change to the configuration parameters. If you use force, you can mistakenly cause the other instances to update to the configuration version even though it was not changed. |
- | remove_instances | array of integers | List of unique instance IDs |

## CRDB task object
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-objects-crdb-task-8e278d5396.md`
- An object that represents an Active-Active (CRDB) task.
- | id | string | CRDB task ID (read-only) |
- | crdb_guid | string | Globally unique Active-Active database ID (GUID) (read-only) |
- | ended | string | Timestamp when the task ended (read-only) |
- }, ...]  | Details for errors that occurred on a cluster |

## Database alerts settings object
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-objects-db-alerts-settings-506e93d593.md`
- An API object that represents the database alerts configuration.
- | bdb_backup_delayed | [bdb_alert_settings_with_threshold]() object | Periodic backup has been delayed for longer than specified threshold value (minutes) |
- | bdb_crdt_src_high_syncer_lag | [bdb_alert_settings_with_threshold]() object | CRDB source sync lag is higher than specified threshold value (seconds) |
- | bdb_crdt_src_syncer_connection_error | [bdb_alert_settings_with_threshold]() object | CRDB source sync had a connection error while trying to connect to replica source |
- | bdb_crdt_src_syncer_general_error | [bdb_alert_settings_with_threshold]() object | CRDB sync encountered in general error |

## Job scheduler object
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-objects-job-scheduler-38f7ba60ef.md`
- An API object that represents the job scheduler settings in the cluster.
- | backup_job_settings | [backup_job_settings]() object | Backup job settings |
- | <span class="break-all">bdb_usage_report_job_settings</span> | <span class="break-all">[bdb_usage_report_job_settings]()</span> object | Job settings for database usage reports |
- | <span class="break-all">cert_rotation_job_settings</span> | <span class="break-all">[cert_rotation_job_settings]()</span> object | Job settings for internal certificate rotation |
- | <span class="break-all">log_rotation_job_settings</span> | <span class="break-all">[log_rotation_job_settings]()</span> object | Log rotation job settings |

## Redis cleanup job settings object
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-objects-job-scheduler-redis-cleanup-j-d94497a065.md`
- Deprecated and replaced with `persistence_cleanup_scan_interval`.
- | cron_expression | string | [CRON expression](https://en.wikipedia.org/wiki/Cron#CRON_expression) that defines the Redis cleanup scheduleÂ |

## Rotate CCS job settings object
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-objects-job-scheduler-rotate-ccs-job--9ce7a005b5.md`
- | cron_expression | string | [CRON expression](https://en.wikipedia.org/wiki/Cron#CRON_expression) that defines the CCS rotation schedule |
- | enabled | boolean (default: true) | Indicates whether this job is enabled |
- | file_suffix | string (default:&nbsp;5min) | String added to the end of the rotated RDB files |
- | rotate_max_num | integer, (range:&nbsp;1-100) (default:&nbsp;24) | The maximum number of saved RDB files |

## Module object
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-objects-module-085327b7c2.md`
- | uid | string | Cluster unique ID of module |
- | bigstore_version_2_support | boolean (default: false) | Whether the module supports bigstore_version_2 capability, bypassing capability validation (optional) |
- | capabilities | array of strings | List of capabilities supported by this module |
- | capability_name | string | Short description of module functionality |
- | command_line_args | string | Command line arguments passed to the module |

## Module metadata object
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-objects-module-metadata-7a35d022a1.md`
- | uid | string | Cluster unique ID of module |
- | bigstore_version_2_support | boolean (default: false) | Whether the module supports bigstore_version_2 capability, bypassing capability validation (optional) |
- | capabilities | array of strings | List of capabilities supported by this module |
- | capability_name | string | Short description of module functionality |
- | command_line_args | string | Command-line arguments passed to the module |

## CRDB coordinator object
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-objects-services-configuration-crdb-c-0a3d9c7f96.md`
- | operating_mode | 'disabled'<br />'enabled' | Enable/disable the CRDB coordinator process |

## CRDB worker object
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-objects-services-configuration-crdb-w-dd0fc9fab7.md`
- | operating_mode | 'disabled'<br />'enabled' | Enable/disable the CRDB worker processes |

## Services configuration object
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-objects-services-configuration-fdaf9c9d40.md`
- | alert_mgr | [alert_mgr]() object | Whether to enable/disable the alert manager processes |
- | call_home_agent | [call_home_agent]() object | Whether to enable/disable the call_home_agent process, which sends daily usage statistics to Redis |
- | cm_server | [cm_server]() object | Whether to enable/disable the CM server |
- | crdb_coordinator | [crdb_coordinator]() object | Whether to enable/disable the CRDB coordinator process |
- | crdb_worker | [crdb_worker]() object | Whether to enable/disable the CRDB worker processes |

## Node metrics
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-objects-statistics-node-metrics-fcd6fd7ba1.md`
- The v1 statistics REST API endpoints are deprecated as of Redis Software version 7.22. Use the [metrics stream engine for monitoring v2]() instead for real-time monitoring and metrics collection.
- | available_flash | float | Available flash on the node (bytes) |
- | available_memory | float | Available RAM on the node (bytes) |
- | avg_latency | float | Average latency of requests handled by endpoints on the node (micro-sec); returned only when there is traffic |
- | bigstore_free | float | Free space of backend flash (used by flash DB's BigRedis) (bytes); returned only when BigRedis is enabled |

## Shard metrics
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-objects-statistics-shard-metrics-99f259d197.md`
- The v1 statistics REST API endpoints are deprecated as of Redis Software version 7.22. Use the [metrics stream engine for monitoring v2]() instead for real-time monitoring and metrics collection.
- | aof_rewrite_inprog | float | The number of simultaneous AOF rewrites that are in progress |
- | avg_ttl | float | Estimated average time to live of a random key (msec) |
- | big_del_flash | float | Rate of key deletes for keys on flash (BigRedis) (key access/sec). Only returned when BigRedis is enabled. |
- | big_del_ram | float | Rate of key deletes for keys in RAM (BigRedis) (key access/sec); this includes write misses (new keys created). Only returned when BigRedis is enabled. |

## Permissions
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-permissions-401370346e.md`
- Some Redis Software [REST API requests]() may require the user to have specific permissions.
- Administrators can assign a predefined role to a user with the [Cluster Manager UI]() or a [<nobr>`PUT /v1/users/{uid}`</nobr> API request]() to grant necessary permissions to them.
- Each user in the cluster has an assigned cluster management role, which defines the permissions granted to the user.
- | <a name="admin-role"></a>admin | [add_cluster_module](#add_cluster_module), [cancel_cluster_action](#cancel_cluster_action), [cancel_node_action](#cancel_node_action), [config_ldap](#config_ldap), [config_ocsp](#config_ocsp), [config_sso](#config_sso), [create_bdb](#create_bdb), [create_crdb](#create_crdb), [create_ldap_mapping](#create_ldap_mapping), [create_new_user](#create_new_user), [create_redis_acl](#create_redis_acl), [create_role](#create_role), [delete_bdb](#delete_bdb), [delete_cluster_module](#delete_cluster_module), [delete_crdb](#delete_crdb), [delete_ldap_mapping](#delete_ldap_mapping), [delete_redis_acl](#delete_redis_acl), [delete_role](#delete_role), [delete_user](#delete_user), [edit_bdb_module](#edit_bdb_module), [failover_shard](#failover_shard), [flush_crdb](#flush_crdb), [install_new_license](#install_new_license), [manage_cluster_modules](#manage_cluster_modules), [migrate_shard](#migrate_shard), [purge_instance](#purge_instance), [reset_bdb_current_backup_status](#reset_bdb_current_backup_status), [reset_bdb_current_export_status](#reset_bdb_current_export_status), [reset_bdb_current_import_status](#reset_bdb_current_import_status), [start_bdb_export](#start_bdb_export), [start_bdb_import](#start_bdb_import), [start_bdb_recovery](#start_bdb_recovery), [start_cluster_action](#start_cluster_action), [start_node_action](#start_node_action), [test_ocsp_status](#test_ocsp_status), [update_bdb](#update_bdb), [update_bdb_alerts](#update_bdb_alerts), [update_bdb_with_action](#update_bdb_with_action), [update_cluster](#update_cluster), [update_crdb](#update_crdb), [update_ldap_mapping](#update_ldap_mapping), [update_node](#update_node), [update_proxy](#update_proxy), [update_redis_acl](#update_redis_acl), [update_role](#update_role), [update_user](#update_user), [view_all_bdb_stats](#view_all_bdb_stats), [view_all_bdbs_alerts](#view_all_bdbs_alerts), [view_all_bdbs_info](#view_all_bdbs_info), [view_all_ldap_mappings_info](#view_all_ldap_mappings_info), [view_all_metrics](#view_all_metrics), [view_all_nodes_alerts](#view_all_nodes_alerts), [view_all_nodes_checks](#view_all_nodes_checks), [view_all_nodes_info](#view_all_nodes_info), [view_all_nodes_stats](#view_all_nodes_stats), [view_all_proxies_info](#view_all_proxies_info), [view_all_redis_acls_info](#view_all_redis_acls_info), [view_all_roles_info](#view_all_roles_info), [view_all_shard_stats](#view_all_shard_stats), [view_all_users_info](#view_all_users_info), [view_bdb_alerts](#view_bdb_alerts), [view_bdb_info](#view_bdb_info), [view_bdb_recovery_plan](#view_bdb_recovery_plan), [view_bdb_stats](#view_bdb_stats), [view_cluster_alerts](#view_cluster_alerts), [view_cluster_info](#view_cluster_info), [view_cluster_keys](#view_cluster_keys), [view_cluster_modules](#view_cluster_modules), [view_cluster_stats](#view_cluster_stats), [view_crdb](#view_crdb), [view_crdb_list](#view_crdb_list), [view_crdb_task](#view_crdb_task), [view_crdb_task_list](#view_crdb_task_list), [view_debugging_info](#view_debugging_info), [view_endpoint_stats](#view_endpoint_stats), [view_ldap_config](#view_ldap_config), [view_ldap_mapping_info](#view_ldap_mapping_info), [view_license](#view_license), [view_logged_events](#view_logged_events), [view_node_alerts](#view_node_alerts), [view_node_check](#view_node_check), [view_node_info](#view_node_info), [view_node_stats](#view_node_stats), [view_ocsp_config](#view_ocsp_config), [view_ocsp_status](#view_ocsp_status), [view_proxy_info](#view_proxy_info), [view_redis_acl_info](#view_redis_acl_info), [view_redis_pass](#view_redis_pass), [view_role_info](#view_role_info), [view_shard_stats](#view_shard_stats), [view_sso](#view_sso), [view_status_of_all_node_actions](#view_status_of_all_node_actions), [view_status_of_cluster_action](#view_status_of_cluster_action), [view_status_of_node_action](#view_status_of_node_action), [view_user_info](#view_user_info) |
- | <a name="cluster-member-role"></a>cluster_member | [create_bdb](#create_bdb), [create_crdb](#create_crdb), [delete_bdb](#delete_bdb), [delete_crdb](#delete_crdb), [edit_bdb_module](#edit_bdb_module), [failover_shard](#failover_shard), [flush_crdb](#flush_crdb), [migrate_shard](#migrate_shard), [purge_instance](#purge_instance), [reset_bdb_current_backup_status](#reset_bdb_current_backup_status), [reset_bdb_current_export_status](#reset_bdb_current_export_status), [reset_bdb_current_import_status](#reset_bdb_current_import_status), [start_bdb_export](#start_bdb_export), [start_bdb_import](#start_bdb_import), [start_bdb_recovery](#start_bdb_recovery), [update_bdb](#update_bdb), [update_bdb_alerts](#update_bdb_alerts), [update_bdb_with_action](#update_bdb_with_action), [update_crdb](#update_crdb), [view_all_bdb_stats](#view_all_bdb_stats), [view_all_bdbs_alerts](#view_all_bdbs_alerts), [view_all_bdbs_info](#view_all_bdbs_info), [view_all_metrics](#view_all_metrics), [view_all_nodes_alerts](#view_all_nodes_alerts), [view_all_nodes_checks](#view_all_nodes_checks), [view_all_nodes_info](#view_all_nodes_info), [view_all_nodes_stats](#view_all_nodes_stats), [view_all_proxies_info](#view_all_proxies_info), [view_all_redis_acls_info](#view_all_redis_acls_info), [view_all_roles_info](#view_all_roles_info), [view_all_shard_stats](#view_all_shard_stats), [view_bdb_alerts](#view_bdb_alerts), [view_bdb_info](#view_bdb_info), [view_bdb_recovery_plan](#view_bdb_recovery_plan), [view_bdb_stats](#view_bdb_stats), [view_cluster_alerts](#view_cluster_alerts), [view_cluster_info](#view_cluster_info), [view_cluster_keys](#view_cluster_keys), [view_cluster_modules](#view_cluster_modules), [view_cluster_stats](#view_cluster_stats), [view_crdb](#view_crdb), [view_crdb_list](#view_crdb_list), [view_crdb_task](#view_crdb_task), [view_crdb_task_list](#view_crdb_task_list), [view_debugging_info](#view_debugging_info), [view_endpoint_stats](#view_endpoint_stats), [view_license](#view_license), [view_logged_events](#view_logged_events), [view_node_alerts](#view_node_alerts), [view_node_check](#view_node_check), [view_node_info](#view_node_info), [view_node_stats](#view_node_stats), [view_proxy_info](#view_proxy_info), [view_redis_acl_info](#view_redis_acl_info), [view_redis_pass](#view_redis_pass), [view_role_info](#view_role_info), [view_shard_stats](#view_shard_stats), [view_sso](#view_sso), [view_status_of_all_node_actions](#view_status_of_all_node_actions), [view_status_of_cluster_action](#view_status_of_cluster_action), [view_status_of_node_action](#view_status_of_node_action) |

## Database requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-bdbs-9603f0a5d1.md`
- | [GET](#get-all-bdbs) | `/v1/bdbs` | Get all databases |
- | [GET](#get-bdbs) | `/v1/bdbs/{uid}` | Get a single database |
- | [PUT](#put-bdbs) | `/v1/bdbs/{uid}` | Update database configuration |
- | [PUT](#put-bdbs-action) | `/v1/bdbs/{uid}/{action}` | Update database configuration and perform additional action |
- | [POST](#post-bdbs-v1) | `/v1/bdbs` | Create a new database |

## Import database action requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-bdbs-actions-import-9657b6cbf0.md`
- | [POST](#post-bdbs-actions-import) | `/v1/bdbs/{uid}/actions/import` | Initiate manual dataset import |
- | [start_bdb_import]() | admin<br />cluster_member<br />db_member |
- | Host | cnm.cluster.fqdn | Domain name |
- | Accept | application/json | Accepted media type |
- | Content-Length | 0 | Length of the request body in octets |

## Recover database requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-bdbs-actions-recover-0f24c5b2a0.md`
- | [GET](#get-bdbs-actions-recover) | `/v1/bdbs/{uid}/actions/recover` | Get database recovery plan  |
- | [POST](#post-bdbs-actions-recover) | `/v1/bdbs/{uid}/actions/recover` | Recover database  |
- Fetches the recovery plan for a database. The recovery plan provides information about the recovery status, such as whether recovery is possible, and details on available files to use for recovery.
- | [view_bdb_recovery_plan]() | admin<br />cluster_member<br />cluster_viewer<br />db_member<br />db_viewer |
- | uid | integer | The unique ID of the database. |

## Revamp database requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-bdbs-actions-revamp-20d0a46519.md`
- | [PUT](#put-bdbs-actions-revamp) | `/v1/bdbs/{uid}/actions/revamp` | Update database configuration and optimize shard placement |
- Updates the topology-related configurations of an active database and optimizes the shard placement for the new configuration.
- | [update_bdb_with_action]() | admin<br />cluster_member<br />db_member |
- You can include the following parameters in the request JSON body to update their values:
- | avoid_nodes | array of strings | Cluster node UIDs to avoid when placing the database's shards and binding its endpoints. |

## Database CRDT sources alerts requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-bdbs-crdt-sources-alerts-9e28a1e9ea.md`
- | [GET](#get-all-bdbs-crdt-sources-alerts) | `/v1/bdbs/crdt_sources/alerts` | Get all CRDT sources alert states for all CRDB databases |
- | [GET](#get-bdbs-crdt-sources-alerts) | `/v1/bdbs/crdt_sources/alerts/{uid}` | Get all CRDT sources alert states for a database |
- | [GET](#get-bdbs-crdt-source-all-alerts) | `/v1/bdbs/crdt_sources/alerts/{uid}/{crdt_src_id}` | Get all alert states for a CRDT source |
- | [GET](#get-bdbs-crdt-source-alert) | `/v1/bdbs/crdt_sources/alerts/{uid}/{crdt_src_id}/{alert}` | Get a database alert state |
- Get all alert states for all CRDT sources of all CRDBs.

## CRDB peer stats requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-bdbs-peer-stats-dd5e65590d.md`
- | [GET](#get-all-bdbs-peer_stats) | `/v1/bdbs/{bdb_uid}/peer_stats` | Get stats for all CRDB peer instances |
- | [GET](#get-bdbs-peer_stats) | `/v1/bdbs/{bdb_uid}/peer_stats/{uid}` | Get stats for a specific CRDB peer instance |
- Get statistics for all peer instances of a local CRDB instance.
- | [view_bdb_stats]() | admin<br />cluster_member<br />cluster_viewer<br />db_member<br />db_viewer<br />user_manager |
- | Host | cnm.cluster.fqdn | Domain name |

## Syncer state requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-bdbs-syncer-state-bc3b6f2798.md`
- | [GET](#get-syncer-state) | `/v1/bdbs/{uid}/syncer_state` | Get a CRDB's syncer state |
- This endpoint is deprecated as of Redis Software version 7.2.4 and will be removed in a future release. Use [`/v1/bdbs/<uid>/syncer_state/crdt`]() instead.
- | [view_bdb_info]() |  admin<br />cluster_member<br />cluster_viewer<br />db_member<br />db_viewer<br />user_manager |
- | Host | The domain name or IP of the cluster. |
- | uid | integer | The unique ID of the database requested. |

## CRDT syncer state requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-bdbs-syncer-state-crdt-ac4f28fc66.md`
- | [GET](#get-syncer-state) | `/v1/bdbs/{uid}/syncer_state/crdt` |  Get a CRDB's syncer state |
- | [view_bdb_info]() |  admin<br />cluster_member<br />cluster_viewer<br />db_member<br />db_viewer<br />user_manager|
- | Host | The domain name or IP of the cluster. |
- | uid | integer | The unique ID of the database requested. |
- Returns a JSON object that represents the syncer state.

## Replica syncer state requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-bdbs-syncer-state-replica-254b40a117.md`
- | [GET](#get-syncer-state) | `/v1/bdbs/{uid}/syncer_state/replica` | Get a CRDB replica's syncer state |
- Get a CRDB replica's syncer state as JSON.
- | [view_bdb_info]() |  admin<br />cluster_member<br />cluster_viewer<br />db_member<br />db_viewer<br />user_manager |
- | Host | The domain name or IP of the cluster. |
- | uid | integer | The unique ID of the database requested. |

## Database upgrade requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-bdbs-upgrade-83d961fce6.md`
- | [POST](#post-bdbs-upgrade) | `/v1/bdbs/{uid}/upgrade` | Upgrade database |
- | Host | cnm.cluster.fqdn | Domain name |
- | Accept | application/json | Accepted media type |
- | force_restart | boolean | Restart shards even if no version change (default: false) |
- | keep_redis_version | boolean | Keep current Redis version (default: false). Deprecated as of Redis Software v7.8.2. To upgrade modules without upgrading the Redis database version, set `redis_version` to the current Redis database version instead. |

## CRDB tasks requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-crdb-tasks-cbc7bbbb03.md`
- | [GET](#get-all-crdb_tasks) | `/v1/crdb_tasks` | Get all running tasks |
- | [GET](#get-crdb_task) | `/v1/crdb_tasks/{task_id}` | Get the status of an executed task |
- | [POST](#post-crdb_task-cancel) | `/v1/crdb_tasks/{task_id}/actions/cancel` | Cancel a running or queued task |
- Returns a JSON array of [CRDB task objects]().
- | [200 OK](https://www.rfc-editor.org/rfc/rfc9110.html#name-200-ok) | A list of running tasks. |

## CRDBs requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-crdbs-d697ef1022.md`
- | [GET](#get-all-crdbs) | `/v1/crdbs` | Get all Active-Active databases |
- | [GET](#get-crdb) | `/v1/crdbs/{crdb_guid}` | Get a specific Active-Active database |
- | [PATCH](#patch-crdbs) | `/v1/crdbs/{crdb_guid}` | Update an Active-Active database |
- | [POST](#post-crdb) | `/v1/crdbs` | Create a new Active-Active database |
- | [DELETE](#delete-crdb) | `/v1/crdbs/{crdb_guid}` | Delete an Active-Active database |

## CRDB flush requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-crdbs-flush-dfef6d9b47.md`
- | [PUT](#put-crdbs-flush) | `/v1/crdbs/{crdb_guid}/flush` | Flush an Active-Active database |
- | X-Task-ID | string | Specified task ID |
- | X-Result-TTL | integer | Time (in seconds) to keep task result |
- | crdb_guid | string | Globally unique Active-Active database ID (GUID) |
- | async_flush | boolean | Perform asynchronous flush operation (optional) |

## CRDB health report requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-crdbs-health-report-a5d649d7c8.md`
- | [GET](#get-crdbs-health) | `/v1/crdbs/{crdb_guid}/health_report` | Get a health report for an Active-Active database |
- Get a health report for an Active-Active database.
- | crdb_guid | string | Globally unique Active-Active database ID (GUID) |
- | instance_id | integer | The request retrieves information from the specified Active-Active database instance. If this instance doesnât exist, the request retrieves information from all instances. (optional) |
- Returns a JSON array of [CRDB health report objects]().

## CRDB purge requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-crdbs-purge-0367ec0e16.md`
- | [PUT](#put-crdbs-purge) | `/v1/crdbs/{crdb_guid}/purge` | Purge data from an instance that was forcibly removed from the Active-Active database |
- Purge the data from an instance that was removed from the
- When you force the removal of an instance from an Active-Active
- database, the removed instance keeps the data and configuration
- according to the last successful synchronization.

## CRDB updates requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-crdbs-updates-da552913ce.md`
- | [POST](#post-crdbs-updates) | `/v1/crdbs/{crdb_guid}/updates` | Modify Active-Active confgurarion |
- This is a very powerful API request and can cause damage if used incorrectly.
- In order to add or remove instances, you must use this API. For simple configuration updates, it is recommended to use PATCH on /crdbs/{crdb_guid} instead.
- Updating default_db_config affects both existing and new instances that may be added.
- When you update db_config, it changes the configuration of the database that you specify. This field overrides corresponding fields (if any) in default_db_config.

## Migrations requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-migrations-6b39a71ee2.md`
- | [GET](#get-migrations) | `/v1/migrations/<uid>` | Get database migration status |
- Gets the migration status of a database in the cluster when using Replica Of.
- | [view_bdb_info]() | admin<br />cluster_member<br />cluster_viewer<br />db_member<br />db_viewer<br />user_manager |
- | Host | cnm.cluster.fqdn | Domain name |
- | Accept | application/json | Accepted media type |

## Node actions requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-nodes-actions-d5fdc89d60.md`
- | [GET](#get-all-nodes-actions) | `/v1/nodes/actions` | Get status of all actions on all nodes|
- | [GET](#get-node-actions) | `/v1/nodes/{node_uid}/actions` | Get status of all actions on a specific node |
- | [GET](#get-node-action) | `/v1/nodes/{node_uid}/actions/{action}` | Get status of an action on a specific node |
- | [POST](#post-node-action) | `/v1/nodes/{node_uid}/actions/{action}` | Initiate node action |
- | [DELETE](#delete-node-action) | `/v1/nodes/{node_uid}/actions/{action}` | Cancel action or remove action status |

## Latest node stats requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-nodes-stats-last-ad8f76c3ce.md`
- | [GET](#get-all-nodes-stats-last) | `/v1/nodes/stats/last` | Get latest stats for all nodes |
- | [GET](#get-node-stats-last) | `/v1/nodes/stats/last/{uid}` | Get latest stats for a single node |
- | Host | cnm.cluster.fqdn | Domain name |
- | Accept | application/json | Accepted media type |
- | interval | string | Time interval for which we want stats: 1sec/10sec/5min/15min/1hour/12hour/1week. Default: 1sec. (optional) |

## Shard requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-shards-f33708c233.md`
- | [GET](#get-all-shards) | `/v1/shards` | Get all shards |
- | [GET](#get-shard) | `/v1/shards/{uid}` | Get a specific shard |
- Get information about all shards in the cluster.
- GET /v1/shards?extra_info_keys=used_memory_rss&extra_info_keys=connected_clients
- | Host | cnm.cluster.fqdn | Domain name |

## Shards stats requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-shards-stats-0d391a4e68.md`
- The v1 statistics REST API endpoints are deprecated as of Redis Software version 7.22. Use the [metrics stream engine for monitoring v2]() instead for real-time monitoring and metrics collection.
- | [GET](#get-all-shards-stats) | `/v1/shards/stats` | Get stats for all shards |
- | [GET](#get-shard-stats) | `/v1/shards/stats/{uid}` | Get stats for a specific shard |
- GET /v1/shards/stats?interval=1hour&stime=2014-08-28T10:00:00Z
- | Host | cnm.cluster.fqdn | Domain name |

## Latest shards stats requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-shards-stats-last-db3a125b84.md`
- | [GET](#get-all-shards-stats-last) | `/v1/shards/stats/last` | Get most recent stats for all shards |
- | [GET](#get-shard-stats-last) | `/v1/shards/stats/last/{uid}` | Get most recent stats for a specific shard |
- Get most recent statistics for all shards.
- GET /v1/shards/stats/last?interval=1sec&stime=015-05-27T08:27:35Z
- | Host | cnm.cluster.fqdn | Domain name |

## Usage report requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-usage-report-44a001a996.md`
- | [GET](#get-usage-report) | `/v1/usage_report` | Get the cluster's database usage report |
- Gets the database usage report from the cluster as Newline Delimited JSON (NDJSON). The response is returned as a gzip file if the request includes the `Accept-Encoding: gzip` header; otherwise, it returns an NDJSON file directly. The final line in the file is the response's MD5 hash.
- | Host | cnm.cluster.fqdn | Domain name |
- | Accept | application/json | Accepted media type |
- | Accept-Encoding | gzip | (Optional) Request gzip compression for the response |

## Redis Enterprise Pack 5.0 Release Notes (November 2017)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-legacy-release-notes-redis-enterprise-5-2ddf9bfd5f.md`
- Geo-Distributed Active-Active Conflict-free Replicated Databases (CRDB),
- LDAP integration, Redis Module integration, and support for theÂ Redis
- If you are upgrading from a previous version, make sure to review the
- upgrade instructions before beginning the upgrade process.
- You can upgrade to RS 5.0 from RS 4.4.2 and above. If you have a version

## Redis Enterprise Pack 4.5 Release Notes (May 2017)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-legacy-release-notes-redis-pack-4-5-0-may-2-1d23413b16.md`
- upgrade instructions before beginning the upgrade process.
- You can upgrade to this version from any 4.4 version. If you have a
- version older than 4.4 you must first upgrade to 4.4 or higher, and only
- The Discovery Service provides an IP-based connection management service
- used when connecting to Redis Enterprise Pack databases. When used in

## Redis Enterprise Software 5.0.2 (2018 March)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-legacy-release-notes-release-notes-redis-en-8056335cbc.md`
- functional and performance updates for CRDB, changes to module
- If you are upgrading from a previous version, make sure to review the
- upgrade instructions before beginning the upgrade process.
- You can upgrade to RS 5.0.2 from RS 4.4.2 and above. If you have a
- version older than 4.4.2, you must first upgrade to at least 5.0.

## RLEC 4.0.0-49 Release Notes (June 18, 2015)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-legacy-release-notes-rlec-4-0-june-2015-c036b86dc6.md`
- before running through the upgrade process.
- In addition, when running the install.sh script to upgrade the software,
- you might be prompted to approve changes to a configuration file named
- ccs-redis.conf. It is crucial that you choose Yes when asked whether to
- keeps synchronizing data from another Redis database.

## RLEC 4.2.1-30 Release Notes (October 18, 2015)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-legacy-release-notes-rlec-4-2-october-2015-e46274286b.md`
- before running through the upgrade process.
- which enables monitoring through rsyslog.
- enables the administrator to configure RLEC to run with different
- performance profiles that are optimized for either cloud or
- non-cloud environments. For additional details, refer to the

## Redis Enterprise Software 5.2.2 (August 2018)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-legacy-release-notes-rs-5-2-2-august-2018-b8b04bbfb0.md`
- RS 5.2.2 is a minor version that includes important fixes and minor enhancements to Redis Enterprise 5.2.
- If you are upgrading from a previous version, make sure to review the upgrade instructions before beginning the upgrade process. You can upgrade to RS 5.2.2 from RS 4.5 and above. If you have a version older than 4.5, you should first upgrade to version 5.0 (or at least 4.5).
- RediSearch Enterprise, which is installed with Redis Enterprise Software by default, has been updated to a newer version (1.4.0)

## Redis Enterprise Software Release Notes 5.2 (June 2018)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-legacy-release-notes-rs-5-2-june-2018-0331f5b7f8.md`
- include new data types and casual consistency for active-active (also
- known as the Redis CRDT or CRDB Conflict-free Replicated Database), as
- If you are upgrading from a previous version, make sure to review the
- upgrade instructions before beginning the upgrade process. You can
- upgrade to RS 5.2 from RS 4.5 and above. If you have a version older

## Redis Enterprise Software Release Notes 5.3 BETA (July 2018)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-legacy-release-notes-rs-5-3-beta-july-2018-de4fe158d5.md`
- RS 5.3 is a preview version that includes all the capabilities of Redis Enterprise 5.2, plus support for Redis 5.0 with the new data type, which is called Streams.
- RS 5.3 adds support for Redis 5.0 and is based on its latest Release Candidate (RC3). Redis 5.0 exposes the new Redis Streams data type, which provides a super fast in-memory abstraction of an append-only log. For more information and usage examples, check out the Streams documentation here.
- As a preview version, we do not support upgrading to RS 5.3 from any previous version or upgrading from RS 5.3 to any future version. In addition, we do not commit to fixing bugs in RS 5.3.
- The RS 5.3 preview version does not support Enterprise Modules (- RediSearch, ReJSON and ReBloom), Auto Tiering or active-active Redis (CRDB).

## Redis Enterprise Software Release Notes 5.4.10 (December 2019)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-legacy-release-notes-rs-5-4-10-december-201-cf1e95216f.md`
- [Redis Enterprise Software (RS) 5.4.10](https://redislabs.com/redis-enterprise/software/downloads/#downloads) is now available.
- This release includes an improved synchronization mechanism for Active-Active Redis and Replica-of, several enhancements, and bug fixes.
- Follow these [instructions]() for upgrading to RS 5.4.10 from RS 5.0 and above.
- RS 5.4.10 incorporates the improved [Redis synchronization mechanism](#syncer-process) ([PSYNC2]()) for Active-Active Redis (CRDB) and Replica-of.
- As a result, failure scenarios in any A-A replica (and the source database of Replica-of), require only partial synchronization between the cross-region replicas instead of full synchronization that can be costly in time and bandwidth.

## Redis Enterprise Software Release Notes 5.4.14 (February 2020)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-legacy-release-notes-rs-5-4-14-february-202-f761dae442.md`
- This release bundles OSS Redis 5.0.7 and includes new Redis Modules versions, several enhancements, and bug fixes.
- Follow these [instructions]() for upgrading to RS 5.4.14 from RS 5.0.2 and above.
- Now you can get your license details from the admin console (settings > general) or from the REST API command:
- 1. To upgrade the version of RediSearch to 10017 and replace the module arguments:
- 1. To upgrade RedisBloom to version 10100 and remove the current module arguments:

## Redis Enterprise Software Release Notes 5.4.2 (April 2019)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-legacy-release-notes-rs-5-4-2-april-2019-a1cc655fe2.md`
- This release improves the compatibility of Active-Active Redis (CRDB) with open source Redis, adds SFTP and Mount Points as backup destinations, email alerting and a number of other enhancements and bug fixes.
- Follow these [instructions]() for upgrading to RS 5.4.2 from RS 5.0 and above.
- If you have a version older than 5.0, you must first upgrade to version 5.2 (or at least 5.0).
- RS 5.4.2 introduces new Active-Active Redis (CRDB) capabilities which improve its compatibility with open source Redis.
- This simplifies the progress of migration from open source Redis to Active-Active Redis:

## Redis Enterprise Software Release Notes 5.4.4 (June 2019)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-legacy-release-notes-rs-5-4-4-june-2019-427a5d6c9e.md`
- This release enables the functionality of Active-Active Redis (CRDB) combined with RoF (Auto Tiering),
- supports the creation of Redis databases with multiple modules,
- and adds other enhancements and bug fixes.
- Follow these [instructions for upgrading]() to RS 5.4.4 from RS 5.0 and above.
- If you have a version older than 5.0, you must first upgrade to version 5.2 (or at least 5.0).

## Redis Enterprise Software Release Notes 5.4.6 (July 2019)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-legacy-release-notes-rs-5-4-6-july-2019-a005c6d6a3.md`
- [Redis Enterprise Software (RS) 5.4.6](https://redislabs.com/redis-enterprise/software/downloads/#downloads) is now available.
- This release includes the latest version of Redis 5 (5.0.5), bundles the GA release of the new RedisTimeSeries module,
- and adds other enhancements and bug fixes.
- Follow these [instructions]() for upgrading to RS 5.4.6 from RS 5.0 and above.
- If you have a version older than 5.0, you must first upgrade to version 5.2 (or at least 5.0).

## Redis Enterprise Software Release Notes 5.4 (December 2018)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-legacy-release-notes-rs-5-4-december-2018-1fbb36046d.md`
- You can upgrade to RS 5.4 from RS 5.0 and above according to the [upgrade instructions](). If you have a version older than 5.0, you should first upgrade to version 5.2 (or at least 5.0).
- RS 5.4 adds support for Redis 5.0 (GA version- 5.0.2), which introduces the new [Redis Streams]() data type. Redis Streams models a log data structure in-memory and implements additional powerful operations, such as Consumer Groups.
- Starting from RS 5.4, Redis Graph, a new Redis Enterprise Module that introduces the world's fastest graph database, is an integral part of Redis Enterprise package.
- RedisGraph is the first queryable [Property Graph](https://github.com/opencypher/openCypher/blob/master/docs/property-graph-model.adoc) database to use [sparse matrices](https://en.wikipedia.org/wiki/Sparse_matrix) to represent the [adjacency matrix](https://en.wikipedia.org/wiki/Adjacency_matrix) in graphs and [linear algebra](http://faculty.cse.tamu.edu/davis/GraphBLAS.html) to query the graph.
- In RS 5.4 you can [create Active-Active databases (CRDBs)]() in a non-clustering mode. As a result, the following creation options are allowed:

## Redis Enterprise Software Release Notes 5.6.0 (April 2020)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-legacy-release-notes-rs-5-6-0-april-2020-d865a2a06b.md`
- EOL for Redis Modules can be found [here](#modules-endoflife-schedule).
- Redis Enterprise Software installer adds the ability to specify custom installation paths and a custom installation user, group, or both on RHEL versions 6 and 7.
- When you run the installer you can specify the installation, the configuration and the var as well as the user and the group:
- For more information, check out the [Redis Enterprise Software installer documentation](https://docs.redis.com/latest/rs/installing-upgrading/).
- RS 5.6.0 adds the support of [HyperLogLog](http://www.antirez.com/news/75) data structure for [Active-Active Redis]() databases.

## Redis Enterprise Software Release Notes 6.0.12 (January 2021)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-rs-6-0-12-january-2021-41ed0faa5a.md`
- This version includes the following new features and improvements:
- And other functional and stability improvements.
- The syncer process now supports running in a [distributed mode](). This option can improve the latency for Active-Active databases with a very high throughput profile. You can configure a replicated database to use distributed synchronization so that any available proxy endpoint can manage synchronization traffic.
- Redis Software users can now use the REST API to [disable the following services]():
- Once disabled, services are not monitored and controlled by the supervisord.

## Redis Enterprise Software Release Notes 6.0.20 (April 2021)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-rs-6-0-20-april-2021-94fa5b78cb.md`
- is now available! This version includes the following new features and
- authorization into RS role-based access controls (RBAC). You can now use
- LDAP to authorize access to the admin console and to authorize database
- mechanism, adding the ability to authenticate client connections using a
- Redis database using the Active-Passive (Replica Of) mechanism.

## Redis Enterprise Software Release Notes 6.0.8 (September 2020)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-rs-6-0-8-september-2020-c77c27a121.md`
- This version includes the new RediSearch 2.0 module, open source Redis 6.0.5, changes the rladmin tool for upgrading modules, and includes bug fixes.
- Follow [these instructions]() for upgrading to RS 6.0.8 from RS 5.4.0 and above.
- For Active-Active deployments, this release requires that you [upgrade the CRDB featureset version]().
- End of Life (EOL) for Redis Enterprise Software 6.0 and previous RS versions, can be found [here]().
- EOL for Redis Modules can be found [here]().

## Redis Enterprise Software Release Notes 6.0 (May 2020)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-rs-6-0-may-2020-637fb54261.md`
- This new version bundles open-source Redis 6, implements enhanced Access Control List (ACL) capabilities using Role-Based Access Control (RBAC) for database access, and adds the support of Redis Streams on Active-Active databases.
- Follow [these instructions]() for upgrading to RS 6.0 from RS 5.4.0 and above.
- For Active-Active deployments, this release requires that you [upgrade the CRDB featureset version]().
- End of Life (EOL) for Redis Enterprise Software 6.0 and previous RS versions, can be found [here]().
- EOL for Redis Modules can be found [here]().

## Redis Enterprise Software Release Notes 6.2.10 (February 2022)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-rs-6-2-10-february-2022-3a4cb2e3f5.md`
- [Redis Enterprise Software version 6.2.10](https://redislabs.com/redis-enterprise-software/download-center/software/) is now available!
- The following table shows the MD5 checksums for the available packages.
- | Ubuntu 16 | `531cea69a58fbc1125bc5f76ba01da7f` |
- | Ubuntu 18 | `ec9ac6e0111dc85605d3b98e83f50150` |
- | RedHat Enterprise Linux (RHEL) 7<br/>Oracle Enterprise Linux (OL) 7 | `2f7572caab9600417ef8b4ee474d6768` |

## Redis Enterprise Software release notes 6.2.12 (August 2022)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-rs-6-2-12-1a7acd619c.md`
- [Redis Enterprise Software version 6.2.12](https://redislabs.com/redis-enterprise-software/download-center/software/) is now available!
- This version of Redis Enterprise Software offers:
- The following table shows the MD5 checksums for the available packages.
- | Ubuntu 16 | `e702c906f200940e06ef031e6b8006d9` |
- | Ubuntu 18 | `7ea70067e8828b59336380df087fe03d` |

## Redis Enterprise Software release notes 6.2.18
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-rs-6-2-18-releases-4a857d90b7.md`
- [Redis Enterprise Software version 6.2.18](https://redislabs.com/redis-enterprise-software/download-center/software/) is now available!
- This version of Redis Enterprise Software offers:
- For more detailed release notes, select a build version from the following table:
- The snapshot option for [data persistence on Active-Active databases](manage/#data-persistence) will be deprecated in a future version of Redis Enterprise Software. If you have an Active-Active database using snapshot persistence, switch to AOF persistence. Use `crdb-cli` to do so:
- TLS 1.0 and TLS 1.1 connections are considered deprecated in favor of TLS 1.2 or later.

## Redis Enterprise Software release notes 6.2.18-43 (September 2022)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-rs-6-2-18-releases-rs-6-2-18-43-a346dd121e.md`
- [Redis Enterprise Software version 6.2.18](https://redislabs.com/redis-enterprise-software/download-center/software/) is now available!
- This version of Redis Enterprise Software offers:
- The following table shows the MD5 checksums for the available packages:
- | Package | MD5 checksum (6.2.18-43 September release) |
- | Ubuntu 16 | `055973eb7009073b0c199ec1dfd81018` |

## Redis Enterprise Software release notes 6.2.18-49 (October 2022)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-rs-6-2-18-releases-rs-6-2-18-49-531d93300f.md`
- This is a maintenance release for â[âRedis Enterprise Software version 6.2.18](https://redis.io/downloads/#software).
- The following table shows the MD5 checksums for the available packages:
- | Package | MD5 checksum (6.2.18-49 October release) |
- | Ubuntu 16 | `89029a28a2b0e3ad379559b94d00ae32` |
- | Ubuntu 18 | `830e8704c0f6902a04df9ff53cc5e41f` |

## Redis Enterprise Software release notes 6.2.18-58 (November 2022)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-rs-6-2-18-releases-rs-6-2-18-58-ad3b971a82.md`
- This is a maintenance release for â[âRedis Enterprise Software version 6.2.18](https://redis.io/downloads/#software).
- The following table shows the MD5 checksums for the available packages:
- | Package | MD5 checksum (6.2.18-58 November release) |
- | Ubuntu 16 | `38d974c47004df0808b71c2bd5a96996` |
- | Ubuntu 18 | `6a5ca7a287f1808a50d13312162aac4b` |

## Redis Enterprise Software release notes 6.2.18-65 (December 2022)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-rs-6-2-18-releases-rs-6-2-18-65-2fd7f62331.md`
- This is a maintenance release for â[âRedis Enterprise Software version 6.2.18](https://redis.io/downloads/#software).
- The following table shows the MD5 checksums for the available packages:
- | Package | MD5 checksum (6.2.18-65 December release) |
- | Ubuntu 16 | `515c7bbc97eaf1939757c8894eda9523` |
- | Ubuntu 18 | `830e8704c0f6902a04df9ff53cc5e41f` |

## Redis Enterprise Software release notes 6.2.18-70 (January 2023)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-rs-6-2-18-releases-rs-6-2-18-70-beda77c16a.md`
- This is a maintenance release for â[âRedis Enterprise Software version 6.2.18](https://redis.io/downloads/#software).
- The following table shows the MD5 checksums for the available packages:
- | Package | MD5 checksum (6.2.18-70 January release) |
- | Ubuntu 16 | `69d2d2c71232adb15cebf29308ac54da` |
- | Ubuntu 18 | `22e0637107a32ccb96a704abe9650adf` |

## Redis Enterprise Software Release Notes 6.2.4 (August 2021)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-rs-6-2-4-august-2021-9ae67cb6f6.md`
- [Redis Enterprise Software version 6.2.4](https://redislabs.com/redis-enterprise-software/download-center/software/) is now available!
- You can [upgrade to v6.2.4]() from Redis Enterprise Software v6.0 and later.
- The default behavior of the `upgrade db` command has changed.  It is now controlled by a new cluster policy (`redis_upgrade_policy`), which defines the policy for creating new databases and upgrading existing databases.  The policy supports the following values:
- This is the default value for Redis Enterprise Software.
- Setting the upgrade policy to `latest` ensures that the most recent Redis features are available to new databases and ones that are upgraded.  It also requires more frequent upgrades, as open source Redis is updated more frequently than Redis Enterprise Software.

## Redis Enterprise Software Release Notes 6.2.8 (October 2021)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-rs-6-2-8-october-2021-e58d15b855.md`
- [Redis Enterprise Software version 6.2.8](https://redislabs.com/redis-enterprise-software/download-center/software/) is now available!
- If you plan to upgrade from a pre-6.0.8 release to 6.2.8, check whether your proxy certificate includes additional comments and manually remove them.  The change was reverted in 6.2.10.
- As of 31 October 2021, Redis Enterprise Software v5.6.0 is end of life (EOF).
- To learn more, see the Redis Enterprise Software [product lifecycle](), which details the release number and the end-of-life schedule for Redis Enterprise Software.
- Redis Enterprise modules have individual release numbers [and lifecycles]().

## Redis Enterprise Software release notes 6.4.2
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-rs-6-4-2-releases-3c6067b857.md`
- â[âRedis Enterprise Software version 6.4.2](https://redis.io/downloads/#software) is now available!
- For more detailed release notes, select a build version from the following table:
- Ubuntu 16 support is considered deprecated and will be removed in a future release. Ubuntu 16.04 LTS (Xenial) has reached the end of its free initial five-year security maintenance period as of April 30, 2021.
- The RDB snapshot option for [Active-Active database persistence]() is deprecated and will be removed in a future release.
- Please plan to reconfigure any Active-Active databases to use append-only file (AOF) persistence with the following command:

## Redis Enterprise Software release notes 6.4.2-103 (October 2023)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-rs-6-4-2-releases-rs-6-4-2-103-5fd859184b.md`
- This is a maintenance release for â[âRedis Enterprise Software version 6.4.2](https://redis.io/downloads/#software).
- Redis Enterprise Software version 6.4.2-103 includes the following Redis Stack modules:
- The following table provides a snapshot of supported platforms as of this Redis Enterprise Software release. See the [supported platforms reference]() for more details about operating system compatibility.
- <span title="Check mark icon">&#x2705;</span> Supported â The platform is supported for this version of Redis Enterprise Software.
- <span title="Warning icon">&#x26A0;&#xFE0F;</span> Deprecated â The platform is still supported for this version of Redis Enterprise Software, but support will be removed in a future release.

## Redis Enterprise Software release notes 6.4.2-110 (May 2024)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-rs-6-4-2-releases-rs-6-4-2-110-dbc6c79c25.md`
- This is a maintenance release for â[âRedis Enterprise Software version 6.4.2](https://redis.io/downloads/#software).
- Redis has announced the end of life for RedisGraph. See the [announcement](https://redis.io/blog/redisgraph-eol/) for details.
- Redis Enterprise Software version 6.4.2-110 includes the following Redis Stack modules:
- The following table provides a snapshot of supported platforms as of this Redis Enterprise Software release. See the [supported platforms reference]() for more details about operating system compatibility.
- <span title="Check mark icon">&#x2705;</span> Supported â The platform is supported for this version of Redis Enterprise Software and Redis Stack modules.

## Redis Enterprise Software release notes 6.4.2-115 (Oct 2024)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-rs-6-4-2-releases-rs-6-4-2-115-396997669b.md`
- This is a maintenance release for â[âRedis Enterprise Software version 6.4.2](https://redis.io/downloads/#software).
- Redis Enterprise Software version 6.4.2-115 includes the following Redis Stack modules:
- The following table provides a snapshot of supported platforms as of this Redis Enterprise Software release. See the [supported platforms reference]() for more details about operating system compatibility.
- <span title="Check mark icon">&#x2705;</span> Supported â The platform is supported for this version of Redis Enterprise Software and Redis Stack modules.
- <span title="Warning icon" class="font-serif">:warning:</span> Deprecation warning â The platform is still supported for this version of Redis Enterprise Software, but support will be removed in a future release.

## Redis Enterprise Software release notes 6.4.2-121 (March 2025)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-rs-6-4-2-releases-rs-6-4-2-121-d215469eb6.md`
- This is a maintenance release for â[âRedis Enterprise Software version 6.4.2](https://redis.io/downloads/#software).
- Redis Enterprise Software version 6.4.2-121 includes the following Redis Stack modules:
- The following table provides a snapshot of supported platforms as of this Redis Software release. See the [supported platforms reference]() for more details about operating system compatibility.
- <span title="Check mark icon">&#x2705;</span> Supported â The platform is supported for this version of Redis Software and Redis Stack modules.
- <span title="Warning icon" class="font-serif">:warning:</span> Deprecation warning â The platform is still supported for this version of Redis Software, but support will be removed in a future release.

## Redis Enterprise Software release notes 6.4.2-127 (June 2025)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-rs-6-4-2-releases-rs-6-4-2-127-ca1d68e607.md`
- This is a maintenance release for â[âRedis Enterprise Software version 6.4.2](https://redis.io/downloads/#software).
- Redis Enterprise Software version 6.4.2-127 includes the following Redis Stack modules:
- The following table provides a snapshot of supported platforms as of this Redis Software release. See the [supported platforms reference]() for more details about operating system compatibility.
- <span title="Check mark icon">&#x2705;</span> Supported â The platform is supported for this version of Redis Enterprise Software and Redis Stack modules.
- <span title="Warning icon" class="font-serif">:warning:</span> Deprecation warning â The platform is still supported for this version of Redis Enterprise Software, but support will be removed in a future release.

## Redis Enterprise Software release notes 6.4.2-131 (September 2025)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-rs-6-4-2-releases-rs-6-4-2-131-1e5312c0e6.md`
- This is a maintenance release for âRedis Enterprise Software version 6.4.2.
- Redis Enterprise Software version 6.4.2-131 includes the following Redis Stack modules:
- The following table provides a snapshot of supported platforms as of this Redis Software release. See the [supported platforms reference]() for more details about operating system compatibility.
- <span title="Check mark icon">&#x2705;</span> Supported â The platform is supported for this version of Redis Enterprise Software and Redis Stack modules.
- <span title="Warning icon" class="font-serif">:warning:</span> Deprecation warning â The platform is still supported for this version of Redis Enterprise Software, but support will be removed in a future release.

## Redis Enterprise Software release notes 6.4.2-30 (February 2023)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-rs-6-4-2-releases-rs-6-4-2-30-309e0da308.md`
- â[âRedis Enterprise Software version 6.4.2](https://redis.io/downloads/#software) is now available!
- The following table shows the MD5 checksums for the available packages:
- | Package | MD5 checksum (6.4.2-30 February release) |
- |---------|---------------------------------------|
- | Ubuntu 16 | b0dbecaa974ca08245dda55d53b6fe9b |

## Redis Enterprise Software release notes 6.4.2-43 (March 2023)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-rs-6-4-2-releases-rs-6-4-2-43-e3c3ce9fc6.md`
- This is a maintenance release for â[âRedis Enterprise Software version 6.4.2](https://redis.io/downloads/#software).
- The following table shows the MD5 checksums for the available packages:
- | Package | MD5 checksum (6.4.2-43 March release) |
- |---------|---------------------------------------|
- | Ubuntu 16 | bb3d3ab7590834790d2d9d9e3dcdf788 |

## Redis Enterprise Software release notes 6.4.2-61 (April 2023)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-rs-6-4-2-releases-rs-6-4-2-61-b65e06e826.md`
- This is a maintenance release for â[âRedis Enterprise Software version 6.4.2](https://redis.io/downloads/#software).
- The following table shows the MD5 checksums for the available packages:
- | Package | MD5 checksum (6.4.2-61 April release) |
- |---------|---------------------------------------|
- | Ubuntu 16 | f8f616147c9daaaeb9cd8cb1ae44157f |

## Redis Enterprise Software release notes 6.4.2-69 (May 2023)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-rs-6-4-2-releases-rs-6-4-2-69-e776d64a9f.md`
- This is a maintenance release for â[âRedis Enterprise Software version 6.4.2](https://redis.io/downloads/#software).
- The following table shows the MD5 checksums for the available packages:
- | Package | MD5 checksum (6.4.2-69 May release) |
- |---------|---------------------------------------|
- | Ubuntu 16 | 31631248672de0154ec20aee0bff9adc |

## Redis Enterprise Software release notes 6.4.2-81 (June 2023)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-rs-6-4-2-releases-rs-6-4-2-81-f154a80117.md`
- This is a maintenance release for â[âRedis Enterprise Software version 6.4.2](https://redis.io/downloads/#software).
- The following table shows the MD5 checksums for the available packages:
- | Package | MD5 checksum (6.4.2-81 June release) |
- |---------|---------------------------------------|
- | Ubuntu 16 | 31631248672de0154ec20aee0bff9adc |

## Redis Enterprise Software release notes 7.2.4
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-rs-7-2-4-releases-0bbaf3118f.md`
- â[âRedis Enterprise Software version 7.2.4](https://redis.io/downloads/#software) is now available!
- For more detailed release notes, select a build version from the following table:
- For a list of potentially breaking changes introduced in version 7.2, see:
- To prevent potential application issues due to RESP3 breaking changes, see [Client prerequisites for Redis 7.2 upgrade]().
- Fields deprecated as of Redis Enterprise v4.3.3:

## Redis Enterprise Software release notes 7.2.4-105 (February 2024)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-rs-7-2-4-releases-rs-7-2-4-105-5db33ce6c5.md`
- This is a maintenance release for â[âRedis Enterprise Software version 7.2.4](https://redis.io/downloads/#software).
- Redis Enterprise Software versions 7.2.4-105 includes the following Redis Stack modules:
- The following table provides a snapshot of supported platforms as of this Redis Enterprise Software release. See the [supported platforms reference]() for more details about operating system compatibility.
- <span title="Check mark icon">&#x2705;</span> Supported â The platform is supported for this version of Redis Enterprise Software.
- <span title="Warning icon">&#x26A0;&#xFE0F;</span> Deprecated â The platform is still supported for this version of Redis Enterprise Software, but support will be removed in a future release.

## Redis Enterprise Software release notes 7.2.4-109 (May 2024)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-rs-7-2-4-releases-rs-7-2-4-109-97fc8be04d.md`
- This is a maintenance release for â[âRedis Enterprise Software version 7.2.4](https://redis.io/downloads/#software).
- Redis Enterprise Software versions 7.2.4-109 includes the following Redis Stack modules:
- The following table provides a snapshot of supported platforms as of this Redis Enterprise Software release. See the [supported platforms reference]() for more details about operating system compatibility.
- <span title="Check mark icon">&#x2705;</span> Supported â The platform is supported for this version of Redis Enterprise Software and Redis Stack modules.
- <span title="Warning icon" class="font-serif">:warning:</span> Deprecation warning â The platform is still supported for this version of Redis Enterprise Software, but support will be removed in a future release.

## Redis Enterprise Software release notes 7.2.4-122 (March 2025)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-rs-7-2-4-releases-rs-7-2-4-122-fc6c9ce479.md`
- This is a maintenance release for â[âRedis Enterprise Software version 7.2.4](https://redis.io/downloads/#software).
- Redis Enterprise Software versions 7.2.4-122 includes the following Redis Stack modules:
- The following table provides a snapshot of supported platforms as of this Redis Software release. See the [supported platforms reference]() for more details about operating system compatibility.
- <span title="Check mark icon">&#x2705;</span> Supported â The platform is supported for this version of Redis Software and Redis Stack modules.
- <span title="Warning icon" class="font-serif">:warning:</span> Deprecation warning â The platform is still supported for this version of Redis Software, but support will be removed in a future release.

## Redis Enterprise Software release notes 7.2.4-130 (May 2025)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-rs-7-2-4-releases-rs-7-2-4-130-3d0148d3cf.md`
- This is a maintenance release for â[âRedis Enterprise Software version 7.2.4](https://redis.io/downloads/#software).
- Redis Enterprise Software versions 7.2.4-130 includes the following Redis Stack modules:
- The following table provides a snapshot of supported platforms as of this Redis Software release. See the [supported platforms reference]() for more details about operating system compatibility.
- <span title="Check mark icon">&#x2705;</span> Supported â The platform is supported for this version of Redis Enterprise Software and Redis Stack modules.
- <span title="Warning icon" class="font-serif">:warning:</span> Deprecation warning â The platform is still supported for this version of Redis Enterprise Software, but support will be removed in a future release.

## Redis Enterprise Software release notes 7.2.4-132 (June 2025)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-rs-7-2-4-releases-rs-7-2-4-132-ad19ed40f3.md`
- This is a maintenance release for ââRedis Enterprise Software version 7.2.4.
- Redis Enterprise Software versions 7.2.4-132 includes the following Redis Stack modules:
- The following table provides a snapshot of supported platforms as of this Redis Software release. See the [supported platforms reference]() for more details about operating system compatibility.
- <span title="Check mark icon">&#x2705;</span> Supported â The platform is supported for this version of Redis Enterprise Software and Redis Stack modules.
- <span title="Warning icon" class="font-serif">:warning:</span> Deprecation warning â The platform is still supported for this version of Redis Enterprise Software, but support will be removed in a future release.

## Redis Enterprise Software release notes 7.2.4-138 (September 2025)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-rs-7-2-4-releases-rs-7-2-4-138-a20389c16f.md`
- This is a maintenance release for ââRedis Enterprise Software version 7.2.4.
- Redis Enterprise Software versions 7.2.4-138 includes the following Redis Stack modules:
- The following table provides a snapshot of supported platforms as of this Redis Software release. See the [supported platforms reference]() for more details about operating system compatibility.
- <span title="Check mark icon">&#x2705;</span> Supported â The platform is supported for this version of Redis Enterprise Software and Redis Stack modules.
- <span title="Warning icon" class="font-serif">:warning:</span> Deprecation warning â The platform is still supported for this version of Redis Enterprise Software, but support will be removed in a future release.

## Redis Enterprise Software release notes 7.2.4-52 (August 2023)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-rs-7-2-4-releases-rs-7-2-4-52-63c717d5f8.md`
- â[âRedis Enterprise Software version 7.2.4](https://redis.io/downloads/#software) is now available!
- The following Redis 7.0 features are now supported:
- In Redis Enterprise Software, [`FUNCTION STATS`]() returns an extra parameter, an array called `all_running_scripts`, to reflect multiple functions running at the same time.
- The following Redis 7.2 features are now supported:
- Redis Enterprise version 7.2 introduces Auto Tiering as an enhanced successor to Redis on Flash, which allows you to provision larger databases at a lower cost by extending the RAM with flash drives.

## Redis Enterprise Software release notes 7.2.4-64 (September 2023)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-rs-7-2-4-releases-rs-7-2-4-64-9e72be19d1.md`
- This is a maintenance release for â[âRedis Enterprise Software version 7.2.4](https://redis.io/downloads/#software).
- Redis Enterprise Software version 7.2.4-64 includes the following Redis Stack modules (no changes since [Redis Enterprise Software version 7.2.4-52]():
- The following table provides a snapshot of supported platforms as of this Redis Enterprise Software release. See the [supported platforms reference]() for more details about operating system compatibility.
- <span title="Check mark icon">&#x2705;</span> Supported â The platform is supported for this version of Redis Enterprise Software.
- <span title="Warning icon">&#x26A0;&#xFE0F;</span> Deprecated â The platform is still supported for this version of Redis Enterprise Software, but support will be removed in a future release.

## Redis Enterprise Software release notes 7.2.4-72 (October 2023)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-rs-7-2-4-releases-rs-7-2-4-72-23008f471a.md`
- This is a maintenance release for â[âRedis Enterprise Software version 7.2.4](https://redis.io/downloads/#software).
- Redis Enterprise Software version 7.2.4-72 includes the following Redis Stack modules (no changes since [Redis Enterprise Software version 7.2.4-52]():
- The following table provides a snapshot of supported platforms as of this Redis Enterprise Software release. See the [supported platforms reference]() for more details about operating system compatibility.
- <span title="Check mark icon">&#x2705;</span> Supported â The platform is supported for this version of Redis Enterprise Software.
- <span title="Warning icon">&#x26A0;&#xFE0F;</span> Deprecated â The platform is still supported for this version of Redis Enterprise Software, but support will be removed in a future release.

## Redis Enterprise Software release notes 7.2.4-92 (November 2023)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-rs-7-2-4-releases-rs-7-2-4-92-95d44bfa3c.md`
- This is a maintenance release for â[âRedis Enterprise Software version 7.2.4](https://redis.io/downloads/#software), originally released as version 7.2.4-86. Version 7.2.4-92 fixes several additional issues that affect version 7.2.4-86.
- Redis Enterprise Software versions 7.2.4-92 and 7.2.4-86 include the following Redis Stack modules:
- The following issues were resolved in âRedis Enterprise Software version 7.2.4-92:
- The following issues were resolved in âRedis Enterprise Software version 7.2.4-86:
- The following table provides a snapshot of supported platforms as of this Redis Enterprise Software release. See the [supported platforms reference]() for more details about operating system compatibility.

## Redis Software release notes 7.22.x
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-rs-7-22-releases-a62aa9525d.md`
- ââRedis Software version 7.22 is now available!
- For more detailed release notes, select a build version from the following table:
- Make sure the following ports are open before upgrading Redis Software.
- Ports reserved as of Redis Software version 7.22.0:
- | 3346 | cluster_api_internal | Cluster API internal port |

## Redis Software release notes 7.22.0-216 (June 2025)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-rs-7-22-releases-rs-7-22-0-216-954b6db715.md`
- â[âRedis Software version 7.22.0](https://redis.io/downloads/#software) is now available!
- Redis Software version 7.22.0 includes three Redis database versions: 7.4.2, 7.2.7, and 6.2.13.
- The [default Redis database version]() is 7.4.
- Redis Software comes packaged with several modules. As of version 7.22.0, Redis Software includes three feature sets, compatible with different Redis database versions.
- The following table shows which Redis modules are compatible with each Redis database version included in this release.

## Redis Software release notes 7.22.0-241 (July 2025)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-rs-7-22-releases-rs-7-22-0-241-535a06ed3a.md`
- â[âRedis Software version 7.22.0](https://redis.io/downloads/#software) is now available!
- Redis Software version 7.22.0 includes three Redis database versions: 7.4.2, 7.2.7, and 6.2.13.
- The [default Redis database version]() is 7.4.
- Redis Software comes packaged with several modules. As of version 7.22.0, Redis Software includes three feature sets, compatible with different Redis database versions.
- The following table shows which Redis modules are compatible with each Redis database version included in this release.

## Redis Software release notes 7.22.0-250 (August 2025)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-rs-7-22-releases-rs-7-22-0-250-bbf5e9529c.md`
- â[âRedis Software version 7.22.0](https://redis.io/downloads/#software) is now available!
- Redis Software version 7.22.0 includes three Redis database versions: 7.4.2, 7.2.7, and 6.2.13.
- The [default Redis database version]() is 7.4.
- Redis Software comes packaged with several modules. As of version 7.22.0, Redis Software includes three feature sets, compatible with different Redis database versions.
- The following table shows which Redis modules are compatible with each Redis database version included in this release.

## Redis Software release notes 7.22.0-95 (May 2025)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-rs-7-22-releases-rs-7-22-0-95-5b4c93cf59.md`
- â[âRedis Software version 7.22.0](https://redis.io/downloads/#software) is now available!
- | 3346 | cluster_api_internal | Cluster API internal port |
- | 3351 | cluster_watchdog_grpc_api | Cluster watchdog now supports gRPC |
- | 3352 | grpc_service_mesh | gRPC communication between nodes |
- | 3353 | local_grpc_service_mesh | Local gRPC services |

## Redis Software release notes 7.22.2-14 (September 2025)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-rs-7-22-releases-rs-7-22-2-14-0e5f806f30.md`
- â[âRedis Software version 7.22.2](https://redis.io/downloads/#software) is now available! This release includes API enhancements that warranted a new minor version instead of a maintenance release for version 7.22.0. However, you can upgrade from 7.22.0 to 7.22.2 without issue.
- Instead of using Redis Software's self-signed certificates for internode encryption, you can provide certificates generated by your Certificate Authority (CA). See [Customer-provided certificates ]() for details.
- Redis Software version 7.22.2 includes three Redis database versions: 7.4.2, 7.2.7, and 6.2.13.
- The [default Redis database version]() is 7.4.
- Redis Software comes packaged with several modules. As of version 7.22.0, Redis Software includes three feature sets, compatible with different Redis database versions.

## Redis Software release notes 7.22.2-20 (October 2025)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-rs-7-22-releases-rs-7-22-2-20-9d5be5f3a0.md`
- â[âRedis Software version 7.22.2](https://redis.io/downloads/#Redis_Software) is now available!
- Redis Software version 7.22.2 includes three Redis database versions: 7.4.3, 7.2.7, and 6.2.13.
- The [default Redis database version]() is 7.4.
- Redis Software comes packaged with several modules. As of version 7.22.0, Redis Software includes three feature sets, compatible with different Redis database versions.
- The following table shows which Redis modules are compatible with each Redis database version included in this release.

## Redis Software release notes 7.22.2-41 (November 2025)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-rs-7-22-releases-rs-7-22-2-41-9fb9727e70.md`
- This is a maintenance release for ââRedis Software version 7.22.2.
- Redis Software version 7.22.2 includes three Redis database versions: 7.4.3, 7.2.7, and 6.2.13.
- The [default Redis database version]() is 7.4.
- Redis Software comes packaged with several modules. As of version 7.22.0, Redis Software includes three feature sets, compatible with different Redis database versions.
- The following table shows which Redis modules are compatible with each Redis database version included in this release.

## Redis Software release notes 7.22.2-55 (January 2026)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-rs-7-22-releases-rs-7-22-2-55-5bccc4de05.md`
- This is a maintenance release for ââRedis Software version 7.22.2.
- Redis Software version 7.22.2 includes three Redis database versions: 7.4.3, 7.2.7, and 6.2.13.
- The [default Redis database version]() is 7.4.
- Redis Software comes packaged with several modules. As of version 7.22.0, Redis Software includes three feature sets, compatible with different Redis database versions.
- The following table shows which Redis modules are compatible with each Redis database version included in this release.

## Redis Software release notes 7.22.2-79 (February 2026)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-rs-7-22-releases-rs-7-22-2-79-1780f50d44.md`
- This is a maintenance release for ââRedis Software version 7.22.2.
- Redis Software version 7.22.2 includes three Redis database versions: 7.4.3, 7.2.7, and 6.2.13.
- The [default Redis database version]() is 7.4.
- Redis Software comes packaged with several modules. As of version 7.22.0, Redis Software includes three feature sets, compatible with different Redis database versions.
- The following table shows which Redis modules are compatible with each Redis database version included in this release.

## Redis Software release notes 7.22.2-93 (March 2026)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-rs-7-22-releases-rs-7-22-2-93-936054a478.md`
- This is a maintenance release for ââRedis Software version 7.22.2.
- Redis Software version 7.22.2 includes three Redis database versions: 7.4.3, 7.2.7, and 6.2.13.
- The [default Redis database version]() is 7.4.
- Redis Software comes packaged with several modules. As of version 7.22.0, Redis Software includes three feature sets, compatible with different Redis database versions.
- The following table shows which Redis modules are compatible with each Redis database version included in this release.

## Redis Enterprise Software release notes 7.4.x
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-rs-7-4-2-releases-b287f1c709.md`
- â[âRedis Enterprise Software version 7.4](https://redis.io/downloads/#software) is now available!
- For more detailed release notes, select a build version from the following table:
- The end-of-life policy for Redis Enterprise Software versions 6.2 and later has been extended to 24 months after the formal release of the subsequent major version. For the updated end-of-life schedule, see the [Redis Enterprise Software product lifecycle]().
- Redis Enterprise Software versions 6.2.4 and 6.2.8 do not support direct upgrades beyond version 7.4.x. Versions 6.2.10, 6.2.12, and 6.2.18 are part of the [upgrade path](). To upgrade from 6.2.4 or 6.2.8 to versions later than 7.4.x, an intermediate upgrade is required.
- The next major Redis Enterprise Software release will still bundle Redis database version 6.2 and allow database upgrades from Redis database version 6.2 to 7.x.

## Redis Enterprise Software release notes 7.4.2-104 (March 2024)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-rs-7-4-2-releases-rs-7-4-2-104-2ba013543e.md`
- This is a maintenance release for â[âRedis Enterprise Software version 7.4.2](https://redis.io/downloads/#software).
- Redis Enterprise comes packaged with several modules. As of version 7.4.2, Redis Enterprise includes two feature sets, compatible with different Redis database versions.
- Bundled Redis modules compatible with Redis database version 7.2:
- Bundled Redis modules compatible with Redis database versions 6.0 and 6.2:
- To avoid issues due to an expired cluster license, we recommend replacing the license before the expiration date. See [Update cluster license]() for Cluster Manager UI instructions or use a [`PUT /v1/license`]() REST API request.

## Redis Enterprise Software release notes 7.4.2-126 (April 2024)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-rs-7-4-2-releases-rs-7-4-2-126-bd96976831.md`
- This is a maintenance release for â[âRedis Enterprise Software version 7.4.2](https://redis.io/downloads/#software).
- Redis Enterprise comes packaged with several modules. As of version 7.4.2, Redis Enterprise includes two feature sets, compatible with different Redis database versions.
- Bundled Redis modules compatible with Redis database version 7.2:
- Bundled Redis modules compatible with Redis database versions 6.0 and 6.2:
- The following table provides a snapshot of supported platforms as of this Redis Enterprise Software release. See the [supported platforms reference]() for more details about operating system compatibility.

## Redis Enterprise Software release notes 7.4.2-169 (May 2024)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-rs-7-4-2-releases-rs-7-4-2-169-5b3779b158.md`
- This is a maintenance release for â[âRedis Enterprise Software version 7.4.2](https://redis.io/downloads/#software).
- Redis Enterprise comes packaged with several modules. As of version 7.4.2, Redis Enterprise includes two feature sets, compatible with different Redis database versions.
- Bundled Redis modules compatible with Redis database version 7.2:
- Bundled Redis modules compatible with Redis database versions 6.0 and 6.2:
- The following table provides a snapshot of supported platforms as of this Redis Enterprise Software release. See the [supported platforms reference]() for more details about operating system compatibility.

## Redis Enterprise Software release notes 7.4.2-216 (July 2024)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-rs-7-4-2-releases-rs-7-4-2-216-d6ab4277af.md`
- This is a maintenance release for â[âRedis Enterprise Software version 7.4.2](https://redis.io/downloads/#software).
- Redis Enterprise comes packaged with several modules. As of version 7.4.2, Redis Enterprise includes two feature sets, compatible with different Redis database versions.
- Bundled Redis modules compatible with Redis database version 7.2:
- Bundled Redis modules compatible with Redis database versions 6.0 and 6.2:
- After August 31, 2024, Redis Enterprise Software versions 6.2.4 and 6.2.8 will not be included in [supported upgrade paths]() for Redis Enterprise Software versions beyond 7.4.x. Redis Enterprise Software versions 6.2.10, 6.2.12 and 6.2.18 continue to be part of the upgrade path.

## Redis Enterprise Software release notes 7.4.2-54 (February 2024)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-rs-7-4-2-releases-rs-7-4-2-54-532d60cc8e.md`
- â[âRedis Enterprise Software version 7.4.2](https://redis.io/downloads/#software) is now available!
- Redis Enterprise comes packaged with several modules. As of version 7.4.2, Redis Enterprise includes two feature sets, compatible with different Redis database versions.
- Bundled Redis modules compatible with Redis database version 7.2:
- Bundled Redis modules compatible with Redis database versions 6.0 and 6.2:
- The legacy UI is deprecated in favor of the new Cluster Manager UI and will be removed in a future release.

## Redis Enterprise Software release notes 7.4.6-102 (October 2024)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-rs-7-4-2-releases-rs-7-4-6-102-3a1d261957.md`
- This is a maintenance release for â[âRedis Enterprise Software version 7.4.6](https://redis.io/downloads/#software).
- Redis Enterprise comes packaged with several modules. As of version 7.4.2, Redis Enterprise includes two feature sets, compatible with different Redis database versions.
- Bundled Redis modules compatible with Redis database version 7.2:
- Bundled Redis modules compatible with Redis database versions 6.0 and 6.2:
- The end-of-life policy for Redis Enterprise Software versions 6.2 and later has been extended to 24 months after the formal release of the subsequent major version. For the updated end-of-life schedule, see the [Redis Enterprise Software product lifecycle]().

## Redis Enterprise Software release notes 7.4.6-188 (January 2025)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-rs-7-4-2-releases-rs-7-4-6-188-ef17257773.md`
- This is a maintenance release for â[âRedis Enterprise Software version 7.4.6](https://redis.io/downloads/#software).
- Redis Enterprise comes packaged with several modules. As of version 7.4.2, Redis Enterprise includes two feature sets, compatible with different Redis database versions.
- Bundled Redis modules compatible with Redis database version 7.2:
- Bundled Redis modules compatible with Redis database versions 6.0 and 6.2:
- The end-of-life policy for Redis Enterprise Software versions 6.2 and later has been extended to 24 months after the formal release of the subsequent major version. For the updated end-of-life schedule, see the [Redis Enterprise Software product lifecycle]().

## Redis Enterprise Software release notes 7.4.6-22 (July 2024)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-rs-7-4-2-releases-rs-7-4-6-22-2740fa4c49.md`
- â[âRedis Enterprise Software version 7.4.6](https://redis.io/downloads/#software) is now available! This release includes API enhancements that warranted a new minor version instead of a maintenance release for version 7.4.2. However, you can upgrade from 7.4.2 to 7.4.6 without issue.
- Redis Enterprise comes packaged with several modules. As of version 7.4.2, Redis Enterprise includes two feature sets, compatible with different Redis database versions.
- Bundled Redis modules compatible with Redis database version 7.2:
- Bundled Redis modules compatible with Redis database versions 6.0 and 6.2:
- The end-of-life policy for Redis Enterprise Software versions 6.2 and later has been extended to 24 months after the formal release of the subsequent major version. For the updated end-of-life schedule, see the [Redis Enterprise Software product lifecycle]().

## Redis Enterprise Software release notes 7.4.6-232 (March 2025)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-rs-7-4-2-releases-rs-7-4-6-232-373b994f4d.md`
- This is a maintenance release for â[âRedis Enterprise Software version 7.4.6](https://redis.io/downloads/#software).
- Redis Enterprise comes packaged with several modules. As of version 7.4.2, Redis Enterprise includes two feature sets, compatible with different Redis database versions.
- Bundled Redis modules compatible with Redis database version 7.2:
- Bundled Redis modules compatible with Redis database versions 6.0 and 6.2:
- The end-of-life policy for Redis Enterprise Software versions 6.2 and later has been extended to 24 months after the formal release of the subsequent major version. For the updated end-of-life schedule, see the [Redis Enterprise Software product lifecycle]().

## Redis Enterprise Software release notes 7.4.6-268 (June 2025)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-rs-7-4-2-releases-rs-7-4-6-268-4970179992.md`
- This is a maintenance release for ââRedis Enterprise Software version 7.4.6.
- Redis Enterprise comes packaged with several modules. As of version 7.4.2, Redis Enterprise includes two feature sets, compatible with different Redis database versions.
- Bundled Redis modules compatible with Redis database version 7.2:
- Bundled Redis modules compatible with Redis database versions 6.0 and 6.2:
- The end-of-life policy for Redis Enterprise Software versions 6.2 and later has been extended to 24 months after the formal release of the subsequent major version. For the updated end-of-life schedule, see the [Redis Enterprise Software product lifecycle]().

## Redis Enterprise Software release notes 7.4.6-272 (September 2025)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-rs-7-4-2-releases-rs-7-4-6-272-893e873b92.md`
- This is a maintenance release for ââRedis Enterprise Software version 7.4.6.
- Redis Enterprise comes packaged with several modules. As of version 7.4.2, Redis Enterprise includes two feature sets, compatible with different Redis database versions.
- Bundled Redis modules compatible with Redis database version 7.2:
- Bundled Redis modules compatible with Redis database versions 6.0 and 6.2:
- The end-of-life policy for Redis Enterprise Software versions 6.2 and later has been extended to 24 months after the formal release of the subsequent major version. For the updated end-of-life schedule, see the [Redis Enterprise Software product lifecycle]().

## Redis Software release notes 7.4.6-279 (February 2026)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-rs-7-4-2-releases-rs-7-4-6-279-598bacc3fa.md`
- This is a maintenance release for ââRedis Software version 7.4.6.
- Redis Software comes packaged with several modules. As of version 7.4.2, Redis Software includes two feature sets, compatible with different Redis database versions.
- Bundled Redis modules compatible with Redis database version 7.2:
- Bundled Redis modules compatible with Redis database versions 6.0 and 6.2:
- The end-of-life policy for Redis Software versions 6.2 and later has been extended to 24 months after the formal release of the subsequent major version. For the updated end-of-life schedule, see the [Redis Software product lifecycle]().

## Redis Enterprise Software release notes 7.4.6-77 (September 2024)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-rs-7-4-2-releases-rs-7-4-6-77-dc14b9c5e0.md`
- This is a maintenance release for â[âRedis Enterprise Software version 7.4.6](https://redis.io/downloads/#software).
- Redis Enterprise comes packaged with several modules. As of version 7.4.2, Redis Enterprise includes two feature sets, compatible with different Redis database versions.
- Bundled Redis modules compatible with Redis database version 7.2:
- Bundled Redis modules compatible with Redis database versions 6.0 and 6.2:
- The end-of-life policy for Redis Enterprise Software versions 6.2 and later has been extended to 24 months after the formal release of the subsequent major version. For the updated end-of-life schedule, see the [Redis Enterprise Software product lifecycle]().

## Redis Software release notes 7.8.x
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-rs-7-8-releases-2d8b4e0e18.md`
- â[âRedis Software version 7.8](https://redis.io/downloads/#software) is now available!
- For more detailed release notes, select a build version from the following table:
- Redis Software version 7.8.2 introduces the following breaking changes:
- When new major versions of Redis Community Edition change existing commands, upgrading your database to a new version can potentially break some functionality. Before you upgrade, read the provided list of breaking changes that affect Redis Software and update any applications that connect to your database to handle these changes.
- Confirm your Redis database version (`redis_version`) using the Cluster Manager UI or run the following [`INFO`]() command with [`redis-cli`]():

## Redis Software release notes 7.8.2-34 (November 2024)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-rs-7-8-releases-rs-7-8-2-34-51ffb042ed.md`
- â[âRedis Software version 7.8.2](https://redis.io/downloads/#software) is now available!
- | 3347 | cert_exporter | Reports cluster certificate metrics |
- | 3348 | process_exporter | Reports process metrics for DMC and Redis processes |
- | 3349 | cluster_wd_exporter | Reports cluster watchdog metrics |
- | 3350 | db_controller | Internode communication |

## Redis Software release notes 7.8.2-60 (December 2024)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-rs-7-8-releases-rs-7-8-2-60-803e24aabc.md`
- This is a maintenance release for â[âRedis Software version 7.8.2](https://redis.io/downloads/#software).
- Redis Software version 7.8.2 includes three Redis database versions: 7.4.0, 7.2.4, and 6.2.13.
- The [default Redis database version]() is 7.4.
- Redis Software comes packaged with several modules. As of version 7.8.2, Redis Software includes three feature sets, compatible with different Redis database versions.
- The following table shows which Redis modules are compatible with each Redis database version included in this release.

## Redis Software release notes 7.8.4-18 (December 2024)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-rs-7-8-releases-rs-7-8-4-18-2b2a10daa4.md`
- â[âRedis Software version 7.8.4](https://redis.io/downloads/#software) is now available! This release includes API enhancements that warranted a new minor version instead of a maintenance release for version 7.8.2. However, you can upgrade from 7.8.2 to 7.8.4 without issue.
- 1. Configure a trusted CA certificate `mtls_trusted_ca` using an [update cluster certificate]() request:
- 1. [Update cluster settings]() with mutual TLS configuration:
- 1. Include `"auth_method": "certificate"` and `certificate_subject_line` in the request body when you [create new users]() or [update existing users]():
- Redis Software version 7.8.4 includes three Redis database versions: 7.4.0, 7.2.4, and 6.2.13.

## Redis Software release notes 7.8.4-66 (February 2025)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-rs-7-8-releases-rs-7-8-4-66-014749a273.md`
- This is a maintenance release for â[âRedis Software version 7.8.4](https://redis.io/downloads/#software).
- Redis Software version 7.8.4 includes three Redis database versions: 7.4.0, 7.2.4, and 6.2.13.
- The [default Redis database version]() is 7.4.
- Redis Software comes packaged with several modules. As of version 7.8.2, Redis Software includes three feature sets, compatible with different Redis database versions.
- The following table shows which Redis modules are compatible with each Redis database version included in this release.

## Redis Software release notes 7.8.4-95 (March 2025)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-rs-7-8-releases-rs-7-8-4-95-8ef703d8f1.md`
- This is a maintenance release for â[âRedis Software version 7.8.4](https://redis.io/downloads/#software).
- Redis Software version 7.8.4 includes three Redis database versions: 7.4.0, 7.2.4, and 6.2.13.
- The [default Redis database version]() is 7.4.
- Redis Software comes packaged with several modules. As of version 7.8.2, Redis Software includes three feature sets, compatible with different Redis database versions.
- The following table shows which Redis modules are compatible with each Redis database version included in this release.

## Redis Software release notes 7.8.6-119 (June 2025)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-rs-7-8-releases-rs-7-8-6-119-e820b319b4.md`
- This is a maintenance release for Redis Software version 7.8.6.
- Redis Software version 7.8.6 includes three Redis database versions: 7.4.0, 7.2.4, and 6.2.13.
- The [default Redis database version]() is 7.4.
- Redis Software comes packaged with several modules. As of version 7.8.2, Redis Software includes three feature sets, compatible with different Redis database versions.
- The following table shows which Redis modules are compatible with each Redis database version included in this release.

## Redis Software release notes 7.8.6-13 (March 2025)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-rs-7-8-releases-rs-7-8-6-13-cb3ec2cbb7.md`
- â[âRedis Software version 7.8.6](https://redis.io/downloads/#software) is now available! This release includes API enhancements that warranted a new minor version instead of a maintenance release for version 7.8.4. However, you can upgrade from 7.8.2 or 7.8.4 to 7.8.6 without issue.
- The hashing algorithm options are `SHA-256` or `PBKDF2`. The default hashing algorithm is `SHA-256`.
- To change the password hashing algorithm, use one of the following methods:
- Redis Software version 7.8.6 includes three Redis database versions: 7.4.0, 7.2.4, and 6.2.13.
- The [default Redis database version]() is 7.4.

## Redis Software release notes 7.8.6-152 (August 2025)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-rs-7-8-releases-rs-7-8-6-152-6607eeea3d.md`
- This is a maintenance release for Redis Software version 7.8.6.
- Redis Software version 7.8.6 includes three Redis database versions: 7.4.0, 7.2.4, and 6.2.13.
- The [default Redis database version]() is 7.4.
- Redis Software comes packaged with several modules. As of version 7.8.2, Redis Software includes three feature sets, compatible with different Redis database versions.
- The following table shows which Redis modules are compatible with each Redis database version included in this release.

## Redis Software release notes 7.8.6-207 (September 2025)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-rs-7-8-releases-rs-7-8-6-207-b6a96da074.md`
- This is a maintenance release for Redis Software version 7.8.6.
- Redis Software version 7.8.6 includes three Redis database versions: 7.4.0, 7.2.4, and 6.2.13.
- The [default Redis database version]() is 7.4.
- Redis Software comes packaged with several modules. As of version 7.8.2, Redis Software includes three feature sets, compatible with different Redis database versions.
- The following table shows which Redis modules are compatible with each Redis database version included in this release.

## Redis Software release notes 7.8.6-253 (February 2026)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-rs-7-8-releases-rs-7-8-6-253-1fbb095f4d.md`
- This is a maintenance release for Redis Software version 7.8.6.
- Redis Software version 7.8.6 includes three Redis database versions: 7.4.0, 7.2.4, and 6.2.13.
- The [default Redis database version]() is 7.4.
- Redis Software comes packaged with several modules. As of version 7.8.2, Redis Software includes three feature sets, compatible with different Redis database versions.
- The following table shows which Redis modules are compatible with each Redis database version included in this release.

## Redis Software release notes 7.8.6-256 (March 2026)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-rs-7-8-releases-rs-7-8-6-256-85dde02a55.md`
- This is a maintenance release for Redis Software version 7.8.6.
- Redis Software version 7.8.6 includes three Redis database versions: 7.4.0, 7.2.4, and 6.2.13.
- The [default Redis database version]() is 7.4.
- Redis Software comes packaged with several modules. As of version 7.8.2, Redis Software includes three feature sets, compatible with different Redis database versions.
- The following table shows which Redis modules are compatible with each Redis database version included in this release.

## Redis Software release notes 7.8.6-36 (April 2025)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-rs-7-8-releases-rs-7-8-6-36-0043c375ba.md`
- This is a maintenance release for â[âRedis Software version 7.8.6](https://redis.io/downloads/#software).
- Redis Software version 7.8.6 includes three Redis database versions: 7.4.0, 7.2.4, and 6.2.13.
- The [default Redis database version]() is 7.4.
- Redis Software comes packaged with several modules. As of version 7.8.2, Redis Software includes three feature sets, compatible with different Redis database versions.
- The following table shows which Redis modules are compatible with each Redis database version included in this release.

## Redis Software release notes 7.8.6-60 (April 2025)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-rs-7-8-releases-rs-7-8-6-60-35cf175174.md`
- This is a maintenance release for â[âRedis Software version 7.8.6](https://redis.io/downloads/#software).
- Redis Software version 7.8.6 includes three Redis database versions: 7.4.0, 7.2.4, and 6.2.13.
- The [default Redis database version]() is 7.4.
- Redis Software comes packaged with several modules. As of version 7.8.2, Redis Software includes three feature sets, compatible with different Redis database versions.
- The following table shows which Redis modules are compatible with each Redis database version included in this release.

## Redis Software release notes 7.8.6-95 (May 2025)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-rs-7-8-releases-rs-7-8-6-95-a37813ed8e.md`
- This is a maintenance release for â[âRedis Software version 7.8.6](https://redis.io/downloads/#software).
- Redis Software version 7.8.6 includes three Redis database versions: 7.4.0, 7.2.4, and 6.2.13.
- The [default Redis database version]() is 7.4.
- Redis Software comes packaged with several modules. As of version 7.8.2, Redis Software includes three feature sets, compatible with different Redis database versions.
- The following table shows which Redis modules are compatible with each Redis database version included in this release.

## Redis Software release notes 8.0.x
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-rs-8-0-releases-f850614856.md`
- â[âRedis Software version 8.0](https://redis.io/downloads/#Redis_Software) is now available!
- For more detailed release notes, select a build version from the following table:
- When new major versions of Redis Open Source change existing commands, upgrading your database to a new version can potentially break some functionality. Before you upgrade, read the provided list of breaking changes that affect Redis Software and update any applications that connect to your database to handle these changes.
- Before Redis 8, the existing [ACL]() categories `@read`, `@write`, `@dangerous`, `@admin`, `@slow`, and `@fast` did not include commands for Redis Search and the JSON, time series, and probabilistic data structures.
- Starting with Redis 8, Redis includes all Query Engine, JSON, time series, Bloom filter, cuckoo filter, top-k, count-min sketch, and t-digest commands in these existing ACL categories.

## Redis Software release notes 8.0.10-64 (February 2026)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-rs-8-0-releases-rs-8-0-10-64-284a2438d2.md`
- â[âRedis Software version 8.0.10](https://redis.io/downloads/#Redis_Software) is now available! This release includes API enhancements that warranted a new minor version instead of a maintenance release for version 8.0.6. However, you can upgrade from 8.0.2 or 8.0.6 to 8.0.10 without issue.
- The Redis 8.4 feature set is now available when you [create]() or [upgrade]() a database with database version 8.4.
- Redis 8.4 builds on the foundation of Redis 8.2 with significant enhancements to cluster operations, string manipulation, and stream processing capabilities.
- This release delivers major improvements across multiple areas:
- Redis Flex databases running on Redis 8.4 have major operational optimizations:

## Redis Software release notes 8.0.10-76 (February 2026)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-rs-8-0-releases-rs-8-0-10-76-d441a51442.md`
- This is a maintenance release for â[âRedis Software version 8.0.10](https://redis.io/downloads/#Redis_Software).
- Redis Software version 8.0.10 includes the following Redis database versions: 8.4.0, 8.2.1, 8.0.2, 7.4.3, 7.2.7, and 6.2.13.
- The [default Redis database version]() is 8.4.
- Redis Software includes multiple feature sets, compatible with different Redis database versions.
- The following table shows which Redis modules are compatible with each Redis database version included in this release.

## Redis Software release notes 8.0.10-81 (February 2026)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-rs-8-0-releases-rs-8-0-10-81-66047d50ba.md`
- This is a maintenance release for â[âRedis Software version 8.0.10](https://redis.io/downloads/#Redis_Software).
- Redis Software version 8.0.10 includes the following Redis database versions: 8.4.0, 8.2.1, 8.0.2, 7.4.3, 7.2.7, and 6.2.13.
- The [default Redis database version]() is 8.4.
- Redis Software includes multiple feature sets, compatible with different Redis database versions.
- The following table shows which Redis modules are compatible with each Redis database version included in this release.

## Redis Software release notes 8.0.16-29 (March 2026)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-rs-8-0-releases-rs-8-0-16-29-d32a3385c4.md`
- â[âRedis Software version 8.0.16](https://redis.io/downloads/#Redis_Software) is now available! This release includes API enhancements that warranted a new minor version instead of a maintenance release for version 8.0.10. However, you can upgrade from 8.0.2, 8.0.6, or 8.0.10 to 8.0.16 without issue.
- Redis Software's new health report is a read-only, consolidated snapshot of a cluster's current system health, including:
- The new health report consolidates cluster and database health information that was previously scattered across multiple APIs and CLI commands, such as [`rladmin status extra all`]() and required SSH access to view.
- Now, you can access the cluster and database health reports using the **Overview** screen in the Cluster manager UI or the new health API paths:
- For more information, see [Consolidated health report]().

## Redis Software release notes 8.0.16-33 (March 2026)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-rs-8-0-releases-rs-8-0-16-33-f2002b5d11.md`
- This is a maintenance release for â[âRedis Software version 8.0.16](https://redis.io/downloads/#Redis_Software).
- Redis Software version 8.0.16 includes the following Redis database versions: 8.4.0, 8.2.1, 8.0.2, 7.4.3, 7.2.7, and 6.2.13.
- The [default Redis database version]() is 8.4.
- Redis Software includes multiple feature sets, compatible with different Redis database versions.
- The following table shows which Redis modules are compatible with each Redis database version included in this release.

## Redis Software release notes 8.0.2-17 (October 2025)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-rs-8-0-releases-rs-8-0-2-17-067cc200f3.md`
- â[âRedis Software version 8.0.2](https://redis.io/downloads/#Redis_Software) is now available!
- Redis 8.0 and 8.2 feature sets are now available when you [create]() or [upgrade]() a database with database version 8.2.
- Redis Software databases created with or upgraded to Redis version 8 include all the Redis capabilities, built in the database version as follows:
- | Database type | Automatically enabled capabilities |
- |---------------|------------------------------------|

## Redis Software release notes 8.0.2-41 (November 2025)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-rs-8-0-releases-rs-8-0-2-41-3d7b839a6b.md`
- This is a maintenance release for â[âRedis Software version 8.0.2](https://redis.io/downloads/#Redis_Software).
- Redis Software version 8.0.2 includes five Redis database versions: 8.2.1, 8.0.2, 7.4.3, 7.2.7, and 6.2.13.
- The [default Redis database version]() is 8.2.
- Redis Software includes multiple feature sets, compatible with different Redis database versions.
- The following table shows which Redis modules are compatible with each Redis database version included in this release.

## Redis Software release notes 8.0.6-54 (December 2025)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-rs-8-0-releases-rs-8-0-6-54-33563685aa.md`
- â[âRedis Software version 8.0.6](https://redis.io/downloads/#Redis_Software) is now available! This release includes API enhancements that warranted a new minor version instead of a maintenance release for version 8.0.2. However, you can upgrade from 8.0.2 to 8.0.6 without issue.
- Redis Software now supports IdP-initiated and SP-initiated single sign-on (SSO) with SAML (Security Assertion Markup Language) 2.0 for the Cluster Manager UI.
- For more information and setup instructions, see [SAML single sign-on]().
- Known limitation: You cannot change the default service provider address using the Cluster Manager UI. You can only change this address using a REST API request.
- Redis Software version 8.0.6 includes five Redis database versions: 8.2.1, 8.0.2, 7.4.3, 7.2.7, and 6.2.13.

## Update admin credentials for Active-Active databases
Source file: `raw/sources/20260409-docs-latest-operate-rs-security-access-control-manage-passwords-active-active-ad-f8e1b4268e.md`
- Active-Active databases use administrator credentials to manage operations. When you change the administrator password on clusters with Active-Active databases, you must update the Active-Active database configuration to prevent authentication failures during Active-Active management operations.
- Do not perform any management operations on the databases until these steps are complete.
- To update the administrator password on a cluster with Active-Active databases:
- 1. From the user management page, update the administrator user password on the clusters you want to update.
- 1. Run [`crdb-cli crdb list`]() to find the `CRDB-GUID` that uniquely identifies each Active-Active database and the fully qualified domain names (`FQDN`) of each participating cluster:

## Update certificates
Source file: `raw/sources/20260409-docs-latest-operate-rs-security-certificates-updating-certificates-015bdae291.md`
- When you update the certificates, the new certificate replaces the same certificates on all nodes in the cluster.
- You can use the [`rladmin`]() command-line interface (CLI) or the [REST API]() to update certificates. The Cluster Manager UI lets you update proxy, syncer, and internode encryption certificates on the **Cluster > Security > Certificates** screen.
- To replace proxy, syncer, or internode encryption certificates using the Cluster Manager UI:
- 1. Go to **Cluster > Security > Certificates**.
- 1. Expand the section for the certificate you want to update:

## Enable TLS
Source file: `raw/sources/20260409-docs-latest-operate-rs-security-encryption-tls-enable-tls-04b39b04b6.md`
- You can use TLS authentication for one or more of the following types of communication:
- When you enable or turn off TLS, the change applies to new connections but does not affect existing connections. You must update TLS parameters in the client's connection configuration, then clients must close existing connections and reconnect to apply the change.
- 1. From your database's **Security** tab, select **Edit**.
- 1. Expand the **TLS - Transport Layer Security for secure connections** section, then select **On**.
- 1. In the **Apply TLS for** section, select **Clients and databases + Between databases**.

## Redis cluster scaling official docs
Source file: `raw/sources/20260409-redis-cluster-scaling-official-docs.md`
- Source: https://redis.io/docs/latest/operate/oss_and_stack/management/scaling/
- Fully managed and integrated with Google Cloud, Azure, and
- Self-managed software with enterprise-grade compliance and
- In-memory database for caching & streaming.
- and AWS. Redis Software Self-managed software with enterprise-grade compliance

## Redis latency diagnosis official docs
Source file: `raw/sources/20260409-redis-latency-diagnosis-official-docs.md`
- Source: https://redis.io/docs/latest/operate/oss_and_stack/management/optimization/latency/
- Fully managed and integrated with Google Cloud, Azure, and
- Self-managed software with enterprise-grade compliance and
- In-memory database for caching & streaming.
- and AWS. Redis Software Self-managed software with enterprise-grade compliance

## Redis persistence official docs
Source file: `raw/sources/20260409-redis-persistence-official-docs.md`
- Source: https://redis.io/docs/latest/operate/oss_and_stack/management/persistence/
- Fully managed and integrated with Google Cloud, Azure, and
- Self-managed software with enterprise-grade compliance and
- In-memory database for caching & streaming.
- and AWS. Redis Software Self-managed software with enterprise-grade compliance

## Redis replication official docs
Source file: `raw/sources/20260409-redis-replication-official-docs.md`
- Source: https://redis.io/docs/latest/operate/oss_and_stack/management/replication/
- Fully managed and integrated with Google Cloud, Azure, and
- Self-managed software with enterprise-grade compliance and
- In-memory database for caching & streaming.
- and AWS. Redis Software Self-managed software with enterprise-grade compliance

## Redis Sentinel official docs
Source file: `raw/sources/20260409-redis-sentinel-official-docs.md`
- Source: https://redis.io/docs/latest/operate/oss_and_stack/management/sentinel/
- Fully managed and integrated with Google Cloud, Azure, and
- Self-managed software with enterprise-grade compliance and
- In-memory database for caching & streaming.
- and AWS. Redis Software Self-managed software with enterprise-grade compliance
