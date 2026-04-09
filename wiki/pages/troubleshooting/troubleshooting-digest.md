---
title: "Troubleshooting Digest"
last_updated: 2026-04-09
tags: [troubleshooting, digest]
source_count: 1018
---

# Troubleshooting Digest

Auto-compiled synthesis from raw sources.

## AI Agent Resources
Source file: `raw/sources/20260409-docs-latest-ai-agent-resources-286f3503e4.md`
- Redis provides a comprehensive index of all documentation in Markdown format at [llms.txt](https://redis.io/llms.txt). This index is specifically designed for AI agents to discover available documentation.
- All documentation pages are available in Markdown format via the same URL as
- the main doc page but with `index.html.md` added. For example, the Markdown version of
- [ai-agent-resources/index.html.md](https://redis.io/docs/latest/ai-agent-resources/index.html.md).
- Redis documentation is available in structured JSON format optimized for RAG (Retrieval-Augmented Generation) systems.

## ACL CAT
Source file: `raw/sources/20260409-docs-latest-commands-acl-cat-c8bce03b76.md`
- If a category name is given, the command shows all the Redis commands in
- ACL categories are very useful in order to create ACL rules that include or
- exclude a large set of commands at once, without specifying every single
- command. For instance, the following rule will let the user `karin` perform
- everything but the most dangerous operations that may affect the server

## ACL DRYRUN
Source file: `raw/sources/20260409-docs-latest-commands-acl-dryrun-c65342a279.md`
- This command can be used to test the permissions of a given user without having to enable the user or cause the side effects of running the command.
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | Might reply with "unknown user" for LDAP users even if `AUTH` succeeds. |
- * [Simple string reply](../../develop/reference/protocol-spec#simple-strings): `OK` on success.

## ACL LOAD
Source file: `raw/sources/20260409-docs-latest-commands-acl-load-b4e50fb5e6.md`
- option), this command will reload the ACLs from the file, replacing all
- the current ACL rules with the ones defined in the file. The command makes
- sure to have an *all or nothing* behavior, that is:
- * If every line in the file is valid, all the ACLs are loaded.
- * If one or more line in the file is not valid, nothing is loaded, and the old ACL rules defined in the server memory continue to be used.

## ACL LOG
Source file: `raw/sources/20260409-docs-latest-commands-acl-log-9a38c04cf3.md`
- 1. Failed authentications with [`AUTH`]() or [`HELLO`]() (reason = auth)
- 2. Commands violating the current ACL rules
- The optional argument specifies how many entries to show. By default
- up to ten failures are returned. The special [`RESET`]() argument clears the log.
- Entries are displayed starting from the most recent.

## ACL SAVE
Source file: `raw/sources/20260409-docs-latest-commands-acl-save-30d547f8bb.md`
- option), this command will save the currently defined ACLs from the server memory to the ACL file.
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Not supported">&#x274c; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> | <span title="Not supported">&#x274c; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> |  |
- [Simple string reply](../../develop/reference/protocol-spec#simple-strings): `OK`.

## ACL SETUSER
Source file: `raw/sources/20260409-docs-latest-commands-acl-setuser-4456097d5f.md`
- Manipulate Redis ACL users interactively.
- If the username does not exist, the command creates the username without any privilege.
- It then reads from left to right all the [rules](#acl-rules) provided as successive arguments, setting the user ACL rules as specified.
- If the user already exists, the provided ACL rules are simply applied
- *in addition* to the rules already set. For example:

## AUTH
Source file: `raw/sources/20260409-docs-latest-commands-auth-e8156241a4.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- The AUTH command authenticates the current connection in two cases:
- 1. If the Redis server is password protected via the `requirepass` option.
- 2. A Redis 6.0 instance, or greater, is using the [Redis ACL system]().

## BF.ADD
Source file: `raw/sources/20260409-docs-latest-commands-bf-add-c93ca4524f.md`
- This command is similar to [`BF.MADD`](), except that only one item can be added.
- <details open><summary><code>key</code></summary>
- is key name for a Bloom filter to add the item to.
- If `key` does not exist - a new Bloom filter is created with default error rate, capacity, and expansion (see [`BF.RESERVE`]()).
- <details open><summary><code>item</code></summary>

## BF.CARD
Source file: `raw/sources/20260409-docs-latest-commands-bf-card-1c9366e6d3.md`
- <details open><summary><code>key</code></summary>
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Supported">&#x2705; Supported</span><br /> | <span title="Supported"><nobr>&#x2705; Flexible & Annual</nobr></span><br /><span title="Supported">&#x2705; Free & Fixed</nobr></span> |  |
- * [Integer reply](): the number of items detected as unique that were added to the Bloom filter (items that caused at least one bit to be set in at least one sub-filter), or `0` when the given `key` does not exist.

## BF.EXISTS
Source file: `raw/sources/20260409-docs-latest-commands-bf-exists-e920e178dd.md`
- This command is similar to [`BF.MEXISTS`](), except that only one item can be checked.
- <details open><summary><code>key</code></summary>
- <details open><summary><code>item</code></summary>
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|

## BF.INFO
Source file: `raw/sources/20260409-docs-latest-commands-bf-info-2adb917707.md`
- <details open><summary><code>key</code></summary>
- <details open><summary><code>CAPACITY</code></summary>
- Return the number of unique items that can be stored in this Bloom filter before scaling would be required (including already added items).
- <details open><summary><code>SIZE</code></summary>
- Return the memory size: number of bytes allocated for this Bloom filter.

## BF.INSERT
Source file: `raw/sources/20260409-docs-latest-commands-bf-insert-d5c808cc17.md`
- This command is similar to [`BF.MADD`](), except that the error rate, capacity, and expansion can be specified. It is a sugarcoated combination of [`BF.RESERVE`]() and [`BF.MADD`]().
- <details open><summary><code>key</code></summary>
- is key name for a Bloom filter to add items to.
- If `key` does not exist, a new Bloom filter is created.
- <details open><summary><code>ITEMS item...</code></summary>

## BF.LOADCHUNK
Source file: `raw/sources/20260409-docs-latest-commands-bf-loadchunk-9146a36251.md`
- See the [`BF.SCANDUMP`]() command for example usage.
- <details open><summary><code>key</code></summary>
- is key name for a Bloom filter to restore.
- <details open><summary><code>iterator</code></summary>
- Iterator value associated with `data` (returned by [`BF.SCANDUMP`]())

## BF.MADD
Source file: `raw/sources/20260409-docs-latest-commands-bf-madd-fb0854be4a.md`
- This command is similar to [`BF.ADD`](), except that you can add more than one item.
- This command is similar to [`BF.INSERT`](), except that the error rate, capacity, and expansion cannot be specified.
- <details open><summary><code>key</code></summary>
- is key name for a Bloom filter to add the items to.
- If `key` does not exist - a new Bloom filter is created with default error rate, capacity, and expansion (see [`BF.RESERVE`]()).

## BF.MEXISTS
Source file: `raw/sources/20260409-docs-latest-commands-bf-mexists-9ad8925da1.md`
- This command is similar to [`BF.EXISTS`](), except that more than one item can be checked.
- <details open><summary><code>key</code></summary>
- <details open><summary><code>item...</code></summary>
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|

## BF.RESERVE
Source file: `raw/sources/20260409-docs-latest-commands-bf-reserve-5ab2a90701.md`
- By default, the filter auto-scales by creating additional sub-filters when `capacity` is reached.
- The new sub-filter is created with size of the previous sub-filter multiplied by `expansion`.
- Though the filter can scale up by creating sub-filters, it is recommended to reserve the estimated required `capacity` since maintaining and querying
- sub-filters requires additional memory (each sub-filter uses an extra bits and hash function) and consume  further CPU time than an equivalent filter that had
- The optimal number of hash functions is `ceil(-ln(error_rate) / ln(2))`.

## BF.SCANDUMP
Source file: `raw/sources/20260409-docs-latest-commands-bf-scandump-43734e424e.md`
- This command is useful for large Bloom filters that cannot fit into the [`DUMP`]() and [`RESTORE`]() model.
- The first time this command is called, the value of `iter` should be 0.
- This command returns successive `(iter, data)` pairs until `(0, NULL)` to indicate completion.
- <details open><summary><code>key</code></summary>
- <details open><summary><code>iterator</code></summary>

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

## BLMOVE
Source file: `raw/sources/20260409-docs-latest-commands-blmove-28729c403d.md`
- This command's behavior varies in clustered Redis environments. See the [multi-key operations]() page for more information.
- When `source` contains elements, this command behaves exactly like [`LMOVE`]().
- When used inside a [`MULTI`]()/[`EXEC`]() block or a Lua script, this command behaves exactly like [`LMOVE`]().
- When `source` is empty, Redis will block the connection until another client
- pushes to it or until `timeout` (a double value specifying the maximum number of seconds to block) is reached.

## BLMPOP
Source file: `raw/sources/20260409-docs-latest-commands-blmpop-28a0daaeaf.md`
- This command's behavior varies in clustered Redis environments. See the [multi-key operations]() page for more information.
- When any of the lists contains elements, this command behaves exactly like [`LMPOP`]().
- When used inside a [`MULTI`]()/[`EXEC`]() block or a Lua script, this command behaves exactly like [`LMPOP`]().
- When all lists are empty, Redis will block the connection until another client pushes to it or until the `timeout` (a double value specifying the maximum number of seconds to block) elapses.
- A `timeout` of zero can be used to block indefinitely.

## BLPOP
Source file: `raw/sources/20260409-docs-latest-commands-blpop-91a1e93b31.md`
- This command's behavior varies in clustered Redis environments. See the [multi-key operations]() page for more information.
- It is the blocking version of [`LPOP`]() because it blocks the connection when there
- are no elements to pop from any of the given lists.
- An element is popped from the head of the first list that is non-empty, with the
- given keys being checked in the order that they are given.

## BRPOP
Source file: `raw/sources/20260409-docs-latest-commands-brpop-54bbb35b3a.md`
- This command's behavior varies in clustered Redis environments. See the [multi-key operations]() page for more information.
- It is the blocking version of [`RPOP`]() because it blocks the connection when there
- are no elements to pop from any of the given lists.
- An element is popped from the tail of the first list that is non-empty, with the
- given keys being checked in the order that they are given.

## BRPOPLPUSH
Source file: `raw/sources/20260409-docs-latest-commands-brpoplpush-576ca71529.md`
- This command's behavior varies in clustered Redis environments. See the [multi-key operations]() page for more information.
- When `source` contains elements, this command behaves exactly like [`RPOPLPUSH`]().
- When used inside a [`MULTI`]()/[`EXEC`]() block or a Lua script, this command behaves exactly like [`RPOPLPUSH`]().
- When `source` is empty, Redis will block the connection until another client
- pushes to it or until `timeout` is reached.

## BZMPOP
Source file: `raw/sources/20260409-docs-latest-commands-bzmpop-84ca68bd57.md`
- This command's behavior varies in clustered Redis environments. See the [multi-key operations]() page for more information.
- When any of the sorted sets contains elements, this command behaves exactly like [`ZMPOP`]().
- When used inside a [`MULTI`]()/[`EXEC`]() block or a Lua script, this command behaves exactly like [`ZMPOP`]().
- When all sorted sets are empty, Redis will block the connection until another client adds members to one of the keys or until the `timeout` (a double value specifying the maximum number of seconds to block) elapses.
- A `timeout` of zero can be used to block indefinitely.

## BZPOPMAX
Source file: `raw/sources/20260409-docs-latest-commands-bzpopmax-273b890e85.md`
- This command's behavior varies in clustered Redis environments. See the [multi-key operations]() page for more information.
- It is the blocking version because it blocks the connection when there are no
- members to pop from any of the given sorted sets.
- A member with the highest score is popped from first sorted set that is
- non-empty, with the given keys being checked in the order that they are given.

## BZPOPMIN
Source file: `raw/sources/20260409-docs-latest-commands-bzpopmin-4636c784cb.md`
- This command's behavior varies in clustered Redis environments. See the [multi-key operations]() page for more information.
- It is the blocking version because it blocks the connection when there are no
- members to pop from any of the given sorted sets.
- A member with the lowest score is popped from first sorted set that is
- non-empty, with the given keys being checked in the order that they are given.

## CF.ADD
Source file: `raw/sources/20260409-docs-latest-commands-cf-add-a0dc4482c9.md`
- Cuckoo filters can contain the same item multiple times, and consider each addition as separate.
- Use [`CF.ADDNX`]() to add an item only if it does not exist.
- <details open><summary><code>key</code></summary>
- is key name for a cuckoo filter to add the item to.
- If `key` does not exist - a new cuckoo filter is created.

## CF.ADDNX
Source file: `raw/sources/20260409-docs-latest-commands-cf-addnx-1f5c5f9640.md`
- This command is similar to the combination of [`CF.EXISTS`]() and [`CF.ADD`](). It does not add an item into the filter if its fingerprint already exists.
- <details open><summary><code>key</code></summary>
- is key name for a cuckoo filter to add items to.
- If `key` does not exist - a new cuckoo filter is created.
- <details open><summary><code>item</code></summary>

## CF.COUNT
Source file: `raw/sources/20260409-docs-latest-commands-cf-count-f72e8bfa76.md`
- If you just want to check that a given item was added to a cuckoo filter, use [`CF.EXISTS`]().
- <details open><summary><code>key</code></summary>
- <details open><summary><code>item</code></summary>
- redis> CF.INSERT cf ITEMS item1 item2 item2
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |

## CF.DEL
Source file: `raw/sources/20260409-docs-latest-commands-cf-del-7bbee3a6c0.md`
- If the item exists only once, it will be removed from the filter. If the item was added multiple times, it will still be present.
- Never use this command to delete an item unless you are certain you've added the item to the filter. Deleting an item you didn't previously add may corrupt the filter and cause false negatives.
- <details open><summary><code>key</code></summary>
- <details open><summary><code>item</code></summary>
- O(n), where n is the number of `sub-filters`. Both alternative locations are

## CF.EXISTS
Source file: `raw/sources/20260409-docs-latest-commands-cf-exists-d519c047b1.md`
- This command is similar to [`CF.MEXISTS`](), except that only one item can be checked.
- <details open><summary><code>key</code></summary>
- <details open><summary><code>item</code></summary>
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|

## CF.INFO
Source file: `raw/sources/20260409-docs-latest-commands-cf-info-bed18b0cc5.md`
- <details open><summary><code>key</code></summary>
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Supported">&#x2705; Supported</span><br /> | <span title="Supported">&#x2705; Flexible & Annual</span><br /><span title="Supported">&#x2705; Free & Fixed</nobr></span> |  |
- * [Array reply]() with argument name ([Simple string reply]()) and value ([Integer reply]()) pairs.

## CF.INSERT
Source file: `raw/sources/20260409-docs-latest-commands-cf-insert-0a5b68be1a.md`
- This command is similar to [`CF.ADD`](), except that more than one item can be added and capacity can be specified.
- <details open><summary><code>key</code></summary>
- is key name for a cuckoo filter to add items to.
- If `key` does not exist - a new cuckoo filter is created.
- <details open><summary><code>ITEMS item...</code></summary>

## CF.INSERTNX
Source file: `raw/sources/20260409-docs-latest-commands-cf-insertnx-4a664c7739.md`
- This command is similar to [`CF.ADDNX`](), except that more than one item can be added and capacity can be specified.
- <details open><summary><code>key</code></summary>
- is key name for a cuckoo filter to add items to.
- If `key` does not exist - a new cuckoo filter is created.
- <details open><summary><code>ITEMS item...</code></summary>

## CF.LOADCHUNK
Source file: `raw/sources/20260409-docs-latest-commands-cf-loadchunk-e9e9f447a7.md`
- See the [`CF.SCANDUMP`]() command for example usage.
- <details open><summary><code>key</code></summary>
- is key name for a cuckoo filter to restore.
- <details open><summary><code>iterator</code></summary>
- Iterator value associated with `data` (returned by [`CF.SCANDUMP`]())

## CF.MEXISTS
Source file: `raw/sources/20260409-docs-latest-commands-cf-mexists-ad6977f4c3.md`
- This command is similar to [`CF.EXISTS`](), except that more than one item can be checked.
- <details open><summary><code>key</code></summary>
- <details open><summary><code>item...</code></summary>
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|

## CF.RESERVE
Source file: `raw/sources/20260409-docs-latest-commands-cf-reserve-6484127fed.md`
- According to the cuckoo filter behavior, the filter is likely to declare itself full before `capacity` is reached; therefore, the fill rate will likely never reach 100 percent.
- The fill rate can be improved by using a larger `bucketsize` at the cost of a higher error rate.
- When the filter self-declare itself `full`, it will auto-expand by generating additional sub-filters at the cost of reduced performance and increased error rate.
- The new sub-filter is created with size of the previous sub-filter multiplied by `expansion`.
- Like bucket size, additional sub-filters grow the error rate linearly.

## CF.SCANDUMP
Source file: `raw/sources/20260409-docs-latest-commands-cf-scandump-fb2501964d.md`
- This command is useful for large cuckoo filters that cannot fit into the [`DUMP`]() and [`RESTORE`]() model.
- The first time this command is called, the value of `iter` should be 0.
- This command returns successive `(iter, data)` pairs until `(0, NULL)` indicates completion.
- <details open><summary><code>key</code></summary>
- is key name for a cuckoo filter to save.

## CLIENT CACHING
Source file: `raw/sources/20260409-docs-latest-commands-client-caching-199c823700.md`
- by the connection, when tracking is enabled in `OPTIN` or `OPTOUT` mode.
- [client side caching documentation]() for
- When tracking is enabled Redis, using the [`CLIENT TRACKING`]() command, it is
- possible to specify the `OPTIN` or `OPTOUT` options, so that keys
- in read only commands are not automatically remembered by the server to

## CLIENT KILL
Source file: `raw/sources/20260409-docs-latest-commands-client-kill-1fe1c437bb.md`
- The `ip:port` should match a line returned by the [`CLIENT LIST`]() command (`addr` field).
- CLIENT KILL <filter> <value> ... ... <filter> <value>
- With the new form it is possible to kill clients by different attributes
- instead of killing just by address. The following filters are available:
- * `CLIENT KILL ADDR ip:port`. This is exactly the same as the old three-arguments behavior.

## CLIENT LIST
Source file: `raw/sources/20260409-docs-latest-commands-client-list-aa414dac62.md`
- connections server in a mostly human readable format.
- You can use one of the optional subcommands to filter the list. The `TYPE type` subcommand filters the list by clients' type, where *type* is one of `normal`, `master`, `replica`, and `pubsub`. Note that clients blocked by the [`MONITOR`]() command belong to the `normal` class.
- The `ID` filter only returns entries for clients with IDs matching the `client-id` arguments.
- * `laddr`: address/port of local address client connected to (bind address).
- * `fd`: file descriptor corresponding to the socket.

## CLIENT NO-EVICT
Source file: `raw/sources/20260409-docs-latest-commands-client-no-evict-7634ce951e.md`
- When turned on and client eviction is configured, the current connection will be excluded from the client eviction process even if we're above the configured client eviction threshold.
- When turned off, the current client will be re-included in the pool of potential clients to be evicted (and evicted if needed).
- See [client eviction](#client-eviction) for more details.
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|

## CLIENT NO-TOUCH
Source file: `raw/sources/20260409-docs-latest-commands-client-no-touch-2612fc362d.md`
- When turned on, the current client will not change LFU/LRU stats, unless it sends the [`TOUCH`]() command.
- When turned off, the client touches LFU/LRU stats just as a normal client.
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |

## CLIENT PAUSE
Source file: `raw/sources/20260409-docs-latest-commands-client-pause-db0f95289c.md`
- The command performs the following actions:
- * It stops processing all the pending commands from normal and pub/sub clients for the given mode. However interactions with replicas will continue normally. Note that clients are formally paused when they try to execute a command, so no work is taken on the server side for inactive clients.
- * However it returns OK to the caller ASAP, so the `CLIENT PAUSE` command execution is not paused by itself.
- * When the specified amount of time has elapsed, all the clients are unblocked: this will trigger the processing of all the commands accumulated in the query buffer of every client during the pause.
- Client pause currently supports two modes:

## CLIENT SETNAME
Source file: `raw/sources/20260409-docs-latest-commands-client-setname-99597a30c9.md`
- The assigned name is displayed in the output of [`CLIENT LIST`]() so that it is possible to identify the client that performed a given connection.
- For instance when Redis is used in order to implement a queue, producers and consumers of messages may want to set the name of the connection according to their role.
- There is no limit to the length of the name that can be assigned if not the usual limits of the Redis string type (512 MB). However it is not possible to use spaces in the connection name as this would violate the format of the [`CLIENT LIST`]() reply.
- It is possible to entirely remove the connection name setting it to the empty string, that is not a valid connection name since it serves to this specific purpose.
- The connection name can be inspected using [`CLIENT GETNAME`]().

## CLIENT TRACKING
Source file: `raw/sources/20260409-docs-latest-commands-client-tracking-e83a48d6ef.md`
- for [server assisted client side caching]().
- When tracking is enabled Redis remembers the keys that the connection
- requested, in order to send later invalidation messages when such keys are
- modified. Invalidation messages are sent in the same connection (only available
- when the RESP3 protocol is used) or redirected in a different connection

## CLIENT UNBLOCK
Source file: `raw/sources/20260409-docs-latest-commands-client-unblock-74b891cdf7.md`
- By default the client is unblocked as if the timeout of the command was
- reached, however if an additional (and optional) argument is passed, it is possible to specify the unblocking behavior, that can be **TIMEOUT** (the default) or **ERROR**. If **ERROR** is specified, the behavior is to unblock the client returning as error the fact that the client was force-unblocked. Specifically the client will receive the following error:
- Note: of course as usually it is not guaranteed that the error text remains
- the same, however the error code will remain `-UNBLOCKED`.
- This command is useful especially when we are monitoring many keys with

## CLUSTER ADDSLOTS
Source file: `raw/sources/20260409-docs-latest-commands-cluster-addslots-fae26950be.md`
- configuration. Specifically it assigns a set of hash slots to the node
- receiving the command. If the command is successful, the node will map
- the specified hash slots to itself, and will start broadcasting the new
- 1. The command only works if all the specified slots are, from the point of view of the node receiving the command, currently not assigned. A node will refuse to take ownership for slots that already belong to some other node (including itself).
- 2. The command fails if the same slot is specified multiple times.

## CLUSTER ADDSLOTSRANGE
Source file: `raw/sources/20260409-docs-latest-commands-cluster-addslotsrange-dfedb81ac5.md`
- The difference between the two commands is that [`CLUSTER ADDSLOTS`]() takes a list of slots to assign to the node, while `CLUSTER ADDSLOTSRANGE` takes a list of slot ranges (specified by start and end slots) to assign to the node.
- To assign slots 1 2 3 4 5 to the node, the [`CLUSTER ADDSLOTS`]() command is:
- The same operation can be completed with the following `CLUSTER ADDSLOTSRANGE` command:
- This command only works in cluster mode and is useful in the following Redis Cluster operations:
- 1. To create a new cluster, `CLUSTER ADDSLOTSRANGE` is used to initially set up master nodes splitting the available hash slots among them.

## CLUSTER COUNT-FAILURE-REPORTS
Source file: `raw/sources/20260409-docs-latest-commands-cluster-count-failure-reports-fc6ea6f949.md`
- Failure reports are the way Redis Cluster uses in order to promote a
- that means that the majority of masters in the cluster agreed within
- a window of time that the node is not reachable.
- * A node flags another node with `PFAIL` when the node is not reachable for a time greater than the configured *node timeout*, which is a fundamental configuration parameter of a Redis Cluster.
- * Nodes in `PFAIL` state are provided in gossip sections of heartbeat packets.

## CLUSTER COUNTKEYSINSLOT
Source file: `raw/sources/20260409-docs-latest-commands-cluster-countkeysinslot-1d1d11c45c.md`
- command only queries the local data set, so contacting a node
- that is not serving the specified hash slot will always result in a count of
- During atomic slot migration operations (available since Redis 8.4.0), keys being imported or trimmed will be filtered out from the results.
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|

## CLUSTER DELSLOTS
Source file: `raw/sources/20260409-docs-latest-commands-cluster-delslots-872898153e.md`
- The `CLUSTER DELSLOTS` command asks a particular Redis Cluster node to
- forget which master is serving the hash slots specified as arguments.
- In the context of a node that has received a `CLUSTER DELSLOTS` command and
- has consequently removed the associations for the passed hash slots,
- we say those hash slots are *unbound*. Note that the existence of

## CLUSTER DELSLOTSRANGE
Source file: `raw/sources/20260409-docs-latest-commands-cluster-delslotsrange-d80fe88dcf.md`
- The difference is that [`CLUSTER DELSLOTS`]() takes a list of hash slots to remove from the node, while `CLUSTER DELSLOTSRANGE` takes a list of slot ranges (specified by start and end slots) to remove from the node.
- To remove slots 1 2 3 4 5 from the node, the [`CLUSTER DELSLOTS`]() command is:
- The same operation can be completed with the following `CLUSTER DELSLOTSRANGE` command:
- 1. The command only works if all the specified slots are already associated with the node.
- 2. The command fails if the same slot is specified multiple times.

## CLUSTER FAILOVER
Source file: `raw/sources/20260409-docs-latest-commands-cluster-failover-6b34d1c6ee.md`
- the replica to start a manual failover of its master instance.
- A manual failover is a special kind of failover that is usually executed when
- there are no actual failures, but we wish to swap the current master with one
- of its replicas (which is the node we send the command to), in a safe way,
- without any window for data loss. It works in the following way:

## CLUSTER FORGET
Source file: `raw/sources/20260409-docs-latest-commands-cluster-forget-2bfd181f8f.md`
- from the set of *known nodes* of the Redis Cluster node receiving the command.
- In other words the specified node is removed from the *nodes table* of the
- Because when a given node is part of the cluster, all the other nodes
- participating in the cluster knows about it, in order for a node to be
- completely removed from a cluster, the `CLUSTER FORGET` command must be

## CLUSTER INFO
Source file: `raw/sources/20260409-docs-latest-commands-cluster-info-4dde5b751b.md`
- The following fields are always present in the reply:
- * `cluster_state`: State is `ok` if the node is able to receive queries. `fail` if there is at least one hash slot which is unbound (no node associated), in error state (node serving it is flagged with FAIL flag), or if the majority of masters can't be reached by this node.
- * `cluster_slots_assigned`: Number of slots which are associated to some node (not unbound). This number should be 16384 for the node to work properly, which means that each hash slot should be mapped to a node.
- * `cluster_slots_ok`: Number of hash slots mapping to a node not in `FAIL` or `PFAIL` state.
- * `cluster_slots_pfail`: Number of hash slots mapping to a node in `PFAIL` state. Note that those hash slots still work correctly, as long as the `PFAIL` state is not promoted to `FAIL` by the failure detection algorithm. `PFAIL` only means that we are currently not able to talk with the node, but may be just a transient error.

## CLUSTER KEYSLOT
Source file: `raw/sources/20260409-docs-latest-commands-cluster-keyslot-8fab87a1e3.md`
- This command is mainly useful for debugging and testing, since it exposes
- via an API the underlying Redis implementation of the hashing algorithm.
- 1. Client libraries may use Redis in order to test their own hashing algorithm, generating random keys and hashing them with both their local implementation and using Redis `CLUSTER KEYSLOT` command, then checking if the result is the same.
- 2. Humans may use this command in order to check what is the hash slot, and then the associated Redis Cluster node, responsible for a given key.
- Note that the command implements the full hashing algorithm, including support for **hash tags**, that is the special property of Redis Cluster key hashing algorithm, of hashing just what is between `{` and `}` if such a pattern is found inside the key name, in order to force multiple keys to be handled by the same node.

## CLUSTER MEET
Source file: `raw/sources/20260409-docs-latest-commands-cluster-meet-2b8ef41269.md`
- support enabled, into a working cluster.
- The basic idea is that nodes by default don't trust each other, and are
- considered unknown, so that it is unlikely that different cluster nodes will
- mix into a single one because of system administration errors or network
- So in order for a given node to accept another one into the list of nodes

## CLUSTER MIGRATION
Source file: `raw/sources/20260409-docs-latest-commands-cluster-migration-7999b6331b.md`
- The `CLUSTER MIGRATION` command provides atomic slot migration functionality for Redis Cluster. This command allows you to import slots from other nodes, monitor the progress of migration tasks, and cancel ongoing migrations.
- <details open><summary><code>subcommand</code></summary>
- The subcommand specifies the operation to perform:
- Import slots 0-1000 and 2000-3000 to the current node:
- Check the status of all migration tasks:

## CLUSTER NODES
Source file: `raw/sources/20260409-docs-latest-commands-cluster-nodes-63b541a084.md`
- given by the set of known nodes, the state of the connection we have with such
- nodes, their flags, properties and assigned slots, and so forth.
- configuration of the node we are contacting, in a serialization format which
- happens to be exactly the same as the one used by Redis Cluster itself in
- order to store on disk the cluster state (however the on disk cluster state

## CLUSTER REPLICATE
Source file: `raw/sources/20260409-docs-latest-commands-cluster-replicate-9389dc86ca.md`
- If the node receiving the command is an *empty master*, as a side effect
- of the command, the node role is changed from master to replica.
- Once a node is turned into the replica of another master node, there is no need
- to inform the other cluster nodes about the change: heartbeat packets exchanged
- between nodes will propagate the new configuration automatically.

## CLUSTER RESET
Source file: `raw/sources/20260409-docs-latest-commands-cluster-reset-86df533e1b.md`
- reset type, that can be **hard** or **soft**. Note that this command
- **does not work for masters if they hold one or more keys**, in that case
- to completely reset a master node keys must be removed first, e.g. by using [`FLUSHALL`]() first,
- 1. All the other nodes in the cluster are forgotten.
- 2. All the assigned / open slots are reset, so the slots-to-nodes mapping is totally cleared.

## CLUSTER SAVECONFIG
Source file: `raw/sources/20260409-docs-latest-commands-cluster-saveconfig-d5506d5d32.md`
- the command calls `fsync(2)` in order to make sure the configuration is
- This command is mainly used in the event a `nodes.conf` node state file
- gets lost / deleted for some reason, and we want to generate it again from
- scratch. It can also be useful in case of mundane alterations of a node cluster
- configuration via the [`CLUSTER`]() command in order to ensure the new configuration

## CLUSTER SETSLOT
Source file: `raw/sources/20260409-docs-latest-commands-cluster-setslot-45ab7d42bf.md`
- 1. `MIGRATING` subcommand: Set a hash slot in *migrating* state.
- 2. `IMPORTING` subcommand: Set a hash slot in *importing* state.
- 3. `STABLE` subcommand: Clear any importing / migrating state from hash slot.
- 4. `NODE` subcommand: Bind the hash slot to a different node.
- The command with its set of subcommands is useful in order to start and end cluster live resharding operations, which are accomplished by setting a hash slot in migrating state in the source node, and importing state in the destination node.

## CLUSTER SLOT-STATS
Source file: `raw/sources/20260409-docs-latest-commands-cluster-slot-stats-21cb92a61d.md`
- Use this command to get an array of slot usage statistics for the slots assigned to the current shard. If you're working with a Redis cluster, this data helps you understand overall slot usage, spot hot or cold slots, plan slot migrations to balance load, or refine your application logic to better distribute keys.
- * `ORDERBY`: Sorts the slot statistics by the specified metric. Use ASC or DESC to sort in ascending or descending order. If multiple slots have the same value, the command uses the slot number as a tiebreaker, sorted in ascending order.
- * `SLOTSRANGE`: Limits the results to a specific, inclusive range of slots. Results are always sorted by slot number in ascending order.
- The command reports on the following statistics:
- * `KEY-COUNT`: Number of keys stored in the slot.

## CMS.INCRBY
Source file: `raw/sources/20260409-docs-latest-commands-cms-incrby-06dd818297.md`
- Increases the count of item by increment. Multiple items can be increased with one call.
- * **item**: The item which counter is to be increased.
- * **increment**: Amount by which the item counter is to be increased.
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|

## CMS.INFO
Source file: `raw/sources/20260409-docs-latest-commands-cms-info-f8f5e67e97.md`
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Supported">&#x2705; Supported</span><br /> | <span title="Supported">&#x2705; Flexible & Annual</span><br /><span title="Supported">&#x2705; Free & Fixed</nobr></span> |  |
- * [Array reply]() of [simple string reply]() and [integer reply]() pairs containing sketch information.
- * [Simple error reply]() in these cases: invalid arguments, missing key, or wrong key type.

## CMS.INITBYDIM
Source file: `raw/sources/20260409-docs-latest-commands-cms-initbydim-5ad086d820.md`
- * **width**: Number of counters in each array. Reduces the error size.
- * **depth**: Number of counter-arrays. Reduces the probability for an
- error of a certain size (percentage of total count).
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|

## CMS.INITBYPROB
Source file: `raw/sources/20260409-docs-latest-commands-cms-initbyprob-b62d7a669b.md`
- * **error**: Estimate size of error. The error is a percent of total counted
- items. This effects the width of the sketch.
- * **probability**: The desired probability for inflated count. This should
- be a decimal value between 0 and 1. This effects the depth of the sketch.
- For example, for a desired false positive rate of 0.1% (1 in 1000),

## CMS.MERGE
Source file: `raw/sources/20260409-docs-latest-commands-cms-merge-bfc8a5079d.md`
- This command's behavior varies in clustered Redis environments. See the [multi-key operations]() page for more information.
- Merges several sketches into one sketch. All sketches must have identical width and depth. Weights can be used to multiply certain sketches. Default weight is 1.
- * **dest**: The name of destination sketch. Must be initialized.
- * **numKeys**: Number of sketches to be merged.
- * **src**: Names of source sketches to be merged.

## CMS.QUERY
Source file: `raw/sources/20260409-docs-latest-commands-cms-query-8346a7d92e.md`
- * **item**: One or more items for which to return the count.
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Supported">&#x2705; Supported</span><br /> | <span title="Supported">&#x2705; Flexible & Annual</span><br /><span title="Supported">&#x2705; Free & Fixed</nobr></span> |  |
- * [Array]() of [integer replies]()  representing the min-counts of each of the provided items in the sketch.

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

## DEBUG
Source file: `raw/sources/20260409-docs-latest-commands-debug-ea83934019.md`
- It is meant to be used for developing and testing Redis.
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Not supported">&#x274c; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> | <span title="Not supported">&#x274c; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> |  |

## DECR
Source file: `raw/sources/20260409-docs-latest-commands-decr-bd0600431d.md`
- If the key does not exist, it is set to `0` before performing the operation.
- An error is returned if the key contains a value of the wrong type or contains a
- string that can not be represented as integer.
- This operation is limited to **64 bit signed integers**.
- See [`INCR`]() for extra information on increment/decrement operations.

## DECRBY
Source file: `raw/sources/20260409-docs-latest-commands-decrby-b5be2919c9.md`
- If the key does not exist, it is initialized with a value of `0` before performing the operation.
- If the key's value is not of the correct type or cannot be represented as an integer, an error is returned.
- This operation is limited to 64-bit signed integers.
- See [`INCR`]() for extra information on increment/decrement operations.
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |

## DEL
Source file: `raw/sources/20260409-docs-latest-commands-del-245af6ee94.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- This command's behavior varies in clustered Redis environments. See the [multi-key operations]() page for more information.
- Foundational: Delete one or more keys using DEL (ignores non-existent keys, returns count of deleted keys)
- **Available in:** Redis CLI, C, C# (Synchronous), Go, Java (Asynchronous - Lettuce), Java (Reactive - Lettuce), Java (Synchronous - Jedis), JavaScript (Node.js), JavaScript (Node.js), PHP, Python, Rust (Asynchronous), Rust (Synchronous)

## DELEX
Source file: `raw/sources/20260409-docs-latest-commands-delex-40a036869d.md`
- Conditionally removes the specified key based on value or hash digest comparison.
- A hash digest is a fixed-size numerical representation of a string value, computed using the XXH3 hash algorithm. Redis uses this hash digest for efficient comparison operations without needing to compare the full string content. You can retrieve a key's hash digest using the [`DIGEST`]() command, which returns it as a hexadecimal string that you can use with the `IFDEQ` and `IFDNE` options, and also the [`SET`]() command's `IFDEQ` and `IFDNE` options.
- The DELEX command supports a set of options that modify its behavior.
- Only one of the options can be specified.
- * `IFEQ ifeq-value` -- Remove the key if the value is equal to the specified value.

## DIGEST
Source file: `raw/sources/20260409-docs-latest-commands-digest-480b563481.md`
- Get the hash digest for the value stored in the specified key as a hexadecimal string. Keys must be of type string.
- A hash digest is a fixed-size numerical representation of a string value, computed using the XXH3 hash algorithm. Redis uses this hash digest for efficient comparison operations without needing to compare the full string content. You can use these hash digests with the [SET]() command's `IFDEQ` and `IFDNE` options, and also the [DELEX]() command's `IFDEQ` and `IFDNE` options.
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Not supported">&#x274c; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> | <span title="Not supported">&#x274c; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> |  |

## DUMP
Source file: `raw/sources/20260409-docs-latest-commands-dump-b9a5f68325.md`
- The returned value can be synthesized back into a Redis key using the [`RESTORE`]()
- The serialization format is opaque and non-standard, however it has a few
- * It contains a 64-bit checksum that is used to make sure errors will be
- The [`RESTORE`]() command makes sure to check the checksum before synthesizing a
- * Values are encoded in the same format used by RDB.

## EVAL_RO
Source file: `raw/sources/20260409-docs-latest-commands-eval-ro-499e4547e9.md`
- For more information about when to use this command vs [`EVAL`](), please refer to [Read-only scripts]().
- For more information about [`EVAL`]() scripts please refer to [Introduction to Eval Scripts]().
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |

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

## FT.AGGREGATE
Source file: `raw/sources/20260409-docs-latest-commands-ft-aggregate-bb2b8cad99.md`
- Run a search query on an index and perform aggregate transformations on the results.
- This command will only return keys to which the user has read access.
- is index name against which the query is executed. You must first create the index using [`FT.CREATE`]().
- is base filtering query that retrieves the documents. It follows the exact same syntax as the search query, including filters, unions, not, optional, and so on.
- <summary><code>VERBATIM</code></summary>

## FT.ALIASADD
Source file: `raw/sources/20260409-docs-latest-commands-ft-aliasadd-a82982ef03.md`
- <summary><code>alias index</code></summary>
- Indexes can have more than one alias, but an alias cannot refer to another
- FT.ALIASADD allows administrators to transparently redirect application queries to alternative indexes.
- <summary><b>Add an alias to an index</b></summary>
- Attempting to add the same alias returns a message that the alias already exists.

## FT.ALIASDEL
Source file: `raw/sources/20260409-docs-latest-commands-ft-aliasdel-b0363f2b53.md`
- <summary><b>Remove an alias from an index</b></summary>
- | Redis<br />Software | Redis Cloud<br />Flexible & Annual | Redis Cloud<br />Free & Fixed | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:-----------------|:------|
- | <span title="Supported">&#x2705; Supported</span> | <span title="Supported">&#x2705; Supported</span> | <span title="Supported">&#x2705; Supported</nobr></span> |  |
- * [Simple string reply](): `OK` if executed correctly.

## FT.ALIASUPDATE
Source file: `raw/sources/20260409-docs-latest-commands-ft-aliasupdate-8af210278e.md`
- Add an alias to an index. If the alias is already associated with another
- index, FT.ALIASUPDATE removes the alias association with the previous index.
- <summary><code>alias index</code></summary>
- <summary><b>Update an index alias</b></summary>
- 127.0.0.1:6379> FT.ALIASUPDATE alias idx

## FT.ALTER
Source file: `raw/sources/20260409-docs-latest-commands-ft-alter-6783ddad19.md`
- Add a new attribute to the index. Adding an attribute to the index causes any future document updates to use the new attribute when indexing and reindexing existing documents.
- <summary><code>SKIPINITIALSCAN</code></summary>
- <summary><code>SCHEMA ADD {attribute} {options} ...</code></summary>
- after the SCHEMA keyword, declares which fields to add:
- Depending on how the index was created, you may be limited by the number of additional text

## FT.CONFIG GET
Source file: `raw/sources/20260409-docs-latest-commands-ft-config-get-0118d8e877.md`
- is name of the configuration option, or '*' for all.
- <summary><b>Retrieve configuration options</b></summary>
- 23) 1) FORK_GC_CLEAN_NUMERIC_EMPTY_NODES
- 24) 1) _FORK_GC_CLEAN_NUMERIC_EMPTY_NODES
- | Redis<br />Software | Redis Cloud<br />Flexible & Annual | Redis Cloud<br />Free & Fixed | <span style="min-width: 9em; display: table-cell">Notes</span> |

## FT.CONFIG HELP
Source file: `raw/sources/20260409-docs-latest-commands-ft-config-help-725fa65319.md`
- is name of the configuration option, or '*' for all.
- <summary><b>Get configuration details</b></summary>
- | Redis<br />Software | Redis Cloud<br />Flexible & Annual | Redis Cloud<br />Free & Fixed | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:-----------------|:------|
- | <span title="Not supported"><nobr>&#x274c; Not supported</span> | <span title="Not supported"><nobr>&#x274c; Not supported</span> | <span title="Not supported"><nobr>&#x274c; Not supported</nobr></span> |  |

## FT.CONFIG SET
Source file: `raw/sources/20260409-docs-latest-commands-ft-config-set-eb8f88fdab.md`
- Set the value of a RediSearch configuration parameter.
- Values set using `FT.CONFIG SET` are not persisted after server restart.
- RediSearch configuration parameters are detailed in [Configuration parameters]().
- As detailed in the link above, not all RediSearch configuration parameters can be set at runtime.
- is name of the configuration option, or '*' for all.

## FT.CREATE
Source file: `raw/sources/20260409-docs-latest-commands-ft-create-117ffe4035.md`
- Create an index with the given specification. For usage, see [Examples](#examples).
- If such index already exists, returns an error reply `(error) Index already exists`.
- <summary><code>SCHEMA {identifier} AS {attribute} {attribute type} {options...</code></summary>
- after the SCHEMA keyword, declares which fields to index:
- For JSON, the identifier is a JSON Path expression.

## FT.CURSOR DEL
Source file: `raw/sources/20260409-docs-latest-commands-ft-cursor-del-1c81ea8b94.md`
- <summary><code>cursor_id</code></summary>
- <summary><b>Delete a cursor</b></summary>
- 127.0.0.1:6379> FT.CURSOR DEL idx 342459320
- | Redis<br />Software | Redis Cloud<br />Flexible & Annual | Redis Cloud<br />Free & Fixed | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:-----------------|:------|

## FT.CURSOR READ
Source file: `raw/sources/20260409-docs-latest-commands-ft-cursor-read-95f248feb9.md`
- Read next results from an existing cursor
- <summary><code>cursor_id</code></summary>
- <summary><code>[COUNT read_size]</code></summary>
- is number of results to read. This parameter overrides `COUNT` specified in [`FT.AGGREGATE`]().
- <summary><b>Read next results from a cursor</b></summary>

## FT.DROPINDEX
Source file: `raw/sources/20260409-docs-latest-commands-ft-dropindex-076fd09ddf.md`
- is full-text index name. You must first create the index using [`FT.CREATE`]().
- drop index operation that, if set, deletes the actual document keys. `FT.DROPINDEX index DD` is an asynchronous operation.
- By default, FT.DROPINDEX does not delete the documents associated with the index. Adding the `DD` option deletes the documents as well.
- If an index creation is still running ([`FT.CREATE`]() is running asynchronously), only the document hashes that have already been indexed are deleted.
- The document hashes left to be indexed remain in the database.

## FT.EXPLAIN
Source file: `raw/sources/20260409-docs-latest-commands-ft-explain-ffd1e44c14.md`
- Return the execution plan for a complex query
- is index name. You must first create the index using [`FT.CREATE`]().
- is query string, as if sent to FT.SEARCH`.
- <summary><code>DIALECT {dialect_version}</code></summary>
- is dialect version under which to execute the query. If not specified, the query executes under the default dialect version set during module initial loading or via [`FT.CONFIG SET`]() command.

## FT.EXPLAINCLI
Source file: `raw/sources/20260409-docs-latest-commands-ft-explaincli-9f40bd087d.md`
- Return the execution plan for a complex query but formatted for easier reading without using `redis-cli --raw`
- is index name. You must first create the index using [`FT.CREATE`]().
- is query string, as if sent to FT.SEARCH`.
- <summary><code>DIALECT {dialect_version}</code></summary>
- is dialect version under which to execute the query. If not specified, the query executes under the default dialect version set during module initial loading or via [`FT.CONFIG SET`]() command.

## FT.HYBRID
Source file: `raw/sources/20260409-docs-latest-commands-ft-hybrid-67a98d7880.md`
- Performs hybrid search combining text search and vector similarity with configurable fusion methods.
- This command will only return document IDs (`keyid`) and scores to which the user has read access.
- To retrieve entire documents, use projections with `LOAD *` or `LOAD <count> field...`.
- is the name of the index. You must first create the index using [`FT.CREATE`]().
- <summary><code>SEARCH "search-expression"</code></summary>

## FT.INFO
Source file: `raw/sources/20260409-docs-latest-commands-ft-info-4d32b76f88.md`
- Returns information and statistics about a given index.
- is the name of the given index. You must first create the index using [`FT.CREATE`](). You can also use an alias of `index` created using [`FT.ALIASADD`]() or [`FT.ALIASUPDATE`]().
- | `index_name` | The index name that was defined when index was created. |
- | `index_options` | The index options selected during `FT.CREATE` such as `FILTER {filter}`, `LANGUAGE {default_lang}`, etc. |
- | `index_definition` | Includes `key_type`, hash or JSON; `prefixes`, if any; and `default_score`. |

## FT.PROFILE
Source file: `raw/sources/20260409-docs-latest-commands-ft-profile-7e22e52d68.md`
- Apply [`FT.SEARCH`]() or [`FT.AGGREGATE`]() command to collect performance details. For usage, see [Examples](#examples).
- is the name of an index created using [`FT.CREATE`]().
- <summary><code>SEARCH | AGGREGATE</code></summary>
- represents the profile type, either [`FT.SEARCH`]() or [`FT.AGGREGATE`]().
- removes details of any `reader` iterators.

## FT.SEARCH
Source file: `raw/sources/20260409-docs-latest-commands-ft-search-96bb30b24c.md`
- Search the index with a textual query, returning either documents or just ids.
- This command will only return keys to which the user has read access.
- is index name. You must first create the index using [`FT.CREATE`]().
- is text query to search. If it's more than a single word, put it in quotes. Refer to [Query syntax]() for more details.
- <summary><code>NOCONTENT</code></summary>

## FT.SPELLCHECK
Source file: `raw/sources/20260409-docs-latest-commands-ft-spellcheck-e7686de5a0.md`
- Perform spelling correction on a query, returning suggestions for misspelled terms
- specifies an inclusion (`INCLUDE`) or exclusion (`EXCLUDE`) of a custom dictionary. To learn more about managing custom dictionaries, see [`FT.DICTADD`](), [`FT.DICTDEL`](), and [`FT.DICTDUMP`]().
- You can specify multiple inclusion and exclusion `TERMS`.
- <summary><code>DISTANCE</code></summary>
- is maximum Levenshtein distance for spelling suggestions (default: 1, max: 4).

## FT.SYNDUMP
Source file: `raw/sources/20260409-docs-latest-commands-ft-syndump-8ed0abaff2.md`
- Use FT.SYNDUMP to dump the synonyms data structure. This command returns a list of synonym terms and their synonym group ids.
- <summary><b>Return the contents of a synonym group</b></summary>
- | Redis<br />Software | Redis Cloud<br />Flexible & Annual | Redis Cloud<br />Free & Fixed | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:-----------------|:------|
- | <span title="Supported">&#x2705; Supported</span> | <span title="Supported">&#x2705; Supported</span> | <span title="Supported">&#x2705; Supported</nobr></span> |  |

## FT.SYNUPDATE
Source file: `raw/sources/20260409-docs-latest-commands-ft-synupdate-30d3d7cb68.md`
- <summary><code>synonym_group_id</code></summary>
- Use FT.SYNUPDATE to create or update a synonym group with additional terms. The command triggers a scan of all documents.
- <summary><code>SKIPINITIALSCAN</code></summary>
- does not scan and index, and only documents that are indexed after the update are affected.
- <summary><b>Update a synonym group</b></summary>

## FT.TAGVALS
Source file: `raw/sources/20260409-docs-latest-commands-ft-tagvals-dbbcff7f75.md`
- Return a distinct set of values indexed in a Tag field
- is full-text index name. You must first create the index using [`FT.CREATE`]().
- <summary><code>field_name</code></summary>
- is name of a Tag file defined in the schema.
- Use FT.TAGVALS if your tag indexes things like cities, categories, and so on.

## FUNCTION DELETE
Source file: `raw/sources/20260409-docs-latest-commands-function-delete-8a28559d2c.md`
- This command deletes the library called _library-name_ and all functions in it.
- If the library doesn't exist, the server returns an error.
- For more information please refer to [Introduction to Redis Functions]().
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|

## FUNCTION LOAD
Source file: `raw/sources/20260409-docs-latest-commands-function-load-1389275e67.md`
- The command's gets a single mandatory parameter which is the source code that implements the library.
- The library payload must start with Shebang statement that provides a metadata about the library (like the engine to use and the library name).
- Shebang format: `#!<engine name> name=<library name>`. Currently engine name must be `lua`.
- For the Lua engine, the implementation should declare one or more entry points to the library with the [`redis.register_function()` API]().
- Once loaded, you can call the functions in the library with the [`FCALL`]() (or [`FCALL_RO`]() when applicable) command.

## GEOADD
Source file: `raw/sources/20260409-docs-latest-commands-geoadd-66a3d314a1.md`
- The command takes arguments in the standard format x,y so the longitude must be specified before the latitude. There are limits to the coordinates that can be indexed: areas very near to the poles are not indexable.
- The exact limits, as specified by EPSG:900913 / EPSG:3785 / OSGEO:41001 are the following:
- * Valid longitudes are from -180 to 180 degrees.
- * Valid latitudes are from -85.05112878 to 85.05112878 degrees.
- The command will report an error when the user attempts to index coordinates outside the specified ranges.

## GEODIST
Source file: `raw/sources/20260409-docs-latest-commands-geodist-65cc91acd2.md`
- Given a sorted set representing a geospatial index, populated using the [`GEOADD`]() command, the command returns the distance between the two specified members in the specified unit.
- If one or both the members are missing, the command returns NULL.
- The unit must be one of the following, and defaults to meters:
- The distance is computed assuming that the Earth is a perfect sphere, so errors up to 0.5% are possible in edge cases.
- GEOADD Sicily 13.361389 38.115556 "Palermo" 15.087269 37.502669 "Catania"

## GEOPOS
Source file: `raw/sources/20260409-docs-latest-commands-geopos-34a3a817eb.md`
- Given a sorted set representing a geospatial index, populated using the [`GEOADD`]() command, it is often useful to obtain back the coordinates of specified members. When the geospatial index is populated via [`GEOADD`]() the coordinates are converted into a 52 bit geohash, so the coordinates returned may not be exactly the ones used in order to add the elements, but small errors may be introduced.
- The command can accept a variable number of arguments so it always returns an array of positions even when a single element is specified.
- GEOADD Sicily 13.361389 38.115556 "Palermo" 15.087269 37.502669 "Catania"
- GEOPOS Sicily Palermo Catania NonExisting
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |

## GEORADIUS
Source file: `raw/sources/20260409-docs-latest-commands-georadius-cf8d40e72d.md`
- This command's behavior varies in clustered Redis environments. See the [multi-key operations]() page for more information.
- Return the members of a sorted set populated with geospatial information using [`GEOADD`](), which are within the borders of the area specified with the center location and the maximum distance from the center (the radius).
- This manual page also covers the [`GEORADIUS_RO`]() and [`GEORADIUSBYMEMBER_RO`]() variants (see the section below for more information).
- The common use case for this command is to retrieve geospatial items near a specified point not farther than a given amount of meters (or other units). This allows, for example, to suggest mobile users of an application nearby places.
- The radius is specified in one of the following units:

## GEOSEARCH
Source file: `raw/sources/20260409-docs-latest-commands-geosearch-28d1b7b43c.md`
- This command should be used in place of the deprecated [`GEORADIUS`]() and [`GEORADIUSBYMEMBER`]() commands.
- The query's center point is provided by one of these mandatory options:
- * `FROMMEMBER`: Use the position of the given existing `<member>` in the sorted set.
- * `FROMLONLAT`: Use the given `<longitude>` and `<latitude>` position.
- The query's shape is provided by one of these mandatory options:

## GET
Source file: `raw/sources/20260409-docs-latest-commands-get-d236f38e8a.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- If the key does not exist the special value `nil` is returned.
- An error is returned if the value stored at `key` is not a string, because `GET`
- Foundational: Retrieve the string value of a key using GET (returns nil if key doesn't exist)

## GETSET
Source file: `raw/sources/20260409-docs-latest-commands-getset-a465ca8f14.md`
- Returns an error when `key` exists but does not hold a string value.  Any
- previous time to live associated with the key is discarded on successful
- For example: a process may call [`INCR`]() against the key `mycounter` every time
- some event occurs, but from time to time we need to get the value of the counter
- This can be done using `GETSET mycounter "0"`:

## HDEL
Source file: `raw/sources/20260409-docs-latest-commands-hdel-9ea23bc4a7.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- Removes the specified fields from the hash stored at `key`.
- Specified fields that do not exist within this hash are ignored.
- If `key` does not exist, it is treated as an empty hash and this command returns

## HELLO
Source file: `raw/sources/20260409-docs-latest-commands-hello-5a8468620f.md`
- connection's name, or provide a contextual client report.
- Redis version 6 and above supports two protocols: the old protocol, RESP2, and
- a new one introduced with Redis 6, RESP3. RESP3 has certain advantages since
- when the connection is in this mode, Redis is able to reply with more semantical
- replies: for instance, [`HGETALL`]() will return a *map type*, so a client library

## HEXPIRE
Source file: `raw/sources/20260409-docs-latest-commands-hexpire-58dd6fc81a.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- Set an expiration (TTL or time to live) on one or more fields of a given hash key. You must specify at least one field.
- Field(s) will automatically be deleted from the hash key when their TTLs expire.
- Field expirations will only be cleared by commands that delete or overwrite the

## HEXPIREAT
Source file: `raw/sources/20260409-docs-latest-commands-hexpireat-b04d99a52f.md`
- specifying the number of seconds for the TTL (time to live), it takes
- an absolute [Unix timestamp](http://en.wikipedia.org/wiki/Unix_time) in seconds since Unix epoch. A
- timestamp in the past will delete the field immediately.
- For the specific semantics of the command, see [`HEXPIRE`]().
- The `HEXPIREAT` command supports a set of options:

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

## HINCRBYFLOAT
Source file: `raw/sources/20260409-docs-latest-commands-hincrbyfloat-8add4f30a5.md`
- floating point number, by the specified `increment`. If the increment value
- is negative, the result is to have the hash field value **decremented** instead of incremented.
- If the field does not exist, it is set to `0` before performing the operation.
- An error is returned if one of the following conditions occur:
- * The key contains a value of the wrong type (not a hash).

## HMGET
Source file: `raw/sources/20260409-docs-latest-commands-hmget-aa54db420b.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- Returns the values associated with the specified `fields` in the hash stored at
- For every `field` that does not exist in the hash, a `nil` value is returned.
- Because non-existing keys are treated as empty hashes, running `HMGET` against

## HOTKEYS RESET
Source file: `raw/sources/20260409-docs-latest-commands-hotkeys-reset-b1e3d59f0d.md`
- This command can only be executed when hotkey tracking is stopped. It will return an error if tracking is currently active. Use [`HOTKEYS STOP`]() first to stop tracking, then use `HOTKEYS RESET` to free the allocated resources.
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Not supported">&#x274c; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> | <span title="Not supported">&#x274c; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> |  |

## HOTKEYS START
Source file: `raw/sources/20260409-docs-latest-commands-hotkeys-start-2795e1f21e.md`
- This command initiates a hotkey tracking session. You must specify which metrics to track using the required `METRICS` parameter.
- An error is returned if a tracking session is already in progress.
- The tracking session continues until manually stopped with [`HOTKEYS STOP`]() or automatically stopped after the specified duration.
- <details open><summary><code>METRICS count [CPU] [NET]</code></summary>
- **Required.** Specifies which metrics to track and how many hotkeys to track.

## HOTKEYS STOP
Source file: `raw/sources/20260409-docs-latest-commands-hotkeys-stop-a598f2a5cf.md`
- After stopping, the tracking data remains available through [`HOTKEYS GET`]() until [`HOTKEYS RESET`]() is called or a new tracking session is started.
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Not supported">&#x274c; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> | <span title="Not supported">&#x274c; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> |  |

## HPEXPIRE
Source file: `raw/sources/20260409-docs-latest-commands-hpexpire-efabc132ed.md`
- specified in milliseconds instead of seconds.
- The `HPEXPIRE` command supports a set of options:
- * `NX` -- For each specified field, set expiration only when the field has no expiration.
- * `XX` -- For each specified field, set expiration only when the field has an existing expiration.
- * `GT` -- For each specified field, set expiration only when the new expiration is greater than current one.

## HPEXPIREAT
Source file: `raw/sources/20260409-docs-latest-commands-hpexpireat-afaf0bed49.md`
- which the field will expire is specified in milliseconds since Unix epoch instead of seconds.
- The `HPEXPIREAT` command supports a set of options:
- * `NX` -- For each specified field, set expiration only when the field has no expiration.
- * `XX` -- For each specified field, set expiration only when the field has an existing expiration.
- * `GT` -- For each specified field, set expiration only when the new expiration is greater than current one.

## HSET
Source file: `raw/sources/20260409-docs-latest-commands-hset-1772765dac.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- Sets the specified fields to their respective values in the hash stored at `key`.
- This command overwrites the values of specified fields that exist in the hash.
- If `key` doesn't exist, a new key holding a hash is created.

## HSETEX
Source file: `raw/sources/20260409-docs-latest-commands-hsetex-ef96a3859c.md`
- Set the value of one or more fields of a given hash key and optionally
- set their expiration time or time-to-live (TTL). If the given key already holds a value, it is overwritten and any previous TTLs associated with the key are discarded.
- The `HSETEX` command supports a set of options:
- * `FNX` -- Only set the fields if none of them already exist.
- * `FXX` -- Only set the fields if all of them already exist.

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

## INCRBY
Source file: `raw/sources/20260409-docs-latest-commands-incrby-c1cf15c7f0.md`
- If the key does not exist, it is set to `0` before performing the operation.
- An error is returned if the key contains a value of the wrong type or contains a
- string that can not be represented as integer.
- This operation is limited to 64 bit signed integers.
- See [`INCR`]() for extra information on increment/decrement operations.

## INCRBYFLOAT
Source file: `raw/sources/20260409-docs-latest-commands-incrbyfloat-037c9eb865.md`
- specified `increment`. By using a negative `increment` value, the result is
- that the value stored at the key is decremented (by the obvious properties
- If the key does not exist, it is set to `0` before performing the operation.
- An error is returned if one of the following conditions occur:
- * The key contains a value of the wrong type (not a string).

## INFO
Source file: `raw/sources/20260409-docs-latest-commands-info-b042b9e571.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- The `INFO` command returns information and statistics about the server in a
- format that is simple to parse by computers and easy to read by humans.
- The optional parameter can be used to select a specific section of information:

## JSON.ARRTRIM
Source file: `raw/sources/20260409-docs-latest-commands-json-arrtrim-55bdde560a.md`
- <details open><summary><code>key</code></summary>
- <details open><summary><code>path</code></summary>
- is JSONPath to specify. Default is root `$`.
- <details open><summary><code>start</code></summary>
- is index of the first element to keep (previous elements are trimmed). Default is 0.

## JSON.DEBUG
Source file: `raw/sources/20260409-docs-latest-commands-json-debug-fa60108625.md`

## JSON.DEBUG HELP
Source file: `raw/sources/20260409-docs-latest-commands-json-debug-help-47f8d7650a.md`
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Supported">&#x2705; Supported</span><br /> | <span title="Supported">&#x2705; Flexible & Annual</span><br /><span title="Supported">&#x2705; Free & Fixed</nobr></span> |  |
- [Array reply]() of [bulk string replies]() containing helpful messages about the JSON.DEBUG command.
- [Array reply]() of [bulk string replies]() containing helpful messages about the JSON.DEBUG command.

## JSON.DEBUG MEMORY
Source file: `raw/sources/20260409-docs-latest-commands-json-debug-memory-a195642b36.md`
- The actual total memory consumption by a key could be much lower than the value reported by this command because of an internal JSON string reuse mechanism. For more information, see the [JSON memory usage page]().
- <details open><summary><code>key</code></summary>
- <details open><summary><code>path</code></summary>
- is JSONPath to specify. Default is root `$`.
- <summary><b>Report a value's memory usage in bytes</b></summary>

## JSON.MERGE
Source file: `raw/sources/20260409-docs-latest-commands-json-merge-a5094f507d.md`
- This command complies with [RFC7396](https://datatracker.ietf.org/doc/html/rfc7396) Json Merge Patch
- <details open><summary><code>key</code></summary>
- <details open><summary><code>path</code></summary>
- specifies the JSONPath. For non-existing keys the `path` must be `$`. For existing keys, for each matched `path`, the value that matches the `path` is merged with the JSON `value`. For existing keys, when the path exists, except for the last element, a new child is added with the JSON `value`.
- <details open><summary><code>value</code></summary>

## JSON.MGET
Source file: `raw/sources/20260409-docs-latest-commands-json-mget-0cd9077b9d.md`
- This command's behavior varies in clustered Redis environments. See the [multi-key operations]() page for more information.
- Return the values at `path` from multiple `key` arguments
- When cluster mode is enabled, all specified keys must reside on the same [hash slot](https://redis.io/docs/latest/operate/oss_and_stack/reference/cluster-spec/#key-distribution-model).
- When the database has more than one shard, and the specified keys reside in different shards, Redis will not report a CROSSSLOT error (to avoid breaking changes) and the results may be partial.
- <details open><summary><code>key</code></summary>

## JSON.MSET
Source file: `raw/sources/20260409-docs-latest-commands-json-mset-fdec0165a9.md`
- This command's behavior varies in clustered Redis environments. See the [multi-key operations]() page for more information.
- Set or update one or more JSON values according to the specified `key`-`path`-`value` triplets
- A JSON value is a hierarchical structure. If you change a value in a specific path - nested values are affected.
- When cluster mode is enabled, all specified keys must reside on the same [hash slot](https://redis.io/docs/latest/operate/oss_and_stack/reference/cluster-spec/#key-distribution-model).
- <details open><summary><code>key</code></summary>

## JSON.NUMINCRBY
Source file: `raw/sources/20260409-docs-latest-commands-json-numincrby-510456979d.md`
- <details open><summary><code>key</code></summary>
- <details open><summary><code>path</code></summary>
- <details open><summary><code>value</code></summary>
- <summary><b>Increment number values</b></summary>
- redis> JSON.SET doc . '{"a":"b","b":[{"a":2}, {"a":5}, {"a":"c"}]}'

## JSON.NUMMULTBY
Source file: `raw/sources/20260409-docs-latest-commands-json-nummultby-9dd5c14849.md`
- <details open><summary><code>key</code></summary>
- <details open><summary><code>value</code></summary>
- <details open><summary><code>path</code></summary>
- is JSONPath to specify. Default is root `$`.
- redis> JSON.SET doc . '{"a":"b","b":[{"a":2}, {"a":5}, {"a":"c"}]}'

## JSON.OBJKEYS
Source file: `raw/sources/20260409-docs-latest-commands-json-objkeys-2320ecc9bf.md`
- A JSON object is a structure within a JSON document that contains an unordered set of key-value pairs (also called name-value pairs). Do not confuse Redis keys with JSON object keys.
- <details open><summary><code>key</code></summary>
- is a Redis key storing a value of type JSON.
- <details open><summary><code>path</code></summary>
- Default: "`.`" (legacy path pointing to the root of the document).

## JSON.SET
Source file: `raw/sources/20260409-docs-latest-commands-json-set-2bb2f0ff32.md`
- Set or replace the value at each location resolved by `path`.
- If the key does not exist, a new JSON document can be created only by setting the root path (`$` or `.`).
- <details open><summary><code>key</code></summary>
- is a new key to create or an existing JSON key to modify.
- <details open><summary><code>path</code></summary>

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

## LATENCY LATEST
Source file: `raw/sources/20260409-docs-latest-commands-latency-latest-fe01e94491.md`
- Each reported event has the following fields:
- * Unix timestamp of the latest latency spike for the event.
- * All-time maximum latency for this event.
- "All-time" means the maximum latency since the Redis instance was
- started, or the time that events were reset [`LATENCY RESET`]().

## LINDEX
Source file: `raw/sources/20260409-docs-latest-commands-lindex-23884bf072.md`
- The index is zero-based, so `0` means the first element, `1` the second element
- Negative indices can be used to designate elements starting at the tail of the
- Here, `-1` means the last element, `-2` means the penultimate and so forth.
- When the value at `key` is not a list, an error is returned.
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |

## LINSERT
Source file: `raw/sources/20260409-docs-latest-commands-linsert-46d4e7afb6.md`
- When `key` does not exist, it is considered an empty list and no operation is
- An error is returned when `key` exists but does not hold a list value.
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |

## LLEN
Source file: `raw/sources/20260409-docs-latest-commands-llen-b6f55bf139.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- Returns the length of the list stored at `key`.
- If `key` does not exist, it is interpreted as an empty list and `0` is returned.
- An error is returned when the value stored at `key` is not a list.

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

## LSET
Source file: `raw/sources/20260409-docs-latest-commands-lset-b8ba3ed5da.md`
- For more information on the `index` argument, see [`LINDEX`]().
- An error is returned for out of range indexes.
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |

## LTRIM
Source file: `raw/sources/20260409-docs-latest-commands-ltrim-4c4437b669.md`
- Both `start` and `stop` are zero-based indexes, where `0` is the first element
- of the list (the head), `1` the next element and so on.
- For example: `LTRIM foobar 0 2` will modify the list stored at `foobar` so that
- only the first three elements of the list will remain.
- of the list, where `-1` is the last element of the list, `-2` the penultimate

## MGET
Source file: `raw/sources/20260409-docs-latest-commands-mget-f0128ecdc2.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- This command's behavior varies in clustered Redis environments. See the [multi-key operations]() page for more information.
- Returns the values of all specified keys.
- For every key that does not hold a string value or does not exist, the special

## MIGRATE
Source file: `raw/sources/20260409-docs-latest-commands-migrate-f595b03f39.md`
- On success the key is deleted from the original instance and is guaranteed to
- The command is atomic and blocks the two instances for the time required to
- transfer the key, at any given time the key will appear to exist in a given
- instance or in the other instance, unless a timeout error occurs. In 3.2 and
- above, multiple keys can be pipelined in a single call to `MIGRATE` by passing

## MONITOR
Source file: `raw/sources/20260409-docs-latest-commands-monitor-9e51c9d60f.md`
- It can help in understanding what is happening to the database.
- This command can both be used via `redis-cli` and via `telnet`.
- The ability to see all the requests processed by the server is useful in order
- to spot bugs in an application both when using Redis as a database and as a
- Use `SIGINT` (Ctrl-C) to stop a `MONITOR` stream running via `redis-cli`.

## OBJECT ENCODING
Source file: `raw/sources/20260409-docs-latest-commands-object-encoding-b04c54767a.md`
- Redis objects can be encoded in different ways:
- All the specially encoded types are automatically converted to the general type once you perform an operation that makes it impossible for Redis to retain the space saving encoding.
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Supported">&#x2705; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> | For Active-Active databases, use `CRDT.DEBUG ENCODING` instead. |

## PERSIST
Source file: `raw/sources/20260409-docs-latest-commands-persist-eef6709433.md`
- with an expire set) to _persistent_ (a key that will never expire as no timeout
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |
- * [Integer reply](../../develop/reference/protocol-spec#integers): `0` if _key_ does not exist or does not have an associated timeout.

## PEXPIRE
Source file: `raw/sources/20260409-docs-latest-commands-pexpire-a62f4a15ad.md`
- specified in milliseconds instead of seconds.
- The `PEXPIRE` command supports a set of options since Redis 7.0:
- * `NX` -- Set expiry only when the key has no expiry
- * `XX` -- Set expiry only when the key has an existing expiry
- * `GT` -- Set expiry only when the new expiry is greater than current one

## PEXPIREAT
Source file: `raw/sources/20260409-docs-latest-commands-pexpireat-9fc9befa5a.md`
- which the key will expire is specified in milliseconds instead of seconds.
- The `PEXPIREAT` command supports a set of options since Redis 7.0:
- * `NX` -- Set expiry only when the key has no expiry
- * `XX` -- Set expiry only when the key has an existing expiry
- * `GT` -- Set expiry only when the new expiry is greater than current one

## PFCOUNT
Source file: `raw/sources/20260409-docs-latest-commands-pfcount-8b832c07d4.md`
- This command's behavior varies in clustered Redis environments. See the [multi-key operations]() page for more information.
- When called with a single key, returns the approximated cardinality computed by the HyperLogLog data structure stored at the specified variable, which is 0 if the variable does not exist.
- When called with multiple keys, returns the approximated cardinality of the union of the HyperLogLogs passed, by internally merging the HyperLogLogs stored at the provided keys into a temporary HyperLogLog.
- The HyperLogLog data structure can be used in order to count **unique** elements in a set using just a small constant amount of memory, specifically 12k bytes for every HyperLogLog (plus a few bytes for the key itself).
- The returned cardinality of the observed set is not exact, but approximated with a standard error of 0.81%.

## PFDEBUG
Source file: `raw/sources/20260409-docs-latest-commands-pfdebug-687b79ae8e.md`
- It is meant to be used for developing and testing Redis.

## PING
Source file: `raw/sources/20260409-docs-latest-commands-ping-3d163cd425.md`
- 1. Testing whether a connection is still alive.
- 1. Verifying the server's ability to serve data - an error is returned when this isn't the case (e.g., during load from persistence or accessing a stale replica).
- If the client is subscribed to a channel or a pattern, it will instead return a
- multi-bulk with a "pong" in the first position and an empty bulk in the second
- position, unless an argument is provided in which case it returns a copy

## PTTL
Source file: `raw/sources/20260409-docs-latest-commands-pttl-ea18038b59.md`
- expire set, with the sole difference that [`TTL`]() returns the amount of remaining
- time in seconds while `PTTL` returns it in milliseconds.
- In Redis 2.6 or older the command returns `-1` if the key does not exist or if the key exist but has no associated expire.
- Starting with Redis 2.8 the return value in case of error changed:
- * The command returns `-2` if the key does not exist.

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

## RENAME
Source file: `raw/sources/20260409-docs-latest-commands-rename-4f68d61d70.md`
- This command's behavior varies in clustered Redis environments. See the [multi-key operations]() page for more information.
- It returns an error when `key` does not exist.
- If `newkey` already exists it is overwritten, when this happens `RENAME` executes an implicit [`DEL`]() operation, so if the deleted key contains a very big value it may cause high latency even if `RENAME` itself is usually a constant-time operation.
- In Cluster mode, both `key` and `newkey` must be in the same **hash slot**, meaning that in practice only keys that have the same hash tag can be reliably renamed in cluster.
- *   `>= 3.2.0`: The command no longer returns an error when source and destination names are the same.

## RENAMENX
Source file: `raw/sources/20260409-docs-latest-commands-renamenx-e9e63a880b.md`
- This command's behavior varies in clustered Redis environments. See the [multi-key operations]() page for more information.
- Renames `key` to `newkey` if `newkey` does not yet exist.
- It returns an error when `key` does not exist.
- In Cluster mode, both `key` and `newkey` must be in the same **hash slot**, meaning that in practice only keys that have the same hash tag can be reliably renamed in cluster.
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |

## RESTORE
Source file: `raw/sources/20260409-docs-latest-commands-restore-cda0359d39.md`
- provided serialized value (obtained via [`DUMP`]()).
- If `ttl` is 0 the key is created without any expire, otherwise the specified
- If the `ABSTTL` modifier was used, `ttl` should represent an absolute
- [Unix timestamp][hewowu] (in milliseconds) in which the key will expire.
- [hewowu]: http://en.wikipedia.org/wiki/Unix_time

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

## SCRIPT DEBUG
Source file: `raw/sources/20260409-docs-latest-commands-script-debug-0a127162b4.md`
- complete Lua debugger, codename LDB, that can be used to make the task of
- writing complex scripts much simpler. In debug mode Redis acts as a remote
- debugging server and a client, such as `redis-cli`, can execute scripts step by
- step, set breakpoints, inspect variables and more - for additional information
- about LDB refer to the [Redis Lua debugger]() page.

## SCRIPT KILL
Source file: `raw/sources/20260409-docs-latest-commands-script-kill-68f634eead.md`
- This command is mainly useful to kill a script that is running for too much
- time(for instance, because it entered an infinite loop because of a bug).
- The script will be killed, and the client currently blocked into EVAL will see
- If the script has already performed write operations, it can not be killed in this
- way because it would violate Lua's script atomicity contract.

## SET
Source file: `raw/sources/20260409-docs-latest-commands-set-c832b1c787.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- If `key` already holds a value, it is overwritten, regardless of its type.
- Any previous time to live associated with the key is discarded on successful `SET` operation.
- The `SET` command supports a set of options that modify its behavior:

## SETBIT
Source file: `raw/sources/20260409-docs-latest-commands-setbit-02db5fd6b3.md`
- The bit is either set or cleared depending on _value_, which can be either 0 or
- When _key_ does not exist, a new string value is created.
- The string is grown to make sure it can hold a bit at _offset_.
- The _offset_ argument is required to be greater than or equal to 0, and smaller
- than 2^32 (this limits bitmaps to 512MB).

## SETEX
Source file: `raw/sources/20260409-docs-latest-commands-setex-c6f99ac04e.md`
- An error is returned when `seconds` is invalid.
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |
- [Simple string reply](../../develop/reference/protocol-spec#simple-strings): `OK`.

## SETNX
Source file: `raw/sources/20260409-docs-latest-commands-setnx-0b67874611.md`
- When `key` already holds a value, no operation is performed.
- 1. The following pattern is discouraged in favor of [the Redlock algorithm]() which is only a bit more complex to implement, but offers better guarantees and is fault tolerant.
- 2. We document the old pattern anyway because certain existing implementations link to this page as a reference. Moreover it is an interesting example of how Redis commands can be used in order to mount programming primitives.
- 3. Anyway even assuming a single-instance locking primitive, starting with 2.6.12 it is possible to create a much simpler locking primitive, equivalent to the one discussed here, using the [`SET`]() command to acquire the lock, and a simple Lua script to release the lock. The pattern is documented in the [`SET`]() command page.
- That said, `SETNX` can be used, and was historically used, as a locking primitive. For example, to acquire the lock of the key `foo`, the client could try the

## SHUTDOWN
Source file: `raw/sources/20260409-docs-latest-commands-shutdown-a965a30408.md`
- * If there are any replicas lagging behind in replication:
- * Pause clients attempting to write by performing a [`CLIENT PAUSE`]() with the `WRITE` option.
- * Wait up to the configured `shutdown-timeout` (default 10 seconds) for replicas to catch up the replication offset.
- * Perform a blocking SAVE if at least one **save point** is configured.
- * Flush the Append Only File if AOF is enabled.

## SORT
Source file: `raw/sources/20260409-docs-latest-commands-sort-b295b62cf6.md`
- There is also the [`SORT_RO`]() read-only variant of this command.
- By default, sorting is numeric and elements are compared by their value
- interpreted as double precision floating point number.
- [tdtss]: /develop/data-types#sorted-sets
- Assuming `mylist` is a list of numbers, this command will return the same list

## SREM
Source file: `raw/sources/20260409-docs-latest-commands-srem-45a3415f7d.md`
- Specified members that are not a member of this set are ignored.
- If `key` does not exist, it is treated as an empty set and this command returns
- An error is returned when the value stored at `key` is not a set.
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|

## STRLEN
Source file: `raw/sources/20260409-docs-latest-commands-strlen-0f64624234.md`
- An error is returned when `key` holds a non-string value.
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |
- [Integer reply](../../develop/reference/protocol-spec#integers): the length of the string stored at key, or 0 when the key does not exist.

## TDIGEST.ADD
Source file: `raw/sources/20260409-docs-latest-commands-tdigest-add-aff39f824b.md`
- <details open><summary><code>key</code></summary>
- is the key name for an existing t-digest sketch.
- <details open><summary><code>value</code></summary>
- is the floating-point value of an observation.
- (error) ERR T-Digest: error parsing val parameter

## TDIGEST.BYRANK
Source file: `raw/sources/20260409-docs-latest-commands-tdigest-byrank-99c94eb368.md`
- Multiple estimations can be retrieved in a single call.
- <details open><summary><code>key</code></summary>
- is the key name of an existing t-digest sketch.
- <details open><summary><code>rank</code></summary>
- Ranks for which the values should be retrieved.

## TDIGEST.BYREVRANK
Source file: `raw/sources/20260409-docs-latest-commands-tdigest-byrevrank-c82afc5f01.md`
- Multiple estimations can be retrieved in a single call.
- <details open><summary><code>key</code></summary>
- is the key name of an existing t-digest sketch.
- <details open><summary><code>revrank</code></summary>
- Reverse ranks for which the values should be retrieved.

## TDIGEST.CDF
Source file: `raw/sources/20260409-docs-latest-commands-tdigest-cdf-0456f620c2.md`
- Multiple fractions can be retrieved in a single call.
- <details open><summary><code>key</code></summary>
- is the key name for an existing t-digest sketch.
- <details open><summary><code>value</code></summary>
- are the values for which the CDF (Cumulative Distribution Function) should be retrieved.

## TDIGEST.CREATE
Source file: `raw/sources/20260409-docs-latest-commands-tdigest-create-56f035afef.md`
- <details open><summary><code>key</code></summary>
- is the key name for this new t-digest sketch.
- <details open><summary><code>COMPRESSION compression</code></summary>
- is a controllable tradeoff between accuracy and memory consumption. 100 is a common value for normal uses and also the default if not specified. 1000 is more accurate. For more information on scaling of accuracy versus the compression value see [_The t-digest: Efficient estimates of distributions_](https://www.sciencedirect.com/science/article/pii/S2665963820300403).
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |

## TDIGEST.INFO
Source file: `raw/sources/20260409-docs-latest-commands-tdigest-info-f6c94fe3d6.md`
- <details open><summary><code>key</code></summary>
- is the key name for an existing t-digest sketch.
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Supported">&#x2705; Supported</span><br /> | <span title="Supported">&#x2705; Flexible & Annual</span><br /><span title="Supported">&#x2705; Free & Fixed</nobr></span> |  |

## TDIGEST.MERGE
Source file: `raw/sources/20260409-docs-latest-commands-tdigest-merge-463f3d491c.md`
- This command's behavior varies in clustered Redis environments. See the [multi-key operations]() page for more information.
- Merges multiple t-digest sketches into a single sketch.
- <details open><summary><code>destination-key</code></summary>
- is the key name for a t-digest sketch to merge observation values to.
- If `destination-key` does not exist, a new sketch is created.

## TDIGEST.QUANTILE
Source file: `raw/sources/20260409-docs-latest-commands-tdigest-quantile-c3c441215a.md`
- Multiple quantiles can be retrieved in a single call.
- <details open><summary><code>key</code></summary>
- is the key name for an existing t-digest sketch.
- <details open><summary><code>quantile</code></summary>
- is the input fraction between 0 and 1 inclusively.

## TDIGEST.RANK
Source file: `raw/sources/20260409-docs-latest-commands-tdigest-rank-53f4dec5e5.md`
- Multiple ranks can be retrieved in a single call.
- <details open><summary><code>key</code></summary>
- is the key name for an existing t-digest sketch.
- <details open><summary><code>value</code></summary>
- is the input value for which the rank should be estimated.

## TDIGEST.RESET
Source file: `raw/sources/20260409-docs-latest-commands-tdigest-reset-abd889dc91.md`
- <details open><summary><code>key</code></summary>
- is the key name for an existing t-digest sketch.
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Supported">&#x2705; Supported</span><br /> | <span title="Supported">&#x2705; Flexible & Annual</span><br /><span title="Supported">&#x2705; Free & Fixed</nobr></span> |  |

## TDIGEST.REVRANK
Source file: `raw/sources/20260409-docs-latest-commands-tdigest-revrank-1eb0eb9ce1.md`
- Multiple reverse ranks can be retrieved in a single call.
- <details open><summary><code>key</code></summary>
- is the key name for an existing t-digest sketch.
- <details open><summary><code>value</code></summary>
- is the input value for which the reverse rank should be estimated.

## TDIGEST.TRIMMED_MEAN
Source file: `raw/sources/20260409-docs-latest-commands-tdigest-trimmed-mean-467c460fd6.md`
- <details open><summary><code>key</code></summary>
- is the key name for an existing t-digest sketch.
- <details open><summary><code>low_cut_quantile</code></summary>
- a floating-point value in the range [0..1]. It must be lower than `high_cut_quantile`.
- When greater than 0, exclude observation values lower than this quantile.

## TOPK.ADD
Source file: `raw/sources/20260409-docs-latest-commands-topk-add-6c85ad0b7b.md`
- Multiple items can be added at the same time.
- If an item enters the Top-K sketch, the item that is expelled (if any) is returned.
- This allows dynamic heavy-hitter detection of items being entered or expelled from Top-K sketch.
- * **key**: the name of the sketch where items are added.
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |

## TOPK.COUNT
Source file: `raw/sources/20260409-docs-latest-commands-topk-count-347ad7e30d.md`
- Multiple items can be requested at once.
- Please note this number will never be higher than the real count and will likely be lower.
- This command has been deprecated. The count value is not a representative of
- * **key**: the name of the sketch where items are to be counted.
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |

## TOPK.INCRBY
Source file: `raw/sources/20260409-docs-latest-commands-topk-incrby-213d136306.md`
- Multiple items' scores can be increased at once.
- If an item enters the Top-K list, the item that is expelled (if any) is returned.
- * **item**: the items to be incremented.
- * **increment**: the value by which items will be incremented. The `increment` must be greater or equal to 1 and less than or equal to 100,000 to avoid server freeze.
- [Array]() of [Simple string reply]() - if an element was dropped from the TopK list, [Nil reply]() otherwise..

## TOPK.INFO
Source file: `raw/sources/20260409-docs-latest-commands-topk-info-231775fdee.md`
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Supported">&#x2705; Supported</span><br /> | <span title="Supported">&#x2705; Flexible & Annual</span><br /><span title="Supported">&#x2705; Free & Fixed</nobr></span> |  |
- * [Array reply]() of [simple string]() and [integer]() pairs. For decay, a [simple string reply]() is used to represent the floating point value.
- * [Simple error reply]() in these cases: incorrect number of arguments, non-existant key, or key of the incorrect type.

## TOPK.LIST
Source file: `raw/sources/20260409-docs-latest-commands-topk-list-2a3e84945e.md`
- * **WITHCOUNT**: the count of each element is also returned.
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Supported">&#x2705; Supported</span><br /> | <span title="Supported">&#x2705; Flexible & Annual</span><br /><span title="Supported">&#x2705; Free & Fixed</nobr></span> |  |
- k (or less) items in the given Top-k sketch. The list is sorted by decreased count estimation.

## TOPK.QUERY
Source file: `raw/sources/20260409-docs-latest-commands-topk-query-5cb91d4cf7.md`
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Supported">&#x2705; Supported</span><br /> | <span title="Supported">&#x2705; Flexible & Annual</span><br /><span title="Supported">&#x2705; Free & Fixed</nobr></span> |  |
- * [Array]() of [integer replies](): `1` if an item is in the Top-K or `0` otherwise.
- * [Simple error reply]() in these cases: non-existant key or key of the incorrect type.

## TOPK.RESERVE
Source file: `raw/sources/20260409-docs-latest-commands-topk-reserve-2fb2390426.md`
- * **key**: the name of the Top-k sketch.
- * **topk**: the number of top (k) occurring items to keep.
- * **width**: Number of counters kept in each array. (Default 8)
- * **depth**: Number of arrays. (Default 7)
- * **decay**: The probability of reducing a counter in an occupied bucket (decay ^ bucket[i].counter). As the counter gets higher, the likelihood of a reduction is lower. (Default 0.9)

## TS.ADD
Source file: `raw/sources/20260409-docs-latest-commands-ts-add-d4f064ae4a.md`
- <details open><summary><code>key</code></summary>
- <details open><summary><code>timestamp</code></summary>
- is Unix time (integer, in milliseconds) specifying the sample timestamp or `*` to set the sample timestamp to the Unix time of the server's clock.
- Unix time is the number of milliseconds that have elapsed since 00:00:00 UTC on 1 January 1970, the Unix epoch, without adjustments made due to leap seconds.
- <details open><summary><code>value</code></summary>

## TS.ALTER
Source file: `raw/sources/20260409-docs-latest-commands-ts-alter-08de657262.md`
- Update the retention, chunk size, duplicate policy, and labels of an existing time series
- <details open><summary><code>key</code></summary>
- <note><b>Note:</b> This command alters only the specified element. For example, if you specify only `RETENTION` and `LABELS`, the chunk size and the duplicate policy are not altered. </note>
- <details open><summary><code>RETENTION retentionPeriod</code></summary>
- is maximum retention period, compared to the maximum existing timestamp, in milliseconds. See `RETENTION` in [`TS.CREATE`]().

## TS.CREATE
Source file: `raw/sources/20260409-docs-latest-commands-ts-create-154ea6f135.md`
- <details open><summary><code>key</code></summary>
- <details open><summary><code>RETENTION retentionPeriod</code></summary>
- is maximum age for samples compared to the highest reported timestamp, in milliseconds. Samples are expired based solely on the difference between their timestamp and the timestamps passed to subsequent [`TS.ADD`](), [`TS.MADD`](), [`TS.INCRBY`](), and [`TS.DECRBY`]() calls with this key.
- When set to 0, samples never expire. When not specified, the option is set to the global [RETENTION_POLICY]() configuration of the database, which by default is 0.
- <details open><summary><code>ENCODING enc</code></summary>

## TS.CREATERULE
Source file: `raw/sources/20260409-docs-latest-commands-ts-createrule-2375c63225.md`
- This command's behavior varies in clustered Redis environments. See the [multi-key operations]() page for more information.
- <details open><summary><code>sourceKey</code></summary>
- <details open><summary><code>destKey</code></summary>
- is key name for destination (compacted) time series. It must be created before `TS.CREATERULE` is called.
- <details open><summary><code>AGGREGATION aggregator bucketDuration</code></summary>

## TS.DECRBY
Source file: `raw/sources/20260409-docs-latest-commands-ts-decrby-fa7f1d882a.md`
- Decrease the value of the sample with the maximum existing timestamp, or create a new sample with a value equal to the value of the sample with the maximum existing timestamp with a given decrement
- <details open><summary><code>key</code></summary>
- <details open><summary><code>subtrahend</code></summary>
- is numeric value of the subtrahend (double). An error is returned if the subtrahend is NaN.
- <details open><summary><code>TIMESTAMP timestamp</code></summary>

## TS.DEL
Source file: `raw/sources/20260409-docs-latest-commands-ts-del-c0ea1c5e39.md`
- Delete all samples between two timestamps for a given time series
- <details open><summary><code>key</code></summary>
- <details open><summary><code>fromTimestamp</code></summary>
- is start timestamp for the range deletion.
- <details open><summary><code>toTimestamp</code></summary>

## TS.DELETERULE
Source file: `raw/sources/20260409-docs-latest-commands-ts-deleterule-af496004c3.md`
- This command's behavior varies in clustered Redis environments. See the [multi-key operations]() page for more information.
- <details open><summary><code>sourceKey</code></summary>
- <details open><summary><code>destKey</code></summary>
- is key name for destination (compacted) time series.
- <note><b>Note:</b> This command does not delete the compacted series.</note>

## TS.GET
Source file: `raw/sources/20260409-docs-latest-commands-ts-get-880812efd7.md`
- Get the sample with the highest timestamp from a given time series. Starting from Redis 8.6, NaN values are included in the results.
- <details open><summary><code>key</code></summary>
- <details open><summary><code>LATEST</code> (since RedisTimeSeries v1.8)</summary>
- is used when a time series is a compaction. With `LATEST`, TS.GET reports the compacted value of the latest (possibly partial) bucket. Without `LATEST`, TS.GET does not report the latest (possibly partial) bucket. When a time series is not a compaction, `LATEST` is ignored.
- The data in the latest bucket of a compaction is possibly partial. A bucket is _closed_ and compacted only upon arrival of a new sample that _opens_ a new _latest_ bucket. There are cases, however, when the compacted value of the latest (possibly partial) bucket is also required. In such a case, use `LATEST`.

## TS.INCRBY
Source file: `raw/sources/20260409-docs-latest-commands-ts-incrby-3be09141ed.md`
- Increase the value of the sample with the maximum existing timestamp, or create a new sample with a value equal to the value of the sample with the maximum existing timestamp with a given increment
- <details open><summary><code>key</code></summary>
- <details open><summary><code>addend</code></summary>
- is numeric value of the addend (double). An error is returned if the addend is NaN.
- <details open><summary><code>TIMESTAMP timestamp</code></summary>

## TS.INFO
Source file: `raw/sources/20260409-docs-latest-commands-ts-info-d6f204bfd2.md`
- Return information and statistics for a time series.
- is an optional flag to get a more detailed information about the chunks.
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Supported">&#x2705; Supported</span><br /> | <span title="Supported">&#x2705; Flexible & Annual</span><br /><span title="Supported">&#x2705; Free & Fixed</nobr></span> |  |

## TS.MADD
Source file: `raw/sources/20260409-docs-latest-commands-ts-madd-e29cd26733.md`
- This command's behavior varies in clustered Redis environments. See the [multi-key operations]() page for more information.
- Append new samples to one or more time series
- <summary><code>timestamp</code></summary>
- is Unix time (integer, in milliseconds) specifying the sample timestamp or `*` to set the sample timestamp to the Unix time of the server's clock.
- Unix time is the number of milliseconds that have elapsed since 00:00:00 UTC on 1 January 1970, the Unix epoch, without adjustments made due to leap seconds.

## TS.MGET
Source file: `raw/sources/20260409-docs-latest-commands-ts-mget-551b29963f.md`
- This command's behavior varies in clustered Redis environments. See the [multi-key operations]() page for more information.
- Get the sample with the highest timestamp from each time series matching a specific filter. Starting from Redis 8.6, NaN values are included in the results.
- This command will reply only if the current user has read access to all keys that match the filter.
- Otherwise, it will reply with "*(error): current user doesn't have read permission to one or more keys that match the specified filter*".
- <summary><code>FILTER filterExpr...</code></summary>

## TS.MRANGE
Source file: `raw/sources/20260409-docs-latest-commands-ts-mrange-eb35bc005e.md`
- This command's behavior varies in clustered Redis environments. See the [multi-key operations]() page for more information.
- Query a range across multiple time series by filters in the forward direction. Starting from Redis 8.6, NaN values are included in raw measurement reports (queries without aggregation).
- This command will reply only if the current user has read access to all keys that match the filter.
- Otherwise, it will reply with "*(error): current user doesn't have read permission to one or more keys that match the specified filter*".
- <summary><code>fromTimestamp</code></summary>

## TS.MREVRANGE
Source file: `raw/sources/20260409-docs-latest-commands-ts-mrevrange-60f81d6cbf.md`
- This command's behavior varies in clustered Redis environments. See the [multi-key operations]() page for more information.
- Query a range across multiple time series by filters in the reverse direction. Starting from Redis 8.6, NaN values are included in raw measurement reports (queries without aggregation).
- This command will reply only if the current user has read access to all keys that match the filter.
- Otherwise, it will reply with "*(error): current user doesn't have read permission to one or more keys that match the specified filter*".
- <summary><code>fromTimestamp</code></summary>

## TS.QUERYINDEX
Source file: `raw/sources/20260409-docs-latest-commands-ts-queryindex-e602ecfbd8.md`
- This command's behavior varies in clustered Redis environments. See the [multi-key operations]() page for more information.
- Get all time series keys matching a filter list. Note: all matching keys will be listed, whether or not the user has read access.
- <summary><code>filterExpr...</code></summary>
- filters time series based on their labels and label values. Each filter expression has one of the following syntaxes:
- <note><b>Note:</b> The `QUERYINDEX` command cannot be part of a transaction when running on a Redis cluster.</note>

## TS.RANGE
Source file: `raw/sources/20260409-docs-latest-commands-ts-range-24838bab0e.md`
- Query a range in forward direction. Starting from Redis 8.6, NaN values are included in raw measurement reports (queries without aggregation).
- <summary><code>fromTimestamp</code></summary>
- is start timestamp for the range query (integer Unix timestamp in milliseconds) or `-` to denote the timestamp of the earliest sample in the time series.
- <summary><code>toTimestamp</code></summary>
- is end timestamp for the range query (integer Unix timestamp in milliseconds) or `+` to denote the timestamp of the latest sample in the time series.

## TS.REVRANGE
Source file: `raw/sources/20260409-docs-latest-commands-ts-revrange-b209521d1c.md`
- Query a range in reverse direction. Starting from Redis 8.6, NaN values are included in raw measurement reports (queries without aggregation).
- <summary><code>fromTimestamp</code></summary>
- is start timestamp for the range query (integer Unix timestamp in milliseconds) or `-` to denote the timestamp of the earliest sample in the time series.
- <summary><code>toTimestamp</code></summary>
- is end timestamp for the range query (integer Unix timestamp in milliseconds) or `+` to denote the timestamp of the latest sample in the time series.

## TTL
Source file: `raw/sources/20260409-docs-latest-commands-ttl-6732a49e75.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- Returns the remaining time to live of a key that has a timeout.
- This introspection capability allows a Redis client to check how many seconds a
- given key will continue to be part of the dataset.

## VADD
Source file: `raw/sources/20260409-docs-latest-commands-vadd-65b4835ac4.md`
- Add a new element into the vector set specified by `key`. The vector can be provided as 32-bit floating point (`FP32`) blob of values, or as floating point numbers as strings, prefixed by the number of elements (3 in the example below):
- is the name of the key that will hold the vector set data.
- <summary><code>FP32 vector or VALUES num vector</code></summary>
- either a 32-bit floating point (FP32) blob of values or `num` floating point numbers as strings. When using the FP32 format, the blob must use little-endian encoding. On platforms with different endianness, you should either manually adjust the byte order or use the VALUES syntax instead.
- is the name of the element that is being added to the vector set.

## VDIM
Source file: `raw/sources/20260409-docs-latest-commands-vdim-a8fbac962f.md`
- Return the number of dimensions of the vectors in the specified vector set.
- If the vector set was created using the `REDUCE` option for dimensionality reduction, this command reports the reduced dimension. However, you must still use full-size vectors when performing queries with the `VSIM` command.
- is the name of the key that holds the vector set.
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|

## VLINKS
Source file: `raw/sources/20260409-docs-latest-commands-vlinks-d3012c3db3.md`
- Return the neighbors of a specified element in a vector set. The command shows the connections for each layer of the HNSW graph.
- Use the `WITHSCORES` option to include similarity scores for each neighbor.
- is the name of the key that holds the vector set.
- is the name of the element whose HNSW neighbors you want to inspect.
- <summary><code>WITHSCORES</code></summary>

## VSETATTR
Source file: `raw/sources/20260409-docs-latest-commands-vsetattr-2eca9d67e6.md`
- Associate a JSON object with an element in a vector set. Use this command to store attributes that can be used in filtered similarity searches with `VSIM`.
- You can also update existing attributes or delete them by setting an empty string.
- To remove attributes, pass an empty JSON string:
- is the name of the key that holds the vector set.
- is the name of the element whose attributes you want to set or remove.

## VSIM
Source file: `raw/sources/20260409-docs-latest-commands-vsim-09f81609f8.md`
- Return elements similar to a given vector or element. Use this command to perform approximate or exact similarity searches within a vector set.
- You can query using either a vector (via `FP32` or `VALUES num`) or by referencing another element (using `ELE`). Optional parameters let you control the search behavior, such as score output, result count, and filtering options.
- You can include similarity scores, attributes (if any), and limit the number of results:
- Set the `EF` (exploration factor) to improve recall at the cost of performance. Use the `TRUTH` option to perform an exact linear scan, useful for benchmarking. The `NOTHREAD` option runs the search in the main thread and may increase server latency.
- is the name of the key that holds the vector set data.

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

## XCFGSET
Source file: `raw/sources/20260409-docs-latest-commands-xcfgset-efb80f081c.md`
- <details open><summary><code>key</code></summary>
- The name of the stream key. The stream must already exist.
- <details open><summary><code>IDMP-DURATION idmp-duration</code></summary>
- Sets the duration in seconds that each idempotent ID (iid) is kept in the stream's IDMP map. Valid range: 1-86,400 seconds. Default: 100 seconds.
- When an idempotent ID expires, it can be reused for new messages. This provides an operational guarantee that Redis will not forget an idempotency ID before the duration elapses (unless capacity is reached).

## XGROUP CREATE
Source file: `raw/sources/20260409-docs-latest-commands-xgroup-create-ff27395037.md`
- Every group has a unique name in a given stream.
- When a consumer group with the same name already exists, the command returns a `-BUSYGROUP` error.
- The command's `<id>` argument specifies the last delivered entry in the stream from the new group's perspective.
- The special ID `$` is the ID of the last entry in the stream, but you can substitute it with any valid ID.
- For example, if you want the group's consumers to fetch the entire stream from the beginning, use zero as the starting ID for the consumer group:

## XREAD
Source file: `raw/sources/20260409-docs-latest-commands-xread-40eb9fb183.md`
- This command's behavior varies in clustered Redis environments. See the [multi-key operations]() page for more information.
- Read data from one or multiple streams, only returning entries with an
- ID greater than the last received ID reported by the caller.
- This command has an option to block if items are not available, in a similar
- fashion to [`BRPOP`]() or [`BZPOPMIN`]() and others.

## XREADGROUP
Source file: `raw/sources/20260409-docs-latest-commands-xreadgroup-bb0de5a130.md`
- This command's behavior varies in clustered Redis environments. See the [multi-key operations]() page for more information.
- The `XREADGROUP` command is a special version of the [`XREAD`]() command
- with support for consumer groups. Probably you will have to understand the
- [`XREAD`]() command before reading this page will makes sense.
- Moreover, if you are new to streams, we recommend to read our

## ZADD
Source file: `raw/sources/20260409-docs-latest-commands-zadd-3456edb2fb.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- Adds all the specified members with the specified scores to the sorted set
- It is possible to specify multiple score / member pairs.
- If a specified member is already a member of the sorted set, the score is

## ZINCRBY
Source file: `raw/sources/20260409-docs-latest-commands-zincrby-caf6c579a9.md`
- If `member` does not exist in the sorted set, it is added with `increment` as
- its score (as if its previous score was `0.0`).
- If `key` does not exist, a new sorted set with the specified `member` as its
- An error is returned when `key` exists but does not hold a sorted set.
- The `score` value should be the string representation of a numeric value, and

## ZPOPMAX
Source file: `raw/sources/20260409-docs-latest-commands-zpopmax-72c8caab69.md`
- When left unspecified, the default value for `count` is 1. Specifying a `count`
- value that is higher than the sorted set's cardinality will not produce an
- error. When returning multiple elements, the one with the highest score will
- be the first, followed by the elements with lower scores.
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |

## ZPOPMIN
Source file: `raw/sources/20260409-docs-latest-commands-zpopmin-92ed50221a.md`
- When left unspecified, the default value for `count` is 1. Specifying a `count`
- value that is higher than the sorted set's cardinality will not produce an
- error. When returning multiple elements, the one with the lowest score will
- be the first, followed by the elements with greater scores.
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |

## ZRANGE
Source file: `raw/sources/20260409-docs-latest-commands-zrange-e92b9fc60f.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- Returns the specified range of elements in the sorted set stored at `<key>`.
- Starting with Redis 6.2.0, this command can replace the following commands: [`ZREVRANGE`](), [`ZRANGEBYSCORE`](), [`ZREVRANGEBYSCORE`](), [`ZRANGEBYLEX`]() and [`ZREVRANGEBYLEX`]().
- The order of elements is from the lowest to the highest score. Elements with the same score are ordered lexicographically.

## ZREM
Source file: `raw/sources/20260409-docs-latest-commands-zrem-55ed5be73d.md`
- An error is returned when `key` exists and does not hold a sorted set.
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |
- [Integer reply](../../develop/reference/protocol-spec#integers): the number of members removed from the sorted set, not including non-existing members.

## How agents work
Source file: `raw/sources/20260409-docs-latest-develop-ai-agent-builder-agent-concepts-377fa9acde.md`
- AI agents are autonomous systems that go far beyond simple chatbots. They combine large language models (LLMs) with external tools, memory, and planning capabilities to accomplish complex tasks.
- Every user interaction follows a 6-step cycle that makes agents intelligent:
- > Example: When you ask "Book me a flight to Paris and find a hotel," the agent breaks this into separate tasks, remembers your travel preferences, searches for options, and coordinates the booking process.
- Redis is the **ideal foundation** for AI agents because it excels at the three things agents need most: **speed**, **memory**, and **search**.
- <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">

## Connect providers in Featureform
Source file: `raw/sources/20260409-docs-latest-develop-ai-featureform-providers-31129abb17.md`
- Use providers to connect Featureform to the systems where your data already lives.
- Redis is the online provider in the Featureform workflow.
- Before you register providers, make sure you have:
- Featureform's current provider APIs rely heavily on catalog configuration. For Snowflake and Databricks, make sure you choose the catalog model before you register providers or datasets.
- Featureform supports several offline systems, including:

## Training sets and feature views in Featureform
Source file: `raw/sources/20260409-docs-latest-develop-ai-featureform-training-sets-and-feature-views-b5991e665f.md`
- Training sets and feature views are where Featureform turns definitions into outputs that model builders and applications can use.
- In the current workflow, `client.apply()` registers metadata for providers, datasets, transformations, entities, features, and labels:
- This is a separate step from creating the Redis-backed serving surface.
- Register a training set by combining a label with the features you want to train on:
- After registration, iterate over the training set or convert it to a data frame for analysis:

## LLM Cache
Source file: `raw/sources/20260409-docs-latest-develop-ai-redisvl-api-cache-8f7b2c2832.md`
- Semantic Cache for Large Language Models.
- Semantic Cache for Large Language Models.
- * **name** (*str* *,* *optional*) â The name of the semantic cache search index.
- * **distance_threshold** (*float* *,* *optional*) â Semantic threshold for the
- * **ttl** (*Optional* *[* *int* *]* *,* *optional*) â The time-to-live for records cached

## Filter
Source file: `raw/sources/20260409-docs-latest-develop-ai-redisvl-api-filter-efe5d0595f.md`
- A FilterExpression is a logical combination of filters in RedisVL.
- FilterExpressions can be combined using the & and | operators to create
- complex expressions that evaluate to the Redis Query language.
- This presents an interface by which users can create complex queries
- without having to know the Redis Query language.

## LLM Message History
Source file: `raw/sources/20260409-docs-latest-develop-ai-redisvl-api-message-history-27872a49fc.md`
- <a id="semantic-message-history-api"></a>
- Semantic Message History stores the current and previous user text prompts
- and LLM responses to allow for enriching future prompts with session
- context. Message history is stored in individual user or LLM prompts and
- * **name** (*str*) â The name of the message history index.

## Query
Source file: `raw/sources/20260409-docs-latest-develop-ai-redisvl-api-query-e1d92bf3df.md`
- Query classes in RedisVL provide a structured way to define simple or complex
- queries for different use cases. Each query class wraps the `redis-py` Query module
- [https://github.com/redis/redis-py/blob/master/redis/commands/search/query.py](https://github.com/redis/redis-py/blob/master/redis/commands/search/query.py) with extended functionality for ease-of-use.
- A query for running a vector search along with an optional filter
- * **vector** (*List* *[* *float* *]*) â The vector to perform the vector search with.

## Rerankers
Source file: `raw/sources/20260409-docs-latest-develop-ai-redisvl-api-reranker-dcb427aa43.md`
- The CohereReranker class uses Cohereâs API to rerank documents based on an
- This reranker is designed to interact with Cohereâs /rerank API,
- requiring an API key for authentication. The key can be provided
- directly in the api_config dictionary or through the COHERE_API_KEY
- environment variable. User must obtain an API key from Cohereâs website

## Semantic Router
Source file: `raw/sources/20260409-docs-latest-develop-ai-redisvl-api-router-12d5eb9d93.md`
- Semantic Router for managing and querying route vectors.
- * **name** (*str*) â The name of the semantic router.
- * **routes** (*List* *[*[Route](#route) *]*) â List of Route objects.
- * **vectorizer** (*BaseVectorizer* *,* *optional*) â The vectorizer used to embed route references. Defaults to default HFTextVectorizer.
- * **routing_config** ([RoutingConfig](#routingconfig) *,* *optional*) â Configuration for routing behavior. Defaults to the default RoutingConfig.

## Schema
Source file: `raw/sources/20260409-docs-latest-develop-ai-redisvl-api-schema-30e7a0e24f.md`
- Schema in RedisVL provides a structured format to define index settings and
- field configurations using the following three components:
- | Component   | Description                                                                        |
- |-------------|------------------------------------------------------------------------------------|
- | version     | The version of the schema spec. Current supported version is 0.1.0.                |

## Search Index Classes
Source file: `raw/sources/20260409-docs-latest-develop-ai-redisvl-api-searchindex-165f060d7c.md`
- | Class                                     | Description                                                                                  |
- |-------------------------------------------|----------------------------------------------------------------------------------------------|
- | [SearchIndex](#searchindex-api)           | Primary class to write, read, and search across data structures in Redis.                    |
- | [AsyncSearchIndex](#asyncsearchindex-api) | Async version of the SearchIndex to write, read, and search across data structures in Redis. |
- A search index class for interacting with Redis as a vector database.

## LLM Session Manager
Source file: `raw/sources/20260409-docs-latest-develop-ai-redisvl-api-session-manager-df63912e69.md`
- <a id="semantic-session-manager-api"></a>
- Session Manager stores the current and previous user text prompts and
- LLM responses to allow for enriching future prompts with session
- context. Session history is stored in individual user or LLM prompts and
- * **name** (*str*) â The name of the session manager index.

## Vector
Source file: `raw/sources/20260409-docs-latest-develop-ai-redisvl-api-vector-ab3edfb1f3.md`
- The Vector class in RedisVL is a container that encapsulates a numerical vector, itâs datatype, corresponding index field name, and optional importance weight. It is used when constructing multi-vector queries using the MultiVectorQuery class.
- Simple object containing the necessary arguments to perform a multi vector query.
- Create a new model by parsing and validating input data from keyword arguments.
- Raises [ValidationError][pydantic_core.ValidationError] if the input data cannot be
- self is explicitly positional-only to allow self as a field name.

## Vectorizers
Source file: `raw/sources/20260409-docs-latest-develop-ai-redisvl-api-vectorizer-669a1e15b5.md`
- The HFTextVectorizer class leverages Hugging Faceâs Sentence Transformers
- for generating vector embeddings from text input.
- This vectorizer is particularly useful in scenarios where advanced natural language
- processing and understanding are required, and ideal for running on your own
- You can optionally enable caching to improve performance when generating

## Caching Embeddings
Source file: `raw/sources/20260409-docs-latest-develop-ai-redisvl-user-guide-embeddings-cache-73671559e1.md`
- RedisVL provides an `EmbeddingsCache` that makes it easy to store and retrieve embedding vectors with their associated text and metadata. This cache is particularly useful for applications that frequently compute the same embeddings, enabling you to:
- This notebook will show you how to use the `EmbeddingsCache` effectively in your applications.
- First, let's import the necessary libraries. We'll use a text embedding model from HuggingFace to generate our embeddings.
- Let's create a vectorizer to generate embeddings for our texts:
- /Users/tyler.hutcherson/Documents/AppliedAI/redis-vl-python/.venv/lib/python3.13/site-packages/tqdm/auto.py:21: TqdmWarning: IProgress not found. Please update jupyter and ipywidgets. See https://ipywidgets.readthedocs.io/en/stable/user_install.html

## Getting Started with RedisVL
Source file: `raw/sources/20260409-docs-latest-develop-ai-redisvl-user-guide-getting-started-81e43e20a5.md`
- 6. Building `VectorQuery` objects and executing searches
- The `IndexSchema` maintains crucial **index configuration** and **field definitions** to
- enable search with Redis. For ease of use, the schema can be constructed from a
- Consider a dataset with user information, including `job`, `age`, `credit_score`,
- and a 3-dimensional `user_embedding` vector.

## LLM Caching
Source file: `raw/sources/20260409-docs-latest-develop-ai-redisvl-user-guide-llmcache-1b8dde6c28.md`
- This notebook demonstrates how to use RedisVL's `SemanticCache` to cache LLM responses based on semantic similarity. Semantic caching can significantly reduce API costs and latency by retrieving cached responses for semantically similar prompts instead of making redundant API calls.
- First, we will import [OpenAI](https://platform.openai.com) to use their API for responding to user prompts. We will also create a simple `ask_openai` helper method to assist.
- 13:02:02 sentence_transformers.SentenceTransformer INFO   Use pytorch device_name: mps
- 13:02:02 sentence_transformers.SentenceTransformer INFO   Load pretrained SentenceTransformer: redis/langcache-embed-v1
- 13:02:02 sentence_transformers.SentenceTransformer WARNING   You try to use a model that was created with version 4.1.0, however, your version is 3.4.1. This might cause unexpected behavior or errors. In that case, try to update to the latest version.

## 0.5.1 Feature Overview
Source file: `raw/sources/20260409-docs-latest-develop-ai-redisvl-user-guide-release-guide-0-5-0-release-7841f6b892.md`
- This notebook provides an overview of what's new with the 0.5.1 release of redisvl. It also highlights changes and potential enhancements for existing usage.
- 12:44:52 redisvl.index.index INFO   Index already exists, overwriting.
- Perform hybrid lexical (BM25) and vector search where results are ranked by: `hybrid_score = (1-alpha)*lexical_Score + alpha*vector_similarity`.
- TextQueries make it easy to perform pure lexical search with redisvl.
- [{'id': 'jobs:01JR0V1SA29RVD9AAVSTBV9P5H',

## SVS-VAMANA Vector Search
Source file: `raw/sources/20260409-docs-latest-develop-ai-redisvl-user-guide-svs-vamana-2848b31735.md`
- In this notebook, we will explore SVS-VAMANA (Scalable Vector Search with VAMANA graph algorithm), a graph-based vector search algorithm that is optimized to work with compression methods to reduce memory usage. It combines the Vamana graph algorithm with advanced compression techniques (LVQ and LeanVec) and is optimized for Intel hardware.
- Vamana builds a single-layer proximity graph and prunes edges during construction based on tunable parameters, similar to HNSW but with a simpler structure. The compression methods apply per-vector normalization and scalar quantization, learning parameters directly from the data to enable fast, on-the-fly distance computations with SIMD-optimized layout Vector quantization and compression.
- 2. [Quick Start with CompressionAdvisor](#Quick-Start-with-CompressionAdvisor)
- 3. [Creating an SVS-VAMANA Index](#Creating-an-SVS-VAMANA-Index)
- 4. [Loading Sample Data](#Loading-Sample-Data)

## Vectorizers
Source file: `raw/sources/20260409-docs-latest-develop-ai-redisvl-user-guide-vectorizers-57b9e1e6ad.md`
- In this notebook, we will show how to use RedisVL to create embeddings using the built-in text embedding vectorizers. Today RedisVL supports:
- Before running this notebook, be sure to
- 1. Have installed ``redisvl`` and have that environment active for this notebook.
- 2. Have a running Redis Stack instance with RediSearch > 2.4 active.
- For example, you can run Redis Stack locally with Docker:

## Configuration parameters
Source file: `raw/sources/20260409-docs-latest-develop-ai-search-and-query-administration-configuration-4b4c0d3445.md`
- As of Redis 8 in Redis Open Source (Redis 8), configuration parameters for Redis Search are now set in the following ways:
- * At load time via your `redis.conf` file.
- * At run time (where applicable) using the [`CONFIG SET`]() command.
- Also, Redis 8 persists Redis Search configuration parameters just like any other configuration parameters (e.g., using the [`CONFIG REWRITE`]() command).
- The following table summarizes which configuration parameters can be set at run-time, and compatibility with Redis Software and Redis Cloud.

## Extend existing search and query features
Source file: `raw/sources/20260409-docs-latest-develop-ai-search-and-query-administration-extensions-fce8ab8916.md`
- RediSearch supports an extension mechanism, much like Redis supports modules. The API is very minimal at the moment, and it does not yet support dynamic loading of extensions on a running server. Instead, extensions must be written in C (or a language that has an interface with C) and compiled into dynamic libraries that can be loaded at start up.
- There are two kinds of extension APIs at the moment:
- 1. **Query expanders**, whose role is to expand query tokens (i.e., stemmers).
- 2. **Scoring functions**, whose role is to rank search results at query time.
- Extensions should be compiled into dynamic library files (e.g., `.so` files), and loaded into the RediSearch module during initialization.

## Aggregations
Source file: `raw/sources/20260409-docs-latest-develop-ai-search-and-query-advanced-concepts-aggregations-71b722b942.md`
- Aggregations are a way to process the results of a search query. Aggregation allows you to group, sort, and transform your result data, and to extract analytic insights from it. Much like aggregation queries in other databases and search engines, they can be used to create analytics reports, or perform [faceted search](https://en.wikipedia.org/wiki/Faceted_search) style queries.
- For example, indexing a web-server's logs, you can create a report for unique users by hour, country, or any other breakdown. Or you can create different reports for errors, warnings, etc.
- The basic idea of an aggregate query is this:
- * Perform a search query, filtering for records you wish to process.
- * Build a pipeline of operations that transform the results by zero or more sequences of:

## FT.AGGREGATE order of operations
Source file: `raw/sources/20260409-docs-latest-develop-ai-search-and-query-advanced-concepts-aggregations-syntax-6e553a533c.md`
- [`FT.AGGREGATE`]() is a powerful Redis Search command for performing advanced data aggregation, filtering, sorting, and transformations on indexed hash or JSON documents. This reference page provides a structured breakdown of syntax, ordering rules, and best practices.
- The [main aggregations page]() has a simple diagram showing how `FT.AGGREGATE` pipelines are constructed, but it doesn't tell the whole story. For example, you can create more complex aggregation pipelines by applying multiple `REDUCE` functions under a single `GROUPBY` clause, or you can chain groupings and mix in additional mapping steps:
- The examples on this page are based on a hypothetical "products" data set, which you can [download here](./data/products.txt).
- The `FT.AGGREGATE` command processes multiple expressions in a pipeline. Below is the recommended order:
- 1. `index` â the name of your index, which must be the first argument.

## Query attributes
Source file: `raw/sources/20260409-docs-latest-develop-ai-search-and-query-advanced-concepts-query-attributes-fd4ccf2812.md`
- As of v1.2.0, you can apply specific query modifying attributes to specific clauses of the query.
- The syntax is `(foo bar) => { $attribute: value; $attribute:value; ...}`:
- 1. **$weight**: determines the weight of the sub-query or token in the overall ranking on the result (default: 1.0).
- 2. **$slop**: determines the maximum allowed slop (space between terms) in the query clause (default: 0).
- 3. **$inorder**: whether or not the terms in a query clause must appear in the same order as in the query. This is usually set alongside with `$slop` (default: false).

## Query syntax
Source file: `raw/sources/20260409-docs-latest-develop-ai-search-and-query-advanced-concepts-query-syntax-1d938d9383.md`
- The query syntax that RediSearch uses has improved over time,
- adding new features and making queries simpler to write. However,
- changing the syntax like this could potentially break existing queries that rely on
- an older version of the syntax. To avoid this problem, RediSearch supports
- different query syntax *dialects* to ensure backward compatibility.

## Move from Development to Production with Redis Search
Source file: `raw/sources/20260409-docs-latest-develop-ai-search-and-query-best-practices-dev-to-prod-best-practice-87d22a3feb.md`
- Transitioning a Redis Open Source with Redis Search environment from development to production requires thoughtful consideration of configuration, performance tuning, and resource allocation. This guide outlines key practices to ensure your Redis deployment operates optimally under production workloads.
- Redis Search offers several configurable parameters that influence query results and performance. While a full list of these parameters and their functions can be found [here](), this section highlights the most commonly adjusted parameters for production environments.
- <!-- - With Query Performance Factor (QPF): if QPF (multi-threaded query execution) is enabled, the risks of increasing this value are mitigated, as queries execute against index memory using multiple threads.-->
- Redis Search has resource requirements distinct from general caching use cases. Proper sizing ensures that the system can handle production workloads efficiently.
- Production environments must be sized for peak load scenarios to ensure performance remains acceptable under maximum stress.

## Index management best practices for Redis Search
Source file: `raw/sources/20260409-docs-latest-develop-ai-search-and-query-best-practices-index-mgmt-best-practices-25107a3b55.md`
- Redis Search is a powerful tool for executing complex search and query operations on structured, semi-structured, and unstructured data. Indexes are the backbone of this functionality, enabling fast and efficient data retrieval.
- Proper management of these indexes is essential for optimal performance, scalability, and resource utilization.
- This guide outlines best practices for managing Redis Search indexes throughout their lifecycle. It provides recommendations on:
- Indexes directly impact query speed and resource consumption.
- Poorly managed indexes can lead to increased memory usage, slower query times, and challenges in maintaining data consistency.

## Best practices for Redis Search performance
Source file: `raw/sources/20260409-docs-latest-develop-ai-search-and-query-best-practices-scalable-query-best-pract-44fb85fa48.md`
- If you're using Redis Software or Redis Cloud, see the [best practices for scalable Redis Search]() page.
- Below are some basic steps to ensure good performance of Redis Search .
- * Create a Redis data model with your query patterns in mind.
- * Ensure the Redis architecture has been sized for the expected load using the [sizing calculator](https://redis.io/redisearch-sizing-calculator/).
- * Provision Redis nodes with sufficient resources (RAM, CPU, network) to support the expected maximum load.

## Developer notes
Source file: `raw/sources/20260409-docs-latest-develop-ai-search-and-query-deprecated-development-b64c5a8a4a.md`
- Developing RediSearch features involves setting up a development environment (which can be either Linux-based or macOS-based), building the module, running tests and benchmarks, and debugging both the module and its tests.
- Run the following command to clone the RediSearch module and its submodules:
- There are several reasons to develop in an isolated environment, like keeping your workstation clean, and developing for a different Linux distribution.
- The most general option for an isolated environment is a virtual machine. It's very easy to set one up using [Vagrant](https://www.vagrantup.com)).
- Docker is even more agile, as it offers an almost instant solution:

## Indexing
Source file: `raw/sources/20260409-docs-latest-develop-ai-search-and-query-indexing-01a802ea10.md`
- In addition to indexing Redis hashes, Redis Open Source can also index JSON documents.
- When you create an index with the [`FT.CREATE`]() command, include the `ON JSON` keyword to index any existing and future JSON documents stored in the database.
- To define the `SCHEMA`, you can provide [JSONPath]() expressions.
- The result of each JSONPath expression is indexed and associated with a logical name called an `attribute` (previously known as a `field`).
- You can use these attributes in queries.

## Vector search
Source file: `raw/sources/20260409-docs-latest-develop-ai-search-and-query-query-vector-search-581bfe4227.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- This article gives you a good overview of how to perform vector search queries with Redis Search, which is part of Redis Open Source. See the [Redis as a vector database quick start guide]() for more information about Redis as a vector database. You can also find more detailed information about all the parameters in the [vector reference documentation]().
- A vector search query on a vector field allows you to find all vectors in a vector space that are close to a given vector. You can query for the k-nearest neighbors or vectors within a given radius.
- The examples in this article use a schema with the following fields:

## Vector search concepts
Source file: `raw/sources/20260409-docs-latest-develop-ai-search-and-query-vectors-081efd1447.md`
- Redis includes a [high-performance vector database](https://redis.io/blog/benchmarking-results-for-vector-databases/) that lets you perform semantic searches over vector embeddings. You can augment these searches with filtering over text, numerical, geospatial, and tag metadata.
- To quickly get started, check out the [Redis vector quickstart guide]() and the [Redis AI Resources](https://github.com/redis-developer/redis-ai-resources) Github repo.
- 1. [**Create a vector index**](): Redis maintains a secondary index over your data with a defined schema (including vector fields and metadata). Redis supports [`FLAT`](), [`HNSW`]() and [`SVS-VAMANA`]() vector index types.
- 1. [**Store and update vectors**](): Redis stores vectors and metadata in hashes or JSON objects.
- 1. [**Search with vectors**](): Redis supports several advanced querying strategies with vector fields including k-nearest neighbor ([KNN]()), [vector range queries](), and [metadata filters]().

## Vector quantization and compression
Source file: `raw/sources/20260409-docs-latest-develop-ai-search-and-query-vectors-svs-compression-e8e1fdf0c9.md`
- Efficient management of high-dimensional vector data is crucial for scalable search and retrieval. Advanced methods for vector quantization and compression, such as LVQ (Locally-adaptive Vector Quantization) and LeanVec, can dramatically optimize memory usage and improve search speed, without sacrificing much accuracy. This page describes practical approaches to quantizing and compressing vectors for scalable search.
- Some advanced vector compression features may depend on hardware or Intel's proprietary optimizations. Intel's proprietary LVQ and LeanVec optimizations are not available in Redis Open Source. On non-Intel platforms and Redis Open Source platforms, `SVS-VAMANA` with `COMPRESSION` will fall back to basic, 8-bit scalar quantization implementation: all values in a vector are scaled using the global minimum and maximum, and then each dimension is quantized independently into 256 levels using 8-bit precision.
- * **Method:** Applies per-vector normalization and scalar quantization; learns parameters directly from the data.
- * Enables fast, on-the-fly distance computations.
- * SIMD-optimized layout for efficient search.

## NRedisStack guide (C#/.NET)
Source file: `raw/sources/20260409-docs-latest-develop-clients-dotnet-c03904f671.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- [NRedisStack](https://github.com/redis/NRedisStack) is the .NET client for Redis.
- The sections below explain how to install `NRedisStack` and connect your application
- You can also access Redis with an object-mapping client interface. See

## Connect to the server
Source file: `raw/sources/20260409-docs-latest-develop-clients-dotnet-connect-a46976b029.md`
- You can connect to the server simply by passing a string of the
- form "hostname:port" to the `Connect()` method (for example,
- "localhost:6379"). However, you can also connect using a
- username, password, and many other options:
- if it is available without any special configuration. However, if you know

## Error handling
Source file: `raw/sources/20260409-docs-latest-develop-clients-dotnet-error-handling-dfce20c5e5.md`
- NRedisStack uses **exceptions** to signal errors. Code examples in the documentation often omit error handling for brevity, but it is essential in production code. This page explains how NRedisStack's error handling works and how to apply common error handling patterns.
- For an overview of error types and handling strategies, see [Error handling]().
- for more information on connection management, timeouts, and other aspects of
- NRedisStack throws exceptions to signal errors. Common exception types include:
- | Exception | When it occurs | Recoverable | Recommended action |

## Probabilistic data types
Source file: `raw/sources/20260409-docs-latest-develop-clients-dotnet-prob-482c32e5e4.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- that let you calculate values approximately rather than exactly.
- The types fall into two basic categories:
- the number of items in a set of distinct values, and whether or not a given value is

## Production usage
Source file: `raw/sources/20260409-docs-latest-develop-clients-dotnet-produsage-d9568ddd5b.md`
- This guide offers recommendations to get the best reliability and
- performance in your production environment.
- Each item in the checklist below links to the section
- for a recommendation. Use the checklist icons to record your
- progress in implementing the recommendations.

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

## Error handling
Source file: `raw/sources/20260409-docs-latest-develop-clients-error-handling-c2b03438a1.md`
- When working with Redis, errors can occur for various reasons, including network issues, invalid commands, or resource constraints. This guide explains the types of errors you might encounter and how to handle them effectively.
- Redis errors fall into four main categories. The table below provides a quick overview of each type. Click on any error type to jump to its detailed section, which includes common causes, examples, handling strategies, and code examples.
- | Error Type | Common Causes | When to Handle | Examples |
- | [Connection errors](#connection-errors) | Network issues, server down, auth failure, timeouts, pool exhaustion | Almost always | `ConnectionError`, `TimeoutError`, `AuthenticationError` |
- | [Command errors](#command-errors) | Typo in command, wrong arguments, invalid types, unsupported command | Rarely (usually indicates a bug) | `ResponseError`, `WRONGTYPE`, `ERR unknown command` |

## Client-side geographic failover
Source file: `raw/sources/20260409-docs-latest-develop-clients-failover-a0986d37f7.md`
- [Client-side geographic failover](https://en.wikipedia.org/wiki/Failover)
- to improve the availability of connections to Redis databases. Use this page
- to get a general overview of the concepts and then see the documentation for
- your client library to learn how to configure it for failover and failback:
- You may have several [Active-Active databases]()

## Connect to Azure Managed Redis
Source file: `raw/sources/20260409-docs-latest-develop-clients-go-amr-5eba7fe14f.md`
- The [`go-redis-entraid`](https://github.com/redis/go-redis-entraid) package
- [Azure Managed Redis (AMR)](https://azure.microsoft.com/en-us/products/managed-redis)
- using [Microsoft Entra ID](https://learn.microsoft.com/en-us/entra/identity/).
- You can authenticate using a system-assigned or user-assigned
- [managed identity](https://learn.microsoft.com/en-us/entra/identity/managed-identities-azure-resources/overview)

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

## Connect
Source file: `raw/sources/20260409-docs-latest-develop-clients-hiredis-connect-c7d0483a07.md`
- The example below creates a simple synchronous connection to a local
- Redis server and tests the connection, before closing it with
- and port as its arguments, and returns a context object.
- You can also connect to Redis using an asynchronous API.
- The `redisAsyncConnect()` call that creates the context is

## Handle command replies
Source file: `raw/sources/20260409-docs-latest-develop-clients-hiredis-handle-replies-66e745ec97.md`
- The `redisCommand()` and `redisCommandArgv()` functions return
- a pointer to a `redisReply` object when you issue a command (see
- for more information). This type supports all
- protocols, so its content varies greatly between calls.
- A simple example is the status response returned by the [`SET`]()

## Integrate hiredis with a libevent app
Source file: `raw/sources/20260409-docs-latest-develop-clients-hiredis-int-examples-libevent-integration-b986759a2a.md`
- The [`libevent`](https://libevent.org/) library provides an
- implementation of an event loop that lets you call functions
- asynchronously in response to events. This guide explains
- how to use `hiredis` to connect to a Redis server from a
- The [`libevent` home page](https://libevent.org/) has links to download

## Integrate hiredis with a Qt app
Source file: `raw/sources/20260409-docs-latest-develop-clients-hiredis-int-examples-qt-integration-5c7d4992dc.md`
- [Qt](https://www.qt.io/) is a popular cross-platform C++ framework that
- you can use to build command line and GUI apps. This guide explains how
- to use `hiredis` to connect to a Redis server from a Qt app.
- You should first download and install the
- [Qt development environment](https://www.qt.io/download-dev) for your

## Pipelines and transactions
Source file: `raw/sources/20260409-docs-latest-develop-clients-hiredis-transpipe-6b4aee1904.md`
- Redis lets you send a sequence of commands to the server together in a batch.
- There are two types of batch that you can use:
- to the server together in a single communication. The server then sends back
- a single communication with all the responses. See the
- to completion without being interrupted by commands from other clients.

## ioredis guide (JavaScript)
Source file: `raw/sources/20260409-docs-latest-develop-clients-ioredis-0b10d25da5.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- [`ioredis`](https://github.com/redis/ioredis) is a Redis client for Node.js/JavaScript.
- The sections below explain how to install `ioredis` and connect your application
- Redis actively maintains and supports `ioredis` since it is in widespread use, but

## Connect to Azure Managed Redis
Source file: `raw/sources/20260409-docs-latest-develop-clients-jedis-amr-73e37e4339.md`
- The [`redis-authx-entraid`](https://github.com/redis/jvm-redis-authx-entraid) package
- [Azure Managed Redis (AMR)](https://azure.microsoft.com/en-us/products/managed-redis)
- using [Microsoft Entra ID](https://learn.microsoft.com/en-us/entra/identity/).
- You can authenticate using a system-assigned or user-assigned
- [managed identity](https://learn.microsoft.com/en-us/entra/identity/managed-identities-azure-resources/overview)

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

## Error handling
Source file: `raw/sources/20260409-docs-latest-develop-clients-jedis-error-handling-3642f7a40d.md`
- Jedis uses **exceptions** to signal errors. Code examples in the documentation often omit error handling for brevity, but it is essential in production code. This page explains how Jedis's error handling works and how to apply common error handling patterns.
- For an overview of error types and handling strategies, see [Error handling]().
- for more information on connection management, timeouts, and other aspects of
- Jedis organizes exceptions in a hierarchy rooted at `JedisException`, which extends `RuntimeException`. All Jedis exceptions are unchecked exceptions:
- The following exceptions are the most commonly encountered in Jedis applications.

## Client-side geographic failover
Source file: `raw/sources/20260409-docs-latest-develop-clients-jedis-failover-3f75384154.md`
- Jedis supports [Client-side geographic failover](https://en.wikipedia.org/wiki/Failover)
- to improve the availability of connections to Redis databases. This page explains
- how to configure Jedis for failover. For an overview of the concepts,
- see the main [Client-side geographic failover]() page.
- Jedis uses the [resilience4j](https://resilience4j.readme.io/docs/getting-started)

## Probabilistic data types
Source file: `raw/sources/20260409-docs-latest-develop-clients-jedis-prob-33d01da997.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- that let you calculate values approximately rather than exactly.
- The types fall into two basic categories:
- the number of items in a set of distinct values, and whether or not a given value is

## Production usage
Source file: `raw/sources/20260409-docs-latest-develop-clients-jedis-produsage-6bf698f9e6.md`
- This guide offers recommendations to get the best reliability and
- performance in your production environment.
- Each item in the checklist below links to the section
- for a recommendation. Use the checklist icons to record your
- progress in implementing the recommendations.

## Pipelines and transactions
Source file: `raw/sources/20260409-docs-latest-develop-clients-jedis-transpipe-cd3c73b18a.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- Redis lets you send a sequence of commands to the server together in a batch.
- There are two types of batch that you can use:
- to the server together in a single communication. The server then sends back

## Index and query vectors
Source file: `raw/sources/20260409-docs-latest-develop-clients-jedis-vecsearch-cb78dd1cbc.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- lets you index vector fields in [hash]()
- Among other things, vector fields can store *text embeddings*, which are AI-generated vector
- representations of the semantic information in pieces of text. The

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

## Connect to the server
Source file: `raw/sources/20260409-docs-latest-develop-clients-lettuce-connect-4e4f4f7d7f.md`
- Start by creating a connection to your Redis server. There are many ways to achieve this using Lettuce. Here are a few.
- To connect to a Redis cluster, use `RedisClusterClient`.
- Learn more about Cluster connections and how to configure them in [the reference guide](https://redis.github.io/lettuce/ha-sharding/#redis-cluster).
- Learn more about asynchronous Lettuce API in [the reference guide](https://redis.github.io/lettuce/#asynchronous-api).
- Learn more about reactive Lettuce API in [the reference guide](https://redis.github.io/lettuce/#reactive-api).

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

## Connect to Azure Managed Redis
Source file: `raw/sources/20260409-docs-latest-develop-clients-nodejs-amr-bcf3d42e43.md`
- The [`@redis/entraid`](https://github.com/redis/node-redis/tree/master/packages/entraid)
- package lets you authenticate your app to
- [Azure Managed Redis (AMR)](https://azure.microsoft.com/en-us/products/managed-redis)
- using [Microsoft Entra ID](https://learn.microsoft.com/en-us/entra/identity/).
- You can authenticate using a system-assigned or user-assigned

## node-redis guide (JavaScript)
Source file: `raw/sources/20260409-docs-latest-develop-clients-nodejs-c0eab7f90c.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- [`node-redis`](https://github.com/redis/node-redis) is the Redis client for Node.js/JavaScript.
- The sections below explain how to install `node-redis` and connect your application
- node-redis is the recommended client library for Node.js/JavaScript,

## Connect to the server
Source file: `raw/sources/20260409-docs-latest-develop-clients-nodejs-connect-c9ecafe0b3.md`
- To connect to a different host or port, use a connection string in the format `redis[s]://[[username][:password]@][host][:port][/db-number]`:
- To check if the client is connected and ready to send commands, use `client.isReady`, which returns a Boolean. `client.isOpen` is also available. This returns `true` when the client's underlying socket is open, and `false` when it isn't (for example, when the client is still connecting or reconnecting after a network error).
- To connect to a Redis cluster, use `createCluster`.
- When you deploy your application, use TLS and follow the [Redis security]() guidelines.
- You can also use discrete parameters and UNIX sockets. Details can be found in the [client configuration guide](https://github.com/redis/node-redis/blob/master/docs/client-configuration.md).

## Error handling
Source file: `raw/sources/20260409-docs-latest-develop-clients-nodejs-error-handling-28f4621586.md`
- [**promises**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- for error handling. Most Redis JavaScript examples
- throughout the documentation mainly show the "happy path" and omit error
- handling for brevity. This page shows how to apply error handling
- techniques in node-redis for real world code.

## Migrate from ioredis
Source file: `raw/sources/20260409-docs-latest-develop-clients-nodejs-migration-77c8bb12a0.md`
- Redis previously recommended the [`ioredis`]()
- client library for development with [Node.js](https://nodejs.org/en),
- but this library is now deprecated in favor of
- outlines the main similarities and differences between the two libraries.
- You may find this information useful if you are an `ioredis` user and you want to

## Probabilistic data types
Source file: `raw/sources/20260409-docs-latest-develop-clients-nodejs-prob-a880ba35ec.md`
- that let you calculate values approximately rather than exactly.
- The types fall into two basic categories:
- the number of items in a set of distinct values, and whether or not a given value is
- statistics such as the quantiles, ranks, and frequencies of numeric data points in
- To see why these approximate calculations would be useful, consider the task of

## Production usage
Source file: `raw/sources/20260409-docs-latest-develop-clients-nodejs-produsage-2d65954672.md`
- This guide offers recommendations to get the best reliability and
- performance in your production environment.
- Each item in the checklist below links to the section
- for a recommendation. Use the checklist icons to record your
- progress in implementing the recommendations.

## Index and query documents
Source file: `raw/sources/20260409-docs-latest-develop-clients-nodejs-queryjson-3c45a1f1a0.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- run queries against the index. It then goes on to show the slight differences
- From [v5.0.0](https://github.com/redis/node-redis/releases/tag/redis%405.0.0)
- onwards, `node-redis` uses query dialect 2 by default.

## Pipelines and transactions
Source file: `raw/sources/20260409-docs-latest-develop-clients-nodejs-transpipe-bafdfab0ba.md`
- Redis lets you send a sequence of commands to the server together in a batch.
- There are two types of batch that you can use:
- to the server together in a single communication. The server then sends back
- a single communication with all the responses. See the
- to completion without being interrupted by commands from other clients.

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

## Observability
Source file: `raw/sources/20260409-docs-latest-develop-clients-observability-1f4f908334.md`
- Some Redis client libraries implement the [OpenTelemetry](https://opentelemetry.io/) (OTel)
- observability framework to let you gather performance metrics
- for your application. This can help you optimize performance and pinpoint problems
- quickly. Currently, the following clients support OTel:
- An execution trace is a record of the sequence of steps that the Redis

## Bulk loading
Source file: `raw/sources/20260409-docs-latest-develop-clients-patterns-bulk-loading-2690b184be.md`
- Bulk loading is the process of loading Redis with a large amount of pre-existing data. Ideally, you want to perform this operation quickly and efficiently. This document describes some strategies for bulk loading data in Redis.
- Using a normal Redis client to perform bulk loading is not a good idea
- for a few reasons: the naive approach of sending one command after the other
- is slow because you have to pay for the round trip time for every command.
- It is possible to use pipelining, but for bulk loading of many records

## Distributed Locks with Redis
Source file: `raw/sources/20260409-docs-latest-develop-clients-patterns-distributed-locks-0882037cfd.md`
- different processes must operate with shared resources in a mutually
- There are a number of libraries and blog posts describing how to implement
- a DLM (Distributed Lock Manager) with Redis, but every library uses a different
- approach, and many use a simple approach with lower guarantees compared to
- what can be achieved with slightly more complex designs.

## Secondary indexing
Source file: `raw/sources/20260409-docs-latest-develop-clients-patterns-indexes-a9706b5f08.md`
- Redis is not exactly a key-value store, since values can be complex data structures. However it has an external key-value shell: at API level data is addressed by the key name. It is fair to say that, natively, Redis only offers *primary key access*. However since Redis is a data structures server, its capabilities can be used for indexing, in order to create secondary indexes of different kinds, including composite (multi-column) indexes.
- This document explains how it is possible to create indexes in Redis using the following data structures:
- * Hashes and JSON documents, using a variety of field types; used in conjunction with Redis Search.
- * Sorted sets to create secondary indexes by ID or other numerical fields.
- * Sorted sets with lexicographical ranges for creating more advanced secondary indexes, composite indexes and graph traversal indexes.

## Redis patterns example
Source file: `raw/sources/20260409-docs-latest-develop-clients-patterns-twitter-clone-1923224439.md`
- This article describes the design and implementation of a [very simple Twitter clone](https://github.com/antirez/retwis) written using PHP with Redis as the only database. The programming community has traditionally considered key-value stores as a special purpose database that couldn't be used as a drop-in replacement for a relational database for the development of web applications. This article will try to show that Redis data structures on top of a key-value layer are an effective data model to implement many kinds of applications.
- Note: the original version of this article was written in 2009 when Redis was
- released. It was not exactly clear at that time that the Redis data model was
- suitable to write entire applications. Now after 5 years there are many cases of
- applications using Redis as their main store, so the goal of the article today

## Predis guide (PHP)
Source file: `raw/sources/20260409-docs-latest-develop-clients-php-56dc579a88.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- [`Predis`](https://github.com/predis/predis) is the recommended [PHP](https://php.net/)
- The sections below explain how to install `Predis` and connect your application to a Redis database.
- Although we provide basic documentation for `Predis`, it is a third-party

## Index and query documents
Source file: `raw/sources/20260409-docs-latest-develop-clients-php-queryjson-529e89b770.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- run queries against the index. It then goes on to show the slight differences
- From [v3.0.0](https://github.com/predis/predis/releases/tag/v3.0.0) onwards,
- Redis Search methods such as [`ftSearch()`]()

## Index and query vectors
Source file: `raw/sources/20260409-docs-latest-develop-clients-php-vecsearch-1cc5eeda3c.md`
- lets you index vector fields in [hash]()
- Among other things, vector fields can store *text embeddings*, which are AI-generated vector
- representations of the semantic information in pieces of text. The
- between two embeddings indicates how similar they are semantically. By comparing the
- similarity of an embedding generated from some query text with embeddings stored in hash

## Connect to Azure Managed Redis
Source file: `raw/sources/20260409-docs-latest-develop-clients-redis-py-amr-1dc7b8e171.md`
- The [`redis-entra-id`](https://github.com/redis/redis-py-entraid) package
- [Azure Managed Redis (AMR)](https://azure.microsoft.com/en-us/products/managed-redis)
- using [Microsoft Entra ID](https://learn.microsoft.com/en-us/entra/identity/).
- You can authenticate using a system-assigned or user-assigned
- [managed identity](https://learn.microsoft.com/en-us/entra/identity/managed-identities-azure-resources/overview)

## Connect to the server
Source file: `raw/sources/20260409-docs-latest-develop-clients-redis-py-connect-03e35294c7.md`
- Connect to localhost on port 6379, set a value in Redis, and retrieve it. All responses are returned as bytes in Python. To receive decoded strings, set `decode_responses=True`. For more connection options, see [these examples](https://redis.readthedocs.io/en/stable/examples.html).
- To connect to a Redis cluster, use `RedisCluster`.
- For more information, see [redis-py Clustering](https://redis.readthedocs.io/en/stable/clustering.html).
- When you deploy your application, use TLS and follow the [Redis security]() guidelines.
- For more information, see [redis-py TLS examples](https://redis.readthedocs.io/en/stable/examples/ssl_connection_examples.html).

## Error handling
Source file: `raw/sources/20260409-docs-latest-develop-clients-redis-py-error-handling-42155d0d77.md`
- redis-py uses **exceptions** to signal errors. The redis-py documentation mainly
- shows the "happy path" in code examples and omits error handling for brevity.
- redis-py's error handling works and how to apply common error handling patterns.
- For an overview of error types and handling strategies, see
- for more information on connection management, timeouts, and other aspects of

## Client-side geographic failover
Source file: `raw/sources/20260409-docs-latest-develop-clients-redis-py-failover-330be68c66.md`
- redis-py supports [Client-side geographic failover](https://en.wikipedia.org/wiki/Failover)
- to improve the availability of connections to Redis databases. This page explains
- how to configure redis-py for failover. For an overview of the concepts,
- see the main [Client-side geographic failover]() page.
- The example below shows a simple case with a list of two servers,

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

## Production usage
Source file: `raw/sources/20260409-docs-latest-develop-clients-redis-py-produsage-daef7ee89c.md`
- This guide offers recommendations to get the best reliability and
- performance in your production environment.
- Each item in the checklist below links to the section
- for a recommendation. Use the checklist icons to record your
- progress in implementing the recommendations.

## Index and query documents
Source file: `raw/sources/20260409-docs-latest-develop-clients-redis-py-queryjson-cefc402535.md`
- run queries against the index. It then goes on to show the slight differences
- From [v6.0.0](https://github.com/redis/redis-py/releases/tag/v6.0.0) onwards,
- Redis Search methods such as [`ft().search()`]()
- will explicitly request this dialect, overriding the default set for the server.
- Make sure that you have [Redis Open Source]()

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

## Error handling
Source file: `raw/sources/20260409-docs-latest-develop-clients-rust-error-handling-c0e96e106d.md`
- redis-rs uses **Result types** following Rust's idiomatic error handling pattern. Code examples in the documentation often omit error handling for brevity,
- This page explains how error handling works in redis-rs and how to apply
- some common error handling patterns. For an overview of error types and handling
- In Rust, functions return errors using the `Result<T, E>` type. You can check for errors explicitly with code like the following:
- redis-rs provides a `RedisError` type with various error kinds. Common error kinds include:

## Pipelines and transactions
Source file: `raw/sources/20260409-docs-latest-develop-clients-rust-transpipe-d812d80ca9.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- Redis lets you send a sequence of commands to the server together in a batch.
- There are two types of batch that you can use:
- to the server together in a single communication. The server then sends back

## Smart client handoffs
Source file: `raw/sources/20260409-docs-latest-develop-clients-sch-2e641796f2.md`
- *Smart client handoffs (SCH)* is a feature of Redis Cloud and
- Redis Software servers that lets them actively notify clients
- about planned server maintenance shortly before it happens. This
- lets a client reconnect or otherwise respond gracefully without significant
- SCH is primarily useful when server software or hardware upgrades

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

## Redis JSON RAM Usage
Source file: `raw/sources/20260409-docs-latest-develop-data-types-json-ram-65f27934dc.md`
- Because of ongoing feature additions, improvements, and optimizations, JSON memory consumption may vary depending on the Redis version.
- Redis 8 in Redis Open Source was used for the examples on this page.
- Every key in Redis takes memory and requires at least the amount of RAM to store the key name, as
- well as some per-key overhead that Redis uses. On top of that, the value in the key also requires
- Redis JSON stores JSON values as binary data after deserialization. This representation is often more

## Guide for migrating from RESP2 to RESP3 replies
Source file: `raw/sources/20260409-docs-latest-develop-data-types-json-resp3-d9d39f95b0.md`
- In RESP3, the default value of the optional path argument was changed from `.` to `$`.
- Due to this change, the replies of some commands have slightly changed.
- This page provides a brief comparison between RESP2 and RESP3 responses for JSON commands to help developers in migrating their clients from RESP2 to RESP3.
- The types are described using a ["TypeScript-like" syntax](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html). `Array<a>` denotes an [array](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#arrays) where the type of elements is known, but the number of elements is not.
- | Command                                                                                                                                                 | RESP2                                                                                                                                                                                            | RESP3                                                                                                                                                                                                               |

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

## Configuration Parameters
Source file: `raw/sources/20260409-docs-latest-develop-data-types-probabilistic-configuration-52df453335.md`
- As of Redis 8 in Redis Open Source (Redis 8), configuration parameters for the probabilistic data structures are now set in the following ways:
- * At load time via your `redis.conf` file.
- * At run time (where applicable) using the [`CONFIG SET`]() command.
- Also, Redis 8 persists probabilistic configuration parameters just like any other configuration parameters (e.g., using the [`CONFIG REWRITE`]() command).
- The following table summarizes which Bloom filter configuration parameters can be set at run-time, and compatibility with Redis Software and Redis Cloud.

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

## Configuration Parameters
Source file: `raw/sources/20260409-docs-latest-develop-data-types-timeseries-configuration-056fcf0ac6.md`
- Before Redis 8 in Redis Open Source (version 8.0), all time series configuration parameters are load-time parameters.
- Use one of the following methods to set the values of load-time configuration parameters:
- Starting with Redis 8.0, most time series configuration parameters are runtime parameters.
- While you can set runtime parameters at load time, using the Redis `CONFIG` command is easier and works the same way as with Redis runtime configuration parameters.
- Set one or more configuration parameters.

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

## Filter expressions
Source file: `raw/sources/20260409-docs-latest-develop-data-types-vector-sets-filtered-search-cd6f54127b.md`
- Filtered search lets you combine vector similarity search with scalar filtering. You can associate JSON attributes with elements in a vector set, and then filter results using those attributes during [`VSIM`]() queries.
- You can associate attributes when adding a new vector using the `SETATTR` argument:
- Or update them later with the [`VSETATTR`]() command:
- You can retrieve attributes with the [`VGETATTR`]() command:
- To filter by attributes, pass the `FILTER` option to the [`VSIM`]() command:

## Scalability
Source file: `raw/sources/20260409-docs-latest-develop-data-types-vector-sets-scalability-51a69508c5.md`
- Vector sets can scale horizontally by sharding your data across multiple Redis instances. This is done by partitioning the dataset manually across keys and nodes.
- You can shard data using a consistent hash:
- To run a similarity search across all shards, send [`VSIM`]() commands to each key and then merge the results client-side:
- Then combine and sort the results by score.
- This sharding model also improves fault tolerance:

## Troubleshooting
Source file: `raw/sources/20260409-docs-latest-develop-data-types-vector-sets-troubleshooting-4f549b1e61.md`
- Vector sets are approximate by design. That makes debugging trickier than with exact match queries. This section helps you understand issues with recall, filtering, and graph structure.
- If [`VSIM`]() doesn't return expected items:
- This gives you the most accurate results for validation, but it's slow.
- Try retrieving the attributes with [`VGETATTR`]():
- Double-check field names, JSON validity, and value types.

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

## Redis as a vector database quick start guide
Source file: `raw/sources/20260409-docs-latest-develop-get-started-vector-database-8015e39c6e.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- 3. Create vector embeddings and store vectors
- 4. Query data and perform a vector search
- which is a Python client library for Redis that is highly specialized for

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

## Debugging Lua scripts in Redis
Source file: `raw/sources/20260409-docs-latest-develop-programmability-lua-debugging-76597b74fc.md`
- Starting with version 3.2 Redis includes a complete Lua debugger, that can be
- used in order to make the task of writing complex Redis scripts much simpler.
- The Redis Lua debugger, codenamed LDB, has the following important features:
- * It uses a server-client model, so it's a remote debugger.
- The Redis server acts as the debugging server, while the default client is `redis-cli`.

## Redis Pub/sub
Source file: `raw/sources/20260409-docs-latest-develop-pubsub-3523698179.md`
- [`SUBSCRIBE`](), [`UNSUBSCRIBE`]() and [`PUBLISH`]() implement the [Publish/Subscribe messaging paradigm](http://en.wikipedia.org/wiki/Publish/subscribe) where (citing Wikipedia) senders (publishers) are not programmed to send their messages to specific receivers (subscribers).
- Rather, published messages are categorized into channels, without knowledge of what (if any) subscribers there may be.
- Subscribers express interest in one or more channels and only receive messages that are of interest, without knowledge of what (if any) publishers there are.
- This decoupling of publishers and subscribers allows for greater scalability and a more dynamic network topology.
- For instance, to subscribe to channels "channel11" and "ch:00" the client issues a [`SUBSCRIBE`]() providing the names of the channels:

## Redis keyspace notifications
Source file: `raw/sources/20260409-docs-latest-develop-pubsub-keyspace-notifications-fbcf439144.md`
- Keyspace notifications allow clients to subscribe to Pub/Sub channels in order
- to receive events affecting the Redis data set in some way.
- Examples of events that can be received are:
- * All the commands affecting a given key.
- * All the keys receiving an LPUSH operation.

## Redis client handling
Source file: `raw/sources/20260409-docs-latest-develop-reference-clients-f274ddb797.md`
- This document provides information about how Redis handles clients at the network layer level: connections, timeouts, buffers, and other similar topics are covered here.
- The information contained in this document is **only applicable to Redis version 2.6 or greater**.
- Redis accepts clients connections on the configured TCP port and on the Unix socket if enabled. When a new client connection is accepted the following operations are performed:
- * The client socket is put in the non-blocking state since Redis uses multiplexing and non-blocking I/O.
- * The `TCP_NODELAY` option is set in order to ensure that there are no delays to the connection.

## Redis command tips
Source file: `raw/sources/20260409-docs-latest-develop-reference-command-tips-147ff2c809.md`
- These provide Redis clients with additional information about the command.
- The information can instruct Redis Cluster clients as to how the command should be executed and its output processed in a clustered deployment.
- Unlike the command's flags (see the 3rd element of [`COMMAND`]()'s reply), which are strictly internal to the server's operation, tips don't serve any purpose other than being reported to clients.
- However, the following sections describe proposed tips and demonstrate the conventions they are likely to adhere to.
- This tip indicates that the command's output isn't deterministic.

## Key eviction
Source file: `raw/sources/20260409-docs-latest-develop-reference-eviction-6a0d6954b9.md`
- Redis is commonly used as a cache to speed up read accesses to a slower server
- or database. Since cache entries are copies of persistently-stored data, it
- is usually safe to evict them when the cache runs out of memory (they can be
- cached again in the future if necessary).
- Redis lets you specify an eviction policy to evict keys automatically

## Redis and the Gopher protocol
Source file: `raw/sources/20260409-docs-latest-develop-reference-gopher-249cc8876d.md`
- ** Note: Support for Gopher was removed in Redis 7.0 **
- Redis contains an implementation of the Gopher protocol, as specified in
- the [RFC 1436](https://www.ietf.org/rfc/rfc1436.txt).
- The Gopher protocol was very popular in the late '90s. It is an alternative
- to the web, and the implementation both server and client side is so simple

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

## Redis modules and blocking commands
Source file: `raw/sources/20260409-docs-latest-develop-reference-modules-modules-blocking-ops-e78ffa4566.md`
- Redis has a few blocking commands among the built-in set of commands.
- One of the most used is [`BLPOP`]() (or the symmetric [`BRPOP`]()) which blocks
- waiting for elements arriving in a list.
- The interesting fact about blocking commands is that they do not block
- the whole server, but just the client calling them. Usually the reason to

## Modules API for native types
Source file: `raw/sources/20260409-docs-latest-develop-reference-modules-modules-native-types-bee753bda1.md`
- Redis modules can access Redis built-in data structures both at high level,
- by calling Redis commands, and at low level, by manipulating the data structures
- By using these capabilities in order to build new abstractions on top of existing
- Redis data structures, or by using strings DMA in order to encode modules
- data structures into Redis strings, it is possible to create modules that

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

## Redis CLI
Source file: `raw/sources/20260409-docs-latest-develop-tools-cli-b434c7f7fe.md`
- In interactive mode, `redis-cli` has basic line editing capabilities to provide a familiar typing experience.
- To launch the program in special modes, you can use several options, including:
- * Simulate a replica and print the replication stream it receives from the primary.
- * Check the latency of a Redis server and display statistics.
- * Request ASCII-art spectrogram of latency samples and frequencies.

## Redis Insight debugging information
Source file: `raw/sources/20260409-docs-latest-develop-tools-insight-debugging-5926444517.md`
- If you are experiencing errors or other issues when using Redis Insight, follow the steps below to learn more about the errors and to identify root cause.
- If you experience connection issues, try these steps.
- Run the following command to launch Redis Insight in debug mode to investigate connection issues:
- * **macOS** (from the Applications folder):
- You can review the Redis Insight log files (files with a `.log` extension) to get detailed information about system issues.

## Redis Insight
Source file: `raw/sources/20260409-docs-latest-develop-tools-insight-e61244bd56.md`
- [![Discord](https://img.shields.io/discord/697882427875393627?style=flat-square)](https://discord.gg/QUkjSsk)
- [![Github](https://img.shields.io/static/v1?label=&message=repository&color=5961FF&logo=github)](https://github.com/redisinsight/redisinsight/)
- Redis Insight is a powerful tool for visualizing and optimizing data in Redis, making real-time application development easier and more fun than ever before. Redis Insight lets you do both GUI- and CLI-based interactions in a fully-featured desktop GUI client.
- <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
- * Automatically discover and add your local Redis databases (that use standalone connection type and do not require authentication).

## RDI in Redis Insight
Source file: `raw/sources/20260409-docs-latest-develop-tools-insight-rdi-connector-af418bc864.md`
- Redis Data Integration (RDI) and its [ingest pipeline capability]() is an end-to-end solution for mirroring your application's primary database in Redis. RDI employs a capture data change mechanism and a stream processor to map and transform source data such as relational tables into fast Redis data structures that match your use cases.
- You can read more about RDI's ingest architecture [on these pages]().
- As of version `2.54.0`, Redis Insight includes RDI connectivity, which allows you to connect to [RDI management planes](#how-rdi-is-deployed), create, test, and deploy [RDI pipelines](), and view RDI statistics.
- Open Redis Insight and then click on the **Redis Data Integration** tab, which looks like this:
- Next, click on **Let's connect to RDI**, which will open the **Add RDI Endpoint** dialog.

## RedisInsight v2.16.0, December 2022
Source file: `raw/sources/20260409-docs-latest-develop-tools-insight-release-notes-v-2-16-0-4a7ed6fb08.md`
- This is the General Availability (GA) release of RedisInsight 2.16.

## RedisInsight v2.20.0, February 2023
Source file: `raw/sources/20260409-docs-latest-develop-tools-insight-release-notes-v-2-20-0-4a9192dfd6.md`
- This is the General Availability (GA) release of RedisInsight 2.20.

## RedisInsight v2.22.1, March 2023
Source file: `raw/sources/20260409-docs-latest-develop-tools-insight-release-notes-v-2-22-1-ae0bfc6c2e.md`
- This is the General Availability (GA) release of RedisInsight 2.22.

## RedisInsight v2.34.0, September 2023
Source file: `raw/sources/20260409-docs-latest-develop-tools-insight-release-notes-v-2-34-0-7c10d7d130.md`
- This is the General Availability (GA) release of RedisInsight 2.34.

## RedisInsight v2.38.0, November 2023
Source file: `raw/sources/20260409-docs-latest-develop-tools-insight-release-notes-v-2-38-0-3809a7e383.md`
- This is the General Availability (GA) release of RedisInsight 2.38.

## RedisInsight v2.44.0, February 2024
Source file: `raw/sources/20260409-docs-latest-develop-tools-insight-release-notes-v-2-44-0-df3eef7807.md`
- This is the General Availability (GA) release of RedisInsight 2.44.

## Redis Insight v2.52.0, June 2024
Source file: `raw/sources/20260409-docs-latest-develop-tools-insight-release-notes-v-2-52-0-f6ab6b8f99.md`
- This is the General Availability (GA) release of Redis Insight 2.52.

## Redis Insight v2.66.0, January 2025
Source file: `raw/sources/20260409-docs-latest-develop-tools-insight-release-notes-v-2-66-0-30216d1dbb.md`
- This is the General Availability (GA) release of Redis Insight 2.66.
- | Windows | Bjxu9UFPpWhz29prFqRsKDNlF4LZaTUJgAvBBI/FNQ9rBncFGGOb5m59wY3dXIYAG6+VB6F9U9ylffv31IDszw== |
- | Linux AppImage | T6y4xd4BVs1skNAOWkFpWkcov0288qIh2dXHo7gofDw99ow6phV3LzcaasHLT5F+TdlbfcjB8aGVJMx1qEIaBw== |
- | Linux Debian| WaMsSd6qKvw5x6ALLLPTnFoWMX/qVZafVJ3SJAUr8IYoGksnNlU1huUr9q/ftlwP00y2zYac7EZBbl2Z/bOppQ== |
- | MacOS Intel | 4x7vG7nTt3s4+kQ6WSuhrtigRa2XZ9Q6UiR1WCb/vROAL/X5GjmFvv4jBPIxZC1w6Z46pNzS+IhLcI4oHVSyAw== |

## Redis Insight v2.68.0, April 2025
Source file: `raw/sources/20260409-docs-latest-develop-tools-insight-release-notes-v-2-68-0-617436a31b.md`
- This is the General Availability (GA) release of Redis Insight 2.68.
- | Windows | 50YAPT59n2cLQu+P7kvc+kT+FxnW67pV53F1xz/C1IfgjmycgWpemycosbooQdLvXWPK4GLgk/NOnoZMI/15Lg== |
- | Linux AppImage | QbI7V8jCCVPum4jdd1W8CEOqT+iFzwUTrt9tVbu9Kpv81Pub27aIJve3kWDdXWyvxHPUlUOsBHIo/uHIzdFJPw== |
- | Linux Debian| V0/W8RclF6q0uT6uBR/lDNMt+OXqm7xmkSYf9vd8xCe4mGWUQBHiACX/aIgWs8l3Na5AQCNSJLrHnDXWiDD9Fw== |
- | MacOS Intel | j3bdEX0rvxPGBUMZ6hD9aD+C/WTR1bOZT+lekJqujkDnRSPMZS5syGfkd1cQfx8QSnM10qYBO4RCH0Ew0m3g0A== |

## Redis Insight v2.70.0, May 2025
Source file: `raw/sources/20260409-docs-latest-develop-tools-insight-release-notes-v-2-70-0-5d826206ba.md`
- This is the General Availability (GA) release of Redis Insight 2.70.
- | Windows | AMAdQy5TsKc/76OAH4NdJ+abe/ogRdBGTPmVmAMgCG3O74hGZ0Q5h53HMaGzaOpTM+bEiRqTfi/i/iHgTNRmDA== |
- | Linux AppImage | 6E1d++C6C4M8P/onVHrdsC1CwsdQ1dYysLedbIhsgmsxR9t37LA+mdxIWFOCi0Z/XZqox/kGb/EjPxRIyF2apw== |
- | Linux Debian| 3opZq01Di5DCBEX1tYaO59dHbHmeG2928RrIZAcJKiZnGNLNbOeg3AuXalkYuzb3i/kIBLeEKQIwwzW7GFw0VA== |
- | Linux RPM | bC7FpokqgG7/gMqHQRy4pB6U1leu5pWXAcS0jPfUveQHfrbth2zcNlCCIiZ7QW4eUbxeObmDK8dfiL3GojSBLg== |

## Redis Insight v3.0.0, November 2025
Source file: `raw/sources/20260409-docs-latest-develop-tools-insight-release-notes-v-3-0-0-c17e041c45.md`
- This is the General Availability (GA) release of Redis Insight 3.0.0, a major version upgrade that introduces a new UI experience, a new navigation architecture, and foundational improvements that set the stage for faster, more powerful developer workflows from now on.
- | Package             | SHA-256                                                                                  |
- | ------------------- | ---------------------------------------------------------------------------------------- |
- | Windows             | uv0RwVZt5xIBbFWepOgss0Zdiz8/TuyEcUKYBnzaVPPkIfpxHFpV2LaJ+MNHuQoJETObNQtGcSGtqL/o09pMJQ== |
- | Linux AppImage      | IgQoAayGvrvEHCqix+4GsWt5+nHA5ROJ0vjSdg6+NggTPwfOpP6pHuGIvMlQP2pXjdeynaDPeWY5d+hQWpYtNA== |

## Redis Insight v3.0.2, January 2026
Source file: `raw/sources/20260409-docs-latest-develop-tools-insight-release-notes-v-3-0-2-446824bbb1.md`
- This maintenance patch release includes critical and non-critical bug fixes for Redis Insight 3.0.0.
- | Package             | SHA-512                                                                                  |
- | ------------------- | ---------------------------------------------------------------------------------------- |
- | Windows             | 4wqbGo0XWd1iXmRMjVtDWCloUzNMWYq0rb13efWv8+odOTv0yHL2Qtxr7nGG4IFzETnL5BCVaoXPp8OkwGzZPA== |
- | Linux AppImage      | bzOdG+/srFdZ9hvWamftwwE+4l4H2/7UuHPb9Xg/G/tyLB1HlTso3/0B1GtWALz807uqDxJavd3GAKwLKOdtSw== |

## Redis Insight v3.0.3, February 2026
Source file: `raw/sources/20260409-docs-latest-develop-tools-insight-release-notes-v-3-0-3-abe64fbbff.md`
- This release includes new features, improvements, and bug fixes for Redis Insight.
- | Package             | SHA-512                                                                                  |
- | ------------------- | ---------------------------------------------------------------------------------------- |
- | Windows             | +IkHnTZw0saEKT5xYfWFrBEhGOUfc0tP5DygmnpB6r7uFUw42HyATopYr6WsYQrmzAzlhYxgcG61v125WfXR8g== |
- | Linux AppImage      | /OugHCsutRHzqaxe3ppS6N5XkpFarZMc+RTro5owjclv+FvfV6gV+NZzEmzB9bUJgHhu5ImB7/2RbKGexXh/Hw== |

## RedisInsight v1.1, December 2019
Source file: `raw/sources/20260409-docs-latest-develop-tools-insight-release-notes-v1-1-0-b37de52999.md`

## RedisInsight v1.11, Oct 2021
Source file: `raw/sources/20260409-docs-latest-develop-tools-insight-release-notes-v1-11-0-b3b60a2875.md`
- This is the maintenance release of RedisInsight 1.11 (v1.11.1)!
- This is the General Availability Release of RedisInsight 1.11 (v1.11.0)!

## RedisInsight v1.2, January 2020
Source file: `raw/sources/20260409-docs-latest-develop-tools-insight-release-notes-v1-2-0-048b53e7f3.md`
- This is a maintenance release for version 1.2.
- This is a maintenance release for version 1.2.
- In certain situations, the server process was being orphaned after the main process died. This resulted in a several issues, of which the "blank page issue" was the most common. Now that the server process is in a thread instead of a process, the server is not left running when the process exits.

## RedisInsight v1.4, April 2020
Source file: `raw/sources/20260409-docs-latest-develop-tools-insight-release-notes-v1-4-0-3933b612ea.md`
- This is the General Availability Release of RedisInsight 1.4 (v1.4.0)!

## RedisInsight v1.5, May 2020
Source file: `raw/sources/20260409-docs-latest-develop-tools-insight-release-notes-v1-5-0-1d5fd97a27.md`
- This is the General Availability Release of RedisInsight 1.5 (v1.5.0)!

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

## RedisInsight v2.2.0, May 2022
Source file: `raw/sources/20260409-docs-latest-develop-tools-insight-release-notes-v2-2-0-05d3d81c45.md`
- This is the General Availability (GA) release of RedisInsight 2.2.0

## RedisInsight v2.8.0, August 2022
Source file: `raw/sources/20260409-docs-latest-develop-tools-insight-release-notes-v2-8-0-f7d2ef5cdc.md`
- This is the General Availability (GA) release of RedisInsight 2.8.0

## Token bucket rate limiter with Redis and .NET
Source file: `raw/sources/20260409-docs-latest-develop-use-cases-rate-limiter-dotnet-b71075a9a3.md`
- This guide shows you how to implement a distributed token bucket rate limiter using Redis and Lua scripts in .NET with the [`StackExchange.Redis`]() client library.
- Rate limiting is a critical technique for controlling the rate at which operations are performed. Common use cases include:
- * Limiting API requests per user or IP address
- * Preventing abuse and protecting against denial-of-service attacks
- * Ensuring fair resource allocation across multiple clients

## Token bucket rate limiter with Redis and Go
Source file: `raw/sources/20260409-docs-latest-develop-use-cases-rate-limiter-go-c9db92cb2b.md`
- This guide shows you how to implement a distributed token bucket rate limiter using Redis and Lua scripts in Go with the [`go-redis`]() client library.
- Rate limiting is a critical technique for controlling the rate at which operations are performed. Common use cases include:
- * Limiting API requests per user or IP address
- * Preventing abuse and protecting against denial-of-service attacks
- * Ensuring fair resource allocation across multiple clients

## Token bucket rate limiter with Redis and Java
Source file: `raw/sources/20260409-docs-latest-develop-use-cases-rate-limiter-java-jedis-eba0ad7a42.md`
- This guide shows you how to implement a distributed token bucket rate limiter using Redis and Lua scripts in Java with the [`Jedis`]() client library.
- Rate limiting is a critical technique for controlling the rate at which operations are performed. Common use cases include:
- * Limiting API requests per user or IP address
- * Preventing abuse and protecting against denial-of-service attacks
- * Ensuring fair resource allocation across multiple clients

## Token bucket rate limiter with Redis and Java (Lettuce)
Source file: `raw/sources/20260409-docs-latest-develop-use-cases-rate-limiter-java-lettuce-0976e5cb3e.md`
- This guide shows you how to implement a distributed token bucket rate limiter using Redis and Lua scripts in Java with the [`Lettuce`]() client library.
- Rate limiting is a critical technique for controlling the rate at which operations are performed. Common use cases include:
- * Limiting API requests per user or IP address
- * Preventing abuse and protecting against denial-of-service attacks
- * Ensuring fair resource allocation across multiple clients

## Token bucket rate limiter with Redis and Node.js
Source file: `raw/sources/20260409-docs-latest-develop-use-cases-rate-limiter-nodejs-1e0e7eb093.md`
- This guide shows you how to implement a distributed token bucket rate limiter using Redis and Lua scripts in Node.js with async/await.
- Rate limiting is a critical technique for controlling the rate at which operations are performed. Common use cases include:
- * Limiting API requests per user or IP address
- * Preventing abuse and protecting against denial-of-service attacks
- * Ensuring fair resource allocation across multiple clients

## Token bucket rate limiter with Redis and PHP
Source file: `raw/sources/20260409-docs-latest-develop-use-cases-rate-limiter-php-206e19574f.md`
- This guide shows you how to implement a distributed token bucket rate limiter using Redis and Lua scripts in PHP with the [Predis]() client library.
- Rate limiting is a critical technique for controlling the rate at which operations are performed. Common use cases include:
- * Limiting API requests per user or IP address
- * Preventing abuse and protecting against denial-of-service attacks
- * Ensuring fair resource allocation across multiple clients

## Token bucket rate limiter with Redis and Ruby
Source file: `raw/sources/20260409-docs-latest-develop-use-cases-rate-limiter-ruby-bd7bcf6696.md`
- This guide shows you how to implement a distributed token bucket rate limiter using Redis and Lua scripts in Ruby with the [`redis-rb`]() client library.
- Rate limiting is a critical technique for controlling the rate at which operations are performed. Common use cases include:
- * Limiting API requests per user or IP address
- * Preventing abuse and protecting against denial-of-service attacks
- * Ensuring fair resource allocation across multiple clients

## Token bucket rate limiter with Redis and Rust
Source file: `raw/sources/20260409-docs-latest-develop-use-cases-rate-limiter-rust-c506f350c5.md`
- This guide shows you how to implement a distributed token bucket rate limiter using Redis and Lua scripts in Rust with the [`redis-rs`]() client library.
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

## Redis session store with node-redis
Source file: `raw/sources/20260409-docs-latest-develop-use-cases-session-store-nodejs-301a319578.md`
- This guide shows you how to implement a Redis-backed session store in Node.js with [`node-redis`](). It includes a small local web server built with Node's standard `http` module so you can see the session lifecycle end to end.
- Session storage is a common Redis use case for web applications. Instead of keeping session state in local process memory, you store it in Redis and send the browser only an opaque session ID in a cookie.
- * Shared sessions across multiple app servers
- * Fast reads and updates for small pieces of per-user state
- * A clean separation between browser cookies and server-side session data

## Redis session store with redis-py
Source file: `raw/sources/20260409-docs-latest-develop-use-cases-session-store-redis-py-54762eb4df.md`
- This guide shows you how to implement a Redis-backed session store in Python with [`redis-py`](). It includes a small local web server built with the Python standard library so you can see the session lifecycle end to end.
- Session storage is a common Redis use case for web applications. Instead of keeping session state in local process memory, you store it in Redis and send the browser only an opaque session ID in a cookie.
- * Shared sessions across multiple app servers
- * Fast reads and updates for small pieces of per-user state
- * A clean separation between browser cookies and server-side session data

## Using Redis commands
Source file: `raw/sources/20260409-docs-latest-develop-using-commands-53d30e993e.md`
- Client applications and tools interact with Redis using commands. Most of the
- commands implement [data types]() to store and retrieve data,
- but there are also commands that deal with server configuration, security, and more.
- The sections below give an overview of how Redis commands operate. See the
- [Redis commands reference]() for a complete list of commands.

## Keys and values
Source file: `raw/sources/20260409-docs-latest-develop-using-commands-keyspace-dcddefebed.md`
- Every data object that you store in a Redis database has its own unique
- *key*. The key is a string that you pass to Redis commands to
- retrieve the corresponding object or modify its data. The data object associated with a
- particular key is known as the *value* and the two together are known as
- A key is typically a textual name that has some meaning within your

## Multi-key operations
Source file: `raw/sources/20260409-docs-latest-develop-using-commands-multi-key-operations-d4c630349c.md`
- Multi-key operations in Redis allow you to work with multiple keys in a single command, but their behavior varies significantly depending on your Redis configuration and clustering setup. This page provides a quick reference for developers working with multi-key operations across different Redis configurations.
- Redis supports five distinct configurations, each with different multi-key command behaviors:
- 1. **ROS/RS clustering disabled** - Single Redis instance
- 2. **ROS, clustering enabled** - Redis Open Source cluster
- 3. **RS, clustering enabled, OSS cluster API enabled** - Redis Software with ROS cluster compatibility

## Transactions
Source file: `raw/sources/20260409-docs-latest-develop-using-commands-transactions-b457db9a9b.md`
- Redis Transactions allow the execution of a group of commands
- in a single step, they are centered around the commands
- [`MULTI`](), [`EXEC`](), [`DISCARD`]() and [`WATCH`]().
- Redis Transactions make two important guarantees:
- * All the commands in a transaction are serialized and executed

## Redis 6.2
Source file: `raw/sources/20260409-docs-latest-develop-whats-new-6-2-4f10c307fc.md`
- Redis version 6.2 introduces new capabilities designed to improve data indexing, querying, and analytics. This update brings multi-value indexing, expanded wildcard query support, and a new probabilistic data structure for quantile estimation. Additionally, significant enhancements to Redis streams and time series data processing offer greater flexibility for developers working with real-time and historical datasets. Over 25 new commands have been added to Redis that address key feature requests and further extending its capabilities.
- Below is a detailed breakdown of these improvements.
- Redis now supports indexing and querying multi-value attributes across all field types, including `TEXT`, `TAG`, `NUMERIC`, `GEO`, and `VECTOR`. Developers can define JSONPath expressions leading to arrays or multiple scalar values, overcoming the previous limitation of indexing only single scalar attributes.
- Redis Search now enables suffix and infix wildcard searches for `TEXT` and `TAG` fields. This enhancement provides greater flexibility in data retrieval and filtering.
- Redis introduces t-digest, an advanced probabilistic data structure that efficiently estimates quantiles in large datasets or continuous data streams. This is particularly beneficial for analytics and monitoring applications where quantile calculations are required.

## Redis 7.2
Source file: `raw/sources/20260409-docs-latest-develop-whats-new-7-2-df57bd90f6.md`
- Redis version 7.2 introduces new capabilities, including improved geospatial queries, and streamlined JSON data manipulation. Performance optimizations, client-side enhancements, and behavioral refinements further improve the efficiency, security, and usability of Redis.
- Below is a detailed breakdown of these updates.
- Redis Search now supports querying geospatial data using polygon search, enabling developers to efficiently filter and retrieve data within complex geographic boundaries.
- JSON now includes two new commands for improved data handling:
- Significant performance improvements have been made across Redis data types. Sorted sets, commonly used for gaming leaderboards, now see performance improvements ranging from [30% to 100%](https://redis.io/blog/introducing-redis-7-2/#:~:text=We%20made%20Redis%20more%20powerful%20for%20developers).

## Redis 8.2
Source file: `raw/sources/20260409-docs-latest-develop-whats-new-8-2-fadaad472d.md`
- Redis 8.2 builds on the foundation of Redis 8.0 with significant performance and memory optimizations, enhanced streaming capabilities, and improved cluster management tools.
- This release delivers major improvements across multiple areas:
- Below is a detailed breakdown of these updates.
- Redis 8.2 includes important security fixes:
- Redis 8.2 introduces powerful new commands that simplify consumer group management and stream lifecycle operations:

## What's new?
Source file: `raw/sources/20260409-docs-latest-develop-whats-new-9df0b573c4.md`
- * Updated the RESP3 specification document to include the [attribute type]().
- * Updates to the Redis Insight page related to its new Redis Search auto-completion [feature]().
- * Restructured and added testable connection examples to the [client pages]().
- * Added [Redis Open Source]() and [Redis Stack]() release notes.
- * Added new [Predis (PHP client library)]() page.

## Redis feature sets
Source file: `raw/sources/20260409-docs-latest-develop-whats-new-redis-feature-sets-f48094dd22.md`
- A Redis feature set includes a specific Redis database version along with the advanced capabilities and data structures provided by compatible module versions.
- To use a new feature introduced in a later feature set, you must upgrade the corresponding components according to the following table.
- | **Feature set version:** 8.6| See [here]()|
- | **Feature set version:** 8.4| See [here]()|
- | **Feature set version:** 8.2| See [here]()|

## Glossary
Source file: `raw/sources/20260409-docs-latest-glossary-165453db33.md`
- Allows you to manage permissions based on key patterns.
- More info: [redis.io/operate/oss_and_stack/management/security/acl](); [ACL wikipedia](https://en.wikipedia.org/wiki/Access-control_list); [Database access control](); [Update database ACLs](); [Role-based access control]()
- Geo-distributed databases that span multiple [Redis Enterprise Software]() [clusters](). Active-Active databases, also known as conflict-free replicated databases (CRDB), depend on [multi-primary replication]() and [conflict-free replicated data types (CRDTs)]() to power a simple development experience for geo-distributed applications.
- More info: [Active-Active geo-distributed Redis](), [Geo-distributed Active-Active Redis applications](), [Developing applications for Active-Active databases]()
- A "member database" of a global [Active-Active database]() which is made up of its own master and replica [shards]() spanning a single [cluster]().

## Create a Bedrock agent
Source file: `raw/sources/20260409-docs-latest-integrate-amazon-bedrock-create-agent-935da3796d.md`
- After you have [created a knowledge base](), you can use it to create an agent on Amazon Bedrock.
- Before you begin this guide, you will need:
- 1. Sign in to the [AWS console](https://console.aws.amazon.com/).
- 1. Use the **Services** menu to locate and select **Machine Learning** > **Amazon Bedrock**.  This takes you to the Amazon Bedrock admin panel.
- 1. Select **Agents** > **Create Agent** to create your knowledge base.

## FusionCache for C#/.NET
Source file: `raw/sources/20260409-docs-latest-integrate-fusioncache-15e9c2f762.md`
- Other packages are also available to work with different distributed caches, serializers, backplanes and more.
- See the [FusionCache docs](https://github.com/ZiggyCreatures/FusionCache/blob/main/docs/README.md) for more information.
- First, install the packages for Redis (with JSON serialization):
- Use code like the following to share the Redis connection multiplexer:
- FusionCache is now ready to use. The simple example below demonstrates the `GetOrSetAsync` method but see [Core Methods](https://github.com/ZiggyCreatures/FusionCache/blob/main/docs/CoreMethods.md) in the FusionCache docs for full details of the API.

## Go client for Redis
Source file: `raw/sources/20260409-docs-latest-integrate-go-redis-154f3a5537.md`
- Connect your Go application to a Redis database using the go-redis client library.
- go-redis is a type-safe, Redis client library for Go that supports Redis 6.0+ features including Redis Cluster, Redis Sentinel, and Redis streams. It provides a clean, idiomatic Go API for interacting with Redis.
- Refer to the complete [Go guide]() to install, connect, and use go-redis with detailed examples and best practices.

## C client for Redis
Source file: `raw/sources/20260409-docs-latest-integrate-hiredis-4c99268b04.md`
- Connect your C application to a Redis database using the hiredis client library.
- hiredis is a minimalistic C client library for Redis that provides a simple, efficient interface for Redis operations. It's designed to be lightweight, fast, and easy to integrate into C applications with minimal dependencies.
- Refer to the complete [C guide]() to install, connect, and use hiredis.

## New Relic with Redis Cloud
Source file: `raw/sources/20260409-docs-latest-integrate-new-relic-with-redis-cloud-f8523d7d8d.md`
- [New Relic](https://newrelic.com/?customer-bypass=true) is used by organizations of all sizes and across a wide range of industries to
- enable digital transformation and cloud migration, drive collaboration among development, operations, security and
- business teams, accelerate time to market for applications, reduce time to problem resolution, secure applications and
- infrastructure, understand user behavior, and track key business metrics.
- The New Relic Integration for Redis Cloud uses Prometheus remote write functionality to connect Prometheus data

## New Relic with Redis Software
Source file: `raw/sources/20260409-docs-latest-integrate-new-relic-with-redis-enterprise-b3c4cdfd86.md`
- [New Relic](https://newrelic.com/?customer-bypass=true) is used by organizations of all sizes and across a wide range of industries to
- enable digital transformation and cloud migration, drive collaboration among development, operations, security and
- business teams, accelerate time to market for applications, reduce time to problem resolution, secure applications and
- infrastructure, understand user behavior, and track key business metrics.
- The New Relic Integration for Redis Software uses Prometheus remote write functionality to connect Prometheus data

## PHP client for Redis
Source file: `raw/sources/20260409-docs-latest-integrate-php-redis-c0d2004274.md`
- Predis is the recommended PHP client for Redis.
- Predis is a flexible and feature-complete Redis client for PHP that supports Redis 2.0+ and provides a clean, object-oriented interface.
- Refer to the complete [Predis guide]() to install, connect, and use PHP Redis clients with detailed examples and framework integration guides.

## Prometheus and Grafana with Redis Cloud
Source file: `raw/sources/20260409-docs-latest-integrate-prometheus-with-redis-cloud-029046312a.md`
- You can use Prometheus and Grafana to collect and visualize your Redis Cloud metrics.
- Redis Cloud exposes its metrics through a Prometheus endpoint. You can configure your Prometheus server to scrape metrics from your Redis Cloud subscription on port 8070.
- The Redis Cloud Prometheus endpoint is exposed on Redis Cloud's internal network. To access this network, enable [VPC peering](), [Private Service Connect](), [AWS Transit Gateway](), or [AWS PrivateLink](). Private connectivity options are only available with Redis Cloud Pro. You cannot use Prometheus and Grafana with Redis Cloud Essentials.
- The Prometheus endpoint's metrics cover all databases within a subscription. Any database added to or removed from the subscription is reflected automatically.
- For more information on how Prometheus communicates with Redis Software clusters, see [Prometheus integration with Redis Software]().

## Transition from Prometheus v1 to Prometheus v2
Source file: `raw/sources/20260409-docs-latest-integrate-prometheus-with-redis-enterprise-prometheus-metrics-v1-to--c68b8fcc29.md`
- You can [integrate Redis Software with Prometheus and Grafana]() to create dashboards for important metrics.
- As of Redis Software version 7.8.2, [PromQL (Prometheus Query Language)](https://prometheus.io/docs/prometheus/latest/querying/basics/) metrics are available. V1 metrics are deprecated but still available.
- To transition from v1 metrics to v2 metrics, you need to change the `metrics_path` in your Prometheus configuration file from `/` to `/v2` to use the new scraping endpoint.
- Here's an example of the updated scraping configuration in `prometheus.yml`:
- It is possible to scrape both v1 and v2 endpoints simultaneously during the transition period to prepare dashboards and ensure a smooth transition.

## Architecture
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-architecture-776aabda28.md`
- RDI implements a [change data capture](https://en.wikipedia.org/wiki/Change_data_capture) (CDC) pattern that tracks changes to the data in a
- non-Redis *source* database and makes corresponding changes to a Redis
- *target* database. You can use the target as a cache to improve performance
- because it will typically handle read queries much faster than the source.
- To use RDI, you define a *dataset* that specifies which data items

## Pipeline configuration file
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-data-pipelines-pipeline-config-71d6c3ce9b.md`
- The main configuration details for an RDI pipeline are in the `config.yaml` file.
- This file specifies the connection details for the source and target databases,
- and also the set of tables you want to capture. You can also add one or more
- if you want to apply custom transformations to the captured data.
- Below is an example of a `config.yaml` file. Note that the values of the

## Prepare MongoDB for RDI
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-data-pipelines-prepare-dbs-mongodb-af6eb2f003.md`
- This guide describes the steps required to prepare a MongoDB database as a source for Redis Data Integration (RDI) pipelines.
- The MongoDB connector is not capable of monitoring the changes of a standalone MongoDB server, since standalone servers do not have an oplog. The connector will work if the standalone server is converted to a replica set with one member.
- The following table summarizes the considerations to prepare a MongoDB database for RDI.
- | Requirement         | Description                                                                 |
- |---------------------|-----------------------------------------------------------------------------|

## Prepare MySQL/MariaDB for RDI
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-data-pipelines-prepare-dbs-my-sql-m-179b74ff22.md`
- The following checklist summarizes the steps to prepare a MySQL or MariaDB
- database for RDI, with links to the sections that explain the steps in
- full detail. You may find it helpful to track your progress with the
- The Debezium connector needs a user account to connect to MySQL/MariaDB. This
- user must have appropriate permissions on all databases where you want Debezium

## Prepare Oracle and Oracle RAC for RDI
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-data-pipelines-prepare-dbs-oracle-970e3bc349.md`
- Oracle provides two main systems that Debezium can use to capture data changes:
- The sections below explain how to configure each system for use with Debezium and RDI.
- The checklists summarize the steps you should follow to configure each system.
- You may find it helpful to use them to track your progress as you work through the steps.
- [LogMiner](https://docs.oracle.com/en/database/oracle/oracle-database/19/sutil/oracle-logminer-utility.html)

## Prepare Spanner for RDI
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-data-pipelines-prepare-dbs-spanner-0c383b862a.md`
- Google Cloud Spanner requires specific configuration to enable change data capture (CDC) with RDI.
- RDI operates in two phases with Spanner: snapshot (initial sync) and streaming. During the snapshot
- phase, RDI uses the JDBC driver to connect directly to Spanner and read the current state of the
- database. In the streaming phase, RDI uses [Spanner's Change Streams](https://cloud.google.com/spanner/docs/change-streams) to capture changes related to
- Spanner is only supported with RDI deployed on Kubernetes/Helm. RDI VM mode does not support Spanner as a source database.

## Prepare SQL Server for RDI
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-data-pipelines-prepare-dbs-sql-serv-800e39cfe4.md`
- To prepare your SQL Server database for Debezium, you must first create a dedicated Debezium user,
- run a script to enable CDC globally, and then separately enable CDC for each table you want to
- capture. You need administrator privileges to do this.
- Once you enable CDC, it captures all of the INSERT, UPDATE, and DELETE operations
- on your chosen tables. The Debezium connector can then emit these events to RDI.

## FAQ
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-faq-3c379c42bc.md`
- You must purchase a commercial license for RDI with Redis Enterprise. This includes two extra
- Redis Enterprise shards (primary and replica) for the staging database.
- RDI uses mechanisms that are specific for each of the supported
- lists any changes in a database view that RDI can query.
- RDI uses the concept of *processing units*. Each processing unit uses 1 CPU core and can process

## Install on Kubernetes
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-installation-install-k8s-02a1619ba2.md`
- This guide explains how to use the RDI [Helm chart](https://helm.sh/docs/topics/charts/)
- to install on [Kubernetes](https://kubernetes.io/) (K8s). You can also
- The installation creates the following K8s objects:
- You can also use a different namespace name if you prefer.
- [services](https://kubernetes.io/docs/concepts/services-networking/service/) for the

## Observability
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-observability-bd7d0a317c.md`
- RDI reports metrics about its operation using
- [Prometheus exporter endpoints](https://prometheus.io/docs/instrumenting/exporters/).
- [Prometheus](https://prometheus.io/docs/prometheus/latest/getting_started/)
- to query the metrics and plot simple graphs or with
- [Grafana](https://grafana.com/) to produce more complex visualizations and

## redis-di
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-reference-cli-redis-di-911734c373.md`

## redis-di add-context
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-reference-cli-redis-di-add-context-d1d02fe181.md`
- Client certificate file to authenticate with

## redis-di configure-rdi
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-reference-cli-redis-di-configure-rd-142831472b.md`
- Client certificate file to authenticate with
- Password for unlocking an encrypted private key

## redis-di delete-all-contexts
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-reference-cli-redis-di-delete-all-c-b417d91bbe.md`
- Force operation. Skips verification prompts

## redis-di delete-context
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-reference-cli-redis-di-delete-conte-533df39527.md`
- Force operation. Skips verification prompts

## redis-di deploy
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-reference-cli-redis-di-deploy-1de1d6468b.md`
- Client certificate file to authenticate with
- Password for unlocking an encrypted private key

## redis-di describe-job
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-reference-cli-redis-di-describe-job-7c1fa886f8.md`
- Client certificate file to authenticate with
- Password for unlocking an encrypted private key

## redis-di dump-support-package
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-reference-cli-redis-di-dump-support-4faa342b22.md`
- Client certificate file to authenticate with
- Password for unlocking an encrypted private key
- Directory where the support file should be generated
- Stops the trace after exceeding this timeout (in seconds)
- Number of days to look back for log files

## redis-di get-rejected
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-reference-cli-redis-di-get-rejected-02712b5fe8.md`
- Client certificate file to authenticate with
- Password for unlocking an encrypted private key
- Displays the oldest rejected records. If omitted, most recent records will be retrieved
- Only prints the rejected records for the specified DLQ (Dead Letter Queue) name

## redis-di install
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-reference-cli-redis-di-install-ddf4c76449.md`
- Path to a YAML configuration file for silent installation

## redis-di list-jobs
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-reference-cli-redis-di-list-jobs-1b1cf31f2f.md`
- Client certificate file to authenticate with
- Password for unlocking an encrypted private key

## redis-di monitor
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-reference-cli-redis-di-monitor-fd3acedabb.md`
- Client certificate file to authenticate with
- Password for unlocking an encrypted private key

## redis-di reset
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-reference-cli-redis-di-reset-28e82409c8.md`
- Client certificate file to authenticate with
- Password for unlocking an encrypted private key
- Force operation. Skips verification prompts
- Pause for user confirmation if manual shutdown of collector required

## redis-di scaffold
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-reference-cli-redis-di-scaffold-ab64f8e3d7.md`
- Print the content of the scaffolded config file to CLI output

## redis-di set-context
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-reference-cli-redis-di-set-context-f31df7417d.md`

## redis-di set-secret
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-reference-cli-redis-di-set-secret-5a0b1930b1.md`

## redis-di start
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-reference-cli-redis-di-start-fb335f5633.md`
- Client certificate file to authenticate with
- Password for unlocking an encrypted private key

## redis-di status
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-reference-cli-redis-di-status-ee2bcee49b.md`
- Client certificate file to authenticate with
- Password for unlocking an encrypted private key
- Display ingested data streams (live mode only)

## redis-di stop
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-reference-cli-redis-di-stop-cff7b6f253.md`
- Client certificate file to authenticate with
- Password for unlocking an encrypted private key

## redis-di trace
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-reference-cli-redis-di-trace-87a715255c.md`
- Client certificate file to authenticate with
- Password for unlocking an encrypted private key
- Stops the trace after exceeding this timeout (in seconds)

## redis-di upgrade
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-reference-cli-redis-di-upgrade-ef6c782a2f.md`
- Client certificate file to authenticate with
- Password for unlocking an encrypted private key
- Force operation. Skips verification prompts

## Redis Data Integration configuration file
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-reference-config-yaml-reference-6df9ee0578.md`
- Configuration file for Redis Data Integration (RDI) source collectors and target connections
- | Name                                                              | Type             | Description                                                                                                                                                               | Required |
- | ----------------------------------------------------------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
- | [**sources**](#sources)<br/>(Source collectors)                   | `object`         | Defines source collectors and their configurations. Each key represents a unique source identifier, and its value contains specific configuration for that collector<br/> |          |
- | [**processors**](#processors)<br/>(Data processing configuration) | `object`, `null` | Configuration settings that control how data is processed, including batch sizes, error handling, and performance tuning<br/>                                             |          |

## Redis Data Integration release notes 1.12.0 (June 2025)
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-release-notes-rdi-1-12-0-5b5a15dcda.md`
- This minor release replaces the 1.10.0 release.
- RDIâs mission is to help Redis customers sync Redis Enterprise with live data from their slow disk-based databases to:
- RDI keeps the Redis cache up to date with changes in the primary database, using a [_Change Data Capture (CDC)_](https://en.wikipedia.org/wiki/Change_data_capture) mechanism.
- It also lets you _transform_ the data from relational tables into convenient and fast data structures that match your app's requirements. You specify the transformations using a configuration system, so no coding is required.
- RDI can write data to a Redis Active-Active database. However, it doesn't support writing data to two or more Active-Active replicas. Writing data from RDI to several Active-Active replicas could easily harm data integrity as RDI is not synchronous with the source database commits.

## Redis Data Integration release notes 1.14.0 (August 2025)
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-release-notes-rdi-1-14-0-24dd86bae3.md`
- RDIâs mission is to help Redis customers sync Redis Enterprise with live data from their slow disk-based databases to:
- RDI keeps the Redis cache up to date with changes in the primary database, using a [_Change Data Capture (CDC)_](https://en.wikipedia.org/wiki/Change_data_capture) mechanism.
- It also lets you _transform_ the data from relational tables into convenient and fast data structures that match your app's requirements. You specify the transformations using a configuration system, so no coding is required.
- RDI can write data to a Redis Active-Active database. However, it doesn't support writing data to two or more Active-Active replicas. Writing data from RDI to several Active-Active replicas could easily harm data integrity as RDI is not synchronous with the source database commits.

## Redis Data Integration release notes 1.15.0 (October 2025)
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-release-notes-rdi-1-15-0-b88de01792.md`
- RDI's mission is to help Redis customers sync Redis Enterprise with live data from their slow disk-based databases to:
- RDI keeps the Redis cache up to date with changes in the primary database, using a [_Change Data Capture (CDC)_](https://en.wikipedia.org/wiki/Change_data_capture) mechanism.
- It also lets you _transform_ the data from relational tables into convenient and fast data structures that match your app's requirements. You specify the transformations using a configuration system, so no coding is required.
- **Breaking change when using JSON with `json_update_strategy: merge`**
- RDI now uses the native `JSON.MERGE` command instead of Lua scripts for JSON merge operations. While this provides significant performance improvements (2x faster), there is a **functional difference** in how null values are handled:

## Redis Data Integration release notes 1.15.1 (November 2025)
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-release-notes-rdi-1-15-1-862f3c42ed.md`
- This maintenance release replaces the 1.15.0 release.
- RDIâs mission is to help Redis customers sync Redis Enterprise with live data from their slow disk-based databases to:
- RDI keeps the Redis cache up to date with changes in the primary database, using a [_Change Data Capture (CDC)_](https://en.wikipedia.org/wiki/Change_data_capture) mechanism.
- It also lets you _transform_ the data from relational tables into convenient and fast data structures that match your app's requirements. You specify the transformations using a configuration system, so no coding is required.
- RDI can write data to a Redis Active-Active database. However, it doesn't support writing data to two or more Active-Active replicas. Writing data from RDI to several Active-Active replicas could easily harm data integrity as RDI is not synchronous with the source database commits.

## Redis Data Integration release notes 1.16.0 (January 2026)
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-release-notes-rdi-1-16-0-e22b9b7237.md`
- RDI's mission is to help Redis customers sync Redis Enterprise with live data from their slow disk-based databases to:
- RDI keeps the Redis cache up to date with changes in the primary database, using a [_Change Data Capture (CDC)_](https://en.wikipedia.org/wiki/Change_data_capture) mechanism.
- It also lets you _transform_ the data from relational tables into convenient and fast data structures that match your app's requirements. You specify the transformations using a configuration system, so no coding is required.
- RDI can write data to a Redis Active-Active database. However, it doesn't support writing data to two or more Active-Active replicas. Writing data from RDI to several Active-Active replicas could easily harm data integrity as RDI is not synchronous with the source database commits.

## Redis Data Integration release notes 1.4.4 (January 2025)
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-release-notes-rdi-1-4-4-a7068f6249.md`
- > This maintenance release replaces the 1.4.3 release.
- RDIâs mission is to help Redis customers sync Redis Enterprise with live data from their slow disk-based databases to:
- RDI keeps the Redis cache up to date with changes in the primary database, using a [_Change Data Capture (CDC)_](https://en.wikipedia.org/wiki/Change_data_capture) mechanism.
- It also lets you _transform_ the data from relational tables into convenient and fast data structures that match your app's requirements. You specify the transformations using a configuration system, so no coding is required.
- RDI can write data to a Redis Active-Active database. However, it doesn't support writing data to two or more Active-Active replicas. Writing data from RDI to several Active-Active replicas could easily harm data integrity as RDI is not synchronous with the source database commits.

## Redis Data Integration release notes 1.6.1 (March 2025)
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-release-notes-rdi-1-6-1-9bdde8676a.md`
- > This release replaces the 1.6.0 release.
- RDIâs mission is to help Redis customers sync Redis Enterprise with live data from their slow disk-based databases to:
- RDI keeps the Redis cache up to date with changes in the primary database, using a [_Change Data Capture (CDC)_](https://en.wikipedia.org/wiki/Change_data_capture) mechanism.
- It also lets you _transform_ the data from relational tables into convenient and fast data structures that match your app's requirements. You specify the transformations using a configuration system, so no coding is required.
- RDI can write data to a Redis Active-Active database. However, it doesn't support writing data to two or more Active-Active replicas. Writing data from RDI to several Active-Active replicas could easily harm data integrity as RDI is not synchronous with the source database commits.

## Redis Data Integration release notes 1.6.2 (March 2025)
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-release-notes-rdi-1-6-2-7e67f9ad42.md`
- > This maintenance release replaces the 1.6.1 release.
- RDIâs mission is to help Redis customers sync Redis Enterprise with live data from their slow disk-based databases to:
- RDI keeps the Redis cache up to date with changes in the primary database, using a [_Change Data Capture (CDC)_](https://en.wikipedia.org/wiki/Change_data_capture) mechanism.
- It also lets you _transform_ the data from relational tables into convenient and fast data structures that match your app's requirements. You specify the transformations using a configuration system, so no coding is required.
- Fixed an issue where the exporter would crash on startup if the RDI namespace included dashes (e.g., `my-namespace`) that are not allowed in prometheus labels.

## Redis Data Integration release notes 1.8.0 (May 2025)
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-release-notes-rdi-1-8-0-0f54beb15e.md`
- This minor release replaces the 1.6.7 release.
- RDIâs mission is to help Redis customers sync Redis Enterprise with live data from their slow disk-based databases to:
- RDI keeps the Redis cache up to date with changes in the primary database, using a [_Change Data Capture (CDC)_](https://en.wikipedia.org/wiki/Change_data_capture) mechanism.
- It also lets you _transform_ the data from relational tables into convenient and fast data structures that match your app's requirements. You specify the transformations using a configuration system, so no coding is required.
- will also enable many new features in the near future.

## Troubleshooting
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-troubleshooting-ab7d0eaa2d.md`
- The following sections explain how you can get extra information from
- Redis Data Integration (RDI) to help you solve problems that you may encounter. Redis support may
- also ask you to provide this information to help you resolve issues.
- If the installer fails with an error, then try installing again with the
- This gives you more detail about the installation steps and can often

## RedisOM for Python
Source file: `raw/sources/20260409-docs-latest-integrate-redisom-for-python-2e86e72319.md`
- [Redis OM Python](https://github.com/redis/redis-om-python) is a Redis client that provides high-level abstractions for managing document data in Redis. This tutorial shows you how to get up and running with Redis OM Python, Redis Stack, and the [Flask](https://flask.palletsprojects.com/) micro-framework.
- We'd love to see what you build with Redis Stack and Redis OM.  [Join the Redis community on Discord](https://discord.gg/redis) to chat with us about all things Redis OM and Redis Stack.  Read more about Redis OM Python [our announcement blog post](https://redis.com/blog/introducing-redis-om-for-python/).
- This application, an API built with Flask and a simple domain model, demonstrates common data manipulation patterns using Redis OM.
- Our entity is a Person, with the following JSON representation:
- We'll let Redis OM handle generation of unique IDs, which it does using [ULIDs](https://github.com/ulid/spec).  Redis OM will also handle creation of unique Redis key names for us, as well as saving and retrieving entities from JSON documents stored in a Redis Stack database.

## Rust client for Redis
Source file: `raw/sources/20260409-docs-latest-integrate-rust-redis-0fb364a83e.md`
- Connect your Rust application to a Redis database using the redis-rs client library.
- redis-rs is a high-performance Redis client for Rust that leverages Rust's memory safety and performance characteristics. It provides both synchronous and asynchronous APIs with excellent integration into the Rust ecosystem.
- Refer to the [Rust Redis documentation](https://docs.rs/redis/latest/redis/) to install, connect, and use redis-rs.

## Get started with Terraform
Source file: `raw/sources/20260409-docs-latest-integrate-terraform-provider-for-redis-cloud-get-started-375d88468f.md`
- Here, you'll learn how to use the [Redis Cloud Terraform Provider]() to create a subscription and a database.
- 1. [Install Terraform](https://developer.hashicorp.com/terraform/tutorials/aws-get-started/install-cli).
- 1. [Create a Redis Cloud account]() if you do not have one already.
- 1. Get your Redis Cloud [API keys](). Set them to the following environment variables:
- 1. Create a file to contain the Terraform configuration called `main.tf`.

## Uptrace with Redis Software
Source file: `raw/sources/20260409-docs-latest-integrate-uptrace-with-redis-enterprise-9195abae4f.md`
- Uptrace is an [open source APM tool](https://uptrace.dev/get/open-source-apm.html) that supports distributed tracing, metrics, and logs. You can use it to monitor applications and set up automatic alerts to receive notifications.
- Uptrace uses OpenTelemetry to collect and export telemetry data from software applications such as Redis. OpenTelemetry is an open source observability framework that aims to provide a single standard for all types of observability signals such as traces, metrics, and logs.
- With OpenTelemetry Collector, you can receive, process, and export telemetry data to any [OpenTelemetry backend](https://uptrace.dev/blog/opentelemetry-backend.html). You can also use Collector to scrape Prometheus metrics provided by Redis and then export those metrics to Uptrace.
- Because installing OpenTelemetry Collector and Uptrace can take some time, you can use the [docker-compose](https://github.com/uptrace/uptrace/tree/master/example/redis-enterprise) example that also comes with Redis Software cluster.
- After you download the Docker example, you can edit the following configuration files in the `uptrace/example/redis-enterprise` directory before you start the Docker containers:

## Monitoring guide
Source file: `raw/sources/20260409-docs-latest-integrate-write-behind-monitoring-guide-535f1c435b.md`
- Write-behind accumulates operating statistics that you can:
- Write-behind can display its operating metrics in the console using the
- command. The command provides information about the current Write-behind engine status, target database configuration, and processing statistics broken down by stream. This tool is intended to be used by Operator to get the current snapshot of the system as well as monitoring ongoing data processing (when used in live mode).
- Write-behind allows collecting and exporting its metrics to [Prometheus](https://prometheus.io/) and visualizing them in [Grafana](https://grafana.com/). Operator can start the built-in exporter using the
- command. The diagram describes this flow and the components involved:

## redis-di
Source file: `raw/sources/20260409-docs-latest-integrate-write-behind-reference-cli-redis-di-0dcb618027.md`

## redis-di add-context
Source file: `raw/sources/20260409-docs-latest-integrate-write-behind-reference-cli-redis-di-add-context-9162f6d282.md`
- Host/IP of Redis Enterprise Cluster (service name in case of k8s)
- Redis Enterprise Cluster username with either DB Member, Cluster Member or Cluster Admin roles
- Client certificate file to authenticate with

## redis-di configure
Source file: `raw/sources/20260409-docs-latest-integrate-write-behind-reference-cli-redis-di-configure-22b7658ff8.md`
- Client certificate file to authenticate with
- Password for unlocking an encrypted private key

## redis-di create
Source file: `raw/sources/20260409-docs-latest-integrate-write-behind-reference-cli-redis-di-create-3d42ee46fe.md`
- Silent install. Do not prompt to enter missing parameters
- Do not install Write-behind Engine to the Write-behind Database
- Host/IP of Redis Enterprise Cluster (service name in case of k8s)
- Redis Enterprise Cluster username with either DB Member, Cluster Member or Cluster Admin roles
- Password for the new Write-behind Database (alphanumeric characters with zero or more of the following: ! & # $ ^ < > -)

## redis-di delete-all-contexts
Source file: `raw/sources/20260409-docs-latest-integrate-write-behind-reference-cli-redis-di-delete-all-contexts-61eb6604f5.md`
- Force operation. skips verification prompts

## redis-di delete
Source file: `raw/sources/20260409-docs-latest-integrate-write-behind-reference-cli-redis-di-delete-b17012edcb.md`
- Host/IP of Redis Enterprise Cluster (service name in case of k8s)
- Redis Enterprise Cluster username with either DB Member, Cluster Member or Cluster Admin roles
- Client certificate file to authenticate with
- Password for unlocking an encrypted private key
- Force operation. skips verification prompts

## redis-di delete-context
Source file: `raw/sources/20260409-docs-latest-integrate-write-behind-reference-cli-redis-di-delete-context-4c1a756243.md`
- Force operation. skips verification prompts

## redis-di deploy
Source file: `raw/sources/20260409-docs-latest-integrate-write-behind-reference-cli-redis-di-deploy-df98a0eea0.md`
- Client certificate file to authenticate with
- Password for unlocking an encrypted private key
- Directory containing Write-behind configuration

## redis-di describe-job
Source file: `raw/sources/20260409-docs-latest-integrate-write-behind-reference-cli-redis-di-describe-job-6be8f67da1.md`
- Client certificate file to authenticate with
- Password for unlocking an encrypted private key

## redis-di dump-support-package
Source file: `raw/sources/20260409-docs-latest-integrate-write-behind-reference-cli-redis-di-dump-support-package-82182f1ff7.md`
- Client certificate file to authenticate with
- Password for unlocking an encrypted private key
- Directory where the support file should be generated
- Stops the trace after exceeding this timeout (in seconds)

## redis-di get-rejected
Source file: `raw/sources/20260409-docs-latest-integrate-write-behind-reference-cli-redis-di-get-rejected-a170f7081f.md`
- Client certificate file to authenticate with
- Password for unlocking an encrypted private key
- Displays the oldest rejected records. If omitted, most resent records will be retrieved
- Only prints the rejected records for the specified DLQ (Dead Letter Queue) name

## redis-di list-jobs
Source file: `raw/sources/20260409-docs-latest-integrate-write-behind-reference-cli-redis-di-list-jobs-bef0c125dc.md`
- Client certificate file to authenticate with
- Password for unlocking an encrypted private key

## redis-di monitor
Source file: `raw/sources/20260409-docs-latest-integrate-write-behind-reference-cli-redis-di-monitor-34676383f2.md`
- Client certificate file to authenticate with
- Password for unlocking an encrypted private key

## redis-di reset
Source file: `raw/sources/20260409-docs-latest-integrate-write-behind-reference-cli-redis-di-reset-d6de870d81.md`
- Client certificate file to authenticate with
- Password for unlocking an encrypted private key
- Force operation. skips verification prompts

## redis-di scaffold
Source file: `raw/sources/20260409-docs-latest-integrate-write-behind-reference-cli-redis-di-scaffold-bfa96c2833.md`
- Directory containing Write-behind configuration
- Print the content of specified config file to CLI output

## redis-di set-context
Source file: `raw/sources/20260409-docs-latest-integrate-write-behind-reference-cli-redis-di-set-context-cc63245ed4.md`

## redis-di set-secret
Source file: `raw/sources/20260409-docs-latest-integrate-write-behind-reference-cli-redis-di-set-secret-100a1b5765.md`
- Host/IP of Redis Enterprise Cluster (service name in case of k8s)
- Redis Enterprise Cluster username with either DB Member, Cluster Member or Cluster Admin roles
- Client certificate file to authenticate with
- Password for unlocking an encrypted private key

## redis-di start
Source file: `raw/sources/20260409-docs-latest-integrate-write-behind-reference-cli-redis-di-start-6c47dfdb07.md`
- Client certificate file to authenticate with
- Password for unlocking an encrypted private key

## redis-di status
Source file: `raw/sources/20260409-docs-latest-integrate-write-behind-reference-cli-redis-di-status-5273a3c3a0.md`
- Client certificate file to authenticate with
- Password for unlocking an encrypted private key
- Display ingested data streams (live mode only)

## redis-di stop
Source file: `raw/sources/20260409-docs-latest-integrate-write-behind-reference-cli-redis-di-stop-db6fe7a8c7.md`
- Client certificate file to authenticate with
- Password for unlocking an encrypted private key

## redis-di trace
Source file: `raw/sources/20260409-docs-latest-integrate-write-behind-reference-cli-redis-di-trace-3a62dc9db0.md`
- Client certificate file to authenticate with
- Password for unlocking an encrypted private key
- Stops the trace after exceeding this timeout (in seconds)

## redis-di upgrade
Source file: `raw/sources/20260409-docs-latest-integrate-write-behind-reference-cli-redis-di-upgrade-073a4a21ff.md`
- Host/IP of Redis Enterprise Cluster (service name in case of k8s)
- Redis Enterprise Cluster username with either DB Member, Cluster Member or Cluster Admin roles
- Client certificate file to authenticate with
- Password for unlocking an encrypted private key
- Force upgrade/downgrade. skips verification prompts

## Write-behind configuration file
Source file: `raw/sources/20260409-docs-latest-integrate-write-behind-reference-config-yaml-reference-eeccbd3226.md`
- | Name                                                                                       | Type             | Description | Required |
- | ------------------------------------------------------------------------------------------ | ---------------- | ----------- | -------- |
- | [**applier**](#applier)<br/>(Configuration details of Write-behind Applier Gear) | `object`, `null` |             |          |
- | [**connections**](#connections)                                                            | `object`         |             |          |
- | Name                                                                                                                                 | Type                | Description                                                                                                                                                                                                      | Required |

## Write-behind configuration for cassandra
Source file: `raw/sources/20260409-docs-latest-integrate-write-behind-reference-debezium-cassandra-98b6647902.md`

## Write-behind configuration for mongodb
Source file: `raw/sources/20260409-docs-latest-integrate-write-behind-reference-debezium-mongodb-c926b0e1e9.md`

## Write-behind configuration for mysql
Source file: `raw/sources/20260409-docs-latest-integrate-write-behind-reference-debezium-mysql-9c2a8fee0a.md`

## Write-behind configuration for oracle
Source file: `raw/sources/20260409-docs-latest-integrate-write-behind-reference-debezium-oracle-bd9231506e.md`

## Write-behind configuration for postgresql
Source file: `raw/sources/20260409-docs-latest-integrate-write-behind-reference-debezium-postgresql-9d2c1a9ea3.md`

## Write-behind configuration for sqlserver
Source file: `raw/sources/20260409-docs-latest-integrate-write-behind-reference-debezium-sqlserver-1b71c191f7.md`

## Create Active-Active database (REAADB)
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-active-active-create-reaadb-13b4dab5a9.md`
- To create an Active-Active database, make sure you've completed all the following steps and have gathered the information listed below each step.
- 1. Configure the [admission controller and ValidatingWebhook]().
- These are installed and enabled by default on clusters created via the OpenShift OperatorHub.
- 2. Create two or more [RedisEnterpriseCluster (REC) custom resources]() with enough [memory resources]().
- * Namespace for each REC (`<rec-namespace>`)

## Edit Redis Enterprise remote clusters
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-active-active-edit-rerc-38686ea5cf.md`
- Before a RedisEnterpriseCluster (REC) can participate in an Active-Active database, it needs an accompanying RedisEnterpriseRemoteCluster (RERC) custom resource. The RERC contains details allowing the REC to link to the RedisEnterpriseActiveActiveDatabase (REAADB). The RERC resource is listed in the REAADB resource to become a participating cluster for the Active-Active database.
- The RERC controller periodically connects to the local REC endpoint via its external address, to ensure itâs setup correctly. For this to work, the external load balancer must support [NAT hairpinning](https://en.wikipedia.org/wiki/Network_address_translation#NAT_loopback). In some cloud environments, this may involve disabling IP preservation for the load balancer target groups.
- For more details, see the [RERC API reference]().
- Use the `kubectl patch rerc <rerc-name> --type merge --patch` command to patch the local RERC custom resource with your changes. For a full list of available fields, see the [RERC API reference]().
- The following example edits the `dbFqdnSuffix` field for the RERC named `rerc-ohare`.

## Set global database configurations
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-active-active-global-config-22df1f9e7b.md`
- The Redis Enterprise Active-Active database (REAADB) custom resource contains the field `.spec.globalConfigurations`. This field sets configurations for the Active-Active database across all participating clusters, such as memory size, shard count, and the global database secrets.
- The [REAADB API reference]() contains a full list of available fields.
- 1. Edit or patch the REAADB custom resource with your global configuration changes.
- The example command below patches the REAADB named `reaadb-boeing` to set the global memory size to 200MB:
- 1. Verify the status is `active` and the spec status is `Valid`.

## Flexible deployment options
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-architecture-deployment-options-4379ad23eb.md`
- Multiple RedisEnterpriseDatabase (REDB) resources can be associated with a single Redis Enterprise cluster resource (REC) even if they reside in different namespaces.
- The Redis Enterprise cluster (REC) custom resource must reside in the same namespace as the Redis Enterprise operator.
- Multi-namespace installations don't support Active-Active databases (REEADB). Only databases created with the REDB resource are supported in multi-namespace deployments at this time.
- The standard and simplest deployment deploys your Redis Enterprise databases (REDB) in the same namespace as the Redis Enterprise cluster (REC). No additional configuration is required for this, since there is no communication required to cross namespaces. See [Deploy Redis Enterprise for Kubernetes]().
- Multiple Redis Enterprise databases (REDB) spread across multiple namespaces within the same K8s cluster can be associated with the same Redis Enterprise cluster (REC). See [Manage databases in multiple namespaces]() for more information.

## Redis Enterprise for Kubernetes
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-cb719bdb25.md`
- Redis Enterprise for Kubernetes brings Redis Enterprise to Kubernetes environments through the Redis Enterprise operator. You can deploy, scale, and manage Redis Enterprise clusters and databases by using native Kubernetes resources and workflows.
- Redis Enterprise for Kubernetes provides all the enterprise features of Redis Software:
- The Redis Enterprise operator simplifies deployment and management by providing custom resource definitions (CRDs) for Redis Enterprise clusters (REC) and databases (REDB). This approach enables GitOps workflows and Kubernetes-native operations.
- Deploy Redis Enterprise on your Kubernetes cluster and create your first database.
- Create and manage [Redis Enterprise clusters]() on Kubernetes.

## Install Redis Enterprise Helm chart
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-deployment-helm-5c80e2ad70.md`
- or 3.18 for migrating from a non-Helm installation.
- If you suspect your file descriptor limits are below 100,000, you must either manually increase limits or [Allow automatic resource adjustment](). Most major cloud providers and standard container runtime configurations set default file descriptor limits well above the minimum required by Redis Enterprise. In these environments, you can safely run without enabling automatic resource adjustment.
- The steps below use the following placeholders to indicate command line parameters you must provide:
- 2. Install the Helm chart into a new namespace.
- To install with Openshift, add `--set openshift.mode=true`.

## Deployment with OpenShift CLI for Redis Enterprise for Kubernetes
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-deployment-openshift-openshift-cli-74c0b9e591.md`
- Use these steps to set up a Redis Enterprise Software cluster with OpenShift.
- To see which version of Redis Enterprise for Kubernetes supports your OpenShift version, see [Supported Kubernetes distributions]().
- If you suspect your file descriptor limits are below 100,000, you must either manually increase limits or [Allow automatic resource adjustment](). Most major cloud providers and standard container runtime configurations set default file descriptor limits well above the minimum required by Redis Enterprise. In these environments, you can safely run without enabling automatic resource adjustment.
- 1. Deploy the OpenShift operator bundle.
- If you are using version 6.2.18-41 or earlier, you must [apply the security context constraint](#install-security-context-constraint) before the operator bundle.

## Deploy Redis Enterprise Software for Kubernetes
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-deployment-quick-start-11565e0494.md`
- This guide works with most supported Kubernetes distributions. If you're using OpenShift, see [Redis Enterprise on OpenShift](). For details on what is currently supported, see [supported distributions]().
- To deploy Redis Enterprise for Kubernetes, you'll need:
- If you suspect your file descriptor limits are below 100,000, you must either manually increase limits or [Allow automatic resource adjustment](). Most major cloud providers and standard container runtime configurations set default file descriptor limits well above the minimum required by Redis Enterprise. In these environments, you can safely run without enabling automatic resource adjustment.
- If you are applying version 7.8.2-6 or above, check if the [OS](https://redis.io/docs/latest/operate/kubernetes/release-notes/7-8-2-releases/7-8-2-6-nov24/#breaking-changes) installed on the node is supported.
- **Important:** Each namespace can only contain one Redis Enterprise cluster. Multiple RECs with different operator versions can coexist on the same Kubernetes cluster, as long as they are in separate namespaces.

## Collect logs
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-logs-collect-logs-b2a93d7d52.md`
- The Redis Enterprise cluster (REC) log collector script ([`log_collector.py`](https://github.com/RedisLabs/redis-enterprise-k8s-docs/blob/master/log_collector/log_collector.py)) creates and fills a directory with the relevant logs for your environment. These logs will help the support team with troubleshooting.
- This script requires Python 3.11 or later.
- Before running the log collector, ensure you have the appropriate RBAC permissions configured. See [Log collector RBAC examples]() for detailed RBAC configuration instructions.
- 1. Download the latest [`log_collector.py`](https://github.com/RedisLabs/redis-enterprise-k8s-docs/blob/master/log_collector/log_collector.py) file.
- 1. Ensure your `kubectl` or `oc` CLI is configured to access the Kubernetes cluster you want to collect logs from.

## Logs
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-logs-db0f673f0d.md`
- Access and manage Redis Enterprise logs on Kubernetes for monitoring, troubleshooting, and debugging your Redis Enterprise deployment. Logs provide valuable insights into cluster operations, database performance, and system health.
- Learn how to collect and access logs from your Redis Enterprise deployment:
- Each Redis Enterprise container stores its logs under `/var/opt/redislabs/log`. When using persistent storage, this path is automatically mounted to the `redis-enterprise-storage` volume, making logs accessible through sidecar containers or external log collection tools.
- For example, in the REC (Redis Enterprise Cluster) spec you can add a sidecar container, such as a busybox, and mount the logs to there:
- Now the logs can be accessed from in the sidecar. For example by running

## Database connectivity
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-networking-database-connectivity-07b4e76615.md`
- Connecting applications to Redis Enterprise databases in Kubernetes involves understanding service discovery, credentials management, and access patterns. This guide covers the essential connectivity aspects unique to Kubernetes deployments.
- When you create a RedisEnterpriseDatabase (REDB), the Redis Enterprise operator automatically creates Kubernetes services to route traffic to your database. Understanding these service types is crucial for proper connectivity.
- By default, the operator creates two services for each database:
- Both services are created in the same namespace as your database and follow predictable naming conventions.
- Redis Enterprise supports three service types for database access:

## Redis Enterprise clusters (REC)
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-re-clusters-a16c446661.md`
- A Redis Enterprise cluster (REC) is a custom Kubernetes resource that represents a Redis Enterprise cluster deployment. The Redis Enterprise operator manages the lifecycle of REC resources, including deployment, scaling, upgrades, and recovery operations.
- REC resources define the cluster configuration, including node specifications, storage requirements, security settings, and networking configuration. After you deploy the cluster, it provides a foundation for creating and managing Redis Enterprise databases (REDB).
- Manage your Redis Enterprise cluster lifecycle and configuration:
- Optimize storage and performance for your Redis Enterprise cluster:
- The call home client sends health or error data from your deployment(s) back to Redis. You can disable it by adding the following to your REC specification:

## Recover a Redis Enterprise cluster on Kubernetes
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-re-clusters-cluster-recovery-2bc7436f12.md`
- the cluster stops responding to client connections.
- When this happens, you must recover the cluster to restore the connections.
- You can also perform cluster recovery to reset cluster nodes, to troubleshoot issues, or in a case of active/passive failover.
- The Redis Enterprise for Kubernetes automates these recovery steps:
- 1. Recreates a fresh Redis Enterprise cluster

## Connect the Prometheus operator to Redis Enterprise for Kubernetes
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-re-clusters-connect-prometheus-operator-9fda5a614a.md`
- To collect  metrics data from your databases and Redis Enterprise cluster (REC), you can connect your [Prometheus](https://prometheus.io/) server to an endpoint exposed on your REC. Redis Enterprise for Kubernetes creates a dedicated service to expose the `prometheus` port (8070) for data collection. A custom resource called `ServiceMonitor` allows the [Prometheus operator](https://github.com/prometheus-operator/prometheus-operator/tree/main/Documentation) to connect to this port and collect data from Redis Enterprise.
- Before connecting Redis Enterprise to Prometheus on your Kubernetes cluster, make sure you've done the following:
- Below is an example `ServiceMonitor` custom resource file. By specifying the service label (`app: redis.io/service=prom-metrics`) in the `selector.matchLabels` section, you can point the Prometheus operator to the correct Redis Enterprise service (`<rec_name>-prom`).
- You'll need to configure the following fields to connect Prometheus to Redis Enterprise:
- | `spec.endpoints` | `port` | Name of exposed port (`prometheus`) |

## Delete custom resources
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-re-clusters-delete-custom-resources-2693352b3f.md`
- Before you can delete a namespace, you must remove the Redis custom resources ([REDB](#delete-a-database-redb), [REC](#delete-a-redis-enterprise-cluster-rec), and [operator](#delete-operator-from-one-namespace)) residing within a namespace before you can delete that namespace. Deleting namespace containing an REDB may cause errors or data loss.
- To delete a database managed by the Redis Enterprise Kubernetes operator, run `kubectl delete redb <your-db-name>` from your K8s cluster.
- When you delete a database, your data and the REDB custom resource are also deleted.
- To delete a Redis Enterprise cluster managed by the operator:
- 1. Delete all the databases in your cluster.

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

## Manage Redis Enterprise databases for Kubernetes
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-re-databases-db-controller-d73a1fe470.md`
- A Redis Enterprise database (REDB) is created with a custom resource file. The custom resource defines the size, name, and other specifications for the REDB. The database is created when you apply the custom resource file.
- The database controller in Redis Enterprise for Kubernetes:
- The database controller recognizes the new custom resource and validates the specification.
- If valid, the controller combines the values specified in
- the custom resource with default values to create a full specification. It then uses this full specification to create the

## Configure modules
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-re-databases-modules-2e9ee1306e.md`
- Redis Enterprise modules extend Redis functionality with additional data types, commands, and capabilities. Redis Enterprise versions 8.0.2 and later include several bundled modules that are automatically enabled for compatible database types. You can also add user-defined modules for additional functionality.
- Redis Enterprise includes several bundled modules that extend Redis functionality with additional data types, commands, and capabilities. Starting with Redis Enterprise version 8.0.2, these modules are automatically included and immediately available for use.
- | Module | Name | Description | Capabilities |
- |--------|------|-------------|--------------|
- | **[RediSearch]()** | `search` | Full-text search and secondary indexing | Query, aggregation, full-text search, vector similarity search |

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

## YAML examples
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-reference-yaml-a117aaec05.md`
- This section provides complete YAML examples that cover common Redis Enterprise for Kubernetes deployment scenarios. Each example includes the necessary configuration files and step-by-step instructions for editing and applying them.
- 1. Copy the YAML content from the examples below
- 2. Save each YAML block to a separate file with a descriptive name
- 3. Edit the configuration values to match your environment
- 4. Apply the files in the correct order using `kubectl apply`

## Log collector RBAC examples
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-reference-yaml-log-collector-rbac-f66184ff82.md`
- This page provides YAML examples for configuring RBAC permissions for the Redis Enterprise log collector tool. The log collector requires different permission levels depending on the collection mode you choose.
- For complete log collection instructions, see [Collect logs]().
- The log collector has two collection modes that require different RBAC permissions:
- The `restricted` mode configuration provides minimal permissions for collecting Redis Enterprise resources only.
- The `all` mode configuration provides comprehensive permissions for collecting detailed cluster information.

## Rack awareness examples
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-reference-yaml-rack-awareness-6a975abff9.md`
- This page provides YAML examples for deploying Redis Enterprise with [rack awareness](). Rack awareness distributes Redis Enterprise nodes and database shards across different availability zones or failure domains to improve high availability and fault tolerance.
- For complete deployment instructions, see [Deploy on Kubernetes]().
- The service account for rack-aware deployments is the same as [basic deployments]().
- Rack awareness requires additional permissions to read [node labels](https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/) across the cluster.
- The [ClusterRoleBinding](https://kubernetes.io/docs/reference/access-authn-authz/rbac/#rolebinding-and-clusterrolebinding) grants cluster-wide permissions to the service account.

## Redis Enterprise for Kubernetes Release Notes 6.2.10-34 (May 2022)
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-release-notes-6-2-releases-k8s-6-2-10-34-2022-05-0c1eb0f56f.md`
- The Redis Enterprise K8s 6.2.10-34 supports the Redis Enterprise Software release 6.2.10 and includes feature improvements and bug fixes.
- The key new features, bug fixes, and known limitations are described below.
- **Do not** upgrade to this 6.2.10-34 release if you are an **OpenShift** customer and **also use modules**. Instead, **use the [6.2.10-45]()** release.
- There was a change in 6.2.10-34 to a new RHEL 8 base image for the Redis Server image. Due to binary differences in modules between the two operating systems, you cannot directly update RHEL 7 clusters to RHEL 8 when those clusters host databases using modules.
- Please contact support if you have further questions.

## Redis Enterprise for Kubernetes Release Notes 6.2.10-4 (March 2022)
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-release-notes-6-2-releases-k8s-6-2-10-4-2022-03-155b716e66.md`
- The Redis Enterprise K8s 6.2.10-4 supports the Redis Enterprise Software release 6.2.10 and includes feature improvements and bug fixes.
- The key new features, bug fixes, and known limitations are described below.
- This release includes the following container images:
- * **Redis Enterprise**: `redislabs/redis:6.2.10-90` or  `redislabs/redis:6.2.10-90.rhel7-openshift`
- * **Operator**: `redislabs/operator:6.2.10-4`

## Redis Enterprise for Kubernetes release notes 6.2.10-45 (July 2022)
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-release-notes-6-2-releases-k8s-6-2-10-45-2022-07-13cb0b4d7a.md`
- The Redis Enterprise K8s 6.2.10-45 supports the Redis Enterprise Software release 6.2.10 and includes feature improvements and bug fixes.
- The key bug fixes and known limitations are described below.
- This release includes the following container images:
- * **Redis Enterprise**: `redislabs/redis:6.2.10-129` or  `redislabs/redis:6.2.10-129.rhel8-openshift` (or `redislabs/redis:6.2.10-129.rhel7-openshift` if upgrading from a RHEL7 cluster)
- * **Operator**: `redislabs/operator:6.2.10-45`

## Redis Enterprise for Kubernetes release notes 6.2.12-1 (Sept 2022)
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-release-notes-6-2-releases-k8s-6-2-12-1-b8b5e764db.md`
- The Redis Enterprise K8s 6.2.12-1 supports the Redis Enterprise Software release 6.2.12 and includes feature improvements and bug fixes.
- The key bug fixes and known limitations are described below.
- This release includes the following container images:
- * **Redis Enterprise**: `redislabs/redis:6.2.12-82` or  `redislabs/redis:6.2.12-82.rhel8-openshift`
- * **Operator**: `redislabs/operator:6.2.12-1`

## Redis Enterprise for Kubernetes release notes 6.2.18-3 (Nov 2022)
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-release-notes-6-2-releases-k8s-6-2-18-3-df790ffafd.md`
- The Redis Enterprise K8s 6.2.18-3 supports the Redis Enterprise Software release 6.2.18 and includes feature improvements and bug fixes.
- The key bug fixes, new features, and known limitations are described below.
- If you use NGINX as an ingress controller for Redis Enterprise, **do not upgrade** to the 6.2.18-3 release. Skip this release and upgrade to version [6.2.18-41]() instead.
- This release includes the following container images:
- * **Redis Enterprise**: `redislabs/redis:6.2.18-58` or  `redislabs/redis:6.2.18-58.rhel8-openshift` (or `redislabs/redis:6.2.18-58.rhel7-openshift` if upgrading from RHEL 7)

## Redis Enterprise for Kubernetes release notes 6.2.18-41 (Dec 2022)
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-release-notes-6-2-releases-k8s-6-2-18-41-6adfa15897.md`
- The Redis Enterprise K8s 6.2.18-41 is a maintenance release which supports the Redis Enterprise Software release 6.2.18 and contains bug fixes.
- The key bug fixes and known limitations are described below.
- Due to a change in the SCC, on OpenShift clusters running version 6.2.12 or earlier upgrading to version 6.2.18 or later, where `node:1` is <b>not</b> the master node, the upgrade might get stuck.
- For more info and steps to prevent this issue, see [upgrade a Redis Enterprise cluster (REC)]().
- * **Redis Enterprise**: `redislabs/redis:6.2.18-65`

## Redis Enterprise for Kubernetes Release Notes 6.2.4-1 (September 2021)
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-release-notes-6-2-releases-k8s-6-2-4-1-2021-09-a9a7acba66.md`
- The Redis Enterprise [K8s 6.2.4-1](https://github.com/RedisLabs/redis-enterprise-k8s-docs/releases/tag/v6.2.4-1) release provides support for the [Redis Enterprise Software release 6.2.4]() and includes several enhancements and bug fixes.
- The key new features, bug fixes, and known limitations are described below.
- This release includes the following container images:
- * **Redis Enterprise**: `redislabs/redis:6.2.4-55` or  `redislabs/redis:6.2.4-55.rhel7-openshift`
- * **Operator**: `redislabs/operator:6.2.4-1`

## Redis Enterprise for Kubernetes Release Notes 6.2.8-11 (January 2022)
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-release-notes-6-2-releases-k8s-6-2-8-11-2022-01-8436d2cef9.md`
- The Redis Enterprise K8s 6.2.8-11 release provides support for the [Redis Enterprise Software release 6.2.8]() and includes several enhancements and bug fixes.
- The key new features, bug fixes, and known limitations are described below.
- This release includes the following container images:
- * **Redis Enterprise**: `redislabs/redis:6.2.8-53` or  `redislabs/redis:6.2.8-53.rhel7-openshift`
- * **Operator**: `redislabs/operator:6.2.8-11`

## Redis Enterprise for Kubernetes Release Notes 6.2.8-15 (January 2022)
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-release-notes-6-2-releases-k8s-6-2-8-15-2022-01-f0f17c1b53.md`
- The Redis Enterprise K8s 6.2.8-15 is a maintenance release for the [Redis Enterprise Software release 6.2.8]() and includes bug fixes.
- The key new features, bug fixes, and known limitations are described below.
- This release includes the following container images:
- * **Redis Enterprise**: `redislabs/redis:6.2.8-64` or  `redislabs/redis:6.2.8-64.rhel7-openshift`
- * **Operator**: `redislabs/operator:6.2.8-15`

## Redis Enterprise for Kubernetes Release Notes 6.2.8-2 (November 2021)
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-release-notes-6-2-releases-k8s-6-2-8-2-2021-11-cd6e60aab4.md`
- The Redis Enterprise [K8s 6.2.8-2](https://github.com/RedisLabs/redis-enterprise-k8s-docs/releases/tag/v6.2.8-2) release provides support for the [Redis Enterprise Software release 6.2.8]() and includes several enhancements and bug fixes.
- The key new features, bug fixes, and known limitations are described below.
- This release includes the following container images:
- * **Redis Enterprise**: `redislabs/redis:6.2.8-41` or  `redislabs/redis:6.2.8-41.rhel7-openshift`
- * **Operator**: `redislabs/operator:6.2.8-2`

## Redis Enterprise for Kubernetes release notes 6.4.2-6 (June 2023)
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-release-notes-6-4-2-releases-6-4-2-6-b7e8676b4f.md`
- The Redis Enterprise K8s 6.4.2-6 release supports Redis Enterprise Software 6.4.2 and contains new features and feature improvements.
- The key features, bug fixes, and known limitations are described below.
- * **Redis Enterprise**: `redislabs/redis:6.4.2-81`
- * **Operator**: `redislabs/operator:6.4.2-6`
- * **Services Rigger**: `redislabs/k8s-controller:6.4.2-6`

## Redis Enterprise for Kubernetes release notes 6.4.2-8 (July 2023)
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-release-notes-6-4-2-releases-6-4-2-8-602efca5e8.md`
- Redis Enterprise for Kubernetes version 6.4.2-8 is a maintenance release of version 6.2.4-6. It includes critical bug fixes and an updated Redis Enterprise image.
- * New Redis Enterprise software version 6.4.2-94 (RED-105738)
- * Fixed bad handling of certificate chains in the REC controller (RED-105578)
- Be aware the following changes included in this release affect the upgrade process. Please read carefully before upgrading to 6.4.2-8.
- This release uses a new `ValidatingWebhookConfiguration` resource to replace the `redb-admission` webhook resource. To use releases 6.4.2-4 or later, delete the old webhook resource and apply the new file. See [upgrade Redis cluster]() for instructions.

## Redis Enterprise for Kubernetes release notes 6.4.2-4 (March 2023)
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-release-notes-6-4-2-releases-k8s-6-4-2-4-8585437f94.md`
- The Redis Enterprise K8s 6.4.2-4 release supports Redis Enterprise Software 6.4.2 and contains new features and feature improvements.
- The key features, bug fixes, and known limitations are described below.
- * **Redis Enterprise**: `redislabs/redis:6.4.2-43`
- * **Operator**: `redislabs/operator:6.4.2-4`
- * **Services Rigger**: `redislabs/k8s-controller:6.4.2-4`

## 7.2.4 release notes
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-release-notes-7-2-4-releases-07b4e0d52f.md`
- The primary purpose this release is supporting [Redis Enterprise 7.2.4](), which is a major Redis Enterprise Software update. As such, we reduced the scope of changes to support the underlying change of RS 7.2 and a few significant fixes.
- Redis Enterprise Software 7.2.4-52 includes several issues that also effect Redis Enterprise for Kubernetes and are not listed below. Review the Redis Enterprise Software 7.2.4 [breaking changes]() and [known limitations.]()
- For a list of fixes related to CVEs, see the [Redis Enterprise 7.2.4 release notes]().
- The following changes included in this release affect the upgrade process. Please read carefully before upgrading to 7.2.4-2.
- Versions 6.4.2-4 and later include a new `ValidatingWebhookConfiguration` resource to replace the `redb-admission` webhook resource. To use releases 6.4.2-4 or later, delete the old webhook resource and apply the new file. See [upgrade Redis cluster]() for instructions.

## Redis Enterprise for Kubernetes 7.2.4-12 (March 2024) release notes
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-release-notes-7-2-4-releases-7-2-4-12-03-24-d4df7917c6.md`
- This is a maintenance release to support Redis Enterprise Software version 7.2.4-105.
- For a list of fixes related to CVEs, see the [Redis Enterprise 7.2.4-105 release notes]().
- The following changes included in this release affect the upgrade process. Please read carefully before upgrading to 7.2.4-12.
- If your databases use modules, you need to update all nodes in the cluster to Redis Enterprise 7.2.4 or later before upgrading your operating system. See [Upgrade a cluster's operating system]()in the Redis Enterprise Software documentation for more details.
- The configurable `terminationGracePeriodSeconds` REC field has been added to replace the hard-coded timeout of 15 minutes for a node to be stopped/drained (RED-111471).

## Redis Enterprise for Kubernetes 7.2.4-12 (August 2024) release notes
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-release-notes-7-2-4-releases-7-2-4-12-08-2024-be3326cc71.md`
- This is a maintenance release to support Redis Enterprise Software version 7.2.4-109.
- For a list of fixes related to CVEs, see the [Redis Enterprise 7.2.4-109 release notes]().
- The following changes included in this release affect the upgrade process. Please read carefully before upgrading to 7.2.4-12.
- If your databases use modules, you need to update all nodes in the cluster to Redis Enterprise 7.2.4 or later before upgrading your operating system. See [Upgrade a cluster's operating system]() in the Redis Enterprise Software documentation for more details.
- The configurable `terminationGracePeriodSeconds` REC field has been added to replace the hard-coded timeout of 15 minutes for a node to be stopped/drained (RED-111471).

## Redis Enterprise for Kubernetes 7.2.4-12 (October 2024) release notes
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-release-notes-7-2-4-releases-7-2-4-12-10-24-7edd43059d.md`
- This is a maintenance release to support Redis Enterprise Software version 7.2.4-117.
- For a list of fixes related to CVEs, see the [Redis Enterprise 7.2.4-117 release notes]().
- The following changes included in this release affect the upgrade process. Please read carefully before upgrading to 7.2.4-12.
- If your databases use modules, you need to update all nodes in the cluster to Redis Enterprise 7.2.4 or later before upgrading your operating system. See [Upgrade a cluster's operating system]() in the Redis Enterprise Software documentation for more details.
- The configurable `terminationGracePeriodSeconds` REC field has been added to replace the hard-coded timeout of 15 minutes for a node to be stopped/drained (RED-111471).

## Redis Enterprise for Kubernetes 7.2.4-12 (Dec 2023) release notes
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-release-notes-7-2-4-releases-7-2-4-12-6dab33c205.md`
- This is a maintenance release with a few enhancements/fixes on the Kubernetes product and a newer Redis Enterprise container version.
- For a list of fixes related to CVEs, see the [Redis Enterprise 7.2.4-92 release notes]().
- The following changes included in this release affect the upgrade process. Please read carefully before upgrading to 7.2.4-12.
- If your databases use modules, you need to update all nodes in the cluster to Redis Enterprise 7.2.4 or later before upgrading your operating system. See [Upgrade a cluster's operating system]()in the Redis Enterprise Software documentation for more details.
- The configurable `terminationGracePeriodSeconds` REC field has been added to replace the hard-coded timeout of 15 minutes for a node to be stopped/drained (RED-111471).

## Redis Enterprise for Kubernetes release notes 7.2.4-2 (Aug 2023)
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-release-notes-7-2-4-releases-7-2-4-2-cf26870d1c.md`
- The primary purpose this release is supporting [Redis Enterprise 7.2.4](), which is a major Redis Enterprise Software update. As such, we reduced the scope of changes to support the underlying change of RS 7.2 and a few significant fixes.
- Redis Enterprise Software 7.2.4-52 includes several issues that also effect Redis Enterprise for Kubernetes and are not listed below. Review the Redis Enterprise Software 7.2.4 [breaking changes]() and [known limitations.]()
- The following fields were added to the RedisEnterpriseCluster (REC) custom resource definition (CRD):
- For a list of fixes related to CVEs, see the [Redis Enterprise 7.2.4-52 release notes]().
- The following changes included in this release affect the upgrade process. Please read carefully before upgrading to 7.2.4-2.

## Redis Enterprise for Kubernetes release notes 7.2.4-7 (Oct 2023)
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-release-notes-7-2-4-releases-7-2-4-7-41c5d84f90.md`
- This is a minor maintenance release with a few enhancement/fixes on the Kubernetes product, and a newer Redis Enterprise container version.
- For a list of fixes related to CVEs, see the [Redis Enterprise 7.2.4-64 release notes]().
- The following changes included in this release affect the upgrade process. Please read carefully before upgrading to 7.2.4-7.
- Versions 6.4.2-4 and later include a new `ValidatingWebhookConfiguration` resource to replace the `redb-admission` webhook resource. To use releases 6.4.2-4 or later, delete the old webhook resource and apply the new file. See [upgrade Redis cluster]() for instructions.
- Versions 6.4.2-6 and later include a new SCC (`redis-enterprise-scc-v2`) that you need to bind to your service account before upgrading. OpenShift clusters running version 6.2.12 or earlier upgrading to version 6.2.18 or later might get stuck if you skip this step. See [upgrade a Redis Enterprise cluster (REC)]() for instructions.

## Redis Enterprise for Kubernetes 7.22.0 release notes
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-release-notes-7-22-0-releases-a7ed179264.md`
- Redis Enterprise for Kubernetes 7.22.0 includes bug fixes, enhancements, and support for Redis Enterprise Software. The latest release is 7.22.0-17 with support for Redis Enterprise Software version 7.22.0-250.
- The following table shows supported distributions at the time of this release. You can also find this list in [Supported Kubernetes distributions]().
- <span title="Check mark icon">&#x2705;</span> Supported â This distribution is supported for this version of Redis Enterprise Kubernetes.
- <span title="Deprecation warning" class="font-serif">:warning:</span> Deprecated â This distribution is still supported for this version of Redis Enterprise Kubernetes, but support will be removed in a future release.
- <span title="X icon">&#x274c;</span> End of life â Support for this distribution ended.

## Redis Enterprise for Kubernetes 7.22.2 release notes
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-release-notes-7-22-2-releases-5acb3c3934.md`
- Redis Enterprise for Kubernetes 7.22.2 includes bug fixes, enhancements, and support for Redis Enterprise Software. The latest release is 7.22.2-38 with support for Redis Enterprise Software version 7.22.2-93.
- As of version 7.8.2-6, Redis Enterprise images are based on Red Hat Enterprise Linux 9 (RHEL9). This means upgrades require:
- For detailed steps, see the relevant upgrade page:

## Redis Enterprise for Kubernetes 7.4.2-2 (March 2024) release notes
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-release-notes-7-4-2-releases-7-4-2-03-24-1ce7bf510d.md`
- The primary purpose of this release is to support [Redis Enterprise 7.4.2](), which is a maintenance release of Redis Enterprise Software.
- For a list of fixes related to CVEs, see the [Redis Enterprise 7.4.2-104 release notes]().
- The following changes included in this release affect the upgrade process. Please read carefully before upgrading.
- If your databases use modules, you need to update all nodes in the cluster to Redis Enterprise 7.2.4 or later before upgrading your operating system. See [Upgrade a cluster's operating system]()in the Redis Enterprise Software documentation for more details.
- The configurable `terminationGracePeriodSeconds` REC field was added in version 7.2.4-12 to replace the hard-coded timeout of 15 minutes for a node to be stopped or drained (RED-111471).

## Redis Enterprise for Kubernetes 7.4.2-12 (May 2024) release notes
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-release-notes-7-4-2-releases-7-4-2-12-1c898cd016.md`
- This release has many enhancements, most notably support for persistent volume expansion in the REC. Also, some essential changes in module handling support newer capabilities prompted by changes in the underlying Redis Enterprise around versioning.
- | **CRD** | **Field** | **Change** | **Description** |
- | REC | spec.persistentSpec.enablePersistentVolumeResize | ADD | Set to "true" to allow changes in volumeSize after REC creation (for sizing up only) |
- | REC | status.persistenceStatus | ADD | Indicates the status of persistent volume expansion |
- | REC | spec.redisEnterpriseIPFamily | ADD | Configure which IP family to use when Kubernetes cluster has Dual Stack networking enabled  |

## Redis Enterprise for Kubernetes 7.4.2-2 (Feb 2024) release notes
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-release-notes-7-4-2-releases-7-4-2-2-e1c209638f.md`
- The primary purpose of this release is to support [Redis Enterprise 7.4.2](), which is a major update to Redis Enterprise Software. As such, we have limited the scope of changes to focus on supporting RS 7.4 changes, in addition to implementing a few enhancements and major fixes.
- | **CRD** | **Field** | **Change** | **Description** |
- | REC | resp3Default | Add | Boolean controlling whether Resp3 should be enabled by default |
- | REDB | resp3 | Add | Controls resp3 for specific REDBs |
- For a list of fixes related to CVEs, see the [Redis Enterprise 7.4.2-54 release notes]().

## Redis Enterprise for Kubernetes 7.4.2 release notes
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-release-notes-7-4-2-releases-cb599c09e3.md`
- For a list of fixes related to CVEs, see the [Redis Enterprise 7.4.6-22 release notes]().
- The following changes included in this release affect the upgrade process. Please read carefully before upgrading.
- If your databases use modules, you need to update all nodes in the cluster to Redis Enterprise 7.2.4 or later before upgrading your operating system. See [Upgrade a cluster's operating system]()in the Redis Enterprise Software documentation for more details.
- The configurable `terminationGracePeriodSeconds` REC field was added in version 7.2.4-12 to replace the hard-coded timeout of 15 minutes for a node to be stopped or drained (RED-111471).
- Versions 6.4.2-4 and later include a new `ValidatingWebhookConfiguration` resource to replace the `redb-admission` webhook resource. To use releases 6.4.2-4 or later, delete the old webhook resource and apply the new file. See [upgrade Redis cluster]() for instructions.

## Redis Enterprise for Kubernetes 7.4.6-2 (July 2024) release notes
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-release-notes-7-4-6-releases-7-4-6-2-ebb0fbffad.md`
- The primary purpose of this release is to support [Redis Enterprise Software version 7.4.6](). It also includes updates to supported platform distributions.
- | **CRD** | **Field** | **Change** | **Description** |
- | REC | backup.s3.caCertificateSecretName | Add | Secret name that holds the S3 CA certificate, which contains the TLS certificate mapped to the key in the secret 'cert' |
- | REC | backup.s3.url | Add | Specifies the URL for S3 export and import (used for custom S3 compatible servers) |
- For a list of fixes related to CVEs, see the [Redis Enterprise 7.2.4-109 release notes]().

## Redis Enterprise for Kubernetes 7.4.6 release notes
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-release-notes-7-4-6-releases-9b760df50e.md`
- The following changes included in this release affect the upgrade process. Please read carefully before upgrading.
- Versions 6.4.2-4 and later include a new `ValidatingWebhookConfiguration` resource to replace the `redb-admission` webhook resource. To use releases 6.4.2-4 or later, delete the old webhook resource and apply the new file. See [upgrade Redis cluster]() for instructions.
- Versions 6.4.2-6 and later include a new SCC (`redis-enterprise-scc-v2`) that you need to bind to your service account before upgrading. If you skip this step, OpenShift clusters running version 6.2.12 or earlier might get stuck when upgrading to version 6.2.18 or later. See [upgrade a Redis Enterprise cluster (REC)]() for instructions.
- For a list of fixes related to CVEs, see the [Redis Enterprise 7.2.4-109 release notes]().
- The following table shows supported distributions at the time of this release. You can also find this list in [Supported Kubernetes distributions]().

## Redis Enterprise for Kubernetes 7.8.2-6 (Nov 2024) release notes
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-release-notes-7-8-2-releases-7-8-2-6-nov24-f96877ba8d.md`
- | **CRD** | **Field** | **Change** | **Description** |
- | REC | `status.CertificatesUpdateStatus` | Rename | Renamed status field and changed the structure |
- | REC | `status.state` | Add value to enum  | `runningRollingUpgrade`  |
- | REDB | `spec.modulesList` | Field enabled | Don't need to set `ENABLE_ALPHA_FEATURES` to enable. |
- | REDB | `redb.upgradeSpec.upgradeModulesToLatest` | Changed default  | Default is now `true` |

## Redis Enterprise for Kubernetes 7.8.2-6 release notes
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-release-notes-7-8-2-releases-b465615ecf.md`
- Redis Enterprise for Kubernetes 7.8.2-6 is a feature release including support for Redis Software 7.8.2-2.
- The following changes included in this release affect the upgrade process. Please read carefully before upgrading.
- See [Upgrade Redis Enterprise for Kubernetes]() for detailed steps to upgrade to 7.8.2-6.

## Redis Enterprise for Kubernetes 7.8.4 release notes
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-release-notes-7-8-4-releases-09e9b64285.md`
- Redis Enterprise for Kubernetes 7.8.4-8 includes bug fixes, enhancements, and support for [Redis Enterprise Software version 7.8.4]().
- See [Upgrade Redis Enterprise for Kubernetes]() for detailed steps to upgrade to 7.8.4-8.

## Redis Enterprise for Kubernetes 7.8.6 release notes
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-release-notes-7-8-6-releases-ded630e219.md`
- Redis Enterprise for Kubernetes 7.8.6 includes bug fixes, enhancements, and support for Redis Enterprise Software. The latest release is 7.8.6-13 with support for Redis Enterprise Software version 7.8.6-256.
- Customers who use load balancers for Active-Active replication endpoints and rely on the change introduced in RED-113626 (or the workaround described in the ticket) must set the spec.externalReplicationPort field in REAADB after upgrading. Otherwise, replication will fail (RED-149374).
- As of version 7.8.2-6, Redis Enterprise images are based on Red Hat Enterprise Linux 9 (RHEL9). This means upgrades require:
- For detailed steps, see the relevant upgrade page:

## Redis Enterprise for Kubernetes 8.0.10-21 (February 2026) release notes
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-release-notes-8-0-10-releases-8-0-10-21-feb2026-e2f52eac6c.md`
- Redis Enterprise for Kubernetes 8.0.10-21 is a feature release that supports [Redis Software 8.0.10-64
- ]() and includes new features and enhancements.
- When you pull images from container registries such as Docker Hub, ARM support is transparent. The registry automatically serves the correct image based on the node architecture (AMD64 or ARM64).
- | **CRD** | **Field** | **Change** | **Description** |
- | REDB | `spec.ossClusterSettings` | Added | Additional OSS cluster mode settings. |

## Redis Enterprise for Kubernetes 8.0.10 release notes
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-release-notes-8-0-10-releases-a20f1bac17.md`
- Redis Enterprise for Kubernetes 8.0.10 includes bug fixes, enhancements, and support for Redis Enterprise Software 8.0.10. The latest release is 8.0.10-23 with support for Redis Enterprise Software version 8.0.10-81.

## Redis Enterprise for Kubernetes 8.0.16 release notes
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-release-notes-8-0-16-releases-552451b929.md`
- Redis Enterprise for Kubernetes 8.0.16-24 is a maintenance release of Redis Enterprise for Kubernetes 8.0.10. The latest release is 8.0.16-24 with support for Redis Enterprise Software version 8.0.16-29.

## Redis Enterprise for Kubernetes 8.0.16-24 (March 2026) release notes
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-release-notes-8-0-16-releases-8-0-16-24-march2026-637fb2a960.md`
- Redis Enterprise for Kubernetes 8.0.16-24 is a maintenance release of [Redis Enterprise for Kubernetes 8.0.10]().
- For version changes, supported distributions, and known limitations, see the [release notes for 8.0.10]().

## Redis Enterprise for Kubernetes 8.0.2-2 (October 2025) release notes
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-release-notes-8-0-2-releases-8-0-2-2-october2025-479b02f41e.md`
- This feature release of Redis Enterprise for Kubernetes supports Redis Software 8.0.2-17 and includes enhancements, platform support changes, and bug fixes.
- **Custom modules not supported**: If you use custom (user-defined) modules, skip this release. Custom module support will be available in the next release.
- This release includes enhancements to the Redis Enterprise for Kubernetes operator, and includes features supported by Redis Software 8.0.2-17, and Redis Open Source 8.0 and 8.2.
- **Redis Enterprise for Kubernetes 8.0.2-2:**
- This release includes enhancements to Redis Enterprise for Kubernetes including:

## Redis Enterprise for Kubernetes 8.0.2-6 (December 2025) release notes
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-release-notes-8-0-2-releases-8-0-2-6-december2025-bcaeea383a.md`
- This maintenance release of Redis Enterprise for Kubernetes supports Redis Software 8.0.2-41 and includes enhancements, API changes, and bug fixes.
- **Custom modules not supported**: If you use custom (user-defined) modules, skip this release. Custom module support will be available in the next release.
- | **CRD** | **Field** | **Change** | **Description** |
- | REC | spec.dpInternodeEncryptionCertificateSecretName | Add | Secret name to use for cluster's Data Plane Internode Encryption (DPINE) certificate. If left blank, a cluster-provided certificate will be used. |
- | REC | spec.cpInternodeEncryptionCertificateSecretName | Add | Secret name to use for cluster's Control Plane Internode Encryption (CPINE) certificate. If left blank, a cluster-provided certificate will be used. |

## Redis Enterprise for Kubernetes 8.0.2 release notes
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-release-notes-8-0-2-releases-ba07e35b43.md`
- Redis Enterprise for Kubernetes 8.0.2 includes bug fixes, enhancements, and support for Redis Enterprise Software 8.0.2. The latest release is 8.0.2-2 with support for Redis Enterprise Software version 8.0.2.
- As of version 7.8.2-6, Redis Enterprise images are based on Red Hat Enterprise Linux 9 (RHEL9). This means upgrades require:
- For detailed steps, see the relevant upgrade page:

## Redis Enterprise for Kubernetes 8.0.6 release notes
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-release-notes-8-0-6-releases-4fa11dff3c.md`
- Redis Enterprise for Kubernetes 8.0.6 includes bug fixes, enhancements, and support for Redis Enterprise Software 8.0.6. The latest release is 8.0.6-8 with support for Redis Enterprise Software version 8.0.6-54.

## Redis Enterprise for Kubernetes 8.0.6-8 (December 2025) release notes
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-release-notes-8-0-6-releases-8-0-6-8-december2025-7092422a9f.md`
- Redis Enterprise for Kubernetes 8.0.6-8 is a feature release that supports Redis Software [8.0.6-54](), and includes enhancements, supported distribution updates and bug fixes.
- API support has been added for the following features:
- See [API changes](#api-changes) for details.
- | **CRD** | **Field** | **Change** | **Description** |
- | REAADB | `spec.globalConfigurations.auditing` | Added | Enable database connection auditing. |

## Redis Enterprise for Kubernetes Release Notes 6.0.12-5 (February 2021)
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-release-notes-previous-releases-k8s-6-0-12-5-486b63d490.md`
- The Redis Enterprise [K8s 6.0.12-5](https://github.com/RedisLabs/redis-enterprise-k8s-docs/releases/tag/v6.0.12-5) release is a *major release* on top of [6.0.8-20](https://github.com/RedisLabs/redis-enterprise-k8s-docs/releases/tag/v6.0.8-20) providing support for the [Redis Enterprise Software release 6.0.12-57](https://docs.redislabs.com/latest/rs/release-notes/rs-6-0-12-january-2021/) and includes several enhancements and bug fixes.
- To upgrade your deployment to this latest release, see ["Upgrade a Redis Enterprise cluster (REC) on Kubernetes"]().
- This release includes the following container images:
- * **Redis Enterprise**: redislabs/redis:6.0.12-57 or redislabs/redis:6.0.12-57.rhel7-openshift
- * **Operator and Bootstrapper**: redislabs/operator:6.0.12-5

## Redis Enterprise for Kubernetes Release Notes 6.0.20-12 (July 2021)
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-release-notes-previous-releases-k8s-6-0-20-12-577e5a4550.md`
- The Redis Enterprise [K8s 6.0.20-12](https://github.com/RedisLabs/redis-enterprise-k8s-docs/releases/tag/v6.0.20-12) release is a *major release* on top of [6.0.20-4](https://github.com/RedisLabs/redis-enterprise-k8s-docs/releases/tag/v6.0.20-4) providing support for the [Redis Enterprise Software release 6.0.20-97](https://docs.redislabs.com/latest/rs/release-notes/rs-6-0-20-april-2021/) and includes several enhancements and bug fixes.
- This release includes the following container images:
- * **Redis Enterprise**: `redislabs/redis:6.0.20-97` or  redislabs/redis:6.0.20-97.rhel7-openshift`
- * **Operator and Bootstrapper**: `redislabs/operator:6.0.20-12`
- * **Services Rigger**: `redislabs/k8s-controller:6.0.20-12` or `redislabs/services-manager:6.0.20-12` (on the Red Hat registry)

## Redis Enterprise for Kubernetes Release Notes 6.0.20-4 (May 2021)
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-release-notes-previous-releases-k8s-6-0-20-4-4fc0564f49.md`
- The Redis Enterprise K8s [6.0.20-4](https://github.com/RedisLabs/redis-enterprise-k8s-docs/releases/tag/v6.0.20-4) release is a *major release* on top of [6.0.8-20](https://github.com/RedisLabs/redis-enterprise-k8s-docs/releases/tag/v6.0.8-20) providing support for the [Redis Enterprise Software release 6.0.20-69]() and includes several enhancements and bug fixes.
- To upgrade your deployment to this latest release, see ["Upgrade a Redis Enterprise cluster (REC) on Kubernetes"]().
- This release includes the following container images:
- * **Redis Enterprise**: redislabs/redis:6.0.20-69 or redislabs/redis:6.0.20-69.rhel7-openshift
- * **Operator and Bootstrapper**: redislabs/operator:6.0.20-4

## Redis Enterprise for Kubernetes Release Notes 6.0.6-11 (July 2020)
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-release-notes-previous-releases-k8s-6-0-6-11-ebdc1ea258.md`
- The Redis Enterprise K8s 6.0.6-11 release is a *maintenance release* on top of [6.0.6-6](https://github.com/RedisLabs/redis-enterprise-k8s-docs/releases/tag/v6.0.6-6) providing support for the latest [Redis Enterprise Software release 6.0.6-39](https://docs.redislabs.com/latest/rs/release-notes/rs-6-0-may-2020/) and includes several bug fixes.
- To upgrade your deployment to this latest release, see ["Upgrade a Redis Enterprise cluster (REC) on Kubernetes"]().

## Redis Enterprise for Kubernetes Release Notes 6.0.6-23 (August 2020)
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-release-notes-previous-releases-k8s-6-0-6-23-f49f3a766d.md`
- To upgrade your deployment to this latest release, see ["Upgrade a Redis Enterprise cluster (REC) on Kubernetes"]().
- Red Hat UBI base images (RED29651) - The services rigger and operator images are now based on Red Hat UBI base images. Also, the same images are now used in both OpenShift and non-OpenShift environments.
- Support for Kubernetes version 1.11 and 1.12 is deprecated (excludes Openshift 3.11, which continues to be supported).

## Redis Enterprise for Kubernetes Release Notes 6.0.6-24 (August 2020)
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-release-notes-previous-releases-k8s-6-0-6-24-c1acbadcdc.md`
- The Redis Enterprise K8s 6.0.6-24 release is a *maintenance release* on top of [6.0.6-23](https://github.com/RedisLabs/redis-enterprise-k8s-docs/releases/tag/v6.0.6-23) providing support for the latest [Redis Enterprise Software release 6.0.6-39](https://docs.redislabs.com/latest/rs/release-notes/rs-6-0-may-2020/) and includes several bug fixes.
- To upgrade your deployment to this latest release, see ["Upgrade a Redis Enterprise cluster (REC) on Kubernetes"]().
- * **Redis Enterprise** - redislabs/redis:6.0.6-39 or redislabs/redis:6.0.6-39.rhel7-openshift
- * **Operator** - redislabs/operator:6.0.6-24
- * **Services Rigger** - redislabs/k8s-controller:6.0.6-24 or redislabs/services-manager:6.0.6-24 (on the RedHat registry)

## Redis Enterprise for Kubernetes Release Notes 6.0.6-6 (June 2020)
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-release-notes-previous-releases-k8s-6-0-6-6-df991d03e5.md`
- To upgrade your deployment to this latest release, see ["Upgrade a Redis Enterprise cluster (REC) on Kubernetes"]().
- If you are running Active-Active (CRBD) databases on a previous release, do not upgrade to 6.0.6-6 at this time. There is an issue with the upgrade process that is currently being investigated (RED43635). For more information and support please [contact Redis support](https://redislabs.com/company/support/).
- and manage databases on a Redis Enterprise cluster via a custom resource (RED36516).
- has been added to the cluster CR (see podTolerations) (RED33069).
- added to the cluster CR (see podAnnotations) (RED35613).

## Redis Enterprise for Kubernetes Release Notes 6.0.8-1 (October 2020)
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-release-notes-previous-releases-k8s-6-0-8-1-8e47e5d326.md`
- The Redis Enterprise K8s 6.0.8-1 release is a *major release* on top of [6.0.6-24](https://github.com/RedisLabs/redis-enterprise-k8s-docs/releases/tag/v6.0.6-24) providing support for the latest [Redis Enterprise Software release 6.0.8-28](https://docs.redislabs.com/latest/rs/release-notes/rs-6-0-8-september-2020/) and includes several enhancements (including OpenShift 4.5 and Kubernetes 1.18 support) and bug fixes.
- * New support K8s distributions and platforms
- To upgrade your deployment to this latest release, see ["Upgrade a Redis Enterprise cluster (REC) on Kubernetes"]().
- * **Redis Enterprise** - redislabs/redis:6.0.8-28 or redislabs/redis:6.0.8-28.rhel7-openshift
- * **Operator** - redislabs/operator:6.0.8-1

## Redis Enterprise for Kubernetes Release Notes 6.0.8-20 (December 2020)
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-release-notes-previous-releases-k8s-6-0-8-20-4a363b0d08.md`
- The Redis Enterprise K8s 6.0.8-20 release is a *major release* on top of [6.0.8-1](https://github.com/RedisLabs/redis-enterprise-k8s-docs/releases/tag/v6.0.8-1) providing support for the [Redis Enterprise Software release 6.0.8-30](https://docs.redislabs.com/latest/rs/release-notes/rs-6-0-8-september-2020/) and includes several enhancements and bug fixes.
- To upgrade your deployment to this latest release, see ["Upgrade a Redis Enterprise cluster (REC) on Kubernetes"]().
- This release includes the following container images:
- * **Redis Enterprise**: redislabs/redis:6.0.8-30 or redislabs/redis:6.0.8-30.rhel7-openshift
- * **Operator and Bootstrapper**: redislabs/operator:6.0.8-20

## Manage Redis Enterprise cluster (REC) credentials
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-security-manage-rec-credentials-04ca4559e5.md`
- This procedure is only supported for operator versions 6.0.20-12 and above.
- The credentials can be used to access the Redis Enterprise admin console or the API. Connectivity must be configured to the REC [pods](https://kubernetes.io/docs/concepts/workloads/pods/) using an appropriate service (or port forwarding).
- 1. Inspect the random username and password created by the operator during creation with the `kubectl get secret` command.
- The command outputs the encoded password and username, similar to the example below.
- 1. Decode the password and username with the `echo` command and the password from the previous step.

## Enable SSO authentication
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-security-sso-6b8ec87fcd.md`
- Redis Enterprise Software supports SAML 2.0 single sign-on (SSO) for the Cluster Manager UI with both IdP-initiated and SP-initiated authentication. User accounts are automatically created on first sign-in using just-in-time (JIT) provisioning.
- To enable SSO for your Redis Enterprise cluster (REC), follow these steps to configure SAML authentication.
- 1. An existing Redis Enterprise cluster (REC) deployed in Kubernetes
- 2. **External access to the Cluster Manager UI** - The Cluster Manager UI must be accessible externally via a LoadBalancer service or Ingress so users can access it from their browser and the identity provider can redirect back after authentication. See [Connect to the admin console]() for configuration options.
- 3. A SAML 2.0-compatible identity provider (such as Okta, Azure AD, or similar)

## Integrate HashiCorp Vault with Redis Enterprise for Kubernetes
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-security-vault-96272c2713.md`
- You can configure HashiCorp Vault as the centralized secret management system for the Redis Enterprise Kubernetes operator, replacing the default Kubernetes secrets. This integration provides enhanced security, centralized secret management, and advanced features like secret rotation and audit logging.
- When Vault integration is enabled, all secrets referenced in Redis Enterprise custom resources are retrieved from Vault instead of Kubernetes secrets, including:
- | **Category** | **Secret Type** | **API Field** | **Description** |
- |  | [Cluster credentials]() | [`clusterCredentialSecretName`]() | Authentication credentials for cluster access |
- |  | [License]() | [`licenseSecretName`]() | Redis Enterprise license key |

## Upgrade Redis Enterprise with OpenShift CLI
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-upgrade-openshift-cli-64db15446b.md`
- Redis implements rolling updates for software upgrades in Kubernetes deployments. The upgrade process includes updating three components:
- 1. [Upgrade the Redis Enterprise operator](#upgrade-the-operator)
- 1. [Upgrade the Redis Enterprise cluster (REC)](#upgrade-the-redis-enterprise-cluster)
- 1. [Upgrade Redis Enterprise databases (REDB)](#upgrade-databases)
- The following steps ensure you have the minimum versions of all components necessary to upgrade to 7.8.2-6 or later. **Without these minimum versions, the upgrade will freeze and require manual recovery.**

## Upgrade Redis Enterprise with OpenShift OperatorHub
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-upgrade-upgrade-olm-0825154a3d.md`
- Redis implements rolling updates for software upgrades in Kubernetes deployments. The upgrade process includes updating three components:
- 1. [Upgrade the Redis Enterprise operator](#upgrade-the-redis-enterprise-operator)
- 1. [Upgrade the Redis Enterprise cluster (REC)](#upgrade-the-redis-enterprise-cluster)
- 1. [Upgrade Redis Enterprise databases (REDB)](#upgrade-databases)
- The following steps ensure you have the minimum versions of all components necessary to upgrade. **Without these minimum versions, the upgrade will freeze and require manual recovery.**

## Upgrade Redis Enterprise for Kubernetes
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-upgrade-upgrade-redis-cluster-c96b3391c7.md`
- Redis implements rolling updates for software upgrades in Kubernetes deployments. The upgrade process includes updating three components:
- 1. [Upgrade the Redis Enterprise operator](#upgrade-the-operator)
- 1. [Upgrade the Redis Enterprise cluster (REC)](#upgrade-the-redis-enterprise-cluster-rec)
- 1. [Upgrade Redis Enterprise databases (REDB)](#upgrade-databases)
- Before upgrading, ensure you have the minimum versions of all components necessary for your target version. **Without these minimum versions, the upgrade may freeze and require manual recovery.**

## Install Redis Stack on macOS
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-install-archive-install-stack-mac-os-5a552c70f6.md`
- To install Redis Stack on macOS, use [Homebrew](https://brew.sh/). Make sure that you have [Homebrew installed](https://docs.brew.sh/Installation) before starting on the installation instructions below.
- * `redis-stack` contains both `redis-stack-server` and `redis-stack-redisinsight` casks.
- * `redis-stack-server` provides Redis Stack server only.
- * `redis-stack-redisinsight` contains Redis Insight.
- First, tap the Redis Stack Homebrew tap:

## Install Redis Stack on Windows
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-install-archive-install-stack-windows-caf879142b.md`
- Redis is now natively supported on Windows through [Memurai](https://www.memurai.com/), the official Redis partner for Windows compatibility.
- To install Redis Stack on Windows, you will need to have Docker installed. When Docker is up and running, open Windows PowerShell and follow the instructions described in [Run Redis Stack on Docker](). Then, use Docker to connect with `redis-cli` as explained in that topic.
- If you attempt to use Windows Subsystem for Linux (WSL) or Ubuntu for Windows to follow [Linux instructions](), you will get a `systemd` error telling you `System has not been booted with systemd as init system (PID 1). Can't operate.` Do not fret. Just use Docker.
- _`systemd` is a suite of basic building blocks for a Linux system._ For more information about its function, see [System and Service Manager](https://systemd.io/). This becomes an issue due to the lack of support for Linux workflows on WSL. But, you can test the instructions listed in [Systemd support is now available in WSL!](https://devblogs.microsoft.com/commandline/systemd-support-is-now-available-in-wsl/). Let us know how that worked for you.

## Build and run Redis Open Source on AlmaLinux/Rocky Linux 8.10
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-install-build-stack-almalinux-rocky-8-8b9c6e706c.md`
- Follow the steps below to build and run Redis Open Source from its source code on a system running AlmaLinux and Rocky Linux 8.10.
- Docker images used to produce these build notes:
- For 8.10-minimal, you'll need to install `sudo` and `dnf` as follows:
- For 8.10 (regular), you'll need to install `sudo` as follows:
- Clean the package metadata, enable required repositories, and install development tools:

## Build and run Redis Open Source on AlmaLinux/Rocky Linux 9.5
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-install-build-stack-almalinux-rocky-9-c421ff1d44.md`
- Follow the steps below to build and run Redis Open Source from its source code on a system running AlmaLinux and Rocky Linux 9.5.
- Docker images used to produce these build notes:
- For 9.5-minimal, you'll need to install `sudo` and `dnf` as follows:
- For 9.5 (regular), you'll need to install `sudo` as follows:
- Enable the GoReleaser repository and install required packages:

## Build and run Redis Open Source on Debian 12 (Bookworm)
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-install-build-stack-debian-bookworm-0f41ab1dc3.md`
- Follow the steps below to build and run Redis Open Source from its source code on a system running Debian 12 (Bookworm).
- Docker images used to produce these build notes:
- First, update your package lists and install the development tools and libraries needed to build Redis:
- The Redis source code is available from [the Redis GitHub site](https://github.com/redis/redis/releases). Select the release you want to build and then select the .tar.gz file from the **Assets** drop down menu. You can verify the integrity of these downloads by checking them against the digests in the [redis-hashes GitHub repository](https://github.com/redis/redis-hashes).
- Alternatively, you can download the file directly using the `wget` command, as shown below.

## Build and run Redis Open Source on Debian 11 (Bullseye)
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-install-build-stack-debian-bullseye-e4568211d8.md`
- Follow the steps below to build and run Redis Open Source from its source code on a system running Debian 11 (Bullseye).
- Docker images used to produce these build notes:
- First, update your package lists and install the development tools and libraries needed to build Redis:
- The Redis source code is available from [the Redis GitHub site](https://github.com/redis/redis/releases). Select the release you want to build and then select the .tar.gz file from the **Assets** drop down menu. You can verify the integrity of these downloads by checking them against the digests in the [redis-hashes GitHub repository](https://github.com/redis/redis-hashes).
- Alternatively, you can download the file directly using the `wget` command, as shown below.

## Build and run Redis Open Source on macOS 13 (Ventura) and macOS 14 (Sonoma)
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-install-build-stack-macos-13-14-22733990ac.md`
- Follow the steps below to build and run Redis Open Source from its source code on a system running macOS 13 (Ventura) and macOS 14 (Sonoma).
- If Homebrew isn't already installed, follow the installation instructions on the [Homebrew home page](https://brew.sh).
- Rust is required to build the JSON package.
- The Redis source code is available from [the Redis GitHub site](https://github.com/redis/redis/releases). Select the release you want to build and then select the .tar.gz file from the **Assets** drop down menu. You can verify the integrity of these downloads by checking them against the digests in the [redis-hashes GitHub repository](https://github.com/redis/redis-hashes).
- Create a directory for the src, for example `~/src`.

## Build and run Redis Open Source on Ubuntu 20.04 (Focal)
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-install-build-stack-ubuntu-focal-6a8812f410.md`
- Follow the steps below to build and run Redis Open Source from its source code on a system running Ubuntu 20.04 (Focal).
- Docker images used to produce these build notes:
- Update your package lists and install the necessary development tools and libraries:
- Update the system's default compiler to GCC 10:
- Install CMake using `pip3` and link it for system-wide access.

## Build and run Redis Open Source on Ubuntu 22.04 (Jammy)
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-install-build-stack-ubuntu-jammy-b7a0f893ca.md`
- Follow the steps below to build and run Redis Open Source from its source code on a system running Ubuntu 22.04 (Jammy).
- Docker images used to produce these build notes:
- First, update your package lists and install the development tools and libraries needed to build Redis:
- Install CMake using `pip3` and link it for system-wide access.
- CMake version 3.31.6 is the latest supported version. Newer versions cannot be used.

## Build and run Redis Open Source on Ubuntu 24.04 (Noble)
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-install-build-stack-ubuntu-noble-75c2607323.md`
- Follow the steps below to build and run Redis Open Source from its source code on a system running Ubuntu 24.04 (Noble).
- Docker images used to produce these build notes:
- First, update your package lists and install the development tools and libraries needed to build Redis:
- The Redis source code is available from [the Redis GitHub site](https://github.com/redis/redis/releases). Select the release you want to build and then select the .tar.gz file from the **Assets** drop down menu. You can verify the integrity of these downloads by checking them against the digests in the [redis-hashes GitHub repository](https://github.com/redis/redis-hashes).
- Alternatively, you can download the file directly using the `wget` command, as shown below.

## Upgrade a Redis cluster to Redis 8
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-install-upgrade-cluster-0bede035e9.md`
- It's essential to practice upgrading Redis in a controlled environment before upgrading it in a production environment.
- Docker is an excellent tool to use for this purpose.
- Follow these instructions to upgrade a Redis cluster. This guide assumes you have installed Redis using one of the supported methods listed [here]().
- Before upgrading, create a snapshot of your current dataset on each node (identified by its port) using the following command:
- Repeat for every node in your cluster, both masters and replicas.

## Redis administration
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-management-admin-386fe0d937.md`
- * Deploy Redis using the Linux operating system. Redis is also tested on OS X, and from time to time on FreeBSD and OpenBSD systems. However, Linux is where most of the stress testing is performed, and where most production deployments are run.
- * Set the Linux kernel overcommit memory setting to 1. Add `vm.overcommit_memory = 1` to `/etc/sysctl.conf`. Then, reboot or run the command `sysctl vm.overcommit_memory=1` to activate the setting. See [FAQ: Background saving fails with a fork() error on Linux?]() for details.
- * To ensure the Linux kernel feature Transparent Huge Pages does not impact Redis memory usage and latency, run the command: `echo never > /sys/kernel/mm/transparent_hugepage/enabled` to disable it. See [Latency Diagnosis - Latency induced by transparent huge pages]() for additional context.
- * Ensured that swap is enabled and that your swap file size is equal to amount of memory on your system. If Linux does not have swap set up, and your Redis instance accidentally consumes too much memory, Redis can crash when it is out of memory, or the Linux kernel OOM killer can kill the Redis process. When swapping is enabled, you can detect latency spikes and act on them.
- * Set an explicit `maxmemory` option limit in your instance to make sure that it will report errors instead of failing when the system memory limit is near to be reached. Note that `maxmemory` should be set by calculating the overhead for Redis, other than data, and the fragmentation overhead. So if you think you have 10 GB of free memory, set it to 8 or 9.

## Debugging
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-management-debugging-5ac3d17250.md`
- Redis is developed with an emphasis on stability. We do our best with
- every release to make sure you'll experience a stable product with no
- crashes. However, if you ever need to debug the Redis process itself, read on.
- When Redis crashes, it produces a detailed report of what happened. However,
- sometimes looking at the crash report is not enough, nor is it possible for

## Redis benchmark
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-management-optimization-benchmarks-25321d80a3.md`
- Redis includes the `redis-benchmark` utility that simulates running commands done
- by N clients at the same time sending M total queries (it is similar to the
- Apache's `ab` utility). Below you'll find the full output of a benchmark executed
- Usage: redis-benchmark [-h <host>] [-p <port>] [-c <clients>] [-n <requests]> [-k <boolean>]
- SADD, random members and scores for ZADD.

## Redis CPU profiling
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-management-optimization-cpu-profiling-fbc3c1593e.md`
- Redis is developed with a great emphasis on performance. We do our best with
- every release to make sure you'll experience a very stable and fast product.
- Nevertheless, if you're finding room to improve the efficiency of Redis or
- are pursuing a performance regression investigation you will need a concise
- methodical way of monitoring and analyzing Redis performance.

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

## Troubleshooting Redis
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-management-troubleshooting-3e5c4a9bb5.md`
- This page tries to help you with what to do if you have issues with Redis. Part of the Redis project is helping people that are experiencing problems because we don't like to leave people alone with their issues.
- * If you have **latency problems** with Redis, that in some way appears to be idle for some time, read our [Redis latency troubleshooting guide]().
- * Redis stable releases are usually very reliable, however in the rare event you are **experiencing crashes** the developers can help a lot more if you provide debugging information. Please read our [Debugging Redis guide]().
- * We have a long history of users experiencing crashes with Redis that actually turned out to be servers with **broken RAM**. Please test your RAM using **redis-server --test-memory** in case Redis is not stable in your system. Redis built-in memory test is fast and reasonably reliable, but if you can you should reboot your server and use [memtest86](http://memtest86.com).
- For every other problem please drop a message to the [Redis Google Group](http://groups.google.com/group/redis-db). We will be glad to help.

## Redis cluster specification
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-reference-cluster-spec-4594e7cd84.md`
- Welcome to the **Redis Cluster Specification**. Here you'll find information
- about the algorithms and design rationales of Redis Cluster. This document is a work
- in progress as it is continuously synchronized with the actual implementation
- Redis Cluster is a distributed implementation of Redis with the following goals in order of importance in the design:
- * High performance and linear scalability up to 1000 nodes. There are no proxies, asynchronous replication is used, and no merge operations are performed on values.

## Virtual memory (deprecated)
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-reference-internals-internals-vm-10ffa1ecd9.md`
- **Note: This document was written by the creator of Redis, Salvatore Sanfilippo, early in the development of Redis (c. 2010). Virtual Memory was deprecated in Redis 2.4 and removed in Redis 2.6, so this documentation exists only for historical interest.**
- This document details the internals of the Redis Virtual Memory subsystem prior to Redis 2.6. The intended audience is not the final user but programmers willing to understand or modify the Virtual Memory implementation.
- The goal of the VM subsystem is to free memory transferring Redis Objects from memory to disk. This is a very generic command, but specifically, Redis transfers only objects associated with _values_. In order to understand better this concept we'll show, using the DEBUG command, how a key holding a value looks from the point of view of the Redis internals:
- Key at:0x100101d00 refcount:1, value at:0x100101ce0 refcount:1 encoding:raw serializedlength:4
- As you can see from the above output, the Redis top level hash table maps Redis Objects (keys) to other Redis Objects (values). The Virtual Memory is only able to swap _values_ on disk, the objects associated to _keys_ are always taken in memory: this trade off guarantees very good lookup performances, as one of the main design goals of the Redis VM is to have performances similar to Redis with VM disabled when the part of the dataset frequently used fits in RAM.

## Redis signal handling
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-reference-signals-4674d54f39.md`
- This document provides information about how Redis reacts to different POSIX signals such as `SIGTERM` and `SIGSEGV`.
- The information in this document **only applies to Redis version 2.6 or greater**.
- The `SIGTERM` and `SIGINT` signals tell Redis to shut down gracefully. When the server receives this signal,
- it does not immediately exit. Instead, it schedules
- a shutdown similar to the one performed by the [`SHUTDOWN`](/commands/shutdown) command. The scheduled shutdown starts as soon as possible, specifically as long as the

## Graph configuration compatibility with Redis Software
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-deprecated-features-grap-3195f93b6a.md`
- You cannot use `GRAPH.CONFIG SET` to configure RedisGraph in [Redis Software]() or [Redis Cloud](). Instead, use one of the following methods.
- | Setting | Redis<br />Software | Redis<br />Cloud | Notes |
- |:--------|:----------------------|:-----------------|:------|
- | [CACHE_SIZE](https://github.com/RedisGraph/RedisGraph/blob/master/docs/docs/configuration.md#cache_size) | <span title="Supported">&#x2705; Supported</span><br /><span><br /></span> | <span title="Supported">&#x2705; Flexible & Annual</span><br /><span title="Not supported"><nobr>&#x274c; Free & Fixed</nobr></span> | Default: 25 |
- | [MAX_QUEUED_QUERIES](https://github.com/RedisGraph/RedisGraph/blob/master/docs/docs/configuration.md#max_queued_queries) | <span title="Supported">&#x2705; Supported</span><br /><span><br /></span> | <span title="Supported">&#x2705; Flexible & Annual</span><br /><span title="Not supported"><nobr>&#x274c; Free & Fixed</nobr></span> | Default: 25 |

## Debugging
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-deprecated-features-trig-15332f3864.md`
- There are two methods you can use to debug your Redis Stack functions:
- 1. Make judicious use of the `redis.log` function, which writes to the Redis log file.
- If you have access to the Redis log files, `redis.log` is a good method to use when debugging. However, there is a drawback. Redis Cloud users do not have access to the Redis log files, and it's pretty common that only system administrators have access to them on self-hosted installations. Fortunately, you can also use Redis pub/sub, which will be discussed in the next section.
- You don't have to do anything special to use `redis.log`, as it's always available. Here is an example:
- After loading the library and executing the function with `TFCALL`, you'll see something like the following in your Redis log file:

## Cluster support
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-deprecated-features-trig-203ec28b87.md`
- **Notice**: On a Redis Open Source cluster, before executing any gears function, you must send a `REDISGEARS_2.REFRESHCLUSTER` command to all the shards so that they will be aware of the cluster topology. Without this step, each shard will act as a single Redis Open Source instance.
- Triggers and functions support cross-shard operation on Redis clusters. This means that it is possible to call a function that will be invoked on another shard. We call such a function a remote function.
- Just like local functions, remote function must be declared on library load time using `redis.registerClusterFunction` API. The following example declares a remote function that returns the number of keys on the shard:
- We have couple of options for calling a remote function. These options are exposed through the async client that is given to a Coroutine:
- * `async_client.runOnShards` - run the remote function on all the shards (including the current shard). Returns a promise that, once resolved, will give two nested arrays, the first contains another array with the results from all the shards and the other contains an array of errors (`[[res1, res2, ...],[err1, err2, ..]]`).

## Configuration
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-deprecated-features-trig-228c44d48d.md`
- Redis Stack's triggers and functions feature provides configuration options to control its operation. These options can be set when the module is bootstrapped and, in some cases, at runtime.
- The following sections describe the configuration options and how to set them.
- You can set your configuration options when the module is loaded.
- When the module is loaded at start time, the module configuration can be defined in the Redis configuration file. When loading the module at runtime the configuration can be given to the [`MODULE LOADEX`]() command. Each configuration must be prefixed with the module name, `redisgears_2.<configuration name>`.
- You may set certain configuration options at runtime. Setting a configuration at runtime is done using [`CONFIG SET`]() command. Here each configuration must be prefixed with the module name, `redisgears_2.<configuration name>`.

## Stream triggers
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-deprecated-features-trig-5203547e8f.md`
- Redis Stack's triggers and functions feature comes with a full stream API to process data from [Redis streams](). Unlike RedisGears v1 that provided a micro batching API, the new triggers and functions feature provides a **real streaming** API, which means that the data will be processed as soon as it enters the stream.
- Triggers and functions provide an API that allows to register a stream trigger. Do not get confused with [Redis streams consumer groups](), triggers and functions uses the Redis Module API to efficiently read the stream and manage its consumers. This approach gives a much better performance as there is no need to invoke any Redis commands in order to read from the stream. Lets see a simple example:
- * stream - streams name prefix on which to trigger the callback.
- * callback - the callback to invoke on each element in the stream. Following the same rules of [sync and async invocation](). The callback will be invoke only on primary shard.
- If we register this library (see the [quick start]() section to learn how to Register a RedisGears function) and run the following command on our Redis:

## Known limitations
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-deprecated-features-trig-6641c8edff.md`
- JavaScript remote functions are limited to **read operations** only. Any attempt to perform a write operation of the following functions on a shard different than the one executing the function will result in an error.
- In addition, keyspace modification performed by JavaScript functions that are registered using any of the methods available should perform write operations locally:
- It is also recommended to co-locate the keys to be modified in the same hash slot as the key or Stream that originated the event. As an example, if the user profile stored in the Hash `myserv:user:1234` is subject to changes and we'd like to count them in an external counter, we would name the counter using hash tags: `{myserv:user:1234}:cnt`.
- By design, asynchronous functions guarantee exclusive single-threaded access to the keyspace, the distinctive feature of Redis. In asynchronous programming with JavaScript functions, access to the keyspace in read or write mode must be blocking, while if not accessing the keyspace, the execution may be non-blocking. This implementation maintains the same level of data consistency as Redis standard commands or Lua scripts and functions but takes advantage of asynchronous execution, a feature of the JavaScript engine.
- Not all the JavaScript global variables are made available by the JavaScript engine loaded by Redis (e.g. `console`, `document`). The `redis` global variable can be used to manage functions registration, logging etc.

## Quick start using Redis Insight
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-deprecated-features-trig-67c0da1979.md`
- Make sure that you have [Redis Stack installed]() and running. Alternatively, you can create a [free Redis Cloud account](https://redis.com/try-free/?utm_source=redisio&utm_medium=referral&utm_campaign=2023-09-try_free&utm_content=cu-redis_cloud_users).
- If you haven't already installed Redis Insight, you can download the latest version [here](https://redis.com/redis-enterprise/redis-insight/?_ga=2.232184223.127667221.1704724457-86137583.1685485233&_gl=1*1gygred*_ga*ODYxMzc1ODMuMTY4NTQ4NTIzMw..*_ga_8BKGRQKRPV*MTcwNDkyMzExMC40MDEuMS4xNzA0OTI3MjQ2LjUyLjAuMA..*_gcl_au*MTQzODY1OTU4OS4xNzAxMTg0MzY0). If this is your first time using Redis Insight, you may wish to read through the [Redis Insight guide]() before continuing with this guide.
- Open the Redis Insight application, and connect to your database by clicking on its database alias.
- Click on the triggers and functions icon and then on **+ Library** as shown below.
- Add your code to the **Library Code** section of the right-hand panel and then click **Add Library**.

## Development
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-deprecated-features-trig-6e7db4a1ba.md`
- To aid in the development of new libraries of triggers and functions, you can use the type declaration files for the [triggers and functions API](), which allows your preferred development environment to provide autocompletion and type checking. You can install this information using the following command:
- Or you can manually add it as a devDependency to your `package.json` file:
- Create an empty directory for your new triggers and functions project, `my_first_project`. Navigate to the folder and run the following command:
- Update the `package.json` to add the gears API to the `devDependencies` object.
- Install the dependencies using `npm install`.

## Quick start using redis-cli
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-deprecated-features-trig-8d6ec2e1b1.md`
- Make sure that you have [Redis Stack installed]() and running. Alternatively, you can create a [free Redis Cloud account](https://redis.com/try-free/?utm_source=redisio&utm_medium=referral&utm_campaign=2023-09-try_free&utm_content=cu-redis_cloud_users). The triggers and functions preview is available in the fixed subscription plan for the Google Cloud Asia Pacific (Tokyo) and AWS Asia Pacific (Singapore) regions.
- Use the `TFUNCION LOAD` command to create a new library in your Redis instance.
- When the library is created successfully, an `OK` response is returned. Run the `TFUNCTION LIST` command to confirm your library was added to Redis.
- The `TFCALL` command is used to execute the JavaScript Function. If the command fails, an error will be returned.
- To update the library run the `TFUNCTION LOAD` command with the additional parameter `REPLACE`.

## JavaScript API
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-deprecated-features-trig-9febc3a80d.md`
- The triggers and functions JavaScript API provides a singleton instance of an object named *redis*. The *redis* instance enables registered functions to interact with the Redis server on which they are running. Following is the API provided by the *redis* instance.
- Register a new function that can later be invoke using `TFCALL` command.
- Register a new async function that can later be invoke using `TFCALLASYNC` command.
- Register a key space notification trigger that will run whenever a key space notification fired.
- Register a stream trigger that will be invoke whenever a data is added to a stream.

## Binary data
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-deprecated-features-trig-a897551714.md`
- By default, triggers and functions will decode all data as a string and will raise error on failures. Though useful for most users, sometimes there is a need to work with binary data. In order to do so, the library developer has to consider the following:
- 3. Binary key names on [keyspace triggers]()
- It is possible to instruct triggers and functions not to decode function arguments as `JS` `Strings` using the [redis.functionFlags.RAW_ARGUMENTS]() function flag. In this case, the function arguments will be given as `JS` `ArrayBuffer`. Example:
- The above example will allow us to set `key` and `val` even if those are binary data. Run example:
- Notice that the `call` function also accepts `JS` `ArrayBuffer` arguments.

## Function flags
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-deprecated-features-trig-cc1551e13f.md`
- When registering a function, it is possible to include additional information about its behavior. This information is known as function flags. Function flags are an optional argument that can be specified after the function implementation. The following flags are supported:
- 1. `redis.functionFlags.NO_WRITES`: This flag indicates that the function does not perform any write commands. Enabling this flag allows a function to be executed on read-only replicas or in out-of-memory (OOM) situations. Redis enforces this flag's behavior, meaning that any attempt to call a write command within a function that has this flag set will result in an exception.
- 2. `redis.functionFlags.ALLOW_OOM`: By default, Redis prevents any function from running in an OOM scenario. However, this flag allows overriding this behavior and running a function even when there is a memory shortage. Enabling this flag is considered unsafe and may cause Redis to exceed the `maxmemory` limit. **Users should only enable this flag if they are certain that their function does not consume additional memory.** For example, it is safe to run a function that only deletes data during an OOM situation.
- 3. `redis.functionFlags.RAW_ARGUMENTS`: By default, Redis attempts to decode all function arguments as `JS` `String`s. If the decoding fails, an error is returned to the client. However, when this flag is set, Redis avoids string decoding and passes the argument as a `JS` `ArrayBuffer` instead.
- The following example shows how to set the `redis.functionFlags.NO_WRITES` flag:

## RESP & JavaScript
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-deprecated-features-trig-ccab66db88.md`
- When running Redis commands from within a function using the `client.call` API, the reply is parsed as a resp3 reply and converted to a JS object using the following rules:
- | resp 3            | JS object type                                                                                                                                 |
- |-------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
- | `status`          | `StringObject` with a field called `__reply_type` and value `status` (or error if failed to convert to utf8)                                   |
- | `bulk string`     | JS `String` (or error if failed to convert to utf8)                                                                                            |

## Sync and async
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-deprecated-features-trig-cef1e56332.md`
- By default, each time a function is invoked, it is executed synchronously. This ensures the atomicity property, meaning that no other commands will be executed on Redis while the function is running. The atomicity property offers several advantages:
- * Multiple keys can be updated simultaneously, guaranteeing that other clients see the complete update rather than partial updates.
- * The data in Redis remains unchanged while it is being processed.
- However, the major disadvantage of the atomicity property is that Redis is blocked throughout the entire invocation, preventing it from serving other clients.
- Redis Stack's triggers and functions feature aims to provide greater flexibility to function writers by enabling the invocation of functions in the background. When a function is invoked in the background, it cannot directly access the Redis key space. To interact with the Redis key space from the background, the function must block Redis and enter an atomic section where the atomicity property is once again guaranteed.

## Keyspace triggers
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-deprecated-features-trig-e54f1d2be6.md`
- Keyspace triggers allow you to register a function that will be executed whenever an event occurs in the database. Most events are triggered by command invocations, but there are two special events that can occur independently of a command:
- 1. Expired: This event is fired when a key expires from the database.
- 2. Evicted: This event is fired when a key is evicted from the database.
- For a complete list of supported events, please refer to the [Redis keyspace notifications page]().
- To register a keyspace trigger, you need to use the `redis.registerKeySpaceTrigger` API when loading your library. The following example demonstrates how to register a database trigger that adds a "last updated" field whenever a hash key is modified:

## SetError
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-gears-v1-jvm-classes-gea-984979ea30.md`
- Sets an error message for an asynchronous computation.

## Log
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-gears-v1-jvm-classes-gea-9e2536b3a9.md`
- Writes a log message to the Redis log file. If you do not specify a `LogLevel`, it will default to `NOTICE`.
- | msg | string | The message to write to the log |
- | level | LogLevel | The log level (DEBUG, NOTICE, VERBOSE, WARNING) |

## RG.JDUMPSESSIONS
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-gears-v1-jvm-commands-rg-34a37634c1.md`
- Outputs information about existing Java sessions.
- When you run the `RG.JEXECUTE` command, it creates a Java session.
- | VERBOSE | Output more details about registrations. |
- | SESSIONS | Only output information about sessions that appears in the given list. Can only be the last argument. |
- Returns information about existing Java sessions.

## Write-behind, write-through, and read-through caching
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-gears-v1-jvm-recipes-wri-044edd3ae4.md`
- The [rghibernate](https://github.com/RedisGears/rghibernate) recipe uses RedisGears functions and the [Hibernate](https://hibernate.org/) framework to implement write-behind, write-through, and read-through caching.
- These caching strategies allow applications to simply connect to a Redis cache layer instead of an underlying database. Whenever the application updates data in the cache, Redis also syncs the data in the backend database.
- The underlying database could be an SQL database like MySQL, so you will need to provide an XML file that tells rghibernate how to map data between Redis and the other database.
- [RGSync](https://github.com/RedisGears/rgsync):
- [rghibernate](https://github.com/RedisGears/rghibernate):

## Install a module on a cluster
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-install-add-module-to-cl-faf1116575.md`
- [Redis Software]() comes packaged with several modules that provide additional Redis capabilities such as [search and query](), [JSON](), [time series](), and [probabilistic data structures](). As of version 8.0, Redis Software includes multiple feature sets, compatible with different Redis database versions. You can view the installed modules, their versions, and their minimum compatible Redis database versions from **Cluster > Modules** in the Cluster Manager UI.
- To use other modules or upgrade an existing module to a more recent version, you need to install the new module package on your cluster.
- Some module versions are not supported or recommended for use with Redis Software.
- The module must be packaged as a `.zip` file containing:
- To install or upgrade a module on a [Redis Software]() cluster, you need a module package.

## JSON commands
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-json-commands-f62af0325b.md`
- The following table lists JSON commands. See the command links for more information about each command's syntax, arguments, and examples.
- | Command | Redis<br />Software | Redis<br />Cloud | Description |
- |:--------|:----------------------|:-----------------|:------|
- | [JSON.ARRAPPEND]() | <span title="Supported">&#x2705; Supported</span><br /><span><br /></span> | <span title="Supported"><nobr>&#x2705; Flexible & Annual</nobr></span><br /><span title="Supported">&#x2705; Free & Fixed</nobr></span> | Appends an element to a JSON array. |
- | [JSON.ARRINDEX]() | <span title="Supported">&#x2705; Supported</span><br /><span><br /></span> | <span title="Supported">&#x2705; Flexible & Annual</span><br /><span title="Supported">&#x2705; Free & Fixed</nobr></span> | Returns the index of a value's first occurrence in a JSON array. |

## RedisBloom 1.0 release notes
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-release-notes-redisbloom-0629d6cc84.md`
- This contains a single fix, issue #[19](https://github.com/RedisBloom/RedisBloom/issues/19).
- From this version onwards, `EXISTS`/`MEXISTS` returns 0 if the (Redis) key does not exist in the database.  Earlier versions returned an error.
- This fixes a build issue (fixed s3 config in circle yaml).
- This is the first GA release of ReBloom.

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

## RediSearch 2.2 release notes
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-release-notes-redisearch-31eed01663.md`
- This is a maintenance release for RediSearch 2.2.
- Update urgency: `MODERATE`: Program an upgrade of the server, but it's not urgent.
- This is a maintenance release for RediSearch 2.2.
- Update urgency: `MODERATE`: Program an upgrade of the server, but it's not urgent.
- This is a maintenance release for RediSearch 2.2.

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

## RediSearch 1.6 release notes
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-release-notes-redisearch-dbc61ff7a0.md`
- This is a maintenance release for version 1.6.
- Update urgency: MODERATE - Program an upgrade of the server, but it's not urgent.
- This is a maintenance release for version 1.6.
- This is a maintenance release for version 1.6.
- This is the General Availability Release of RediSearch 1.6 (v1.6.7).

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

## RedisGraph 2.2 release notes
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-release-notes-redisgraph-260f875d95.md`
- This is a maintenance release for version 2.2.
- This is a maintenance release for version 2.2.
- This is a maintenance release for version 2.2.
- This is a maintenance release for version 2.2.
- This release introduces support for runtime configuration of the maximum number of results to be returned.

## RedisGraph 1.0 release notes
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-release-notes-redisgraph-2e90694af8.md`
- License update, REDIS SOURCE AVAILABLE LICENSE AGREEMENT.
- Reuse attribute name to avoid duplication
- Traverse direction optimization to reduce number of matrix transpose
- Update indices when MERGE creates new entities
- Bulk insert supports ID specifying + relationships attributes

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

## RedisGraph 2.4 release notes
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-release-notes-redisgraph-f8e00ece0a.md`
- This is a maintenance release for RedisGraph 2.4.
- Update urgency: `LOW`: No need to upgrade unless there are new features you want to use.
- For Redis Enterprise users who want to upgrade to this patch, this version requires being on version 6.2.8 or later.
- This is a maintenance release for RedisGraph 2.4.
- Update urgency: `HIGH`: There is a critical bug that may affect a subset of users. Upgrade!

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

## RedisJSON 2.6 release notes
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-release-notes-redisjson--a4c6e62d00.md`
- This is a maintenance release for RedisJSON 2.6.
- Update urgency: `LOW`: No need to upgrade unless there are new features you want to use.
- This is a maintenance release for RedisJSON 2.6.
- Update urgency: `MODERATE`: Program an upgrade of the server, but it's not urgent.
- This is a maintenance release for RedisJSON 2.6.

## RedisJSON 1.0 release notes
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-release-notes-redisjson--c569efc3f6.md`
- This is a maintenance release for version 1.0.
- Update urgency: `LOW` -  No need to upgrade unless there are new features you want to use.
- This is a maintenance release for version 1.0.
- This is a maintenance release for version 1.0.
- This release updates the version to 1.0.4.

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

## RedisTimeSeries 1.0 release notes
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-release-notes-redistimes-35e08ee695.md`
- This is a maintenance release for version 1.0.
- This release improves overall stability and provides fixes for issues found after the previous release.
- This is a maintenance release for version 1.0.
- Secondary index should work faster when a filter consists of a list of k=v predicates.
- This is the General Availability release of RedisTimeSeries!  Read the [full story here](https://redislabs.com/blog/redistimeseries-ga-making-4th-dimension-truly-immersive)

## RedisTimeSeries 1.10 release notes
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-release-notes-redistimes-3b489e3b1c.md`
- This is a maintenance release for RedisTimeSeries 1.10.
- Update urgency: `MODERATE`: Program an upgrade of the server, but it's not urgent.
- This is a maintenance release for RedisTimeSeries 1.10.
- Update urgency: `MODERATE`: Plan an upgrade of the server, but it's not urgent.
- This is a maintenance release for RedisTimeSeries 1.10.

## RedisTimeSeries 1.2 release notes
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-release-notes-redistimes-74b5af8dd1.md`
- This is a maintenance release for version 1.2.
- This is a maintenance release for version 1.2.
- This is the general availability (GA) release of RedisTimeSeries 1.2 (1.2.2).
- (we will blog about this release soon including performance improvements results and the link here)
- Alternatively, you can reconstruct similar behaviour by

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

## The API request lifecycle
Source file: `raw/sources/20260409-docs-latest-operate-rc-api-get-started-process-lifecycle-7fbd40d06b.md`
- [Once it's enabled](), you can use the REST API to create, update, and delete subscriptions, databases, and other entities.
- All create, update, and delete API operations (`POST`, `PUT`, and `DELETE`) and some query operations (`GET`) run asynchronously, which means that provisioning or processing occurs in the background.  When you submit a request, a background process, known as a **Task**, starts working on it.  The response object includes an ID that lets you determine the status of the background process as it works.
- For operations that do not create or modify resources or do not require additional processing (such as most GET operations), the API is synchronous; that is, the response object reports the results of the request.
- Asynchronous operations have two main phases: processing and provisioning.  A resource is not available until both phases are complete.
- During this phase, the request is received, evaluated, planned, and executed.

## Billing & payments
Source file: `raw/sources/20260409-docs-latest-operate-rc-billing-and-payments-65fc6df314.md`
- | Date   | Date the transaction was recorded |
- | Description | Description of the transaction |
- Billing details may vary between regions.
- You can [download invoices](#download-invoice) on this tab.
- A **Pay Now** button appears in selected regions.

## Download and analyze cost report
Source file: `raw/sources/20260409-docs-latest-operate-rc-billing-and-payments-cost-report-4552fee7a2.md`
- The Redis Cloud cost report gives you a detailed breakdown of your Redis Cloud subscription usage and associated charges. You can use it to track, audit, and optimize your Redis Cloud spending across Essentials and Pro subscription plans.
- You can download the cost report from the [**Billing and payments**]() and [**Usage reports**]() pages. You can also use the [Redis Cloud REST API](#rest-api) to get a cost report in [FOCUS](https://focus.finops.org/) format.
- Consider the following limitations when you view the cost report:
- The cost report CSV file has two sections: one for Redis Cloud Essentials subscriptions and one for Redis Cloud Pro subscriptions.
- For more information about how to use the cost report effectively, see [How to download and visualize the cost report](https://support.redislabs.com/hc/en-us/articles/30042563097874-How-to-Download-and-Visualize-Redis-Cloud-Cost-Report) in the Redis knowledge base.

## Redis Cloud changelog (July 2023)
Source file: `raw/sources/20260409-docs-latest-operate-rc-changelog-2023-july-2023-4fa338f9c8.md`
- This changelog lists new features, enhancements, and other changes added to Redis Cloud during July 2023.
- You can now use [Selectors](#selectors) and [Key Permissions](#selectors) in your [ACL rules]() for all Redis 7.2 databases.
- In addition, the admin console now returns an error if you try to enter an invalid ACL. It will also associate the ACL rule with the supported database version when you [add it to a role]().

## Redis Cloud changelog (February 2024)
Source file: `raw/sources/20260409-docs-latest-operate-rc-changelog-2024-february-2024-c8e0539f69.md`
- The **Dataset size has reached** [alert]() is now set by default when you create your first database in a Flexible subscription.
- When you select [advanced capabilities]() during database creation, selecting **Search and query** will no longer automatically select **JSON**. You can still combine the **Search and query** and **JSON** advanced capabilities.
- The Redis Cloud console will now notify you through email and on the application if the backup location you specify does not exist or has the wrong permissions. See [Back up databases]() to learn how to set the correct permissions for your backup locations.
- When you [create a new Flexible subscription](), the Redis Cloud console will now detect if the Classless Inter-Domain Routing (CIDR) subnet range you specify is in use by another Flexible subscription on the same account. This will allow you to address and resolve CIDR conflicts in your Redis deployment.

## Redis Cloud changelog (May 2024)
Source file: `raw/sources/20260409-docs-latest-operate-rc-changelog-2024-may-2024-d48f24570e.md`
- [SAML single sign-on]() now supports multiple username domains. Select **Manage domains** on the **Single sign-on** screen to associate additional domains to your SAML setup.
- We added domain verification to [SAML single sign-on]() to enhance security. Before you set up SAML in Redis Cloud, you must first [verify domain ownership]() for any domains associated with your SAML setup.
- If you have an active SAML configuration, you can still sign in with SAML SSO, but your domains will be set to **Unverified**. You should [verify domain ownership]() as soon as possible.
- [Active-Active databases]() on Redis Cloud now support [Search and query]().
- See [Create an Active-Active database]() to learn how to create an Active-Active database.

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

## Clustering Redis Databases
Source file: `raw/sources/20260409-docs-latest-operate-rc-databases-configuration-clustering-667f563165.md`
- Multiple shards should be used when data grows to 25 GB (50 GB for Auto Tiering) to create multiple shards.
- Clustering distributes operational load, whether to instances on the same server or across multiple servers.
- This distribution is called _clustering_ because it manages the way data is distributed throughout the cluster of nodes that support the database.
- A Redis Cloud cluster is a set of managed Redis processes and cloud instances,
- with each process managing a subset of the database keyspace.

## Data eviction
Source file: `raw/sources/20260409-docs-latest-operate-rc-databases-configuration-data-eviction-policies-4ccb6ca3dc.md`
- The data eviction policy of a database controls what happens when new data exceeds the memory size of a database.  Typically, such situations require _evicting_ (or deleting) data previously added to the database.
- You can [edit database details]() to change the **Data eviction policy** setting at the database level.
- For each database, you can choose from these data eviction policies:
- | **Available&nbsp;policies** | **Description** |
- | allkeys-lru | Keeps most recently used keys; removes least recently used (LRU) keys |

## Connect to a Redis Cloud database
Source file: `raw/sources/20260409-docs-latest-operate-rc-databases-connect-3fca0f138b.md`
- After you [create your database](), you can connect to it.
- To connect to the database, you need your username and password. By default, your database is protected by a [**Default user**]() called `default` and a masked **Default user password**. You can see the default user password in the **Security** section of the **Configuration** details for your database. Select the eye icon to show or hide the password.
- If you've turned on [Role-based access control]() for your database and [turned off the default User](), use the username and password for your data access role.
- Once you have the username and password, select **Connect** to open the connection wizard.
- For [Active-Active databases](), you connect to one of the database instances. Choose the region you want to connect to from the region selection to access the connection information for that instance.

## Migrate data between Redis Cloud databases
Source file: `raw/sources/20260409-docs-latest-operate-rc-databases-migrate-databases-e2369f28df.md`
- Each approach is suitable for different situations and the steps can vary according to your needs.
- The most common way to transfer data to a new database is to import a copy of the data into it.
- 1.  [Select an export storage destination]() and verify that it's ready for use and has sufficient space.
- 1.  [Export]() the data from the original database to the storage location.
- 1.  [Import]() the exported data into the target database, the one hosted by the new subscription.

## Data Integration
Source file: `raw/sources/20260409-docs-latest-operate-rc-databases-rdi-a464294402.md`
- Redis Cloud now supports [Redis Data Integration (RDI)](), a fast and simple way to bring your data into Redis from other types of primary databases.
- A relational database usually handles queries much more slowly than a Redis database. If your application uses a relational database and makes many more reads than writes (which is the typical case) then you can improve performance by using Redis as a cache to handle the read queries quickly. Redis Cloud uses [ingest]() to help you offload all read queries from the application database to Redis automatically.
- Using a data pipeline lets you have a cache that is always ready for queries. RDI Data pipelines ensure that any changes made to your primary database are captured in your Redis cache within a few seconds, preventing cache misses and stale data within the cache.
- RDI helps Redis customers sync Redis Cloud with live data from their primary databases to:
- Using RDI with Redis Cloud simplifies managing your data integration pipeline. No need to worry about hardware or underlying infrastructure, as Redis Cloud manages that for you. Creating the data flow from source to target is much easier, and there are validations in place to reduce errors.

## Define data pipeline
Source file: `raw/sources/20260409-docs-latest-operate-rc-databases-rdi-define-0f6810bf12.md`
- After you have [prepared your source database]() and connection information, you can set up your new pipeline. To do this:
- 1. [Define the source connection](#define-source-connection) by entering all required source database information.
- 2. [Define the data pipeline](#define-data-pipeline) by selecting the data that you want to sync from your source database to the target database.
- 1. In the [Redis Cloud console](https://cloud.redis.io/), go to your target database and select the **Data Pipeline** tab.
- 1. A **Deployment CIDR** is automatically generated for you. If, for any reason, a CIDR is not generated, enter a valid CIDR that does not conflict with your applications or other databases.

## View and edit data pipeline
Source file: `raw/sources/20260409-docs-latest-operate-rc-databases-rdi-view-edit-ceb7296c2c.md`
- Use the **Data pipeline** tab in your database to view and edit your data pipeline.
- The **Data pipeline** tab gives an overview of your data pipeline and lets you view your data stream metrics.
- The **Status** table shows statistics for the whole data pipeline:
- | **Initial Sync** | The data pipeline is ingesting all records from the source database into the target database. |
- | **Streaming** | The data pipeline is capturing new changes from the source database as they happen. Changes in the source database are added to the target database within a few seconds. |

## Create a LangCache service
Source file: `raw/sources/20260409-docs-latest-operate-rc-langcache-create-service-b5b7866131.md`
- Redis LangCache provides vector search capabilities and efficient caching for AI-powered applications. This guide walks you through creating and configuring a LangCache service in Redis Cloud.
- To create a LangCache service, you will need:
- LangCache does not support the following databases during public preview:
- From the [Redis Cloud console](https://cloud.redis.io/), select **LangCache** from the left-hand menu.
- If you have not already created a LangCache service, you'll see a page with an introduction to LangCache. Otherwise, select **New service** to go to the LangCache introduction page.

## Create roles for Active-Active databases
Source file: `raw/sources/20260409-docs-latest-operate-rc-security-access-control-data-access-control-active-active-08a72725b2.md`
- For [Active-Active databases](), you can define roles with different levels of access for different regions. For example, you can define a user role with full database access in one region and read-only access in another. Or, you can prevent a user from running any commands in a specified region.
- 1. Go to **Data Access Control > Roles** and either select `+` to create a new role or point to an existing role and select the pencil icon to edit it.
- 1. In the **Associations** section of the **Edit role** or **Create new role** screen, you can select `+` to create a new association or point to an existing association and select the pencil icon to edit it.
- 1. Select one or more Active-Active databases from the **Databases** list. Active-Active databases are marked with a globe icon.
- 1. To set the role's default level of access to the selected databases, choose a **Redis ACL** from the list and select the check mark to confirm the association.

## Create and edit database users
Source file: `raw/sources/20260409-docs-latest-operate-rc-security-access-control-data-access-control-create-assign-b2156fce26.md`
- Before you create a database user, you must [create a data access role]() to assign to that user.
- 1. Go to **Data Access Control** from the [Redis Cloud console](https://cloud.redis.io/#/) menu.
- 3. Enter a username in the **Username** field.
- An error occurs if a user tries to connect to a memcached database with the username `admin`. Do not use `admin` for a username if the user will be connecting to a memcached database.
- 1. Enter and confirm the user's password. ACL user passwords must be between 8 and 128 characters long.

## Social login
Source file: `raw/sources/20260409-docs-latest-operate-rc-security-access-control-social-login-c240ddfcf1.md`
- Redis Cloud supports the following social logins:
- If your Google and GitHub accounts share an email address (such as Gmail), you can use either one to sign in to the same Redis Cloud account.
- 1. Select **Google** from the [sign-in](https://cloud.redis.io/) screen.
- 1. Sign in with the Google account you would like to use.
- 1. Select **Confirm** on the **Sign in with Google** prompt.

## Connect to Amazon Web Services PrivateLink
Source file: `raw/sources/20260409-docs-latest-operate-rc-security-aws-privatelink-1ba6ff6c9c.md`
- [Amazon Web Services (AWS) PrivateLink](https://docs.aws.amazon.com/vpc/latest/privatelink/privatelink-access-resources.html) allows service providers to securely expose specific services without exposing the entire service provider and consumer VPCs to each other. With AWS PrivateLink, Redis Cloud exposes a VPC endpoint service that you connect to as a consumer from your own VPC. Traffic stays within the AWS network and is isolated from external networks.
- Connecting to Redis Cloud with an AWS PrivateLink is available only with Redis Cloud Pro.  It is not supported for Redis Cloud Essentials.
- You can use PrivateLink as an alternative to Layer 3 connectivity options like [VPC peering]() and [Transit Gateway]().
- AWS PrivateLink provides the following benefits:
- See [Connect to Redis Cloud with AWS PrivateLink](https://www.youtube.com/watch?v=i3aTmcyFihY) for a short video tutorial on how to connect to Redis Cloud with AWS PrivateLink.

## Enable Google Cloud Private Service Connect
Source file: `raw/sources/20260409-docs-latest-operate-rc-security-private-service-connect-66a7f4fdd5.md`
- [Private Service Connect](https://cloud.google.com/vpc/docs/private-service-connect) (PSC) creates a private endpoint that allows secure connections to Redis Cloud databases without exposing your application's [virtual private cloud](https://en.wikipedia.org/wiki/Virtual_private_cloud) (VPC).
- This feature is only available for Redis Cloud Pro subscriptions hosted on Google Cloud.
- You can use Private Service Connect as an alternative to [VPC peering](), or you can enable both for your subscription.
- Compared to VPC peering, Private Service Connect:
- Larger clusters are more likely to experience increased latency with Private Service Connect versus VPC peering.

## Troubleshoot Redis Cloud issues with the Redis Cloud knowledge base
Source file: `raw/sources/20260409-docs-latest-operate-rc-troubleshoot-985e781b8c.md`
- The [Redis Cloud knowledge base](https://support.redislabs.com/hc/en-us/categories/26174183986450-Redis-Cloud) provides articles to help you troubleshoot common Redis Cloud issues.

## Redis Insight configuration settings
Source file: `raw/sources/20260409-docs-latest-operate-redisinsight-configuration-92fbe07583.md`
- | Variable | Purpose | Default | Additional info |
- | RI_APP_PORT | The port that Redis Insight listens on. | <ul><li> Docker: 5540 <li> desktop: 5530 </ul> | See [Express Documentation](https://expressjs.com/en/api.html#app.listen)|
- | RI_APP_HOST | The host that Redis Insight connects to. | <ul><li> Docker: 0.0.0.0 <li> desktop: 127.0.0.1 </ul> | See [Express Documentation](https://expressjs.com/en/api.html#app.listen)|
- | RI_SERVER_TLS_KEY | Private key for HTTPS. | n/a | Private key in [PEM format](https://www.ssl.com/guide/pem-der-crt-and-cer-x-509-encodings-and-conversions/#ftoc-heading-3). Can be a path to a file or a string in PEM format.|
- | RI_SERVER_TLS_CERT | Certificate for supplied private key. | n/a | Public certificate in [PEM format](https://www.ssl.com/guide/pem-der-crt-and-cer-x-509-encodings-and-conversions/#ftoc-heading-3). Can be a path to a file or a string in PEM format.|

## Install on AWS EC2
Source file: `raw/sources/20260409-docs-latest-operate-redisinsight-install-install-on-aws-eb0d03f555.md`
- 1. Choose at least a t2.medium instance. The size of the instance depends on the memory used by your ElastiCache instance that you want to analyze.
- * Choose the VPC that has your ElastiCache instances.
- * Choose a subnet that has network access to your ElastiCache instances.
- * Ensure that your EC2 instance has a public IP Address.
- * Assign the IAM role that you created in Step 1.

## Install on Docker
Source file: `raw/sources/20260409-docs-latest-operate-redisinsight-install-install-on-docker-c47dd65749.md`
- See a separate guide for installing [Redis Insight on AWS]().
- The first step is to [install Docker for your operating system](https://docs.docker.com/install/).
- You can install Redis Insight using one of the options described below.
- 1. If you do not want to persist your Redis Insight data:
- 2. If you want to persist your Redis Insight data, first attach the Docker volume to the `/data` path and then run the following command:

## Subpath proxy
Source file: `raw/sources/20260409-docs-latest-operate-redisinsight-proxy-b1491e7fc5.md`
- You can enable the subpath proxy by setting the `RI_PROXY_PATH` environment variable.
- When `RI_PROXY_PATH` is being set with a path, Redis Insight is
- accessible only on that subpath. The default routes are given the
- provided prefix subpath. There isnât any way to add another proxy behind
- this one unless the same subpath is used for the new one.

## Add a node
Source file: `raw/sources/20260409-docs-latest-operate-rs-clusters-add-node-8d13f6acd3.md`
- After you install the first node, you can add more nodes to the cluster.
- If the clock in the node you are trying to join to the cluster is not synchronized with the nodes already in the cluster,
- the action fails and an error message is shown indicating that you must synchronize the clocks first.
- to avoid errors that occur because the connection to the other nodes in the cluster cannot be verified.
- 1. [Install the Redis Software installation package]() on a clean installation

## Cluster license keys
Source file: `raw/sources/20260409-docs-latest-operate-rs-clusters-configure-license-keys-9b735323b4.md`
- You can add or update a cluster key at any time.
- Trial mode allows all features to be enabled during the trial period.
- Trial mode is limited to 30 days and 4 shards, including master and replica shards. A new Redis Software installation starts its 30-day trial period from the day you set up the cluster on the first node.
- Trial mode requires a trial license. If you do not provide a license when you create a cluster using the Cluster Manager UI or a [bootstrapping REST API request](), a trial cluster license is generated by default.
- 1. Go to **Cluster > Configuration > General > License** to see the cluster license details.

## Logging events
Source file: `raw/sources/20260409-docs-latest-operate-rs-clusters-logging-7762b0c98f.md`
- 1. What exactly was the performed action?
- To get the list of logged events, you can use the REST API or
- the **Logs** screen in the UI. The **Logs** screen displays the system and user
- events regarding alerts, notifications, and configuration.
- You can use the **Logs** screen to review what actions a user has performed, such as editing a database's configuration.

## Alerts and events
Source file: `raw/sources/20260409-docs-latest-operate-rs-clusters-logging-alerts-events-66d6345e2c.md`
- The following alerts and events can appear in `syslog` and the Cluster Manager UI logs.
- | Alert | UI message | Severity | Notes |
- |-------|------------|----------|-------|
- | aof_slow_disk_io | Redis performance is degraded as a result of disk I/O limits | True: error, False: info | Node alert |
- | authentication_err | Error authenticating with the source database | error | BDB event |

## Diagnostic logging
Source file: `raw/sources/20260409-docs-latest-operate-rs-clusters-logging-diagnostic-logging-b3db2f7972.md`
- The diagnostic logging service collects detailed system logs, which you can use to troubleshoot Redis Software.
- Diagnostic logs are collected at scheduled intervals and saved in the `/var/opt/redislabs/log/diagnostics/` directory. Each diagnostic log file is overwritten with the new data at the scheduled collection interval.
- To view the current log collection schedule and parameters for each log collector, use the REST API to [get the diagnostic logging service configuration]().
- To change how often a log is collected, set the `cron_expression` when you [update the diagnostic logging service configuration]() with the REST API.
- For the slowlog collector only, you can also set `max_entries` to change the maximum number of slow log entries to collect:

## Manage logs
Source file: `raw/sources/20260409-docs-latest-operate-rs-clusters-logging-log-security-cdc8930025.md`
- Redis Software sends logs to syslog by default. You can send these logs to a remote logging server by configuring syslog.
- To do this, modify the syslog or rsyslog configuration on your operating system to send logs in the `$logdir` directory (`/var/opt/redislabs/log` in default installations) to a remote monitoring server of your choice. See [rsyslog logging]() for additional details.
- Redis Software's job scheduler runs `logrotate` every five minutes to examine logs stored on the operating system and rotate them based on the log rotation configuration. You can find the log rotation configuration file at `$pkgconfdir/logrotate.conf` as of Redis Software version 7.2 (`pkgconfdir` is `/opt/redislabs/config` by default, but can be changed in a custom installation).
- By default, log rotation occurs when a log exceeds 200 MB. We recommend sending log files to a remote logging server so you can maintain them more effectively.
- The following log rotation policy is enabled by default in Redis Software, but you can modify it as needed.

## View and manage Redis slow log
Source file: `raw/sources/20260409-docs-latest-operate-rs-clusters-logging-redis-slow-log-05c72b43c6.md`
- tools for debugging and tracing your Redis database, especially if you
- experience high latency and high CPU usage with Redis operations.
- Because Redis is based on a single threaded architecture, Redis slow log
- can be much more useful than slow log mechanisms of multi-threaded
- database systems such as MySQL slow query log.

## rsyslog logging
Source file: `raw/sources/20260409-docs-latest-operate-rs-clusters-logging-rsyslog-logging-aa57df57b6.md`
- Redis Software logs information from a variety of components in response to actions and events that occur within the cluster.
- In some cases, a single action, such as removing a node from the cluster, may actually consist of several events. These actions may generate multiple log entries.
- All log entries displayed in the Cluster Manager UI are also written to `syslog`.  You can configure `rsyslog` to monitor `syslog`. Enabled alerts are logged to `syslog` and appear with other log entries.
- You can also [manage your logs]() with a remote logging server and log rotation.
- Log entries are categorized into events and alerts. Both types of entries appear in the logs, but alert log entries also include a boolean `"state"` parameter that indicates whether the alert is enabled or disabled.

## Maintenance mode for cluster nodes
Source file: `raw/sources/20260409-docs-latest-operate-rs-clusters-maintenance-mode-90132ae1a5.md`
- Use maintenance mode to prevent data loss during hardware patching or operating system maintenance on Redis Software servers. When maintenance mode is on, all shards move off of the node under maintenance and migrate to another available node.
- When you activate maintenance mode, Redis Software does the following:
- 1. Checks whether the cluster has enough active nodes to maintain quorum if one goes down. If taking a node offline would cause quorum loss, maintenance mode will not activate.
- This check does not consider if other nodes are already in maintenance mode. Do not put the majority of nodes into maintenance mode and restart them simultaneously, as this can cause the cluster to lose quorum and lead to data loss.
- 1. If no maintenance mode snapshots already exist or if you use `overwrite_snapshot` when you activate maintenance mode, Redis Software creates a new node snapshot that records the node's shard and endpoint configuration.

## Cluster environment optimization
Source file: `raw/sources/20260409-docs-latest-operate-rs-clusters-optimize-optimization-238c847e6d.md`
- performance. As part of this process, Redis Software examines usage
- and load to adjust its runtime configuration. Depending
- on your specific usage and load, Redis Software might take some
- To ensure optimal performance, you must run your workload several times
- and for a long duration until performance stabilizes.

## Use the WAIT command to improve data safety and durability
Source file: `raw/sources/20260409-docs-latest-operate-rs-clusters-optimize-wait-d9a5b98e52.md`
- to another replica for high availability and persist in-memory data on
- disk permanently for durability. With the [`WAIT`]() command, you can
- control the consistency and durability guarantees for the replicated and
- Any updates that are issued to the database are typically performed with the following flow:
- 1. Proxy communicates with the correct primary shard in the system that contains the given key.

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

## Proxy-based disaster recovery
Source file: `raw/sources/20260409-docs-latest-operate-rs-databases-active-active-disaster-recovery-proxy-based-98e3442a8c.md`
- If you add a lightweight proxy software component between the clients and the Active-Active database, applications can dynamically route requests to the optimal endpoint.
- If concurrent access across replicas must be avoided in every scenario, you can use a centralized proxy with a standby proxy instance for high availability.
- The following diagram shows a centralized proxy architecture with a standby proxy instance:
- <img src="../../../../../../images/active-active-disaster-recovery/centralized-proxy.svg" alt="Diagram of a centralized proxy architecture with active and standby proxy instances routing to Active-Active database members" width="50%">
- To reduce latency and improve scalability, you can use a proxy co-located in the application server.

## Get started with Redis Software Active-Active databases
Source file: `raw/sources/20260409-docs-latest-operate-rs-databases-active-active-get-started-99600623dd.md`
- To get started, this article will help you set up an Active-Active database, formerly known as CRDB (conflict-free replicated database), spanning across two Redis Software
- clusters for test and development environments. Here are the steps:
- 1. Run two Redis Software Docker containers.
- 1. Create a new Redis Software Active-Active database.
- 1. Test connectivity to the Active-Active database.

## Syncer process
Source file: `raw/sources/20260409-docs-latest-operate-rs-databases-active-active-syncer-6197ab1fdb.md`
- Each node in a cluster containing an instance of an Active-Active database hosts a process called the syncer.
- 1. Connects to the proxy on another participating cluster
- 1. Reads data from that database instance
- 1. Writes the data to the local cluster's primary(master) shard
- Some replication capabilities are also included in [Redis Open Source]().

## Test client connection
Source file: `raw/sources/20260409-docs-latest-operate-rs-databases-connect-test-client-connectivity-e59531a23f.md`
- the cluster, you should verify clients can connect to the
- 1. After you [create a Redis database](), copy the database endpoint, which contains the cluster name (FQDN).
- To view and copy endpoints for a database in the cluster, see the databaseâs **Configuration > General** section in the Cluster Manager UI:
- 1. Try to connect to the database endpoint from your client of choice,
- 1. If the database does not respond, try to connect to the database

## Troubleshooting pocket guide for Redis Software
Source file: `raw/sources/20260409-docs-latest-operate-rs-databases-connect-troubleshooting-guide-f25d113e2e.md`
- If your client or application cannot connect to your database, verify the following.
- 1. Run the [`free`](https://man7.org/linux/man-pages/man1/free.1.html) command to check memory usage:
- 1. Used CPU should be less than `80%`. To check CPU usage, use `top` or `vmstat`.
- Run [`top`](https://man7.org/linux/man-pages/man1/top.1.html):
- Run [`vmstat`](https://man7.org/linux/man-pages/man8/vmstat.8.html):

## Database clustering
Source file: `raw/sources/20260409-docs-latest-operate-rs-databases-durability-ha-clustering-8d46ed7d11.md`
- A single Redis process is bound by the CPU core that it is running on and available memory on the server.
- Redis Software supports database clustering to allow customers
- to spread the load of a Redis process over multiple cores and the RAM of multiple servers.
- A database cluster is a set of Redis processes where each process manages a subset of the database keyspace.
- The keyspace of a Redis Software cluster is partitioned into database shards.

## Consistency during replication
Source file: `raw/sources/20260409-docs-latest-operate-rs-databases-durability-ha-consistency-cfff9a3007.md`
- to another database instance for high availability and persist in-memory data on
- disk permanently for durability. With the [`WAIT`]() command, you can
- control the consistency and durability guarantees for the replicated and
- Any updates that are issued to the database are typically performed with the following flow:
- 2. The proxy communicates with the correct primary (also known as master) shard in the system that contains the given key.

## Redis Flex and Auto Tiering quick start
Source file: `raw/sources/20260409-docs-latest-operate-rs-databases-flash-quickstart-403922b66b.md`
- For production environments, you can find more detailed installation instructions in the [install and setup]() section.
- The steps to set up a Redis Software cluster using Redis Flex
- 1. Install Redis Software or run it in a Docker
- 1. Set up a Redis Software cluster withÂ Redis Flex.
- 1. Create a new database with Redis Flex enabled.

## Replica Of geo-distributed Redis
Source file: `raw/sources/20260409-docs-latest-operate-rs-databases-import-export-replica-of-24981eb10c.md`
- to replicas of the dataset from different geographical locations.
- The Redis Software implementation of active-passive replication is called Replica Of.
- In Replica Of, an administrator designates a database as a replica (destination) of one or more databases (sources).
- After the initial data load from source to destination is completed,
- all write commands are synchronized from the sources to the destination.

## Replica Of Repeatedly Fails
Source file: `raw/sources/20260409-docs-latest-operate-rs-databases-import-export-replica-of-replicaof-repeatedly-f-c56816abec.md`
- **Diagnostic**: A log entry in the Redis log of the source database shows repeated failures and restarts.
- **Cause**: The Redis "client-output-buffer-limit" setting on the source database
- is configured to a relatively small value, which causes the connection drop.
- **Resolution**: Reconfigure the buffer on the source database to a bigger value:
- increase the replica buffer size of the **source database** with:

## Memory and performance
Source file: `raw/sources/20260409-docs-latest-operate-rs-databases-memory-performance-02ded694b2.md`
- architecture to help optimize storage and performance.
- Database memory limits define the maximum size your database can reach across all database replicas and [shards]() on the cluster. Your memory limit will also determine the number of shards you'll need.
- Besides your dataset, the memory limit must also account for replication, Active-Active overhead, and module overhead, and a number of other factors. These can significantly increase your database size, sometimes increasing it by four times or more.
- For more information on memory limits, see [Database memory limits]().
- When a database exceeds its memory limit, eviction policies determine which data is removed. The eviction policy removes keys based on frequency of use, how recently used, randomly, expiration date, or a combination of these factors. The policy can also be set to `noeviction` to return a memory limit error when trying to insert more data.

## Create a support package
Source file: `raw/sources/20260409-docs-latest-operate-rs-installing-upgrading-creating-support-package-4bace6fa83.md`
- and need to [contact Redis support](https://redis.io/support/) for assistance, you can [create a support package](#create-support-package) that gathers all essential information to help debug
- The process of creating the support package can take several minutes and generates load on the system.
- To create a support package from the Cluster Manager UI:
- 1. In the navigation menu, select **Support**.
- <img src="../../../../images/rs/screenshots/create-support-package/support-package-dialog.png" alt="Select Support from the navigation menu and create a support package.">

## Offline installation
Source file: `raw/sources/20260409-docs-latest-operate-rs-installing-upgrading-install-offline-installation-e215d1ebe3.md`
- enable installing dependency packages and for [synchronizing the
- operating system clock]() against an NTP server.
- If you install Redis Software on a machine without an
- internet connection, you need to perform two tasks manually.
- When you install Redis Software on a machine that is not connected to the internet, the installation process fails and displays an error message informing you it failed to automatically install dependencies. Review the installation steps in the console to see which missing dependencies the process attempted to install. Install all these dependency packages and then run the installation again.

## File locations
Source file: `raw/sources/20260409-docs-latest-operate-rs-installing-upgrading-install-plan-deployment-file-locatio-a1d825e64f.md`
- To ensure that Redis Software functions properly, be careful with the files in the application directories. If you modify or delete the application files, Redis Software might not work as expected.
- The directories that Redis Software installs into are:
- | /opt/redislabs | Main installation directory for all Redis Software binaries |
- | /opt/redislabs/bin | Binaries for all the utilities for command-line access and management, such as [`rladmin`]() or [`redis-cli`]() |
- | /opt/redislabs/config | System configuration files |

## Check database availability for monitoring and load balancers
Source file: `raw/sources/20260409-docs-latest-operate-rs-monitoring-db-availability-6258e5be93.md`
- You can use the [database availability API]() to verify whether a Redis Software database is available to perform read and write operations and can respond to queries from client applications. Load balancers and automated monitoring tools can use this API to monitor database availability.
- Database availability does not guarantee data availability.
- To monitor database availability, use the following REST API request:
- If the OSS Cluster API is enabled, this request verifies all endpoints for this database are available. Otherwise, it verifies the database has at least one available endpoint.
- Returns the status code 200 OK if the database is available.

## Get started with monitoring Redis Software
Source file: `raw/sources/20260409-docs-latest-operate-rs-monitoring-get-started-92c0f23fe7.md`
- You can use Prometheus and compatible integrations to collect and visualize your Redis Software metrics.
- Metrics are exposed at the cluster, node, database, shard, and proxy levels.
- You can integrate Redis Software with Prometheus and one of the following tools to collect and visualize your deployment's metrics:
- 1. Create a directory called `prometheus` on your local machine.
- 1. Within that directory, create a configuration file called `prometheus.yml`.

## Monitoring v2
Source file: `raw/sources/20260409-docs-latest-operate-rs-monitoring-metrics-stream-engine-49b48eae80.md`
- The new metrics stream engine is generally available as of [Redis Software version 8.0]().
- To integrate Redis Software metrics into your monitoring environment, see the following integration guides:
- For a detailed tutorial to deploy a complete monitoring stack with Prometheus and Grafana, see [Redis Software Observability with Prometheus and Grafana](https://redis.io/learn/operate/observability/redis-software-prometheus-and-grafana).
- Filter [Libraries and tools]() by "observability" for additional tools and guides.
- For a list of all available v2 metrics, see [Prometheus metrics v2]().

## Transition from Prometheus v1 to Prometheus v2
Source file: `raw/sources/20260409-docs-latest-operate-rs-monitoring-metrics-stream-engine-prometheus-metrics-v1-to-53679947c8.md`
- You can integrate Redis Software with Prometheus and tools such as [Grafana](), [Datadog](), [Dynatrace](), or [New Relic]() to create dashboards for important metrics.
- As of Redis Software version 7.8.2, [PromQL (Prometheus Query Language)](https://prometheus.io/docs/prometheus/latest/querying/basics/) metrics are available. V1 metrics are deprecated but still available.
- To transition from v1 metrics to v2 metrics, you need to change the `metrics_path` in your Prometheus configuration file from `/` to `/v2` to use the new scraping endpoint.
- Here's an example of the updated scraping configuration in `prometheus.yml`:
- You can scrape both v1 and v2 endpoints simultaneously during the transition period to prepare dashboards and ensure a smooth transition.

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

## Manage IP addresses
Source file: `raw/sources/20260409-docs-latest-operate-rs-networking-multi-ip-ipv6-bcb827fdd0.md`
- Redis Software traffic is divided into internal traffic and external traffic:
- When only one IP address exists on a machine that serves as a Redis Software node, it is used for both internal and external traffic.
- During node configuration on a machine with multiple IP addresses, you must assign one address for internal traffic and one or more other addresses for external traffic.
- If the cluster uses IPv4 for internal traffic, all communication between cluster nodes uses IPv4 addresses. If the cluster uses IPv6 for internal traffic, all communication between cluster nodes uses IPv6 addresses.
- To update IP address configuration after cluster setup, see [Change internal IP address](#change-internal-ip-address) or [Configure external IP addresses](#configure-external-ip-addresses).

## Command-line utilities
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-cli-utilities-b5f8e6a6a9.md`
- Redis Software includes a set of utilities to help you manage and test your cluster. To use a utility, run it from the command line.
- Administrators can use these CLI tools to manage and test a Redis Software cluster. You can find the binaries in the `/opt/redislabs/bin/` directory.
- The `/opt/redislabs/bin/` directory also contains utilities used internally by Redis Software and for troubleshooting.
- Do not use these tools for normal operations.
- | bdb-cli | `redis-cli` connected to a database. |

## crdb-cli crdb health-report
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-cli-utilities-crdb-cli-crdb-health-report-2413b9b4eb.md`
- Shows the health report of the API management layer of an Active-Active database.
- | Parameter           | Value  | Description                         |
- |---------------------|--------|-------------------------------------|
- | crdb-guid  | string | The GUID of the database (required) |
- Returns the health report of the API management layer of the database.

## crdb-cli task status
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-cli-utilities-crdb-cli-task-status-44ca7b69e6.md`
- Shows the status of a specified Active-Active database task.
- | Parameter           | Value  | Description                         |
- |---------------------|--------|-------------------------------------|
- | task-id \<task_id\>  | string | An Active-Active database task ID (required) |
- | verbose              | N/A    | Returns detailed information when specified |

## rladmin bind
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-cli-utilities-rladmin-bind-660113cd8f.md`
- Manages the proxy policy for a specific database endpoint.
- Defines a list of nodes to exclude from the proxy policy for a specific database endpoint. When you exclude a node, the endpoint cannot bind to the node's proxy.
- Each time you run an exclude command, it overwrites the previous list of excluded nodes.
- | Parameter | Type/Value                     | Description                                                                                   |
- |-----------|--------------------------------|-----------------------------------------------------------------------------------------------|

## rladmin cluster certificate
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-cli-utilities-rladmin-cluster-certificate-b78c6f74c2.md`
- Sets a cluster certificate to a specified PEM file.
- To set a certificate for a specific service, use the corresponding certificate name. See the [certificates table]() for the list of cluster certificates and their descriptions.
- | Parameter | Type/Value | Description |
- |-----------|------------|-------------|
- | certificate_name | 'cm'<br /> 'api'<br /> 'proxy'<br /> 'syncer'<br /> 'metrics_exporter' | Name of the certificate to update. See the [certificates table]() for descriptions. |

## rladmin cluster change_password_hashing_algorithm
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-cli-utilities-rladmin-cluster-change-password--67d94473cb.md`
- Changes the password hashing algorithm for the entire cluster. When you change the hashing algorithm, it rehashes the administrator password and passwords for all users, including default users.
- | Parameter | Type/Value | Description |
- |-----------|------------|-------------|
- | algorithm | SHA-256<br />PBKDF2 | Change to the specified hashing algorithm. The default hashing algorithm is `SHA-256`. |
- Reports whether the algorithm change succeeded or an error occurred.

## rladmin cluster config
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-cli-utilities-rladmin-cluster-config-0a2fdfbd9f.md`
- | Parameter | Type/Value | Description |
- |-----------|------------|-------------|
- | audit_address | string | TCP/IP address where a listener can capture [audit event notifications]() |
- | audit_port | string | Port where a listener can capture [audit event notifications]() |
- | audit_protocol | `tcp`<br/>`local` | Protocol used for [audit event notifications]()<br/>For production systems, only `tcp` is supported. |

## rladmin cluster create
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-cli-utilities-rladmin-cluster-create-65696b3e03.md`
- Creates a new cluster. The node where you run `rladmin cluster create` becomes the first node of the new cluster.
- | Parameter | Type/Value | Description |
- |-----------|------------|-------------|
- | addr | IP address | The node's internal IP address (optional) |
- | ccs_persistent_path | filepath (default:&nbsp;/var/opt/redislabs/persist) | Path to the location of CCS snapshots (optional) |

## rladmin cluster debug_info
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-cli-utilities-rladmin-cluster-debug-info-b1151ff525.md`
- Downloads a support package to the specified path. If you do not specify a path, it downloads the package to the default path specified in the cluster configuration file.
- | Parameter | Type/Value | Description |
- |-----------|------------|-------------|
- | node | integer | Downloads a support package for the specified node |
- | path | filepath | Specifies the location where the support package should download |

## rladmin cluster join
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-cli-utilities-rladmin-cluster-join-895ba883b7.md`
- | Parameter | Type/Value | Description |
- |-----------|------------|-------------|
- | accept_servers | 'enabled'<br />'disabled' | Allows allocation of resources on the new node when enabled (optional) |
- | addr | IP address | Sets a node's internal IP address. If not provided, the node sets the address automatically. (optional) |
- | ccs_persistent_path | filepath (default:&nbsp;/var/opt/redislabs/persist) | Path to the CCS snapshot location (the default is the same as persistent_path) (optional) |

## rladmin cluster master
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-cli-utilities-rladmin-cluster-master-6b17dffbc1.md`
- Identifies the cluster's master node. Use `set` to change the cluster's master to a different node.
- | Parameter | Type/Value | Description |
- |-----------|------------|-------------|
- Returns the ID of the cluster's master node. Otherwise, it returns an error message.

## rladmin cluster ocsp
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-cli-utilities-rladmin-cluster-ocsp-2bffdb756e.md`
- Manages OCSP configuration and verifies the status of a server certificate maintained by a third-party [certificate authority (CA)](https://en.wikipedia.org/wiki/Certificate_authority).
- Checks if the proxy certificate contains an OCSP URI.
- Returns the OCSP URI if it exists. Otherwise, it returns an error.
- Displays or updates OCSP configuration. Run the command without the `set` option to display the current configuration of a parameter.
- | Parameter | Type/Value | Description |

## rladmin cluster recover
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-cli-utilities-rladmin-cluster-recover-57dd3876e3.md`
- Recovers a cluster from a backup file. The default location of the configuration backup file is `/var/opt/redislabs/persist/ccs/ccs-redis.rdb`.
- | Parameter | Type/Value | Description |
- |-----------|------------|-------------|
- | addr | IP address | Sets a node's internal IP address. If not provided, the node sets the address automatically. (optional) |
- | ccs_persistent_path | filepath | Path to the location of CCS snapshots (default is the same as persistent_path) (optional) |

## rladmin cluster reset_password
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-cli-utilities-rladmin-cluster-reset-password-f13d1498a2.md`
- Changes the password for the user associated with the specified email address.
- Enter a new password when prompted. Then enter the same password when prompted a second time to confirm the password change.
- | Parameter | Type/Value | Description |
- |-----------|------------|-------------|
- | user email | email address | The email address of the user that needs a password reset |

## rladmin failover
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-cli-utilities-rladmin-failover-b0c17e3f3a.md`
- Fails over one or more primary (also known as master) shards of a database and promotes their respective replicas to primary shards.
- | Parameter | Type/Value                     | Description                                                                                   |
- |-----------|--------------------------------|-----------------------------------------------------------------------------------------------|
- | db        | db:\<id\><br /> name           | Fail over shards for the specified database                                                   |
- | shard     | one or more primary shard IDs  | Primary shard or shards to fail over                                                          |

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

## rladmin node addr set
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-cli-utilities-rladmin-node-addr-fd435bbb90.md`
- Sets the internal IP address of a node. You can only set the internal IP address when the node is down. See [Change internal IP address]() for detailed instructions.
- | Parameter | Type/Value                     | Description                                                                                   |
- |-----------|--------------------------------|-----------------------------------------------------------------------------------------------|
- | node      | integer                        | Sets the internal IP address of the specified node                                                |
- | addr   | IP address                     | Sets the node's internal IP address to the specified IP address                                      |

## rladmin node enslave
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-cli-utilities-rladmin-node-enslave-508b74c80c.md`
- Changes the resources of a node to replicas.
- Changes all of the node's endpoints and shards to replicas.
- | Parameter             | Type/Value                     | Description                                                                               |
- |-----------------------|--------------------------------|-------------------------------------------------------------------------------------------|
- | node                  | integer                        | Changes all of the node's endpoints and shards to replicas             |

## rladmin node external_addr
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-cli-utilities-rladmin-node-external-addr-bbe7de1284.md`
- Configures a node's external IP addresses.
- Adds an external IP address that accepts inbound user connections for the node.
- | Parameter | Type/Value                     | Description                                                                                   |
- |-----------|--------------------------------|-----------------------------------------------------------------------------------------------|
- | node      | integer                        | Adds an external IP address for the specified node                                               |

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

## rladmin suffix
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-cli-utilities-rladmin-suffix-65d8256fdc.md`
- Manages the DNS suffixes in the cluster.
- | Parameter | Type/Value       | Description                                                                                   |
- |-----------|------------------|-----------------------------------------------------------------------------------------------|
- | name      | string           | DNS suffix to add to the cluster                                                             |
- | default   |                  | Sets the given suffix as the default. If a default already exists, this overwrites it.  |

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

## rlcheck
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-cli-utilities-rlcheck-5df6d7cc7a.md`
- You can use this utility to confirm a successful installation or to verify that the node is functioning properly.
- To resolve issues reported by `rlcheck`, [contact Redis support](https://redis.com/company/support/).
- You can run `rlcheck` from the node host's command line.
- The output of `rlcheck` shows information specific to the host you run it on.
- 1. Sign in to the Redis Software host with an account that is a member of the **redislabs** operating system group.

## Cluster management commands compatibility
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-compatibility-commands-cluster-36c86887f4.md`
- [Clustering in Redis Software]() and [Redis Cloud]() differs from the [Redis Open Source cluster]() and works with all standard Redis clients.
- Redis Software blocks most [cluster commands](?group=cluster). If you try to use a blocked cluster command, it returns an error.
- | Command | Redis<br />Software | Redis<br />Cloud | Notes |
- |:--------|:----------------------|:-----------------|:------|
- | [ASKING]() | <span title="Not supported">&#x274c; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> | <span title="Not supported">&#x274c; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> |  |

## Data type commands compatibility
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-compatibility-commands-data-types-b5a9aa186c.md`
- The following tables show which Redis Open Source data type commands are compatible with standard and Active-Active databases in Redis Software and Redis Cloud.
- | <span style="min-width: 10em; display: table-cell">Command</span> | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:--------|:----------------------|:-----------------|:------|
- | [BITCOUNT]() | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |
- | [BITFIELD]() | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |

## Key commands compatibility
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-compatibility-commands-generic-7119eec824.md`
- The following table shows which Redis Open Source [key (generic) commands](?group=generic) are compatible with standard and Active-Active databases in Redis Software and Redis Cloud.
- | Command | Redis<br />Software | Redis<br />Cloud | Notes |
- |:--------|:----------------------|:-----------------|:------|
- | [COPY]() | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active\*</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active\*</nobr></span> | For Active-Active or clustered databases, the source and destination keys must be in the same hash slot.<br /><br />\*Not supported for stream consumer group info. |
- | [DEL]() | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |

## Scripting commands compatibility
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-compatibility-commands-scripting-6fd94fc46b.md`
- The following table shows which Redis Open Source [scripting and function commands](?group=scripting) are compatible with standard and Active-Active databases in Redis Software and Redis Cloud.
- | Command | Redis<br />Software | Redis<br />Cloud | Notes |
- |:--------|:----------------------|:-----------------|:------|
- | [FCALL]() | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |
- | [FCALL_RO]() | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |

## Server management commands compatibility
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-compatibility-commands-server-e1aac9fac8.md`
- The following tables show which Redis Open Source [server management commands](?group=server) are compatible with standard and Active-Active databases in Redis Software and Redis Cloud.
- Several access control list (ACL) commands are not available in Redis Software. Instead, you can manage access controls from the [Redis Software Cluster Manager UI]() and the [Redis Cloud console]().
- | <span style="min-width: 9em; display: table-cell">Command</span> | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:--------|:----------------------|:-----------------|:------|
- | [ACL CAT]() | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | Not supported for [scripts](). |

## Compatibility with Redis Open Source configuration settings
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-compatibility-config-settings-14c74c09e0.md`
- Redis Software and [Redis Cloud]() only support a subset of [Redis Open Source configuration settings](). Using [`CONFIG GET`]() or [`CONFIG SET`]() with unsupported configuration settings returns an error.
- | Setting | Redis<br />Software | Redis<br />Cloud | Notes |
- |:--------|:----------------------|:-----------------|:------|
- | activerehashing | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |
- | busy-reply-threshold | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Not supported">&#x274c; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> | Value must be between 0 and 60000 milliseconds. |

## Transition from Prometheus v1 to Prometheus v2
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-metrics-prometheus-metrics-v1-to-v2-c40cb46921.md`
- You can integrate Redis Software with Prometheus and tools such as [Grafana](), [Datadog](), [Dynatrace](), or [New Relic]() to create dashboards for important metrics.
- As of Redis Software version 7.8.2, [PromQL (Prometheus Query Language)](https://prometheus.io/docs/prometheus/latest/querying/basics/) metrics are available. V1 metrics are deprecated but still available.
- To transition from v1 metrics to v2 metrics, you need to change the `metrics_path` in your Prometheus configuration file from `/` to `/v2` to use the new scraping endpoint.
- Here's an example of the updated scraping configuration in `prometheus.yml`:
- It is possible to scrape both v1 and v2 endpoints simultaneously during the transition period to prepare dashboards and ensure a smooth transition.

## REST API
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-74b71f6ae2.md`
- Here, you'll find the details of the API and how to use it.
- Authentication to the Redis Software API occurs via [Basic Auth](https://en.wikipedia.org/wiki/Basic_access_authentication). Provide your username and password as the basic auth credentials.
- If the username and password is incorrect or missing, the request will fail with a [`401 Unauthorized`](https://www.rfc-editor.org/rfc/rfc9110.html#name-401-unauthorized) status code.
- Example request using [cURL](https://curl.se/):
- For more examples, see the [Redis Software REST API quick start]().

## Action object
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-objects-action-a377e78072.md`
- The cluster allows you to invoke general maintenance actions such as rebalancing or taking a node offline by moving all of its entities to other nodes.
- Actions are implemented as tasks in the cluster. Every task has a unique `task_id` assigned by the cluster, a task name which describes the task, a status, and additional task-specific parameters.
- The REST API provides a simplified interface that allows callers to invoke actions and query their status without a specific `task_id`.
- The action lifecycle is based on the following status and status transitions:
- | progress        | float <nobr>(range: 0-100)</nobr> | Represents percent completed (As of v7.4.2, the return value type changed to 'float' to provide improved progress indication) |

## Alert object
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-objects-alert-b3fa48ffea.md`
- You can view, configure, and enable various alerts for the cluster.
- Alerts are bound to a cluster object (such as a [BDB]() or [node]()), and the cluster's state determines whether the alerts turn on or off.
- Name  | Type/Value | Description | Writable
- |-------|------------|-------------|----------|
- | change_time | string | Timestamp when alert state last changed | |

## BDB object
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-objects-bdb-9d08a4dec7.md`
- An API object that represents a managed database in the cluster.
- | uid | integer; Cluster unique ID of database. Can be set during creation but cannot be updated. |
- | action_uid | string; Currently running action's UID (read-only) |
- | active_defrag_cycle_max | integer, (range: 1-99); Maximum CPU percentage used for defragmentation when the upper threshold is reached |
- | active_defrag_cycle_min | integer, (range: 1-99) (default: 1); Minimal CPU percentage used for defragmentation when the lower threshold is reached |

## Probabilistic data structures configuration object
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-objects-bdb-probabilistic-e07355c0cc.md`
- Configuration fields for probabilistic data structures.
- | bf-error-rate | number (range: 0-1) (default: 0.01) | Error ratio for new Bloom filters. These defaults are applied to each new Bloom filter upon its creation. |
- | bf-initial-size | integer (range: 1-1048576) (default: 100) | Initial capacity for new Bloom filters. These defaults are applied to each new Bloom filter upon its creation. |
- | bf-expansion-factor | integer (range: 0-32768) (default: 2) | Expansion factor for new Bloom filters. These defaults are applied to each new Bloom filter upon its creation. |
- | cf-initial-size | integer (range: 1-1048576) (default: 1024) | Initial capacity for new Cuckoo filters. These defaults are applied to each new Cuckoo filter upon its creation. |

## BDB replica sync field
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-objects-bdb-replica-sync-2cf80be2bc.md`
- The BDB `replica_sync` field relates to the [Replica Of]() feature, which enables the creation of a Redis database (single- or multi-shard) that synchronizes data from another Redis database (single- or multi-shard).
- You can use the `replica_sync` field to enable, disable, or pause the [Replica Of]() sync process. The BDB `crdt_sync` field has a similar purpose for the Redis CRDB.
- | Status | Description | Possible next status |
- |--------|-------------|----------------------|
- | 'disabled' | (default value) Disables the sync process and represents that no sync is currently configured or running. | 'enabled' |

## Search and query configuration object
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-objects-bdb-search-659d0bbb04.md`
- Configuration fields for search and query.
- | search-timeout | integer (range: 1-9223372036854775807) (default: 500) | The maximum amount of time in milliseconds that a search query is allowed to run. |
- | search-ext-load | string  | If present, RediSearch will try to load an extension dynamic library from its specified file path. Requires a database restart to take effect. |
- | search-max-doctablesize | integer (range: 1-18446744073709551615) (default: 1000000) | The maximum size of the internal hash table used for storing the documents. Requires a database restart to take effect. |
- | search-friso-ini | string  | If present, load the custom Chinese dictionary from the specified path. Requires a database restart to take effect. |

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

## Check result object
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-objects-check-result-f73f9b4293.md`
- | cluster_test_result | boolean | Indication if any of the tests failed |

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

## CRDB health report object
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-objects-crdb-health-report-c8ea684133.md`
- An object that represents an Active-Active database health report.
- | active_config_version | integer | Active configuration version |
- | cluster_name | string | Name of local Active-Active cluster |
- | configurations | array of [health_report_configuration]() objects | Stored database configurations |
- | connection_error | string | Error string if remote cluster is not available |

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

## LDAP object
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-objects-ldap-d24be39377.md`
- An API object that represents the cluster's [LDAP]() configuration.
- | bind_dn | string | DN used when binding with the LDAP server to run queries |
- | bind_pass | string | Password used when binding with the LDAP server to run queries |
- | ca_cert | string | PEM-encoded CA certificate(s) used to validate TLS connections to the LDAP server |
- | cache_ttl | integer (default: 300) | Maximum TTL (in seconds) of cached entries |

## OCSP object
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-objects-ocsp-20df4d0546.md`
- An API object that represents the cluster's OCSP configuration.
- | ocsp_functionality | boolean (default:&nbsp;false) | Enables or turns off OCSP for the cluster |
- | query_frequency | integer <nobr>(range: 60-86400)</nobr> (default:&nbsp;3600) | The time interval in seconds between OCSP queries to check the certificateâs status |
- | recovery_frequency | integer <nobr>(range: 60-86400)</nobr> (default:&nbsp;60) | The time interval in seconds between retries after the OCSP responder returns an invalid status for the certificate |
- | recovery_max_tries | integer <nobr>(range: 1-100)</nobr> (default:&nbsp;5) | The number of retries before the validation query fails and invalidates the certificate |

## Proxy object
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-objects-proxy-8a07cd335b.md`
- An API object that represents a [proxy](https://en.wikipedia.org/wiki/Proxy_server) in the cluster.
- | uid | integer | Unique ID of the proxy (read-only) |
- | backlog | integer | TCP listen queue backlog |
- | client_eviction | boolean (default: false) | If `true,`, enables client eviction based on `maxmemory_clients`. |
- | client_keepcnt | integer | Client TCP keepalive count |

## Shard object
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-objects-shard-c1f925bc79.md`
- An API object that represents a Redis shard in a database.
- | uid | string | Cluster unique ID of shard |
- | assigned_slots | string | Shards hash slot range |
- | backup | [backup]() object | Current status of scheduled periodic backup process |
- | bdb_uid | integer | The ID of the database this shard belongs to |

## State machine object
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-objects-state-machine-1e5eedc079.md`
- A state machine object tracks the status of database actions.
- A state machine contains the following attributes:
- | Name        | Type/Value | Description |
- |-------------|------------|-------------|
- | action_uid  | string     | A globally unique identifier of the action |

## DB metrics
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-objects-statistics-db-metrics-95402b96cc.md`
- The v1 statistics REST API endpoints are deprecated as of Redis Software version 7.22. Use the [metrics stream engine for monitoring v2]() instead for real-time monitoring and metrics collection.
- | avg_latency | float | Average latency of operations on the DB (microseconds). Only returned when there is traffic. |
- | avg_other_latency | float | Average latency of other (non read/write) operations (microseconds). Only returned when there is traffic. |
- | avg_read_latency | float | Average latency of read operations (microseconds). Only returned when there is traffic. |
- | avg_write_latency | float | Average latency of write operations (microseconds). Only returned when there is traffic. |

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

## Redis Software REST API quick start
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-quick-start-361da5ce3e.md`
- Redis Software includes a REST API that allows you to automate certain tasks. This article shows you how to send a request to the Redis Software REST API.
- No matter which method you use to send API requests, there are a few common concepts to remember.
- | [Authentication]() | Use [Basic Auth](https://en.wikipedia.org/wiki/Basic_access_authentication) with your cluster username (email) and password |
- | [Ports]() | All calls are made to port 9443 by default |
- | [Versions]() | Specify the version in the request [URI](https://en.wikipedia.org/wiki/Uniform_Resource_Identifier) |

## Actions requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-actions-a6132e3c67.md`
- | [GET](#get-all-actions) | `/v1/actions` | Get all actions |
- | [GET](#get-all-actions-v2) | `/v2/actions` | Get all actions |
- | [GET](#get-action) | `/v1/actions/{uid}` | Get a single action |
- | [GET](#get-action-v2) | `/v2/actions/{uid}` | Get a single action |
- Get the status of all running, pending, or completed actions on all clusters, nodes, and databases. This API tracks long-lived API requests that return either a `task_id` or an `action_uid`.

## Database actions requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-actions-bdb-a40e77a45b.md`
- | [GET](#get-db-actions) | `/v1/actions/bdb/{bdb_uid}` | Get the status of a specific database's actions |
- Get the status of all currently executing, pending, or completed state-machine-related actions for a specific database. This API tracks short-lived API requests that return `action_uid`.
- | bdb_uid | string | Unique database ID |
- Returns an array of JSON objects with attributes from [actions]() and [state machines]().
- Each action contains the following attributes: `name`, `action_uid`, `status`, and `progress`.

## Database requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-bdbs-9603f0a5d1.md`
- | [GET](#get-all-bdbs) | `/v1/bdbs` | Get all databases |
- | [GET](#get-bdbs) | `/v1/bdbs/{uid}` | Get a single database |
- | [PUT](#put-bdbs) | `/v1/bdbs/{uid}` | Update database configuration |
- | [PUT](#put-bdbs-action) | `/v1/bdbs/{uid}/{action}` | Update database configuration and perform additional action |
- | [POST](#post-bdbs-v1) | `/v1/bdbs` | Create a new database |

## Optimize shards placement database action requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-bdbs-actions-optimize-shards-dc8999eecc.md`
- This REST API path is deprecated as of Redis Software version 7.22. Use [`PUT /v1/bdbs/<uid>/actions/revamp?dry_run=true`]() instead.
- | [GET](#get-bdbs-actions-optimize-shards-placement) | `/v1/bdbs/{uid}/actions/optimize_shards_placement` | Get optimized shards placement for a database  |
- Get optimized shards placement for the given database.
- | [view_bdb_info]() | admin<br />cluster_member<br />cluster_viewer<br />db_member<br />db_viewer<br />user_manager |
- Include query parameters in a `GET` request to generate an optimized shard placement blueprint for a database, using settings that are different from the database's current configuration.

## Rebalance database requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-bdbs-actions-rebalance-cdda3204b3.md`
- | [PUT](#put-bdbs-actions-rebalance) | `/v1/bdbs/{uid}/actions/rebalance` | Rebalance database shards |
- Distributes the database's shards across nodes based on the database's shard placement policy. See [Shard placement policy]() for more information about shard placement and available policies.
- | [view_bdb_info]() | admin<br />cluster_member<br />cluster_viewer<br />db_member<br />db_viewer |
- | uid | integer | The unique ID of the database to rebalance. |
- | dry_run | boolean | If true, returns the blueprint of the rebalanced database without actually changing the database. Default is false. |

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

## Database alerts requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-bdbs-alerts-79b8cee316.md`
- | [GET](#get-all-bdbs-alerts) | `/v1/bdbs/alerts` | Get all alert states for all databases |
- | [GET](#get-bdbs-alerts) | `/v1/bdbs/alerts/{uid}` | Get all alert states for a specific database |
- | [GET](#get-bdbs-alert) | `/v1/bdbs/alerts/{uid}/{alert}` | Get a specific database alert state |
- | [POST](#post-bdbs-alerts) | `/v1/bdbs/alerts/{uid}` | Update a databaseâs alerts configuration |
- | Host | cnm.cluster.fqdn | Domain name |

## Database availability requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-bdbs-availability-d33b478b33.md`
- | [GET](#get-db-endpoint-availability) | `/v1/local/bdbs/{uid}/endpoint/availability` | Verifies local database endpoint availability |
- | [GET](#get-db-availability) | `/v1/bdbs/{uid}/availability` | Verifies database availability |
- Verifies the local database endpoint is available. This request does not redirect to the primary node.
- | [view_bdb_info]() | admin<br />cluster_member<br />cluster_viewer<br />db_member<br />db_viewer<br />user_manager |
- To check database endpoint availability without any additional checks:

## Database CRDT sources alerts requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-bdbs-crdt-sources-alerts-9e28a1e9ea.md`
- | [GET](#get-all-bdbs-crdt-sources-alerts) | `/v1/bdbs/crdt_sources/alerts` | Get all CRDT sources alert states for all CRDB databases |
- | [GET](#get-bdbs-crdt-sources-alerts) | `/v1/bdbs/crdt_sources/alerts/{uid}` | Get all CRDT sources alert states for a database |
- | [GET](#get-bdbs-crdt-source-all-alerts) | `/v1/bdbs/crdt_sources/alerts/{uid}/{crdt_src_id}` | Get all alert states for a CRDT source |
- | [GET](#get-bdbs-crdt-source-alert) | `/v1/bdbs/crdt_sources/alerts/{uid}/{crdt_src_id}/{alert}` | Get a database alert state |
- Get all alert states for all CRDT sources of all CRDBs.

## Database debug info requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-bdbs-debuginfo-26e7c090d2.md`
- | [GET](#get-all-debuginfo-bdb) | `/v1/bdbs/debuginfo` | Get debug info from all databases |
- | [GET](#get-debuginfo-bdb) | `/v1/bdbs/{bdb_uid}/debuginfo` | Get debug info from a specific database |
- Downloads a tar file that contains debug info from all databases.
- Downloads the debug info in a tar file called `filename.tar.gz`. Extract the files from the tar file to access the debug info.
- | Content-Type | application/x-gzip | Media type of request/response body |

## Database modules config requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-bdbs-modules-config-fef7f754c2.md`
- This REST API path is deprecated as of Redis Software version 7.4. Use [`PUT /v2/bdbs/<uid>`]() instead.
- | [POST](#post-bdb-modules-config) | `/v1/bdbs/{uid}/modules/config` | Configure module |
- POST /v1/bdbs/{string: uid}/modules/config
- Use the module runtime configuration command (if defined) to configure new arguments for the module.
- | Host | cnm.cluster.fqdn | Domain name |

## Database upgrade modules requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-bdbs-modules-upgrade-f695abf95d.md`
- | [POST](#post-bdb-modules-upgrade) | `/v1/bdbs/{uid}/modules/upgrade` | Upgrade module |
- POST /v1/bdbs/{string: uid}/modules/upgrade
- Upgrades module version on a specific BDB.
- | Host | cnm.cluster.fqdn | Domain name |
- | Accept | application/json | Accepted media type |

## CRDB peer stats requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-bdbs-peer-stats-dd5e65590d.md`
- | [GET](#get-all-bdbs-peer_stats) | `/v1/bdbs/{bdb_uid}/peer_stats` | Get stats for all CRDB peer instances |
- | [GET](#get-bdbs-peer_stats) | `/v1/bdbs/{bdb_uid}/peer_stats/{uid}` | Get stats for a specific CRDB peer instance |
- Get statistics for all peer instances of a local CRDB instance.
- | [view_bdb_stats]() | admin<br />cluster_member<br />cluster_viewer<br />db_member<br />db_viewer<br />user_manager |
- | Host | cnm.cluster.fqdn | Domain name |

## Database replica sources alerts requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-bdbs-replica-sources-alerts-0d72b690ef.md`
- | [GET](#get-all-bdbs-replica-sources-alerts) | `/v1/bdbs/replica_sources/alerts` | Get all replica sources alert states for all BDBs |
- | [GET](#get-bdbs-replica-sources-alerts) | `/v1/bdbs/replica_sources/alerts/{uid}` | Get all replica sources alert states for a BDB |
- | [GET](#get-bdbs-replica_source-all-alerts) | `/v1/bdbs/replica_sources/alerts/{uid}/{replica_src_id}` | Get all alert states for a replica source |
- | [GET](#get-bdbs-replica-source-alert) | `/v1/bdbs/replica_sources/alerts/{uid}/{replica_src_id}/{alert}` | Get a replica source alert state |
- Get all alert states for all replica sources of all BDBs.

## Database shards requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-bdbs-shards-aa49c70594.md`
- | [GET](#get-bdb-shards) | `/v1/bdbs/{bdb_uid}/shards` | Get the status of a database's shards |
- Gets the status for all shards that belong to the specified database.
- GET /v1/bdbs/1/shards?extra_info_keys=used_memory_rss&extra_info_keys=connected_clients
- | Host | cnm.cluster.fqdn | Domain name |
- | Accept | application/json | Accepted media type |

## Database stats requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-bdbs-stats-913386ac0a.md`
- The v1 statistics REST API endpoints are deprecated as of Redis Software version 7.22. Use the [metrics stream engine for monitoring v2]() instead for real-time monitoring and metrics collection.
- | [GET](#get-all-bdbs-stats) | `/v1/bdbs/stats` | Get stats for all databases |
- | [GET](#get-bdbs-stats) | `/v1/bdbs/stats/{uid}` | Get stats for a specific database |
- | [view_all_bdb_stats]() | admin<br />cluster_member<br />cluster_viewer<br />db_member<br />db_viewer<br />user_manager |
- | Host | cnm.cluster.fqdn | Domain name |

## Latest database stats requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-bdbs-stats-last-56b00c6a71.md`
- | [GET](#get-all-bdbs-stats-last) | `/v1/bdbs/stats/last` | Get most recent stats for all databases |
- | [GET](#get-bdbs-stats-last) | `/v1/bdbs/stats/last/{uid}` | Get most recent stats for a specific database |
- Get the most recent statistics for all databases.
- | [view_all_bdb_stats]() | admin<br />cluster_member<br />cluster_viewer<br />db_member<br />db_viewer<br />user_manager |
- 1. Without metrics filter (returns all metrics by default)

## Database syncer source stats requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-bdbs-sync-source-stats-0cc87f4ca4.md`
- | [GET](#get-all-bdbs-sync_source_stats) | `/v1/bdbs/{bdb_uid}/sync_source_stats` | Get stats for all syncer sources |
- | [GET](#get-bdbs-sync_source_stats) | `/v1/bdbs/{bdb_uid}/sync_source_stats/{uid}` | Get stats for a specific syncer instance |
- Get stats for all syncer sources of a local database.
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

## Bootstrap requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-bootstrap-b0ee14436d.md`
- | [GET](#get-bootstrap) | `/v1/boostrap` | Get the local node's bootstrap status |
- | [POST](#post-bootstrap) | `/v1/bootstrap/{action}` | Initiate bootstrapping |
- This request is accepted as soon the cluster software is installed and before the node is part of an active cluster.
- Once the node is part of an active cluster, authentication is required.
- | Accept | application/json | Accepted media type |

## Bootstrap validation requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-bootstrap-validate-b5539ddae8.md`
- | [POST](#post-bootstrap-validate) | `/v1/bootstrap/validate/{action}` | Perform bootstrap validation |
- Unlike actual bootstrapping, this request blocks and immediately
- POST /v1/bootstrap/validate/join_cluster
- The request must contain a [bootstrap configuration object](), similar to the one used for actual bootstrapping.
- If an error occurs, the call returns a `bootstrap_status` JSON object that contains the following fields:

## Cluster requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-cluster-070fc3c4f6.md`
- | [GET](#get-cluster) | `/v1/cluster` | Get cluster info |
- | [PUT](#put-cluster) | `/v1/cluster` | Update cluster settings |
- | Host | cnm.cluster.fqdn | Domain name |
- | Accept | application/json | Accepted media type |
- | [200 OK](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.2.1) | No error |

## Cluster actions requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-cluster-actions-e37936b477.md`
- | [GET](#get-all-cluster-actions) | `/v1/cluster/actions` | Get the status of all actions  |
- | [GET](#get-cluster-action) | `/v1/cluster/actions/{action}` | Get the status of a specific action |
- | [POST](#post-cluster-action) | `/v1/cluster/actions/{action}` | Initiate a cluster-wide action |
- | [DELETE](#delete-cluster-action) | `/v1/cluster/actions/{action}` | Cancel action or remove action status |
- Get the status of all currently executing, queued, or completed cluster actions.

## Cluster alerts requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-cluster-alerts-62202f53d1.md`
- | [GET](#get-all-alerts) | `/v1/cluster/alerts` | Get all cluster alerts |
- | [GET](#get-alert) | `/v1/cluster/alerts/{alert}` | Get a specific cluster alert |
- Get all alert states for the cluster object.
- | Host | cnm.cluster.fqdn | Domain name |
- | Accept | application/json | Accepted media type |

## Auditing database connections requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-cluster-auditing-db-conns-1ef16fcfc3.md`
- | [GET](#get-cluster-audit-db-conns) | `/v1/cluster/auditing/db_conns` | Get database connection auditing settings |
- | [PUT](#put-cluster-audit-db-conns) | `/v1/cluster/auditing/db_conns` | Update database connection auditing settings |
- | [DELETE](#delete-cluster-audit-db-conns) | `/v1/cluster/auditing/db_conns` | Delete database connection auditing settings |
- Gets the configuration settings for [auditing database connections]().
- | Host | cnm.cluster.fqdn | Domain name |

## Cluster certificates requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-cluster-certificates-5497e06d95.md`
- | [GET](#get-cluster-certificates) | `/v1/cluster/certificates` | Get cluster certificates |
- | [PUT](#put-cluster-certificates) | `/v1/cluster/certificates` | Update cluster certificates |
- | [PUT](#put-cluster-update_cert) | `/v1/cluster/update_cert` | Update a cluster certificate (deprecated as of Redis Software version 7.22.2) |
- | [DELETE](#delete-cluster-certificate) | `/v1/cluster/certificates/{certificate_name}` | Delete cluster certificate |
- | Host | cnm.cluster.fqdn | Domain name |

## Rotate cluster certificates requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-cluster-certificates-rotate-5f257f5352.md`
- | [POST](#post-cluster-certificates-rotate) | `/v1/cluster/certificates/rotate` | Regenerate all internal cluster certificates |
- Regenerates all _internal_ cluster certificates.
- The certificate rotation will be performed on all nodes within the cluster. If
- "name" is provided, only rotate the specified certificate on all nodes within the cluster.
- | Host | cnm.cluster.fqdn | Domain name |

## Check all cluster nodes requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-cluster-check-6babbde6b2.md`
- | [GET](#get-cluster-check) | `/v1/cluster/check` | Runs checks on all cluster nodes |
- Runs the following checks on all cluster nodes:
- | bootstrap_status | Verifies the local node's bootstrap process completed without errors. |
- | services | Verifies all Redis Software services are running. |
- | port_range | Verifies the [`ip_local_port_range`](https://www.kernel.org/doc/html/latest/networking/ip-sysctl.html) doesn't conflict with the ports Redis Software might assign to shards. |

## Cluster debug info requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-cluster-debuginfo-f5275ddfbb.md`
- | [GET](#get-cluster-debuginfo) | `/v1/cluster/debuginfo` | Get debug info from all nodes and databases |
- Downloads a tar file that contains debug info from all nodes and databases.
- Downloads the debug info in a tar file called `filename.tar.gz`. Extract the files from the tar file to access the debug info for all nodes.
- | Content-Type | application/x-gzip | Media type of request/response body |
- | Content-Length | 653350 | Length of the response body in octets |

## Cluster LDAP requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-cluster-ldap-57a85708e3.md`
- | [GET](#get-cluster-ldap) | `/v1/cluster/ldap` | Get LDAP configuration |
- | [PUT](#put-cluster-ldap) | `/v1/cluster/ldap` | Set/update LDAP configuration |
- | [DELETE](#delete-cluster-ldap) | `/v1/cluster/ldap` | Delete LDAP configuration |
- | Host | cnm.cluster.fqdn | Domain name |
- | Accept | application/json | Accepted media type |

## Cluster module capabilities requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-cluster-module-capabilities-0c894b44eb.md`
- | [GET](#get-cluster-module-capabilities) | `/v1/cluster/module-capabilities` | List possible Redis module capabilities |
- List possible Redis module capabilities.
- | Host | cnm.cluster.fqdn | Domain name |
- | Accept | \*/\* | Accepted media type |
- Returns a JSON object that contains a list of capability names and descriptions.

## Cluster services configuration requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-cluster-services-configurati-449831ccba.md`
- | [GET](#get-cluster-services_config) | `/v1/cluster/services_configuration` | Get cluster services settings |
- | [PUT](#put-cluster-services_config) | `/v1/cluster/services_configuration` | Update cluster services settings |
- | Host | cnm.cluster.fqdn | Domain name |
- | Accept | application/json | Accepted media type |
- Returns a [services configuration object]().

## Single sign-on requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-cluster-sso-5dee2756c2.md`
- | [GET](#get-cluster-sso) | `/v1/cluster/sso` | Get SSO configuration |
- | [PUT](#put-cluster-sso) | `/v1/cluster/sso` | Set or update SSO configuration |
- | [DELETE](#delete-cluster-sso) | `/v1/cluster/sso` | Clear SSO configuration |
- | [GET](#get-cluster-sso-saml-metadata) | `/v1/cluster/sso/saml/metadata/sp` | Get SAML service provider metadata |
- | [POST](#post-cluster-sso-saml-metadata) | `/v1/cluster/sso/saml/metadata/idp` | Upload SAML identity provider metadata |

## Cluster stats requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-cluster-stats-006ef79d2f.md`
- The v1 statistics REST API endpoints are deprecated as of Redis Software version 7.22. Use the [metrics stream engine for monitoring v2]() instead for real-time monitoring and metrics collection.
- | [GET](#get-cluster-stats) | `/v1/cluster/stats` | Get cluster stats |
- | [view_cluster_stats]() | admin<br />cluster_member<br />cluster_viewer<br />db_member<br />db_viewer<br />user_manager |
- | Host | cnm.cluster.fqdn | Domain name |
- | Accept | application/json | Accepted media type |

## Cluster last stats requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-cluster-stats-last-7ac206ed1f.md`
- | [GET](#get-cluster-stats-last) | `/v1/cluster/stats/last` | Get most recent cluster stats |
- GET /v1/cluster/stats/last?interval=1sec&stime=2015-10-14T06:44:00Z
- | Host | cnm.cluster.fqdn | Domain name |
- | Accept | application/json | Accepted media type |
- | interval | string | Time interval for which we want stats: 1sec/10sec/5min/15min/1hour/12hour/1week. Default: 1sec. (optional) |

## Cluster Manager settings requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-cm-settings-0edda2f600.md`
- | [GET](#get-cm-settings) | `/v1/cm_settings` | Get Cluster Manager UI settings |
- | [PUT](#put-cm-settings) | `/v1/cm_settings` | Update Cluster Manager UI settings |
- | [view_cluster_info]() | admin<br />cluster_member<br />cluster_viewer<br />db_member<br />db_viewer<br />user_manager |
- | Host | cnm.cluster.fqdn | Domain name |
- | Accept | application/json | Accepted media type |

## All nodes debug info requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-debuginfo-all-45117997a3.md`
- This REST API path is deprecated as of Redis Software version 7.4.2. Use the new path [`/v1/cluster/debuginfo`]() instead.
- | [GET](#get-all-debuginfo) | `/v1/debuginfo/all` | Get debug info for all nodes |
- Downloads a tar file that contains debug info from all nodes.
- Downloads the debug info in a tar file called `filename.tar.gz`. Extract the files from the tar file to access the debug info for all nodes.
- | Content-Type | application/x-gzip | Media type of request/response body |

## All nodes database debug info requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-debuginfo-all-bdb-cebdc9e8fc.md`
- This REST API path is deprecated as of Redis Software version 7.4.2. Use the new path [`/v1/bdbs/debuginfo`]() instead.
- | [GET](#get-all-debuginfo-bdb) | `/v1/debuginfo/all/bdb/{bdb_uid}` | Get debug info for a database from all nodes |
- GET /v1/debuginfo/all/bdb/{int: bdb_uid}
- Downloads a tar file that contains debug info for the specified database (`bdb_uid`) from all nodes.
- Downloads the debug info in a tar file called `filename.tar.gz`. Extract the files from the tar file to access the debug info.

## Debug info requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-debuginfo-b3ff3fe232.md`
- These REST API paths are deprecated as of Redis Software version 7.4.2. Use the new paths [`/v1/cluster/debuginfo`](), [`/v1/nodes/debuginfo`](), and [`/v1/bdbs/debuginfo`]() instead.
- Downloads a support package, which includes logs and information about the cluster, nodes, databases, and shards, as a tar file called `filename.tar.gz`. Extract the files from the tar file to access the debug info.
- | [GET]() | `/v1/debuginfo/all` | Gets debug info for all nodes |
- | [GET]() | `/v1/debuginfo/all/bdb/{bdb_uid}` | Gets debug info for a database from all nodes |
- | [GET]() | `/v1/debuginfo/node` | Gets debug info for the current node |

## Current node debug info requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-debuginfo-node-7bcbd5740a.md`
- This REST API path is deprecated as of Redis Software version 7.4.2. Use the new path [`/v1/nodes/debuginfo`]() instead.
- | [GET](#get-debuginfo-node) | `/v1/debuginfo/node` | Get debug info for the current node |
- Downloads a tar file that contains debug info for the current node.
- Downloads the debug info in a tar file called `filename.tar.gz`. Extract the files from the tar file to access the debug info.
- | Content-Type | application/x-gzip | Media type of request/response body |

## Current node database debug info requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-debuginfo-node-bdb-d7ead5567b.md`
- This REST API path is deprecated as of Redis Software version 7.4.2. Use the new path [`/v1/bdbs/debuginfo`]() instead.
- | [GET](#get-debuginfo-node-bdb) | `/v1/debuginfo/node/bdb/{bdb_uid}` | Get debug info for the current node regarding a specific database |
- GET /v1/debuginfo/node/bdb/{int: bdb_uid}
- Downloads a tar file that contains debug info for the specified database (`bdb_uid`) from the current node.
- Downloads the debug info in a tar file called `filename.tar.gz`. Extract the files from the tar file to access the debug info.

## Diagnostics requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-diagnostics-ecc3aeedb3.md`
- | [GET](#get-diagnostics) | `/v1/diagnostics` | Get diagnostic logging service configuration |
- | [PUT](#put-diagnostics) | `/v1/diagnostics` | Update diagnostic logging service configuration |
- Gets the diagnostic logging service configuration as JSON.
- | [view_cluster_info]() | admin<br />cluster_member<br />cluster_viewer<br />db_member<br />db_viewer<br />user_manager |
- | Host | cnm.cluster.fqdn | Domain name |

## Endpoints stats requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-endpoints-stats-de7fa0eebf.md`
- The v1 statistics REST API endpoints are deprecated as of Redis Software version 7.22. Use the [metrics stream engine for monitoring v2]() instead for real-time monitoring and metrics collection.
- | [GET](#get-endpoints-stats) | `/v1/endpoints/stats` | Get stats for all endpoints |
- Get statistics for all endpoint-proxy links.
- This method will return both endpoints and listeners stats for backwards
- GET /v1/endpoints/stats?interval=1hour&stime=2014-08-28T10:00:00Z

## Job scheduler requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-job-scheduler-66ca7be79b.md`
- | [GET](#get-job-scheduler) | `/v1/job_scheduler` | Get job scheduler settings |
- | [PUT](#put-job-scheduler) | `/v1/job_scheduler` | Update job scheduler settings |
- | [view_cluster_info]() | admin<br />cluster_member<br />cluster_viewer<br />db_member<br />db_viewer<br />user_manager |
- | Host | cnm.cluster.fqdn | Domain name |
- | Accept | application/json | Accepted media type |

## LDAP mappings requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-ldap-mappings-46c5c0bb02.md`
- | [GET](#get-all-ldap_mappings) | `/v1/ldap_mappings` | Get all LDAP mappings |
- | [GET](#get-ldap_mapping) | `/v1/ldap_mappings/{uid}` | Get a single LDAP mapping |
- | [PUT](#put-ldap_mapping) | `/v1/ldap_mappings/{uid}` | Update an LDAP mapping |
- | [POST](#post-ldap_mappings) | `/v1/ldap_mappings` | Create a new LDAP mapping |
- | [DELETE](#delete-ldap_mappings) | `/v1/ldap_mappings/{uid}` | Delete an LDAP mapping |

## License requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-license-d44b6b6100.md`
- | [GET](#get-license) | `/v1/license` | Get license details |
- | [PUT](#put-license) | `/v1/license` | Update the license |
- Returns the license details, including license string, expiration,
- | Host | cnm.cluster.fqdn | Domain name |
- | Accept | application/json | Accepted media type |

## Logs requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-logs-a3b6908f32.md`
- | [GET](#get-logs) | `/v1/logs` | Get cluster events log |
- | Host | cnm.cluster.fqdn | Domain name |
- | Accept | application/json | Accepted media type |
- | stime | ISO_8601 | Start time before which we don't want events. (optional) |
- | etime | ISO_8601 | End time after which we don't want events. (optional) |

## Migrations requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-migrations-6b39a71ee2.md`
- | [GET](#get-migrations) | `/v1/migrations/<uid>` | Get database migration status |
- Gets the migration status of a database in the cluster when using Replica Of.
- | [view_bdb_info]() | admin<br />cluster_member<br />cluster_viewer<br />db_member<br />db_viewer<br />user_manager |
- | Host | cnm.cluster.fqdn | Domain name |
- | Accept | application/json | Accepted media type |

## Modules requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-modules-b56574e0ed.md`
- | [GET](#list-modules) | `/v1/modules` | List available modules |
- | [GET](#get-module) | `/v1/modules/{uid}` | Get a specific module |
- List available modules, i.e. modules stored within the CCS.
- | [view_cluster_modules]() | admin<br />cluster_member<br />cluster_viewer<br />db_member<br />db_viewer<br />user_manager |
- | Accept | \*/\* | Accepted media type |

## Configure module requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-modules-config-865844c924.md`
- This REST API path is deprecated as of Redis Software version 7.4. Use [`PUT /v2/bdbs/<uid>`]() instead.
- | [POST](#post-modules-config-bdb) | `/v1/modules/config/bdb/{uid}` | Configure module |
- POST /v1/modules/config/bdb/{string: uid}
- Use the module runtime configuration command (if defined) to configure new arguments for the module.
- | Host | cnm.cluster.fqdn | Domain name |

## Node master healthcheck requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-node-master-healthcheck-bca19f535a.md`
- | [GET](#get-node-master-healthcheck) | `/v1/local/node/master_healthcheck` | Checks a node's connection to the primary node |
- Checks whether the current node has a valid connection to the cluster's primary node and the Cluster Configuration Store (CCS).
- | [view_cluster_info]() | admin<br />cluster_member<br />cluster_viewer<br />db_member<br />db_viewer<br />user_manager |
- | Host | cnm.cluster.fqdn | Domain name |
- | Accept | application/json | Accepted media type |

## Nodes requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-nodes-8d4e284d32.md`
- | [GET](#get-all-nodes) | `/v1/nodes` | Get all cluster nodes |
- | [GET](#get-node) | `/v1/nodes/{uid}` | Get a single cluster node |
- | [PUT](#put-node) | `/v1/nodes/{uid}` | Update a node |
- | [view_all_nodes_info]() | admin<br />cluster_member<br />cluster_viewer<br />db_member<br />db_viewer<br />user_manager |
- | Host | cnm.cluster.fqdn | Domain name |

## Node actions requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-nodes-actions-d5fdc89d60.md`
- | [GET](#get-all-nodes-actions) | `/v1/nodes/actions` | Get status of all actions on all nodes|
- | [GET](#get-node-actions) | `/v1/nodes/{node_uid}/actions` | Get status of all actions on a specific node |
- | [GET](#get-node-action) | `/v1/nodes/{node_uid}/actions/{action}` | Get status of an action on a specific node |
- | [POST](#post-node-action) | `/v1/nodes/{node_uid}/actions/{action}` | Initiate node action |
- | [DELETE](#delete-node-action) | `/v1/nodes/{node_uid}/actions/{action}` | Cancel action or remove action status |

## Node alerts requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-nodes-alerts-e1bbeb45f6.md`
- | [GET](#get-all-nodes-alerts) | `/v1/nodes/alerts` | Get all alert states for all nodes |
- | [GET](#get-node-alerts) | `/v1/nodes/alerts/{uid}` | Get all alert states for a node |
- | [GET](#get-node-alert) | `/v1/nodes/alerts/{uid}/{alert}` | Get node alert state |
- | Host | cnm.cluster.fqdn | Domain name |
- | Accept | application/json | Accepted media type |

## Check node requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-nodes-check-d7623aaa7f.md`
- | [GET](#get-node-check) | `/v1/nodes/check/{uid}` | Runs checks on a cluster node |
- Runs the following checks on a cluster node:
- | bootstrap_status | Verifies the local node's bootstrap process completed without errors. |
- | services | Verifies all Redis Software services are running. |
- | port_range | Verifies the [`ip_local_port_range`](https://www.kernel.org/doc/html/latest/networking/ip-sysctl.html) doesn't conflict with the ports Redis Software might assign to shards. |

## Node debug info requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-nodes-debuginfo-440209a227.md`
- | [GET](#get-debuginfo-all-nodes) | `/v1/nodes/debuginfo` | Get debug info from all nodes |
- | [GET](#get-debuginfo-node) | `/v1/nodes/{node_uid}/debuginfo` | Get debug info from a specific node |
- Downloads a tar file that contains debug info from all nodes.
- Downloads the debug info in a tar file called `filename.tar.gz`. Extract the files from the tar file to access the debug info.
- | Content-Type | application/x-gzip | Media type of request/response body |

## Node snapshot requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-nodes-snapshots-007c01732a.md`
- | [GET](#get-snapshots) | `/v1/nodes/{uid}/snapshots` | Get node snapshots |
- | [DELETE](#delete-snapshot) | `/v1/nodes/{uid}/snapshots/{snapshot_name}` | Delete a node snapshot |
- Get all cluster node snapshots of the specified node.
- | [view_node_info]() | admin<br />cluster_member<br />cluster_viewer<br />db_member<br />db_viewer<br />user_manager |
- | Host | cnm.cluster.fqdn | Domain name |

## Node stats requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-nodes-stats-e8086ce2e3.md`
- The v1 statistics REST API endpoints are deprecated as of Redis Software version 7.22. Use the [metrics stream engine for monitoring v2]() instead for real-time monitoring and metrics collection.
- | [GET](#get-all-nodes-stats) | `/v1/nodes/stats` | Get stats for all nodes |
- | [GET](#get-node-stats) | `/v1/nodes/stats/{uid}` | Get stats for a single node |
- | Host | cnm.cluster.fqdn | Domain name |
- | Accept | application/json | Accepted media type |

## Latest node stats requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-nodes-stats-last-ad8f76c3ce.md`
- | [GET](#get-all-nodes-stats-last) | `/v1/nodes/stats/last` | Get latest stats for all nodes |
- | [GET](#get-node-stats-last) | `/v1/nodes/stats/last/{uid}` | Get latest stats for a single node |
- | Host | cnm.cluster.fqdn | Domain name |
- | Accept | application/json | Accepted media type |
- | interval | string | Time interval for which we want stats: 1sec/10sec/5min/15min/1hour/12hour/1week. Default: 1sec. (optional) |

## Node status requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-nodes-status-4ad63c3c3d.md`
- | [GET](#get-all-nodes-status) | `/v1/nodes/status` | Get the status of all nodes |
- | [GET](#get-node-status) | `/v1/nodes/{uid}/status` | Get a node's status |
- Gets the status of all nodes. Includes each node's hostname and role in the cluster:
- | Host | cnm.cluster.fqdn | Domain name |
- | Accept | application/json | Accepted media type |

## OCSP requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-ocsp-b955cc0a62.md`
- | [GET](#get-ocsp) | `/v1/ocsp` | Get OCSP configuration |
- | [PUT](#put-ocsp) | `/v1/ocsp` | Update OCSP configuration |
- | Host | cnm.cluster.fqdn | Domain name |
- | Accept | application/json | Accepted media type |
- Returns an [OCSP configuration object]().

## OCSP status requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-ocsp-status-0f602aae5e.md`
- | [GET](#get-status) | `/v1/ocsp/status` | Get OCSP status |
- Gets the latest cached status of the proxy certificateâs OCSP response.
- | Host | cnm.cluster.fqdn | Domain name |
- | Accept | application/json | Accepted media type |
- When errors occur, the server returns a JSON object with `error_code` and `message` fields that provide additional information. The following are possible `error_code` values:

## OCSP test requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-ocsp-test-6a61f1d2c0.md`
- | [POST](#post-test) | `/v1/ocsp/test` | Test OCSP |
- Queries the OCSP server for the proxy certificateâs latest status and returns the response as JSON. It caches the response if the OCSP feature is enabled.
- | Host | cnm.cluster.fqdn | Domain name |
- | Accept | application/json | Accepted media type |
- When errors occur, the server returns a JSON object with `error_code` and `message` fields that provide additional information. The following are possible `error_code` values:

## Proxy requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-proxies-cf6effdca9.md`
- | [GET](#get-all-proxies) | `/v1/proxies` | Get all proxies |
- | [GET](#get-proxy) | `/v1/proxies/{uid}` | Get a proxy |
- | [PUT](#put-proxy) | `/v1/proxies/{uid}` | Update a proxy |
- | [PUT](#put-all-proxies) | `/v1/proxies` | Update all proxies |
- | [view_all_proxies_info]() | admin<br />cluster_member<br />cluster_viewer<br />db_member<br />db_viewer<br />user_manager |

## Redis access control list (ACL) requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-redis-acls-95ff84912f.md`
- | [GET](#get-all-redis_acls) | `/v1/redis_acls` | Get all Redis ACLs |
- | [GET](#get-redis_acl) | `/v1/redis_acls/{uid}` | Get a single Redis ACL |
- | [PUT](#put-redis_acl) | `/v1/redis_acls/{uid}` | Update a Redis ACL |
- | [POST](#post-redis_acl) | `/v1/redis_acls` | Create a new Redis ACL |
- | [DELETE](#delete-redis_acl) | `/v1/redis_acls/{uid}` | Delete a Redis ACL |

## Roles requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-roles-35f87a98e7.md`
- | [GET](#get-all-roles) | `/v1/roles` | Get all roles |
- | [GET](#get-role) | `/v1/roles/{uid}` | Get a single role |
- | [PUT](#put-role) | `/v1/roles/{uid}` | Update an existing role |
- | [POST](#post-role) | `/v1/roles` | Create a new role |
- | [DELETE](#delete-role) | `/v1/roles/{uid}` | Delete a role |

## Services requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-services-e6b7661ca1.md`
- | [GET](#get-local-services) | `/v1/local/services` | List Redis Software services on the local node |
- | [POST](#post-local-services) | `/v1/local/services` | Modify or perform operations on local processes |
- | [POST](#post-services) | `/v1/services` | Modify or perform operations on primary node processes |
- This API is dangerous and should only be run with guidance from [Redis support](https://redis.io/support/).
- Stop, start, or restart optional services only. Changing the status of required services can negatively affect cluster behavior and cause a complete loss of the cluster and its data.

## Shard failover requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-shards-actions-failover-f62bf84b27.md`
- | [POST](#post-multi-shards) | `/v1/shards/actions/failover` | Fail over multiple shards |
- | [POST](#post-shard) | `/v1/shards/{uid}/actions/failover` | Fail over a specific shard |
- Performs failover on the primary shards specified by `shard_uids` in the request body, and promotes their replicas to primary shards. This request is asynchronous.
- The cluster automatically manages failover to ensure high availability. Use this failover REST API request only for testing and planned maintenance.
- | [failover_shard]() | admin<br />cluster_member<br />db_member |

## Migrate shards requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-shards-actions-migrate-2e40f812a6.md`
- | [POST](#post-multi-shards) | `/v1/shards/actions/migrate` | Migrate multiple shards |
- | [POST](#post-shard) | `/v1/shards/{uid}/actions/migrate` | Migrate a specific shard |
- Migrates the list of given shard UIDs to the node specified by `target_node_uid`. The shards can be from multiple databases. This request is asynchronous.
- For more information about shard migration use cases and considerations, see [Migrate database shards]().
- | [migrate_shard]() | admin<br />cluster_member<br />db_member |

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

## Suffix requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-suffix-3eb9e6a838.md`
- | [GET](#get-suffix) | `/v1/suffix/{name}` | Get a single DNS suffix |
- | Host | cnm.cluster.fqdn | Domain name |
- | Accept | application/json | Accepted media type |
- | name | string | The unique name of the suffix requested. |
- | [200 OK](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.2.1) | No error |

## Suffixes requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-suffixes-480d280ac0.md`
- | [GET](#get-all-suffixes) | `/v1/suffixes` | Get all DNS suffixes |
- | Host | cnm.cluster.fqdn | Domain name |
- | Accept | application/json | Accepted media type |
- The response body contains a JSON array with all suffixes, represented as [suffix objects]().
- | [200 OK](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.2.1) | No error |

## Usage report requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-usage-report-44a001a996.md`
- | [GET](#get-usage-report) | `/v1/usage_report` | Get the cluster's database usage report |
- Gets the database usage report from the cluster as Newline Delimited JSON (NDJSON). The response is returned as a gzip file if the request includes the `Accept-Encoding: gzip` header; otherwise, it returns an NDJSON file directly. The final line in the file is the response's MD5 hash.
- | Host | cnm.cluster.fqdn | Domain name |
- | Accept | application/json | Accepted media type |
- | Accept-Encoding | gzip | (Optional) Request gzip compression for the response |

## Users requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-users-6410d3009f.md`
- | [GET](#get-all-users) | `/v1/users` | Get all users |
- | [GET](#get-user) | `/v1/users/{uid}` | Get a single user |
- | [PUT](#put-user) | `/v1/users/{uid}` | Update a user's configuration |
- | [POST](#post-user) | `/v1/users` | Create a new user |
- | [DELETE](#delete-user) | `/v1/users/{uid}` | Delete a user |

## Authorize user requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-users-authorize-b3e3223788.md`
- | [POST](#post-authorize) | `/v1/users/authorize` | Generate a token to authorize an authenticated user |
- Generates a JSON Web Token (JWT) for a user to use as authorization to access the REST API. The request authentication header must include the relevant username and password.
- The request body is optional unless you want to specify the token's time to live:
- | Key    | Value            | Description         |
- |--------|------------------|---------------------|

## User password requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-users-password-96ede3bc77.md`
- | Method                     | Path                 | Description                 |
- |----------------------------|----------------------|-----------------------------|
- | [PUT](#update-password)    | `/v1/users/password` | Replace passwords |
- | [POST](#add-password)      | `/v1/users/password` | Add a new password          |
- | [DELETE](#delete-password) | `/v1/users/password` | Delete a password           |

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

## RLEC 4.2.1-30 Release Notes (October 18, 2015)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-legacy-release-notes-rlec-4-2-october-2015-e46274286b.md`
- before running through the upgrade process.
- which enables monitoring through rsyslog.
- enables the administrator to configure RLEC to run with different
- performance profiles that are optimized for either cloud or
- non-cloud environments. For additional details, refer to the

## RLEC 4.4 Release Notes (December 2016)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-legacy-release-notes-rlec-4-4-dec-2016-22b01111ff.md`
- You can upgrade to this version from any 4.3 version. If you have a
- version older than 4.3 you must first upgrade to 4.3 and only then
- improved performance. Note that when you upgrade the cluster to this
- version and then upgrade existing databases, the databases will be
- updated to use the Single proxy policy and Dense shard placement

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

## Redis Enterprise Software Release Notes 5.4.4 (June 2019)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-legacy-release-notes-rs-5-4-4-june-2019-427a5d6c9e.md`
- This release enables the functionality of Active-Active Redis (CRDB) combined with RoF (Auto Tiering),
- supports the creation of Redis databases with multiple modules,
- and adds other enhancements and bug fixes.
- Follow these [instructions for upgrading]() to RS 5.4.4 from RS 5.0 and above.
- If you have a version older than 5.0, you must first upgrade to version 5.2 (or at least 5.0).

## Redis Enterprise Software Release Notes 6.0.20 (April 2021)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-rs-6-0-20-april-2021-94fa5b78cb.md`
- is now available! This version includes the following new features and
- authorization into RS role-based access controls (RBAC). You can now use
- LDAP to authorize access to the admin console and to authorize database
- mechanism, adding the ability to authenticate client connections using a
- Redis database using the Active-Passive (Replica Of) mechanism.

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

## Redis Enterprise Software release notes 6.2.18-43 (September 2022)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-rs-6-2-18-releases-rs-6-2-18-43-a346dd121e.md`
- [Redis Enterprise Software version 6.2.18](https://redislabs.com/redis-enterprise-software/download-center/software/) is now available!
- This version of Redis Enterprise Software offers:
- The following table shows the MD5 checksums for the available packages:
- | Package | MD5 checksum (6.2.18-43 September release) |
- | Ubuntu 16 | `055973eb7009073b0c199ec1dfd81018` |

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

## Redis Enterprise Software release notes 6.4.2-94 (July 2023)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-rs-6-4-2-releases-rs-6-4-2-94-3b4726a970.md`
- This is a maintenance release for â[âRedis Enterprise Software version 6.4.2](https://redis.io/downloads/#software).
- The following table shows the MD5 checksums for the available packages:
- | Package | MD5 checksum (6.4.2-94 July release) |
- |---------|---------------------------------------|
- | Ubuntu 16 | e664a93108aeb72cf9dc849b84b79239 |

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

## Redis Enterprise Software release notes 7.4.2-129 (April 2024)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-rs-7-4-2-releases-rs-7-4-2-129-e93959591d.md`
- This is a maintenance release for â[âRedis Enterprise Software version 7.4.2](https://redis.io/downloads/#software). This version fixes several issues that affect [version 7.4.2-126]().
- The following table provides a snapshot of supported platforms as of this Redis Enterprise Software release. See the [supported platforms reference]() for more details about operating system compatibility.
- <span title="Check mark icon">&#x2705;</span> Supported â The platform is supported for this version of Redis Enterprise Software and Redis Stack modules.
- <span title="Warning icon" class="font-serif">:warning:</span> Deprecation warning â The platform is still supported for this version of Redis Enterprise Software, but support will be removed in a future release.
- | Redis Enterprise<br />major versions | 7.4 | 7.2 | 6.4 | 6.2 |

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

## Security
Source file: `raw/sources/20260409-docs-latest-operate-rs-security-04ebae99b8.md`
- Redis Software provides various features to secure your deployment:
- | Login and passwords | Users and roles | Encryption and TLS | Certificates and audit |
- |---------------------|-----------------|--------------------|-----------------------|
- | [Password attempts and session timeout]() | [Cluster and database access explained]() | [Enable TLS]() | [Create certificates]() |
- | [Password complexity]() | [Create users]() | [Configure TLS protocols]() | [Monitor certificates]() |

## Enable role-based LDAP
Source file: `raw/sources/20260409-docs-latest-operate-rs-security-access-control-ldap-enable-role-based-ldap-96bbe29831.md`
- Redis Software uses a role-based mechanism to enable LDAP authentication and authorization.
- When a user attempts to access Redis Software resources using LDAP credentials, the credentials are passed to the LDAP server in a bind request. If the request succeeds, the userâs groups are searched for a group that authorizes access to the original resource.
- Role-based LDAP lets you authorize cluster management users (previously known as _external users_) and database users. As with any access control role, you can define the level of access authorized by the role.
- To configure and enable LDAP from the Cluster Manager UI:
- 1. Go to **Access Control > LDAP > Configuration**.

## Set password policies
Source file: `raw/sources/20260409-docs-latest-operate-rs-security-access-control-manage-passwords-7afc0d612e.md`
- Redis Software provides several ways to manage the passwords of local accounts, including:
- You can also manage a user's ability to [sign in]() and control [session timeout]().
- To enforce more advanced password policies, we recommend using [LDAP integration]() with an external identity provider, such as Active Directory.
- Redis Software securely stores all user passwords using a cryptographic hash function. The default password hashing algorithm is `SHA-256`, but you can [change the password hashing algorithm]() to `PBKDF2` as of Redis Software version 7.8.6-13.

## Rotate passwords
Source file: `raw/sources/20260409-docs-latest-operate-rs-security-access-control-manage-passwords-rotate-passwords-6af7293a4b.md`
- Redis Software lets you implement password rotation policies using the [REST API]().
- You can add a new password for a database user without immediately invalidating the old one to prevent possible authentication errors in production.
- Password rotation does not work for the default user. [Add additional users]() to enable password rotation.
- For user access to the Redis Software Cluster Manager UI,
- you can set a [password expiration policy]() to prompt the user to change their password.

## Manage user security
Source file: `raw/sources/20260409-docs-latest-operate-rs-security-access-control-manage-users-8445aaaed1.md`
- Redis Software supports the following user account security settings:

## Manage user login
Source file: `raw/sources/20260409-docs-latest-operate-rs-security-access-control-manage-users-login-lockout-ae037b31b1.md`
- Redis Software secures user access in a few different ways, including automatically:
- Here, you learn how to configure the relevant settings.
- By default, after 5 failed login attempts within 15 minutes, the user account is locked for 30 minutes. You can change the user login lockout settings in the Cluster Manager UI or with [`rladmin`]().
- You can view the cluster's user login lockout settings from **Cluster > Security > Preferences > Lockout threshold** in the Cluster Manager UI or with [`rladmin info cluster`]():
- To change the user login lockout settings using the Cluster Manager UI:

## Audit connection events
Source file: `raw/sources/20260409-docs-latest-operate-rs-security-audit-events-61cf5dd060.md`
- Starting with version 6.2.18, Redis Software lets you audit database connection and authentication events.  This helps you track and troubleshoot connection activity.
- When tracked events are triggered, notifications are sent via TCP to an address and port defined when auditing is enabled.  Notifications appear in near real time and are intended to be consumed by an external listener, such as a TCP listener, third-party service, or related utility.
- For development and testing environments, notifications can be saved to a local file; however, this is neither supported nor intended for production environments.
- For performance reasons, auditing is not enabled by default.  In addition, auditing occurs in the background (asynchronously) and is non-blocking by design.  That is, the action that triggered the notification continues without regard to the status of the notification or the listening tool.
- To enable auditing for your cluster, use:

## Create certificates
Source file: `raw/sources/20260409-docs-latest-operate-rs-security-certificates-create-certificates-c317c27817.md`
- When you first install Redis Software, self-signed certificates are created to enable encryption for Redis Software endpoints.  These certificates expire after a year (365 days) and must be renewed.
- You can renew these certificates by replacing them with new self-signed certificates or by replacing them with certificates signed by a [certificate authority](https://en.wikipedia.org/wiki/Certificate_authority) (CA).
- As of [v6.2.18-70](), Redis Software includes a script to generate self-signed certificates.
- By default, the `generate_self_signed_certs.sh` script is located in `/opt/redislabs/utils/`.
- Here, you learn how to use this script to generate new certificates and how to install them.

## Enable OCSP stapling
Source file: `raw/sources/20260409-docs-latest-operate-rs-security-certificates-ocsp-stapling-73a4a3b72a.md`
- OCSP ([Online Certificate Status Protocol](https://en.wikipedia.org/wiki/Online_Certificate_Status_Protocol)) lets a client or server verify the status (`GOOD`, `REVOKED`, or `UNKNOWN`) of a certificate maintained by a third-party [certificate authority (CA)](https://en.wikipedia.org/wiki/Certificate_authority).
- To check whether a certificate is still valid or has been revoked, a client or server can send a request to the CA's OCSP server (also called an OCSP responder). The OCSP responder checks the certificate's status in the CA's [certificate revocation list](https://en.wikipedia.org/wiki/Certificate_revocation_list) and sends the status back as a signed and timestamped response.
- With OCSP enabled, the Redis Software server regularly polls the CA's OCSP responder for the certificate's status. After it receives the response, the server caches this status until its next polling attempt.
- When a client tries to connect to the Redis Software server, they perform a [TLS handshake](https://en.wikipedia.org/wiki/Transport_Layer_Security#TLS_handshake) to authenticate the server and create a secure, encrypted connection. During the TLS handshake, [OCSP stapling](https://en.wikipedia.org/wiki/OCSP_stapling) lets the Redis Software server send (or "staple") the cached certificate status to the client.
- If the stapled OCSP response confirms the certificate is still valid, the TLS handshake succeeds and the client connects to the server.

## Update certificates
Source file: `raw/sources/20260409-docs-latest-operate-rs-security-certificates-updating-certificates-015bdae291.md`
- When you update the certificates, the new certificate replaces the same certificates on all nodes in the cluster.
- You can use the [`rladmin`]() command-line interface (CLI) or the [REST API]() to update certificates. The Cluster Manager UI lets you update proxy, syncer, and internode encryption certificates on the **Cluster > Security > Certificates** screen.
- To replace proxy, syncer, or internode encryption certificates using the Cluster Manager UI:
- 1. Go to **Cluster > Security > Certificates**.
- 1. Expand the section for the certificate you want to update:

## Transport Layer Security (TLS)
Source file: `raw/sources/20260409-docs-latest-operate-rs-security-encryption-tls-ca83cfedd6.md`
- You can [use TLS authentication]() for the following types of communication:
- TLS protocols and ciphers define the overall suite of algorithms that clients are able to connect to the servers with.
- You can change the [TLS protocols]() and [ciphers]() to improve the security of your Redis Software cluster and databases. The default settings are in line with industry best practices, but you can customize them to match the security policy of your organization.
- For help troubleshooting TLS failures, see the following knowledge base guides:

## Troubleshooting Redis Software
Source file: `raw/sources/20260409-docs-latest-operate-rs-troubleshooting-0a8f8e09c2.md`
- For troubleshooting specific issues, see:
- The [Redis Software knowledge base](https://support.redislabs.com/hc/en-us/categories/26174244088594-Redis-Software) provides additional guides and troubleshooting resources.
- If initial troubleshooting doesn't resolve the issue, you can [contact support](https://redis.io/support/) for additional help.

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
