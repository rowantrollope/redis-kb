---
title: Search and query commands
url: https://redis.io/docs/latest/operate/oss_and_stack/stack-with-enterprise/search/commands/
retrieved_utc: '2026-04-09T20:45:54.046353+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/oss_and_stack/stack-with-enterprise/search/commands/index.html.md
---

# Search and query commands

```json metadata
{
  "title": "Search and query commands",
  "description": "Lists search and query commands and provides links to the command reference pages.",
  "categories": ["docs","operate","stack"],
  "tableOfContents": {"sections":[]}

,
  "codeExamples": []
}
```
The following table lists search and query commands. See the command links for more information about each command's syntax, arguments, and examples.

| Command | Redis Software | Redis Cloud<br />Flexible & Annual | Redis Cloud<br />Free & Fixed | Description |
|:--------|:----------------------|:-----------------|:-----------------|:------|
| [FT.AGGREGATE]() | <span title="Supported">&#x2705; Supported</span> | <span title="Supported">&#x2705; Supported</span> | <span title="Supported">&#x2705; Supported</nobr></span> | Runs a search query on an index and groups, sorts, transforms, limits, and/or filters the results. |
| [FT.ALIASADD]() | <span title="Supported">&#x2705; Supported</span> | <span title="Supported">&#x2705; Supported</span> | <span title="Supported">&#x2705; Supported</nobr></span> | Adds an alias to an index.  |
| [FT.ALIASDEL]() | <span title="Supported">&#x2705; Supported</span> | <span title="Supported">&#x2705; Supported</span> | <span title="Supported">&#x2705; Supported</nobr></span> | Removes an alias from an index. |
| [FT.ALIASUPDATE]() | <span title="Supported">&#x2705; Supported</span> | <span title="Supported">&#x2705; Supported</span> | <span title="Supported">&#x2705; Supported</nobr></span> | Adds an alias to an index. If the alias already exists for a different index, it updates the alias to point to the specified index instead. |
| [FT.ALTER]() | <span title="Supported">&#x2705; Supported</span> | <span title="Supported">&#x2705; Supported</span> | <span title="Supported">&#x2705; Supported</nobr></span> | Adds a new field to an index. |
| [FT.CONFIG GET]() |  <span title="Not supported"><nobr>&#x274c; Not supported</span> | <span title="Not supported"><nobr>&#x26A0;&#xFE0F; Not supported</span><sup>[2](#table-note-2)</sup> | <span title="Not supported"><nobr>&#x274c; Not supported</nobr></span> | Displays configuration options. |
| [FT.CONFIG HELP]() |   <span title="Not supported"><nobr>&#x274c; Not supported</span> | <span title="Not supported"><nobr>&#x274c; Not supported</span> | <span title="Not supported"><nobr>&#x274c; Not supported</nobr></span> | Describes configuration options. |
| [FT.CONFIG SET]() | <span title="Not supported"><nobr>&#x26A0;&#xFE0F; Not supported</span><sup>[1](#table-note-1)</sup> | <span title="Not supported"><nobr>&#x26A0;&#xFE0F; Not supported</span><sup>[2](#table-note-2)</sup> | <span title="Not supported"><nobr>&#x274c; Not supported</nobr></span> | Sets configuration options. |
| [FT.CREATE]() | <span title="Supported">&#x2705; Supported</span> | <span title="Supported">&#x2705; Supported</span> | <span title="Supported">&#x2705; Supported</nobr></span> | Creates an index. |
| [FT.CURSOR DEL]() | <span title="Supported">&#x2705; Supported</span> | <span title="Supported">&#x2705; Supported</span> | <span title="Supported">&#x2705; Supported</nobr></span> | Deletes a cursor. |
| [FT.CURSOR&nbsp;READ]() | <span title="Supported">&#x2705; Supported</span> | <span title="Supported">&#x2705; Supported</span> | <span title="Supported">&#x2705; Supported</nobr></span> | Reads the next results from an existing cursor. |
| [FT.DICTADD]() | <span title="Supported">&#x2705; Supported</span> | <span title="Supported">&#x2705; Supported</span> | <span title="Supported">&#x2705; Supported</nobr></span> | Adds terms to a dictionary. |
| [FT.DICTDEL]() | <span title="Supported">&#x2705; Supported</span> | <span title="Supported">&#x2705; Supported</span> | <span title="Supported">&#x2705; Supported</nobr></span> | Deletes terms from a dictionary. |
| [FT.DICTDUMP]() | <span title="Supported">&#x2705; Supported</span> | <span title="Supported">&#x2705; Supported</span> | <span title="Supported">&#x2705; Supported</nobr></span> | Returns all terms in the specified dictionary. |
| [FT.DROPINDEX]() | <span title="Supported">&#x2705; Supported</span> | <span title="Supported">&#x2705; Supported</span> | <span title="Supported">&#x2705; Supported</nobr></span> | Deletes an index. |
| [FT.EXPLAIN]() | <span title="Supported">&#x2705; Supported</span> | <span title="Supported">&#x2705; Supported</span> | <span title="Supported">&#x2705; Supported</nobr></span> | Returns the execution plan for a complex query as a string. |
| [FT.EXPLAINCLI]() | <span title="Supported">&#x2705; Supported</span> | <span title="Supported">&#x2705; Supported</span> | <span title="Supported">&#x2705; Supported</nobr></span> | Returns the execution plan for a complex query as an [array](). |
| [FT.HYBRID]() | <span title="Supported">&#x2705; Supported</span> | <span title="Supported">&#x2705; Supported</span> | <span title="Supported">&#x2705; Supported</nobr></span> | Performs hybrid search combining text search and vector similarity with configurable fusion methods. |
| [FT.INFO]() | <span title="Supported">&#x2705; Supported</span> | <span title="Supported">&#x2705; Supported</span> | <span title="Supported">&#x2705; Supported</nobr></span> | Returns index information and statistics.  |
| [FT._LIST]() | <span title="Supported">&#x2705; Supported</span> | <span title="Supported">&#x2705; Supported</span> | <span title="Supported">&#x2705; Supported</nobr></span> | Lists all indexes. |
| [FT.PROFILE]() | <span title="Supported">&#x2705; Supported</span> | <span title="Supported">&#x2705; Supported</span> | <span title="Supported">&#x2705; Supported</nobr></span> | Runs [FT.SEARCH]() or [FT.AGGREGATE]() and reports performance information. |
| [FT.SEARCH]() | <span title="Supported">&#x2705; Supported</span> | <span title="Supported">&#x2705; Supported</span> | <span title="Supported">&#x2705; Supported</nobr></span> | Searches an index for a text query and returns matching documents or document IDs. |
| [FT.SPELLCHECK]() | <span title="Supported">&#x2705; Supported</span> | <span title="Supported">&#x2705; Supported</span> | <span title="Supported">&#x2705; Supported</nobr></span> | Suggests spelling corrections for misspelled terms in a query. |
| [FT.SYNDUMP]() | <span title="Supported">&#x2705; Supported</span> | <span title="Supported">&#x2705; Supported</span> | <span title="Supported">&#x2705; Supported</nobr></span> | Returns a list of synonym terms and their synonym group IDs. |
| [FT.SYNUPDATE]() | <span title="Supported">&#x2705; Supported</span> | <span title="Supported">&#x2705; Supported</span> | <span title="Supported">&#x2705; Supported</nobr></span> | Creates or updates a synonym group with additional terms. |
| [FT.TAGVALS]() | <span title="Supported">&#x2705; Supported</span> | <span title="Supported">&#x2705; Supported</span> | <span title="Supported">&#x2705; Supported</nobr></span> | Returns all distinct values indexed in a tag field. |

1. <a name="table-note-1" style="display: block; height: 80px; margin-top: -80px;"></a>Use [`rladmin`]() or the [REST API]() to change search and query configuration for Redis Software. See [search and query configuration compatibility with Redis Software]() for more information and examples.

2. <a name="table-note-2" style="display: block; height: 80px; margin-top: -80px;"></a>[Contact support](https://redis.com/company/support/) to view the current configuration values or request configuration changes for Flexible or Annual Redis Cloud subscriptions.
