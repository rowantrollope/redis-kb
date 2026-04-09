---
title: Data types for Active-Active databases
url: https://redis.io/docs/latest/operate/rs/databases/active-active/develop/data-types/
retrieved_utc: '2026-04-09T20:46:00.284444+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/databases/active-active/develop/data-types/index.html.md
---

# Data types for Active-Active databases

```json metadata
{
  "title": "Data types for Active-Active databases",
  "description": "Introduction to differences in data types between standalone and Active-Active Redis databases.",
  "categories": ["docs","operate","rs","rc"],
  "tableOfContents": {"sections":[]}

,
  "codeExamples": []
}
```

Active-Active databases use conflict-free replicated data types (CRDTs). From a developer perspective, most supported data types work the same for Active-Active and standard Redis databases. However, a few methods also come with specific requirements in Active-Active databases.

Even though they look identical to standard Redis data types, there are specific rules that govern the handling of
conflicting concurrent writes for each data type.

As conflict handling rules differ between data types, some commands have slightly different requirements in Active-Active databases versus standard Redis databases.

See the following articles for more information.

