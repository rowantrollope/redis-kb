---
title: Vector
url: https://redis.io/docs/latest/develop/ai/redisvl/api/vector/
retrieved_utc: '2026-04-09T20:45:36.759791+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/develop/ai/redisvl/api/vector/index.html.md
---

# Vector

```json metadata
{
  "title": "Vector",
  "description": "",
  "categories": null,
  "tableOfContents": {"sections":[{"children":[{"id":"class-vector-vector-fieldname-dtypefloat32-weight10","title":"class Vector(*, vector, field_name, dtype='float32', weight=1.0)"}],"id":"vector","title":"Vector"}]}

,
  "codeExamples": []
}
```

The Vector class in RedisVL is a container that encapsulates a numerical vector, itâs datatype, corresponding index field name, and optional importance weight. It is used when constructing multi-vector queries using the MultiVectorQuery class.

## Vector

### `class Vector(*, vector, field_name, dtype='float32', weight=1.0)`

Simple object containing the necessary arguments to perform a multi vector query.

Create a new model by parsing and validating input data from keyword arguments.

Raises [ValidationError][pydantic_core.ValidationError] if the input data cannot be
validated to form a valid model.

self is explicitly positional-only to allow self as a field name.

* **Parameters:**
  * **vector** (*List* *[* *float* *]*  *|* *bytes*)
  * **field_name** (*str*)
  * **dtype** (*str*)
  * **weight** (*float*)

#### `validate_vector()`

If the vector passed in is an array of float convert it to a byte string.

* **Return type:**
  *Self*

#### `model_config: ClassVar[ConfigDict] = {}`

Configuration for the model, should be a dictionary conforming to [ConfigDict][pydantic.config.ConfigDict].
