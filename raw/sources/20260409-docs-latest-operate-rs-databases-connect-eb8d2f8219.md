---
title: Connect to a database
url: https://redis.io/docs/latest/operate/rs/databases/connect/
retrieved_utc: '2026-04-09T20:45:55.449846+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/databases/connect/index.html.md
---

# Connect to a database

```json metadata
{
  "title": "Connect to a database",
  "description": "Learn how to connect your application to a Redis database hosted by Redis Enterprise Software and test your connection.",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[{"id":"connect-to-a-database","title":"Connect to a database"},{"id":"continue-learning-with-redis-university","title":"Continue learning with Redis University"}]}

,
  "codeExamples": []
}
```
After you [set up a cluster]() and [create a Redis database](), you can connect to your database.

To connect to your database, you need the database endpoint, which includes the cluster name (FQDN) and the database port. To view and copy public and private endpoints for a database in the cluster, see the databaseâs **Configuration > General** section in the Cluster Manager UI.



If you try to connect with the FQDN, and the database does not respond, try connecting with the IP address. If this succeeds, DNS is not properly configured. To set up DNS, see [Configure cluster DNS]().

If you want to secure your connection, set up [TLS]().

## Connect to a database

Use one of the following connection methods to connect to your database:

- [`redis-cli`]() utility

- [Redis Insight](https://redis.com/redis-enterprise/redis-insight/)

- [Redis client]() for your preferred programming language

For examples, see [Test client connection]().

## Continue learning with Redis University

See the [Connect to a database on Redis Software](https://university.redis.io/course/zyxx6fdkcm5ahd) for the course.
