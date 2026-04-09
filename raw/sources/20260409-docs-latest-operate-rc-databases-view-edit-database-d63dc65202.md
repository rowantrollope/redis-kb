---
title: View and edit databases
url: https://redis.io/docs/latest/operate/rc/databases/view-edit-database/
retrieved_utc: '2026-04-09T20:45:55.237289+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rc/databases/view-edit-database/index.html.md
---

# View and edit databases

```json metadata
{
  "title": "View and edit databases",
  "description": "",
  "categories": ["docs","operate","rc"],
  "tableOfContents": {"sections":[{"children":[{"id":"general-settings","title":"General settings"},{"id":"performance-section","title":"Performance section"},{"id":"durability-section","title":"Durability section"},{"id":"security-section","title":"Security section"},{"id":"alerts-section","title":"Alerts section"},{"id":"danger-zone","title":"Danger zone"}],"id":"configuration-tab","title":"Configuration tab"},{"id":"other-actions-and-info","title":"Other actions and info"},{"id":"edit-database-details","title":"Edit database details"},{"id":"manage-the-database-list","title":"Manage the database list"}]}

,
  "codeExamples": []
}
```
Use the **Databases** menu of the Redis Cloud console to manage your databases.

To view the details of a database:

1. Sign in to the [Redis Cloud console](https://cloud.redis.io/).  (Create an account if you don't already have one.)

2. Select the **Databases** menu to display a [searchable list of all databases](#manage-the-database-list).
 
3. Locate the database in the list.

4. Select the database name to open the **Database** page.

    

The **Database** screen lets you review:
- Configuration details of a database
- Graphs showing performance metrics
- Recent activity via a "[slowlog]()," which lists queries that exceed a certain execution time.

For help changing database settings, see [Edit database details](#edit-database-details).

## Configuration tab

The **Configuration** screen is divided into sections, each dedicated to a specific category.  Note that not every section or setting is available to every [subscription plan]().

### General settings

The **General** section defines basic properties about your database.

The available settings vary according to your plan, cloud provider, and design choices.  For example, if you do not select an Advanced Capability when creating a database, the **Advanced Capabilities** setting is not displayed when you view its configuration details.

| Setting name              | Description                                                                                                                                                 |
|:--------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Database Name**         | The name given to your database                                                                                                                             |
| **Subscription Name**     | The name for the subscription your database is a part of                                                                                                    |
| **Public endpoint**       | Public URI used by any application or client to access the database. Redis Cloud Pro databases can [block the public endpoint]().                                                  |
| **Private endpoint**      | Private endpoint URI available to approved clients; use CIDR allow list, VPC peering, or other connectivity options to enable access. (_Redis Cloud Pro only_) |
| **Tags**                  | A list of the [tags]() associated with the database. Select [Manage tags]() to manage the database tags. |
| **Vendor**                | The Cloud vendor hosting your database: AWS, Google Cloud, or Azure.                                                   |
| **Region**                | The Cloud vendor region hosting your database                                                  |
| **Type**                  | Displays 'Redis', 'Redis Stack' or 'memcached' based on the value selected when the database was created                                                    |
| **Redis version**         | Redis version of the database                                                                                                                  |
| **Auto Tiering**          | Checked when the subscription supports Auto Tiering (_Redis Cloud Pro only_)                                                               |
| **Active-Active Redis**   | Checked when the database is part of an [Active-Active]() relationship (_Redis Cloud Pro only_)                                                                                         |
| **Creation time**         | Date and time the database was created                                                                                                                      |
| **Last changed**          | Date and time of last update                                                                                                                                |
| **Supported Protocol(s)** | Shows which version of RESP the database uses. See [Redis serialization protocol](#resp-versions) for details |
| **Advanced Capabilities**  | This setting appears when an [advanced capability]() is enabled for a database                                                  |

### Performance section

The **Performance** section describes the memory size, throughput, and hashing policy for a database.



| Setting name          |Description|
|:----------------------|:----------|
| **Dataset size** | Maximum size (in GB) for your dataset. See [Dataset size]().  |
| **Throughput**        | Defines [throughput]() in terms of maximum operations per second for the database (_Redis Cloud Pro only_). |
| **Memory used**       | Memory currently used for your database.  |
| **High availability**    | Replicates your data across multiple nodes; [available options]() depend on your plan type  |
| **Hashing policy**    | Defines the [hashing policy]() (_Redis Cloud Pro only_).  |
| **OSS Cluster API**       | Enables the [Cluster API]() for a database (_Redis Cloud Pro only_).<br/><br/>When this option is enabled, you cannot define a custom hashing policy.|

To learn more about these settings and when to use them, see [Sizing]() and [Database clustering]().

### Durability section

The Durability section helps protect your data when problems occur.  These settings define replication, persistence, backup, and eviction policies.



| Setting name             | Description                                                                                                                                                     |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Data persistence**     | Defines whether (and how) data is saved to disk; [available options]() depend on your plan type |
| **Data eviction policy** | Configures which [policy]() is applied when your database reaches its memory limit        |
| **Remote backup**        | When enabled, identifies a location and interval for [data backups](). (_Paid plans only_)                |
| **Active-Passive Redis** | When enabled, identifies a path to the [linked database](). (_Redis Cloud Pro only_)                                                               |

### Security section

The **Security** section helps you control access to your database.



|Setting name| Description                                                                                                                                                                    |
|:-----------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Default user** | When enabled, permits access using a simple password                                                                                                                           |
| **Default user password** | Password for default user. A default password is assigned to the database on creation and may be updated. If you [block the public endpoint](), you can also turn on passwordless authentication for the default user here.  |
| **CIDR allow list** | [Allow list]() of IP addresses/security groups permitted to access the database. (_Paid plans only_)                    |
| **Transport layer security (TLS)** | Enables [transport layer security]() (TLS) encryption for database access. (_Pro plans only_)  |

### Alerts section


The **Alerts** section defines notification emails sent to your account and the conditions that trigger them.



The available alerts vary according to the plan type. See [Configure alerts]() for more information.

### Danger zone

Actions in the **Danger Zone** are permanent and should not be taken lightly.



Here, you can:

- Delete the database. Databases must be active before they can be deleted.  To learn more, see [Delete a database]().
- Flush the database (_Active-Active databases only_).

For best results, we recommend [backing up data]() before any danger zone actions.

## Other actions and info

The **View Database** screen also has tabs that let you view:

- **Metrics**: a series of graphs showing database performance over time.  See [Monitor performance]() for more information.

- **Slowlog**: a log showing recent [slow queries]() run against your database.  The log displays when the action started, the duration, the complexity of the operation, and any parameters passed to the operation.


## Edit database details

Use the **Edit** button to edit database details.



Because databases exist within the context of a deployment, certain fields cannot be updated, especially those that might lead to data loss.

Here's what you can change:

| Section | Setting                        | Comments |
|:-----------|:-------------------------------|:---------|
| General | Database name                  ||
| | Supported protocol(s)                  ||
| | Tags                                   ||
| Performance | Dataset size                   | |
| | High-availability                     | _Paid plans only_ |
| | Throughput                     | _Pro plans only_ |
| | Hashing policy                 | _Pro plans only_ |
| | OSS Cluster API                | _Pro plans only_ |
| Durability | Data persistence                | _Paid plans only_ |
| | Data eviction policy           | |
| | Remote backup                  | _Paid plans only_ |
| | Active-Passive Redis           | _Pro plans only_ |
| Security | Default user                   | |
| | Default user password          |
| | CIDR allow list                | _Paid plans only_ |
| | Transport layer security (TLS) | _Pro plans only_ |
| Alerts | all available for plan type |

Choose **Save database** to save your changes.



If you need to change other details, create a new database and then migrate existing data.

## Manage the database list

The **Databases** list summarizes the status of all databases associated with your account.  

You can:

- Search by typing into the search box located above the database list.

    

- Filter by selecting a filter type and then selecting the checkbox next to the options you want to include from the dropdown.  Select the Filter toggle, located on the right of the search bar, if the filter types are hidden.

    

    You can filter the list on **Status**, **Subscription**, **Subscription Type**, **Capabilities**, **Options**, **Tags**, and **Version**.  

    A list of selected filters appears below the filter types.

    To remove a filter click the **x** to the right of the name of that filter.  To remove all filters, select **Clear all**.

    

- Select **Columns** to change what information is displayed on the list.

    

- Select the **Export** button to export the current view as a CSV file.

    

- Sort the list in descending or ascending order using the arrow displayed to right of the field name in the header.  Supported fields include **Subscription**, **Database name**, **Memory usage**, and **Version**.

     

    Select the arrow icon to change the sort order.  One sort order can be active at any given time.

- Use the controls in the list footer to change the number of items displayed in the list or to navigate.

Sort orders and filter expressions are not saved between console sessions.
