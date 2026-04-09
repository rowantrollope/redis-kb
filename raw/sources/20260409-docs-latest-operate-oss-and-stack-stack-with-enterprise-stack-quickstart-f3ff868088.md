---
title: Redis Open Source quick start
url: https://redis.io/docs/latest/operate/oss_and_stack/stack-with-enterprise/stack-quickstart/
retrieved_utc: '2026-04-09T20:45:51.831478+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/oss_and_stack/stack-with-enterprise/stack-quickstart/index.html.md
---

# Redis Open Source quick start

```json metadata
{
  "title": "Redis Open Source quick start",
  "description": "",
  "categories": ["docs","operate","stack"],
  "tableOfContents": {"sections":[{"children":[{"id":"create-a-subscription","title":"Create a subscription"},{"id":"create-a-redis-stack-database","title":"Create a Redis Stack database"},{"id":"connect-to-the-database","title":"Connect to the database"}],"id":"set-up-a-redis-cloud-database","title":"Set up a Redis Cloud database"},{"id":"try-redis-open-source-features","title":"Try Redis Open Source features"}]}

,
  "codeExamples": []
}
```To quickly set up a database with Redis Stack (Redis Open Source) features,
you can sign up for a free [Redis Cloud](https://cloud.redis.io/#/sign-up) subscription and create a Redis Stack database.

Alternatively, you can use one of these methods:

- [Redis Software]()
- Redis Software in a [Docker container]()
- [Other platforms]() for Redis Software

## Set up a Redis Cloud database

To set up a Redis Cloud database with Redis Stack features, follow these steps:

1. [Create a new Redis Cloud subscription](#create-a-subscription).

1. [Create a Redis Stack database](#create-a-redis-stack-database).

1. [Connect to the database](#connect-to-the-database).

For more details, see the Redis Cloud [quick start]().

### Create a subscription

To create a new subscription:

1. Sign in to the Redis Cloud [admin console](http://cloud.redis.io) or create a new account.

1. Select the **New subscription** button:

    

1. Configure your subscription:

    1. Select **Fixed plans**.
    1. For the cloud vendor, select **Amazon Web Services** (AWS), **Google Cloud** (GCP), or **Microsoft Azure**.
    1. Select a region to deploy the subscription to.
    1. From the dataset size list, select the Free tier (30MB).
    1. Enter a name for the subscription.

1. Select the **Create subscription** button:

    

### Create a Redis Stack database

After you create a subscription, follow these steps to create a Redis Stack database:

1. Select the **New database** button:

    

1. In **General** settings, enter a **Database name**.

1. For database **Type**, select **Redis Stack**.

1. Select the **Activate database** button:

    

### Connect to the database

After creating the database, you can view its **Configuration** settings. You will need the following information to connect to your new database:

- **Public endpoint**: The host address of the database
- **Redis password**/**Default user password**: The password used to authenticate with the database

With this information, you can connect to your database with the [`redis-cli`]() command-line tool, an application, or [Redis Insight](https://redislabs.com/redisinsight/).

## Try Redis Open Source features

To try out Redis Open Source features, follow the examples provided by the corresponding guides:

- [Redis Search quick start]()
- [JSON quick start](#use-redisjson)
- [Time series quick start]()
- [Probabilistic data structures quick start]()
