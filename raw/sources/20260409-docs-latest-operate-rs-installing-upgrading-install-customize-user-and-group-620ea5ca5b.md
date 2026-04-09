---
title: Customize system user and group
url: https://redis.io/docs/latest/operate/rs/installing-upgrading/install/customize-user-and-group/
retrieved_utc: '2026-04-09T20:45:57.088931+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/installing-upgrading/install/customize-user-and-group/index.html.md
---

# Customize system user and group

```json metadata
{
  "title": "Customize system user and group",
  "description": "Specify the user and group who own all Redis Software processes.",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[{"id":"considerations","title":"Considerations"},{"id":"install-with-custom-user-or-group","title":"Install with custom user or group"}]}

,
  "codeExamples": []
}
```
By default, Redis Software is installed with the user:group `redislabs:redislabs`.

During installation, you can specify the user and group that own all Redis Software processes.

## Considerations

- Custom installation user is supported on Red Hat Enterprise Linux and compatible distributions.

- You must create the user and group before installing Redis Software.

- You must install Redis Software on all nodes in the cluster with the same user and group.

- You can specify an LDAP user as the installation user.

- If you specify the user only, then installation is run with the primary group that the user belongs to.

## Install with custom user or group

To customize the user or group during [installation](), include the `--os-user` or `--os-group` [command-line options]() when you run the `install.sh` script.

```sh
sudo ./install.sh --os-user <user> --os-group <group>
```
