---
title: View and edit data pipeline
url: https://redis.io/docs/latest/operate/rc/databases/rdi/view-edit/
retrieved_utc: '2026-04-09T20:45:53.004217+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rc/databases/rdi/view-edit/index.html.md
---

# View and edit data pipeline

```json metadata
{
  "title": "View and edit data pipeline",
  "description": "Observe and change your data pipeline.",
  "categories": ["docs","operate","rc"],
  "tableOfContents": {"sections":[{"id":"edit-data-pipeline","title":"Edit data pipeline"},{"id":"view-metrics-endpoints","title":"View metrics endpoints"},{"id":"reset-data-pipeline","title":"Reset data pipeline"},{"id":"stop-and-restart-data-pipeline","title":"Stop and restart data pipeline"},{"id":"delete-pipeline","title":"Delete pipeline"}]}

,
  "codeExamples": []
}
```
Use the **Data pipeline** tab in your database to view and edit your data pipeline.

The **Data pipeline** tab gives an overview of your data pipeline and lets you view your data stream metrics. 



The **Status** table shows statistics for the whole data pipeline: 
- **Status**: The status of the data pipeline. Possible statuses include:
    | Status | Description |
    |--------|-------------|
    | **Initial Sync** | The data pipeline is ingesting all records from the source database into the target database. |
    | **Streaming** | The data pipeline is capturing new changes from the source database as they happen. Changes in the source database are added to the target database within a few seconds. |
    | **Stopped**| The data pipeline has been [stopped](#stop-and-restart-data-pipeline). |
    | **Error** | There is an error in the data pipeline. [Reset the pipeline](#reset-data-pipeline) and contact support if the issue persists. |
- **Total ingested**: Total number of records ingested from the source database.
- **Total inserted**: Total number of records inserted into the target database.
- **Total filtered**: Total number of records filtered from being inserted into the target database.
- **Total rejected**: Total number of records that could not be parsed or inserted into the target database.

The **Data stream metrics** table shows the following metrics for each data stream:
| Metric | Description |
|--------|-------------|
| **Name** | Name of the data stream. Each stream corresponds to a table from the source database.  |
| **Total** | Total number of records that arrived from the source table. |
| **Pending** | Number of records from the source table that are waiting to be processed. |
| **Inserted** | Number of new records from the source table that have been written to the target database. |
| **Updated** | Number of updated records from the source table that have been updated in the target database. |
| **Deleted** | Number of deleted records from the source table that have been deleted in the target database. |
| **Filtered** | Number of records from the source table that were filtered from being inserted into the target database. |
| **Rejected** | Number of records from the source table that could not be parsed or inserted into the target database. |

## Edit data pipeline

To change the data you want to ingest from the data pipeline:

1. From the **Data pipeline** tab, select **Edit**.

    

1. Select the Schema and Tables you want to migrate to the target database from the list. 
    

    Select **Manage Columns** to choose which columns you want to import.

    

    You can select any number of columns from a table.

    

    If any tables are missing a unique constraint, a warning will appear in the **Data modeling** section. Select **Manage columns** to select the columns that define a unique constraint for those tables.

    Select **Save** to save your column changes and go back to schema selection.

    

    Select **Add schema** to add more database schemas.

    
    
    Select **Delete** to delete a schema. You must have at least one schema to continue.

    

    After you've selected the schemas and tables you want to sync, select **Continue**.

     
    
1. Select the Redis data type to write keys to the target. You can choose **Hash** or **JSON** if the target database supports JSON. 
    

    You can also supply one or more [transformation job files]() that specify how you want to transform the captured data before writing it to the target. Select **Upload jobs** to upload your job files.

    

    When you upload job files, Redis Cloud will validate the job files to check for errors. 

    Select **Continue**.
    

1. In the **Advanced properties** section, you can add any processor properties to control how the data is processed. See the [RDI configuration file reference]() for all available processor properties.

    

    Select **Continue**.
    

1. Review the tables you selected in and select how you want to update the data pipeline:

    

    - **Apply to new data changes only**: The data pipeline will only synchronize new updates to the schema and tables selected. The data pipeline will not ingest any data from new schemas or tables that are selected.
    - **Reset pipeline (re-process all data)**: The data pipeline will re-ingest all of the selected data.
    - **Flush cached data and reset pipeline**: The data pipeline will flush the target Redis database, and then re-ingest all of the selected data from the source database.

1. Select **Apply changes**.

    

At this point, the data pipeline will apply the changes. If you selected **Reset pipeline** or **Flush cached data and reset pipeline**, the data pipeline will ingest data from the source database to the target database. After this initial sync is complete, the data pipeline enters the *change streaming* phase, where changes are captured as they happen.

If you selected **Apply to new data changes only**, the data pipeline will enter the *change streaming* phase without ingesting data.

## View metrics endpoints

You can use [Prometheus and Grafana]() to track and display metrics for the data pipeline. 

To view the metrics endpoints for the source collector and pipeline processor, go to the **Data pipeline** tab and select **More actions**, and then **Show metrics**. You can add these endpoints as Prometheus targets to start tracking your RDI metrics.

Prometheus endpoints are exposed on Redis Cloud's internal network. To access this network, enable [VPC peering]() or [AWS Transit Gateway](). See [Prometheus and Grafana with Redis Cloud]() for more information.

For more information about available RDI metrics, see [Observability]().

## Reset data pipeline

Resetting the data pipeline creates a new baseline snapshot from the current state of your source database, and re-processes the data from the source database to the target Redis database. You may want to reset the pipeline if the source and target databases were disconnected or you made large changes to the data pipeline.

To reset the data pipeline and restart the ingest process:

1. From the **Data pipeline** tab, select **More actions**, and then **Reset pipeline**.

1. If you want to flush the database, check **Flush target database**. 

1. Select **Reset data pipeline**.

At this point, the data pipeline will re-ingest data from the source database to your target Redis database.

## Stop and restart data pipeline

To stop the data pipeline from synchronizing new data:

1. From the **Data pipeline** tab, select **More actions**, and then **Stop pipeline**.

1. Select **Stop data pipeline** to confirm.

Stopping the data pipeline will suspend data processing. To restart the pipeline from the **Data pipeline** tab, select **More actions**, and then **Start pipeline**.

## Delete pipeline

To delete the data pipeline:

1. From the **Data pipeline** tab, select **More actions**, and then **Delete pipeline**.

1. Select **Delete data pipeline** to confirm.

Deleted data pipelines cannot be recovered.