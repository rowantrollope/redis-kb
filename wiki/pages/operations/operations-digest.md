---
title: "Operations Digest"
last_updated: 2026-04-09
tags: [operations, digest]
source_count: 143
---

# Operations Digest

Auto-compiled synthesis from raw sources.

## Redis OSS README
Source file: `raw/sources/20260408-redis-oss-readme.md`
- Source: https://raw.githubusercontent.com/redis/redis/unstable/README.md

## https://redis.io/docs/latest/categories/
Source file: `raw/sources/20260409-docs-latest-categories-154efe2308.md`
- Source: https://redis.io/docs/latest/categories/

## https://redis.io/docs/latest/categories/ai/
Source file: `raw/sources/20260409-docs-latest-categories-ai-2774ba5711.md`
- Source: https://redis.io/docs/latest/categories/ai/

## https://redis.io/docs/latest/categories/client/
Source file: `raw/sources/20260409-docs-latest-categories-client-92ec520f61.md`
- Source: https://redis.io/docs/latest/categories/client/

## https://redis.io/docs/latest/categories/clients/
Source file: `raw/sources/20260409-docs-latest-categories-clients-fca4941e9c.md`
- Source: https://redis.io/docs/latest/categories/clients/

## https://redis.io/docs/latest/categories/develop/
Source file: `raw/sources/20260409-docs-latest-categories-develop-373609a7b7.md`
- Source: https://redis.io/docs/latest/categories/develop/

## https://redis.io/docs/latest/categories/docs/
Source file: `raw/sources/20260409-docs-latest-categories-docs-3aef2fe9ec.md`
- Source: https://redis.io/docs/latest/categories/docs/

## https://redis.io/docs/latest/categories/glossary/
Source file: `raw/sources/20260409-docs-latest-categories-glossary-a2c2a39035.md`
- Source: https://redis.io/docs/latest/categories/glossary/

## https://redis.io/docs/latest/categories/integrate/
Source file: `raw/sources/20260409-docs-latest-categories-integrate-27b59183a6.md`
- Source: https://redis.io/docs/latest/categories/integrate/

## https://redis.io/docs/latest/categories/kubernetes/
Source file: `raw/sources/20260409-docs-latest-categories-kubernetes-983cc11f39.md`
- Source: https://redis.io/docs/latest/categories/kubernetes/

## https://redis.io/docs/latest/categories/modules/
Source file: `raw/sources/20260409-docs-latest-categories-modules-d724eb3808.md`
- Source: https://redis.io/docs/latest/categories/modules/

## https://redis.io/docs/latest/categories/operate/
Source file: `raw/sources/20260409-docs-latest-categories-operate-d1d607e468.md`
- Source: https://redis.io/docs/latest/categories/operate/

## https://redis.io/docs/latest/categories/oss/
Source file: `raw/sources/20260409-docs-latest-categories-oss-d3607296e9.md`
- Source: https://redis.io/docs/latest/categories/oss/

## https://redis.io/docs/latest/categories/rc/
Source file: `raw/sources/20260409-docs-latest-categories-rc-d63654cfdd.md`
- Source: https://redis.io/docs/latest/categories/rc/

## https://redis.io/docs/latest/categories/rcw/
Source file: `raw/sources/20260409-docs-latest-categories-rcw-7f89a1a3ed.md`
- Source: https://redis.io/docs/latest/categories/rcw/

## https://redis.io/docs/latest/categories/rdi/
Source file: `raw/sources/20260409-docs-latest-categories-rdi-bd7d5e2c6c.md`
- Source: https://redis.io/docs/latest/categories/rdi/

## https://redis.io/docs/latest/categories/redis-di/
Source file: `raw/sources/20260409-docs-latest-categories-redis-di-f64f182a12.md`
- Source: https://redis.io/docs/latest/categories/redis-di/

## https://redis.io/docs/latest/categories/redisinsight/
Source file: `raw/sources/20260409-docs-latest-categories-redisinsight-5f2f652c59.md`
- Source: https://redis.io/docs/latest/categories/redisinsight/

## https://redis.io/docs/latest/categories/rs/
Source file: `raw/sources/20260409-docs-latest-categories-rs-cf41cbc4ac.md`
- Source: https://redis.io/docs/latest/categories/rs/

## Commands
Source file: `raw/sources/20260409-docs-latest-commands-3e522e60b5.md`

## LangCache REST API
Source file: `raw/sources/20260409-docs-latest-develop-ai-langcache-api-reference-9b0bb00610.md`

## RedisVL API
Source file: `raw/sources/20260409-docs-latest-develop-ai-redisvl-api-a0cc4429c1.md`
- Reference documentation for the RedisVL API.
- * [Index-Level Stopwords Configuration](schema/#index-level-stopwords-configuration)
- * [Defining Fields](schema/#defining-fields)
- * [Basic Field Types](schema/#basic-field-types)
- * [Vector Field Types](schema/#vector-field-types)

## Threshold Optimizers
Source file: `raw/sources/20260409-docs-latest-develop-ai-redisvl-api-threshold-optimizer-eb7277f036.md`
- <a id="cachethresholdoptimizer-api"></a>

## Overview
Source file: `raw/sources/20260409-docs-latest-develop-ai-redisvl-overview-9b2085be23.md`
- * [Install RedisVL with Pip](installation/#install-redisvl-with-pip)
- * [Install RedisVL from Source](installation/#install-redisvl-from-source)
- * [Installing Redis](installation/#installing-redis)
- * [Optional arguments](cli/#optional-arguments)

## Administration
Source file: `raw/sources/20260409-docs-latest-develop-ai-search-and-query-administration-3131821cc8.md`

## Highlighting
Source file: `raw/sources/20260409-docs-latest-develop-ai-search-and-query-advanced-concepts-highlight-ffcd2fc894.md`
- Redis Open Source uses advanced algorithms for highlighting and summarizing, which enable only the relevant portions of a document to appear in response to a search query. This feature allows users to immediately understand the relevance of a document to their search criteria, typically highlighting the matching terms in bold text.
- There are two sub-commands used for highlighting. The first is `HIGHLIGHT`, which surrounds matching text with an open and/or close tag. The second is `SUMMARIZE`, which splits a field into contextual fragments surrounding the found terms. It is possible to summarize a field, highlight a field, or perform both actions in the same query.
- Summarization will fragment the text into smaller sized snippets, each of which containing the found term(s) and some additional surrounding context.
- Redis can perform summarization using the `SUMMARIZE` keyword. If no additional arguments are passed, all returned fields are summarized using built-in defaults.
- The `SUMMARIZE` keyword accepts the following arguments:

## Best practices
Source file: `raw/sources/20260409-docs-latest-develop-ai-search-and-query-best-practices-767caf39a9.md`

## Deprecated
Source file: `raw/sources/20260409-docs-latest-develop-ai-search-and-query-deprecated-4dceaffef3.md`

## Integration guides
Source file: `raw/sources/20260409-docs-latest-develop-clients-hiredis-int-examples-735f41ab40.md`
- [adapters](https://github.com/redis/hiredis/tree/master/adapters)
- to help you use it in conjunction with C and C++ libraries and frameworks.
- The pages in this section explain how to integrate `hiredis` into

## Redis vector library guide (Python)
Source file: `raw/sources/20260409-docs-latest-develop-clients-redis-vl-0589cc145b.md`
- See the [RedisVL Guide]() for more information.

## Index/Search JSON documents
Source file: `raw/sources/20260409-docs-latest-develop-data-types-json-indexing-json-1dd4ce630a.md`
- In addition to storing JSON documents, you can also index them using the [Redis Search]() feature. This enables full-text search capabilities and document retrieval based on their content.
- To use these features, install [Redis Open Source]().
- See the [tutorial]() to learn how to search and query your JSON.

## Redis reference
Source file: `raw/sources/20260409-docs-latest-develop-reference-8627ef8623.md`

## Libraries and tools
Source file: `raw/sources/20260409-docs-latest-integrate-3b7512fa37.md`

## Redis Cloud on Heroku
Source file: `raw/sources/20260409-docs-latest-integrate-heroku-redis-e729ce977d.md`

## Java client for Redis
Source file: `raw/sources/20260409-docs-latest-integrate-lettuce-933b35c920.md`
- Connect your Java application to a Redis database using the Lettuce client library.
- Refer to the complete [Lettuce guide]() to install, connect, and use Lettuce.

## Node.js client for Redis
Source file: `raw/sources/20260409-docs-latest-integrate-node-redis-9b5cd2e549.md`
- Connect your Node.js application to a Redis database using the node-redis client library.
- Refer to the complete [Node.js guide]() to install, connect, and use node-redis.

## Prometheus and Grafana with Redis Software
Source file: `raw/sources/20260409-docs-latest-integrate-prometheus-with-redis-enterprise-58bff8f02f.md`

## Redis Software observability and monitoring guidance
Source file: `raw/sources/20260409-docs-latest-integrate-prometheus-with-redis-enterprise-observability-7832dd39c8.md`

## Prometheus metrics v2
Source file: `raw/sources/20260409-docs-latest-integrate-prometheus-with-redis-enterprise-prometheus-metrics-defini-f98abb2070.md`
- You can [integrate Redis Software with Prometheus and Grafana]() to create dashboards for important metrics.
- The v2 metrics in the following tables are available as of Redis Software version 7.8.0. For help transitioning from v1 metrics to v2 PromQL, see [Prometheus v1 metrics and equivalent v2 PromQL]().
- The v2 scraping endpoint also exposes metrics for `node_exporter` version 1.8.1. For more information, see the [Prometheus node_exporter GitHub repository](https://github.com/prometheus/node_exporter).

## Prometheus metrics v1
Source file: `raw/sources/20260409-docs-latest-integrate-prometheus-with-redis-enterprise-prometheus-metrics-v1-0a3180e458.md`
- You can [integrate Redis Software with Prometheus and Grafana]() to create dashboards for important metrics.
- As of Redis Software version 7.8.2, v1 metrics are deprecated but still available. For help transitioning from v1 metrics to v2 PromQL, see [Prometheus v1 metrics and equivalent v2 PromQL]().

## Writing to multiple keys
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-data-pipelines-transform-examples-r-97223ba614.md`
- If you want to write results to multiple keys, you can do so by defining multiple `redis.write` subsections in the `output` section of the job file. Each instance of `redis.write` can specify a different key, data format, and other parameters. For example, you can create two different keys for the same data, one with a default key format and another with a custom key format and mapping.

## Redis Data Integration API
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-reference-api-reference-e22f7686e8.md`

## Reference
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-reference-bc359b254a.md`

## CLI reference
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-reference-cli-ae3159f76a.md`

## redis-di list-contexts
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-reference-cli-redis-di-list-context-0d975d48f0.md`

## Data transformation reference
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-reference-data-transformation-4ff57efef8.md`

## add_field
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-reference-data-transformation-add-f-2c7ace2ea2.md`
- | Name                         | Type       | Description | Required |
- | ---------------------------- | ---------- | ----------- | -------- |
- | [**fields**](#option1fields) | `object[]` | Fields<br/> | yes      |
- | Name           | Type     | Description                                   | Required |
- | -------------- | -------- | --------------------------------------------- | -------- |

## filter
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-reference-data-transformation-filte-f80e311833.md`
- | Name           | Type     | Description                                   | Required |
- | -------------- | -------- | --------------------------------------------- | -------- |
- | **expression** | `string` | Expression<br/>                               | yes      |
- | **language**   | `string` | Language<br/>Enum: `"jmespath"`, `"sql"`<br/> | yes      |

## map
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-reference-data-transformation-map-d5b7c7aa2c.md`
- Map a record into a new output based on expressions
- | Name                          | Type               | Description                                   | Required |
- | ----------------------------- | ------------------ | --------------------------------------------- | -------- |
- | [**expression**](#expression) | `object`, `string` | Expression<br/>                               | yes      |
- | **language**                  | `string`           | Language<br/>Enum: `"jmespath"`, `"sql"`<br/> | yes      |

## remove_field
Source file: `raw/sources/20260409-docs-latest-integrate-redis-data-integration-reference-data-transformation-remov-329b6e0caa.md`
- | Name                         | Type       | Description | Required |
- | ---------------------------- | ---------- | ----------- | -------- |
- | [**fields**](#option1fields) | `object[]` | Fields<br/> | yes      |
- | Name      | Type     | Description | Required |
- | --------- | -------- | ----------- | -------- |

## Documentation
Source file: `raw/sources/20260409-docs-latest-integrate-riot-docs-d86bc163cb.md`
- Full documentation for RIOT-X is available at [redis.github.io/riotx](https://redis.github.io/riotx/).

## Install
Source file: `raw/sources/20260409-docs-latest-integrate-riot-install-b1181749b5.md`
- RIOT-X can be installed in different ways depending on your environment and preference.
- Download the pre-compiled binary from [RIOT-X Releases](https://github.com/redis/riotx-dist/releases), uncompress, and copy to the desired location.
- Full installation documentation is available [here](https://redis.github.io/riotx/quick-start/install.html).

## Getting started
Source file: `raw/sources/20260409-docs-latest-integrate-riot-quick-start-6779e6f8eb.md`
- You can launch RIOT-X with the following command:
- This will show usage help, which you can also get by running:
- Usage help is available on any command and subcommand:
- Run the following command to give riotx TAB completion in the current shell:
- Full documentation is available at [redis.github.io/riotx](https://redis.github.io/riotx/).

## Redis with Vercel
Source file: `raw/sources/20260409-docs-latest-integrate-vercel-redis-cad7048e46.md`
- Integrate Redis with your Vercel applications to add fast caching, session management, and real-time features to your web applications.
- Redis integration with Vercel enables you to add high-performance data storage and caching to your serverless applications. Perfect for Next.js applications deployed on Vercel, Redis provides fast data access and real-time capabilities.
- Learn how to [integrate Redis with Vercel]() for optimal performance.

## Write-behind transformation examples
Source file: `raw/sources/20260409-docs-latest-integrate-write-behind-data-transformation-transformation-examples-816148a2aa.md`

## Write-behind foreach example
Source file: `raw/sources/20260409-docs-latest-integrate-write-behind-data-transformation-transformation-examples-f-8f19ad36b7.md`
- The `foreach` section is used to explode a list of objects or arrays to rows in a selected target.
- The `foreach` expression is structured as `<field_name>:<JMESPath expression>`.
- The following example uses the `add_field` transformation to prepare the input JSON to the desired structure. Then, it applies `foreach` to write each `order` object as a relational database record using `keys` and `mapping`.
- In this example, the `JMESPath` function `to_string` is used to flatten an array of objects, `specs`, to a string.

## Installation
Source file: `raw/sources/20260409-docs-latest-integrate-write-behind-installation-58ee339396.md`

## CLI
Source file: `raw/sources/20260409-docs-latest-integrate-write-behind-reference-cli-e618a0267e.md`

## redis-di list-contexts
Source file: `raw/sources/20260409-docs-latest-integrate-write-behind-reference-cli-redis-di-list-contexts-77cf08c2c1.md`

## Data transformation block types
Source file: `raw/sources/20260409-docs-latest-integrate-write-behind-reference-data-transformation-block-types-9f46e92db0.md`

## add_field
Source file: `raw/sources/20260409-docs-latest-integrate-write-behind-reference-data-transformation-block-types-add-b6c269b1f5.md`
- | Name                         | Type       | Description | Required |
- | ---------------------------- | ---------- | ----------- | -------- |
- | [**fields**](#option1fields) | `object[]` | Fields<br/> | yes      |
- | Name           | Type     | Description                                   | Required |
- | -------------- | -------- | --------------------------------------------- | -------- |

## filter
Source file: `raw/sources/20260409-docs-latest-integrate-write-behind-reference-data-transformation-block-types-fil-a67e3d29f3.md`
- | Name           | Type     | Description                                   | Required |
- | -------------- | -------- | --------------------------------------------- | -------- |
- | **expression** | `string` | Expression<br/>                               | yes      |
- | **language**   | `string` | Language<br/>Enum: `"jmespath"`, `"sql"`<br/> | yes      |

## key
Source file: `raw/sources/20260409-docs-latest-integrate-write-behind-reference-data-transformation-block-types-key-2598e6f94c.md`
- | Name           | Type     | Description                                   | Required |
- | -------------- | -------- | --------------------------------------------- | -------- |
- | **expression** | `string` | Expression<br/>                               | yes      |
- | **language**   | `string` | Language<br/>Enum: `"jmespath"`, `"sql"`<br/> | yes      |

## map
Source file: `raw/sources/20260409-docs-latest-integrate-write-behind-reference-data-transformation-block-types-map-6d557fd02c.md`
- Map a record into a new output based on expressions
- | Name                          | Type               | Description                                   | Required |
- | ----------------------------- | ------------------ | --------------------------------------------- | -------- |
- | [**expression**](#expression) | `object`, `string` | Expression<br/>                               | yes      |
- | **language**                  | `string`           | Language<br/>Enum: `"jmespath"`, `"sql"`<br/> | yes      |

## remove_field
Source file: `raw/sources/20260409-docs-latest-integrate-write-behind-reference-data-transformation-block-types-rem-f714e22a22.md`
- | Name                         | Type       | Description | Required |
- | ---------------------------- | ---------- | ----------- | -------- |
- | [**fields**](#option1fields) | `object[]` | Fields<br/> | yes      |
- | Name      | Type     | Description | Required |
- | --------- | -------- | ----------- | -------- |

## Write-behind reference
Source file: `raw/sources/20260409-docs-latest-integrate-write-behind-reference-f86b2e37e2.md`

## Archive
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-kubernetes-archive-de43c2d2cf.md`
- The Redis Enterprise for Kubernetes documentation is versioned. You are looking at the documentation for the latest release.
- Older versions of Redis Enterprise for Kubernetes documentation are available on the archived web site:

## Redis Enterprise Software for Kubernetes release notes
Source file: `raw/sources/20260409-docs-latest-operate-kubernetes-release-notes-4d4895b955.md`

## Install Redis Open Source
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-install-486fcebdb6.md`
- You can install [Redis Open Source]() locally on your machine. Redis Open Source is available on Docker, Linux, macOS, and Windows (using Docker only).
- You can also download [Redis Insight](), a free developer companion tool with an intuitive GUI and advanced CLI, which you can use alongside Redis Open Source.
- Here are the installation and upgrade instructions:
- While you can install Redis Open Source locally, you might also consider using Redis Cloud by creating a [free account](https://redis.com/try-free/?utm_source=redisio&utm_medium=referral&utm_campaign=2023-09-try_free&utm_content=cu-redis_cloud_users).

## Install Redis Community Edition or Redis Stack
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-install-archive-a67cdcc301.md`
- You can install [Redis](https://redis.io/about/) or [Redis Stack](https://redis.io/about/about-stack/) locally on your machine. Redis and Redis Stack are available on Linux, macOS, and Windows.
- While you can install Redis or Redis Stack locally, you might also consider using Redis Cloud by creating a [free account](https://redis.com/try-free/?utm_source=redisio&utm_medium=referral&utm_campaign=2023-09-try_free&utm_content=cu-redis_cloud_users).

## Install Redis Stack
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-install-archive-install-stack-e866898d90.md`
- While you can install Redis Stack on any of the platforms listed below, you might also consider using Redis Cloud by creating a [free account](https://redis.com/try-free/?utm_source=redisio&utm_medium=referral&utm_campaign=2023-09-try_free&utm_content=cu-redis_cloud_users).

## Build and run Redis Open Source
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-install-build-stack-759377e753.md`
- Build instructions are provided for the following platforms:

## Install Redis Open Source on Linux
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-install-install-stack-rpm-9bd4e1c5da.md`
- Follow these steps to install Redis Open Source.
- 1. Create the file `/etc/yum.repos.d/redis.repo` with the following contents.
- baseurl=http://packages.redis.io/rpm/rockylinux9
- baseurl=http://packages.redis.io/rpm/rockylinux8
- curl -fsSL https://packages.redis.io/gpg > /tmp/redis.key

## Install Redis Open Source on Linux
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-install-install-stack-snap-dcb989c284.md`
- To install Redis via snap, run the following commands:
- sudo apt install redis-tools # this will install `redis-cli`
- Redis will start automatically after installation and also at boot time.
- Once Redis is running, you can test it by running `redis-cli`:
- Test the connection with the `ping` command:

## Upgrade Redis Open Source
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-install-upgrade-e8273df7b4.md`
- Upgrade Redis Open Source to version 8 from version 7.x with or without modules or from Redis Stack 7.2 and 7.4.

## Manage Redis
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-management-182c5e9154.md`

## Reference
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-reference-aca9309ed0.md`

## Redis internals
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-reference-internals-428e5cc6f7.md`
- **The following Redis documents were written by the creator of Redis, Salvatore Sanfilippo, early in the development of Redis (c. 2010), and do not necessarily reflect the latest Redis implementation.**

## Redis Open Source and Redis Software
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-146d97a603.md`
- [Redis Software]() and [Redis Cloud]() support all [Redis Open Source]() features. Some of the capabilities Redis Open Source provides include querying, indexing, and full-text search and support for JSON, time series, and probabilistic data structures.

## Triggers
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-deprecated-features-trig-6d7127a5ea.md`

## Concepts
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-deprecated-features-trig-7feeab0074.md`

## RedisGears Java classes and functions
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-gears-v1-jvm-classes-8b876498f8.md`
- The RedisGears JVM plugin provides a set of classes and functions for you to use in your Java code.

## ExecuteArray
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-gears-v1-jvm-classes-gea-1eada13afb.md`
- Runs a Redis command. It accepts an array of strings, which represents the command to execute.
- | command | array of strings | A Redis command |
- Returns the command result. It could be a string or an array of strings, depending on the command.

## GearsFuture
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-gears-v1-jvm-classes-gea-1fcf355d61.md`
- The `GearsFuture` class allows asynchronous processing of records in another thread.
- You can use a `GearsFuture` object with the following [`GearsBuilder`]() functions:

## SetResult
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-gears-v1-jvm-classes-gea-71251f093b.md`
- Sets a computation to run asynchronously.
- | result | template type I | The result of a computation |

## ConfigGet
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-gears-v1-jvm-classes-gea-82c31b5029.md`
- Gets the value of a RedisGears [configuration setting]().
- You can set configuration values when you load the module or use the `RG.CONFIGSET` command.
- | key | string | The configuration setting to get |
- Returns the configuration value of a RedisGears configuration setting.

## AsyncForeach
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-gears-v1-jvm-classes-gea-887bf9b820.md`
- The `asyncForeach` function allows you to use a [`GearsFuture`]() object to define a set of operations and run them asynchronously for each record in the pipe.
- | foreach | AsyncForeachOperation<T> | The set of operations to run for each record |
- Returns a GearsBuilder object with a new template type.

## AccumulateBy
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-gears-v1-jvm-classes-gea-8dbb112c36.md`
- Iterates through the records in the pipe, groups them based on the provided extractor, and then reduces each group to a single record per group with the accumulator function.
- The initial value of the accumulator is null unless you provide a value initializer operation as a parameter.
- | I | The template type of the returned builder |
- | accumulator | <nobr>AccumulateByOperation<T,âI></nobr> | A function with logic to update the accumulator value with each record |
- | extractor | ExtractorOperation<T> | Extracts a specific value from each record |

## Map
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-gears-v1-jvm-classes-gea-a593aa27b7.md`
- Maps each input record in the pipe to an output record, one-to-one.
- | I | The template type of the returned builder |
- | mapper | <nobr>MapOperation<T,âI></nobr> | For each input record, returns a new output record |
- Returns a GearsBuilder object with a new template type.

## Count
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-gears-v1-jvm-classes-gea-a5d9fc3c4a.md`
- Counts the number of records in the pipe and returns the total as a single record.
- Returns a GearsBuilder object with a new template type of `Integer`.

## AsyncMap
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-gears-v1-jvm-classes-gea-adebd2b5ab.md`
- The `asyncMap` function allows you to use a [`GearsFuture`]() object to asynchronously map each input record in the pipe to an output record, one-to-one.
- | I | The template type of the returned builder |
- | mapper | <nobr>AsyncMapOperation<T,âI></nobr> | For each input record, returns a new output record |
- Returns a GearsBuilder object with a new template type.

## CreateGearsBuilder
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-gears-v1-jvm-classes-gea-d1a091f7fa.md`
- Creates a new `GearsBuilder` object. Use this function instead of a `GearsBuilder` constructor to avoid type warnings.
- | I | The template type of the returned builder. The reader determines the type. |
- | reader | BaseReader<I> | The pipe reader |

## Java-based RedisGears recipes
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-gears-v1-jvm-recipes-97cafb4d0c.md`
- A RedisGears recipe is a collection of RedisGears functions, often designed to perform a specific, complex task.

## Python-based RedisGears recipes
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-gears-v1-python-recipes-a3124e602e.md`
- A RedisGears recipe is a collection of RedisGears functions, often designed to perform a specific, complex task.

## Redis Open Source release notes
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-release-notes-redisce-19f090c447.md`

## Redis Stack release notes
Source file: `raw/sources/20260409-docs-latest-operate-oss-and-stack-stack-with-enterprise-release-notes-redisstack-87c9e63b79.md`

## Manage accounts and settings
Source file: `raw/sources/20260409-docs-latest-operate-rc-accounts-3c1f8dae52.md`
- Here, you learn how to manage Redis Cloud accounts and their settings:

## Redis Cloud API
Source file: `raw/sources/20260409-docs-latest-operate-rc-api-api-reference-367c36f028.md`

## REST API Examples
Source file: `raw/sources/20260409-docs-latest-operate-rc-api-examples-3007c7faa3.md`

## Archive
Source file: `raw/sources/20260409-docs-latest-operate-rc-cloud-archive-b8960b628c.md`
- Previous versions of Redis Cloud documentation are available on the [Redis Cloud documentation archive](https://docs.redis.com/2024-04-07/rc/). Â

## Google Cloud Marketplace team management
Source file: `raw/sources/20260409-docs-latest-operate-rc-cloud-integrations-gcp-marketplace-team-management-4440c092af.md`
- This article applies to an earlier Google Cloud marketplace listing. For the current [Redis Cloud - Pay as You Go](https://console.cloud.google.com/marketplace/product/redis-marketplace-isaas/redis-enterprise-cloud-flexible-plan) listing, manage your team through the [Access Management]() screen. See [Sign up for Redis Cloud with Google Cloud Marketplace]() for more information.
- If you subscribed to Redis Cloud through Google Cloud Marketplace using the **Redis Cloud** listing, use the IAM section of the Google Cloud console to manage your team.
- To grant Redis Cloud access to a Google Cloud user, select **Add** to add a member, insert the email address, and then assign the following roles to the user:
- If these roles are not available, you can add them to your project.
- 2. Use the filter table field to locate the role. (Search for "service usage viewer" or "Redis Cloud admin".)

## Deploy Redis Cloud as a Heroku add-on
Source file: `raw/sources/20260409-docs-latest-operate-rc-cloud-integrations-heroku-9e529f2a13.md`

## Configure databases
Source file: `raw/sources/20260409-docs-latest-operate-rc-databases-configuration-4308007202.md`
- Here, you'll find background info and conceptual details to help you customize your Redis Cloud databases to meet your needs.

## View logs and reports
Source file: `raw/sources/20260409-docs-latest-operate-rc-logs-reports-07c208e3f2.md`
- Here, you learn how to use Redis Cloud logs and reports to track activity and usage statistics.

## Redis Insight
Source file: `raw/sources/20260409-docs-latest-operate-redisinsight-a21d894ec3.md`
- <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 max-w-2xl">
- For information on using Redis Insight, see [these pages]().

## Install Redis Insight
Source file: `raw/sources/20260409-docs-latest-operate-redisinsight-install-a83f16d9f1.md`
- <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 max-w-2xl">
- Learn how to install Redis Insight on your desktop, Amazon Web Services (AWS), Docker, and Kubernetes.
- <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">

## Install on desktop
Source file: `raw/sources/20260409-docs-latest-operate-redisinsight-install-install-on-desktop-6ee2fde760.md`
- <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 max-w-2xl">
- Redis Insight is supported on multiple operating systems:
- | Operating System | Supported Versions [^1] |
- |:---              |:---                     |
- | **Windows**      | Windows 11              |

## Import and export data
Source file: `raw/sources/20260409-docs-latest-operate-rs-databases-import-export-29ffa6839b.md`

## Additional configuration
Source file: `raw/sources/20260409-docs-latest-operate-rs-installing-upgrading-configuring-31aca7f354.md`

## Installation script command-line options
Source file: `raw/sources/20260409-docs-latest-operate-rs-installing-upgrading-install-install-script-a2d78f046d.md`
- Run `./install.sh --help` to view command-line options supported by the installation script.
- | `-y` | Automatically answers `yes` to all install prompts, accepting all default values<br/>See [Manage install questions]()|
- | <nobr>`-c <answer file>`</nobr> | Specify answer file used to respond to install prompts<br/>See [Manage install questions]()|
- | <nobr>`-s <socket dir>`</s> | Specify directory for redislabs unix sockets  _(new installs only)_|
- | <nobr>`--install-dir <dir>`</nobr> | Specifies installation directory _(new installs only)_ <br/> See [Customize install locations]()|

## Supported platforms
Source file: `raw/sources/20260409-docs-latest-operate-rs-installing-upgrading-install-plan-deployment-supported-pl-8f9af8b6ac.md`

## Download a Redis Software installation package
Source file: `raw/sources/20260409-docs-latest-operate-rs-installing-upgrading-install-prepare-install-download-ins-bcb3510e1b.md`
- To download the installation package for any of the supported platforms:
- 1. Go to the [Redis download page](https://cloud.redis.io/#/rlec-downloads).
- 1. Sign in with your Redis credentials or create a new account.
- 1. In the **Downloads** section for Redis Software, select the installation package for your platform then select **Go**.
- Before you install the Linux package or AWS AMI on an AWS EC2 instance,

## Prometheus metrics v2
Source file: `raw/sources/20260409-docs-latest-operate-rs-monitoring-metrics-stream-engine-prometheus-metrics-v2-e36e0e664f.md`
- You can integrate Redis Software with Prometheus and tools such as [Grafana](), [Datadog](), [Dynatrace](), or [New Relic]() to create dashboards for important metrics.
- The v2 metrics in the following tables are available as of Redis Software version 7.8.0. For help transitioning from v1 metrics to v2 PromQL, see [Prometheus v1 metrics and equivalent v2 PromQL]().
- The v2 scraping endpoint also exposes metrics for `node_exporter` version 1.8.1. For more information, see the [Prometheus node_exporter GitHub repository](https://github.com/prometheus/node_exporter).

## Redis Software observability and monitoring guidance
Source file: `raw/sources/20260409-docs-latest-operate-rs-monitoring-observability-0333ff54e0.md`

## Manage networks
Source file: `raw/sources/20260409-docs-latest-operate-rs-networking-c3f8403265.md`

## Reference
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-6c238b568f.md`

## Compatibility with Redis Open Source commands
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-compatibility-commands-8400399a20.md`
- Learn which Redis Open Source commands are compatible with Redis Software and [Redis Cloud]().
- Select a command group for more details about compatibility with standard and Active-Active Redis Software.

## Transaction commands compatibility
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-compatibility-commands-transactions-62bf42d7f9.md`
- The following table shows which Redis Open Source [transaction commands](?group=transactions) are compatible with standard and Active-Active databases in Redis Software and Redis Cloud.
- | Command | Redis<br />Software | Redis<br />Cloud | Notes |
- |:--------|:----------------------|:-----------------|:------|
- | [DISCARD]() | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |
- | [EXEC]() | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |

## Prometheus metrics v1
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-metrics-prometheus-metrics-v1-9cd3ff7506.md`
- You can integrate Redis Software with Prometheus and tools such as [Grafana](), [Datadog](), [Dynatrace](), or [New Relic]() to create dashboards for important metrics.
- As of Redis Software version 7.8.2, v1 metrics are deprecated but still available. For help transitioning from v1 metrics to v2 PromQL, see [Prometheus v1 metrics and equivalent v2 PromQL]().

## Prometheus metrics v2
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-metrics-prometheus-metrics-v2-b2af44ea9a.md`
- You can integrate Redis Software with Prometheus and tools such as [Grafana](), [Datadog](), [Dynatrace](), or [New Relic]() to create dashboards for important metrics.
- The v2 metrics in the following tables are available as of Redis Software version 7.8.0. For help transitioning from v1 metrics to v2 PromQL, see [Prometheus v1 metrics and equivalent v2 PromQL]().
- The v2 scraping endpoint also exposes metrics for `node_exporter` version 1.8.1. For more information, see the [Prometheus node_exporter GitHub repository](https://github.com/prometheus/node_exporter).

## Redis Software API
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-api-reference-1773697e39.md`

## Query performance factor object
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-objects-bdb-query-performance-factor-62b5594304.md`
- Configures [query performance factor]() and related fields.
- | active | boolean (default: false) | If true, enables query performance factor for the database |
- | scaling_factor | integer (range: 0-16) (default: 0) | Scales the magnitude of the query performance factor |

## Limits object
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-objects-bootstrap-limits-1b09454452.md`
- | max_listeners      | integer (default:&nbsp;100)    | Max allowed listeners on node |
- | max_redis_servers  | integer (default:&nbsp;100)    | Max allowed Redis servers on node |

## Paths object
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-objects-bootstrap-paths-c0602ab425.md`
- | bigstore_path | string | Bigredis storage path |
- | ccs_persistent_path | string | Persistent storage path of CCS |
- | ephemeral_path | string | Ephemeral storage path |
- | persistent_path | string | Persistent storage path |

## Redis Software REST API objects
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-objects-cae0dfe81a.md`
- Certain [REST API requests]() require you to include specific objects in the request body. Many requests also return objects in the response body.
- Both REST API requests and responses represent these objects as [JSON](https://www.json.org).

## BDB alert settings with threshold object
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-objects-db-alerts-settings-bdb-alert--99e413aff4.md`
- | enabled    | boolean (default:&nbsp;false)  | Alert enabled or disabled |
- | threshold  | string                         | Threshold for alert going on/off |

## Database connection auditing configuration object
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-objects-db-conns-auditing-config-4a3e585497.md`
- Database connection auditing configuration
- | audit_address | string | TCP/IP address where one can listen for notifications. |
- | audit_port | integer | Port where one can listen for notifications. |
- | audit_protocol | `TCP`<br />`local` | Protocol used to process notifications. For production systems, `TCP` is the only valid value. |
- | audit_reconnect_interval | integer | Interval (in seconds) between attempts to reconnect to the listener. Default is 1 second. |

## Alert manager object
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-objects-services-configuration-alert--b6ab441214.md`
- | operating_mode | 'disabled'<br />'enabled' | Enable/disable the alert manager processes |

## Call home agent object
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-objects-services-configuration-call-h-472a3894bb.md`
- | operating_mode | 'disabled'<br />'enabled' | Enable/disable the call_home_agent process, which sends daily usage statistics to Redis |

## CM server object
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-objects-services-configuration-cm-ser-31c6c8167b.md`
- | operating_mode | 'disabled'<br />'enabled' | Enable/disable the CM server |

## Entra ID agent manager object
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-objects-services-configuration-entrai-577b7bc817.md`
- | operating_mode | 'disabled'<br />'enabled' | Enable/disable the Entra ID agent manager processes |

## LDAP agent manager object
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-objects-services-configuration-ldap-a-469ab4c7d2.md`
- | operating_mode | 'disabled'<br />'enabled' | Enable/disable the LDAP agent manager processes |

## MDNS server object
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-objects-services-configuration-mdns-s-a90ae69ca8.md`
- | operating_mode | 'disabled'<br />'enabled' | Enable/disable the multicast DNS server |

## PDNS server object
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-objects-services-configuration-pdns-s-94addb3e5e.md`
- | operating_mode | 'disabled'<br />'enabled' | Enable/disable the PDNS server |

## Stats archiver object
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-objects-services-configuration-stats--8777929371.md`
- | operating_mode | 'disabled'<br />'enabled' | Enable/disable the stats archiver service |

## Loading object
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-objects-shard-loading-95cc153800.md`
- | progress  | number, (range: 0-100) | Percentage of bytes already loaded |
- | status    | 'in_progress'<br />'idle' | Status of the load of a dump file (read-only) |

## Database modules requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-bdbs-modules-4dd30af4ed.md`
- | [POST]() | `/v1/bdbs/{uid}/modules/config` | Configure module |
- | [POST]() | `/v1/bdbs/{uid}/modules/upgrade` | Upgrade module |

## Redis Software REST API requests
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-rest-api-requests-fef8e08ade.md`
- A REST API request requires the following components:

## Supported platforms
Source file: `raw/sources/20260409-docs-latest-operate-rs-references-supported-platforms-339c67870d.md`

## Previous releases
Source file: `raw/sources/20260409-docs-latest-operate-rs-release-notes-legacy-release-notes-331431f2b7.md`

## Archive
Source file: `raw/sources/20260409-docs-latest-operate-rs-rs-archive-0dbc1191a8.md`
- Previous versions of Redis Enterprise Software documentation are available on the archived web site:

## https://redis.io/docs/latest/tags/configured/
Source file: `raw/sources/20260409-docs-latest-tags-configured-83a871d66a.md`
- Source: https://redis.io/docs/latest/tags/configured/

## https://redis.io/docs/latest/tags/non-configured/
Source file: `raw/sources/20260409-docs-latest-tags-non-configured-b40baf5e8b.md`
- Source: https://redis.io/docs/latest/tags/non-configured/
