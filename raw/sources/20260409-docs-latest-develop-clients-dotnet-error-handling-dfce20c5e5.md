---
title: Error handling
url: https://redis.io/docs/latest/develop/clients/dotnet/error-handling/
retrieved_utc: '2026-04-09T20:45:58.512553+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/develop/clients/dotnet/error-handling/index.html.md
---

# Error handling

```json metadata
{
  "title": "Error handling",
  "description": "Learn how to handle errors when using NRedisStack.",
  "categories": null,
  "topics": ["error-handling","resilience"],
  "relatedPages": ["/develop/clients/error-handling","/develop/clients/dotnet/produsage"],
  "scope": "implementation",
  "tableOfContents": {"sections":[{"id":"exception-types","title":"Exception types"},{"children":[{"id":"pattern-1-fail-fast","title":"Pattern 1: Fail fast"},{"id":"pattern-2-graceful-degradation","title":"Pattern 2: Graceful degradation"},{"id":"pattern-3-retry-with-backoff","title":"Pattern 3: Retry with backoff"},{"id":"pattern-4-log-and-continue","title":"Pattern 4: Log and continue"}],"id":"applying-error-handling-patterns","title":"Applying error handling patterns"},{"id":"async-error-handling","title":"Async error handling"},{"id":"see-also","title":"See also"}]}

,
  "codeExamples": []
}
```
NRedisStack uses **exceptions** to signal errors. Code examples in the documentation often omit error handling for brevity, but it is essential in production code. This page explains how NRedisStack's error handling works and how to apply common error handling patterns.

For an overview of error types and handling strategies, see [Error handling]().
See also [Production usage]()
for more information on connection management, timeouts, and other aspects of
app reliability.

## Exception types

NRedisStack throws exceptions to signal errors. Common exception types include:

| Exception | When it occurs | Recoverable | Recommended action |
|---|---|---|---|
| `RedisConnectionException` | Connection refused or lost | â | Retry with backoff or fall back |
| `RedisTimeoutException` | Operation exceeded timeout | â | Retry with backoff |
| `RedisCommandException` | Invalid command or arguments | â | Fix the command or arguments |
| `RedisServerException` | Invalid operation on server | â | Fix the operation or data |

See [Categories of errors]()
for a more detailed discussion of these errors and their causes.

## Applying error handling patterns

The [Error handling]() overview
describes four main patterns. The sections below show how to implement them in
NRedisStack:

### Pattern 1: Fail fast

Catch specific exceptions that represent unrecoverable errors and re-throw them (see
[Pattern 1: Fail fast]()
for a full description):

```csharp
using NRedisStack;
using StackExchange.Redis;

var muxer = ConnectionMultiplexer.Connect("localhost:6379");
var db = muxer.GetDatabase();

try {
    var result = db.StringGet("key");
} catch (RedisCommandException) {
    // This indicates a bug in the code, such as using
    // StringGet on a list key.
    throw;
}
```

### Pattern 2: Graceful degradation

Catch specific errors and fall back to an alternative, where possible (see
[Pattern 2: Graceful degradation]()
for a full description):

```csharp
try {
    var cachedValue = db.StringGet(key);
    return cachedValue.ToString();
} catch (RedisConnectionException) {
    logger.LogWarning("Cache unavailable, using database");

    // Fallback to database
    return database.Get(key);
}
```

### Pattern 3: Retry with backoff

Retry on temporary errors such as timeouts (see
[Pattern 3: Retry with backoff]()
for a full description):

```csharp
const int maxRetries = 3;
int retryDelay = 100;

for (int attempt = 0; attempt < maxRetries; attempt++) {
    try {
        return db.StringGet(key).ToString();
    } catch (RedisTimeoutException) {
        if (attempt < maxRetries - 1) {
            Thread.Sleep(retryDelay);
            retryDelay *= 2;  // Exponential backoff
        } else {
            throw;
        }
    }
}
```

See also [Timeouts]()
for more information on configuring timeouts in NRedisStack.

### Pattern 4: Log and continue

Log non-critical errors and continue (see
[Pattern 4: Log and continue]()
for a full description):

```csharp
try {
    db.StringSet(key, value, TimeSpan.FromSeconds(3600));
} catch (RedisConnectionException) {
    logger.LogWarning($"Failed to cache {key}, continuing without cache");
    // Application continues normally
}
```

## Async error handling

Error handling works the usual way with `async`/`await`, as shown in the
example below:

```csharp
using NRedisStack;
using StackExchange.Redis;

var muxer = ConnectionMultiplexer.Connect("localhost:6379");
var db = muxer.GetDatabase();

async Task<string> GetWithFallbackAsync(string key) {
    try {
        var result = await db.StringGetAsync(key);
        if (result.HasValue) {
            return result.ToString();
        }
    } catch (RedisConnectionException) {
        logger.LogWarning("Cache unavailable");
        return await database.GetAsync(key);
    }
    
    return await database.GetAsync(key);
}
```

## See also

- [Error handling]()
- [Production usage]()
