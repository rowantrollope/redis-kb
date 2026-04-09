---
title: Register
url: https://redis.io/docs/latest/operate/oss_and_stack/stack-with-enterprise/gears-v1/jvm/classes/gearsbuilder/register/
retrieved_utc: '2026-04-09T20:45:58.183708+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/oss_and_stack/stack-with-enterprise/gears-v1/jvm/classes/gearsbuilder/register/index.html.md
---

# Register

```json metadata
{
  "title": "Register",
  "description": "Registers the pipeline of functions to run when certain events occur.",
  "categories": ["docs","operate","stack"],
  "tableOfContents": {"sections":[{"id":"parameters","title":"Parameters"},{"id":"returns","title":"Returns"},{"id":"example","title":"Example"}]}

,
  "codeExamples": []
}
```
```java
public java.lang.String register()

public java.lang.String registerâ(ExecutionMode mode)

public java.lang.String registerâ(
    ExecutionMode mode, 
    gears.operations.OnRegisteredOperation onRegister, 
    gears.operations.OnUnregisteredOperation onUnregistered)
```

Registers the pipeline of functions to run when certain [events]() occur. The registered functions will run each time the event occurs.

Execution modes:

| Name | Description |
|------|-------------|
| ASYNC | Runs asynchronously on all of the shards. |
| ASYNC_LOCAL | Runs asynchronously but only on the current shard that generated the event. |
| SYNC | Runs synchronously only on the same shard that generated the event. |


If you call `register()` without specifying an execution mode, it will default to `ASYNC`. 


## Parameters

| Name | Type | Description |
|------|------|-------------|
| mode | ExecutionMode | The execution mode to use (ASYNC/ASYNC_LOCAL/SYNC) |
| onRegister | OnRegisteredOperation | Register callback that will be called on each shard upon register |
| onUnregistered | OnUnregisteredOperation | Unregister callback that will be called on each shard upon unregister |

## Returns

Returns a registration ID.

## Example

```java
GearsBuilder.CreateGearsBuilder(reader).register();
```