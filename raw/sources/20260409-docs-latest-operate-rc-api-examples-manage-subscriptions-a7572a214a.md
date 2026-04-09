---
title: Create and manage subscriptions
url: https://redis.io/docs/latest/operate/rc/api/examples/manage-subscriptions/
retrieved_utc: '2026-04-09T20:45:54.078103+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rc/api/examples/manage-subscriptions/index.html.md
---

# Create and manage subscriptions

```json metadata
{
  "title": "Create and manage subscriptions",
  "description": "Describes how to create and manage a subscription using the Redis Cloud API.",
  "categories": ["docs","operate","rc"],
  "tableOfContents": {"sections":[{"children":[{"id":"create-an-essentials-subscription","title":"Create an Essentials subscription"},{"id":"update-an-essentials-subscription","title":"Update an Essentials subscription"},{"id":"delete-an-essentials-subscription","title":"Delete an Essentials subscription"}],"id":"redis-cloud-essentials","title":"Redis Cloud Essentials"},{"children":[{"id":"create-a-pro-subscription","title":"Create a Pro subscription"},{"id":"update-a-pro-subscription","title":"Update a Pro subscription"},{"id":"delete-a-pro-subscription","title":"Delete a Pro subscription"}],"id":"redis-cloud-pro","title":"Redis Cloud Pro"}]}

,
  "codeExamples": []
}
```
The Redis Cloud REST API lets you create and manage all kinds of subscriptions. 

## Redis Cloud Essentials

### Create an Essentials subscription

Use [`POST /v1/fixed/subscriptions`]() to create an Essentials subscription.

```sh
POST "https://[host]/v1/fixed/subscriptions"
{
    "name": "My new subscription",
    "planId": <plan_id>,
    "paymentMethodId": <payment_id>
}
```

Modify the following parameters in the sample JSON document to create a subscription on your own account:

- **`paymentMethodId`** - Specify a payment method connected to your account.

    Use [`GET /v1/payment-methods`]() to find a payment method ID.

    You don't need to pass this field in your API request if you subscribed to Redis Cloud through a marketplace integration.

- **`planId`** - Specify an essentials plan to create.

    Use [`GET /v1/fixed/plans`]() to get a list of plan IDs.

After you create an Essentials subscription, you must use the [`POST /v1/fixed/subscriptions/{subscriptionId}/databases`]() endpoint to [create the database]().

You can include the contents of the JSON document in the `POST /v1/fixed/subscriptions` operation in the [Swagger UI](https://api.redislabs.com/v1/swagger-ui.html). See [Swagger user interface]() for more details.


The Swagger UI generates default JSON examples for `POST` and `PUT` operations. You can reference these examples and modify them to fit your specific needs and account settings. The examples will fail if used as-is.


The response body contains the `taskId` for the task that creates the subscription. You can use [`GET /v1/tasks/{taskId}`]() to track the task's status.

### Update an Essentials subscription

Use [`PUT /v1/fixed/subscriptions/{subscriptionId}`]() to update an Essentials subscription.

```sh
PUT "https://[host]/v1/fixed/subscriptions/{subscriptionId}"
{
    "name": "new-subscription-name",
    "planId": <plan_id>,
    "paymentMethodId": <payment_id>
}
```

You can only change the following settings with this endpoint:
- **`name`** - Specify a new name for your subscription.

- **`planId`** - Specify a new Essentials plan to change to.

    You can only change to a plan that:
        
    - Is in the same cloud provider and region of your current plan.
        
    - Has a compatible [High-availability option]() to your current plan. For example, if your current plan has single-zone replication, you cannot switch to a plan with multi-zone replication, but you can switch to a plan with no replication. If your current plan has multi-zone replication, you must switch to a plan with multi-zone replication.

    Use [`GET /v1/fixed/plans/subscriptions/{subscriptionID}`]() to get a list of plan IDs that are compatible with your subscription.

- **`paymentMethodId`** - Specify a different payment method connected to your account.

    Use [`GET /v1/payment-methods`]() to find a payment method ID.

The response body contains the `taskId` for the task that updates the subscription. You can use [`GET /v1/tasks/{taskId}`]() to track the task's status.

### Delete an Essentials subscription

Use [`DELETE /v1/fixed/subscriptions/{subscriptionId}`]() to delete a subscription.

```sh
DELETE "https://[host]/v1/fixed/subscriptions/{subscriptionId}"
```
The response body contains the `taskId` for the task that deletes the subscription. You can use [`GET /v1/tasks/{taskId}`]() to track the task's status.

## Redis Cloud Pro

### Create a Pro subscription

Use [`POST /v1/subscriptions`]() to create a Pro subscription.

```sh
POST "https://[host]/v1/subscriptions"
{
    "name": "Basic Subscription Example",
    "paymentMethodId": <payment_id>,
    "cloudProviders": [
        {
            "provider": "AWS",
            "regions": [
                {
                    "region": "us-east-1",
                    "networking": {
                        "deploymentCIDR": "10.0.1.0/24"
                    }
                }
            ]
        }
    ],
    "databases": [
        {
            "name": "Redis-database-example",
            "protocol": "redis",
            "datasetSizeInGb": 1
        }
    ]
}
```

Modify the following parameters in the sample JSON document to create a subscription on your own account:

- **`paymentMethodId`** - Specify a payment method connected to your account.

    Use [`GET /v1/payment-methods`]() to find a payment method ID.

    You don't need to pass this field in your API request if you subscribed to Redis Cloud through a marketplace integration.

The request JSON body contains two primary segments: subscription specification and databases specification. When you create a subscription, you must specify one or more databases in the "`databases`" array. 

There are many additional parameters and settings that can be defined on subscription and database creation. Review the subscription parameters and options in the [Full API documentation]().

The response body contains the `taskId` for the task that creates the subscription. You can use [`GET /v1/tasks/{taskId}`]() to track the task's status.

### Update a Pro subscription

Use [`PUT /v1/subscriptions/{subscriptionId}`]() to update a Pro subscription.

```sh
PUT "https://[host]/v1/subscriptions/{subscriptionId}"
{
    "name": "new-subscription-name",
    "paymentMethodId": <payment_id>
}
```

You can only change the following settings with this endpoint:
- **`name`** - Specify a new name for your subscription.

- **`paymentMethodId`** - Specify a different payment method connected to your account.

    Use [`GET /v1/payment-methods`]() to find a payment method ID.

The response body contains the `taskId` for the task that updates the subscription. You can use [`GET /v1/tasks/{taskId}`]() to track the task's status.

### Delete a Pro subscription

Use [`DELETE /v1/subscriptions/{subscriptionId}`]() to delete a subscription.

```sh
DELETE "https://[host]/v1/subscriptions/{subscriptionId}"
```
The response body contains the `taskId` for the task that deletes the subscription. You can use [`GET /v1/tasks/{taskId}`]() to track the task's status.
