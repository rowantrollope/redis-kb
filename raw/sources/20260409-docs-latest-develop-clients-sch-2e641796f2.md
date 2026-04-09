---
title: Smart client handoffs
url: https://redis.io/docs/latest/develop/clients/sch/
retrieved_utc: '2026-04-09T20:45:58.230963+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/develop/clients/sch/index.html.md
---

# Smart client handoffs

```json metadata
{
  "title": "Smart client handoffs",
  "description": "Learn how to avoid disruptions during Redis server maintenance.",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "topics": ["smart-client-handoffs","resilience"],
  "relatedPages": ["/develop/clients/redis-py/connect#connect-using-smart-client-handoffs-sch","/develop/clients/nodejs/connect#connect-using-smart-client-handoffs-sch","/develop/clients/lettuce/connect#connect-using-smart-client-handoffs-sch","/develop/clients/go/connect#connect-using-smart-client-handoffs-sch"],
  "scope": "overview",
  "tableOfContents": {"sections":[{"id":"sch-support-in-redis-client-libraries","title":"SCH support in Redis client libraries"},{"children":[{"id":"redis-cloud","title":"Redis Cloud"},{"id":"redis-software","title":"Redis Software"},{"id":"redis-enterprise-for-kubernetes","title":"Redis Enterprise for Kubernetes"},{"id":"redis-open-source","title":"Redis Open Source"}],"id":"sch-support-in-redis-server-products","title":"SCH support in Redis server products"}]}

,
  "codeExamples": []
}
```
*Smart client handoffs (SCH)* is a feature of Redis Cloud and
Redis Software servers that lets them actively notify clients
about planned server maintenance shortly before it happens. This
lets a client reconnect or otherwise respond gracefully without significant
interruptions in service.

SCH is primarily useful when server software or hardware upgrades
are required. It provides two main features to help the
client avoid disruptions in service during the maintenance period:

-   **Relaxed timeouts**: Upgrades tend to impact the general performance of the server.
    Advance notification of the upgrade lets a client adjust its command
    timeouts to take this into account and avoid aborting commands too soon.
-   **Pre-handoffs**: Upgrades also involve migrating
    Redis shards to new nodes, which inevitably disconnects clients from
    existing nodes. However, with some advance warning of the disconnection,
    a client can buffer commands, connect to a new node, and then resume
    the buffered commands without aborting any of them. As a result, users
    see no disruption in service. These transparent reconnections to new endpoints
    are known as *pre-handoffs*.

SCH does not work with blocking connections.
These include connections used for blocking operations like
[`BLPOP`]() and also
[pub/sub]() subscriptions.
All non-blocking operations are safe to use with SCH.


## SCH support in Redis client libraries

SCH is enabled automatically on the client side during connection
if you select the [RESP3]()
protocol, which is a requirement for SCH. However, you can
configure some parameters, such as the timeouts to use
during maintenance.
See the pages linked below to learn how to configure SCH for:

- [redis-py]()
- [node-redis]()
- [Lettuce]()
- [go-redis]()

## SCH support in Redis server products

### Redis Cloud

SCH is fully supported and enabled by default on Redis Cloud, except when you
are using one of the following options:

- [AWS PrivateLink]()
- [Google Cloud Private Service Connect]()

These services don't currently allow for pre-handoffs, but you still get the
benefit of relaxed timeouts during database version upgrades. All other
configurations have full support for both relaxed timeouts and pre-handoffs.

### Redis Software

You must enable SCH explicitly on self-managed Redis Software servers by using the
[v1/cluster]()
REST API request to set the `client_maint_notifications` option to `true`.
The example below shows how to do this using the
[`curl`](https://curl.se/) command line utility:

```bash
curl -k -X PUT -H "accept: application/json" \
    -H "content-type: application/json" \
    -u "test@redis.com:test123" \
    -d '{ "client_maint_notifications": true }' \
    https://localhost:9443/v1/cluster
```

Redis Software uses relaxed timeouts to avoid command failures during
database version upgrades. The support for pre-handoffs depends on
the specific upgrade method you use, as detailed in the table below.

| Upgrade method | SCH support | Expected behavior |
| --- | --- | --- |
| [Rolling upgrade]() | Full | New nodes and old ones removed sequentially. SCH pre-handoffs and relaxed timeouts greatly reduce disruptions during the upgrade. |
| [In-place upgrade]() | Partial | Relaxed timeouts reduce errors but there are no pre-handoffs. Disconnections occur when processes are replaced during the upgrade, so clients should rely on auto-reconnect, which will cause brief lapses in service. |
| [Maintenance mode]() | Full | SCH is fully supported during hardware or OS patching operations. Pre-handoffs and relaxed timeouts minimize application impact. |

### Redis Enterprise for Kubernetes

SCH is not currently supported for [Kubernetes]() clusters.

### Redis Open Source

SCH is not currently supported for [Redis Open Source]().
