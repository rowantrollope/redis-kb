---
title: HEXPIRE
url: https://redis.io/docs/latest/commands/hexpire/
retrieved_utc: '2026-04-09T20:46:04.496488+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/hexpire/index.html.md
---

# HEXPIRE

```json metadata
{
  "title": "HEXPIRE",
  "description": "Set expiration for hash fields using relative time to expire (seconds)",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"display_text":"key","key_spec_index":0,"name":"key","type":"key"},{"display_text":"seconds","name":"seconds","type":"integer"},{"arguments":[{"display_text":"nx","name":"nx","token":"NX","type":"pure-token"},{"display_text":"xx","name":"xx","token":"XX","type":"pure-token"},{"display_text":"gt","name":"gt","token":"GT","type":"pure-token"},{"display_text":"lt","name":"lt","token":"LT","type":"pure-token"}],"name":"condition","optional":true,"type":"oneof"},{"arguments":[{"display_text":"numfields","name":"numfields","type":"integer"},{"display_text":"field","multiple":true,"name":"field","type":"string"}],"name":"fields","token":"FIELDS","type":"block"}],
  "syntax_fmt": "HEXPIRE key seconds [NX | XX | GT | LT] FIELDSÂ numfields field\n  [field ...]",
  "complexity": "O(N) where N is the number of specified fields",
  "group": "hash",
  "command_flags": ["write","denyoom","fast"],
  "acl_categories": ["@write","@hash","@fast"],
  "since": "7.4.0",
  "arity": -6,
  "key_specs": [{"RW":true,"begin_search":{"spec":{"index":1},"type":"index"},"find_keys":{"spec":{"keystep":1,"lastkey":0,"limit":0},"type":"range"},"update":true}],
  "tableOfContents": {"sections":[{"id":"options","title":"Options"},{"id":"refreshing-expires","title":"Refreshing expires"},{"id":"redis-search-and-field-expiration","title":"Redis Search and field expiration"},{"id":"examples","title":"Examples"},{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": [{"codetabsId":"cmds_hash-stephexpire","description":"Field expiration: Set TTL on individual hash fields using HEXPIRE with conditional options (NX, XX, GT, LT) when you need fine-grained control over field lifecycle","difficulty":"intermediate","id":"hexpire","languages":[{"id":"redis-cli","panelId":"panel_redis-cli_cmds_hash-stephexpire"},{"clientId":"redis-py","clientName":"redis-py","id":"Python","langId":"python","panelId":"panel_Python_cmds_hash-stephexpire"},{"id":"Node-js","panelId":"panel_Nodejs_cmds_hash-stephexpire"},{"clientId":"ioredis","clientName":"ioredis","id":"ioredis","langId":"javascript","panelId":"panel_ioredis_cmds_hash-stephexpire"},{"clientId":"jedis","clientName":"Jedis","id":"Java-Sync","langId":"java","panelId":"panel_Java-Sync_cmds_hash-stephexpire"},{"clientId":"lettuce","clientName":"Lettuce","id":"Java-Async","langId":"java","panelId":"panel_Java-Async_cmds_hash-stephexpire"},{"clientId":"lettuce","clientName":"Lettuce","id":"Java-Reactive","langId":"java","panelId":"panel_Java-Reactive_cmds_hash-stephexpire"},{"clientId":"go-redis","clientName":"go-redis","id":"Go","langId":"go","panelId":"panel_Go_cmds_hash-stephexpire"},{"clientId":"hiredis","clientName":"hiredis","id":"C","langId":"c","panelId":"panel_C_cmds_hash-stephexpire"},{"id":"dotnet-Sync","panelId":"panel_Csharp-Sync_cmds_hash-stephexpire"},{"clientId":"predis","clientName":"Predis","id":"PHP","langId":"php","panelId":"panel_PHP_cmds_hash-stephexpire"},{"clientId":"redis-rs","clientName":"redis-rs","id":"Rust-Sync","langId":"rust","panelId":"panel_Rust-Sync_cmds_hash-stephexpire"},{"clientId":"redis-rs","clientName":"redis-rs","id":"Rust-Async","langId":"rust","panelId":"panel_Rust-Async_cmds_hash-stephexpire"}]}]
}
```## Code Examples Legend

The code examples below show how to perform the same operations in different programming languages and client libraries:

- **Redis CLI**: Command-line interface for Redis
- **C# (Synchronous)**: StackExchange.Redis synchronous client
- **C# (Asynchronous)**: StackExchange.Redis asynchronous client
- **Go**: go-redis client
- **Java (Synchronous - Jedis)**: Jedis synchronous client
- **Java (Asynchronous - Lettuce)**: Lettuce asynchronous client
- **Java (Reactive - Lettuce)**: Lettuce reactive/streaming client
- **JavaScript (Node.js)**: node-redis client
- **PHP**: Predis client
- **Python**: redis-py client
- **Rust (Synchronous)**: redis-rs synchronous client
- **Rust (Asynchronous)**: redis-rs asynchronous client

Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.

---

Set an expiration (TTL or time to live) on one or more fields of a given hash key. You must specify at least one field.
Field(s) will automatically be deleted from the hash key when their TTLs expire.

Field expirations will only be cleared by commands that delete or overwrite the
contents of the hash fields, including [`HDEL`]() and [`HSET`]()
commands.
This means that all the operations that conceptually _alter_ the value stored at a hash key's field without replacing it with a new one will leave the TTL untouched.

You can clear the TTL using the [`HPERSIST`]() command, which turns the hash field back into a persistent field.

Note that calling `HEXPIRE`/[`HPEXPIRE`]() with a zero TTL or
[`HEXPIREAT`]()/[`HPEXPIREAT`]() with a time in the past will result in the hash field being deleted.

## Options

The `HEXPIRE` command supports a set of options:

* `NX` -- For each specified field, set expiration only when the field has no expiration.
* `XX` -- For each specified field, set expiration only when the field has an existing expiration.
* `GT` -- For each specified field, set expiration only when the new expiration is greater than current one.
* `LT` -- For each specified field, set expiration only when the new expiration is less than current one.

A non-volatile field is treated as an infinite TTL for the purpose of `GT` and `LT`.
The `NX`, `XX`, `GT`, and `LT` options are mutually exclusive.

## Refreshing expires

You can call `HEXPIRE` using as argument a field that already has an
existing TTL set.
In this case, the time to live is _updated_ to the new value.

## Redis Search and field expiration

Starting with Redis 8, Redis Search has enhanced behavior when handling expiring hash fields. For detailed information about how [`FT.SEARCH`]() and [`FT.AGGREGATE`]() commands interact with expiring hash fields, see [Key and field expiration behavior]().

## Examples

#### Code Examples

Field expiration: Set TTL on individual hash fields using HEXPIRE with conditional options (NX, XX, GT, LT) when you need fine-grained control over field lifecycle

**Difficulty:** Intermediate

**Redis CLI:**

```
HEXPIRE no-key 20 NX FIELDS 2 field1 field2
(nil)
HSET mykey field1 "hello" field2 "world"
(integer) 2
HEXPIRE mykey 10 FIELDS 3 field1 field2 field3
1) (integer) 1
2) (integer) 1
3) (integer) -2
HGETALL mykey
```

**Available in:** Redis CLI, C, C# (Synchronous), Go, Java (Asynchronous - Lettuce), Java (Reactive - Lettuce), Java (Synchronous - Jedis), JavaScript (Node.js), JavaScript (Node.js), PHP, Python, Rust (Asynchronous), Rust (Synchronous)

**C:**

```c

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <hiredis/hiredis.h>

int main(int argc, char **argv) {
    redisContext *c = redisConnect("127.0.0.1", 6379);

    if (c == NULL || c->err) {
        if (c) {
            printf("Connection error: %s\n", c->errstr);
            redisFree(c);
        } else {
            printf("Connection error: can't allocate redis context\n");
        }
        return 1;
    }


    redisReply *reply;

    // Set up hash with fields
    reply = redisCommand(c, "HSET %s %s %s %s %s",
        "myhash", "field1", "Hello", "field2", "World");
    freeReplyObject(reply);

    // Get multiple fields at once
    reply = redisCommand(c, "HMGET %s %s %s %s",
        "myhash", "field1", "field2", "nofield");

    printf("HMGET myhash field1 field2 nofield:\n");
    for (size_t i = 0; i < reply->elements; i++) {
        if (reply->element[i]->type == REDIS_REPLY_NIL) {
            printf("  [%zu]: null\n", i);
        } else {
            printf("  [%zu]: %s\n", i, reply->element[i]->str);
        }
    }
    // >>> [0]: Hello
    // >>> [1]: World
    // >>> [2]: null


    freeReplyObject(reply);


    redisFree(c);

    return 0;
}


```

**C# (Synchronous):**

```csharp
        // Set up hash with fields
        db.HashSet("myhash",
            [
                new("field1", "Hello"),
                new("field2", "World")
            ]
        );

        ExpireResult[] hexpireRes1 = db.HashFieldExpire(
            "myhash",
            new RedisValue[] { "field1", "field2" },
            TimeSpan.FromSeconds(10)
        );
        Console.WriteLine(string.Join(", ", hexpireRes1));
        // >>> Success, Success

        long[] hexpireRes2 = db.HashFieldGetTimeToLive(
            "myhash",
            new RedisValue[] { "field1", "field2" }
        );
        Console.WriteLine(string.Join(", ", hexpireRes2));
        // >>> 10, 10 (approximately)

        // Try to set expiration on non-existent field
        ExpireResult[] hexpireRes3 = db.HashFieldExpire(
            "myhash",
            new RedisValue[] { "nonexistent" },
            TimeSpan.FromSeconds(10)
        );
        Console.WriteLine(string.Join(", ", hexpireRes3));
        // >>> NoSuchField
```

**Go:**

```go
	// Set up hash with fields
	rdb.HSet(ctx, "myhash", "field1", "Hello", "field2", "World")

	// Set expiration on hash fields
	res1, err := rdb.HExpire(ctx, "myhash", 10*time.Second, "field1", "field2").Result()

	if err != nil {
		fmt.Println(err)
	}

	fmt.Println(res1) // >>> [1 1]

	// Check TTL of the fields
	res2, err := rdb.HTTL(ctx, "myhash", "field1", "field2").Result()

	if err != nil {
		fmt.Println(err)
	}

	fmt.Println(len(res2)) // >>> 2

	// Try to set expiration on non-existent field
	res3, err := rdb.HExpire(ctx, "myhash", 10*time.Second, "nonexistent").Result()

	if err != nil {
		fmt.Println(err)
	}

	fmt.Println(res3) // >>> [-2]

	// Clean up
	rdb.Del(ctx, "myhash")
```

**Java (Asynchronous - Lettuce):**

```java
            // Set up hash with fields
            Map<String, String> hExpireExampleParams = new HashMap<>();
            hExpireExampleParams.put("field1", "Hello");
            hExpireExampleParams.put("field2", "World");

            CompletableFuture<Void> hExpireExample = asyncCommands.hset("myhash", hExpireExampleParams).thenCompose(res1 -> {
                // Set expiration on hash fields
                return asyncCommands.hexpire("myhash", 10, "field1", "field2");
            }).thenCompose(res2 -> {
                System.out.println(res2);
                // >>> [1, 1]
                // Check TTL of the fields
                return asyncCommands.httl("myhash", "field1", "field2");
            }).thenCompose(res3 -> {
                System.out.println(res3.size());
                // >>> 2
                // Try to set expiration on non-existent field
                return asyncCommands.hexpire("myhash", 10, "nonexistent");
            })
                    .thenAccept(System.out::println)
                    // >>> -2
                    .toCompletableFuture();
```

**Java (Reactive - Lettuce):**

```java
            // Set up hash with fields
            Map<String, String> hExpireExampleParams = new HashMap<>();
            hExpireExampleParams.put("field1", "Hello");
            hExpireExampleParams.put("field2", "World");

            Mono<Long> hExpireExample1 = reactiveCommands.hset("myhash", hExpireExampleParams).doOnNext(result -> {
            });

            hExpireExample1.block();

            // Set expiration on hash fields
            Mono<List<Long>> hExpireExample2 = reactiveCommands.hexpire("myhash", 10, "field1", "field2").collectList().doOnNext(result -> {
                System.out.println(result);
                // >>> [1, 1]
            });

            hExpireExample2.block();

            // Check TTL of the fields
            Mono<List<Long>> hExpireExample3 = reactiveCommands.httl("myhash", "field1", "field2").collectList().doOnNext(result -> {
                System.out.println(result.size());
                // >>> 2
            });

            hExpireExample3.block();

            // Try to set expiration on non-existent field
            Mono<List<Long>> hExpireExample4 = reactiveCommands.hexpire("myhash", 10, "nonexistent").collectList().doOnNext(result -> {
                System.out.println(result);
                // >>> [-2]
            });
```

**Java (Synchronous - Jedis):**

```java
        // Set up hash with fields
        Map<String, String> hExpireExampleParams = new HashMap<>();
        hExpireExampleParams.put("field1", "Hello");
        hExpireExampleParams.put("field2", "World");
        jedis.hset("myhash", hExpireExampleParams);

        // Set expiration on hash fields
        List<Long> hExpireResult1 = jedis.hexpire("myhash", 10, "field1", "field2");
        System.out.println(hExpireResult1); // >>> [1, 1]

        // Check TTL of the fields
        List<Long> hExpireResult2 = jedis.httl("myhash", "field1", "field2");
        System.out.println(hExpireResult2.size()); // >>> 2

        // Try to set expiration on non-existent field
        List<Long> hExpireResult3 = jedis.hexpire("myhash", 10, "nonexistent");
        System.out.println(hExpireResult3); // >>> [-2]
```

**JavaScript (Node.js):**

```javascript
// Set up hash with fields
await client.hSet('myhash', {
  'field1': 'Hello',
  'field2': 'World'
})

// Set expiration on hash fields
const res14 = await client.hExpire('myhash', ['field1', 'field2'], 10)
console.log(res14) // [1, 1]

// Check TTL of the fields
const res15 = await client.hTTL('myhash', ['field1', 'field2'])
console.log(res15) // [10, 10] (or close to 10)

// Try to set expiration on non-existent field
const res16 = await client.hExpire('myhash', ['nonexistent'], 10)
console.log(res16) // [-2]

```

**JavaScript (Node.js):**

```javascript

import assert from 'node:assert';
import { Redis } from 'ioredis';

const redis = new Redis();


await redis.hset('myhash', { field1: 'Hello', field2: 'World' });

const hmgetResult = await redis.hmget('myhash', 'field1', 'field2', 'nofield');
console.log(hmgetResult); // >>> ['Hello', 'World', null]


redis.disconnect();


```

**JavaScript (Node.js):**

```javascript
// Set up hash with fields
await client.hSet('myhash', {
  'field1': 'Hello',
  'field2': 'World'
})

// Set expiration on hash fields
const res14 = await client.hExpire('myhash', ['field1', 'field2'], 10)
console.log(res14) // [1, 1]

// Check TTL of the fields
const res15 = await client.hTTL('myhash', ['field1', 'field2'])
console.log(res15) // [10, 10] (or close to 10)

// Try to set expiration on non-existent field
const res16 = await client.hExpire('myhash', ['nonexistent'], 10)
console.log(res16) // [-2]

```

**JavaScript (Node.js):**

```javascript

import assert from 'node:assert';
import { Redis } from 'ioredis';

const redis = new Redis();


await redis.hset('myhash', { field1: 'Hello', field2: 'World' });

const hmgetResult = await redis.hmget('myhash', 'field1', 'field2', 'nofield');
console.log(hmgetResult); // >>> ['Hello', 'World', null]


redis.disconnect();


```

**PHP:**

```php

        // Set up hash with fields
        $hExpireResult1 = $this->redis->hmset('myhash', ['field1' => 'Hello', 'field2' => 'World']);
        echo "HMSET myhash field1 Hello field2 World: " . ($hExpireResult1 ? 'OK' : 'FAIL') . "\n"; // >>> OK

        // Set expiration on hash fields
        $hExpireResult2 = $this->redis->hexpire('myhash', 10, ['field1', 'field2']);
        echo "HEXPIRE myhash 10 FIELDS field1 field2: " . json_encode($hExpireResult2) . "\n"; // >>> [1,1]

        // Check TTL of the fields
        $hExpireResult3 = $this->redis->httl('myhash', ['field1', 'field2']);
        echo "HTTL myhash FIELDS field1 field2 count: " . count($hExpireResult3) . "\n"; // >>> 2

        // Try to set expiration on non-existent field
        $hExpireResult4 = $this->redis->hexpire('myhash', 10, ['nonexistent']);
        echo "HEXPIRE myhash 10 FIELDS nonexistent: " . json_encode($hExpireResult4) . "\n"; // >>> [-2]
```

**Python:**

```python
# Set up hash with fields
r.hset("myhash", mapping={"field1": "Hello", "field2": "World"})

# Set expiration on hash fields
res12 = r.hexpire("myhash", 10, "field1", "field2")
print(res12)  # >>> [1, 1]

# Check TTL of the fields
res13 = r.httl("myhash", "field1", "field2")
print(res13)  # >>> [10, 10] (or close to 10)

# Try to set expiration on non-existent field
res14 = r.hexpire("myhash", 10, "nonexistent")
print(res14)  # >>> [-2]

```

**Rust (Asynchronous):**

```rust
        // Set up hash with fields
        let hash_fields = vec![("field1", "Hello"), ("field2", "World")];
        if let Ok(res) = r.hset_multiple("myhash", &hash_fields).await {
            let res: String = res;
            println!("{res}");    // >>> OK
        }

        // Set expiration on hash fields
        match r.hexpire("myhash", 10, redis::ExpireOption::NONE, &["field1", "field2"]).await {
            Ok(res1) => {
                let res1: Vec<i32> = res1;
                println!("{:?}", res1);    // >>> [1, 1]
            },
            Err(e) => {
                println!("Error setting expiration: {e}");
                return;
            }
        }

        // Check TTL of the fields
        match r.httl("myhash", &["field1", "field2"]).await {
            Ok(res2) => {
                let res2: Vec<i32> = res2;
                println!("{}", res2.len());    // >>> 2
            },
            Err(e) => {
                println!("Error getting TTL: {e}");
                return;
            }
        }

        // Try to set expiration on non-existent field
        match r.hexpire("myhash", 10, redis::ExpireOption::NONE, &["nonexistent"]).await {
            Ok(res3) => {
                let res3: Vec<i32> = res3;
                println!("{:?}", res3);    // >>> [-2]
            },
            Err(e) => {
                println!("Error setting expiration on non-existent field: {e}");
                return;
            }
        }

```

**Rust (Synchronous):**

```rust
        // Set up hash with fields
        let hash_fields = vec![("field1", "Hello"), ("field2", "World")];
        if let Ok(res) = r.hset_multiple("myhash", &hash_fields) {
            let res: String = res;
            println!("{res}");    // >>> OK
        }

        // Set expiration on hash fields
        match r.hexpire("myhash", 10, redis::ExpireOption::NONE, &["field1", "field2"]) {
            Ok(res1) => {
                let res1: Vec<i32> = res1;
                println!("{:?}", res1);    // >>> [1, 1]
            },
            Err(e) => {
                println!("Error setting expiration: {e}");
                return;
            }
        }

        // Check TTL of the fields
        match r.httl("myhash", &["field1", "field2"]) {
            Ok(res2) => {
                let res2: Vec<i32> = res2;
                println!("{}", res2.len());    // >>> 2
            },
            Err(e) => {
                println!("Error getting TTL: {e}");
                return;
            }
        }

        // Try to set expiration on non-existent field
        match r.hexpire("myhash", 10, redis::ExpireOption::NONE, &["nonexistent"]) {
            Ok(res3) => {
                let res3: Vec<i32> = res3;
                println!("{:?}", res3);    // >>> [-2]
            },
            Err(e) => {
                println!("Error setting expiration on non-existent field: {e}");
                return;
            }
        }

```



Give these commands a try in the interactive console:


HEXPIRE no-key 20 NX FIELDS 2 field1 field2
HSET mykey field1 "hello" field2 "world"
HEXPIRE mykey 10 FIELDS 3 field1 field2 field3
HGETALL mykey


## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |

## Return information

**RESP2:**

One of the following:
* [Array reply](../../develop/reference/protocol-spec#arrays). For each field:
    - [Integer reply](../../develop/reference/protocol-spec#integers): `-2` if no such field exists in the provided hash key, or the provided key does not exist.
    - [Integer reply](../../develop/reference/protocol-spec#integers): `0` if the specified NX | XX | GT | LT condition has not been met.
    - [Integer reply](../../develop/reference/protocol-spec#integers): `1` if the expiration time was set/updated.
    - [Integer reply](../../develop/reference/protocol-spec#integers): `2` when `HEXPIRE`/`HPEXPIRE` is called with 0 seconds/milliseconds or when `HEXPIREAT`/`HPEXPIREAT` is called with a past Unix time in seconds/milliseconds.
* [Simple error reply](../../develop/reference/protocol-spec#simple-errors):
    - if parsing failed, mandatory arguments are missing, unknown arguments are specified, or argument values are of the wrong type or out of range.
    - if the provided key exists but is not a hash.

**RESP3:**

One of the following:
* [Array reply](../../develop/reference/protocol-spec#arrays). For each field:
    - [Integer reply](../../develop/reference/protocol-spec#integers): `-2` if no such field exists in the provided hash key, or the provided key does not exist.
    - [Integer reply](../../develop/reference/protocol-spec#integers): `0` if the specified NX | XX | GT | LT condition has not been met.
    - [Integer reply](../../develop/reference/protocol-spec#integers): `1` if the expiration time was set/updated.
    - [Integer reply](../../develop/reference/protocol-spec#integers): `2` when `HEXPIRE`/`HPEXPIRE` is called with 0 seconds/milliseconds or when `HEXPIREAT`/`HPEXPIREAT` is called with a past Unix time in seconds/milliseconds.
* [Simple error reply](../../develop/reference/protocol-spec#simple-errors):
    - if parsing failed, mandatory arguments are missing, unknown arguments are specified, or argument values are of the wrong type or out of range.
    - if the provided key exists but is not a hash.


