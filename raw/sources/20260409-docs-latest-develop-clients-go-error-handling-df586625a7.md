---
title: Error handling
url: https://redis.io/docs/latest/develop/clients/go/error-handling/
retrieved_utc: '2026-04-09T20:45:57.856800+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/develop/clients/go/error-handling/index.html.md
---

# Error handling

```json metadata
{
  "title": "Error handling",
  "description": "Learn how to handle errors when using go-redis",
  "categories": null,
  "topics": ["error-handling","resilience"],
  "relatedPages": ["/develop/clients/error-handling","/develop/clients/go/produsage"],
  "scope": "implementation",
  "tableOfContents": {"sections":[{"id":"error-handling-in-go","title":"Error handling in Go"},{"children":[{"id":"pattern-1-fail-fast","title":"Pattern 1: Fail fast"},{"id":"pattern-2-graceful-degradation","title":"Pattern 2: Graceful degradation"},{"id":"pattern-3-retry-with-backoff","title":"Pattern 3: Retry with backoff"},{"id":"pattern-4-log-and-continue","title":"Pattern 4: Log and continue"}],"id":"applying-error-handling-patterns","title":"Applying error handling patterns"},{"id":"see-also","title":"See also"}]}

,
  "codeExamples": []
}
```
go-redis uses **explicit error returns** following Go's idiomatic error handling pattern. Code examples in the documentation often omit error handling for brevity,
but it is essential in production code.
This page explains how go-redis's error handling works and how to apply
some common error handling patterns. For an overview of error types and handling
strategies, see [Error handling]().
See also [Production usage]()
for more information on connection management, timeouts, and other aspects of
app reliability.

## Error handling in Go

In Go, functions return errors as a second return value. You can check for errors explicitly with code like the following:

```go
result, err := rdb.Get(ctx, key).Result()
if err != nil {
    // Handle the error
}
```

Common error types from go-redis include:

| Error | When it occurs | Recoverable | Recommended action |
|---|---|---|---|
| `redis.Nil` | Key does not exist | â | Return default value or fetch from source |
| `context.DeadlineExceeded` | Operation timeout | â | Retry with backoff |
| `net.OpError` | Network error | â | Retry with backoff or fall back to alternative |
| `redis.ResponseError` | Redis error response | â | Fix the command or arguments |

See [Categories of errors]()
for a more detailed discussion of these errors and their causes.

## Applying error handling patterns

The [Error handling]() overview
describes four main patterns. The sections below show how to implement them in
go-redis:

### Pattern 1: Fail fast

Return the error immediately if it represents an unrecoverable situation (see
[Pattern 1: Fail fast]()
for a full description):

```go
result, err := rdb.Get(ctx, key).Result()
if err != nil {
    // This indicates a problem that should be fixed
    return err
}
```

### Pattern 2: Graceful degradation

Check for specific errors and fall back to an alternative (see
[Pattern 2: Graceful degradation]()
for a full description):

```go
result, err := rdb.Get(ctx, key).Result()
if err != nil {
    if err == redis.Nil {
        // Key doesn't exist, try database
        return database.Get(ctx, key)
    }
    if _, ok := err.(net.Error); ok {
        // Network error, use fallback
        logger.Warn("Cache unavailable, using database")
        return database.Get(ctx, key)
    }
    return err
}
return result, nil
```

### Pattern 3: Retry with backoff

Retry on temporary errors such as timeouts (see
[Pattern 3: Retry with backoff]()
for a full description). go-redis has built-in retry logic with
configurable timing and backoffs. See [Retries]() for more information. Note also that
you can configure timeouts (which are one of the most common causes of
temporary errors) for connections and commands. See [Timeouts]() for more information.

### Pattern 4: Log and continue

Log non-critical errors and continue (see
[Pattern 4: Log and continue]()
for a full description):

```go
err := rdb.SetEx(ctx, key, value, 3600*time.Second).Err()
if err != nil {
    if _, ok := err.(net.Error); ok {
        logger.Warnf("Failed to cache %s, continuing without cache", key)
        // Application continues normally
    } else {
        return err
    }
}
```

Note that go-redis also supports [OpenTelemetry](https://opentelemetry.io/)
instrumentation to monitor performance and trace the execution of Redis commands. See [Observability]() for more information.

## See also

- [Error handling]()
- [Production usage]()
- [Observability]()
