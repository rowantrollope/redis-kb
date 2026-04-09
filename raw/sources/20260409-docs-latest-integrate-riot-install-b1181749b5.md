---
title: Install
url: https://redis.io/docs/latest/integrate/riot/install/
retrieved_utc: '2026-04-09T20:45:52.287180+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/integrate/riot/install/index.html.md
---

# Install

```json metadata
{
  "title": "Install",
  "description": "Install RIOT-X on macOS, Linux, Windows, and Docker",
  "categories": null,
  "tableOfContents": {"sections":[{"id":"macos-and-linux-via-homebrew","title":"macOS and Linux via Homebrew"},{"id":"windows-via-scoop","title":"Windows via Scoop"},{"id":"docker","title":"Docker"},{"id":"manual-installation-on-all-supported-platforms","title":"Manual installation on all supported platforms"}]}

,
  "codeExamples": []
}
```
RIOT-X can be installed in different ways depending on your environment and preference.

## macOS and Linux via Homebrew

```
brew install redis/tap/riotx
```

## Windows via Scoop

```
scoop bucket add redis https://github.com/redis/scoop.git
scoop install riotx
```

## Docker

```
docker run riotx/riotx [OPTIONS] [COMMAND]
```

## Manual installation on all supported platforms

Download the pre-compiled binary from [RIOT-X Releases](https://github.com/redis/riotx-dist/releases), uncompress, and copy to the desired location.

Full installation documentation is available [here](https://redis.github.io/riotx/quick-start/install.html).
