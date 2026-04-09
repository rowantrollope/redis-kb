---
title: Docker quickstart for Redis Software
url: https://redis.io/docs/latest/operate/rs/installing-upgrading/quickstarts/docker-quickstart/
retrieved_utc: '2026-04-09T20:45:52.232988+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/installing-upgrading/quickstarts/docker-quickstart/index.html.md
---

# Docker quickstart for Redis Software

```json metadata
{
  "title": "Docker quickstart for Redis Software",
  "description": "Set up a development or test deployment of Redis Software using Docker.",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[{"id":"install-docker","title":"Install Docker"},{"id":"run-the-container","title":"Run the container"},{"id":"set-up-a-cluster","title":"Set up a cluster"},{"id":"create-a-database","title":"Create a database"},{"children":[{"id":"use-redis-cli-inside-docker-connect-inside-docker","title":"Use redis-cli inside Docker {#connect-inside-docker}"},{"id":"connect-from-the-host-environment-connect-outside-docker","title":"Connect from the host environment {#connect-outside-docker}"}],"id":"connect-to-your-database","title":"Connect to your database"},{"children":[{"id":"single-node-single-node","title":"Single node {#single-node}"},{"id":"multiple-nodes-on-one-host-multi-node-one-host","title":"Multiple nodes on one host {#multi-node-one-host}"},{"id":"multiple-nodes-and-hosts-multi-node-multi-host","title":"Multiple nodes and hosts {#multi-node-multi-host}"}],"id":"test-different-topologies","title":"Test different topologies"}]}

,
  "codeExamples": []
}
```
Docker containers are currently only supported for development and test environments, not for production. Use [Redis Enterprise on Kubernetes]() for a supported containerized deployment.


For testing purposes, you can run Redis Software on Docker containers on
Linux, Windows, or MacOS.
The [Redis Software container](https://hub.docker.com/r/redislabs/redis/)
acts as a node in a cluster.

To get started with a single Redis Software container:

1. [Install Docker](#install-docker) for your operating system

2. [Run the Redis Software Docker container](#run-the-container)

3. [Set up a cluster](#set-up-a-cluster)

4. [Create a new database](#create-a-database)

5. [Connect to your database](#connect-to-your-database)

## Install Docker

Follow the Docker installation instructions for your operating system:

- [Linux](https://docs.docker.com/install/#supported-platforms)
- [MacOS](https://docs.docker.com/docker-for-mac/install/)
- [Windows](https://store.docker.com/editions/community/docker-ce-desktop-windows)

## Run the container

To download and start the Redis Software Docker container, run the following
[`docker run`](https://docs.docker.com/engine/reference/commandline/run/) command in the terminal or command line for your operating system.


On Windows, make sure Docker is configured to run Linux-based containers.


```sh
docker run -d --cap-add sys_resource --name RE -p 8443:8443 -p 9443:9443 -p 12000:12000 redislabs/redis
```

The example command runs the Docker container with Redis Software on `localhost` and opens the following ports: 

- Port 8443 for HTTPS connections

- Port 9443 for [REST API]() connections

- Port 12000 configured Redis database port allowing client connections

You can publish other [ports]()
with `-p <host_port>:<container_port>` or use the `--network host` option to open all ports to the host network.

## Set up a cluster



## Create a database







## Connect to your database

After you create the Redis database, you can connect to it to begin storing data.

### Use redis-cli inside Docker {#connect-inside-docker}

Every installation of Redis Software includes the command-line tool [`redis-cli`]() to interact with your Redis database. You can use `redis-cli` to connect to your database from within the same Docker network.

Use [`docker exec`](https://docs.docker.com/engine/reference/commandline/exec/) to start an interactive `redis-cli` session in the running Redis Software container:

```sh
$ docker exec -it <container_name_or_ID> redis-cli -h <host_or_IP> -p <port>
127.0.0.1:12000> SET key1 123
OK
127.0.0.1:12000> GET key1
"123"
```

To find the container name or ID, use [`docker ps`](https://docs.docker.com/reference/cli/docker/container/ls/) to list running containers.

### Connect from the host environment {#connect-outside-docker}

The database you created uses port `12000`, which is also mapped from the Docker container back to the host environment. This lets you use any method you have available locally to [connect to a Redis database](). Use `localhost` as the `host` and `12000` as the port.

## Test different topologies


Docker containers are currently only supported for development and test environments, not for production. Use [Redis Enterprise on Kubernetes]() for a supported containerized deployment.


When deploying Redis Software using Docker for testing, several common topologies are available, according to your requirements:

- [Single-node cluster](#single-node) â For local development or functional testing

- [Multi-node cluster on a single host](#multi-node-one-host) â For a small-scale deployment that is similar to production

- [Multi-node cluster with multiple hosts](#multi-node-multi-host) â For more predictable performance or high availability compared to single-host deployments

### Single node {#single-node}

The simplest topology is to run a single-node Redis Software cluster with a single container on a single host machine. You can use this topology for local development or functional testing.

Single-node clusters have limited functionality. For example, Redis Software can't use replication or protect against failures if the cluster has only one node.



### Multiple nodes on one host {#multi-node-one-host}

You can create a multi-node Redis Software cluster by deploying multiple containers to a single host machine. The resulting cluster is scale minimized but similar to production deployments.

However, this will also have several limitations.  For example, you cannot map the same port on multiple containers on the same host.



### Multiple nodes and hosts {#multi-node-multi-host}

You can create a multi-node Redis Software cluster with multiple containers by deploying each container to a different host machine.

This topology minimizes interference between containers, allowing for the testing of more Redis Software features.


