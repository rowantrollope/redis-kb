---
title: Active-Active Redis applications
url: https://redis.io/docs/latest/operate/rs/databases/active-active/develop/
retrieved_utc: '2026-04-09T20:46:01.089442+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/databases/active-active/develop/index.html.md
---

# Active-Active Redis applications

```json metadata
{
  "title": "Active-Active Redis applications",
  "description": "General information to keep in mind while developing applications for an Active-Active database.",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[{"id":"example-of-synchronization","title":"Example of synchronization"}]}

,
  "codeExamples": []
}
```Developing globally distributed applications can be challenging, as
developers have to think about race conditions and complex combinations
of events under geo-failovers and cross-region write conflicts. In Redis Software (RS), Active-Active databases
simplify developing such applications by directly using built-in smarts
for handling conflicting writes based on the data type in use. Instead
of depending on just simplistic "last-writer-wins" type conflict
resolution, geo-distributed Active-Active databases (formerly known as CRDBs) combine techniques defined in CRDT
(conflict-free replicated data types) research with Redis types to
provide smart and automatic conflict resolution based on the data type's
intent.

An Active-Active database is a globally distributed database that spans multiple Redis
Enterprise Software clusters. Each Active-Active database can have many Active-Active database instances
that come with added smarts for handling globally distributed writes
using the proven
[CRDT](https://en.wikipedia.org/wiki/Conflict-free_replicated_data_type)
approach.
[CRDT](https://en.wikipedia.org/wiki/Conflict-free_replicated_data_type)
research describes a set of techniques for creating systems that can
handle conflicting writes. CRDBs powered by Multi-Master Replication
(MMR) provide a straightforward and effective way to replicate your
data between regions and simplify development of complex applications
that can maintain correctness under geo-failovers and concurrent
cross-region writes to the same data.



Active-Active databases replicate data between multiple Redis Software
clusters. Common uses for Active-Active databases include disaster recovery,
geographically redundant applications, and keeping data closer to your
users' locations. MMR is always multi-directional amongst the clusters
configured in the Active-Active database. For unidirectional replication, please see the
Replica Of capabilities in Redis Software.

## Example of synchronization



[Learn more about
synchronization for
each supported data type]() and [how to develop applications]() with them on Redis Software.
