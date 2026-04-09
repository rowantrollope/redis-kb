---
title: Install Redis Software on Linux
url: https://redis.io/docs/latest/operate/rs/installing-upgrading/install/install-on-linux/
retrieved_utc: '2026-04-09T20:45:54.255597+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/installing-upgrading/install/install-on-linux/index.html.md
---

# Install Redis Software on Linux

```json metadata
{
  "title": "Install Redis Software on Linux",
  "description": "Install Redis Software on Linux.",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[{"id":"install-on-linux","title":"Install on Linux"},{"id":"redis-flex-and-auto-tiering-installation","title":"Redis Flex and Auto Tiering installation"},{"id":"more-info-and-options","title":"More info and options"},{"id":"limitations","title":"Limitations"},{"id":"next-steps","title":"Next steps"}]}

,
  "codeExamples": []
}
```
After you [download a Redis Software installation package](), install it on one of the nodes in the cluster.

For installation on machines without an internet connection, see [Offline installation]().

## Install on Linux

To install Redis Software, use the command line:

1. Copy the installation package to the node.

1. On the node, change to the directory where the installation package is located and extract the installation files:

    ```sh
    tar vxf <tarfile name>
    ```

1.  _(Optional)_ Use the  to confirm the authenticity of Ubuntu/Debian or RHEL RPM packages:

    - For Ubuntu:
        1. Import the key:
        ```sh
        gpg --import <path to GPG key>
        ```
        2. Verify the package signature:
        ```sh
        dpkg-sig --verify </path-to/package.deb>
        ```

    - For RHEL:
        1. Import the key:
        ```sh
        rpm --import <path to GPG key>
        ```
        2. Verify the package signature:
         ```sh
         rpm --checksig </path-to/package.rpm>
         ```

1. To start the installation process, run the installation script. See [installation script options]() for a complete list of command-line options.

    **For default installation:**
    ```sh
    sudo ./install.sh
    ```

    **For custom installation directories:**

    If you need to specify custom storage paths for persistent or ephemeral storage during cluster setup, you must install Redis Software to custom directories.

    ```sh
    sudo ./install.sh --install-dir <path> --config-dir <path> --var-dir <path>
    ```

    For detailed information about custom installations, see [Customize installation directories]().

    
- The Redis Software files are installed in the default [file locations]() unless you specify custom directories.
- By default, Redis Software runs on the OS as the `redislabs` user and `redislabs` group. If needed, you can [specify a different user and group]() during the installation.
- You must either be the root user or use `sudo` to run the installation script.
    

1. Answer the [installation questions]() when shown to complete the installation process.

    
To skip the installation questions, use one of the following methods:

- Run `./install.sh -y` to answer yes to all of the questions.
- Create an [answer file]() to answer installation questions automatically.
    

1. When installation completes successfully, the output displays the Cluster Manager UI's IP address:

    ```sh
    Summary:
    -------
    ALL TESTS PASSED.
    2017-04-24 10:54:15 [!] Please logout and login again to make
    sure all environment changes are applied.
    2017-04-24 10:54:15 [!] Point your browser at the following
    URL to continue:
    2017-04-24 10:54:15 [!] https://<your_ip_here>:8443
    ```

1. Repeat this process for each node in the cluster.


## Redis Flex and Auto Tiering installation

If you want to use Redis Flex or Auto Tiering for your databases, review the prerequisites, storage requirements, and [other considerations]() and prepare and format the flash memory.

After you install Redis Software, use the `prepare_flash` script to prepare and format flash memory:

```sh
sudo /opt/redislabs/sbin/prepare_flash.sh
```

This script finds unformatted disks and mounts them as RAID partitions in `/var/opt/redislabs/flash`.

To verify the disk configuration, run:

```sh
sudo lsblk
```

## More info and options

To learn more about customization and find answers to related questions, see:

- [CentOS/RHEL firewall configuration]()
- [Change socket file location]()
- [Cluster DNS configuration]()
- [Cluster load balancer setup]()
- [mDNS client prerequisites]()
- [File locations]()
- [Supported platforms]()

## Limitations

Several Redis Software installation reference files are installed to the directory `/etc/opt/redislabs/` even if you use [custom installation directories]().

As a workaround to install Redis Software without using any root directories, do the following before installing Redis Software:

1. Create all custom, non-root directories you want to use with Redis Software.

1. Mount `/etc/opt/redislabs` to one of the custom, non-root directories.

## Next steps

1. [Create]()
    or [join]() an existing Redis Software cluster.

1. [Create a database]().

    For geo-distributed Active-Active replication, create an [Active-Active]() database.

1. [Add users]() to the cluster with specific permissions.  To begin, start with [Access control]().
