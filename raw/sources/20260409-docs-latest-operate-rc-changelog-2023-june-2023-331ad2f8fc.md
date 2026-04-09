---
title: Redis Cloud changelog (June 2023)
url: https://redis.io/docs/latest/operate/rc/changelog/2023/june-2023/
retrieved_utc: '2026-04-09T20:45:59.887592+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rc/changelog/2023/june-2023/index.html.md
---

# Redis Cloud changelog (June 2023)

```json metadata
{
  "title": "Redis Cloud changelog (June 2023)",
  "description": "New features, enhancements, and other changes added to Redis Cloud during June 2023.",
  "categories": ["docs","operate","rc"],
  "tableOfContents": {"sections":[{"children":[{"id":"redis-72-fixed-opt-in","title":"Redis 7.2 fixed opt-in"},{"id":"export-database-list-to-csv-includes-active-active","title":"Export database list to CSV includes Active-Active"}],"id":"new-features","title":"New features"},{"children":[{"id":"known-limitations","title":"Known limitations"}],"id":"breaking-changes","title":"Breaking changes"},{"id":"deprecations","title":"Deprecations"}]}

,
  "codeExamples": []
}
```
This changelog lists new features, enhancements, and other changes added to Redis Cloud during June 2023.

## New features

### Redis 7.2 fixed opt-in

You can opt in to Redis 7.2 on [Fixed subscriptions]() in selected regions in AWS and GCP. Redis 7.2 introduces several changes to existing Redis commands; see the [list of breaking changes](#redis-72-breaking-changes) for more details.

### Export database list to CSV includes Active-Active

Your Active-Active databases will now appear in the database list when you export it to a CSV file. To support this, we added a "Region" column to differentiate between  Active-Active databases with the same name.

To export your database list to a CSV file, select **Export all** on the **Databases** screen.

## Breaking changes



### Known limitations





## Deprecations

- [`CLUSTER SLOTS`]() is deprecated as of Redis 7.0
- [`QUIT`]() is deprecated as of Redis 7.2

