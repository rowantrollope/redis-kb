---
title: Manage database tags
url: https://redis.io/docs/latest/operate/rs/databases/configure/db-tags/
retrieved_utc: '2026-04-09T20:45:55.338940+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/databases/configure/db-tags/index.html.md
---

# Manage database tags

```json metadata
{
  "title": "Manage database tags",
  "description": "Manage tags for databases in a Redis Software cluster.",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[{"id":"add-database-tags","title":"Add database tags"},{"id":"edit-database-tags","title":"Edit database tags"}]}

,
  "codeExamples": []
}
```
You can create custom tags to categorize databases in a Redis Software cluster. 

The **Databases** screen shows tags for each database in the list.



## Add database tags

You can add tags when you [create a database]() or [edit an existing database's configuration]().

To add tags to a database using the Cluster Manager UI:

1. While in edit mode on the database's configuration screen, click **Add tags**.

    

1. Enter a key and value for the tag. Keys and values previously used by existing tags will appear as suggestions.

    

1. To add additional tags, click **Add tag**.

1. After you finish adding tags, click **Done** to close the tag manager.

1. Click **Create** or **Save**.

## Edit database tags

To edit a database's existing tags using the Cluster Manager UI:

1. Go to the database's **Configuration** screen, then click **Edit**.

1. Next to the existing **Tags**, click .

    

1. Edit or delete existing tags, or click **Add tag** to add new tags.

1. After you finish editing tags, click **Done** to close the tag manager.

1. Click **Save**.
