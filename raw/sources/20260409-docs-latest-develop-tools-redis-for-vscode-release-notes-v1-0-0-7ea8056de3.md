---
title: Redis for VS Code v1.0.0, September 2024
url: https://redis.io/docs/latest/develop/tools/redis-for-vscode/release-notes/v1.0.0/
retrieved_utc: '2026-04-09T20:46:00.990051+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/develop/tools/redis-for-vscode/release-notes/v1.0.0/index.html.md
---

# Redis for VS Code v1.0.0, September 2024

```json metadata
{
  "title": "Redis for VS Code v1.0.0, September 2024",
  "description": "Redis for VS Code v1.0",
  "categories": null,
  "tableOfContents": {"sections":[{"children":[{"id":"headlines","title":"Headlines"},{"id":"details","title":"Details"},{"id":"get-started-with-redis-for-vs-code","title":"Get started with Redis for VS Code"}],"id":"100-september-2024","title":"1.0.0 (September 2024)"}]}

,
  "codeExamples": []
}
```
## 1.0.0 (September 2024)

This is the first release of Redis for VS Code.

Redis for VS Code is the official Visual Studio Code extension that provides an intuitive and efficient GUI for Redis databases, developed by Redis.

### Headlines

* Universal Redis Support: Connect to any Redis instance, including Redis Open Source, Redis Cloud, Redis Software, and Redis on Azure Cache.

* Advanced Connectivity: Supports TLS certificates and SSH tunnels, with an option for automatic data decompression for GZIP, SNAPPY, Brotli, and more.

* Data types: Supports strings, hashes, lists, sets, sorted sets, and JSON.

* Human-readable data representation: Offers formatters like ASCII, JSON, Binary, Hex, 32-bit, and 64-bit vectors, and others.

* Integrated Redis CLI: Leverage Redis CLI with syntax preview as you type commands.

### Details

- Database connections:

Â Â - Connect to any Redis instance, including Redis Open Source, Redis Cloud, Redis Software, and Redis on Azure Cache.

Â Â - View, edit, and manage your Redis database connections.

Â Â - Supports TLS connections and SSH tunnels for secure access.

Â Â - Automatically handle data compressed with GZIP, LZ4, SNAPPY, ZSTD, Brotli, or PHP GZCompress.

Â Â - Choose and work with a specific logical database within your Redis instance.

- Redis data structures:

Â Â - Use an intuitive tree view interface to browse, filter, and visualize Redis key-value data structures.

Â Â -Â  Perform create, read, update, and delete operations on the following Redis data types:

Â Â Â Â - Strings

Â Â Â Â - Hashes

Â Â Â Â - Lists

Â Â Â Â - Sets

Â Â Â Â - Sorted sets

Â Â Â Â - JSON

- View your data in multiple human-readable formats, including Unicode, ASCII, Binary, HEX, JSON, Msgpack, Pickle, Protobuf, PHP serialized, Java serialized, and Vector (32 and 64-bit).

Â - Sort by key names and apply filters by pattern or data type for quick and precise data access.

Â - Conduct detailed searches within fields in hashes, indexes in lists, and members in sets and sorted sets.

- Redis CLI:

Â Â - Access a built-in Redis CLI with improved type-ahead command suggestions, helping you execute commands accurately and efficiently.

### Get started with Redis for VS Code

This repository contains the source code for the Redis for VS Code extension.

Install the extension from the [Visual Studio Code Marketplace](https://marketplace.visualstudio.com/items?itemName=redis.redis-for-vscode) to use it.
