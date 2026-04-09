---
title: Install Redis Stack on Windows
url: https://redis.io/docs/latest/operate/oss_and_stack/install/archive/install-stack/windows/
retrieved_utc: '2026-04-09T20:45:52.788869+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/oss_and_stack/install/archive/install-stack/windows/index.html.md
---

# Install Redis Stack on Windows

```json metadata
{
  "title": "Install Redis Stack on Windows",
  "description": "How to install Redis Stack on Windows",
  "categories": ["docs","operate","stack","oss"],
  "tableOfContents": {"sections":[{"id":"run-redis-on-windows-using-memurai","title":"Run Redis on Windows using Memurai"},{"id":"run-redis-on-windows-using-docker","title":"Run Redis on Windows using Docker"}]}

,
  "codeExamples": []
}
```
## Run Redis on Windows using Memurai

Redis is now natively supported on Windows through [Memurai](https://www.memurai.com/), the official Redis partner for Windows compatibility.

## Run Redis on Windows using Docker

To install Redis Stack on Windows, you will need to have Docker installed. When Docker is up and running, open Windows PowerShell and follow the instructions described in [Run Redis Stack on Docker](). Then, use Docker to connect with `redis-cli` as explained in that topic.


If you attempt to use Windows Subsystem for Linux (WSL) or Ubuntu for Windows to follow [Linux instructions](), you will get a `systemd` error telling you `System has not been booted with systemd as init system (PID 1). Can't operate.` Do not fret. Just use Docker. 

_`systemd` is a suite of basic building blocks for a Linux system._ For more information about its function, see [System and Service Manager](https://systemd.io/). This becomes an issue due to the lack of support for Linux workflows on WSL. But, you can test the instructions listed in [Systemd support is now available in WSL!](https://devblogs.microsoft.com/commandline/systemd-support-is-now-available-in-wsl/). Let us know how that worked for you. 


