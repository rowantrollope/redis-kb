---
title: KeysOnlyReader
url: https://redis.io/docs/latest/operate/oss_and_stack/stack-with-enterprise/gears-v1/jvm/classes/readers/keysonlyreader/
retrieved_utc: '2026-04-09T20:45:58.578197+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/oss_and_stack/stack-with-enterprise/gears-v1/jvm/classes/readers/keysonlyreader/index.html.md
---

# KeysOnlyReader

```json metadata
{
  "title": "KeysOnlyReader",
  "description": "Gets key names from a database.",
  "categories": ["docs","operate","stack"],
  "tableOfContents": {"sections":[{"id":"constructors","title":"Constructors"},{"id":"parameters","title":"Parameters"},{"id":"output-records","title":"Output records"},{"id":"examples","title":"Examples"}]}

,
  "codeExamples": []
}
```
The `KeysOnlyReader` only extracts the key names from a database.

## Constructors

You can use one of these constructors to create a new `KeysOnlyReader` object:

```java
public KeysOnlyReader()

public KeysOnlyReader(int scanSize, String pattern)
```

## Parameters

| Name | Type | Default value | Description |
|------|------|---------------|-------------|
| pattern | string | "\*" (match all keys) | Get all keys that match this pattern |
| scanSize | integer | 10000 | The scan command's size limit |

## Output records

Each output record is a string that represents the key's name.

## Examples

Get all keys in the database:

```java
KeysOnlyReader reader = new KeysOnlyReader();
```

Only get keys that start with "user:":

```java
KeysOnlyReader reader = new KeysOnlyReader(1000, "user:*");
```

