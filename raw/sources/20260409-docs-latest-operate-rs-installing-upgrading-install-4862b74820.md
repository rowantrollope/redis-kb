---
title: Install Redis Software
url: https://redis.io/docs/latest/operate/rs/installing-upgrading/install/
retrieved_utc: '2026-04-09T20:45:57.792085+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/installing-upgrading/install/index.html.md
---

# Install Redis Software

```json metadata
{
  "title": "Install Redis Software",
  "description": "Install Redis Software on Linux.",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[{"id":"permissions-and-access","title":"Permissions and access"},{"id":"more-info-and-options","title":"More info and options"},{"id":"next-steps","title":"Next steps"}]}

,
  "codeExamples": []
}
```
After you [plan your deployment](), [download a Redis Software installation package](), and finish [installation preparation]():

1. [Install the Redis Software package]() on one of the nodes in the cluster.

1. Repeat this process for each node in the cluster.

For installation on machines without an internet connection, see [Offline installation]().

## Permissions and access

- Redis Software installation creates the `redislabs:redislabs` user and group. 

    Assigning other users to the `redislabs` group is optional. Users belonging to the `redislabs` group have permission to read and execute (e.g. use the `rladmin` status command) but are not allowed to write (or delete) files or directories.

- Redis Software is certified to run with permissions set to `750`, an industry standard.

    
Do not reduce permissions to `700`. This configuration has not been tested and is not supported.
    

- Redis Software requires `umask` to be `0022` during installation to correctly set permissions for the installed directories and files.

## More info and options

If you've already installed Redis Software, you can also:

- [Upgrade an existing deployment]().

- [Uninstall an existing deployment]().

To learn more about customization and find answers to related questions, see:

- [CentOS/RHEL Firewall configuration]()
- [Change socket file location]()
- [Cluster DNS configuration]()
- [Cluster load balancer setup]()
- [File locations]()
- [Supported platforms]()
- [Manage installation questions]()
- [mDNS client prerequisites]()
- [User and group ownership]()

## Next steps

After your cluster is set up with nodes, you can:

- [Add users]() to the cluster with specific permissions.  To begin, start with [Access control]().
- [Create databases]() to use with your applications.

