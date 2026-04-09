---
title: Delete a subscription
url: https://redis.io/docs/latest/operate/rc/subscriptions/delete-subscription/
retrieved_utc: '2026-04-09T20:45:57.813701+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rc/subscriptions/delete-subscription/index.html.md
---

# Delete a subscription

```json metadata
{
  "title": "Delete a subscription",
  "description": "",
  "categories": ["docs","operate","rc"],
  "tableOfContents": {"sections":[]}

,
  "codeExamples": []
}
```

Once a subscription is deleted, it cannot be recovered. We recommend [backing up your data]() before removing databases or subscriptions.


To delete a subscription:

1.  [Delete all databases]() from the subscription.

    The number of databases for the subscription is shown in the subscription list. You cannot delete a subscription until there are zero databases in the subscription.

    

2.  View the subscription details.  

    If you have more than one subscription, select the target subscription from the subscription list.

3.  Select the **Overview** tab.

    

4.  Select the **Delete subscription** button.

    

    


5.  Select the **Delete subscription** button to confirm your choice.
