---
title: Redis Flex and Auto Tiering quick start
url: https://redis.io/docs/latest/operate/rs/databases/flash/quickstart/
retrieved_utc: '2026-04-09T20:45:59.666106+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/databases/flash/quickstart/index.html.md
---

# Redis Flex and Auto Tiering quick start

```json metadata
{
  "title": "Redis Flex and Auto Tiering quick start",
  "description": "Get started with Redis Flex and Auto Tiering quickly, creating a cluster and database using flash storage.",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[{"children":[{"id":"bare-metal-vm-cloud-instance","title":"Bare metal, VM, Cloud instance"},{"id":"docker-based-installation-dockerbased-installation","title":"Docker-based installation {#dockerbased-installation}"}],"id":"install-redis-software","title":"Install Redis Software"},{"id":"prepare-and-format-flash-memory","title":"Prepare and format flash memory"},{"id":"set-up-a-clusterand-enable-redis-flex","title":"Set up a clusterÂ and enable Redis Flex"},{"id":"create-a-database","title":"Create a database"},{"id":"connect-to-your-database","title":"Connect to your database"},{"id":"next-steps","title":"Next steps"}]}

,
  "codeExamples": []
}
```This page guides you through a quick setup of [Redis Flex and Auto Tiering]() with a single node for testing and demo purposes.

For production environments, you can find more detailed installation instructions in the [install and setup]() section.

The steps to set up a Redis Software cluster using Redis Flex
with a single node are:

1. Install Redis Software or run it in a Docker
    container.
1. Set up a Redis Software cluster withÂ Redis Flex.
1. Create a new database with Redis Flex enabled.
1. Connect to your newÂ database.

## Install Redis Software

### Bare metal, VM, Cloud instance

To install on bare metal, a virtual machine, or an instance:

1. Download the binaries from the [Redis Software download center](https://cloud.redis.io/#/sign-up/software?direct=true).

1. Upload the binaries to a Linux-based operating system.

1. Extract the image:

    ```sh
    tar -vxf <downloaded tar file name>
    ```

1. After the `tar` command completes, you can find a new `install.sh` script in the current directory:

    ```sh
    sudo ./install.sh -y
    ```

### Docker-based installation {#dockerbased-installation}

For testing purposes, you can run a Redis Software
Docker container on Windows, MacOS, and Linux.

```sh
docker run -d --cap-add sys_resource --name rp -p 8443:8443 -p 12000:12000 redislabs/redis:latest
```

## Prepare and format flash memory

After you [install Redis Software](#install-redis-enterprise-software), use the `prepare_flash` script to prepare and format flash memory:

```sh
sudo /opt/redislabs/sbin/prepare_flash.sh
```

This script finds unformatted disks and mounts them as RAID partitions in `/var/opt/redislabs/flash`.

To verify the disk configuration, run:

```sh
sudo lsblk
```

## Set up a clusterÂ and enable Redis Flex

1. Direct your browser to `https://localhost:8443` on the host machine to
see the Redis Software Cluster Manager UI.

    
Depending on your browser, you may see a certificate error.
Choose "continue to the website" to go to the setup screen.
    

1. Select **Create new cluster**.

1. Set up account credentials for a cluster administrator, then select **Next** to proceed to cluster setup.

1. Enter your cluster license key if you have one. Otherwise, the cluster uses the trial version.

1. Provide a cluster FQDN such as `mycluster.local`, then select **Next**.

1. In the **Storage configuration** section, turn on the **Enable flash storage** toggle.

1. Select **Create cluster**.

1. Select **OK** to confirm that you are aware of the replacement of the HTTPS TLS
certificate on the node, and proceed through the browser warning.

## Create a database

On the **Databases** screen:

1. Select **Quick database**.

1. Verify **Flash** is selected for **Runs on**.

    

1. Enter `12000` for the endpoint **Port** number.

1. _(Optional)_ Select **Full options** to see available alerts.

1. Select **Create**.

You now have a database with Redis Flex enabled!

## Connect to your database

After you create the database, you can connect to it and store data. See [Test client connection]() for connection options and examples.

## Next steps

To see the true performance and scaleÂ of Redis Flex, you must tune your I/O path and set the flash path to the mounted path of SSD or NVMe flash memory as that is what it is designed to run on. For more information, see [Redis Flex and Auto Tiering]().
