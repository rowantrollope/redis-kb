---
title: Search and query configuration compatibility with Redis Software
url: https://redis.io/docs/latest/operate/oss_and_stack/stack-with-enterprise/search/config/
retrieved_utc: '2026-04-09T20:45:55.196152+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/oss_and_stack/stack-with-enterprise/search/config/index.html.md
---

# Search and query configuration compatibility with Redis Software

```json metadata
{
  "title": "Search and query configuration compatibility with Redis Software",
  "description": "Search and query configuration settings supported by Redis Software and Redis Cloud.",
  "categories": ["docs","operate","stack"],
  "tableOfContents": {"sections":[{"id":"configure-search-in-redis-cloud","title":"Configure search in Redis Cloud"},{"id":"configure-search-in-redis-software","title":"Configure search in Redis Software"},{"id":"configuration-settings","title":"Configuration settings"}]}

,
  "codeExamples": []
}
```
To configure RediSearch in [Redis Software]() or [Redis Cloud](), use one of the following methods instead of [`FT.CONFIG SET`]().

## Configure search in Redis Cloud

For Redis Cloud:

- _Flexible or Annual [subscriptions]()_: contact [support](https://redis.com/company/support/) to request a configuration change.
    
- _Free or Fixed subscriptions_: you cannot change RediSearch configuration.

## Configure search in Redis Software

For Redis Software, use one of the following methods:

- Cluster Manager UI:

  1. From the **Databases** list, select the database, then click **Configuration**.

  1. Select the **Edit** button.

  1. In the **Capabilities** section, click **Parameters**.

  1. Enter the setting name and setting value in the **RediSearch** box.
  
      In the **Query Performance Factor** section, you can configure settings to improve query performance. See [Configure the query performance factor for Redis Search in Redis Software]() for more information.

      

  1. After you finish editing the module's configuration parameters, click **Done** to close the parameter editor.

  1. Click **Save**.

- [`rladmin tune db`]():

    ```sh
    $ rladmin tune db db:<ID|name> module_name search \
        module_config_params "setting-name setting-value"
    ```

- [Configure module]() REST API request:

    ```sh
    POST /v1/modules/config/bdb/<ID>
    {
      "modules": [
        {
          "module_name": "search",
          "module_args": "setting-name setting-value"
        }
      ]
    }
    ```

## Configuration settings

See [configuration parameters]() in the Develop section for parameter details and compatibility with Redis Software and Redis Cloud.
