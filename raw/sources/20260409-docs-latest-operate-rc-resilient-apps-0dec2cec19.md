---
title: Develop highly available and resilient apps with Redis Cloud
url: https://redis.io/docs/latest/operate/rc/resilient-apps/
retrieved_utc: '2026-04-09T20:45:59.927615+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rc/resilient-apps/index.html.md
---

# Develop highly available and resilient apps with Redis Cloud

```json metadata
{
  "title": "Develop highly available and resilient apps with Redis Cloud",
  "description": "Set up your Redis Cloud databases to enable stable and highly available apps.",
  "categories": ["docs","operate","rc"],
  "tableOfContents": {"sections":[{"children":[{"id":"enable-data-persistence","title":"Enable data persistence"},{"id":"enable-replication","title":"Enable replication"},{"id":"create-active-active-databases-for-geographic-availability","title":"Create Active-Active databases for geographic availability"},{"id":"set-manual-maintenance-windows","title":"Set manual maintenance windows"}],"id":"set-up-databases","title":"Set up databases"},{"children":[{"id":"production-usage-guides","title":"Production usage guides"},{"id":"re-attempt-connections","title":"Re-attempt connections"},{"id":"refresh-dns","title":"Refresh DNS"},{"id":"use-the-wait-and-waitaof-commands","title":"Use the WAIT and WAITAOF commands"}],"id":"set-up-redis-clients","title":"Set up Redis clients"},{"id":"test-failover-behavior","title":"Test failover behavior"},{"id":"more-info","title":"More info"}]}

,
  "codeExamples": []
}
```
You can set up your Redis Cloud databases and Redis Client libraries to ensure your app re-connects to your database after unexpected failover events or network outages and minimize data losses. 

## Set up databases

These settings can be turned on when you create or edit your database. 

### Enable data persistence

Enabling [Data persistence]() allows Redis to save your data to a durable storage medium, such as a disk, to ensure data availability in case of memory loss or system failure.

Redis Cloud supports the following data persistence options:

- An **Append-Only File** maintains a record of write operations. This lets you restore data by using the record to reconstruct the database up to the point of failure. The Append-only file updates on every write or every second.

- A **Snapshot** is a copy of the in-memory database, taken at periodic intervals (one, six, or twelve hours). You can restore data to the snapshot's point in time. 

Append-only files provide greater protection than snapshots at the cost of resources and recovery time. 
Although snapshot recovery is faster, the risk of data loss is higher, depending on the time between failure and the most recent snapshot.

If you do not enable data persistence, your data may be lost if the database goes down. It is best practice to  enable data persistence for all production databases. You can turn on data persistence when you create or edit your database. 

### Enable replication

[Database replication]() allows for automatic failover and greater fault tolerance. Replication can prevent data loss in the event of a hardware or zone failure. 

Redis Cloud supports these replication settings:

- **No replication**: You will have a single copy of your database in one zone. If anything happens to your database, your app will not be able to connect to it. 
- **Single-Zone**: Your database will have a primary dataset and a replica dataset located in the same cloud zone. If anything happens to the primary database, the replica takes over and becomes the new primary. Your app will connect to the new primary database automatically with the same endpoint.
- **Multi-Zone** _(or Multi-AZ)_: The primary and its replicas are stored in different availability zones. This means that your app will connect to the new primary database zone automatically if an entire availability zone becomes unavailable.

You can enable replication when you create your database. You can switch between no replication and single-zone replication after your create your database. However, you can't switch from no replication or single-zone replication to multi-zone replication.

It is best practice to enable replication for any databases that need to be highly available.

### Create Active-Active databases for geographic availability

For geographic availability, create [Active-Active databases](), which provide:

- **Geographic distribution**: Data is replicated across multiple regions and availability zones. Applications can read from and write to the nearest region, reducing latency for users worldwide.

- **99.999% availability**: Higher availability than single-region deployments by protecting against regional outages.

- **Automatic conflict resolution**: Uses conflict-free replicated data types (CRDTs) to handle concurrent writes across regions.

### Set manual maintenance windows

Redis maintains your Redis Cloud subscriptions and databases as needed to ensure your databases are running the most stable and up-to-date version of Redis. By default, Redis will perform [maintenance]() automatically while limiting service disruption as much as possible.

For stable apps, you may want to control when Redis can perform maintenance on your databases. For Redis Cloud Pro subscriptions, you can [set manual maintenance windows]() to ensure non-urgent maintenance will occur at set times. Configuring or altering the maintenance window will not have any impact on your subscription or databases.

A Redis Cloud Essentials database has a set maintenance window based on the region where it is located. See [Essentials maintenance]() for more information.

## Set up Redis clients

When you're developing your apps, it is best to use specific Redis Client features to connect to Redis Cloud if they are available for your preferred client.

See [Clients]() to learn how to connect with the official Redis clients.

### Production usage guides

For production-ready configurations and best practices, see the production usage guides for each client:

- [redis-py]()
- [Node.js]()
- [Jedis]()
- [Lettuce]()
- [go-redis]()
- [NRedisStack]()

### Re-attempt connections

Some clients allow you to re-try connecting to your database if the connection fails. For these clients, we recommend that you implement connection re-attempts to ensure high availability and connection stability. 

View your [client's docs]() to learn more.

### Refresh DNS

Your application may disconnect from your database either during planned maintenance or for other, unplanned reasons. Most Redis clients are set to refresh their DNS address when they reconnect to the database, and you will not be required to perform any further action. If you encounter connectivity problems for more than a minute during maintenance then you should refresh your DNS entries. 

Depending on the client, you may be recommended to turn off the DNS cache entirely. Refer to your [client's docs]() to learn more.

### Use the WAIT and WAITAOF commands

The [WAIT]() and [WAITAOF]() commands block the current client until all previous write commands are persisted between replicas. With these commands, your application guarantees that acknowledged writes are recorded between replicas. 

For more info, see [Use the WAIT command for strong consistency]().

## Test failover behavior

You can test your app's failover behavior in Redis Cloud by running a failover test. A failover test in Redis Cloud simulates a controlled disruption such as an endpoint migration, node failure, or cluster outage to confirm that your app can reconnect, recover, and continue operating without data loss. These tests are a critical part of validating high-availability and disaster recovery, ensuring that applications meet recovery time and recovery point objectives. 

For more info, see [How to run a Failover Test in Redis Cloud](https://support.redislabs.com/hc/en-us/articles/29001166157074-How-to-Run-a-Failover-Test-in-Redis-Cloud).

## More info

- [Redis Clients]()
- [Active-Active Redis]()
- [Active-Active Redis applications]()