---
title: Create and manage databases
url: https://redis.io/docs/latest/operate/rc/api/examples/create-database/
retrieved_utc: '2026-04-09T20:45:55.451712+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rc/api/examples/create-database/index.html.md
---

# Create and manage databases

```json metadata
{
  "title": "Create and manage databases",
  "description": "This article describes how to create and manage a database using the Redis Cloud API.",
  "categories": ["docs","operate","rc"],
  "tableOfContents": {"sections":[{"children":[{"id":"create-an-essentials-database","title":"Create an Essentials database"},{"id":"update-an-essentials-database","title":"Update an Essentials database"}],"id":"redis-cloud-essentials","title":"Redis Cloud Essentials"},{"children":[{"id":"create-a-pro-database","title":"Create a Pro database"},{"id":"update-a-redis-cloud-pro-database","title":"Update a Redis Cloud Pro database"}],"id":"redis-cloud-pro","title":"Redis Cloud Pro"}]}

,
  "codeExamples": []
}
```
You can use the Redis Cloud REST API to create and manage databases.

## Redis Cloud Essentials

### Create an Essentials database

To create a Redis Cloud Essentials database, use [`POST /fixed/subscriptions/{subscriptionId}/databases`]().

This call creates a database in the specified subscription. Use [`GET /fixed/subscriptions`]() to get a list of Essentials subscriptions and their IDs. 

```shell
POST "https://[host]/v1/fixed/subscriptions/{subscriptionId}/databases"
{
  "name": "Basic-essentials-database-example"
}
```

This example JSON body contains only the most basic, required parameters to create a database:

- `name`: The database name. A unique name per subscription that can contain only alphanumeric characters and hyphens

There are other additional parameters and settings that can be defined on database creation. Review the database parameters and options in the [full API reference](). 

Some options may not be compatible with your selected plan. Use [`GET /fixed/subscriptions/{subscriptionId}`]() to view the plan you have selected and what options it supports.

The response body contains the `taskId` for the task that creates the database. You can use [`GET /v1/tasks/{taskId}`]() to track the task's status.

### Update an Essentials database

To update a Redis Cloud Essentials database, use [`PUT /fixed/subscriptions/{subscriptionId}/databases/{databaseId}`](). 

The primary component of a database update request is the JSON request body that contains the details of the requested database changes. You can see the full set of changes you can make in the [full API reference]().

Some options may not be compatible with your selected plan. Use [`GET /fixed/subscriptions/{subscriptionId}`]() to view the plan you have selected and what options it supports.

The response body contains the `taskId` for the task that updates the database. You can use [`GET /v1/tasks/{taskId}`]() to track the task's status.

## Redis Cloud Pro

### Create a Pro database

If you want to create a Pro database in a new subscription, see [Create a Pro subscription]().

To create a Redis Cloud Pro database in an existing subscription, use [`POST /subscriptions/{subscriptionId}/databases`]().

This call creates a database in the specified subscription. Use [`GET /subscriptions`]() to get a list of subscriptions and their IDs. 

```shell
POST "https://[host]/v1/subscriptions/{subscriptionId}/databases"
{
  "name": "Basic-database-example",
  "datasetSizeInGb": 1
}
```

This example JSON body contains only the most basic, required parameters to create a database:

- `name`: The database name. A unique name per subscription that can contain only alphanumeric characters and hyphens
- `datasetSizeInGb`: Maximum dataset size in GB

There are many additional parameters and settings that can be defined on database creation. Review the database parameters and options in the [full API reference]().

The response body contains the `taskId` for the task that creates the database. You can use [`GET /v1/tasks/{taskId}`]() to track the task's status.

### Update a Redis Cloud Pro database

To update a Redis Cloud Pro database, use [`PUT /subscriptions/{subscriptionId}/databases/{databaseId}`](). 

The primary component of a database update request is the JSON request body that contains the details of the requested database changes. You can see the full set of changes you can make in the [full API reference]().

The response body contains the `taskId` for the task that updates the database. You can use [`GET /v1/tasks/{taskId}`]() to track the task's status.