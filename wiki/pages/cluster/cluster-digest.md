---
title: "Cluster Digest"
last_updated: 2026-04-09
tags: [cluster, digest]
source_count: 1009
---

# Cluster Digest

Auto-compiled synthesis from raw sources.

## APIs
Source file: `raw/sources/20260409-docs-latest-apis-e79501743c.md`
- Redis provides a number of APIs for developers and operators. The following sections provide you easy access to the client API, the several programmability APIs, the RESTFul management APIs and the Kubernetes resource definitions.
- Redis comes with a wide range of commands that help you to develop real-time applications. You can find a complete overview of the Redis commands here:
- As a developer, you will likely use one of our supported client libraries for connecting and executing commands.
- The existing Redis commands cover most use cases, but if low latency is a critical requirement, you might need to extend Redis' server-side functionality.
- Lua scripts have been available since early versions of Redis. With Lua, the script is provided by the client and cached on the server side, which implies the risk that different clients might use a different script version.

## ACL CAT
Source file: `raw/sources/20260409-docs-latest-commands-acl-cat-c8bce03b76.md`
- If a category name is given, the command shows all the Redis commands in
- ACL categories are very useful in order to create ACL rules that include or
- exclude a large set of commands at once, without specifying every single
- command. For instance, the following rule will let the user `karin` perform
- everything but the most dangerous operations that may affect the server

## ASKING
Source file: `raw/sources/20260409-docs-latest-commands-asking-0576d87d5b.md`
- This is normally done automatically by cluster clients.
- If an `-ASK` redirect is received during a transaction, only one ASKING command needs to be sent to the target node before sending the complete transaction to the target node.
- See [ASK redirection in the Redis Cluster Specification]() for details.
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|

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

## CF.RESERVE
Source file: `raw/sources/20260409-docs-latest-commands-cf-reserve-6484127fed.md`
- According to the cuckoo filter behavior, the filter is likely to declare itself full before `capacity` is reached; therefore, the fill rate will likely never reach 100 percent.
- The fill rate can be improved by using a larger `bucketsize` at the cost of a higher error rate.
- When the filter self-declare itself `full`, it will auto-expand by generating additional sub-filters at the cost of reduced performance and increased error rate.
- The new sub-filter is created with size of the previous sub-filter multiplied by `expansion`.
- Like bucket size, additional sub-filters grow the error rate linearly.

## CLIENT ID
Source file: `raw/sources/20260409-docs-latest-commands-client-id-0c01911c64.md`
- 1. It is never repeated, so if `CLIENT ID` returns the same number, the caller can be sure that the underlying client did not disconnect and reconnect the connection, but it is still the same connection.
- 2. The ID is monotonically incremental. If the ID of a connection is greater than the ID of another connection, it is guaranteed that the second connection was established with the server at a later time.
- This command is especially useful together with [`CLIENT UNBLOCK`]() which was
- introduced also in Redis 5 together with `CLIENT ID`. Check the [`CLIENT UNBLOCK`]() command page for a pattern involving the two commands.
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |

## CLIENT LIST
Source file: `raw/sources/20260409-docs-latest-commands-client-list-aa414dac62.md`
- connections server in a mostly human readable format.
- You can use one of the optional subcommands to filter the list. The `TYPE type` subcommand filters the list by clients' type, where *type* is one of `normal`, `master`, `replica`, and `pubsub`. Note that clients blocked by the [`MONITOR`]() command belong to the `normal` class.
- The `ID` filter only returns entries for clients with IDs matching the `client-id` arguments.
- * `laddr`: address/port of local address client connected to (bind address).
- * `fd`: file descriptor corresponding to the socket.

## CLIENT PAUSE
Source file: `raw/sources/20260409-docs-latest-commands-client-pause-db0f95289c.md`
- The command performs the following actions:
- * It stops processing all the pending commands from normal and pub/sub clients for the given mode. However interactions with replicas will continue normally. Note that clients are formally paused when they try to execute a command, so no work is taken on the server side for inactive clients.
- * However it returns OK to the caller ASAP, so the `CLIENT PAUSE` command execution is not paused by itself.
- * When the specified amount of time has elapsed, all the clients are unblocked: this will trigger the processing of all the commands accumulated in the query buffer of every client during the pause.
- Client pause currently supports two modes:

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

## CLUSTER SLOT-STATS
Source file: `raw/sources/20260409-docs-latest-commands-cluster-slot-stats-21cb92a61d.md`
- Use this command to get an array of slot usage statistics for the slots assigned to the current shard. If you're working with a Redis cluster, this data helps you understand overall slot usage, spot hot or cold slots, plan slot migrations to balance load, or refine your application logic to better distribute keys.
- * `ORDERBY`: Sorts the slot statistics by the specified metric. Use ASC or DESC to sort in ascending or descending order. If multiple slots have the same value, the command uses the slot number as a tiebreaker, sorted in ascending order.
- * `SLOTSRANGE`: Limits the results to a specific, inclusive range of slots. Results are always sorted by slot number in ascending order.
- The command reports on the following statistics:
- * `KEY-COUNT`: Number of keys stored in the slot.

## CLUSTER SLOTS
Source file: `raw/sources/20260409-docs-latest-commands-cluster-slots-ed99d0f8d2.md`
- The command is suitable to be used by Redis Cluster client libraries implementations in order to retrieve (or update when a redirection is received) the map associating cluster *hash slots* with actual nodes network information, so that when a command is received, it can be sent to what is likely the right instance for the keys specified in the command.
- The networking information for each node is an array containing the following elements:
- * Preferred endpoint (Either an IP address, hostname, or NULL)
- * A map of additional networking metadata
- The preferred endpoint, along with the port, defines the location that clients should use to send requests for a given slot.

## CMS.MERGE
Source file: `raw/sources/20260409-docs-latest-commands-cms-merge-bfc8a5079d.md`
- This command's behavior varies in clustered Redis environments. See the [multi-key operations]() page for more information.
- Merges several sketches into one sketch. All sketches must have identical width and depth. Weights can be used to multiply certain sketches. Default weight is 1.
- * **dest**: The name of destination sketch. Must be initialized.
- * **numKeys**: Number of sketches to be merged.
- * **src**: Names of source sketches to be merged.

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

## DEL
Source file: `raw/sources/20260409-docs-latest-commands-del-245af6ee94.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- This command's behavior varies in clustered Redis environments. See the [multi-key operations]() page for more information.
- Foundational: Delete one or more keys using DEL (ignores non-existent keys, returns count of deleted keys)
- **Available in:** Redis CLI, C, C# (Synchronous), Go, Java (Asynchronous - Lettuce), Java (Reactive - Lettuce), Java (Synchronous - Jedis), JavaScript (Node.js), JavaScript (Node.js), PHP, Python, Rust (Asynchronous), Rust (Synchronous)

## EVAL
Source file: `raw/sources/20260409-docs-latest-commands-eval-ad88fa9a50.md`
- This command's behavior varies in clustered Redis environments. See the [multi-key operations]() page for more information.
- Invoke the execution of a server-side Lua script.
- The first argument is the script's source code.
- Scripts are written in [Lua](https://lua.org) and executed by the embedded [Lua 5.1]() interpreter in Redis.
- The second argument is the number of input key name arguments, followed by all the keys accessed by the script.

## EVALSHA
Source file: `raw/sources/20260409-docs-latest-commands-evalsha-5a09dca804.md`
- This command's behavior varies in clustered Redis environments. See the [multi-key operations]() page for more information.
- Evaluate a script from the server's cache by its SHA1 digest.
- The server caches scripts by using the [`SCRIPT LOAD`]() command.
- The command is otherwise identical to [`EVAL`]().
- Please refer to the [Redis Programmability]() and [Introduction to Eval Scripts]() for more information about Lua scripts.

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

## FT.CREATE
Source file: `raw/sources/20260409-docs-latest-commands-ft-create-117ffe4035.md`
- Create an index with the given specification. For usage, see [Examples](#examples).
- If such index already exists, returns an error reply `(error) Index already exists`.
- <summary><code>SCHEMA {identifier} AS {attribute} {attribute type} {options...</code></summary>
- after the SCHEMA keyword, declares which fields to index:
- For JSON, the identifier is a JSON Path expression.

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

## GEORADIUS
Source file: `raw/sources/20260409-docs-latest-commands-georadius-cf8d40e72d.md`
- This command's behavior varies in clustered Redis environments. See the [multi-key operations]() page for more information.
- Return the members of a sorted set populated with geospatial information using [`GEOADD`](), which are within the borders of the area specified with the center location and the maximum distance from the center (the radius).
- This manual page also covers the [`GEORADIUS_RO`]() and [`GEORADIUSBYMEMBER_RO`]() variants (see the section below for more information).
- The common use case for this command is to retrieve geospatial items near a specified point not farther than a given amount of meters (or other units). This allows, for example, to suggest mobile users of an application nearby places.
- The radius is specified in one of the following units:

## GEORADIUSBYMEMBER
Source file: `raw/sources/20260409-docs-latest-commands-georadiusbymember-34fb2ce849.md`
- This command's behavior varies in clustered Redis environments. See the [multi-key operations]() page for more information.
- This command is exactly like [`GEORADIUS`]() with the sole difference that instead
- of taking, as the center of the area to query, a longitude and latitude value, it takes the name of a member already existing inside the geospatial index represented by the sorted set.
- The position of the specified member is used as the center of the query.
- Please check the example below and the [`GEORADIUS`]() documentation for more information about the command and its options.

## GEOSEARCHSTORE
Source file: `raw/sources/20260409-docs-latest-commands-geosearchstore-ab75e1df8b.md`
- This command's behavior varies in clustered Redis environments. See the [multi-key operations]() page for more information.
- This command is like [`GEOSEARCH`](), but stores the result in destination key.
- This command replaces the now deprecated [`GEORADIUS`]() and [`GEORADIUSBYMEMBER`]().
- By default, it stores the results in the `destination` sorted set with their geospatial information.
- When using the `STOREDIST` option, the command stores the items in a sorted set populated with their distance from the center of the circle or box, as a floating-point number, in the same unit specified for that shape.

## HOTKEYS GET
Source file: `raw/sources/20260409-docs-latest-commands-hotkeys-get-39f72b7c9d.md`
- This command returns comprehensive information about the hotkeys tracking session, including:
- The following metrics are collected for non-clustered as well as clustered Redis environments:
- The following additional results are collected only on clustered Redis environments, when `SLOTS` was used with `HOTKEYS START`:
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|

## HOTKEYS START
Source file: `raw/sources/20260409-docs-latest-commands-hotkeys-start-2795e1f21e.md`
- This command initiates a hotkey tracking session. You must specify which metrics to track using the required `METRICS` parameter.
- An error is returned if a tracking session is already in progress.
- The tracking session continues until manually stopped with [`HOTKEYS STOP`]() or automatically stopped after the specified duration.
- <details open><summary><code>METRICS count [CPU] [NET]</code></summary>
- **Required.** Specifies which metrics to track and how many hotkeys to track.

## INFO
Source file: `raw/sources/20260409-docs-latest-commands-info-b042b9e571.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- The `INFO` command returns information and statistics about the server in a
- format that is simple to parse by computers and easy to read by humans.
- The optional parameter can be used to select a specific section of information:

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

## KEYS
Source file: `raw/sources/20260409-docs-latest-commands-keys-5fb825df3c.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- This command's behavior varies in clustered Redis environments. See the [multi-key operations]() page for more information.
- While the time complexity for this operation is O(N), the constant times are
- For example, Redis running on an entry level laptop can scan a 1 million key

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

## MEMORY STATS
Source file: `raw/sources/20260409-docs-latest-commands-memory-stats-ba6247309d.md`
- The information about memory usage is provided as metrics and their respective
- values. The following metrics are reported:
- *   `peak.allocated`: Peak memory consumed by Redis in bytes (see [`INFO`]()'s
- *   `total.allocated`: Total number of bytes allocated by Redis using its
- allocator (see [`INFO`]()'s `used_memory`)

## MGET
Source file: `raw/sources/20260409-docs-latest-commands-mget-f0128ecdc2.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- This command's behavior varies in clustered Redis environments. See the [multi-key operations]() page for more information.
- Returns the values of all specified keys.
- For every key that does not hold a string value or does not exist, the special

## MSET
Source file: `raw/sources/20260409-docs-latest-commands-mset-c35cfafb31.md`
- This command's behavior varies in clustered Redis environments. See the [multi-key operations]() page for more information.
- Sets the given keys to their respective values.
- See [`MSETNX`]() if you don't want to overwrite existing values.
- It is not possible for clients to see that some of the keys were updated while
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |

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

## PFCOUNT
Source file: `raw/sources/20260409-docs-latest-commands-pfcount-8b832c07d4.md`
- This command's behavior varies in clustered Redis environments. See the [multi-key operations]() page for more information.
- When called with a single key, returns the approximated cardinality computed by the HyperLogLog data structure stored at the specified variable, which is 0 if the variable does not exist.
- When called with multiple keys, returns the approximated cardinality of the union of the HyperLogLogs passed, by internally merging the HyperLogLogs stored at the provided keys into a temporary HyperLogLog.
- The HyperLogLog data structure can be used in order to count **unique** elements in a set using just a small constant amount of memory, specifically 12k bytes for every HyperLogLog (plus a few bytes for the key itself).
- The returned cardinality of the observed set is not exact, but approximated with a standard error of 0.81%.

## PFMERGE
Source file: `raw/sources/20260409-docs-latest-commands-pfmerge-9100d51e2a.md`
- This command's behavior varies in clustered Redis environments. See the [multi-key operations]() page for more information.
- Merge multiple HyperLogLog values into a unique value that will approximate
- the cardinality of the union of the observed Sets of the source HyperLogLog
- The computed merged HyperLogLog is set to the destination variable, which is
- created if does not exist (defaulting to an empty HyperLogLog).

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

## RESTORE-ASKING
Source file: `raw/sources/20260409-docs-latest-commands-restore-asking-3179b0b736.md`
- It is used by a Redis cluster master during slot migration.
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Not supported">&#x274c; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> | <span title="Not supported">&#x274c; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> |  |

## RPOPLPUSH
Source file: `raw/sources/20260409-docs-latest-commands-rpoplpush-0ae17665ac.md`
- This command's behavior varies in clustered Redis environments. See the [multi-key operations]() page for more information.
- Atomically returns and removes the last element (tail) of the list stored at
- For example: consider `source` holding the list `a,b,c`, and `destination`
- Executing `RPOPLPUSH` results in `source` holding `a,b` and `destination`
- If `source` does not exist, the value `nil` is returned and no operation is

## SCAN
Source file: `raw/sources/20260409-docs-latest-commands-scan-2752f45a35.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- This command's behavior varies in clustered Redis environments. See the [multi-key operations]() page for more information.
- The `SCAN` command and the closely related commands [`SSCAN`](), [`HSCAN`]() and [`ZSCAN`]() are used in order to incrementally iterate over a collection of elements.
- * `SCAN` iterates the set of keys in the currently selected Redis database.

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

## SPUBLISH
Source file: `raw/sources/20260409-docs-latest-commands-spublish-738df48fb7.md`
- In Redis Cluster, shard channels are assigned to slots by the same algorithm used to assign keys to slots.
- A shard message must be sent to a node that owns the slot the shard channel is hashed to.
- The cluster makes sure that published shard messages are forwarded to all the nodes in the shard, so clients can subscribe to a shard channel by connecting to any one of the nodes in the shard.
- For more information about sharded pubsub, see [Sharded Pubsub]().
- For example the following command publishes to the `orders` channel with a subscriber already waiting for message(s).

## SSUBSCRIBE
Source file: `raw/sources/20260409-docs-latest-commands-ssubscribe-2f23676b98.md`
- In a Redis cluster, shard channels are assigned to slots by the same algorithm used to assign keys to slots.
- Client(s) can subscribe to a node covering a slot (primary/replica) to receive the messages published.
- All the specified shard channels needs to belong to a single slot to subscribe in a given `SSUBSCRIBE` call,
- A client can subscribe to channels across different slots over separate `SSUBSCRIBE` call.
- For more information about sharded Pub/Sub, see [Sharded Pub/Sub]().

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

## TDIGEST.MERGE
Source file: `raw/sources/20260409-docs-latest-commands-tdigest-merge-463f3d491c.md`
- This command's behavior varies in clustered Redis environments. See the [multi-key operations]() page for more information.
- Merges multiple t-digest sketches into a single sketch.
- <details open><summary><code>destination-key</code></summary>
- is the key name for a t-digest sketch to merge observation values to.
- If `destination-key` does not exist, a new sketch is created.

## TOUCH
Source file: `raw/sources/20260409-docs-latest-commands-touch-5c87a71b1e.md`
- This command's behavior varies in clustered Redis environments. See the [multi-key operations]() page for more information.
- Alters the last access time of a key(s).
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |

## TS.CREATERULE
Source file: `raw/sources/20260409-docs-latest-commands-ts-createrule-2375c63225.md`
- This command's behavior varies in clustered Redis environments. See the [multi-key operations]() page for more information.
- <details open><summary><code>sourceKey</code></summary>
- <details open><summary><code>destKey</code></summary>
- is key name for destination (compacted) time series. It must be created before `TS.CREATERULE` is called.
- <details open><summary><code>AGGREGATION aggregator bucketDuration</code></summary>

## TS.DELETERULE
Source file: `raw/sources/20260409-docs-latest-commands-ts-deleterule-af496004c3.md`
- This command's behavior varies in clustered Redis environments. See the [multi-key operations]() page for more information.
- <details open><summary><code>sourceKey</code></summary>
- <details open><summary><code>destKey</code></summary>
- is key name for destination (compacted) time series.
- <note><b>Note:</b> This command does not delete the compacted series.</note>

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

## UNLINK
Source file: `raw/sources/20260409-docs-latest-commands-unlink-3e2713ed47.md`
- This command's behavior varies in clustered Redis environments. See the [multi-key operations]() page for more information.
- This command is very similar to [`DEL`](): it removes the specified keys.
- Just like [`DEL`]() a key is ignored if it does not exist. However the command
- performs the actual memory reclaiming in a different thread, so it is not
- blocking, while [`DEL`]() is. This is where the command name comes from: the

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

## ZMPOP
Source file: `raw/sources/20260409-docs-latest-commands-zmpop-cf47e43606.md`
- This command's behavior varies in clustered Redis environments. See the [multi-key operations]() page for more information.
- Pops one or more elements, that are member-score pairs, from the first non-empty sorted set in the provided list of key names.
- See [`BZMPOP`]() for the blocking variant of this command.
- When the `MIN` modifier is used, the elements popped are those with the lowest scores from the first non-empty sorted set. The `MAX` modifier causes elements with the highest scores to be popped.
- The optional `COUNT` can be used to specify the number of elements to pop, and is set to 1 by default.

## ZRANGESTORE
Source file: `raw/sources/20260409-docs-latest-commands-zrangestore-c9db1b1698.md`
- This command's behavior varies in clustered Redis environments. See the [multi-key operations]() page for more information.
- This command is like [`ZRANGE`](), but stores the result in the `<dst>` destination key.
- ZADD srczset 1 "one" 2 "two" 3 "three" 4 "four"
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|

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

## Connect providers in Featureform
Source file: `raw/sources/20260409-docs-latest-develop-ai-featureform-providers-31129abb17.md`
- Use providers to connect Featureform to the systems where your data already lives.
- Redis is the online provider in the Featureform workflow.
- Before you register providers, make sure you have:
- Featureform's current provider APIs rely heavily on catalog configuration. For Snowflake and Databricks, make sure you choose the catalog model before you register providers or datasets.
- Featureform supports several offline systems, including:

## Featureform quickstart
Source file: `raw/sources/20260409-docs-latest-develop-ai-featureform-quickstart-96ffa17130.md`
- This quickstart helps you register a simple Featureform workflow and serve feature values from Redis.
- 2. Register an offline provider and a Redis online store.
- 3. Register a dataset and define a transformation.
- At the end, you'll have a Featureform feature view backed by Redis and a working `serve_feature_view(...)` call.
- For local development, you might use an insecure endpoint:

## LLM Cache
Source file: `raw/sources/20260409-docs-latest-develop-ai-redisvl-api-cache-8f7b2c2832.md`
- Semantic Cache for Large Language Models.
- Semantic Cache for Large Language Models.
- * **name** (*str* *,* *optional*) â The name of the semantic cache search index.
- * **distance_threshold** (*float* *,* *optional*) â Semantic threshold for the
- * **ttl** (*Optional* *[* *int* *]* *,* *optional*) â The time-to-live for records cached

## Semantic Router
Source file: `raw/sources/20260409-docs-latest-develop-ai-redisvl-api-router-12d5eb9d93.md`
- Semantic Router for managing and querying route vectors.
- * **name** (*str*) â The name of the semantic router.
- * **routes** (*List* *[*[Route](#route) *]*) â List of Route objects.
- * **vectorizer** (*BaseVectorizer* *,* *optional*) â The vectorizer used to embed route references. Defaults to default HFTextVectorizer.
- * **routing_config** ([RoutingConfig](#routingconfig) *,* *optional*) â Configuration for routing behavior. Defaults to the default RoutingConfig.

## Search Index Classes
Source file: `raw/sources/20260409-docs-latest-develop-ai-redisvl-api-searchindex-165f060d7c.md`
- | Class                                     | Description                                                                                  |
- |-------------------------------------------|----------------------------------------------------------------------------------------------|
- | [SearchIndex](#searchindex-api)           | Primary class to write, read, and search across data structures in Redis.                    |
- | [AsyncSearchIndex](#asyncsearchindex-api) | Async version of the SearchIndex to write, read, and search across data structures in Redis. |
- A search index class for interacting with Redis as a vector database.

## Install RedisVL
Source file: `raw/sources/20260409-docs-latest-develop-ai-redisvl-overview-installation-db5f3f6df7.md`
- There are a few ways to install RedisVL. The easiest way is to use pip.
- Install `redisvl` into your Python (>=3.8) environment using `pip`:
- RedisVL comes with a few dependencies that are automatically installed, however, a few dependencies
- are optional and can be installed separately if needed:
- If you use ZSH, remember to escape the brackets:

## SVS-VAMANA Vector Search
Source file: `raw/sources/20260409-docs-latest-develop-ai-redisvl-user-guide-svs-vamana-2848b31735.md`
- In this notebook, we will explore SVS-VAMANA (Scalable Vector Search with VAMANA graph algorithm), a graph-based vector search algorithm that is optimized to work with compression methods to reduce memory usage. It combines the Vamana graph algorithm with advanced compression techniques (LVQ and LeanVec) and is optimized for Intel hardware.
- Vamana builds a single-layer proximity graph and prunes edges during construction based on tunable parameters, similar to HNSW but with a simpler structure. The compression methods apply per-vector normalization and scalar quantization, learning parameters directly from the data to enable fast, on-the-fly distance computations with SIMD-optimized layout Vector quantization and compression.
- 2. [Quick Start with CompressionAdvisor](#Quick-Start-with-CompressionAdvisor)
- 3. [Creating an SVS-VAMANA Index](#Creating-an-SVS-VAMANA-Index)
- 4. [Loading Sample Data](#Loading-Sample-Data)

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

## Search concepts
Source file: `raw/sources/20260409-docs-latest-develop-ai-search-and-query-advanced-concepts-28abb10555.md`
- Redis Open Source supports the following Redis Search features. This article provides you an overview.
- * Full-text indexing of multiple fields in a document
- * Incremental indexing without performance loss
- * Document deletion and updating with index garbage collection
- * Boolean queries with AND, OR, and NOT operators between subqueries

## Aggregations
Source file: `raw/sources/20260409-docs-latest-develop-ai-search-and-query-advanced-concepts-aggregations-71b722b942.md`
- Aggregations are a way to process the results of a search query. Aggregation allows you to group, sort, and transform your result data, and to extract analytic insights from it. Much like aggregation queries in other databases and search engines, they can be used to create analytics reports, or perform [faceted search](https://en.wikipedia.org/wiki/Faceted_search) style queries.
- For example, indexing a web-server's logs, you can create a report for unique users by hour, country, or any other breakdown. Or you can create different reports for errors, warnings, etc.
- The basic idea of an aggregate query is this:
- * Perform a search query, filtering for records you wish to process.
- * Build a pipeline of operations that transform the results by zero or more sequences of:

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

## Index management best practices for Redis Search
Source file: `raw/sources/20260409-docs-latest-develop-ai-search-and-query-best-practices-index-mgmt-best-practices-25107a3b55.md`
- Redis Search is a powerful tool for executing complex search and query operations on structured, semi-structured, and unstructured data. Indexes are the backbone of this functionality, enabling fast and efficient data retrieval.
- Proper management of these indexes is essential for optimal performance, scalability, and resource utilization.
- This guide outlines best practices for managing Redis Search indexes throughout their lifecycle. It provides recommendations on:
- Indexes directly impact query speed and resource consumption.
- Poorly managed indexes can lead to increased memory usage, slower query times, and challenges in maintaining data consistency.

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

## Connect to the server
Source file: `raw/sources/20260409-docs-latest-develop-clients-dotnet-connect-a46976b029.md`
- You can connect to the server simply by passing a string of the
- form "hostname:port" to the `Connect()` method (for example,
- "localhost:6379"). However, you can also connect using a
- username, password, and many other options:
- if it is available without any special configuration. However, if you know

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

## Integrate hiredis with a Qt app
Source file: `raw/sources/20260409-docs-latest-develop-clients-hiredis-int-examples-qt-integration-5c7d4992dc.md`
- [Qt](https://www.qt.io/) is a popular cross-platform C++ framework that
- you can use to build command line and GUI apps. This guide explains how
- to use `hiredis` to connect to a Redis server from a Qt app.
- You should first download and install the
- [Qt development environment](https://www.qt.io/download-dev) for your

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

## Production usage
Source file: `raw/sources/20260409-docs-latest-develop-clients-redis-py-produsage-daef7ee89c.md`
- This guide offers recommendations to get the best reliability and
- performance in your production environment.
- Each item in the checklist below links to the section
- for a recommendation. Use the checklist icons to record your
- progress in implementing the recommendations.

## Smart client handoffs
Source file: `raw/sources/20260409-docs-latest-develop-clients-sch-2e641796f2.md`
- *Smart client handoffs (SCH)* is a feature of Redis Cloud and
- Redis Software servers that lets them actively notify clients
- about planned server maintenance shortly before it happens. This
- lets a client reconnect or otherwise respond gracefully without significant
- SCH is primarily useful when server software or hardware upgrades

## Developer notes
Source file: `raw/sources/20260409-docs-latest-develop-data-types-json-developer-1775550674.md`
- Developing Redis JSON involves setting up the development environment (which can be either Linux-based or macOS-based), building RedisJSON (the Redis module providing JSON), running tests and benchmarks, and debugging both the JSON module and its tests.
- To clone the RedisJSON module and its submodules, run:
- There are several reasons to use an isolated environment for development, like keeping your workstation clean and developing for a different Linux distribution.
- You can use a virtual machine as an isolated development environment. To set one up, you can use [Vagrant](https://www.vagrantup.com) or Docker.
- To set up a virtual machine with Docker:

## Cuckoo filter
Source file: `raw/sources/20260409-docs-latest-develop-data-types-probabilistic-cuckoo-filter-e4010a148a.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- [View all cf commands](https://redis.io/commands/?group=cf)
- | Command | Summary | Complexity | Since |
- |---------|---------|------------|-------|

## Redis Streams
Source file: `raw/sources/20260409-docs-latest-develop-data-types-streams-d6349cd00d.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- [View all stream commands](https://redis.io/commands/?group=stream)
- | Command | Summary | Complexity | Since |
- |---------|---------|------------|-------|

## Configuration Parameters
Source file: `raw/sources/20260409-docs-latest-develop-data-types-timeseries-configuration-056fcf0ac6.md`
- Before Redis 8 in Redis Open Source (version 8.0), all time series configuration parameters are load-time parameters.
- Use one of the following methods to set the values of load-time configuration parameters:
- Starting with Redis 8.0, most time series configuration parameters are runtime parameters.
- While you can set runtime parameters at load time, using the Redis `CONFIG` command is easier and works the same way as with Redis runtime configuration parameters.
- Set one or more configuration parameters.

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

## Client-side caching reference
Source file: `raw/sources/20260409-docs-latest-develop-reference-client-side-caching-06a7fb3dbd.md`
- This document is intended as an in-depth reference for
- Client-side caching is a technique used to create high performance services.
- It exploits the memory available on application servers, servers that are
- usually distinct computers compared to the database nodes, to store some subset
- of the database information directly in the application side.

## Redis command tips
Source file: `raw/sources/20260409-docs-latest-develop-reference-command-tips-147ff2c809.md`
- These provide Redis clients with additional information about the command.
- The information can instruct Redis Cluster clients as to how the command should be executed and its output processed in a clustered deployment.
- Unlike the command's flags (see the 3rd element of [`COMMAND`]()'s reply), which are strictly internal to the server's operation, tips don't serve any purpose other than being reported to clients.
- However, the following sections describe proposed tips and demonstrate the conventions they are likely to adhere to.
- This tip indicates that the command's output isn't deterministic.

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

## RedisInsight v2.44.0, February 2024
Source file: `raw/sources/20260409-docs-latest-develop-tools-insight-release-notes-v-2-44-0-df3eef7807.md`
- This is the General Availability (GA) release of RedisInsight 2.44.

## Redis Insight v2.52.0, June 2024
Source file: `raw/sources/20260409-docs-latest-develop-tools-insight-release-notes-v-2-52-0-f6ab6b8f99.md`
- This is the General Availability (GA) release of Redis Insight 2.52.

## Redis Insight v2.54.0, August 2024
Source file: `raw/sources/20260409-docs-latest-develop-tools-insight-release-notes-v-2-54-0-28b1524349.md`
- This is the General Availability (GA) release of Redis Insight 2.54.
- Support for [Redis Data Integration (RDI)](https://redis.io/data-integration/?utm_source=redisinsight&utm_medium=repository&utm_campaign=release_notes) - a powerful tool designed to seamlessly synchronize data from your existing database to Redis in near real-time. RDI establishes a data streaming pipeline that mirrors data from your existing database to Redis Software, so if a record is added or updated, those changes automatically flow into Redis. This no-code solution enables seamless data integration and faster data access so you can build real-time apps at any scale. And now you can seamlessly create, validate, deploy, and monitor your data pipelines directly from Redis Insight.

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

## Redis Insight v3.0.2, January 2026
Source file: `raw/sources/20260409-docs-latest-develop-tools-insight-release-notes-v-3-0-2-446824bbb1.md`
- This maintenance patch release includes critical and non-critical bug fixes for Redis Insight 3.0.0.
- | Package             | SHA-512                                                                                  |
- | ------------------- | ---------------------------------------------------------------------------------------- |
- | Windows             | 4wqbGo0XWd1iXmRMjVtDWCloUzNMWYq0rb13efWv8+odOTv0yHL2Qtxr7nGG4IFzETnL5BCVaoXPp8OkwGzZPA== |
- | Linux AppImage      | bzOdG+/srFdZ9hvWamftwwE+4l4H2/7UuHPb9Xg/G/tyLB1HlTso3/0B1GtWALz807uqDxJavd3GAKwLKOdtSw== |

## RedisInsight v1.10, March 2021
Source file: `raw/sources/20260409-docs-latest-develop-tools-insight-release-notes-v1-10-0-51b63e6dee.md`
- This is the maintenance release of RedisInsight 1.10 (v1.10.1)!
- This is the General Availability (GA) Release of RedisInsight 1.10 (v1.10.0)!

## RedisInsight v1.11, Oct 2021
Source file: `raw/sources/20260409-docs-latest-develop-tools-insight-release-notes-v1-11-0-b3b60a2875.md`
- This is the maintenance release of RedisInsight 1.11 (v1.11.1)!
- This is the General Availability Release of RedisInsight 1.11 (v1.11.0)!

## RedisInsight v1.4, April 2020
Source file: `raw/sources/20260409-docs-latest-develop-tools-insight-release-notes-v1-4-0-3933b612ea.md`
- This is the General Availability Release of RedisInsight 1.4 (v1.4.0)!

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

## RedisInsight v2.10.0, September 2022
Source file: `raw/sources/20260409-docs-latest-develop-tools-insight-release-notes-v2-10-0-b9970cbb96.md`
- This is the General Availability (GA) release of RedisInsight 2.10.

## RedisInsight v2.2.0, May 2022
Source file: `raw/sources/20260409-docs-latest-develop-tools-insight-release-notes-v2-2-0-05d3d81c45.md`
- This is the General Availability (GA) release of RedisInsight 2.2.0

## Redis for VS Code
Source file: `raw/sources/20260409-docs-latest-develop-tools-redis-for-vscode-b6f95cc08f.md`
- Redis for VS Code is an extension that allows you to connect to your Redis databases from within Microsoft Visual Studio Code.
- After connecting to a database, you can view, add, modify, and delete keys, and interact with your Redis databases using a Redis Insight like UI and also a built-in CLI interface.
- Open VS Code and click on the **Extensions** menu button. In the **Search Extensions in Marketplace** field, type "Redis for VS Code" and press the `enter` or `return` key. There may be more than one option shown, so be sure to click on the extension published by Redis. The correct extension is shown below. Click on the **Install** to install the extension.
- Once installed, check the **Auto Update** button to allow VS Code to install future revisions of the extension automatically.
- After installing the extension, your VS Code menu will look similar to the following.

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

## What's new?
Source file: `raw/sources/20260409-docs-latest-develop-whats-new-9df0b573c4.md`
- * Updated the RESP3 specification document to include the [attribute type]().
- * Updates to the Redis Insight page related to its new Redis Search auto-completion [feature]().
- * Restructured and added testable connection examples to the [client pages]().
- * Added [Redis Open Source]() and [Redis Stack]() release notes.
- * Added new [Predis (PHP client library)]() page.

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

## n8n Redis vector store
Source file: `raw/sources/20260409-docs-latest-integrate-n8n-vector-store-1071118d4f.md`
- [n8n](https://n8n.io/) is a platform that lets you automate data manipulation tasks.
- You specify the tasks using a visual graph notation known as a *workflow*. Each node in the
- graph represents a task, and the edges represent the data flow between tasks.
- [Redis vector store](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.vectorstoreredis/)
- node lets you access [vector search]() capabilities from

## Nagios with Redis Software
Source file: `raw/sources/20260409-docs-latest-integrate-nagios-with-redis-enterprise-3722a7b1d3.md`
- The Nagios plugin has been retired as of Redis Software version 7.2.4.
- The Redis Software (RS)Â Nagios plugin enables you to monitor the status of RSÂ related
- objects and alerts. The RSÂ alerts can be related to the cluster, nodes,
- The alerts that can be monitored via Nagios are the same alerts that can
- be configured in the RS UI in the Settings Â­\> Alerts page, or the

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

## C#/.NET client for Redis
Source file: `raw/sources/20260409-docs-latest-integrate-nredisstack-09cfa48dcf.md`
- Connect your C#/.NET application to a Redis database using the NRedisStack client library.
- NRedisStack is a comprehensive .NET client library for Redis that extends StackExchange.Redis with support for all Redis data structures and capabilities. It provides strongly-typed APIs for Redis data structures and advanced features, making it ideal for modern .NET applications.
- Refer to the complete [C#/.NET guide]() to install, connect, and use NRedisStack.

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

## Redis on Railway
Source file: `raw/sources/20260409-docs-latest-integrate-railway-redis-e4cc78f0da.md`
- [Railway](https://railway.com?utm_medium=integration&utm_source=docs&utm_campaign=redis) simplifies your infrastructure stack from databases to servers to observability with a single, scalable, easy-to-use platform. Companies of all sizes deploy full-stack applications on Railway and benefit from highly performant networking, intuitive vertical and horizontal scaling, and isolated environments with pull request deploys. Railway's template marketplace includes thousands of one-click deploy templates, including Redis.
- This is a guide to deploying Redis on Railway, using the official template.
- Navigate to a new Railway project at [railway.com/new](https://railway.com/new?utm_medium=integration&utm_source=docs&utm_campaign=redis). Add a Redis database to your project via the `ctrl / cmd + k` menu, and type `Redis`.
- You can also deploy it via the [template](https://railway.com/deploy/redis) from the Railway template marketplace.
- Upon deployment, you will have a Redis service running in your project, deployed from the [redis](https://hub.docker.com/_/redis) Docker image.

## Architecture
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-architecture-776aabda28.md`
- RDI implements a [change data capture](https://en.wikipedia.org/wiki/Change_data_capture) (CDC) pattern that tracks changes to the data in a
- non-Redis *source* database and makes corresponding changes to a Redis
- *target* database. You can use the target as a cache to improve performance
- because it will typically handle read queries much faster than the source.
- To use RDI, you define a *dataset* that specifies which data items

## Prepare AWS Aurora PostgreSQL/AWS RDS PostgreSQL for RDI
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-data-pipelines-prepare-dbs-aws-auro-0377fd9f55.md`
- Follow the steps in the sections below to prepare an
- [AWS Aurora PostgreSQL](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_GettingStartedAurora.CreatingConnecting.AuroraPostgreSQL.html) or [AWS RDS PostgreSQL](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_GettingStarted.CreatingConnecting.PostgreSQL.html)
- RDI requires some changes to database parameters. On AWS RDS and AWS Aurora, you change these parameters via a parameter group.
- 1. <a id="create-a-parameter-group"></a>
- In the [Relational Database Service (RDS) console](https://console.aws.amazon.com/rds/), navigate to **Parameter groups**.

## Prepare AWS Aurora MySQL/AWS RDS MySQL for RDI
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-data-pipelines-prepare-dbs-aws-auro-98888615e5.md`
- Follow the steps in the sections below to prepare an [AWS Aurora MySQL](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_GettingStartedAurora.CreatingConnecting.Aurora.html) or [AWS RDS MySQL](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_GettingStarted.CreatingConnecting.MySQL.html) database.
- Select the steps for your database type.
- RDI requires that your Aurora MySQL database has at least one replica or reader node.
- To add a reader node to an existing database, select **Add reader** from the **Actions** menu of the database and [add a reader node](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-replicas-adding.html).
- You can also create one during database creation by selecting **Create an Aurora Replica or Reader node in a different AZ (recommended for scaled availability)** under **Availability & durability > Multi-AZ deployment**.

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

## Observability
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-observability-bd7d0a317c.md`
- RDI reports metrics about its operation using
- [Prometheus exporter endpoints](https://prometheus.io/docs/instrumenting/exporters/).
- [Prometheus](https://prometheus.io/docs/prometheus/latest/getting_started/)
- to query the metrics and plot simple graphs or with
- [Grafana](https://grafana.com/) to produce more complex visualizations and

## Quickstart
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-quick-start-guide-f177341180.md`
- In this tutorial you will learn how to install RDI and set up a pipeline to ingest live data from a [PostgreSQL](https://www.postgresql.org/) database into a Redis database.
- quite small in size, so a single shard database should be enough. RDI also needs to maintain its
- own database on the cluster to store state information. *This requires Redis Enterprise v6.4 or greater*.
- The following diagram shows the structure of the pipeline we will create (see
- the [architecture overview]() to learn how the pipeline works):

## redis-di scaffold
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-reference-cli-redis-di-scaffold-ab64f8e3d7.md`
- Print the content of the scaffolded config file to CLI output

## Redis Data Integration release notes 1.0 (June 2024)
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-release-notes-rdi-1-0-6688bffb0c.md`
- This is the first General Availability version of Redis Data Integration (RDI).
- RDIâs mission is to help Redis customers sync Redis Enterprise with live data from their slow disk-based databases to:
- RDI keeps the Redis cache up to date with changes in the primary database, using a
- [_Change Data Capture (CDC)_](https://en.wikipedia.org/wiki/Change_data_capture) mechanism.
- It also lets you _transform_ the data from relational tables into convenient

## Redis Data Integration release notes 1.10.0 (May 2025)
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-release-notes-rdi-1-10-0-265506dca0.md`
- This minor release replaces the 1.8.0 release.
- RDIâs mission is to help Redis customers sync Redis Enterprise with live data from their slow disk-based databases to:
- RDI keeps the Redis cache up to date with changes in the primary database, using a [_Change Data Capture (CDC)_](https://en.wikipedia.org/wiki/Change_data_capture) mechanism.
- It also lets you _transform_ the data from relational tables into convenient and fast data structures that match your app's requirements. You specify the transformations using a configuration system, so no coding is required.
- **Other Features, Improvements and Enhancements**

## Redis Data Integration release notes 1.12.0 (June 2025)
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-release-notes-rdi-1-12-0-5b5a15dcda.md`
- This minor release replaces the 1.10.0 release.
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

## Redis Data Integration release notes 1.6.1 (March 2025)
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-release-notes-rdi-1-6-1-9bdde8676a.md`
- > This release replaces the 1.6.0 release.
- RDIâs mission is to help Redis customers sync Redis Enterprise with live data from their slow disk-based databases to:
- RDI keeps the Redis cache up to date with changes in the primary database, using a [_Change Data Capture (CDC)_](https://en.wikipedia.org/wiki/Change_data_capture) mechanism.
- It also lets you _transform_ the data from relational tables into convenient and fast data structures that match your app's requirements. You specify the transformations using a configuration system, so no coding is required.
- RDI can write data to a Redis Active-Active database. However, it doesn't support writing data to two or more Active-Active replicas. Writing data from RDI to several Active-Active replicas could easily harm data integrity as RDI is not synchronous with the source database commits.

## Redis Data Integration release notes 1.8.0 (May 2025)
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-release-notes-rdi-1-8-0-0f54beb15e.md`
- This minor release replaces the 1.6.7 release.
- RDIâs mission is to help Redis customers sync Redis Enterprise with live data from their slow disk-based databases to:
- RDI keeps the Redis cache up to date with changes in the primary database, using a [_Change Data Capture (CDC)_](https://en.wikipedia.org/wiki/Change_data_capture) mechanism.
- It also lets you _transform_ the data from relational tables into convenient and fast data structures that match your app's requirements. You specify the transformations using a configuration system, so no coding is required.
- will also enable many new features in the near future.

## Configure client apps
Source file: `raw/sources/20260409-docs-latest-integrate-redis-mcp-client-conf-d27605a826.md`
- the Redis MCP server, you must also configure your client app to use it.
- The sections below describe the ways you can do this.
- [Smithery](https://smithery.ai/) provides a searchable repository of scripts
- that add configurations for many MCP services to client apps.
- The easiest way to configure your client is to use the

## Install
Source file: `raw/sources/20260409-docs-latest-integrate-redis-mcp-install-f93d11a913.md`
- The MCP server runs separately from Redis, so you will need a
- Redis server for it to connect to. See [Redis Cloud]()
- how to get a test server active within minutes.
- When you have a Redis server available, use the instructions below to install and
- The easiest way to use the Redis MCP Server is with

## Python client for Redis
Source file: `raw/sources/20260409-docs-latest-integrate-redis-py-ec39d954c0.md`
- Connect your Python application to a Redis database using the redis-py client library.
- redis-py is the recommended Python client for Redis, providing a comprehensive interface for all Redis commands and features. It offers both synchronous and asynchronous APIs, making it suitable for a wide range of Python applications from simple scripts to high-performance web applications.
- Refer to the complete [Python guide]() to install, connect, and use redis-py.

## Redis Insight
Source file: `raw/sources/20260409-docs-latest-integrate-redisinsight-be5b96f316.md`
- Redis Insight is a powerful tool for visualizing and optimizing data in Redis, making real-time application development easier and more fun than ever before. Redis Insight lets you do both GUI- and CLI-based interactions in a fully-featured desktop GUI client.
- Redis Insight is available for multiple platforms:
- Refer to the complete [Redis Insight guide]() to install, connect, and use Redis Insight for data visualization and database management.

## Rust client for Redis
Source file: `raw/sources/20260409-docs-latest-integrate-rust-redis-0fb364a83e.md`
- Connect your Rust application to a Redis database using the redis-rs client library.
- redis-rs is a high-performance Redis client for Rust that leverages Rust's memory safety and performance characteristics. It provides both synchronous and asynchronous APIs with excellent integration into the Rust ecosystem.
- Refer to the [Rust Redis documentation](https://docs.rs/redis/latest/redis/) to install, connect, and use redis-rs.

## Uptrace with Redis Software
Source file: `raw/sources/20260409-docs-latest-integrate-uptrace-with-redis-enterprise-9195abae4f.md`
- Uptrace is an [open source APM tool](https://uptrace.dev/get/open-source-apm.html) that supports distributed tracing, metrics, and logs. You can use it to monitor applications and set up automatic alerts to receive notifications.
- Uptrace uses OpenTelemetry to collect and export telemetry data from software applications such as Redis. OpenTelemetry is an open source observability framework that aims to provide a single standard for all types of observability signals such as traces, metrics, and logs.
- With OpenTelemetry Collector, you can receive, process, and export telemetry data to any [OpenTelemetry backend](https://uptrace.dev/blog/opentelemetry-backend.html). You can also use Collector to scrape Prometheus metrics provided by Redis and then export those metrics to Uptrace.
- Because installing OpenTelemetry Collector and Uptrace can take some time, you can use the [docker-compose](https://github.com/uptrace/uptrace/tree/master/example/redis-enterprise) example that also comes with Redis Software cluster.
- After you download the Docker example, you can edit the following configuration files in the `uptrace/example/redis-enterprise` directory before you start the Docker containers:

## Write-behind architecture
Source file: `raw/sources/20260409-docs-latest-integrate-write-behind-architecture-97d2527ac5.md`
- Write-behind lets you integrate Redis Enterprise (as the source of changes to data) and downstream databases or datastores.
- Write-behind captures any changes to a selected set of key patterns in a Redis keyspace and asynchronously writes them in small batches to the downstream database. This means that your app doesn't need to handle the data remodeling or manage the connection with the downstream database.
- Write-behind can normalize a key in Redis to several records in one or more tables at the target.
- To learn more about write-behind declarative jobs and normalization, see the
- Write-behind's CLI and engine are shipped as one product that can run both ingest and write-behind pipelines.

## Data transformation pipeline
Source file: `raw/sources/20260409-docs-latest-integrate-write-behind-data-transformation-data-transformation-pipel-19d20fcde2.md`
- Write-behind's data transformation capabilities allow users to transform their data beyond the default translation of source types to Redis types. The transformation involves no coding. Instead, it is described in a set of human readable YAML files, one per source table.
- The ingested format and types are different from one source to another. Currently, the only supported source is [Debezium](https://debezium.io/). The first transformation from Debezium types to native JSON with Redis types is done automatically without any need for user instructions. Then, this JSON is passed on to the user defined transformation pipeline.
- Each job describes the transformation logic to perform on data from a single source. The source is typically a database table or collection and is specified as the full name of this table/collection. The job may include filtering logic to skip data that matches a condition. Other logical steps in the job will transform the data into the desired output that will be stored in Redis as hashes or JSON.
- In situations where there is a need to perform a transformation on all ingested records without creating a specific job for specific tables, the default job is used. The transformation associated with this job will be applied to all tables that lack their own explicitly defined jobs. The default job must have a table name of "*", and only one instance of this type of job is permitted.
- For example, the default job can streamline tasks such as adding a prefix or postfix to Redis keys, or adding fields to new hashes and JSONs without customizing each source table.

## Install Write-behind CLI
Source file: `raw/sources/20260409-docs-latest-integrate-write-behind-installation-install-rdi-cli-4019c67345.md`
- The following installation instructions install the Write-behind CLI on a local workstation.
- Write-behind installation is done via the Write-behind CLI. The CLI should have network access to the Redis Enterprise cluster API (port 9443 by default).
- Unpack the downloaded `redis-di.tar.gz` into the `/usr/local/bin/` directory:
- > Note: Non-root users should unpack to a directory with write permission and run `redis-di` directly from it.

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

## redis-di create
Source file: `raw/sources/20260409-docs-latest-integrate-write-behind-reference-cli-redis-di-create-3d42ee46fe.md`
- Silent install. Do not prompt to enter missing parameters
- Do not install Write-behind Engine to the Write-behind Database
- Host/IP of Redis Enterprise Cluster (service name in case of k8s)
- Redis Enterprise Cluster username with either DB Member, Cluster Member or Cluster Admin roles
- Password for the new Write-behind Database (alphanumeric characters with zero or more of the following: ! & # $ ^ < > -)

## redis-di delete
Source file: `raw/sources/20260409-docs-latest-integrate-write-behind-reference-cli-redis-di-delete-b17012edcb.md`
- Host/IP of Redis Enterprise Cluster (service name in case of k8s)
- Redis Enterprise Cluster username with either DB Member, Cluster Member or Cluster Admin roles
- Client certificate file to authenticate with
- Password for unlocking an encrypted private key
- Force operation. skips verification prompts

## redis-di set-secret
Source file: `raw/sources/20260409-docs-latest-integrate-write-behind-reference-cli-redis-di-set-secret-100a1b5765.md`
- Host/IP of Redis Enterprise Cluster (service name in case of k8s)
- Redis Enterprise Cluster username with either DB Member, Cluster Member or Cluster Admin roles
- Client certificate file to authenticate with
- Password for unlocking an encrypted private key

## redis-di upgrade
Source file: `raw/sources/20260409-docs-latest-integrate-write-behind-reference-cli-redis-di-upgrade-073a4a21ff.md`
- Host/IP of Redis Enterprise Cluster (service name in case of k8s)
- Redis Enterprise Cluster username with either DB Member, Cluster Member or Cluster Admin roles
- Client certificate file to authenticate with
- Password for unlocking an encrypted private key
- Force upgrade/downgrade. skips verification prompts

## Write-behind configuration for mysql
Source file: `raw/sources/20260409-docs-latest-integrate-write-behind-reference-debezium-mysql-9c2a8fee0a.md`

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

## Create Active-Active database (REAADB)
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-active-active-create-reaadb-13b4dab5a9.md`
- To create an Active-Active database, make sure you've completed all the following steps and have gathered the information listed below each step.
- 1. Configure the [admission controller and ValidatingWebhook]().
- These are installed and enabled by default on clusters created via the OpenShift OperatorHub.
- 2. Create two or more [RedisEnterpriseCluster (REC) custom resources]() with enough [memory resources]().
- * Namespace for each REC (`<rec-namespace>`)

## Edit participating clusters for Active-Active database
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-active-active-edit-clusters-7c2092dda2.md`
- Use the following steps to add a participating cluster to an existing Redis Enterprise Active-Active database (REAADB) for Kubernetes.
- To prepare the Redis Enterprise cluster (REC) to participate in an Active-Active database, perform the following tasks from [Prepare participating clusters]():
- To communicate with other clusters, all participating clusters need access to the admin credentials for all other clusters.
- 1. Get the REC credentials secret for the new participating cluster.
- This example shows an admin credentials secret for an REC named `rec-boston`:

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

## Set global database secret
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-active-active-global-db-secret-feb9f5a077.md`
- One of the fields available for `globalConfigurations` is `databaseSecretName` which can point to a secret containing the database password. To set the database secret name and sync the data to all participating clusters, follow the steps below.
- To edit other global configruations, see [global configuration]()
- 1. On an existing participating cluster, generate a YAML file containing the database secret with the database password.
- This example shoes a secret named `my-db-secret` with the password `my-password` encoded in base 64.
- 1. Apply the secret file from the previous step, substituting your own value for `<db-secret-file>`.

## Prepare participating clusters
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-active-active-prepare-clusters-0358526652.md`
- Before you prepare your clusters to participate in an Active-Active database, make sure you've completed all the following steps and have gathered the information listed below each step.
- 1. Configure the [admission controller and ValidatingWebhook]().
- 2. Create two or more [RedisEnterpriseCluster (REC) custom resources]() with enough [memory resources]().
- * Namespace for each REC (`<rec-namespace>`)
- 3. Configure the REC [`ingressOrRoutes` field]() and [create DNS records]().

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

## Install Redis Enterprise Helm chart
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-deployment-helm-5c80e2ad70.md`
- or 3.18 for migrating from a non-Helm installation.
- If you suspect your file descriptor limits are below 100,000, you must either manually increase limits or [Allow automatic resource adjustment](). Most major cloud providers and standard container runtime configurations set default file descriptor limits well above the minimum required by Redis Enterprise. In these environments, you can safely run without enabling automatic resource adjustment.
- The steps below use the following placeholders to indicate command line parameters you must provide:
- 2. Install the Helm chart into a new namespace.
- To install with Openshift, add `--set openshift.mode=true`.

## Deploy Redis Enterprise for Kubernetes with OpenShift
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-deployment-openshift-86f98c039e.md`
- To create a database that your application
- 1. Install the Redis Enterprise operator.
- 1. Create a Redis Enterprise CRD to describe your desired cluster.
- 1. The operator reads this cluster description and deploys the various components on your K8s cluster.
- 1. Once running, use the Redis Enterprise cluster to create a database.

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

## Flex on Kubernetes
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-flex-8941fa1334.md`
- Flex extends your database capacity by combining RAM and flash (SSD) storage. This tiered architecture keeps frequently accessed (hot) data in RAM for sub-millisecond latency while storing less active (warm) data on flash to reduce costs and increase capacity.
- Flex databases work with your existing Redis applications and the Redis API without modification.
- Flex moves data between RAM and flash based on access patterns:
- Redis uses an [LRU (least recently used)]() eviction policy to manage data placement. When memory pressure increases, Flex identifies cold objects, transfers them to flash, and frees RAM for new or frequently accessed keys.
- This process requires no application changes. Your existing Redis commands work across both storage tiers.

## Use Auto Tiering on Kubernetes
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-flex-auto-tiering-ee6bb25ba9.md`
- This page applies to Redis database version 7.4 and earlier. If you use version 8.0 or later, see [Redis Flex](https://redis.io/docs/latest/operate/kubernetes/re-clusters/redis-flex).
- Redis Enterprise Software for Kubernetes supports using Auto Tiering (previously known as Redis on Flash), which extends your node memory to use both RAM and flash storage. SSDs (solid state drives) can store infrequently used (warm) values while your keys and frequently used (hot) values are still stored in RAM. This improves performance and lowers costs for large datasets.
- NVMe (non-volatile memory express) SSDs are strongly recommended to achieve the best performance.
- Before creating your Redis clusters or databases, these SSDs must be:
- For more information on node storage, see [Node persistent and ephemeral storage]().

## Get started with Flex on Kubernetes
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-flex-get-started-a76f06109f.md`
- This page applies to Redis database version 7.4 and earlier using Auto Tiering. If you use version 8.0 or later, see [Redis Flex](https://redis.io/docs/latest/operate/kubernetes/flex/).
- Flex extends your database capacity by combining RAM and flash (SSD) storage. This tiered architecture keeps frequently accessed (hot) data in RAM for sub-millisecond latency while storing less active (warm) data on flash to reduce costs and increase capacity.
- For hardware requirements and sizing guidelines, see [Plan your deployment]().
- To enable Flex, configure your `RedisEnterpriseCluster` (REC) resource with flash storage settings. Add the [`redisOnFlashSpec`]() section to your REC specification.
- | Field                   | Description                                      |

## Plan a Redis Flex deployment on Kubernetes
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-flex-plan-c2318a180e.md`
- Review the hardware requirements, sizing guidelines, and known limitations before you deploy Redis Flex.
- For more information about storage configuration, see [Kubernetes local volumes](https://kubernetes.io/docs/concepts/storage/volumes/#local).
- Provision Flash capacity that exceeds your total database size. The extra space accounts for:
- | SSD type              | Recommendation                 |
- |-----------------------|--------------------------------|

## Scale Redis Flex on Kubernetes
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-flex-scale-05d49c9491.md`
- This guide shows you how to scale Flex databases on Kubernetes to meet changing workload demands.
- Use the following table to determine the best scaling strategy for your Flex deployment:
- | Increase data capacity only without adding CPU | [Increase `memorySize` and decrease RAM percentage](#decrease-ram-to-flash-ratio) |
- | Increase throughput only | [Add shards and vCPU](#add-shards-or-nodes) |
- | Increase data capacity and throughput | [Add shards](#add-shards) |

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

## Networking
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-networking-3f596d77fe.md`
- Configure networking and external access for your Redis Enterprise deployment on Kubernetes. By default, Kubernetes doesn't allow external access to your Redis databases. Redis Enterprise for Kubernetes provides several methods to route external traffic to your clusters and databases.
- Connect applications to your Redis Enterprise databases:
- Choose the appropriate method for your environment to enable external access:
- For Active-Active databases, configure automatic ingress creation:
- Versions 6.4.2 or later of Redis Enterprise for Kubernetes include a feature for ingress configuration. The `ingressOrRouteSpec` field is available in the RedisEnterpriseCluster spec to automatically create an Ingress (or route) for the API service and databases (REAADB) on that REC. See [REC external routing]() for more details.

## Enable cluster-aware clients (OSS Cluster API)
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-networking-cluster-aware-clients-669542287b.md`
- The OSS Cluster API improves performance by allowing cluster-aware Redis clients to discover database topology and route requests directly. This feature supports cluster-aware clients running on the same Kubernetes cluster (internal) and cluster-aware clients outside the Kubernetes cluster (external).
- Enabling external access for OSS Cluster API creates a separate LoadBalancer service for each Redis Enterprise pod in addition to the LoadBalancer service for the cluster endpoint. LoadBalancers are resources that can significantly increase operational costs; plan your infrastructure budget accordingly.
- To enable cluster-aware clients, edit the REC and REDB custom resources with the following fields.
- 1. Edit the RedisEnterpriseCluster (REC) custom resource to add the `ossClusterSettings` section to the `spec` section.
- Set `externalAccessType` to `LoadBalancer` and add any `serviceAnnotations`, if required by your service provider.

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

## Establish external routing on the RedisEnterpriseCluster
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-networking-ingressorroutespec-8cbc708d62.md`
- Redis Enterprise for Kubernetes supports the Ingress controllers below:
- * [HAProxy](https://haproxy-ingress.github.io/)
- * [NGINX](https://kubernetes.github.io/ingress-nginx/)
- * [Istio](https://istio.io/latest/docs/setup/getting-started/)
- OpenShift users can use [routes]() instead of an Ingress.

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

## Connect to the admin console
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-re-clusters-connect-to-admin-console-5e61d80cef.md`
- The username and password for the Redis Enterprise Software [admin console]() are stored in a Kubernetes [secret](https://kubernetes.io/docs/concepts/configuration/secret/). After retrieving your credentials, you can use port forwarding to connect to the admin console.
- There are several methods for accessing the admin console. Port forwarding is the simplest, but not the most efficient method for long-term use. You could also use a load balancer service or Ingress.
- 1. Switch to the namespace with your Redis Enterprise cluster (REC).
- 1. Find your cluster name from your list of secrets.
- In this example, the cluster name is `rec`.

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

## Manage databases in multiple namespaces
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-re-clusters-multi-namespace-8820092bf1.md`
- Multiple Redis Enterprise database resources (REDBs) can be associated with a single Redis Enterprise cluster resource (REC) even if they reside in different namespaces.
- To learn more about designing a multi-namespace Redis Enterprise cluster, see [flexible deployment options]().
- Multi-namespace installations now support Active-Active databases (REAADB) with certain configuration requirements. For details, see [Multi-namespace Active-Active databases](#multi-namespace-active-active-databases).
- Before configuring a multi-namespace deployment, you must have a running [Redis Enterprise cluster (REC)](). See more information in the [deployment]() section.
- Both the operator and the RedisEnterpriseCluster (REC) resource need access to each namespace the REC will manage. For each **managed** namespace, create a `consumer_role.yaml` and `consumer_role_binding.yaml` file within the managed namespace, as shown in the examples below.

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

## Create replica databases on Kubernetes
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-re-databases-replica-redb-6d2f88f10a.md`
- You can configure a replica of a database by creating an item in
- the [`replicaSources`]() section of the RedisEnterpriseDatabase (REDB) custom resource.
- A secret must be created with the `stringData` section containing the replica source URI as follows:
- Create a secret with the replica source URI listed in the `stringData` field as follows:
- The replica source URL can be retrieved by going to "UI > database > configuration > Press the button Get Replica of source URL"

## Configuration recommendations
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-recommendations-e864c4b6bc.md`
- Follow these best practices and configuration recommendations to optimize your Redis Enterprise deployment on Kubernetes for performance, reliability, and scalability.
- Configure your Kubernetes infrastructure for optimal Redis Enterprise performance:
- Optimize your Redis Enterprise deployment configuration:
- Configure your deployment for optimal performance and reliability based on your workload requirements and infrastructure capabilities.

## Manage node resources
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-recommendations-node-resources-e3a3e41cc3.md`
- Kubernetes uses [node-pressure eviction](https://kubernetes.io/docs/concepts/scheduling-eviction/node-pressure-eviction/) to terminate pods and free up node resources. Redis Enterprise for Kubernetes works best when you use the recommendations below.
- Eviction thresholds are managed by [kubelet arguments](https://kubernetes.io/docs/reference/command-line-tools-reference/kubelet/).
- Redis recommends setting a high [soft eviction threshold](https://kubernetes.io/docs/concepts/scheduling-eviction/node-pressure-eviction/#soft-eviction-thresholds). This changes the node condition early enough to alert the administrator.
- We also recommend setting the [`eviction-soft-grace-period`](https://kubernetes.io/docs/concepts/scheduling-eviction/node-pressure-eviction/#soft-eviction-thresholds) high enough for the administrator to scale the cluster.
- For more information about configuring eviction thresholds on specific platforms, see [Freeing node resources](https://docs.openshift.com/container-platform/4.9/nodes/nodes/nodes-nodes-garbage-collection.html) for OpenShift or [Cluster architecture](https://cloud.google.com/kubernetes-engine/docs/concepts/cluster-architecture#node_allocatable) for GKE.

## Control node selection
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-recommendations-node-selection-d6d79a76ea.md`
- Kubernetes clusters often include nodes with different CPU and memory profiles. You control where Redis Enterprise cluster (REC) pods run by setting fields in the REC custom resource (CRD).
- A Redis Enterprise cluster (REC) runs as a StatefulSet. The Kubernetes scheduler assigns nodes when you create or resize the cluster, or when a pod restarts.
- Use these options to control pod placement:
- The [`nodeSelector`]() field matches the Kubernetes [`nodeSelector`](https://kubernetes.io/docs/concepts/configuration/assign-pod-node/#nodeselector) syntax.
- Label the nodes you want to target. For example, if nodes 'n1' and 'n2' are labeled with `memory=high`:

## Use persistent volumes in Redis Enterprise clusters
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-recommendations-persistent-volumes-888319afb9.md`
- Redis Enterprise for Kubernetes can only use storage classes supported by block storage. Block storage is mounted at the Kubernetes node level and utilizes EXT4 or XFS file systems. It can be sourced from enterprise-grade SANs or cloud environments such as EBS, Azure Managed Disks, or GCP persistent disks.
- NFS, NFS-like, and multi-read-write/shared storage options are not supported. These types of storage are often slow and can cause locking behaviors that are incompatible with the requirements of database storage.
- To deploy a Redis Enterprise cluster with Redis Enterprise operator the
- spec should include a *persistentSpec* section, in the
- Persistence storage is a requirement for production deployments.

## Manage pod stability
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-recommendations-pod-stability-c287733761.md`
- Kubernetes clusters manage the allocation of system resources and can evict pods to release system resources.
- Here are some ways that you can configure the Redis Enterprise node pods to maintain pod stability:
- A running pod has a quality of service measure assigned to it that is
- one of three [quality of service classes](https://kubernetes.io/docs/tasks/configure-pod-container/quality-service-pod/):
- You can assure the Guaranteed class is assigned to the Redis Enterprise node pods

## Size and scale a Redis Enterprise cluster deployment on Kubernetes
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-recommendations-sizing-on-kubernetes-459dda8233.md`
- and scaling a Redis Enterprise cluster deployment.
- For minimum and recommended sizing, always follow the sizing guidelines
- detailed in the [Redis Enterprise hardware requirements]().
- Define the number of cluster nodes in redis-enterprise-cluster.yaml file.
- The number of nodes in the cluster must be an uneven number

## Reference
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-reference-10222a625d.md`
- This reference documentation covers Redis Enterprise custom resources, API specifications, and practical instructions for creating, configuring, and managing Redis Enterprise deployments on Kubernetes.
- Redis Enterprise for Kubernetes uses custom resources to manage clusters and databases. Use standard Kubernetes tools to create, modify, and delete these resources.
- Use `kubectl apply` with YAML manifests to create custom resources:
- Use these commands to list and inspect existing custom resources:
- Edit the YAML manifest and reapply to update custom resources:

## API reference
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-reference-api-0d9db36a07.md`
- The Redis Enterprise operator provides Kubernetes custom resource definitions (CRDs) that let you manage Redis Enterprise clusters and databases declaratively. This section contains the complete API reference for all operator resources.
- The operator uses different API versions to indicate stability and feature maturity:
- | [RedisEnterpriseCluster (REC)](redis_enterprise_cluster_api) | `v1` | Manages Redis Enterprise cluster deployments |
- | [RedisEnterpriseDatabase (REDB)](redis_enterprise_database_api) | `v1alpha1` | Creates and configures Redis databases |
- | [RedisEnterpriseActiveActiveDatabase (REAADB)](redis_enterprise_active_active_database_api) | `v1alpha1` | Sets up active-active databases across clusters |

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

## RedisEnterpriseRemoteCluster API Reference
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-reference-api-redis-enterprise-remote-cluster-api-9e48c22825.md`
- RedisEntepriseRemoteCluster represents a remote participating cluster.
- <td><a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.27/#objectmeta-v1-meta">metadata</a></td>
- <td>Refer to the Kubernetes API documentation for the fields of the `metadata` field.</td>
- The URL of the cluster, will be used for the active-active database URL.<br/>
- The name of the REC that the RERC is pointing at<br/>

## YAML examples
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-reference-yaml-a117aaec05.md`
- This section provides complete YAML examples that cover common Redis Enterprise for Kubernetes deployment scenarios. Each example includes the necessary configuration files and step-by-step instructions for editing and applying them.
- 1. Copy the YAML content from the examples below
- 2. Save each YAML block to a separate file with a descriptive name
- 3. Edit the configuration values to match your environment
- 4. Apply the files in the correct order using `kubectl apply`

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

## Multi-namespace examples
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-reference-yaml-multi-namespace-2cb54f5ea8.md`
- Multi-namespace deployment lets a single Redis Enterprise operator manage clusters and databases in different namespaces, providing better resource isolation and organization.
- For complete deployment instructions, see [Manage databases in multiple namespaces]().
- Deploy these resources in the namespace where the Redis Enterprise operator runs.
- Grant the operator cluster-wide permissions to manage resources across namespaces.

## Rack awareness examples
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-reference-yaml-rack-awareness-6a975abff9.md`
- This page provides YAML examples for deploying Redis Enterprise with [rack awareness](). Rack awareness distributes Redis Enterprise nodes and database shards across different availability zones or failure domains to improve high availability and fault tolerance.
- For complete deployment instructions, see [Deploy on Kubernetes]().
- The service account for rack-aware deployments is the same as [basic deployments]().
- Rack awareness requires additional permissions to read [node labels](https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/) across the cluster.
- The [ClusterRoleBinding](https://kubernetes.io/docs/reference/access-authn-authz/rbac/#rolebinding-and-clusterrolebinding) grants cluster-wide permissions to the service account.

## 6.2.18 release notes
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-release-notes-6-2-releases-04e94c4958.md`
- Be aware the following changes included in this release affect the upgrade process. Please read carefully before upgrading.
- If you are using operator version 6.2.8-15 or earlier, you cannot upgrade directly to operator versions 6.2.12 through 6.4.2-5. You must upgrade to operator version 6.2.10-45 before you can upgrade to operator versions between 6.2.12 and 6.4.2-5. However, upgrades directly to operator version 6.4.2-6 are supported.
- Due to a change in the SCC, on OpenShift clusters running version 6.2.12 or earlier upgrading to version 6.2.18 or later, where `node:1` is <b>not</b> the master node, the upgrade might get stuck.
- For more info and steps to prevent this issue, see [upgrade a Redis Enterprise cluster (REC)]().
- Operator version 6.4.2-6 includes a fix for this issue.

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

## Redis Enterprise for Kubernetes release notes 6.4.2-8 (Oct 2024)
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-release-notes-6-4-2-releases-6-4-2-8-oct24-4587acc438.md`
- This is a maintenance release of Redis Enterprise for Kubernetes version 6.4.2-8 and includes an updated Redis Enterprise image.
- * New Redis Enterprise software version 6.4.2-115
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

## Redis Enterprise for Kubernetes 7.22.2-31 (December 2025) release notes
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-release-notes-7-22-2-releases-7-22-2-31-december2-1c689cd418.md`
- This is a maintenance release to support [Redis Enterprise Software version 7.22.2-41](). For supported distributions known limitations, see the [7.22.2 releases]().
- | **CRD** | **Field** | **Change** | **Description** |
- | REC | spec.dpInternodeEncryptionCertificateSecretName | Add | Secret name to use for cluster's Data Plane Internode Encryption (DPINE) certificate. If left blank, a cluster-provided certificate will be used. |
- | REC | spec.cpInternodeEncryptionCertificateSecretName | Add | Secret name to use for cluster's Control Plane Internode Encryption (CPINE) certificate. If left blank, a cluster-provided certificate will be used. |
- For all other known limitations, see [7.22.2 releases]().

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

## Redis Enterprise for Kubernetes 8.0.16-24 (March 2026) release notes
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-release-notes-8-0-16-releases-8-0-16-24-march2026-637fb2a960.md`
- Redis Enterprise for Kubernetes 8.0.16-24 is a maintenance release of [Redis Enterprise for Kubernetes 8.0.10]().
- For version changes, supported distributions, and known limitations, see the [release notes for 8.0.10]().

## Redis Enterprise for Kubernetes 8.0.16-25 (March 2026) release notes
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-release-notes-8-0-16-releases-8-0-16-25-march2026-c0dca63c2d.md`
- Redis Enterprise for Kubernetes 8.0.16-25 is a maintenance release of [Redis Enterprise for Kubernetes 8.0.10]().
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

## Redis Enterprise for Kubernetes Release Notes 5.4.10-8 (January 2020)
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-release-notes-previous-releases-k8s-5-4-10-8-41033ffa4f.md`
- This release includes Redis Enterprise (RS) version [5.4.10-22]() and introduces new feature and bug fixes.
- This is a maintenance release providing support for the Redis Enterprise Software release 5.4.10 and includes multiple enhancements.
- Follow these [instructions]() for upgrading to this Kubernetes operator release.
- Pay special attention to the yaml file naming changes and new yaml files that have been created for this release. These are highlighted in the quick start guide.
- See the top 4 articles in the new [Additonal Topics](https://github.com/RedisLabs/redis-enterprise-k8s-docs/blob/92a2eff4b8c4ccafac459138f12e5f38acde825c/docs/topics.md#additional-topics) documentation section.

## Redis Enterprise for Kubernetes Release Notes 5.4.14-2 (March 2020)
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-release-notes-previous-releases-k8s-5-4-14-2-841a1392e9.md`
- The Redis Enterprise K8s 5.4.14-2 release is a maintenance release providing support for the latest Redis Enterprise Software release 5.4.14 and includes bug fixes as well as the following notable changes:
- This release now correctly handles the API deprecations, and API version changes that K8s release 1.16 introduced.
- The release now supports OpenShift 4.3. A new operator version is now available in OpenShift's Operator Hub and now includes a more comprehensive base template as well as references to documentation and support.
- When the Operator is upgraded to a new release, it now prevents the Redis Enterprise Cluster nodes from being automatically upgraded, unless autoUpgrade is enabled or the RS image version is explicitly updated in the Redis Enterprise Cluster (REC) spec. The change was introduced to avoid situations where an Operator upgrade initiated a rolling update to the cluster nodes' StatefulSet.
- This release deprecates support for K8s version 1.9/1.10 and OpenShift 3.9. If you are currently using these releases please contact Redis support for information about migrating to a new K8s release.

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

## Security
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-security-a5de8a6055.md`
- Configure security settings for your Redis Enterprise deployment on Kubernetes. Redis Enterprise for Kubernetes provides comprehensive security features including TLS encryption, authentication, access control, and certificate management.
- Manage cluster credentials and authentication settings:
- Configure TLS certificates and encryption for secure communications:
- Configure external secret management systems:
- Configure security-related resource settings:

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

## Install Redis
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-install-archive-install-redis-e6240a2392.md`
- This is a an installation guide. You'll learn how to install, run, and experiment with the Redis server process.
- While you can install Redis on any of the platforms listed below, you might also consider using Redis Cloud by creating a [free account](https://redis.com/try-free?utm_source=redisio&utm_medium=referral&utm_campaign=2023-09-try_free&utm_content=cu-redis_cloud_users). You can also download [Redis Insight](), a free developer tool that works with Redis.
- How you install Redis depends on your operating system. See the guide below that best fits your needs:
- Refer to [Redis Administration]() for detailed setup tips.
- After you have Redis up and running, you can connect using `redis-cli`.

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

## Redis signal handling
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-reference-signals-4674d54f39.md`
- This document provides information about how Redis reacts to different POSIX signals such as `SIGTERM` and `SIGSEGV`.
- The information in this document **only applies to Redis version 2.6 or greater**.
- The `SIGTERM` and `SIGINT` signals tell Redis to shut down gracefully. When the server receives this signal,
- it does not immediately exit. Instead, it schedules
- a shutdown similar to the one performed by the [`SHUTDOWN`](/commands/shutdown) command. The scheduled shutdown starts as soon as possible, specifically as long as the

## Probabilistic data structure configuration compatibility with Redis Software
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-bloom-config-87430ecae6.md`
- [Redis Software]() lets you manually change any [RedisBloom configuration setting](configuration/#redisbloom-configuration-parameters).
- To change the RedisBloom configuration using the Redis Software Cluster Manager UI:
- 1. From the **Databases** list, select the database, then click **Configuration**.
- 1. In the **Capabilities** section, click **Parameters**.
- 1. After you finish editing the module's configuration parameters, click **Done** to close the parameter editor.

## Cluster support
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-deprecated-features-trig-203ec28b87.md`
- **Notice**: On a Redis Open Source cluster, before executing any gears function, you must send a `REDISGEARS_2.REFRESHCLUSTER` command to all the shards so that they will be aware of the cluster topology. Without this step, each shard will act as a single Redis Open Source instance.
- Triggers and functions support cross-shard operation on Redis clusters. This means that it is possible to call a function that will be invoked on another shard. We call such a function a remote function.
- Just like local functions, remote function must be declared on library load time using `redis.registerClusterFunction` API. The following example declares a remote function that returns the number of keys on the shard:
- We have couple of options for calling a remote function. These options are exposed through the async client that is given to a Coroutine:
- * `async_client.runOnShards` - run the remote function on all the shards (including the current shard). Returns a promise that, once resolved, will give two nested arrays, the first contains another array with the results from all the shards and the other contains an array of errors (`[[res1, res2, ...],[err1, err2, ..]]`).

## Triggers and functions
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-deprecated-features-trig-5bba4d1075.md`
- [![discord](https://img.shields.io/discord/697882427875393627?style=flat-square)](https://discord.gg/xTbqgTB)
- [![Github](https://img.shields.io/static/v1?label=&message=repository&color=5961FF&logo=github)](https://github.com/RedisGears/RedisGears/)
- The triggers and functions feature of Redis Stack allows running JavaScript functions inside Redis. These functions can be executed on-demand, by an event-driven trigger, or by a stream processing trigger.
- * [Command documentation](https://github.com/RedisGears/RedisGears/tree/master/docs/commands)
- * [Source code](https://github.com/RedisGears/RedisGears)

## Known limitations
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-deprecated-features-trig-6641c8edff.md`
- JavaScript remote functions are limited to **read operations** only. Any attempt to perform a write operation of the following functions on a shard different than the one executing the function will result in an error.
- In addition, keyspace modification performed by JavaScript functions that are registered using any of the methods available should perform write operations locally:
- It is also recommended to co-locate the keys to be modified in the same hash slot as the key or Stream that originated the event. As an example, if the user profile stored in the Hash `myserv:user:1234` is subject to changes and we'd like to count them in an external counter, we would name the counter using hash tags: `{myserv:user:1234}:cnt`.
- By design, asynchronous functions guarantee exclusive single-threaded access to the keyspace, the distinctive feature of Redis. In asynchronous programming with JavaScript functions, access to the keyspace in read or write mode must be blocking, while if not accessing the keyspace, the execution may be non-blocking. This implementation maintains the same level of data consistency as Redis standard commands or Lua scripts and functions but takes advantage of asynchronous execution, a feature of the JavaScript engine.
- Not all the JavaScript global variables are made available by the JavaScript engine loaded by Redis (e.g. `console`, `document`). The `redis` global variable can be used to manage functions registration, logging etc.

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

## Install RedisGears
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-gears-v1-installing-redi-f2af9c0373.md`
- If your cluster uses Redis Software v6.0.12 or later and has internet access, you only need to download the RedisGears package. It automatically fetches dependencies like the Python and JVM plugins during online installation.
- Offline installation requires you to manually upload dependencies to the primary node.
- 1. Download the **RedisGears** package from the Redis Software [download center](https://cloud.redis.io/#/rlec-downloads).
- For offline installation of RedisGears v1.2 and later, you also need to download the **RedisGears Dependencies** packages for both Python and Java.
- For RedisGears v1.0, you only need the Python dependency package.

## RedisGears JVM plugin
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-gears-v1-jvm-c97f087430.md`
- With the [RedisGears JVM plugin](https://github.com/RedisGears/JVMPlugin), you can write RedisGears functions in [Java](https://en.wikipedia.org/wiki/Java_(programming_language)) and run them on a [Redis Software]() cluster. It currently supports [JVM](https://en.wikipedia.org/wiki/Java_virtual_machine) version 11.
- Similar to the Python plugin, the JVM plugin allows both batch processing and event-driven processing.
- Before you can run RedisGears with Java, you will need to [install the RedisGears module and the JVM plugin]() on your Redis Software cluster and [enable them for your database]().
- Once you have written your code, compile and package it into a [JAR](https://en.wikipedia.org/wiki/JAR_(file_format)) file and upload it to a node on your Redis Software cluster. Use the `RG.JEXECUTE` command with the `redis-cli` command-line tool to run your code.

## Hashtag
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-gears-v1-jvm-classes-gea-8f5c1a7296.md`
- Returns a string that maps to the current shard according to the cluster slot mapping.
- You can use the `hashtag` function when you need to create a key that resides on the current shard.
- Returns a string that maps to the current shard.
- The following example uses the `hashtag` function to calculate the hslot. The string maps to the current shard.

## Run
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-gears-v1-jvm-classes-gea-bf43858431.md`
- Runs the pipeline of functions immediately upon execution. It will only run once.
- | collect | boolean | Whether or not to collect the results from the entire cluster before returning them |
- | jsonSerialize | boolean | Whether or not to serialize the results to JSON before returning them |

## ShardsIDReader
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-gears-v1-jvm-classes-rea-35a151c27c.md`
- The `ShardsIDReader` creates a single record on each shard that represents the current shard's ID.
- Use this reader when you want to run an operation on each shard in the database.
- Creates a record for each shard with the shard's cluster identifier.

## Install RedisGears and the JVM plugin
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-gears-v1-jvm-install-715775280f.md`
- Before you can use RedisGears with the JVM, you need to install the RedisGears module and JVM plugin on your Redis Software cluster and enable them for a database.
- 1. [Installed RedisGears and the JVM plugin]()
- 1. From the Redis Software admin console's **databases** page, select the **Add** button to create a new database:
- 1. Confirm that you want to create a new Redis database with the **Next** button.
- 1. On the **create database** page, give your database a name.

## RedisGears JVMÂ quick start
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-gears-v1-jvm-quickstart-0e09f1dc04.md`
- 1. Create a new [Maven project](https://maven.apache.org/guides/getting-started/index.html#).
- 1. Add the following sections to the [pom.xml](https://maven.apache.org/guides/introduction/introduction-to-the-pom.html) file:
- 1. Add example code for either [batch processing](#batch-processing) or [event processing](#event-processing) to your project's `main` function.
- Use the Maven command-line tool or an IDE plugin to compile and package your code into a JAR file:
- Upload your JAR file to a node in the Redis Software cluster. You will need to use the destination filepath when you run your code.

## RedisGears Python plugin
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-gears-v1-python-4ede2af814.md`
- With the RedisGears Python plugin, you can write RedisGears functions in [Python](https://www.python.org/) and run them on a [Redis Software]() cluster.
- The Python plugin allows both batch processing and event-driven processing.
- Before you can run RedisGears with Python, you will need to [install the RedisGears module and the Python plugin]() on your Redis Software cluster and [enable them for your database]().
- Once you have written your code, upload it to a node on your Redis Software cluster. Use the `RG.PYEXECUTE` command with the `redis-cli` command-line tool to run your code.

## Install RedisGears and the Python plugin
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-gears-v1-python-install-7791bcb04b.md`
- Before you can use RedisGears with Python, you need to install the RedisGears module and Python plugin on your Redis Software cluster and enable them for a database.
- 1. [Installed RedisGears and the Python plugin]()
- 1. From the Redis Software admin console's **databases** page, select the **Add** button to create a new database:
- 1. Confirm that you want to create a new Redis database with the **Next** button.
- 1. On the **create database** page, give your database a name.

## RedisGears Python quick start
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-gears-v1-python-quicksta-668657a6c6.md`
- In this quick start guide, we'll see how to use RedisGears to perform batch processing and event processing.
- With RedisGears, **batch processing** means processing the data already stored in a Redis database. **Event processing** means processing changes to the Redis key space.
- The examples below assume an empty Redis database.
- Let's start with the simplest example. From the `redis-cli`, run the following command:
- This command doesn't do much; it simply iterates over the keyspace. Let's add a key and run it again:

## Write-behind caching
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-gears-v1-python-recipes--15bc630a31.md`
- Write-behind is a caching strategy in which the cache layer itself connects to the backing database. This means that your applications need only ever connect to your cache layer, and the cache then reads from or updates the backing database as needed. Redis currently supports write-behind caching in [Redis Software]().
- 1. Your application uses the cache for reads and writes.
- 1. The cache syncs any changed data to the backing database asynchronously.
- 1. Your application reads from the cache. If there's a cache hit, the data is returned.
- 1. If there's cache miss, the cache retrieves the data from your backing database (think Oracle, PostgreSQL, etc.). The data is then stored in the cache and returned. -->

## Install and upgrade modules
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-install-2793317219.md`
- Several modules that provide additional Redis capabilities, such as search and query, JSON, time series, and probabilistic data structures, come packaged with [Redis Software](). As of version 8.0, Redis Software includes multiple feature sets, compatible with different Redis database versions.
- However, if you want to use additional modules or upgrade a module to a more recent version, you need to:
- 1. [Install a module package]() on the cluster.
- 1. [Enable a module]() for a new database or [upgrade a module]() in an existing database.
- Databases created with or upgraded to Redis version 8 or later automatically enable the capabilities (modules) bundled with Redis Software as follows:

## Install a module on a cluster
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-install-add-module-to-cl-faf1116575.md`
- [Redis Software]() comes packaged with several modules that provide additional Redis capabilities such as [search and query](), [JSON](), [time series](), and [probabilistic data structures](). As of version 8.0, Redis Software includes multiple feature sets, compatible with different Redis database versions. You can view the installed modules, their versions, and their minimum compatible Redis database versions from **Cluster > Modules** in the Cluster Manager UI.
- To use other modules or upgrade an existing module to a more recent version, you need to install the new module package on your cluster.
- Some module versions are not supported or recommended for use with Redis Software.
- The module must be packaged as a `.zip` file containing:
- To install or upgrade a module on a [Redis Software]() cluster, you need a module package.

## Enable a module for a database
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-install-add-module-to-da-d14f979e52.md`
- Modules add additional functionality to Redis databases for specific use cases. You can enable modules when you create a database.
- Databases created with or upgraded to Redis version 8 or later automatically enable the capabilities (modules) bundled with Redis Software as follows:
- You can only add modules to a database when you first create it. You cannot add modules to an existing database.
- In the Redis Software Cluster Manager UI, follow these steps to add modules to a database:
- 1. From the **Databases** screen, select **Quick database** or **Create database**.

## Upgrade modules
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-install-upgrade-module-27756b3e4b.md`
- Upgrade a module in Redis Software to get the latest features and fixes.
- Before you upgrade a module enabled in a database, [install the new version of the module on the cluster]().
- After you install an updated module on the cluster, you can upgrade databases to use the new module version.
- After you upgrade the module for a database, the database shards restart. This causes a short interruption in the availability of this database across the cluster.
- To upgrade a module enabled for a database:

## RedisBloom 1.0 release notes
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-release-notes-redisbloom-0629d6cc84.md`
- This contains a single fix, issue #[19](https://github.com/RedisBloom/RedisBloom/issues/19).
- From this version onwards, `EXISTS`/`MEXISTS` returns 0 if the (Redis) key does not exist in the database.  Earlier versions returned an error.
- This fixes a build issue (fixed s3 config in circle yaml).
- This is the first GA release of ReBloom.

## RedisBloom 1.1 release notes
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-release-notes-redisbloom-1eb58f3ca3.md`

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

## RedisBloom release notes
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-release-notes-redisbloom-ae73a840c4.md`

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

## RediSearch 1.1 release notes
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-release-notes-redisearch-4be98bfdbf.md`
- This is a major version (we almost named it 2.0), which includes months of work, mostly on the brand new aggregations engine.
- Aggregations are a way to process the results of a search query, group, sort and transform them - and extract analytic insights from them. Much like aggregation queries in other databases and search engines, they can be used to create analytics report, or to perform Faceted Search style queries.
- For example, indexing a web-server's logs, we can create report for unique users by hour. Suppose our schema includes the **SORTABLE** fields `timestamp` (Unix-timestamp) and `userId`:
- See [the full documentation on aggregations for more details](http://redisearch.io/Aggregations/)

## RediSearch 2.10 release notes
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-release-notes-redisearch-68b52a82a6.md`
- This is a maintenance release for RediSearch 2.10.
- Update urgency: `LOW`: No need to upgrade unless there are new features you want to use.
- Full Changelog: https://github.com/RediSearch/RediSearch/compare/v2.10.24...v2.10.25
- This is a maintenance release for RediSearch 2.10.
- Update urgency: `LOW`: No need to upgrade unless there are new features you want to use.

## RediSearch 1.2 release notes
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-release-notes-redisearch-8b31a34692.md`
- This version is the last version that I (@dvirsky) will be releasing, and it includes a lot of new cool features, and actually NO bug-fixes over 1.1.0! So long and thanks for all the fish!
- As an addition to the aggregation API in `FT.AGGREGATE`, it is possible to do post-index filtering of the pipeline, using the `FILTER` keyword. e.g.:
- See [http://redisearch.io/Aggregations/](http://redisearch.io/Aggregations/) for more details.
- It is now possible to apply specific query modifying attributes to specific clauses of the query (see #[212](https://github.com/RediSearch/RediSearch/issues/212)).
- The syntax is `(foo bar) => { $attribute: value; $attribute:value; ...}`, e.g:

## RediSearch 1.0 release notes
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-release-notes-redisearch-a2ef1b1cb9.md`
- This is a bug-fix release with some stability fixes, a few processing bug fixes, and a few small additions:
- This is a maintenance release from the 1.0 branch, that does not yet contain the aggregation engine that's already in master. It includes a few small fixes and API additions that were backported from master.
- RediSearch can now sort the search result by the inverse Hamming Distance between document payloads and the query payloads (provided they are both the same length). This can be used as a nearest neighbor search ranking when a feature vector is encoded as a bitmap and the distance metric is Hamming distance.
- It's now possible to search for just `*`, scanning all the documents in the index. This is useful in conjunction with the Hamming Distance scorer.
- Up until now, FT.DEL did not delete the Hash key containing the actual document. As of this version, you can call it with an optional DD (Delete Document) argument, and it will also delete the document.

## RediSearch 2.8 release notes
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-release-notes-redisearch-b7424deb0d.md`
- This is a maintenance release for RediSearch 2.8.
- Update urgency: `LOW`: No need to upgrade unless there are new features you want to use.
- Full Changelog: https://github.com/RediSearch/RediSearch/compare/v2.8.31...v2.8.32
- This is a maintenance release for RediSearch 2.8.
- Update urgency: `LOW`: No need to upgrade unless there are new features you want to use.

## RediSearch release notes
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-release-notes-redisearch-c417768894.md`

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

## RedisGears release notes
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-release-notes-redisgears-0c69c36007.md`

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

## RedisGraph 1.2 release notes
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-release-notes-redisgraph-8d6371f8c0.md`
- This is a maintenance release for version 1.2.
- This release improves overall stability and provides fixes for issues found after the previous release.

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

## RedisGraph release notes
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-release-notes-redisgraph-e2c7056850.md`
- Redis, Inc. has announced the end of life for RedisGraph. We will carry out the process gradually and in accordance with our commitment to our customers. See [details](https://redis.com/blog/redisgraph-eol/).
- {{< table-children columnNames="Version&nbsp;(Release&nbsp;date)&nbsp;,Major&nbsp;changes,Min&nbsp;Redis<br/>version,Min&nbsp;cluster<br/>version" columnSources="LinkTitle,Description,min-version-db,min-version-rs" enableLinks="LinkTitle" >}}

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

## RedisJSON 2.2 release notes
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-release-notes-redisjson--8eab274a04.md`
- A preview of RedisJSON 2.2 is available for Free and Fixed subscription plans in Redis Cloud.
- This release adds support for the JSON data structure as a CRDT (Conflict-free Replicated Data Type) when used with Redis Enterprise [Active-Active databases](active-active/).
- Active-Active JSON requires Redis Enterprise Software v6.2.12. Contact your account manager or support to access the preview of RedisJSON 2.2.

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

## RedisJSON release notes
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-release-notes-redisjson-868923859b.md`

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

## RedisTimeSeries 1.12 release notes
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-release-notes-redistimes-6132d41cb9.md`
- This is a maintenance release for RedisTimeSeries 1.12.
- Update urgency: `MODERATE`: Program an upgrade of the server, but it's not urgent.
- This is a maintenance release for RedisTimeSeries 1.12.
- Update urgency: `MODERATE`: Plan an upgrade of the server, but it's not urgent.
- This is a maintenance release for RedisTimeSeries 1.12.

## RedisTimeSeries 1.2 release notes
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-release-notes-redistimes-74b5af8dd1.md`
- This is a maintenance release for version 1.2.
- This is a maintenance release for version 1.2.
- This is the general availability (GA) release of RedisTimeSeries 1.2 (1.2.2).
- (we will blog about this release soon including performance improvements results and the link here)
- Alternatively, you can reconstruct similar behaviour by

## RedisTimeSeries release notes
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-release-notes-redistimes-96e9a0b990.md`

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

## Search and query
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-search-2a4c3dee67.md`
- When combined with Redis Software, you can use the same protocols and [commands]()
- to run geo-replicated queries and full-text searches over efficient in-memory indexes.
- The search and query engine indexes documents, which are objects that represent data as field-value pairs. You can index more than one field per document, and these fields can represent text, numeric, or geospatial data types.
- As the documents in your database change, the index automatically processes these changes to keep the search results up to date.
- You can store documents as Redis [hashes]() or [JSON](). To search and query JSON documents, you also need to enable [JSON]() in your database.

## Search and query configuration compatibility with Redis Software
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-search-config-43a157bc2e.md`
- To configure RediSearch in [Redis Software]() or [Redis Cloud](), use one of the following methods instead of [`FT.CONFIG SET`]().
- For Redis Software, use one of the following methods:
- 1. From the **Databases** list, select the database, then click **Configuration**.
- 1. In the **Capabilities** section, click **Parameters**.
- 1. Enter the setting name and setting value in the **RediSearch** box.

## Configure the query performance factor for Redis Search in Redis Software
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-search-query-performance-b467ba45b8.md`
- Query performance factors are intended to increase the performance of queries, including [vector search](). When enabled, it allows you to increase a database's compute capacity and query throughput by allocating more virtual CPUs per shard. This is in addition to horizontal scaling with more shards which enables a higher throughput of key value operations. This document describes how to configure the query performance factor.
- Some use cases might not scale effectively. Redis experts can help determine if vertical scaling with Redis Search will boost performance for your use case and guide you on whether to use vertical scaling, horizontal scaling, or both.
- Redis Search requires a cluster running Redis Software version 7.4.2-54 or later. For the simplified configuration experience (no shard restart required, new UI, and new REST API), Redis Software version 8.x or later is required.
- If you do not have a cluster that supports Redis Search, [install Redis Software]() version 7.4.2-54 or later on a new cluster, or [upgrade an existing cluster]().
- 1. Calculate the hardware requirements for your Redis database:

## Upgrade a database to SearchÂ 2.x
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-search-redisearch-2-upgr-1e6de87691.md`
- The main change is that RediSearch 2.x stores indexes outside of the Redis database that contains the data.
- This makes commands more efficient and improves replication between clusters because the index changes are managed by the participating clusters rather than being synchronized with the data.
- This change allows databases with RediSearch to support:
- In addition, RediSearch 2.x indexes data that already existed in the database at the time that the index was created.
- To upgrade a Redis Software database with RediSearch 1.x to RediSearch 2.x, you have to set up a new database with RediSearch 2.x and use the `RediSearch_Syncer.py` script to replicate the data from the old database into the new database.

## Time series
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-timeseries-478790725f.md`
- A time series is a linked list of memory chunks.
- Each chunk has a predefined size of samples.
- Each sample is a tuple of the time and the value of 128 bits,
- 64 bits for the timestamp and 64 bits for the value.
- Redis Open Source provides a new data type that uses chunks of memory of fixed size for time series samples, indexed by the same Radix Tree implementation as Redis streams. With streams, you can create [a capped stream](), effectively limiting the number of messages by count. For time series, you can apply a retention policy in milliseconds. This is better for time series use cases, because they are typically interested in the data during a given time window, rather than a fixed number of samples.

## Time series configuration compatibility with Redis Software
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-timeseries-config-ed4034bea3.md`
- [Redis Software]() lets you manually change any [RedisTimeSeries configuration setting](configuration/#redistimeseries-configuration-parameters).
- To change RedisTimeSeries configuration using the Redis Software Cluster Manager UI:
- 1. From the **Databases** list, select the database, then click **Configuration**.
- 1. In the **Capabilities** section, click **Parameters**.
- 1. After you finish editing the module's configuration parameters, click **Done** to close the parameter editor.

## Database backup and import
Source file: `raw/sources/20260409-docs-latest-operate-rc-api-examples-back-up-and-import-data-5bc9221eb6.md`
- When you create or update a database, you can specify the (optional) `periodicBackupPath` parameter
- This parameter enables periodic and on-demand backup operations for the specified database.
- The number of database backups that can run simultaneously on a cluster is limited to 4 by default.
- For Redis Cloud Pro databases, back up a database with [`POST /subscriptions/{subscriptionId}/databases/{databaseId}/backup`](). For Redis Cloud Essentials databases, use [`POST /fixed/subscriptions/{subscriptionId}/databases/{databaseId}/backup`]().
- On-demand database backup is an [asynchronous operation]().

## The API request lifecycle
Source file: `raw/sources/20260409-docs-latest-operate-rc-api-get-started-process-lifecycle-7fbd40d06b.md`
- [Once it's enabled](), you can use the REST API to create, update, and delete subscriptions, databases, and other entities.
- All create, update, and delete API operations (`POST`, `PUT`, and `DELETE`) and some query operations (`GET`) run asynchronously, which means that provisioning or processing occurs in the background.  When you submit a request, a background process, known as a **Task**, starts working on it.  The response object includes an ID that lets you determine the status of the background process as it works.
- For operations that do not create or modify resources or do not require additional processing (such as most GET operations), the API is synchronous; that is, the response object reports the results of the request.
- Asynchronous operations have two main phases: processing and provisioning.  A resource is not available until both phases are complete.
- During this phase, the request is received, evaluated, planned, and executed.

## Redis Cloud changelog (June 2023)
Source file: `raw/sources/20260409-docs-latest-operate-rc-changelog-2023-june-2023-331ad2f8fc.md`
- This changelog lists new features, enhancements, and other changes added to Redis Cloud during June 2023.
- You can opt in to Redis 7.2 on [Fixed subscriptions]() in selected regions in AWS and GCP. Redis 7.2 introduces several changes to existing Redis commands; see the [list of breaking changes](#redis-72-breaking-changes) for more details.
- Your Active-Active databases will now appear in the database list when you export it to a CSV file. To support this, we added a "Region" column to differentiate between  Active-Active databases with the same name.
- To export your database list to a CSV file, select **Export all** on the **Databases** screen.

## Redis Cloud changelog (March 2023)
Source file: `raw/sources/20260409-docs-latest-operate-rc-changelog-2023-march-2023-314240d366.md`
- This changelog lists new features, enhancements, and other changes added to Redis Cloud during March 2023.
- A preview of Redis 7.0 is available for [Fixed subscriptions]() in selected regions in AWS and GCP. However, some Redis 7.0 functionality might not be fully available during preview. Redis 7.0 also introduces several changes to existing Redis commands; see the [list of breaking changes](#redis-70-breaking-changes) for more details.
- The following tables show which new open source Redis 7.0 commands are supported in Redis 7.0 subscriptions.
- | <span style="min-width: 10em; display: table-cell">Command</span> | Supported |
- | [CLUSTER ADDSLOTSRANGE]() | <span title="Not supported">&#x274c; Not supported</span> |

## Redis Cloud changelog (July 2024)
Source file: `raw/sources/20260409-docs-latest-operate-rc-changelog-2024-july-2024-9227cf0667.md`
- When you create a Pro database with [Search and query]() capabilities, you can now choose to boost your query capabilities with the Query performance factor. The query performance factor adds dedicated power specifically for Search and query. For more information, see [Search and query sizing]().
- You can take advantage of extra query speed for free during the preview period.
- The query performance factor is available for Redis Cloud Pro databases on Redis 7.2 and later.
- A preview of Redis 7.4 is now available on [Redis Cloud Essentials databases]() in select regions on Amazon Web Services and Google Cloud.
- Redis 7.4 offers hash field expiration and other feature set improvements. For more information on the changes in Redis 7.4, see the [Redis 7.4 release blog post](https://redis.io/blog/announcing-redis-community-edition-and-redis-stack-74).

## Redis Cloud changelog (January 2026)
Source file: `raw/sources/20260409-docs-latest-operate-rc-changelog-january-2026-c24af2de24.md`
- Redis 8.4 is now available for [Redis Cloud Essentials databases]() in select regions.
- Redis 8.4 builds on the foundation of Redis 8.2 with significant enhancements to cluster operations, string manipulation, and stream processing capabilities. For more information on the changes in Redis 8.4, see [What's new in Redis 8.4]() and review the Redis Open Source [8.4 release notes]().

## Redis Cloud changelog (June 2025)
Source file: `raw/sources/20260409-docs-latest-operate-rc-changelog-june-2025-d10d319019.md`
- Users with Redis Cloud Pro databases can now choose to block public endpoints for all databases in their subscription. See [Block public endpoints]() for more information.
- You can now create a free database from the [Create a database]() page. Free databases are perfect for learning and exploring Redis. You get 30 MB of space for you to learn Redis concepts and develop application prototypes.
- You can only have one free database per account. If you already have a free database, you can [delete it]() or [upgrade it to a paid Essentials plan]() before creating a new one.
- Starting June 24, 2025, accounts with the [Redis hashing policy]() can create databases that scale faster. This makes resharding operations up to 40% faster than before.
- Faster scaling requires a new database created after June 24, 2025, running Redis 7.4 or later, with the [Redis hashing policy]() selected.

## Redis Cloud changelog (March 2025)
Source file: `raw/sources/20260409-docs-latest-operate-rc-changelog-march-2025-db57049e16.md`
- Users with select Redis Cloud Essentials databases can now open a browser-based version of [Redis Insight]() directly from Redis Cloud. See [Connect to your database]() to learn how to open Redis Insight from Redis Cloud.
- This browser-based version of Redis Insight has a subset of the features of Redis Insight on desktop. For more information, see [Open with Redis Insight on Redis Cloud]().
- Accounts created after March 31, 2025, can select the new [Redis hashing policy]() for their databases when creating a new database.
- The Redis hashing policy is identical to the [hashing policy used by Redis Community Edition](). This policy is recommended for most users. Select it if any of the following conditions apply:
- See [Clustering]() for more information.

## Redis Cloud changelog (March 2026)
Source file: `raw/sources/20260409-docs-latest-operate-rc-changelog-march-2026-d13cf34c21.md`
- Passwordless authentication is now available for Redis Cloud Pro databases on subscriptions that have [blocked the public endpoint](). For more information, see [Turn on passwordless authentication for the default user]().
- Redis 8.4 is now available for [Redis Cloud Pro databases]() in select regions.
- Redis 8.4 builds on the foundation of Redis 8.2 with significant enhancements to cluster operations, string manipulation, and stream processing capabilities. For more information on the changes in Redis 8.4, see [What's new in Redis 8.4]() and review the Redis Open Source [8.4 release notes]().
- All Redis Cloud databases running Redis 8.4 and later will be automatically upgraded to the next minor version upon release. For example, all Redis 8.4 databases will be upgraded to Redis 8.6 when it is available on Redis Cloud.
- Redis Cloud Pro users can opt out of minor version auto-upgrades. See [Version management]() for more details.

## Redis 8.2 release notes and breaking changes
Source file: `raw/sources/20260409-docs-latest-operate-rc-changelog-version-release-notes-8-2-e5a1edf61b.md`
- Redis 8.2 builds on the foundation of Redis 8.0 with significant performance and memory optimizations, enhanced streaming capabilities, and improved cluster management tools. For more information on the changes in Redis 8.2, see [What's new in Redis 8.2]() and review the Redis Open Source [8.2 release notes]().
- When new versions of Redis Open Source change existing commands, upgrading your database to a new version can potentially break some functionality. Before you upgrade, read the provided list of breaking changes that affect Redis Cloud and update any applications that connect to your database to handle these changes.
- If you are upgrading from Redis 7.4, review the [Redis 8.0 breaking changes]() before upgrading.
- If you use the [Redis Cloud Terraform provider]() versions 2.1.2 through 2.4.5 with Redis 8.2 databases, database creation will fail. This issue only affects the Terraform provider and does not impact existing databases or data.
- To resolve this issue, upgrade to the [latest supported version](https://registry.terraform.io/providers/RedisLabs/rediscloud/latest) and run `terraform init -upgrade`.

## Redis 8.4 release notes and breaking changes
Source file: `raw/sources/20260409-docs-latest-operate-rc-changelog-version-release-notes-8-4-648c5a4ee0.md`
- Redis 8.4 builds on the foundation of Redis 8.2 with significant enhancements to cluster operations, string manipulation, and stream processing capabilities.. For more information on the changes in Redis 8.4, see [What's new in Redis 8.4]() and review the Redis Open Source [8.4 release notes]().
- When using Redis 8.4, be aware of these current limitations:

## Redis Cloud compatibility with Redis Open Source
Source file: `raw/sources/20260409-docs-latest-operate-rc-compatibility-4ee5444c85.md`
- Both [Redis Software]() and Redis Cloud are compatible with Redis Open Source.
- Redis Software and Redis Cloud support RESP2 and RESP3. In Redis Cloud, you can choose between RESP2 and RESP3 when you [create a database]() and you can change it when you [edit a database](). For more information about the different RESP versions, see the [Redis serialization protocol specification](#resp-versions).
- Redis Software and Redis Cloud support [client-side caching]() for databases with Redis versions 7.4 or later. See [Client-side caching compatibility with Redis Software and Redis Cloud]() for more information about compatibility.
- Redis Cloud supportsÂ [Redis Cluster API]() on Redis Cloud Pro if it is enabled for a database. Review [Redis Cluster API architecture]() to determine if you should enable this feature for your database.

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

## Create an Active-Active database
Source file: `raw/sources/20260409-docs-latest-operate-rc-databases-active-active-create-active-active-database-d23d291300.md`
- Active-Active databases store data across multiple regions and availability zones.  This improves scalability, performance, and availability, especially when compared to standalone databases. See [Active-Active Redis]() for more information.
- To deploy Active-Active databases in Redis Cloud, you need a Redis Cloud Pro plan that enables Active-Active Redis and defines the regions for each copy of your databases.
- Active-Active databases consist of multiple copies (also called _instances_) deployed to different regions throughout the world.
- This reduces latency for local users and improves availability should a region fail.
- Redis Cloud maintains consistency among instances in the background; that is, each copy eventually includes updates from every region.  As a result, memory limit and throughput increase.

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

## Back up and export a database
Source file: `raw/sources/20260409-docs-latest-operate-rc-databases-back-up-data-d57d303a7d.md`
- The backup options for Redis Cloud databases depend on your plan:
- The number of database backups that can run simultaneously on a subscription is limited to 4 by default.
- Backups are saved to predefined storage locations available to your subscription. Backup locations need to be available before you turn on database backups.  To learn more, see [Set up backup storage locations](#set-up-backup-storage-locations).
- Backups are saved in RDB format. If the database is comprised of multiple shards, an RDB file will be created for each shard of the database. For more information on restoring data from a backup, see [Restore from an RDB file]().
- Here, you'll learn how to store backups using different cloud providers.

## Clustering Redis Databases
Source file: `raw/sources/20260409-docs-latest-operate-rc-databases-configuration-clustering-667f563165.md`
- Multiple shards should be used when data grows to 25 GB (50 GB for Auto Tiering) to create multiple shards.
- Clustering distributes operational load, whether to instances on the same server or across multiple servers.
- This distribution is called _clustering_ because it manages the way data is distributed throughout the cluster of nodes that support the database.
- A Redis Cloud cluster is a set of managed Redis processes and cloud instances,
- with each process managing a subset of the database keyspace.

## High availability and replication
Source file: `raw/sources/20260409-docs-latest-operate-rc-databases-configuration-high-availability-5c8f8ee690.md`
- Database replication helps ensure high availability.
- When replication is enabled, your dataset is duplicated to create a replica that is synchronized with the primary dataset.
- Replication allows for automatic failover and greater fault tolerance.  It can prevent data loss in the event of a hardware or zone failure.
- Redis Cloud supports three levels of replication:
- Your replication options depend on your [subscription plan]():

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

## Develop highly available and resilient apps with Redis Cloud
Source file: `raw/sources/20260409-docs-latest-operate-rc-resilient-apps-0dec2cec19.md`
- You can set up your Redis Cloud databases and Redis Client libraries to ensure your app re-connects to your database after unexpected failover events or network outages and minimize data losses.
- These settings can be turned on when you create or edit your database.
- Enabling [Data persistence]() allows Redis to save your data to a durable storage medium, such as a disk, to ensure data availability in case of memory loss or system failure.
- Redis Cloud supports the following data persistence options:
- Append-only files provide greater protection than snapshots at the cost of resources and recovery time.

## Enable Role-based access control
Source file: `raw/sources/20260409-docs-latest-operate-rc-security-access-control-data-access-control-role-based-ac-0cb615259d.md`
- Role-based access control (RBAC) lets you define *roles* with specific sets of *permissions*. You can then assign *users* to these roles
- to provide appropriate levels of access.
- RBAC effectively lets you implement the [principle of least privilege](https://en.wikipedia.org/wiki/Principle_of_least_privilege). For example, you can provide
- read-only access to an application whose only job is to display Redis data. Similarly, you can prevent new developers from running dangerous administrative commands.
- To set up RBAC, first navigate to the **Data Access Control** screen.

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

## Redis Cloud Bring your own Cloud
Source file: `raw/sources/20260409-docs-latest-operate-rc-subscriptions-bring-your-own-cloud-594c126eac.md`
- Redis Cloud Bring your own Cloud (BYOC) allows organizations to use their own cloud infrastructure to deploy Redis Cloud.
- By default, Redis hosts the infrastructure that runs Redis Cloud. However, if your organization has specific requirements, you may need to have more control over your data residency or security options. Redis Cloud BYOC lets you fulfill these requirements while still having a fully managed service experience of Redis Cloud. Like standard Redis Cloud, Redis manages deployment, scaling, monitoring, and support, so you can focus on building applications while Redis manages the backend.
- Redis Cloud BYOC availability requires approval from Redis. If you're interested, [contact sales](https://redis.io/meeting/).
- Redis Cloud BYOC has some benefits over standard Redis Cloud:
- Consider using Redis Cloud BYOC if you have specific organizational needs or requirements, such as:

## Create IAM resources using AWS console
Source file: `raw/sources/20260409-docs-latest-operate-rc-subscriptions-bring-your-own-cloud-iam-resources-aws-cons-b3e91fac49.md`
- We use the provided credentials to configure your AWS environment and provision required resources.
- You **must not** change the configurations of provisioned resources or stop or terminate provisioned instances. If you do, your databases will be inaccessible and Redis will not be able to ensure database stability. See [Avoid service disruption]() for more details.
- The IAM instance policy controls the permissions for the instances that Redis Cloud creates in your AWS account.
- Follow the steps to [create an IAM policy using the JSON editor](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_create-console.html#access_policies_create-json-editor) with the following settings:
- Select **Create policy** to finish policy creation.

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

## Install on Kubernetes
Source file: `raw/sources/20260409-docs-latest-operate-redisinsight-install-install-on-k8s-cf4c081573.md`
- This is an easy way to use Redis Insight with a [Redis Enterprise K8s deployment]().
- Below is an annotated YAML file that will create a Redis Insight
- deployment and a service in a K8s cluster.
- 1. Create a new file named `redisinsight.yaml` with the content below.
- 2. Create the Redis Insight deployment and service:

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

## Add a node
Source file: `raw/sources/20260409-docs-latest-operate-rs-clusters-add-node-8d13f6acd3.md`
- After you install the first node, you can add more nodes to the cluster.
- If the clock in the node you are trying to join to the cluster is not synchronized with the nodes already in the cluster,
- the action fails and an error message is shown indicating that you must synchronize the clocks first.
- to avoid errors that occur because the connection to the other nodes in the cluster cannot be verified.
- 1. [Install the Redis Software installation package]() on a clean installation

## Change node roles
Source file: `raw/sources/20260409-docs-latest-operate-rs-clusters-change-node-role-7eface6a4e.md`
- A Redis Software cluster contains a primary node, which coordinates cluster-wide management operations, and multiple secondary nodes. Nodes with either role can host database shards.
- To demote the primary node to a secondary node using the Cluster Manager UI:
- 1. On the **Nodes** screen, click the **More actions** button (**&vellip;**) for the primary node you want to demote.
- <img src="../../../../images/rs/screenshots/nodes/primary-node-more-actions.png" alt="Click the more actions button for a node to access node actions.">
- 1. Select **Set as a secondary node** from the list.

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

## Rack-zone awareness in Redis Software
Source file: `raw/sources/20260409-docs-latest-operate-rs-clusters-configure-rack-zone-awareness-da29d24f56.md`
- When you enable rack-zone awareness in a Redis Software cluster, you assign
- a [rack-zone ID](#rack-zone-id-rules) to each node. This ID is used to map the node to a
- physical rack or logical zone. The cluster can then ensure that primary shards, corresponding replica shards, and associated endpoints are placed on [nodes in different racks or zones](#node-layout-guidelines).
- In the event of a rack or zone failure, the replicas and endpoints in the remaining racks and zones are promoted. This ensures high availability when a rack or zone fails.
- There is no limitation on the number of racks and zones per cluster. Each

## Smart client handoffs
Source file: `raw/sources/20260409-docs-latest-operate-rs-clusters-configure-sch-ce8124a9ba.md`
- Smart client handoffs (SCH) is a feature of Redis Cloud and Redis Software servers that lets them actively notify clients about planned server maintenance shortly before it happens. This lets a client reconnect or otherwise respond gracefully without significant interruptions in service.
- See [Smart client handoffs]() for more information about SCH.
- SCH is supported only for [rolling upgrades]().
- To enable SCH on a Redis Software server, you must use the
- REST API request to set the `client_maint_notifications` option to `true`.

## Synchronize cluster node clocks
Source file: `raw/sources/20260409-docs-latest-operate-rs-clusters-configure-sync-clocks-43210792a5.md`
- make sure that the clocks on all of the cluster nodesÂ are synchronized using Chrony and/or NTP.
- the install script checks if Chrony or NTP is running.
- If they are not, the installation process asks for permission to configure a scheduled Cron job.
- This should make sure that the node's clock is always synchronized.
- If you did not confirm configuring this job during the installation process,

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

## Set up a new cluster
Source file: `raw/sources/20260409-docs-latest-operate-rs-clusters-new-cluster-setup-e17307141a.md`
- For production deployments, we recommend an uneven number of nodes, with a minimum of three.
- In a cluster that consists of only one node, some features and capabilities are not enabled,
- such as database replication that provides high availability.
- To set up a new cluster, you must first [install the Redis Software package]()
- and then set up the cluster as described below.

## Optimize clusters
Source file: `raw/sources/20260409-docs-latest-operate-rs-clusters-optimize-b364e5eae2.md`

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

## Turn off services to free system memory
Source file: `raw/sources/20260409-docs-latest-operate-rs-clusters-optimize-turn-off-services-63a8c6c5ef.md`
- In most deployments, either all of these services are required,
- or there are enough memory resources on the nodes for the database requirements.
- In a deployment with limited memory resources, certain services can be disabled from API endpoint to free system memory or using the `rladmin` command.
- Before you turn off a service, make sure that your deployment does not depend on that service.
- After you turn off a service, you can re-enable in the same way.

## Remove a node
Source file: `raw/sources/20260409-docs-latest-operate-rs-clusters-remove-node-402ad45ba4.md`
- You can configure [email alerts from the cluster]() to notify you of cluster changes, including when a node is removed.
- Read through these explanations thoroughly before taking
- Permanently removing a node means you are decreasing cluster capacity.
- Before trying to remove a node, make sure that the cluster has enough
- capacity for all resources without that node, otherwise you cannot remove the node.

## Replace a cluster node
Source file: `raw/sources/20260409-docs-latest-operate-rs-clusters-replace-node-b7062d287e.md`
- 1. Prepare a new node identical to the old one.
- configure Redis Software on the node. See [Install and setup]() for more information.
- If you are using [Redis Flex or Auto Tiering](), make sure the required flash storage is set up on this new node.
- 1. [Add the node]() to the cluster. Make sure the new node has as much available memory as the faulty
- If the new node does not have enough memory, you will be prompted to add a node with enough memory.

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

## Connect to your Active-Active databases
Source file: `raw/sources/20260409-docs-latest-operate-rs-databases-active-active-connect-eecf5b9027.md`
- With the Redis database created, you are ready to connect to your
- database to store data. You can use one of the following ways to test
- Remember we have two member Active-Active databases that are available for connections and
- concurrent reads and writes. The member Active-Active databases are using bi-directional
- replication to for the global Active-Active database.

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

## Configure distributed synchronization
Source file: `raw/sources/20260409-docs-latest-operate-rs-databases-active-active-synchronization-mode-edd1512ef3.md`
- use proxy endpoints to synchronize database changes with the databases on other participating clusters.
- To improve the throughput and lower the latency for synchronization traffic,
- you can configure a replicated database to use distributed synchronization where any available proxy endpoint can manage synchronization traffic.
- Every database by default has one proxy endpoint that manages client and synchronization communication with the database shards,
- and that proxy endpoint is used for database synchronization.

## Configure database settings
Source file: `raw/sources/20260409-docs-latest-operate-rs-databases-configure-6babd63b98.md`
- You can manage your Redis Software databases with several tools:
- You can change the configuration of a Redis Software database at any time.<!--more-->
- To edit the configuration of a database using the Cluster Manager UI:
- 1. On the **Databases** screen, select the database you want to edit.
- 1. From the **Configuration** tab, select **Edit**.

## Configure database defaults
Source file: `raw/sources/20260409-docs-latest-operate-rs-databases-configure-db-defaults-29bcb6e552.md`
- Database defaults are cluster-wide policies that determine default settings when creating new databases.
- To edit default database configuration using the Cluster Manager UI:
- 1. On the **Databases** screen, select  to open a list of additional actions.
- 1. Configure [database defaults](#db-defaults).
- You can choose a predefined endpoint configuration to use the recommended database proxy and shards placement policies for your use case. If you want to set these policies manually instead, select **Custom** endpoint configuration.

## Manage database tags
Source file: `raw/sources/20260409-docs-latest-operate-rs-databases-configure-db-tags-77dcfb8117.md`
- You can create custom tags to categorize databases in a Redis Software cluster.
- The **Databases** screen shows tags for each database in the list.
- You can add tags when you [create a database]() or [edit an existing database's configuration]().
- To add tags to a database using the Cluster Manager UI:
- 1. While in edit mode on the database's configuration screen, click **Add tags**.

## Change database upgrade configuration
Source file: `raw/sources/20260409-docs-latest-operate-rs-databases-configure-db-upgrade-3b91a5ec38.md`
- Database upgrade configuration includes cluster-wide policies that affect default database upgrades.
- To edit database upgrade configuration using the Cluster Manager UI:
- 1. On the **Databases** screen, select  to open a list of additional actions.
- 1. Change database [upgrade configuration settings](#upgrade-config-settings).
- To change the number of shards upgraded in parallel during database upgrades, use one of the following methods:

## Enable OSS Cluster API
Source file: `raw/sources/20260409-docs-latest-operate-rs-databases-configure-oss-cluster-api-4210614df7.md`
- Review [OSS Cluster API]() to determine if you should enable this feature for your database.
- The OSS Cluster API is supported only when a database meets specific criteria.
- The OSS Cluster API setting applies to individual databases instead of the entire cluster.
- For Kubernetes deployments, see [Enable cluster-aware clients (OSS Cluster API)]().
- You can use the Cluster Manager UI, the `rladmin` utility, or the REST API to enable OSS Cluster API support for a database.

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

## Configure shard placement
Source file: `raw/sources/20260409-docs-latest-operate-rs-databases-configure-shard-placement-fc54f7585a.md`
- Master shards and their corresponding replica shards are always placed on separate nodes for data resiliency.
- The [shard placement policy]() helps to maintain optimal performance and resiliency.
- When you create a new cluster, the cluster configuration has a `dense` default shard placement policy.
- When you create a database, this default policy is applied to the new database.
- To see the current default shard placement policy, run `rladmin info cluster`:

## Connect to a database
Source file: `raw/sources/20260409-docs-latest-operate-rs-databases-connect-eb8d2f8219.md`
- After you [set up a cluster]() and [create a Redis database](), you can connect to your database.
- To connect to your database, you need the database endpoint, which includes the cluster name (FQDN) and the database port. To view and copy public and private endpoints for a database in the cluster, see the databaseâs **Configuration > General** section in the Cluster Manager UI.
- If you try to connect with the FQDN, and the database does not respond, try connecting with the IP address. If this succeeds, DNS is not properly configured. To set up DNS, see [Configure cluster DNS]().
- If you want to secure your connection, set up [TLS]().
- Use one of the following connection methods to connect to your database:

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

## Troubleshooting pocket guide for Redis Software
Source file: `raw/sources/20260409-docs-latest-operate-rs-databases-connect-troubleshooting-guide-f25d113e2e.md`
- If your client or application cannot connect to your database, verify the following.
- 1. Run the [`free`](https://man7.org/linux/man-pages/man1/free.1.html) command to check memory usage:
- 1. Used CPU should be less than `80%`. To check CPU usage, use `top` or `vmstat`.
- Run [`top`](https://man7.org/linux/man-pages/man1/top.1.html):
- Run [`vmstat`](https://man7.org/linux/man-pages/man8/vmstat.8.html):

## Create a Redis Software database
Source file: `raw/sources/20260409-docs-latest-operate-rs-databases-create-356502613a.md`
- To create a new database using the Cluster Manager UI:
- 1. Sign in to the Cluster Manager UI at `https://<hostname>:8443`
- 1. Use one of the following methods to create a new database:
- 1. If you did not specify a port number for the database, you can find the port number in the **Endpoint** field in the **Databases > Configuration > General** section.
- For databases with Active-Active replication for geo-distributed locations,

## Delete databases
Source file: `raw/sources/20260409-docs-latest-operate-rs-databases-delete-79037198d9.md`
- When you delete a database, both the database configuration and data are removed.
- To delete a database from the Cluster Manager UI:
- 1. From the **Databases** list, select the database, then select **Configuration**.
- 1. In the **Delete database** dialog, confirm deletion.

## Durability and high availability
Source file: `raw/sources/20260409-docs-latest-operate-rs-databases-durability-ha-7f699607a3.md`
- When you [replicate your database](), each database instance (primary shard) is copied to a replica shard. When a primary shard fails, the cluster automatically promotes a replica shard to primary.
- [Clustering]() (or sharding) breaks your database into individual instances (shards) and spreads them across several nodes. Clustering lets you add resources to your cluster to scale your database and prevents node failures from causing availability loss.
- [Database persistence]() gives your database durability against process or server failures by saving data to disk at set intervals.
- [Active-Active Redis Software databases]() allow reading and writing to the same dataset from multiple clusters in different geographic locations. This increases the durability of your database by reducing the likelihood of data or availability loss. It also reduces data access latency by serving requests from the nearest cluster.
- [Rack-zone awareness]() maps each node in your Redis Software cluster to a physical rack or logical zone. The cluster uses this information to distribute primary shards and their replica shards in different racks or zones. This ensures data availability if a rack or zone fails.

## Database clustering
Source file: `raw/sources/20260409-docs-latest-operate-rs-databases-durability-ha-clustering-8d46ed7d11.md`
- A single Redis process is bound by the CPU core that it is running on and available memory on the server.
- Redis Software supports database clustering to allow customers
- to spread the load of a Redis process over multiple cores and the RAM of multiple servers.
- A database cluster is a set of Redis processes where each process manages a subset of the database keyspace.
- The keyspace of a Redis Software cluster is partitioned into database shards.

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

## Redis Flex and Auto Tiering
Source file: `raw/sources/20260409-docs-latest-operate-rs-databases-flash-679f180bf8.md`
- Developers can build applications that require large datasets using the same Redis API.
- Using SSDs can significantly reduce the infrastructure costs compared to only DRAM deployments.
- Frequently used data, called hot data, belongs in the fastest memory level to deliver a real-time user experience.
- Data that is accessed less frequently, called warm data, can be kept in a slightly slower memory tier.
- Redis Flex maintains hot data in DRAM, keeps warm data in SSDs, and transfers data between tiers automatically.

## Redis Flex and Auto Tiering quick start
Source file: `raw/sources/20260409-docs-latest-operate-rs-databases-flash-quickstart-403922b66b.md`
- For production environments, you can find more detailed installation instructions in the [install and setup]() section.
- The steps to set up a Redis Software cluster using Redis Flex
- 1. Install Redis Software or run it in a Docker
- 1. Set up a Redis Software cluster withÂ Redis Flex.
- 1. Create a new database with Redis Flex enabled.

## Manage Auto Tiering storage engine
Source file: `raw/sources/20260409-docs-latest-operate-rs-databases-flash-storage-engine-53649b0132.md`
- Auto Tiering supports two storage engines:
- Switching between storage engines requires guidance by Redis Support or your Account Manager.
- 1. Change the cluster level configuration for default storage engine.
- 2. Restart the each database on the cluster one by one.
- We recommend restarting your database at times with low usage and avoiding peak hours. For databases without persistence enabled, we also recommend using export to backup your database first.

## Export data from a database
Source file: `raw/sources/20260409-docs-latest-operate-rs-databases-import-export-export-data-01768118e2.md`
- You can export the data from a specific database at any time.  The following destinations are supported:
- If you export a database configured for database clustering, export files are created for each shard.
- Before exporting data, verify that you have enough space available in the storage destination and on the local storage associated with the node hosting the database.
- Export is a two-step process: a temporary copy of the data is saved to the local storage of the node and then copied to the storage destination.  (The temporary file is removed after the copy operation.)
- Export fails when there isn't enough space for either step.

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

## Migrate a database to Active-Active
Source file: `raw/sources/20260409-docs-latest-operate-rs-databases-import-export-migrate-to-active-active-fcb730b042.md`
- If you have data in a single-region Redis Software database that you want to migrate to an [Active-Active database](),
- you'll need to create a new Active-Active database and migrate the data into the new database as a [Replica Of]() the existing database.
- This process will gradually populate the data in the Active-Active database.
- Before data migration starts, all data is flushed from the Active-Active database.
- The data is migrated to the Active-Active instance where you configured migration, and the data from that instance is copied to the other Active-Active instances.

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

## Replica Of Repeatedly Fails
Source file: `raw/sources/20260409-docs-latest-operate-rs-databases-import-export-replica-of-replicaof-repeatedly-f-c56816abec.md`
- **Diagnostic**: A log entry in the Redis log of the source database shows repeated failures and restarts.
- **Cause**: The Redis "client-output-buffer-limit" setting on the source database
- is configured to a relatively small value, which causes the connection drop.
- **Resolution**: Reconfigure the buffer on the source database to a bigger value:
- increase the replica buffer size of the **source database** with:

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

## Eviction policy
Source file: `raw/sources/20260409-docs-latest-operate-rs-databases-memory-performance-eviction-policy-259283f5e8.md`
- The eviction policy determines what happens when a database reaches its memory limit.
- To make room for new data, older data is _evicted_ (removed) according to the selected policy.
- To prevent this from happening, make sure your database is large enough to hold all desired keys.
- | **Eviction&nbsp;Policy** | **Description** |
- | Â noeviction | New values aren't saved when memory limit is reached<br/><br/>When a database uses replication, this applies to the primary database |

## Database memory limits
Source file: `raw/sources/20260409-docs-latest-operate-rs-databases-memory-performance-memory-limit-c6394148e6.md`
- database can reach in the cluster, across all database replicas and
- shards, including both primary and replica shards.
- If the total size of the database in the cluster reaches the memory
- Factors to consider when sizing your database:
- Additional factors for Active-Active databases:

## Shard placement policy
Source file: `raw/sources/20260409-docs-latest-operate-rs-databases-memory-performance-shard-placement-policy-d930f5e023.md`
- Master shards and their corresponding replica shards are always placed on separate nodes for data resiliency.
- The shard placement policy helps to maintain optimal performance and resiliency.
- In the dense policy, the cluster places the database shards on as few nodes as possible.
- When the node is not able to host all of the shards, some shards are moved to another node to maintain optimal node health.
- For example, for a database with two master and two replica shards on a cluster with three nodes and a dense shard placement policy,

## Migrate database shards
Source file: `raw/sources/20260409-docs-latest-operate-rs-databases-migrate-shards-782c3d6138.md`
- To migrate database shards to other nodes in the cluster, you can use the [`rladmin migrate`]() command or [REST API requests]().
- Migrate database shards to a different node in the following scenarios:
- For databases without replication, the migrated shard will not be available until the migration is done.
- Connected clients shouldn't be disconnected in either case.
- If too many primary shards are placed on the same node, it can impact database performance.

## Recover a failed database
Source file: `raw/sources/20260409-docs-latest-operate-rs-databases-recover-3664bf8e66.md`
- 1. [Restore the cluster configuration]() from the CCS files
- 1. Recover the databases with their previous configuration and data
- To restore data to databases in the new cluster,
- you must restore the database persistence files (backup, AOF, or snapshot files) to the databases.
- These files are stored in the [persistence storage location]().

## Install, set up, and upgrade Redis Software
Source file: `raw/sources/20260409-docs-latest-operate-rs-installing-upgrading-78cf1d900b.md`
- You can run self-managed Redis Software in an on-premises data center or on your preferred cloud platform.
- If you prefer a fully managed Redis database-as-a-service, available on major public cloud services, consider setting up a [Redis Cloud]() subscription. You can [try Redis Cloud](https://redis.io/try-free/) for free.
- If you want to try out Redis Software, see the following quickstarts:
- To install Redis Software on a [supported platform](), you need to:
- Depending on your needs, you may also want to [customize the installation](#more-info-and-options).

## Configure CentOS/RHEL firewall
Source file: `raw/sources/20260409-docs-latest-operate-rs-installing-upgrading-configuring-centos-rhel-firewall-cfa0becc3d.md`
- The default configuration assigns the network interfaces to the **public** zone and blocks all ports except port 22, which is used for [SSH](https://en.wikipedia.org/wiki/Secure_Shell).
- When you install Redis Software on CentOS or RHEL, it automatically creates two firewalld system services:
- These services are defined but not allowed through the firewall by default.
- During Redis Software installation, the [installer prompts]() you to confirm auto-configuration of a default (public) zone
- Although automatic firewall configuration simplifies installation, your deployment might not be secure if you did not use other methods to secure the host machine's network, such as external firewall rules or security groups.

## Change socket file locations
Source file: `raw/sources/20260409-docs-latest-operate-rs-installing-upgrading-configuring-change-location-socket-f-51fb631f44.md`
- There are two default locations for the socket files in Redis Software:
- The default location was changed in case you run any maintenance procedures that delete the `/tmp` directory.
- When you upgrade Redis Software from an earlier version to 5.2.2 or later, the socket files are not moved to the new location by default. You need to specify the socket file location [during installation](#during-install).
- To specify the socket file location during a new installation, follow the [Install Redis Software on Linux]() instructions, but use the `-s` [installation script option]():
- Directly changing the socket file location directly is not supported for bootstrapped nodes. If you need to change the socket file location for an existing cluster, use one of the following methods instead:

## Configure swap for Linux
Source file: `raw/sources/20260409-docs-latest-operate-rs-installing-upgrading-configuring-linux-swap-1be05045e2.md`
- copying pages from RAM to disk. Due to the way Redis Software
- utilizes and manages memory, it is best to prevent OS swapping. For more details,Â see [memory limits](). The
- recommendation is to turn off Linux swap completely in the OS.
- When you install or build the OS on the machine intended to host your Redis Software cluster, avoid configuring swap partitions if possible.
- To turn off swap in the OS of an existing server, VM, or instance, you

## Create a support package
Source file: `raw/sources/20260409-docs-latest-operate-rs-installing-upgrading-creating-support-package-4bace6fa83.md`
- and need to [contact Redis support](https://redis.io/support/) for assistance, you can [create a support package](#create-support-package) that gathers all essential information to help debug
- The process of creating the support package can take several minutes and generates load on the system.
- To create a support package from the Cluster Manager UI:
- 1. In the navigation menu, select **Support**.
- <img src="../../../../images/rs/screenshots/create-support-package/support-package-dialog.png" alt="Select Support from the navigation menu and create a support package.">

## Install Redis Software
Source file: `raw/sources/20260409-docs-latest-operate-rs-installing-upgrading-install-4862b74820.md`
- After you [plan your deployment](), [download a Redis Software installation package](), and finish [installation preparation]():
- 1. [Install the Redis Software package]() on one of the nodes in the cluster.
- 1. Repeat this process for each node in the cluster.
- For installation on machines without an internet connection, see [Offline installation]().
- Assigning other users to the `redislabs` group is optional. Users belonging to the `redislabs` group have permission to read and execute (e.g. use the `rladmin` status command) but are not allowed to write (or delete) files or directories.

## Customize installation directories
Source file: `raw/sources/20260409-docs-latest-operate-rs-installing-upgrading-install-customize-install-directorie-c507eff3fc.md`
- When you install Redis Software on Red Hat Enterprise Linux, you can customize the installation directories.
- The files are installed in the `redislabs` directory located in the path that you specify.
- | Files               | Installer flag | Example parameter | Example file location |
- | ------------------- | -------------- | ----------------- | --------------------- |
- | Binaries files      | --install-dir  | /opt              | /opt/redislabs        |

## Customize system user and group
Source file: `raw/sources/20260409-docs-latest-operate-rs-installing-upgrading-install-customize-user-and-group-620ea5ca5b.md`
- By default, Redis Software is installed with the user:group `redislabs:redislabs`.
- During installation, you can specify the user and group that own all Redis Software processes.
- To customize the user or group during [installation](), include the `--os-user` or `--os-group` [command-line options]() when you run the `install.sh` script.

## Install Redis Software on Linux
Source file: `raw/sources/20260409-docs-latest-operate-rs-installing-upgrading-install-install-on-linux-a18a205c11.md`
- After you [download a Redis Software installation package](), install it on one of the nodes in the cluster.
- For installation on machines without an internet connection, see [Offline installation]().
- To install Redis Software, use the command line:
- 1. Copy the installation package to the node.
- 1. On the node, change to the directory where the installation package is located and extract the installation files:

## Manage installation questions
Source file: `raw/sources/20260409-docs-latest-operate-rs-installing-upgrading-install-manage-installation-question-a0564dde9c.md`
- Several questions are displayed during the Redis Software installation process.
- Here, you'll find a list of these questions and learn how to automatically answer these questions to perform a silent install.
- Several questions appear during installation:
- We recommend that you [disable Linux swap]() in the operating system configuration
- to give Redis Software control of the memory allocation.

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

## Prepare to install Redis Software
Source file: `raw/sources/20260409-docs-latest-operate-rs-installing-upgrading-install-prepare-install-d1b3229713.md`

## Redis Software product lifecycle
Source file: `raw/sources/20260409-docs-latest-operate-rs-installing-upgrading-product-lifecycle-5cbf50666f.md`
- However, for any discrepancy between the two policies, the subscription agreement prevails.
- Redis Software modules follow the [modules lifecycle]().
- This section describes the lifecycle policy for Redis Software cluster versions.
- Redis Software uses a four-place numbering scheme to designate released cluster versions.
- The format is "Major1.Major2.Minor-Build".

## Docker quickstart for Redis Software
Source file: `raw/sources/20260409-docs-latest-operate-rs-installing-upgrading-quickstarts-docker-quickstart-4636e3488d.md`
- Docker containers are currently only supported for development and test environments, not for production. Use [Redis Enterprise on Kubernetes]() for a supported containerized deployment.
- For testing purposes, you can run Redis Software on Docker containers on
- The [Redis Software container](https://hub.docker.com/r/redislabs/redis/)
- To get started with a single Redis Software container:
- 1. [Install Docker](#install-docker) for your operating system

## Redis Software quickstarts
Source file: `raw/sources/20260409-docs-latest-operate-rs-installing-upgrading-quickstarts-f6f51be783.md`
- Try out Redis Software using one of the following quickstarts:
- Additional quickstart guides are available to help you:

## Redis Software quickstart
Source file: `raw/sources/20260409-docs-latest-operate-rs-installing-upgrading-quickstarts-redis-enterprise-softwar-21d1840e43.md`
- When finished, you'll have a simple cluster with a single node:
- 1. [Ensure port availability](#ensure-port-availability)
- 1. [Install Redis Software](#install-redis-enterprise-software)
- 1. [Set up a Redis Software cluster](#set-up-a-cluster)
- 1. [Create a new Redis database](#create-a-database)

## Uninstall Redis Software
Source file: `raw/sources/20260409-docs-latest-operate-rs-installing-upgrading-uninstalling-6c721f4dc8.md`
- Use the script `rl_uninstall.sh` to uninstall Redis Software and remove its files from a node. The script also deletes all Redis data and configuration from the node.
- The uninstall script does not remove the node from the cluster, but the node's status changes to down. For node removal instructions, see [Remove a cluster node]().
- To uninstall Redis Software from a cluster node:
- 1. Navigate to the script's location, which is in `/opt/redislabs/bin/` by default.
- 1. Run the uninstall script as the root user:

## Upgrade an existing Redis Software deployment
Source file: `raw/sources/20260409-docs-latest-operate-rs-installing-upgrading-upgrading-161496e29b.md`
- 1. Verify appropriate [network ports]() are either open or used by Redis Software.
- 1. Complete all [prerequisites]() before starting the upgrade.
- 1. Upgrade the software on all nodes of the cluster using one of the following methods:
- [Upgrade each database]() in the cluster or [upgrade an Active-Active database]() to enable new features and important fixes.
- To upgrade the cluster's operating system:

## Upgrade an Active-Active database
Source file: `raw/sources/20260409-docs-latest-operate-rs-installing-upgrading-upgrading-upgrade-active-active-9acf6136f3.md`
- To upgrade an [Active-Active (CRDB) database]():
- 1. [Upgrade Redis Software]() on each node in the clusters where the Active-Active instances are located.
- 1. [Check the status](#check-database-status) of all Active-Active database instances.
- 1. [Upgrade all Active-Active database instances](#upgrade-database-instances) to a later version of Redis.
- 1. If the status indicates `OLD CRDB FEATURESET VERSION`, [upgrade the featureset version](#upgrade-featureset-version). See [Feature version guidelines](#feature-version-guidelines) for more information.

## Upgrade a Redis Software cluster
Source file: `raw/sources/20260409-docs-latest-operate-rs-installing-upgrading-upgrading-upgrade-cluster-d5147d8797.md`
- Before you upgrade a cluster to a later Redis Software version, review the [supported upgrade paths](#supported-upgrade-paths) and [prerequisites](#upgrade-prerequisites).
- To upgrade a cluster's Redis Software version, use one of the following methods:
- See the [Redis Software product lifecycle]() for more information about release numbers and the end-of-life schedule.
- Redis Enterprise for Kubernetes has its own support lifecycle, which accounts for the Kubernetes distribution lifecycle. For details, see [Supported Kubernetes distributions]().
- 1. On a node in the cluster, run [`rladmin status`]():

## Upgrade a Redis Software database
Source file: `raw/sources/20260409-docs-latest-operate-rs-installing-upgrading-upgrading-upgrade-database-3f0e4140ae.md`
- When you upgrade an existing database, it uses the latest bundled Redis version unless you specify a different version with the `redis_version` option in the [REST API]() or [`rladmin upgrade db`]().
- To view available Redis database versions:
- The default Redis database version differs between Redis Software releases as follows:
- | Redis<br />Software | Bundled Redis<br />DB versions | Default DB version<br />(upgraded/new databases) |
- | 8.0.10 | 6.2, 7.2, 7.4, 8.0, 8.2, 8.4 | 8.4 |

## Upgrade a cluster's operating system
Source file: `raw/sources/20260409-docs-latest-operate-rs-installing-upgrading-upgrading-upgrade-os-b40b4451a7.md`
- To upgrade the operating system (OS) on a Redis Software cluster to a later major version, perform a rolling upgrade. Because you upgrade one node at a time, you can upgrade your cluster's OS without downtime.
- Before you upgrade a cluster's operating system:
- 1. [Upgrade all nodes in the cluster]() to a Redis Software version that supports the OS's current version and upgrade version.
- To learn which versions of Redis Software support specific OS versions, see [Supported platforms]().
- 1. If the cluster uses custom directories, make sure the OS upgrade version also supports custom directories, and specify the same custom directories during installation for all nodes. See [Customize installation directories]() for details.

## Monitoring with metrics and alerts
Source file: `raw/sources/20260409-docs-latest-operate-rs-monitoring-72f207f823.md`
- You can use the metrics that measure the performance of your Redis Software clusters, nodes, databases, and shards
- to monitor the performance of your databases.
- In the Redis Software Cluster Manager UI, you can view metrics, configure alerts, and send notifications based on alert parameters. You can also access metrics and configure alerts through the REST API.
- See [Metrics and alerts for monitoring v1]() for more information.
- The new metrics stream engine is generally available as of [Redis Software version 8.0]() This new engine exposes the v2 Prometheus scraping endpoint at `https://<IP>:8070/v2`, exports all time-series metrics to external monitoring tools, and enables real-time monitoring.

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

## Consolidated health report
Source file: `raw/sources/20260409-docs-latest-operate-rs-monitoring-health-report-96256a4500.md`
- The consolidated health report is a read-only, consolidated snapshot of a cluster's current system health, including:
- The consolidated health report consolidates cluster and database health information that was previously scattered across multiple APIs and CLI commands, such as [`rladmin status extra all`]() and required SSH access to view.
- As of Redis Software version 8.0.16, you can access the cluster and database health reports using the [Cluster manager UI](#view-health-overview) or [REST API requests](#health-rest-api-requests).
- You can access the cluster and database health reports using the **Overview** screen in the Cluster Manager UI.
- The **Cluster Info** section provides basic cluster details, including:

## Monitoring v2
Source file: `raw/sources/20260409-docs-latest-operate-rs-monitoring-metrics-stream-engine-49b48eae80.md`
- The new metrics stream engine is generally available as of [Redis Software version 8.0]().
- To integrate Redis Software metrics into your monitoring environment, see the following integration guides:
- For a detailed tutorial to deploy a complete monitoring stack with Prometheus and Grafana, see [Redis Software Observability with Prometheus and Grafana](https://redis.io/learn/operate/observability/redis-software-prometheus-and-grafana).
- Filter [Libraries and tools]() by "observability" for additional tools and guides.
- For a list of all available v2 metrics, see [Prometheus metrics v2]().

## Transition cluster manager alerts to Prometheus alerts
Source file: `raw/sources/20260409-docs-latest-operate-rs-monitoring-metrics-stream-engine-alerts-v1-to-v2-f0a03cbb38.md`
- As Redis Software transitions from the [deprecated monitoring system]() to the [new metrics stream engine](), some internal cluster manager alerts were deprecated in favor of external monitoring solutions.
- You can use the following table to transition from the deprecated alerts and set up equivalent alerts in Prometheus with [PromQL (Prometheus Query Language)](https://prometheus.io/docs/prometheus/latest/querying/basics/):

## Transition from Prometheus v1 to Prometheus v2
Source file: `raw/sources/20260409-docs-latest-operate-rs-monitoring-metrics-stream-engine-prometheus-metrics-v1-to-53679947c8.md`
- You can integrate Redis Software with Prometheus and tools such as [Grafana](), [Datadog](), [Dynatrace](), or [New Relic]() to create dashboards for important metrics.
- As of Redis Software version 7.8.2, [PromQL (Prometheus Query Language)](https://prometheus.io/docs/prometheus/latest/querying/basics/) metrics are available. V1 metrics are deprecated but still available.
- To transition from v1 metrics to v2 metrics, you need to change the `metrics_path` in your Prometheus configuration file from `/` to `/v2` to use the new scraping endpoint.
- Here's an example of the updated scraping configuration in `prometheus.yml`:
- You can scrape both v1 and v2 endpoints simultaneously during the transition period to prepare dashboards and ensure a smooth transition.

## Metrics and alerts for monitoring v1
Source file: `raw/sources/20260409-docs-latest-operate-rs-monitoring-v1-monitoring-30c607cb3e.md`
- The current monitoring system, which is deprecated as of Redis Software version 7.22, consists of the following components:
- The internal monitoring system, while functional, has several limitations that affect scalability and accuracy:
- To improve monitoring and address current limitations, Redis Software is transitioning to a new observability foundation: the [metrics stream engine]().
- This modern monitoring stack introduces:
- We recommend migrating to the metrics stream engine for enhanced accuracy, scalability, and future-proof observability.

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

## Client prerequisites for mDNS
Source file: `raw/sources/20260409-docs-latest-operate-rs-networking-mdns-5e2023ee69.md`
- mDNS is only supported for development and testing environments.
- If you choose to use the mDNS protocol when [you set the cluster name](),
- make sure that the configurations and prerequisites for resolving database endpoints are met on the client machines.
- If you have [Replica Of]() databases on the cluster,
- the configurations and prerequisites are also required for the Redis Software nodes.

## Manage IP addresses
Source file: `raw/sources/20260409-docs-latest-operate-rs-networking-multi-ip-ipv6-bcb827fdd0.md`
- Redis Software traffic is divided into internal traffic and external traffic:
- When only one IP address exists on a machine that serves as a Redis Software node, it is used for both internal and external traffic.
- During node configuration on a machine with multiple IP addresses, you must assign one address for internal traffic and one or more other addresses for external traffic.
- If the cluster uses IPv4 for internal traffic, all communication between cluster nodes uses IPv4 addresses. If the cluster uses IPv6 for internal traffic, all communication between cluster nodes uses IPv6 addresses.
- To update IP address configuration after cluster setup, see [Change internal IP address](#change-internal-ip-address) or [Configure external IP addresses](#configure-external-ip-addresses).

## Network port configurations
Source file: `raw/sources/20260409-docs-latest-operate-rs-networking-port-configurations-9a36a45700.md`
- All Redis Software deployments span multiple physical/virtual nodes. You'll need to keep several ports open between these nodes. This document describes the various port ranges and their uses.
- Whenever you create a new database, you must verify that the ports assigned to the new database's endpoints are open. The cluster will not perform this verification for you.
- Redis Software's port usage falls into three general categories:
- | Protocol | Port | Configurable | Connection source | Description |
- |----------|------|--------------|-------------------|-------------|

## Enable private andÂ public database endpoints
Source file: `raw/sources/20260409-docs-latest-operate-rs-networking-private-public-endpoints-66fab1de40.md`
- When you create a cluster via the UI, you can configure it to expose private and public endpoints.
- This is common for environments such as cloud platforms and enterprises.
- When doing so, the cluster creates an additional FQDN, e.g. internal.cluster.com for private network (e.g. VPC or an internal network), while the cluster.com FQDN can be used by a public network (e.g. the internet).
- You can enable public and private endpoints during cluster creation only.
- However, you can still add an additional FQDN in a different domain (cluster.io, for example) after cluster creation.

## Alerts
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-alerts-726e5e850d.md`
- Cluster alerts are triggered based on thresholds applied to these stored metrics.
- In **ClusterÂ >Â Alert Settings**, you can enable alerts for node or cluster events, such as high memory usage or throughput.
- If you enable alerts for "Node joined" or "Node removed" actions,
- you must also enable "ReceiveÂ email alerts" so that the notifications are sent.
- 1. In **Cluster > Alert Settings**, click **Edit**.

## Transition cluster manager alerts to Prometheus alerts
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-alerts-alerts-v1-to-v2-8a933f08d1.md`
- As Redis Software transitions from the [deprecated monitoring system]() to the [new metrics stream engine](), some internal cluster manager alerts were deprecated in favor of external monitoring solutions.
- You can use the following table to transition from the deprecated alerts and set up equivalent alerts in Prometheus with [PromQL (Prometheus Query Language)](https://prometheus.io/docs/prometheus/latest/querying/basics/):

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

## redis-cli
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-cli-utilities-redis-cli-9a3a3974c8.md`
- The `redis-cli` command-line utility lets you interact with a Redis database. With `redis-cli`, you can run [Redis commands]() directly from the command-line terminal or with [interactive mode](#interactive-mode).
- If you want to run Redis commands without `redis-cli`, you can [connect to a database with Redis Insight]() and use the built-in [CLI]() prompt instead.
- When you install Redis Software or Redis Open Source, it also installs the `redis-cli` command-line utility.
- To learn how to install Redis and `redis-cli`, see the following installation guides:
- To run Redis commands with `redis-cli`, you need to connect to your Redis database.

## rladmin
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-cli-utilities-rladmin-b52b67ea6f.md`
- Although you can use the Cluster Manager UI for some of these tasks, others are unique to the `rladmin` command-line tool.
- 1. Sign in to a Redis Software node with an account that is a member of the **redislabs** group.
- The `rladmin` binary is located in `/opt/redislabs/bin`. If you don't have this directory in your `PATH`, you may want to add it. Otherwise, you can use `bash -l <username>` to sign in as a user with permissions for that directory.
- If the CLI does not recognize the `rladmin` command,
- run this command to load the necessary configuration first: <nobr>`bash -l`</nobr>

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

## rladmin cluster
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-cli-utilities-rladmin-cluster-e4459a0792.md`
- Manages cluster configuration and administration. Most `rladmin cluster` commands are only for clusters that are already configured, while a few others are only for new clusters that have not been configured.

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

## rladmin cluster running_actions
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-cli-utilities-rladmin-cluster-running-actions-43ed008bb3.md`
- Lists all active tasks running on the cluster.
- Returns details about any active tasks running on the cluster.

## rladmin cluster stats_archiver
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-cli-utilities-rladmin-cluster-stats-archiver-67f306ef27.md`
- Enables or deactivates the stats archiver, which logs statistics in CSV (comma-separated values) format.
- | enabled | Turn on the stats archiver |
- | disabled | Turn off the stats archiver |
- Returns the updated status of the stats archiver.

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

## rladmin node
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-cli-utilities-rladmin-node-48192b41cf.md`

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

## rladmin node maintenance_mode
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-cli-utilities-rladmin-node-maintenance-mode-e0753fae36.md`
- Configures [quorum-only mode]() on a node.
- Migrates shards out of the node and turns the node into a quorum node to prevent shards from returning to it.
- | Parameter             | Type/Value                     | Description                                                                               |
- |-----------------------|--------------------------------|-------------------------------------------------------------------------------------------|
- | node                  | integer                        | Turns the specified node into a quorum node                                              |

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

## rladmin status
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-cli-utilities-rladmin-status-529a49c252.md`
- Displays the current cluster status and topology information.
- Displays the current status of all nodes, databases, database endpoints, and shards on the cluster.
- | extra \<parameter\> | Extra options that show more information |
- | issues_only | Filters out all items that have an `OK` status  |
- | extra all | Shows all `extra` information |

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

## rladmin verify
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-cli-utilities-rladmin-verify-5f97fe5772.md`
- Prints verification reports for the cluster.
- Prints a balance report that displays all of the unbalanced endpoints or nodes in the cluster.
- The [proxy policy]() determines which nodes or endpoints to report as unbalanced.
- An endpoint is unbalanced in the following cases:
- | Parameter | Type/Value | Description |

## rlcheck
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-cli-utilities-rlcheck-5df6d7cc7a.md`
- You can use this utility to confirm a successful installation or to verify that the node is functioning properly.
- To resolve issues reported by `rlcheck`, [contact Redis support](https://redis.com/company/support/).
- You can run `rlcheck` from the node host's command line.
- The output of `rlcheck` shows information specific to the host you run it on.
- 1. Sign in to the Redis Software host with an account that is a member of the **redislabs** operating system group.

## Redis Software compatibility with Redis Open Source
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-compatibility-a5134ca519.md`
- Redis Software and Redis Cloud support RESP2 and RESP3. See [RESP compatibility with Redis Software]() for more information.
- Redis Software and Redis Cloud support [client-side caching]() for databases with Redis versions 7.4 or later. See [Client-side caching compatibility with Redis Software and Redis Cloud]() for more information about compatibility and configuration options.
- Redis Software supportsÂ [Redis OSS Cluster API]() if it is enabled for a database. For more information, see [Enable OSS Cluster API]().

## Client-side caching compatibility with Redis Software and Redis Cloud
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-compatibility-client-side-caching-6984be5f67.md`
- Redis Software and Redis Cloud support [client-side caching]() for databases with Redis versions 7.4 or later.
- Client-side caching in Redis Software and Redis Cloud requires Redis database versions 7.4 or later.
- The following table shows the differences in client-side caching support by product:
- | Redis product           | Client-side caching support |
- |-------------------------|-----------------------------|

## Cluster management commands compatibility
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-compatibility-commands-cluster-36c86887f4.md`
- [Clustering in Redis Software]() and [Redis Cloud]() differs from the [Redis Open Source cluster]() and works with all standard Redis clients.
- Redis Software blocks most [cluster commands](?group=cluster). If you try to use a blocked cluster command, it returns an error.
- | Command | Redis<br />Software | Redis<br />Cloud | Notes |
- |:--------|:----------------------|:-----------------|:------|
- | [ASKING]() | <span title="Not supported">&#x274c; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> | <span title="Not supported">&#x274c; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> |  |

## Connection management commands compatibility
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-compatibility-commands-connection-242fe59d47.md`
- The following tables show which Redis Open Source [connection management commands](?group=connection) are compatible with standard and Active-Active databases in Redis Software and Redis Cloud.
- | Command | Redis<br />Software | Redis<br />Cloud | Notes |
- |:--------|:----------------------|:-----------------|:------|
- | [AUTH]() | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |
- | [CLIENT CACHING]() | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |

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

## RESP compatibility with Redis Software
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-compatibility-resp-cdd44c1d37.md`
- RESP (Redis Serialization Protocol) is the protocol that clients use to communicate with Redis databases. See the [RESP protocol specification]() for more information.
- Redis Software versions that support RESP3 continue to support RESP2.
- To use RESP3 with a Redis Software database:
- 1. Upgrade Redis servers to version 7.2 or later.
- For Active-Active and Replica Of databases:

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

## Redis Flex and Auto Tiering Metrics
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-metrics-auto-tiering-dc62fec716.md`
- The following additional metrics for [Redis Flex and Auto Tiering ]() databases are available in the Redis Software Cluster Manager UI.
- Percent of keys whose values are stored in RAM.
- A low percentage alert means most of the RAM is used for holding keys and not much RAM is available for values. This can be due to a high number of small keys or a few large keys. Inserting more keys might cause the database to run out of memory.
- If the percent of values in RAM is low for a subset of the database's shards, it might also indicate an unbalanced database.
- **Components measured**: Database and Shard

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

## Resource usage metrics
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-metrics-resource-usage-710ec2df55.md`
- The following metrics are available in the Redis Software Cluster Manager UI.
- **Components measured**: Cluster, Node, and Database
- **Components measured**:  Cluster and Node
- Percent of the CPU used by the main thread.
- **Components measured**: Database and Shard

## REST API
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-74b71f6ae2.md`
- Here, you'll find the details of the API and how to use it.
- Authentication to the Redis Software API occurs via [Basic Auth](https://en.wikipedia.org/wiki/Basic_access_authentication). Provide your username and password as the basic auth credentials.
- If the username and password is incorrect or missing, the request will fail with a [`401 Unauthorized`](https://www.rfc-editor.org/rfc/rfc9110.html#name-401-unauthorized) status code.
- Example request using [cURL](https://curl.se/):
- For more examples, see the [Redis Software REST API quick start]().

## Encrypt REST API requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-encryption-376cdccc2f.md`
- By default, the Redis Software API supports communication over HTTP and HTTPS. However, you can turn off support for HTTP to ensure that API requests are encrypted.
- Before you turn off HTTP support, be sure to migrate any scripts or proxy configurations that use HTTP to the encrypted API endpoint to prevent broken connections.
- To turn off HTTP support for API endpoints, run:

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

## BDB group object
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-objects-bdb-group-c33419ebe6.md`
- An API object that represents a group of databases that share a memory pool.
- | uid          | integer          | Cluster unique ID of the database group |
- | members      | array of strings | A list of UIDs of member databases (read-only) |
- | memory_size  | integer          | The common memory pool size limit for all databases in the group, expressed in bytes |

## Search and query configuration object
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-objects-bdb-search-659d0bbb04.md`
- Configuration fields for search and query.
- | search-timeout | integer (range: 1-9223372036854775807) (default: 500) | The maximum amount of time in milliseconds that a search query is allowed to run. |
- | search-ext-load | string  | If present, RediSearch will try to load an extension dynamic library from its specified file path. Requires a database restart to take effect. |
- | search-max-doctablesize | integer (range: 1-18446744073709551615) (default: 1000000) | The maximum size of the internal hash table used for storing the documents. Requires a database restart to take effect. |
- | search-friso-ini | string  | If present, load the custom Chinese dictionary from the specified path. Requires a database restart to take effect. |

## Bootstrap object
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-objects-bootstrap-678895973d.md`
- | action | 'create_cluster'<br />'join_cluster'<br />'recover_cluster' | Action to perform |
- | cluster | [cluster_identity]() object | Cluster to join or create |
- | cnm_https_port | integer | Port to join a cluster with non-default cnm_https port |
- | crdb_coordinator_port | integer, (range: 1024-65535) (default: 9081) | CRDB coordinator port |
- | credentials | [credentials]() object | Cluster admin credentials |

## Cluster identity object
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-objects-bootstrap-cluster-identity-fdae487adc.md`
- | name          | string                | Fully qualified cluster name. Limited to 64 characters and must comply with the IETF's RFC 952 standard and section 2.1 of the RFC 1123 standard. |
- | nodes         | array of strings       | Array of IP addresses of existing cluster nodes |
- | wait_command  | boolean (default:&nbsp;true) | Supports Redis wait command |

## Identity object
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-objects-bootstrap-identity-36d5acee3a.md`
- | uid | integer | Assumed node's UID to join cluster. Used to replace a dead node with a new one. |
- | accept_servers | boolean (default:&nbsp;true) | If true, no shards will be created on the node |
- | addr | string | Internal IP address of node |
- | external_addr | complex object | External IP addresses of node. `GET`&nbsp;`/jsonschema` to retrieve the object's structure. |
- | override_rack_id | boolean | When replacing an existing node in a rack-aware cluster, allows the new node to be located in a different rack |

## Node identity object
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-objects-bootstrap-node-identity-91b3565aaa.md`
- | bigstore_driver | 'rocksdb' | Bigstore driver name or none (deprecated, use the [cluster object]()'s `bigstore_driver` instead) |
- | bigstore_enabled | boolean (default: false) | If `true`, then flash storage is enabled on this node for [Redis Flex and Auto Tiering]() databases. Configurable during [bootstrapping](). After bootstrapping, it is read-only. |
- | identity | [identity]() object | Node identity |
- | limits | [limits]() object | Node limits |
- | paths | [paths]() object | Storage paths object |

## Policy object
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-objects-bootstrap-policy-8807b1bc67.md`
- | default_fork_evict_ram | boolean (default:&nbsp;false) | If true, the databases should evict data from RAM to ensure successful replication or persistence |
- | default_non_sharded_proxy_policy | **'single'** <br />'all-master-shards'<br />'all-nodes' | Default proxy_policy for newly created non-sharded databases' endpoints |
- | default_sharded_proxy_policy | 'single'<br /> **'all-master-shards'** <br />'all-nodes' | Default proxy_policy for newly created sharded databases' endpoints |
- | default_shards_placement | 'dense'<br /> **'sparse'** | Default shards_placement for newly created databases |
- | rack_aware | boolean | Cluster rack awareness |

## Certificates object
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-objects-certificates-9e7f73d37d.md`
- An API object that represents a certificate used by a Redis Software cluster.
- | name | "cm"<br />"api"<br />"mtls_trusted_ca"<br />"proxy"<br />"metrics_exporter"<br />"syncer"<br />"ldap_client"<br />"ccs_internode_encryption"<br />"data_internode_encryption"<br />"sso_service"<br />"sso_issuer" | Certificate type.<br />See the [certificates table]() for the list of cluster certificates and their descriptions. |
- | certificate | string | The certificate in PEM format |
- | key | string | The private key in PEM format |

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

## Cluster alert settings with threshold object
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-objects-cluster-cluster-alert-setting-710e15e6e8.md`
- | enabled    | boolean (default:&nbsp;false)  | Alert enabled or disabled |
- | threshold  | string                    | Threshold for alert going on/off |

## Cluster settings object
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-objects-cluster-settings-f7026010bb.md`
- | acl_pubsub_default | `resetchannels`<br /> `allchannels` | Default pub/sub ACL rule for all databases in the cluster:<br />â¢`resetchannels` blocks access to all channels (restrictive)<br />â¢`allchannels` allows access to all channels (permissive) |
- | auto_recovery | boolean (default: false) | Defines whether to use automatic recovery after shard failure |
- | automatic_node_offload | boolean (default: true) | Defines whether the cluster will automatically migrate shards from a node, in case the node is overbooked |
- | <span class="break-all">bigstore_migrate_node_threshold</span> | integer | Minimum free memory (excluding reserved memory) allowed on a node before automatic migration of shards from it to free more memory |
- | <span class="break-all">bigstore_migrate_node_threshold_p</span> | integer | Minimum free memory (excluding reserved memory) allowed on a node before automatic migration of shards from it to free more memory |

## Cluster Manager settings object
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-objects-cm-settings-13c816184e.md`
- | timezone | string | Configurable [time zone](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) for the Cluster Manager UI. The default time zone is UTC. |

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

## CRDB task object
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-objects-crdb-task-8e278d5396.md`
- An object that represents an Active-Active (CRDB) task.
- | id | string | CRDB task ID (read-only) |
- | crdb_guid | string | Globally unique Active-Active database ID (GUID) (read-only) |
- | ended | string | Timestamp when the task ended (read-only) |
- }, ...]  | Details for errors that occurred on a cluster |

## Job scheduler object
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-objects-job-scheduler-38f7ba60ef.md`
- An API object that represents the job scheduler settings in the cluster.
- | backup_job_settings | [backup_job_settings]() object | Backup job settings |
- | <span class="break-all">bdb_usage_report_job_settings</span> | <span class="break-all">[bdb_usage_report_job_settings]()</span> object | Job settings for database usage reports |
- | <span class="break-all">cert_rotation_job_settings</span> | <span class="break-all">[cert_rotation_job_settings]()</span> object | Job settings for internal certificate rotation |
- | <span class="break-all">log_rotation_job_settings</span> | <span class="break-all">[log_rotation_job_settings]()</span> object | Log rotation job settings |

## LDAP object
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-objects-ldap-d24be39377.md`
- An API object that represents the cluster's [LDAP]() configuration.
- | bind_dn | string | DN used when binding with the LDAP server to run queries |
- | bind_pass | string | Password used when binding with the LDAP server to run queries |
- | ca_cert | string | PEM-encoded CA certificate(s) used to validate TLS connections to the LDAP server |
- | cache_ttl | integer (default: 300) | Maximum TTL (in seconds) of cached entries |

## LDAP mapping object
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-objects-ldap-mapping-80458f46f2.md`
- An API object that represents an [LDAP mapping]() between an LDAP group and [roles]().
- | uid | integer | LDAP mapping's unique ID |
- | account_id | integer | SM account ID |
- | action_uid | string | Action UID. If it exists, progress can be tracked by the `GET`&nbsp;`/actions/{uid}` API (read-only) |
- | bdbs_email_alerts | complex object | UIDs of databases that associated email addresses will receive alerts for |

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

## Node object
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-objects-node-9a5ad0ba67.md`
- An API object that represents a node in the cluster.
- | uid | integer | Cluster unique ID of node (read-only) |
- | accept_servers | boolean (default:&nbsp;true) | The node only accepts new shards if `accept_servers` is `true` |
- | addr | string | Internal IP address of node |
- | architecture | string | Hardware architecture (read-only) |

## OCSP object
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-objects-ocsp-20df4d0546.md`
- An API object that represents the cluster's OCSP configuration.
- | ocsp_functionality | boolean (default:&nbsp;false) | Enables or turns off OCSP for the cluster |
- | query_frequency | integer <nobr>(range: 60-86400)</nobr> (default:&nbsp;3600) | The time interval in seconds between OCSP queries to check the certificateâs status |
- | recovery_frequency | integer <nobr>(range: 60-86400)</nobr> (default:&nbsp;60) | The time interval in seconds between retries after the OCSP responder returns an invalid status for the certificate |
- | recovery_max_tries | integer <nobr>(range: 1-100)</nobr> (default:&nbsp;5) | The number of retries before the validation query fails and invalidates the certificate |

## OCSP status object
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-objects-ocsp-status-b2f3f2de09.md`
- An API object that represents the cluster's OCSP status.
- | cert_status | string | Indicates the proxy certificate's status: GOOD/REVOKED/UNKNOWN (read-only) |
- | responder_url | string | The OCSP responder URL this status came from (read-only) |
- | next_update | string | The expected date and time of the next certificate status update (read-only) |
- | produced_at | string | The date and time when the OCSP responder signed this response (read-only) |

## Proxy object
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-objects-proxy-8a07cd335b.md`
- An API object that represents a [proxy](https://en.wikipedia.org/wiki/Proxy_server) in the cluster.
- | uid | integer | Unique ID of the proxy (read-only) |
- | backlog | integer | TCP listen queue backlog |
- | client_eviction | boolean (default: false) | If `true,`, enables client eviction based on `maxmemory_clients`. |
- | client_keepcnt | integer | Client TCP keepalive count |

## Role object
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-objects-role-b19a9a62a7.md`
- | account_id | integer | SM account ID |
- | action_uid | string | Action UID. If it exists, progress can be tracked by the GET /actions/{uid} API (read-only) |
- | management | 'admin'<br />'db_member'<br />'db_viewer'<br />'cluster_member'<br />'cluster_viewer'<br />'user_manager'<br />'none' | [Management role]() |

## Services configuration object
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-objects-services-configuration-fdaf9c9d40.md`
- | alert_mgr | [alert_mgr]() object | Whether to enable/disable the alert manager processes |
- | call_home_agent | [call_home_agent]() object | Whether to enable/disable the call_home_agent process, which sends daily usage statistics to Redis |
- | cm_server | [cm_server]() object | Whether to enable/disable the CM server |
- | crdb_coordinator | [crdb_coordinator]() object | Whether to enable/disable the CRDB coordinator process |
- | crdb_worker | [crdb_worker]() object | Whether to enable/disable the CRDB worker processes |

## Shard object
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-objects-shard-c1f925bc79.md`
- An API object that represents a Redis shard in a database.
- | uid | string | Cluster unique ID of shard |
- | assigned_slots | string | Shards hash slot range |
- | backup | [backup]() object | Current status of scheduled periodic backup process |
- | bdb_uid | integer | The ID of the database this shard belongs to |

## SSO object
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-objects-sso-8a71bbc82a.md`
- An API object that represents single sign-on (SSO) configuration in the cluster.
- | control_plane | boolean (default: false) | If `true`, enables single sign-on (SSO) for the control plane. |
- | enforce_control_plane | boolean (default: false) | If `true`, enforce SSO login for the control plane for non-admin users. If `false`, all users can still login using their local username and password if SSO is down. |
- | protocol | "saml2" | SSO protocol to use. |
- | issuer | complex object	 | Issuer related configuration.<br>Contains the following fields:<br>**id**: Unique ID of the issuer side (example: "urn:sso:example:idp")<br>**login_url**: SSO login URL (example: "https://idp.example.com/sso/saml")<br>**logout_url**: SSO logout URL (example: "https://idp.example.com/sso/slo")<br />**metadata**: Base64 encoded IdP metadata (read-only) |

## Statistics
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-objects-statistics-1ece42a828.md`
- The v1 statistics REST API endpoints are deprecated as of Redis Software version 7.22. Use the [metrics stream engine for monitoring v2]() instead for real-time monitoring and metrics collection.
- Clusters, databases, nodes, and shards collect various statistics at regular time intervals. View the statistics for these objects using `GET stats` requests to their respective endpoints:
- View endpoint stats using `GET` requests, see:
- Statistics returned from API requests always contain the following fields:
- The statistics returned by the API also contain fields that represent the values of different metrics for an object during the specified time interval.

## Cluster metrics
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-objects-statistics-cluster-metrics-d37b4cd735.md`
- The v1 statistics REST API endpoints are deprecated as of Redis Software version 7.22. Use the [metrics stream engine for monitoring v2]() instead for real-time monitoring and metrics collection.
- | available_flash | float | Sum of available flash in all nodes (bytes) |
- | available_memory | float | Sum of available memory in all nodes (bytes) |
- | avg_latency | float | Average latency of requests handled by all cluster endpoints (micro-sec); returned only when there is traffic |
- | bigstore_free | float | Sum of free space of backend flash (used by flash DB's BigRedis) on all cluster nodes (bytes); only returned when BigRedis is enabled |

## Suffix object
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-objects-suffix-b4a05cedf9.md`
- An API object that represents a DNS suffix in the cluster.
- | default | boolean | Suffix is the default suffix for the cluster (read-only) |
- | internal | boolean | Does the suffix point to internal IP addresses (read-only) |
- | mdns | boolean | Support for multicast DNS (read-only) |
- | name | string | Unique suffix name that represents its zone (read-only) |

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

## Backup reset status database action requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-bdbs-actions-backup-reset-st-5fa717d443.md`
- | [PUT](#put-bdbs-actions-backup-reset-status) | `/v1/bdbs/{uid}/actions/backup_reset_status` | Reset database backup status |
- Resets the database's `backup_status` to idle if a backup is not in progress and clears the value of the `backup_failure_reason` field.
- | [reset_bdb_current_backup_status]() | admin<br />cluster_member<br />db_member |
- | Host | cnm.cluster.fqdn | Domain name |
- | Accept | application/json | Accepted media type |

## Export database action requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-bdbs-actions-export-487c77b558.md`
- | [POST](#post-bdbs-actions-export) | `/v1/bdbs/{uid}/actions/export` | Initiate database export |
- | [start_bdb_export]() | admin<br />cluster_member<br />db_member |
- | Host | cnm.cluster.fqdn | Domain name |
- | Accept | application/json | Accepted media type |
- | uid | integer | The unique ID of the database |

## Export resets status database action requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-bdbs-actions-export-reset-st-dc0a5a8e15.md`
- | [PUT](#put-bdbs-actions-export-reset-status) | `/v1/bdbs/{uid}/actions/export_reset_status` | Reset database export status |
- PUT /v1/bdbs/{int: uid}/actions/export_reset_status
- Resets the database's `export_status` to idle if an export is not in progress and clears the value of the `export_failure_reason` field.
- | [reset_bdb_current_export_status]() | admin<br />cluster_member<br />db_member |
- | Host | cnm.cluster.fqdn | Domain name |

## Import database action requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-bdbs-actions-import-9657b6cbf0.md`
- | [POST](#post-bdbs-actions-import) | `/v1/bdbs/{uid}/actions/import` | Initiate manual dataset import |
- | [start_bdb_import]() | admin<br />cluster_member<br />db_member |
- | Host | cnm.cluster.fqdn | Domain name |
- | Accept | application/json | Accepted media type |
- | Content-Length | 0 | Length of the request body in octets |

## Import reset status database action requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-bdbs-actions-import-reset-st-225c673220.md`
- | [PUT](#put-bdbs-actions-import-reset-status) | `/v1/bdbs/{uid}/actions/import_reset_status` | Reset database import status |
- PUT /v1/bdbs/{int: uid}/actions/import_reset_status
- Reset the databaseâs `import_status` to idle if a backup is not in progress and clears the value of the `import_failure_reason` field.
- | [reset_bdb_current_import_status]() | admin<br />cluster_member<br />db_member |
- | Host | cnm.cluster.fqdn | Domain name |

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

## Resume database traffic requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-bdbs-actions-resume-traffic-8ff3091905.md`
- | [POST](#post-bdbs-actions-resume-traffic) | `/v1/bdbs/{uid}/actions/resume_traffic` | Resume database traffic |
- Resume traffic handling for the database.
- Use this action to resume read and write traffic on a database, where traffic was previously paused using the [`stop_traffic`]() action.
- | [update_bdb_with_action]() | admin<br />cluster_member<br />db_member |
- | uid | integer | The unique ID of the database. |

## Revamp database requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-bdbs-actions-revamp-20d0a46519.md`
- | [PUT](#put-bdbs-actions-revamp) | `/v1/bdbs/{uid}/actions/revamp` | Update database configuration and optimize shard placement |
- Updates the topology-related configurations of an active database and optimizes the shard placement for the new configuration.
- | [update_bdb_with_action]() | admin<br />cluster_member<br />db_member |
- You can include the following parameters in the request JSON body to update their values:
- | avoid_nodes | array of strings | Cluster node UIDs to avoid when placing the database's shards and binding its endpoints. |

## Stop database traffic requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-bdbs-actions-stop-traffic-c97931d37c.md`
- | [POST](#post-bdbs-actions-stop-traffic) | `/v1/bdbs/{uid}/actions/stop_traffic` | Stop database traffic |
- Use this action to stop read and write traffic on a database. To resume traffic afterward, use the [`resume_traffic`]() action.
- | [update_bdb_with_action]() | admin<br />cluster_member<br />db_member |
- | uid | integer | The unique ID of the database. |
- Returns a JSON object with an `action_uid`. You can track the action's progress with a [`GET /v1/actions/<action_uid>`]() request.

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

## Database passwords requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-bdbs-passwords-b539b40dae.md`
- | [PUT](#put-bdbs-password) | `/v1/bdbs/{uid}/passwords` | Update database password |
- | [POST](#post-bdbs-password) | `/v1/bdbs/{uid}/passwords` | Add database password |
- | [DELETE](#delete-bdbs-password) | `/v1/bdbs/{uid}/passwords` | Delete database password |
- Set a single password for the bdb's default user (i.e., for `AUTH`&nbsp;`<password>` authentications).
- The above request resets the password of the bdb to ânew passwordâ.

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

## Change password hashing algorithm requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-cluster-change-password-hash-6447e9a2c4.md`
- | [PATCH](#patch-change-password-hashing-algorithm) | `/v1/cluster/change_password_hashing_algorithm` | Change the hashing policy for user passwords |
- PATCH /v1/cluster/change_password_hashing_algorithm
- Changes the password hashing algorithm for the entire cluster. When you change the hashing algorithm, it rehashes the administrator password and passwords for all users, including default users.
- The hashing algorithm options are `SHA-256` or `PBKDF2`. The default hashing algorithm is `SHA-256`.
- PATCH /v1/cluster/change_password_hashing_algorithm

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

## Cluster policy requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-cluster-policy-b19bcca813.md`
- | [GET](#get-cluster-policy) | `/v1/cluster/policy` | Get cluster policy settings |
- | [PUT](#put-cluster-policy) | `/v1/cluster/policy` | Update cluster policy settings |
- Gets the cluster's current policy settings.
- | Host | cnm.cluster.fqdn | Domain name |
- | Accept | application/json | Accepted media type |

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

## All nodes debug info requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-debuginfo-all-45117997a3.md`
- This REST API path is deprecated as of Redis Software version 7.4.2. Use the new path [`/v1/cluster/debuginfo`]() instead.
- | [GET](#get-all-debuginfo) | `/v1/debuginfo/all` | Get debug info for all nodes |
- Downloads a tar file that contains debug info from all nodes.
- Downloads the debug info in a tar file called `filename.tar.gz`. Extract the files from the tar file to access the debug info for all nodes.
- | Content-Type | application/x-gzip | Media type of request/response body |

## Debug info requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-debuginfo-b3ff3fe232.md`
- These REST API paths are deprecated as of Redis Software version 7.4.2. Use the new paths [`/v1/cluster/debuginfo`](), [`/v1/nodes/debuginfo`](), and [`/v1/bdbs/debuginfo`]() instead.
- Downloads a support package, which includes logs and information about the cluster, nodes, databases, and shards, as a tar file called `filename.tar.gz`. Extract the files from the tar file to access the debug info.
- | [GET]() | `/v1/debuginfo/all` | Gets debug info for all nodes |
- | [GET]() | `/v1/debuginfo/all/bdb/{bdb_uid}` | Gets debug info for a database from all nodes |
- | [GET]() | `/v1/debuginfo/node` | Gets debug info for the current node |

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

## JSON schema requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-jsonschema-7573ef6751.md`
- | [GET](#get-jsonschema) | `/v1/jsonschema` | Get JSON schema of API objects |
- Get the JSON schema of various [Redis Software REST API objects]().
- | Host | cnm.cluster.fqdn | Domain name |
- | Accept | application/json | Accepted media type |
- | object | string | Optional. The API object name: 'cluster', 'node', 'bdb' etc. |

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

## User-defined module requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-modules-user-defined-0ed5642250.md`
- | [GET](#get-local-user-defined-artifacts) | /v2/local/modules/user-defined/artifacts | List custom module artifacts on a node |
- | [POST](#post-user-defined-module) | /v2/modules/user-defined | Upload custom module configuration |
- | [POST](#post-local-user-defined-artifacts) | /v2/local/modules/user-defined/artifacts | Upload a custom module artifact to a node |
- | [DELETE](#delete-user-defined-module) | /v2/modules/user-defined/<uid> | Delete a custom module configuration |
- | [DELETE](#delete-local-user-defined-artifacts) | /v2/local/modules/user-defined/artifacts/<module_name>/<version> | Delete a custom module artifact from a node |

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

## Refresh JWT requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-users-refresh-jwt-0f6c5f1825.md`
- | [POST](#post-refresh_jwt) | `/v1/users/refresh_jwt` | Get a new authentication token |
- Generate a new JSON Web Token (JWT) for authentication.
- Takes a valid token and returns the new token generated by the request.
- | Host | cnm.cluster.fqdn | Domain name |
- | Authorization | JWT eyJ5bGciOiKIUzI1NiIsInR5cCI6IkpXVCJ9.<br></br>eyJpYXViOjE0NjU0NzU0ODYsInVpZFI1IjEiLCJ<br></br>leHAiOjE0NjU0Nz30OTZ9.2xYXumd1rDoE0e<br></br>dFzcLElMOHsshaqQk2HUNgdsUKxMU | Valid JSON Web Token (JWT) |

## Terminology in Redis Software
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-terminology-64ca2110e1.md`
- A _node_ is a physical machine, virtual machine, container or cloud
- instance on which the RS installation package was installed and the
- [setup process]() was run in order to make the machine part of the cluster.
- Each node is a container for running multiple Redis
- The recommended configuration for a production cluster is an uneven

## Supported upgrade paths for Redis Software
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-upgrade-paths-77741a6ca5.md`
- For detailed upgrade instructions, see [Upgrade a Redis Software cluster]().
- See the [Redis Software product lifecycle]() for more information about release numbers and the end-of-life schedule.
- Redis Enterprise for Kubernetes has its own support lifecycle, which accounts for the Kubernetes distribution lifecycle. For details, see [Supported Kubernetes distributions]().

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

## RLEC 0.99.5-11 Release Notes (January 5, 2015)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-legacy-release-notes-rlec-0-99-5-11-january-c8c0243fed.md`
- node being taken offline or removed is currently serving as the web
- server for the web browser being used to view the management UI, the
- management UI appears down while the node is down.
- **Workaround:** If you are using the cluster name in order to
- connect to the management UI in the browser, and the cluster name is

## RLEC 0.99.5-24 Release Notes (February 15, 2015)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-legacy-release-notes-rlec-0-99-february-201-ac6af21e84.md`
- before running through the upgrade process.
- If you are upgrading from version 0.99.5-11:
- 1. You must restart the services after the upgrade by running the
- following command with user root (sudo su). From the operating
- system's CLI, run the following command:

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

## Redis Enterprise Software Release Notes 5.5 Preview (April 2019)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-legacy-release-notes-rs-5-5-preview-april-2-0514e3eca1.md`
- RS 5.5 is a preview version that includes all the capabilities of Redis Enterprise 5.4,
- plus support for creation of Redis databases with multiple modules and support for these modules:
- RS 5.5 lets you create Redis databases with multiple Redis modules.
- This preview version is a standalone version and is not supported for production environments.
- You cannot upgrade to it from a lower version or upgrade from it to a higher version.

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

## Redis Enterprise Software release notes 6.4.2-110 (May 2024)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-rs-6-4-2-releases-rs-6-4-2-110-dbc6c79c25.md`
- This is a maintenance release for â[âRedis Enterprise Software version 6.4.2](https://redis.io/downloads/#software).
- Redis has announced the end of life for RedisGraph. See the [announcement](https://redis.io/blog/redisgraph-eol/) for details.
- Redis Enterprise Software version 6.4.2-110 includes the following Redis Stack modules:
- The following table provides a snapshot of supported platforms as of this Redis Enterprise Software release. See the [supported platforms reference]() for more details about operating system compatibility.
- <span title="Check mark icon">&#x2705;</span> Supported â The platform is supported for this version of Redis Enterprise Software and Redis Stack modules.

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

## Redis Enterprise Software release notes 7.2.4-132 (June 2025)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-rs-7-2-4-releases-rs-7-2-4-132-ad19ed40f3.md`
- This is a maintenance release for ââRedis Enterprise Software version 7.2.4.
- Redis Enterprise Software versions 7.2.4-132 includes the following Redis Stack modules:
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

## Change the password hashing algorithm
Source file: `raw/sources/20260409-docs-latest-operate-rs-security-access-control-manage-passwords-password-hashing-bc0cec5c79.md`
- Redis Software securely stores all user passwords using a cryptographic hash function. The default password hashing algorithm is `SHA-256`, but `PBKDF2` is also supported as of Redis Software version 7.8.6-13.
- You can change the password hashing algorithm using [`rladmin`]() or the [REST API](). When you change the password hashing algorithm, the cluster rehashes the administrator password and passwords for all users, including default users.
- To change the password hashing algorithm from the command line, run [`rladmin cluster change_password_hashing_algorithm`]():
- You can [change the password hashing algorithm]() using a REST API request:

## Rotate passwords
Source file: `raw/sources/20260409-docs-latest-operate-rs-security-access-control-manage-passwords-rotate-passwords-6af7293a4b.md`
- Redis Software lets you implement password rotation policies using the [REST API]().
- You can add a new password for a database user without immediately invalidating the old one to prevent possible authentication errors in production.
- Password rotation does not work for the default user. [Add additional users]() to enable password rotation.
- For user access to the Redis Software Cluster Manager UI,
- you can set a [password expiration policy]() to prompt the user to change their password.

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

## Encrypt private keys
Source file: `raw/sources/20260409-docs-latest-operate-rs-security-encryption-pem-encryption-9cd4cc1506.md`
- Enable PEM encryption to automatically encrypt all private keys on disk. Public keys (`.cert` files) are not encrypted.
- When certificates are rotated, the encrypted private keys are also rotated.
- To enable PEM encryption and encrypt private keys on the disk, use [`rladmin`]() or the [REST API]().
- To deactivate PEM encryption and decrypt private keys on the disk, use [`rladmin`]() or the [REST API]().

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
