---
title: PFDEBUG
url: https://redis.io/docs/latest/commands/pfdebug/
retrieved_utc: '2026-04-09T20:46:06.218156+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/pfdebug/index.html.md
---

# PFDEBUG

```json metadata
{
  "title": "PFDEBUG",
  "description": "Internal commands for debugging HyperLogLog values.",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"display_text":"subcommand","name":"subcommand","type":"string"},{"display_text":"key","key_spec_index":0,"name":"key","type":"key"}],
  "syntax_fmt": "PFDEBUG subcommand key",
  "complexity": "N/A",
  "group": "hyperloglog",
  "command_flags": ["write","denyoom","admin"],
  "acl_categories": ["@write","@hyperloglog","@admin","@slow","@dangerous"],
  "since": "2.8.9",
  "arity": 3,
  "key_specs": [{"RW":true,"access":true,"begin_search":{"spec":{"index":2},"type":"index"},"find_keys":{"spec":{"keystep":1,"lastkey":0,"limit":0},"type":"range"}}],
  "tableOfContents": {"sections":[]}

,
  "codeExamples": []
}
```The `PFDEBUG` command is an internal command.
It is meant to be used for developing and testing Redis.