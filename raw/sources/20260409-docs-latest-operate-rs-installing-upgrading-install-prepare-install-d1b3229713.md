---
title: Prepare to install Redis Software
url: https://redis.io/docs/latest/operate/rs/installing-upgrading/install/prepare-install/
retrieved_utc: '2026-04-09T20:45:53.443606+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/installing-upgrading/install/prepare-install/index.html.md
---

# Prepare to install Redis Software

```json metadata
{
  "title": "Prepare to install Redis Software",
  "description": "Prepare to install Redis Software.",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[{"id":"next-steps","title":"Next steps"}]}

,
  "codeExamples": []
}
```
Before you install Redis Software:

- [Download an installation package]().

- [View installation questions]() and optionally prepare answers before installation.

- Review the [security considerations]() for your deployment.

- Check that you have root-level access to each node, either directly or with `sudo`.

- Check that all [required ports are available]().

- [Turn off Linux swap]() on all cluster nodes.

- If you require the `redislabs` UID (user ID) and GID (group ID) numbers to be the same on all the nodes, create the `redislabs` user and group with the required numbers on each node.

- If you want to use Auto Tiering for your databases, see [Auto Tiering installation]().

## Next steps

- View [installation script options]() before starting the installation.

- [Install Redis Software]().
