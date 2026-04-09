---
title: Register events
url: https://redis.io/docs/latest/operate/oss_and_stack/stack-with-enterprise/gears-v1/register-events/
retrieved_utc: '2026-04-09T20:45:59.691633+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/oss_and_stack/stack-with-enterprise/gears-v1/register-events/index.html.md
---

# Register events

```json metadata
{
  "title": "Register events",
  "description": "Register RedisGears functions to run when certain events occur in a Redis database.",
  "categories": ["docs","operate","stack"],
  "tableOfContents": {"sections":[{"id":"register-on-events","title":"Register on events"},{"id":"event-types","title":"Event types"},{"id":"active-active-event-types","title":"Active-Active event types"}]}

,
  "codeExamples": []
}
```
You can register RedisGears functions to run when certain events occur in a Redis database.

## Register on events

To register RedisGears functions to run on an event, your code needs to:

1. Pass `KeysReader` to a `GearsBuilder` object.

1. Call the `GearsBuilder.register()` function.

1. Pass the `eventTypes` parameter to either:

    - The `register` function for Python.
    
    - The `KeysReader` object for Java.

For more information and examples of event registration, see:

- Java references:

    - [`KeysReader`]()

    - [`GearsBuilder.register()`]()

## Event types

For the list of event types you can register on, see the [Redis keyspace notification documentation](#events-generated-by-different-commands).

## Active-Active event types

In addition to standard Redis [events](#events-generated-by-different-commands), [Redis Software Active-Active databases]() also support the registration of RedisGears functions for the following event types:

- `change`: This event occurs when a key changes on another replica of the Active-Active database.
