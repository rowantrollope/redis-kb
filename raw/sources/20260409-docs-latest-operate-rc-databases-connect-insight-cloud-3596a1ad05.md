---
title: Use Redis Insight on Redis Cloud
url: https://redis.io/docs/latest/operate/rc/databases/connect/insight-cloud/
retrieved_utc: '2026-04-09T20:45:51.886574+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rc/databases/connect/insight-cloud/index.html.md
---

# Use Redis Insight on Redis Cloud

```json metadata
{
  "title": "Use Redis Insight on Redis Cloud",
  "description": "Shows how to open your database in a browser-based version of Redis Insight and lists the features that are available.",
  "categories": ["docs","operate","rc","redisinsight"],
  "tableOfContents": {"sections":[{"id":"browse","title":"Browse"},{"id":"cli-and-command-helper","title":"CLI and Command Helper"},{"id":"workbench","title":"Workbench"},{"id":"insights","title":"Insights"}]}

,
  "codeExamples": []
}
```
[Redis Insight]() is a free Redis GUI that lets you visualize your Redis data and learn more about Redis.

You can either [install Redis Insight]() on your computer, or you can open your database in Redis Insight directly on Redis Cloud.


Opening your database with Redis Insight in your browser is only available for Essentials databases. For all other databases, [install Redis Insight]() on your computer and [open Redis Insight]() from the database page.


To open your database with Redis Insight on Redis Cloud, select **Open with Redis Insight** on the [database screen]().



Redis Insight will open in a new tab. 

This browser-based version of Redis Insight has a subset of the features of Redis Insight. For other Redis Insight features, [install Redis Insight]() on your computer and [open Redis Insight]() from the database page.

## Browse

The **Browse** tab lets you browse, filter, and visualize your Redis data structures.

- Create, read, update, and delete lists, hashes, strings, sets, sorted sets, streams, and [JSON]()
- Filter keys by key name or pattern, and by key type
- Group keys according to their namespaces
    
- View, validate, and manage your key values in a human-readable format using formatters that prettify and highlight data in different formats (for example, Unicode, JSON, MessagePack, HEX, and ASCII)
    
- Search by key values using your [search indexes]()
    

If you don't have any Redis data yet, you can select **Load sample data** to add sample data into your database.



## CLI and Command Helper

The **CLI** lets you run Redis commands directly. 



The CLI integrates with a **Command Helper** that lets you search and read information about Redis commands.

## Workbench

The **Workbench** is an advanced command line interface with intelligent command auto-complete and complex data visualization support.



## Insights

The **Insights** panel provides interactive tutorials and recommendations to help you optimize your database performance and memory usage.



From the **Workbench** of an empty database, select **Explore** to view the **Insights** panel.



You can also select the **Insights** button in the top-right corner to view the **Insights** panel.



