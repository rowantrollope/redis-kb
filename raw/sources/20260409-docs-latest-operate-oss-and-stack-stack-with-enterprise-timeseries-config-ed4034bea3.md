---
title: Time series configuration compatibility with Redis Software
url: https://redis.io/docs/latest/operate/oss_and_stack/stack-with-enterprise/timeseries/config/
retrieved_utc: '2026-04-09T20:45:56.274837+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/oss_and_stack/stack-with-enterprise/timeseries/config/index.html.md
---

# Time series configuration compatibility with Redis Software

```json metadata
{
  "title": "Time series configuration compatibility with Redis Software",
  "description": "Time series configuration settings supported by Redis Software and Redis Cloud.",
  "categories": ["docs","operate","stack"],
  "tableOfContents": {"sections":[{"id":"configure-time-series-in-redis-software","title":"Configure time series in Redis Software"},{"id":"configure-time-series-in-redis-cloud","title":"Configure time series in Redis Cloud"},{"id":"configuration-settings","title":"Configuration settings"}]}

,
  "codeExamples": []
}
```
## Configure time series in Redis Software

[Redis Software]() lets you manually change any [RedisTimeSeries configuration setting](configuration/#redistimeseries-configuration-parameters).

To change RedisTimeSeries configuration using the Redis Software Cluster Manager UI:

  1. From the **Databases** list, select the database, then click **Configuration**.

  1. Select the **Edit** button.

  1. In the **Capabilities** section, click **Parameters**.

  1. After you finish editing the module's configuration parameters, click **Done** to close the parameter editor.

  1. Click **Save**.

## Configure time series in Redis Cloud

[Redis Cloud]() does not let you configure RedisTimeSeries manually. However, if you have a Flexible or Annual [subscription](), you can contact [support](https://redis.com/company/support/) to request a configuration change. You cannot change RedisTimeSeries configuration for Free or Fixed subscriptions.

## Configuration settings

See [configuration parameters]() in the Develop section for parameter details and compatibility with Redis Software and Redis Cloud.
