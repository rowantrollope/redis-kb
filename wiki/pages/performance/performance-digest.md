---
title: "Performance Digest"
last_updated: 2026-04-09
tags: [performance, digest]
source_count: 407
---

# Performance Digest

Auto-compiled synthesis from raw sources.

## Azure Cache for Redis best practices
Source file: `raw/sources/20260408-azure-cache-for-redis-best-practices.md`
- Source: https://learn.microsoft.com/en-us/azure/azure-cache-for-redis/cache-best-practices
- Upgrade to Microsoft Edge to take advantage of the latest features, security updates, and technical support.
- Azure Cache for Redis is a fully managed Redis service based on the community edition of Redis. It can be used as a data cache, session store, or message broker that provides high throughput and low-latency access to data for applications. These tutorials, API references, and other documentation show you how to use Redis from any application on Azure. For the latest and most performant Redis experience, see the links on this page for Azure Managed Redis, the newest Redis offering on Azure.

## Redis Latency Doc
Source file: `raw/sources/20260408-redis-latency-doc.md`
- Source: https://raw.githubusercontent.com/redis/redis-doc/refs/heads/master/docs/management/optimization/latency.md

## APIs
Source file: `raw/sources/20260409-docs-latest-apis-e79501743c.md`
- Redis provides a number of APIs for developers and operators. The following sections provide you easy access to the client API, the several programmability APIs, the RESTFul management APIs and the Kubernetes resource definitions.
- Redis comes with a wide range of commands that help you to develop real-time applications. You can find a complete overview of the Redis commands here:
- As a developer, you will likely use one of our supported client libraries for connecting and executing commands.
- The existing Redis commands cover most use cases, but if low latency is a critical requirement, you might need to extend Redis' server-side functionality.
- Lua scripts have been available since early versions of Redis. With Lua, the script is provided by the client and cached on the server side, which implies the risk that different clients might use a different script version.

## ACL CAT
Source file: `raw/sources/20260409-docs-latest-commands-acl-cat-c8bce03b76.md`
- If a category name is given, the command shows all the Redis commands in
- ACL categories are very useful in order to create ACL rules that include or
- exclude a large set of commands at once, without specifying every single
- command. For instance, the following rule will let the user `karin` perform
- everything but the most dangerous operations that may affect the server

## BLPOP
Source file: `raw/sources/20260409-docs-latest-commands-blpop-91a1e93b31.md`
- This command's behavior varies in clustered Redis environments. See the [multi-key operations]() page for more information.
- It is the blocking version of [`LPOP`]() because it blocks the connection when there
- are no elements to pop from any of the given lists.
- An element is popped from the head of the first list that is non-empty, with the
- given keys being checked in the order that they are given.

## CLIENT SETINFO
Source file: `raw/sources/20260409-docs-latest-commands-client-setinfo-2244b4b89b.md`
- Client libraries are expected to pipeline this command after authentication on all connections
- and ignore failures since they could be connected to an older version that doesn't support them.
- * `lib-name` - meant to hold the name of the client library that's in use.
- * `lib-ver` - meant to hold the client library's version.
- There is no limit to the length of these attributes. However it is not possible to use spaces, newlines, or other non-printable characters that would violate the format of the [`CLIENT LIST`]() reply.

## COMMAND
Source file: `raw/sources/20260409-docs-latest-commands-command-f203e65eb1.md`
- Its reply describes all commands that the server can process.
- Redis clients can call it to obtain the server's runtime capabilities during the handshake.
- Please refer to its subcommands for further details.
- this command is especially beneficial for cluster-aware clients.
- Such clients must identify the names of keys in commands to route requests to the correct shard.

## CONFIG RESETSTAT
Source file: `raw/sources/20260409-docs-latest-commands-config-resetstat-67108c2aba.md`
- The following is a non-exhaustive list of values that are reset:
- * Connections received, rejected and evicted
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Not supported">&#x274c; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> | <span title="Not supported">&#x274c; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> |  |

## FT.AGGREGATE
Source file: `raw/sources/20260409-docs-latest-commands-ft-aggregate-bb2b8cad99.md`
- Run a search query on an index and perform aggregate transformations on the results.
- This command will only return keys to which the user has read access.
- is index name against which the query is executed. You must first create the index using [`FT.CREATE`]().
- is base filtering query that retrieves the documents. It follows the exact same syntax as the search query, including filters, unions, not, optional, and so on.
- <summary><code>VERBATIM</code></summary>

## FT.CREATE
Source file: `raw/sources/20260409-docs-latest-commands-ft-create-117ffe4035.md`
- Create an index with the given specification. For usage, see [Examples](#examples).
- If such index already exists, returns an error reply `(error) Index already exists`.
- <summary><code>SCHEMA {identifier} AS {attribute} {attribute type} {options...</code></summary>
- after the SCHEMA keyword, declares which fields to index:
- For JSON, the identifier is a JSON Path expression.

## FT.PROFILE
Source file: `raw/sources/20260409-docs-latest-commands-ft-profile-7e22e52d68.md`
- Apply [`FT.SEARCH`]() or [`FT.AGGREGATE`]() command to collect performance details. For usage, see [Examples](#examples).
- is the name of an index created using [`FT.CREATE`]().
- <summary><code>SEARCH | AGGREGATE</code></summary>
- represents the profile type, either [`FT.SEARCH`]() or [`FT.AGGREGATE`]().
- removes details of any `reader` iterators.

## FT.SEARCH
Source file: `raw/sources/20260409-docs-latest-commands-ft-search-96bb30b24c.md`
- Search the index with a textual query, returning either documents or just ids.
- This command will only return keys to which the user has read access.
- is index name. You must first create the index using [`FT.CREATE`]().
- is text query to search. If it's more than a single word, put it in quotes. Refer to [Query syntax]() for more details.
- <summary><code>NOCONTENT</code></summary>

## INFO
Source file: `raw/sources/20260409-docs-latest-commands-info-b042b9e571.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- The `INFO` command returns information and statistics about the server in a
- format that is simple to parse by computers and easy to read by humans.
- The optional parameter can be used to select a specific section of information:

## LATENCY
Source file: `raw/sources/20260409-docs-latest-commands-latency-2ed99a829b.md`
- To see the list of available commands you can call [`LATENCY HELP`]().

## LATENCY DOCTOR
Source file: `raw/sources/20260409-docs-latest-commands-latency-doctor-f7ca231dcd.md`
- This command is the most powerful analysis tool in the latency monitoring
- framework, and is able to provide additional statistical data like the average
- period between latency spikes, the median deviation, and a human-readable
- analysis of the event. For certain events, like `fork`, additional information
- is provided, like the rate at which the system forks processes.

## LATENCY GRAPH
Source file: `raw/sources/20260409-docs-latest-commands-latency-graph-8bb7cdd4bc.md`
- The vertical labels under each graph column represent the amount of seconds,
- minutes, hours or days ago the event happened. For example "15s" means that the
- first graphed event happened 15 seconds ago.
- The graph is normalized in the min-max scale so that the zero (the underscore
- in the lower row) is the minimum, and a # in the higher row is the maximum.

## LATENCY HELP
Source file: `raw/sources/20260409-docs-latest-commands-latency-help-ae76d1179b.md`
- For more information refer to the [Latency Monitoring Framework page][lm].
- [lm]: /operate/oss_and_stack/management/optimization/latency-monitor.md
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:----------------------|:-----------------|:------|
- | <span title="Not supported">&#x274c; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> | <span title="Not supported">&#x274c; Standard</span><br /><span title="Not supported"><nobr>&#x274c; Active-Active</nobr></span> |  |

## LATENCY HISTOGRAM
Source file: `raw/sources/20260409-docs-latest-commands-latency-histogram-b6ac2f3840.md`
- By default, all available latency histograms are returned.
- You can filter the reply by providing specific command names.
- Each histogram consists of the following fields:
- * Each bucket represents a latency range
- * Each bucket covers twice the previous bucket's range

## LATENCY HISTORY
Source file: `raw/sources/20260409-docs-latest-commands-latency-history-a332594e60.md`
- This is useful to an application that wants to fetch raw data in order to perform monitoring, display graphs, and so forth.
- The command will return up to 160 timestamp-latency pairs for the `event`.
- For more information refer to the [Latency Monitoring Framework page][lm].
- [lm]: /operate/oss_and_stack/management/optimization/latency-monitor.md
- | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |

## LATENCY LATEST
Source file: `raw/sources/20260409-docs-latest-commands-latency-latest-fe01e94491.md`
- Each reported event has the following fields:
- * Unix timestamp of the latest latency spike for the event.
- * All-time maximum latency for this event.
- "All-time" means the maximum latency since the Redis instance was
- started, or the time that events were reset [`LATENCY RESET`]().

## LATENCY RESET
Source file: `raw/sources/20260409-docs-latest-commands-latency-reset-42e004f25e.md`
- When the command is called without arguments, it resets all the
- events, discarding the currently logged latency spike events, and resetting
- It is possible to reset only specific events by providing the `event` names
- For more information refer to the [Latency Monitoring Framework page][lm].
- [lm]: /operate/oss_and_stack/management/optimization/latency-monitor.md

## MIGRATE
Source file: `raw/sources/20260409-docs-latest-commands-migrate-f595b03f39.md`
- On success the key is deleted from the original instance and is guaranteed to
- The command is atomic and blocks the two instances for the time required to
- transfer the key, at any given time the key will appear to exist in a given
- instance or in the other instance, unless a timeout error occurs. In 3.2 and
- above, multiple keys can be pipelined in a single call to `MIGRATE` by passing

## MONITOR
Source file: `raw/sources/20260409-docs-latest-commands-monitor-9e51c9d60f.md`
- It can help in understanding what is happening to the database.
- This command can both be used via `redis-cli` and via `telnet`.
- The ability to see all the requests processed by the server is useful in order
- to spot bugs in an application both when using Redis as a database and as a
- Use `SIGINT` (Ctrl-C) to stop a `MONITOR` stream running via `redis-cli`.

## PING
Source file: `raw/sources/20260409-docs-latest-commands-ping-3d163cd425.md`
- 1. Testing whether a connection is still alive.
- 1. Verifying the server's ability to serve data - an error is returned when this isn't the case (e.g., during load from persistence or accessing a stale replica).
- If the client is subscribed to a channel or a pattern, it will instead return a
- multi-bulk with a "pong" in the first position and an empty bulk in the second
- position, unless an argument is provided in which case it returns a copy

## Redis 6.2 Commands Reference
Source file: `raw/sources/20260409-docs-latest-commands-redis-6-2-commands-e6431c67fe.md`
- This page provides a comprehensive reference of all Redis commands available in Redis 6.2, organized by functional group. Each command includes its description and syntax in a collapsible section for easy navigation.
- Redis 6.2 includes all commands from previous versions plus new commands introduced in 6.2. Commands marked with **â­ New in 6.2** were added in this release.
- Command page links take you to the *current implementation* of each command.
- String commands operate on string values, the most basic Redis data type.
- <summary><strong><a href="/commands/append/">APPEND</a></strong> - Appends a string to the value of a key. Creates the key if it doesn't exist.</summary>

## Redis 7.2 Commands Reference
Source file: `raw/sources/20260409-docs-latest-commands-redis-7-2-commands-dd090ef4f7.md`
- This page provides a comprehensive reference of all Redis commands available in Redis 7.2, organized by functional group. Each command includes its description and syntax in a collapsible section for easy navigation.
- Redis 7.2 includes all commands from previous versions plus new commands introduced in 7.2. Commands marked with **â­ New in 7.2** were added in this release.
- Command page links take you to the *current implementation* of each command.
- String commands operate on string values, the most basic Redis data type.
- <summary><strong><a href="/commands/append/">APPEND</a></strong> - Appends a string to the value of a key. Creates the key if it doesn't exist.</summary>

## Redis 7.4 Commands Reference
Source file: `raw/sources/20260409-docs-latest-commands-redis-7-4-commands-7758b99965.md`
- This page provides a comprehensive reference of all Redis commands available in Redis 7.4, organized by functional group. Each command includes its description and syntax in a collapsible section for easy navigation.
- Redis 7.4 includes all commands from previous versions plus new commands introduced in 7.4. Commands marked with **â­ New in 7.4** were added in this release.
- Command page links take you to the *current implementation* of each command.
- String commands operate on string values, the most basic Redis data type.
- <summary><strong><a href="/commands/append/">APPEND</a></strong> - Appends a string to the value of a key. Creates the key if it doesn't exist.</summary>

## Redis 8.0 Commands Reference
Source file: `raw/sources/20260409-docs-latest-commands-redis-8-0-commands-301ba84ca3.md`
- This page provides a comprehensive reference of all Redis commands available in Redis 8.0, organized by functional group. Each command includes its description and syntax in a collapsible section for easy navigation.
- Redis 8.0 includes all commands from previous versions plus new commands introduced in 8.0. Commands marked with **â­ New in 8.0** were added in this release.
- Command page links take you to the *current implementation* of each command.
- String commands operate on string values, the most basic Redis data type.
- <summary><strong><a href="/commands/append/">APPEND</a></strong> - Appends a string to the value of a key. Creates the key if it doesn't exist.</summary>

## Redis 8.2 Commands Reference
Source file: `raw/sources/20260409-docs-latest-commands-redis-8-2-commands-382742c6b8.md`
- This page provides a comprehensive reference of all Redis commands available in Redis 8.2, organized by functional group. Each command includes its description and syntax in a collapsible section for easy navigation.
- Redis 8.2 includes all commands from previous versions plus new commands introduced in 8.2. Commands marked with **â­ New in 8.2** were added in this release.
- Command page links take you to the *current implementation* of each command.
- String commands operate on string values, the most basic Redis data type.
- <summary><strong><a href="/commands/append/">APPEND</a></strong> - Appends a string to the value of a key. Creates the key if it doesn't exist.</summary>

## Redis 8.4 Commands Reference
Source file: `raw/sources/20260409-docs-latest-commands-redis-8-4-commands-b2084a511a.md`
- This page provides a comprehensive reference of all Redis commands available in Redis 8.4, organized by functional group. Each command includes its description and syntax in a collapsible section for easy navigation.
- Redis 8.4 includes all commands from previous versions plus new commands introduced in 8.4. Commands marked with **â­ New in 8.4** were added in this release.
- Command page links take you to the *current implementation* of each command.
- String commands operate on string values, the most basic Redis data type.
- <summary><strong><a href="/commands/append/">APPEND</a></strong> - Appends a string to the value of a key. Creates the key if it doesn't exist.</summary>

## Redis 8.6 Commands Reference
Source file: `raw/sources/20260409-docs-latest-commands-redis-8-6-commands-b1ac17f9bc.md`
- This page provides a comprehensive reference of all Redis commands available in Redis 8.6, organized by functional group. Each command includes its description and syntax in a collapsible section for easy navigation.
- Redis 8.6 includes all commands from previous versions plus new commands introduced in 8.6. Commands marked with **â­ New in 8.6** were added in this release.
- String commands operate on string values, the most basic Redis data type.
- <summary><strong><a href="/commands/append/">APPEND</a></strong> - Appends a string to the value of a key. Creates the key if it doesn't exist.</summary>
- **Description:** Appends a string to the value of a key. Creates the key if it doesn't exist.

## RENAME
Source file: `raw/sources/20260409-docs-latest-commands-rename-4f68d61d70.md`
- This command's behavior varies in clustered Redis environments. See the [multi-key operations]() page for more information.
- It returns an error when `key` does not exist.
- If `newkey` already exists it is overwritten, when this happens `RENAME` executes an implicit [`DEL`]() operation, so if the deleted key contains a very big value it may cause high latency even if `RENAME` itself is usually a constant-time operation.
- In Cluster mode, both `key` and `newkey` must be in the same **hash slot**, meaning that in practice only keys that have the same hash tag can be reliably renamed in cluster.
- *   `>= 3.2.0`: The command no longer returns an error when source and destination names are the same.

## SCAN
Source file: `raw/sources/20260409-docs-latest-commands-scan-2752f45a35.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- This command's behavior varies in clustered Redis environments. See the [multi-key operations]() page for more information.
- The `SCAN` command and the closely related commands [`SSCAN`](), [`HSCAN`]() and [`ZSCAN`]() are used in order to incrementally iterate over a collection of elements.
- * `SCAN` iterates the set of keys in the currently selected Redis database.

## VSIM
Source file: `raw/sources/20260409-docs-latest-commands-vsim-09f81609f8.md`
- Return elements similar to a given vector or element. Use this command to perform approximate or exact similarity searches within a vector set.
- You can query using either a vector (via `FP32` or `VALUES num`) or by referencing another element (using `ELE`). Optional parameters let you control the search behavior, such as score output, result count, and filtering options.
- You can include similarity scores, attributes (if any), and limit the number of results:
- Set the `EF` (exploration factor) to improve recall at the cost of performance. Use the `TRUTH` option to perform an exact linear scan, useful for benchmarking. The `NOTHREAD` option runs the search in the main thread and may increase server latency.
- is the name of the key that holds the vector set data.

## Redis for AI and search
Source file: `raw/sources/20260409-docs-latest-develop-ai-a8398d9d51.md`
- <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
- Use [Featureform]() to define, manage, and serve machine learning features on top of your existing data systems. The Featureform docs cover the Python SDK workflow from provider registration through feature serving.
- This page is organized into a few sections depending on what you're trying to do:
- * **How to's** - The comprehensive reference section for every feature, API, and setting. It's your source for detailed, technical information to support any level of development.
- * **Concepts** - Explanations of foundational ideas and core principles to help you understand the reason behind the product's features and design.

## Redis video tutorial collection
Source file: `raw/sources/20260409-docs-latest-develop-ai-ai-videos-3bfae9a9a2.md`
- Explore our collection of video tutorials and demonstrations showcasing how Redis powers AI applications. From vector search fundamentals to advanced RAG implementations, these videos provide practical insights and hands-on examples.
- | [**Long-Term Memory with LangGraph**](https://www.youtube.com/watch?v=fsENEq4F55Q) | [**Short-Term Memory with LangGraph**](https://www.youtube.com/watch?v=k3FUWWEwgfc) | [**What is semantic search?**](https://www.youtube.com/watch?v=o3XN4dImESE) |
- | Learn how to implement long-term memory capabilities in AI agents using LangGraph. This video shows you how to build AI systems that can retain and recall information across extended interactions. | Want your AI agents to remember what users tell them? Short-term memory is the key to natural conversations, and in this tutorial, you'll learn how to implement it with LangGraph. | Traditional search matches words â but what if your AI app could match meaning instead? This video explains how semantic search works and why it's essential for modern AI applications. |
- | [**What is a semantic cache?**](https://www.youtube.com/watch?v=AtVTT_s8AGc) | [**Building a RAG Pipeline from Scratch with RedisVL**](https://www.youtube.com/watch?v=cCTKmmGO4CY) | [**What is a vector database?**](https://www.youtube.com/watch?v=Yhv19le0sBw) |
- | What if you could skip redundant LLM calls and make your AI app faster, cheaper, and smarter? This video breaks down semantic caching and shows how it can transform your AI applications. | Unlock the Power of Retrieval-Augmented Generation (RAG) with RedisVL. This tutorial will show you how to build a complete RAG pipeline from scratch using Redis as your vector database. | Vector databases have been trending recently as they power modern search, recommendations, and AI-driven applications. Learn what vector databases are and how they work. |

## Redis AI ecosystem integrations
Source file: `raw/sources/20260409-docs-latest-develop-ai-ecosystem-integrations-3a20d2c52b.md`
- Redis integrates with a wide range of AI frameworks, platforms, and tools to enhance your AI applications. This page highlights key ecosystem integrations that can help you build more powerful, efficient, and scalable AI solutions with Redis.
- | [**Kong AI Gateway & Redis**](https://redis.io/blog/kong-ai-gateway-and-redis/) | [**Unstructured & Redis**](https://redis.io/blog/faster-ai-workflows-with-unstructured-redis/) | [**Mem0 & Redis**](https://redis.io/blog/smarter-memory-management-for-ai-agents-with-mem0-and-redis/) |
- | Combine Kong's AI Gateway with Redis for efficient AI request routing, caching, and rate limiting to optimize your AI infrastructure. | Accelerate AI workflows by using Redis to cache document processing results from Unstructured, reducing processing time and costs. | Implement smarter memory management for AI agents with Mem0's integration with Redis, providing persistent, queryable memory for LLMs. |
- | [**LiteLLM & Redis**](https://docs.litellm.ai/docs/caching/all_caches#initialize-cache---in-memory-redis-s3-bucket-redis-semantic-disk-cache-qdrant-semantic) | [**LangGraph & Redis**](https://redis.io/blog/langgraph-redis-build-smarter-ai-agents-with-memory-persistence/) | [**LangChain & Redis**](https://redis.io/blog/langchain-redis-partner-package/) |
- | Optimize LLM performance with LiteLLM's Redis caching capabilities, supporting both traditional and semantic caching to reduce costs and latency. | Build smarter AI agents with LangGraph's Redis integration for memory persistence, state management, and multi-agent coordination. | Leverage LangChain's Redis integration for vector storage, memory, and caching to create more capable AI applications with improved performance. |

## Featureform
Source file: `raw/sources/20260409-docs-latest-develop-ai-featureform-5cbaf38306.md`
- Featureform helps data teams define, materialize, and serve machine learning features by using a declarative Python SDK on top of existing data systems.
- Featureform works with offline systems such as Snowflake, BigQuery, and Databricks or Spark, then uses Redis as the low-latency online store for feature serving.

## Featureform overview
Source file: `raw/sources/20260409-docs-latest-develop-ai-featureform-overview-355a5b7eb9.md`
- Featureform is a feature engineering and feature serving workflow built for teams that want to define machine learning features in code while keeping their existing data platforms. It gives application teams a declarative Python SDK for working with providers, datasets, transformations, entities, features, labels, training sets, and online feature serving.
- In a typical deployment, Featureform reads or computes feature data in an offline system such as Snowflake, BigQuery, or Databricks and materializes selected features to Redis for low-latency inference.
- The Featureform workflow follows a consistent progression:
- 1. Register providers for your offline systems and your Redis online store.
- 2. Register datasets that represent raw inputs or curated tables.

## Connect providers in Featureform
Source file: `raw/sources/20260409-docs-latest-develop-ai-featureform-providers-31129abb17.md`
- Use providers to connect Featureform to the systems where your data already lives.
- Redis is the online provider in the Featureform workflow.
- Before you register providers, make sure you have:
- Featureform's current provider APIs rely heavily on catalog configuration. For Snowflake and Databricks, make sure you choose the catalog model before you register providers or datasets.
- Featureform supports several offline systems, including:

## Redis LangCache
Source file: `raw/sources/20260409-docs-latest-develop-ai-langcache-4ca2e6f401.md`
- Redis LangCache is a fully-managed semantic caching service that reduces large language model (LLM) costs and improves response times for AI applications.
- [Get started](#get-started) with LangCache on [Redis Cloud]() or join the [private preview](https://redis.io/langcache/).
- LangCache uses semantic caching to store and reuse previous LLM responses for repeated queries. Instead of calling the LLM for every request, LangCache checks if a similar response has already been generated and is stored in the cache. If a match is found, LangCache returns the cached response instantly, saving time and resources.
- Imagine youâre using an LLM to build an agent to answer questions about your company's products. Your users may ask questions like the following:
- These prompts may have slight variations, but they essentially ask the same question. LangCache can help you avoid calling the LLM for each of these prompts by caching the response to the first prompt and returning it for any similar prompts.

## Notebooks collection
Source file: `raw/sources/20260409-docs-latest-develop-ai-notebook-collection-5c54b00fe0.md`
- | Notebook | Category | Description |  |
- |----------|----------|-------------|--|
- | The place to start if you are brand new to Redis | Introduction | Great for Redis beginners looking for a guided Colab experience. | [Open in Colab](https://colab.research.google.com/github/redis-developer/redis-ai-resources/blob/main/python-recipes/redis-intro/00_redis_intro.ipynb) |
- | Implementing hybrid search with Redis | Hybrid and Vector Search | Combines vector similarity with keyword filters. | [Open in Colab](https://colab.research.google.com/github/redis-developer/redis-ai-resources/blob/main/python-recipes/vector-search/02_hybrid_search.ipynb) |
- | Vector search with Redis Python client | Hybrid and Vector Search | Demonstrates pure vector search using the Redis Python client. | [Open in Colab](https://colab.research.google.com/github/redis-developer/redis-ai-resources/blob/main/python-recipes/vector-search/00_redispy.ipynb) |

## RedisVL
Source file: `raw/sources/20260409-docs-latest-develop-ai-redisvl-18c55987c6.md`
- Built to support machine learning and artificial intelligence workflows, RedisVL simplifies the process of storing, searching, and analyzing vector embeddings, which are commonly used for tasks like recommendation systems, semantic search, and anomaly detection.

## Schema
Source file: `raw/sources/20260409-docs-latest-develop-ai-redisvl-api-schema-30e7a0e24f.md`
- Schema in RedisVL provides a structured format to define index settings and
- field configurations using the following three components:
- | Component   | Description                                                                        |
- |-------------|------------------------------------------------------------------------------------|
- | version     | The version of the schema spec. Current supported version is 0.1.0.                |

## Search Index Classes
Source file: `raw/sources/20260409-docs-latest-develop-ai-redisvl-api-searchindex-165f060d7c.md`
- | Class                                     | Description                                                                                  |
- |-------------------------------------------|----------------------------------------------------------------------------------------------|
- | [SearchIndex](#searchindex-api)           | Primary class to write, read, and search across data structures in Redis.                    |
- | [AsyncSearchIndex](#asyncsearchindex-api) | Async version of the SearchIndex to write, read, and search across data structures in Redis. |
- A search index class for interacting with Redis as a vector database.

## Caching Embeddings
Source file: `raw/sources/20260409-docs-latest-develop-ai-redisvl-user-guide-embeddings-cache-73671559e1.md`
- RedisVL provides an `EmbeddingsCache` that makes it easy to store and retrieve embedding vectors with their associated text and metadata. This cache is particularly useful for applications that frequently compute the same embeddings, enabling you to:
- This notebook will show you how to use the `EmbeddingsCache` effectively in your applications.
- First, let's import the necessary libraries. We'll use a text embedding model from HuggingFace to generate our embeddings.
- Let's create a vectorizer to generate embeddings for our texts:
- /Users/tyler.hutcherson/Documents/AppliedAI/redis-vl-python/.venv/lib/python3.13/site-packages/tqdm/auto.py:21: TqdmWarning: IProgress not found. Please update jupyter and ipywidgets. See https://ipywidgets.readthedocs.io/en/stable/user_install.html

## User Guides
Source file: `raw/sources/20260409-docs-latest-develop-ai-redisvl-user-guide-f312750f1d.md`
- User guides provide helpful resources for using RedisVL and its different components.
- * [Getting Started with RedisVL](getting_started/)
- * [Define an `IndexSchema`](getting_started/#define-an-indexschema)
- * [Sample Dataset Preparation](getting_started/#sample-dataset-preparation)
- * [Create a `SearchIndex`](getting_started/#create-a-searchindex)

## LLM Caching
Source file: `raw/sources/20260409-docs-latest-develop-ai-redisvl-user-guide-llmcache-1b8dde6c28.md`
- This notebook demonstrates how to use RedisVL's `SemanticCache` to cache LLM responses based on semantic similarity. Semantic caching can significantly reduce API costs and latency by retrieving cached responses for semantically similar prompts instead of making redundant API calls.
- First, we will import [OpenAI](https://platform.openai.com) to use their API for responding to user prompts. We will also create a simple `ask_openai` helper method to assist.
- 13:02:02 sentence_transformers.SentenceTransformer INFO   Use pytorch device_name: mps
- 13:02:02 sentence_transformers.SentenceTransformer INFO   Load pretrained SentenceTransformer: redis/langcache-embed-v1
- 13:02:02 sentence_transformers.SentenceTransformer WARNING   You try to use a model that was created with version 4.1.0, however, your version is 3.4.1. This might cause unexpected behavior or errors. In that case, try to update to the latest version.

## LLM Message History
Source file: `raw/sources/20260409-docs-latest-develop-ai-redisvl-user-guide-message-history-5c857d2179.md`
- Large Language Models are inherently stateless and have no knowledge of previous interactions with a user, or even of previous parts of the current conversation. While this may not be noticeable when asking simple questions, it becomes a hindrance when engaging in long running conversations that rely on conversational context.
- The solution to this problem is to append the previous conversation history to each subsequent call to the LLM.
- This notebook will show how to use Redis to structure and store and retrieve this conversational message history.
- To align with common LLM APIs, Redis stores messages with `role` and `content` fields.
- The supported roles are "system", "user" and "llm".

## 0.5.1 Feature Overview
Source file: `raw/sources/20260409-docs-latest-develop-ai-redisvl-user-guide-release-guide-0-5-0-release-7841f6b892.md`
- This notebook provides an overview of what's new with the 0.5.1 release of redisvl. It also highlights changes and potential enhancements for existing usage.
- 12:44:52 redisvl.index.index INFO   Index already exists, overwriting.
- Perform hybrid lexical (BM25) and vector search where results are ranked by: `hybrid_score = (1-alpha)*lexical_Score + alpha*vector_similarity`.
- TextQueries make it easy to perform pure lexical search with redisvl.
- [{'id': 'jobs:01JR0V1SA29RVD9AAVSTBV9P5H',

## LLM Session Memory
Source file: `raw/sources/20260409-docs-latest-develop-ai-redisvl-user-guide-session-manager-7bb4f20c80.md`
- Large Language Models are inherently stateless and have no knowledge of previous interactions with a user, or even of previous parts of the current conversation. While this may not be noticable when asking simple questions, it becomes a hinderance when engaging in long running conversations that rely on conversational context.
- The solution to this problem is to append the previous conversation history to each subsequent call to the LLM.
- This notebook will show how to use Redis to structure and store and retrieve this conversational session memory.
- 12:24:11 redisvl.index.index INFO   Index already exists, not overwriting.
- To align with common LLM APIs, Redis stores messages with `role` and `content` fields.

## SVS-VAMANA Vector Search
Source file: `raw/sources/20260409-docs-latest-develop-ai-redisvl-user-guide-svs-vamana-2848b31735.md`
- In this notebook, we will explore SVS-VAMANA (Scalable Vector Search with VAMANA graph algorithm), a graph-based vector search algorithm that is optimized to work with compression methods to reduce memory usage. It combines the Vamana graph algorithm with advanced compression techniques (LVQ and LeanVec) and is optimized for Intel hardware.
- Vamana builds a single-layer proximity graph and prunes edges during construction based on tunable parameters, similar to HNSW but with a simpler structure. The compression methods apply per-vector normalization and scalar quantization, learning parameters directly from the data to enable fast, on-the-fly distance computations with SIMD-optimized layout Vector quantization and compression.
- 2. [Quick Start with CompressionAdvisor](#Quick-Start-with-CompressionAdvisor)
- 3. [Creating an SVS-VAMANA Index](#Creating-an-SVS-VAMANA-Index)
- 4. [Loading Sample Data](#Loading-Sample-Data)

## Configuration parameters
Source file: `raw/sources/20260409-docs-latest-develop-ai-search-and-query-administration-configuration-4b4c0d3445.md`
- As of Redis 8 in Redis Open Source (Redis 8), configuration parameters for Redis Search are now set in the following ways:
- * At load time via your `redis.conf` file.
- * At run time (where applicable) using the [`CONFIG SET`]() command.
- Also, Redis 8 persists Redis Search configuration parameters just like any other configuration parameters (e.g., using the [`CONFIG REWRITE`]() command).
- The following table summarizes which configuration parameters can be set at run-time, and compatibility with Redis Software and Redis Cloud.

## Technical overview
Source file: `raw/sources/20260409-docs-latest-develop-ai-search-and-query-administration-overview-e7734c8dee.md`
- Redis Search is a powerful text search and secondary indexing engine that is built on top of Redis Open Source.
- Unlike other Redis search libraries, it does not use the internal data structures of Redis such as sorted sets. Using its own highly optimized data structures and algorithms, it allows for advanced search features, high performance, and a low memory footprint. It can perform simple text searches, as well as complex structured queries, filtering by numeric properties and geographical distances.
- Redis Search supports continuous indexing with no performance degradation, maintaining concurrent loads of querying and indexing. This makes it ideal for searching frequently updated databases without the need for batch indexing and service interrupts.
- The Enterprise version of Redis Search supports scaling the search engine across many servers, allowing it to easily grow to billions of documents on hundreds of servers.
- All of this is done while taking advantage of Redis's robust architecture and infrastructure. Using Redis's protocol, replication, persistence, and clustering, Redis Search delivers a powerful yet simple to manage and maintain search and indexing engine that can be used as a standalone database, or to augment existing Redis databases with advanced powerful indexing capabilities.

## Aggregations
Source file: `raw/sources/20260409-docs-latest-develop-ai-search-and-query-advanced-concepts-aggregations-71b722b942.md`
- Aggregations are a way to process the results of a search query. Aggregation allows you to group, sort, and transform your result data, and to extract analytic insights from it. Much like aggregation queries in other databases and search engines, they can be used to create analytics reports, or perform [faceted search](https://en.wikipedia.org/wiki/Faceted_search) style queries.
- For example, indexing a web-server's logs, you can create a report for unique users by hour, country, or any other breakdown. Or you can create different reports for errors, warnings, etc.
- The basic idea of an aggregate query is this:
- * Perform a search query, filtering for records you wish to process.
- * Build a pipeline of operations that transform the results by zero or more sequences of:

## FT.AGGREGATE order of operations
Source file: `raw/sources/20260409-docs-latest-develop-ai-search-and-query-advanced-concepts-aggregations-syntax-6e553a533c.md`
- [`FT.AGGREGATE`]() is a powerful Redis Search command for performing advanced data aggregation, filtering, sorting, and transformations on indexed hash or JSON documents. This reference page provides a structured breakdown of syntax, ordering rules, and best practices.
- The [main aggregations page]() has a simple diagram showing how `FT.AGGREGATE` pipelines are constructed, but it doesn't tell the whole story. For example, you can create more complex aggregation pipelines by applying multiple `REDUCE` functions under a single `GROUPBY` clause, or you can chain groupings and mix in additional mapping steps:
- The examples on this page are based on a hypothetical "products" data set, which you can [download here](./data/products.txt).
- The `FT.AGGREGATE` command processes multiple expressions in a pipeline. Below is the recommended order:
- 1. `index` â the name of your index, which must be the first argument.

## Scoring documents
Source file: `raw/sources/20260409-docs-latest-develop-ai-search-and-query-advanced-concepts-scoring-127ba92558.md`
- When searching, documents are scored based on their relevance to the query. The score is a floating point number between 0.0 and 1.0, where 1.0 is the highest score. The score is returned as part of the search results and can be used to sort the results.
- Redis Open Source comes with a few scoring functions to evaluate document relevance. They are all based on document scores and term frequency. This is regardless of the ability to use [sortable fields](). Scoring functions are specified by adding the `SCORER {scorer_name}` argument to a search query.
- If you prefer a custom scoring function, it is possible to add more functions using the [extension API]().
- The following is a list of the pre-bundled scoring functions available in Redis and a short explanation about how they work. Each function is mentioned by registered name, which can be passed as a `SCORER` argument in [`FT.SEARCH`]().
- Basic [TF-IDF scoring](https://en.wikipedia.org/wiki/Tf%E2%80%93idf) with a few extra features:

## Sorting by indexed fields
Source file: `raw/sources/20260409-docs-latest-develop-ai-search-and-query-advanced-concepts-sorting-5421b6f7e2.md`
- As of RediSearch 0.15, you can bypass the scoring function mechanism and order search results by the value of different document attributes (fields) directly, even if the sorting field is not used by the query. For example, you can search for first name and sort by last name.
- When creating an index with [`FT.CREATE`](), you can declare `TEXT`, `TAG`, `NUMERIC`, and `GEO` attributes as `SORTABLE`. When an attribute is sortable, you can order the results by its values with relatively low latency. When an attribute is not sortable, it can still be sorted by its values, but with increased latency. For example, in the following schema:
- The fields `last_name` and `age` are sortable, but `first_name` isn't. This means you can search by either first and/or last name, and sort by last name or age.
- In the current implementation, when declaring a sortable field, its content gets copied into a special location in the index that provides for fast access during sorting. This means that making long fields sortable is very expensive and you should be careful with it.
- By default, text fields get normalized and lowercased in a Unicode-safe way when stored for sorting. For example, `America` and `america` are considered equal in terms of sorting.

## Move from Development to Production with Redis Search
Source file: `raw/sources/20260409-docs-latest-develop-ai-search-and-query-best-practices-dev-to-prod-best-practice-87d22a3feb.md`
- Transitioning a Redis Open Source with Redis Search environment from development to production requires thoughtful consideration of configuration, performance tuning, and resource allocation. This guide outlines key practices to ensure your Redis deployment operates optimally under production workloads.
- Redis Search offers several configurable parameters that influence query results and performance. While a full list of these parameters and their functions can be found [here](), this section highlights the most commonly adjusted parameters for production environments.
- <!-- - With Query Performance Factor (QPF): if QPF (multi-threaded query execution) is enabled, the risks of increasing this value are mitigated, as queries execute against index memory using multiple threads.-->
- Redis Search has resource requirements distinct from general caching use cases. Proper sizing ensures that the system can handle production workloads efficiently.
- Production environments must be sized for peak load scenarios to ensure performance remains acceptable under maximum stress.

## Best practices for Redis Search performance
Source file: `raw/sources/20260409-docs-latest-develop-ai-search-and-query-best-practices-scalable-query-best-pract-44fb85fa48.md`
- If you're using Redis Software or Redis Cloud, see the [best practices for scalable Redis Search]() page.
- Below are some basic steps to ensure good performance of Redis Search .
- * Create a Redis data model with your query patterns in mind.
- * Ensure the Redis architecture has been sized for the expected load using the [sizing calculator](https://redis.io/redisearch-sizing-calculator/).
- * Provision Redis nodes with sufficient resources (RAM, CPU, network) to support the expected maximum load.

## Developer notes
Source file: `raw/sources/20260409-docs-latest-develop-ai-search-and-query-deprecated-development-b64c5a8a4a.md`
- Developing RediSearch features involves setting up a development environment (which can be either Linux-based or macOS-based), building the module, running tests and benchmarks, and debugging both the module and its tests.
- Run the following command to clone the RediSearch module and its submodules:
- There are several reasons to develop in an isolated environment, like keeping your workstation clean, and developing for a different Linux distribution.
- The most general option for an isolated environment is a virtual machine. It's very easy to set one up using [Vagrant](https://www.vagrantup.com)).
- Docker is even more agile, as it offers an almost instant solution:

## Indexing
Source file: `raw/sources/20260409-docs-latest-develop-ai-search-and-query-indexing-01a802ea10.md`
- In addition to indexing Redis hashes, Redis Open Source can also index JSON documents.
- When you create an index with the [`FT.CREATE`]() command, include the `ON JSON` keyword to index any existing and future JSON documents stored in the database.
- To define the `SCHEMA`, you can provide [JSONPath]() expressions.
- The result of each JSONPath expression is indexed and associated with a logical name called an `attribute` (previously known as a `field`).
- You can use these attributes in queries.

## Aggregation queries
Source file: `raw/sources/20260409-docs-latest-develop-ai-search-and-query-query-aggregation-c0f2ea07a0.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- An aggregation query allows you to perform the following actions:
- This article explains the basic usage of the [FT.AGGREGATE]() command. For further details, see the [command specification]() and the [aggregations reference documentation]().
- The examples in this article use a schema with the following fields:

## Vector search
Source file: `raw/sources/20260409-docs-latest-develop-ai-search-and-query-query-vector-search-581bfe4227.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- This article gives you a good overview of how to perform vector search queries with Redis Search, which is part of Redis Open Source. See the [Redis as a vector database quick start guide]() for more information about Redis as a vector database. You can also find more detailed information about all the parameters in the [vector reference documentation]().
- A vector search query on a vector field allows you to find all vectors in a vector space that are close to a given vector. You can query for the k-nearest neighbors or vectors within a given radius.
- The examples in this article use a schema with the following fields:

## Vector search concepts
Source file: `raw/sources/20260409-docs-latest-develop-ai-search-and-query-vectors-081efd1447.md`
- Redis includes a [high-performance vector database](https://redis.io/blog/benchmarking-results-for-vector-databases/) that lets you perform semantic searches over vector embeddings. You can augment these searches with filtering over text, numerical, geospatial, and tag metadata.
- To quickly get started, check out the [Redis vector quickstart guide]() and the [Redis AI Resources](https://github.com/redis-developer/redis-ai-resources) Github repo.
- 1. [**Create a vector index**](): Redis maintains a secondary index over your data with a defined schema (including vector fields and metadata). Redis supports [`FLAT`](), [`HNSW`]() and [`SVS-VAMANA`]() vector index types.
- 1. [**Store and update vectors**](): Redis stores vectors and metadata in hashes or JSON objects.
- 1. [**Search with vectors**](): Redis supports several advanced querying strategies with vector fields including k-nearest neighbor ([KNN]()), [vector range queries](), and [metadata filters]().

## Conditional execution
Source file: `raw/sources/20260409-docs-latest-develop-clients-dotnet-condexec-51ac34b9f7.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- Most Redis client libraries use transactions with the
- [`WATCH`]() command as the main way to prevent
- two clients writing to the same key at once (see [Transactions]() for more information). Unfortunately, this approach is

## Pipelines and transactions
Source file: `raw/sources/20260409-docs-latest-develop-clients-dotnet-transpipe-4918de3b13.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- Redis lets you send a sequence of commands to the server together in a batch.
- There are two types of batch that you can use:
- to the server together in a single communication. The server then sends back

## Index and query vectors
Source file: `raw/sources/20260409-docs-latest-develop-clients-dotnet-vecsearch-51c0597cd5.md`
- lets you index vector fields in [hash]()
- Among other things, vector fields can store *text embeddings*, which are AI-generated vector
- representations of the semantic information in pieces of text. The
- between two embeddings indicates how similar they are semantically. By comparing the
- similarity of an embedding generated from some query text with embeddings stored in hash

## Vector set embeddings
Source file: `raw/sources/20260409-docs-latest-develop-clients-dotnet-vecsets-38fa8d970d.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- you store a set of unique keys, each with its own associated vector.
- You can then retrieve keys from the set according to the similarity between
- their stored vectors and a query vector that you specify.

## Client-side geographic failover
Source file: `raw/sources/20260409-docs-latest-develop-clients-failover-a0986d37f7.md`
- [Client-side geographic failover](https://en.wikipedia.org/wiki/Failover)
- to improve the availability of connections to Redis databases. Use this page
- to get a general overview of the concepts and then see the documentation for
- your client library to learn how to configure it for failover and failback:
- You may have several [Active-Active databases]()

## Connect to the server
Source file: `raw/sources/20260409-docs-latest-develop-clients-go-connect-9541c81616.md`
- The following example shows the simplest way to connect to a Redis server:
- You can also connect using a connection string:
- After connecting, you can test the connection by  storing and retrieving
- To connect to a Redis cluster, use `NewClusterClient()`. You can specify
- one or more cluster endpoints with the `Addrs` option:

## Pipelines and transactions
Source file: `raw/sources/20260409-docs-latest-develop-clients-go-transpipe-82bf32bdfd.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- Redis lets you send a sequence of commands to the server together in a batch.
- There are two types of batch that you can use:
- to the server together in a single communication. The server then sends back

## Index and query vectors
Source file: `raw/sources/20260409-docs-latest-develop-clients-go-vecsearch-0a03e68b86.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- lets you index vector fields in [hash]()
- Among other things, vector fields can store *text embeddings*, which are AI-generated vector
- representations of the semantic information in pieces of text. The

## Vector set embeddings
Source file: `raw/sources/20260409-docs-latest-develop-clients-go-vecsets-b88dadeb08.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- you store a set of unique keys, each with its own associated vector.
- You can then retrieve keys from the set according to the similarity between
- their stored vectors and a query vector that you specify.

## Pipelines and transactions
Source file: `raw/sources/20260409-docs-latest-develop-clients-hiredis-transpipe-6b4aee1904.md`
- Redis lets you send a sequence of commands to the server together in a batch.
- There are two types of batch that you can use:
- to the server together in a single communication. The server then sends back
- a single communication with all the responses. See the
- to completion without being interrupted by commands from other clients.

## Pipelines and transactions
Source file: `raw/sources/20260409-docs-latest-develop-clients-jedis-transpipe-cd3c73b18a.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- Redis lets you send a sequence of commands to the server together in a batch.
- There are two types of batch that you can use:
- to the server together in a single communication. The server then sends back

## Vector set embeddings
Source file: `raw/sources/20260409-docs-latest-develop-clients-jedis-vecsets-d4f48b7cc9.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- you store a set of unique keys, each with its own associated vector.
- You can then retrieve keys from the set according to the similarity between
- their stored vectors and a query vector that you specify.

## Connect to the server
Source file: `raw/sources/20260409-docs-latest-develop-clients-lettuce-connect-4e4f4f7d7f.md`
- Start by creating a connection to your Redis server. There are many ways to achieve this using Lettuce. Here are a few.
- To connect to a Redis cluster, use `RedisClusterClient`.
- Learn more about Cluster connections and how to configure them in [the reference guide](https://redis.github.io/lettuce/ha-sharding/#redis-cluster).
- Learn more about asynchronous Lettuce API in [the reference guide](https://redis.github.io/lettuce/#asynchronous-api).
- Learn more about reactive Lettuce API in [the reference guide](https://redis.github.io/lettuce/#reactive-api).

## Index and query vectors
Source file: `raw/sources/20260409-docs-latest-develop-clients-lettuce-vecsearch-3af300f0fd.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- lets you index vector fields in [hash]()
- Among other things, vector fields can store *text embeddings*, which are AI-generated vector
- representations of the semantic information in pieces of text. The

## Vector set embeddings
Source file: `raw/sources/20260409-docs-latest-develop-clients-lettuce-vecsets-be80cedaaf.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- you store a set of unique keys, each with its own associated vector.
- You can then retrieve keys from the set according to the similarity between
- their stored vectors and a query vector that you specify.

## Migrate from ioredis
Source file: `raw/sources/20260409-docs-latest-develop-clients-nodejs-migration-77c8bb12a0.md`
- Redis previously recommended the [`ioredis`]()
- client library for development with [Node.js](https://nodejs.org/en),
- but this library is now deprecated in favor of
- outlines the main similarities and differences between the two libraries.
- You may find this information useful if you are an `ioredis` user and you want to

## Index and query documents
Source file: `raw/sources/20260409-docs-latest-develop-clients-nodejs-queryjson-3c45a1f1a0.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- run queries against the index. It then goes on to show the slight differences
- From [v5.0.0](https://github.com/redis/node-redis/releases/tag/redis%405.0.0)
- onwards, `node-redis` uses query dialect 2 by default.

## Pipelines and transactions
Source file: `raw/sources/20260409-docs-latest-develop-clients-nodejs-transpipe-bafdfab0ba.md`
- Redis lets you send a sequence of commands to the server together in a batch.
- There are two types of batch that you can use:
- to the server together in a single communication. The server then sends back
- a single communication with all the responses. See the
- to completion without being interrupted by commands from other clients.

## Index and query vectors
Source file: `raw/sources/20260409-docs-latest-develop-clients-nodejs-vecsearch-c447616975.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- lets you index vector fields in [hash]()
- Vector fields can store *text embeddings*, which are AI-generated vector
- between two embeddings measures their semantic similarity. When you compare the

## Vector set embeddings
Source file: `raw/sources/20260409-docs-latest-develop-clients-nodejs-vecsets-879f14597f.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- you store a set of unique keys, each with its own associated vector.
- You can then retrieve keys from the set according to the similarity between
- their stored vectors and a query vector that you specify.

## Bulk loading
Source file: `raw/sources/20260409-docs-latest-develop-clients-patterns-bulk-loading-2690b184be.md`
- Bulk loading is the process of loading Redis with a large amount of pre-existing data. Ideally, you want to perform this operation quickly and efficiently. This document describes some strategies for bulk loading data in Redis.
- Using a normal Redis client to perform bulk loading is not a good idea
- for a few reasons: the naive approach of sending one command after the other
- is slow because you have to pay for the round trip time for every command.
- It is possible to use pipelining, but for bulk loading of many records

## Distributed Locks with Redis
Source file: `raw/sources/20260409-docs-latest-develop-clients-patterns-distributed-locks-0882037cfd.md`
- different processes must operate with shared resources in a mutually
- There are a number of libraries and blog posts describing how to implement
- a DLM (Distributed Lock Manager) with Redis, but every library uses a different
- approach, and many use a simple approach with lower guarantees compared to
- what can be achieved with slightly more complex designs.

## Redis patterns example
Source file: `raw/sources/20260409-docs-latest-develop-clients-patterns-twitter-clone-1923224439.md`
- This article describes the design and implementation of a [very simple Twitter clone](https://github.com/antirez/retwis) written using PHP with Redis as the only database. The programming community has traditionally considered key-value stores as a special purpose database that couldn't be used as a drop-in replacement for a relational database for the development of web applications. This article will try to show that Redis data structures on top of a key-value layer are an effective data model to implement many kinds of applications.
- Note: the original version of this article was written in 2009 when Redis was
- released. It was not exactly clear at that time that the Redis data model was
- suitable to write entire applications. Now after 5 years there are many cases of
- applications using Redis as their main store, so the goal of the article today

## Index and query vectors
Source file: `raw/sources/20260409-docs-latest-develop-clients-php-vecsearch-1cc5eeda3c.md`
- lets you index vector fields in [hash]()
- Among other things, vector fields can store *text embeddings*, which are AI-generated vector
- representations of the semantic information in pieces of text. The
- between two embeddings indicates how similar they are semantically. By comparing the
- similarity of an embedding generated from some query text with embeddings stored in hash

## Connection pools and multiplexing
Source file: `raw/sources/20260409-docs-latest-develop-clients-pools-and-muxing-604daafe53.md`
- Redis example code generally opens a connection, demonstrates
- a command or feature, and then closes. Real-world code typically
- has short bursts of communication with the server and periods of
- inactivity in between. Opening and closing connections
- involves some overhead and leads to inefficiency if you do

## Pipelines and transactions
Source file: `raw/sources/20260409-docs-latest-develop-clients-redis-py-transpipe-422968363c.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- Redis lets you send a sequence of commands to the server together in a batch.
- There are two types of batch that you can use:
- to the server together in a single communication. The server then sends back

## Index and query vectors
Source file: `raw/sources/20260409-docs-latest-develop-clients-redis-py-vecsearch-36654ce3f7.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- lets you index vector fields in [hash]()
- Among other things, vector fields can store *text embeddings*, which are AI-generated vector
- representations of the semantic information in pieces of text. The

## Vector set embeddings
Source file: `raw/sources/20260409-docs-latest-develop-clients-redis-py-vecsets-f9ce195f81.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- you store a set of unique keys, each with its own associated vector.
- You can then retrieve keys from the set according to the similarity between
- their stored vectors and a query vector that you specify.

## Pipelines and transactions
Source file: `raw/sources/20260409-docs-latest-develop-clients-rust-transpipe-d812d80ca9.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- Redis lets you send a sequence of commands to the server together in a batch.
- There are two types of batch that you can use:
- to the server together in a single communication. The server then sends back

## Developer notes
Source file: `raw/sources/20260409-docs-latest-develop-data-types-json-developer-1775550674.md`
- Developing Redis JSON involves setting up the development environment (which can be either Linux-based or macOS-based), building RedisJSON (the Redis module providing JSON), running tests and benchmarks, and debugging both the JSON module and its tests.
- To clone the RedisJSON module and its submodules, run:
- There are several reasons to use an isolated environment for development, like keeping your workstation clean and developing for a different Linux distribution.
- You can use a virtual machine as an isolated development environment. To set one up, you can use [Vagrant](https://www.vagrantup.com) or Docker.
- To set up a virtual machine with Docker:

## Performance
Source file: `raw/sources/20260409-docs-latest-develop-data-types-json-performance-205540da7f.md`
- To get an early sense of what Redis JSON is capable of, you can test it with `redis-benchmark` just like
- any other Redis command. However, in order to have more control over the tests, we'll use a
- a tool written in Go called _ReJSONBenchmark_ that we expect to release in the near future.
- The following figures were obtained from an AWS EC2 c4.8xlarge instance that ran both the Redis
- server as well the as the benchmarking tool. Connections to the server are via the networking stack.

## Bloom filter
Source file: `raw/sources/20260409-docs-latest-develop-data-types-probabilistic-bloom-filter-7e5adf7c91.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- [View all bf commands](https://redis.io/commands/?group=bf)
- | Command | Summary | Complexity | Since |
- |---------|---------|------------|-------|

## t-digest
Source file: `raw/sources/20260409-docs-latest-develop-data-types-probabilistic-t-digest-521b41ff72.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- [View all tdigest commands](https://redis.io/commands/?group=tdigest)
- | Command | Summary | Complexity | Since |
- |---------|---------|------------|-------|

## Redis Streams
Source file: `raw/sources/20260409-docs-latest-develop-data-types-streams-d6349cd00d.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- [View all stream commands](https://redis.io/commands/?group=stream)
- | Command | Summary | Complexity | Since |
- |---------|---------|------------|-------|

## Idempotent message processing
Source file: `raw/sources/20260409-docs-latest-develop-data-types-streams-idempotency-32a137ecb0.md`
- In Redis 8.6, streams support idempotent message processing (at-most-once production) to prevent duplicate entries when using at-least-once delivery patterns. This feature enables reliable message submission with automatic deduplication.
- Idempotent message processing ensures that handling the same message multiple times produces the same system state as handling it once.
- Beginning with Redis 8.6, streams support idempotent message processing (at-most-once production) to prevent duplicate entries when producers resend messages.
- Producers may need to resend messages under two scenarios:
- 1. Producer-Redis network issues (disconnection and reconnection).

## Redis Strings
Source file: `raw/sources/20260409-docs-latest-develop-data-types-strings-5044776fe2.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- [View all string commands](https://redis.io/commands/?group=string)
- | Command | Summary | Complexity | Since |
- |---------|---------|------------|-------|

## Out-of-order / backfilled ingestion performance considerations
Source file: `raw/sources/20260409-docs-latest-develop-data-types-timeseries-out-of-order-performance-consideration-b4950c8fdc.md`
- When an older timestamp is inserted into a time series, the chunk of memory corresponding to the new sampleâs time frame will potentially have to be retrieved from the main memory (you can read more about these chunks [here](https://redislabs.com/blog/redistimeseries-ga-making-4th-dimension-truly-immersive/)). When this chunk is a compressed chunk, it will also have to be decoded before we can insert/update to it. These are memory-intensiveâand in the case of decoding, compute-intensiveâoperations that will influence the overall achievable ingestion rate.
- Ingest performance is critical for us, which pushed  us to assess and be transparent about the impact of the out-of-order backfilled ratio on our overall high-performance TSDB.
- To do so, we created a Go benchmark client that enabled us to control key factors that dictate overall system performance, like the out-of-order ratio, the compression of the series, the number of concurrent clients used, and command pipelining. For the full benchmark-driver configuration details and parameters, please refer to this [GitHub link](https://github.com/RedisTimeSeries/redistimeseries-ooo-benchmark).
- Furthermore, all benchmark variations were run on Amazon Web Services instances, provisioned through our benchmark-testing infrastructure. Both the benchmarking client and database servers were running on separate c5.9xlarge instances. The tests were executed on a single-shard setup, with RedisTimeSeries version 1.4.
- Below you can see the correlation between achievable ops/sec and out-of-order ratio for both compressed and uncompressed chunks.

## Use cases
Source file: `raw/sources/20260409-docs-latest-develop-data-types-timeseries-use-cases-775afa605f.md`
- Modern data centers have a lot of moving pieces, such as infrastructure (servers and networks) and software systems (applications and services) that need to be monitored around the clock.
- Redis Time Series allows you to plan for new resources upfront, optimize the utilization of existing resources, reconstruct the circumstances that led to outages, and identify application performance issues by analyzing and reporting on the following metrics:
- Redis Time Series can be used to track environmental measurements such as the number of daily sunshine hours and hourly rainfall depth, over a period of many years. Seasonally, you can measure average rainfall depth, average daily temperature, and the maximum number of sunny hours per day, for example. Watch the increase of the maximum daily temperature over the years. Predict the expected temperature and rainfall depth in a specific location for a particular week of the year.
- Multiple time series can be collected, each for a different location. By utilizing secondary indexes, measurements can be aggregated over given geographical regions (e.g., minimal and maximal daily temperature in Europe) or over locations with specific attributes (e.g., average rainfall depth in mountainous regions).
- **Analysis of the atmosphere (environment)**

## Performance
Source file: `raw/sources/20260409-docs-latest-develop-data-types-vector-sets-performance-4c4ddbc9fa.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- Vector similarity queries using the [`VSIM`]() are threaded by default. Redis uses up to 32 threads to process these queries in parallel.
- Inserting vectors with the [`VADD`]() command is more computationally expensive than querying:
- Quantization greatly impacts both speed and memory:

## Scalability
Source file: `raw/sources/20260409-docs-latest-develop-data-types-vector-sets-scalability-51a69508c5.md`
- Vector sets can scale horizontally by sharding your data across multiple Redis instances. This is done by partitioning the dataset manually across keys and nodes.
- You can shard data using a consistent hash:
- To run a similarity search across all shards, send [`VSIM`]() commands to each key and then merge the results client-side:
- Then combine and sort the results by score.
- This sharding model also improves fault tolerance:

## Troubleshooting
Source file: `raw/sources/20260409-docs-latest-develop-data-types-vector-sets-troubleshooting-4f549b1e61.md`
- Vector sets are approximate by design. That makes debugging trickier than with exact match queries. This section helps you understand issues with recall, filtering, and graph structure.
- If [`VSIM`]() doesn't return expected items:
- This gives you the most accurate results for validation, but it's slow.
- Try retrieving the attributes with [`VGETATTR`]():
- Double-check field names, JSON validity, and value types.

## Redis FAQ
Source file: `raw/sources/20260409-docs-latest-develop-get-started-faq-7e62804340.md`
- * Redis has a different evolution path in the key-value DBs where values can contain more complex data types, with atomic operations defined on those data types. Redis data types are closely related to fundamental data structures and are exposed to the programmer as such, without additional abstraction layers.
- * Redis is an in-memory but persistent on disk database, so it represents a different trade off where very high write and read speed is achieved with the limitation of data sets that can't be larger than memory. Another advantage of
- in-memory databases is that the memory representation of complex data structures
- is much simpler to manipulate compared to the same data structures on disk, so
- Redis can do a lot with little internal complexity. At the same time the

## RAG with Redis
Source file: `raw/sources/20260409-docs-latest-develop-get-started-rag-316a1d20c4.md`
- Large Language Models (LLMs) generate human-like text but are limited by the data they were trained on. RAG enhances LLMs by integrating them with external, domain-specific data stored in a Redis [vector database]().
- RAG enables LLMs to use real-time information, improving the accuracy and relevance of generated content.
- Redis is ideal for RAG due to its speed, versatility, and familiarity.
- Redis provides a robust platform for managing real-time data. It supports the storage and retrieval of vectors, essential for handling large-scale, unstructured data and performing similarity searches. Key features and components of Redis that make it suitable for RAG include:
- 1. **Vector database**: Stores and indexes vector embeddings that semantically represent unstructured data.

## Redis for GenAI apps
Source file: `raw/sources/20260409-docs-latest-develop-get-started-redis-in-ai-07522879de.md`
- Redis enables high-performance, scalable, and reliable data management, making it a key component for GenAI apps, chatbots, and AI agents. By leveraging Redis for fast data retrieval, caching, and vector search capabilities, you can enhance AI-powered interactions, reduce latency, and improve user experience.
- Redis excels in storing and indexing vector embeddings that semantically represent unstructured data. With vector search, Redis retrieves similar questions and relevant data, lowering LLM inference costs and latency. It fetches pertinent portions of chat history, enriching context for more accurate and relevant responses. These features make Redis an ideal choice for RAG systems and GenAI apps requiring fast data access.
- [RedisVL]() is a Python library with an integrated CLI, offering seamless integration with Redis to enhance GenAI applications.
- Explore how Redis optimizes various GenAI applications through specific use cases, tutorials, and demo code repositories.
- Redis improves session persistence and caching for conversational agents managing high interaction volumes. See the [Flowise Conversational Agent with Redis](https://redis.io/learn/howtos/solutions/flowise/conversational-agent) tutorial and demo for implementation details.

## Redis as a vector database quick start guide
Source file: `raw/sources/20260409-docs-latest-develop-get-started-vector-database-8015e39c6e.md`
- The code examples below show how to perform the same operations in different programming languages and client libraries:
- Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.
- 3. Create vector embeddings and store vectors
- 4. Query data and perform a vector search
- which is a Python client library for Redis that is highly specialized for

## Scripting with Lua
Source file: `raw/sources/20260409-docs-latest-develop-programmability-eval-intro-0173d81686.md`
- Redis lets users upload and execute Lua scripts on the server.
- Scripts can employ programmatic control structures and use most of the [commands]() while executing to access the database.
- Because scripts execute in the server, reading and writing data from scripts is very efficient.
- Redis guarantees the script's atomic execution.
- While executing the script, all server activities are blocked during its entire runtime.

## Client-side caching reference
Source file: `raw/sources/20260409-docs-latest-develop-reference-client-side-caching-06a7fb3dbd.md`
- This document is intended as an in-depth reference for
- Client-side caching is a technique used to create high performance services.
- It exploits the memory available on application servers, servers that are
- usually distinct computers compared to the database nodes, to store some subset
- of the database information directly in the application side.

## Redis client handling
Source file: `raw/sources/20260409-docs-latest-develop-reference-clients-f274ddb797.md`
- This document provides information about how Redis handles clients at the network layer level: connections, timeouts, buffers, and other similar topics are covered here.
- The information contained in this document is **only applicable to Redis version 2.6 or greater**.
- Redis accepts clients connections on the configured TCP port and on the Unix socket if enabled. When a new client connection is accepted the following operations are performed:
- * The client socket is put in the non-blocking state since Redis uses multiplexing and non-blocking I/O.
- * The `TCP_NODELAY` option is set in order to ensure that there are no delays to the connection.

## Command key specifications
Source file: `raw/sources/20260409-docs-latest-develop-reference-key-specs-5cc66c7703.md`
- Many of the commands in Redis accept key names as input arguments.
- The 9th element in the reply of [`COMMAND`]() (and [`COMMAND INFO`]()) is an array that consists of the command's key specifications.
- A _key specification_ describes a rule for extracting the names of one or more keys from the arguments of a given command.
- Key specifications provide a robust and flexible mechanism, compared to the _first key_, _last key_ and _step_ scheme employed until Redis 7.0.
- Before introducing these specifications, Redis clients had no trivial programmatic means to extract key names for all commands.

## Modules API reference
Source file: `raw/sources/20260409-docs-latest-develop-reference-modules-modules-api-ref-9d908d68a0.md`
- <!-- This file is generated from module.c using
- redis/redis:utils/generate-module-api-doc.rb -->
- * [Heap allocation raw functions](#section-heap-allocation-raw-functions)
- * [Module information and time measurement](#section-module-information-and-time-measurement)
- * [Automatic memory management for modules](#section-automatic-memory-management-for-modules)

## Redis serialization protocol specification
Source file: `raw/sources/20260409-docs-latest-develop-reference-protocol-spec-cf88d4fbfa.md`
- To communicate with the Redis server, Redis clients use a protocol called Redis Serialization Protocol (RESP).
- While the protocol was designed specifically for Redis, you can use it for other client-server software projects.
- RESP is a compromise among the following considerations:
- RESP can serialize different data types including integers, strings, and arrays.
- It also features an error-specific type.

## Sentinel client spec
Source file: `raw/sources/20260409-docs-latest-develop-reference-sentinel-clients-6920d22ce6.md`
- Redis Sentinel is a monitoring solution for Redis instances that handles
- automatic failover of Redis masters and service discovery (who is the current
- master for a given group of instances?). Since Sentinel is both responsible
- for reconfiguring instances during failovers, and providing configurations to
- clients connecting to Redis masters or replicas, clients are required to have

## Redis CLI
Source file: `raw/sources/20260409-docs-latest-develop-tools-cli-b434c7f7fe.md`
- In interactive mode, `redis-cli` has basic line editing capabilities to provide a familiar typing experience.
- To launch the program in special modes, you can use several options, including:
- * Simulate a replica and print the replication stream it receives from the primary.
- * Check the latency of a Redis server and display statistics.
- * Request ASCII-art spectrogram of latency samples and frequencies.

## Redis Insight
Source file: `raw/sources/20260409-docs-latest-develop-tools-insight-e61244bd56.md`
- [![Discord](https://img.shields.io/discord/697882427875393627?style=flat-square)](https://discord.gg/QUkjSsk)
- [![Github](https://img.shields.io/static/v1?label=&message=repository&color=5961FF&logo=github)](https://github.com/redisinsight/redisinsight/)
- Redis Insight is a powerful tool for visualizing and optimizing data in Redis, making real-time application development easier and more fun than ever before. Redis Insight lets you do both GUI- and CLI-based interactions in a fully-featured desktop GUI client.
- <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
- * Automatically discover and add your local Redis databases (that use standalone connection type and do not require authentication).

## RDI in Redis Insight
Source file: `raw/sources/20260409-docs-latest-develop-tools-insight-rdi-connector-af418bc864.md`
- Redis Data Integration (RDI) and its [ingest pipeline capability]() is an end-to-end solution for mirroring your application's primary database in Redis. RDI employs a capture data change mechanism and a stream processor to map and transform source data such as relational tables into fast Redis data structures that match your use cases.
- You can read more about RDI's ingest architecture [on these pages]().
- As of version `2.54.0`, Redis Insight includes RDI connectivity, which allows you to connect to [RDI management planes](#how-rdi-is-deployed), create, test, and deploy [RDI pipelines](), and view RDI statistics.
- Open Redis Insight and then click on the **Redis Data Integration** tab, which looks like this:
- Next, click on **Let's connect to RDI**, which will open the **Add RDI Endpoint** dialog.

## RedisInsight v2.32.0, August 2023
Source file: `raw/sources/20260409-docs-latest-develop-tools-insight-release-notes-v-2-32-0-128ba1103f.md`
- This is the General Availability (GA) release of RedisInsight 2.32.

## Redis Insight v2.54.0, August 2024
Source file: `raw/sources/20260409-docs-latest-develop-tools-insight-release-notes-v-2-54-0-28b1524349.md`
- This is the General Availability (GA) release of Redis Insight 2.54.
- Support for [Redis Data Integration (RDI)](https://redis.io/data-integration/?utm_source=redisinsight&utm_medium=repository&utm_campaign=release_notes) - a powerful tool designed to seamlessly synchronize data from your existing database to Redis in near real-time. RDI establishes a data streaming pipeline that mirrors data from your existing database to Redis Software, so if a record is added or updated, those changes automatically flow into Redis. This no-code solution enables seamless data integration and faster data access so you can build real-time apps at any scale. And now you can seamlessly create, validate, deploy, and monitor your data pipelines directly from Redis Insight.

## Redis Insight v2.58.0, October 2024
Source file: `raw/sources/20260409-docs-latest-develop-tools-insight-release-notes-v-2-58-0-e548777f72.md`
- This is the General Availability (GA) release of Redis Insight 2.58.

## RedisInsight v2.6.0, July 2022
Source file: `raw/sources/20260409-docs-latest-develop-tools-insight-release-notes-v-2-6-0-537a120444.md`
- This is the General Availability (GA) release of RedisInsight 2.6.0

## Redis Insight v2.68.0, April 2025
Source file: `raw/sources/20260409-docs-latest-develop-tools-insight-release-notes-v-2-68-0-617436a31b.md`
- This is the General Availability (GA) release of Redis Insight 2.68.
- | Windows | 50YAPT59n2cLQu+P7kvc+kT+FxnW67pV53F1xz/C1IfgjmycgWpemycosbooQdLvXWPK4GLgk/NOnoZMI/15Lg== |
- | Linux AppImage | QbI7V8jCCVPum4jdd1W8CEOqT+iFzwUTrt9tVbu9Kpv81Pub27aIJve3kWDdXWyvxHPUlUOsBHIo/uHIzdFJPw== |
- | Linux Debian| V0/W8RclF6q0uT6uBR/lDNMt+OXqm7xmkSYf9vd8xCe4mGWUQBHiACX/aIgWs8l3Na5AQCNSJLrHnDXWiDD9Fw== |
- | MacOS Intel | j3bdEX0rvxPGBUMZ6hD9aD+C/WTR1bOZT+lekJqujkDnRSPMZS5syGfkd1cQfx8QSnM10qYBO4RCH0Ew0m3g0A== |

## Redis Insight v2.70.1, July 2025
Source file: `raw/sources/20260409-docs-latest-develop-tools-insight-release-notes-v-2-70-1-8214a06f30.md`
- This is a maintenance release for Redis Insight 2.70.
- Update urgency: `LOW` No need to upgrade unless there are new features you want to use.
- | Windows | yg+7OLp+KdWgPXwVXWsk26zODO3PoMMhFzNdDQy8FSy1R+lHZAqA42JBA9JNFHUtalZy1k/I3tyZ71TUeSsn+w== |
- | Linux AppImage | hx5XhNIyhna6nYW7wXFjj2XdaDvaq+Fro7qr+iae6cYuY7IO5sH2+oOVVva07yAno02zwxslmNuDkiRWcc5rGw== |
- | Linux Debian| pSwGCXGpxihwymQJOWcbA2Bq97tnSPtnXoIBQ0uut0bwc1SfisHML526a/2ypbyr53TzD0Ut73B+DvWHeRTSbA== |

## Redis Insight v3.0.3, February 2026
Source file: `raw/sources/20260409-docs-latest-develop-tools-insight-release-notes-v-3-0-3-abe64fbbff.md`
- This release includes new features, improvements, and bug fixes for Redis Insight.
- | Package             | SHA-512                                                                                  |
- | ------------------- | ---------------------------------------------------------------------------------------- |
- | Windows             | +IkHnTZw0saEKT5xYfWFrBEhGOUfc0tP5DygmnpB6r7uFUw42HyATopYr6WsYQrmzAzlhYxgcG61v125WfXR8g== |
- | Linux AppImage      | /OugHCsutRHzqaxe3ppS6N5XkpFarZMc+RTro5owjclv+FvfV6gV+NZzEmzB9bUJgHhu5ImB7/2RbKGexXh/Hw== |

## RedisInsight v2.10.0, September 2022
Source file: `raw/sources/20260409-docs-latest-develop-tools-insight-release-notes-v2-10-0-b9970cbb96.md`
- This is the General Availability (GA) release of RedisInsight 2.10.

## Token bucket rate limiter with Redis
Source file: `raw/sources/20260409-docs-latest-develop-use-cases-rate-limiter-1a2a734097.md`
- This guide shows you how to implement a distributed token bucket rate limiter using Redis and Lua scripts for atomic operations.
- Rate limiting is a critical technique for controlling the rate at which operations are performed. Common use cases include:
- * Limiting API requests per user or IP address
- * Preventing abuse and protecting against denial-of-service attacks
- * Ensuring fair resource allocation across multiple clients

## Token bucket rate limiter with Redis and .NET
Source file: `raw/sources/20260409-docs-latest-develop-use-cases-rate-limiter-dotnet-b71075a9a3.md`
- This guide shows you how to implement a distributed token bucket rate limiter using Redis and Lua scripts in .NET with the [`StackExchange.Redis`]() client library.
- Rate limiting is a critical technique for controlling the rate at which operations are performed. Common use cases include:
- * Limiting API requests per user or IP address
- * Preventing abuse and protecting against denial-of-service attacks
- * Ensuring fair resource allocation across multiple clients

## Token bucket rate limiter with Redis and Go
Source file: `raw/sources/20260409-docs-latest-develop-use-cases-rate-limiter-go-c9db92cb2b.md`
- This guide shows you how to implement a distributed token bucket rate limiter using Redis and Lua scripts in Go with the [`go-redis`]() client library.
- Rate limiting is a critical technique for controlling the rate at which operations are performed. Common use cases include:
- * Limiting API requests per user or IP address
- * Preventing abuse and protecting against denial-of-service attacks
- * Ensuring fair resource allocation across multiple clients

## Token bucket rate limiter with Redis and Java
Source file: `raw/sources/20260409-docs-latest-develop-use-cases-rate-limiter-java-jedis-eba0ad7a42.md`
- This guide shows you how to implement a distributed token bucket rate limiter using Redis and Lua scripts in Java with the [`Jedis`]() client library.
- Rate limiting is a critical technique for controlling the rate at which operations are performed. Common use cases include:
- * Limiting API requests per user or IP address
- * Preventing abuse and protecting against denial-of-service attacks
- * Ensuring fair resource allocation across multiple clients

## Token bucket rate limiter with Redis and Java (Lettuce)
Source file: `raw/sources/20260409-docs-latest-develop-use-cases-rate-limiter-java-lettuce-0976e5cb3e.md`
- This guide shows you how to implement a distributed token bucket rate limiter using Redis and Lua scripts in Java with the [`Lettuce`]() client library.
- Rate limiting is a critical technique for controlling the rate at which operations are performed. Common use cases include:
- * Limiting API requests per user or IP address
- * Preventing abuse and protecting against denial-of-service attacks
- * Ensuring fair resource allocation across multiple clients

## Token bucket rate limiter with Redis and Node.js
Source file: `raw/sources/20260409-docs-latest-develop-use-cases-rate-limiter-nodejs-1e0e7eb093.md`
- This guide shows you how to implement a distributed token bucket rate limiter using Redis and Lua scripts in Node.js with async/await.
- Rate limiting is a critical technique for controlling the rate at which operations are performed. Common use cases include:
- * Limiting API requests per user or IP address
- * Preventing abuse and protecting against denial-of-service attacks
- * Ensuring fair resource allocation across multiple clients

## Token bucket rate limiter with Redis and PHP
Source file: `raw/sources/20260409-docs-latest-develop-use-cases-rate-limiter-php-206e19574f.md`
- This guide shows you how to implement a distributed token bucket rate limiter using Redis and Lua scripts in PHP with the [Predis]() client library.
- Rate limiting is a critical technique for controlling the rate at which operations are performed. Common use cases include:
- * Limiting API requests per user or IP address
- * Preventing abuse and protecting against denial-of-service attacks
- * Ensuring fair resource allocation across multiple clients

## Token bucket rate limiter with Redis and Ruby
Source file: `raw/sources/20260409-docs-latest-develop-use-cases-rate-limiter-ruby-bd7bcf6696.md`
- This guide shows you how to implement a distributed token bucket rate limiter using Redis and Lua scripts in Ruby with the [`redis-rb`]() client library.
- Rate limiting is a critical technique for controlling the rate at which operations are performed. Common use cases include:
- * Limiting API requests per user or IP address
- * Preventing abuse and protecting against denial-of-service attacks
- * Ensuring fair resource allocation across multiple clients

## Token bucket rate limiter with Redis and Rust
Source file: `raw/sources/20260409-docs-latest-develop-use-cases-rate-limiter-rust-c506f350c5.md`
- This guide shows you how to implement a distributed token bucket rate limiter using Redis and Lua scripts in Rust with the [`redis-rs`]() client library.
- Rate limiting is a critical technique for controlling the rate at which operations are performed. Common use cases include:
- * Limiting API requests per user or IP address
- * Preventing abuse and protecting against denial-of-service attacks
- * Ensuring fair resource allocation across multiple clients

## Redis session store with Go
Source file: `raw/sources/20260409-docs-latest-develop-use-cases-session-store-go-248010bda2.md`
- This guide shows you how to implement a Redis-backed session store in Go with the [`go-redis`]() client library. It includes a small local web server built with Go's standard `net/http` package so you can see the session lifecycle end to end.
- Session storage is a common Redis use case for web applications. Instead of keeping session state in local process memory, you store it in Redis and send the browser only an opaque session ID in a cookie.
- * Shared sessions across multiple app servers
- * Fast reads and updates for small pieces of per-user state
- * A clean separation between browser cookies and server-side session data

## Redis session store with Java and Jedis
Source file: `raw/sources/20260409-docs-latest-develop-use-cases-session-store-java-jedis-4935af20fb.md`
- This guide shows you how to implement a Redis-backed session store in Java with [`Jedis`](). It includes a small local web server built with Java's built-in `HttpServer` so you can see the session lifecycle end to end.
- Session storage is a common Redis use case for web applications. Instead of keeping session state in local process memory, you store it in Redis and send the browser only an opaque session ID in a cookie.
- * Shared sessions across multiple app servers
- * Fast reads and updates for small pieces of per-user state
- * A clean separation between browser cookies and server-side session data

## Redis session store with PHP
Source file: `raw/sources/20260409-docs-latest-develop-use-cases-session-store-php-a78f7ae51d.md`
- This guide shows you how to implement a Redis-backed session store in PHP with [Predis](). It includes a small local web server using PHP's built-in development server so you can see the session lifecycle end to end.
- Session storage is a common Redis use case for web applications. Instead of keeping session state in local process memory, you store it in Redis and send the browser only an opaque session ID in a cookie.
- * Shared sessions across multiple app servers
- * Fast reads and updates for small pieces of per-user state
- * A clean separation between browser cookies and server-side session data

## Redis session store with redis-py
Source file: `raw/sources/20260409-docs-latest-develop-use-cases-session-store-redis-py-54762eb4df.md`
- This guide shows you how to implement a Redis-backed session store in Python with [`redis-py`](). It includes a small local web server built with the Python standard library so you can see the session lifecycle end to end.
- Session storage is a common Redis use case for web applications. Instead of keeping session state in local process memory, you store it in Redis and send the browser only an opaque session ID in a cookie.
- * Shared sessions across multiple app servers
- * Fast reads and updates for small pieces of per-user state
- * A clean separation between browser cookies and server-side session data

## Redis session store with Ruby
Source file: `raw/sources/20260409-docs-latest-develop-use-cases-session-store-ruby-c7e6a484c5.md`
- This guide shows you how to implement a Redis-backed session store in Ruby with [`redis-rb`](). It includes a small local web server built with WEBrick so you can see the session lifecycle end to end.
- Session storage is a common Redis use case for web applications. Instead of keeping session state in local process memory, you store it in Redis and send the browser only an opaque session ID in a cookie.
- * Shared sessions across multiple app servers
- * Fast reads and updates for small pieces of per-user state
- * A clean separation between browser cookies and server-side session data

## Using Redis commands
Source file: `raw/sources/20260409-docs-latest-develop-using-commands-53d30e993e.md`
- Client applications and tools interact with Redis using commands. Most of the
- commands implement [data types]() to store and retrieve data,
- but there are also commands that deal with server configuration, security, and more.
- The sections below give an overview of how Redis commands operate. See the
- [Redis commands reference]() for a complete list of commands.

## Multi-key operations
Source file: `raw/sources/20260409-docs-latest-develop-using-commands-multi-key-operations-d4c630349c.md`
- Multi-key operations in Redis allow you to work with multiple keys in a single command, but their behavior varies significantly depending on your Redis configuration and clustering setup. This page provides a quick reference for developers working with multi-key operations across different Redis configurations.
- Redis supports five distinct configurations, each with different multi-key command behaviors:
- 1. **ROS/RS clustering disabled** - Single Redis instance
- 2. **ROS, clustering enabled** - Redis Open Source cluster
- 3. **RS, clustering enabled, OSS cluster API enabled** - Redis Software with ROS cluster compatibility

## Redis pipelining
Source file: `raw/sources/20260409-docs-latest-develop-using-commands-pipelining-e72b0d70a4.md`
- Redis pipelining is a technique for improving performance by issuing multiple commands at once without waiting for the response to each individual command. Pipelining is supported by most Redis clients. This document describes the problem that pipelining is designed to solve and how pipelining works in Redis.
- Redis is a TCP server using the client-server model and what is called a *Request/Response* protocol.
- This means that usually a request is accomplished with the following steps:
- * The client sends a query to the server, and reads from the socket, usually in a blocking way, for the server response.
- * The server processes the command and sends the response back to the client.

## Redis 7.4
Source file: `raw/sources/20260409-docs-latest-develop-whats-new-7-4-961ca290a0.md`
- Redis 7.4 introduces several new features and improvements aimed at enhancing memory efficiency, performance, and ease of use for various applications. These updates include support for hash field expiration, new memory-efficient data types for AI workloads, simplified secondary indexing, and time series optimizations. Additionally, Redis 7.4 brings several behavior and component changes.
- Below is a detailed breakdown of these updates.
- Redis 7.4 adds the ability to set expiration times for individual hash fields or adjust their remaining TTL. This feature, long-requested by users, improves memory efficiency and performance, especially in caching and session storage scenarios.
- With the growing demand for AI applications, Redis 7.4 introduces `BFLOAT16` and `FLOAT16` data types. These new types reduce memory usage by up to 47% and lower latency by as much as 59% under load, making them ideal for storing and processing vector embeddings in AI-powered applications, including vector databases and Retrieval Augmented Generation (RAG) systems.
- Redis 7.4 introduces insertion filters for time series data, allowing sensors to ignore new measurements when the differences in time or value are minimal. This feature helps reduce the size of time series data and boosts efficiency.

## Redis 8.0
Source file: `raw/sources/20260409-docs-latest-develop-whats-new-8-0-b1f18ec6bd.md`
- Redis 8.0 introduces powerful new capabilities, including the beta release of the Vector Set data structure, designed for AI use cases such as semantic search and recommendation systems.
- This release also delivers over 30 performance improvements, including:
- Additionally, the Redis Community Edition has been renamed to Redis Open Source, marking a shift toward a unified, modern distribution. This version offers the full power of Redis â no modules, no fragmentation â just Redis.
- Below is a detailed breakdown of these updates.
- The new `Vector set` data structure supports high-dimensional vector similarity search, which is ideal for AI use cases such as semantic search and recommendation systems. Vector set complements Redisâs existing vector search capabilities via Redis Search and is currently available in beta. APIs and behaviors may change in future releases.

## Redis 8.2
Source file: `raw/sources/20260409-docs-latest-develop-whats-new-8-2-fadaad472d.md`
- Redis 8.2 builds on the foundation of Redis 8.0 with significant performance and memory optimizations, enhanced streaming capabilities, and improved cluster management tools.
- This release delivers major improvements across multiple areas:
- Below is a detailed breakdown of these updates.
- Redis 8.2 includes important security fixes:
- Redis 8.2 introduces powerful new commands that simplify consumer group management and stream lifecycle operations:

## Redis 8.4
Source file: `raw/sources/20260409-docs-latest-develop-whats-new-8-4-1ff98cca6f.md`
- Redis 8.4 builds on the foundation of Redis 8.2 with significant enhancements to cluster operations, string manipulation, and stream processing capabilities.
- This release delivers major improvements across multiple areas:
- Below is a detailed breakdown of these updates.
- Redis 8.4 introduces the [`CLUSTER MIGRATION`]() command, which enables atomic slot migration between cluster nodes. This command ensures zero-downtime cluster operations by moving slots and their associated data in a single atomic operation, eliminating the brief unavailability window that previously occurred during slot migrations.
- Redis 8.4 extends string manipulation capabilities with powerful new commands that enable atomic compare-and-set operations:

## Redis 8.6
Source file: `raw/sources/20260409-docs-latest-develop-whats-new-8-6-de08feff7b.md`
- Redis 8.6 builds on the foundation of Redis 8.4 with significant enhancements to stream reliability, memory management, and security features.
- This release delivers major improvements across multiple areas:
- Below is a detailed breakdown of these updates.
- Redis 8.6 includes important security and privacy enhancements:
- Redis 8.6 introduces powerful idempotency features for [Redis Streams]() that provide at-most-once delivery guarantees:

## What's new?
Source file: `raw/sources/20260409-docs-latest-develop-whats-new-9df0b573c4.md`
- * Updated the RESP3 specification document to include the [attribute type]().
- * Updates to the Redis Insight page related to its new Redis Search auto-completion [feature]().
- * Restructured and added testable connection examples to the [client pages]().
- * Added [Redis Open Source]() and [Redis Stack]() release notes.
- * Added new [Predis (PHP client library)]() page.

## Redis feature sets
Source file: `raw/sources/20260409-docs-latest-develop-whats-new-redis-feature-sets-f48094dd22.md`
- A Redis feature set includes a specific Redis database version along with the advanced capabilities and data structures provided by compatible module versions.
- To use a new feature introduced in a later feature set, you must upgrade the corresponding components according to the following table.
- | **Feature set version:** 8.6| See [here]()|
- | **Feature set version:** 8.4| See [here]()|
- | **Feature set version:** 8.2| See [here]()|

## Glossary
Source file: `raw/sources/20260409-docs-latest-glossary-165453db33.md`
- Allows you to manage permissions based on key patterns.
- More info: [redis.io/operate/oss_and_stack/management/security/acl](); [ACL wikipedia](https://en.wikipedia.org/wiki/Access-control_list); [Database access control](); [Update database ACLs](); [Role-based access control]()
- Geo-distributed databases that span multiple [Redis Enterprise Software]() [clusters](). Active-Active databases, also known as conflict-free replicated databases (CRDB), depend on [multi-primary replication]() and [conflict-free replicated data types (CRDTs)]() to power a simple development experience for geo-distributed applications.
- More info: [Active-Active geo-distributed Redis](), [Geo-distributed Active-Active Redis applications](), [Developing applications for Active-Active databases]()
- A "member database" of a global [Active-Active database]() which is made up of its own master and replica [shards]() spanning a single [cluster]().

## Redis Cloud on AWS
Source file: `raw/sources/20260409-docs-latest-integrate-aws-redis-cloud-0cf50eb788.md`
- Deploy Redis Cloud on Amazon Web Services (AWS) to leverage Redis's performance with AWS's global infrastructure and services.
- Redis Cloud on AWS provides a fully managed Redis service that combines the power of Redis with AWS's reliable, scalable cloud infrastructure. Deploy Redis databases across multiple AWS regions with enterprise-grade security, automatic scaling, and 24/7 monitoring.
- Get started with [Redis Cloud]() on AWS to create and manage your Redis databases with step-by-step setup instructions and best practices.

## C client for Redis
Source file: `raw/sources/20260409-docs-latest-integrate-hiredis-4c99268b04.md`
- Connect your C application to a Redis database using the hiredis client library.
- hiredis is a minimalistic C client library for Redis that provides a simple, efficient interface for Redis operations. It's designed to be lightweight, fast, and easy to integrate into C applications with minimal dependencies.
- Refer to the complete [C guide]() to install, connect, and use hiredis.

## Java client for Redis
Source file: `raw/sources/20260409-docs-latest-integrate-jedis-c061d11557.md`
- Connect your Java application to a Redis database using the Jedis client library.
- Jedis is a popular Java client for Redis that provides a simple, synchronous interface for Redis operations. It offers comprehensive Redis command support and is widely used in Java applications for its straightforward API and reliable performance.
- Refer to the complete [Jedis guide]() to install, connect, and use Jedis.

## C#/.NET client for Redis
Source file: `raw/sources/20260409-docs-latest-integrate-nredisstack-09cfa48dcf.md`
- Connect your C#/.NET application to a Redis database using the NRedisStack client library.
- NRedisStack is a comprehensive .NET client library for Redis that extends StackExchange.Redis with support for all Redis data structures and capabilities. It provides strongly-typed APIs for Redis data structures and advanced features, making it ideal for modern .NET applications.
- Refer to the complete [C#/.NET guide]() to install, connect, and use NRedisStack.

## PHP client for Redis
Source file: `raw/sources/20260409-docs-latest-integrate-php-redis-c0d2004274.md`
- Predis is the recommended PHP client for Redis.
- Predis is a flexible and feature-complete Redis client for PHP that supports Redis 2.0+ and provides a clean, object-oriented interface.
- Refer to the complete [Predis guide]() to install, connect, and use PHP Redis clients with detailed examples and framework integration guides.

## Prometheus and Grafana with Redis Cloud
Source file: `raw/sources/20260409-docs-latest-integrate-prometheus-with-redis-cloud-029046312a.md`
- You can use Prometheus and Grafana to collect and visualize your Redis Cloud metrics.
- Redis Cloud exposes its metrics through a Prometheus endpoint. You can configure your Prometheus server to scrape metrics from your Redis Cloud subscription on port 8070.
- The Redis Cloud Prometheus endpoint is exposed on Redis Cloud's internal network. To access this network, enable [VPC peering](), [Private Service Connect](), [AWS Transit Gateway](), or [AWS PrivateLink](). Private connectivity options are only available with Redis Cloud Pro. You cannot use Prometheus and Grafana with Redis Cloud Essentials.
- The Prometheus endpoint's metrics cover all databases within a subscription. Any database added to or removed from the subscription is reflected automatically.
- For more information on how Prometheus communicates with Redis Software clusters, see [Prometheus integration with Redis Software]().

## Get started with Pulumi
Source file: `raw/sources/20260409-docs-latest-integrate-pulumi-provider-for-redis-cloud-get-started-a5c1f2a7f1.md`
- Here, you'll learn how to use the [Redis Cloud Pulumi provider]() to create a Redis Cloud Pro subscription and a database using Python.
- 1. [Install Pulumi](https://www.pulumi.com/docs/install/) and [create a Pulumi account](https://app.pulumi.com/signin) if you do not have one already.
- 1. [Create a Redis Cloud account]() if you do not have one already.
- 1.  In your Python project, create an empty folder. From this folder, run `pulumi new rediscloud-python`.
- 1. Log into Pulumi using your [Pulumi access token](https://app.pulumi.com/account/tokens) if prompted.

## Redis for AI
Source file: `raw/sources/20260409-docs-latest-integrate-redis-ai-libraries-330d7f0d80.md`
- Build powerful AI applications using Redis as your vector database with specialized libraries for Python, JavaScript, and Java.
- Redis provides comprehensive AI libraries and tools to help you build intelligent applications with vector search, retrieval-augmented generation (RAG), semantic caching, and more. Whether you're working with LangChain, LlamaIndex, or building custom AI solutions, Redis has the tools you need.
- [Explore the complete Redis for AI documentation]()
- The Redis Vector Library (RedisVL) is a Python client library for building AI applications with Redis.
- Use Redis with LangChain for vector stores, semantic caching, and chat message history.

## Redis Data Integration
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-14d3848c9c.md`
- This is the first General Availability version of Redis Data Integration (RDI).
- RDI's purpose is to help Redis customers sync Redis Enterprise with live data from their slow disk based databases in order to:
- If you use a relational database as the system of record for your app,
- that its performance doesn't scale well as your userbase grows. It may be
- acceptable for a few thousand users but for a few million, it can become a

## Architecture
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-architecture-776aabda28.md`
- RDI implements a [change data capture](https://en.wikipedia.org/wiki/Change_data_capture) (CDC) pattern that tracks changes to the data in a
- non-Redis *source* database and makes corresponding changes to a Redis
- *target* database. You can use the target as a cache to improve performance
- because it will typically handle read queries much faster than the source.
- To use RDI, you define a *dataset* that specifies which data items

## Data pipelines
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-data-pipelines-5a8e227ee9.md`
- [change data capture](https://en.wikipedia.org/wiki/Change_data_capture) (CDC). (See the
- The sections below explain how pipelines work and give an overview of how to configure and
- An RDI pipeline captures change data records from the source database, and transforms them
- into Redis data structures. It writes each of these new structures to a Redis target
- By default, RDI transforms the source data into

## Data denormalization
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-data-pipelines-data-denormalization-adbb5262ac.md`
- The data in the source database is often
- [*normalized*](https://en.wikipedia.org/wiki/Database_normalization).
- This means that columns can't have composite values (such as arrays) and relationships between entities
- are expressed as mappings of primary keys to foreign keys between different tables.
- Normalized data models reduce redundancy and improve data integrity for write queries but this comes

## Deploy a pipeline
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-data-pipelines-deploy-213fdd84c2.md`
- The sections below explain how to deploy a pipeline after you have created the required
- Before you deploy your pipeline, you must set the authentication secrets for the
- source and target databases. Each secret has a name that you can pass to the
- command (VM deployment) or the `rdi-secret.sh` script (K8s deployment) to set the secret value.
- You can then refer to these secrets in the `config.yaml` file using the syntax "`${SECRET_NAME}`"

## Pipeline configuration file
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-data-pipelines-pipeline-config-71d6c3ce9b.md`
- The main configuration details for an RDI pipeline are in the `config.yaml` file.
- This file specifies the connection details for the source and target databases,
- and also the set of tables you want to capture. You can also add one or more
- if you want to apply custom transformations to the captured data.
- Below is an example of a `config.yaml` file. Note that the values of the

## Prepare MongoDB for RDI
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-data-pipelines-prepare-dbs-mongodb-af6eb2f003.md`
- This guide describes the steps required to prepare a MongoDB database as a source for Redis Data Integration (RDI) pipelines.
- The MongoDB connector is not capable of monitoring the changes of a standalone MongoDB server, since standalone servers do not have an oplog. The connector will work if the standalone server is converted to a replica set with one member.
- The following table summarizes the considerations to prepare a MongoDB database for RDI.
- | Requirement         | Description                                                                 |
- |---------------------|-----------------------------------------------------------------------------|

## Prepare PostgreSQL/Supabase for RDI
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-data-pipelines-prepare-dbs-postgres-15613e6c9e.md`
- [Supabase](https://supabase.com/docs/guides/database/overview) uses PostgreSQL as
- its database engine, so the instructions below also apply to Supabase. However, RDI
- doesn't currently support cloud deployments of Supabase with AWS or GCP.
- [logical decoding plug-ins](https://wiki.postgresql.org/wiki/Logical_Decoding_Plugins)
- to enable CDC. If you don't want to use the native `pgoutput` logical replication stream support

## Prepare Spanner for RDI
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-data-pipelines-prepare-dbs-spanner-0c383b862a.md`
- Google Cloud Spanner requires specific configuration to enable change data capture (CDC) with RDI.
- RDI operates in two phases with Spanner: snapshot (initial sync) and streaming. During the snapshot
- phase, RDI uses the JDBC driver to connect directly to Spanner and read the current state of the
- database. In the streaming phase, RDI uses [Spanner's Change Streams](https://cloud.google.com/spanner/docs/change-streams) to capture changes related to
- Spanner is only supported with RDI deployed on Kubernetes/Helm. RDI VM mode does not support Spanner as a source database.

## Prepare SQL Server for RDI
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-data-pipelines-prepare-dbs-sql-serv-800e39cfe4.md`
- To prepare your SQL Server database for Debezium, you must first create a dedicated Debezium user,
- run a script to enable CDC globally, and then separately enable CDC for each table you want to
- capture. You need administrator privileges to do this.
- Once you enable CDC, it captures all of the INSERT, UPDATE, and DELETE operations
- on your chosen tables. The Debezium connector can then emit these events to RDI.

## Job files
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-data-pipelines-transform-examples-599b218fa8.md`
- You can optionally supply one or more job files that specify how you want to
- transform the captured data before writing it to the target.
- configuration that controls the transformation for a particular table from the source
- database. You can also add a `default-job.yaml` file to provide
- a default transformation for tables that don't have a specific job file of their own.

## Remapping the fields in the output
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-data-pipelines-transform-examples-r-5579947c55.md`
- Sometimes, you may want to remap the fields in the output of a data pipeline. You can do this by defining a `mapping` section in the output configuration.
- The example above remaps the `CustomerId` field to `id`, `FirstName` to `first_name`, and `LastName` to `last_name` in the output. This allows you to customize the field names in the Redis data store according to your application's requirements.
- You can also use `mapping` to include only the fields you need in the output and exclude the rest.
- Mapping only allows you to rename fields and limit the output to specific fields and define a single level structure. To create nested structures and/or perform operations on the field values you can use the [map transformation]().

## Row Format
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-data-pipelines-transform-examples-r-e271df8f6b.md`
- The RDI pipelines support two separate row formats which you can specify in the `source` section of the job file:
- The `full` row format is useful when you want to access the metadata associated with the row, such as the operation code, and the before and after values.
- The structure of the data passed to the `transform` and `output` sections is different depending on the row format you choose. Consider which row format you are using when you reference keys.
- The following two examples demonstrate the difference between the two row formats.
- With the default row format, the input value is a JSON object containing the current value of the row, and fields can be referenced directly by their name.

## FAQ
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-faq-3c379c42bc.md`
- You must purchase a commercial license for RDI with Redis Enterprise. This includes two extra
- Redis Enterprise shards (primary and replica) for the staging database.
- RDI uses mechanisms that are specific for each of the supported
- lists any changes in a database view that RDI can query.
- RDI uses the concept of *processing units*. Each processing unit uses 1 CPU core and can process

## Install on Kubernetes
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-installation-install-k8s-02a1619ba2.md`
- This guide explains how to use the RDI [Helm chart](https://helm.sh/docs/topics/charts/)
- to install on [Kubernetes](https://kubernetes.io/) (K8s). You can also
- The installation creates the following K8s objects:
- You can also use a different namespace name if you prefer.
- [services](https://kubernetes.io/docs/concepts/services-networking/service/) for the

## Install on VMs
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-installation-install-vm-da19d8a14b.md`
- This guide explains how to install Redis Data Integration (RDI) on one or more VMs and integrate it with
- We recommend you always use the latest version, which is RDI v.
- RDI uses a database on your Redis Enterprise cluster to store its state
- information. Use the Redis Enterprise Cluster Manager UI to create the RDI database with the following
- Each of the RDI VMs should have at least:

## Upgrading RDI
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-installation-upgrade-f679e442ce.md`
- Follow the steps below to upgrade an existing
- 1.  Download the RDI installer from the [Redis download center](https://redis-enterprise-software-downloads.s3.amazonaws.com/redis-di/rdi-installation-.tar.gz)
- (in the *Modules, Tools & Integration* category) and extract it to your
- 1.  Run the `upgrade.sh` script as a privileged user. Note that you must pass
- your RDI password to the script unless the password is empty.

## Observability
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-observability-bd7d0a317c.md`
- RDI reports metrics about its operation using
- [Prometheus exporter endpoints](https://prometheus.io/docs/instrumenting/exporters/).
- [Prometheus](https://prometheus.io/docs/prometheus/latest/getting_started/)
- to query the metrics and plot simple graphs or with
- [Grafana](https://grafana.com/) to produce more complex visualizations and

## Quickstart
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-quick-start-guide-f177341180.md`
- In this tutorial you will learn how to install RDI and set up a pipeline to ingest live data from a [PostgreSQL](https://www.postgresql.org/) database into a Redis database.
- quite small in size, so a single shard database should be enough. RDI also needs to maintain its
- own database on the cluster to store state information. *This requires Redis Enterprise v6.4 or greater*.
- The following diagram shows the structure of the pipeline we will create (see
- the [architecture overview]() to learn how the pipeline works):

## redis-di
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-reference-cli-redis-di-911734c373.md`

## redis-di reset
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-reference-cli-redis-di-reset-28e82409c8.md`
- Client certificate file to authenticate with
- Password for unlocking an encrypted private key
- Force operation. Skips verification prompts
- Pause for user confirmation if manual shutdown of collector required

## redis-di start
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-reference-cli-redis-di-start-fb335f5633.md`
- Client certificate file to authenticate with
- Password for unlocking an encrypted private key

## redis-di status
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-reference-cli-redis-di-status-ee2bcee49b.md`
- Client certificate file to authenticate with
- Password for unlocking an encrypted private key
- Display ingested data streams (live mode only)

## redis-di stop
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-reference-cli-redis-di-stop-cff7b6f253.md`
- Client certificate file to authenticate with
- Password for unlocking an encrypted private key

## Redis Data Integration configuration file
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-reference-config-yaml-reference-6df9ee0578.md`
- Configuration file for Redis Data Integration (RDI) source collectors and target connections
- | Name                                                              | Type             | Description                                                                                                                                                               | Required |
- | ----------------------------------------------------------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
- | [**sources**](#sources)<br/>(Source collectors)                   | `object`         | Defines source collectors and their configurations. Each key represents a unique source identifier, and its value contains specific configuration for that collector<br/> |          |
- | [**processors**](#processors)<br/>(Data processing configuration) | `object`, `null` | Configuration settings that control how data is processed, including batch sizes, error handling, and performance tuning<br/>                                             |          |

## Redis Data Integration release notes 1.0 (June 2024)
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-release-notes-rdi-1-0-6688bffb0c.md`
- This is the first General Availability version of Redis Data Integration (RDI).
- RDIâs mission is to help Redis customers sync Redis Enterprise with live data from their slow disk-based databases to:
- RDI keeps the Redis cache up to date with changes in the primary database, using a
- [_Change Data Capture (CDC)_](https://en.wikipedia.org/wiki/Change_data_capture) mechanism.
- It also lets you _transform_ the data from relational tables into convenient

## Redis Data Integration release notes 1.10.0 (May 2025)
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-release-notes-rdi-1-10-0-265506dca0.md`
- This minor release replaces the 1.8.0 release.
- RDIâs mission is to help Redis customers sync Redis Enterprise with live data from their slow disk-based databases to:
- RDI keeps the Redis cache up to date with changes in the primary database, using a [_Change Data Capture (CDC)_](https://en.wikipedia.org/wiki/Change_data_capture) mechanism.
- It also lets you _transform_ the data from relational tables into convenient and fast data structures that match your app's requirements. You specify the transformations using a configuration system, so no coding is required.
- **Other Features, Improvements and Enhancements**

## Redis Data Integration release notes 1.12.0 (June 2025)
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-release-notes-rdi-1-12-0-5b5a15dcda.md`
- This minor release replaces the 1.10.0 release.
- RDIâs mission is to help Redis customers sync Redis Enterprise with live data from their slow disk-based databases to:
- RDI keeps the Redis cache up to date with changes in the primary database, using a [_Change Data Capture (CDC)_](https://en.wikipedia.org/wiki/Change_data_capture) mechanism.
- It also lets you _transform_ the data from relational tables into convenient and fast data structures that match your app's requirements. You specify the transformations using a configuration system, so no coding is required.
- RDI can write data to a Redis Active-Active database. However, it doesn't support writing data to two or more Active-Active replicas. Writing data from RDI to several Active-Active replicas could easily harm data integrity as RDI is not synchronous with the source database commits.

## Redis Data Integration release notes 1.12.1 (June 2025)
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-release-notes-rdi-1-12-1-b20b340b8e.md`
- This maintenance release replaces the 1.12.0 release.
- RDIâs mission is to help Redis customers sync Redis Enterprise with live data from their slow disk-based databases to:
- RDI keeps the Redis cache up to date with changes in the primary database, using a [_Change Data Capture (CDC)_](https://en.wikipedia.org/wiki/Change_data_capture) mechanism.
- It also lets you _transform_ the data from relational tables into convenient and fast data structures that match your app's requirements. You specify the transformations using a configuration system, so no coding is required.
- RDI can write data to a Redis Active-Active database. However, it doesn't support writing data to two or more Active-Active replicas. Writing data from RDI to several Active-Active replicas could easily harm data integrity as RDI is not synchronous with the source database commits.

## Redis Data Integration release notes 1.12.2 (July 2025)
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-release-notes-rdi-1-12-2-5e6a14e4f6.md`
- This maintenance release replaces the 1.12.1 release.
- RDIâs mission is to help Redis customers sync Redis Enterprise with live data from their slow disk-based databases to:
- RDI keeps the Redis cache up to date with changes in the primary database, using a [_Change Data Capture (CDC)_](https://en.wikipedia.org/wiki/Change_data_capture) mechanism.
- It also lets you _transform_ the data from relational tables into convenient and fast data structures that match your app's requirements. You specify the transformations using a configuration system, so no coding is required.
- RDI can write data to a Redis Active-Active database. However, it doesn't support writing data to two or more Active-Active replicas. Writing data from RDI to several Active-Active replicas could easily harm data integrity as RDI is not synchronous with the source database commits.

## Redis Data Integration release notes 1.12.3 (July 2025)
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-release-notes-rdi-1-12-3-ffcc0a0356.md`
- This maintenance release replaces the 1.12.2 release.
- RDIâs mission is to help Redis customers sync Redis Enterprise with live data from their slow disk-based databases to:
- RDI keeps the Redis cache up to date with changes in the primary database, using a [_Change Data Capture (CDC)_](https://en.wikipedia.org/wiki/Change_data_capture) mechanism.
- It also lets you _transform_ the data from relational tables into convenient and fast data structures that match your app's requirements. You specify the transformations using a configuration system, so no coding is required.
- PipelineRelease and Kubernetes deployment controllers.

## Redis Data Integration release notes 1.14.0 (August 2025)
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-release-notes-rdi-1-14-0-24dd86bae3.md`
- RDIâs mission is to help Redis customers sync Redis Enterprise with live data from their slow disk-based databases to:
- RDI keeps the Redis cache up to date with changes in the primary database, using a [_Change Data Capture (CDC)_](https://en.wikipedia.org/wiki/Change_data_capture) mechanism.
- It also lets you _transform_ the data from relational tables into convenient and fast data structures that match your app's requirements. You specify the transformations using a configuration system, so no coding is required.
- RDI can write data to a Redis Active-Active database. However, it doesn't support writing data to two or more Active-Active replicas. Writing data from RDI to several Active-Active replicas could easily harm data integrity as RDI is not synchronous with the source database commits.

## Redis Data Integration release notes 1.14.1 (August 2025)
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-release-notes-rdi-1-14-1-a581182d2a.md`
- This maintenance release replaces the 1.14.0 release.
- RDIâs mission is to help Redis customers sync Redis Enterprise with live data from their slow disk-based databases to:
- RDI keeps the Redis cache up to date with changes in the primary database, using a [_Change Data Capture (CDC)_](https://en.wikipedia.org/wiki/Change_data_capture) mechanism.
- It also lets you _transform_ the data from relational tables into convenient and fast data structures that match your app's requirements. You specify the transformations using a configuration system, so no coding is required.
- RDI can write data to a Redis Active-Active database. However, it doesn't support writing data to two or more Active-Active replicas. Writing data from RDI to several Active-Active replicas could easily harm data integrity as RDI is not synchronous with the source database commits.

## Redis Data Integration release notes 1.15.0 (October 2025)
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-release-notes-rdi-1-15-0-b88de01792.md`
- RDI's mission is to help Redis customers sync Redis Enterprise with live data from their slow disk-based databases to:
- RDI keeps the Redis cache up to date with changes in the primary database, using a [_Change Data Capture (CDC)_](https://en.wikipedia.org/wiki/Change_data_capture) mechanism.
- It also lets you _transform_ the data from relational tables into convenient and fast data structures that match your app's requirements. You specify the transformations using a configuration system, so no coding is required.
- **Breaking change when using JSON with `json_update_strategy: merge`**
- RDI now uses the native `JSON.MERGE` command instead of Lua scripts for JSON merge operations. While this provides significant performance improvements (2x faster), there is a **functional difference** in how null values are handled:

## Redis Data Integration release notes 1.15.1 (November 2025)
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-release-notes-rdi-1-15-1-862f3c42ed.md`
- This maintenance release replaces the 1.15.0 release.
- RDIâs mission is to help Redis customers sync Redis Enterprise with live data from their slow disk-based databases to:
- RDI keeps the Redis cache up to date with changes in the primary database, using a [_Change Data Capture (CDC)_](https://en.wikipedia.org/wiki/Change_data_capture) mechanism.
- It also lets you _transform_ the data from relational tables into convenient and fast data structures that match your app's requirements. You specify the transformations using a configuration system, so no coding is required.
- RDI can write data to a Redis Active-Active database. However, it doesn't support writing data to two or more Active-Active replicas. Writing data from RDI to several Active-Active replicas could easily harm data integrity as RDI is not synchronous with the source database commits.

## Redis Data Integration release notes 1.16.0 (January 2026)
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-release-notes-rdi-1-16-0-e22b9b7237.md`
- RDI's mission is to help Redis customers sync Redis Enterprise with live data from their slow disk-based databases to:
- RDI keeps the Redis cache up to date with changes in the primary database, using a [_Change Data Capture (CDC)_](https://en.wikipedia.org/wiki/Change_data_capture) mechanism.
- It also lets you _transform_ the data from relational tables into convenient and fast data structures that match your app's requirements. You specify the transformations using a configuration system, so no coding is required.
- RDI can write data to a Redis Active-Active database. However, it doesn't support writing data to two or more Active-Active replicas. Writing data from RDI to several Active-Active replicas could easily harm data integrity as RDI is not synchronous with the source database commits.

## Redis Data Integration release notes 1.16.1 (February 2026)
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-release-notes-rdi-1-16-1-fa48fda27a.md`
- This maintenance release replaces the 1.16.0 release.
- RDI's mission is to help Redis customers sync Redis Enterprise with live data from their slow disk-based databases to:
- RDI keeps the Redis cache up to date with changes in the primary database, using a [_Change Data Capture (CDC)_](https://en.wikipedia.org/wiki/Change_data_capture) mechanism.
- It also lets you _transform_ the data from relational tables into convenient and fast data structures that match your app's requirements. You specify the transformations using a configuration system, so no coding is required.
- RDI can write data to a Redis Active-Active database. However, it doesn't support writing data to two or more Active-Active replicas. Writing data from RDI to several Active-Active replicas could easily harm data integrity as RDI is not synchronous with the source database commits.

## Redis Data Integration release notes 1.16.2 (March 2026)
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-release-notes-rdi-1-16-2-49a6ee2248.md`
- This maintenance release replaces the 1.16.1 release.
- RDI's mission is to help Redis customers sync Redis Enterprise with live data from their slow disk-based databases to:
- RDI keeps the Redis cache up to date with changes in the primary database, using a [_Change Data Capture (CDC)_](https://en.wikipedia.org/wiki/Change_data_capture) mechanism.
- It also lets you _transform_ the data from relational tables into convenient and fast data structures that match your app's requirements. You specify the transformations using a configuration system, so no coding is required.
- RDI can write data to a Redis Active-Active database. However, it doesn't support writing data to two or more Active-Active replicas. Writing data from RDI to several Active-Active replicas could easily harm data integrity as RDI is not synchronous with the source database commits.

## Redis Data Integration release notes 1.2.8 (August 2024)
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-release-notes-rdi-1-2-8-54674223fd.md`
- > This maintenance release replaces the 1.2 release.
- RDIâs mission is to help Redis customers sync Redis Enterprise with live data from their slow disk-based databases to:
- RDI keeps the Redis cache up to date with changes in the primary database, using a [_Change Data Capture (CDC)_](https://en.wikipedia.org/wiki/Change_data_capture) mechanism.
- It also lets you _transform_ the data from relational tables into convenient and fast data structures that match your app's requirements. You specify the transformations using a configuration system, so no coding is required.

## Redis Data Integration release notes 1.2 (June 2024)
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-release-notes-rdi-1-2-e106ac6364.md`
- > This minor release replaces the 1.0 release.
- RDIâs mission is to help Redis customers sync Redis Enterprise with live data from their slow disk-based databases to:
- RDI keeps the Redis cache up to date with changes in the primary database, using a
- [_Change Data Capture (CDC)_](https://en.wikipedia.org/wiki/Change_data_capture) mechanism.
- It also lets you _transform_ the data from relational tables into convenient

## Redis Data Integration release notes 1.4.0 (October 2024)
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-release-notes-rdi-1-4-0-a0479318a6.md`
- > This is a GA version of Redis Data Integration (RDI) that improves the installation of RDI.
- RDIâs mission is to help Redis customers sync Redis Enterprise with live data from their slow disk-based databases to:
- RDI keeps the Redis cache up to date with changes in the primary database, using a [_Change Data Capture (CDC)_](https://en.wikipedia.org/wiki/Change_data_capture) mechanism.
- It also lets you _transform_ the data from relational tables into convenient and fast data structures that match your app's requirements. You specify the transformations using a configuration system, so no coding is required.
- RDI can write data to a Redis Active-Active database. However, it doesn't support writing data to two or more Active-Active replicas. Writing data from RDI to several Active-Active replicas could easily harm data integrity as RDI is not synchronous with the source database commits.

## Redis Data Integration release notes 1.4.1 (November 2024)
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-release-notes-rdi-1-4-1-9023314719.md`
- > This maintenance release replaces the 1.4.0 release.
- RDIâs mission is to help Redis customers sync Redis Enterprise with live data from their slow disk-based databases to:
- RDI keeps the Redis cache up to date with changes in the primary database, using a [_Change Data Capture (CDC)_](https://en.wikipedia.org/wiki/Change_data_capture) mechanism.
- It also lets you _transform_ the data from relational tables into convenient and fast data structures that match your app's requirements. You specify the transformations using a configuration system, so no coding is required.
- RDI can write data to a Redis Active-Active database. However, it doesn't support writing data to two or more Active-Active replicas. Writing data from RDI to several Active-Active replicas could easily harm data integrity as RDI is not synchronous with the source database commits.

## Redis Data Integration release notes 1.4.2 (November 2024)
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-release-notes-rdi-1-4-2-653393dd36.md`
- > This maintenance release replaces the 1.4.1 release.
- RDIâs mission is to help Redis customers sync Redis Enterprise with live data from their slow disk-based databases to:
- RDI keeps the Redis cache up to date with changes in the primary database, using a [_Change Data Capture (CDC)_](https://en.wikipedia.org/wiki/Change_data_capture) mechanism.
- It also lets you _transform_ the data from relational tables into convenient and fast data structures that match your app's requirements. You specify the transformations using a configuration system, so no coding is required.
- The user can now specify the port correctly.

## Redis Data Integration release notes 1.4.3 (December 2024)
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-release-notes-rdi-1-4-3-7ddc71577b.md`
- > This maintenance release replaces the 1.4.2 release.
- RDIâs mission is to help Redis customers sync Redis Enterprise with live data from their slow disk-based databases to:
- RDI keeps the Redis cache up to date with changes in the primary database, using a [_Change Data Capture (CDC)_](https://en.wikipedia.org/wiki/Change_data_capture) mechanism.
- It also lets you _transform_ the data from relational tables into convenient and fast data structures that match your app's requirements. You specify the transformations using a configuration system, so no coding is required.
- RDI can write data to a Redis Active-Active database. However, it doesn't support writing data to two or more Active-Active replicas. Writing data from RDI to several Active-Active replicas could easily harm data integrity as RDI is not synchronous with the source database commits.

## Redis Data Integration release notes 1.4.4 (January 2025)
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-release-notes-rdi-1-4-4-a7068f6249.md`
- > This maintenance release replaces the 1.4.3 release.
- RDIâs mission is to help Redis customers sync Redis Enterprise with live data from their slow disk-based databases to:
- RDI keeps the Redis cache up to date with changes in the primary database, using a [_Change Data Capture (CDC)_](https://en.wikipedia.org/wiki/Change_data_capture) mechanism.
- It also lets you _transform_ the data from relational tables into convenient and fast data structures that match your app's requirements. You specify the transformations using a configuration system, so no coding is required.
- RDI can write data to a Redis Active-Active database. However, it doesn't support writing data to two or more Active-Active replicas. Writing data from RDI to several Active-Active replicas could easily harm data integrity as RDI is not synchronous with the source database commits.

## Redis Data Integration release notes 1.6.0 (February 2025)
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-release-notes-rdi-1-6-0-4e65e35200.md`
- > This maintenance release replaces the 1.4.4 release.
- RDIâs mission is to help Redis customers sync Redis Enterprise with live data from their slow disk-based databases to:
- RDI keeps the Redis cache up to date with changes in the primary database, using a [_Change Data Capture (CDC)_](https://en.wikipedia.org/wiki/Change_data_capture) mechanism.
- It also lets you _transform_ the data from relational tables into convenient and fast data structures that match your app's requirements. You specify the transformations using a configuration system, so no coding is required.
- RDI can write data to a Redis Active-Active database. However, it doesn't support writing data to two or more Active-Active replicas. Writing data from RDI to several Active-Active replicas could easily harm data integrity as RDI is not synchronous with the source database commits.

## Redis Data Integration release notes 1.6.1 (March 2025)
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-release-notes-rdi-1-6-1-9bdde8676a.md`
- > This release replaces the 1.6.0 release.
- RDIâs mission is to help Redis customers sync Redis Enterprise with live data from their slow disk-based databases to:
- RDI keeps the Redis cache up to date with changes in the primary database, using a [_Change Data Capture (CDC)_](https://en.wikipedia.org/wiki/Change_data_capture) mechanism.
- It also lets you _transform_ the data from relational tables into convenient and fast data structures that match your app's requirements. You specify the transformations using a configuration system, so no coding is required.
- RDI can write data to a Redis Active-Active database. However, it doesn't support writing data to two or more Active-Active replicas. Writing data from RDI to several Active-Active replicas could easily harm data integrity as RDI is not synchronous with the source database commits.

## Redis Data Integration release notes 1.6.2 (March 2025)
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-release-notes-rdi-1-6-2-7e67f9ad42.md`
- > This maintenance release replaces the 1.6.1 release.
- RDIâs mission is to help Redis customers sync Redis Enterprise with live data from their slow disk-based databases to:
- RDI keeps the Redis cache up to date with changes in the primary database, using a [_Change Data Capture (CDC)_](https://en.wikipedia.org/wiki/Change_data_capture) mechanism.
- It also lets you _transform_ the data from relational tables into convenient and fast data structures that match your app's requirements. You specify the transformations using a configuration system, so no coding is required.
- Fixed an issue where the exporter would crash on startup if the RDI namespace included dashes (e.g., `my-namespace`) that are not allowed in prometheus labels.

## Redis Data Integration release notes 1.6.3 (March 2025)
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-release-notes-rdi-1-6-3-4542533658.md`
- > This maintenance release replaces the 1.6.2 release.
- RDIâs mission is to help Redis customers sync Redis Enterprise with live data from their slow disk-based databases to:
- RDI keeps the Redis cache up to date with changes in the primary database, using a [_Change Data Capture (CDC)_](https://en.wikipedia.org/wiki/Change_data_capture) mechanism.
- It also lets you _transform_ the data from relational tables into convenient and fast data structures that match your app's requirements. You specify the transformations using a configuration system, so no coding is required.
- RDI can write data to a Redis Active-Active database. However, it doesn't support writing data to two or more Active-Active replicas. Writing data from RDI to several Active-Active replicas could easily harm data integrity as RDI is not synchronous with the source database commits.

## Redis Data Integration release notes 1.6.4 (April 2025)
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-release-notes-rdi-1-6-4-8b13cc68de.md`
- > This maintenance release replaces the 1.6.3 release.
- RDIâs mission is to help Redis customers sync Redis Enterprise with live data from their slow disk-based databases to:
- RDI keeps the Redis cache up to date with changes in the primary database, using a [_Change Data Capture (CDC)_](https://en.wikipedia.org/wiki/Change_data_capture) mechanism.
- It also lets you _transform_ the data from relational tables into convenient and fast data structures that match your app's requirements. You specify the transformations using a configuration system, so no coding is required.
- RDI can write data to a Redis Active-Active database. However, it doesn't support writing data to two or more Active-Active replicas. Writing data from RDI to several Active-Active replicas could easily harm data integrity as RDI is not synchronous with the source database commits.

## Redis Data Integration release notes 1.6.5 (April 2025)
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-release-notes-rdi-1-6-5-bebe0485f2.md`
- > This maintenance release replaces the 1.6.4 release.
- RDIâs mission is to help Redis customers sync Redis Enterprise with live data from their slow disk-based databases to:
- RDI keeps the Redis cache up to date with changes in the primary database, using a [_Change Data Capture (CDC)_](https://en.wikipedia.org/wiki/Change_data_capture) mechanism.
- It also lets you _transform_ the data from relational tables into convenient and fast data structures that match your app's requirements. You specify the transformations using a configuration system, so no coding is required.
- RDI can write data to a Redis Active-Active database. However, it doesn't support writing data to two or more Active-Active replicas. Writing data from RDI to several Active-Active replicas could easily harm data integrity as RDI is not synchronous with the source database commits.

## Redis Data Integration release notes 1.6.6 (April 2025)
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-release-notes-rdi-1-6-6-8fb00634fd.md`
- > This maintenance release replaces the 1.6.5 release.
- RDIâs mission is to help Redis customers sync Redis Enterprise with live data from their slow disk-based databases to:
- RDI keeps the Redis cache up to date with changes in the primary database, using a [_Change Data Capture (CDC)_](https://en.wikipedia.org/wiki/Change_data_capture) mechanism.
- It also lets you _transform_ the data from relational tables into convenient and fast data structures that match your app's requirements. You specify the transformations using a configuration system, so no coding is required.
- RDI can write data to a Redis Active-Active database. However, it doesn't support writing data to two or more Active-Active replicas. Writing data from RDI to several Active-Active replicas could easily harm data integrity as RDI is not synchronous with the source database commits.

## Redis Data Integration release notes 1.6.7 (May 2025)
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-release-notes-rdi-1-6-7-acc769dac6.md`
- > This maintenance release replaces the 1.6.6 release.
- RDIâs mission is to help Redis customers sync Redis Enterprise with live data from their slow disk-based databases to:
- RDI keeps the Redis cache up to date with changes in the primary database, using a [_Change Data Capture (CDC)_](https://en.wikipedia.org/wiki/Change_data_capture) mechanism.
- It also lets you _transform_ the data from relational tables into convenient and fast data structures that match your app's requirements. You specify the transformations using a configuration system, so no coding is required.
- MariaDB. Schema and Database are the same for these databases.

## Redis Data Integration release notes 1.8.0 (May 2025)
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-release-notes-rdi-1-8-0-0f54beb15e.md`
- This minor release replaces the 1.6.7 release.
- RDIâs mission is to help Redis customers sync Redis Enterprise with live data from their slow disk-based databases to:
- RDI keeps the Redis cache up to date with changes in the primary database, using a [_Change Data Capture (CDC)_](https://en.wikipedia.org/wiki/Change_data_capture) mechanism.
- It also lets you _transform_ the data from relational tables into convenient and fast data structures that match your app's requirements. You specify the transformations using a configuration system, so no coding is required.
- will also enable many new features in the near future.

## Python client for Redis
Source file: `raw/sources/20260409-docs-latest-integrate-redis-py-ec39d954c0.md`
- Connect your Python application to a Redis database using the redis-py client library.
- redis-py is the recommended Python client for Redis, providing a comprehensive interface for all Redis commands and features. It offers both synchronous and asynchronous APIs, making it suitable for a wide range of Python applications from simple scripts to high-performance web applications.
- Refer to the complete [Python guide]() to install, connect, and use redis-py.

## RedisOM for Java
Source file: `raw/sources/20260409-docs-latest-integrate-redisom-for-java-7b187593b2.md`
- Redis Stack provides a seamless and straightforward way to use different data models and functionality from Redis, including a document store, a time series data database, probabilistic data structures, and a full-text search engine.
- Redis Stack is supported by several client libraries, including Node.js, Java, and Python, so that developers can use their preferred language. We'll be using one of the Redis Stack supporting libraries; [Redis OM Spring](https://github.com/redis/redis-om-spring).
- Redis OM Spring provides a robust repository and custom object-mapping abstractions built on the powerful Spring Data Redis (SDR) framework.
- Weâll start by creating a skeleton app using the [Spring Initializer](https://start.spring.io), open your browser to https://start.spring.io and let's configure our skeleton application as follows:
- * Weâll use a Maven-based build (check Maven checkbox)

## Rust client for Redis
Source file: `raw/sources/20260409-docs-latest-integrate-rust-redis-0fb364a83e.md`
- Connect your Rust application to a Redis database using the redis-rs client library.
- redis-rs is a high-performance Redis client for Rust that leverages Rust's memory safety and performance characteristics. It provides both synchronous and asynchronous APIs with excellent integration into the Rust ecosystem.
- Refer to the [Rust Redis documentation](https://docs.rs/redis/latest/redis/) to install, connect, and use redis-rs.

## Get started with Terraform
Source file: `raw/sources/20260409-docs-latest-integrate-terraform-provider-for-redis-cloud-get-started-375d88468f.md`
- Here, you'll learn how to use the [Redis Cloud Terraform Provider]() to create a subscription and a database.
- 1. [Install Terraform](https://developer.hashicorp.com/terraform/tutorials/aws-get-started/install-cli).
- 1. [Create a Redis Cloud account]() if you do not have one already.
- 1. Get your Redis Cloud [API keys](). Set them to the following environment variables:
- 1. Create a file to contain the Terraform configuration called `main.tf`.

## Uptrace with Redis Software
Source file: `raw/sources/20260409-docs-latest-integrate-uptrace-with-redis-enterprise-9195abae4f.md`
- Uptrace is an [open source APM tool](https://uptrace.dev/get/open-source-apm.html) that supports distributed tracing, metrics, and logs. You can use it to monitor applications and set up automatic alerts to receive notifications.
- Uptrace uses OpenTelemetry to collect and export telemetry data from software applications such as Redis. OpenTelemetry is an open source observability framework that aims to provide a single standard for all types of observability signals such as traces, metrics, and logs.
- With OpenTelemetry Collector, you can receive, process, and export telemetry data to any [OpenTelemetry backend](https://uptrace.dev/blog/opentelemetry-backend.html). You can also use Collector to scrape Prometheus metrics provided by Redis and then export those metrics to Uptrace.
- Because installing OpenTelemetry Collector and Uptrace can take some time, you can use the [docker-compose](https://github.com/uptrace/uptrace/tree/master/example/redis-enterprise) example that also comes with Redis Software cluster.
- After you download the Docker example, you can edit the following configuration files in the `uptrace/example/redis-enterprise` directory before you start the Docker containers:

## Write-behind architecture
Source file: `raw/sources/20260409-docs-latest-integrate-write-behind-architecture-97d2527ac5.md`
- Write-behind lets you integrate Redis Enterprise (as the source of changes to data) and downstream databases or datastores.
- Write-behind captures any changes to a selected set of key patterns in a Redis keyspace and asynchronously writes them in small batches to the downstream database. This means that your app doesn't need to handle the data remodeling or manage the connection with the downstream database.
- Write-behind can normalize a key in Redis to several records in one or more tables at the target.
- To learn more about write-behind declarative jobs and normalization, see the
- Write-behind's CLI and engine are shipped as one product that can run both ingest and write-behind pipelines.

## Data transformation pipeline
Source file: `raw/sources/20260409-docs-latest-integrate-write-behind-data-transformation-data-transformation-pipel-19d20fcde2.md`
- Write-behind's data transformation capabilities allow users to transform their data beyond the default translation of source types to Redis types. The transformation involves no coding. Instead, it is described in a set of human readable YAML files, one per source table.
- The ingested format and types are different from one source to another. Currently, the only supported source is [Debezium](https://debezium.io/). The first transformation from Debezium types to native JSON with Redis types is done automatically without any need for user instructions. Then, this JSON is passed on to the user defined transformation pipeline.
- Each job describes the transformation logic to perform on data from a single source. The source is typically a database table or collection and is specified as the full name of this table/collection. The job may include filtering logic to skip data that matches a condition. Other logical steps in the job will transform the data into the desired output that will be stored in Redis as hashes or JSON.
- In situations where there is a need to perform a transformation on all ingested records without creating a specific job for specific tables, the default job is used. The transformation associated with this job will be applied to all tables that lack their own explicitly defined jobs. The default job must have a table name of "*", and only one instance of this type of job is permitted.
- For example, the default job can streamline tasks such as adding a prefix or postfix to Redis keys, or adding fields to new hashes and JSONs without customizing each source table.

## Monitoring guide
Source file: `raw/sources/20260409-docs-latest-integrate-write-behind-monitoring-guide-535f1c435b.md`
- Write-behind accumulates operating statistics that you can:
- Write-behind can display its operating metrics in the console using the
- command. The command provides information about the current Write-behind engine status, target database configuration, and processing statistics broken down by stream. This tool is intended to be used by Operator to get the current snapshot of the system as well as monitoring ongoing data processing (when used in live mode).
- Write-behind allows collecting and exporting its metrics to [Prometheus](https://prometheus.io/) and visualizing them in [Grafana](https://grafana.com/). Operator can start the built-in exporter using the
- command. The diagram describes this flow and the components involved:

## Quickstart
Source file: `raw/sources/20260409-docs-latest-integrate-write-behind-quickstart-write-behind-guide-447c2987e9.md`
- This guide takes you through the creation of a write-behind pipeline.
- **Write-behind** is a processing pipeline used to synchronize data in a Redis database with a downstream data store.
- You can think about it as a pipeline that starts with change data capture (CDC) events for a Redis database and then filters, transforms, and maps the data to the target data store data structures.
- The **target** data store to which the write-behind pipeline connects and writes data.
- The write-behind pipeline is composed of one or more **jobs**. Each job is responsible for capturing change for one key pattern in Redis and mapping it to one or more tables in the downstream data store. Each job is defined in a YAML file.

## redis-di
Source file: `raw/sources/20260409-docs-latest-integrate-write-behind-reference-cli-redis-di-0dcb618027.md`

## redis-di reset
Source file: `raw/sources/20260409-docs-latest-integrate-write-behind-reference-cli-redis-di-reset-d6de870d81.md`
- Client certificate file to authenticate with
- Password for unlocking an encrypted private key
- Force operation. skips verification prompts

## redis-di start
Source file: `raw/sources/20260409-docs-latest-integrate-write-behind-reference-cli-redis-di-start-6c47dfdb07.md`
- Client certificate file to authenticate with
- Password for unlocking an encrypted private key

## redis-di status
Source file: `raw/sources/20260409-docs-latest-integrate-write-behind-reference-cli-redis-di-status-5273a3c3a0.md`
- Client certificate file to authenticate with
- Password for unlocking an encrypted private key
- Display ingested data streams (live mode only)

## redis-di stop
Source file: `raw/sources/20260409-docs-latest-integrate-write-behind-reference-cli-redis-di-stop-db6fe7a8c7.md`
- Client certificate file to authenticate with
- Password for unlocking an encrypted private key

## Write-behind configuration for cassandra
Source file: `raw/sources/20260409-docs-latest-integrate-write-behind-reference-debezium-cassandra-98b6647902.md`

## Write-behind configuration for mongodb
Source file: `raw/sources/20260409-docs-latest-integrate-write-behind-reference-debezium-mongodb-c926b0e1e9.md`

## Write-behind configuration for mysql
Source file: `raw/sources/20260409-docs-latest-integrate-write-behind-reference-debezium-mysql-9c2a8fee0a.md`

## Write-behind configuration for oracle
Source file: `raw/sources/20260409-docs-latest-integrate-write-behind-reference-debezium-oracle-bd9231506e.md`

## Write-behind configuration for postgresql
Source file: `raw/sources/20260409-docs-latest-integrate-write-behind-reference-debezium-postgresql-9d2c1a9ea3.md`

## Write-behind configuration for sqlserver
Source file: `raw/sources/20260409-docs-latest-integrate-write-behind-reference-debezium-sqlserver-1b71c191f7.md`

## Redis products
Source file: `raw/sources/20260409-docs-latest-operate-5a121233bd.md`
- | <ul><li> [Get started with Redis Cloud]() </li><li> [Create a database]() </li><li> [Connect to your database]() </li><li> [Subscriptions]() </li><li>[REST API]()</li></ul> | <ul><li> [Install Redis Software]() </li><li> [Set up a new cluster]() </li><li> [Create a database]() </li><li> [Connect to your database]() </li><li>[REST API]()</li></ul> |
- |  **Redis Open Source** |  **Redis for Kubernetes** |
- | <ul><li> [Install Redis 8 in Redis Open Source]() </li><li> [Install Redis Stack]() (&#8804; 7.4) </li><li> [Manage Redis]() </li></ul> | <ul><li> [Deploy Redis for Kubernetes]() </li><li> [Architecture]() </li><li> [API Reference]() </li></ul> |
- |  **Redis Insight** |  **Redis Data Integration (RDI)** |
- | <ul><li> [Install Redis Insight]() </li><li> [Use Redis Insight]() </li><li> [Download Redis Insight](https://redis.io/downloads/#insight) </li></ul> | <ul><li> [RDI overview]() </li><li> [Install RDI]() </li> <li> [RDI pipelines]() </li> </ul> |

## Flex on Kubernetes
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-flex-8941fa1334.md`
- Flex extends your database capacity by combining RAM and flash (SSD) storage. This tiered architecture keeps frequently accessed (hot) data in RAM for sub-millisecond latency while storing less active (warm) data on flash to reduce costs and increase capacity.
- Flex databases work with your existing Redis applications and the Redis API without modification.
- Flex moves data between RAM and flash based on access patterns:
- Redis uses an [LRU (least recently used)]() eviction policy to manage data placement. When memory pressure increases, Flex identifies cold objects, transfers them to flash, and frees RAM for new or frequently accessed keys.
- This process requires no application changes. Your existing Redis commands work across both storage tiers.

## Get started with Flex on Kubernetes
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-flex-get-started-a76f06109f.md`
- This page applies to Redis database version 7.4 and earlier using Auto Tiering. If you use version 8.0 or later, see [Redis Flex](https://redis.io/docs/latest/operate/kubernetes/flex/).
- Flex extends your database capacity by combining RAM and flash (SSD) storage. This tiered architecture keeps frequently accessed (hot) data in RAM for sub-millisecond latency while storing less active (warm) data on flash to reduce costs and increase capacity.
- For hardware requirements and sizing guidelines, see [Plan your deployment]().
- To enable Flex, configure your `RedisEnterpriseCluster` (REC) resource with flash storage settings. Add the [`redisOnFlashSpec`]() section to your REC specification.
- | Field                   | Description                                      |

## Plan a Redis Flex deployment on Kubernetes
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-flex-plan-c2318a180e.md`
- Review the hardware requirements, sizing guidelines, and known limitations before you deploy Redis Flex.
- For more information about storage configuration, see [Kubernetes local volumes](https://kubernetes.io/docs/concepts/storage/volumes/#local).
- Provision Flash capacity that exceeds your total database size. The extra space accounts for:
- | SSD type              | Recommendation                 |
- |-----------------------|--------------------------------|

## Scale Redis Flex on Kubernetes
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-flex-scale-05d49c9491.md`
- This guide shows you how to scale Flex databases on Kubernetes to meet changing workload demands.
- Use the following table to determine the best scaling strategy for your Flex deployment:
- | Increase data capacity only without adding CPU | [Increase `memorySize` and decrease RAM percentage](#decrease-ram-to-flash-ratio) |
- | Increase throughput only | [Add shards and vCPU](#add-shards-or-nodes) |
- | Increase data capacity and throughput | [Add shards](#add-shards) |

## RedisEnterpriseActiveActiveDatabase API Reference
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-reference-api-redis-enterprise-active-active-data-aa55c2a192.md`
- RedisEnterpriseActiveActiveDatabase is the Schema for the redisenterpriseactiveactivedatabase API
- <td>RedisEnterpriseActiveActiveDatabase</td>
- <td><a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.27/#objectmeta-v1-meta">metadata</a></td>
- <td>Refer to the Kubernetes API documentation for the fields of the `metadata` field.</td>
- RedisEnterpriseActiveActiveDatabaseSpec defines the desired state of RedisEnterpriseActiveActiveDatabase<br/>

## RedisEnterpriseDatabase API Reference
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-reference-api-redis-enterprise-database-api-59e8b41ca6.md`
- RedisEnterpriseDatabase is the Schema for the redisenterprisedatabases API
- <td><a href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.27/#objectmeta-v1-meta">metadata</a></td>
- <td>Refer to the Kubernetes API documentation for the fields of the `metadata` field.</td>
- RedisEnterpriseDatabaseSpec defines the desired state of RedisEnterpriseDatabase<br/>
- RedisEnterpriseDatabaseStatus defines the observed state of RedisEnterpriseDatabase<br/>

## Install Redis Stack on macOS
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-install-archive-install-stack-mac-os-5a552c70f6.md`
- To install Redis Stack on macOS, use [Homebrew](https://brew.sh/). Make sure that you have [Homebrew installed](https://docs.brew.sh/Installation) before starting on the installation instructions below.
- * `redis-stack` contains both `redis-stack-server` and `redis-stack-redisinsight` casks.
- * `redis-stack-server` provides Redis Stack server only.
- * `redis-stack-redisinsight` contains Redis Insight.
- First, tap the Redis Stack Homebrew tap:

## Redis administration
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-management-admin-386fe0d937.md`
- * Deploy Redis using the Linux operating system. Redis is also tested on OS X, and from time to time on FreeBSD and OpenBSD systems. However, Linux is where most of the stress testing is performed, and where most production deployments are run.
- * Set the Linux kernel overcommit memory setting to 1. Add `vm.overcommit_memory = 1` to `/etc/sysctl.conf`. Then, reboot or run the command `sysctl vm.overcommit_memory=1` to activate the setting. See [FAQ: Background saving fails with a fork() error on Linux?]() for details.
- * To ensure the Linux kernel feature Transparent Huge Pages does not impact Redis memory usage and latency, run the command: `echo never > /sys/kernel/mm/transparent_hugepage/enabled` to disable it. See [Latency Diagnosis - Latency induced by transparent huge pages]() for additional context.
- * Ensured that swap is enabled and that your swap file size is equal to amount of memory on your system. If Linux does not have swap set up, and your Redis instance accidentally consumes too much memory, Redis can crash when it is out of memory, or the Linux kernel OOM killer can kill the Redis process. When swapping is enabled, you can detect latency spikes and act on them.
- * Set an explicit `maxmemory` option limit in your instance to make sure that it will report errors instead of failing when the system memory limit is near to be reached. Note that `maxmemory` should be set by calculating the overhead for Redis, other than data, and the fragmentation overhead. So if you think you have 10 GB of free memory, set it to 8 or 9.

## Optimizing Redis
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-management-optimization-5371f26f2d.md`

## Redis benchmark
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-management-optimization-benchmarks-25321d80a3.md`
- Redis includes the `redis-benchmark` utility that simulates running commands done
- by N clients at the same time sending M total queries (it is similar to the
- Apache's `ab` utility). Below you'll find the full output of a benchmark executed
- Usage: redis-benchmark [-h <host>] [-p <port>] [-c <clients>] [-n <requests]> [-k <boolean>]
- SADD, random members and scores for ZADD.

## Diagnosing latency issues
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-management-optimization-latency-f63745f59a.md`
- This document will help you understand what the problem could be if you
- are experiencing latency problems with Redis.
- In this context *latency* is the maximum delay between the time a client
- issues a command and the time the reply to the command is received by the
- client. Usually Redis processing time is extremely low, in the sub microsecond

## Redis latency monitoring
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-management-optimization-latency-monitor-6ae3c3503e.md`
- Redis is often used for demanding use cases, where it
- serves a large number of queries per second per instance, but also has strict latency requirements for the average response
- While Redis is an in-memory system, it deals with the operating system in
- different ways, for example, in the context of persisting to disk.
- Moreover Redis implements a rich set of commands. Certain commands

## Memory optimization
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-management-optimization-memory-optimization-177c296b57.md`
- Since Redis 2.2 many data types are optimized to use less space up to a certain size.
- Hashes, Lists, Sets composed of just integers, and Sorted Sets, when smaller than a given number of elements, and up to a maximum element size, are encoded in a very memory-efficient way that uses *up to 10 times less memory* (with 5 times less memory used being the average saving).
- This is completely transparent from the point of view of the user and API.
- Since this is a CPU / memory tradeoff it is possible to tune the maximum
- number of elements and maximum element size for special encoded types

## Redis persistence
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-management-persistence-9d6e91705d.md`
- Persistence refers to the writing of data to durable storage, such as a solid-state disk (SSD). Redis provides a range of persistence options. These include:
- * **RDB** (Redis Database): RDB persistence performs point-in-time snapshots of your dataset at specified intervals.
- * **AOF** (Append Only File): AOF persistence logs every write operation received by the server. These operations can then be replayed again at server startup, reconstructing the original dataset. Commands are logged using the same format as the Redis protocol itself.
- * **No persistence**: You can disable persistence completely. This is sometimes used when caching.
- * **RDB + AOF**: You can also combine both AOF and RDB in the same instance.

## Redis replication
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-management-replication-4dab402367.md`
- At the base of Redis replication (excluding the high availability features provided as an additional layer by Redis Cluster or Redis Sentinel) there is a *leader follower* (master-replica) replication that is simple to use and configure. It allows replica Redis instances to be exact copies of master instances. The replica will automatically reconnect to the master every time the link breaks, and will attempt to be an exact copy of it *regardless* of what happens to the master.
- This system works using three main mechanisms:
- 1. When a master and a replica instance are well-connected, the master keeps the replica updated by sending a stream of commands to the replica to replicate the effects on the dataset happening on the master side due to: client writes, keys expired or evicted, any other action changing the master dataset.
- 2. When the link between the master and the replica breaks, for network issues or because a timeout is sensed in the master or the replica, the replica reconnects and attempts to proceed with a partial resynchronization: it means that it will try to just obtain the part of the stream of commands it missed during the disconnection.
- 3. When a partial resynchronization is not possible, the replica will ask for a full resynchronization. This will involve a more complex process in which the master needs to create a snapshot of all its data, send it to the replica, and then continue sending the stream of commands as the dataset changes.

## Scale with Redis Cluster
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-management-scaling-f0544aeae8.md`
- Redis scales horizontally with a deployment topology called Redis Cluster.
- This topic will teach you how to set up, test, and operate Redis Cluster in production.
- You will learn about the availability and consistency characteristics of Redis Cluster from the end user's point of view.
- If you plan to run a production Redis Cluster deployment or want to understand better how Redis Cluster works internally, consult the [Redis Cluster specification](). To learn how Redis Enterprise handles scaling, see [Linear Scaling with Redis Enterprise](https://redis.com/redis-enterprise/technology/linear-scaling-redis-enterprise/).
- Redis Cluster provides a way to run a Redis installation where data is automatically sharded across multiple Redis nodes.

## ACL
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-management-security-acl-daeb460323.md`
- The Redis ACL, short for Access Control List, is the feature that allows certain
- connections to be limited in terms of the commands that can be executed and the
- keys that can be accessed. The way it works is that, after connecting, a client
- is required to provide a username and a valid password to authenticate. If authentication succeeded, the connection is associated with a given
- user and the limits the user has. Redis can be configured so that new

## TLS
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-management-security-encryption-88d7cd9fc5.md`
- SSL/TLS is supported by Redis starting with version 6 as an optional feature
- that needs to be enabled at compile time.
- To build with TLS support you'll need OpenSSL development libraries (e.g.
- To run Redis test suite with TLS, you'll need TLS support for TCL (i.e.
- 1. Run `./utils/gen-test-certs.sh` to generate a root CA and a server

## Troubleshooting Redis
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-management-troubleshooting-3e5c4a9bb5.md`
- This page tries to help you with what to do if you have issues with Redis. Part of the Redis project is helping people that are experiencing problems because we don't like to leave people alone with their issues.
- * If you have **latency problems** with Redis, that in some way appears to be idle for some time, read our [Redis latency troubleshooting guide]().
- * Redis stable releases are usually very reliable, however in the rare event you are **experiencing crashes** the developers can help a lot more if you provide debugging information. Please read our [Debugging Redis guide]().
- * We have a long history of users experiencing crashes with Redis that actually turned out to be servers with **broken RAM**. Please test your RAM using **redis-server --test-memory** in case Redis is not stable in your system. Redis built-in memory test is fast and reasonably reliable, but if you can you should reboot your server and use [memtest86](http://memtest86.com).
- For every other problem please drop a message to the [Redis Google Group](http://groups.google.com/group/redis-db). We will be glad to help.

## ARM support
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-reference-arm-6a781e62be.md`
- Redis versions 4.0 and above support the ARM processor in general, and
- the Raspberry Pi specifically, as a main platform. Every new release of Redis is tested on the Pi
- environment, and we update this documentation page with information about supported devices and other useful information. While Redis does run on Android, in the future we look forward to extend our testing efforts to Android
- to also make it an officially supported platform.
- We believe that Redis is ideal for IoT and embedded devices for several

## Redis cluster specification
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-reference-cluster-spec-4594e7cd84.md`
- Welcome to the **Redis Cluster Specification**. Here you'll find information
- about the algorithms and design rationales of Redis Cluster. This document is a work
- in progress as it is continuously synchronized with the actual implementation
- Redis Cluster is a distributed implementation of Redis with the following goals in order of importance in the design:
- * High performance and linear scalability up to 1000 nodes. There are no proxies, asynchronous replication is used, and no merge operations are performed on values.

## Virtual memory (deprecated)
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-reference-internals-internals-vm-10ffa1ecd9.md`
- **Note: This document was written by the creator of Redis, Salvatore Sanfilippo, early in the development of Redis (c. 2010). Virtual Memory was deprecated in Redis 2.4 and removed in Redis 2.6, so this documentation exists only for historical interest.**
- This document details the internals of the Redis Virtual Memory subsystem prior to Redis 2.6. The intended audience is not the final user but programmers willing to understand or modify the Virtual Memory implementation.
- The goal of the VM subsystem is to free memory transferring Redis Objects from memory to disk. This is a very generic command, but specifically, Redis transfers only objects associated with _values_. In order to understand better this concept we'll show, using the DEBUG command, how a key holding a value looks from the point of view of the Redis internals:
- Key at:0x100101d00 refcount:1, value at:0x100101ce0 refcount:1 encoding:raw serializedlength:4
- As you can see from the above output, the Redis top level hash table maps Redis Objects (keys) to other Redis Objects (values). The Virtual Memory is only able to swap _values_ on disk, the objects associated to _keys_ are always taken in memory: this trade off guarantees very good lookup performances, as one of the main design goals of the Redis VM is to have performances similar to Redis with VM disabled when the part of the dataset frequently used fits in RAM.

## Register
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-gears-v1-jvm-classes-gea-29efa9507e.md`
- Registers the pipeline of functions to run when certain [events]() occur. The registered functions will run each time the event occurs.
- | ASYNC | Runs asynchronously on all of the shards. |
- | ASYNC_LOCAL | Runs asynchronously but only on the current shard that generated the event. |
- | SYNC | Runs synchronously only on the same shard that generated the event. |
- If you call `register()` without specifying an execution mode, it will default to `ASYNC`.

## GearsBuilder
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-gears-v1-jvm-classes-gea-7a2fcd0044.md`
- The `GearsBuilder` class allows you to create a pipeline of RedisGears functions that transform data.
- It requires a reader to supply data to the pipe.
- To create a `GearsBuilder` object, follow this example code:

## Run
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-gears-v1-jvm-classes-gea-bf43858431.md`
- Runs the pipeline of functions immediately upon execution. It will only run once.
- | collect | boolean | Whether or not to collect the results from the entire cluster before returning them |
- | jsonSerialize | boolean | Whether or not to serialize the results to JSON before returning them |

## Accumulate
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-gears-v1-jvm-classes-gea-fa34c7af45.md`
- Accumulate is a many-to-one function that iterates through the records in the pipe and reduces them to a single record.
- You can provide a parameter to set the initial accumulator value. Otherwise, the initial accumulator object is null.
- | I | The template type of the returned builder |
- | accumulator | <nobr>AccumulateOperation<T,âI></nobr> | A function with logic to update the accumulator value with each record |
- | initialValue | template type I | The initial value of the accumulated object |

## RedisGears readers
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-gears-v1-jvm-classes-rea-1ead6626a0.md`
- A reader extracts data from the database and creates records.
- The [`GearsBuilder.CreateGearsBuilder(reader)`]() function takes a reader as a parameter and passes the generated records through a pipeline of RedisGears functions.

## RedisGears JVMÂ quick start
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-gears-v1-jvm-quickstart-0e09f1dc04.md`
- 1. Create a new [Maven project](https://maven.apache.org/guides/getting-started/index.html#).
- 1. Add the following sections to the [pom.xml](https://maven.apache.org/guides/introduction/introduction-to-the-pom.html) file:
- 1. Add example code for either [batch processing](#batch-processing) or [event processing](#event-processing) to your project's `main` function.
- Use the Maven command-line tool or an IDE plugin to compile and package your code into a JAR file:
- Upload your JAR file to a node in the Redis Software cluster. You will need to use the destination filepath when you run your code.

## Redis Community Edition 7.4 release notes
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-release-notes-redisce-re-3fe14a0272.md`
- Update urgency: `SECURITY`: There are security fixes in the release.
- Update urgency: `HIGH`: There is a critical bug that may affect a subset of users.
- Update urgency: `SECURITY`: There are security fixes in the release.
- Update urgency: `SECURITY`: There are security fixes in the release.
- * (CVE-2025-27151) redis-check-aof may lead to stack overflow and potential RCE

## Redis Open Source 8.0 release notes
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-release-notes-redisce-re-73cb6bdbc9.md`
- Update urgency: `SECURITY`: There are security fixes in the release.
- Update urgency: `HIGH`: There are critical bugs that may affect a subset of users.
- Update urgency: `SECURITY`: There are security fixes in the release.
- Update urgency: `SECURITY`: There are security fixes in the release.
- * (CVE-2025-32023) Fix out-of-bounds write in `HyperLogLog` commands

## Redis Open Source 8.4 release notes
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-release-notes-redisce-re-9f780462f6.md`
- Update urgency: `SECURITY`: There are security fixes in the release.
- Update urgency: `SECURITY`: There are security fixes in the release.
- This is the General Availability (GA) release of Redis 8.4 in Redis Open Source.
- This is the first Release Candidate of Redis 8.4 in Redis Open Source.
- Release Candidates are feature-complete pre-releases. Pre-releases are not suitable for production use.

## Redis Open Source 8.2 release notes
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-release-notes-redisce-re-d628d5f813.md`
- Update urgency: `SECURITY`: There are security fixes in the release.
- Update urgency: `SECURITY`: There are security fixes in the release.
- Update urgency: `SECURITY`: There is a security fix in the release.
- Update urgency: `SECURITY`: There are security fixes in the release.
- Update urgency: `MODERATE`: Program an upgrade of the server, but it's not urgent.

## RediSearch 2.4 release notes
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-release-notes-redisearch-089b6f4a11.md`
- This is a maintenance release for RediSearch 2.4
- Update urgency: `HIGH`: There is a critical bug that may affect a subset of users. Upgrade!
- This is a maintenance release for RediSearch 2.4.
- Update urgency: `MODERATE`: Program an upgrade of the server, but it's not urgent.
- This is a maintenance release for RediSearch 2.4.

## RediSearch 2.10 release notes
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-release-notes-redisearch-68b52a82a6.md`
- This is a maintenance release for RediSearch 2.10.
- Update urgency: `LOW`: No need to upgrade unless there are new features you want to use.
- Full Changelog: https://github.com/RediSearch/RediSearch/compare/v2.10.24...v2.10.25
- This is a maintenance release for RediSearch 2.10.
- Update urgency: `LOW`: No need to upgrade unless there are new features you want to use.

## RediSearch 1.2 release notes
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-release-notes-redisearch-8b31a34692.md`
- This version is the last version that I (@dvirsky) will be releasing, and it includes a lot of new cool features, and actually NO bug-fixes over 1.1.0! So long and thanks for all the fish!
- As an addition to the aggregation API in `FT.AGGREGATE`, it is possible to do post-index filtering of the pipeline, using the `FILTER` keyword. e.g.:
- See [http://redisearch.io/Aggregations/](http://redisearch.io/Aggregations/) for more details.
- It is now possible to apply specific query modifying attributes to specific clauses of the query (see #[212](https://github.com/RediSearch/RediSearch/issues/212)).
- The syntax is `(foo bar) => { $attribute: value; $attribute:value; ...}`, e.g:

## RediSearch 2.8 release notes
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-release-notes-redisearch-b7424deb0d.md`
- This is a maintenance release for RediSearch 2.8.
- Update urgency: `LOW`: No need to upgrade unless there are new features you want to use.
- Full Changelog: https://github.com/RediSearch/RediSearch/compare/v2.8.31...v2.8.32
- This is a maintenance release for RediSearch 2.8.
- Update urgency: `LOW`: No need to upgrade unless there are new features you want to use.

## RediSearch 1.4 release notes
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-release-notes-redisearch-ca33b6c2ab.md`
- This is a maintenance release for version 1.4.
- This is a maintenance release for version 1.4.
- This release improves overall stability and provides fixes for issues found after the previous release.
- This is a maintenance release for version 1.4.
- This release improves overall stability and provides fixes for issues found after the previous release.

## RediSearch 2.6 release notes
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-release-notes-redisearch-d69ec69277.md`
- This is a maintenance release for RediSearch 2.6.
- Update urgency: `HIGH` : There is a critical bug that may affect a subset of users. Upgrade!
- This is a maintenance release for RediSearch 2.6.
- Update urgency: `HIGH`: There is a critical bug that may affect a subset of users. Upgrade!
- This is a maintenance release for RediSearch 2.6.

## RedisGraph 2.2 release notes
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-release-notes-redisgraph-260f875d95.md`
- This is a maintenance release for version 2.2.
- This is a maintenance release for version 2.2.
- This is a maintenance release for version 2.2.
- This is a maintenance release for version 2.2.
- This release introduces support for runtime configuration of the maximum number of results to be returned.

## RedisJSON 2.0 release notes
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-release-notes-redisjson--4086c3da14.md`
- This is a maintenance release for RedisJSON 2.0.
- Update urgency: `LOW` - No need to upgrade unless there are new features you want to use.
- This is a maintenance release for RedisJSON 2.0.
- Update urgency: `LOW`: No need to upgrade unless there are new features you want to use.
- This is a maintenance release for RedisJSON 2.0.

## Redis Stack 6.2.6 release notes
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-release-notes-redisstack-09427be94f.md`
- This is a maintenance release for Redis Stack Server 6.2.6
- Update urgency: `SECURITY`: there are security fixes in the release.
- [Docker](https://hub.docker.com/r/redis/redis-stack) | [Download](https://redis.io/downloads/#stack)
- This version includes security fixes for the **Redis** server, addressing potential vulnerabilities such as an RCE when using Lua library components, and a denial-of-service (DoS) risk due to unbounded pattern matching.
- Additionally, this maintenance release includes the latest version of **Redis Insight**.

## Redis Stack 7.4 release notes
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-release-notes-redisstack-48129879d0.md`
- This is a maintenance release for Redis Stack Server 7.4.0.
- Update urgency: `SECURITY`: there are security fixes in the release.
- [Docker](https://hub.docker.com/r/redis/redis-stack) | [Download](https://redis.io/downloads/#stack)
- This version includes security fixes for the **Redis** server, addressing potential vulnerabilities such as an RCE when using Lua library components, and a denial-of-service (DoS) risk due to malformed ACL selectors or unbounded pattern matching.
- Additionally, this maintenance release includes the latest version of **Redis Insight**.

## Redis Stack 7.2 release notes
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-release-notes-redisstack-da9228e445.md`
- This is a maintenance release for Redis Stack Server 7.2.0.
- Update urgency: `SECURITY`: there are security fixes in the release.
- [Docker](https://hub.docker.com/r/redis/redis-stack) | [Download](https://redis.io/downloads/#stack)
- This version includes security fixes for the **Redis** server, addressing potential vulnerabilities such as an RCE when using Lua library components, and a denial-of-service (DoS) risk due to malformed ACL selectors or unbounded pattern matching.
- Additionally, this maintenance release contains a bug fix to prevent crashes in cluster mode and includes the latest version of **Redis Insight**.

## RedisTimeSeries 1.0 release notes
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-release-notes-redistimes-35e08ee695.md`
- This is a maintenance release for version 1.0.
- This release improves overall stability and provides fixes for issues found after the previous release.
- This is a maintenance release for version 1.0.
- Secondary index should work faster when a filter consists of a list of k=v predicates.
- This is the General Availability release of RedisTimeSeries!  Read the [full story here](https://redislabs.com/blog/redistimeseries-ga-making-4th-dimension-truly-immersive)

## RedisTimeSeries 1.2 release notes
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-release-notes-redistimes-74b5af8dd1.md`
- This is a maintenance release for version 1.2.
- This is a maintenance release for version 1.2.
- This is the general availability (GA) release of RedisTimeSeries 1.2 (1.2.2).
- (we will blog about this release soon including performance improvements results and the link here)
- Alternatively, you can reconstruct similar behaviour by

## Configure the query performance factor for Redis Search in Redis Software
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-search-query-performance-b467ba45b8.md`
- Query performance factors are intended to increase the performance of queries, including [vector search](). When enabled, it allows you to increase a database's compute capacity and query throughput by allocating more virtual CPUs per shard. This is in addition to horizontal scaling with more shards which enables a higher throughput of key value operations. This document describes how to configure the query performance factor.
- Some use cases might not scale effectively. Redis experts can help determine if vertical scaling with Redis Search will boost performance for your use case and guide you on whether to use vertical scaling, horizontal scaling, or both.
- Redis Search requires a cluster running Redis Software version 7.4.2-54 or later. For the simplified configuration experience (no shard restart required, new UI, and new REST API), Redis Software version 8.x or later is required.
- If you do not have a cluster that supports Redis Search, [install Redis Software]() version 7.4.2-54 or later on a new cluster, or [upgrade an existing cluster]().
- 1. Calculate the hardware requirements for your Redis database:

## Best practices for scalable Redis Search
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-search-scalable-query-be-0d3a3eeedf.md`
- [Vertical scaling of Redis Search]() requires configuring query performance factors. With careful crafting of search indexes and queries, query performance factors allow throughput scaling up to 16X. The following recommendations can help optimize your indexes and queries to maximize the performance benefits from additional CPUs allocated by query performance factors.
- If query performance factors have not boosted the performance of your queries as much as expected:
- 1. Verify your index includes all queried and returned fields.
- 1. Identify and avoid query [anti-patterns]() that limit scalability.
- 1. Follow best practices to [improve indexing](#improve-indexing).

## Time series
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-timeseries-478790725f.md`
- A time series is a linked list of memory chunks.
- Each chunk has a predefined size of samples.
- Each sample is a tuple of the time and the value of 128 bits,
- 64 bits for the timestamp and 64 bits for the value.
- Redis Open Source provides a new data type that uses chunks of memory of fixed size for time series samples, indexed by the same Radix Tree implementation as Redis streams. With streams, you can create [a capped stream](), effectively limiting the number of messages by count. For time series, you can apply a retention policy in milliseconds. This is better for time series use cases, because they are typically interested in the data during a given time window, rather than a fixed number of samples.

## Estimate cost
Source file: `raw/sources/20260409-docs-latest-operate-rc-api-examples-dryrun-cost-estimates-6b7ac1e986.md`
- With a **dry-run request**, you can evaluate the impact and obtain a new cost estimate before you deploy these changes:
- API operations that support dry-run requests accept the `dryRun` boolean parameter in the JSON request body.
- For example, the JSON body of a create subscription request body can include `"dryRun": true`:
- Dry-run requests behave like regular requests except that no changes are made to existing resources.
- A dry-run request produces a cost evaluation report for the subscription.

## Generate FOCUS-compliant cost report
Source file: `raw/sources/20260409-docs-latest-operate-rc-api-examples-generate-cost-report-2c383f7e78.md`
- You can use the Redis Cloud REST API to generate and download a cost report in a [FinOps Open Cost and Usage Specification (FOCUS)](https://focus.finops.org/) compatible format. The report includes detailed information about your Redis Cloud subscription usage and associated charges.
- The following sections provide examples for each step.
- To generate a cost report, use [`POST /cost-report`](). Your account must have the **Owner** or **Viewer** role to generate a cost report through this endpoint.
- Include `startDate` and `endDate` in your request body using `YYYY-MM-DD` format. You can specify a date range up to 40 days.
- More options and filters can be added to the request body to filter the report data.

## Download and analyze cost report
Source file: `raw/sources/20260409-docs-latest-operate-rc-billing-and-payments-cost-report-4552fee7a2.md`
- The Redis Cloud cost report gives you a detailed breakdown of your Redis Cloud subscription usage and associated charges. You can use it to track, audit, and optimize your Redis Cloud spending across Essentials and Pro subscription plans.
- You can download the cost report from the [**Billing and payments**]() and [**Usage reports**]() pages. You can also use the [Redis Cloud REST API](#rest-api) to get a cost report in [FOCUS](https://focus.finops.org/) format.
- Consider the following limitations when you view the cost report:
- The cost report CSV file has two sections: one for Redis Cloud Essentials subscriptions and one for Redis Cloud Pro subscriptions.
- For more information about how to use the cost report effectively, see [How to download and visualize the cost report](https://support.redislabs.com/hc/en-us/articles/30042563097874-How-to-Download-and-Visualize-Redis-Cloud-Cost-Report) in the Redis knowledge base.

## Redis Cloud changelog (March 2023)
Source file: `raw/sources/20260409-docs-latest-operate-rc-changelog-2023-march-2023-314240d366.md`
- This changelog lists new features, enhancements, and other changes added to Redis Cloud during March 2023.
- A preview of Redis 7.0 is available for [Fixed subscriptions]() in selected regions in AWS and GCP. However, some Redis 7.0 functionality might not be fully available during preview. Redis 7.0 also introduces several changes to existing Redis commands; see the [list of breaking changes](#redis-70-breaking-changes) for more details.
- The following tables show which new open source Redis 7.0 commands are supported in Redis 7.0 subscriptions.
- | <span style="min-width: 10em; display: table-cell">Command</span> | Supported |
- | [CLUSTER ADDSLOTSRANGE]() | <span title="Not supported">&#x274c; Not supported</span> |

## Redis Cloud changelog (April 2024)
Source file: `raw/sources/20260409-docs-latest-operate-rc-changelog-2024-april-2024-cff8cfb59e.md`
- We added a Nano billing unit for Pro databases with a maximum size of 500 MB and a maximum throughput of 500 ops/sec. Use it to create smaller databases for a lower cost.
- You can now use your [AWS Marketplace]() account to pay for your Essentials subscriptions as well as your Pro subscriptions.
- You can now set the throughput for databases with Search and query in operations per second (ops/sec), like all other Redis databases. This will let you seamlessly scale your query workload in and out as needed.

## Redis Cloud changelog (February 2025)
Source file: `raw/sources/20260409-docs-latest-operate-rc-changelog-february-2025-c4151af7b4.md`
- We added a Pico billing unit for Pro databases with a maximum size of 100 MB and a maximum throughput of 100 ops/sec. Use it to create smaller databases for a lower cost.

## Redis Cloud changelog (July 2025)
Source file: `raw/sources/20260409-docs-latest-operate-rc-changelog-july-2025-9801c7f38b.md`
- [LangCache]() is now available in public preview on Redis Cloud.
- LangCache is a semantic caching service available as a REST API that stores LLM responses for fast and cheaper retrieval, built on the Redis vector database. By using semantic caching, you can significantly reduce API costs and lower the average latency of your generative AI applications.
- For more information about how LangCache works, see the [LangCache overview]().
- A preview of Redis 8.0 is now available for [Redis Cloud Essentials databases]() in select regions.
- Redis 8.0 introduces powerful new capabilities, including the beta release of the Vector Set data structure, designed for AI use cases such as semantic search and recommendation systems. For more information on the changes in Redis 8.0, see [What's new in Redis 8.0]() and review the [breaking changes]().

## Redis Cloud changelog (October 2025)
Source file: `raw/sources/20260409-docs-latest-operate-rc-changelog-october-2025-968220a108.md`
- Redis Cloud now supports [Redis Data Integration (RDI)]() to create data pipelines that ingest data from a supported primary database to Redis.
- Using a data pipeline lets you have a cache that is always ready for queries. RDI Data pipelines ensure that any changes made to your primary database are captured in your Redis cache within a few seconds, preventing cache misses and stale data within the cache.
- See [Data Integration]() to learn how to set up data pipelines with Redis Cloud.
- Redis Cloud has already been updated with a patches for the following vulnerabilities:
- No further action is required at this time.

## Active-Active Redis
Source file: `raw/sources/20260409-docs-latest-operate-rc-databases-active-active-432b898753.md`
- Active-Active databases store data across multiple regions and availability zones.  This improves scalability, performance, and availability, especially when compared to standalone databases.
- To create Active-Active databases, you need a Redis Cloud Pro subscription that enables Active-Active Redis and defines the regions for each copy of your databases. See [Create an Active-Active database]() for instructions.
- Active-Active databases are distributed across multiple regions (geo-distribution).  This improves performance by reducing latency for nearby users and improves availability by protecting against data loss in case of network or resource failure.
- Active-Active databases allow read and write operations in each copy.  Each copy eventually reflects changes made in other copies ([eventual consistency]()).  Conflict-free replicated data types (CRDTs) synchronize read and write operations between copies.  CRDTs ensure consistency and resolve conflicts.
- Active-Active databases use TLS to synchronize data between regions.  You can also use TLS to encrypt client connections.  See [Transport Layer Security (TLS)]() for more information.

## Create an Active-Active database
Source file: `raw/sources/20260409-docs-latest-operate-rc-databases-active-active-create-active-active-database-d23d291300.md`
- Active-Active databases store data across multiple regions and availability zones.  This improves scalability, performance, and availability, especially when compared to standalone databases. See [Active-Active Redis]() for more information.
- To deploy Active-Active databases in Redis Cloud, you need a Redis Cloud Pro plan that enables Active-Active Redis and defines the regions for each copy of your databases.
- Active-Active databases consist of multiple copies (also called _instances_) deployed to different regions throughout the world.
- This reduces latency for local users and improves availability should a region fail.
- Redis Cloud maintains consistency among instances in the background; that is, each copy eventually includes updates from every region.  As a result, memory limit and throughput increase.

## Develop applications with Active-Active databases
Source file: `raw/sources/20260409-docs-latest-operate-rc-databases-active-active-develop-develop-for-aa-f76dcbcd0a.md`
- Application developers may have to understand a large number of race
- conditions between updates to various sites, network, and cluster
- failures that could reorder the events and change the outcome of the
- updates performed across geo-distributed writes.
- Active-Active databases (formerly known as CRDB) are geo-distributed databases that span multiple Redis Software clusters.

## Manage regions in Active-Active databases
Source file: `raw/sources/20260409-docs-latest-operate-rc-databases-active-active-manage-regions-8933275c81.md`
- You can add and edit regions for an Active-Active deployment after it has been created by going to the **Regions** tab of the [subscription page]().
- To add a new region to an Active-Active deployment:
- 1. In the **Regions** tab of the subscription page, select **Add region**.
- 1. Select the desired region from the **Region** list.
- 1. If you chose to deploy your Active-Active database to an existing [Bring your own Cloud]() account, you can define the VPC ID for the new region. Select **In existing VPC** and the set the VPC ID for the region.

## Advanced capabilities
Source file: `raw/sources/20260409-docs-latest-operate-rc-databases-configuration-advanced-capabilities-8dc710bea6.md`
- Advanced capabilities extend Redis database functionality by adding new features and data types.
- Available options depend on your database plan and **Type**.
- All Redis Cloud Essentials databases with versions prior to Redis 8.0 support [Redis Stack](), which enables the most frequently used capabilities.
- When the database **Type** is set to _Redis_, the Advanced capabilities section of the database details page displays the advanced capabilities included with the database and their versions.
- Starting with Redis 8.0, all advanced capabilities provided by Redis Stack are included in Redis by default.

## Clustering Redis Databases
Source file: `raw/sources/20260409-docs-latest-operate-rc-databases-configuration-clustering-667f563165.md`
- Multiple shards should be used when data grows to 25 GB (50 GB for Auto Tiering) to create multiple shards.
- Clustering distributes operational load, whether to instances on the same server or across multiple servers.
- This distribution is called _clustering_ because it manages the way data is distributed throughout the cluster of nodes that support the database.
- A Redis Cloud cluster is a set of managed Redis processes and cloud instances,
- with each process managing a subset of the database keyspace.

## High availability and replication
Source file: `raw/sources/20260409-docs-latest-operate-rc-databases-configuration-high-availability-5c8f8ee690.md`
- Database replication helps ensure high availability.
- When replication is enabled, your dataset is duplicated to create a replica that is synchronized with the primary dataset.
- Replication allows for automatic failover and greater fault tolerance.  It can prevent data loss in the event of a hardware or zone failure.
- Redis Cloud supports three levels of replication:
- Your replication options depend on your [subscription plan]():

## Size a Redis Cloud database
Source file: `raw/sources/20260409-docs-latest-operate-rc-databases-configuration-sizing-368d987b44.md`
- The dataset size of a database is a part of the full memory limit for the database. The memory limit represents the maximum amount of memory for the database, which includes data values, keys, module data, and overhead for specific features.  High availability features, such as replication and Active-Active,  increase memory consumption, so your dataset size and memory limit will be different.
- For Redis Cloud Essentials, the plan size refers to the full memory limit, not the dataset size. Both the total memory limit and dataset size are listed under **Database details** when you create an Essentials database.
- For Redis Cloud Pro, you define your dataset size when you create the database, and we calculate your total memory limit based on the features you choose.
- Memory limits in Redis Cloud are subject to the same considerations as Redis Software; to learn more, see [Database memory limits]().
- Throughput is the number of operations a database can handle over a certain period of time. For Redis Cloud databases, throughput is defined in operations per second (ops/sec).

## Create an Essentials database
Source file: `raw/sources/20260409-docs-latest-operate-rc-databases-create-database-create-essentials-database-64fe404468.md`
- Redis Cloud Essentials is cost-efficient and designed for low-throughput scenarios. You can quickly scale up your Essentials database as your application grows.
- 3. Select the type of [subscription]() you need. For this guide, select **Essentials**.
- This guide shows how to create a paid Essentials database.
- After you select **Essentials**, the rest of the database details will appear.
- 1. Select **RAM** or **Flex** to choose between a database that uses only RAM or one that uses both RAM and Flash memory.

## Create a Flex database
Source file: `raw/sources/20260409-docs-latest-operate-rc-databases-create-database-create-flex-database-28503fc0df.md`
- Flex allows your dataset to span both high-performance RAM and cost-efficient dedicated Flash memory. Flex automatically manages data placement between the two tiers, keeping frequently accessed (âhotâ) data in RAM for sub-millisecond latency, while moving less active (âwarmâ) data to Flash to optimize capacity and cost. This dual memory architecture delivers predictable performance at scale, enabling larger datasets without compromising speed or operational simplicity.
- Flex databases are currently compatible with most existing Redis applications, except for applications that use Search and Query and Time Series.
- Flex is available on both Redis Cloud Essentials and Redis Cloud Pro.
- Flex is ideal for workloads that demand large-scale, low-latency data access with the flexibility to optimize cost and performance.
- Flex is **not** a durable data store. It is designed for performance, elasticity, and scalability, not for long-term data persistence. While Flex can temporarily retain data in memory or Flash, it should not be used as a primary system of record or persistent storage layer.

## Create a Pro database in an existing subscription
Source file: `raw/sources/20260409-docs-latest-operate-rc-databases-create-database-create-pro-database-existing-375491fb32.md`
- This guide shows how to create a Pro database in an existing subscription.
- To create a database in an already existing Pro subscription:
- 1. Sign in to the [Redis Cloud console](https://cloud.redis.io).
- This displays the **Create database** screen.
- 1. Select the type of [subscription]() you need. For this guide, select **Existing subscription**, and then select your existing Pro subscription from the list.

## Create a Pro database with a new subscription
Source file: `raw/sources/20260409-docs-latest-operate-rc-databases-create-database-create-pro-database-new-481f182fbd.md`
- Redis Cloud Pro supports more databases, larger databases, greater throughput, and unlimited connections compared to Redis Cloud Essentials. Redis Cloud Pro databases are perfect for teams building mission-critical systems in the cloud.
- 3. Select the type of [subscription]() you need. For this guide, select **Pro**.
- This guide shows how to create a Pro database with a new subscription.
- After you select **Pro**, the **Database settings** section will appear.
- You can choose to create your database in one of two ways:

## Create a database
Source file: `raw/sources/20260409-docs-latest-operate-rc-databases-create-database-db0fd879a5.md`
- A database is the heart of any Redis Cloud deployment.
- The process for Creating a database depends on the type of [subscription plan]() you need.
- An **Essentials** plan is a fixed monthly price for a single database. It is cost-efficient and designed for low-throughput scenarios. It supports a range of availability, persistence, and backup options. Pricing supports low throughput workloads.
- A **Free** plan is a type of Essentials plan designed for learning and building test projects. It gives you enough space to learn Redis concepts and develop application prototypes. You can upgrade to a paid Essentials plan at any time.
- A **Pro** plan is an hourly price based on capacity. It supports more databases, larger databases, greater throughput, and unlimited connections.

## Monitor database performance
Source file: `raw/sources/20260409-docs-latest-operate-rc-databases-monitor-performance-70724c155b.md`
- Redis Cloud provides a variety of metrics to help you monitor database performance.  You can view graphs of performance data at any time and receive emails when performance crosses defined thresholds.
- The **Metrics** tab of the **View Database** screen provides a series of graphs showing performance data for your database.
- Performance data provides insight into how your database is being used and how well it is performing.
- The interval scrollbar controls the time period displayed in the graphs.
- The **Metrics** screen shows two primary graphs and a collection of smaller ones.  You can promote any smaller graph to a primary position.

## Data Integration
Source file: `raw/sources/20260409-docs-latest-operate-rc-databases-rdi-a464294402.md`
- Redis Cloud now supports [Redis Data Integration (RDI)](), a fast and simple way to bring your data into Redis from other types of primary databases.
- A relational database usually handles queries much more slowly than a Redis database. If your application uses a relational database and makes many more reads than writes (which is the typical case) then you can improve performance by using Redis as a cache to handle the read queries quickly. Redis Cloud uses [ingest]() to help you offload all read queries from the application database to Redis automatically.
- Using a data pipeline lets you have a cache that is always ready for queries. RDI Data pipelines ensure that any changes made to your primary database are captured in your Redis cache within a few seconds, preventing cache misses and stale data within the cache.
- RDI helps Redis customers sync Redis Cloud with live data from their primary databases to:
- Using RDI with Redis Cloud simplifies managing your data integration pipeline. No need to worry about hardware or underlying infrastructure, as Redis Cloud manages that for you. Creating the data flow from source to target is much easier, and there are validations in place to reduce errors.

## Define data pipeline
Source file: `raw/sources/20260409-docs-latest-operate-rc-databases-rdi-define-0f6810bf12.md`
- After you have [prepared your source database]() and connection information, you can set up your new pipeline. To do this:
- 1. [Define the source connection](#define-source-connection) by entering all required source database information.
- 2. [Define the data pipeline](#define-data-pipeline) by selecting the data that you want to sync from your source database to the target database.
- 1. In the [Redis Cloud console](https://cloud.redis.io/), go to your target database and select the **Data Pipeline** tab.
- 1. A **Deployment CIDR** is automatically generated for you. If, for any reason, a CIDR is not generated, enter a valid CIDR that does not conflict with your applications or other databases.

## RDI on Redis Cloud quick start
Source file: `raw/sources/20260409-docs-latest-operate-rc-databases-rdi-quick-start-f0cfa0a5c4.md`
- The [`rdi-cloud-automation` GitHub repository](https://github.com/redis/rdi-cloud-automation) contains a Terraform script that quickly sets up a PostgreSQL source database on an EC2 instance and all required permissions and network setup to connect it to a Redis Cloud target database.
- This guide is for demonstration purposes only. It is not recommended for production use.
- 1. Create a [Redis Cloud Pro database]() hosted on Amazon Web Services (AWS).
- Turn on Multi-AZ replication and [manually select the availability zones]() when creating the database.
- 1. Install the [AWS CLI](https://aws.amazon.com/cli/) and set up [credentials for the CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-sso.html).

## RDS Proxy setup for RDI
Source file: `raw/sources/20260409-docs-latest-operate-rc-databases-rdi-rds-proxy-dd1c688f90.md`
- We do not recommend using RDS Proxy for RDI connections. The [Lambda function approach]() provides better failover handling and is the recommended solution for production environments.
- Additionally, RDS Proxy does not work with RDS PostgreSQL and Aurora PostgreSQL because it does not support PostgreSQL logical replication.
- Only use RDS Proxy if you have specific requirements that necessitate it.
- RDS Proxy is a fully managed, highly available database proxy for Amazon RDS. While it can be used with RDI, we recommend the Lambda function approach instead for the following reasons:
- If you still need to use RDS Proxy, follow the instructions below.

## Prepare source database
Source file: `raw/sources/20260409-docs-latest-operate-rc-databases-rdi-setup-ff74b71972.md`
- 1. In the [Redis Cloud console](https://cloud.redis.io/), go to your target database and select the **Data Pipeline** tab.
- 1. Select your source database type. The following database types are supported:
- 1. If you know the size of your source database, enter it into the **Source dataset size** field.
- 1. Under **Setup connectivity**, save the provided ARN and extract the AWS account ID for the account associated with your Redis Cloud cluster from it.
- The AWS account ID is the string of numbers after `arn:aws:iam::` in the ARN. For example, if the ARN is `arn:aws:iam::123456789012:role/redis-data-pipeline`, the AWS account ID is `123456789012`.

## View and edit data pipeline
Source file: `raw/sources/20260409-docs-latest-operate-rc-databases-rdi-view-edit-ceb7296c2c.md`
- Use the **Data pipeline** tab in your database to view and edit your data pipeline.
- The **Data pipeline** tab gives an overview of your data pipeline and lets you view your data stream metrics.
- The **Status** table shows statistics for the whole data pipeline:
- | **Initial Sync** | The data pipeline is ingesting all records from the source database into the target database. |
- | **Streaming** | The data pipeline is capturing new changes from the source database as they happen. Changes in the source database are added to the target database within a few seconds. |

## View and edit databases
Source file: `raw/sources/20260409-docs-latest-operate-rc-databases-view-edit-database-d63dc65202.md`
- Use the **Databases** menu of the Redis Cloud console to manage your databases.
- 1. Sign in to the [Redis Cloud console](https://cloud.redis.io/).  (Create an account if you don't already have one.)
- 2. Select the **Databases** menu to display a [searchable list of all databases](#manage-the-database-list).
- 4. Select the database name to open the **Database** page.
- The **Database** screen lets you review:

## Semantic caching with LangCache on Redis Cloud
Source file: `raw/sources/20260409-docs-latest-operate-rc-langcache-c5a0e972be.md`
- LangCache is a semantic caching service available as a REST API that stores LLM responses for fast and cheaper retrieval, built on the Redis vector database. By using semantic caching, you can significantly reduce API costs and lower the average latency of your generative AI applications.
- For more information about how LangCache works, see the [LangCache overview]().

## Monitor a LangCache service
Source file: `raw/sources/20260409-docs-latest-operate-rc-langcache-monitor-cache-15f37ce28e.md`
- You can monitor a LangCache service's performance from the **Metrics** tab of the service's page.
- The **Metrics** tab provides a series of graphs showing performance data for your LangCache service.
- You can switch between hourly, daily, and weekly stats using the **Hour**, **Day**, and **Week** buttons at the top of the page. Each graph also includes minimum, average, maximum, and latest values.
- The percentage of requests that were successfully served from the cache without needing to call the LLM API. A healthy cache will generally show an increasing hit ratio over time as it becomes more populated by cached responses.
- A higher cache hit ratio does not always mean better performance. If the cache is too lenient in its similarity matching, it may return irrelevant responses, leading to a higher cache hit rate but poorer overall performance.

## Develop highly available and resilient apps with Redis Cloud
Source file: `raw/sources/20260409-docs-latest-operate-rc-resilient-apps-0dec2cec19.md`
- You can set up your Redis Cloud databases and Redis Client libraries to ensure your app re-connects to your database after unexpected failover events or network outages and minimize data losses.
- These settings can be turned on when you create or edit your database.
- Enabling [Data persistence]() allows Redis to save your data to a durable storage medium, such as a disk, to ensure data availability in case of memory loss or system failure.
- Redis Cloud supports the following data persistence options:
- Append-only files provide greater protection than snapshots at the cost of resources and recovery time.

## Access management
Source file: `raw/sources/20260409-docs-latest-operate-rc-security-access-control-access-management-69a86cffa0.md`
- The **Access management** screen helps you manage:
- Here, you learn how to manage your team's users and control their level of access.
- For help managing API keys, see [Manage API keys]().
- The **Team** tab lets you manage the people allowed to access your account. Each authorized person is assigned to a role that specifies their privileges.
- The list contains one entry summarizing the team settings for each user in your team. By default, the list includes the account owner.

## Connect to Amazon Web Services PrivateLink
Source file: `raw/sources/20260409-docs-latest-operate-rc-security-aws-privatelink-1ba6ff6c9c.md`
- [Amazon Web Services (AWS) PrivateLink](https://docs.aws.amazon.com/vpc/latest/privatelink/privatelink-access-resources.html) allows service providers to securely expose specific services without exposing the entire service provider and consumer VPCs to each other. With AWS PrivateLink, Redis Cloud exposes a VPC endpoint service that you connect to as a consumer from your own VPC. Traffic stays within the AWS network and is isolated from external networks.
- Connecting to Redis Cloud with an AWS PrivateLink is available only with Redis Cloud Pro.  It is not supported for Redis Cloud Essentials.
- You can use PrivateLink as an alternative to Layer 3 connectivity options like [VPC peering]() and [Transit Gateway]().
- AWS PrivateLink provides the following benefits:
- See [Connect to Redis Cloud with AWS PrivateLink](https://www.youtube.com/watch?v=i3aTmcyFihY) for a short video tutorial on how to connect to Redis Cloud with AWS PrivateLink.

## Connect to Amazon Web Services Transit Gateway
Source file: `raw/sources/20260409-docs-latest-operate-rc-security-aws-transit-gateway-78ed4cb2bf.md`
- [Amazon Web Services (AWS) Transit Gateway](https://docs.aws.amazon.com/vpc/latest/tgw/how-transit-gateways-work.html) acts as a Regional virtual router for traffic flowing between your virtual private cloud(s) (VPCs) and on-premises networks. You can attach different resources to your Transit Gateway which include:
- You can connect your Redis Cloud Pro subscription to a Transit Gateway which is attached to the VPC of your application. This lets your application connect securely to your Redis Cloud database while optimizing performance.
- Transit Gateway is available only with Redis Cloud Pro.  It is not supported for Redis Cloud Essentials.
- You can use Transit Gateway as an alternative to [VPC peering](), or you can enable both for your subscription.
- Compared to VPC peering, Transit Gateway:

## Enable Google Cloud Private Service Connect
Source file: `raw/sources/20260409-docs-latest-operate-rc-security-private-service-connect-66a7f4fdd5.md`
- [Private Service Connect](https://cloud.google.com/vpc/docs/private-service-connect) (PSC) creates a private endpoint that allows secure connections to Redis Cloud databases without exposing your application's [virtual private cloud](https://en.wikipedia.org/wiki/Virtual_private_cloud) (VPC).
- This feature is only available for Redis Cloud Pro subscriptions hosted on Google Cloud.
- You can use Private Service Connect as an alternative to [VPC peering](), or you can enable both for your subscription.
- Compared to VPC peering, Private Service Connect:
- Larger clusters are more likely to experience increased latency with Private Service Connect versus VPC peering.

## Manage subscriptions
Source file: `raw/sources/20260409-docs-latest-operate-rc-subscriptions-dc579d357c.md`
- This page helps you manage your Redis Cloud subscriptions; it briefly compares available plans and shows where to find help with common tasks.
- As of April 2024, Redis Cloud supports the following subscription plans:
- | Feature | Redis Cloud Essentials (free) | Redis Cloud Essentials (paid) | Essentials with Redis Flex | Redis Cloud Pro |
- | Memory size | 30 MB | 250 MB-12 GB | 1 GB-100GB | 50 TB |
- | Concurrent connections | 30 | 256-10000 | 1024-10000 | Unlimited |

## Subscription and database maintenance
Source file: `raw/sources/20260409-docs-latest-operate-rc-subscriptions-maintenance-367ff9400a.md`
- Redis will maintain your Redis Cloud subscriptions and databases as needed to ensure your databases are running the most stable and up-to-date version of Redis.
- Maintenance windows define when Redis can perform maintenance on your subscriptions and databases. Maintenance window options depend on your subscription type.
- For Redis Cloud Pro plans, Redis will perform maintenance automatically while limiting service disruption as much as possible. If you want to control when we can perform maintenance for a Redis Cloud Pro subscription, you can [set manual maintenance windows]().
- Redis Cloud Essentials databases have a set maintenance window based on the cloud provider region. The maintenance window for Redis Cloud Essentials databases is **daily from 12 AM to 6 AM** in the region's local time zone. We won't use more than one maintenance window per week unless we need to do [urgent maintenance](), and we won't perform any maintenance that introduces breaking changes during these maintenance windows.
- During maintenance, Redis ensures the stability of your subscriptions and databases.

## Set maintenance windows
Source file: `raw/sources/20260409-docs-latest-operate-rc-subscriptions-maintenance-set-maintenance-windows-5ea9e8d584.md`
- By default, Redis will maintain your Redis Cloud subscriptions and databases as needed. During maintenance, you may notice some latency when connecting to your databases. For more information about the types of maintenance and how Redis maintains your subscriptions, see [Maintenance]().
- For Redis Cloud Pro plans, Redis will perform maintenance automatically while limiting service disruption as much as possible. If you want to control when Redis performs maintenance for a Redis Cloud Pro subscription, you can [set manual maintenance windows](#set-manual-maintenance-windows) to ensure non-urgent maintenance will occur at set times. Configuring or altering the maintenance window will not have any impact on your subscription or databases.
- You can only set manual maintenance windows for Redis Cloud Pro plans. A Redis Cloud Essentials database has a set maintenance window based on the region where it is located. See [Essentials maintenance]() for more information.
- To set manual maintenance windows for a single Redis Cloud Pro subscription:
- 1. From the [Redis Cloud console](https://cloud.redis.io/), select the **Subscriptions** menu and then select your subscription from the list.

## Upgrade database from Redis Cloud Essentials to Redis Cloud Pro
Source file: `raw/sources/20260409-docs-latest-operate-rc-subscriptions-upgrade-essentials-pro-dd11f92751.md`
- Redis Cloud Essentials supports low throughput workflows. It supports a range of availability, persistence, and backup options, and can be great for testing and prototyping. However, if your databases need higher throughput, or you're missing features that are not available with Redis Cloud Essentials, you may want to upgrade Redis Cloud Essentials to Redis Cloud Pro.
- For more information about the different subscription plans, see [Subscription plans]().
- To upgrade your Essentials plan, see [Upgrade subscription plan]().
- To follow the steps in this guide, you must have a database with [Redis Cloud Essentials]() that you want to upgrade to Redis Cloud Pro.
- To upgrade your Essentials database to Redis Cloud Pro:

## Redis Cloud Essentials plans
Source file: `raw/sources/20260409-docs-latest-operate-rc-subscriptions-view-essentials-subscription-essentials-pla-9dfd61b120.md`
- Redis Cloud Essentials is cost-efficient and designed for low-throughput scenarios. It supports a range of availability, persistence, and backup options.
- [Essentials plan pricing](https://redis.io/pricing/#monthly) scales according to the memory size of the database defined in the subscription.  Additional limits also apply, as shown in the tables below.
- The 30 MB Essentials plan is free; it's designed for learning and building test projects. It gives you enough space to learn Redis concepts and develop application prototypes.
- Our paid plans start at 250 MB and offer extra features, like high availability and backups (both daily and instant). They are great for bigger projects or production environments that require increased storage, reliability, and other features to support your operational needs.
- Essentials plans have bandwidth and throughput limits described in the tables below. We will notify you before limiting your database usage if you exceed these limits.

## View and edit Redis Cloud Pro plan
Source file: `raw/sources/20260409-docs-latest-operate-rc-subscriptions-view-pro-subscription-c2a5a9c032.md`
- 1.  Sign in to the [Redis Cloud console](https://cloud.redis.io/#) and select **Subscriptions**.
- 1.  If you have more than one subscription, select the target subscription from the subscription list.
- 1.  Your subscription details appear, along with a summary of your database details.
- Because subscriptions represent active deployments, there aren't many details you can change.  If your needs change, [create a new subscription]() and then [migrate the existing data]() to the new databases.
- In addition, you can view and edit the following subscription details:

## Supported Cloud providers and regions
Source file: `raw/sources/20260409-docs-latest-operate-rc-supported-regions-5b2298a02d.md`
- Your choice of cloud provider and region may affect latency between your application and your database, and may affect what connectivity options are available for your database.
- Redis Cloud supports databases on the following cloud providers:
- Redis Cloud supports databases in the following Amazon Web Services (AWS) regions.
- Redis Cloud Pro databases on AWS support [VPC Peering](), [Transit Gateway](), and [AWS PrivateLink]().
- | Region ID      | Location                 | Redis Cloud Pro | Redis Cloud Essentials |

## Rack-zone awareness in Redis Software
Source file: `raw/sources/20260409-docs-latest-operate-rs-clusters-configure-rack-zone-awareness-da29d24f56.md`
- When you enable rack-zone awareness in a Redis Software cluster, you assign
- a [rack-zone ID](#rack-zone-id-rules) to each node. This ID is used to map the node to a
- physical rack or logical zone. The cluster can then ensure that primary shards, corresponding replica shards, and associated endpoints are placed on [nodes in different racks or zones](#node-layout-guidelines).
- In the event of a rack or zone failure, the replicas and endpoints in the remaining racks and zones are promoted. This ensures high availability when a rack or zone fails.
- There is no limitation on the number of racks and zones per cluster. Each

## Alerts and events
Source file: `raw/sources/20260409-docs-latest-operate-rs-clusters-logging-alerts-events-66d6345e2c.md`
- The following alerts and events can appear in `syslog` and the Cluster Manager UI logs.
- | Alert | UI message | Severity | Notes |
- |-------|------------|----------|-------|
- | aof_slow_disk_io | Redis performance is degraded as a result of disk I/O limits | True: error, False: info | Node alert |
- | authentication_err | Error authenticating with the source database | error | BDB event |

## Diagnostic logging
Source file: `raw/sources/20260409-docs-latest-operate-rs-clusters-logging-diagnostic-logging-b3db2f7972.md`
- The diagnostic logging service collects detailed system logs, which you can use to troubleshoot Redis Software.
- Diagnostic logs are collected at scheduled intervals and saved in the `/var/opt/redislabs/log/diagnostics/` directory. Each diagnostic log file is overwritten with the new data at the scheduled collection interval.
- To view the current log collection schedule and parameters for each log collector, use the REST API to [get the diagnostic logging service configuration]().
- To change how often a log is collected, set the `cron_expression` when you [update the diagnostic logging service configuration]() with the REST API.
- For the slowlog collector only, you can also set `max_entries` to change the maximum number of slow log entries to collect:

## View and manage Redis slow log
Source file: `raw/sources/20260409-docs-latest-operate-rs-clusters-logging-redis-slow-log-05c72b43c6.md`
- tools for debugging and tracing your Redis database, especially if you
- experience high latency and high CPU usage with Redis operations.
- Because Redis is based on a single threaded architecture, Redis slow log
- can be much more useful than slow log mechanisms of multi-threaded
- database systems such as MySQL slow query log.

## Disk sizing for heavy write scenarios
Source file: `raw/sources/20260409-docs-latest-operate-rs-clusters-optimize-disk-sizing-heavy-write-scenarios-dced4b7957.md`
- For disk size requirements for standard usage, see [Hardware requirements]().
- To estimate the required persistent disk space for AOF rewrite purposes in extreme write scenarios, use the following formula:
- The following examples show how to calculate the persistent disk space required for heavy write scenarios for different database configurations, where:
- 1. Use the formula to calculate the required persistent disk space:
- 1. Round up to 73 GB of required disk space.

## Benchmarking Redis Software
Source file: `raw/sources/20260409-docs-latest-operate-rs-clusters-optimize-memtier-benchmark-28666365bf.md`
- Use the `memtier_benchmark` tool to perform a performance benchmark of Redis Software.
- For help with the prerequisites, see the [Redis Software quickstart]().
- It is recommended to run memtier_benchmark on a separate node that is
- not part of the cluster being tested. If you run it on a node of the
- cluster, be mindful that it affects the performance of both the

## Cluster environment optimization
Source file: `raw/sources/20260409-docs-latest-operate-rs-clusters-optimize-optimization-238c847e6d.md`
- performance. As part of this process, Redis Software examines usage
- and load to adjust its runtime configuration. Depending
- on your specific usage and load, Redis Software might take some
- To ensure optimal performance, you must run your workload several times
- and for a long duration until performance stabilizes.

## OSS Cluster API
Source file: `raw/sources/20260409-docs-latest-operate-rs-clusters-optimize-oss-cluster-api-400afacf23.md`
- You can use the Redis OSS Cluster API along with other Redis Enterprise Software high availability
- to get high performance with low latency
- and let applications stay current with cluster topology changes, including add node, remove node, and node failover.
- For more about working with the OSS Cluster API in Redis Software, see [Enable OSS Cluster API]().
- To learn how to enable OSS Cluster API in Redis Cloud, see [Clustering Redis databases]().

## Active-Active geo-distributed Redis
Source file: `raw/sources/20260409-docs-latest-operate-rs-databases-active-active-6d2bf2fbb0.md`
- The Redis Software implementation of CRDT is called an Active-Active database (formerly known as CRDB).
- With Active-Active databases, applications can read and write to the same data set from different geographical locations seamlessly and with latency less than one millisecond (ms),
- without changing the way the application connects to the database.
- Active-Active databases also provide disaster recovery and accelerated data read-access for geographically distributed users.
- The [high availability]() that Active-Active replication provides is built upon a number of Redis Software features (such as [clustering](), [replication](), and [replica HA]()) as well as some features unique to Active-Active ([multi-primary replication](), [automatic conflict resolution](), and [strong eventual consistency]()).

## Create an Active-Active geo-replicated database
Source file: `raw/sources/20260409-docs-latest-operate-rs-databases-active-active-create-7a188eed70.md`
- to replicas of the dataset in different geographical locations.
- The participating Redis Software clusters that host the instances can be distributed in different geographic locations.
- Every instance of an Active-Active database can receive write operations, and all operations are [synchronized]() to all instances without conflict.
- 1. **Create a service account** - On each participating cluster, create a dedicated user account with the Admin role.
- 1. **Confirm connectivity** - Confirm network connectivity between the participating clusters.

## Develop applications with Active-Active databases
Source file: `raw/sources/20260409-docs-latest-operate-rs-databases-active-active-develop-develop-for-aa-265e2ea720.md`
- Application developers may have to understand a large number of race
- conditions between updates to various sites, network, and cluster
- failures that could reorder the events and change the outcome of the
- updates performed across geo-distributed writes.
- Active-Active databases (formerly known as CRDB) are geo-distributed databases that span multiple Redis Software clusters.

## Client library-based disaster recovery
Source file: `raw/sources/20260409-docs-latest-operate-rs-databases-active-active-disaster-recovery-client-library--e933d3b751.md`
- Some Redis client libraries support geographic failover and failback. These client libraries monitor all Active-Active database members and instantiate connections for all endpoints in advance to allow faster failover and failback.
- The following diagram shows a client library-based disaster recovery approach:
- <img src="../../../../../../images/active-active-disaster-recovery/client-library.svg" alt="Diagram of client libraries routing traffic to Active-Active database members" width="50%">
- The following diagram shows a client-based disaster recovery approach that also uses [connection pooling]():
- <img src="../../../../../../images/active-active-disaster-recovery/client-library-connection-pool.svg" alt="Diagram of client libraries with connection pooling routing traffic to Active-Active database members" width="50%">

## Disaster recovery strategies for Active-Active databases
Source file: `raw/sources/20260409-docs-latest-operate-rs-databases-active-active-disaster-recovery-f825c3f717.md`
- An application deployed with an Active-Active database connects to a database member that is geographically nearby. If that database member becomes unavailable, the application can fail over to a secondary Active-Active database member, and fail back to the original database member again if it recovers.
- However, because Active-Active Redis databases do not have a built-in [failover](https://en.wikipedia.org/wiki/Failover) or failback mechanism for application connections, you must implement one of the following [disaster recovery strategies](#disaster-recovery-strategies).
- Depending on your requirements for Recovery Point Objective, Recovery Time Objective, consistency, scalability, resources, maintainability, and other factors, choose one of the following strategies to fail over to a secondary Active-Active member or fail back to the primary member:
- When implementing a disaster recovery strategy for an Active-Active database, consider the following:
- Depending on the failover strategy, you can use the following health checks to detect Active-Active database failures and determine whether to fail over to a secondary Active-Active member, or fail back to the primary member after the preferred endpoint is back online.

## Network-based disaster recovery
Source file: `raw/sources/20260409-docs-latest-operate-rs-databases-active-active-disaster-recovery-network-based-44ccacd896.md`
- For cross-region availability, you can use a global traffic manager or a global load balancer. Both help route traffic across regions, but they work in different ways:
- If your deployment does not require cross-region availability, you can use a regional load balancer to grant cross-zone redundancy.
- For cross-region availability, you can use a global traffic manager or a global load balancer.
- A global traffic manager acts as an intelligent DNS server that directs clients to healthy endpoints based on distance, latency, or availability. You should configure the traffic manager to route to the local region first and fail over to other regions if an issue occurs.
- The following diagram shows how a global traffic manager with DNS resolution routes traffic:

## Proxy-based disaster recovery
Source file: `raw/sources/20260409-docs-latest-operate-rs-databases-active-active-disaster-recovery-proxy-based-98e3442a8c.md`
- If you add a lightweight proxy software component between the clients and the Active-Active database, applications can dynamically route requests to the optimal endpoint.
- If concurrent access across replicas must be avoided in every scenario, you can use a centralized proxy with a standby proxy instance for high availability.
- The following diagram shows a centralized proxy architecture with a standby proxy instance:
- <img src="../../../../../../images/active-active-disaster-recovery/centralized-proxy.svg" alt="Diagram of a centralized proxy architecture with active and standby proxy instances routing to Active-Active database members" width="50%">
- To reduce latency and improve scalability, you can use a proxy co-located in the application server.

## Considerations for planning Active-Active databases
Source file: `raw/sources/20260409-docs-latest-operate-rs-databases-active-active-planning-ac3bafd81d.md`
- In Redis Software, Active-Active geo-distribution is based on [conflict-free replicated data type (CRDT) technology](https://en.wikipedia.org/wiki/Conflict-free_replicated_data_type). Compared to databases without geo-distribution, Active-Active databases have more complex replication and networking, as well as a different data type.
- Because of the complexities of Active-Active databases, there are special considerations to keep in mind while planning your Active-Active database.
- See [Active-Active Redis]() for more information about geo-distributed replication. For more info on other high availability features, see [Durability and high availability]().
- You need at least [two participating clusters]() for an Active-Active database. If your database requires more than ten participating clusters, contact Redis support. You can [add or remove participating clusters]() after database creation.
- If an Active-Active database [runs on flash memory](), you cannot add participating clusters that run on RAM only.

## Configure distributed synchronization
Source file: `raw/sources/20260409-docs-latest-operate-rs-databases-active-active-synchronization-mode-edd1512ef3.md`
- use proxy endpoints to synchronize database changes with the databases on other participating clusters.
- To improve the throughput and lower the latency for synchronization traffic,
- you can configure a replicated database to use distributed synchronization where any available proxy endpoint can manage synchronization traffic.
- Every database by default has one proxy endpoint that manages client and synchronization communication with the database shards,
- and that proxy endpoint is used for database synchronization.

## Configure database settings
Source file: `raw/sources/20260409-docs-latest-operate-rs-databases-configure-6babd63b98.md`
- You can manage your Redis Software databases with several tools:
- You can change the configuration of a Redis Software database at any time.<!--more-->
- To edit the configuration of a database using the Cluster Manager UI:
- 1. On the **Databases** screen, select the database you want to edit.
- 1. From the **Configuration** tab, select **Edit**.

## Configure database persistence
Source file: `raw/sources/20260409-docs-latest-operate-rs-databases-configure-database-persistence-fc789ab1a7.md`
- Data is stored in RAM or a combination of RAM and flash memory ([Redis Flex and Auto Tiering]()), which risks data loss during process or server failures. Redis Software supports multiple methods to persist data to disk on a per-database basis to ensure data durability.
- You can configure [persistence](https://redis.com/redis-enterprise/technology/durable-redis/) during database creation or by editing an existing database. Although the persistence model can be changed dynamically, the switch can take time depending on the database size and the models being switched.
- You can configure persistence when you [create a database](), or you can edit an existing database's configuration:
- 1. From the **Databases** list, select the database, then select **Configuration**.
- 1. For **Persistence**, select an [option](#data-persistence-options) from the list.

## Configure proxy policy
Source file: `raw/sources/20260409-docs-latest-operate-rs-databases-configure-proxy-policy-a0b19646c2.md`
- through a proxy process that manages and optimizes access to shards
- within the Redis SoftwareÂ cluster. Each node contains a single proxy process.
- Each proxy can be active and take incoming traffic or it can be passive
- A database can have one of the following proxy policies:
- | Proxy policy | Description | Recommended use cases | Advantages | Disadvantages |

## Troubleshooting pocket guide for Redis Software
Source file: `raw/sources/20260409-docs-latest-operate-rs-databases-connect-troubleshooting-guide-f25d113e2e.md`
- If your client or application cannot connect to your database, verify the following.
- 1. Run the [`free`](https://man7.org/linux/man-pages/man1/free.1.html) command to check memory usage:
- 1. Used CPU should be less than `80%`. To check CPU usage, use `top` or `vmstat`.
- Run [`top`](https://man7.org/linux/man-pages/man1/top.1.html):
- Run [`vmstat`](https://man7.org/linux/man-pages/man8/vmstat.8.html):

## Durability and high availability
Source file: `raw/sources/20260409-docs-latest-operate-rs-databases-durability-ha-7f699607a3.md`
- When you [replicate your database](), each database instance (primary shard) is copied to a replica shard. When a primary shard fails, the cluster automatically promotes a replica shard to primary.
- [Clustering]() (or sharding) breaks your database into individual instances (shards) and spreads them across several nodes. Clustering lets you add resources to your cluster to scale your database and prevents node failures from causing availability loss.
- [Database persistence]() gives your database durability against process or server failures by saving data to disk at set intervals.
- [Active-Active Redis Software databases]() allow reading and writing to the same dataset from multiple clusters in different geographic locations. This increases the durability of your database by reducing the likelihood of data or availability loss. It also reduces data access latency by serving requests from the nearest cluster.
- [Rack-zone awareness]() maps each node in your Redis Software cluster to a physical rack or logical zone. The cluster uses this information to distribute primary shards and their replica shards in different racks or zones. This ensures data availability if a rack or zone fails.

## Replica Of geo-distributed Redis
Source file: `raw/sources/20260409-docs-latest-operate-rs-databases-import-export-replica-of-24981eb10c.md`
- to replicas of the dataset from different geographical locations.
- The Redis Software implementation of active-passive replication is called Replica Of.
- In Replica Of, an administrator designates a database as a replica (destination) of one or more databases (sources).
- After the initial data load from source to destination is completed,
- all write commands are synchronized from the sources to the destination.

## Memory and performance
Source file: `raw/sources/20260409-docs-latest-operate-rs-databases-memory-performance-02ded694b2.md`
- architecture to help optimize storage and performance.
- Database memory limits define the maximum size your database can reach across all database replicas and [shards]() on the cluster. Your memory limit will also determine the number of shards you'll need.
- Besides your dataset, the memory limit must also account for replication, Active-Active overhead, and module overhead, and a number of other factors. These can significantly increase your database size, sometimes increasing it by four times or more.
- For more information on memory limits, see [Database memory limits]().
- When a database exceeds its memory limit, eviction policies determine which data is removed. The eviction policy removes keys based on frequency of use, how recently used, randomly, expiration date, or a combination of these factors. The policy can also be set to `noeviction` to return a memory limit error when trying to insert more data.

## Database memory limits
Source file: `raw/sources/20260409-docs-latest-operate-rs-databases-memory-performance-memory-limit-c6394148e6.md`
- database can reach in the cluster, across all database replicas and
- shards, including both primary and replica shards.
- If the total size of the database in the cluster reaches the memory
- Factors to consider when sizing your database:
- Additional factors for Active-Active databases:

## Migrate database shards
Source file: `raw/sources/20260409-docs-latest-operate-rs-databases-migrate-shards-782c3d6138.md`
- To migrate database shards to other nodes in the cluster, you can use the [`rladmin migrate`]() command or [REST API requests]().
- Migrate database shards to a different node in the following scenarios:
- For databases without replication, the migrated shard will not be available until the migration is done.
- Connected clients shouldn't be disconnected in either case.
- If too many primary shards are placed on the same node, it can impact database performance.

## Create a support package
Source file: `raw/sources/20260409-docs-latest-operate-rs-installing-upgrading-creating-support-package-4bace6fa83.md`
- and need to [contact Redis support](https://redis.io/support/) for assistance, you can [create a support package](#create-support-package) that gathers all essential information to help debug
- The process of creating the support package can take several minutes and generates load on the system.
- To create a support package from the Cluster Manager UI:
- 1. In the navigation menu, select **Support**.
- <img src="../../../../images/rs/screenshots/create-support-package/support-package-dialog.png" alt="Select Support from the navigation menu and create a support package.">

## Hardware requirements
Source file: `raw/sources/20260409-docs-latest-operate-rs-installing-upgrading-install-plan-deployment-hardware-req-ff663679b1.md`
- Factors to consider when sizing your database.
- Additional factors for sizing Active-Active databases:
- Active-Active databases have a lower threshold for activating the eviction policy, because it requires propagation to all participating clusters. The eviction policy starts to evict keys when one of the Active-Active instances reaches 80% of its memory limit.
- Additional factors for sizing  databases with Auto Tiering enabled:

## Redis Software quickstarts
Source file: `raw/sources/20260409-docs-latest-operate-rs-installing-upgrading-quickstarts-f6f51be783.md`
- Try out Redis Software using one of the following quickstarts:
- Additional quickstart guides are available to help you:

## Check database availability for monitoring and load balancers
Source file: `raw/sources/20260409-docs-latest-operate-rs-monitoring-db-availability-6258e5be93.md`
- You can use the [database availability API]() to verify whether a Redis Software database is available to perform read and write operations and can respond to queries from client applications. Load balancers and automated monitoring tools can use this API to monitor database availability.
- Database availability does not guarantee data availability.
- To monitor database availability, use the following REST API request:
- If the OSS Cluster API is enabled, this request verifies all endpoints for this database are available. Otherwise, it verifies the database has at least one available endpoint.
- Returns the status code 200 OK if the database is available.

## Metrics and alerts for monitoring v1
Source file: `raw/sources/20260409-docs-latest-operate-rs-monitoring-v1-monitoring-30c607cb3e.md`
- The current monitoring system, which is deprecated as of Redis Software version 7.22, consists of the following components:
- The internal monitoring system, while functional, has several limitations that affect scalability and accuracy:
- To improve monitoring and address current limitations, Redis Software is transitioning to a new observability foundation: the [metrics stream engine]().
- This modern monitoring stack introduces:
- We recommend migrating to the metrics stream engine for enhanced accuracy, scalability, and future-proof observability.

## Alerts
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-alerts-726e5e850d.md`
- Cluster alerts are triggered based on thresholds applied to these stored metrics.
- In **ClusterÂ >Â Alert Settings**, you can enable alerts for node or cluster events, such as high memory usage or throughput.
- If you enable alerts for "Node joined" or "Node removed" actions,
- you must also enable "ReceiveÂ email alerts" so that the notifications are sent.
- 1. In **Cluster > Alert Settings**, click **Edit**.

## rladmin info
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-cli-utilities-rladmin-info-76c27c2ffe.md`
- Shows the current configuration of specified databases, proxies, clusters, or nodes.
- Lists the current configuration for the cluster.
- Returns the current configuration for the cluster.
- Shows the current configuration for databases.
- | db:id     | ID of the specified database (optional) |

## rladmin tune
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-cli-utilities-rladmin-tune-6143ca9f8b.md`
- Configures parameters for databases, proxies, nodes, and clusters.
- | Parameters                             | Type/Value                        | Description                                                                                                                  |
- |----------------------------------------|-----------------------------------|------------------------------------------------------------------------------------------------------------------------------|
- | acl_pubsub_default | `resetchannels`<br /> `allchannels` | Default pub/sub ACL rule for all databases in the cluster:<br />â¢`resetchannels` blocks access to all channels (restrictive)<br />â¢`allchannels` allows access to all channels (permissive) |
- | automatic_node_offload | `enabled`<br />`disabled` | Define whether automatic node offload migration will take place |

## Server management commands compatibility
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-compatibility-commands-server-e1aac9fac8.md`
- The following tables show which Redis Open Source [server management commands](?group=server) are compatible with standard and Active-Active databases in Redis Software and Redis Cloud.
- Several access control list (ACL) commands are not available in Redis Software. Instead, you can manage access controls from the [Redis Software Cluster Manager UI]() and the [Redis Cloud console]().
- | <span style="min-width: 9em; display: table-cell">Command</span> | Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
- |:--------|:----------------------|:-----------------|:------|
- | [ACL CAT]() | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | Not supported for [scripts](). |

## Benchmark an Auto Tiering enabled database
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-memtier-benchmark-e616b314d6.md`
- But what does the performance look like as compared to a memory-only database, one stored solely in RAM?
- These scenarios use the `memtier_benchmark` utility to evaluate the performance of a Redis Software deployment, including the trial version.
- The `memtier_benchmark` utility is located in `/opt/redislabs/bin/` of Redis Software deployments.  To test performance for cloud provider deployments, see the [memtier-benchmark GitHub project](https://github.com/RedisLabs/memtier_benchmark).
- For additional, such as assistance with larger clusters, [contact support](https://redislabs.com/company/support/).
- These tests assume you're using a trial version of Redis Software and want to test the performance of a Auto Tiering enabled database in the following scenarios:

## Database operations metrics
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-metrics-database-operations-767b2ea674.md`
- The following metrics are available in the Redis Software Cluster Manager UI.
- Number of objects evicted from the database per second.
- Objects are evicted from the database according to the [eviction policy]().
- Object information is not measured during [shard migration]().
- **Components measured**: Database and Shard

## BDB object
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-objects-bdb-9d08a4dec7.md`
- An API object that represents a managed database in the cluster.
- | uid | integer; Cluster unique ID of database. Can be set during creation but cannot be updated. |
- | action_uid | string; Currently running action's UID (read-only) |
- | active_defrag_cycle_max | integer, (range: 1-99); Maximum CPU percentage used for defragmentation when the upper threshold is reached |
- | active_defrag_cycle_min | integer, (range: 1-99) (default: 1); Minimal CPU percentage used for defragmentation when the lower threshold is reached |

## Alert settings object
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-objects-cluster-alert-settings-90db58eab7.md`
- | cluster_certs_about_to_expire | <span class="break-all">[cluster_alert_settings_with_threshold]()</span> object | Cluster certificate will expire in x days |
- | cluster_even_node_count | boolean (default: false) | True high availability requires an odd number of nodes in the cluster |
- | cluster_flash_overcommit | boolean (default: false) | Flash memory committed to databases is larger than cluster total flash memory |
- | cluster_inconsistent_rl_sw | boolean (default: false) | Some nodes in the cluster are running different versions of Redis Software |
- | cluster_internal_bdb | boolean (default: false) | Issues with internal cluster databases |

## Cluster settings object
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-objects-cluster-settings-f7026010bb.md`
- | acl_pubsub_default | `resetchannels`<br /> `allchannels` | Default pub/sub ACL rule for all databases in the cluster:<br />â¢`resetchannels` blocks access to all channels (restrictive)<br />â¢`allchannels` allows access to all channels (permissive) |
- | auto_recovery | boolean (default: false) | Defines whether to use automatic recovery after shard failure |
- | automatic_node_offload | boolean (default: true) | Defines whether the cluster will automatically migrate shards from a node, in case the node is overbooked |
- | <span class="break-all">bigstore_migrate_node_threshold</span> | integer | Minimum free memory (excluding reserved memory) allowed on a node before automatic migration of shards from it to free more memory |
- | <span class="break-all">bigstore_migrate_node_threshold_p</span> | integer | Minimum free memory (excluding reserved memory) allowed on a node before automatic migration of shards from it to free more memory |

## Database alerts settings object
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-objects-db-alerts-settings-506e93d593.md`
- An API object that represents the database alerts configuration.
- | bdb_backup_delayed | [bdb_alert_settings_with_threshold]() object | Periodic backup has been delayed for longer than specified threshold value (minutes) |
- | bdb_crdt_src_high_syncer_lag | [bdb_alert_settings_with_threshold]() object | CRDB source sync lag is higher than specified threshold value (seconds) |
- | bdb_crdt_src_syncer_connection_error | [bdb_alert_settings_with_threshold]() object | CRDB source sync had a connection error while trying to connect to replica source |
- | bdb_crdt_src_syncer_general_error | [bdb_alert_settings_with_threshold]() object | CRDB sync encountered in general error |

## Cluster metrics
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-objects-statistics-cluster-metrics-d37b4cd735.md`
- The v1 statistics REST API endpoints are deprecated as of Redis Software version 7.22. Use the [metrics stream engine for monitoring v2]() instead for real-time monitoring and metrics collection.
- | available_flash | float | Sum of available flash in all nodes (bytes) |
- | available_memory | float | Sum of available memory in all nodes (bytes) |
- | avg_latency | float | Average latency of requests handled by all cluster endpoints (micro-sec); returned only when there is traffic |
- | bigstore_free | float | Sum of free space of backend flash (used by flash DB's BigRedis) on all cluster nodes (bytes); only returned when BigRedis is enabled |

## DB metrics
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-objects-statistics-db-metrics-95402b96cc.md`
- The v1 statistics REST API endpoints are deprecated as of Redis Software version 7.22. Use the [metrics stream engine for monitoring v2]() instead for real-time monitoring and metrics collection.
- | avg_latency | float | Average latency of operations on the DB (microseconds). Only returned when there is traffic. |
- | avg_other_latency | float | Average latency of other (non read/write) operations (microseconds). Only returned when there is traffic. |
- | avg_read_latency | float | Average latency of read operations (microseconds). Only returned when there is traffic. |
- | avg_write_latency | float | Average latency of write operations (microseconds). Only returned when there is traffic. |

## Node metrics
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-objects-statistics-node-metrics-fcd6fd7ba1.md`
- The v1 statistics REST API endpoints are deprecated as of Redis Software version 7.22. Use the [metrics stream engine for monitoring v2]() instead for real-time monitoring and metrics collection.
- | available_flash | float | Available flash on the node (bytes) |
- | available_memory | float | Available RAM on the node (bytes) |
- | avg_latency | float | Average latency of requests handled by endpoints on the node (micro-sec); returned only when there is traffic |
- | bigstore_free | float | Free space of backend flash (used by flash DB's BigRedis) (bytes); returned only when BigRedis is enabled |

## Shard metrics
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-objects-statistics-shard-metrics-99f259d197.md`
- The v1 statistics REST API endpoints are deprecated as of Redis Software version 7.22. Use the [metrics stream engine for monitoring v2]() instead for real-time monitoring and metrics collection.
- | aof_rewrite_inprog | float | The number of simultaneous AOF rewrites that are in progress |
- | avg_ttl | float | Estimated average time to live of a random key (msec) |
- | big_del_flash | float | Rate of key deletes for keys on flash (BigRedis) (key access/sec). Only returned when BigRedis is enabled. |
- | big_del_ram | float | Rate of key deletes for keys in RAM (BigRedis) (key access/sec); this includes write misses (new keys created). Only returned when BigRedis is enabled. |

## Database alerts requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-bdbs-alerts-79b8cee316.md`
- | [GET](#get-all-bdbs-alerts) | `/v1/bdbs/alerts` | Get all alert states for all databases |
- | [GET](#get-bdbs-alerts) | `/v1/bdbs/alerts/{uid}` | Get all alert states for a specific database |
- | [GET](#get-bdbs-alert) | `/v1/bdbs/alerts/{uid}/{alert}` | Get a specific database alert state |
- | [POST](#post-bdbs-alerts) | `/v1/bdbs/alerts/{uid}` | Update a databaseâs alerts configuration |
- | Host | cnm.cluster.fqdn | Domain name |

## Database stats requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-bdbs-stats-913386ac0a.md`
- The v1 statistics REST API endpoints are deprecated as of Redis Software version 7.22. Use the [metrics stream engine for monitoring v2]() instead for real-time monitoring and metrics collection.
- | [GET](#get-all-bdbs-stats) | `/v1/bdbs/stats` | Get stats for all databases |
- | [GET](#get-bdbs-stats) | `/v1/bdbs/stats/{uid}` | Get stats for a specific database |
- | [view_all_bdb_stats]() | admin<br />cluster_member<br />cluster_viewer<br />db_member<br />db_viewer<br />user_manager |
- | Host | cnm.cluster.fqdn | Domain name |

## Diagnostics requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-diagnostics-ecc3aeedb3.md`
- | [GET](#get-diagnostics) | `/v1/diagnostics` | Get diagnostic logging service configuration |
- | [PUT](#put-diagnostics) | `/v1/diagnostics` | Update diagnostic logging service configuration |
- Gets the diagnostic logging service configuration as JSON.
- | [view_cluster_info]() | admin<br />cluster_member<br />cluster_viewer<br />db_member<br />db_viewer<br />user_manager |
- | Host | cnm.cluster.fqdn | Domain name |

## Endpoints stats requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-endpoints-stats-de7fa0eebf.md`
- The v1 statistics REST API endpoints are deprecated as of Redis Software version 7.22. Use the [metrics stream engine for monitoring v2]() instead for real-time monitoring and metrics collection.
- | [GET](#get-endpoints-stats) | `/v1/endpoints/stats` | Get stats for all endpoints |
- Get statistics for all endpoint-proxy links.
- This method will return both endpoints and listeners stats for backwards
- GET /v1/endpoints/stats?interval=1hour&stime=2014-08-28T10:00:00Z

## Terminology in Redis Software
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-terminology-64ca2110e1.md`
- A _node_ is a physical machine, virtual machine, container or cloud
- instance on which the RS installation package was installed and the
- [setup process]() was run in order to make the machine part of the cluster.
- Each node is a container for running multiple Redis
- The recommended configuration for a production cluster is an uneven

## Redis Enterprise Pack 4.5 Release Notes (May 2017)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-legacy-release-notes-redis-pack-4-5-0-may-2-1d23413b16.md`
- upgrade instructions before beginning the upgrade process.
- You can upgrade to this version from any 4.4 version. If you have a
- version older than 4.4 you must first upgrade to 4.4 or higher, and only
- The Discovery Service provides an IP-based connection management service
- used when connecting to Redis Enterprise Pack databases. When used in

## RLEC 0.99.5-24 Release Notes (February 15, 2015)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-legacy-release-notes-rlec-0-99-february-201-ac6af21e84.md`
- before running through the upgrade process.
- If you are upgrading from version 0.99.5-11:
- 1. You must restart the services after the upgrade by running the
- following command with user root (sudo su). From the operating
- system's CLI, run the following command:

## RLEC 4.0.0-49 Release Notes (June 18, 2015)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-legacy-release-notes-rlec-4-0-june-2015-c036b86dc6.md`
- before running through the upgrade process.
- In addition, when running the install.sh script to upgrade the software,
- you might be prompted to approve changes to a configuration file named
- ccs-redis.conf. It is crucial that you choose Yes when asked whether to
- keeps synchronizing data from another Redis database.

## RLEC 4.2.1-30 Release Notes (October 18, 2015)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-legacy-release-notes-rlec-4-2-october-2015-e46274286b.md`
- before running through the upgrade process.
- which enables monitoring through rsyslog.
- enables the administrator to configure RLEC to run with different
- performance profiles that are optimized for either cloud or
- non-cloud environments. For additional details, refer to the

## RLEC 4.3.0-230 Release Notes (August 2, 2016)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-legacy-release-notes-rlec-4-3-aug-2016-f71abf52fd.md`
- before running through the upgrade process.
- You can upgrade to this version from any 4.2 version. If you have a
- version older than 4.2 you should first upgrade to 4.2 and only then
- and contact <support@redislabs.com> if you are interested in this
- cluster the new default version for Redis databases will be 3.0 and

## Redis Enterprise Software Release Notes 6.0.12 (January 2021)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-rs-6-0-12-january-2021-41ed0faa5a.md`
- This version includes the following new features and improvements:
- And other functional and stability improvements.
- The syncer process now supports running in a [distributed mode](). This option can improve the latency for Active-Active databases with a very high throughput profile. You can configure a replicated database to use distributed synchronization so that any available proxy endpoint can manage synchronization traffic.
- Redis Software users can now use the REST API to [disable the following services]():
- Once disabled, services are not monitored and controlled by the supervisord.

## Redis Enterprise Software Release Notes 6.2.10 (February 2022)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-rs-6-2-10-february-2022-3a4cb2e3f5.md`
- [Redis Enterprise Software version 6.2.10](https://redislabs.com/redis-enterprise-software/download-center/software/) is now available!
- The following table shows the MD5 checksums for the available packages.
- | Ubuntu 16 | `531cea69a58fbc1125bc5f76ba01da7f` |
- | Ubuntu 18 | `ec9ac6e0111dc85605d3b98e83f50150` |
- | RedHat Enterprise Linux (RHEL) 7<br/>Oracle Enterprise Linux (OL) 7 | `2f7572caab9600417ef8b4ee474d6768` |

## Redis Enterprise Software release notes 6.4.2-69 (May 2023)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-rs-6-4-2-releases-rs-6-4-2-69-e776d64a9f.md`
- This is a maintenance release for â[âRedis Enterprise Software version 6.4.2](https://redis.io/downloads/#software).
- The following table shows the MD5 checksums for the available packages:
- | Package | MD5 checksum (6.4.2-69 May release) |
- |---------|---------------------------------------|
- | Ubuntu 16 | 31631248672de0154ec20aee0bff9adc |

## Redis Enterprise Software release notes 7.2.4-52 (August 2023)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-rs-7-2-4-releases-rs-7-2-4-52-63c717d5f8.md`
- â[âRedis Enterprise Software version 7.2.4](https://redis.io/downloads/#software) is now available!
- The following Redis 7.0 features are now supported:
- In Redis Enterprise Software, [`FUNCTION STATS`]() returns an extra parameter, an array called `all_running_scripts`, to reflect multiple functions running at the same time.
- The following Redis 7.2 features are now supported:
- Redis Enterprise version 7.2 introduces Auto Tiering as an enhanced successor to Redis on Flash, which allows you to provision larger databases at a lower cost by extending the RAM with flash drives.

## Redis Software release notes 7.22.x
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-rs-7-22-releases-a62aa9525d.md`
- ââRedis Software version 7.22 is now available!
- For more detailed release notes, select a build version from the following table:
- Make sure the following ports are open before upgrading Redis Software.
- Ports reserved as of Redis Software version 7.22.0:
- | 3346 | cluster_api_internal | Cluster API internal port |

## Redis Software release notes 7.22.0-216 (June 2025)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-rs-7-22-releases-rs-7-22-0-216-954b6db715.md`
- â[âRedis Software version 7.22.0](https://redis.io/downloads/#software) is now available!
- Redis Software version 7.22.0 includes three Redis database versions: 7.4.2, 7.2.7, and 6.2.13.
- The [default Redis database version]() is 7.4.
- Redis Software comes packaged with several modules. As of version 7.22.0, Redis Software includes three feature sets, compatible with different Redis database versions.
- The following table shows which Redis modules are compatible with each Redis database version included in this release.

## Redis Software release notes 7.22.0-241 (July 2025)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-rs-7-22-releases-rs-7-22-0-241-535a06ed3a.md`
- â[âRedis Software version 7.22.0](https://redis.io/downloads/#software) is now available!
- Redis Software version 7.22.0 includes three Redis database versions: 7.4.2, 7.2.7, and 6.2.13.
- The [default Redis database version]() is 7.4.
- Redis Software comes packaged with several modules. As of version 7.22.0, Redis Software includes three feature sets, compatible with different Redis database versions.
- The following table shows which Redis modules are compatible with each Redis database version included in this release.

## Redis Software release notes 7.22.0-250 (August 2025)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-rs-7-22-releases-rs-7-22-0-250-bbf5e9529c.md`
- â[âRedis Software version 7.22.0](https://redis.io/downloads/#software) is now available!
- Redis Software version 7.22.0 includes three Redis database versions: 7.4.2, 7.2.7, and 6.2.13.
- The [default Redis database version]() is 7.4.
- Redis Software comes packaged with several modules. As of version 7.22.0, Redis Software includes three feature sets, compatible with different Redis database versions.
- The following table shows which Redis modules are compatible with each Redis database version included in this release.

## Redis Software release notes 7.22.0-95 (May 2025)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-rs-7-22-releases-rs-7-22-0-95-5b4c93cf59.md`
- â[âRedis Software version 7.22.0](https://redis.io/downloads/#software) is now available!
- | 3346 | cluster_api_internal | Cluster API internal port |
- | 3351 | cluster_watchdog_grpc_api | Cluster watchdog now supports gRPC |
- | 3352 | grpc_service_mesh | gRPC communication between nodes |
- | 3353 | local_grpc_service_mesh | Local gRPC services |

## Redis Software release notes 7.22.2-14 (September 2025)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-rs-7-22-releases-rs-7-22-2-14-0e5f806f30.md`
- â[âRedis Software version 7.22.2](https://redis.io/downloads/#software) is now available! This release includes API enhancements that warranted a new minor version instead of a maintenance release for version 7.22.0. However, you can upgrade from 7.22.0 to 7.22.2 without issue.
- Instead of using Redis Software's self-signed certificates for internode encryption, you can provide certificates generated by your Certificate Authority (CA). See [Customer-provided certificates ]() for details.
- Redis Software version 7.22.2 includes three Redis database versions: 7.4.2, 7.2.7, and 6.2.13.
- The [default Redis database version]() is 7.4.
- Redis Software comes packaged with several modules. As of version 7.22.0, Redis Software includes three feature sets, compatible with different Redis database versions.

## Redis Software release notes 7.22.2-20 (October 2025)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-rs-7-22-releases-rs-7-22-2-20-9d5be5f3a0.md`
- â[âRedis Software version 7.22.2](https://redis.io/downloads/#Redis_Software) is now available!
- Redis Software version 7.22.2 includes three Redis database versions: 7.4.3, 7.2.7, and 6.2.13.
- The [default Redis database version]() is 7.4.
- Redis Software comes packaged with several modules. As of version 7.22.0, Redis Software includes three feature sets, compatible with different Redis database versions.
- The following table shows which Redis modules are compatible with each Redis database version included in this release.

## Redis Software release notes 7.22.2-41 (November 2025)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-rs-7-22-releases-rs-7-22-2-41-9fb9727e70.md`
- This is a maintenance release for ââRedis Software version 7.22.2.
- Redis Software version 7.22.2 includes three Redis database versions: 7.4.3, 7.2.7, and 6.2.13.
- The [default Redis database version]() is 7.4.
- Redis Software comes packaged with several modules. As of version 7.22.0, Redis Software includes three feature sets, compatible with different Redis database versions.
- The following table shows which Redis modules are compatible with each Redis database version included in this release.

## Redis Software release notes 7.22.2-55 (January 2026)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-rs-7-22-releases-rs-7-22-2-55-5bccc4de05.md`
- This is a maintenance release for ââRedis Software version 7.22.2.
- Redis Software version 7.22.2 includes three Redis database versions: 7.4.3, 7.2.7, and 6.2.13.
- The [default Redis database version]() is 7.4.
- Redis Software comes packaged with several modules. As of version 7.22.0, Redis Software includes three feature sets, compatible with different Redis database versions.
- The following table shows which Redis modules are compatible with each Redis database version included in this release.

## Redis Software release notes 7.22.2-79 (February 2026)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-rs-7-22-releases-rs-7-22-2-79-1780f50d44.md`
- This is a maintenance release for ââRedis Software version 7.22.2.
- Redis Software version 7.22.2 includes three Redis database versions: 7.4.3, 7.2.7, and 6.2.13.
- The [default Redis database version]() is 7.4.
- Redis Software comes packaged with several modules. As of version 7.22.0, Redis Software includes three feature sets, compatible with different Redis database versions.
- The following table shows which Redis modules are compatible with each Redis database version included in this release.

## Redis Software release notes 7.22.2-93 (March 2026)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-rs-7-22-releases-rs-7-22-2-93-936054a478.md`
- This is a maintenance release for ââRedis Software version 7.22.2.
- Redis Software version 7.22.2 includes three Redis database versions: 7.4.3, 7.2.7, and 6.2.13.
- The [default Redis database version]() is 7.4.
- Redis Software comes packaged with several modules. As of version 7.22.0, Redis Software includes three feature sets, compatible with different Redis database versions.
- The following table shows which Redis modules are compatible with each Redis database version included in this release.

## Redis Enterprise Software release notes 7.4.2-169 (May 2024)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-rs-7-4-2-releases-rs-7-4-2-169-5b3779b158.md`
- This is a maintenance release for â[âRedis Enterprise Software version 7.4.2](https://redis.io/downloads/#software).
- Redis Enterprise comes packaged with several modules. As of version 7.4.2, Redis Enterprise includes two feature sets, compatible with different Redis database versions.
- Bundled Redis modules compatible with Redis database version 7.2:
- Bundled Redis modules compatible with Redis database versions 6.0 and 6.2:
- The following table provides a snapshot of supported platforms as of this Redis Enterprise Software release. See the [supported platforms reference]() for more details about operating system compatibility.

## Redis Software release notes 7.8.2-34 (November 2024)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-rs-7-8-releases-rs-7-8-2-34-51ffb042ed.md`
- â[âRedis Software version 7.8.2](https://redis.io/downloads/#software) is now available!
- | 3347 | cert_exporter | Reports cluster certificate metrics |
- | 3348 | process_exporter | Reports process metrics for DMC and Redis processes |
- | 3349 | cluster_wd_exporter | Reports cluster watchdog metrics |
- | 3350 | db_controller | Internode communication |

## Redis Software release notes 8.0.10-64 (February 2026)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-rs-8-0-releases-rs-8-0-10-64-284a2438d2.md`
- â[âRedis Software version 8.0.10](https://redis.io/downloads/#Redis_Software) is now available! This release includes API enhancements that warranted a new minor version instead of a maintenance release for version 8.0.6. However, you can upgrade from 8.0.2 or 8.0.6 to 8.0.10 without issue.
- The Redis 8.4 feature set is now available when you [create]() or [upgrade]() a database with database version 8.4.
- Redis 8.4 builds on the foundation of Redis 8.2 with significant enhancements to cluster operations, string manipulation, and stream processing capabilities.
- This release delivers major improvements across multiple areas:
- Redis Flex databases running on Redis 8.4 have major operational optimizations:

## Redis Software release notes 8.0.2-17 (October 2025)
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-rs-8-0-releases-rs-8-0-2-17-067cc200f3.md`
- â[âRedis Software version 8.0.2](https://redis.io/downloads/#Redis_Software) is now available!
- Redis 8.0 and 8.2 feature sets are now available when you [create]() or [upgrade]() a database with database version 8.2.
- Redis Software databases created with or upgraded to Redis version 8 include all the Redis capabilities, built in the database version as follows:
- | Database type | Automatically enabled capabilities |
- |---------------|------------------------------------|

## Internode encryption
Source file: `raw/sources/20260409-docs-latest-operate-rs-security-encryption-internode-encryption-eccd673bf2.md`
- Internode encryption is enabled for the _control plane_, which manages the cluster and its databases.
- Internode encryption is supported for the _data plane_, which encrypts communication used to replicate shards between nodes and proxy communication with shards located on different nodes.
- The following diagram shows how this works.
- Data internode encryption is disabled by default for individual databases in order to optimize for performance.  Encryption adds latency and overhead; the impact is measurable and varies according to the database, its field types, and the details of the underlying use case.
- You can enable data internode encryption for a database by changing the database configuration settings.  This lets you choose when to favor performance and when to encrypt data.

## Troubleshooting Redis Software
Source file: `raw/sources/20260409-docs-latest-operate-rs-troubleshooting-0a8f8e09c2.md`
- For troubleshooting specific issues, see:
- The [Redis Software knowledge base](https://support.redislabs.com/hc/en-us/categories/26174244088594-Redis-Software) provides additional guides and troubleshooting resources.
- If initial troubleshooting doesn't resolve the issue, you can [contact support](https://redis.io/support/) for additional help.

## Redis cluster scaling official docs
Source file: `raw/sources/20260409-redis-cluster-scaling-official-docs.md`
- Source: https://redis.io/docs/latest/operate/oss_and_stack/management/scaling/
- Fully managed and integrated with Google Cloud, Azure, and
- Self-managed software with enterprise-grade compliance and
- In-memory database for caching & streaming.
- and AWS. Redis Software Self-managed software with enterprise-grade compliance

## Redis latency diagnosis official docs
Source file: `raw/sources/20260409-redis-latency-diagnosis-official-docs.md`
- Source: https://redis.io/docs/latest/operate/oss_and_stack/management/optimization/latency/
- Fully managed and integrated with Google Cloud, Azure, and
- Self-managed software with enterprise-grade compliance and
- In-memory database for caching & streaming.
- and AWS. Redis Software Self-managed software with enterprise-grade compliance

## Redis persistence official docs
Source file: `raw/sources/20260409-redis-persistence-official-docs.md`
- Source: https://redis.io/docs/latest/operate/oss_and_stack/management/persistence/
- Fully managed and integrated with Google Cloud, Azure, and
- Self-managed software with enterprise-grade compliance and
- In-memory database for caching & streaming.
- and AWS. Redis Software Self-managed software with enterprise-grade compliance

## Redis replication official docs
Source file: `raw/sources/20260409-redis-replication-official-docs.md`
- Source: https://redis.io/docs/latest/operate/oss_and_stack/management/replication/
- Fully managed and integrated with Google Cloud, Azure, and
- Self-managed software with enterprise-grade compliance and
- In-memory database for caching & streaming.
- and AWS. Redis Software Self-managed software with enterprise-grade compliance
