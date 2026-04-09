---
title: Redis for AI and search
url: https://redis.io/docs/latest/develop/ai/
retrieved_utc: '2026-04-09T20:45:57.302692+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/develop/ai/index.html.md
---

# Redis for AI and search

```json metadata
{
  "title": "Redis for AI and search",
  "description": "An overview of Redis for AI and search documentation",
  "categories": ["docs","operate","rs","rc"],
  "tableOfContents": {"sections":[{"id":"featureform","title":"Featureform"},{"id":"how-tos","title":"How to's"},{"id":"concepts","title":"Concepts"},{"id":"quickstarts","title":"Quickstarts"},{"id":"tutorials","title":"Tutorials"},{"id":"ecosystem-integrations","title":"Ecosystem integrations"},{"id":"video-tutorials","title":"Video tutorials"},{"id":"benchmarks","title":"Benchmarks"},{"id":"best-practices","title":"Best practices"},{"id":"continue-learning-with-redis-university","title":"Continue learning with Redis University"}]}

,
  "codeExamples": []
}
```Redis stores and indexes vector embeddings that semantically represent unstructured data including text passages, images, videos, or audio. Store vectors and the associated metadata within [hashes]() or [JSON]() documents for [indexing]() and [querying]().

<div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
  
  
  
</div>

## Featureform

Use [Featureform]() to define, manage, and serve machine learning features on top of your existing data systems. The Featureform docs cover the Python SDK workflow from provider registration through feature serving.

#### Overview

This page is organized into a few sections depending on what you're trying to do:
* **How to's** - The comprehensive reference section for every feature, API, and setting. It's your source for detailed, technical information to support any level of development.
* **Concepts** - Explanations of foundational ideas and core principles to help you understand the reason behind the product's features and design.
* **Quickstarts** - Short, focused guides to get you started with key features or workflows in minutes.
* **Tutorials** - In-depth walkthroughs that dive deeper into specific use cases or processes. These step-by-step guides help you master essential tasks and workflows.
* **Integrations** - Guides and resources to help you connect and use the product with popular tools, frameworks, or platforms.
* **Video tutorials** - Watch our AI video collection featuring practical tutorials and demonstrations.
* **Benchmarks** - Performance comparisons and metrics to demonstrate how the product performs under various scenarios. This helps you understand its efficiency and capabilities.
* **Best practices** - Recommendations and guidelines for maximizing effectiveness and avoiding common pitfalls. This section equips you to use the product effectively and efficiently.

## How to's

1. [**Create a vector index**](): Redis maintains a secondary index over your data with a defined schema (including vector fields and metadata). Redis supports [`FLAT`]() and [`HNSW`]() vector index types.
1. [**Store and update vectors**](): Redis stores vectors and metadata in hashes or JSON objects.
1. [**Search with vectors**](): Redis supports several advanced querying strategies with vector fields including k-nearest neighbor ([KNN]()), [vector range queries](), and [metadata filters]().
1. [**Configure vector queries at runtime**](). Select the best filter mode to optimize query execution.

#### Learn how to index and query vector embeddings
* [redis-py (Python)]()
* [NRedisStack (C#/.NET)]()
* [node-redis (JavaScript)]()
* [Jedis (Java)]()
* [go-redis (Go)]()

## Concepts

Learn to perform vector search and use gateways and semantic caching in your AI/ML projects.

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 my-8">
  
  
  
  
  
</div>

## Quickstarts

Quickstarts or recipes are useful when you are trying to build specific functionality. For example, you might want to do RAG with LangChain or set up LLM memory for your AI agent.

Get started with these foundational guides:

* [Redis vector database quick start guide]()
* [Retrieval-Augmented Generation quick start guide]()

#### RAG
Retrieval Augmented Generation (aka RAG) is a technique to enhance the ability of an LLM to respond to user queries. The retrieval part of RAG is supported by a vector database, which can return semantically relevant results to a user's query, serving as contextual information to augment the generative capabilities of an LLM.

Explore our [AI notebooks collection]() for comprehensive RAG examples including:

* RAG implementations with RedisVL, LangChain, and LlamaIndex
* Advanced RAG techniques and optimizations
* RAG evaluation with the RAGAS framework
* Integration with cloud platforms like Azure and Vertex AI

Additional resources:
* [Vector search with Azure](https://techcommunity.microsoft.com/blog/azuredevcommunityblog/vector-similarity-search-with-azure-cache-for-redis-enterprise/3822059)
* [RAG with Vertex AI](https://github.com/redis-developer/gcp-redis-llm-stack/tree/main)

#### Agents
AI agents can act autonomously to plan and execute tasks for the user.
* [Redis Notebooks for LangGraph](https://github.com/redis-developer/langgraph-redis/tree/main/examples)

## Tutorials
Need a deeper-dive through different use cases and topics?

#### RAG
* [Agentic RAG](https://github.com/redis-developer/agentic-rag) - A tutorial focused on agentic RAG with LlamaIndex and Amazon Bedrock
* [RAG on Vertex AI](https://github.com/redis-developer/gcp-redis-llm-stack/tree/main) - A RAG tutorial featuring Redis with Vertex AI
* [RAG workbench](https://github.com/redis-developer/redis-rag-workbench) - A development playground for exploring RAG techniques with Redis
* [ArXiv Chat](https://github.com/redis-developer/ArxivChatGuru) - Streamlit demo of RAG over ArXiv documents with Redis & OpenAI

#### Recommendations and search
* [Recommendation systems w/ NVIDIA Merlin & Redis](https://github.com/redis-developer/redis-nvidia-recsys) - Three examples, each escalating in complexity, showcasing the process of building a realtime recsys with NVIDIA and Redis
* [Redis product search](https://github.com/redis-developer/redis-product-search) - Build a real-time product search engine using features like full-text search, vector similarity, and real-time data updates
* [ArXiv Search](https://github.com/redis-developer/redis-arxiv-search) - Full stack implementation of Redis with React FE

## Ecosystem integrations

Explore our comprehensive [ecosystem integrations page]() to discover how Redis works with popular AI frameworks, platforms, and tools including:

* LangGraph, LangChain, and LlamaIndex for building advanced AI applications
* Amazon Bedrock and NVIDIA NIM for enhanced AI infrastructure
* Microsoft Semantic Kernel and Kernel Memory for LLM applications
* And many more integrations to power your AI solutions

## Video tutorials

Watch our [AI video collection]() featuring practical tutorials and demonstrations on:

* Building RAG applications and implementing vector search
* Working with LangGraph for AI agents with memory
* Semantic caching and search techniques
* Redis integrations with popular AI frameworks
* Real-world AI application examples and best practices

## Benchmarks
See how we stack up against the competition.
* [Redis vector benchmark results](https://redis.io/blog/benchmarking-results-for-vector-databases/)
* [1 billion vectors](https://redis.io/blog/redis-8-0-m02-the-fastest-redis-ever/)

## Best practices
See how leaders in the industry are building their RAG apps.
* [Get better RAG responses with Ragas](https://redis.io/blog/get-better-rag-responses-with-ragas/)

## Continue learning with Redis University

* [Context Engineering with Redis & LangChain](https://university.redis.io/course/vsgabnbkd3f5cd?tab=details)
* [Vector Search with RedisVL](https://university.redis.io/course/1npvvtfft2agew?tab=details)
* [Build a RAG Chatbot](https://university.redis.io/course/ihjs7iip0gpkrw?tab=details)
