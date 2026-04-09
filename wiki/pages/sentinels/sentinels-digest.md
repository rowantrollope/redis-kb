---
title: "Sentinels Digest"
last_updated: 2026-04-09
tags: [sentinels, digest]
source_count: 239
---

# Sentinels Digest

Auto-compiled synthesis from raw sources.

## CLIENT KILL
Source file: `raw/sources/20260409-docs-latest-commands-client-kill-1fe1c437bb.md`
- The `ip:port` should match a line returned by the [`CLIENT LIST`]() command (`addr` field).
- CLIENT KILL <filter> <value> ... ... <filter> <value>
- With the new form it is possible to kill clients by different attributes
- instead of killing just by address. The following filters are available:
- * `CLIENT KILL ADDR ip:port`. This is exactly the same as the old three-arguments behavior.

## CLIENT PAUSE
Source file: `raw/sources/20260409-docs-latest-commands-client-pause-db0f95289c.md`
- The command performs the following actions:
- * It stops processing all the pending commands from normal and pub/sub clients for the given mode. However interactions with replicas will continue normally. Note that clients are formally paused when they try to execute a command, so no work is taken on the server side for inactive clients.
- * However it returns OK to the caller ASAP, so the `CLIENT PAUSE` command execution is not paused by itself.
- * When the specified amount of time has elapsed, all the clients are unblocked: this will trigger the processing of all the commands accumulated in the query buffer of every client during the pause.
- Client pause currently supports two modes:

## CLUSTER BUMPEPOCH
Source file: `raw/sources/20260409-docs-latest-commands-cluster-bumpepoch-bb8393f88a.md`
- The `CLUSTER BUMPEPOCH` command triggers an increment to the cluster's config epoch from the connected node. The epoch will be incremented if the node's config epoch is zero, or if it is less than the cluster's greatest epoch.
- **Note:** config epoch management is performed internally by the cluster, and relies on obtaining a consensus of nodes. The `CLUSTER BUMPEPOCH` attempts to increment the config epoch **WITHOUT** getting the consensus, so using it may violate the "last failover wins" rule. Use it with caution.
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Not supported">&#x274c; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> | <span title="Not supported">&#x274c; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> |  |

## CLUSTER FAILOVER
Source file: `raw/sources/20260409-docs-latest-commands-cluster-failover-6b34d1c6ee.md`
- the replica to start a manual failover of its master instance.
- A manual failover is a special kind of failover that is usually executed when
- there are no actual failures, but we wish to swap the current master with one
- of its replicas (which is the node we send the command to), in a safe way,
- without any window for data loss. It works in the following way:

## CLUSTER INFO
Source file: `raw/sources/20260409-docs-latest-commands-cluster-info-4dde5b751b.md`
- The following fields are always present in the reply:
- * `cluster_state`: State is `ok` if the node is able to receive queries. `fail` if there is at least one hash slot which is unbound (no node associated), in error state (node serving it is flagged with FAIL flag), or if the majority of masters can't be reached by this node.
- * `cluster_slots_assigned`: Number of slots which are associated to some node (not unbound). This number should be 16384 for the node to work properly, which means that each hash slot should be mapped to a node.
- * `cluster_slots_ok`: Number of hash slots mapping to a node not in `FAIL` or `PFAIL` state.
- * `cluster_slots_pfail`: Number of hash slots mapping to a node in `PFAIL` state. Note that those hash slots still work correctly, as long as the `PFAIL` state is not promoted to `FAIL` by the failure detection algorithm. `PFAIL` only means that we are currently not able to talk with the node, but may be just a transient error.

## CLUSTER NODES
Source file: `raw/sources/20260409-docs-latest-commands-cluster-nodes-63b541a084.md`
- given by the set of known nodes, the state of the connection we have with such
- nodes, their flags, properties and assigned slots, and so forth.
- configuration of the node we are contacting, in a serialization format which
- happens to be exactly the same as the one used by Redis Cluster itself in
- order to store on disk the cluster state (however the on disk cluster state

## CLUSTER SETSLOT
Source file: `raw/sources/20260409-docs-latest-commands-cluster-setslot-45ab7d42bf.md`
- 1. `MIGRATING` subcommand: Set a hash slot in *migrating* state.
- 2. `IMPORTING` subcommand: Set a hash slot in *importing* state.
- 3. `STABLE` subcommand: Clear any importing / migrating state from hash slot.
- 4. `NODE` subcommand: Bind the hash slot to a different node.
- The command with its set of subcommands is useful in order to start and end cluster live resharding operations, which are accomplished by setting a hash slot in migrating state in the source node, and importing state in the destination node.

## COMMAND DOCS
Source file: `raw/sources/20260409-docs-latest-commands-command-docs-6334da9ba2.md`
- By default, the reply includes all of the server's commands.
- You can use the optional _command-name_ argument to specify the names of one or more commands.
- The reply includes a map for each returned command.
- The following keys may be included in the mapped reply:
- * **summary:** short command description.

## FAILOVER
Source file: `raw/sources/20260409-docs-latest-commands-failover-1cd108e6f3.md`
- The failover is not synchronous, instead a background task will handle coordinating the failover.
- It is designed to limit data loss and unavailability of the cluster during the failover.
- This command is analogous to the [`CLUSTER FAILOVER`]() command for non-clustered Redis and is similar to the failover support provided by sentinel.
- The specific details of the default failover flow are as follows:
- 1. The master will internally start a `CLIENT PAUSE WRITE`, which will pause incoming writes and prevent the accumulation of new data in the replication stream.

## INFO
Source file: `raw/sources/20260409-docs-latest-commands-info-b042b9e571.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- The `INFO` command returns information and statistics about the server in a
- format that is simple to parse by computers and easy to read by humans.
- The optional parameter can be used to select a specific section of information:

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

## ROLE
Source file: `raw/sources/20260409-docs-latest-commands-role-4cd8d91e5c.md`
- The command returns an array of elements. The first element is the role of
- the instance, as one of the following three strings:
- The additional elements of the array depends on the role.
- An example of output when `ROLE` is called in a master instance:
- The master output is composed of the following parts:

## SHUTDOWN
Source file: `raw/sources/20260409-docs-latest-commands-shutdown-a965a30408.md`
- * If there are any replicas lagging behind in replication:
- * Pause clients attempting to write by performing a [`CLIENT PAUSE`]() with the `WRITE` option.
- * Wait up to the configured `shutdown-timeout` (default 10 seconds) for replicas to catch up the replication offset.
- * Perform a blocking SAVE if at least one **save point** is configured.
- * Flush the Append Only File if AOF is enabled.

## WAIT
Source file: `raw/sources/20260409-docs-latest-commands-wait-1c19da6af5.md`
- This command blocks the current client until all the previous write commands
- are successfully transferred and acknowledged by at least the number
- of replicas you specify in the `numreplicas` argument. If the value
- you specify for the `timeout` argument (in milliseconds) is reached, the command
- returns even if the specified number of replicas were not yet reached.

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

## Install RedisVL
Source file: `raw/sources/20260409-docs-latest-develop-ai-redisvl-overview-installation-db5f3f6df7.md`
- There are a few ways to install RedisVL. The easiest way is to use pip.
- Install `redisvl` into your Python (>=3.8) environment using `pip`:
- RedisVL comes with a few dependencies that are automatically installed, however, a few dependencies
- are optional and can be installed separately if needed:
- If you use ZSH, remember to escape the brackets:

## Client-side geographic failover
Source file: `raw/sources/20260409-docs-latest-develop-clients-failover-a0986d37f7.md`
- [Client-side geographic failover](https://en.wikipedia.org/wiki/Failover)
- to improve the availability of connections to Redis databases. Use this page
- to get a general overview of the concepts and then see the documentation for
- your client library to learn how to configure it for failover and failback:
- You may have several [Active-Active databases]()

## Jedis guide (Java)
Source file: `raw/sources/20260409-docs-latest-develop-clients-jedis-ca9c9a8408.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- [Jedis](https://github.com/redis/jedis) is a synchronous Java client for Redis.
- a more advanced Java client that also supports asynchronous and reactive connections.
- The sections below explain how to install `Jedis` and connect your application

## Connect to the server
Source file: `raw/sources/20260409-docs-latest-develop-clients-jedis-connect-7ad4376f84.md`
- Jedis 7.2.0 introduced a new client connection API:
- | `RedisClient` | `UnifiedJedis`, `JedisPool`, `JedisPooled` | Single connection (with connection pooling) |
- | `RedisClusterClient` | `JedisCluster` | Redis Cluster connections |
- | `RedisSentinelClient` | `JedisSentinelPool` | Redis Sentinel connections |
- The old client classes are now considered deprecated.

## Client-side geographic failover
Source file: `raw/sources/20260409-docs-latest-develop-clients-jedis-failover-3f75384154.md`
- Jedis supports [Client-side geographic failover](https://en.wikipedia.org/wiki/Failover)
- to improve the availability of connections to Redis databases. This page explains
- how to configure Jedis for failover. For an overview of the concepts,
- see the main [Client-side geographic failover]() page.
- Jedis uses the [resilience4j](https://resilience4j.readme.io/docs/getting-started)

## Production usage
Source file: `raw/sources/20260409-docs-latest-develop-clients-jedis-produsage-6bf698f9e6.md`
- This guide offers recommendations to get the best reliability and
- performance in your production environment.
- Each item in the checklist below links to the section
- for a recommendation. Use the checklist icons to record your
- progress in implementing the recommendations.

## Client-side geographic failover
Source file: `raw/sources/20260409-docs-latest-develop-clients-lettuce-failover-78b3ba1d95.md`
- Lettuce supports [Client-side geographic failover](https://en.wikipedia.org/wiki/Failover)
- to improve the availability of connections to Redis databases. This page explains
- how to configure Lettuce for failover. For an overview of the concepts,
- see the main [Client-side geographic failover]() page.
- The example below shows a simple case with a list of two servers,

## Production usage
Source file: `raw/sources/20260409-docs-latest-develop-clients-lettuce-produsage-436755eb44.md`
- This guide offers recommendations to get the best reliability and
- performance in your production environment.
- Each item in the checklist below links to the section
- for a recommendation. Use the checklist icons to record your
- progress in implementing the recommendations.

## Distributed Locks with Redis
Source file: `raw/sources/20260409-docs-latest-develop-clients-patterns-distributed-locks-0882037cfd.md`
- different processes must operate with shared resources in a mutually
- There are a number of libraries and blog posts describing how to implement
- a DLM (Distributed Lock Manager) with Redis, but every library uses a different
- approach, and many use a simple approach with lower guarantees compared to
- what can be achieved with slightly more complex designs.

## Client-side geographic failover
Source file: `raw/sources/20260409-docs-latest-develop-clients-redis-py-failover-330be68c66.md`
- redis-py supports [Client-side geographic failover](https://en.wikipedia.org/wiki/Failover)
- to improve the availability of connections to Redis databases. This page explains
- how to configure redis-py for failover. For an overview of the concepts,
- see the main [Client-side geographic failover]() page.
- The example below shows a simple case with a list of two servers,

## Redis Streams
Source file: `raw/sources/20260409-docs-latest-develop-data-types-streams-d6349cd00d.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- [View all stream commands](https://redis.io/commands/?group=stream)
- | Command | Summary | Complexity | Since |
- |---------|---------|------------|-------|

## Redis programmability
Source file: `raw/sources/20260409-docs-latest-develop-programmability-654a626f4a.md`
- Redis provides a programming interface that lets you execute custom scripts on the server itself. In Redis 7 and beyond, you can use [Redis Functions]() to manage and run your scripts. In Redis 6.2 and below, you use [Lua scripting with the EVAL command]() to program the server.
- Redis is, by [definition](https://github.com/redis/redis/blob/unstable/MANIFESTO#L7), a _"domain-specific language for abstract data types"_.
- The language that Redis speaks consists of its [commands]().
- Most the commands specialize at manipulating core [data types]() in different ways.
- In many cases, these commands provide all the functionality that a developer requires for managing application data in Redis.

## Modules API reference
Source file: `raw/sources/20260409-docs-latest-develop-reference-modules-modules-api-ref-9d908d68a0.md`
- <!-- This file is generated from module.c using
- redis/redis:utils/generate-module-api-doc.rb -->
- * [Heap allocation raw functions](#section-heap-allocation-raw-functions)
- * [Module information and time measurement](#section-module-information-and-time-measurement)
- * [Automatic memory management for modules](#section-automatic-memory-management-for-modules)

## Redis serialization protocol specification
Source file: `raw/sources/20260409-docs-latest-develop-reference-protocol-spec-cf88d4fbfa.md`
- To communicate with the Redis server, Redis clients use a protocol called Redis Serialization Protocol (RESP).
- While the protocol was designed specifically for Redis, you can use it for other client-server software projects.
- RESP is a compromise among the following considerations:
- RESP can serialize different data types including integers, strings, and arrays.
- It also features an error-specific type.

## Sentinel client spec
Source file: `raw/sources/20260409-docs-latest-develop-reference-sentinel-clients-6920d22ce6.md`
- Redis Sentinel is a monitoring solution for Redis instances that handles
- automatic failover of Redis masters and service discovery (who is the current
- master for a given group of instances?). Since Sentinel is both responsible
- for reconfiguring instances during failovers, and providing configurations to
- clients connecting to Redis masters or replicas, clients are required to have

## Redis Insight
Source file: `raw/sources/20260409-docs-latest-develop-tools-insight-e61244bd56.md`
- [![Discord](https://img.shields.io/discord/697882427875393627?style=flat-square)](https://discord.gg/QUkjSsk)
- [![Github](https://img.shields.io/static/v1?label=&message=repository&color=5961FF&logo=github)](https://github.com/redisinsight/redisinsight/)
- Redis Insight is a powerful tool for visualizing and optimizing data in Redis, making real-time application development easier and more fun than ever before. Redis Insight lets you do both GUI- and CLI-based interactions in a fully-featured desktop GUI client.
- <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
- * Automatically discover and add your local Redis databases (that use standalone connection type and do not require authentication).

## RedisInsight v2.16.0, December 2022
Source file: `raw/sources/20260409-docs-latest-develop-tools-insight-release-notes-v-2-16-0-4a7ed6fb08.md`
- This is the General Availability (GA) release of RedisInsight 2.16.

## RedisInsight v2.22.1, March 2023
Source file: `raw/sources/20260409-docs-latest-develop-tools-insight-release-notes-v-2-22-1-ae0bfc6c2e.md`
- This is the General Availability (GA) release of RedisInsight 2.22.

## RedisInsight v2.40.0, December 2023
Source file: `raw/sources/20260409-docs-latest-develop-tools-insight-release-notes-v-2-40-0-2e7a6ce35f.md`
- This is the General Availability (GA) release of RedisInsight 2.40.

## RedisInsight v1.13, Aug 2022
Source file: `raw/sources/20260409-docs-latest-develop-tools-insight-release-notes-v1-13-0-a0538c41b8.md`
- This is the maintenance release of RedisInsight 1.13 (v1.13.1).
- This is the General Availability Release of RedisInsight 1.13 (v1.13.0).

## RedisInsight v1.14, may 2023
Source file: `raw/sources/20260409-docs-latest-develop-tools-insight-release-notes-v1-14-0-7dfc39742e.md`
- RedisInsight version 1.X was retired on April 30, 2023, and will no longer be supported.
- To continue using the best RedisInsight features and capabilities, download the latest RedisInsight version 2.Y from our [website](https://redis.com/redis-enterprise/redis-insight/) or install it from an app store.
- This is the maintenance release of RedisInsight 1.14 (v1.14.0).

## RedisInsight v1.3, March 2020
Source file: `raw/sources/20260409-docs-latest-develop-tools-insight-release-notes-v1-3-0-4ce2a6a446.md`
- This is the maintenance release of RedisInsight 1.3 (v1.3.1).
- This is the General Availability release of RedisInsight 1.3 (v1.3.0)!
- their cloud databases with just a few clicks

## RedisInsight v1.6, June 2020
Source file: `raw/sources/20260409-docs-latest-develop-tools-insight-release-notes-v1-6-0-193e7e322a.md`
- Maintenance release for RedisInsight 1.6 including bug fixes and enhancements.
- Maintenance release for RedisInsight 1.6 including bug fixes and enhancements.
- Maintenance release for RedisInsight 1.6 including bug fixes and enhancements.
- This is the General Availability Release of RedisInsight 1.6!

## RedisInsight v2.0, Nov 2021
Source file: `raw/sources/20260409-docs-latest-develop-tools-insight-release-notes-v2-0-0b89a8606a.md`
- This is the General Availability (GA) release of RedisInsight 2.0.6
- This is the General Availability (GA) release of RedisInsight 2.0.
- * **Tree view** - A new view of the keys in Browser, which automatically groups keys scanned in your database into folders based on key namespaces. Now you can navigate through and analyze your list of keys quicker by opening only folders with namespaces you want.
- * **Support for Apple M1 (arm64)** - You can download it [here](https://redis.com/redis-enterprise/redis-insight/#insight-form).
- * **Added auto-discovery of local databases** - RedisInsight will automatically find and add your local databases when you open the application for the first time.

## RedisInsight v2.8.0, August 2022
Source file: `raw/sources/20260409-docs-latest-develop-tools-insight-release-notes-v2-8-0-f7d2ef5cdc.md`
- This is the General Availability (GA) release of RedisInsight 2.8.0

## What's new?
Source file: `raw/sources/20260409-docs-latest-develop-whats-new-9df0b573c4.md`
- * Updated the RESP3 specification document to include the [attribute type]().
- * Updates to the Redis Insight page related to its new Redis Search auto-completion [feature]().
- * Restructured and added testable connection examples to the [client pages]().
- * Added [Redis Open Source]() and [Redis Stack]() release notes.
- * Added new [Predis (PHP client library)]() page.

## Glossary
Source file: `raw/sources/20260409-docs-latest-glossary-165453db33.md`
- Allows you to manage permissions based on key patterns.
- More info: [redis.io/operate/oss_and_stack/management/security/acl](); [ACL wikipedia](https://en.wikipedia.org/wiki/Access-control_list); [Database access control](); [Update database ACLs](); [Role-based access control]()
- Geo-distributed databases that span multiple [Redis Enterprise Software]() [clusters](). Active-Active databases, also known as conflict-free replicated databases (CRDB), depend on [multi-primary replication]() and [conflict-free replicated data types (CRDTs)]() to power a simple development experience for geo-distributed applications.
- More info: [Active-Active geo-distributed Redis](), [Geo-distributed Active-Active Redis applications](), [Developing applications for Active-Active databases]()
- A "member database" of a global [Active-Active database]() which is made up of its own master and replica [shards]() spanning a single [cluster]().

## Redis Software with Docker
Source file: `raw/sources/20260409-docs-latest-integrate-docker-redis-enterprise-c673119012.md`
- Deploy Redis Software using Docker containers for quick development setups and testing environments.
- Redis Software with Docker provides a containerized version of Redis Software, perfect for development, testing, and proof-of-concept deployments. Get enterprise features like clustering, high availability, and advanced security in a simple Docker container.
- Get started with the [Redis Software Docker quickstart]() guide.

## Go client for Redis
Source file: `raw/sources/20260409-docs-latest-integrate-go-redis-154f3a5537.md`
- Connect your Go application to a Redis database using the go-redis client library.
- go-redis is a type-safe, Redis client library for Go that supports Redis 6.0+ features including Redis Cluster, Redis Sentinel, and Redis streams. It provides a clean, idiomatic Go API for interacting with Redis.
- Refer to the complete [Go guide]() to install, connect, and use go-redis with detailed examples and best practices.

## Java client for Redis
Source file: `raw/sources/20260409-docs-latest-integrate-jedis-c061d11557.md`
- Connect your Java application to a Redis database using the Jedis client library.
- Jedis is a popular Java client for Redis that provides a simple, synchronous interface for Redis operations. It offers comprehensive Redis command support and is widely used in Java applications for its straightforward API and reliable performance.
- Refer to the complete [Jedis guide]() to install, connect, and use Jedis.

## Redis on Kubernetes
Source file: `raw/sources/20260409-docs-latest-integrate-kubernetes-redis-721722da65.md`
- Deploy and manage Redis on Kubernetes using Redis Enterprise Operator and Helm charts for scalable containerized deployments.
- Redis on Kubernetes provides cloud-native Redis deployments using the Redis Enterprise Operator and Helm charts. Perfect for containerized applications requiring high availability, automatic scaling, and seamless integration with Kubernetes ecosystems.
- Learn how to [deploy Redis on Kubernetes]() for cloud-native applications.

## Redis Data Integration
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-14d3848c9c.md`
- This is the first General Availability version of Redis Data Integration (RDI).
- RDI's purpose is to help Redis customers sync Redis Enterprise with live data from their slow disk based databases in order to:
- If you use a relational database as the system of record for your app,
- that its performance doesn't scale well as your userbase grows. It may be
- acceptable for a few thousand users but for a few million, it can become a

## Test HA failover
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-installation-ha-test-d944a12143.md`
- 1. Ensure that RDI is up and running on both primary and secondary nodes.
- Run the following command and verify and that each instance should show healthy and running `rdi-api` and `rdi-operator` pods.
- 2. Identify the leader node - this is the one that has a running `collector-source` pod.
- To perform HA, you can simulate a connection failure between the leader and the RDI database by blocking the network traffic. You can do this by running the following commands on the leader node:
- 1. Identify the RDI database IP (replace `<hostname>` with your own hostname):

## Install on VMs
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-installation-install-vm-da19d8a14b.md`
- This guide explains how to install Redis Data Integration (RDI) on one or more VMs and integrate it with
- We recommend you always use the latest version, which is RDI v.
- RDI uses a database on your Redis Enterprise cluster to store its state
- information. Use the Redis Enterprise Cluster Manager UI to create the RDI database with the following
- Each of the RDI VMs should have at least:

## Redis Data Integration release notes 1.16.0 (January 2026)
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-release-notes-rdi-1-16-0-e22b9b7237.md`
- RDI's mission is to help Redis customers sync Redis Enterprise with live data from their slow disk-based databases to:
- RDI keeps the Redis cache up to date with changes in the primary database, using a [_Change Data Capture (CDC)_](https://en.wikipedia.org/wiki/Change_data_capture) mechanism.
- It also lets you _transform_ the data from relational tables into convenient and fast data structures that match your app's requirements. You specify the transformations using a configuration system, so no coding is required.
- RDI can write data to a Redis Active-Active database. However, it doesn't support writing data to two or more Active-Active replicas. Writing data from RDI to several Active-Active replicas could easily harm data integrity as RDI is not synchronous with the source database commits.

## Python client for Redis
Source file: `raw/sources/20260409-docs-latest-integrate-redis-py-ec39d954c0.md`
- Connect your Python application to a Redis database using the redis-py client library.
- redis-py is the recommended Python client for Redis, providing a comprehensive interface for all Redis commands and features. It offers both synchronous and asynchronous APIs, making it suitable for a wide range of Python applications from simple scripts to high-performance web applications.
- Refer to the complete [Python guide]() to install, connect, and use redis-py.

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

## Redis Enterprise for Kubernetes
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-cb719bdb25.md`
- Redis Enterprise for Kubernetes brings Redis Enterprise to Kubernetes environments through the Redis Enterprise operator. You can deploy, scale, and manage Redis Enterprise clusters and databases by using native Kubernetes resources and workflows.
- Redis Enterprise for Kubernetes provides all the enterprise features of Redis Software:
- The Redis Enterprise operator simplifies deployment and management by providing custom resource definitions (CRDs) for Redis Enterprise clusters (REC) and databases (REDB). This approach enables GitOps workflows and Kubernetes-native operations.
- Deploy Redis Enterprise on your Kubernetes cluster and create your first database.
- Create and manage [Redis Enterprise clusters]() on Kubernetes.

## Recover a Redis Enterprise cluster on Kubernetes
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-re-clusters-cluster-recovery-2bc7436f12.md`
- the cluster stops responding to client connections.
- When this happens, you must recover the cluster to restore the connections.
- You can also perform cluster recovery to reset cluster nodes, to troubleshoot issues, or in a case of active/passive failover.
- The Redis Enterprise for Kubernetes automates these recovery steps:
- 1. Recreates a fresh Redis Enterprise cluster

## RedisEnterpriseCluster API Reference
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-reference-api-redis-enterprise-cluster-api-5d17e56c8c.md`
- RedisEnterpriseCluster is the Schema for the redisenterpriseclusters API
- <td><a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.27/#objectmeta-v1-meta">metadata</a></td>
- <td>Refer to the Kubernetes API documentation for the fields of the `metadata` field.</td>
- RedisEnterpriseClusterSpec defines the desired state of RedisEnterpriseCluster<br/>
- RedisEnterpriseClusterSpec defines the desired state of RedisEnterpriseCluster

## Redis Enterprise for Kubernetes release notes 6.2.12-1 (Sept 2022)
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-release-notes-6-2-releases-k8s-6-2-12-1-b8b5e764db.md`
- The Redis Enterprise K8s 6.2.12-1 supports the Redis Enterprise Software release 6.2.12 and includes feature improvements and bug fixes.
- The key bug fixes and known limitations are described below.
- This release includes the following container images:
- * **Redis Enterprise**: `redislabs/redis:6.2.12-82` or  `redislabs/redis:6.2.12-82.rhel8-openshift`
- * **Operator**: `redislabs/operator:6.2.12-1`

## Redis Enterprise for Kubernetes Release Notes 6.2.4-1 (September 2021)
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-release-notes-6-2-releases-k8s-6-2-4-1-2021-09-a9a7acba66.md`
- The Redis Enterprise [K8s 6.2.4-1](https://github.com/RedisLabs/redis-enterprise-k8s-docs/releases/tag/v6.2.4-1) release provides support for the [Redis Enterprise Software release 6.2.4]() and includes several enhancements and bug fixes.
- The key new features, bug fixes, and known limitations are described below.
- This release includes the following container images:
- * **Redis Enterprise**: `redislabs/redis:6.2.4-55` or  `redislabs/redis:6.2.4-55.rhel7-openshift`
- * **Operator**: `redislabs/operator:6.2.4-1`

## Install Redis
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-install-archive-install-redis-e6240a2392.md`
- This is a an installation guide. You'll learn how to install, run, and experiment with the Redis server process.
- While you can install Redis on any of the platforms listed below, you might also consider using Redis Cloud by creating a [free account](https://redis.com/try-free?utm_source=redisio&utm_medium=referral&utm_campaign=2023-09-try_free&utm_content=cu-redis_cloud_users). You can also download [Redis Insight](), a free developer tool that works with Redis.
- How you install Redis depends on your operating system. See the guide below that best fits your needs:
- Refer to [Redis Administration]() for detailed setup tips.
- After you have Redis up and running, you can connect using `redis-cli`.

## Install Redis Open Source on Linux
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-install-install-stack-apt-25cb841628.md`
- Add the repository to the APT index, update it, and install Redis Open Source:
- sudo apt-get install lsb-release curl gpg
- curl -fsSL https://packages.redis.io/gpg | sudo gpg --dearmor -o /usr/share/keyrings/redis-archive-keyring.gpg
- sudo chmod 644 /usr/share/keyrings/redis-archive-keyring.gpg
- echo "deb [signed-by=/usr/share/keyrings/redis-archive-keyring.gpg] https://packages.redis.io/deb $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/redis.list

## Redis administration
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-management-admin-386fe0d937.md`
- * Deploy Redis using the Linux operating system. Redis is also tested on OS X, and from time to time on FreeBSD and OpenBSD systems. However, Linux is where most of the stress testing is performed, and where most production deployments are run.
- * Set the Linux kernel overcommit memory setting to 1. Add `vm.overcommit_memory = 1` to `/etc/sysctl.conf`. Then, reboot or run the command `sysctl vm.overcommit_memory=1` to activate the setting. See [FAQ: Background saving fails with a fork() error on Linux?]() for details.
- * To ensure the Linux kernel feature Transparent Huge Pages does not impact Redis memory usage and latency, run the command: `echo never > /sys/kernel/mm/transparent_hugepage/enabled` to disable it. See [Latency Diagnosis - Latency induced by transparent huge pages]() for additional context.
- * Ensured that swap is enabled and that your swap file size is equal to amount of memory on your system. If Linux does not have swap set up, and your Redis instance accidentally consumes too much memory, Redis can crash when it is out of memory, or the Linux kernel OOM killer can kill the Redis process. When swapping is enabled, you can detect latency spikes and act on them.
- * Set an explicit `maxmemory` option limit in your instance to make sure that it will report errors instead of failing when the system memory limit is near to be reached. Note that `maxmemory` should be set by calculating the overhead for Redis, other than data, and the fragmentation overhead. So if you think you have 10 GB of free memory, set it to 8 or 9.

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

## TLS
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-management-security-encryption-88d7cd9fc5.md`
- SSL/TLS is supported by Redis starting with version 6 as an optional feature
- that needs to be enabled at compile time.
- To build with TLS support you'll need OpenSSL development libraries (e.g.
- To run Redis test suite with TLS, you'll need TLS support for TCL (i.e.
- 1. Run `./utils/gen-test-certs.sh` to generate a root CA and a server

## High availability with Redis Sentinel
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-management-sentinel-e06308621e.md`
- Redis Sentinel provides high availability for Redis when not using [Redis Cluster]().
- Redis Sentinel also provides other collateral tasks such as monitoring,
- notifications and acts as a configuration provider for clients.
- This is the full list of Sentinel capabilities at a macroscopic level (i.e. the *big picture*):
- * **Monitoring**. Sentinel constantly checks if your master and replica instances are working as expected.

## Redis cluster specification
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-reference-cluster-spec-4594e7cd84.md`
- Welcome to the **Redis Cluster Specification**. Here you'll find information
- about the algorithms and design rationales of Redis Cluster. This document is a work
- in progress as it is continuously synchronized with the actual implementation
- Redis Cluster is a distributed implementation of Redis with the following goals in order of importance in the design:
- * High performance and linear scalability up to 1000 nodes. There are no proxies, asynchronous replication is used, and no merge operations are performed on values.

## Redis signal handling
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-reference-signals-4674d54f39.md`
- This document provides information about how Redis reacts to different POSIX signals such as `SIGTERM` and `SIGSEGV`.
- The information in this document **only applies to Redis version 2.6 or greater**.
- The `SIGTERM` and `SIGINT` signals tell Redis to shut down gracefully. When the server receives this signal,
- it does not immediately exit. Instead, it schedules
- a shutdown similar to the one performed by the [`SHUTDOWN`](/commands/shutdown) command. The scheduled shutdown starts as soon as possible, specifically as long as the

## Redis Software and Redis Open Source feature compatibility
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-enterprise-capabilities-7c69d4f952.md`
- This article describes compatibility between Redis Software features and Redis Open Source features. Version numbers indicate the minimum module version required for feature support.
- The following table shows which Redis Open Source features are supported by Redis Software and Redis Cloud.
- | Feature | Redis<br/>Software | Redis<br/>Cloud |
- |:-------|:-------------------------|:-----------------------|
- | [Search and query]() | &#x2705; Supported | &#x2705; Supported |

## RediSearch 2.6 release notes
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-release-notes-redisearch-d69ec69277.md`
- This is a maintenance release for RediSearch 2.6.
- Update urgency: `HIGH` : There is a critical bug that may affect a subset of users. Upgrade!
- This is a maintenance release for RediSearch 2.6.
- Update urgency: `HIGH`: There is a critical bug that may affect a subset of users. Upgrade!
- This is a maintenance release for RediSearch 2.6.

## Redis Stack 6.2.6 release notes
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-release-notes-redisstack-09427be94f.md`
- This is a maintenance release for Redis Stack Server 6.2.6
- Update urgency: `SECURITY`: there are security fixes in the release.
- [Docker](https://hub.docker.com/r/redis/redis-stack) | [Download](https://redis.io/downloads/#stack)
- This version includes security fixes for the **Redis** server, addressing potential vulnerabilities such as an RCE when using Lua library components, and a denial-of-service (DoS) risk due to unbounded pattern matching.
- Additionally, this maintenance release includes the latest version of **Redis Insight**.

## Redis Stack 7.2 release notes
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-release-notes-redisstack-da9228e445.md`
- This is a maintenance release for Redis Stack Server 7.2.0.
- Update urgency: `SECURITY`: there are security fixes in the release.
- [Docker](https://hub.docker.com/r/redis/redis-stack) | [Download](https://redis.io/downloads/#stack)
- This version includes security fixes for the **Redis** server, addressing potential vulnerabilities such as an RCE when using Lua library components, and a denial-of-service (DoS) risk due to malformed ACL selectors or unbounded pattern matching.
- Additionally, this maintenance release contains a bug fix to prevent crashes in cluster mode and includes the latest version of **Redis Insight**.

## Redis Cloud
Source file: `raw/sources/20260409-docs-latest-operate-rc-b1a819f9bc.md`
- With Redis Cloud, you get all of the features of Redis Software, including:
- [Try Redis Cloud](https://redis.io/try-free/) to set up your free 30MB database.
- Use the [Quick start]() to learn how to create your free database.
- You can also use [Vercel's Redis Cloud integration](https://vercel.com/marketplace/redis-cloud) or [Heroku's Redis Cloud add-on](https://elements.heroku.com/addons/rediscloud) to quickly add a Redis database to your project.
- Create and manage [Redis databases]() in the cloud.

## Manage databases
Source file: `raw/sources/20260409-docs-latest-operate-rc-databases-a3d6f243a2.md`
- Databases are the heart of any Redis Cloud deployment.
- Here's how to perform a variety of tasks:
- If you're new to Redis Cloud, see the [Quick Start]().
- These topics provide background details that can help you tailor your databases to better fit your needs.
- Redis Cloud does not support certain commands. Instead of using these commands, Redis Cloud automatically handles features like replication and lets you [manage your database]() from the [Redis Cloud console](https://cloud.redis.io/) or [Redis Cloud REST API]().

## Active-Active Redis
Source file: `raw/sources/20260409-docs-latest-operate-rc-databases-active-active-432b898753.md`
- Active-Active databases store data across multiple regions and availability zones.  This improves scalability, performance, and availability, especially when compared to standalone databases.
- To create Active-Active databases, you need a Redis Cloud Pro subscription that enables Active-Active Redis and defines the regions for each copy of your databases. See [Create an Active-Active database]() for instructions.
- Active-Active databases are distributed across multiple regions (geo-distribution).  This improves performance by reducing latency for nearby users and improves availability by protecting against data loss in case of network or resource failure.
- Active-Active databases allow read and write operations in each copy.  Each copy eventually reflects changes made in other copies ([eventual consistency]()).  Conflict-free replicated data types (CRDTs) synchronize read and write operations between copies.  CRDTs ensure consistency and resolve conflicts.
- Active-Active databases use TLS to synchronize data between regions.  You can also use TLS to encrypt client connections.  See [Transport Layer Security (TLS)]() for more information.

## Active-Active Redis applications
Source file: `raw/sources/20260409-docs-latest-operate-rc-databases-active-active-develop-4ce7517986.md`
- developers have to think about race conditions and complex combinations
- of events under geo-failovers and cross-region write conflicts. In Redis Cloud, Active-Active databases
- simplify developing such applications by directly using built-in smarts
- for handling conflicting writes based on the data type in use. Instead
- of depending on just simplistic "last-writer-wins" type conflict

## Application failover with Active-Active databases
Source file: `raw/sources/20260409-docs-latest-operate-rc-databases-active-active-develop-app-failover-active-activ-07dfa5e532.md`
- An application deployed with an Active-Active database connects to a replica of the database that is geographically nearby.
- If that replica is not available, the application can failover to a remote replica, and failback again if necessary.
- In this article we explain how this process works.
- For other disaster recovery strategies including network-based, proxy-based, and client library approaches, see [Active-Active disaster recovery strategies]().
- Active-Active connection failover can improve data availability, but can negatively impact data consistency.

## Develop applications with Active-Active databases
Source file: `raw/sources/20260409-docs-latest-operate-rc-databases-active-active-develop-develop-for-aa-f76dcbcd0a.md`
- Application developers may have to understand a large number of race
- conditions between updates to various sites, network, and cluster
- failures that could reorder the events and change the outcome of the
- updates performed across geo-distributed writes.
- Active-Active databases (formerly known as CRDB) are geo-distributed databases that span multiple Redis Software clusters.

## High availability and replication
Source file: `raw/sources/20260409-docs-latest-operate-rc-databases-configuration-high-availability-5c8f8ee690.md`
- Database replication helps ensure high availability.
- When replication is enabled, your dataset is duplicated to create a replica that is synchronized with the primary dataset.
- Replication allows for automatic failover and greater fault tolerance.  It can prevent data loss in the event of a hardware or zone failure.
- Redis Cloud supports three levels of replication:
- Your replication options depend on your [subscription plan]():

## Create a Pro database with a new subscription
Source file: `raw/sources/20260409-docs-latest-operate-rc-databases-create-database-create-pro-database-new-481f182fbd.md`
- Redis Cloud Pro supports more databases, larger databases, greater throughput, and unlimited connections compared to Redis Cloud Essentials. Redis Cloud Pro databases are perfect for teams building mission-critical systems in the cloud.
- 3. Select the type of [subscription]() you need. For this guide, select **Pro**.
- This guide shows how to create a Pro database with a new subscription.
- After you select **Pro**, the **Database settings** section will appear.
- You can choose to create your database in one of two ways:

## RDS Proxy setup for RDI
Source file: `raw/sources/20260409-docs-latest-operate-rc-databases-rdi-rds-proxy-dd1c688f90.md`
- We do not recommend using RDS Proxy for RDI connections. The [Lambda function approach]() provides better failover handling and is the recommended solution for production environments.
- Additionally, RDS Proxy does not work with RDS PostgreSQL and Aurora PostgreSQL because it does not support PostgreSQL logical replication.
- Only use RDS Proxy if you have specific requirements that necessitate it.
- RDS Proxy is a fully managed, highly available database proxy for Amazon RDS. While it can be used with RDI, we recommend the Lambda function approach instead for the following reasons:
- If you still need to use RDS Proxy, follow the instructions below.

## Prepare source database
Source file: `raw/sources/20260409-docs-latest-operate-rc-databases-rdi-setup-ff74b71972.md`
- 1. In the [Redis Cloud console](https://cloud.redis.io/), go to your target database and select the **Data Pipeline** tab.
- 1. Select your source database type. The following database types are supported:
- 1. If you know the size of your source database, enter it into the **Source dataset size** field.
- 1. Under **Setup connectivity**, save the provided ARN and extract the AWS account ID for the account associated with your Redis Cloud cluster from it.
- The AWS account ID is the string of numbers after `arn:aws:iam::` in the ARN. For example, if the ARN is `arn:aws:iam::123456789012:role/redis-data-pipeline`, the AWS account ID is `123456789012`.

## Develop highly available and resilient apps with Redis Cloud
Source file: `raw/sources/20260409-docs-latest-operate-rc-resilient-apps-0dec2cec19.md`
- You can set up your Redis Cloud databases and Redis Client libraries to ensure your app re-connects to your database after unexpected failover events or network outages and minimize data losses.
- These settings can be turned on when you create or edit your database.
- Enabling [Data persistence]() allows Redis to save your data to a durable storage medium, such as a disk, to ensure data availability in case of memory loss or system failure.
- Redis Cloud supports the following data persistence options:
- Append-only files provide greater protection than snapshots at the cost of resources and recovery time.

## Manage subscriptions
Source file: `raw/sources/20260409-docs-latest-operate-rc-subscriptions-dc579d357c.md`
- This page helps you manage your Redis Cloud subscriptions; it briefly compares available plans and shows where to find help with common tasks.
- As of April 2024, Redis Cloud supports the following subscription plans:
- | Feature | Redis Cloud Essentials (free) | Redis Cloud Essentials (paid) | Essentials with Redis Flex | Redis Cloud Pro |
- | Memory size | 30 MB | 250 MB-12 GB | 1 GB-100GB | 50 TB |
- | Concurrent connections | 30 | 256-10000 | 1024-10000 | Unlimited |

## Troubleshoot Redis Cloud issues with the Redis Cloud knowledge base
Source file: `raw/sources/20260409-docs-latest-operate-rc-troubleshoot-985e781b8c.md`
- The [Redis Cloud knowledge base](https://support.redislabs.com/hc/en-us/categories/26174183986450-Redis-Cloud) provides articles to help you troubleshoot common Redis Cloud issues.

## Recover a failed cluster
Source file: `raw/sources/20260409-docs-latest-operate-rs-clusters-cluster-recovery-237d5d834a.md`
- you must use the cluster configuration file and database data to recover the cluster.
- For cluster recovery in a Kubernetes deployment, see [Recover a Redis Enterprise cluster on Kubernetes]().
- To recover a cluster and re-create it as it was before the failure,
- you must restore the cluster configuration `ccs-redis.rdb` to the cluster nodes.
- To recover databases in the new cluster, you must restore the databases from persistence files such as backup files, append-only files (AOF), or RDB snapshots.

## Rack-zone awareness in Redis Software
Source file: `raw/sources/20260409-docs-latest-operate-rs-clusters-configure-rack-zone-awareness-da29d24f56.md`
- When you enable rack-zone awareness in a Redis Software cluster, you assign
- a [rack-zone ID](#rack-zone-id-rules) to each node. This ID is used to map the node to a
- physical rack or logical zone. The cluster can then ensure that primary shards, corresponding replica shards, and associated endpoints are placed on [nodes in different racks or zones](#node-layout-guidelines).
- In the event of a rack or zone failure, the replicas and endpoints in the remaining racks and zones are promoted. This ensures high availability when a rack or zone fails.
- There is no limitation on the number of racks and zones per cluster. Each

## Maintenance mode for cluster nodes
Source file: `raw/sources/20260409-docs-latest-operate-rs-clusters-maintenance-mode-90132ae1a5.md`
- Use maintenance mode to prevent data loss during hardware patching or operating system maintenance on Redis Software servers. When maintenance mode is on, all shards move off of the node under maintenance and migrate to another available node.
- When you activate maintenance mode, Redis Software does the following:
- 1. Checks whether the cluster has enough active nodes to maintain quorum if one goes down. If taking a node offline would cause quorum loss, maintenance mode will not activate.
- This check does not consider if other nodes are already in maintenance mode. Do not put the majority of nodes into maintenance mode and restart them simultaneously, as this can cause the cluster to lose quorum and lead to data loss.
- 1. If no maintenance mode snapshots already exist or if you use `overwrite_snapshot` when you activate maintenance mode, Redis Software creates a new node snapshot that records the node's shard and endpoint configuration.

## Benchmarking Redis Software
Source file: `raw/sources/20260409-docs-latest-operate-rs-clusters-optimize-memtier-benchmark-28666365bf.md`
- Use the `memtier_benchmark` tool to perform a performance benchmark of Redis Software.
- For help with the prerequisites, see the [Redis Software quickstart]().
- It is recommended to run memtier_benchmark on a separate node that is
- not part of the cluster being tested. If you run it on a node of the
- cluster, be mindful that it affects the performance of both the

## Cluster environment optimization
Source file: `raw/sources/20260409-docs-latest-operate-rs-clusters-optimize-optimization-238c847e6d.md`
- performance. As part of this process, Redis Software examines usage
- and load to adjust its runtime configuration. Depending
- on your specific usage and load, Redis Software might take some
- To ensure optimal performance, you must run your workload several times
- and for a long duration until performance stabilizes.

## OSS Cluster API
Source file: `raw/sources/20260409-docs-latest-operate-rs-clusters-optimize-oss-cluster-api-400afacf23.md`
- You can use the Redis OSS Cluster API along with other Redis Enterprise Software high availability
- to get high performance with low latency
- and let applications stay current with cluster topology changes, including add node, remove node, and node failover.
- For more about working with the OSS Cluster API in Redis Software, see [Enable OSS Cluster API]().
- To learn how to enable OSS Cluster API in Redis Cloud, see [Clustering Redis databases]().

## Remove a node
Source file: `raw/sources/20260409-docs-latest-operate-rs-clusters-remove-node-402ad45ba4.md`
- You can configure [email alerts from the cluster]() to notify you of cluster changes, including when a node is removed.
- Read through these explanations thoroughly before taking
- Permanently removing a node means you are decreasing cluster capacity.
- Before trying to remove a node, make sure that the cluster has enough
- capacity for all resources without that node, otherwise you cannot remove the node.

## Application failover with Active-Active databases
Source file: `raw/sources/20260409-docs-latest-operate-rs-databases-active-active-develop-app-failover-active-activ-35fe8dc17d.md`
- An application deployed with an Active-Active database connects to a replica of the database that is geographically nearby.
- If that replica is not available, the application can failover to a remote replica, and failback again if necessary.
- In this article we explain how this process works.
- For other disaster recovery strategies including network-based, proxy-based, and client library approaches, see [Active-Active disaster recovery strategies]().
- Active-Active connection failover can improve data availability, but can negatively impact data consistency.

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

## Application-based disaster recovery
Source file: `raw/sources/20260409-docs-latest-operate-rs-databases-active-active-disaster-recovery-application-bas-bb8b5f7299.md`
- For complete control over failover and failback, you can implement disaster recovery mechanisms directly in the application server.
- For more information, see [Application failover with Active-Active databases]().

## Client library-based disaster recovery
Source file: `raw/sources/20260409-docs-latest-operate-rs-databases-active-active-disaster-recovery-client-library--e933d3b751.md`
- Some Redis client libraries support geographic failover and failback. These client libraries monitor all Active-Active database members and instantiate connections for all endpoints in advance to allow faster failover and failback.
- The following diagram shows a client library-based disaster recovery approach:
- <img src="../../../../../../images/active-active-disaster-recovery/client-library.svg" alt="Diagram of client libraries routing traffic to Active-Active database members" width="50%">
- The following diagram shows a client-based disaster recovery approach that also uses [connection pooling]():
- <img src="../../../../../../images/active-active-disaster-recovery/client-library-connection-pool.svg" alt="Diagram of client libraries with connection pooling routing traffic to Active-Active database members" width="50%">

## Disaster recovery strategies for Active-Active databases
Source file: `raw/sources/20260409-docs-latest-operate-rs-databases-active-active-disaster-recovery-f825c3f717.md`
- An application deployed with an Active-Active database connects to a database member that is geographically nearby. If that database member becomes unavailable, the application can fail over to a secondary Active-Active database member, and fail back to the original database member again if it recovers.
- However, because Active-Active Redis databases do not have a built-in [failover](https://en.wikipedia.org/wiki/Failover) or failback mechanism for application connections, you must implement one of the following [disaster recovery strategies](#disaster-recovery-strategies).
- Depending on your requirements for Recovery Point Objective, Recovery Time Objective, consistency, scalability, resources, maintainability, and other factors, choose one of the following strategies to fail over to a secondary Active-Active member or fail back to the primary member:
- When implementing a disaster recovery strategy for an Active-Active database, consider the following:
- Depending on the failover strategy, you can use the following health checks to detect Active-Active database failures and determine whether to fail over to a secondary Active-Active member, or fail back to the primary member after the preferred endpoint is back online.

## Network-based disaster recovery
Source file: `raw/sources/20260409-docs-latest-operate-rs-databases-active-active-disaster-recovery-network-based-44ccacd896.md`
- For cross-region availability, you can use a global traffic manager or a global load balancer. Both help route traffic across regions, but they work in different ways:
- If your deployment does not require cross-region availability, you can use a regional load balancer to grant cross-zone redundancy.
- For cross-region availability, you can use a global traffic manager or a global load balancer.
- A global traffic manager acts as an intelligent DNS server that directs clients to healthy endpoints based on distance, latency, or availability. You should configure the traffic manager to route to the local region first and fail over to other regions if an issue occurs.
- The following diagram shows how a global traffic manager with DNS resolution routes traffic:

## Proxy-based disaster recovery
Source file: `raw/sources/20260409-docs-latest-operate-rs-databases-active-active-disaster-recovery-proxy-based-98e3442a8c.md`
- If you add a lightweight proxy software component between the clients and the Active-Active database, applications can dynamically route requests to the optimal endpoint.
- If concurrent access across replicas must be avoided in every scenario, you can use a centralized proxy with a standby proxy instance for high availability.
- The following diagram shows a centralized proxy architecture with a standby proxy instance:
- <img src="../../../../../../images/active-active-disaster-recovery/centralized-proxy.svg" alt="Diagram of a centralized proxy architecture with active and standby proxy instances routing to Active-Active database members" width="50%">
- To reduce latency and improve scalability, you can use a proxy co-located in the application server.

## Syncer process
Source file: `raw/sources/20260409-docs-latest-operate-rs-databases-active-active-syncer-6197ab1fdb.md`
- Each node in a cluster containing an instance of an Active-Active database hosts a process called the syncer.
- 1. Connects to the proxy on another participating cluster
- 1. Reads data from that database instance
- 1. Writes the data to the local cluster's primary(master) shard
- Some replication capabilities are also included in [Redis Open Source]().

## Configure database defaults
Source file: `raw/sources/20260409-docs-latest-operate-rs-databases-configure-db-defaults-29bcb6e552.md`
- Database defaults are cluster-wide policies that determine default settings when creating new databases.
- To edit default database configuration using the Cluster Manager UI:
- 1. On the **Databases** screen, select  to open a list of additional actions.
- 1. Configure [database defaults](#db-defaults).
- You can choose a predefined endpoint configuration to use the recommended database proxy and shards placement policies for your use case. If you want to set these policies manually instead, select **Custom** endpoint configuration.

## Configure proxy policy
Source file: `raw/sources/20260409-docs-latest-operate-rs-databases-configure-proxy-policy-a0b19646c2.md`
- through a proxy process that manages and optimizes access to shards
- within the Redis SoftwareÂ cluster. Each node contains a single proxy process.
- Each proxy can be active and take incoming traffic or it can be passive
- A database can have one of the following proxy policies:
- | Proxy policy | Description | Recommended use cases | Advantages | Disadvantages |

## Configure high availability for replica shards
Source file: `raw/sources/20260409-docs-latest-operate-rs-databases-configure-replica-ha-5d9c4520ba.md`
- When you enable [database replication](),
- Redis Software creates a replica of each primary shard.  The replica shard will always be
- located on a different node than the primary shard to make your data highly available.  If the primary shard
- fails or if the node hosting the primary shard fails, then the replica is promoted to primary.
- Without replica high availability (_replica\_ha_) enabled, the promoted primary shard becomes a single point of failure

## Supported connection clients
Source file: `raw/sources/20260409-docs-latest-operate-rs-databases-connect-supported-clients-browsers-ab1b5d3778.md`
- To connect an application to a Redis database hosted by Redis Software, use a [client library]() appropriate for your programming language.
- You can also use the `redis-cli` utility to connect to a database from the command line.
- For examples of each approach, see the [Redis Software quickstart]().
- Note: You cannot use client libraries to configure Redis Software.  Instead, use:
- We recommend the following clients when using a [discovery service]() based on the Redis Sentinel API:

## Test client connection
Source file: `raw/sources/20260409-docs-latest-operate-rs-databases-connect-test-client-connectivity-e59531a23f.md`
- the cluster, you should verify clients can connect to the
- 1. After you [create a Redis database](), copy the database endpoint, which contains the cluster name (FQDN).
- To view and copy endpoints for a database in the cluster, see the databaseâs **Configuration > General** section in the Cluster Manager UI:
- 1. Try to connect to the database endpoint from your client of choice,
- 1. If the database does not respond, try to connect to the database

## Durability and high availability
Source file: `raw/sources/20260409-docs-latest-operate-rs-databases-durability-ha-7f699607a3.md`
- When you [replicate your database](), each database instance (primary shard) is copied to a replica shard. When a primary shard fails, the cluster automatically promotes a replica shard to primary.
- [Clustering]() (or sharding) breaks your database into individual instances (shards) and spreads them across several nodes. Clustering lets you add resources to your cluster to scale your database and prevents node failures from causing availability loss.
- [Database persistence]() gives your database durability against process or server failures by saving data to disk at set intervals.
- [Active-Active Redis Software databases]() allow reading and writing to the same dataset from multiple clusters in different geographic locations. This increases the durability of your database by reducing the likelihood of data or availability loss. It also reduces data access latency by serving requests from the nearest cluster.
- [Rack-zone awareness]() maps each node in your Redis Software cluster to a physical rack or logical zone. The cluster uses this information to distribute primary shards and their replica shards in different racks or zones. This ensures data availability if a rack or zone fails.

## Discovery service
Source file: `raw/sources/20260409-docs-latest-operate-rs-databases-durability-ha-discovery-service-b2703b32ae.md`
- used when connecting to Redis Software databases. When used
- in conjunction with Redis Software's other high availability
- features, the Discovery Service assists an application scope with
- topology changes such as adding, removing of nodes, node failovers and
- so on. It does this by providing your application with the ability to

## Database replication
Source file: `raw/sources/20260409-docs-latest-operate-rs-databases-durability-ha-replication-e154165c4c.md`
- When replication is enabled, your dataset is replicated to a replica shard,
- which is constantly synchronized with the primary shard. If the primary
- shard fails, an automatic failover happens and the replica shard is promoted.  That is, it becomes the new primary shard.
- When the old primary shard recovers, it becomes
- the replica shard of the new primary shard. This auto-failover mechanism

## Replica Of geo-distributed Redis
Source file: `raw/sources/20260409-docs-latest-operate-rs-databases-import-export-replica-of-24981eb10c.md`
- to replicas of the dataset from different geographical locations.
- The Redis Software implementation of active-passive replication is called Replica Of.
- In Replica Of, an administrator designates a database as a replica (destination) of one or more databases (sources).
- After the initial data load from source to destination is completed,
- all write commands are synchronized from the sources to the destination.

## Database memory limits
Source file: `raw/sources/20260409-docs-latest-operate-rs-databases-memory-performance-memory-limit-c6394148e6.md`
- database can reach in the cluster, across all database replicas and
- shards, including both primary and replica shards.
- If the total size of the database in the cluster reaches the memory
- Factors to consider when sizing your database:
- Additional factors for Active-Active databases:

## Migrate database shards
Source file: `raw/sources/20260409-docs-latest-operate-rs-databases-migrate-shards-782c3d6138.md`
- To migrate database shards to other nodes in the cluster, you can use the [`rladmin migrate`]() command or [REST API requests]().
- Migrate database shards to a different node in the following scenarios:
- For databases without replication, the migrated shard will not be available until the migration is done.
- Connected clients shouldn't be disconnected in either case.
- If too many primary shards are placed on the same node, it can impact database performance.

## Upgrade a Redis Software database
Source file: `raw/sources/20260409-docs-latest-operate-rs-installing-upgrading-upgrading-upgrade-database-3f0e4140ae.md`
- When you upgrade an existing database, it uses the latest bundled Redis version unless you specify a different version with the `redis_version` option in the [REST API]() or [`rladmin upgrade db`]().
- To view available Redis database versions:
- The default Redis database version differs between Redis Software releases as follows:
- | Redis<br />Software | Bundled Redis<br />DB versions | Default DB version<br />(upgraded/new databases) |
- | 8.0.10 | 6.2, 7.2, 7.4, 8.0, 8.2, 8.4 | 8.4 |

## Check database availability for monitoring and load balancers
Source file: `raw/sources/20260409-docs-latest-operate-rs-monitoring-db-availability-6258e5be93.md`
- You can use the [database availability API]() to verify whether a Redis Software database is available to perform read and write operations and can respond to queries from client applications. Load balancers and automated monitoring tools can use this API to monitor database availability.
- Database availability does not guarantee data availability.
- To monitor database availability, use the following REST API request:
- If the OSS Cluster API is enabled, this request verifies all endpoints for this database are available. Otherwise, it verifies the database has at least one available endpoint.
- Returns the status code 200 OK if the database is available.

## Monitoring v2
Source file: `raw/sources/20260409-docs-latest-operate-rs-monitoring-metrics-stream-engine-49b48eae80.md`
- The new metrics stream engine is generally available as of [Redis Software version 8.0]().
- To integrate Redis Software metrics into your monitoring environment, see the following integration guides:
- For a detailed tutorial to deploy a complete monitoring stack with Prometheus and Grafana, see [Redis Software Observability with Prometheus and Grafana](https://redis.io/learn/operate/observability/redis-software-prometheus-and-grafana).
- Filter [Libraries and tools]() by "observability" for additional tools and guides.
- For a list of all available v2 metrics, see [Prometheus metrics v2]().

## Configure cluster DNS
Source file: `raw/sources/20260409-docs-latest-operate-rs-networking-cluster-dns-2d9134123f.md`
- By default, Redis Software deployments use DNS to communicate between nodes.  You can also use the [Discovery Service](), which uses IP addresses to connect and complies with the [Redis Sentinel API]() supported by Redis Open Source.
- Each node in a Redis Software cluster includes a small DNS server to manage internal functions, such as high availability, automatic failover, automatic migration, and so on.
- Nodes should only run the DNS server included with the software.  Running additional DNS servers can lead to unexpected behavior.
- Whether you're administering Redis Software or accessing databases, there are two ways to connect:
- Because apps and other client connections rely on the URL (rather than the address), they do not need to be modified when topology changes.

## Set up a Redis Software cluster behind a load balancer
Source file: `raw/sources/20260409-docs-latest-operate-rs-networking-cluster-lba-setup-b5e40a4ea6.md`
- Normally, Redis Software uses DNS to provide dynamic database endpoints.
- A DNS name such as `redis-12345.clustername.domain` gives clients access to the database resource:
- When DNS cannot be used, clients can still connect to the endpoints with the IP addresses,
- but the benefits of load balancing and automatic updates to IP addresses won't be available.
- You can compensate for the lack of DNS resolution with load balancers that can expose services and provide service discovery.

## AWS Route53 DNS management
Source file: `raw/sources/20260409-docs-latest-operate-rs-networking-configuring-aws-route53-dns-redis-enterprise-82067dae9f.md`
- Route 53 is a scalable DNS service by Amazon Web Service (AWS). It routes user traffic to AWS resources and external sites, offering DNS health checks, traffic management, and failover capabilities. It's integral for high-availability architectures and also provides domain registration services.
- Creating a hosted zone in Amazon Route 53 is a foundational step in managing your domain's DNS settings.
- A hosted zone functions as a container for the DNS records of a specific domain. To create one, you first need to:
- 4. Enter your domain name, and choose public hosted zone
- The hosted zone provides you with a set of Name Server (NS) records, which you will need to update at your domain registrar. This process effectively delegates the DNS management of your domain to Route 53, allowing you to create, update, and manage DNS records for your domain within the AWS ecosystem.

## rladmin
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-cli-utilities-rladmin-b52b67ea6f.md`
- Although you can use the Cluster Manager UI for some of these tasks, others are unique to the `rladmin` command-line tool.
- 1. Sign in to a Redis Software node with an account that is a member of the **redislabs** group.
- The `rladmin` binary is located in `/opt/redislabs/bin`. If you don't have this directory in your `PATH`, you may want to add it. Otherwise, you can use `bash -l <username>` to sign in as a user with permissions for that directory.
- If the CLI does not recognize the `rladmin` command,
- run this command to load the necessary configuration first: <nobr>`bash -l`</nobr>

## rladmin cluster config
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-cli-utilities-rladmin-cluster-config-0a2fdfbd9f.md`
- | Parameter | Type/Value | Description |
- |-----------|------------|-------------|
- | audit_address | string | TCP/IP address where a listener can capture [audit event notifications]() |
- | audit_port | string | Port where a listener can capture [audit event notifications]() |
- | audit_protocol | `tcp`<br/>`local` | Protocol used for [audit event notifications]()<br/>For production systems, only `tcp` is supported. |

## rladmin failover
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-cli-utilities-rladmin-failover-b0c17e3f3a.md`
- Fails over one or more primary (also known as master) shards of a database and promotes their respective replicas to primary shards.
- | Parameter | Type/Value                     | Description                                                                                   |
- |-----------|--------------------------------|-----------------------------------------------------------------------------------------------|
- | db        | db:\<id\><br /> name           | Fail over shards for the specified database                                                   |
- | shard     | one or more primary shard IDs  | Primary shard or shards to fail over                                                          |

## rladmin help
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-cli-utilities-rladmin-help-db982b9fd8.md`
- Lists all options and parameters for `rladmin` commands.
- |  command   |  Display help for this `rladmin` command (optional)  |
- Returns a list of available `rladmin` commands.
- If a `command` is specified, returns a list of all the options and parameters for that `rladmin` command.

## rladmin info
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-cli-utilities-rladmin-info-76c27c2ffe.md`
- Shows the current configuration of specified databases, proxies, clusters, or nodes.
- Lists the current configuration for the cluster.
- Returns the current configuration for the cluster.
- Shows the current configuration for databases.
- | db:id     | ID of the specified database (optional) |

## rladmin migrate
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-cli-utilities-rladmin-migrate-55b52205db.md`
- Moves Redis Software shards or endpoints to a new node in the same cluster.
- For more information about shard migration use cases and considerations, see [Migrate database shards]().
- Moves all primary shards of a specified database or node to a new node in the same cluster.
- | Parameter                     | Type/Value             | Description                                                                     |
- |-------------------------------|------------------------|---------------------------------------------------------------------------------|

## rladmin node maintenance_mode
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-cli-utilities-rladmin-node-maintenance-mode-e0753fae36.md`
- Configures [quorum-only mode]() on a node.
- Migrates shards out of the node and turns the node into a quorum node to prevent shards from returning to it.
- | Parameter             | Type/Value                     | Description                                                                               |
- |-----------------------|--------------------------------|-------------------------------------------------------------------------------------------|
- | node                  | integer                        | Turns the specified node into a quorum node                                              |

## rladmin node snapshot
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-cli-utilities-rladmin-node-snapshot-44cc71eaf2.md`
- Manages snapshots of the configuration of a node's shards and endpoints.
- You can create node snapshots and use them to restore the node's shards and endpoints to a configuration from a previous point in time. If you restore a node from a snapshot (for example, after an event such as failover or maintenance), the node's shards have the same placement and roles as when the snapshot was created.
- Creates a snapshot of a node's current configuration, including the placement of shards and endpoints on the node and the shards' roles.
- | Parameter             | Type/Value                     | Description                                                                               |
- |-----------------------|--------------------------------|-------------------------------------------------------------------------------------------|

## rladmin placement
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-cli-utilities-rladmin-placement-6385762ade.md`
- Configures the shard placement policy for a specified database.
- | Parameter | Type/Value                     | Description                                                                                   |
- |-----------|--------------------------------|-----------------------------------------------------------------------------------------------|
- | db        | db:\<id\><br /> name           | Configures shard placement for the specified database                                         |
- | dense     |                                | Places new shards on the same node as long as it has resources                                |

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

## Cluster management commands compatibility
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-compatibility-commands-cluster-36c86887f4.md`
- [Clustering in Redis Software]() and [Redis Cloud]() differs from the [Redis Open Source cluster]() and works with all standard Redis clients.
- Redis Software blocks most [cluster commands](?group=cluster). If you try to use a blocked cluster command, it returns an error.
- | Command | Redis<br />Software | Redis<br />Cloud | Notes |
- |:--------|:----------------------|:-----------------|:------|
- | [ASKING]() | <span title="Not supported">&#x274c; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> | <span title="Not supported">&#x274c; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> |  |

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

## Real-time metrics
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-metrics-722cd55934.md`
- In the Redis Software Cluster Manager UI, you can see real-time performance metrics for clusters, nodes, databases, and shards, and configure alerts that send notifications based on alert parameters. Select the **Metrics** tab to view the metrics for each component. For more information, see [Monitoring with metrics and alerts]().
- See the following topics for metrics definitions:
- To collect and display metrics data from your databases and other cluster components,
- you can connect your [Prometheus](https://prometheus.io/) and [Grafana](https://grafana.com/) server to your Redis Software cluster. We recommend you use Prometheus and Grafana to view metrics history and trends.
- See [Prometheus integration]() to learn how to connect Prometheus and Grafana to your Redis Software database.

## Cluster object
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-objects-cluster-82ff8f034c.md`
- An API object that represents the cluster.
- | alert_settings | [alert_settings]() object | Cluster and node alert settings |
- | <span class="break-all">availability_lag_tolerance_ms</span> | integer (default: 100) | The maximum replication lag in milliseconds tolerated between source and replicas during [lag-aware database availability checks](). |
- | bigstore_driver | "speedb"<br />"rocksdb" | Storage engine for [Redis Flex or Auto Tiering]() |
- | <span class="break-all">cluster_ssh_public_key</span> | string | Cluster's autogenerated SSH public key |

## Cluster settings object
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-objects-cluster-settings-f7026010bb.md`
- | acl_pubsub_default | `resetchannels`<br /> `allchannels` | Default pub/sub ACL rule for all databases in the cluster:<br />â¢`resetchannels` blocks access to all channels (restrictive)<br />â¢`allchannels` allows access to all channels (permissive) |
- | auto_recovery | boolean (default: false) | Defines whether to use automatic recovery after shard failure |
- | automatic_node_offload | boolean (default: true) | Defines whether the cluster will automatically migrate shards from a node, in case the node is overbooked |
- | <span class="break-all">bigstore_migrate_node_threshold</span> | integer | Minimum free memory (excluding reserved memory) allowed on a node before automatic migration of shards from it to free more memory |
- | <span class="break-all">bigstore_migrate_node_threshold_p</span> | integer | Minimum free memory (excluding reserved memory) allowed on a node before automatic migration of shards from it to free more memory |

## Services configuration object
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-objects-services-configuration-fdaf9c9d40.md`
- | alert_mgr | [alert_mgr]() object | Whether to enable/disable the alert manager processes |
- | call_home_agent | [call_home_agent]() object | Whether to enable/disable the call_home_agent process, which sends daily usage statistics to Redis |
- | cm_server | [cm_server]() object | Whether to enable/disable the CM server |
- | crdb_coordinator | [crdb_coordinator]() object | Whether to enable/disable the CRDB coordinator process |
- | crdb_worker | [crdb_worker]() object | Whether to enable/disable the CRDB worker processes |

## Sentinel service object
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-objects-services-configuration-sentin-dfd970bf53.md`
- | operating_mode | 'disabled'<br />'enabled' | Enable/disable the Sentinel service process |

## Permissions
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-permissions-401370346e.md`
- Some Redis Software [REST API requests]() may require the user to have specific permissions.
- Administrators can assign a predefined role to a user with the [Cluster Manager UI]() or a [<nobr>`PUT /v1/users/{uid}`</nobr> API request]() to grant necessary permissions to them.
- Each user in the cluster has an assigned cluster management role, which defines the permissions granted to the user.
- | <a name="admin-role"></a>admin | [add_cluster_module](#add_cluster_module), [cancel_cluster_action](#cancel_cluster_action), [cancel_node_action](#cancel_node_action), [config_ldap](#config_ldap), [config_ocsp](#config_ocsp), [config_sso](#config_sso), [create_bdb](#create_bdb), [create_crdb](#create_crdb), [create_ldap_mapping](#create_ldap_mapping), [create_new_user](#create_new_user), [create_redis_acl](#create_redis_acl), [create_role](#create_role), [delete_bdb](#delete_bdb), [delete_cluster_module](#delete_cluster_module), [delete_crdb](#delete_crdb), [delete_ldap_mapping](#delete_ldap_mapping), [delete_redis_acl](#delete_redis_acl), [delete_role](#delete_role), [delete_user](#delete_user), [edit_bdb_module](#edit_bdb_module), [failover_shard](#failover_shard), [flush_crdb](#flush_crdb), [install_new_license](#install_new_license), [manage_cluster_modules](#manage_cluster_modules), [migrate_shard](#migrate_shard), [purge_instance](#purge_instance), [reset_bdb_current_backup_status](#reset_bdb_current_backup_status), [reset_bdb_current_export_status](#reset_bdb_current_export_status), [reset_bdb_current_import_status](#reset_bdb_current_import_status), [start_bdb_export](#start_bdb_export), [start_bdb_import](#start_bdb_import), [start_bdb_recovery](#start_bdb_recovery), [start_cluster_action](#start_cluster_action), [start_node_action](#start_node_action), [test_ocsp_status](#test_ocsp_status), [update_bdb](#update_bdb), [update_bdb_alerts](#update_bdb_alerts), [update_bdb_with_action](#update_bdb_with_action), [update_cluster](#update_cluster), [update_crdb](#update_crdb), [update_ldap_mapping](#update_ldap_mapping), [update_node](#update_node), [update_proxy](#update_proxy), [update_redis_acl](#update_redis_acl), [update_role](#update_role), [update_user](#update_user), [view_all_bdb_stats](#view_all_bdb_stats), [view_all_bdbs_alerts](#view_all_bdbs_alerts), [view_all_bdbs_info](#view_all_bdbs_info), [view_all_ldap_mappings_info](#view_all_ldap_mappings_info), [view_all_metrics](#view_all_metrics), [view_all_nodes_alerts](#view_all_nodes_alerts), [view_all_nodes_checks](#view_all_nodes_checks), [view_all_nodes_info](#view_all_nodes_info), [view_all_nodes_stats](#view_all_nodes_stats), [view_all_proxies_info](#view_all_proxies_info), [view_all_redis_acls_info](#view_all_redis_acls_info), [view_all_roles_info](#view_all_roles_info), [view_all_shard_stats](#view_all_shard_stats), [view_all_users_info](#view_all_users_info), [view_bdb_alerts](#view_bdb_alerts), [view_bdb_info](#view_bdb_info), [view_bdb_recovery_plan](#view_bdb_recovery_plan), [view_bdb_stats](#view_bdb_stats), [view_cluster_alerts](#view_cluster_alerts), [view_cluster_info](#view_cluster_info), [view_cluster_keys](#view_cluster_keys), [view_cluster_modules](#view_cluster_modules), [view_cluster_stats](#view_cluster_stats), [view_crdb](#view_crdb), [view_crdb_list](#view_crdb_list), [view_crdb_task](#view_crdb_task), [view_crdb_task_list](#view_crdb_task_list), [view_debugging_info](#view_debugging_info), [view_endpoint_stats](#view_endpoint_stats), [view_ldap_config](#view_ldap_config), [view_ldap_mapping_info](#view_ldap_mapping_info), [view_license](#view_license), [view_logged_events](#view_logged_events), [view_node_alerts](#view_node_alerts), [view_node_check](#view_node_check), [view_node_info](#view_node_info), [view_node_stats](#view_node_stats), [view_ocsp_config](#view_ocsp_config), [view_ocsp_status](#view_ocsp_status), [view_proxy_info](#view_proxy_info), [view_redis_acl_info](#view_redis_acl_info), [view_redis_pass](#view_redis_pass), [view_role_info](#view_role_info), [view_shard_stats](#view_shard_stats), [view_sso](#view_sso), [view_status_of_all_node_actions](#view_status_of_all_node_actions), [view_status_of_cluster_action](#view_status_of_cluster_action), [view_status_of_node_action](#view_status_of_node_action), [view_user_info](#view_user_info) |
- | <a name="cluster-member-role"></a>cluster_member | [create_bdb](#create_bdb), [create_crdb](#create_crdb), [delete_bdb](#delete_bdb), [delete_crdb](#delete_crdb), [edit_bdb_module](#edit_bdb_module), [failover_shard](#failover_shard), [flush_crdb](#flush_crdb), [migrate_shard](#migrate_shard), [purge_instance](#purge_instance), [reset_bdb_current_backup_status](#reset_bdb_current_backup_status), [reset_bdb_current_export_status](#reset_bdb_current_export_status), [reset_bdb_current_import_status](#reset_bdb_current_import_status), [start_bdb_export](#start_bdb_export), [start_bdb_import](#start_bdb_import), [start_bdb_recovery](#start_bdb_recovery), [update_bdb](#update_bdb), [update_bdb_alerts](#update_bdb_alerts), [update_bdb_with_action](#update_bdb_with_action), [update_crdb](#update_crdb), [view_all_bdb_stats](#view_all_bdb_stats), [view_all_bdbs_alerts](#view_all_bdbs_alerts), [view_all_bdbs_info](#view_all_bdbs_info), [view_all_metrics](#view_all_metrics), [view_all_nodes_alerts](#view_all_nodes_alerts), [view_all_nodes_checks](#view_all_nodes_checks), [view_all_nodes_info](#view_all_nodes_info), [view_all_nodes_stats](#view_all_nodes_stats), [view_all_proxies_info](#view_all_proxies_info), [view_all_redis_acls_info](#view_all_redis_acls_info), [view_all_roles_info](#view_all_roles_info), [view_all_shard_stats](#view_all_shard_stats), [view_bdb_alerts](#view_bdb_alerts), [view_bdb_info](#view_bdb_info), [view_bdb_recovery_plan](#view_bdb_recovery_plan), [view_bdb_stats](#view_bdb_stats), [view_cluster_alerts](#view_cluster_alerts), [view_cluster_info](#view_cluster_info), [view_cluster_keys](#view_cluster_keys), [view_cluster_modules](#view_cluster_modules), [view_cluster_stats](#view_cluster_stats), [view_crdb](#view_crdb), [view_crdb_list](#view_crdb_list), [view_crdb_task](#view_crdb_task), [view_crdb_task_list](#view_crdb_task_list), [view_debugging_info](#view_debugging_info), [view_endpoint_stats](#view_endpoint_stats), [view_license](#view_license), [view_logged_events](#view_logged_events), [view_node_alerts](#view_node_alerts), [view_node_check](#view_node_check), [view_node_info](#view_node_info), [view_node_stats](#view_node_stats), [view_proxy_info](#view_proxy_info), [view_redis_acl_info](#view_redis_acl_info), [view_redis_pass](#view_redis_pass), [view_role_info](#view_role_info), [view_shard_stats](#view_shard_stats), [view_sso](#view_sso), [view_status_of_all_node_actions](#view_status_of_all_node_actions), [view_status_of_cluster_action](#view_status_of_cluster_action), [view_status_of_node_action](#view_status_of_node_action) |

## Rebalance database requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-bdbs-actions-rebalance-cdda3204b3.md`
- | [PUT](#put-bdbs-actions-rebalance) | `/v1/bdbs/{uid}/actions/rebalance` | Rebalance database shards |
- Distributes the database's shards across nodes based on the database's shard placement policy. See [Shard placement policy]() for more information about shard placement and available policies.
- | [view_bdb_info]() | admin<br />cluster_member<br />cluster_viewer<br />db_member<br />db_viewer |
- | uid | integer | The unique ID of the database to rebalance. |
- | dry_run | boolean | If true, returns the blueprint of the rebalanced database without actually changing the database. Default is false. |

## Database availability requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-bdbs-availability-d33b478b33.md`
- | [GET](#get-db-endpoint-availability) | `/v1/local/bdbs/{uid}/endpoint/availability` | Verifies local database endpoint availability |
- | [GET](#get-db-availability) | `/v1/bdbs/{uid}/availability` | Verifies database availability |
- Verifies the local database endpoint is available. This request does not redirect to the primary node.
- | [view_bdb_info]() | admin<br />cluster_member<br />cluster_viewer<br />db_member<br />db_viewer<br />user_manager |
- To check database endpoint availability without any additional checks:

## Database upgrade modules requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-bdbs-modules-upgrade-f695abf95d.md`
- | [POST](#post-bdb-modules-upgrade) | `/v1/bdbs/{uid}/modules/upgrade` | Upgrade module |
- POST /v1/bdbs/{string: uid}/modules/upgrade
- Upgrades module version on a specific BDB.
- | Host | cnm.cluster.fqdn | Domain name |
- | Accept | application/json | Accepted media type |

## Database upgrade requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-bdbs-upgrade-83d961fce6.md`
- | [POST](#post-bdbs-upgrade) | `/v1/bdbs/{uid}/upgrade` | Upgrade database |
- | Host | cnm.cluster.fqdn | Domain name |
- | Accept | application/json | Accepted media type |
- | force_restart | boolean | Restart shards even if no version change (default: false) |
- | keep_redis_version | boolean | Keep current Redis version (default: false). Deprecated as of Redis Software v7.8.2. To upgrade modules without upgrading the Redis database version, set `redis_version` to the current Redis database version instead. |

## Shard failover requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-shards-actions-failover-f62bf84b27.md`
- | [POST](#post-multi-shards) | `/v1/shards/actions/failover` | Fail over multiple shards |
- | [POST](#post-shard) | `/v1/shards/{uid}/actions/failover` | Fail over a specific shard |
- Performs failover on the primary shards specified by `shard_uids` in the request body, and promotes their replicas to primary shards. This request is asynchronous.
- The cluster automatically manages failover to ensure high availability. Use this failover REST API request only for testing and planned maintenance.
- | [failover_shard]() | admin<br />cluster_member<br />db_member |

## Terminology in Redis Software
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-terminology-64ca2110e1.md`
- A _node_ is a physical machine, virtual machine, container or cloud
- instance on which the RS installation package was installed and the
- [setup process]() was run in order to make the machine part of the cluster.
- Each node is a container for running multiple Redis
- The recommended configuration for a production cluster is an uneven

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

## RLEC 0.99.5-24 Release Notes (February 15, 2015)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-legacy-release-notes-rlec-0-99-february-201-ac6af21e84.md`
- before running through the upgrade process.
- If you are upgrading from version 0.99.5-11:
- 1. You must restart the services after the upgrade by running the
- following command with user root (sudo su). From the operating
- system's CLI, run the following command:

## RLEC 4.3.0-230 Release Notes (August 2, 2016)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-legacy-release-notes-rlec-4-3-aug-2016-f71abf52fd.md`
- before running through the upgrade process.
- You can upgrade to this version from any 4.2 version. If you have a
- version older than 4.2 you should first upgrade to 4.2 and only then
- and contact <support@redislabs.com> if you are interested in this
- cluster the new default version for Redis databases will be 3.0 and

## RLEC 4.4 Release Notes (December 2016)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-legacy-release-notes-rlec-4-4-dec-2016-22b01111ff.md`
- You can upgrade to this version from any 4.3 version. If you have a
- version older than 4.3 you must first upgrade to 4.3 and only then
- improved performance. Note that when you upgrade the cluster to this
- version and then upgrade existing databases, the databases will be
- updated to use the Single proxy policy and Dense shard placement

## Redis Enterprise Software Release Notes 5.2 (June 2018)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-legacy-release-notes-rs-5-2-june-2018-0331f5b7f8.md`
- include new data types and casual consistency for active-active (also
- known as the Redis CRDT or CRDB Conflict-free Replicated Database), as
- If you are upgrading from a previous version, make sure to review the
- upgrade instructions before beginning the upgrade process. You can
- upgrade to RS 5.2 from RS 4.5 and above. If you have a version older

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

## Redis Enterprise Software Release Notes 5.6.0 (April 2020)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-legacy-release-notes-rs-5-6-0-april-2020-d865a2a06b.md`
- EOL for Redis Modules can be found [here](#modules-endoflife-schedule).
- Redis Enterprise Software installer adds the ability to specify custom installation paths and a custom installation user, group, or both on RHEL versions 6 and 7.
- When you run the installer you can specify the installation, the configuration and the var as well as the user and the group:
- For more information, check out the [Redis Enterprise Software installer documentation](https://docs.redis.com/latest/rs/installing-upgrading/).
- RS 5.6.0 adds the support of [HyperLogLog](http://www.antirez.com/news/75) data structure for [Active-Active Redis]() databases.

## Redis Enterprise Software Release Notes 6.0.20 (April 2021)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-rs-6-0-20-april-2021-94fa5b78cb.md`
- is now available! This version includes the following new features and
- authorization into RS role-based access controls (RBAC). You can now use
- LDAP to authorize access to the admin console and to authorize database
- mechanism, adding the ability to authenticate client connections using a
- Redis database using the Active-Passive (Replica Of) mechanism.

## Redis Enterprise Software release notes 6.2.18-43 (September 2022)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-rs-6-2-18-releases-rs-6-2-18-43-a346dd121e.md`
- [Redis Enterprise Software version 6.2.18](https://redislabs.com/redis-enterprise-software/download-center/software/) is now available!
- This version of Redis Enterprise Software offers:
- The following table shows the MD5 checksums for the available packages:
- | Package | MD5 checksum (6.2.18-43 September release) |
- | Ubuntu 16 | `055973eb7009073b0c199ec1dfd81018` |

## Redis Enterprise Software Release Notes 6.2.4 (August 2021)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-rs-6-2-4-august-2021-9ae67cb6f6.md`
- [Redis Enterprise Software version 6.2.4](https://redislabs.com/redis-enterprise-software/download-center/software/) is now available!
- You can [upgrade to v6.2.4]() from Redis Enterprise Software v6.0 and later.
- The default behavior of the `upgrade db` command has changed.  It is now controlled by a new cluster policy (`redis_upgrade_policy`), which defines the policy for creating new databases and upgrading existing databases.  The policy supports the following values:
- This is the default value for Redis Enterprise Software.
- Setting the upgrade policy to `latest` ensures that the most recent Redis features are available to new databases and ones that are upgraded.  It also requires more frequent upgrades, as open source Redis is updated more frequently than Redis Enterprise Software.

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

## Redis Enterprise Software release notes 6.4.2-69 (May 2023)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-rs-6-4-2-releases-rs-6-4-2-69-e776d64a9f.md`
- This is a maintenance release for â[âRedis Enterprise Software version 6.4.2](https://redis.io/downloads/#software).
- The following table shows the MD5 checksums for the available packages:
- | Package | MD5 checksum (6.4.2-69 May release) |
- |---------|---------------------------------------|
- | Ubuntu 16 | 31631248672de0154ec20aee0bff9adc |

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

## Configure cipher suites
Source file: `raw/sources/20260409-docs-latest-operate-rs-security-encryption-tls-ciphers-9f854eb0ef.md`
- Ciphers are algorithms that help secure connections between clients and servers. You can change the ciphers to improve the security of your Redis Software cluster and databases. The default settings are in line with industry best practices, but you can customize them to match the security policy of your organization.
- |------------|--------------|-------------|
- | control_cipher_suites | <span title="Yes">&#x2705; Yes</span> | Cipher list for TLS 1.2 communications for cluster administration (control plane) |
- | data_cipher_list | <span title="Yes">&#x2705; Yes</span> | Cipher list for TLS 1.2 communications between applications and databases (data plane) |
- | sentinel_cipher_suites | <span title="Yes">&#x2705; Yes</span> | Cipher list for [discovery service]() (Sentinel) TLS 1.2 communications |

## Configure TLS protocol
Source file: `raw/sources/20260409-docs-latest-operate-rs-security-encryption-tls-tls-protocols-2c30f49a0d.md`
- You can change TLS protocols to improve the security of your Redis Software cluster and databases. The default settings are in line with industry best practices, but you can customize them to match the security policy of your organization.
- The communications for which you can modify TLS protocols are:
- You can configure TLS protocols with the [Cluster Manager UI](#edit-tls-ui), [`rladmin`](), or the [REST API]().
- TLS support depends on the operating system. You cannot enable support for protocols or versions that aren't supported by the operating system running Redis Software.  In addition, updates to the operating system or to Redis Software can impact protocol and version support.
- If you have trouble enabling specific versions of TLS, verify that they're supported by your operating system and that they're configured correctly.

## Recommended security practices
Source file: `raw/sources/20260409-docs-latest-operate-rs-security-recommended-security-practices-231e8a39b5.md`
- When deploying Redis Software to production, we recommend the following practices:
- If you are replacing your existing antivirus solution or installing/supporting Redis Software, make sure that the below paths are excluded:
- For antivirus solutions that intercept processes, binary files may have to be excluded directly depending on the requirements of your anti-virus vendor.
- | /opt/redislabs | Main installation directory for all Redis Software binaries |
- | /opt/redislabs/bin | Binaries for all the utilities for command line access and managements such as "rladmin" or "redis-cli" |

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
