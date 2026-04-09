---
title: Redis session store
url: https://redis.io/docs/latest/develop/use-cases/session-store/
retrieved_utc: '2026-04-09T20:45:52.502793+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/develop/use-cases/session-store/index.html.md
---

# Redis session store

```json metadata
{
  "title": "Redis session store",
  "description": "Store web sessions in Redis with cookie-based session IDs and TTL expiration",
  "categories": ["docs","develop","stack","oss","rs","rc"],
  "tableOfContents": {"sections":[{"id":"overview","title":"Overview"},{"id":"available-implementations","title":"Available implementations"}]}

,
  "codeExamples": []
}
```
This guide family shows how to store web sessions in Redis so multiple application servers can share session state.

## Overview

A Redis-backed session store is a good fit when you need:

* Shared session state across multiple web servers
* Fast reads and writes for authenticated user state
* Automatic session expiration after inactivity
* A simple way to store lightweight user-specific data

The typical pattern is:

1. Generate an opaque session ID
2. Store the session data in Redis under a key such as `session:{id}`
3. Send the session ID to the browser in a cookie
4. Load the session from Redis on each request
5. Refresh the TTL while the session stays active

## Available implementations

* [redis-py]() - Build a Python session store and a local demo server using the standard library HTTP server
* [Node.js]() - Build a Redis-backed session store with `node-redis` and a local Node.js demo server
* [Go]() - Build a Redis-backed session store with `go-redis` and a local Go demo server
* [Java]() - Build a Redis-backed session store with Jedis and a local Java demo server
* [Java (Lettuce)]() - Build a Redis-backed session store with Lettuce using async and reactive APIs
* [.NET]() - Build a Redis-backed session store with `StackExchange.Redis` and a local ASP.NET Core demo server
* [PHP]() - Build a Redis-backed session store with Predis and a local PHP demo server
* [Ruby]() - Build a Redis-backed session store with `redis-rb` and a local Ruby demo server
* [Rust]() - Build a Redis-backed session store with `redis-rs`, including both sync and async APIs
