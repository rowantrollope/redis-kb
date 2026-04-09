---
title: Writing to multiple keys
url: https://redis.io/docs/latest/integrate/redis-data-integration/data-pipelines/transform-examples/redis-writing-to-multiple-keys/
retrieved_utc: '2026-04-09T20:46:01.369476+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/integrate/redis-data-integration/data-pipelines/transform-examples/redis-writing-to-multiple-keys/index.html.md
---

# Writing to multiple keys

```json metadata
{
  "title": "Writing to multiple keys",
  "description": "",
  "categories": ["docs","integrate","rs","rdi"],
  "group": "di",
  "tableOfContents": {"sections":[]}

,
  "codeExamples": []
}
```
If you want to write results to multiple keys, you can do so by defining multiple `redis.write` subsections in the `output` section of the job file. Each instance of `redis.write` can specify a different key, data format, and other parameters. For example, you can create two different keys for the same data, one with a default key format and another with a custom key format and mapping.

```yaml
name: Write to multiple keys with different formats
output:
  - uses: redis.write
    with:
      # Setting data_type to JSON and using the default key format
      data_type: json

  - uses: redis.write
    with:
      data_type: json

      # Defining a custom key format
      key:
        language: jmespath
        expression: concat(['events-simplified:id:', id])

      # And defining a custom mapping
      mapping:
        - id: id
        - name: name
        - location: location
```
