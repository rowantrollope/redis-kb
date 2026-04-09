---
title: Create an Active-Active database
url: https://redis.io/docs/latest/operate/rc/databases/active-active/create-active-active-database/
retrieved_utc: '2026-04-09T20:45:53.113653+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rc/databases/active-active/create-active-active-database/index.html.md
---

# Create an Active-Active database

```json metadata
{
  "title": "Create an Active-Active database",
  "description": "Shows how to create an Active-Active database",
  "categories": ["docs","operate","rc"],
  "tableOfContents": {"sections":[{"children":[{"id":"set-up-deployment-details","title":"Set up deployment details"},{"id":"sizing-tab","title":"Sizing tab"},{"id":"review-and-create-tab","title":"Review and Create tab"}],"id":"create-an-active-active-database","title":"Create an Active-Active database"},{"id":"more-info","title":"More info"}]}

,
  "codeExamples": []
}
```
Active-Active databases store data across multiple regions and availability zones.  This improves scalability, performance, and availability, especially when compared to standalone databases. See [Active-Active Redis]() for more information.

To deploy Active-Active databases in Redis Cloud, you need a Redis Cloud Pro plan that enables Active-Active Redis and defines the regions for each copy of your databases.

Active-Active databases consist of multiple copies (also called _instances_) deployed to different regions throughout the world.

This reduces latency for local users and improves availability should a region fail.

Redis Cloud maintains consistency among instances in the background; that is, each copy eventually includes updates from every region.  As a result, memory limit and throughput increase.

## Create an Active-Active database



3. Select the type of [subscription]() you need. For this guide, select **Pro**. 

    

    
This guide shows how to create an Active-Active database with a new Pro subscription. If you already have an Active-Active subscription and want to add a database to it, see [Create a Pro database in an existing subscription](). Active-Active subscriptions can host a maximum of 10 databases.
    
    

After you select **Pro**, the **Database settings** section will appear.



For this guide, select **Custom settings**. For an Active-Active database, you will need to: 

1. Set up the deployment options, including cloud vendor and region details for each instance.

2. Define the database size requirements.

3. Review your choices, provide payment details, and then create your databases.

The following sections provide more information.

### Set up deployment details

The **Setup** tab specifies general settings for your Redis deployment.



There are two sections on this tab:

- [General settings](#general-settings) include the cloud provider details and specific configuration options.
- [Advanced options](#advanced-options) define settings for high availability and security. Configurable settings vary according to cloud provider.

#### General settings {#general-settings}

Select **Active-Active (Multi-region)** to turn on Active-Active. 



When you enable Active-Active Redis, two regions are selected by default. Select the drop-down arrow to display a list of provider regions that support Active-Active databases.




Active-Active subscriptions on Redis Cloud are limited to a maximum of 10 regions.


Use the checkboxes in the list to select or remove regions.  The Search box lets you locate specific regions.

You can use a region's Remove button to remove it from the list.



#### Advanced options {#advanced-options}



In the **Advanced options** section, you can:

- Choose to deploy your Active-Active database to an existing Cloud Account, if [Redis Cloud Bring your own Cloud]() is enabled.
    
- Define CIDR addresses for each region in the **VPC configuration** section.

    
    
    If you chose to deploy your Active-Active database to an existing [Bring your own Cloud]() account, you can also define the VPC ID for each region. Select **In existing VPC** and the set the VPC ID for each selected region.
    
- Set your [maintenance]() settings in the **Maintenance windows** section. Select **Manual** if you want to set [manual maintenance windows]().


Multi-AZ replication is required for all Active-Active databases.


When finished, choose **Continue** to determine your size requirements.



### Sizing tab

The **Sizing** tab helps you specify the database, memory, and throughput requirements for your subscription.



When you first visit the **Sizing** tab, there are no databases defined.  Select the **Add** button to create one.



This opens the **Database configurations** dialog, which lets you define the requirements for your new database.



By default, you're shown basic settings, which include:

- **Name**: A custom name for your database.
- **Version**: The Redis version for your database. We recommend you choose the latest available version. 
- **Advanced Capabilities**: Advanced data types or features used by the database. Active-Active databases support the [JSON]() data type and [Search and query]() features.

      

    For Redis versions prior to 8.0, we select both capabilities for you automatically. You can remove a capability by clicking on it while selected. Selected capabilities will be available in all regions, including those added in the future.

    Starting with Redis 8.0, JSON and Search and query are included by default.

    See [Search and query Active-Active databases]() to learn how to use Search and query on Active-Active databases.

- **Dataset size**: The amount of data needed for your dataset in GB. 

    For Search and query databases, use the [Sizing calculator](https://redis.io/redisearch-sizing-calculator/) to estimate your index size and throughput requirements. When you're entering the dataset size for your database, add the estimated index size from the Sizing calculator to your expected dataset size.

- **Hashing policy**: Determines how data is distributed across multiple Redis processes of a database. Available options depend on your account creation date. See [Clustering]() for more information.

- **Throughput**: When you create an Active-Active database, you define the throughput for each instance. The total operations per second combines the total read ops/sec and applies the write ops/sec for each region across every region. 

    

    The total ops/sec for each region is calculated as follows:

    ```sh
    Region ops/sec = Local read ops/sec + 
                    Sum of write ops/sec from all regions
    ```

    The total ops/sec for the database is the sum of the ops/sec for each region.
    
    Because each instance needs the ability to write to every other instance, write operations significantly affect the total number of ops/sec. 

    Select a tab to see examples of throughput calculations for different Active-Active configurations.

    **Two regions, balanced between regions:**

For this database, we have two regions where read and write operations are balanced between the regions, as described in the table below:

| Region | Local read ops/sec | Local write ops/sec | 
|:------:|:------------------:|:-------------------:|
| Region 1 | 2000 | 1000 |
| Region 2 | 2000 | 1000 |

The total ops/sec for this database is calculated as follows:

```text
Region 1 ops/sec = 2000 (local read) + 
                   1000 (local write) + 
                   1000 (write from Region 2) = 4000 ops/sec

Region 2 ops/sec = 2000 (local read) + 
                   1000 (local write) + 
                   1000 (write from Region 1) = 4000 ops/sec

Total ops/sec = 4000 (Region 1) + 4000 (Region 2) 
              = 8000 ops/sec
```

**Two regions, read/write heavy in one region:**

For this database, we have two regions where one region has more read and write operations than the other region, as described in the table below:

| Region | Local read ops/sec | Local write ops/sec | 
|:------:|:------------------:|:-------------------:|
| Region 1 | 2000 | 1000 |
| Region 2 | 4000 | 2000 |

The total ops/sec for this database is calculated as follows:

```text
Region 1 ops/sec = 2000 (local read) + 
                   1000 (local write) + 
                   2000 (write from Region 2) = 5000 ops/sec

Region 2 ops/sec = 4000 (local read) + 
                   2000 (local write) + 
                   1000 (write from Region 1) = 7000 ops/sec

Total ops/sec = 5000 (Region 1) + 7000 (Region 2) 
              = 12000 ops/sec
```

**Three regions, balanced between regions:**

For this database, we have three regions where read and write operations are balanced between the regions, as described in the table below:

| Region | Local read ops/sec | Local write ops/sec | 
|:------:|:------------------:|:-------------------:|
| Region 1 | 2000 | 1000 |
| Region 2 | 2000 | 1000 |
| Region 3 | 2000 | 1000 |

The total ops/sec for this database is calculated as follows:

```text
Region 1 ops/sec = 2000 (local read) + 
                   1000 (local write) + 
                   1000 (write from Region 2) +
                   1000 (write from Region 3) = 5000 ops/sec

Region 2 ops/sec = 2000 (local read) + 
                   1000 (local write) + 
                   1000 (write from Region 1) +
                   1000 (write from Region 3) = 5000 ops/sec

Region 3 ops/sec = 2000 (local read) + 
                   1000 (local write) + 
                   1000 (write from Region 1) +
                   1000 (write from Region 2) = 5000 ops/sec

Total ops/sec = 5000 (Region 1) + 5000 (Region 2) + 5000 (Region 3) 
              = 15000 ops/sec
```

**Three regions, different read/write in each region:**

For this database, we have three regions where read and write operations are different between the regions, as described in the table below:

| Region | Local read ops/sec | Local write ops/sec | 
|:------:|:------------------:|:-------------------:|
| Region 1 | 3000 | 1000 |
| Region 2 | 4000 | 3000 |
| Region 3 | 1000 | 2000 |

The total ops/sec for this database is calculated as follows:

```text
Region 1 ops/sec = 3000 (local read) + 
                   1000 (local write) + 
                   3000 (write from Region 2) +
                   2000 (write from Region 3) = 9000 ops/sec

Region 2 ops/sec = 4000 (local read) + 
                   3000 (local write) + 
                   1000 (write from Region 1) +
                   2000 (write from Region 3) = 10000 ops/sec

Region 3 ops/sec = 1000 (local read) + 
                   2000 (local write) + 
                   1000 (write from Region 1) +
                   3000 (write from Region 2) = 7000 ops/sec

Total ops/sec = 9000 (Region 1) + 10000 (Region 2) + 7000 (Region 3) 
              = 26000 ops/sec
```



    For Search and query databases, the estimated throughput from the [Sizing calculator](https://redis.io/redisearch-sizing-calculator/) is the total amount of throughput you need. When setting throughput for your Active-Active database, use the total amount for each region and divide it depending on your read (query) and write (update) needs for each region. For example, if the total amount of throughput needed is 50000 ops/sec, you could set each region to have 20000 ops/sec for reads (queries) and 30000 ops/sec for writes (updates).

- **Data Persistence**: Defines the data persistence policy, if any. See [Database persistence]().
- **Supported Protocol(s)**: Choose between RESP2 and RESP3 _(Redis 7.2 or later)_. See [Redis serialization protocol](#resp-versions) for details.
- **Quantity**: Number of databases to create with these settings. 

When finished, select **Save configuration** to save your database configuration.



Use the **Add database** button to define additional databases or select the **Continue button** to display the **Review and create** tab.

Hover over a database to see the **Edit** and **Delete** icons. You can use the **Edit** icon to change a database or the **Delete** icon to remove a database from the list.

&nbsp;


### Review and Create tab

The **Review and Create** tab provides a cost estimate for your Redis Cloud Pro plan:



Redis breaks down your databases to Redis Billing Units (RBUs), each with their own size and throughput requirements. For more info, see [Billing unit types](#billing-unit-types).

The **Payment methods** section of this tab shows which payment method you're using for this database. Select the arrow on the top right of this section to view all available payment methods.



If you have not added a payment method or want to add a new payment method, select **Add credit card** to add a new credit card.



Select **Back to Sizing** to make changes or **Confirm & Pay** to create your databases.



Note that databases are created in the background.  While they are provisioning, you aren't allowed to make changes. This process generally takes 10-15 minutes.

Use the **Database list** to check the status of your databases.

## More info

- [Create a Pro database with a new subscription]()
- [Active-Active Redis]()
- [Develop applications with Active-Active databases]()
- Database [memory limit]()
- Redis Cloud [subscription plans]()
- [Redis Cloud pricing](https://redis.io/pricing/#monthly)

