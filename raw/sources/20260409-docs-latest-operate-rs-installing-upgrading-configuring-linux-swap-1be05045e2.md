---
title: Configure swap for Linux
url: https://redis.io/docs/latest/operate/rs/installing-upgrading/configuring/linux-swap/
retrieved_utc: '2026-04-09T20:46:05.382229+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/installing-upgrading/configuring/linux-swap/index.html.md
---

# Configure swap for Linux

```json metadata
{
  "title": "Configure swap for Linux",
  "description": "Turn off Linux swap space.",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[{"id":"turn-off-swap","title":"Turn off swap"}]}

,
  "codeExamples": []
}
```Linux operating systems use swap space, which is enabled by default, to help manage memory (pages) by
copying pages from RAM to disk. Due to the way Redis Software
utilizes and manages memory, it is best to prevent OS swapping. For more details,Â see [memory limits](). The
recommendation is to turn off Linux swap completely in the OS.

When you install or build the OS on the machine intended to host your Redis Software cluster, avoid configuring swap partitions if possible.

## Turn off swap

To turn off swap in the OS of an existing server, VM, or instance, you
must have `sudo` access or be a root user to run the following commands.

Turn off swap:

```sh
sudo swapoff -a
```

To ensure swap remains off even after a reboot:

1. Open `/etc/fstab` in a text editor and locate the entry that defines the swap space.

    Example swap space entries:

    ```sh
    /swapfile   none    swap    sw      0       0
    ```

    ```sh
    UUID=1d5e1de7-226d-4f60-a99c-f7a31a045c59 none            swap    defaults        0 0
    ```

1. Comment out the swap space entry, then save the file.

    Example swap space entries commented out:

    ```sh
    #/swapfile   none    swap    sw      0       0
    ```

    ```sh
    #UUID=1d5e1de7-226d-4f60-a99c-f7a31a045c59 none            swap    defaults        0 0
    ```
