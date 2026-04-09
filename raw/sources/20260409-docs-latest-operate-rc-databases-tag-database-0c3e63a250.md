---
title: Manage database tags
url: https://redis.io/docs/latest/operate/rc/databases/tag-database/
retrieved_utc: '2026-04-09T20:45:56.813754+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rc/databases/tag-database/index.html.md
---

# Manage database tags

```json metadata
{
  "title": "Manage database tags",
  "description": "",
  "categories": ["docs","operate","rc"],
  "tableOfContents": {"sections":[{"children":[{"id":"open-tag-manager-from-the-configuration-tab-configuration-tab","title":"Open tag manager from the Configuration tab {#configuration-tab}"},{"id":"open-tag-manager-from-the-database-list-database-list","title":"Open tag manager from the database list {#database-list}"},{"id":"use-the-tag-manager-tag-manager","title":"Use the tag manager {#tag-manager}"}],"id":"manage-tags","title":"Manage tags"}]}

,
  "codeExamples": []
}
```
Tags are key-value pairs that let you categorize your databases. You can create tags and add them to your databases to associate them with each other. Once you've added tags, you can filter your databases in the [database list]() or in the [cost report]() by tag key or value. 

## Manage tags

You can manage tags from the [Redis Cloud console](https://cloud.redis.io/#/) in the [tag manager](#tag-manager). You can find the tag manager in the following places: 

- [From your database in the **Configuration** tab](#configuration-tab)
- [From the database list](#database-list)

After you open the [tag manager](#tag-manager), you can use it to add, edit, or delete tags.

### Open tag manager from the Configuration tab {#configuration-tab}

To learn how to navigate to your database, see [View and edit databases](). Select the **Configuration** tab and go to the **General** section to view the tags that are set for your database.



Select **Manage Tags** to open the [tag manager](#tag-manager).



### Open tag manager from the database list {#database-list}

Using the database list allows you to manage tags for multiple databases without having to go into each database's **Tags** tab.

To get to the database list, select **Databases** from the main menu. 



Hover over the database and select **Manage tags**, or select **More actions** > **Manage tags** to open the [tag manager](#tag-manager).




### Use the tag manager {#tag-manager}

The tag manager shows any tags that are associated with the database and allows you to create, edit, or delete tags.





Select **Save tags** to save your changes.


