---
title: crdb-cli crdb flush
url: https://redis.io/docs/latest/operate/rs/references/cli-utilities/crdb-cli/crdb/flush/
retrieved_utc: '2026-04-09T20:46:04.017885+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/references/cli-utilities/crdb-cli/crdb/flush/index.html.md
---

# crdb-cli crdb flush

```json metadata
{
  "title": "crdb-cli crdb flush",
  "description": "Clears all keys from an Active-Active database.",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[]}

,
  "codeExamples": []
}
```
Clears all keys from an Active-Active database.

```sh
crdb-cli crdb flush --crdb-guid <guid>
         [ --no-wait ]
```

This command is irreversible. If the data in your database is important, back it up before you flush the database.

### Parameters

| Parameter           | Value  | Description                         |
|---------------------|--------|-------------------------------------|
| crdb-guid  | string | The GUID of the database (required) |
| no-wait             |        | Does not wait for the task to complete |

### Returns

Returns the task ID of the task clearing the database.

If `--no-wait` is specified, the command exits. Otherwise, it will wait for the database to be cleared and return `finished`.

### Example

```sh
$ crdb-cli crdb flush --crdb-guid d84f6fe4-5bb7-49d2-a188-8900e09c6f66
Task 53cdc59e-ecf5-4564-a8dd-448d71f9e568 created
  ---> Status changed: queued -> started
  ---> Status changed: started -> finished
```
