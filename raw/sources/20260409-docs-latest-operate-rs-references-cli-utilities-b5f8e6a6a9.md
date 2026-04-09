---
title: Command-line utilities
url: https://redis.io/docs/latest/operate/rs/references/cli-utilities/
retrieved_utc: '2026-04-09T20:46:03.376583+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/references/cli-utilities/index.html.md
---

# Command-line utilities

```json metadata
{
  "title": "Command-line utilities",
  "description": "Reference for Redis Software command-line utilities, including rladmin, redis-cli, crdb-cli, and rlcheck.",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[{"id":"public-utilities","title":"Public utilities"},{"id":"internal-utilities","title":"Internal utilities"}]}

,
  "codeExamples": []
}
```
Redis Software includes a set of utilities to help you manage and test your cluster. To use a utility, run it from the command line.

## Public utilities

Administrators can use these CLI tools to manage and test a Redis Software cluster. You can find the binaries in the `/opt/redislabs/bin/` directory.



## Internal utilities

The `/opt/redislabs/bin/` directory also contains utilities used internally by Redis Software and for troubleshooting.


Do not use these tools for normal operations.


| Utility | Description |
|---------|-------------|
| bdb-cli | `redis-cli` connected to a database. |
| ccs-cli | Inspect Cluster Configuration Store. |
| cnm_ctl | Manages services for provisioning, migration, monitoring, <br />resharding, rebalancing, deprovisioning, and autoscaling. |
| consistency_checker | Checks the consistency of Redis instances. |
| crdbtop | Monitor Active-Active databases. |
| debug_mode | Enables debug mode. |
| debuginfo | Collects cluster information. |
| dmc-cli | Configure and monitor the DMC proxy. |
| pdns_control | Sends commands to a running PowerDNS nameserver. |
| redis_ctl | Stops or starts Redis instances. |
| rl_rdbloader | Load RDB backup files to a server. |
| rlutil | Maintenance utility. |
| shard-cli | `redis-cli` connected to a shard. |
| supervisorctl | Manages the lifecycles of Redis Software services. |
