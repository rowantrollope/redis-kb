---
title: Plan Redis Software deployment
url: https://redis.io/docs/latest/operate/rs/installing-upgrading/install/plan-deployment/
retrieved_utc: '2026-04-09T20:45:52.903072+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/installing-upgrading/install/plan-deployment/index.html.md
---

# Plan Redis Software deployment

```json metadata
{
  "title": "Plan Redis Software deployment",
  "description": "Plan a deployment of Redis Software.",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[{"id":"next-steps","title":"Next steps"}]}

,
  "codeExamples": []
}
```
Before installing Redis Software, you need to:

- Set up your hardware. See [Hardware requirements]() and [Persistent and ephemeral node storage 
]() for more information.

- Choose your [deployment platform]().

    Redis Software supports a variety of platforms, including:

    - Multiple Linux distributions (Ubuntu, Red Hat Enterprise Linux (RHEL), IBM CentOS, Oracle Linux)
    - [Amazon AWS AMI]()
    - [Docker container]() (for development and testing only)
    - [Kubernetes]()

    For more details, see [Supported platforms]().

- Open appropriate [network ports]() in the firewall to allow connections to the nodes.

- Configure [cluster DNS]() so that cluster nodes can reach each other by DNS names.
- By default, the installation process requires an internet connection to install dependencies and synchronize the operating system clock. To learn more, see [Offline installation]().

- [Configure different mount points for data and log directories]().

## Next steps

After you finish planning your deployment, you can:

- [Download an installation package]().

- [Prepare to install]() Redis Software.

- [View installation questions]() and prepare answers before installation.
