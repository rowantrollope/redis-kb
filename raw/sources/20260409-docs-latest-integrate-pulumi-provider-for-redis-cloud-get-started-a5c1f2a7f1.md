---
title: Get started with Pulumi
url: https://redis.io/docs/latest/integrate/pulumi-provider-for-redis-cloud/get-started/
retrieved_utc: '2026-04-09T20:46:04.398787+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/integrate/pulumi-provider-for-redis-cloud/get-started/index.html.md
---

# Get started with Pulumi

```json metadata
{
  "title": "Get started with Pulumi",
  "description": "Shows how to install the Redis Cloud Pulumi provider and create a subscription.",
  "categories": ["docs","integrate","rc"],
  "group": "provisioning",
  "tableOfContents": {"sections":[{"id":"prerequisites","title":"Prerequisites"},{"id":"install-the-pulumi-provider-files","title":"Install the Pulumi provider files"},{"id":"deploy-resources-with-pulumi","title":"Deploy resources with Pulumi"},{"id":"more-info","title":"More info"}]}

,
  "codeExamples": []
}
```
Here, you'll learn how to use the [Redis Cloud Pulumi provider]() to create a Redis Cloud Pro subscription and a database using Python.

## Prerequisites

1. [Install Pulumi](https://www.pulumi.com/docs/install/) and [create a Pulumi account](https://app.pulumi.com/signin) if you do not have one already.

1. [Create a Redis Cloud account]() if you do not have one already.

1. [Enable the Redis Cloud API]().

1. Get your Redis Cloud [API keys]().

## Install the Pulumi provider files

1.  In your Python project, create an empty folder. From this folder, run `pulumi new rediscloud-python`.

1. Log into Pulumi using your [Pulumi access token](https://app.pulumi.com/account/tokens) if prompted.

1.  Enter a project name, description, and stack name.

1.  Enter your Redis Cloud access and secret keys.

1.  Enter the credit card type (Visa, Mastercard) on file with your Redis Cloud account.

1.  Enter the last four numbers of the card on file with your Redis Cloud account.

Once these steps are completed, the dependencies needed for the project will be installed and a Python virtual environment will be created.

## Deploy resources with Pulumi

The Pulumi Python project includes three main files:

- `pulumi.yaml` : A metadata file which is used to help configure the Python runtime environment.

- `pulumi.YOUR_PROJECT_NAME.yaml`: Contains the information related to the Cloud API access and secret key, credit card type and last 4 digits.

- `__main__.py`: A Pulumi template file that creates a Redis Cloud Pro subscription. Use this template file as a starting point to create the subscription with a cloud provider and define specifications for the database (this includes memory, throughput, Redis advanced capabilities, and other information).

To deploy the resources described in `__main__.py`, run `pulumi up`. This will take some time. You will be able to see your subscription being created through the [Redis Cloud console](https://cloud.redis.io/).

If you want to remove these resources, run `pulumi down`.

## More info

- [Redis Cloud Pulumi registry](https://www.pulumi.com/registry/packages/rediscloud/)
- [Pulumi documentation](https://www.pulumi.com/docs/)
