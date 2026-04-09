---
title: Configure AWS EC2 instances for Redis Software
url: https://redis.io/docs/latest/operate/rs/installing-upgrading/install/plan-deployment/configuring-aws-instances/
retrieved_utc: '2026-04-09T20:45:59.587974+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/installing-upgrading/install/plan-deployment/configuring-aws-instances/index.html.md
---

# Configure AWS EC2 instances for Redis Software

```json metadata
{
  "title": "Configure AWS EC2 instances for Redis Software",
  "description": "Considerations for installing and running Redis Software on Amazon Elastic Cloud Compute (EC2) instances.",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[{"id":"storage-considerations-storage","title":"Storage considerations {#storage}"},{"id":"instance-types-instance-types","title":"Instance types {#instance-types}"},{"id":"security-group-configuration-security","title":"Security group configuration {#security}"}]}

,
  "codeExamples": []
}
```There are some special considerations for installing
and running Redis Software on Amazon Elastic Cloud Compute (EC2) instances. 

These include:

- [Storage considerations](#storage)
- [Instance types](#instance-types)
- [Security group configuration](#security)

## Storage considerations {#storage}

AWS EC2 instances are ephemeral, but your persistent database storage should
not be. If you require a persistent storage location for your database,
the storage must be located outside of the instance. When you
set up an instance, make sure it has a properly sized EBS-backed volume
connected. When you set up Redis Software on the instance, make sure that [the
persistence storage]() is configured to use this volume.


After [installing the Redis SoftwareÂ package]() on the instance
and **before** running through [the setup process](),
you must give the group `redislabs` permission to the EBS volume by
running the following command from the OS command-line interface (CLI):
```sh
chown redislabs:redislabs /< ebs folder name>
```


Another feature that may be of importance to you is the use of
Provisioned IOPS for EBS-backed volumes. Provisioned IOPS guarantee a
certain level of disk performance. There are two features in Redis Software where
this feature could be critical to use:

1. When using [Redis Flex or Auto Tiering]()
1. When using AOF on every write and there is a high write load. In
    this case, the provisioned IOPS should be on the nodes used as
    replicas in the cluster.

## Instance types {#instance-types}

Choose an instance type that has (at minimum) enough free memory and
disk space to meet the Redis SoftwareÂ [hardware
requirements]().

In addition, some instance types are optimized for EBS-backed volumes
and some are not. If you are using persistent storage, you should use an
instance type that is, especially if disk drain rate matters to your database
implementation.

## Security group configuration {#security}

When configuring the security group:

- Define a custom TCP rule for port 8443 to allow web browser access
    to the Redis Software Cluster Manager UI from the IP address range you use to
    access the Cluster Manager UI.
- If you are using the DNS resolving option with Redis Software, define a DNS UDP
    rule for port 53 to allow access to the databases' endpoints by
    using the [DNS resolving mechanism]().
- To create a cluster that has multiple nodes all running as instances on AWS,
    you need to define a security group that has an All TCP rule for all ports, 0 - 65535,
    and add it to all instances that are part of the cluster.
    This ensures that all nodes are able to communicate with each other.
    To limit the number of open ports, you can open only the [ports used by Redis Software]().

After successfully launching the instances:

1. Install Redis Software from the [Linux package or AWS AMI]().
2. [Set up the cluster]().
