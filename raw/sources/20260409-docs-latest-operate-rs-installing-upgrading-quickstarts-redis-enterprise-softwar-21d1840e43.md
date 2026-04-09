---
title: Redis Software quickstart
url: https://redis.io/docs/latest/operate/rs/installing-upgrading/quickstarts/redis-enterprise-software-quickstart/
retrieved_utc: '2026-04-09T20:45:51.835779+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/installing-upgrading/quickstarts/redis-enterprise-software-quickstart/index.html.md
---

# Redis Software quickstart

```json metadata
{
  "title": "Redis Software quickstart",
  "description": "Set up a test deployment of Redis Software for Linux.",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[{"children":[{"id":"update-sysctlconf-to-avoid-port-collisions","title":"Update sysctl.conf to avoid port collisions"},{"id":"os-conflicts-with-port-53","title":"OS conflicts with port 53"},{"id":"configuration-for-aws-and-gcp","title":"Configuration for AWS and GCP"}],"id":"ensure-port-availability","title":"Ensure port availability"},{"id":"install-redis-software","title":"Install Redis Software"},{"id":"set-up-a-cluster","title":"Set up a cluster"},{"id":"create-a-database","title":"Create a database"},{"id":"connect-to-your-database","title":"Connect to your database"},{"id":"supported-web-browsers","title":"Supported web browsers"},{"id":"continue-learning-with-redis-university","title":"Continue learning with Redis University"}]}

,
  "codeExamples": []
}
```This guide helps you install Redis Software on a Linux host to test its capabilities.

When finished, you'll have a simple cluster with a single node:

1. [Ensure port availability](#ensure-port-availability)

1. [Install Redis Software](#install-redis-enterprise-software)

1. [Set up a Redis Software cluster](#set-up-a-cluster)

1. [Create a new Redis database](#create-a-database)

1. [Connect to your Redis database](#connect-to-your-database)


**This quickstart is designed for local testing only.**
For production environments, see the [install and setup]() guide for deployment options and instructions.


## Ensure port availability



### Update `sysctl.conf` to avoid port collisions



### OS conflicts with port 53




### Configuration for AWS and GCP

For detailed configuration instructions, see your cloud provider's documentation.

1. Create a VPC that you can use with regional subnets.

1. Within this VPC, create firewall rules that allow external and internal access for Redis Software.


| Ingress/Egress   | Source                                             | Protocol  | Ports                                    | Other protocols  |
|------------------|----------------------------------------------------|-----------|------------------------------------------|------------------|
| Ingress          | 0.0.0.0/0                                          | TCP       | 21, 22, 53, 8001, 8443, 9443, 8070, <nobr>10000-19999</nobr> | ICMP             |
| Ingress          | 0.0.0.0/0                                          | UDP       | 53, 5353                                  |                  |
| Ingress          | 10.0.0.0/8  (if subnets use 10. ranges) | all       | all                                      |                  | 


## Install Redis Software

To install Redis Software:

1. Download the installation files from the [Redis Software Download Center](https://redis.io/downloads/#Redis_Software)
and copy the download package to a machine with a Linux-based OS. 

    
You are required to create a free account to access the download center.
    

1. Extract the installation files:

    ```sh
    tar vxf <downloaded tar file name>
    ```

1. Run the `install.sh` script in the current directory:

    ```sh
    sudo ./install.sh -y
    ```

## Set up a cluster

To set up your machine as a Redis Software cluster:



## Create a database



## Connect to your database

After you create the Redis database, you can connect to it and store data.
See [Test client connection]() for connection options and examples.

## Supported web browsers

To use the Redis Software Cluster Manager UI, you need a modern browser with JavaScript enabled.
 
The Cluster Manager UI is officially supported for the latest version of [Google Chrome](https://www.google.com/chrome/), as well as the three previous and three subsequent versions.

## Continue learning with Redis University



