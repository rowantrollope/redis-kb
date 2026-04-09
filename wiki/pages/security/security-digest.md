---
title: "Security Digest"
last_updated: 2026-04-09
tags: [security, digest]
source_count: 1176
---

# Security Digest

Auto-compiled synthesis from raw sources.

## Azure Cache for Redis best practices
Source file: `raw/sources/20260408-azure-cache-for-redis-best-practices.md`
- Source: https://learn.microsoft.com/en-us/azure/azure-cache-for-redis/cache-best-practices
- Upgrade to Microsoft Edge to take advantage of the latest features, security updates, and technical support.
- Azure Cache for Redis is a fully managed Redis service based on the community edition of Redis. It can be used as a data cache, session store, or message broker that provides high throughput and low-latency access to data for applications. These tutorials, API references, and other documentation show you how to use Redis from any application on Azure. For the latest and most performant Redis experience, see the links on this page for Azure Managed Redis, the newest Redis offering on Azure.

## ACL
Source file: `raw/sources/20260409-docs-latest-commands-acl-54f6dfefe1.md`
- To see the list of available commands you can call [`ACL HELP`]().

## ACL CAT
Source file: `raw/sources/20260409-docs-latest-commands-acl-cat-c8bce03b76.md`
- If a category name is given, the command shows all the Redis commands in
- ACL categories are very useful in order to create ACL rules that include or
- exclude a large set of commands at once, without specifying every single
- command. For instance, the following rule will let the user `karin` perform
- everything but the most dangerous operations that may affect the server

## ACL DELUSER
Source file: `raw/sources/20260409-docs-latest-commands-acl-deluser-df035f47eb.md`
- authenticated with such users. Note: the special `default` user cannot be
- removed from the system, this is the default user that every new connection
- is authenticated with. The list of users may include usernames that do not
- exist, in such case no operation is performed for the non existing users.
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |

## ACL DRYRUN
Source file: `raw/sources/20260409-docs-latest-commands-acl-dryrun-c65342a279.md`
- This command can be used to test the permissions of a given user without having to enable the user or cause the side effects of running the command.
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | Might reply with "unknown user" for LDAP users even if `AUTH` succeeds. |
- * [Simple string reply](../../develop/reference/protocol-spec#simple-strings): `OK` on success.

## ACL GENPASS
Source file: `raw/sources/20260409-docs-latest-commands-acl-genpass-a9ebb9d83d.md`
- security risks. Such password does not need to be remembered by humans, but
- only by computers, so it can be very long and strong (unguessable by an
- external attacker). The `ACL GENPASS` command generates a password starting
- from /dev/urandom if available, otherwise (in systems without /dev/urandom) it
- uses a weaker system that is likely still better than picking a weak password

## ACL GETUSER
Source file: `raw/sources/20260409-docs-latest-commands-acl-getuser-67028ff535.md`
- Specifically, it lists the user's ACL flags, password hashes, commands, key patterns, channel patterns (Added in version 6.2) and selectors (Added in version 7.0).
- Additional information may be returned in the future if more metadata is added to the user.
- Command rules are always returned in the same format as the one used in the [`ACL SETUSER`]() command.
- Before version 7.0, keys and channels were returned as an array of patterns, however in version 7.0 later they are now also returned in same format as the one used in the [`ACL SETUSER`]() command.
- Note: This description of command rules reflects the user's effective permissions, so while it may not be identical to the set of rules used to configure the user, it is still functionally identical.

## ACL HELP
Source file: `raw/sources/20260409-docs-latest-commands-acl-help-f32fa2dc58.md`
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | Not supported for [scripts](). |
- [Array reply](../../develop/reference/protocol-spec#arrays): a list of subcommands and their descriptions.
- [Array reply](../../develop/reference/protocol-spec#arrays): a list of subcommands and their descriptions.

## ACL LIST
Source file: `raw/sources/20260409-docs-latest-commands-acl-list-b9eb02ab8b.md`
- line in the returned array defines a different user, and the format is the
- same used in the redis.conf file or the external ACL file, so you can
- cut and paste what is returned by the ACL LIST command directly inside a
- configuration file if you wish (but make sure to check [`ACL SAVE`]()).
- In some cases, you might see `allchannels` instead of `&*` and `allkeys` instead of `~*` in the output. This is because `allchannels` and `allkeys` are aliases for `&*` and `~*` respectively.

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

## ACL USERS
Source file: `raw/sources/20260409-docs-latest-commands-acl-users-5257e7b3e2.md`
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | Not supported for [scripts](). |
- [Array reply](../../develop/reference/protocol-spec#arrays): list of existing ACL users.
- [Array reply](../../develop/reference/protocol-spec#arrays): list of existing ACL users.

## ACL WHOAMI
Source file: `raw/sources/20260409-docs-latest-commands-acl-whoami-433f2f600e.md`
- New connections are authenticated with the "default" user. They
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | Not supported for [scripts](). |
- [Bulk string reply](../../develop/reference/protocol-spec#bulk-strings): the username of the current connection.

## APPEND
Source file: `raw/sources/20260409-docs-latest-commands-append-0abae0ce92.md`
- If `key` does not exist it is created and set as an empty string, so `APPEND`
- will be similar to [`SET`]() in this special case.
- The `APPEND` command can be used to create a very compact representation of a
- list of fixed-size samples, usually referred as _time series_.
- Every time a new sample arrives we can store it using the command

## ASKING
Source file: `raw/sources/20260409-docs-latest-commands-asking-0576d87d5b.md`
- This is normally done automatically by cluster clients.
- If an `-ASK` redirect is received during a transaction, only one ASKING command needs to be sent to the target node before sending the complete transaction to the target node.
- See [ASK redirection in the Redis Cluster Specification]() for details.
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|

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

## BITCOUNT
Source file: `raw/sources/20260409-docs-latest-commands-bitcount-a5bab49c6d.md`
- By default all the bytes contained in the string are examined.
- It is possible to specify the counting operation only in an interval passing the
- Like for the [`GETRANGE`]() command start and end can contain negative values in
- order to index bytes starting from the end of the string, where -1 is the last
- byte, -2 is the penultimate, and so forth.

## BITFIELD
Source file: `raw/sources/20260409-docs-latest-commands-bitfield-9f389d009f.md`
- For example the following command increments a 5 bit signed integer at bit offset 100, and gets the value of the 4 bit unsigned integer at bit offset 0:
- > BITFIELD mykey INCRBY i5 100 1 GET u4 0
- 1. Addressing with `GET` bits outside the current string length (including the case the key does not exist at all), results in the operation to be performed like the missing part all consists of bits set to 0.
- 2. Addressing with `SET` or `INCRBY` bits outside the current string length will enlarge the string, zero-padding it, as needed, for the minimal length needed, according to the most far bit touched.
- The following is the list of supported commands.

## BITFIELD_RO
Source file: `raw/sources/20260409-docs-latest-commands-bitfield-ro-c9cd1a3e78.md`
- It is like the original [`BITFIELD`]() but only accepts `GET` subcommand and can safely be used in read-only replicas.
- Since the original [`BITFIELD`]() has `SET` and `INCRBY` options it is technically flagged as a writing command in the Redis command table.
- For this reason read-only replicas in a Redis Cluster will redirect it to the master instance even if the connection is in read-only mode (see the [`READONLY`]() command of Redis Cluster).
- Since Redis 6.2, the `BITFIELD_RO` variant was introduced in order to allow [`BITFIELD`]() behavior in read-only replicas without breaking compatibility on command flags.
- See original [`BITFIELD`]() for more details.

## BITOP
Source file: `raw/sources/20260409-docs-latest-commands-bitop-3b4f54c4e5.md`
- This command's behavior varies in clustered Redis environments. See the [multi-key operations]() page for more information.
- Perform a bitwise operation between multiple keys (containing string values) and
- store the result in the destination key.
- The `BITOP` command supports eight bitwise operations: `AND`, `OR`, `XOR`,
- * `BITOP AND destkey srckey1 srckey2 srckey3 ... srckeyN`

## BITPOS
Source file: `raw/sources/20260409-docs-latest-commands-bitpos-6a4501b28b.md`
- The position is returned, thinking of the string as an array of bits from left to
- right, where the first byte's most significant bit is at position 0, the second
- byte's most significant bit is at position 8, and so forth.
- The same bit position convention is followed by [`GETBIT`]() and [`SETBIT`]().
- By default, all the bytes contained in the string are examined.

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

## CLIENT
Source file: `raw/sources/20260409-docs-latest-commands-client-eeacf6e196.md`
- To see the list of available commands you can call [`CLIENT HELP`]().

## CLIENT GETNAME
Source file: `raw/sources/20260409-docs-latest-commands-client-getname-0022eea4b8.md`
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |
- * [Bulk string reply](../../develop/reference/protocol-spec#bulk-strings): the connection name of the current connection.
- * [Nil reply](../../develop/reference/protocol-spec#bulk-strings): the connection name was not set.

## CLIENT GETREDIR
Source file: `raw/sources/20260409-docs-latest-commands-client-getredir-54f146353a.md`
- [tracking]() notifications to. We set a client
- to redirect to when using [`CLIENT TRACKING`]() to enable tracking. However in
- order to avoid forcing client libraries implementations to remember the
- ID notifications are redirected to, this command exists in order to improve
- introspection and allow clients to check later if redirection is active

## CLIENT HELP
Source file: `raw/sources/20260409-docs-latest-commands-client-help-518dd0100f.md`
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Not supported">&#x274c; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> | <span title="Not supported">&#x274c; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> |  |
- [Array reply](../../develop/reference/protocol-spec#arrays): a list of subcommands and their descriptions.
- [Array reply](../../develop/reference/protocol-spec#arrays): a list of subcommands and their descriptions.

## CLIENT ID
Source file: `raw/sources/20260409-docs-latest-commands-client-id-0c01911c64.md`
- 1. It is never repeated, so if `CLIENT ID` returns the same number, the caller can be sure that the underlying client did not disconnect and reconnect the connection, but it is still the same connection.
- 2. The ID is monotonically incremental. If the ID of a connection is greater than the ID of another connection, it is guaranteed that the second connection was established with the server at a later time.
- This command is especially useful together with [`CLIENT UNBLOCK`]() which was
- introduced also in Redis 5 together with `CLIENT ID`. Check the [`CLIENT UNBLOCK`]() command page for a pattern involving the two commands.
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |

## CLIENT INFO
Source file: `raw/sources/20260409-docs-latest-commands-client-info-08fe2b22f8.md`
- The reply format is identical to that of [`CLIENT LIST`](), and the content consists only of information about the current client.
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |
- [Bulk string reply](../../develop/reference/protocol-spec#bulk-strings): a unique string for the current client, as described at the `CLIENT LIST` page.

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

## CLIENT REPLY
Source file: `raw/sources/20260409-docs-latest-commands-client-reply-ebcc87dbe3.md`
- The `CLIENT REPLY` command controls whether the server will reply the client's commands. The following modes are available:
- * `ON`. This is the default mode in which the server returns a reply to every command.
- * `OFF`. In this mode the server will not reply to client commands.
- * `SKIP`. This mode skips the reply of command immediately after it.
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |

## CLIENT SETINFO
Source file: `raw/sources/20260409-docs-latest-commands-client-setinfo-2244b4b89b.md`
- Client libraries are expected to pipeline this command after authentication on all connections
- and ignore failures since they could be connected to an older version that doesn't support them.
- * `lib-name` - meant to hold the name of the client library that's in use.
- * `lib-ver` - meant to hold the client library's version.
- There is no limit to the length of these attributes. However it is not possible to use spaces, newlines, or other non-printable characters that would violate the format of the [`CLIENT LIST`]() reply.

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

## CLIENT TRACKINGINFO
Source file: `raw/sources/20260409-docs-latest-commands-client-trackinginfo-a498756ffc.md`
- Here's the list of tracking information sections and their respective values:
- * **flags**: A list of tracking flags used by the connection. The flags and their meanings are as follows:
- * `off`: The connection isn't using server assisted client side caching.
- * `on`: Server assisted client side caching is enabled for the connection.
- * `bcast`: The client uses broadcasting mode.

## CLIENT UNBLOCK
Source file: `raw/sources/20260409-docs-latest-commands-client-unblock-74b891cdf7.md`
- By default the client is unblocked as if the timeout of the command was
- reached, however if an additional (and optional) argument is passed, it is possible to specify the unblocking behavior, that can be **TIMEOUT** (the default) or **ERROR**. If **ERROR** is specified, the behavior is to unblock the client returning as error the fact that the client was force-unblocked. Specifically the client will receive the following error:
- Note: of course as usually it is not guaranteed that the error text remains
- the same, however the error code will remain `-UNBLOCKED`.
- This command is useful especially when we are monitoring many keys with

## CLIENT UNPAUSE
Source file: `raw/sources/20260409-docs-latest-commands-client-unpause-cca5d41b9a.md`
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Not supported">&#x274c; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> | <span title="Not supported">&#x274c; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> |  |
- [Simple string reply](../../develop/reference/protocol-spec#simple-strings): `OK`.
- [Simple string reply](../../develop/reference/protocol-spec#simple-strings): `OK`.

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

## CLUSTER
Source file: `raw/sources/20260409-docs-latest-commands-cluster-ba0cd556d3.md`
- To see the list of available commands you can call [`CLUSTER HELP`]().

## CLUSTER BUMPEPOCH
Source file: `raw/sources/20260409-docs-latest-commands-cluster-bumpepoch-bb8393f88a.md`
- The `CLUSTER BUMPEPOCH` command triggers an increment to the cluster's config epoch from the connected node. The epoch will be incremented if the node's config epoch is zero, or if it is less than the cluster's greatest epoch.
- **Note:** config epoch management is performed internally by the cluster, and relies on obtaining a consensus of nodes. The `CLUSTER BUMPEPOCH` attempts to increment the config epoch **WITHOUT** getting the consensus, so using it may violate the "last failover wins" rule. Use it with caution.
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Not supported">&#x274c; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> | <span title="Not supported">&#x274c; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> |  |

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

## CLUSTER FLUSHSLOTS
Source file: `raw/sources/20260409-docs-latest-commands-cluster-flushslots-b3bca813f2.md`
- The `CLUSTER FLUSHSLOTS` deletes all information about slots from the connected node. It can only be called when the database is empty.
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Not supported">&#x274c; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> | <span title="Not supported">&#x274c; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> |  |
- [Simple string reply](../../develop/reference/protocol-spec#simple-strings): `OK`

## CLUSTER FORGET
Source file: `raw/sources/20260409-docs-latest-commands-cluster-forget-2bfd181f8f.md`
- from the set of *known nodes* of the Redis Cluster node receiving the command.
- In other words the specified node is removed from the *nodes table* of the
- Because when a given node is part of the cluster, all the other nodes
- participating in the cluster knows about it, in order for a node to be
- completely removed from a cluster, the `CLUSTER FORGET` command must be

## CLUSTER GETKEYSINSLOT
Source file: `raw/sources/20260409-docs-latest-commands-cluster-getkeysinslot-188fe22fca.md`
- hashing to the specified hash slot. The maximum number of keys to return
- is specified via the `count` argument, so that it is possible for the user
- The main usage of this command is during rehashing of cluster slots from one
- node to another. The way the rehashing is performed is exposed in the Redis
- Cluster specification, or in a more simple to digest form, as an appendix

## CLUSTER HELP
Source file: `raw/sources/20260409-docs-latest-commands-cluster-help-a6f0cd14d1.md`
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | Only supported with the [OSS cluster API](). |
- [Array reply](../../develop/reference/protocol-spec#arrays): a list of subcommands and their descriptions.
- [Array reply](../../develop/reference/protocol-spec#arrays): a list of subcommands and their descriptions.

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

## CLUSTER LINKS
Source file: `raw/sources/20260409-docs-latest-commands-cluster-links-100af14d57.md`
- Each map is composed of the following attributes of the corresponding cluster link and their values:
- 1. `direction`: This link is established by the local node `to` the peer, or accepted by the local node `from` the peer.
- 3. `create-time`: Creation time of the link. (In the case of a `to` link, this is the time when the TCP link is created by the local node, not the time when it is actually established.)
- 4. `events`: Events currently registered for the link. `r` means readable event, `w` means writable event.
- 5. `send-buffer-allocated`: Allocated size of the link's send buffer, which is used to buffer outgoing messages toward the peer.

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

## CLUSTER MYID
Source file: `raw/sources/20260409-docs-latest-commands-cluster-myid-54a22f74f3.md`
- The `CLUSTER MYID` command returns the unique, auto-generated identifier that is associated with the connected cluster node.
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Not supported">&#x274c; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> | <span title="Not supported">&#x274c; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> |  |
- [Bulk string reply](../../develop/reference/protocol-spec#bulk-strings): the node ID.

## CLUSTER MYSHARDID
Source file: `raw/sources/20260409-docs-latest-commands-cluster-myshardid-0e20cbb7f3.md`
- The `CLUSTER MYSHARDID` command returns the unique, auto-generated identifier that is associated with the shard to which the connected cluster node belongs.
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Not supported">&#x274c; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> | <span title="Not supported">&#x274c; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> |  |
- [Bulk string reply](../../develop/reference/protocol-spec#bulk-strings): the node's shard ID.

## CLUSTER NODES
Source file: `raw/sources/20260409-docs-latest-commands-cluster-nodes-63b541a084.md`
- given by the set of known nodes, the state of the connection we have with such
- nodes, their flags, properties and assigned slots, and so forth.
- configuration of the node we are contacting, in a serialization format which
- happens to be exactly the same as the one used by Redis Cluster itself in
- order to store on disk the cluster state (however the on disk cluster state

## CLUSTER REPLICAS
Source file: `raw/sources/20260409-docs-latest-commands-cluster-replicas-863365bd3b.md`
- master node. The list is provided in the same format used by [`CLUSTER NODES`]() (please refer to its documentation for the specification of the format).
- The command will fail if the specified node is not known or if it is not
- a master according to the node table of the node receiving the command.
- Note that if a replica is added, moved, or removed from a given master node,
- and we ask `CLUSTER REPLICAS` to a node that has not yet received the

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

## CLUSTER SET-CONFIG-EPOCH
Source file: `raw/sources/20260409-docs-latest-commands-cluster-set-config-epoch-bbe0def561.md`
- 1. The nodes table of the node is empty.
- 2. The node current *config epoch* is zero.
- These prerequisites are needed since usually, manually altering the
- configuration epoch of a node is unsafe, we want to be sure that the node with
- the higher configuration epoch value (that is the last that failed over) wins

## CLUSTER SETSLOT
Source file: `raw/sources/20260409-docs-latest-commands-cluster-setslot-45ab7d42bf.md`
- 1. `MIGRATING` subcommand: Set a hash slot in *migrating* state.
- 2. `IMPORTING` subcommand: Set a hash slot in *importing* state.
- 3. `STABLE` subcommand: Clear any importing / migrating state from hash slot.
- 4. `NODE` subcommand: Bind the hash slot to a different node.
- The command with its set of subcommands is useful in order to start and end cluster live resharding operations, which are accomplished by setting a hash slot in migrating state in the source node, and importing state in the destination node.

## CLUSTER SHARDS
Source file: `raw/sources/20260409-docs-latest-commands-cluster-shards-d3553408e4.md`
- A shard is defined as a collection of nodes that serve the same set of slots and that replicate from each other.
- A shard may only have a single master at a given time, but may have multiple or no replicas.
- It is possible for a shard to not be serving any slots while still having replicas.
- This command replaces the [`CLUSTER SLOTS`]() command, by providing a more efficient and extensible representation of the cluster.
- The command is suitable to be used by Redis Cluster client libraries in order to understand the topology of the cluster.

## CLUSTER SLAVES
Source file: `raw/sources/20260409-docs-latest-commands-cluster-slaves-f91db3fa2d.md`
- The command provides a list of replica nodes replicating from the specified
- master node. The list is provided in the same format used by [`CLUSTER NODES`]() (please refer to its documentation for the specification of the format).
- The command will fail if the specified node is not known or if it is not
- a master according to the node table of the node receiving the command.
- Note that if a replica is added, moved, or removed from a given master node,

## CLUSTER SLOTS
Source file: `raw/sources/20260409-docs-latest-commands-cluster-slots-ed99d0f8d2.md`
- The command is suitable to be used by Redis Cluster client libraries implementations in order to retrieve (or update when a redirection is received) the map associating cluster *hash slots* with actual nodes network information, so that when a command is received, it can be sent to what is likely the right instance for the keys specified in the command.
- The networking information for each node is an array containing the following elements:
- * Preferred endpoint (Either an IP address, hostname, or NULL)
- * A map of additional networking metadata
- The preferred endpoint, along with the port, defines the location that clients should use to send requests for a given slot.

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

## COMMAND COUNT
Source file: `raw/sources/20260409-docs-latest-commands-command-count-9c1534fbcb.md`
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |
- [Integer reply](../../develop/reference/protocol-spec#integers): the number of commands returned by `COMMAND`.
- [Integer reply](../../develop/reference/protocol-spec#integers): the number of commands returned by `COMMAND`.

## COMMAND DOCS
Source file: `raw/sources/20260409-docs-latest-commands-command-docs-6334da9ba2.md`
- By default, the reply includes all of the server's commands.
- You can use the optional _command-name_ argument to specify the names of one or more commands.
- The reply includes a map for each returned command.
- The following keys may be included in the mapped reply:
- * **summary:** short command description.

## COMMAND
Source file: `raw/sources/20260409-docs-latest-commands-command-f203e65eb1.md`
- Its reply describes all commands that the server can process.
- Redis clients can call it to obtain the server's runtime capabilities during the handshake.
- Please refer to its subcommands for further details.
- this command is especially beneficial for cluster-aware clients.
- Such clients must identify the names of keys in commands to route requests to the correct shard.

## COMMAND GETKEYS
Source file: `raw/sources/20260409-docs-latest-commands-command-getkeys-f1db5ce25a.md`
- [`COMMAND`]() provides information on how to find the key names of each command (see `firstkey`, [key specifications](), and `movablekeys`),
- but in some cases it's not possible to find keys of certain commands and then the entire command must be parsed to discover some / all key names.
- You can use `COMMAND GETKEYS` or [`COMMAND GETKEYSANDFLAGS`]() to discover key names directly from how Redis parses the commands.
- COMMAND GETKEYS EVAL "not consulted" 3 key1 key2 key3 arg1 arg2 arg3 argN
- COMMAND GETKEYS SORT mylist ALPHA STORE outlist

## COMMAND GETKEYSANDFLAGS
Source file: `raw/sources/20260409-docs-latest-commands-command-getkeysandflags-1b21182497.md`
- [`COMMAND`]() provides information on how to find the key names of each command (see `firstkey`, [key specifications](), and `movablekeys`),
- but in some cases it's not possible to find keys of certain commands and then the entire command must be parsed to discover some / all key names.
- You can use [`COMMAND GETKEYS`]() or `COMMAND GETKEYSANDFLAGS` to discover key names directly from how Redis parses the commands.
- Refer to [key specifications]() for information about the meaning of the key flags.
- COMMAND GETKEYS EVAL "not consulted" 3 key1 key2 key3 arg1 arg2 arg3 argN

## COMMAND HELP
Source file: `raw/sources/20260409-docs-latest-commands-command-help-782f74d38e.md`
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |
- [Array reply](../../develop/reference/protocol-spec#arrays): a list of sub-commands and their descriptions.
- [Array reply](../../develop/reference/protocol-spec#arrays): a list of sub-commands and their descriptions.

## COMMAND INFO
Source file: `raw/sources/20260409-docs-latest-commands-command-info-ef8421ebc5.md`
- Same result format as [`COMMAND`]() except you can specify which commands
- If you request details about non-existing commands, their return
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |

## COMMAND LIST
Source file: `raw/sources/20260409-docs-latest-commands-command-list-b8d15ead89.md`
- You can use the optional _FILTERBY_ modifier to apply one of the following filters:
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |
- [Array reply](../../develop/reference/protocol-spec#arrays): a list of command names.

## CONFIG
Source file: `raw/sources/20260409-docs-latest-commands-config-a0de26483d.md`
- To see the list of available commands you can call [`CONFIG HELP`]().

## CONFIG GET
Source file: `raw/sources/20260409-docs-latest-commands-config-get-c8bb5e6251.md`
- Not all the configuration parameters are supported in Redis 2.4, while Redis 2.6
- can read the whole configuration of a server using this command.
- The symmetric command used to alter the configuration at run time is `CONFIG
- Any configuration parameter matching any of the patterns are reported as a list
- You can obtain a list of all the supported configuration parameters by typing

## CONFIG HELP
Source file: `raw/sources/20260409-docs-latest-commands-config-help-e9c2b71abb.md`
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Not supported">&#x274c; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> | <span title="Not supported">&#x274c; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> |  |
- [Array reply](../../develop/reference/protocol-spec#arrays): a list of sub-commands and their descriptions.
- [Array reply](../../develop/reference/protocol-spec#arrays): a list of sub-commands and their descriptions.

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

## COPY
Source file: `raw/sources/20260409-docs-latest-commands-copy-61c32eb545.md`
- This command's behavior varies in clustered Redis environments. See the [multi-key operations]() page for more information.
- This command copies the value stored at the `source` key to the `destination`
- By default, the `destination` key is created in the logical database used by the
- connection. The `DB` option allows specifying an alternative logical database
- The command returns zero when the `destination` key already exists. The

## DBSIZE
Source file: `raw/sources/20260409-docs-latest-commands-dbsize-56c1c7f92e.md`
- This command's behavior varies in clustered Redis environments. See the [multi-key operations]() page for more information.
- Return the number of keys in the currently-selected database.
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |

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

## DISCARD
Source file: `raw/sources/20260409-docs-latest-commands-discard-ee83045329.md`
- If [`WATCH`]() was used, `DISCARD` unwatches all keys watched by the connection.
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |
- [Simple string reply](../../develop/reference/protocol-spec#simple-strings): `OK`.

## DUMP
Source file: `raw/sources/20260409-docs-latest-commands-dump-b9a5f68325.md`
- The returned value can be synthesized back into a Redis key using the [`RESTORE`]()
- The serialization format is opaque and non-standard, however it has a few
- * It contains a 64-bit checksum that is used to make sure errors will be
- The [`RESTORE`]() command makes sure to check the checksum before synthesizing a
- * Values are encoded in the same format used by RDB.

## ECHO
Source file: `raw/sources/20260409-docs-latest-commands-echo-6fe822b4c8.md`
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |
- [Bulk string reply](../../develop/reference/protocol-spec#bulk-strings): the given string.
- [Bulk string reply](../../develop/reference/protocol-spec#bulk-strings): the given string.

## EVAL
Source file: `raw/sources/20260409-docs-latest-commands-eval-ad88fa9a50.md`
- This command's behavior varies in clustered Redis environments. See the [multi-key operations]() page for more information.
- Invoke the execution of a server-side Lua script.
- The first argument is the script's source code.
- Scripts are written in [Lua](https://lua.org) and executed by the embedded [Lua 5.1]() interpreter in Redis.
- The second argument is the number of input key name arguments, followed by all the keys accessed by the script.

## EVAL_RO
Source file: `raw/sources/20260409-docs-latest-commands-eval-ro-499e4547e9.md`
- For more information about when to use this command vs [`EVAL`](), please refer to [Read-only scripts]().
- For more information about [`EVAL`]() scripts please refer to [Introduction to Eval Scripts]().
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |

## EVALSHA
Source file: `raw/sources/20260409-docs-latest-commands-evalsha-5a09dca804.md`
- This command's behavior varies in clustered Redis environments. See the [multi-key operations]() page for more information.
- Evaluate a script from the server's cache by its SHA1 digest.
- The server caches scripts by using the [`SCRIPT LOAD`]() command.
- The command is otherwise identical to [`EVAL`]().
- Please refer to the [Redis Programmability]() and [Introduction to Eval Scripts]() for more information about Lua scripts.

## EVALSHA_RO
Source file: `raw/sources/20260409-docs-latest-commands-evalsha-ro-8941ee08b8.md`
- For more information about when to use this command vs [`EVALSHA`](), please refer to [Read-only scripts]().
- For more information about [`EVALSHA`]() scripts please refer to [Introduction to Eval Scripts]().
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |

## EXEC
Source file: `raw/sources/20260409-docs-latest-commands-exec-addfa29b1d.md`
- This command's behavior varies in clustered Redis environments. See the [multi-key operations]() page for more information.
- Executes all previously queued commands in a [transaction][tt] and restores the
- When using [`WATCH`](), `EXEC` will execute commands only if the watched keys were
- not modified, allowing for a [check-and-set mechanism][ttc].
- [ttc]: /develop/interact/transactions#cas

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

## EXPIRETIME
Source file: `raw/sources/20260409-docs-latest-commands-expiretime-b0bf201596.md`
- See also the [`PEXPIRETIME`]() command which returns the same information with milliseconds resolution.
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |
- * [Integer reply](../../develop/reference/protocol-spec#integers): the expiration Unix timestamp in seconds.

## FAILOVER
Source file: `raw/sources/20260409-docs-latest-commands-failover-1cd108e6f3.md`
- The failover is not synchronous, instead a background task will handle coordinating the failover.
- It is designed to limit data loss and unavailability of the cluster during the failover.
- This command is analogous to the [`CLUSTER FAILOVER`]() command for non-clustered Redis and is similar to the failover support provided by sentinel.
- The specific details of the default failover flow are as follows:
- 1. The master will internally start a `CLIENT PAUSE WRITE`, which will pause incoming writes and prevent the accumulation of new data in the replication stream.

## FCALL
Source file: `raw/sources/20260409-docs-latest-commands-fcall-65a57fafe0.md`
- Functions are loaded to the server with the [`FUNCTION LOAD`]() command.
- The first argument is the name of a loaded function.
- The second argument is the number of input key name arguments, followed by all the keys accessed by the function.
- In Lua, these names of input keys are available to the function as a table that is the callback's first argument.
- To ensure the correct execution of functions, both in standalone and clustered deployments, all names of keys that a function accesses must be explicitly provided as input key arguments.

## FCALL_RO
Source file: `raw/sources/20260409-docs-latest-commands-fcall-ro-a2036ca088.md`
- For more information about when to use this command vs [`FCALL`](), please refer to [Read-only scripts]().
- For more information please refer to [Introduction to Redis Functions]().
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |

## FLUSHALL
Source file: `raw/sources/20260409-docs-latest-commands-flushall-1af5d460a5.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- This command's behavior varies in clustered Redis environments. See the [multi-key operations]() page for more information.
- Delete all the keys of all the existing databases, not just the currently selected one.
- By default, `FLUSHALL` will synchronously flush all the databases.

## FLUSHDB
Source file: `raw/sources/20260409-docs-latest-commands-flushdb-8cfcfe3583.md`
- This command's behavior varies in clustered Redis environments. See the [multi-key operations]() page for more information.
- Delete all the keys of the currently selected DB.
- By default, `FLUSHDB` will synchronously flush all keys from the database.
- Starting with Redis 6.2, setting the **lazyfree-lazy-user-flush** configuration directive to "yes" changes the default flush mode to asynchronous.
- It is possible to use one of the following modifiers to dictate the flushing mode explicitly:

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

## FT.DICTADD
Source file: `raw/sources/20260409-docs-latest-commands-ft-dictadd-96d1572b71.md`
- <summary><b>Add terms to a dictionary</b></summary>
- 127.0.0.1:6379> FT.DICTADD dict foo bar "hello world"
- | Redis<br />Software | Redis Cloud<br />Flexible & Annual | Redis Cloud<br />Free & Fixed | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:-----------------|:------|
- | <span title="Supported">&#x2705; Supported</span> | <span title="Supported">&#x2705; Supported</span> | <span title="Supported">&#x2705; Supported</nobr></span> |  |

## FT.DICTDEL
Source file: `raw/sources/20260409-docs-latest-commands-ft-dictdel-62548600b0.md`
- <summary><b>Delete terms from a dictionary</b></summary>
- 127.0.0.1:6379> FT.DICTDEL dict foo bar "hello world"
- | Redis<br />Software | Redis Cloud<br />Flexible & Annual | Redis Cloud<br />Free & Fixed | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:-----------------|:------|
- | <span title="Supported">&#x2705; Supported</span> | <span title="Supported">&#x2705; Supported</span> | <span title="Supported">&#x2705; Supported</nobr></span> |  |

## FT.DICTDUMP
Source file: `raw/sources/20260409-docs-latest-commands-ft-dictdump-8ca41351e2.md`
- <summary><b>Dump all terms in the dictionary</b></summary>
- | Redis<br />Software | Redis Cloud<br />Flexible & Annual | Redis Cloud<br />Free & Fixed | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:-----------------|:------|
- | <span title="Supported">&#x2705; Supported</span> | <span title="Supported">&#x2705; Supported</span> | <span title="Supported">&#x2705; Supported</nobr></span> |  |

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

## FT._LIST
Source file: `raw/sources/20260409-docs-latest-commands-ft-list-a0c0b3cce0.md`
- The prefix `_` in the command indicates, this is a temporary command.
- In the future, a [`SCAN`]() type of command will be added, for use when a database
- | Redis<br />Software | Redis Cloud<br />Flexible & Annual | Redis Cloud<br />Free & Fixed | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:-----------------|:------|
- | <span title="Supported">&#x2705; Supported</span> | <span title="Supported">&#x2705; Supported</span> | <span title="Supported">&#x2705; Supported</nobr></span> |  |

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

## FT.SUGADD
Source file: `raw/sources/20260409-docs-latest-commands-ft-sugadd-5767b2e863.md`
- Add a suggestion string to an auto-complete suggestion dictionary
- is floating point number of the suggestion string's weight.
- The auto-complete suggestion dictionary is disconnected from the index definitions and leaves creating and updating suggestions dictionaries to the user.
- increments the existing entry of the suggestion by the given score, instead of replacing the score. This is useful for updating the dictionary based on user queries in real time.
- <summary><code>PAYLOAD {payload}</code></summary>

## FT.SUGDEL
Source file: `raw/sources/20260409-docs-latest-commands-ft-sugdel-6b72c1a28d.md`
- <summary><b>Delete a string from a suggestion index</b></summary>
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Supported">&#x2705; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> | <span title="Not supported">&#x274c; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> | Not supported on clustered databases. |
- [Integer reply](): 1 if the suggestion was deleted, 0 if it was not found.

## FT.SUGGET
Source file: `raw/sources/20260409-docs-latest-commands-ft-sugget-144fed2b9a.md`
- performs a fuzzy prefix search, including prefixes at Levenshtein distance of 1 from the prefix sent.
- limits the results to a maximum of `num` (default: 5).
- <summary><code>WITHSCORES</code></summary>
- also returns the score of each suggestion. This can be used to merge results from multiple instances.
- <summary><code>WITHPAYLOADS</code></summary>

## FT.SUGLEN
Source file: `raw/sources/20260409-docs-latest-commands-ft-suglen-b92047d907.md`
- Get the size of an auto-complete suggestion dictionary
- <summary><b>Get the size of an auto-complete suggestion dictionary</b></summary>
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Supported">&#x2705; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> | <span title="Not supported">&#x274c; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> | Not supported on clustered databases. |

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

## FUNCTION
Source file: `raw/sources/20260409-docs-latest-commands-function-2e516bac73.md`
- To see the list of available commands you can call [`FUNCTION HELP`]().

## FUNCTION DELETE
Source file: `raw/sources/20260409-docs-latest-commands-function-delete-8a28559d2c.md`
- This command deletes the library called _library-name_ and all functions in it.
- If the library doesn't exist, the server returns an error.
- For more information please refer to [Introduction to Redis Functions]().
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|

## FUNCTION DUMP
Source file: `raw/sources/20260409-docs-latest-commands-function-dump-39b2793dd4.md`
- You can restore the serialized payload later with the [`FUNCTION RESTORE`]() command.
- For more information please refer to [Introduction to Redis Functions]().
- The following example shows how to dump loaded libraries using `FUNCTION DUMP` and then it calls [`FUNCTION FLUSH`]() deletes all the libraries.
- Then, it restores the original libraries from the serialized payload with [`FUNCTION RESTORE`]().
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |

## FUNCTION FLUSH
Source file: `raw/sources/20260409-docs-latest-commands-function-flush-25ff25ce6e.md`
- Unless called with the optional mode argument, the `lazyfree-lazy-user-flush` configuration directive sets the effective behavior. Valid modes are:
- * `ASYNC`: Asynchronously flush the libraries.
- * `SYNC`: Synchronously flush the libraries.
- For more information please refer to [Introduction to Redis Functions]().
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |

## FUNCTION HELP
Source file: `raw/sources/20260409-docs-latest-commands-function-help-c8c45d202e.md`
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |
- [Array reply](../../develop/reference/protocol-spec#arrays): a list of sub-commands and their descriptions
- [Array reply](../../develop/reference/protocol-spec#arrays): a list of sub-commands and their descriptions.

## FUNCTION KILL
Source file: `raw/sources/20260409-docs-latest-commands-function-kill-b43ccea7e7.md`
- The `FUNCTION KILL` command can be used only on functions that did not modify the dataset during their execution (since stopping a read-only function does not violate the scripting engine's guaranteed atomicity).
- For more information please refer to [Introduction to Redis Functions]().
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |

## FUNCTION LIST
Source file: `raw/sources/20260409-docs-latest-commands-function-list-b902fb5c1d.md`
- You can use the optional `LIBRARYNAME` argument to specify a pattern for matching library names.
- The optional `WITHCODE` modifier will cause the server to include the libraries source implementation in the reply.
- The following information is provided for each of the libraries in the response:
- * **library_name:** the name of the library.
- * **engine:** the engine of the library.

## FUNCTION LOAD
Source file: `raw/sources/20260409-docs-latest-commands-function-load-1389275e67.md`
- The command's gets a single mandatory parameter which is the source code that implements the library.
- The library payload must start with Shebang statement that provides a metadata about the library (like the engine to use and the library name).
- Shebang format: `#!<engine name> name=<library name>`. Currently engine name must be `lua`.
- For the Lua engine, the implementation should declare one or more entry points to the library with the [`redis.register_function()` API]().
- Once loaded, you can call the functions in the library with the [`FCALL`]() (or [`FCALL_RO`]() when applicable) command.

## FUNCTION RESTORE
Source file: `raw/sources/20260409-docs-latest-commands-function-restore-c07965c229.md`
- You can use the optional _policy_ argument to provide a policy for handling existing libraries.
- * **APPEND:** appends the restored libraries to the existing libraries and aborts on collision.
- * **FLUSH:** deletes all existing libraries before restoring the payload.
- * **REPLACE:** appends the restored libraries to the existing libraries, replacing any existing ones in case of name collisions. Note that this policy doesn't prevent function name collisions, only libraries.
- For more information please refer to [Introduction to Redis Functions]().

## FUNCTION STATS
Source file: `raw/sources/20260409-docs-latest-commands-function-stats-4f80f2ef73.md`
- 1. `running_script`: information about the running script.
- If there's no in-flight function, the server replies with a _nil_.
- Otherwise, this is a map with the following keys:
- * **command:** the command and arguments used for invoking the function.
- * **duration_ms:** the function's runtime duration in milliseconds.

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

## GEOHASH
Source file: `raw/sources/20260409-docs-latest-commands-geohash-e09c72cefe.md`
- Normally Redis represents positions of elements using a variation of the Geohash
- technique where positions are encoded using 52 bit integers. The encoding is
- also different compared to the standard because the initial min and max
- coordinates used during the encoding and decoding process are different. This
- command however **returns a standard Geohash** in the form of a string as

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

## GEORADIUS_RO
Source file: `raw/sources/20260409-docs-latest-commands-georadius-ro-cd06cbbdb0.md`
- This command is identical to the [`GEORADIUS`]() command, except that it doesn't support the optional `STORE` and `STOREDIST` parameters.
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | Deprecated as of Redis v6.2.0. |
- * If no `WITH*` option is specified, an [Array reply](../../develop/reference/protocol-spec#arrays) of matched member names

## GEORADIUSBYMEMBER
Source file: `raw/sources/20260409-docs-latest-commands-georadiusbymember-34fb2ce849.md`
- This command's behavior varies in clustered Redis environments. See the [multi-key operations]() page for more information.
- This command is exactly like [`GEORADIUS`]() with the sole difference that instead
- of taking, as the center of the area to query, a longitude and latitude value, it takes the name of a member already existing inside the geospatial index represented by the sorted set.
- The position of the specified member is used as the center of the query.
- Please check the example below and the [`GEORADIUS`]() documentation for more information about the command and its options.

## GEORADIUSBYMEMBER_RO
Source file: `raw/sources/20260409-docs-latest-commands-georadiusbymember-ro-ed274ac4d4.md`
- This command is identical to the [`GEORADIUSBYMEMBER`]() command, except that it doesn't support the optional `STORE` and `STOREDIST` parameters.
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | Deprecated as of Redis v6.2.0. |
- * If no `WITH*` option is specified, an [Array reply](../../develop/reference/protocol-spec#arrays) of matched member names

## GEOSEARCH
Source file: `raw/sources/20260409-docs-latest-commands-geosearch-28d1b7b43c.md`
- This command should be used in place of the deprecated [`GEORADIUS`]() and [`GEORADIUSBYMEMBER`]() commands.
- The query's center point is provided by one of these mandatory options:
- * `FROMMEMBER`: Use the position of the given existing `<member>` in the sorted set.
- * `FROMLONLAT`: Use the given `<longitude>` and `<latitude>` position.
- The query's shape is provided by one of these mandatory options:

## GEOSEARCHSTORE
Source file: `raw/sources/20260409-docs-latest-commands-geosearchstore-ab75e1df8b.md`
- This command's behavior varies in clustered Redis environments. See the [multi-key operations]() page for more information.
- This command is like [`GEOSEARCH`](), but stores the result in destination key.
- This command replaces the now deprecated [`GEORADIUS`]() and [`GEORADIUSBYMEMBER`]().
- By default, it stores the results in the `destination` sorted set with their geospatial information.
- When using the `STOREDIST` option, the command stores the items in a sorted set populated with their distance from the center of the circle or box, as a floating-point number, in the same unit specified for that shape.

## GET
Source file: `raw/sources/20260409-docs-latest-commands-get-d236f38e8a.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- If the key does not exist the special value `nil` is returned.
- An error is returned if the value stored at `key` is not a string, because `GET`
- Foundational: Retrieve the string value of a key using GET (returns nil if key doesn't exist)

## GETBIT
Source file: `raw/sources/20260409-docs-latest-commands-getbit-e37b3dcaa4.md`
- When _offset_ is beyond the string length, the string is assumed to be a
- When _key_ does not exist it is assumed to be an empty string, so _offset_ is
- always out of range and the value is also assumed to be a contiguous space with
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|

## GETDEL
Source file: `raw/sources/20260409-docs-latest-commands-getdel-9a24d5758d.md`
- This command is similar to [`GET`](), except for the fact that it also deletes the key on success (if and only if the key's value type is a string).
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |
- * [Bulk string reply](../../develop/reference/protocol-spec#bulk-strings): the value of the key.

## GETEX
Source file: `raw/sources/20260409-docs-latest-commands-getex-99285f3352.md`
- The `GETEX` command supports a set of options that modify its behavior:
- * `EX` *seconds* -- Set the specified expire time, in seconds.
- * `PX` *milliseconds* -- Set the specified expire time, in milliseconds.
- * `EXAT` *timestamp-seconds* -- Set the specified Unix time at which the key will expire, in seconds.
- * `PXAT` *timestamp-milliseconds* -- Set the specified Unix time at which the key will expire, in milliseconds.

## GETRANGE
Source file: `raw/sources/20260409-docs-latest-commands-getrange-a4073522e5.md`
- offsets `start` and `end` (both are inclusive).
- Negative offsets can be used in order to provide an offset starting from the end
- So -1 means the last character, -2 the penultimate and so forth.
- The function handles out of range requests by limiting the resulting range to
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |

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

## HEXISTS
Source file: `raw/sources/20260409-docs-latest-commands-hexists-8233a23c57.md`
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |
- * [Integer reply](../../develop/reference/protocol-spec#integers): `0` if the hash does not contain the field, or the key does not exist.
- * [Integer reply](../../develop/reference/protocol-spec#integers): `1` if the hash contains the field.

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

## HEXPIRETIME
Source file: `raw/sources/20260409-docs-latest-commands-hexpiretime-9c69e82a99.md`
- See also the [`HPEXPIRETIME`]() command, which returns the same information with millisecond resolution.
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |
- * [Array reply](../../develop/reference/protocol-spec#arrays). For each field:

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

## HGETDEL
Source file: `raw/sources/20260409-docs-latest-commands-hgetdel-3eacf3e7c1.md`
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |
- [Array reply](../../develop/reference/protocol-spec#arrays): a list of deleted fields and their values or `nil` for fields that do not exist.
- [Array reply](../../develop/reference/protocol-spec#arrays): a list of deleted fields and their values or `nil` for fields that do not exist.

## HGETEX
Source file: `raw/sources/20260409-docs-latest-commands-hgetex-3ae0629d7a.md`
- Get the value of one or more fields of a given hash key and optionally set their expiration time or time-to-live (TTL).
- The `HGETEX` command supports a set of options:
- * `EX seconds` -- Set the specified expiration time, in seconds.
- * `PX milliseconds` -- Set the specified expiration time, in milliseconds.
- * `EXAT unix-time-seconds` -- Set the specified Unix time at which the fields will expire, in seconds.

## HINCRBY
Source file: `raw/sources/20260409-docs-latest-commands-hincrby-ce734b0a80.md`
- If `key` does not exist, a new key holding a hash is created.
- If `field` does not exist the value is set to `0` before the operation is
- The range of values supported by `HINCRBY` is limited to 64 bit signed integers.
- Since the `increment` argument is signed, both increment and decrement
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |

## HINCRBYFLOAT
Source file: `raw/sources/20260409-docs-latest-commands-hincrbyfloat-8add4f30a5.md`
- floating point number, by the specified `increment`. If the increment value
- is negative, the result is to have the hash field value **decremented** instead of incremented.
- If the field does not exist, it is set to `0` before performing the operation.
- An error is returned if one of the following conditions occur:
- * The key contains a value of the wrong type (not a hash).

## HKEYS
Source file: `raw/sources/20260409-docs-latest-commands-hkeys-866ee2441d.md`
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |
- [Array reply](../../develop/reference/protocol-spec#arrays): a list of fields in the hash, or an empty list when the key does not exist
- [Array reply](../../develop/reference/protocol-spec#arrays): a list of fields in the hash, or an empty list when the key does not exist.

## HLEN
Source file: `raw/sources/20260409-docs-latest-commands-hlen-7344db0c1f.md`
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |
- [Integer reply](../../develop/reference/protocol-spec#integers): the number of fields in the hash, or 0 when the key does not exist.
- [Integer reply](../../develop/reference/protocol-spec#integers): the number of the fields in the hash, or 0 when the key does not exist.

## HMGET
Source file: `raw/sources/20260409-docs-latest-commands-hmget-aa54db420b.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- Returns the values associated with the specified `fields` in the hash stored at
- For every `field` that does not exist in the hash, a `nil` value is returned.
- Because non-existing keys are treated as empty hashes, running `HMGET` against

## HMSET
Source file: `raw/sources/20260409-docs-latest-commands-hmset-fa8a486614.md`
- This command overwrites any specified fields already existing in the hash.
- If `key` does not exist, a new key holding a hash is created.
- HMSET myhash field1 "Hello" field2 "World"
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|

## HOTKEYS
Source file: `raw/sources/20260409-docs-latest-commands-hotkeys-06890f5444.md`
- This is a container command for hotkeys tracking commands that provides a method for identifying hotkeys inside a Redis server during a specified tracking time period.
- Hotkeys in this context are defined by two metrics:
- * Percentage of CPU time spent on the key from the total time during the tracking period.
- * Percentage of network bytes (input + output) used for the key from the total network bytes used by Redis during the tracking period.
- The general workflow is for the user to initiate a hotkeys tracking process which should run for some time. The keys' metrics are recorded inside a probabilistic data structure, after which the user is able to fetch the top K metrics.

## HOTKEYS GET
Source file: `raw/sources/20260409-docs-latest-commands-hotkeys-get-39f72b7c9d.md`
- This command returns comprehensive information about the hotkeys tracking session, including:
- The following metrics are collected for non-clustered as well as clustered Redis environments:
- The following additional results are collected only on clustered Redis environments, when `SLOTS` was used with `HOTKEYS START`:
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|

## HOTKEYS HELP
Source file: `raw/sources/20260409-docs-latest-commands-hotkeys-help-15a17f12fb.md`
- Returns helpful text about `HOTKEYS` commands and parameters.
- Returns an [array reply]() with the list of `HOTKEYS` subcommands and their descriptions.
- Returns an [array reply]() with the list of `HOTKEYS` subcommands and their descriptions.

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

## HPERSIST
Source file: `raw/sources/20260409-docs-latest-commands-hpersist-e9c8fbd3d9.md`
- with expiration set) to _persistent_ (a field that will never expire as no TTL (time to live)
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |
- * [Array reply](../../develop/reference/protocol-spec#arrays). For each field:

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

## HPEXPIRETIME
Source file: `raw/sources/20260409-docs-latest-commands-hpexpiretime-13a5a0b8a6.md`
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |
- * [Array reply](../../develop/reference/protocol-spec#arrays). For each field:
- * [Array reply](../../develop/reference/protocol-spec#arrays). For each field:

## HPTTL
Source file: `raw/sources/20260409-docs-latest-commands-hpttl-95e0ee1319.md`
- expiration set, but in milliseconds instead of seconds.
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |
- * [Array reply](../../develop/reference/protocol-spec#arrays). For each field:

## HRANDFIELD
Source file: `raw/sources/20260409-docs-latest-commands-hrandfield-18274d8524.md`
- If the provided `count` argument is positive, return an array of **distinct fields**.
- The array's length is either `count` or the hash's number of fields ([`HLEN`]()), whichever is lower.
- If called with a negative `count`, the behavior changes and the command is allowed to return the **same field multiple times**.
- In this case, the number of returned fields is the absolute value of the specified `count`.
- The optional `WITHVALUES` modifier changes the reply so it includes the respective values of the randomly selected hash fields.

## HSCAN
Source file: `raw/sources/20260409-docs-latest-commands-hscan-992a393dc2.md`
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |
- [Array reply](../../develop/reference/protocol-spec#arrays): a two-element array.
- * The first element is a [Bulk string reply](../../develop/reference/protocol-spec#bulk-strings) that represents an unsigned 64-bit number, the cursor.

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

## HSETNX
Source file: `raw/sources/20260409-docs-latest-commands-hsetnx-8455c58cc7.md`
- If `key` does not exist, a new key holding a hash is created.
- If `field` already exists, this operation has no effect.
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |

## HSTRLEN
Source file: `raw/sources/20260409-docs-latest-commands-hstrlen-8fc0c88533.md`
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |
- [Integer reply](../../develop/reference/protocol-spec#integers): the string length of the value associated with the _field_, or zero when the _field_ isn't present in the hash or the _key_ doesn't exist at all.
- [Integer reply](../../develop/reference/protocol-spec#integers): the string length of the value associated with the _field_, or zero when the _field_ isn't present in the hash or the _key_ doesn't exist at all.

## HTTL
Source file: `raw/sources/20260409-docs-latest-commands-httl-4eadcd1264.md`
- This introspection capability allows you to check how many seconds a
- given hash field will continue to be part of the hash key.
- See also the [`HPTTL`]() command that returns the same information with millisecond resolution.
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|

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

## JSON.ARRAPPEND
Source file: `raw/sources/20260409-docs-latest-commands-json-arrappend-92cb873eba.md`
- <details open><summary><code>key</code></summary>
- <details open><summary><code>path</code></summary>
- <details open><summary><code>value</code></summary>
- is one or more values to append to one or more arrays.
- To specify a string as an array value to append, wrap the quoted string with an additional set of single quotes. Example: `'"silver"'`. For more detailed use, see [Examples](#examples).

## JSON.ARRINDEX
Source file: `raw/sources/20260409-docs-latest-commands-json-arrindex-f28a56f18a.md`
- <details open><summary><code>key</code></summary>
- <details open><summary><code>path</code></summary>
- <details open><summary><code>value</code></summary>
- is value to find its index in one or more arrays.
- To specify a string as an array value to index, wrap the quoted string with an additional set of single quotes. Example: `'"silver"'`. For more detailed use, see [Examples](#examples).

## JSON.ARRINSERT
Source file: `raw/sources/20260409-docs-latest-commands-json-arrinsert-f7bbd5e87c.md`
- <details open><summary><code>key</code></summary>
- <details open><summary><code>value</code></summary>
- is one or more values to insert in one or more arrays.
- To specify a string as an array value to insert, wrap the quoted string with an additional set of single quotes. Example: `'"silver"'`. For more detailed use, see [Examples](#examples).
- <details open><summary><code>index</code></summary>

## JSON.ARRLEN
Source file: `raw/sources/20260409-docs-latest-commands-json-arrlen-598125cf37.md`
- <details open><summary><code>key</code></summary>
- <details open><summary><code>path</code></summary>
- is JSONPath to specify. Default is root `$`, if not provided. Returns null if the `key` or `path` do not exist.
- <summary><b>Get lengths of JSON arrays in a document</b></summary>
- redis> JSON.SET item:2 $ '{"name":"Wireless earbuds","description":"Wireless Bluetooth in-ear headphones","connection":{"wireless":true,"type":"Bluetooth"},"price":64.99,"stock":17,"colors":["black","white"], "max_level":[80, 100, 120]}'

## JSON.ARRPOP
Source file: `raw/sources/20260409-docs-latest-commands-json-arrpop-15e3c8e7fb.md`
- <details open><summary><code>key</code></summary>
- <details open><summary><code>index</code></summary>
- is position in the array to start popping from. Default is `-1`, meaning the last element. Out-of-range indexes round to their respective array ends. Popping an empty array returns null.
- <details open><summary><code>path</code></summary>
- is JSONPath to specify. Default is root `$`.

## JSON.ARRTRIM
Source file: `raw/sources/20260409-docs-latest-commands-json-arrtrim-55bdde560a.md`
- <details open><summary><code>key</code></summary>
- <details open><summary><code>path</code></summary>
- is JSONPath to specify. Default is root `$`.
- <details open><summary><code>start</code></summary>
- is index of the first element to keep (previous elements are trimmed). Default is 0.

## JSON.CLEAR
Source file: `raw/sources/20260409-docs-latest-commands-json-clear-835437768e.md`
- <details open><summary><code>key</code></summary>
- <details open><summary><code>path</code></summary>
- is JSONPath to specify. Default is root `$`. Nonexisting paths are ignored.
- Already cleared values are ignored for empty containers and zero numbers.
- <summary><b>Clear container values and set numeric values to <code>0</code></b></summary>

## JSON.DEBUG MEMORY
Source file: `raw/sources/20260409-docs-latest-commands-json-debug-memory-a195642b36.md`
- The actual total memory consumption by a key could be much lower than the value reported by this command because of an internal JSON string reuse mechanism. For more information, see the [JSON memory usage page]().
- <details open><summary><code>key</code></summary>
- <details open><summary><code>path</code></summary>
- is JSONPath to specify. Default is root `$`.
- <summary><b>Report a value's memory usage in bytes</b></summary>

## JSON.DEL
Source file: `raw/sources/20260409-docs-latest-commands-json-del-7aab61b3b4.md`
- <details open><summary><code>key</code></summary>
- <details open><summary><code>path</code></summary>
- is JSONPath to specify. Default is root `$`. Nonexisting paths are ignored.
- Deleting an object's root is equivalent to deleting the key from Redis.
- <summary><b>Delete a value</b></summary>

## JSON.FORGET
Source file: `raw/sources/20260409-docs-latest-commands-json-forget-48625c297c.md`
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Supported">&#x2705; Supported</span><br /> | <span title="Supported">&#x2705; Flexible & Annual</span><br /><span title="Supported">&#x2705; Free & Fixed</nobr></span> |  |

## JSON.GET
Source file: `raw/sources/20260409-docs-latest-commands-json-get-fea4e775e2.md`
- <details open><summary><code>key</code></summary>
- <details open><summary><code>path</code></summary>
- is JSONPath to specify. Default is root `$`. JSON.GET accepts multiple `path` arguments.
- When using a single JSONPath, the root of the matching values is a JSON string with a top-level **array** of serialized JSON value.
- In contrast, a legacy path returns a single value.

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

## JSON.OBJLEN
Source file: `raw/sources/20260409-docs-latest-commands-json-objlen-04ea8d7127.md`
- <details open><summary><code>key</code></summary>
- is key to parse. Returns `null` for nonexistent keys.
- <details open><summary><code>path</code></summary>
- is JSONPath to specify. Default is root `$`. Returns `null` for nonexistant path.
- redis> JSON.SET doc $ '{"a":[3], "nested": {"a": {"b":2, "c": 1}}}'

## JSON.RESP
Source file: `raw/sources/20260409-docs-latest-commands-json-resp-2c10af422a.md`
- <details open><summary><code>key</code></summary>
- <details open><summary><code>path</code></summary>
- is JSONPath to specify. Default is root `$`. This command uses the following mapping from JSON to RESP:
- *   JSON `null` maps to the bulk string reply.
- *   JSON `false` and `true` values map to the simple string reply.

## JSON.SET
Source file: `raw/sources/20260409-docs-latest-commands-json-set-2bb2f0ff32.md`
- Set or replace the value at each location resolved by `path`.
- If the key does not exist, a new JSON document can be created only by setting the root path (`$` or `.`).
- <details open><summary><code>key</code></summary>
- is a new key to create or an existing JSON key to modify.
- <details open><summary><code>path</code></summary>

## JSON.STRAPPEND
Source file: `raw/sources/20260409-docs-latest-commands-json-strappend-cbedd96c17.md`
- <details open><summary><code>key</code></summary>
- <details open><summary><code>value</code></summary>
- is value to append to one or more strings.
- To specify a string as an array value to append, wrap the quoted string with an additional set of single quotes. Example: `'"silver"'`. For more detailed use, see [Examples](#examples).
- <details open><summary><code>path</code></summary>

## JSON.STRLEN
Source file: `raw/sources/20260409-docs-latest-commands-json-strlen-9096058433.md`
- <details open><summary><code>key</code></summary>
- <details open><summary><code>path</code></summary>
- is JSONPath to specify. Default is root `$`, if not provided. Returns null if the `key` or `path` do not exist.
- redis> JSON.SET doc $ '{"a":"foo", "nested": {"a": "hello"}, "nested2": {"a": 31}}'
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |

## JSON.TOGGLE
Source file: `raw/sources/20260409-docs-latest-commands-json-toggle-51ac5cd346.md`
- <details open><summary><code>key</code></summary>
- <details open><summary><code>path</code></summary>
- is JSONPath to specify. Default is root `$`.
- <summary><b>Toggle a Boolean value stored at <code>path</code></b></summary>
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |

## JSON.TYPE
Source file: `raw/sources/20260409-docs-latest-commands-json-type-9a4daec64c.md`
- <details open><summary><code>key</code></summary>
- <details open><summary><code>path</code></summary>
- is JSONPath to specify. Default is root `$`. Returns null if the `key` or `path` do not exist.
- redis> JSON.SET doc $ '{"a":2, "nested": {"a": true}, "foo": "bar"}'
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |

## KEYS
Source file: `raw/sources/20260409-docs-latest-commands-keys-5fb825df3c.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- This command's behavior varies in clustered Redis environments. See the [multi-key operations]() page for more information.
- While the time complexity for this operation is O(N), the constant times are
- For example, Redis running on an entry level laptop can scan a 1 million key

## LASTSAVE
Source file: `raw/sources/20260409-docs-latest-commands-lastsave-6df9096eb6.md`
- A client may check if a [`BGSAVE`]() command succeeded reading the `LASTSAVE` value,
- then issuing a [`BGSAVE`]() command and checking at regular intervals every N
- seconds if `LASTSAVE` changed. Redis considers the database saved successfully at startup.
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|

## LATENCY
Source file: `raw/sources/20260409-docs-latest-commands-latency-2ed99a829b.md`
- To see the list of available commands you can call [`LATENCY HELP`]().

## LATENCY DOCTOR
Source file: `raw/sources/20260409-docs-latest-commands-latency-doctor-f7ca231dcd.md`
- This command is the most powerful analysis tool in the latency monitoring
- framework, and is able to provide additional statistical data like the average
- period between latency spikes, the median deviation, and a human-readable
- analysis of the event. For certain events, like `fork`, additional information
- is provided, like the rate at which the system forks processes.

## LATENCY GRAPH
Source file: `raw/sources/20260409-docs-latest-commands-latency-graph-8bb7cdd4bc.md`
- The vertical labels under each graph column represent the amount of seconds,
- minutes, hours or days ago the event happened. For example "15s" means that the
- first graphed event happened 15 seconds ago.
- The graph is normalized in the min-max scale so that the zero (the underscore
- in the lower row) is the minimum, and a # in the higher row is the maximum.

## LATENCY HELP
Source file: `raw/sources/20260409-docs-latest-commands-latency-help-ae76d1179b.md`
- For more information refer to the [Latency Monitoring Framework page][lm].
- [lm]: /operate/oss_and_stack/management/optimization/latency-monitor.md
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Not supported">&#x274c; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> | <span title="Not supported">&#x274c; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> |  |

## LATENCY HISTOGRAM
Source file: `raw/sources/20260409-docs-latest-commands-latency-histogram-b6ac2f3840.md`
- By default, all available latency histograms are returned.
- You can filter the reply by providing specific command names.
- Each histogram consists of the following fields:
- * Each bucket represents a latency range
- * Each bucket covers twice the previous bucket's range

## LATENCY HISTORY
Source file: `raw/sources/20260409-docs-latest-commands-latency-history-a332594e60.md`
- This is useful to an application that wants to fetch raw data in order to perform monitoring, display graphs, and so forth.
- The command will return up to 160 timestamp-latency pairs for the `event`.
- For more information refer to the [Latency Monitoring Framework page][lm].
- [lm]: /operate/oss_and_stack/management/optimization/latency-monitor.md
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |

## LATENCY LATEST
Source file: `raw/sources/20260409-docs-latest-commands-latency-latest-fe01e94491.md`
- Each reported event has the following fields:
- * Unix timestamp of the latest latency spike for the event.
- * All-time maximum latency for this event.
- "All-time" means the maximum latency since the Redis instance was
- started, or the time that events were reset [`LATENCY RESET`]().

## LATENCY RESET
Source file: `raw/sources/20260409-docs-latest-commands-latency-reset-42e004f25e.md`
- When the command is called without arguments, it resets all the
- events, discarding the currently logged latency spike events, and resetting
- It is possible to reset only specific events by providing the `event` names
- For more information refer to the [Latency Monitoring Framework page][lm].
- [lm]: /operate/oss_and_stack/management/optimization/latency-monitor.md

## LCS
Source file: `raw/sources/20260409-docs-latest-commands-lcs-92aba76a70.md`
- The LCS command implements the longest common subsequence algorithm. Note that this is different than the longest common string algorithm, since matching characters in the string does not need to be contiguous.
- For instance the LCS between "foo" and "fao" is "fo", since scanning the two strings from left to right, the longest common set of characters is composed of the first "f" and then the "o".
- LCS is very useful in order to evaluate how similar two strings are. Strings can represent many things. For instance if two strings are DNA sequences, the LCS will provide a measure of similarity between the two DNA sequences. If the strings represent some text edited by some user, the LCS could represent how different the new text is compared to the old one, and so forth.
- Note that this algorithm runs in `O(N*M)` time, where N is the length of the first string and M is the length of the second string. So either spin a different Redis instance in order to run this algorithm, or make sure to run it against very small strings.
- Sometimes we need just the length of the match:

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

## LMOVE
Source file: `raw/sources/20260409-docs-latest-commands-lmove-7474e5e3e6.md`
- This command's behavior varies in clustered Redis environments. See the [multi-key operations]() page for more information.
- Atomically returns and removes the first/last element (head/tail depending on
- the `wherefrom` argument) of the list stored at `source`, and pushes the
- element at the first/last element (head/tail depending on the `whereto`
- argument) of the list stored at `destination`.

## LMPOP
Source file: `raw/sources/20260409-docs-latest-commands-lmpop-df844f316e.md`
- This command's behavior varies in clustered Redis environments. See the [multi-key operations]() page for more information.
- Pops one or more elements from the first non-empty list key from the list of provided key names.
- See [`BLMPOP`]() for the blocking variant of this command.
- Elements are popped from either the left or right of the first non-empty list based on the passed argument.
- The number of returned elements is limited to the lower between the non-empty list's length, and the count argument (which defaults to 1).

## LOLWUT
Source file: `raw/sources/20260409-docs-latest-commands-lolwut-e2dd8d6d4f.md`
- doing so, it also creates a piece of generative computer art that is different
- with each version of Redis. The command was introduced in Redis 5 and announced
- with this [blog post](http://antirez.com/news/123).
- By default the `LOLWUT` command will display the piece corresponding to the
- current Redis version, however it is possible to display a specific version

## LPOP
Source file: `raw/sources/20260409-docs-latest-commands-lpop-b8d4a5e749.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- Removes and returns the first elements of the list stored at `key`.
- By default, the command pops a single element from the beginning of the list.
- When provided with the optional `count` argument, the reply will consist of up

## LPOS
Source file: `raw/sources/20260409-docs-latest-commands-lpos-12e2a6f4b9.md`
- By default, when no options are given, it will scan the list from head to tail,
- looking for the first match of "element". If the element is found, its index (the zero-based position in the list) is returned. Otherwise, if no match is found, `nil` is returned.
- The optional arguments and options can modify the command's behavior.
- The `RANK` option specifies the "rank" of the first element to return, in case there are multiple matches. A rank of 1 means to return the first match, 2 to return the second match, and so forth.
- For instance, in the above example the element "c" is present multiple times, if I want the index of the second match, I'll write:

## LPUSH
Source file: `raw/sources/20260409-docs-latest-commands-lpush-0a15d8ca33.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- Insert all the specified values at the head of the list stored at `key`.
- If `key` does not exist, it is created as empty list before performing the push
- When `key` holds a value that is not a list, an error is returned.

## LPUSHX
Source file: `raw/sources/20260409-docs-latest-commands-lpushx-d21fe6d28b.md`
- In contrary to [`LPUSH`](), no operation will be performed when `key` does not yet
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |
- [Integer reply](../../develop/reference/protocol-spec#integers): the length of the list after the push operation.

## LRANGE
Source file: `raw/sources/20260409-docs-latest-commands-lrange-ab9b4cfbfb.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- Returns the specified elements of the list stored at `key`.
- The offsets `start` and `stop` are zero-based indexes, with `0` being the first
- element of the list (the head of the list), `1` being the next element and so

## LREM
Source file: `raw/sources/20260409-docs-latest-commands-lrem-31b7e9d62f.md`
- The `count` argument influences the operation in the following ways:
- * `count > 0`: Remove elements equal to `element` moving from head to tail.
- * `count < 0`: Remove elements equal to `element` moving from tail to head.
- * `count = 0`: Remove all elements equal to `element`.
- For example, `LREM list -2 "hello"` will remove the last two occurrences of

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

## MEMORY
Source file: `raw/sources/20260409-docs-latest-commands-memory-39fddc5cd5.md`
- To see the list of available commands you can call [`MEMORY HELP`]().

## MEMORY DOCTOR
Source file: `raw/sources/20260409-docs-latest-commands-memory-doctor-834ef7958a.md`
- the Redis server experiences, and advises about possible remedies.
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Not supported">&#x274c; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> | <span title="Not supported">&#x274c; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> |  |
- [Bulk string reply](../../develop/reference/protocol-spec#bulk-strings): a memory problems report.

## MEMORY HELP
Source file: `raw/sources/20260409-docs-latest-commands-memory-help-d6bf543e18.md`
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | Not supported for [scripts]() in Redis versions earlier than 7. |
- [Array reply](../../develop/reference/protocol-spec#arrays): a list of sub-commands and their descriptions
- [Array reply](../../develop/reference/protocol-spec#arrays): a list of sub-commands and their descriptions.

## MEMORY MALLOC-STATS
Source file: `raw/sources/20260409-docs-latest-commands-memory-malloc-stats-74ed94b4ed.md`
- This command is currently implemented only when using **jemalloc** as an
- allocator, and evaluates to a benign NOOP for all others.
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Not supported">&#x274c; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> | <span title="Not supported">&#x274c; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> |  |

## MEMORY PURGE
Source file: `raw/sources/20260409-docs-latest-commands-memory-purge-8a76c7f874.md`
- This command is currently implemented only when using **jemalloc** as an
- allocator, and evaluates to a benign NOOP for all others.
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Not supported">&#x274c; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> | <span title="Not supported">&#x274c; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> |  |

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

## MIGRATE
Source file: `raw/sources/20260409-docs-latest-commands-migrate-f595b03f39.md`
- On success the key is deleted from the original instance and is guaranteed to
- The command is atomic and blocks the two instances for the time required to
- transfer the key, at any given time the key will appear to exist in a given
- instance or in the other instance, unless a timeout error occurs. In 3.2 and
- above, multiple keys can be pipelined in a single call to `MIGRATE` by passing

## MODULE
Source file: `raw/sources/20260409-docs-latest-commands-module-7cd36b8c6e.md`
- To see the list of available commands you can call [`MODULE HELP`]().

## MODULE HELP
Source file: `raw/sources/20260409-docs-latest-commands-module-help-30c4cf39a2.md`
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Not supported">&#x274c; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> | <span title="Not supported">&#x274c; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> |  |
- [Array reply](../../develop/reference/protocol-spec#arrays): a list of sub-commands and their descriptions.
- [Array reply](../../develop/reference/protocol-spec#arrays): a list of sub-commands and their descriptions

## MODULE LIST
Source file: `raw/sources/20260409-docs-latest-commands-module-list-d902c66643.md`
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |
- [Array reply](../../develop/reference/protocol-spec#arrays): list of loaded modules. Each element in the list represents a represents a module, and is in itself a list of property names and their values. The following properties is reported for each loaded module:
- [Array reply](../../develop/reference/protocol-spec#arrays): list of loaded modules. Each element in the list represents a represents a module, and is a [Map reply](../../develop/reference/protocol-spec#maps) of property names and their values. The following properties is reported for each loaded module:

## MODULE LOAD
Source file: `raw/sources/20260409-docs-latest-commands-module-load-3b7bc12934.md`
- This command loads and initializes the Redis module from the dynamic library
- specified by the `path` argument. The `path` should be the absolute path of the
- library, including the full filename. Any additional arguments are passed
- **Note**: modules can also be loaded at server startup with `loadmodule`
- configuration directive in `redis.conf`.

## MODULE LOADEX
Source file: `raw/sources/20260409-docs-latest-commands-module-loadex-f4121b43e2.md`
- This is an extended version of the [`MODULE LOAD`]() command.
- It loads and initializes the Redis module from the dynamic library specified by the `path` argument. The `path` should be the absolute path of the library, including the full filename.
- You can use the optional `CONFIG` argument to provide the module with configuration directives.
- Any additional arguments that follow the `ARGS` keyword are passed unmodified to the module.
- **Note**: modules can also be loaded at server startup with `loadmodule`

## MODULE UNLOAD
Source file: `raw/sources/20260409-docs-latest-commands-module-unload-f13b73cedb.md`
- This command unloads the module specified by `name`. Note that the module's name
- is reported by the [`MODULE LIST`]() command, and may differ from the dynamic
- *   Modules that register custom data types can not be unloaded.
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|

## MONITOR
Source file: `raw/sources/20260409-docs-latest-commands-monitor-9e51c9d60f.md`
- It can help in understanding what is happening to the database.
- This command can both be used via `redis-cli` and via `telnet`.
- The ability to see all the requests processed by the server is useful in order
- to spot bugs in an application both when using Redis as a database and as a
- Use `SIGINT` (Ctrl-C) to stop a `MONITOR` stream running via `redis-cli`.

## MOVE
Source file: `raw/sources/20260409-docs-latest-commands-move-518be95cbf.md`
- When `key` already exists in the destination database, or it does not exist in
- It is possible to use `MOVE` as a locking primitive because of this.
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Not supported">&#x274c; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> | <span title="Not supported">&#x274c; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> | Redis Software does not support shared databases due to potential negative performance impacts and blocks any related commands. |

## MSET
Source file: `raw/sources/20260409-docs-latest-commands-mset-c35cfafb31.md`
- This command's behavior varies in clustered Redis environments. See the [multi-key operations]() page for more information.
- Sets the given keys to their respective values.
- See [`MSETNX`]() if you don't want to overwrite existing values.
- It is not possible for clients to see that some of the keys were updated while
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |

## MSETEX
Source file: `raw/sources/20260409-docs-latest-commands-msetex-5df4e093d7.md`
- <details open><summary><code>numkeys</code></summary>
- <details open><summary><code>key value [key value ...]</code></summary>
- <details open><summary><code>condition and expiration flags</code></summary>
- The `MSETEX` command supports a set of options that modify its behavior:
- * `NX` -- Set the keys and their expiration time only if none of the specified keys exist.

## MSETNX
Source file: `raw/sources/20260409-docs-latest-commands-msetnx-653fc0a9b9.md`
- This command's behavior varies in clustered Redis environments. See the [multi-key operations]() page for more information.
- Sets the given keys to their respective values.
- Because of this semantic `MSETNX` can be used in order to set different keys
- representing different fields of a unique logic object in a way that ensures
- that either all the fields or none at all are set.

## MULTI
Source file: `raw/sources/20260409-docs-latest-commands-multi-073c22dbac.md`
- This command's behavior varies in clustered Redis environments. See the [multi-key operations]() page for more information.
- Marks the start of a [transaction][tt] block.
- Subsequent commands will be queued for atomic execution using [`EXEC`]().
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|

## OBJECT
Source file: `raw/sources/20260409-docs-latest-commands-object-e614beda5f.md`
- To see the list of available commands you can call [`OBJECT HELP`]().

## OBJECT ENCODING
Source file: `raw/sources/20260409-docs-latest-commands-object-encoding-b04c54767a.md`
- Redis objects can be encoded in different ways:
- All the specially encoded types are automatically converted to the general type once you perform an operation that makes it impossible for Redis to retain the space saving encoding.
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Supported">&#x2705; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> | For Active-Active databases, use `CRDT.DEBUG ENCODING` instead. |

## OBJECT FREQ
Source file: `raw/sources/20260409-docs-latest-commands-object-freq-ef275acd3c.md`
- The command is only available when the `maxmemory-policy` configuration directive is set to one of the LFU policies.
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |
- [Integer reply](../../develop/reference/protocol-spec#integers): the counter's value.

## OBJECT HELP
Source file: `raw/sources/20260409-docs-latest-commands-object-help-81f6f4d600.md`
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Not supported">&#x274c; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> | <span title="Not supported">&#x274c; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> |  |
- [Array reply](../../develop/reference/protocol-spec#arrays): a list of sub-commands and their descriptions
- [Array reply](../../develop/reference/protocol-spec#arrays): a list of sub-commands and their descriptions.

## OBJECT IDLETIME
Source file: `raw/sources/20260409-docs-latest-commands-object-idletime-cf9ab14ec1.md`
- The command is only available when the `maxmemory-policy` configuration directive is not set to one of the LFU policies.
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |
- [Integer reply](../../develop/reference/protocol-spec#integers): the idle time in seconds.

## OBJECT REFCOUNT
Source file: `raw/sources/20260409-docs-latest-commands-object-refcount-585f64eea4.md`
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |
- [Integer reply](../../develop/reference/protocol-spec#integers): the number of references.
- [Nil reply](../../develop/reference/protocol-spec#bulk-strings): if _key_ doesn't exist.

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

## PEXPIRETIME
Source file: `raw/sources/20260409-docs-latest-commands-pexpiretime-a682c2f1f5.md`
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |
- * [Integer reply](../../develop/reference/protocol-spec#integers): Expiration Unix timestamp in milliseconds.
- * [Integer reply](../../develop/reference/protocol-spec#integers): `-1` if the key exists but has no associated expiration time.

## PFADD
Source file: `raw/sources/20260409-docs-latest-commands-pfadd-81b6295462.md`
- As a side effect of this command the HyperLogLog internals may be updated to reflect a different estimation of the number of unique items added so far (the cardinality of the set).
- If the approximated cardinality estimated by the HyperLogLog changed after executing the command, `PFADD` returns 1, otherwise 0 is returned. The command automatically creates an empty HyperLogLog structure (that is, a Redis String of a specified length and with a given encoding) if the specified key does not exist.
- To call the command without elements but just the variable name is valid, this will result into no operation performed if the variable already exists, or just the creation of the data structure if the key does not exist (in the latter case 1 is returned).
- For an introduction to HyperLogLog data structure check the [`PFCOUNT`]() command page.
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |

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

## PFMERGE
Source file: `raw/sources/20260409-docs-latest-commands-pfmerge-9100d51e2a.md`
- This command's behavior varies in clustered Redis environments. See the [multi-key operations]() page for more information.
- Merge multiple HyperLogLog values into a unique value that will approximate
- the cardinality of the union of the observed Sets of the source HyperLogLog
- The computed merged HyperLogLog is set to the destination variable, which is
- created if does not exist (defaulting to an empty HyperLogLog).

## PFSELFTEST
Source file: `raw/sources/20260409-docs-latest-commands-pfselftest-7f9e928e83.md`
- It is meant to be used for developing and testing Redis.
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Not supported">&#x274c; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> | <span title="Not supported">&#x274c; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> |  |
- [Simple string reply](../../develop/reference/protocol-spec#simple-strings): `OK`.

## PING
Source file: `raw/sources/20260409-docs-latest-commands-ping-3d163cd425.md`
- 1. Testing whether a connection is still alive.
- 1. Verifying the server's ability to serve data - an error is returned when this isn't the case (e.g., during load from persistence or accessing a stale replica).
- If the client is subscribed to a channel or a pattern, it will instead return a
- multi-bulk with a "pong" in the first position and an empty bulk in the second
- position, unless an argument is provided in which case it returns a copy

## PSETEX
Source file: `raw/sources/20260409-docs-latest-commands-psetex-c2394fc3b1.md`
- time is specified in milliseconds instead of seconds.
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |
- [Simple string reply](../../develop/reference/protocol-spec#simple-strings): `OK`.

## PSUBSCRIBE
Source file: `raw/sources/20260409-docs-latest-commands-psubscribe-f1b3aec6a0.md`
- * `h?llo` subscribes to `hello`, `hallo` and `hxllo`
- * `h*llo` subscribes to `hllo` and `heeeello`
- * `h[ae]llo` subscribes to `hello` and `hallo,` but not `hillo`
- Use `\` to escape special characters if you want to match them verbatim.
- Once the client enters the subscribed state it is not supposed to issue any other commands, except for additional [`SUBSCRIBE`](), [`SSUBSCRIBE`](), `PSUBSCRIBE`, [`UNSUBSCRIBE`](), [`SUNSUBSCRIBE`](), [`PUNSUBSCRIBE`](), [`PING`](), [`RESET`]() and [`QUIT`]() commands.

## PSYNC
Source file: `raw/sources/20260409-docs-latest-commands-psync-67ec6e2b00.md`
- The `PSYNC` command is called by Redis replicas for initiating a replication
- For more information about replication in Redis please check the
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Not supported">&#x274c; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> | <span title="Not supported">&#x274c; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> |  |

## PTTL
Source file: `raw/sources/20260409-docs-latest-commands-pttl-ea18038b59.md`
- expire set, with the sole difference that [`TTL`]() returns the amount of remaining
- time in seconds while `PTTL` returns it in milliseconds.
- In Redis 2.6 or older the command returns `-1` if the key does not exist or if the key exist but has no associated expire.
- Starting with Redis 2.8 the return value in case of error changed:
- * The command returns `-2` if the key does not exist.

## PUBLISH
Source file: `raw/sources/20260409-docs-latest-commands-publish-0aa492fd44.md`
- In a Redis Cluster clients can publish to every node. The cluster makes sure
- that published messages are forwarded as needed, so clients can subscribe to any
- channel by connecting to any one of the nodes.
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|

## PUBSUB CHANNELS
Source file: `raw/sources/20260409-docs-latest-commands-pubsub-channels-71be0163c3.md`
- An active channel is a Pub/Sub channel with one or more subscribers (excluding clients subscribed to patterns).
- If no `pattern` is specified, all the channels are listed, otherwise if pattern is specified only channels matching the specified glob-style pattern are listed.
- Cluster note: in a Redis Cluster clients can subscribe to every node, and can also publish to every other node. The cluster will make sure that published messages are forwarded as needed. That said, [`PUBSUB`]()'s replies in a cluster only report information from the node's Pub/Sub context, rather than the entire cluster.
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|

## PUBSUB
Source file: `raw/sources/20260409-docs-latest-commands-pubsub-d528cd1dfd.md`
- To see the list of available commands you can call [`PUBSUB HELP`]().

## PUBSUB HELP
Source file: `raw/sources/20260409-docs-latest-commands-pubsub-help-df30432aaf.md`
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Not supported">&#x274c; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> | <span title="Not supported">&#x274c; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> |  |
- [Array reply](../../develop/reference/protocol-spec#arrays): a list of sub-commands and their descriptions.
- [Array reply](../../develop/reference/protocol-spec#arrays): a list of sub-commands and their descriptions.

## PUBSUB NUMPAT
Source file: `raw/sources/20260409-docs-latest-commands-pubsub-numpat-43b147dc13.md`
- Note that this isn't the count of clients subscribed to patterns, but the total number of unique patterns all the clients are subscribed to.
- Cluster note: in a Redis Cluster clients can subscribe to every node, and can also publish to every other node. The cluster will make sure that published messages are forwarded as needed. That said, [`PUBSUB`]()'s replies in a cluster only report information from the node's Pub/Sub context, rather than the entire cluster.
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |

## PUBSUB NUMSUB
Source file: `raw/sources/20260409-docs-latest-commands-pubsub-numsub-ecda2e8ac5.md`
- Note that it is valid to call this command without channels. In this case it will just return an empty list.
- Cluster note: in a Redis Cluster clients can subscribe to every node, and can also publish to every other node. The cluster will make sure that published messages are forwarded as needed. That said, [`PUBSUB`]()'s replies in a cluster only report information from the node's Pub/Sub context, rather than the entire cluster.
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |

## PUBSUB SHARDCHANNELS
Source file: `raw/sources/20260409-docs-latest-commands-pubsub-shardchannels-a307a8d0ef.md`
- An active shard channel is a Pub/Sub shard channel with one or more subscribers.
- If no `pattern` is specified, all the channels are listed, otherwise if pattern is specified only channels matching the specified glob-style pattern are listed.
- The information returned about the active shard channels are at the shard level and not at the cluster level.
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|

## PUBSUB SHARDNUMSUB
Source file: `raw/sources/20260409-docs-latest-commands-pubsub-shardnumsub-5c3c1970d4.md`
- Note that it is valid to call this command without channels, in this case it will just return an empty list.
- Cluster note: in a Redis Cluster, [`PUBSUB`]()'s replies in a cluster only report information from the node's Pub/Sub context, rather than the entire cluster.
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |

## PUNSUBSCRIBE
Source file: `raw/sources/20260409-docs-latest-commands-punsubscribe-b022f2b1c9.md`
- When no patterns are specified, the client is unsubscribed from all the
- In this case, a message for every unsubscribed pattern will be sent to the
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |

## QUIT
Source file: `raw/sources/20260409-docs-latest-commands-quit-22722fe9a9.md`
- The connection is closed as soon as all pending replies have been written to the
- **Note:** Clients should not use this command.
- Instead, clients should simply close the connection when they're not used anymore.
- Terminating a connection on the client side is preferable, as it eliminates `TIME_WAIT` lingering sockets on the server side.
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |

## RANDOMKEY
Source file: `raw/sources/20260409-docs-latest-commands-randomkey-2500c6ae06.md`
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |
- * [Nil reply](../../develop/reference/protocol-spec#bulk-strings): when the database is empty.
- * [Bulk string reply](../../develop/reference/protocol-spec#bulk-strings): a random key in database.

## READONLY
Source file: `raw/sources/20260409-docs-latest-commands-readonly-1613720cdd.md`
- Normally replica nodes will redirect clients to the authoritative master for
- the hash slot involved in a given command, however clients can use replicas
- in order to scale reads using the `READONLY` command.
- read possibly stale data and is not interested in running write queries.
- When the connection is in readonly mode, the cluster will send a redirection

## READWRITE
Source file: `raw/sources/20260409-docs-latest-commands-readwrite-e462d54b92.md`
- Read queries against a Redis Cluster replica node are disabled by default,
- but you can use the [`READONLY`]() command to change this behavior on a per-
- connection basis. The `READWRITE` command resets the readonly mode flag
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|

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

## REPLCONF
Source file: `raw/sources/20260409-docs-latest-commands-replconf-7094c4f032.md`
- It is used by a Redis master to configure a connected replica.
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Not supported">&#x274c; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> | <span title="Not supported">&#x274c; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> |  |
- [Simple string reply](../../develop/reference/protocol-spec#simple-strings): `OK`.

## REPLICAOF
Source file: `raw/sources/20260409-docs-latest-commands-replicaof-50743a8c74.md`
- If a Redis server is already acting as replica, the command `REPLICAOF` NO ONE will turn off the replication, turning the Redis server into a MASTER.  In the proper form `REPLICAOF` hostname port will make the server a replica of another server listening at the specified hostname and port.
- If a server is already a replica of some master, `REPLICAOF` hostname port will stop the replication against the old server and start the synchronization against the new one, discarding the old dataset.
- The form `REPLICAOF` NO ONE will stop replication, turning the server into a MASTER, but will not discard the already replicated data. So, if the old master stops working, it is possible to turn the replica into a master and set the application to use this new master in read/write. Later when the other Redis server is fixed, it can be reconfigured to work as a replica.
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|

## RESET
Source file: `raw/sources/20260409-docs-latest-commands-reset-d56cc0e2f9.md`
- mimicking the effect of disconnecting and reconnecting again.
- When the command is called from a regular client connection, it does the
- * Discards the current [`MULTI`]() transaction block, if one exists.
- * Unwatches all keys [`WATCH`]()ed by the connection.
- * Disables [`CLIENT TRACKING`](), if in use.

## RESTORE-ASKING
Source file: `raw/sources/20260409-docs-latest-commands-restore-asking-3179b0b736.md`
- It is used by a Redis cluster master during slot migration.
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Not supported">&#x274c; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> | <span title="Not supported">&#x274c; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> |  |

## RESTORE
Source file: `raw/sources/20260409-docs-latest-commands-restore-cda0359d39.md`
- provided serialized value (obtained via [`DUMP`]()).
- If `ttl` is 0 the key is created without any expire, otherwise the specified
- If the `ABSTTL` modifier was used, `ttl` should represent an absolute
- [Unix timestamp][hewowu] (in milliseconds) in which the key will expire.
- [hewowu]: http://en.wikipedia.org/wiki/Unix_time

## ROLE
Source file: `raw/sources/20260409-docs-latest-commands-role-4cd8d91e5c.md`
- The command returns an array of elements. The first element is the role of
- the instance, as one of the following three strings:
- The additional elements of the array depends on the role.
- An example of output when `ROLE` is called in a master instance:
- The master output is composed of the following parts:

## RPOP
Source file: `raw/sources/20260409-docs-latest-commands-rpop-d1e687a236.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- Removes and returns the last elements of the list stored at `key`.
- By default, the command pops a single element from the end of the list.
- When provided with the optional `count` argument, the reply will consist of up

## RPOPLPUSH
Source file: `raw/sources/20260409-docs-latest-commands-rpoplpush-0ae17665ac.md`
- This command's behavior varies in clustered Redis environments. See the [multi-key operations]() page for more information.
- Atomically returns and removes the last element (tail) of the list stored at
- For example: consider `source` holding the list `a,b,c`, and `destination`
- Executing `RPOPLPUSH` results in `source` holding `a,b` and `destination`
- If `source` does not exist, the value `nil` is returned and no operation is

## RPUSH
Source file: `raw/sources/20260409-docs-latest-commands-rpush-0c8217eca2.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- Insert all the specified values at the tail of the list stored at `key`.
- If `key` does not exist, it is created as empty list before performing the push
- When `key` holds a value that is not a list, an error is returned.

## RPUSHX
Source file: `raw/sources/20260409-docs-latest-commands-rpushx-584a0082ad.md`
- In contrary to [`RPUSH`](), no operation will be performed when `key` does not yet
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |
- [Integer reply](../../develop/reference/protocol-spec#integers): the length of the list after the push operation.

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

## SCARD
Source file: `raw/sources/20260409-docs-latest-commands-scard-4f427dccdc.md`
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |
- [Integer reply](../../develop/reference/protocol-spec#integers): the cardinality (number of elements) of the set, or `0` if the key does not exist.
- [Integer reply](../../develop/reference/protocol-spec#integers): The cardinality (number of elements) of the set, or 0 if the key does not exist.

## SCRIPT DEBUG
Source file: `raw/sources/20260409-docs-latest-commands-script-debug-0a127162b4.md`
- complete Lua debugger, codename LDB, that can be used to make the task of
- writing complex scripts much simpler. In debug mode Redis acts as a remote
- debugging server and a client, such as `redis-cli`, can execute scripts step by
- step, set breakpoints, inspect variables and more - for additional information
- about LDB refer to the [Redis Lua debugger]() page.

## SCRIPT EXISTS
Source file: `raw/sources/20260409-docs-latest-commands-script-exists-0a9604c927.md`
- This command accepts one or more SHA1 digests and returns a list of ones or
- zeros to signal if the scripts are already defined or not inside the script
- This can be useful before a pipelining operation to ensure that scripts are
- loaded (and if not, to load them using [`SCRIPT LOAD`]()) so that the pipelining
- operation can be performed solely using [`EVALSHA`]() instead of [`EVAL`]() to save

## SCRIPT
Source file: `raw/sources/20260409-docs-latest-commands-script-f809a2a435.md`
- To see the list of available commands you can call [`SCRIPT HELP`]().

## SCRIPT FLUSH
Source file: `raw/sources/20260409-docs-latest-commands-script-flush-994b3fa0ac.md`
- By default, `SCRIPT FLUSH` will synchronously flush the cache.
- Starting with Redis 6.2, setting the **lazyfree-lazy-user-flush** configuration directive to "yes" changes the default flush mode to asynchronous.
- It is possible to use one of the following modifiers to dictate the flushing mode explicitly:
- * `ASYNC`: flushes the cache asynchronously
- * `SYNC`: flushes the cache synchronously

## SCRIPT HELP
Source file: `raw/sources/20260409-docs-latest-commands-script-help-96e0fbb085.md`
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Not supported">&#x274c; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> | <span title="Not supported">&#x274c; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> |  |
- [Array reply](../../develop/reference/protocol-spec#arrays): a list of sub-commands and their descriptions.
- [Array reply](../../develop/reference/protocol-spec#arrays): a list of sub-commands and their descriptions.

## SCRIPT KILL
Source file: `raw/sources/20260409-docs-latest-commands-script-kill-68f634eead.md`
- This command is mainly useful to kill a script that is running for too much
- time(for instance, because it entered an infinite loop because of a bug).
- The script will be killed, and the client currently blocked into EVAL will see
- If the script has already performed write operations, it can not be killed in this
- way because it would violate Lua's script atomicity contract.

## SCRIPT LOAD
Source file: `raw/sources/20260409-docs-latest-commands-script-load-39b2026ef3.md`
- After the specified command is loaded into the script cache it will be callable
- using [`EVALSHA`]() with the correct SHA1 digest of the script, exactly like after
- the first successful invocation of [`EVAL`]().
- The script is guaranteed to stay in the script cache forever (unless `SCRIPT
- The command works in the same way even if the script was already present in the

## SDIFF
Source file: `raw/sources/20260409-docs-latest-commands-sdiff-7361fa8dd8.md`
- This command's behavior varies in clustered Redis environments. See the [multi-key operations]() page for more information.
- Returns the members of the set resulting from the difference between the first
- Keys that do not exist are considered to be empty sets.
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|

## SDIFFSTORE
Source file: `raw/sources/20260409-docs-latest-commands-sdiffstore-49d88c4b8d.md`
- This command's behavior varies in clustered Redis environments. See the [multi-key operations]() page for more information.
- This command is equal to [`SDIFF`](), but instead of returning the resulting set, it
- If `destination` already exists, it is overwritten.
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|

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

## SETRANGE
Source file: `raw/sources/20260409-docs-latest-commands-setrange-2b943eb2d0.md`
- If the offset is larger than the current length of the string at _key_, the
- string is padded with zero-bytes to make _offset_ fit.
- Non-existing keys are considered as empty strings, so this command will make
- sure it holds a string large enough to be able to set _value_ at _offset_.
- Note that the maximum offset that you can set is 2^29 -1 (536870911), as Redis

## SHUTDOWN
Source file: `raw/sources/20260409-docs-latest-commands-shutdown-a965a30408.md`
- * If there are any replicas lagging behind in replication:
- * Pause clients attempting to write by performing a [`CLIENT PAUSE`]() with the `WRITE` option.
- * Wait up to the configured `shutdown-timeout` (default 10 seconds) for replicas to catch up the replication offset.
- * Perform a blocking SAVE if at least one **save point** is configured.
- * Flush the Append Only File if AOF is enabled.

## SINTER
Source file: `raw/sources/20260409-docs-latest-commands-sinter-02d88e3e2d.md`
- This command's behavior varies in clustered Redis environments. See the [multi-key operations]() page for more information.
- Returns the members of the set resulting from the intersection of all the given
- Keys that do not exist are considered to be empty sets.
- With one of the keys being an empty set, the resulting set is also empty (since
- set intersection with an empty set always results in an empty set).

## SINTERCARD
Source file: `raw/sources/20260409-docs-latest-commands-sintercard-050e67b071.md`
- This command's behavior varies in clustered Redis environments. See the [multi-key operations]() page for more information.
- This command is similar to [`SINTER`](), but instead of returning the result set, it returns just the cardinality of the result.
- Returns the cardinality of the set which would result from the intersection of all the given sets.
- Keys that do not exist are considered to be empty sets.
- With one of the keys being an empty set, the resulting set is also empty (since set intersection with an empty set always results in an empty set).

## SINTERSTORE
Source file: `raw/sources/20260409-docs-latest-commands-sinterstore-e1539c2514.md`
- This command's behavior varies in clustered Redis environments. See the [multi-key operations]() page for more information.
- This command is equal to [`SINTER`](), but instead of returning the resulting set,
- If `destination` already exists, it is overwritten.
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|

## SISMEMBER
Source file: `raw/sources/20260409-docs-latest-commands-sismember-55fc607ce1.md`
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |
- * [Integer reply](../../develop/reference/protocol-spec#integers): `0` if the element is not a member of the set, or when the key does not exist.
- * [Integer reply](../../develop/reference/protocol-spec#integers): `1` if the element is a member of the set.

## SLAVEOF
Source file: `raw/sources/20260409-docs-latest-commands-slaveof-bc0015937c.md`
- The `SLAVEOF` command can change the replication settings of a replica on the fly.
- If a Redis server is already acting as replica, the command `SLAVEOF` NO ONE will
- turn off the replication, turning the Redis server into a MASTER.
- In the proper form `SLAVEOF` hostname port will make the server a replica of
- another server listening at the specified hostname and port.

## SLOWLOG
Source file: `raw/sources/20260409-docs-latest-commands-slowlog-9d2336e8aa.md`
- The execution time does not include I/O operations like talking with the client, just the time needed to execute the command (this is the only stage of command execution where the thread is blocked and cannot serve other requests).
- A new entry is added to the slow log whenever a command exceeds the execution time threshold defined by the `slowlog-log-slower-than` configuration directive.
- The maximum number of entries in the slow log is governed by the `slowlog-max-len` configuration directive.
- This is a container command for slow log management commands.
- See [`SLOWLOG GET`]() for a description of what's stored in the Redis slow log. To see the list of available commands use the [`SLOWLOG HELP`]() command.

## SLOWLOG GET
Source file: `raw/sources/20260409-docs-latest-commands-slowlog-get-077ca878ed.md`
- The Redis Slow Log is a system to log queries that exceeded a specified execution time.
- The execution time does not include I/O operations like talking with the client, sending the reply and so forth, but just the time needed to actually execute the command (this is the only stage of command execution where the thread is blocked and can not serve other requests in the meantime).
- A new entry is added to the slow log whenever a command exceeds the execution time threshold defined by the `slowlog-log-slower-than` configuration directive.
- The maximum number of entries in the slow log is governed by the `slowlog-max-len` configuration directive.
- By default the command returns latest ten entries in the log. The optional `count` argument limits the number of returned entries, so the command returns at most up to `count` entries, the special number -1 means return all entries.

## SLOWLOG HELP
Source file: `raw/sources/20260409-docs-latest-commands-slowlog-help-96a71f6c83.md`
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Not supported">&#x274c; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> | <span title="Not supported">&#x274c; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> |  |
- [Array reply](../../develop/reference/protocol-spec#arrays): a list of sub-commands and their descriptions.
- [Array reply](../../develop/reference/protocol-spec#arrays): a list of sub-commands and their descriptions.

## SLOWLOG LEN
Source file: `raw/sources/20260409-docs-latest-commands-slowlog-len-67f245bec5.md`
- A new entry is added to the slow log whenever a command exceeds the execution time threshold defined by the `slowlog-log-slower-than` configuration directive.
- The maximum number of entries in the slow log is governed by the `slowlog-max-len` configuration directive.
- Once the slog log reaches its maximal size, the oldest entry is removed whenever a new entry is created.
- The slow log can be cleared with the [`SLOWLOG RESET`]() command.
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |

## SLOWLOG RESET
Source file: `raw/sources/20260409-docs-latest-commands-slowlog-reset-e6be524ac5.md`
- Once deleted the information is lost forever.
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | Not supported for [scripts](). |
- [Simple string reply](../../develop/reference/protocol-spec#simple-strings): `OK`.

## SMEMBERS
Source file: `raw/sources/20260409-docs-latest-commands-smembers-7094eeffa7.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- Returns all the members of the set value stored at `key`.
- This has the same effect as running [`SINTER`]() with one argument `key`.
- Foundational: Retrieve all members of a set using SMEMBERS (returns unordered collection, useful for iterating all set members)

## SMISMEMBER
Source file: `raw/sources/20260409-docs-latest-commands-smismember-aceba85ef5.md`
- For every `member`, `1` is returned if the value is a member of the set, or `0` if the element is not a member of the set or if `key` does not exist.
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |
- [Array reply](../../develop/reference/protocol-spec#arrays): a list representing the membership of the given elements, in the same order as they are requested.

## SMOVE
Source file: `raw/sources/20260409-docs-latest-commands-smove-33eff66d94.md`
- This command's behavior varies in clustered Redis environments. See the [multi-key operations]() page for more information.
- Move `member` from the set at `source` to the set at `destination`.
- In every given moment the element will appear to be a member of `source` **or**
- If the source set does not exist or does not contain the specified element, no
- operation is performed and `0` is returned.

## SORT
Source file: `raw/sources/20260409-docs-latest-commands-sort-b295b62cf6.md`
- There is also the [`SORT_RO`]() read-only variant of this command.
- By default, sorting is numeric and elements are compared by their value
- interpreted as double precision floating point number.
- [tdtss]: /develop/data-types#sorted-sets
- Assuming `mylist` is a list of numbers, this command will return the same list

## SORT_RO
Source file: `raw/sources/20260409-docs-latest-commands-sort-ro-39bb83c3f1.md`
- Since the original [`SORT`]() has a `STORE` option it is technically flagged as a writing command in the Redis command table. For this reason read-only replicas in a Redis Cluster will redirect it to the master instance even if the connection is in read-only mode (see the [`READONLY`]() command of Redis Cluster).
- The `SORT_RO` variant was introduced in order to allow [`SORT`]() behavior in read-only replicas without breaking compatibility on command flags.
- See original [`SORT`]() for more details.
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|

## SPOP
Source file: `raw/sources/20260409-docs-latest-commands-spop-5d918f2587.md`
- This operation is similar to [`SRANDMEMBER`](), that returns one or more random elements from a set but does not remove it.
- By default, the command pops a single member from the set. When provided with
- the optional `count` argument, the reply will consist of up to `count` members,
- Note that this command is not suitable when you need a guaranteed uniform distribution of the returned elements. For more information about the algorithms used for `SPOP`, look up both the Knuth sampling and Floyd sampling algorithms.
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |

## SPUBLISH
Source file: `raw/sources/20260409-docs-latest-commands-spublish-738df48fb7.md`
- In Redis Cluster, shard channels are assigned to slots by the same algorithm used to assign keys to slots.
- A shard message must be sent to a node that owns the slot the shard channel is hashed to.
- The cluster makes sure that published shard messages are forwarded to all the nodes in the shard, so clients can subscribe to a shard channel by connecting to any one of the nodes in the shard.
- For more information about sharded pubsub, see [Sharded Pubsub]().
- For example the following command publishes to the `orders` channel with a subscriber already waiting for message(s).

## SRANDMEMBER
Source file: `raw/sources/20260409-docs-latest-commands-srandmember-65bcfa5d22.md`
- If the provided `count` argument is positive, return an array of **distinct elements**.
- The array's length is either `count` or the set's cardinality ([`SCARD`]()), whichever is lower.
- If called with a negative `count`, the behavior changes and the command is allowed to return the **same element multiple times**.
- In this case, the number of returned elements is the absolute value of the specified `count`.
- When the `count` argument is a positive value this command behaves as follows:

## SREM
Source file: `raw/sources/20260409-docs-latest-commands-srem-45a3415f7d.md`
- Specified members that are not a member of this set are ignored.
- If `key` does not exist, it is treated as an empty set and this command returns
- An error is returned when the value stored at `key` is not a set.
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|

## SSCAN
Source file: `raw/sources/20260409-docs-latest-commands-sscan-507391b993.md`
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |
- [Array reply](../../develop/reference/protocol-spec#arrays): specifically, an array with two elements:
- * The first element is a [Bulk string reply](../../develop/reference/protocol-spec#bulk-strings) that represents an unsigned 64-bit number, the cursor.

## SSUBSCRIBE
Source file: `raw/sources/20260409-docs-latest-commands-ssubscribe-2f23676b98.md`
- In a Redis cluster, shard channels are assigned to slots by the same algorithm used to assign keys to slots.
- Client(s) can subscribe to a node covering a slot (primary/replica) to receive the messages published.
- All the specified shard channels needs to belong to a single slot to subscribe in a given `SSUBSCRIBE` call,
- A client can subscribe to channels across different slots over separate `SSUBSCRIBE` call.
- For more information about sharded Pub/Sub, see [Sharded Pub/Sub]().

## STRLEN
Source file: `raw/sources/20260409-docs-latest-commands-strlen-0f64624234.md`
- An error is returned when `key` holds a non-string value.
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |
- [Integer reply](../../develop/reference/protocol-spec#integers): the length of the string stored at key, or 0 when the key does not exist.

## SUBSCRIBE
Source file: `raw/sources/20260409-docs-latest-commands-subscribe-92c389110f.md`
- Once the client enters the subscribed state it is not supposed to issue any
- other commands, except for additional `SUBSCRIBE`, [`SSUBSCRIBE`](), [`PSUBSCRIBE`](), [`UNSUBSCRIBE`](), [`SUNSUBSCRIBE`](),
- [`PUNSUBSCRIBE`](), [`PING`](), [`RESET`]() and [`QUIT`]() commands.
- However, if RESP3 is used (see [`HELLO`]()) it is possible for a client to issue any commands while in subscribed state.
- *   `>= 6.2.0`: [`RESET`]() can be called to exit subscribed state.

## SUBSTR
Source file: `raw/sources/20260409-docs-latest-commands-substr-7064c3792f.md`
- offsets `start` and `end` (both are inclusive).
- Negative offsets can be used in order to provide an offset starting from the end
- So -1 means the last character, -2 the penultimate and so forth.
- The function handles out of range requests by limiting the resulting range to
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |

## SUNION
Source file: `raw/sources/20260409-docs-latest-commands-sunion-a02758c8c9.md`
- This command's behavior varies in clustered Redis environments. See the [multi-key operations]() page for more information.
- Returns the members of the set resulting from the union of all the given sets.
- Keys that do not exist are considered to be empty sets.
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|

## SUNIONSTORE
Source file: `raw/sources/20260409-docs-latest-commands-sunionstore-7bb0820303.md`
- This command's behavior varies in clustered Redis environments. See the [multi-key operations]() page for more information.
- This command is equal to [`SUNION`](), but instead of returning the resulting set,
- If `destination` already exists, it is overwritten.
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|

## SUNSUBSCRIBE
Source file: `raw/sources/20260409-docs-latest-commands-sunsubscribe-77a1be9b85.md`
- When no shard channels are specified, the client is unsubscribed from all the previously subscribed shard channels.
- In this case a message for every unsubscribed shard channel will be sent to the client.
- Note: The global channels and shard channels needs to be unsubscribed from separately.
- For more information about sharded Pub/Sub, see [Sharded Pub/Sub]().
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |

## SWAPDB
Source file: `raw/sources/20260409-docs-latest-commands-swapdb-e12e56cbbf.md`
- clients connected to a given database will see the data of the other database, and
- This will swap database 0 with database 1. All the clients connected with database 0 will immediately see the new data, exactly like all the clients connected with database 1 will see the data that was formerly of database 0.
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Not supported">&#x274c; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> | <span title="Not supported">&#x274c; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> |  |

## SYNC
Source file: `raw/sources/20260409-docs-latest-commands-sync-dc4a619507.md`
- The `SYNC` command is called by Redis replicas for initiating a replication
- stream from the master. It has been replaced in newer versions of Redis by
- For more information about replication in Redis please check the
- [tr]: /operate/oss_and_stack/management/replication
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |

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

## TDIGEST.MAX
Source file: `raw/sources/20260409-docs-latest-commands-tdigest-max-ba422ecd7b.md`
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

## TDIGEST.MIN
Source file: `raw/sources/20260409-docs-latest-commands-tdigest-min-1115447328.md`
- <details open><summary><code>key</code></summary>
- is the key name for an existing t-digest sketch.
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Supported">&#x2705; Supported</span><br /> | <span title="Supported">&#x2705; Flexible & Annual</span><br /><span title="Supported">&#x2705; Free & Fixed</nobr></span> |  |

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

## TIME
Source file: `raw/sources/20260409-docs-latest-commands-time-4c3e927659.md`
- timestamp and the amount of microseconds already elapsed in the current second.
- Basically the interface is very similar to the one of the `gettimeofday` system
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |

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

## TOUCH
Source file: `raw/sources/20260409-docs-latest-commands-touch-5c87a71b1e.md`
- This command's behavior varies in clustered Redis environments. See the [multi-key operations]() page for more information.
- Alters the last access time of a key(s).
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |

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

## TYPE
Source file: `raw/sources/20260409-docs-latest-commands-type-9f578ce3dd.md`
- The different types that can be returned are: `string`, `list`, `set`, `zset`,
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |
- [Simple string reply](../../develop/reference/protocol-spec#simple-strings): the type of _key_, or `none` when _key_ doesn't exist.

## UNLINK
Source file: `raw/sources/20260409-docs-latest-commands-unlink-3e2713ed47.md`
- This command's behavior varies in clustered Redis environments. See the [multi-key operations]() page for more information.
- This command is very similar to [`DEL`](): it removes the specified keys.
- Just like [`DEL`]() a key is ignored if it does not exist. However the command
- performs the actual memory reclaiming in a different thread, so it is not
- blocking, while [`DEL`]() is. This is where the command name comes from: the

## UNSUBSCRIBE
Source file: `raw/sources/20260409-docs-latest-commands-unsubscribe-32af2cc700.md`
- When no channels are specified, the client is unsubscribed from all the
- In this case, a message for every unsubscribed channel will be sent to the
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |

## UNWATCH
Source file: `raw/sources/20260409-docs-latest-commands-unwatch-b5aa0f58db.md`
- If you call [`EXEC`]() or [`DISCARD`](), there's no need to manually call `UNWATCH`.
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |
- [Simple string reply](../../develop/reference/protocol-spec#simple-strings): `OK`.

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

## WATCH
Source file: `raw/sources/20260409-docs-latest-commands-watch-ba3ad6d77f.md`
- This command's behavior varies in clustered Redis environments. See the [multi-key operations]() page for more information.
- Marks the given keys to be watched for conditional execution of a
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |

## XACK
Source file: `raw/sources/20260409-docs-latest-commands-xack-66b2eecf3e.md`
- *Pending Entries List* (PEL) of a stream consumer group. A message is pending,
- and as such stored inside the PEL, when it was delivered to some consumer,
- normally as a side effect of calling [`XREADGROUP`](), or when a consumer took
- ownership of a message calling [`XCLAIM`](). The pending message was delivered to
- some consumer but the server is yet not sure it was processed at least once.

## XACKDEL
Source file: `raw/sources/20260409-docs-latest-commands-xackdel-7813681739.md`
- Acknowledges and conditionally deletes one or multiple entries (messages) for a stream consumer group at the specified `key`.
- <summary><code>IDS numids id [id ...]</code></summary>
- The IDS block specifying which entries to acknowledge and delete:
- <summary><code>KEEPREF | DELREF | ACKED</code></summary>
- Specifies how to handle consumer group references when acknowledging and deleting entries. Available since Redis 8.2. If no option is specified, `KEEPREF` is used by default:

## XADD
Source file: `raw/sources/20260409-docs-latest-commands-xadd-da78de076a.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- Appends the specified stream entry to the stream at the specified `key`.
- If the key does not exist, `XADD` will create a new key with the given stream value as a side effect of running this command.
- You can turn off key creation with the `NOMKSTREAM` option.

## XAUTOCLAIM
Source file: `raw/sources/20260409-docs-latest-commands-xautoclaim-d8d47837c1.md`
- but provides a more straightforward way to deal with message delivery failures via [`SCAN`]()-like semantics.
- Like [`XCLAIM`](), the command operates on the stream entries at `<key>` and in the context of the provided `<group>`.
- It transfers ownership to `<consumer>` of messages pending for more than `<min-idle-time>` milliseconds and having an equal or greater ID than `<start>`.
- The optional `<count>` argument, which defaults to 100, is the upper limit of the number of entries that the command attempts to claim.
- Internally, the command begins scanning the consumer group's Pending Entries List (PEL) from `<start>` and filters out entries having an idle time less than or equal to `<min-idle-time>`.

## XCFGSET
Source file: `raw/sources/20260409-docs-latest-commands-xcfgset-efb80f081c.md`
- <details open><summary><code>key</code></summary>
- The name of the stream key. The stream must already exist.
- <details open><summary><code>IDMP-DURATION idmp-duration</code></summary>
- Sets the duration in seconds that each idempotent ID (iid) is kept in the stream's IDMP map. Valid range: 1-86,400 seconds. Default: 100 seconds.
- When an idempotent ID expires, it can be reused for new messages. This provides an operational guarantee that Redis will not forget an idempotency ID before the duration elapses (unless capacity is reached).

## XCLAIM
Source file: `raw/sources/20260409-docs-latest-commands-xclaim-0495679de7.md`
- of a pending message, so that the new owner is the consumer specified as the
- command argument. Normally this is what happens:
- 1. There is a stream with an associated consumer group.
- 2. Some consumer A reads a message via [`XREADGROUP`]() from a stream, in the context of that consumer group.
- 3. As a side effect a pending message entry is created in the Pending Entries List (PEL) of the consumer group: it means the message was delivered to a given consumer, but it was not yet acknowledged via [`XACK`]().

## XDEL
Source file: `raw/sources/20260409-docs-latest-commands-xdel-3ec06eaffc.md`
- deleted.  This number may be less than the number of IDs passed to the command in
- the case where some of the specified IDs do not exist in the stream.
- Normally you may think at a Redis stream as an append-only data structure,
- however Redis streams are represented in memory, so we are also able to
- delete entries. This may be useful, for instance, in order to comply with

## XDELEX
Source file: `raw/sources/20260409-docs-latest-commands-xdelex-f953d9e9c7.md`
- Deletes one or multiple entries from the stream at the specified `key`.
- <summary><code>IDS numids id [id ...]</code></summary>
- The IDS block specifying which entries to delete:
- Note: The IDS block can be at any position in the command, same as other commands.
- <summary><code>KEEPREF | DELREF | ACKED</code></summary>

## XGROUP
Source file: `raw/sources/20260409-docs-latest-commands-xgroup-35fb52ea9d.md`
- To see the list of available commands you can call [`XGROUP HELP`]().

## XGROUP CREATE
Source file: `raw/sources/20260409-docs-latest-commands-xgroup-create-ff27395037.md`
- Every group has a unique name in a given stream.
- When a consumer group with the same name already exists, the command returns a `-BUSYGROUP` error.
- The command's `<id>` argument specifies the last delivered entry in the stream from the new group's perspective.
- The special ID `$` is the ID of the last entry in the stream, but you can substitute it with any valid ID.
- For example, if you want the group's consumers to fetch the entire stream from the beginning, use zero as the starting ID for the consumer group:

## XGROUP CREATECONSUMER
Source file: `raw/sources/20260409-docs-latest-commands-xgroup-createconsumer-35948f7a45.md`
- Consumers are also created automatically whenever an operation, such as [`XREADGROUP`](), references a consumer that doesn't exist.
- This is valid for [`XREADGROUP`]() only when there is data in the stream.
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |

## XGROUP DELCONSUMER
Source file: `raw/sources/20260409-docs-latest-commands-xgroup-delconsumer-3cb6f7efad.md`
- Sometimes it may be useful to remove old consumers since they are no longer used.
- Note, however, that any pending messages that the consumer had will become unclaimable after it was deleted.
- It is strongly recommended, therefore, that any pending messages are claimed or acknowledged prior to deleting the consumer from the group.
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|

## XGROUP DESTROY
Source file: `raw/sources/20260409-docs-latest-commands-xgroup-destroy-fe85796b1b.md`
- The consumer group will be destroyed even if there are active consumers, and pending messages, so make sure to call this command only when really needed.
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |
- [Integer reply](../../develop/reference/protocol-spec#integers): the number of destroyed consumer groups, either 0 or 1.

## XGROUP HELP
Source file: `raw/sources/20260409-docs-latest-commands-xgroup-help-b16256d9d0.md`
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |
- [Array reply](../../develop/reference/protocol-spec#arrays): a list of sub-commands and their descriptions.
- [Array reply](../../develop/reference/protocol-spec#arrays): a list of sub-commands and their descriptions.

## XGROUP SETID
Source file: `raw/sources/20260409-docs-latest-commands-xgroup-setid-3e68fe0b63.md`
- Normally, a consumer group's last delivered ID is set when the group is created with [`XGROUP CREATE`]().
- The `XGROUP SETID` command allows modifying the group's last delivered ID, without having to delete and recreate the group.
- For instance if you want the consumers in a consumer group to re-process all the messages in a stream, you may want to set its next ID to 0:
- The optional `entries_read` argument can be specified to enable consumer group lag tracking for an arbitrary ID.
- An arbitrary ID is any ID that isn't the ID of the stream's first entry, its last entry or the zero ("0-0") ID.

## XINFO CONSUMERS
Source file: `raw/sources/20260409-docs-latest-commands-xinfo-consumers-4353f917be.md`
- The following information is provided for each consumer in the group:
- * **pending**: the number of entries in the PEL: pending messages for the consumer, which are messages that were delivered but are yet to be acknowledged
- * **idle**: the number of milliseconds that have passed since the consumer's last attempted interaction (Examples: [`XREADGROUP`](), [`XCLAIM`](), [`XAUTOCLAIM`]())
- * **inactive**: the number of milliseconds that have passed since the consumer's last successful interaction (Examples: [`XREADGROUP`]() that actually read some entries into the PEL, [`XCLAIM`]()/[`XAUTOCLAIM`]() that actually claimed some entries)
- Note that before Redis 7.2.0, **idle** used to denote the time passed since last successful interaction.

## XINFO
Source file: `raw/sources/20260409-docs-latest-commands-xinfo-f9dad6ada7.md`
- To see the list of available commands you can call [`XINFO HELP`]().

## XINFO GROUPS
Source file: `raw/sources/20260409-docs-latest-commands-xinfo-groups-5457adecc5.md`
- By default, only the following information is provided for each of the groups:
- * **consumers**: the number of consumers in the group
- * **pending**: the length of the group's pending entries list (PEL), which are messages that were delivered but are yet to be acknowledged
- * **last-delivered-id**: the ID of the last entry delivered to the group's consumers
- * **entries-read**: the logical "read counter" of the last entry delivered to the group's consumers

## XINFO HELP
Source file: `raw/sources/20260409-docs-latest-commands-xinfo-help-06fd6be9d2.md`
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |
- [Array reply](../../develop/reference/protocol-spec#arrays): a list of sub-commands and their descriptions.
- [Array reply](../../develop/reference/protocol-spec#arrays): a list of sub-commands and their descriptions.

## XINFO STREAM
Source file: `raw/sources/20260409-docs-latest-commands-xinfo-stream-4c9131b149.md`
- The informative details provided by this command are:
- * **length**: the number of entries in the stream (see [`XLEN`]())
- * **radix-tree-keys**: the number of keys in the underlying radix data structure
- * **radix-tree-nodes**: the number of nodes in the underlying radix data structure
- * **groups**: the number of consumer groups defined for the stream

## XLEN
Source file: `raw/sources/20260409-docs-latest-commands-xlen-3a5bfb3913.md`
- exist the command returns zero, as if the stream was empty.
- However note that unlike other Redis types, zero-length streams are
- possible, so you should call [`TYPE`]() or [`EXISTS`]() in order to check if
- Streams are not auto-deleted once they have no entries inside (for instance
- after an [`XDEL`]() call), because the stream may have consumer groups

## XPENDING
Source file: `raw/sources/20260409-docs-latest-commands-xpending-03ad9778c9.md`
- such data, has the effect of creating *pending entries*. This is
- well explained in the [`XREADGROUP`]() command, and even better in our
- [introduction to Redis Streams](). The [`XACK`]() command
- will immediately remove the pending entry from the Pending Entries List (PEL)
- since once a message is successfully processed, there is no longer need

## XRANGE
Source file: `raw/sources/20260409-docs-latest-commands-xrange-646f4aacde.md`
- The range is specified by a minimum and maximum ID. All the entries having
- an ID between the two specified or exactly one of the two IDs specified
- The `XRANGE` command has a number of applications:
- * Returning items in a specific time range. This is possible because
- * Iterating a stream incrementally, returning just

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

## XREVRANGE
Source file: `raw/sources/20260409-docs-latest-commands-xrevrange-f0145afe8e.md`
- returning the entries in reverse order, and also taking the start-end
- range in reverse order: in `XREVRANGE` you need to state the *end* ID
- and later the *start* ID, and the command will produce all the element
- between (or exactly like) the two IDs, starting from the *end* side.
- So for instance, to get all the elements from the higher ID to the lower

## XSETID
Source file: `raw/sources/20260409-docs-latest-commands-xsetid-ebed597011.md`
- It is used by a Redis master to replicate the last delivered ID of streams.
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |
- [Simple string reply](../../develop/reference/protocol-spec#simple-strings): `OK`.

## XTRIM
Source file: `raw/sources/20260409-docs-latest-commands-xtrim-27094ad981.md`
- <summary><code>MAXLEN | MINID</code></summary>
- <summary><code>threshold</code></summary>
- <summary><code>LIMIT count</code></summary>
- Limits the number of entries to examine during trimming. Available since Redis 6.2.0. When not specified, Redis uses a default value of 100 * the number of entries in a macro node. Specifying 0 disables the limiting mechanism entirely.
- <summary><code>KEEPREF | DELREF | ACKED</code></summary>

## ZADD
Source file: `raw/sources/20260409-docs-latest-commands-zadd-3456edb2fb.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- Adds all the specified members with the specified scores to the sorted set
- It is possible to specify multiple score / member pairs.
- If a specified member is already a member of the sorted set, the score is

## ZCARD
Source file: `raw/sources/20260409-docs-latest-commands-zcard-8c28ccdc9f.md`
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |
- [Integer reply](../../develop/reference/protocol-spec#integers): the cardinality (number of members) of the sorted set, or 0 if the key doesn't exist.
- [Integer reply](../../develop/reference/protocol-spec#integers): the cardinality (number of members) of the sorted set, or 0 if the key doesn't exist.

## ZCOUNT
Source file: `raw/sources/20260409-docs-latest-commands-zcount-a535fcbb1f.md`
- The `min` and `max` arguments have the same semantic as described for
- Note: the command has a complexity of just O(log(N)) because it uses elements ranks (see [`ZRANK`]()) to get an idea of the range. Because of this there is no need to do a work proportional to the size of the range.
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |

## ZDIFF
Source file: `raw/sources/20260409-docs-latest-commands-zdiff-50ed7b04f7.md`
- This command's behavior varies in clustered Redis environments. See the [multi-key operations]() page for more information.
- This command is similar to [`ZDIFFSTORE`](), but instead of storing the resulting
- sorted set, it is returned to the client.
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|

## ZDIFFSTORE
Source file: `raw/sources/20260409-docs-latest-commands-zdiffstore-7b1cb78e8d.md`
- This command's behavior varies in clustered Redis environments. See the [multi-key operations]() page for more information.
- Computes the difference between the first and all successive input sorted sets
- and stores the result in `destination`. The total number of input keys is
- Keys that do not exist are considered to be empty sets.
- If `destination` already exists, it is overwritten.

## ZINCRBY
Source file: `raw/sources/20260409-docs-latest-commands-zincrby-caf6c579a9.md`
- If `member` does not exist in the sorted set, it is added with `increment` as
- its score (as if its previous score was `0.0`).
- If `key` does not exist, a new sorted set with the specified `member` as its
- An error is returned when `key` exists but does not hold a sorted set.
- The `score` value should be the string representation of a numeric value, and

## ZINTER
Source file: `raw/sources/20260409-docs-latest-commands-zinter-7a30bad90e.md`
- This command's behavior varies in clustered Redis environments. See the [multi-key operations]() page for more information.
- This command is similar to [`ZINTERSTORE`](), but instead of storing the resulting
- sorted set, it is returned to the client.
- For a description of the `WEIGHTS` and `AGGREGATE` options, see [`ZUNIONSTORE`]().
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |

## ZINTERCARD
Source file: `raw/sources/20260409-docs-latest-commands-zintercard-800ea918a6.md`
- This command's behavior varies in clustered Redis environments. See the [multi-key operations]() page for more information.
- This command is similar to [`ZINTER`](), but instead of returning the result set, it returns just the cardinality of the result.
- Keys that do not exist are considered to be empty sets.
- With one of the keys being an empty set, the resulting set is also empty (since set intersection with an empty set always results in an empty set).
- By default, the command calculates the cardinality of the intersection of all given sets.

## ZINTERSTORE
Source file: `raw/sources/20260409-docs-latest-commands-zinterstore-06592cecf4.md`
- This command's behavior varies in clustered Redis environments. See the [multi-key operations]() page for more information.
- Computes the intersection of `numkeys` sorted sets given by the specified keys,
- It is mandatory to provide the number of input keys (`numkeys`) before passing
- the input keys and the other (optional) arguments.
- By default, the resulting score of an element is the sum of its scores in the

## ZLEXCOUNT
Source file: `raw/sources/20260409-docs-latest-commands-zlexcount-ef92975dc8.md`
- The `min` and `max` arguments have the same meaning as described for
- Note: the command has a complexity of just O(log(N)) because it uses elements ranks (see [`ZRANK`]()) to get an idea of the range. Because of this there is no need to do a work proportional to the size of the range.
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |

## ZMPOP
Source file: `raw/sources/20260409-docs-latest-commands-zmpop-cf47e43606.md`
- This command's behavior varies in clustered Redis environments. See the [multi-key operations]() page for more information.
- Pops one or more elements, that are member-score pairs, from the first non-empty sorted set in the provided list of key names.
- See [`BZMPOP`]() for the blocking variant of this command.
- When the `MIN` modifier is used, the elements popped are those with the lowest scores from the first non-empty sorted set. The `MAX` modifier causes elements with the highest scores to be popped.
- The optional `COUNT` can be used to specify the number of elements to pop, and is set to 1 by default.

## ZMSCORE
Source file: `raw/sources/20260409-docs-latest-commands-zmscore-89435614e9.md`
- For every `member` that does not exist in the sorted set, a `nil` value is returned.
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |
- * [Nil reply](../../develop/reference/protocol-spec#bulk-strings): if the member does not exist in the sorted set.

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

## ZRANDMEMBER
Source file: `raw/sources/20260409-docs-latest-commands-zrandmember-93c00d9034.md`
- If the provided `count` argument is positive, return an array of **distinct elements**.
- The array's length is either `count` or the sorted set's cardinality ([`ZCARD`]()), whichever is lower.
- If called with a negative `count`, the behavior changes and the command is allowed to return the **same element multiple times**.
- In this case, the number of returned elements is the absolute value of the specified `count`.
- The optional `WITHSCORES` modifier changes the reply so it includes the respective scores of the randomly selected elements from the sorted set.

## ZRANGE
Source file: `raw/sources/20260409-docs-latest-commands-zrange-e92b9fc60f.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- Returns the specified range of elements in the sorted set stored at `<key>`.
- Starting with Redis 6.2.0, this command can replace the following commands: [`ZREVRANGE`](), [`ZRANGEBYSCORE`](), [`ZREVRANGEBYSCORE`](), [`ZRANGEBYLEX`]() and [`ZREVRANGEBYLEX`]().
- The order of elements is from the lowest to the highest score. Elements with the same score are ordered lexicographically.

## ZRANGEBYLEX
Source file: `raw/sources/20260409-docs-latest-commands-zrangebylex-408d28b89d.md`
- If the elements in the sorted set have different scores, the returned elements are unspecified.
- The elements are considered to be ordered from lower to higher strings as compared byte-by-byte using the `memcmp()` C function. Longer strings are considered greater than shorter strings if the common part is identical.
- The optional `LIMIT` argument can be used to only get a range of the matching
- elements (similar to _SELECT LIMIT offset, count_ in SQL). A negative `count`
- Keep in mind that if `offset` is large, the sorted set needs to be traversed for

## ZRANGEBYSCORE
Source file: `raw/sources/20260409-docs-latest-commands-zrangebyscore-155b3abf7c.md`
- and `max` (including elements with score equal to `min` or `max`).
- The elements are considered to be ordered from low to high scores.
- The elements having the same score are returned in lexicographical order (this
- follows from a property of the sorted set implementation in Redis and does not
- The optional `LIMIT` argument can be used to only get a range of the matching

## ZRANGESTORE
Source file: `raw/sources/20260409-docs-latest-commands-zrangestore-c9db1b1698.md`
- This command's behavior varies in clustered Redis environments. See the [multi-key operations]() page for more information.
- This command is like [`ZRANGE`](), but stores the result in the `<dst>` destination key.
- ZADD srczset 1 "one" 2 "two" 3 "three" 4 "four"
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|

## ZRANK
Source file: `raw/sources/20260409-docs-latest-commands-zrank-5d4be1ee95.md`
- The rank (or index) is 0-based, which means that the member with the lowest
- The optional `WITHSCORE` argument supplements the command's reply with the score of the element returned.
- Use [`ZREVRANK`]() to get the rank of an element with the scores ordered from high
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|

## ZREM
Source file: `raw/sources/20260409-docs-latest-commands-zrem-55ed5be73d.md`
- An error is returned when `key` exists and does not hold a sorted set.
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |
- [Integer reply](../../develop/reference/protocol-spec#integers): the number of members removed from the sorted set, not including non-existing members.

## ZREMRANGEBYLEX
Source file: `raw/sources/20260409-docs-latest-commands-zremrangebylex-5c0dbd71ac.md`
- The meaning of `min` and `max` are the same of the [`ZRANGEBYLEX`]() command. Similarly, this command actually removes the same elements that [`ZRANGEBYLEX`]() would return if called with the same `min` and `max` arguments.
- ZADD myzset 0 foo 0 zap 0 zip 0 ALPHA 0 alpha
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |

## ZREMRANGEBYRANK
Source file: `raw/sources/20260409-docs-latest-commands-zremrangebyrank-2d8eae7820.md`
- Both `start` and `stop` are `0` -based indexes with `0` being the element with
- These indexes can be negative numbers, where they indicate offsets starting at
- For example: `-1` is the element with the highest score, `-2` the element with
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|

## ZREMRANGEBYSCORE
Source file: `raw/sources/20260409-docs-latest-commands-zremrangebyscore-bed31a2e0a.md`
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |
- [Integer reply](../../develop/reference/protocol-spec#integers): the number of members removed.
- [Integer reply](../../develop/reference/protocol-spec#integers): Number of members removed.

## ZREVRANGE
Source file: `raw/sources/20260409-docs-latest-commands-zrevrange-ee9b1dc15e.md`
- The elements are considered to be ordered from the highest to the lowest score.
- Descending lexicographical order is used for elements with equal score.
- Apart from the reversed ordering, `ZREVRANGE` is similar to [`ZRANGE`]().
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|

## ZREVRANGEBYLEX
Source file: `raw/sources/20260409-docs-latest-commands-zrevrangebylex-bf2c942554.md`
- Apart from the reversed ordering, `ZREVRANGEBYLEX` is similar to [`ZRANGEBYLEX`]().
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | Deprecated as of Redis v6.2.0. |
- [Array reply](../../develop/reference/protocol-spec#arrays): a list of members in the specified score range.

## ZREVRANGEBYSCORE
Source file: `raw/sources/20260409-docs-latest-commands-zrevrangebyscore-9df5956867.md`
- and `min` (including elements with score equal to `max` or `min`).
- In contrary to the default ordering of sorted sets, for this command the
- elements are considered to be ordered from high to low scores.
- The elements having the same score are returned in reverse lexicographical
- Apart from the reversed ordering, `ZREVRANGEBYSCORE` is similar to

## ZREVRANK
Source file: `raw/sources/20260409-docs-latest-commands-zrevrank-a8b99e4b73.md`
- The rank (or index) is 0-based, which means that the member with the highest
- The optional `WITHSCORE` argument supplements the command's reply with the score of the element returned.
- Use [`ZRANK`]() to get the rank of an element with the scores ordered from low to
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|

## ZSCAN
Source file: `raw/sources/20260409-docs-latest-commands-zscan-cd1789cb41.md`
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |
- [Array reply](../../develop/reference/protocol-spec#arrays): cursor and scan response in array form.
- [Array reply](../../develop/reference/protocol-spec#arrays): cursor and scan response in array form.

## ZSCORE
Source file: `raw/sources/20260409-docs-latest-commands-zscore-715daa3769.md`
- If `member` does not exist in the sorted set, or `key` does not exist, `nil` is
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |
- * [Bulk string reply](../../develop/reference/protocol-spec#bulk-strings): the score of the member (a double-precision floating point number), represented as a string.

## ZUNION
Source file: `raw/sources/20260409-docs-latest-commands-zunion-bf41dbb8e6.md`
- This command's behavior varies in clustered Redis environments. See the [multi-key operations]() page for more information.
- This command is similar to [`ZUNIONSTORE`](), but instead of storing the resulting
- sorted set, it is returned to the client.
- For a description of the `WEIGHTS` and `AGGREGATE` options, see [`ZUNIONSTORE`]().
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |

## ZUNIONSTORE
Source file: `raw/sources/20260409-docs-latest-commands-zunionstore-8ec696c05f.md`
- This command's behavior varies in clustered Redis environments. See the [multi-key operations]() page for more information.
- Computes the union of `numkeys` sorted sets given by the specified keys, and
- It is mandatory to provide the number of input keys (`numkeys`) before passing
- the input keys and the other (optional) arguments.
- By default, the resulting score of an element is the sum of its scores in the

## How agents work
Source file: `raw/sources/20260409-docs-latest-develop-ai-agent-builder-agent-concepts-377fa9acde.md`
- AI agents are autonomous systems that go far beyond simple chatbots. They combine large language models (LLMs) with external tools, memory, and planning capabilities to accomplish complex tasks.
- Every user interaction follows a 6-step cycle that makes agents intelligent:
- > Example: When you ask "Book me a flight to Paris and find a hotel," the agent breaks this into separate tasks, remembers your travel preferences, searches for options, and coordinates the booking process.
- Redis is the **ideal foundation** for AI agents because it excels at the three things agents need most: **speed**, **memory**, and **search**.
- <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">

## Featureform overview
Source file: `raw/sources/20260409-docs-latest-develop-ai-featureform-overview-355a5b7eb9.md`
- Featureform is a feature engineering and feature serving workflow built for teams that want to define machine learning features in code while keeping their existing data platforms. It gives application teams a declarative Python SDK for working with providers, datasets, transformations, entities, features, labels, training sets, and online feature serving.
- In a typical deployment, Featureform reads or computes feature data in an offline system such as Snowflake, BigQuery, or Databricks and materializes selected features to Redis for low-latency inference.
- The Featureform workflow follows a consistent progression:
- 1. Register providers for your offline systems and your Redis online store.
- 2. Register datasets that represent raw inputs or curated tables.

## Connect providers in Featureform
Source file: `raw/sources/20260409-docs-latest-develop-ai-featureform-providers-31129abb17.md`
- Use providers to connect Featureform to the systems where your data already lives.
- Redis is the online provider in the Featureform workflow.
- Before you register providers, make sure you have:
- Featureform's current provider APIs rely heavily on catalog configuration. For Snowflake and Databricks, make sure you choose the catalog model before you register providers or datasets.
- Featureform supports several offline systems, including:

## Streaming features in Featureform
Source file: `raw/sources/20260409-docs-latest-develop-ai-featureform-streaming-ee9c8de533.md`
- Featureform supports stream-backed feature workflows for use cases that need continuously updated online values while preserving historical correctness for training.
- This page focuses on the documented SDK surface: register Kafka, define a streaming transformation, define features with `from_stream(...)`, optionally backfill from a batch source, materialize a feature view, and serve it from Redis.
- Before you build streaming features, you need:
- If the stream is the online source of truth but you already have historical data in batch storage, backfill the stream-backed feature:

## Redis LangCache
Source file: `raw/sources/20260409-docs-latest-develop-ai-langcache-4ca2e6f401.md`
- Redis LangCache is a fully-managed semantic caching service that reduces large language model (LLM) costs and improves response times for AI applications.
- [Get started](#get-started) with LangCache on [Redis Cloud]() or join the [private preview](https://redis.io/langcache/).
- LangCache uses semantic caching to store and reuse previous LLM responses for repeated queries. Instead of calling the LLM for every request, LangCache checks if a similar response has already been generated and is stored in the cache. If a match is found, LangCache returns the cached response instantly, saving time and resources.
- Imagine youâre using an LLM to build an agent to answer questions about your company's products. Your users may ask questions like the following:
- These prompts may have slight variations, but they essentially ask the same question. LangCache can help you avoid calling the LLM for each of these prompts by caching the response to the first prompt and returning it for any similar prompts.

## Use the LangCache API and SDK
Source file: `raw/sources/20260409-docs-latest-develop-ai-langcache-api-examples-9a8cf89c39.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- Use the [LangCache API]() from your client app to store and retrieve LLM, RAG, or agent responses.
- You can use any standard REST client or library to access the API. If your app is written in Python or Javascript, you can also use the LangCache Software Development Kits (SDKs) to access the API:
- When you call the API, you need to pass the LangCache API key in the `Authorization` header as a Bearer token and the Cache ID as the `cacheId` path parameter.

## LLM Cache
Source file: `raw/sources/20260409-docs-latest-develop-ai-redisvl-api-cache-8f7b2c2832.md`
- Semantic Cache for Large Language Models.
- Semantic Cache for Large Language Models.
- * **name** (*str* *,* *optional*) â The name of the semantic cache search index.
- * **distance_threshold** (*float* *,* *optional*) â Semantic threshold for the
- * **ttl** (*Optional* *[* *int* *]* *,* *optional*) â The time-to-live for records cached

## Rerankers
Source file: `raw/sources/20260409-docs-latest-develop-ai-redisvl-api-reranker-dcb427aa43.md`
- The CohereReranker class uses Cohereâs API to rerank documents based on an
- This reranker is designed to interact with Cohereâs /rerank API,
- requiring an API key for authentication. The key can be provided
- directly in the api_config dictionary or through the COHERE_API_KEY
- environment variable. User must obtain an API key from Cohereâs website

## Vectorizers
Source file: `raw/sources/20260409-docs-latest-develop-ai-redisvl-api-vectorizer-669a1e15b5.md`
- The HFTextVectorizer class leverages Hugging Faceâs Sentence Transformers
- for generating vector embeddings from text input.
- This vectorizer is particularly useful in scenarios where advanced natural language
- processing and understanding are required, and ideal for running on your own
- You can optionally enable caching to improve performance when generating

## Install RedisVL
Source file: `raw/sources/20260409-docs-latest-develop-ai-redisvl-overview-installation-db5f3f6df7.md`
- There are a few ways to install RedisVL. The easiest way is to use pip.
- Install `redisvl` into your Python (>=3.8) environment using `pip`:
- RedisVL comes with a few dependencies that are automatically installed, however, a few dependencies
- are optional and can be installed separately if needed:
- If you use ZSH, remember to escape the brackets:

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

## Schema definition
Source file: `raw/sources/20260409-docs-latest-develop-ai-search-and-query-indexing-schema-definition-953a297706.md`
- An index structure is defined by a schema. The schema specifies the fields, their types, whether they should be indexed or stored, and other additional configuration options. By properly configuring the schema, you can optimize search performance and control the storage requirements of your index.
- In this example, a schema is defined for an index named `idx` that will index all hash documents whose keyname starts with `blog:post:`.
- The schema includes the fields `title`, `content`, `author`, `created_date`, and `views`. The `TEXT` type indicates that the `title` and `content` fields are text-based, the `TAG` type is used for the `author` field, and the `NUMERIC` type is used for the `created_date` and `views` fields. Additionally, a weight of 5.0 is assigned to the `title` field to give it more relevance in search results, and `created_date` is marked as `SORTABLE` to enable sorting based on this field.
- You can learn more about the available field types and options on the [`FT.CREATE`]() page.
- Index books that have a `categories` attribute, where each category is separated by a `;` character.

## Client-side caching introduction
Source file: `raw/sources/20260409-docs-latest-develop-clients-client-side-caching-b6986bd33d.md`
- *Client-side caching* reduces network traffic between
- a Redis client and the server, which generally improves performance.
- By default, an [application server](https://en.wikipedia.org/wiki/Application_server)
- (which sits between the user app and the database) contacts the
- Redis database server through the client library for every read request.

## Connect to the server
Source file: `raw/sources/20260409-docs-latest-develop-clients-dotnet-connect-a46976b029.md`
- You can connect to the server simply by passing a string of the
- form "hostname:port" to the `Connect()` method (for example,
- "localhost:6379"). However, you can also connect using a
- username, password, and many other options:
- if it is available without any special configuration. However, if you know

## Error handling
Source file: `raw/sources/20260409-docs-latest-develop-clients-error-handling-c2b03438a1.md`
- When working with Redis, errors can occur for various reasons, including network issues, invalid commands, or resource constraints. This guide explains the types of errors you might encounter and how to handle them effectively.
- Redis errors fall into four main categories. The table below provides a quick overview of each type. Click on any error type to jump to its detailed section, which includes common causes, examples, handling strategies, and code examples.
- | Error Type | Common Causes | When to Handle | Examples |
- | [Connection errors](#connection-errors) | Network issues, server down, auth failure, timeouts, pool exhaustion | Almost always | `ConnectionError`, `TimeoutError`, `AuthenticationError` |
- | [Command errors](#command-errors) | Typo in command, wrong arguments, invalid types, unsupported command | Rarely (usually indicates a bug) | `ResponseError`, `WRONGTYPE`, `ERR unknown command` |

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

## Observability
Source file: `raw/sources/20260409-docs-latest-develop-clients-go-observability-d7592a1fd9.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- instrumentation to collect metrics. This can be very helpful for
- diagnosing problems and improving the performance and connection resiliency of
- for an introduction to Redis client observability and a reference guide for the

## Connect to the server
Source file: `raw/sources/20260409-docs-latest-develop-clients-ioredis-connect-6807a0ee01.md`
- You can also specify a full set of connection options:
- To connect to a Redis cluster, use `Redis.Cluster()`, passing an array of
- When you deploy your application, use TLS and follow the [Redis security]() guidelines.

## Connect to Azure Managed Redis
Source file: `raw/sources/20260409-docs-latest-develop-clients-jedis-amr-73e37e4339.md`
- The [`redis-authx-entraid`](https://github.com/redis/jvm-redis-authx-entraid) package
- [Azure Managed Redis (AMR)](https://azure.microsoft.com/en-us/products/managed-redis)
- using [Microsoft Entra ID](https://learn.microsoft.com/en-us/entra/identity/).
- You can authenticate using a system-assigned or user-assigned
- [managed identity](https://learn.microsoft.com/en-us/entra/identity/managed-identities-azure-resources/overview)

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

## Production usage
Source file: `raw/sources/20260409-docs-latest-develop-clients-jedis-produsage-6bf698f9e6.md`
- This guide offers recommendations to get the best reliability and
- performance in your production environment.
- Each item in the checklist below links to the section
- for a recommendation. Use the checklist icons to record your
- progress in implementing the recommendations.

## Connect to Azure Managed Redis
Source file: `raw/sources/20260409-docs-latest-develop-clients-lettuce-amr-b033824fc0.md`
- The [`redis-authx-entraid`](https://github.com/redis/jvm-redis-authx-entraid) package
- [Azure Managed Redis (AMR)](https://azure.microsoft.com/en-us/products/managed-redis)
- using [Microsoft Entra ID](https://learn.microsoft.com/en-us/entra/identity/).
- You can authenticate using a system-assigned or user-assigned
- [managed identity](https://learn.microsoft.com/en-us/entra/identity/managed-identities-azure-resources/overview)

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

## Connect to Azure Managed Redis
Source file: `raw/sources/20260409-docs-latest-develop-clients-nodejs-amr-bcf3d42e43.md`
- The [`@redis/entraid`](https://github.com/redis/node-redis/tree/master/packages/entraid)
- package lets you authenticate your app to
- [Azure Managed Redis (AMR)](https://azure.microsoft.com/en-us/products/managed-redis)
- using [Microsoft Entra ID](https://learn.microsoft.com/en-us/entra/identity/).
- You can authenticate using a system-assigned or user-assigned

## Connect to the server
Source file: `raw/sources/20260409-docs-latest-develop-clients-nodejs-connect-c9ecafe0b3.md`
- To connect to a different host or port, use a connection string in the format `redis[s]://[[username][:password]@][host][:port][/db-number]`:
- To check if the client is connected and ready to send commands, use `client.isReady`, which returns a Boolean. `client.isOpen` is also available. This returns `true` when the client's underlying socket is open, and `false` when it isn't (for example, when the client is still connecting or reconnecting after a network error).
- To connect to a Redis cluster, use `createCluster`.
- When you deploy your application, use TLS and follow the [Redis security]() guidelines.
- You can also use discrete parameters and UNIX sockets. Details can be found in the [client configuration guide](https://github.com/redis/node-redis/blob/master/docs/client-configuration.md).

## Redis patterns example
Source file: `raw/sources/20260409-docs-latest-develop-clients-patterns-twitter-clone-1923224439.md`
- This article describes the design and implementation of a [very simple Twitter clone](https://github.com/antirez/retwis) written using PHP with Redis as the only database. The programming community has traditionally considered key-value stores as a special purpose database that couldn't be used as a drop-in replacement for a relational database for the development of web applications. This article will try to show that Redis data structures on top of a key-value layer are an effective data model to implement many kinds of applications.
- Note: the original version of this article was written in 2009 when Redis was
- released. It was not exactly clear at that time that the Redis data model was
- suitable to write entire applications. Now after 5 years there are many cases of
- applications using Redis as their main store, so the goal of the article today

## Connect to the server
Source file: `raw/sources/20260409-docs-latest-develop-clients-php-connect-3dad3f5fa7.md`
- Connect to a locally-running server on the standard port (6379)
- Store and retrieve a simple string to test the connection:
- To connect to a Redis cluster, specify one or more of the nodes in
- the `clusterNodes` parameter and set `'cluster'=>'redis'` in
- When you deploy your application, use TLS and follow the

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

## Production usage
Source file: `raw/sources/20260409-docs-latest-develop-clients-redis-py-produsage-daef7ee89c.md`
- This guide offers recommendations to get the best reliability and
- performance in your production environment.
- Each item in the checklist below links to the section
- for a recommendation. Use the checklist icons to record your
- progress in implementing the recommendations.

## Connect to Azure Managed Redis
Source file: `raw/sources/20260409-docs-latest-develop-clients-rust-amr-e29c7c68ea.md`
- The `entra-id` feature lets you authenticate your app to
- [Azure Managed Redis (AMR)](https://azure.microsoft.com/en-us/products/managed-redis)
- using [Microsoft Entra ID](https://learn.microsoft.com/en-us/entra/identity/).
- You can authenticate using a system-assigned or user-assigned
- [managed identity](https://learn.microsoft.com/en-us/entra/identity/managed-identities-azure-resources/overview)

## Error handling
Source file: `raw/sources/20260409-docs-latest-develop-clients-rust-error-handling-c0e96e106d.md`
- redis-rs uses **Result types** following Rust's idiomatic error handling pattern. Code examples in the documentation often omit error handling for brevity,
- This page explains how error handling works in redis-rs and how to apply
- some common error handling patterns. For an overview of error types and handling
- In Rust, functions return errors using the `Result<T, E>` type. You can check for errors explicitly with code like the following:
- redis-rs provides a `RedisError` type with various error kinds. Common error kinds include:

## Redis data types
Source file: `raw/sources/20260409-docs-latest-develop-data-types-b171cc3048.md`
- At its core, Redis provides a collection of native data types that help you solve a wide variety of problems, from [caching]() to
- Below is a short description of each data type, with links to broader overviews and command references.
- Each overview includes a comprehensive tutorial with code samples.
- for advice on which of the general-purpose data types is best for common tasks.
- [Redis strings]() are the most basic Redis data type, representing a sequence of bytes.

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

## HyperLogLog
Source file: `raw/sources/20260409-docs-latest-develop-data-types-probabilistic-hyperloglogs-3cb22b5562.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- [View all hyperloglog commands](https://redis.io/commands/?group=hyperloglog)
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

## Redis programmability
Source file: `raw/sources/20260409-docs-latest-develop-programmability-654a626f4a.md`
- Redis provides a programming interface that lets you execute custom scripts on the server itself. In Redis 7 and beyond, you can use [Redis Functions]() to manage and run your scripts. In Redis 6.2 and below, you use [Lua scripting with the EVAL command]() to program the server.
- Redis is, by [definition](https://github.com/redis/redis/blob/unstable/MANIFESTO#L7), a _"domain-specific language for abstract data types"_.
- The language that Redis speaks consists of its [commands]().
- Most the commands specialize at manipulating core [data types]() in different ways.
- In many cases, these commands provide all the functionality that a developer requires for managing application data in Redis.

## Redis Lua API reference
Source file: `raw/sources/20260409-docs-latest-develop-programmability-lua-api-5e7f63b52b.md`
- Redis includes an embedded [Lua 5.1](https://www.lua.org/) interpreter.
- The interpreter runs user-defined [ephemeral scripts]() and [functions](). Scripts run in a sandboxed context and can only access specific Lua packages. This page describes the packages and APIs available inside the execution's context.
- The sandboxed Lua context attempts to prevent accidental misuse and reduce potential threats from the server's environment.
- Scripts should never try to access the Redis server's underlying host systems.
- That includes the file system, network, and any other attempt to perform a system call other than those supported by the API.

## Client-side caching reference
Source file: `raw/sources/20260409-docs-latest-develop-reference-client-side-caching-06a7fb3dbd.md`
- This document is intended as an in-depth reference for
- Client-side caching is a technique used to create high performance services.
- It exploits the memory available on application servers, servers that are
- usually distinct computers compared to the database nodes, to store some subset
- of the database information directly in the application side.

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

## Command key specifications
Source file: `raw/sources/20260409-docs-latest-develop-reference-key-specs-5cc66c7703.md`
- Many of the commands in Redis accept key names as input arguments.
- The 9th element in the reply of [`COMMAND`]() (and [`COMMAND INFO`]()) is an array that consists of the command's key specifications.
- A _key specification_ describes a rule for extracting the names of one or more keys from the arguments of a given command.
- Key specifications provide a robust and flexible mechanism, compared to the _first key_, _last key_ and _step_ scheme employed until Redis 7.0.
- Before introducing these specifications, Redis clients had no trivial programmatic means to extract key names for all commands.

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

## Redis serialization protocol specification
Source file: `raw/sources/20260409-docs-latest-develop-reference-protocol-spec-cf88d4fbfa.md`
- To communicate with the Redis server, Redis clients use a protocol called Redis Serialization Protocol (RESP).
- While the protocol was designed specifically for Redis, you can use it for other client-server software projects.
- RESP is a compromise among the following considerations:
- RESP can serialize different data types including integers, strings, and arrays.
- It also features an error-specific type.

## Redis CLI
Source file: `raw/sources/20260409-docs-latest-develop-tools-cli-b434c7f7fe.md`
- In interactive mode, `redis-cli` has basic line editing capabilities to provide a familiar typing experience.
- To launch the program in special modes, you can use several options, including:
- * Simulate a replica and print the replication stream it receives from the primary.
- * Check the latency of a Redis server and display statistics.
- * Request ASCII-art spectrogram of latency samples and frequencies.

## Redis Insight
Source file: `raw/sources/20260409-docs-latest-develop-tools-insight-e61244bd56.md`
- [![Discord](https://img.shields.io/discord/697882427875393627?style=flat-square)](https://discord.gg/QUkjSsk)
- [![Github](https://img.shields.io/static/v1?label=&message=repository&color=5961FF&logo=github)](https://github.com/redisinsight/redisinsight/)
- Redis Insight is a powerful tool for visualizing and optimizing data in Redis, making real-time application development easier and more fun than ever before. Redis Insight lets you do both GUI- and CLI-based interactions in a fully-featured desktop GUI client.
- <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
- * Automatically discover and add your local Redis databases (that use standalone connection type and do not require authentication).

## RedisInsight v2.36.0, October 2023
Source file: `raw/sources/20260409-docs-latest-develop-tools-insight-release-notes-v-2-36-0-45bb1a821c.md`
- This is the General Availability (GA) release of RedisInsight 2.36.

## RedisInsight v2.40.0, December 2023
Source file: `raw/sources/20260409-docs-latest-develop-tools-insight-release-notes-v-2-40-0-2e7a6ce35f.md`
- This is the General Availability (GA) release of RedisInsight 2.40.

## RedisInsight v2.44.0, February 2024
Source file: `raw/sources/20260409-docs-latest-develop-tools-insight-release-notes-v-2-44-0-df3eef7807.md`
- This is the General Availability (GA) release of RedisInsight 2.44.

## Redis Insight v2.48.0, April 2024
Source file: `raw/sources/20260409-docs-latest-develop-tools-insight-release-notes-v-2-48-0-429867a9cd.md`
- This is the General Availability (GA) release of Redis Insight 2.48.

## Redis Insight v2.54.0, August 2024
Source file: `raw/sources/20260409-docs-latest-develop-tools-insight-release-notes-v-2-54-0-28b1524349.md`
- This is the General Availability (GA) release of Redis Insight 2.54.
- Support for [Redis Data Integration (RDI)](https://redis.io/data-integration/?utm_source=redisinsight&utm_medium=repository&utm_campaign=release_notes) - a powerful tool designed to seamlessly synchronize data from your existing database to Redis in near real-time. RDI establishes a data streaming pipeline that mirrors data from your existing database to Redis Software, so if a record is added or updated, those changes automatically flow into Redis. This no-code solution enables seamless data integration and faster data access so you can build real-time apps at any scale. And now you can seamlessly create, validate, deploy, and monitor your data pipelines directly from Redis Insight.

## Redis Insight v2.56.0, September 2024
Source file: `raw/sources/20260409-docs-latest-develop-tools-insight-release-notes-v-2-56-0-457a856896.md`
- This is the General Availability (GA) release of Redis Insight 2.56.

## Redis Insight v2.62.0, November 2024
Source file: `raw/sources/20260409-docs-latest-develop-tools-insight-release-notes-v-2-62-0-4102af947d.md`
- This is the General Availability (GA) release of Redis Insight 2.62.
- | Windows | ibZ5kn0GSdrbnfHRWC1lDdKozn6YllcGIrDhmLEnt2K1rjgjL2kGKvbtfq9QEkumgGwk2a9zTjr0u5zztGHriQ== |
- | Linux AppImage | bM6lbyeAHFX/f0sBehu9a9ifHsDvX8o/2qn91sdtyiRcIU+f31+Ch7K4NI4v226rgj6LvkFDWDNq6VQ4pyLAPA== |
- | Linux Debian| ilD86T/+8gEgrZg8MS8Niv/8g54FPeEn1nZrUI6DA7KTl3owqzqD0npb8fdAdL6YtSRbSBUK2fXPQ6GRXWZ/GA== |
- | MacOS Intel | pSy3CvRfVIT3O7BXUPMUoONRaZCOA1965tF9T19gZ1NnUn9YkjWlNXdniQHZ4ALKbpC2q62ygt39xF6O52LxAw== |

## Redis Insight v2.68.0, April 2025
Source file: `raw/sources/20260409-docs-latest-develop-tools-insight-release-notes-v-2-68-0-617436a31b.md`
- This is the General Availability (GA) release of Redis Insight 2.68.
- | Windows | 50YAPT59n2cLQu+P7kvc+kT+FxnW67pV53F1xz/C1IfgjmycgWpemycosbooQdLvXWPK4GLgk/NOnoZMI/15Lg== |
- | Linux AppImage | QbI7V8jCCVPum4jdd1W8CEOqT+iFzwUTrt9tVbu9Kpv81Pub27aIJve3kWDdXWyvxHPUlUOsBHIo/uHIzdFJPw== |
- | Linux Debian| V0/W8RclF6q0uT6uBR/lDNMt+OXqm7xmkSYf9vd8xCe4mGWUQBHiACX/aIgWs8l3Na5AQCNSJLrHnDXWiDD9Fw== |
- | MacOS Intel | j3bdEX0rvxPGBUMZ6hD9aD+C/WTR1bOZT+lekJqujkDnRSPMZS5syGfkd1cQfx8QSnM10qYBO4RCH0Ew0m3g0A== |

## Redis Insight v2.70.1, July 2025
Source file: `raw/sources/20260409-docs-latest-develop-tools-insight-release-notes-v-2-70-1-8214a06f30.md`
- This is a maintenance release for Redis Insight 2.70.
- Update urgency: `LOW` No need to upgrade unless there are new features you want to use.
- | Windows | yg+7OLp+KdWgPXwVXWsk26zODO3PoMMhFzNdDQy8FSy1R+lHZAqA42JBA9JNFHUtalZy1k/I3tyZ71TUeSsn+w== |
- | Linux AppImage | hx5XhNIyhna6nYW7wXFjj2XdaDvaq+Fro7qr+iae6cYuY7IO5sH2+oOVVva07yAno02zwxslmNuDkiRWcc5rGw== |
- | Linux Debian| pSwGCXGpxihwymQJOWcbA2Bq97tnSPtnXoIBQ0uut0bwc1SfisHML526a/2ypbyr53TzD0Ut73B+DvWHeRTSbA== |

## Redis Insight v3.2.0, February 2026
Source file: `raw/sources/20260409-docs-latest-develop-tools-insight-release-notes-v-3-2-0-65ce61fccc.md`
- This is the General Availability (GA) release of Redis Insight 3.2.0, which includes new features, build updates, and bug fixes.
- Connect to Azure Managed Redis with ease. Auto-discover databases across subscriptions with one-click import and connect using Entra ID and Azure passwordless (OAuth) authentication. To get started, follow the [Azure setup guide](https://github.com/RedisInsight/RedisInsight/blob/main/docs/azure-setup.md) to configure the required permissions.
- | Package             | SHA-512                                                                                  |
- | ------------------- | ---------------------------------------------------------------------------------------- |
- | Windows             | 4sgqVLCjqEmg3N9kAQUZXu1ORln9/RJaQazRK0GLJP9PdCoE57DvdLIQ0NWyo2Y7gKaciWnbYSALSYy1aEaWKA== |

## RedisInsight v1.11, Oct 2021
Source file: `raw/sources/20260409-docs-latest-develop-tools-insight-release-notes-v1-11-0-b3b60a2875.md`
- This is the maintenance release of RedisInsight 1.11 (v1.11.1)!
- This is the General Availability Release of RedisInsight 1.11 (v1.11.0)!

## RedisInsight v1.12, May 2022
Source file: `raw/sources/20260409-docs-latest-develop-tools-insight-release-notes-v1-12-0-92a546509b.md`
- This is the maintenance release of RedisInsight 1.12 (v1.12.1)!
- This is the General Availability Release of RedisInsight 1.12 (v1.12.0)!

## RedisInsight v1.2, January 2020
Source file: `raw/sources/20260409-docs-latest-develop-tools-insight-release-notes-v1-2-0-048b53e7f3.md`
- This is a maintenance release for version 1.2.
- This is a maintenance release for version 1.2.
- In certain situations, the server process was being orphaned after the main process died. This resulted in a several issues, of which the "blank page issue" was the most common. Now that the server process is in a thread instead of a process, the server is not left running when the process exits.

## RedisInsight v1.3, March 2020
Source file: `raw/sources/20260409-docs-latest-develop-tools-insight-release-notes-v1-3-0-4ce2a6a446.md`
- This is the maintenance release of RedisInsight 1.3 (v1.3.1).
- This is the General Availability release of RedisInsight 1.3 (v1.3.0)!
- their cloud databases with just a few clicks

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

## RedisInsight v2.0, Nov 2021
Source file: `raw/sources/20260409-docs-latest-develop-tools-insight-release-notes-v2-0-0b89a8606a.md`
- This is the General Availability (GA) release of RedisInsight 2.0.6
- This is the General Availability (GA) release of RedisInsight 2.0.
- * **Tree view** - A new view of the keys in Browser, which automatically groups keys scanned in your database into folders based on key namespaces. Now you can navigate through and analyze your list of keys quicker by opening only folders with namespaces you want.
- * **Support for Apple M1 (arm64)** - You can download it [here](https://redis.com/redis-enterprise/redis-insight/#insight-form).
- * **Added auto-discovery of local databases** - RedisInsight will automatically find and add your local databases when you open the application for the first time.

## Redis for VS Code
Source file: `raw/sources/20260409-docs-latest-develop-tools-redis-for-vscode-b6f95cc08f.md`
- Redis for VS Code is an extension that allows you to connect to your Redis databases from within Microsoft Visual Studio Code.
- After connecting to a database, you can view, add, modify, and delete keys, and interact with your Redis databases using a Redis Insight like UI and also a built-in CLI interface.
- Open VS Code and click on the **Extensions** menu button. In the **Search Extensions in Marketplace** field, type "Redis for VS Code" and press the `enter` or `return` key. There may be more than one option shown, so be sure to click on the extension published by Redis. The correct extension is shown below. Click on the **Install** to install the extension.
- Once installed, check the **Auto Update** button to allow VS Code to install future revisions of the extension automatically.
- After installing the extension, your VS Code menu will look similar to the following.

## Redis for VS Code v1.0.0, September 2024
Source file: `raw/sources/20260409-docs-latest-develop-tools-redis-for-vscode-release-notes-v1-0-0-7ea8056de3.md`
- This is the first release of Redis for VS Code.
- Redis for VS Code is the official Visual Studio Code extension that provides an intuitive and efficient GUI for Redis databases, developed by Redis.
- * Universal Redis Support: Connect to any Redis instance, including Redis Open Source, Redis Cloud, Redis Software, and Redis on Azure Cache.
- * Advanced Connectivity: Supports TLS certificates and SSH tunnels, with an option for automatic data decompression for GZIP, SNAPPY, Brotli, and more.
- * Data types: Supports strings, hashes, lists, sets, sorted sets, and JSON.

## Redis session store
Source file: `raw/sources/20260409-docs-latest-develop-use-cases-session-store-3c6f0d85ab.md`
- This guide family shows how to store web sessions in Redis so multiple application servers can share session state.
- A Redis-backed session store is a good fit when you need:
- * Shared session state across multiple web servers
- * Fast reads and writes for authenticated user state
- * Automatic session expiration after inactivity

## Redis session store with .NET
Source file: `raw/sources/20260409-docs-latest-develop-use-cases-session-store-dotnet-85956cd111.md`
- This guide shows you how to implement a Redis-backed session store in .NET with [`StackExchange.Redis`](). It includes a small local web server built with ASP.NET Core minimal APIs so you can see the session lifecycle end to end.
- Session storage is a common Redis use case for web applications. Instead of keeping session state in local process memory, you store it in Redis and send the browser only an opaque session ID in a cookie.
- * Shared sessions across multiple app servers
- * Fast reads and updates for small pieces of per-user state
- * A clean separation between browser cookies and server-side session data

## Redis session store with Go
Source file: `raw/sources/20260409-docs-latest-develop-use-cases-session-store-go-248010bda2.md`
- This guide shows you how to implement a Redis-backed session store in Go with the [`go-redis`]() client library. It includes a small local web server built with Go's standard `net/http` package so you can see the session lifecycle end to end.
- Session storage is a common Redis use case for web applications. Instead of keeping session state in local process memory, you store it in Redis and send the browser only an opaque session ID in a cookie.
- * Shared sessions across multiple app servers
- * Fast reads and updates for small pieces of per-user state
- * A clean separation between browser cookies and server-side session data

## Redis session store with Java and Jedis
Source file: `raw/sources/20260409-docs-latest-develop-use-cases-session-store-java-jedis-4935af20fb.md`
- This guide shows you how to implement a Redis-backed session store in Java with [`Jedis`](). It includes a small local web server built with Java's built-in `HttpServer` so you can see the session lifecycle end to end.
- Session storage is a common Redis use case for web applications. Instead of keeping session state in local process memory, you store it in Redis and send the browser only an opaque session ID in a cookie.
- * Shared sessions across multiple app servers
- * Fast reads and updates for small pieces of per-user state
- * A clean separation between browser cookies and server-side session data

## Redis session store with Java (Lettuce)
Source file: `raw/sources/20260409-docs-latest-develop-use-cases-session-store-java-lettuce-87c225637e.md`
- This guide shows you how to implement a Redis-backed session store in Java with [`Lettuce`](). It includes both asynchronous and reactive store APIs, plus a small local demo server built on Java's built-in `HttpServer`.
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

## Redis session store with PHP
Source file: `raw/sources/20260409-docs-latest-develop-use-cases-session-store-php-a78f7ae51d.md`
- This guide shows you how to implement a Redis-backed session store in PHP with [Predis](). It includes a small local web server using PHP's built-in development server so you can see the session lifecycle end to end.
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

## Redis session store with Ruby
Source file: `raw/sources/20260409-docs-latest-develop-use-cases-session-store-ruby-c7e6a484c5.md`
- This guide shows you how to implement a Redis-backed session store in Ruby with [`redis-rb`](). It includes a small local web server built with WEBrick so you can see the session lifecycle end to end.
- Session storage is a common Redis use case for web applications. Instead of keeping session state in local process memory, you store it in Redis and send the browser only an opaque session ID in a cookie.
- * Shared sessions across multiple app servers
- * Fast reads and updates for small pieces of per-user state
- * A clean separation between browser cookies and server-side session data

## Redis session store with Rust
Source file: `raw/sources/20260409-docs-latest-develop-use-cases-session-store-rust-15e14eb6f9.md`
- This guide shows you how to implement a Redis-backed session store in Rust with [`redis-rs`](). The module includes both synchronous and asynchronous APIs, and the demo server uses the async path so you can see the session lifecycle end to end.
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

## Redis 7.2
Source file: `raw/sources/20260409-docs-latest-develop-whats-new-7-2-df57bd90f6.md`
- Redis version 7.2 introduces new capabilities, including improved geospatial queries, and streamlined JSON data manipulation. Performance optimizations, client-side enhancements, and behavioral refinements further improve the efficiency, security, and usability of Redis.
- Below is a detailed breakdown of these updates.
- Redis Search now supports querying geospatial data using polygon search, enabling developers to efficiently filter and retrieve data within complex geographic boundaries.
- JSON now includes two new commands for improved data handling:
- Significant performance improvements have been made across Redis data types. Sorted sets, commonly used for gaming leaderboards, now see performance improvements ranging from [30% to 100%](https://redis.io/blog/introducing-redis-7-2/#:~:text=We%20made%20Redis%20more%20powerful%20for%20developers).

## Redis 7.4
Source file: `raw/sources/20260409-docs-latest-develop-whats-new-7-4-961ca290a0.md`
- Redis 7.4 introduces several new features and improvements aimed at enhancing memory efficiency, performance, and ease of use for various applications. These updates include support for hash field expiration, new memory-efficient data types for AI workloads, simplified secondary indexing, and time series optimizations. Additionally, Redis 7.4 brings several behavior and component changes.
- Below is a detailed breakdown of these updates.
- Redis 7.4 adds the ability to set expiration times for individual hash fields or adjust their remaining TTL. This feature, long-requested by users, improves memory efficiency and performance, especially in caching and session storage scenarios.
- With the growing demand for AI applications, Redis 7.4 introduces `BFLOAT16` and `FLOAT16` data types. These new types reduce memory usage by up to 47% and lower latency by as much as 59% under load, making them ideal for storing and processing vector embeddings in AI-powered applications, including vector databases and Retrieval Augmented Generation (RAG) systems.
- Redis 7.4 introduces insertion filters for time series data, allowing sensors to ignore new measurements when the differences in time or value are minimal. This feature helps reduce the size of time series data and boosts efficiency.

## Redis 8.0
Source file: `raw/sources/20260409-docs-latest-develop-whats-new-8-0-b1f18ec6bd.md`
- Redis 8.0 introduces powerful new capabilities, including the beta release of the Vector Set data structure, designed for AI use cases such as semantic search and recommendation systems.
- This release also delivers over 30 performance improvements, including:
- Additionally, the Redis Community Edition has been renamed to Redis Open Source, marking a shift toward a unified, modern distribution. This version offers the full power of Redis â no modules, no fragmentation â just Redis.
- Below is a detailed breakdown of these updates.
- The new `Vector set` data structure supports high-dimensional vector similarity search, which is ideal for AI use cases such as semantic search and recommendation systems. Vector set complements Redisâs existing vector search capabilities via Redis Search and is currently available in beta. APIs and behaviors may change in future releases.

## Redis 8.2
Source file: `raw/sources/20260409-docs-latest-develop-whats-new-8-2-fadaad472d.md`
- Redis 8.2 builds on the foundation of Redis 8.0 with significant performance and memory optimizations, enhanced streaming capabilities, and improved cluster management tools.
- This release delivers major improvements across multiple areas:
- Below is a detailed breakdown of these updates.
- Redis 8.2 includes important security fixes:
- Redis 8.2 introduces powerful new commands that simplify consumer group management and stream lifecycle operations:

## Redis 8.6
Source file: `raw/sources/20260409-docs-latest-develop-whats-new-8-6-de08feff7b.md`
- Redis 8.6 builds on the foundation of Redis 8.4 with significant enhancements to stream reliability, memory management, and security features.
- This release delivers major improvements across multiple areas:
- Below is a detailed breakdown of these updates.
- Redis 8.6 includes important security and privacy enhancements:
- Redis 8.6 introduces powerful idempotency features for [Redis Streams]() that provide at-most-once delivery guarantees:

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

## Create a Bedrock agent
Source file: `raw/sources/20260409-docs-latest-integrate-amazon-bedrock-create-agent-935da3796d.md`
- After you have [created a knowledge base](), you can use it to create an agent on Amazon Bedrock.
- Before you begin this guide, you will need:
- 1. Sign in to the [AWS console](https://console.aws.amazon.com/).
- 1. Use the **Services** menu to locate and select **Machine Learning** > **Amazon Bedrock**.  This takes you to the Amazon Bedrock admin panel.
- 1. Select **Agents** > **Create Agent** to create your knowledge base.

## Set up Redis for Bedrock
Source file: `raw/sources/20260409-docs-latest-integrate-amazon-bedrock-set-up-redis-fb8f904d79.md`
- You need to set up your Redis Cloud database before you can set it as the vector database in Amazon Bedrock. To do this, you need to:
- 1. [Sign up for Redis Cloud and create a database](#sign-up-create-subscription)
- 1. [Enable Transport Layer Security (TLS) for the database and save the certificates](#get-certs)
- 1. [Store database credentials in AWS secrets manager](#store-secret)
- 1. [Create a vector index in your database](#create-vector-index) for Bedrock to use

## Redis Cloud on AWS
Source file: `raw/sources/20260409-docs-latest-integrate-aws-redis-cloud-0cf50eb788.md`
- Deploy Redis Cloud on Amazon Web Services (AWS) to leverage Redis's performance with AWS's global infrastructure and services.
- Redis Cloud on AWS provides a fully managed Redis service that combines the power of Redis with AWS's reliable, scalable cloud infrastructure. Deploy Redis databases across multiple AWS regions with enterprise-grade security, automatic scaling, and 24/7 monitoring.
- Get started with [Redis Cloud]() on AWS to create and manage your Redis databases with step-by-step setup instructions and best practices.

## Redis Cloud on Azure
Source file: `raw/sources/20260409-docs-latest-integrate-azure-redis-cloud-1563e18558.md`
- Deploy Redis Cloud on Microsoft Azure to combine Redis's high performance with Azure's enterprise-grade cloud platform and services.
- Redis Cloud on Azure provides a fully managed Redis service that integrates seamlessly with Azure's enterprise cloud platform. Deploy Redis databases across multiple Azure regions with enterprise-grade security, compliance, and Azure-native integrations.
- Redis Cloud Essentials is available on multiple Microsoft Azure regions, see [Supported regions]().
- Get started with [Redis Cloud]() to create and manage your Redis databases.

## Confluent with Redis Cloud
Source file: `raw/sources/20260409-docs-latest-integrate-confluent-with-redis-cloud-24ddd1e6f4.md`
- You can send data from [Confluent Cloud](https://confluent.cloud/) to your Redis Cloud database using the [Redis Sink connector for Confluent Cloud](https://docs.confluent.io/cloud/current/connectors/cc-redis-sink.html).
- Before you add the Redis Sink Confluent connector to your Confluent Cloud cluster:
- 1. [Create a database]() in the same region as your Confluent Cloud cluster.
- 1. If you decide to [enable Transport Layer Security (TLS)]() for your Redis database, [download the server certificate]() from the Redis Cloud console and [encode it](#encode-server-certificate) to be used with Confluent Cloud.
- 1. Ensure you meet the prerequisites in the [Redis Sink connector documentation](https://docs.confluent.io/cloud/current/connectors/cc-redis-sink.html#quick-start) to set up your Redis Sink with Confluent Cloud.

## Datadog with Redis Cloud
Source file: `raw/sources/20260409-docs-latest-integrate-datadog-with-redis-cloud-2ce91c04be.md`
- [Datadog](https://www.datadoghq.com/) is used by organizations of all sizes and across a wide range of industries to
- enable digital transformation and cloud migration, drive collaboration among development, operations, security and
- business teams, accelerate time to market for applications, reduce time to problem resolution, secure applications and
- infrastructure, understand user behavior, and track key business metrics.
- The Datadog Integration for Redis Cloud uses the Datadog Integration API to connect to Redis metrics exporters.

## Datadog with Redis Software
Source file: `raw/sources/20260409-docs-latest-integrate-datadog-with-redis-enterprise-da949e3cd2.md`
- [Datadog](https://www.datadoghq.com/) is used by organizations of all sizes and across a wide range of industries to
- enable digital transformation and cloud migration, drive collaboration among development, operations, security and
- business teams, accelerate time to market for applications, reduce time to problem resolution, secure applications and
- infrastructure, understand user behavior, and track key business metrics.
- The Datadog Integration for Redis Software uses Datadog's Integration API to connect to Redis metrics exporters.

## Redis Software with Docker
Source file: `raw/sources/20260409-docs-latest-integrate-docker-redis-enterprise-c673119012.md`
- Deploy Redis Software using Docker containers for quick development setups and testing environments.
- Redis Software with Docker provides a containerized version of Redis Software, perfect for development, testing, and proof-of-concept deployments. Get enterprise features like clustering, high availability, and advanced security in a simple Docker container.
- Get started with the [Redis Software Docker quickstart]() guide.

## Dynatrace with Redis Cloud
Source file: `raw/sources/20260409-docs-latest-integrate-dynatrace-with-redis-cloud-07596ce944.md`
- [Dynatrace](https://www.dynatrace.com/) is used by organizations of all sizes and across a wide range of industries to
- enable digital transformation and cloud migration, drive collaboration among development, operations, security and
- business teams, accelerate time to market for applications, reduce time to problem resolution, secure applications and
- infrastructure, understand user behavior, and track key business metrics.
- The Redis Dynatrace Integration for Redis Cloud uses Prometheus remote write functionality to connect Prometheus data

## Dynatrace with Redis Software
Source file: `raw/sources/20260409-docs-latest-integrate-dynatrace-with-redis-enterprise-74661fd00a.md`
- [Dynatrace](https://www.dynatrace.com/) is used by organizations of all sizes and across a wide range of industries to
- enable digital transformation and cloud migration, drive collaboration among development, operations, security and
- business teams, accelerate time to market for applications, reduce time to problem resolution, secure applications and
- infrastructure, understand user behavior, and track key business metrics.
- The Dynatrace Integration for Redis Software uses Prometheus remote write functionality to connect Prometheus data

## Redis Cloud on Google Cloud
Source file: `raw/sources/20260409-docs-latest-integrate-gcp-redis-cloud-e5cbd76d69.md`
- Deploy Redis Cloud on Google Cloud Platform (GCP) to leverage Redis's performance with Google's scalable cloud infrastructure and AI/ML services.
- Redis Cloud on Google Cloud provides a fully managed Redis service that integrates with Google's advanced cloud platform and AI/ML services. Deploy Redis databases across Google's global network with enterprise security, automatic scaling, and seamless GCP integrations.
- Get started with [Redis Cloud]() on Google Cloud to create and manage your Redis databases.

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

## Architecture
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-architecture-776aabda28.md`
- RDI implements a [change data capture](https://en.wikipedia.org/wiki/Change_data_capture) (CDC) pattern that tracks changes to the data in a
- non-Redis *source* database and makes corresponding changes to a Redis
- *target* database. You can use the target as a cache to improve performance
- because it will typically handle read queries much faster than the source.
- To use RDI, you define a *dataset* that specifies which data items

## Deploy a pipeline
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-data-pipelines-deploy-213fdd84c2.md`
- The sections below explain how to deploy a pipeline after you have created the required
- Before you deploy your pipeline, you must set the authentication secrets for the
- source and target databases. Each secret has a name that you can pass to the
- command (VM deployment) or the `rdi-secret.sh` script (K8s deployment) to set the secret value.
- You can then refer to these secrets in the `config.yaml` file using the syntax "`${SECRET_NAME}`"

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

## Prepare Oracle and Oracle RAC for RDI
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-data-pipelines-prepare-dbs-oracle-970e3bc349.md`
- Oracle provides two main systems that Debezium can use to capture data changes:
- The sections below explain how to configure each system for use with Debezium and RDI.
- The checklists summarize the steps you should follow to configure each system.
- You may find it helpful to use them to track your progress as you work through the steps.
- [LogMiner](https://docs.oracle.com/en/database/oracle/oracle-database/19/sutil/oracle-logminer-utility.html)

## Prepare PostgreSQL/Supabase for RDI
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-data-pipelines-prepare-dbs-postgres-15613e6c9e.md`
- [Supabase](https://supabase.com/docs/guides/database/overview) uses PostgreSQL as
- its database engine, so the instructions below also apply to Supabase. However, RDI
- doesn't currently support cloud deployments of Supabase with AWS or GCP.
- [logical decoding plug-ins](https://wiki.postgresql.org/wiki/Logical_Decoding_Plugins)
- to enable CDC. If you don't want to use the native `pgoutput` logical replication stream support

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

## Formatting date and time values
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-data-pipelines-transform-examples-f-1db1a640fc.md`
- The way you format date and time values depends on the source database, the data type of the field, and how it is represented in the incoming record. Below are some examples for different databases and data types.
- Oracle supports the following date and time data types:
- You can format it similarly to `DATE`, but you need to divide the value by the appropriate factor based on the precision.
- SQLite supports both `TIMESTAMP WITH TIME ZONE` and `TIMESTAMP WITH LOCAL TIME ZONE`. You can format them using the `STRFTIME` function.
- SQL Server supports the following date and time data types:

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

## Install on VMs
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-installation-install-vm-da19d8a14b.md`
- This guide explains how to install Redis Data Integration (RDI) on one or more VMs and integrate it with
- We recommend you always use the latest version, which is RDI v.
- RDI uses a database on your Redis Enterprise cluster to store its state
- information. Use the Redis Enterprise Cluster Manager UI to create the RDI database with the following
- Each of the RDI VMs should have at least:

## Upgrading RDI
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-installation-upgrade-f679e442ce.md`
- Follow the steps below to upgrade an existing
- 1.  Download the RDI installer from the [Redis download center](https://redis-enterprise-software-downloads.s3.amazonaws.com/redis-di/rdi-installation-.tar.gz)
- (in the *Modules, Tools & Integration* category) and extract it to your
- 1.  Run the `upgrade.sh` script as a privileged user. Note that you must pass
- your RDI password to the script unless the password is empty.

## Quickstart
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-quick-start-guide-f177341180.md`
- In this tutorial you will learn how to install RDI and set up a pipeline to ingest live data from a [PostgreSQL](https://www.postgresql.org/) database into a Redis database.
- quite small in size, so a single shard database should be enough. RDI also needs to maintain its
- own database on the cluster to store state information. *This requires Redis Enterprise v6.4 or greater*.
- The following diagram shows the structure of the pipeline we will create (see
- the [architecture overview]() to learn how the pipeline works):

## redis-di add-context
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-reference-cli-redis-di-add-context-d1d02fe181.md`
- Client certificate file to authenticate with

## redis-di configure-rdi
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-reference-cli-redis-di-configure-rd-142831472b.md`
- Client certificate file to authenticate with
- Password for unlocking an encrypted private key

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

## Redis Data Integration release notes 1.12.1 (June 2025)
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-release-notes-rdi-1-12-1-b20b340b8e.md`
- This maintenance release replaces the 1.12.0 release.
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

## Redis Data Integration release notes 1.14.1 (August 2025)
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-release-notes-rdi-1-14-1-a581182d2a.md`
- This maintenance release replaces the 1.14.0 release.
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

## Redis Data Integration release notes 1.16.0 (January 2026)
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-release-notes-rdi-1-16-0-e22b9b7237.md`
- RDI's mission is to help Redis customers sync Redis Enterprise with live data from their slow disk-based databases to:
- RDI keeps the Redis cache up to date with changes in the primary database, using a [_Change Data Capture (CDC)_](https://en.wikipedia.org/wiki/Change_data_capture) mechanism.
- It also lets you _transform_ the data from relational tables into convenient and fast data structures that match your app's requirements. You specify the transformations using a configuration system, so no coding is required.
- RDI can write data to a Redis Active-Active database. However, it doesn't support writing data to two or more Active-Active replicas. Writing data from RDI to several Active-Active replicas could easily harm data integrity as RDI is not synchronous with the source database commits.

## Redis Data Integration release notes 1.16.1 (February 2026)
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-release-notes-rdi-1-16-1-fa48fda27a.md`
- This maintenance release replaces the 1.16.0 release.
- RDI's mission is to help Redis customers sync Redis Enterprise with live data from their slow disk-based databases to:
- RDI keeps the Redis cache up to date with changes in the primary database, using a [_Change Data Capture (CDC)_](https://en.wikipedia.org/wiki/Change_data_capture) mechanism.
- It also lets you _transform_ the data from relational tables into convenient and fast data structures that match your app's requirements. You specify the transformations using a configuration system, so no coding is required.
- RDI can write data to a Redis Active-Active database. However, it doesn't support writing data to two or more Active-Active replicas. Writing data from RDI to several Active-Active replicas could easily harm data integrity as RDI is not synchronous with the source database commits.

## Redis Data Integration release notes 1.2 (June 2024)
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-release-notes-rdi-1-2-e106ac6364.md`
- > This minor release replaces the 1.0 release.
- RDIâs mission is to help Redis customers sync Redis Enterprise with live data from their slow disk-based databases to:
- RDI keeps the Redis cache up to date with changes in the primary database, using a
- [_Change Data Capture (CDC)_](https://en.wikipedia.org/wiki/Change_data_capture) mechanism.
- It also lets you _transform_ the data from relational tables into convenient

## Redis Data Integration release notes 1.4.0 (October 2024)
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-release-notes-rdi-1-4-0-a0479318a6.md`
- > This is a GA version of Redis Data Integration (RDI) that improves the installation of RDI.
- RDIâs mission is to help Redis customers sync Redis Enterprise with live data from their slow disk-based databases to:
- RDI keeps the Redis cache up to date with changes in the primary database, using a [_Change Data Capture (CDC)_](https://en.wikipedia.org/wiki/Change_data_capture) mechanism.
- It also lets you _transform_ the data from relational tables into convenient and fast data structures that match your app's requirements. You specify the transformations using a configuration system, so no coding is required.
- RDI can write data to a Redis Active-Active database. However, it doesn't support writing data to two or more Active-Active replicas. Writing data from RDI to several Active-Active replicas could easily harm data integrity as RDI is not synchronous with the source database commits.

## Redis Data Integration release notes 1.4.1 (November 2024)
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-release-notes-rdi-1-4-1-9023314719.md`
- > This maintenance release replaces the 1.4.0 release.
- RDIâs mission is to help Redis customers sync Redis Enterprise with live data from their slow disk-based databases to:
- RDI keeps the Redis cache up to date with changes in the primary database, using a [_Change Data Capture (CDC)_](https://en.wikipedia.org/wiki/Change_data_capture) mechanism.
- It also lets you _transform_ the data from relational tables into convenient and fast data structures that match your app's requirements. You specify the transformations using a configuration system, so no coding is required.
- RDI can write data to a Redis Active-Active database. However, it doesn't support writing data to two or more Active-Active replicas. Writing data from RDI to several Active-Active replicas could easily harm data integrity as RDI is not synchronous with the source database commits.

## Redis Data Integration release notes 1.4.2 (November 2024)
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-release-notes-rdi-1-4-2-653393dd36.md`
- > This maintenance release replaces the 1.4.1 release.
- RDIâs mission is to help Redis customers sync Redis Enterprise with live data from their slow disk-based databases to:
- RDI keeps the Redis cache up to date with changes in the primary database, using a [_Change Data Capture (CDC)_](https://en.wikipedia.org/wiki/Change_data_capture) mechanism.
- It also lets you _transform_ the data from relational tables into convenient and fast data structures that match your app's requirements. You specify the transformations using a configuration system, so no coding is required.
- The user can now specify the port correctly.

## Redis Data Integration release notes 1.4.3 (December 2024)
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-release-notes-rdi-1-4-3-7ddc71577b.md`
- > This maintenance release replaces the 1.4.2 release.
- RDIâs mission is to help Redis customers sync Redis Enterprise with live data from their slow disk-based databases to:
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

## Install
Source file: `raw/sources/20260409-docs-latest-integrate-redis-mcp-install-f93d11a913.md`
- The MCP server runs separately from Redis, so you will need a
- Redis server for it to connect to. See [Redis Cloud]()
- how to get a test server active within minutes.
- When you have a Redis server available, use the instructions below to install and
- The easiest way to use the Redis MCP Server is with

## RIOT-X
Source file: `raw/sources/20260409-docs-latest-integrate-riot-100df15ac5.md`
- Redis Input/Output Tools (RIOT-X) is a command-line utility designed to help you get data in and out of Redis.
- RIOT-X supports many different sources and targets:
- * [Redis](https://redis.github.io/riotx/replication/overview.html) (snapshot and live replication)
- * [Files](https://redis.github.io/riotx/files.html) (CSV, JSON, XML, and others)
- * [Relational databases](https://redis.github.io/riotx/databases/drivers.html) (MySQL, Snowflake, Oracle, and others)

## Terraform provider for Redis Cloud
Source file: `raw/sources/20260409-docs-latest-integrate-terraform-provider-for-redis-cloud-a7b1c978e1.md`
- [Terraform](https://developer.hashicorp.com/terraform) is an open source automation tool developed by Hashicorp that allows you to easily provision infrastructure as code.
- Redis develops and maintains a [Terraform provider for Redis Cloud](https://registry.terraform.io/providers/RedisLabs/rediscloud/latest). The Redis Cloud Terraform provider allows many of the same actions as found in the [Redis Cloud API]().
- See [Get started with Terraform]() for an example of how to use the Terraform provider.
- The Terraform provider represents API actions as data sources and resources. Data sources are read-only and allow you to get information, while resources allow you to create and manage infrastructure.
- The Redis Cloud Terraform provider allows for the following data sources:

## Uptrace with Redis Software
Source file: `raw/sources/20260409-docs-latest-integrate-uptrace-with-redis-enterprise-9195abae4f.md`
- Uptrace is an [open source APM tool](https://uptrace.dev/get/open-source-apm.html) that supports distributed tracing, metrics, and logs. You can use it to monitor applications and set up automatic alerts to receive notifications.
- Uptrace uses OpenTelemetry to collect and export telemetry data from software applications such as Redis. OpenTelemetry is an open source observability framework that aims to provide a single standard for all types of observability signals such as traces, metrics, and logs.
- With OpenTelemetry Collector, you can receive, process, and export telemetry data to any [OpenTelemetry backend](https://uptrace.dev/blog/opentelemetry-backend.html). You can also use Collector to scrape Prometheus metrics provided by Redis and then export those metrics to Uptrace.
- Because installing OpenTelemetry Collector and Uptrace can take some time, you can use the [docker-compose](https://github.com/uptrace/uptrace/tree/master/example/redis-enterprise) example that also comes with Redis Software cluster.
- After you download the Docker example, you can edit the following configuration files in the `uptrace/example/redis-enterprise` directory before you start the Docker containers:

## Write-behind configuration guide
Source file: `raw/sources/20260409-docs-latest-integrate-write-behind-configuration-guide-729c190c20.md`
- This guide shows you how to configure write-behind target connections.
- Write-behind target connections are the connections established between a Write-behind instance and a target database in a
- Write-behind is used to replicate changes captured in a Write-behind-enabled Redis Enterprise database to a target database.
- The connections must be configured in the `config.yaml` before deploying any jobs and must follow one of the formats shown below. Multiple connections can be specified in the `connections` section.
- Microsoft SQL Server supports different authentication mechanisms (SQL Server Authentication and Integrated Windows Authentication) and protocols (NTLM and Kerberos). Write-behind can use all of them. However, systems that use Kerberos may require some additional configuration.

## Install RedisGears for Redis Data Integration
Source file: `raw/sources/20260409-docs-latest-integrate-write-behind-installation-install-redis-gears-62fe64fe95.md`
- Write-behind requires that [RedisGears](https://redis.com/modules/redis-gears) module with the [Python plugin](https://docs.redis.com/latest/modules/redisgears/python/) is installed on the Redis Enterprise cluster.
- The Python plugin can be installed explicitly or alongside with the [JVM plugin](https://docs.redis.com/latest/modules/redisgears/jvm/) if the latter is needed on the cluster for other purposes.
- Use the [`redis-di create`]() command in Write-behind CLI to install RedisGears.
- Download RedisGears based on the Linux distribution of where Redis Enterprise is installed.

## Quickstart
Source file: `raw/sources/20260409-docs-latest-integrate-write-behind-quickstart-write-behind-guide-447c2987e9.md`
- This guide takes you through the creation of a write-behind pipeline.
- **Write-behind** is a processing pipeline used to synchronize data in a Redis database with a downstream data store.
- You can think about it as a pipeline that starts with change data capture (CDC) events for a Redis database and then filters, transforms, and maps the data to the target data store data structures.
- The **target** data store to which the write-behind pipeline connects and writes data.
- The write-behind pipeline is composed of one or more **jobs**. Each job is responsible for capturing change for one key pattern in Redis and mapping it to one or more tables in the downstream data store. Each job is defined in a YAML file.

## redis-di add-context
Source file: `raw/sources/20260409-docs-latest-integrate-write-behind-reference-cli-redis-di-add-context-9162f6d282.md`
- Host/IP of Redis Enterprise Cluster (service name in case of k8s)
- Redis Enterprise Cluster username with either DB Member, Cluster Member or Cluster Admin roles
- Client certificate file to authenticate with

## redis-di configure
Source file: `raw/sources/20260409-docs-latest-integrate-write-behind-reference-cli-redis-di-configure-22b7658ff8.md`
- Client certificate file to authenticate with
- Password for unlocking an encrypted private key

## redis-di delete
Source file: `raw/sources/20260409-docs-latest-integrate-write-behind-reference-cli-redis-di-delete-b17012edcb.md`
- Host/IP of Redis Enterprise Cluster (service name in case of k8s)
- Redis Enterprise Cluster username with either DB Member, Cluster Member or Cluster Admin roles
- Client certificate file to authenticate with
- Password for unlocking an encrypted private key
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

## Data type conversion
Source file: `raw/sources/20260409-docs-latest-integrate-write-behind-reference-data-types-conversion-cdb76b2282.md`
- This document describes default conversions of data types of supported databases into target redis data types.
- | Source data type                                                                          | Target data type for HASH                                                                                                                                                                                                                                                                                           | Example for HASH                                                                                                                                                                                                                                                             |
- | :---------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
- | array                                                                                     | not supported                                                                                                                                                                                                                                                                                                       |                                                                                                                                                                                                                                                                              |
- | bigint                                                                                    | string                                                                                                                                                                                                                                                                                                              | 2147483648 will be saved as '2147483648'                                                                                                                                                                                                                                     |

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

## Redis products
Source file: `raw/sources/20260409-docs-latest-operate-5a121233bd.md`
- | <ul><li> [Get started with Redis Cloud]() </li><li> [Create a database]() </li><li> [Connect to your database]() </li><li> [Subscriptions]() </li><li>[REST API]()</li></ul> | <ul><li> [Install Redis Software]() </li><li> [Set up a new cluster]() </li><li> [Create a database]() </li><li> [Connect to your database]() </li><li>[REST API]()</li></ul> |
- |  **Redis Open Source** |  **Redis for Kubernetes** |
- | <ul><li> [Install Redis 8 in Redis Open Source]() </li><li> [Install Redis Stack]() (&#8804; 7.4) </li><li> [Manage Redis]() </li></ul> | <ul><li> [Deploy Redis for Kubernetes]() </li><li> [Architecture]() </li><li> [API Reference]() </li></ul> |
- |  **Redis Insight** |  **Redis Data Integration (RDI)** |
- | <ul><li> [Install Redis Insight]() </li><li> [Use Redis Insight]() </li><li> [Download Redis Insight](https://redis.io/downloads/#insight) </li></ul> | <ul><li> [RDI overview]() </li><li> [Install RDI]() </li> <li> [RDI pipelines]() </li> </ul> |

## Create Active-Active databases with crdb-cli
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-active-active-create-aa-crdb-cli-ac488f0c0f.md`
- On Kubernetes, Redis Enterprise [Active-Active]() databases provide read-and-write access to the same dataset from different Kubernetes clusters. For more general information about Active-Active, see the [Redis Enterprise Software docs]().
- Creating an Active-Active database requires routing [network access]() between two Redis Enterprise clusters residing in different Kubernetes clusters. Without the proper access configured for each cluster, syncing between the databases instances will fail.
- 1. Documenting values to be used in later steps. It's important these values are correct and consistent.
- 1. Editing the Redis Enterprise cluster (REC) spec file to include the `ActiveActive` section. This will be slightly different depending on the K8s distribution you are using.
- 1. Creating the database with the `crdb-cli` command. These values must match up with values in the REC resource spec.

## Set global database configurations
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-active-active-global-config-22df1f9e7b.md`
- The Redis Enterprise Active-Active database (REAADB) custom resource contains the field `.spec.globalConfigurations`. This field sets configurations for the Active-Active database across all participating clusters, such as memory size, shard count, and the global database secrets.
- The [REAADB API reference]() contains a full list of available fields.
- 1. Edit or patch the REAADB custom resource with your global configuration changes.
- The example command below patches the REAADB named `reaadb-boeing` to set the global memory size to 200MB:
- 1. Verify the status is `active` and the spec status is `Valid`.

## Redis Enterprise for Kubernetes architecture
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-architecture-0dc4ab5c63.md`
- Redis Enterprise for Kubernetes gives you the speed and durability of [Redis Enterprise](https://redis.io/redis-enterprise/advantages/), with the flexibility and ease of [Kubernetes (K8s)](https://kubernetes.io/). Redis Enterprise for Kubernetes uses the Kubernetes operator pattern and custom controllers to bring the best of Redis Enterprise to the Kubernetes platform.
- Kubernetes is a rapidly evolving platform with a short release cycle (around 4 months). This frequent influx of new features, enhancements and bug fixes means Kubernetes distributions move in and out of support quickly. Redis Enterprise is also a fast-moving product, and is compatible and tested only on distributions listed as [supported distributions.]()
- Each version of Redis Enterprise for Kubernetes is tested to ensure the version of Redis Enterprise works with the [supported Kubernetes distributions]() at the time. Both the Kubernetes version and the Redis Enterprise version must be supported for the operator to function correctly. We encourage you to upgrade Redis Enterprise for Kubernetes frequently, not only to get the benefit of enhancements and bug fixes, but to keep your software supported.
- Supported platforms are listed in the [release notes]() and in the [supported platforms reference.]()
- The image below illustrates the components of a single namespace, three node deployment.

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

## Deployment
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-deployment-70bfc00a81.md`
- Deploy Redis Enterprise for Kubernetes by using the Redis Enterprise operator. The operator provides a simple way to deploy and manage Redis Enterprise clusters on various Kubernetes distributions, both on-premises and in the cloud.
- The Redis Enterprise operator uses custom resource definitions (CRDs) to manage Redis Enterprise clusters (REC) and databases (REDB) as native Kubernetes resources. This approach enables GitOps workflows and Kubernetes-native operations.
- Get started quickly with a basic Redis Enterprise deployment:
- Choose the deployment method that best fits your environment:
- Understand the container images used by the Redis Enterprise operator:

## Use a private registry for container images
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-deployment-container-images-e3346113c2.md`
- Redis Enterprise Software, its Kubernetes operator, and the Service Rigger
- are all distributed as separate container images.
- Your Kubernetes deployment will pull these images as needed.
- pulled from within the operator deployment and also via the
- The operator image also includes the admission controller, which runs as part of the operator container and provides validation for Redis Enterprise database resources.

## Deployment with OpenShift CLI for Redis Enterprise for Kubernetes
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-deployment-openshift-openshift-cli-74c0b9e591.md`
- Use these steps to set up a Redis Enterprise Software cluster with OpenShift.
- To see which version of Redis Enterprise for Kubernetes supports your OpenShift version, see [Supported Kubernetes distributions]().
- If you suspect your file descriptor limits are below 100,000, you must either manually increase limits or [Allow automatic resource adjustment](). Most major cloud providers and standard container runtime configurations set default file descriptor limits well above the minimum required by Redis Enterprise. In these environments, you can safely run without enabling automatic resource adjustment.
- 1. Deploy the OpenShift operator bundle.
- If you are using version 6.2.18-41 or earlier, you must [apply the security context constraint](#install-security-context-constraint) before the operator bundle.

## Deploy Redis Enterprise with OpenShift OperatorHub
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-deployment-openshift-openshift-operatorhub-d1421ba0dd.md`
- If you suspect your file descriptor limits are below 100,000, you must either manually increase limits or [Allow automatic resource adjustment](). Most major cloud providers and standard container runtime configurations set default file descriptor limits well above the minimum required by Redis Enterprise. In these environments, you can safely run without enabling automatic resource adjustment.
- To see which version of Redis Enterprise for Kubernetes supports your OpenShift version, see [Supported Kubernetes distributions]().
- If using version 6.2.18-41 or earlier, [Install the security context constraint](#install-security-context-constraint) before installing the operator.
- 2. Search for _Redis Enterprise_ in the search dialog and select the **Redis Enterprise Operator provided by Redis** marked as **Certified**.
- By default, the image is pulled from Red Hat's registry.

## Deploy Redis Enterprise Software for Kubernetes
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-deployment-quick-start-11565e0494.md`
- This guide works with most supported Kubernetes distributions. If you're using OpenShift, see [Redis Enterprise on OpenShift](). For details on what is currently supported, see [supported distributions]().
- To deploy Redis Enterprise for Kubernetes, you'll need:
- If you suspect your file descriptor limits are below 100,000, you must either manually increase limits or [Allow automatic resource adjustment](). Most major cloud providers and standard container runtime configurations set default file descriptor limits well above the minimum required by Redis Enterprise. In these environments, you can safely run without enabling automatic resource adjustment.
- If you are applying version 7.8.2-6 or above, check if the [OS](https://redis.io/docs/latest/operate/kubernetes/release-notes/7-8-2-releases/7-8-2-6-nov24/#breaking-changes) installed on the node is supported.
- **Important:** Each namespace can only contain one Redis Enterprise cluster. Multiple RECs with different operator versions can coexist on the same Kubernetes cluster, as long as they are in separate namespaces.

## Database connectivity
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-networking-database-connectivity-07b4e76615.md`
- Connecting applications to Redis Enterprise databases in Kubernetes involves understanding service discovery, credentials management, and access patterns. This guide covers the essential connectivity aspects unique to Kubernetes deployments.
- When you create a RedisEnterpriseDatabase (REDB), the Redis Enterprise operator automatically creates Kubernetes services to route traffic to your database. Understanding these service types is crucial for proper connectivity.
- By default, the operator creates two services for each database:
- Both services are created in the same namespace as your database and follow predictable naming conventions.
- Redis Enterprise supports three service types for database access:

## Configure Ingress for external routing
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-networking-ingress-a8ff0357f7.md`
- Before creating an Ingress, you'll need:
- Make sure your Ingress controller has `ssl-passthrough`enabled. This is enabled by default for HAProxy, but disabled by default for NGINX. See the [NGINX User Guide](https://kubernetes.github.io/ingress-nginx/user-guide/tls/#ssl-passthrough) for details.
- 1. Retrieve the hostname of your Ingress controller's `LoadBalancer` service.
- Below is example output for an HAProxy running on a K8s cluster hosted by AWS.
- 1. Choose the hostname you will use to access your database (this value will be represented in this article with `<my-db-hostname>`).

## Configure Istio for external routing
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-networking-istio-ingress-be30e433c8.md`
- Redis Enterprise for Kubernetes has the ability to use an Istio Ingress gateway as an alternative to NGINX or HaProxy Ingress controllers.
- Istio can also understand Ingress resources, but using that mechanism takes away the advantages and options that the native Istio resources provide. Istio offers its own configuration methods using custom resources.
- To configure Istio to work with the Redis Kubernetes operator, we will use two custom resources: a `Gateway` and a `VirtualService`. Then you'll be able to establish external access to your database.
- When using Istio ingress for Redis on Kubernetes, avoid partial wildcard hostnames in your REC configuration. Use only valid FQDNs or leftmost wildcards for Istio compatibility and stable external routing. For more information, see [Istio Ingress Fails for Redis on Kubernetes with Partial Wildcard Hostnames](https://support.redislabs.com/hc/en-us/articles/30446436267666-Istio-Ingress-Fails-for-Redis-on-Kubernetes-with-Partial-Wildcard-Hostnames).
- 1. [Download](https://istio.io/latest/docs/setup/getting-started/) and [install](https://istio.io/latest/docs/setup/getting-started/) Istio (see instructions from Istio's [Getting Started](https://istio.io/latest/docs/setup/getting-started/) guide).

## Use OpenShift routes for external database access
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-networking-routes-9a452509b1.md`
- OpenShift routes allow requests to be routed to the database or cluster API from outside the cluster. For more information about routes, see [OpenShift documentation](https://docs.openshift.com/container-platform/4.13/networking/routes/route-configuration.html).
- * Before you can connect to your database from outside the cluster, you'll need the root CA certificate of the DMC Proxy server to validate the server certificate.
- By default, the DMC Proxy uses a self-signed certificate.  You can retrieve it from the Redis Enterprise admin console, or from the machine at `/etc/opt/redislabs/proxy_cert.pem` (default location), and save it as a file (for example, named "ca.pem") on the client machine.
- * Your database also needs TLS encryption enabled.
- 1. Select the **Networking/Routes** section of the OpenShift web console.

## Redis Enterprise clusters (REC)
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-re-clusters-a16c446661.md`
- A Redis Enterprise cluster (REC) is a custom Kubernetes resource that represents a Redis Enterprise cluster deployment. The Redis Enterprise operator manages the lifecycle of REC resources, including deployment, scaling, upgrades, and recovery operations.
- REC resources define the cluster configuration, including node specifications, storage requirements, security settings, and networking configuration. After you deploy the cluster, it provides a foundation for creating and managing Redis Enterprise databases (REDB).
- Manage your Redis Enterprise cluster lifecycle and configuration:
- Optimize storage and performance for your Redis Enterprise cluster:
- The call home client sends health or error data from your deployment(s) back to Redis. You can disable it by adding the following to your REC specification:

## Connect the Prometheus operator to Redis Enterprise for Kubernetes
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-re-clusters-connect-prometheus-operator-9fda5a614a.md`
- To collect  metrics data from your databases and Redis Enterprise cluster (REC), you can connect your [Prometheus](https://prometheus.io/) server to an endpoint exposed on your REC. Redis Enterprise for Kubernetes creates a dedicated service to expose the `prometheus` port (8070) for data collection. A custom resource called `ServiceMonitor` allows the [Prometheus operator](https://github.com/prometheus-operator/prometheus-operator/tree/main/Documentation) to connect to this port and collect data from Redis Enterprise.
- Before connecting Redis Enterprise to Prometheus on your Kubernetes cluster, make sure you've done the following:
- Below is an example `ServiceMonitor` custom resource file. By specifying the service label (`app: redis.io/service=prom-metrics`) in the `selector.matchLabels` section, you can point the Prometheus operator to the correct Redis Enterprise service (`<rec_name>-prom`).
- You'll need to configure the following fields to connect Prometheus to Redis Enterprise:
- | `spec.endpoints` | `port` | Name of exposed port (`prometheus`) |

## Redis Enterprise databases (REDB)
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-re-databases-0d8793de0b.md`
- A Redis Enterprise database (REDB) is a custom Kubernetes resource that represents a Redis database running on a Redis Enterprise cluster. The Redis Enterprise operator manages REDB resources and handles database creation, configuration, scaling, and lifecycle operations.
- REDB resources define database specifications including memory limits, persistence settings, security configurations, networking options, and Redis modules. You can deploy databases on existing Redis Enterprise clusters (REC) and manage them by using standard Kubernetes tools and workflows.
- Create and manage Redis Enterprise databases on your cluster:
- Set up database replication for high availability and disaster recovery:
- Explore advanced database features and configurations:

## Configure modules
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-re-databases-modules-2e9ee1306e.md`
- Redis Enterprise modules extend Redis functionality with additional data types, commands, and capabilities. Redis Enterprise versions 8.0.2 and later include several bundled modules that are automatically enabled for compatible database types. You can also add user-defined modules for additional functionality.
- Redis Enterprise includes several bundled modules that extend Redis functionality with additional data types, commands, and capabilities. Starting with Redis Enterprise version 8.0.2, these modules are automatically included and immediately available for use.
- | Module | Name | Description | Capabilities |
- |--------|------|-------------|--------------|
- | **[RediSearch]()** | `search` | Full-text search and secondary indexing | Query, aggregation, full-text search, vector similarity search |

## Create replica databases on Kubernetes
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-re-databases-replica-redb-6d2f88f10a.md`
- You can configure a replica of a database by creating an item in
- the [`replicaSources`]() section of the RedisEnterpriseDatabase (REDB) custom resource.
- A secret must be created with the `stringData` section containing the replica source URI as follows:
- Create a secret with the replica source URI listed in the `stringData` field as follows:
- The replica source URL can be retrieved by going to "UI > database > configuration > Press the button Get Replica of source URL"

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

## Supported Kubernetes distributions
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-reference-supported-k8s-distributions-f3a0e09bb4.md`
- We thoroughly test each release of Redis Enterprise for Kubernetes against a set of Kubernetes distributions. The table below lists Redis Enterprise for Kubernetes versions and the Kubernetes distributions they support.
- <span title="Check mark icon">&#x2705;</span> Supported â This distribution is supported for this version of Redis Enterprise Software for Kubernetes.
- <span title="Deprecation warning" class="font-serif">:warning:</span> Deprecated â This distribution is still supported for this version of Redis Enterprise Software for Kubernetes, but support will be removed in a future release.
- <span title="X icon">&#x274c;</span> End of life â Support for this distribution ended.
- Any distribution not listed below is not supported for production workloads.

## Active-Active examples
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-reference-yaml-active-active-f4283751a9.md`
- This page provides YAML examples for deploying Active-Active Redis Enterprise databases across multiple Kubernetes clusters. Active-Active databases provide multi-master replication with conflict resolution, enabling global distribution and local read/write access.
- For complete deployment instructions, see [Active-Active databases]().
- To deploy Active-Active databases using these YAML files, follow [Create Active-Active database (REAADB)](), which provides detailed instructions for preparing clusters, creating RERC resources, and deploying REAADB configurations.
- A namespace is an abstraction used by Kubernetes to support multiple virtual clusters on the same physical cluster.
- A Redis Enterprise cluster is a collection of Redis Enterprise nodes that pools system resources across nodes and supports multi-tenant database instances.

## Basic deployment examples
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-reference-yaml-basic-deployment-c214684618.md`
- This page provides complete YAML examples for a basic Redis Enterprise deployment on Kubernetes. These examples include all the essential components you need to deploy a Redis Enterprise cluster and create a database.
- For complete deployment instructions, see [Deploy on Kubernetes]().
- The service account provides an identity for the Redis Enterprise operator.
- The Role defines the permissions needed by the Redis Enterprise operator within the namespace.
- The RoleBinding connects the service account to the role, granting the necessary permissions.

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

## Redis Enterprise for Kubernetes release notes 6.2.18-41 (Jan 2023)
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-release-notes-6-2-releases-k8s-6-2-18-41-jan-2023-6a4c6ac937.md`
- This is a maintenance release of Redis Enterprise for Kubernetes 6.2.18-41 that adds supports for Redis Enterprise 6.2.18-72.
- New images and fixes are listed below. Refer to [6.2.18-41 (Dec 2022]() for compatibility notes and known limitations.
- Due to a change in the SCC, on OpenShift clusters running version 6.2.12 or earlier upgrading to version 6.2.18 or later, where `node:1` is <b>not</b> the master node, the upgrade might get stuck.
- For more info and steps to prevent this issue, see [upgrade a Redis Enterprise cluster (REC)]().
- DockerHub images are available at `docker.io/`.

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

## Redis Enterprise for Kubernetes release notes 6.4.2-5 (April 2023)
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-release-notes-6-4-2-releases-6-4-2-5-a41f2e66cf.md`
- This is a maintenance release of Redis Enterprise for Kubernetes 6.4.2-4 that adds supports for Redis Enterprise 6.4.2-61.
- New images and fixes are listed below. Refer to [6.2.4-4 (March 2023)]() for compatibility notes and known limitations.
- * **Redis Enterprise**: `redislabs/redis:6.4.2-61`
- * **Operator**: `redislabs/operator:6.4.2-5`
- * **Services Rigger**: `redislabs/k8s-controller:6.4.2-5`

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

## Redis Enterprise for Kubernetes release notes 6.4.2-8 (Dec 2023)
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-release-notes-6-4-2-releases-6-4-2-8-dec23-81991ef99b.md`
- This is a maintenance release of Redis Enterprise for Kubernetes version 6.4.2-8 and includes an updated Redis Enterprise image.
- * New Redis Enterprise software version 6.4.2-103
- Be aware the following changes included in this release affect the upgrade process. Please read carefully before upgrading to 6.4.2-8.
- * **Upgrade path to versions 7.2.4-2 or later**
- Upgrading from this versions 7.2.4-2 or 7.2.4-7 is not possible using the OpenShift Operator Lifecycle Manager (OLM). OLM users will need to skip to version 7.2.4-10 to upgrade from this release version.

## 6.4.2 release notes
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-release-notes-6-4-2-releases-612a991998.md`
- Be aware the following changes included in this release affect the upgrade process. Please read carefully before upgrading.
- If you are using operator version 6.2.8-15 or earlier, you cannot upgrade directly to operator versions 6.2.12 through 6.4.2-5. You must upgrade to operator version 6.2.10-45 before you can upgrade to operator versions between 6.2.12 and 6.4.2-5. However, upgrades directly to operator version 6.4.2-6 are supported.
- Due to a change in the SCC, on OpenShift clusters running version 6.2.12 or earlier upgrading to version 6.2.18 or later, where `node:1` is <b>not</b> the master node, the upgrade might get stuck.
- For more info and steps to prevent this issue, see [upgrade a Redis Enterprise cluster (REC)]().
- Operator version 6.4.2-6 includes a fix for this issue.

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

## Redis Enterprise for Kubernetes 7.2.4-12 (January 2025) release notes
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-release-notes-7-2-4-releases-7-2-4-12-jan25-b54976a279.md`
- This is a maintenance release to support Redis Enterprise Software version 7.2.4-118. For information on supported distributions, breaking changes, and limitations, see the previous (7.2.4-12 release notes).
- (or `redislabs/redis-enterprise:7.2.4-118.rhel7-openshift` if upgrading from RHEL 7)
- **Redis Enterprise operator bundle** : `v7.2.4-12.33`
- For a list of fixes related to CVEs, see the [Redis Enterprise 7.2.4-118 release notes]().

## Redis Enterprise for Kubernetes 7.2.4-12 (June 2025) release notes
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-release-notes-7-2-4-releases-7-2-4-12-june25-f9a9c94327.md`
- This is a maintenance release to support Redis Enterprise Software version 7.2.4-130. For information on supported distributions, breaking changes, and limitations, see the previous [7.2.4-12 release notes]().
- (or `redislabs/redis-enterprise:7.2.4-130.rhel7-openshift` if upgrading from RHEL 7)
- **Redis Enterprise operator bundle** : `v7.2.4-12.39`
- For a list of fixes related to CVEs, see the [Redis Enterprise 7.2.4-130 release notes]().

## Redis Enterprise for Kubernetes 7.2.4-12 (March 2025) release notes
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-release-notes-7-2-4-releases-7-2-4-12-mar25-e2e97bb6ab.md`
- This is a maintenance release to support Redis Enterprise Software version 7.2.4-122. For information on supported distributions, breaking changes, and limitations, see the previous [7.2.4-12 release notes]().
- (or `redislabs/redis-enterprise:7.2.4-118.rhel7-openshift` if upgrading from RHEL 7)
- **Redis Enterprise operator bundle** : `v7.2.4-12.35`
- For a list of fixes related to CVEs, see the [Redis Enterprise 7.2.4-122 release notes]().

## Redis Enterprise for Kubernetes 7.2.4-15 (October 2025) release notes
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-release-notes-7-2-4-releases-7-2-4-15-october2025-c33a7c7fc7.md`
- This is a maintenance release to support Redis Enterprise Software version 7.2.4-144. For information on supported distributions, breaking changes, and limitations, see the previous [7.2.4-15 release notes]().
- **Redis Enterprise operator bundle** : `v7.2.4-15.41`
- For a list of fixes related to CVEs, see the [Redis Enterprise 7.2.4 release notes]().

## Redis Enterprise for Kubernetes 7.2.4-15 (September 2025) release notes
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-release-notes-7-2-4-releases-7-2-4-15-sep25-c93cc5abb4.md`
- This is a maintenance release to support Redis Enterprise Software version 7.2.4-138. For information on supported distributions, breaking changes, and limitations, see the previous [7.2.4-12 release notes]().
- **RHEL7 support removed**: Redis Enterprise Software 7.2.4-138 removes support for RHEL7. RHEL7-based OpenShift images are no longer available. Migrate to RHEL8-based images before upgrading.
- **Redis Enterprise operator bundle** : `v7.2.4-15.1`
- For a list of fixes related to CVEs, see the [Redis Enterprise 7.2.4-138 release notes]().

## Redis Enterprise for Kubernetes 7.2.4-16 (February 2026) release notes
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-release-notes-7-2-4-releases-7-2-4-16-feb26-72589542f7.md`
- This is a maintenance release to support Redis Enterprise Software version 7.2.4-153. For information on supported distributions, breaking changes, and limitations, see the previous [7.2.4-15 release notes]().
- **Redis Enterprise operator bundle** : `v7.2.4-16.2`
- For a list of fixes related to CVEs, see the [Redis Enterprise 7.2.4 release notes]().

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

## Redis Enterprise for Kubernetes 7.22.0-15 (July 2025) release notes
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-release-notes-7-22-0-releases-7-22-0-15-july2025-82daac525b.md`
- * Helm chart support is now generally available.
- Redis Enterprise for Kubernetes 7.22.0-15 is a feature release that includes enhancements, platform updates, and support for Redis Software 7.22.0-216.
- * Call home - support HTTP proxy configuration (RED-156935)
- * Helm - optimize installation time (RED-153889)
- * Add support for migrating to a Helm-based installation from a non-Helm installation (RED-113099)

## Redis Enterprise for Kubernetes 7.22.0-7 (April 2025) release notes
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-release-notes-7-22-0-releases-7-22-0-7-april2025-1ed3fda486.md`
- Redis Enterprise for Kubernetes 7.22.0-7 is a feature release that includes enhancements, platform updates, and support for Redis Software 7.22.0-28.
- | **CRD** | **Field** | **Change** | **Description** |
- |--------|-----------|------------|-----------------|
- | REAADB | `spec.participatingClusters[].namespace` | Added | Specifies the namespace in which the REAADB object will be deployed in the corresponding participating cluster. Make sure that the Redis Enterprise operator is configured to watch this namespace and that the required RBAC configuration is in place. For more information, see [Multi-namespace deployments](). If no namespace is specified, the REAADB object is deployed to the RECâs namespace in the corresponding cluster. |
- | REC | `spec.usageMeter.callHomeClient` | Added | Configuration for the call home client. For details, see the [REC API reference](). |

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

## Redis Enterprise for Kubernetes 7.22.2-32 (January 2026) release notes
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-release-notes-7-22-2-releases-7-22-2-32-january20-f13b92e611.md`
- This is a maintenance release to support Redis Enterprise Software version 7.22.2-55. For supported distributions and known limitations, see the [7.22.2 releases]().
- For all other known limitations, see [7.22.2 releases]().

## Redis Enterprise for Kubernetes 7.22.2-37 (February 2026) release notes
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-release-notes-7-22-2-releases-7-22-2-37-feb2026-eb24aadd87.md`
- This is a maintenance release to support Redis Enterprise Software version 7.22.2-79. For supported distributions and known limitations, see the [7.22.2 releases]().
- For all other known limitations, see [7.22.2 releases]().

## Redis Enterprise for Kubernetes 7.22.2-38 (March 2026) release notes
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-release-notes-7-22-2-releases-7-22-2-38-march2026-c3471b3cc6.md`
- This is a maintenance release to support Redis Enterprise Software version 7.22.2-93. For supported distributions and known limitations, see the [7.22.2 releases]().
- See [7.22.2 releases]() for information on known limitations.

## Redis Enterprise for Kubernetes 7.4.2-12 (May 2024) release notes
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-release-notes-7-4-2-releases-7-4-2-12-1c898cd016.md`
- This release has many enhancements, most notably support for persistent volume expansion in the REC. Also, some essential changes in module handling support newer capabilities prompted by changes in the underlying Redis Enterprise around versioning.
- | **CRD** | **Field** | **Change** | **Description** |
- | REC | spec.persistentSpec.enablePersistentVolumeResize | ADD | Set to "true" to allow changes in volumeSize after REC creation (for sizing up only) |
- | REC | status.persistenceStatus | ADD | Indicates the status of persistent volume expansion |
- | REC | spec.redisEnterpriseIPFamily | ADD | Configure which IP family to use when Kubernetes cluster has Dual Stack networking enabled  |

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

## Redis Enterprise for Kubernetes 7.8.4-8 (Feb 2025) release notes
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-release-notes-7-8-4-releases-7-8-4-8-feb25-ba39836fea.md`
- This release includes bug fixes, enhancements, and support for [Redis Enterprise Software version 7.8.4-66]().
- | **CRD** | **Field** | **Change** | **Description** |
- | REC | spec.SecurityContext.readOnlyRootFilesystemPolicy.enabled | Add | Enables the read-only filesystem |
- The following table shows supported distributions at the time of this release. You can also find this list in [Supported Kubernetes distributions]().
- <span title="Check mark icon">&#x2705;</span> Supported â This distribution is supported for this version of Redis Enterprise Software for Kubernetes.

## Redis Enterprise for Kubernetes 7.8.6-1 (March 2025) release notes
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-release-notes-7-8-6-releases-7-8-6-1-march2025-fbb9036bf9.md`
- Redis Enterprise for Kubernetes 7.8.6-1 is a feature release that includes enhancements, bug fixes, platform updates, and support for [Redis Software 7.8.6-13]().
- This release also includes the ability to [install the operator using Helm]().
- Support for Helm is currently in public preview and is not supported on production workloads. Only new installations of the Redis operator are supported at this time.
- | **CRD** | **Field** | **Change** | **Description** |
- | REAADB | `spec.externalReplicationPort` | ADD | Specifies the replication endpoint port number for users who use LoadBalancers to synchronize Active-Active replicas and must provide the port that the LoadBalancer listens on. |

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

## Redis Enterprise for Kubernetes Release Notes 6.0.8-20 (December 2020)
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-release-notes-previous-releases-k8s-6-0-8-20-4a363b0d08.md`
- The Redis Enterprise K8s 6.0.8-20 release is a *major release* on top of [6.0.8-1](https://github.com/RedisLabs/redis-enterprise-k8s-docs/releases/tag/v6.0.8-1) providing support for the [Redis Enterprise Software release 6.0.8-30](https://docs.redislabs.com/latest/rs/release-notes/rs-6-0-8-september-2020/) and includes several enhancements and bug fixes.
- To upgrade your deployment to this latest release, see ["Upgrade a Redis Enterprise cluster (REC) on Kubernetes"]().
- This release includes the following container images:
- * **Redis Enterprise**: redislabs/redis:6.0.8-30 or redislabs/redis:6.0.8-30.rhel7-openshift
- * **Operator and Bootstrapper**: redislabs/operator:6.0.8-20

## Security
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-security-a5de8a6055.md`
- Configure security settings for your Redis Enterprise deployment on Kubernetes. Redis Enterprise for Kubernetes provides comprehensive security features including TLS encryption, authentication, access control, and certificate management.
- Manage cluster credentials and authentication settings:
- Configure TLS certificates and encryption for secure communications:
- Configure external secret management systems:
- Configure security-related resource settings:

## Add client certificates
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-security-add-client-certificates-8c1bc58243.md`
- For each client certificate you want to use with your database, you need to create a Kubernetes secret to hold it. You can then reference that secret in your Redis Enterprise database (REDB) custom resource spec.
- 1. [Create the secret config file](https://kubernetes.io/docs/tasks/configmap-secret/managing-secret-using-config-file/) with the required fields shown below.
- 1. Apply the file to create the secret resource.
- 1. Add the secret name to the REDB custom resource (`redb.yaml`) with the `clientAuthenticationCertificates` property in the `spec` section.

## Allow automatic resource adjustment
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-security-allow-resource-adjustment-ea1e3dd2b8.md`
- Redis Enterprise for Kubernetes 7.22.0-6 introduces the ability to run with automatic resource adjustment disabled, which drops all capabilities from the Redis Enterprise container and sets `allowPrivilegeEscalation` to `false`. All other security-related settings remain the same as in automatic resource adjustment enabled. Automatic resource adjustment disabled is the default for installations and upgrades of the Redis Enterprise operator for versions 7.22.0-6 and later.
- Automatic resource adjustment is disabled by default for installations and upgrades of the Redis Enterprise operator for versions 7.22.0-6 and later. This default behavior is in effect if REC spec has `allowAutoAdjustment` set to `false` or removed.
- If automatic resource adjustment is disabled, the REC security context looks like this:
- To allow the Redis Enterprise container to adjust system resource limits automatically, set `allowAutoAdjustment` to `true`. This will grant the container elevated capabilities such as `SYS_RESOURCE`. Note that changing this value on a running cluster will trigger a rolling update.
- Enabling automatic resource adjustment results in the following security context:

## Store configuration in Kubernetes Secrets
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-security-configuration-secrets-496c013697.md`
- You can store Redis Enterprise configuration items in Kubernetes Secrets for automatic updates and secure management. When you update these Secrets, the operator immediately reads the changes and propagates them to the Redis Enterprise Cluster (REC).
- Redis Enterprise clusters require a valid license. You can apply licenses using Kubernetes Secrets (recommended) or embed them directly in the cluster specification.
- To configure licensing, you need your Redis Enterprise cluster's fully qualified domain name (FQDN). Use this format: `<REC-name>.<namespace>.svc.cluster.local`
- For example: `my-rec.my-ns.svc.cluster.local`
- 1. Create a secret from your license file:

## Enable internode encryption
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-security-internode-encryption-61ad9c69ef.md`
- Internode encryption provides added security by encrypting communication between nodes in your Redis Enterprise cluster (REC).
- Enable internode encryption in the `spec` section of your REC custom resource file.
- This change will apply to all databases created in the REC. You can override the cluster-wide setting for individual databases.
- Edit your Redis Enterprise database (REDB) custom resource file to disable internode encryption for only that database.
- To learn more about internode encryption, see [Internode encryption for Redis Enterprise Software]().

## Enable LDAP authentication
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-security-ldap-967828e18f.md`
- Redis Enterprise Software supports LDAP authentication and authorization through [role-based access controls]() (RBAC). You can map LDAP groups to [Redis Enterprise roles]() to control access to your database and the Cluster Manager UI. For more details on how LDAP works with Redis Enterprise, see [LDAP authentication]().
- Redis Enterprise for Kubernetes supports enabling and configuring LDAP authentication using the `RedisEnterpriseCluster` (REC) custom resource. Currently, the Redis Enterprise cluster (REC) only supports configuration related to the LDAP server, such as server addresses, connection details, credentials, and query configuration.
- To [map LDAP groups to Redis Enterprise access control roles](), you'll need to use the Redis Enterprise [API]() or [admin console]().
- To enable LDAP for your REC, use the `.spec.ldap` field in the `RedisEnterpriseCluster` custom resource.
- The following `RedisEnterpriseCluster` example resource enables a basic LDAP configuration:

## Manage Redis Enterprise cluster (REC) certificates
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-security-manage-rec-certificates-353e2c40a9.md`
- By default, Redis Enterprise Software for Kubernetes generates TLS certificates for the cluster during creation. These self-signed certificates are generated on the first node of each Redis Enterprise cluster (REC) and are copied to all other nodes added to the cluster. For the list of of certificates used by Redis Enterprise Software and the traffic they encrypt, see the [certificates table]().
- To install and use your own certificates with Kubernetes on your Redis Enterprise cluster, they need to be stored in [secrets](https://kubernetes.io/docs/concepts/configuration/secret/). The REC custom resource also needs to be configured with those secret names to read and use the certificates.
- Create the [secret](https://kubernetes.io/docs/tasks/configmap-secret/managing-secret-using-kubectl/) with the required fields shown below.
- For internode encryption certificates, see [Internode encryption]() for detailed configuration instructions.
- Edit the Redis Enterprise cluster (REC) custom resource to add a `certificates` subsection under the `spec` section. You are only required to add the fields for the certificates you are installing.

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

## Upgrade Redis Enterprise for Kubernetes
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-upgrade-464290c845.md`
- Keep your Redis Enterprise deployment up to date with the latest features, security patches, and bug fixes. The upgrade process involves updating three main components in sequence: the Redis Enterprise operator, Redis Enterprise clusters (REC), and Redis Enterprise databases (REDB).
- Choose the appropriate upgrade method for your deployment:
- The upgrade process includes updating three components in order:
- 1. **Upgrade the Redis Enterprise operator** - Update the operator to the latest version
- 2. **Upgrade the Redis Enterprise cluster (REC)** - Update cluster nodes and infrastructure

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

## Redis Open Source
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-c61bb50a95.md`
- Since 2009, the Redis open source project has inspired an enthusiastic and active community of users and contributors. We continue to be committed to fostering an open, welcoming, diverse, inclusive, and healthy community.
- [Salvatore Sanfilippo](https://github.com/antirez) built, led, and maintained the Redis open source project. In 2020, Salvatore Sanfilippo named two successors to take over and lead the Redis project: Yossi Gottlieb [yossigo](https://github.com/yossigo) and Oran Agra [oranagra](https://github.com/oranagra). Salvatore [returned to Redis in 2024](https://antirez.com/news/144).
- Redis has adopted the [Contributor Covenant Code of Conduct](https://github.com/redis/redis/blob/unstable/CODE_OF_CONDUCT.md).
- On the [Redis Discord server](https://discord.gg/redis), you can chat with members of the Redis community in real time. You'll meet Redis users, contributors, and developer advocates. This is a great place to stop in for quick questions or to share your latest Redis discoveries.
- Have a question about Redis? Search the [Stack Overflow Redis tag](https://stackoverflow.com/questions/tagged/redis) for answers, or post a question of your own.

## Install Redis
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-install-archive-install-redis-e6240a2392.md`
- This is a an installation guide. You'll learn how to install, run, and experiment with the Redis server process.
- While you can install Redis on any of the platforms listed below, you might also consider using Redis Cloud by creating a [free account](https://redis.com/try-free?utm_source=redisio&utm_medium=referral&utm_campaign=2023-09-try_free&utm_content=cu-redis_cloud_users). You can also download [Redis Insight](), a free developer tool that works with Redis.
- How you install Redis depends on your operating system. See the guide below that best fits your needs:
- Refer to [Redis Administration]() for detailed setup tips.
- After you have Redis up and running, you can connect using `redis-cli`.

## Install Redis from Source
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-install-archive-install-redis-install-redis-fr-029b587ff7.md`
- You can compile and install Redis from source on variety of platforms and operating systems including Linux and macOS. Redis has no dependencies other than a C  compiler and `libc`.
- The Redis source files are available from the [Download](https://redis.io/downloads) page. You can verify the integrity of these downloads by checking them against the digests in the [redis-hashes git repository](https://github.com/redis/redis-hashes).
- To obtain the source files for the latest stable version of Redis from the Redis downloads site, run:
- wget https://download.redis.io/redis-stable.tar.gz
- To compile Redis, first extract the tarball, change to the root directory, and then run `make`:

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

## Redis Open Source version management
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-install-version-mgmt-47ab659c37.md`
- Redis Open Source provides comprehensive version management that prioritizes customer control over major changes.
- Redis uses a **MAJOR.MINOR.PATCH** versioning scheme:
- **We strongly recommend using the latest available version** to benefit from the newest features, performance improvements, and security updates.
- | **Redis 7.4** | GA | December 1, 2029 |
- | **Redis 7.2** | GA | December 1, 2029 |

## Redis administration
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-management-admin-386fe0d937.md`
- * Deploy Redis using the Linux operating system. Redis is also tested on OS X, and from time to time on FreeBSD and OpenBSD systems. However, Linux is where most of the stress testing is performed, and where most production deployments are run.
- * Set the Linux kernel overcommit memory setting to 1. Add `vm.overcommit_memory = 1` to `/etc/sysctl.conf`. Then, reboot or run the command `sysctl vm.overcommit_memory=1` to activate the setting. See [FAQ: Background saving fails with a fork() error on Linux?]() for details.
- * To ensure the Linux kernel feature Transparent Huge Pages does not impact Redis memory usage and latency, run the command: `echo never > /sys/kernel/mm/transparent_hugepage/enabled` to disable it. See [Latency Diagnosis - Latency induced by transparent huge pages]() for additional context.
- * Ensured that swap is enabled and that your swap file size is equal to amount of memory on your system. If Linux does not have swap set up, and your Redis instance accidentally consumes too much memory, Redis can crash when it is out of memory, or the Linux kernel OOM killer can kill the Redis process. When swapping is enabled, you can detect latency spikes and act on them.
- * Set an explicit `maxmemory` option limit in your instance to make sure that it will report errors instead of failing when the system memory limit is near to be reached. Note that `maxmemory` should be set by calculating the overhead for Redis, other than data, and the fragmentation overhead. So if you think you have 10 GB of free memory, set it to 8 or 9.

## Redis benchmark
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-management-optimization-benchmarks-25321d80a3.md`
- Redis includes the `redis-benchmark` utility that simulates running commands done
- by N clients at the same time sending M total queries (it is similar to the
- Apache's `ab` utility). Below you'll find the full output of a benchmark executed
- Usage: redis-benchmark [-h <host>] [-p <port>] [-c <clients>] [-n <requests]> [-k <boolean>]
- SADD, random members and scores for ZADD.

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

## Redis design draft #2 (historical)
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-reference-internals-rdd-6cecac3155.md`
- **Note: this document was written by the creator of Redis, Salvatore Sanfilippo, early in the development of Redis (c. 2013), as part of a series of design drafts. This is preserved for historical interest.**
- * Author: Salvatore Sanfilippo `antirez@gmail.com`
- * GitHub issue [#1048](https://github.com/redis/redis/issues/1048)
- The Redis RDB format lacks a simple way to add info fields to an RDB file
- without causing a backward compatibility issue even if the added meta data

## Triggers and functions examples
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-deprecated-features-trig-2c18c3fdf0.md`
- Redis Stack's triggers and functions feature enables the detection of changes to data as they happen and guarantee seamless execution of business logic at the data source. This ensures that new options to manipulate the data are possible and can be delivered for all the clients at the same time, while deployment and maintenance are simplified. Let's explore some industry-specific use cases where these capabilities shine:
- These examples highlight the practical application of triggers and functions in different industries, showcasing their value in streamlining processes and delivering efficient solutions.
- Using keyspace and Stream triggers to capture events and execute the desired JavaScript functions requires few lines of code to enrich applications with new behaviors. The following examples show how typical problems are solved with JavaScript.
- Redis Triggers can be used to detect changes to specific data structures, and log an auditing trail in the Redis log. The timestamp of the latest change can be updated in the same function.
- Data can be extracted, enriched or transformed, and loaded again. As an example, upon insertion of a document in a Hash data structure, a Trigger can launch the execution of a Function that computes the number of words in the text (in the example, a simple tokenization is presented but the logic can be as complex as required). The counter is finally stored in the same Hash together with the original document.

## Development
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-deprecated-features-trig-6e7db4a1ba.md`
- To aid in the development of new libraries of triggers and functions, you can use the type declaration files for the [triggers and functions API](), which allows your preferred development environment to provide autocompletion and type checking. You can install this information using the following command:
- Or you can manually add it as a devDependency to your `package.json` file:
- Create an empty directory for your new triggers and functions project, `my_first_project`. Navigate to the folder and run the following command:
- Update the `package.json` to add the gears API to the `devDependencies` object.
- Install the dependencies using `npm install`.

## Sync and async
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-deprecated-features-trig-cef1e56332.md`
- By default, each time a function is invoked, it is executed synchronously. This ensures the atomicity property, meaning that no other commands will be executed on Redis while the function is running. The atomicity property offers several advantages:
- * Multiple keys can be updated simultaneously, guaranteeing that other clients see the complete update rather than partial updates.
- * The data in Redis remains unchanged while it is being processed.
- However, the major disadvantage of the atomicity property is that Redis is blocked throughout the entire invocation, preventing it from serving other clients.
- Redis Stack's triggers and functions feature aims to provide greater flexibility to function writers by enabling the invocation of functions in the background. When a function is invoked in the background, it cannot directly access the Redis key space. To interact with the Redis key space from the background, the function must block Redis and enter an atomic section where the atomicity property is once again guaranteed.

## FlatMap
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-gears-v1-jvm-classes-gea-44c493115f.md`
- Maps a single input record to one or more output records.
- The FlatMap operation must return an [`Iterable`](https://docs.oracle.com/javase/8/docs/api/java/lang/Iterable.html). RedisGears
- splits the elements from the `Iterable` object and processes them as individual records.
- | I | The template type of the returned builder object |
- | flatmapper | <nobr>FlatMapOperation<T,âI></nobr> | For each input record, returns one or more output records |

## Write-behind caching
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-gears-v1-python-recipes--15bc630a31.md`
- Write-behind is a caching strategy in which the cache layer itself connects to the backing database. This means that your applications need only ever connect to your cache layer, and the cache then reads from or updates the backing database as needed. Redis currently supports write-behind caching in [Redis Software]().
- 1. Your application uses the cache for reads and writes.
- 1. The cache syncs any changed data to the backing database asynchronously.
- 1. Your application reads from the cache. If there's a cache hit, the data is returned.
- 1. If there's cache miss, the cache retrieves the data from your backing database (think Oracle, PostgreSQL, etc.). The data is then stored in the cache and returned. -->

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

## RedisJSON 2.0 release notes
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-release-notes-redisjson--4086c3da14.md`
- This is a maintenance release for RedisJSON 2.0.
- Update urgency: `LOW` - No need to upgrade unless there are new features you want to use.
- This is a maintenance release for RedisJSON 2.0.
- Update urgency: `LOW`: No need to upgrade unless there are new features you want to use.
- This is a maintenance release for RedisJSON 2.0.

## RedisJSON 1.0 release notes
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-release-notes-redisjson--c569efc3f6.md`
- This is a maintenance release for version 1.0.
- Update urgency: `LOW` -  No need to upgrade unless there are new features you want to use.
- This is a maintenance release for version 1.0.
- This is a maintenance release for version 1.0.
- This release updates the version to 1.0.4.

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

## RedisTimeSeries 1.10 release notes
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-release-notes-redistimes-3b489e3b1c.md`
- This is a maintenance release for RedisTimeSeries 1.10.
- Update urgency: `MODERATE`: Program an upgrade of the server, but it's not urgent.
- This is a maintenance release for RedisTimeSeries 1.10.
- Update urgency: `MODERATE`: Plan an upgrade of the server, but it's not urgent.
- This is a maintenance release for RedisTimeSeries 1.10.

## RedisTimeSeries 1.12 release notes
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-release-notes-redistimes-6132d41cb9.md`
- This is a maintenance release for RedisTimeSeries 1.12.
- Update urgency: `MODERATE`: Program an upgrade of the server, but it's not urgent.
- This is a maintenance release for RedisTimeSeries 1.12.
- Update urgency: `MODERATE`: Plan an upgrade of the server, but it's not urgent.
- This is a maintenance release for RedisTimeSeries 1.12.

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

## Configure the query performance factor for Redis Search in Redis Software
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-search-query-performance-b467ba45b8.md`
- Query performance factors are intended to increase the performance of queries, including [vector search](). When enabled, it allows you to increase a database's compute capacity and query throughput by allocating more virtual CPUs per shard. This is in addition to horizontal scaling with more shards which enables a higher throughput of key value operations. This document describes how to configure the query performance factor.
- Some use cases might not scale effectively. Redis experts can help determine if vertical scaling with Redis Search will boost performance for your use case and guide you on whether to use vertical scaling, horizontal scaling, or both.
- Redis Search requires a cluster running Redis Software version 7.4.2-54 or later. For the simplified configuration experience (no shard restart required, new UI, and new REST API), Redis Software version 8.x or later is required.
- If you do not have a cluster that supports Redis Search, [install Redis Software]() version 7.4.2-54 or later on a new cluster, or [upgrade an existing cluster]().
- 1. Calculate the hardware requirements for your Redis database:

## Redis Open Source quick start
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-stack-quickstart-f3ff868088.md`
- you can sign up for a free [Redis Cloud](https://cloud.redis.io/#/sign-up) subscription and create a Redis Stack database.
- Alternatively, you can use one of these methods:
- To set up a Redis Cloud database with Redis Stack features, follow these steps:
- 1. [Create a new Redis Cloud subscription](#create-a-subscription).
- 1. [Create a Redis Stack database](#create-a-redis-stack-database).

## Manage account settings
Source file: `raw/sources/20260409-docs-latest-operate-rc-accounts-account-settings-8e2dca9d80.md`
- To review or manage the settings associated with your Redis Cloud account, sign in to the [Redis Cloud console](https://cloud.redis.io/) and then select **Account Settings** from the menu.
- This displays the **Account Settings** screen:
- The available tabs depend on your account, and may include:
- You can change some settings by selecting **Edit**. For help changing other settings, [contact Support](https://redis.io/support/).
- The **Redis Account Info** section provides basic details about your account, including:

## Manage user account and profile
Source file: `raw/sources/20260409-docs-latest-operate-rc-accounts-user-profile-1d530dd9b1.md`
- This account has a profile with settings that you can manage using the Profile control located near the top, right corner of the Redis Cloud console:
- When you open the Profile control, you can:
- To review your user profile settings, select **User profile** from the Profile control.  This displays the **User Profile** screen:
- This screen contains up to three sections, including:
- If you're using single sign-on authentication, you cannot change the password using the *User Profile* screen.  Such accounts are managed by an identity provider (IdP).  For help changing (or recovering) the passwords for these accounts, consult your identity provider docs.

## Redis Cloud REST API
Source file: `raw/sources/20260409-docs-latest-operate-rc-api-0281d9a846.md`
- The [Redis Cloud REST API]() helps you manage your Redis Cloud databases programmatically.

## Get started with the REST API
Source file: `raw/sources/20260409-docs-latest-operate-rc-api-get-started-284a586563.md`
- To use the Redis Cloud REST API, you need to:
- To use the keys to authenticate and authorize your request, include the keys with the request headers:
- | Key name         | HTTP&nbsp;header&nbsp;name   |Description                                            |
- | -----------      | -------------------| ----------------------------------------------------- |
- | Account&nbsp;key | `x-api-key`        | Account-level key assigned to all users of an account |

## Enable the API
Source file: `raw/sources/20260409-docs-latest-operate-rc-api-get-started-enable-the-api-00341a68da.md`
- If you have a Redis Cloud account, you can use a REST API to manage your subscriptions and databases programmatically.
- For security reasons, the Redis Cloud API is inactive by default.
- 1. Sign in to your [Redis Cloud account](https://cloud.redis.io) as an account owner.
- 1. From the menu, choose **Access Management**.
- 1. When the **Access Management** screen appears, select the **API Keys** tab.

## Manage API keys
Source file: `raw/sources/20260409-docs-latest-operate-rc-api-get-started-manage-api-keys-bafb46c050.md`
- 1. The **Account key** identifies the account associated with the Redis Cloud subscription.
- 2. The **User key** identifies the user and (optionally) the context of a request.  Generated by account owners.
- Use the **API Keys** tab of the **Access Management** screen to manage your keys:
- 1. Sign in to your [Redis Cloud account](https://cloud.redis.io) as an account owner.
- 1. From the menu, choose **Access Management** and then select the **API Keys** tab.

## Use the REST API
Source file: `raw/sources/20260409-docs-latest-operate-rc-api-get-started-use-rest-api-9ee0d509a9.md`
- For the Redis Cloud API, there is a request limit of 400 requests per minute per Account API key. If you go past this limit, your API requests will fail.
- The [Swagger UI](https://api.redislabs.com/v1/swagger-ui.html) is useful for initial introduction and for learning about API operations, models, and simulated usage.
- 1. Open the [Swagger UI](https://api.redislabs.com/v1/swagger-ui.html) page in a browser.
- The **Available Authorizations** box is shown with the headers and values that are used for authentication in all API interactions with Swagger.
- 1. Enter the [Account Key]() as the `x-api-key` value and then choose **Authorize**.

## Redis Cloud
Source file: `raw/sources/20260409-docs-latest-operate-rc-b1a819f9bc.md`
- With Redis Cloud, you get all of the features of Redis Software, including:
- [Try Redis Cloud](https://redis.io/try-free/) to set up your free 30MB database.
- Use the [Quick start]() to learn how to create your free database.
- You can also use [Vercel's Redis Cloud integration](https://vercel.com/marketplace/redis-cloud) or [Heroku's Redis Cloud add-on](https://elements.heroku.com/addons/rediscloud) to quickly add a Redis database to your project.
- Create and manage [Redis databases]() in the cloud.

## Redis Cloud changelog (August 2023)
Source file: `raw/sources/20260409-docs-latest-operate-rc-changelog-2023-august-2023-d3bd55e264.md`
- This changelog lists new features, enhancements, and other changes added to Redis Cloud during August 2023.
- You can opt in to Redis 7.2 on [Flexible subscriptions](). Redis 7.2 introduces several changes to existing Redis commands; see the [list of breaking changes]() published in June's changelog for more details.
- A preview of [triggers and functions]() (previously known as RedisGears) is now available in the following regions:
- To use it, [create a fixed subscription]() in one of these regions. Then, [create your database]() and set the database Type to Redis and select Triggers and Functions in the drop-down. Or, set the database Type to Redis Stack to get all of our advanced capabilities.
- If you'd like to use triggers and functions with a [Flexible subscription](), contact [support](https://redis.com/company/support/).

## Redis Cloud changelog (December 2023)
Source file: `raw/sources/20260409-docs-latest-operate-rc-changelog-2023-december-2023-64f5f94955.md`
- [Active-Active databases]() on Redis Cloud now support the [JSON]() data type.
- See [Create an Active-Active subscription]() to learn how to create an Active-Active subscription.
- Databases that support [Transport layer security (TLS)]() now support multiple client certificates for use with mutual TLS. This makes it easier to rotate client certificates outside of a maintenance window. In addition, you can now provide a client Certificate Authority chain to trust any leaf certificate it signed for more flexibility.
- See [Transport layer security (TLS)]() to learn how to enable TLS.

## Redis Cloud changelog (January 2023)
Source file: `raw/sources/20260409-docs-latest-operate-rc-changelog-2023-january-2023-c99ce19246.md`
- This changelog lists new features, enhancements, and other changes added to Redis Cloud during January 2023.

## Redis Cloud changelog (July 2023)
Source file: `raw/sources/20260409-docs-latest-operate-rc-changelog-2023-july-2023-4fa338f9c8.md`
- This changelog lists new features, enhancements, and other changes added to Redis Cloud during July 2023.
- You can now use [Selectors](#selectors) and [Key Permissions](#selectors) in your [ACL rules]() for all Redis 7.2 databases.
- In addition, the admin console now returns an error if you try to enter an invalid ACL. It will also associate the ACL rule with the supported database version when you [add it to a role]().

## Redis Cloud changelog (March 2023)
Source file: `raw/sources/20260409-docs-latest-operate-rc-changelog-2023-march-2023-314240d366.md`
- This changelog lists new features, enhancements, and other changes added to Redis Cloud during March 2023.
- A preview of Redis 7.0 is available for [Fixed subscriptions]() in selected regions in AWS and GCP. However, some Redis 7.0 functionality might not be fully available during preview. Redis 7.0 also introduces several changes to existing Redis commands; see the [list of breaking changes](#redis-70-breaking-changes) for more details.
- The following tables show which new open source Redis 7.0 commands are supported in Redis 7.0 subscriptions.
- | <span style="min-width: 10em; display: table-cell">Command</span> | Supported |
- | [CLUSTER ADDSLOTSRANGE]() | <span title="Not supported">&#x274c; Not supported</span> |

## Redis Cloud changelog (October 2023)
Source file: `raw/sources/20260409-docs-latest-operate-rc-changelog-2023-october-2023-882fa45d9b.md`
- You can now download shard cost reports in CSV format from the [**Billing and Payments**]() and [**Usage Reports**]() pages.
- The process for [linking new Redis accounts]() to your [SAML single sign-on]() configuration has changed to enhance security. Now, both accounts must use a token to ensure that the connection is legitimate.

## Redis Cloud changelog (July 2024)
Source file: `raw/sources/20260409-docs-latest-operate-rc-changelog-2024-july-2024-9227cf0667.md`
- When you create a Pro database with [Search and query]() capabilities, you can now choose to boost your query capabilities with the Query performance factor. The query performance factor adds dedicated power specifically for Search and query. For more information, see [Search and query sizing]().
- You can take advantage of extra query speed for free during the preview period.
- The query performance factor is available for Redis Cloud Pro databases on Redis 7.2 and later.
- A preview of Redis 7.4 is now available on [Redis Cloud Essentials databases]() in select regions on Amazon Web Services and Google Cloud.
- Redis 7.4 offers hash field expiration and other feature set improvements. For more information on the changes in Redis 7.4, see the [Redis 7.4 release blog post](https://redis.io/blog/announcing-redis-community-edition-and-redis-stack-74).

## Redis Cloud changelog (March 2024)
Source file: `raw/sources/20260409-docs-latest-operate-rc-changelog-2024-march-2024-7d39e27c0c.md`
- You can now use your [Google Cloud Marketplace]() account to pay for your Fixed subscriptions as well as your Flexible subscriptions.
- [Active-Passive]() now supports source databases that require connections over TLS. See [Migrate data]() for more information.

## Redis Cloud changelog (May 2024)
Source file: `raw/sources/20260409-docs-latest-operate-rc-changelog-2024-may-2024-d48f24570e.md`
- [SAML single sign-on]() now supports multiple username domains. Select **Manage domains** on the **Single sign-on** screen to associate additional domains to your SAML setup.
- We added domain verification to [SAML single sign-on]() to enhance security. Before you set up SAML in Redis Cloud, you must first [verify domain ownership]() for any domains associated with your SAML setup.
- If you have an active SAML configuration, you can still sign in with SAML SSO, but your domains will be set to **Unverified**. You should [verify domain ownership]() as soon as possible.
- [Active-Active databases]() on Redis Cloud now support [Search and query]().
- See [Create an Active-Active database]() to learn how to create an Active-Active database.

## Redis Cloud changelog (October 2024)
Source file: `raw/sources/20260409-docs-latest-operate-rc-changelog-2024-october-2024-03ab944e31.md`
- A preview of Redis 7.4 is now available on [Redis Cloud Pro databases]().
- Redis 7.4 offers hash field expiration and other feature set improvements. For more information on the changes in Redis 7.4, see the [Redis 7.4 release blog post](https://redis.io/blog/announcing-redis-community-edition-and-redis-stack-74).
- Redis Cloud has already been updated with patches for CVE-2024-31449, CVE-2024-31227, and CVE-2024-31228. No further action is required at this time. For more information, see the [Redis blog post](https://redis.io/blog/security-advisory-cve-2024-31449-cve-2024-31227-cve-2024-31228/) about these vulnerabilities.

## Redis Cloud changelog (March 2026)
Source file: `raw/sources/20260409-docs-latest-operate-rc-changelog-march-2026-d13cf34c21.md`
- Passwordless authentication is now available for Redis Cloud Pro databases on subscriptions that have [blocked the public endpoint](). For more information, see [Turn on passwordless authentication for the default user]().
- Redis 8.4 is now available for [Redis Cloud Pro databases]() in select regions.
- Redis 8.4 builds on the foundation of Redis 8.2 with significant enhancements to cluster operations, string manipulation, and stream processing capabilities. For more information on the changes in Redis 8.4, see [What's new in Redis 8.4]() and review the Redis Open Source [8.4 release notes]().
- All Redis Cloud databases running Redis 8.4 and later will be automatically upgraded to the next minor version upon release. For example, all Redis 8.4 databases will be upgraded to Redis 8.6 when it is available on Redis Cloud.
- Redis Cloud Pro users can opt out of minor version auto-upgrades. See [Version management]() for more details.

## Redis Cloud changelog (October 2025)
Source file: `raw/sources/20260409-docs-latest-operate-rc-changelog-october-2025-968220a108.md`
- Redis Cloud now supports [Redis Data Integration (RDI)]() to create data pipelines that ingest data from a supported primary database to Redis.
- Using a data pipeline lets you have a cache that is always ready for queries. RDI Data pipelines ensure that any changes made to your primary database are captured in your Redis cache within a few seconds, preventing cache misses and stale data within the cache.
- See [Data Integration]() to learn how to set up data pipelines with Redis Cloud.
- Redis Cloud has already been updated with a patches for the following vulnerabilities:
- No further action is required at this time.

## Redis 7.4 release notes and breaking changes
Source file: `raw/sources/20260409-docs-latest-operate-rc-changelog-version-release-notes-7-4-10eb3ea5aa.md`
- Redis 7.4 offers hash field expiration and other feature set improvements. For more information on the changes in Redis 7.4, see [What's new in Redis 7.4]().
- When new versions of Redis Community Edition change existing commands, upgrading your database to a new version can potentially break some functionality. Before you upgrade, read the provided list of breaking changes that affect Redis Cloud and update any applications that connect to your database to handle these changes.
- If you're upgrading from Redis 6.4, also review the [Redis 7.2 breaking changes]() before upgrading.

## Active-Active Redis
Source file: `raw/sources/20260409-docs-latest-operate-rc-databases-active-active-432b898753.md`
- Active-Active databases store data across multiple regions and availability zones.  This improves scalability, performance, and availability, especially when compared to standalone databases.
- To create Active-Active databases, you need a Redis Cloud Pro subscription that enables Active-Active Redis and defines the regions for each copy of your databases. See [Create an Active-Active database]() for instructions.
- Active-Active databases are distributed across multiple regions (geo-distribution).  This improves performance by reducing latency for nearby users and improves availability by protecting against data loss in case of network or resource failure.
- Active-Active databases allow read and write operations in each copy.  Each copy eventually reflects changes made in other copies ([eventual consistency]()).  Conflict-free replicated data types (CRDTs) synchronize read and write operations between copies.  CRDTs ensure consistency and resolve conflicts.
- Active-Active databases use TLS to synchronize data between regions.  You can also use TLS to encrypt client connections.  See [Transport Layer Security (TLS)]() for more information.

## Create an Active-Active database
Source file: `raw/sources/20260409-docs-latest-operate-rc-databases-active-active-create-active-active-database-d23d291300.md`
- Active-Active databases store data across multiple regions and availability zones.  This improves scalability, performance, and availability, especially when compared to standalone databases. See [Active-Active Redis]() for more information.
- To deploy Active-Active databases in Redis Cloud, you need a Redis Cloud Pro plan that enables Active-Active Redis and defines the regions for each copy of your databases.
- Active-Active databases consist of multiple copies (also called _instances_) deployed to different regions throughout the world.
- This reduces latency for local users and improves availability should a region fail.
- Redis Cloud maintains consistency among instances in the background; that is, each copy eventually includes updates from every region.  As a result, memory limit and throughput increase.

## Back up and export a database
Source file: `raw/sources/20260409-docs-latest-operate-rc-databases-back-up-data-d57d303a7d.md`
- The backup options for Redis Cloud databases depend on your plan:
- The number of database backups that can run simultaneously on a subscription is limited to 4 by default.
- Backups are saved to predefined storage locations available to your subscription. Backup locations need to be available before you turn on database backups.  To learn more, see [Set up backup storage locations](#set-up-backup-storage-locations).
- Backups are saved in RDB format. If the database is comprised of multiple shards, an RDB file will be created for each shard of the database. For more information on restoring data from a backup, see [Restore from an RDB file]().
- Here, you'll learn how to store backups using different cloud providers.

## Size a Redis Cloud database
Source file: `raw/sources/20260409-docs-latest-operate-rc-databases-configuration-sizing-368d987b44.md`
- The dataset size of a database is a part of the full memory limit for the database. The memory limit represents the maximum amount of memory for the database, which includes data values, keys, module data, and overhead for specific features.  High availability features, such as replication and Active-Active,  increase memory consumption, so your dataset size and memory limit will be different.
- For Redis Cloud Essentials, the plan size refers to the full memory limit, not the dataset size. Both the total memory limit and dataset size are listed under **Database details** when you create an Essentials database.
- For Redis Cloud Pro, you define your dataset size when you create the database, and we calculate your total memory limit based on the features you choose.
- Memory limits in Redis Cloud are subject to the same considerations as Redis Software; to learn more, see [Database memory limits]().
- Throughput is the number of operations a database can handle over a certain period of time. For Redis Cloud databases, throughput is defined in operations per second (ops/sec).

## Connect to a Redis Cloud database
Source file: `raw/sources/20260409-docs-latest-operate-rc-databases-connect-3fca0f138b.md`
- After you [create your database](), you can connect to it.
- To connect to the database, you need your username and password. By default, your database is protected by a [**Default user**]() called `default` and a masked **Default user password**. You can see the default user password in the **Security** section of the **Configuration** details for your database. Select the eye icon to show or hide the password.
- If you've turned on [Role-based access control]() for your database and [turned off the default User](), use the username and password for your data access role.
- Once you have the username and password, select **Connect** to open the connection wizard.
- For [Active-Active databases](), you connect to one of the database instances. Choose the region you want to connect to from the region selection to access the connection information for that instance.

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

## Import data into a database
Source file: `raw/sources/20260409-docs-latest-operate-rc-databases-import-data-e9235f9a24.md`
- Data imported into an existing database overwrites existing data.
- As a result, the number of keys in the source and destination databases can be different after the import is complete.
- Make sure the Redis version of the source database is compatible with the database where the data will be imported.
- To import a dataset from any publicly available Redis Open Source server:
- 1. Select **Databases** from the Redis Cloud console menu and then select the target database from the database list.

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

## RDI on Redis Cloud quick start
Source file: `raw/sources/20260409-docs-latest-operate-rc-databases-rdi-quick-start-f0cfa0a5c4.md`
- The [`rdi-cloud-automation` GitHub repository](https://github.com/redis/rdi-cloud-automation) contains a Terraform script that quickly sets up a PostgreSQL source database on an EC2 instance and all required permissions and network setup to connect it to a Redis Cloud target database.
- This guide is for demonstration purposes only. It is not recommended for production use.
- 1. Create a [Redis Cloud Pro database]() hosted on Amazon Web Services (AWS).
- Turn on Multi-AZ replication and [manually select the availability zones]() when creating the database.
- 1. Install the [AWS CLI](https://aws.amazon.com/cli/) and set up [credentials for the CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-sso.html).

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

## Redis version management
Source file: `raw/sources/20260409-docs-latest-operate-rc-databases-version-management-b46c5ff061.md`
- Redis Cloud provides comprehensive database version management that prioritizes customer control over major changes.
- This page describes database version management for Redis Cloud. Redis Cloud manages the cluster version for you automatically.
- Redis uses a **MAJOR.MINOR.PATCH** versioning scheme:
- Redis Cloud supports the following version support models:
- When a Redis version reaches **End-of-Life (EOL)**, Redis Cloud will automatically upgrade your database to the next minor version during maintenance windows if you do not manually upgrade before EOL.

## View and edit databases
Source file: `raw/sources/20260409-docs-latest-operate-rc-databases-view-edit-database-d63dc65202.md`
- Use the **Databases** menu of the Redis Cloud console to manage your databases.
- 1. Sign in to the [Redis Cloud console](https://cloud.redis.io/).  (Create an account if you don't already have one.)
- 2. Select the **Databases** menu to display a [searchable list of all databases](#manage-the-database-list).
- 4. Select the database name to open the **Database** page.
- The **Database** screen lets you review:

## Use the LangCache API on Redis Cloud
Source file: `raw/sources/20260409-docs-latest-operate-rc-langcache-use-langcache-5b97bee3cf.md`
- You can use the [LangCache API and SDK]() from your client app to store and retrieve LLM, RAG, or agent responses.
- For LangCache on Redis Cloud, the base URL and cache ID are available in the LangCache service's **Configuration** page in the [**Connectivity** section]().
- The LangCache API key is only available immediately after you create the LangCache service. If you lost this value, you will need to [replace the service API key]() to be able to use the LangCache API.
- When you call the API, you need to pass the LangCache API key in the `Authorization` header as a Bearer token and the Cache ID as the `cacheId` path parameter.
- See the [LangCache API and SDK examples]() for more information on how to use the LangCache API.

## Redis Cloud quick start
Source file: `raw/sources/20260409-docs-latest-operate-rc-rc-quickstart-863f55d94d.md`
- If you're new to Redis Cloud, this quick start helps you get up and running.
- 1.  Create an account and a free database
- If you already have an account, see [Create an Essentials database]() to create a Free 30 MB Essentials database. Free plans are a type of Essentials plans; this provides an easy upgrade path when you need it.
- If you already have a database, see [Manage databases]().
- To create a new account with a free database:

## Security
Source file: `raw/sources/20260409-docs-latest-operate-rc-security-0f6c80ce65.md`
- Redis Cloud provides a number of ways to secure subscriptions and databases.
- As a Redis Cloud user, consider these security domains:
- First, you might want to review our [shared responsibility model]() for security.
- The Redis Cloud console is the web application you use to manage your Redis Cloud deployments.
- Secure access to the Redis Cloud console by:

## Access management
Source file: `raw/sources/20260409-docs-latest-operate-rc-security-access-control-access-management-69a86cffa0.md`
- The **Access management** screen helps you manage:
- Here, you learn how to manage your team's users and control their level of access.
- For help managing API keys, see [Manage API keys]().
- The **Team** tab lets you manage the people allowed to access your account. Each authorized person is assigned to a role that specifies their privileges.
- The list contains one entry summarizing the team settings for each user in your team. By default, the list includes the account owner.

## Create roles for Active-Active databases
Source file: `raw/sources/20260409-docs-latest-operate-rc-security-access-control-data-access-control-active-active-08a72725b2.md`
- For [Active-Active databases](), you can define roles with different levels of access for different regions. For example, you can define a user role with full database access in one region and read-only access in another. Or, you can prevent a user from running any commands in a specified region.
- 1. Go to **Data Access Control > Roles** and either select `+` to create a new role or point to an existing role and select the pencil icon to edit it.
- 1. In the **Associations** section of the **Edit role** or **Create new role** screen, you can select `+` to create a new association or point to an existing association and select the pencil icon to edit it.
- 1. Select one or more Active-Active databases from the **Databases** list. Active-Active databases are marked with a globe icon.
- 1. To set the role's default level of access to the selected databases, choose a **Redis ACL** from the list and select the check mark to confirm the association.

## Configure permissions with Redis ACLs
Source file: `raw/sources/20260409-docs-latest-operate-rc-security-access-control-data-access-control-configure-acl-8b389294ba.md`
- You can define custom Redis ACL rules to assign to a data access role or use predefined Redis ACLs.
- Redis provides three predefined ACL rules, which are marked with the Redis logo and can not be changed:
- ACLs that are not marked with the Redis logo are user-defined ACL rules.
- To configure a Redis ACL that you can assign to a data access role:
- 1. Go to **Data Access Control** from the [Redis Cloud console](https://cloud.redis.io/#/) menu.

## Create and edit database users
Source file: `raw/sources/20260409-docs-latest-operate-rc-security-access-control-data-access-control-create-assign-b2156fce26.md`
- Before you create a database user, you must [create a data access role]() to assign to that user.
- 1. Go to **Data Access Control** from the [Redis Cloud console](https://cloud.redis.io/#/) menu.
- 3. Enter a username in the **Username** field.
- An error occurs if a user tries to connect to a memcached database with the username `admin`. Do not use `admin` for a username if the user will be connecting to a memcached database.
- 1. Enter and confirm the user's password. ACL user passwords must be between 8 and 128 characters long.

## Assign permissions to roles
Source file: `raw/sources/20260409-docs-latest-operate-rc-security-access-control-data-access-control-create-roles-7229af2dd0.md`
- To assign [Redis ACLs]() to a data access role:
- 1. Go to **Data Access Control** from the [Redis Cloud console](https://cloud.redis.io/#/) menu.
- 1. Select `+` to create a new role or point to an existing role and select the pencil icon to edit it.
- 1. Select an **ACL rule** to assign to the role.
- 1. Select one or more databases from the **Databases** list and click the check mark to confirm the association.

## Default user
Source file: `raw/sources/20260409-docs-latest-operate-rc-security-access-control-data-access-control-default-user-30d0631db9.md`
- Password-based authentication is a basic but essential Redis security feature. When you create a Redis Cloud database, your database is given a randomly generated password called the **Default user password**.
- This password appears in the **Security** section of the **Configuration** tab of the database details screen.
- Use the copy button to copy the password to the clipboard:
- You'll need to use this password whenever you connect to your database using a Redis client. See [Connect to a database]() for more info.
- If you have [blocked the public endpoint]() for your Redis Cloud Pro subscription, you can also turn on passwordless authentication for the default user. See [Block public endpoints]() for more info.

## Data access control
Source file: `raw/sources/20260409-docs-latest-operate-rc-security-access-control-data-access-control-e9e72fb0c0.md`
- When you create a Redis Cloud database, your database is given a randomly generated password called the [**Default user password**](). Learn how to [change the default user password]() or [turn off default user access]().
- With [role-based access control (RBAC)](), you create roles and assign users to those roles to grant different levels of access to the database.

## Enable Role-based access control
Source file: `raw/sources/20260409-docs-latest-operate-rc-security-access-control-data-access-control-role-based-ac-0cb615259d.md`
- Role-based access control (RBAC) lets you define *roles* with specific sets of *permissions*. You can then assign *users* to these roles
- to provide appropriate levels of access.
- RBAC effectively lets you implement the [principle of least privilege](https://en.wikipedia.org/wiki/Principle_of_least_privilege). For example, you can provide
- read-only access to an application whose only job is to display Redis data. Similarly, you can prevent new developers from running dangerous administrative commands.
- To set up RBAC, first navigate to the **Data Access Control** screen.

## Multi-factor authentication
Source file: `raw/sources/20260409-docs-latest-operate-rc-security-access-control-multi-factor-authentication-817afd09e6.md`
- To reduce the chances of unauthorized access, Redis Cloud allows users to enable multi-factor authentication (MFA).
- When MFA is enabled, users must enter their username, password, and an authentication code when signing in. MFA requires a mobile device that can receive these authentication codes over text messaging. In addition, you may [use an authenticator app](#app) such as [Google Authenticator](https://en.wikipedia.org/wiki/Google_Authenticator) as one of your factors.
- To further increase the security of the account, the account owner can [require MFA enforcement for all users](#enforcing).
- Once you enable MFA, it will be required to access every account that belongs to you. Deactivating MFA enforcement on an account does not deactivate MFA enforcement for other users of that account that have defined a phone number. To deactivate MFA enforcement for other users, those users will each need to deactivate MFA enforcement for their own user accounts.
- Each user can enable and configure MFA for their account.

## SAML single sign-on
Source file: `raw/sources/20260409-docs-latest-operate-rc-security-access-control-saml-sso-ef6d32b3d7.md`
- Redis Cloud supports both [IdP-initiated](#idp-initiated-sso) and [SP-initiated](#sp-initiated-sso) [single sign-on (SSO)](https://en.wikipedia.org/wiki/Single_sign-on) with [SAML (Security Assertion Markup Language)](https://en.wikipedia.org/wiki/Security_Assertion_Markup_Language).
- You cannot use [SCIM (System for Cross-domain Identity Management)](https://en.wikipedia.org/wiki/System_for_Cross-domain_Identity_Management) to provision Redis Cloud users. However, Redis Cloud supports just-in-time (JIT) user provisioning, which means Redis Cloud automatically creates a user account the first time a new user signs in with SAML SSO.
- When SAML SSO is enabled, the [identity provider (IdP)](https://en.wikipedia.org/wiki/Identity_provider) admin handles SAML user management instead of the Redis Cloud account owner.
- You can use any identity provider to integrate with Redis Cloud as long as it supports the SAML protocol. You can also refer to these integration guides for several popular identity providers:
- After you activate SAML SSO for a Redis Cloud account, all existing local users for the account, except for the user that set up SAML SSO, are converted to SAML users and are required to use SAML SSO to sign in. Before they can sign in to Redis Cloud, the identity provider admin needs to set up these users on the IdP side and configure the `redisAccountMapping` attribute to map them to the appropriate Redis Cloud accounts and [roles]().

## Auth0 SAML integration guide
Source file: `raw/sources/20260409-docs-latest-operate-rc-security-access-control-saml-sso-saml-integration-auth0-2b0111cf53.md`
- This guide shows how to configure [Auth0](https://auth0.com/docs) as a SAML single sign-on identity provider (IdP) for your Redis Cloud account.
- To learn more about Redis Cloud support for SAML, see [SAML single sign-on]().
- Before completing this guide, you must [verify ownership of any domains]() you want to associate with your SAML setup.
- 1. Sign in to your Auth0 account and navigate to **User Management > Users**.
- SAML assertion requires first and last name, which are not available in the default user profile.

## Okta SAML integration guide (Generic)
Source file: `raw/sources/20260409-docs-latest-operate-rc-security-access-control-saml-sso-saml-integration-okta-ge-ed4b789aa2.md`
- This guide shows how to configure [Okta](https://help.okta.com/en-us/Content/Topics/Security/Identity_Providers.htm) as a SAML single sign-on identity provider (IdP) for your Redis Cloud account.
- Learn how to use the generic application template. You can also refer to the [Org2Org]() application template.
- To learn more about Redis Cloud support for SAML, see [SAML single sign-on]().
- Before completing this guide, you must [verify ownership of any domains]() you want to associate with your SAML setup.
- To create the Okta SAML integration application:

## Okta SAML integration guide (Org2Org)
Source file: `raw/sources/20260409-docs-latest-operate-rc-security-access-control-saml-sso-saml-integration-okta-or-2bc06b8d21.md`
- This guide shows how to configure [Okta](https://help.okta.com/en-us/Content/Topics/Security/Identity_Providers.htm) as a SAML single sign-on identity provider (IdP) for your Redis Cloud account.
- This guide shows how to use the Org2Org application template. You can also use the [Generic]() application template.
- To learn more about Redis Cloud support for SAML, see [SAML single sign-on]().
- Before completing this guide, you must [verify ownership of any domains]() you want to associate with your SAML setup.
- Create an Okta "Org2Org" SAML integration appliction.

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

## Connect to Amazon Web Services Transit Gateway
Source file: `raw/sources/20260409-docs-latest-operate-rc-security-aws-transit-gateway-78ed4cb2bf.md`
- [Amazon Web Services (AWS) Transit Gateway](https://docs.aws.amazon.com/vpc/latest/tgw/how-transit-gateways-work.html) acts as a Regional virtual router for traffic flowing between your virtual private cloud(s) (VPCs) and on-premises networks. You can attach different resources to your Transit Gateway which include:
- You can connect your Redis Cloud Pro subscription to a Transit Gateway which is attached to the VPC of your application. This lets your application connect securely to your Redis Cloud database while optimizing performance.
- Transit Gateway is available only with Redis Cloud Pro.  It is not supported for Redis Cloud Essentials.
- You can use Transit Gateway as an alternative to [VPC peering](), or you can enable both for your subscription.
- Compared to VPC peering, Transit Gateway:

## Configure CIDR allow list
Source file: `raw/sources/20260409-docs-latest-operate-rc-security-cidr-whitelist-d906bed8b9.md`
- The [CIDR](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) [allow list](https://en.wikipedia.org/wiki/Whitelist) lets you restrict traffic to your Redis Cloud database. When you configure an allow list, only the [IP addresses](https://en.wikipedia.org/wiki/IP_address) defined in the list can connect to the database. Traffic from all other IP addresses is blocked.
- To use the CIDR allow list, you must be on either paid Redis Cloud Essentials or on Redis Cloud Pro.  This feature is not supported on free Redis Cloud Essentials plans.
- To define the CIDR allow list for a database:
- 1. Select **Databases** from the [Redis Cloud console](https://cloud.redis.io/) menu and then select your database from the list.
- 1. From the database's **Configuration** screen, select the **Edit database** button.

## Cloud database security
Source file: `raw/sources/20260409-docs-latest-operate-rc-security-database-security-bec13320fd.md`
- Redis Cloud provides several features to help you secure your databases. These include
- [password-based authentication]() and [role-based access control](),
- [network security](), [TLS](), and [encryption-at-rest]().
- All Redis Cloud databases [require a password]() to connect. However, we recommend enabling [role-based access control]() (RBAC) for additional security. With RBAC, you can define
- all the roles you need, with the appropriate permissions, and assign those roles

## Block public endpoints
Source file: `raw/sources/20260409-docs-latest-operate-rc-security-database-security-block-public-endpoints-2d70da4f5d.md`
- By default, you can connect to Redis Cloud databases through the database's public endpoint, or through the database's private endpoint with a private connectivity method.
- Public endpoints are accessible from the public internet and don't require a private connectivity method. While this makes Redis Cloud databases convenient to use, it also exposes the databases to potential unauthorized access or brute force attacks, even with a database password in place. Some organizations may want to block public access to their databases to comply with security policies or to better meet stringent compliance standards.
- Users with Redis Cloud Pro databases can choose to block public endpoints for all databases in their subscription.
- After you block your database's public endpoint, any connection from an IP address that is not part of the private address space defined in [RFC 1918](https://datatracker.ietf.org/doc/html/rfc1918#section-3) will be rejected. Ensure that all connections to your database are made through a private connectivity method before blocking the public endpoint.
- You can block public endpoints for a [new subscription](#new-subscription) or an [existing subscription](#existing-subscription).

## Network security
Source file: `raw/sources/20260409-docs-latest-operate-rc-security-database-security-network-security-f1063ce402.md`
- Redis Cloud supports two types of network security: database-level CIDR allow lists and [VPC](#virtual-private-clouds)-wide CIDR allow lists.
- These features are available in most Redis Cloud configurations, as shown here:
- | Cloud&nbsp;provider | VPC peering | IP restrictions |
- |:-------------------:|-------------|-----------------|
- | AWS | Redis Cloud Pro | Paid Redis Cloud Essentials and Redis Cloud Pro |

## Transport Layer Security (TLS)
Source file: `raw/sources/20260409-docs-latest-operate-rc-security-database-security-tls-ssl-3ee74eab0d.md`
- Transport Layer Security (TLS) uses encryption to secure [network communications](https://en.wikipedia.org/wiki/Transport_Layer_Security).
- Paid Redis Cloud Essentials plans and Redis Cloud Pro plans can use TLS to encrypt data communications between applications and Redis databases.
- TLS is not available for Free Redis Cloud Essentials plans.
- Because TLS has an impact on performance, you need to determine whether the security benefits of TLS are worth the performance impact. TLS recommendations depend on the subscription plan and whether clients connect to your database using public or private endpoints.
- | Subscription | Public&nbsp;endpoint | Private endpoint |

## Encryption at rest
Source file: `raw/sources/20260409-docs-latest-operate-rc-security-encryption-at-rest-18167df39b.md`
- Redis Cloud deployments are always encrypted at rest.
- Persistent data is written to encrypted EBS volumes. For more information, see [Amazon EBS encryption](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html).
- When Auto Tiering is enabled, the flash memory data is written to encrypted NVMe SSD volumes. For more information, see [SSD instance store volumes](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ssd-instance-store.html).
- All data written to disk on Google Cloud-based Redis Cloud deployments is encrypted by default. When deploying
- a Redis Cloud database on Google Cloud, you don't need to take any actions to enable this encryption.

## Enable Google Cloud Private Service Connect
Source file: `raw/sources/20260409-docs-latest-operate-rc-security-private-service-connect-66a7f4fdd5.md`
- [Private Service Connect](https://cloud.google.com/vpc/docs/private-service-connect) (PSC) creates a private endpoint that allows secure connections to Redis Cloud databases without exposing your application's [virtual private cloud](https://en.wikipedia.org/wiki/Virtual_private_cloud) (VPC).
- This feature is only available for Redis Cloud Pro subscriptions hosted on Google Cloud.
- You can use Private Service Connect as an alternative to [VPC peering](), or you can enable both for your subscription.
- Compared to VPC peering, Private Service Connect:
- Larger clusters are more likely to experience increased latency with Private Service Connect versus VPC peering.

## Redis Cloud shared responsibility model
Source file: `raw/sources/20260409-docs-latest-operate-rc-security-shared-responsibility-model-da8d2b993a.md`
- The security of all Redis Cloud deployments is a shared responsibility. Redis, the public cloud providers (Amazon Web Services [AWS], Google Cloud, and Microsoft Azure), and our customers all help ensure the security of these deployments.
- Redis Cloud's offerings are managed by Redis and deployed on AWS, Azure, and Google Cloud infrastructure.
- Redis is responsible for the software that runs Redis Cloud. This includes the patching and maintenance of
- the operating systems that Redis is deployed on as well as the patching and maintenance of Redis Cloud.
- The public cloud provider hosting your Redis Cloud databases is responsible for the physical security of their data centers and

## Redis Cloud Bring your own Cloud
Source file: `raw/sources/20260409-docs-latest-operate-rc-subscriptions-bring-your-own-cloud-594c126eac.md`
- Redis Cloud Bring your own Cloud (BYOC) allows organizations to use their own cloud infrastructure to deploy Redis Cloud.
- By default, Redis hosts the infrastructure that runs Redis Cloud. However, if your organization has specific requirements, you may need to have more control over your data residency or security options. Redis Cloud BYOC lets you fulfill these requirements while still having a fully managed service experience of Redis Cloud. Like standard Redis Cloud, Redis manages deployment, scaling, monitoring, and support, so you can focus on building applications while Redis manages the backend.
- Redis Cloud BYOC availability requires approval from Redis. If you're interested, [contact sales](https://redis.io/meeting/).
- Redis Cloud BYOC has some benefits over standard Redis Cloud:
- Consider using Redis Cloud BYOC if you have specific organizational needs or requirements, such as:

## Configure subscription CIDR allow list
Source file: `raw/sources/20260409-docs-latest-operate-rc-subscriptions-bring-your-own-cloud-subscription-whitelist-b633318781.md`
- The [CIDR](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) [allow list](https://en.wikipedia.org/wiki/Whitelist) lets you restrict traffic to your Redis Cloud database. When you configure an allow list, only the [IP addresses](https://en.wikipedia.org/wiki/IP_address) defined in the list can connect to the database. Traffic from all other IP addresses is blocked.
- If you use [Redis Cloud Bring your Own Cloud]() to host your Redis Cloud deployment, you can configure a subscription-wide allow list
- to restrict traffic to all databases associated with the subscription.
- The subscription CIDR allow list defines a range of IP addresses and [AWS security groups](https://docs.aws.amazon.com/managedservices/latest/userguide/about-security-groups.html) that control inbound and outbound traffic to the Redis Cloud [VPC](https://en.wikipedia.org/wiki/Virtual_private_cloud). When you add security groups to the allow list, you can also use the same security groups to manage access to your application.
- The subscription-level allow list is available for Redis Cloud Bring your Own Cloud. If you don't have Redis Cloud Bring your Own Cloud, you can configure a [CIDR allow list]() for each database.

## Manage subscriptions
Source file: `raw/sources/20260409-docs-latest-operate-rc-subscriptions-dc579d357c.md`
- This page helps you manage your Redis Cloud subscriptions; it briefly compares available plans and shows where to find help with common tasks.
- As of April 2024, Redis Cloud supports the following subscription plans:
- | Feature | Redis Cloud Essentials (free) | Redis Cloud Essentials (paid) | Essentials with Redis Flex | Redis Cloud Pro |
- | Memory size | 30 MB | 250 MB-12 GB | 1 GB-100GB | 50 TB |
- | Concurrent connections | 30 | 256-10000 | 1024-10000 | Unlimited |

## Subscription and database maintenance
Source file: `raw/sources/20260409-docs-latest-operate-rc-subscriptions-maintenance-367ff9400a.md`
- Redis will maintain your Redis Cloud subscriptions and databases as needed to ensure your databases are running the most stable and up-to-date version of Redis.
- Maintenance windows define when Redis can perform maintenance on your subscriptions and databases. Maintenance window options depend on your subscription type.
- For Redis Cloud Pro plans, Redis will perform maintenance automatically while limiting service disruption as much as possible. If you want to control when we can perform maintenance for a Redis Cloud Pro subscription, you can [set manual maintenance windows]().
- Redis Cloud Essentials databases have a set maintenance window based on the cloud provider region. The maintenance window for Redis Cloud Essentials databases is **daily from 12 AM to 6 AM** in the region's local time zone. We won't use more than one maintenance window per week unless we need to do [urgent maintenance](), and we won't perform any maintenance that introduces breaking changes during these maintenance windows.
- During maintenance, Redis ensures the stability of your subscriptions and databases.

## View and Upgrade Redis Cloud Essentials plan
Source file: `raw/sources/20260409-docs-latest-operate-rc-subscriptions-view-essentials-subscription-f231326f0f.md`
- 1.  Sign in to the [Redis Cloud console](https://cloud.redis.io/) and select the **Subscriptions** list.
- 1.  Select the target subscription from the subscription list.
- 1.  Your subscription details appear, along with a summary of your database details.
- The following sections provide more details.
- Use the **Plan upgrade** button to update your Redis Cloud Essentials plan, your high availability settings, or your payment method. Upgrading your database between Redis Cloud Essentials plans does not impact database availability during the update.

## View and edit Redis Cloud Pro plan
Source file: `raw/sources/20260409-docs-latest-operate-rc-subscriptions-view-pro-subscription-c2a5a9c032.md`
- 1.  Sign in to the [Redis Cloud console](https://cloud.redis.io/#) and select **Subscriptions**.
- 1.  If you have more than one subscription, select the target subscription from the subscription list.
- 1.  Your subscription details appear, along with a summary of your database details.
- Because subscriptions represent active deployments, there aren't many details you can change.  If your needs change, [create a new subscription]() and then [migrate the existing data]() to the new databases.
- In addition, you can view and edit the following subscription details:

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

## Subpath proxy
Source file: `raw/sources/20260409-docs-latest-operate-redisinsight-proxy-b1491e7fc5.md`
- You can enable the subpath proxy by setting the `RI_PROXY_PATH` environment variable.
- When `RI_PROXY_PATH` is being set with a path, Redis Insight is
- accessible only on that subpath. The default routes are given the
- provided prefix subpath. There isnât any way to add another proxy behind
- this one unless the same subpath is used for the new one.

## Redis Software
Source file: `raw/sources/20260409-docs-latest-operate-rs-1a95e6a2a8.md`
- [Redis Software](https://redis.io/software/) is a self-managed, enterprise-grade version of Redis.
- With Redis Software, you get many enterprise-grade capabilities, including:
- You can run self-managed Redis Software in an on-premises data center or on your preferred cloud platform.
- If you prefer a fully managed Redis database-as-a-service, available on major public cloud services, consider setting up a [Redis Cloud]() subscription. You can [try Redis Cloud](https://redis.io/try-free/) for free.
- Build a small-scale cluster with the Redis Software container image.

## Add a node
Source file: `raw/sources/20260409-docs-latest-operate-rs-clusters-add-node-8d13f6acd3.md`
- After you install the first node, you can add more nodes to the cluster.
- If the clock in the node you are trying to join to the cluster is not synchronized with the nodes already in the cluster,
- the action fails and an error message is shown indicating that you must synchronize the clocks first.
- to avoid errors that occur because the connection to the other nodes in the cluster cannot be verified.
- 1. [Install the Redis Software installation package]() on a clean installation

## Cluster settings
Source file: `raw/sources/20260409-docs-latest-operate-rs-clusters-configure-cluster-settings-665700accb.md`
- After purchasing a cluster license and if your account has the "Admin" role,
- you can upload the cluster license key, either during initial
- cluster creation or at any time afterward. The license key defines various
- cluster settings, such as the maximum number of shards you can have in
- the cluster. For more detailed information seeÂ [Cluster license

## Cluster license keys
Source file: `raw/sources/20260409-docs-latest-operate-rs-clusters-configure-license-keys-9b735323b4.md`
- You can add or update a cluster key at any time.
- Trial mode allows all features to be enabled during the trial period.
- Trial mode is limited to 30 days and 4 shards, including master and replica shards. A new Redis Software installation starts its 30-day trial period from the day you set up the cluster on the first node.
- Trial mode requires a trial license. If you do not provide a license when you create a cluster using the Cluster Manager UI or a [bootstrapping REST API request](), a trial cluster license is generated by default.
- 1. Go to **Cluster > Configuration > General > License** to see the cluster license details.

## Alerts and events
Source file: `raw/sources/20260409-docs-latest-operate-rs-clusters-logging-alerts-events-66d6345e2c.md`
- The following alerts and events can appear in `syslog` and the Cluster Manager UI logs.
- | Alert | UI message | Severity | Notes |
- |-------|------------|----------|-------|
- | aof_slow_disk_io | Redis performance is degraded as a result of disk I/O limits | True: error, False: info | Node alert |
- | authentication_err | Error authenticating with the source database | error | BDB event |

## Set up a new cluster
Source file: `raw/sources/20260409-docs-latest-operate-rs-clusters-new-cluster-setup-e17307141a.md`
- For production deployments, we recommend an uneven number of nodes, with a minimum of three.
- In a cluster that consists of only one node, some features and capabilities are not enabled,
- such as database replication that provides high availability.
- To set up a new cluster, you must first [install the Redis Software package]()
- and then set up the cluster as described below.

## Turn off services to free system memory
Source file: `raw/sources/20260409-docs-latest-operate-rs-clusters-optimize-turn-off-services-63a8c6c5ef.md`
- In most deployments, either all of these services are required,
- or there are enough memory resources on the nodes for the database requirements.
- In a deployment with limited memory resources, certain services can be disabled from API endpoint to free system memory or using the `rladmin` command.
- Before you turn off a service, make sure that your deployment does not depend on that service.
- After you turn off a service, you can re-enable in the same way.

## Create an Active-Active geo-replicated database
Source file: `raw/sources/20260409-docs-latest-operate-rs-databases-active-active-create-7a188eed70.md`
- to replicas of the dataset in different geographical locations.
- The participating Redis Software clusters that host the instances can be distributed in different geographic locations.
- Every instance of an Active-Active database can receive write operations, and all operations are [synchronized]() to all instances without conflict.
- 1. **Create a service account** - On each participating cluster, create a dedicated user account with the Admin role.
- 1. **Confirm connectivity** - Confirm network connectivity between the participating clusters.

## Get started with Redis Software Active-Active databases
Source file: `raw/sources/20260409-docs-latest-operate-rs-databases-active-active-get-started-99600623dd.md`
- To get started, this article will help you set up an Active-Active database, formerly known as CRDB (conflict-free replicated database), spanning across two Redis Software
- clusters for test and development environments. Here are the steps:
- 1. Run two Redis Software Docker containers.
- 1. Create a new Redis Software Active-Active database.
- 1. Test connectivity to the Active-Active database.

## Configure database settings
Source file: `raw/sources/20260409-docs-latest-operate-rs-databases-configure-6babd63b98.md`
- You can manage your Redis Software databases with several tools:
- You can change the configuration of a Redis Software database at any time.<!--more-->
- To edit the configuration of a database using the Cluster Manager UI:
- 1. On the **Databases** screen, select the database you want to edit.
- 1. From the **Configuration** tab, select **Edit**.

## Connect to a database
Source file: `raw/sources/20260409-docs-latest-operate-rs-databases-connect-eb8d2f8219.md`
- After you [set up a cluster]() and [create a Redis database](), you can connect to your database.
- To connect to your database, you need the database endpoint, which includes the cluster name (FQDN) and the database port. To view and copy public and private endpoints for a database in the cluster, see the databaseâs **Configuration > General** section in the Cluster Manager UI.
- If you try to connect with the FQDN, and the database does not respond, try connecting with the IP address. If this succeeds, DNS is not properly configured. To set up DNS, see [Configure cluster DNS]().
- If you want to secure your connection, set up [TLS]().
- Use one of the following connection methods to connect to your database:

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

## Redis Flex and Auto Tiering quick start
Source file: `raw/sources/20260409-docs-latest-operate-rs-databases-flash-quickstart-403922b66b.md`
- For production environments, you can find more detailed installation instructions in the [install and setup]() section.
- The steps to set up a Redis Software cluster using Redis Flex
- 1. Install Redis Software or run it in a Docker
- 1. Set up a Redis Software cluster withÂ Redis Flex.
- 1. Create a new database with Redis Flex enabled.

## Export data from a database
Source file: `raw/sources/20260409-docs-latest-operate-rs-databases-import-export-export-data-01768118e2.md`
- You can export the data from a specific database at any time.  The following destinations are supported:
- If you export a database configured for database clustering, export files are created for each shard.
- Before exporting data, verify that you have enough space available in the storage destination and on the local storage associated with the node hosting the database.
- Export is a two-step process: a temporary copy of the data is saved to the local storage of the node and then copied to the storage destination.  (The temporary file is removed after the copy operation.)
- Export fails when there isn't enough space for either step.

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

## Create a database with Replica Of
Source file: `raw/sources/20260409-docs-latest-operate-rs-databases-import-export-replica-of-create-07c1ca694a.md`
- To create a replica connection, you define a database as a replica of a source database.  Replica Of databases (also known as _Active-Passive databases_) synchronize in the background.
- Your apps can connect to the source database to read and write data; they can also use any replica for read-only access.
- Replica Of can model a variety of data relationships, including:
- When you change the replica status of a database by adding, removing, or changing sources, the replica database is synchronized to the new sources.
- You can configure a database as a Replica Of, where the source database is in one of the following clusters:

## Schedule periodic backups
Source file: `raw/sources/20260409-docs-latest-operate-rs-databases-import-export-schedule-backups-6ed410d087.md`
- Periodic backups provide a way to restore data with minimal data loss.  With Redis Software, you can schedule periodic backups to occur once a day (every 24 hours), twice a day (every twelve hours), every four hours, or every hour.
- As of v6.2.8, you can specify the start time in UTC for 24-hour or 12-hour backups.
- To make an on-demand backup, [export your data]().
- You can schedule backups to a variety of locations, including:
- The backup process creates compressed (.gz) RDB files that you can [import into a database](). If the database name is longer than 30 characters, only the first 30 are used in backup file names.

## Configure CentOS/RHEL firewall
Source file: `raw/sources/20260409-docs-latest-operate-rs-installing-upgrading-configuring-centos-rhel-firewall-cfa0becc3d.md`
- The default configuration assigns the network interfaces to the **public** zone and blocks all ports except port 22, which is used for [SSH](https://en.wikipedia.org/wiki/Secure_Shell).
- When you install Redis Software on CentOS or RHEL, it automatically creates two firewalld system services:
- These services are defined but not allowed through the firewall by default.
- During Redis Software installation, the [installer prompts]() you to confirm auto-configuration of a default (public) zone
- Although automatic firewall configuration simplifies installation, your deployment might not be secure if you did not use other methods to secure the host machine's network, such as external firewall rules or security groups.

## Install Redis Software on Linux
Source file: `raw/sources/20260409-docs-latest-operate-rs-installing-upgrading-install-install-on-linux-a18a205c11.md`
- After you [download a Redis Software installation package](), install it on one of the nodes in the cluster.
- For installation on machines without an internet connection, see [Offline installation]().
- To install Redis Software, use the command line:
- 1. Copy the installation package to the node.
- 1. On the node, change to the directory where the installation package is located and extract the installation files:

## Plan Redis Software deployment
Source file: `raw/sources/20260409-docs-latest-operate-rs-installing-upgrading-install-plan-deployment-cc1eb618d7.md`
- Before installing Redis Software, you need to:
- Redis Software supports a variety of platforms, including:
- For more details, see [Supported platforms]().
- After you finish planning your deployment, you can:

## Configure AWS EC2 instances for Redis Software
Source file: `raw/sources/20260409-docs-latest-operate-rs-installing-upgrading-install-plan-deployment-configuring--71b0d711a5.md`
- and running Redis Software on Amazon Elastic Cloud Compute (EC2) instances.
- AWS EC2 instances are ephemeral, but your persistent database storage should
- not be. If you require a persistent storage location for your database,
- the storage must be located outside of the instance. When you
- set up an instance, make sure it has a properly sized EBS-backed volume

## Prepare to install Redis Software
Source file: `raw/sources/20260409-docs-latest-operate-rs-installing-upgrading-install-prepare-install-d1b3229713.md`

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

## AWS Route53 DNS management
Source file: `raw/sources/20260409-docs-latest-operate-rs-networking-configuring-aws-route53-dns-redis-enterprise-82067dae9f.md`
- Route 53 is a scalable DNS service by Amazon Web Service (AWS). It routes user traffic to AWS resources and external sites, offering DNS health checks, traffic management, and failover capabilities. It's integral for high-availability architectures and also provides domain registration services.
- Creating a hosted zone in Amazon Route 53 is a foundational step in managing your domain's DNS settings.
- A hosted zone functions as a container for the DNS records of a specific domain. To create one, you first need to:
- 4. Enter your domain name, and choose public hosted zone
- The hosted zone provides you with a set of Name Server (NS) records, which you will need to update at your domain registrar. This process effectively delegates the DNS management of your domain to Route 53, allowing you to create, update, and manage DNS records for your domain within the AWS ecosystem.

## Network port configurations
Source file: `raw/sources/20260409-docs-latest-operate-rs-networking-port-configurations-9a36a45700.md`
- All Redis Software deployments span multiple physical/virtual nodes. You'll need to keep several ports open between these nodes. This document describes the various port ranges and their uses.
- Whenever you create a new database, you must verify that the ports assigned to the new database's endpoints are open. The cluster will not perform this verification for you.
- Redis Software's port usage falls into three general categories:
- | Protocol | Port | Configurable | Connection source | Description |
- |----------|------|--------------|-------------------|-------------|

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

## crdb-cli crdb get
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-cli-utilities-crdb-cli-crdb-get-5e444c11e7.md`
- Shows the current configuration of an Active-Active database.
- | Parameter           | Value  | Description                         |
- |---------------------|--------|-------------------------------------|
- | crdb-guid  | string | The GUID of the database (required) |
- Returns the current configuration of the database.

## redis-cli
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-cli-utilities-redis-cli-9a3a3974c8.md`
- The `redis-cli` command-line utility lets you interact with a Redis database. With `redis-cli`, you can run [Redis commands]() directly from the command-line terminal or with [interactive mode](#interactive-mode).
- If you want to run Redis commands without `redis-cli`, you can [connect to a database with Redis Insight]() and use the built-in [CLI]() prompt instead.
- When you install Redis Software or Redis Open Source, it also installs the `redis-cli` command-line utility.
- To learn how to install Redis and `redis-cli`, see the following installation guides:
- To run Redis commands with `redis-cli`, you need to connect to your Redis database.

## rladmin cluster config
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-cli-utilities-rladmin-cluster-config-0a2fdfbd9f.md`
- | Parameter | Type/Value | Description |
- |-----------|------------|-------------|
- | audit_address | string | TCP/IP address where a listener can capture [audit event notifications]() |
- | audit_port | string | Port where a listener can capture [audit event notifications]() |
- | audit_protocol | `tcp`<br/>`local` | Protocol used for [audit event notifications]()<br/>For production systems, only `tcp` is supported. |

## rladmin cluster ocsp
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-cli-utilities-rladmin-cluster-ocsp-2bffdb756e.md`
- Manages OCSP configuration and verifies the status of a server certificate maintained by a third-party [certificate authority (CA)](https://en.wikipedia.org/wiki/Certificate_authority).
- Checks if the proxy certificate contains an OCSP URI.
- Returns the OCSP URI if it exists. Otherwise, it returns an error.
- Displays or updates OCSP configuration. Run the command without the `set` option to display the current configuration of a parameter.
- | Parameter | Type/Value | Description |

## rladmin info
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-cli-utilities-rladmin-info-76c27c2ffe.md`
- Shows the current configuration of specified databases, proxies, clusters, or nodes.
- Lists the current configuration for the cluster.
- Returns the current configuration for the cluster.
- Shows the current configuration for databases.
- | db:id     | ID of the specified database (optional) |

## rladmin tune
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-cli-utilities-rladmin-tune-6143ca9f8b.md`
- Configures parameters for databases, proxies, nodes, and clusters.
- | Parameters                             | Type/Value                        | Description                                                                                                                  |
- |----------------------------------------|-----------------------------------|------------------------------------------------------------------------------------------------------------------------------|
- | acl_pubsub_default | `resetchannels`<br /> `allchannels` | Default pub/sub ACL rule for all databases in the cluster:<br />â¢`resetchannels` blocks access to all channels (restrictive)<br />â¢`allchannels` allows access to all channels (permissive) |
- | automatic_node_offload | `enabled`<br />`disabled` | Define whether automatic node offload migration will take place |

## Connection management commands compatibility
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-compatibility-commands-connection-242fe59d47.md`
- The following tables show which Redis Open Source [connection management commands](?group=connection) are compatible with standard and Active-Active databases in Redis Software and Redis Cloud.
- | Command | Redis<br />Software | Redis<br />Cloud | Notes |
- |:--------|:----------------------|:-----------------|:------|
- | [AUTH]() | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |
- | [CLIENT CACHING]() | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |

## Server management commands compatibility
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-compatibility-commands-server-e1aac9fac8.md`
- The following tables show which Redis Open Source [server management commands](?group=server) are compatible with standard and Active-Active databases in Redis Software and Redis Cloud.
- Several access control list (ACL) commands are not available in Redis Software. Instead, you can manage access controls from the [Redis Software Cluster Manager UI]() and the [Redis Cloud console]().
- | <span style="min-width: 9em; display: table-cell">Command</span> | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:--------|:----------------------|:-----------------|:------|
- | [ACL CAT]() | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | Not supported for [scripts](). |

## Database operations metrics
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-metrics-database-operations-767b2ea674.md`
- The following metrics are available in the Redis Software Cluster Manager UI.
- Number of objects evicted from the database per second.
- Objects are evicted from the database according to the [eviction policy]().
- Object information is not measured during [shard migration]().
- **Components measured**: Database and Shard

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

## BDB object
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-objects-bdb-9d08a4dec7.md`
- An API object that represents a managed database in the cluster.
- | uid | integer; Cluster unique ID of database. Can be set during creation but cannot be updated. |
- | action_uid | string; Currently running action's UID (read-only) |
- | active_defrag_cycle_max | integer, (range: 1-99); Maximum CPU percentage used for defragmentation when the upper threshold is reached |
- | active_defrag_cycle_min | integer, (range: 1-99) (default: 1); Minimal CPU percentage used for defragmentation when the lower threshold is reached |

## BDB backup/export location object
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-objects-bdb-backup-location-a5d5305aa4.md`
- You can back up or export a database's dataset to the following types of locations:
- For all backup/export location objects, you need to specify the location type via the `type` field.
- Any additional required parameters may differ based on the backup/export location type.
- | url | string | A URI that represents a FTP/S location with the following format: `ftp://user:password@host:port/path/`. The user and password can be omitted if not needed. |
- | key | string | SSH private key to secure the SFTP server connection. If you do not specify an SSH private key, the autogenerated private key of the cluster is used, and you must add the SSH public key of the cluster to the SFTP server configuration. (optional) |

## BDB dataset import sources object
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-objects-bdb-dataset-import-sources-eaf17559f3.md`
- You can import data to a database from the following location types:
- The source file to import should be in the [RDB]() format. It can also be in a compressed (gz) RDB file.
- Supply an array of dataset import source objects to import data from multiple files.
- For all import location objects, you need to specify the location type via the `type` field.
- Any additional required parameters may differ based on the import location type.

## Syncer sources object
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-objects-bdb-syncer-sources-9da68ab5a8.md`
- | uid | integer | Unique ID of this source |
- | client_cert | string | Client certificate to use if encryption is enabled |
- | client_key | string | Client key to use if encryption is enabled |
- | compression | integer, <nobr>(range: 0-6)</nobr> | Compression level for the replication link |
- | encryption | boolean | Encryption enabled/disabled |

## user_defined_module object
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-objects-bootstrap-user-defined-module-09dedda5ff.md`
- A user-defined module configuration object for bootstrap operations.
- | name | string | Module name for presentation and logging purposes (required) |
- | location | object | Information on where to download the module from (required)<br />{
- }<br />**location_type**: The type of location, either `http` or `https` (required)<br />**url**: The URL to download the module zip file from (required)<br />**credentials**: Optional credentials for downloads that require basic authentication |
- The module must be packaged as a `.zip` file containing:

## Certificates object
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-objects-certificates-9e7f73d37d.md`
- An API object that represents a certificate used by a Redis Software cluster.
- | name | "cm"<br />"api"<br />"mtls_trusted_ca"<br />"proxy"<br />"metrics_exporter"<br />"syncer"<br />"ldap_client"<br />"ccs_internode_encryption"<br />"data_internode_encryption"<br />"sso_service"<br />"sso_issuer" | Certificate type.<br />See the [certificates table]() for the list of cluster certificates and their descriptions. |
- | certificate | string | The certificate in PEM format |
- | key | string | The private key in PEM format |

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

## JWT authorize object
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-objects-jwt-authorize-8487ad0312.md`
- An API object for user authentication or a JW token refresh request.
- | password | string | The userâs password (required) |
- | ttl | integer (range: 1-86400) (default: 300) | Time to live - The amount of time in seconds the token will be valid |
- | username | string | The userâs username (required) |

## LDAP object
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-objects-ldap-d24be39377.md`
- An API object that represents the cluster's [LDAP]() configuration.
- | bind_dn | string | DN used when binding with the LDAP server to run queries |
- | bind_pass | string | Password used when binding with the LDAP server to run queries |
- | ca_cert | string | PEM-encoded CA certificate(s) used to validate TLS connections to the LDAP server |
- | cache_ttl | integer (default: 300) | Maximum TTL (in seconds) of cached entries |

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

## Redis ACL object
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-objects-redis-acl-7750af40fc.md`
- An API object that represents a Redis [access control list (ACL)]()
- | account_id | integer | SM account ID |
- | action_uid | string | Action UID. If it exists, progress can be tracked by the `GET`&nbsp;`/actions/{uid}` API (read-only) |
- | min_version | string | Minimum database version that supports this ACL. Read only |
- | max_version | string | Maximum database version that supports this ACL. Read only |

## User object
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-objects-user-5813d641fe.md`
- | account_id | integer | SM account ID |
- | action_uid | string | Action UID. If it exists, progress can be tracked by the <span class="break-all">`GET /actions/{uid}`</span> API request (read-only) |
- | auth_method | **'regular'**<br />'certificate'<br />'entraid'<br />'sso' | User's authentication method |
- | bdbs_email_alerts | complex object | UIDs of databases that user will receive alerts for |
- | <span class="break-all">certificate_subject_line</span> | string | The certificateâs subject line as defined by RFC2253. Used for certificate-based authentication users only. |

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

## Database requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-bdbs-9603f0a5d1.md`
- | [GET](#get-all-bdbs) | `/v1/bdbs` | Get all databases |
- | [GET](#get-bdbs) | `/v1/bdbs/{uid}` | Get a single database |
- | [PUT](#put-bdbs) | `/v1/bdbs/{uid}` | Update database configuration |
- | [PUT](#put-bdbs-action) | `/v1/bdbs/{uid}/{action}` | Update database configuration and perform additional action |
- | [POST](#post-bdbs-v1) | `/v1/bdbs` | Create a new database |

## Database passwords requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-bdbs-passwords-b539b40dae.md`
- | [PUT](#put-bdbs-password) | `/v1/bdbs/{uid}/passwords` | Update database password |
- | [POST](#post-bdbs-password) | `/v1/bdbs/{uid}/passwords` | Add database password |
- | [DELETE](#delete-bdbs-password) | `/v1/bdbs/{uid}/passwords` | Delete database password |
- Set a single password for the bdb's default user (i.e., for `AUTH`&nbsp;`<password>` authentications).
- The above request resets the password of the bdb to ânew passwordâ.

## Database stats requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-bdbs-stats-913386ac0a.md`
- The v1 statistics REST API endpoints are deprecated as of Redis Software version 7.22. Use the [metrics stream engine for monitoring v2]() instead for real-time monitoring and metrics collection.
- | [GET](#get-all-bdbs-stats) | `/v1/bdbs/stats` | Get stats for all databases |
- | [GET](#get-bdbs-stats) | `/v1/bdbs/stats/{uid}` | Get stats for a specific database |
- | [view_all_bdb_stats]() | admin<br />cluster_member<br />cluster_viewer<br />db_member<br />db_viewer<br />user_manager |
- | Host | cnm.cluster.fqdn | Domain name |

## Bootstrap requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-bootstrap-b0ee14436d.md`
- | [GET](#get-bootstrap) | `/v1/boostrap` | Get the local node's bootstrap status |
- | [POST](#post-bootstrap) | `/v1/bootstrap/{action}` | Initiate bootstrapping |
- This request is accepted as soon the cluster software is installed and before the node is part of an active cluster.
- Once the node is part of an active cluster, authentication is required.
- | Accept | application/json | Accepted media type |

## Cluster requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-cluster-070fc3c4f6.md`
- | [GET](#get-cluster) | `/v1/cluster` | Get cluster info |
- | [PUT](#put-cluster) | `/v1/cluster` | Update cluster settings |
- | Host | cnm.cluster.fqdn | Domain name |
- | Accept | application/json | Accepted media type |
- | [200 OK](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.2.1) | No error |

## Cluster LDAP requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-cluster-ldap-57a85708e3.md`
- | [GET](#get-cluster-ldap) | `/v1/cluster/ldap` | Get LDAP configuration |
- | [PUT](#put-cluster-ldap) | `/v1/cluster/ldap` | Set/update LDAP configuration |
- | [DELETE](#delete-cluster-ldap) | `/v1/cluster/ldap` | Delete LDAP configuration |
- | Host | cnm.cluster.fqdn | Domain name |
- | Accept | application/json | Accepted media type |

## Cluster stats requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-cluster-stats-006ef79d2f.md`
- The v1 statistics REST API endpoints are deprecated as of Redis Software version 7.22. Use the [metrics stream engine for monitoring v2]() instead for real-time monitoring and metrics collection.
- | [GET](#get-cluster-stats) | `/v1/cluster/stats` | Get cluster stats |
- | [view_cluster_stats]() | admin<br />cluster_member<br />cluster_viewer<br />db_member<br />db_viewer<br />user_manager |
- | Host | cnm.cluster.fqdn | Domain name |
- | Accept | application/json | Accepted media type |

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

## Endpoints stats requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-endpoints-stats-de7fa0eebf.md`
- The v1 statistics REST API endpoints are deprecated as of Redis Software version 7.22. Use the [metrics stream engine for monitoring v2]() instead for real-time monitoring and metrics collection.
- | [GET](#get-endpoints-stats) | `/v1/endpoints/stats` | Get stats for all endpoints |
- Get statistics for all endpoint-proxy links.
- This method will return both endpoints and listeners stats for backwards
- GET /v1/endpoints/stats?interval=1hour&stime=2014-08-28T10:00:00Z

## User-defined module requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-modules-user-defined-0ed5642250.md`
- | [GET](#get-local-user-defined-artifacts) | /v2/local/modules/user-defined/artifacts | List custom module artifacts on a node |
- | [POST](#post-user-defined-module) | /v2/modules/user-defined | Upload custom module configuration |
- | [POST](#post-local-user-defined-artifacts) | /v2/local/modules/user-defined/artifacts | Upload a custom module artifact to a node |
- | [DELETE](#delete-user-defined-module) | /v2/modules/user-defined/<uid> | Delete a custom module configuration |
- | [DELETE](#delete-local-user-defined-artifacts) | /v2/local/modules/user-defined/artifacts/<module_name>/<version> | Delete a custom module artifact from a node |

## Node actions requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-nodes-actions-d5fdc89d60.md`
- | [GET](#get-all-nodes-actions) | `/v1/nodes/actions` | Get status of all actions on all nodes|
- | [GET](#get-node-actions) | `/v1/nodes/{node_uid}/actions` | Get status of all actions on a specific node |
- | [GET](#get-node-action) | `/v1/nodes/{node_uid}/actions/{action}` | Get status of an action on a specific node |
- | [POST](#post-node-action) | `/v1/nodes/{node_uid}/actions/{action}` | Initiate node action |
- | [DELETE](#delete-node-action) | `/v1/nodes/{node_uid}/actions/{action}` | Cancel action or remove action status |

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

## Refresh JWT requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-users-refresh-jwt-0f6c5f1825.md`
- | [POST](#post-refresh_jwt) | `/v1/users/refresh_jwt` | Get a new authentication token |
- Generate a new JSON Web Token (JWT) for authentication.
- Takes a valid token and returns the new token generated by the request.
- | Host | cnm.cluster.fqdn | Domain name |
- | Authorization | JWT eyJ5bGciOiKIUzI1NiIsInR5cCI6IkpXVCJ9.<br></br>eyJpYXViOjE0NjU0NzU0ODYsInVpZFI1IjEiLCJ<br></br>leHAiOjE0NjU0Nz30OTZ9.2xYXumd1rDoE0e<br></br>dFzcLElMOHsshaqQk2HUNgdsUKxMU | Valid JSON Web Token (JWT) |

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

## Redis Enterprise Software Release Notes 5.4.2 (April 2019)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-legacy-release-notes-rs-5-4-2-april-2019-a1cc655fe2.md`
- This release improves the compatibility of Active-Active Redis (CRDB) with open source Redis, adds SFTP and Mount Points as backup destinations, email alerting and a number of other enhancements and bug fixes.
- Follow these [instructions]() for upgrading to RS 5.4.2 from RS 5.0 and above.
- If you have a version older than 5.0, you must first upgrade to version 5.2 (or at least 5.0).
- RS 5.4.2 introduces new Active-Active Redis (CRDB) capabilities which improve its compatibility with open source Redis.
- This simplifies the progress of migration from open source Redis to Active-Active Redis:

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

## Access control
Source file: `raw/sources/20260409-docs-latest-operate-rs-security-access-control-6e6c1d67ff.md`
- Redis Software lets you use role-based access control (RBAC) to manage users' access privileges. RBAC requires you to do the following:
- 1. Create roles and define each role's access privileges.
- 1. Create users and assign roles to them. The assigned role determines the user's access privileges.
- Redis Software allows two separate paths of access:
- You can grant cluster access, database access, or both to each role. These roles let you differentiate between users who can access databases and users who can access cluster management, according to your organization's security needs.

## Create roles with cluster access only
Source file: `raw/sources/20260409-docs-latest-operate-rs-security-access-control-create-cluster-roles-258a32ba7b.md`
- Roles with cluster access allow access to the Cluster Management UI and REST API.
- Redis Software includes five predefined roles that determine a user's level of access to the Cluster Manager UI and [REST API]().
- 1. **DB Viewer** - Read database settings
- 1. **Cluster Viewer** - Read cluster settings
- 1. **Cluster Member** - Administer the cluster

## Create roles with combined access
Source file: `raw/sources/20260409-docs-latest-operate-rs-security-access-control-create-combined-roles-491e583066.md`
- To create a role that grants database access privileges and allows access to the Cluster Management UI and REST API:
- 1. [Define Redis ACLs](#define-redis-acls) that determine database access privileges.
- 1. [Create a role with ACLs](#create-role) added and choose a **Management role** other than **None**.
- You can use the [Cluster Manager UI](#define-acls-ui) or the [REST API](#define-acls-rest-api) to define Redis ACL rules that you can assign to roles.
- To define a Redis ACL rule using the Cluster Manager UI:

## Create roles with database access only
Source file: `raw/sources/20260409-docs-latest-operate-rs-security-access-control-create-db-roles-6e4b605b06.md`
- Roles with database access grant the ability to access and interact with a database's data. Database access privileges are determined by defining [Redis ACLs]() and adding them to roles.
- To create a role that grants database access without granting access to the Redis Software Cluster Manager UI and REST API:
- 1. [Define Redis ACLs](#define-redis-acls) that determine database access privileges.
- 1. [Create a role with ACLs](#create-roles-with-acls) added and leave the **Management role** as **None**.
- You can use the [Cluster Manager UI](#define-acls-ui) or the [REST API](#define-acls-rest-api) to define Redis ACL rules that you can assign to roles.

## Create users
Source file: `raw/sources/20260409-docs-latest-operate-rs-security-access-control-create-users-6edfe3f9f1.md`
- 1. Review the [access control overview]() to learn how to use role-based access control (RBAC) to manage users' cluster access and database access.
- 1. Create roles you can assign to users. See [Create roles with cluster access only](), [Create roles with database access only](), or [Create roles with combined access]() for instructions.
- 1. From the **Access Control > Users** tab in the Cluster Manager UI, select **+ Add user**.
- {{<image filename="images/rs/screenshots/access-control/7-22-updates/users-screen.png" alt="The list of existing users on the Access Control > Users screen.">}}
- 1. Enter the name, email, and password of the new user.

## LDAP authentication
Source file: `raw/sources/20260409-docs-latest-operate-rs-security-access-control-ldap-cc0b3d20d0.md`
- Redis Software supports [Lightweight Directory Access Protocol](https://en.wikipedia.org/wiki/Lightweight_Directory_Access_Protocol) (LDAP) authentication and authorization through its [role-based access controls]() (RBAC).  You can use LDAP to authorize access to the Cluster Manager UI and to control database access.
- You can configure LDAP roles using the Redis Software Cluster Manager UI or [REST API]().
- Here's how role-based LDAP integration works:
- 1.  A user signs in with their LDAP credentials.
- Based on the LDAP configuration details, the username is mapped to an LDAP Distinguished Name.

## Enable role-based LDAP
Source file: `raw/sources/20260409-docs-latest-operate-rs-security-access-control-ldap-enable-role-based-ldap-96bbe29831.md`
- Redis Software uses a role-based mechanism to enable LDAP authentication and authorization.
- When a user attempts to access Redis Software resources using LDAP credentials, the credentials are passed to the LDAP server in a bind request. If the request succeeds, the userâs groups are searched for a group that authorizes access to the original resource.
- Role-based LDAP lets you authorize cluster management users (previously known as _external users_) and database users. As with any access control role, you can define the level of access authorized by the role.
- To configure and enable LDAP from the Cluster Manager UI:
- 1. Go to **Access Control > LDAP > Configuration**.

## Map LDAP groups to roles
Source file: `raw/sources/20260409-docs-latest-operate-rs-security-access-control-ldap-map-ldap-groups-to-roles-fc6d1391e6.md`
- Redis Software uses a role-based mechanism to enable LDAP authentication and authorization.
- Once LDAP is enabled, you need to map LDAP groups to Redis Software access control roles.
- To map LDAP groups to access control roles in the Cluster Manager UI:
- 1. Select **Access Control > LDAP > Mapping**.
- You can map LDAP roles when LDAP configuration is not enabled, but they won't have any effect until you [configure and enable LDAP]().

## Migrate to role-based LDAP
Source file: `raw/sources/20260409-docs-latest-operate-rs-security-access-control-ldap-migrate-to-role-based-ldap-e105b4663b.md`
- Redis Software supports LDAP through a [role-based mechanism](), first introduced [in v6.0.20]().
- Earlier versions of Redis Software supported a cluster-based mechanism; however, that mechanism was removed in v6.2.12.
- If you're using the cluster-based mechanism to enable LDAP authentication, you need to migrate to the role-based mechanism before upgrading to Redis Software v6.2.12 or later.
- This checklist covers the basic process:
- 1.  Identify accounts per app on the customer end.

## Update database ACLs
Source file: `raw/sources/20260409-docs-latest-operate-rs-security-access-control-ldap-update-database-acls-82d60c0965.md`
- To grant LDAP users access to a database, assign the mapped access role to the access control list (ACL) for the database.
- 1.  In the Cluster Manager UI, go to **Databases**, then select the database from the list.
- 1.  From the **Security** tab, select the **Edit** button.
- 1.  In the **Access Control List** section, select **+ Add ACL**.
- 1.  Select the appropriate roles and then save your changes.

## Update admin credentials for Active-Active databases
Source file: `raw/sources/20260409-docs-latest-operate-rs-security-access-control-manage-passwords-active-active-ad-f8e1b4268e.md`
- Active-Active databases use administrator credentials to manage operations. When you change the administrator password on clusters with Active-Active databases, you must update the Active-Active database configuration to prevent authentication failures during Active-Active management operations.
- Do not perform any management operations on the databases until these steps are complete.
- To update the administrator password on a cluster with Active-Active databases:
- 1. From the user management page, update the administrator user password on the clusters you want to update.
- 1. Run [`crdb-cli crdb list`]() to find the `CRDB-GUID` that uniquely identifies each Active-Active database and the fully qualified domain names (`FQDN`) of each participating cluster:

## Configure password complexity rules
Source file: `raw/sources/20260409-docs-latest-operate-rs-security-access-control-manage-passwords-password-complex-8cbae55533.md`
- Redis Software provides optional password complexity rules that meet common requirements.  When enabled, these rules require the password to have:
- These requirements reflect v6.2.12 and later. Earlier versions did not support numbers or special characters as the first or the last character of a password. This restriction was removed in v6.2.12.
- Password complexity rules apply when a new user account is created and when the password is changed.  Password complexity rules are not applied to accounts authenticated by an external identity provider.
- To enable password complexity rules, use one of the following methods:
- 1. Go to **Cluster > Security > Preferences**, then select **Edit**.

## Configure password expiration
Source file: `raw/sources/20260409-docs-latest-operate-rs-security-access-control-manage-passwords-password-expirat-7d54dca653.md`
- Password expiration is calculated from the time the password was last updated, not from when the policy is enabled. Passwords that were set long enough ago to already be expired will immediately be locked out when you enable this policy. Before enabling password expiration, verify all user passwords have been updated recently enough to avoid immediate lockouts.
- To enforce an expiration of a user's password after a specified number of days:
- 1. Go to **Cluster > Security > Preferences**, then select **Edit**.
- 1. In the **Password** section, turn on **Expiration**.
- 1. Enter the number of days before passwords expire.

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

## Manage default user
Source file: `raw/sources/20260409-docs-latest-operate-rs-security-access-control-manage-users-default-user-4c1a2aed76.md`
- When you [create a database](), default user database access is enabled by default (**Unauthenticated access** is selected). This gives the default user full access to the database and enables compatibility with versions of Redis before Redis 6.
- Select **Password-only authentication**, then enter and confirm a default database password to require authentication for connections to the database.
- When you configure a password for your database, all connections to the database must authenticate using the [AUTH]() command. See Redis security's [authentication]() section for more information.
- 1. From the database's **Security** tab, select **Edit**.
- 1. In the **Access Control** section, select **Password-only authentication** as the **Access method**.

## Manage user login
Source file: `raw/sources/20260409-docs-latest-operate-rs-security-access-control-manage-users-login-lockout-ae037b31b1.md`
- Redis Software secures user access in a few different ways, including automatically:
- Here, you learn how to configure the relevant settings.
- By default, after 5 failed login attempts within 15 minutes, the user account is locked for 30 minutes. You can change the user login lockout settings in the Cluster Manager UI or with [`rladmin`]().
- You can view the cluster's user login lockout settings from **Cluster > Security > Preferences > Lockout threshold** in the Cluster Manager UI or with [`rladmin info cluster`]():
- To change the user login lockout settings using the Cluster Manager UI:

## Overview of Redis ACLs in Redis Software
Source file: `raw/sources/20260409-docs-latest-operate-rs-security-access-control-redis-acl-overview-20eb2e8d64.md`
- Redis access control lists (Redis ACLs) allow you to define named permissions for specific Redis commands, keys, and pub/sub channels. You can use defined Redis ACLs for multiple databases and roles.
- Redis Software provides one predefined Redis ACL named **Full Access**. This ACL allows all commands on all keys and cannot be edited.
- Redis ACLs are defined by a set of rules where you specify the commands or command categories that are allowed for specific keys.
- Redis ACL rules can allow or block specific [Redis commands]() or [command categories](#command-categories).
- The following example allows all `read` commands and the `SET` command:

## SAML single sign-on
Source file: `raw/sources/20260409-docs-latest-operate-rs-security-access-control-saml-sso-796cca3ead.md`
- Redis Software supports both [IdP-initiated](#idp-initiated-sso) and [SP-initiated](#sp-initiated-sso) [single sign-on (SSO)](https://en.wikipedia.org/wiki/Single_sign-on) with [SAML (Security Assertion Markup Language)](https://en.wikipedia.org/wiki/Security_Assertion_Markup_Language) for the Cluster Manager UI. Redis Software uses SAML 2.0, which is the latest SAML version and an industry standard.
- You cannot use [SCIM (System for Cross-domain Identity Management)](https://en.wikipedia.org/wiki/System_for_Cross-domain_Identity_Management) to provision Redis Software users. However, Redis Software supports just-in-time (JIT) user provisioning, which means Redis Software automatically creates a user account the first time a new user signs in with SSO.
- When single sign-on is activated, users can sign in to the Redis Software Cluster Manager UI using their [identity provider (IdP)](https://en.wikipedia.org/wiki/Identity_provider) instead of usernames and passwords. If [SSO is enforced](#enforce-sso), non-admin users can no longer sign in with their previous usernames and passwords and must use SSO instead.
- Before users can sign in to the Cluster Manager UI with SSO, the identity provider admin needs to set up these users on the IdP side with matching email addresses.
- With just-in-time (JIT) user provisioning, Redis Software automatically creates user accounts for new users assigned to the SAML application in your identity provider when they sign in to the Cluster Manager UI for the first time. For these users, you must configure the `redisRoleMapping` attribute in your identity provider to assign appropriate roles for [role-based access control]() during account creation.

## Audit connection events
Source file: `raw/sources/20260409-docs-latest-operate-rs-security-audit-events-61cf5dd060.md`
- Starting with version 6.2.18, Redis Software lets you audit database connection and authentication events.  This helps you track and troubleshoot connection activity.
- When tracked events are triggered, notifications are sent via TCP to an address and port defined when auditing is enabled.  Notifications appear in near real time and are intended to be consumed by an external listener, such as a TCP listener, third-party service, or related utility.
- For development and testing environments, notifications can be saved to a local file; however, this is neither supported nor intended for production environments.
- For performance reasons, auditing is not enabled by default.  In addition, auditing occurs in the background (asynchronously) and is non-blocking by design.  That is, the action that triggered the notification continues without regard to the status of the notification or the listening tool.
- To enable auditing for your cluster, use:

## Certificates
Source file: `raw/sources/20260409-docs-latest-operate-rs-security-certificates-247e5fa2ad.md`
- Redis Software uses self-signed certificates by default to ensure that the product is secure. These certificates are autogenerated on the first node of each Redis Software installation and are copied to all other nodes added to the cluster.
- You can replace a self-signed certificate with one signed by a certificate authority of your choice.
- Here's the list of supported certificates that create secure, encrypted connections to your Redis Software cluster:
- | Certificate name | Autogenerated | Description |
- |------------------|:---------------:|-------------|

## Certificate-based authentication
Source file: `raw/sources/20260409-docs-latest-operate-rs-security-certificates-certificate-based-authentication-3cd5a57707.md`
- You can set up certificate-based authentication for specific users to enable secure, passwordless access to the Redis Software [REST API]() and databases.
- To set up certificate-based authentication:
- 1. Add a trusted CA certificate `mtls_trusted_ca` to the cluster using an [update cluster certificates]() request:
- For Redis Software versions 7.22.2 and later, use:
- For Redis Software versions 7.22.0 and earlier, use:

## Create certificates
Source file: `raw/sources/20260409-docs-latest-operate-rs-security-certificates-create-certificates-c317c27817.md`
- When you first install Redis Software, self-signed certificates are created to enable encryption for Redis Software endpoints.  These certificates expire after a year (365 days) and must be renewed.
- You can renew these certificates by replacing them with new self-signed certificates or by replacing them with certificates signed by a [certificate authority](https://en.wikipedia.org/wiki/Certificate_authority) (CA).
- As of [v6.2.18-70](), Redis Software includes a script to generate self-signed certificates.
- By default, the `generate_self_signed_certs.sh` script is located in `/opt/redislabs/utils/`.
- Here, you learn how to use this script to generate new certificates and how to install them.

## Monitor certificates
Source file: `raw/sources/20260409-docs-latest-operate-rs-security-certificates-monitor-certificates-19f46c8da1.md`
- Redis Software exposes the expiration time in seconds of each certificate on each node. You can use Prometheus to monitor these certificates.
- To learn how to monitor Redis Software metrics using Prometheus, see [Monitoring with metrics and alerts]() and the [Prometheus integration quick start]().
- The [v1 metrics]() endpoint (`https://<cluster_name>:8070/`) uses `node_cert_expiration_seconds`.
- The following certificates relate to [internode communication TLS encryption]() and are automatically rotated by Redis Software:
- The [v2 metrics]() endpoint (`https://<cluster_name>:8070/v2`) uses `node_cert_expires_in_seconds`.

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

## Encryption in Redis Software
Source file: `raw/sources/20260409-docs-latest-operate-rs-security-encryption-893f126df0.md`
- Redis Software uses encryption to secure communications between clusters, nodes, databases, and clients and to protect [data in transit](https://en.wikipedia.org/wiki/Data_in_transit), [at rest](https://en.wikipedia.org/wiki/Data_at_rest), and [in use](https://en.wikipedia.org/wiki/Data_in_use).
- Redis Software uses [Transport Layer Security (TLS)]() to encrypt communications for the following:
- You can also [enable TLS authentication]() for the following:
- [Internode encryption]() uses TLS to encrypt data in transit between cluster nodes.
- By default, internode encryption is enabled for the control plane, which manages the cluster and databases. If you also want to encrypt replication and proxy communications between database shards on different nodes, [enable data internode encryption]().

## Internode encryption
Source file: `raw/sources/20260409-docs-latest-operate-rs-security-encryption-internode-encryption-eccd673bf2.md`
- Internode encryption is enabled for the _control plane_, which manages the cluster and its databases.
- Internode encryption is supported for the _data plane_, which encrypts communication used to replicate shards between nodes and proxy communication with shards located on different nodes.
- The following diagram shows how this works.
- Data internode encryption is disabled by default for individual databases in order to optimize for performance.  Encryption adds latency and overhead; the impact is measurable and varies according to the database, its field types, and the details of the underlying use case.
- You can enable data internode encryption for a database by changing the database configuration settings.  This lets you choose when to favor performance and when to encrypt data.

## Transport Layer Security (TLS)
Source file: `raw/sources/20260409-docs-latest-operate-rs-security-encryption-tls-ca83cfedd6.md`
- You can [use TLS authentication]() for the following types of communication:
- TLS protocols and ciphers define the overall suite of algorithms that clients are able to connect to the servers with.
- You can change the [TLS protocols]() and [ciphers]() to improve the security of your Redis Software cluster and databases. The default settings are in line with industry best practices, but you can customize them to match the security policy of your organization.
- For help troubleshooting TLS failures, see the following knowledge base guides:

## Configure cipher suites
Source file: `raw/sources/20260409-docs-latest-operate-rs-security-encryption-tls-ciphers-9f854eb0ef.md`
- Ciphers are algorithms that help secure connections between clients and servers. You can change the ciphers to improve the security of your Redis Software cluster and databases. The default settings are in line with industry best practices, but you can customize them to match the security policy of your organization.
- |------------|--------------|-------------|
- | control_cipher_suites | <span title="Yes">&#x2705; Yes</span> | Cipher list for TLS 1.2 communications for cluster administration (control plane) |
- | data_cipher_list | <span title="Yes">&#x2705; Yes</span> | Cipher list for TLS 1.2 communications between applications and databases (data plane) |
- | sentinel_cipher_suites | <span title="Yes">&#x2705; Yes</span> | Cipher list for [discovery service]() (Sentinel) TLS 1.2 communications |

## Enable TLS
Source file: `raw/sources/20260409-docs-latest-operate-rs-security-encryption-tls-enable-tls-04b39b04b6.md`
- You can use TLS authentication for one or more of the following types of communication:
- When you enable or turn off TLS, the change applies to new connections but does not affect existing connections. You must update TLS parameters in the client's connection configuration, then clients must close existing connections and reconnect to apply the change.
- 1. From your database's **Security** tab, select **Edit**.
- 1. Expand the **TLS - Transport Layer Security for secure connections** section, then select **On**.
- 1. In the **Apply TLS for** section, select **Clients and databases + Between databases**.

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
