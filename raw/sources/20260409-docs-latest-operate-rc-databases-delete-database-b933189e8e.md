---
title: Delete database
url: https://redis.io/docs/latest/operate/rc/databases/delete-database/
retrieved_utc: '2026-04-09T20:45:57.536288+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rc/databases/delete-database/index.html.md
---

# Delete database

```json metadata
{
  "title": "Delete database",
  "description": "",
  "categories": ["docs","operate","rc"],
  "tableOfContents": {"sections":[]}

,
  "codeExamples": []
}
```
To delete a database, use the **Delete** button located in the **Danger zone** section of the database's **Configuration** tab.

Deleting a database requires the Account Owner role.

Deleted databases cannot be recovered.  We recommend [making a backup](), just in case.

1. Sign in to the [Redis Cloud console](https://cloud.redis.io/).

1.  Select the database from the list.  The **Configuration** tab is selected by default.

    

1.  Scroll to the **Danger zone**.

    

1.  Select the **Delete** button.

    

1. The **Delete database** confirmation dialog appears. If this database is the only one in the subscription, you can also delete the subscription at this time.
    
    - Select **Delete my subscription and stop my payment** to delete both the database and the subscription.
    
    - Clear **Delete my subscription and stop my payment** to delete the database but keep the subscription.

    
You will continue to be charged for your subscription until you delete it, even if there are no databases in your subscription.
    

    

1. Select **Delete database** to confirm your choice.

    


When the operation completes, the database and its data are deleted.
