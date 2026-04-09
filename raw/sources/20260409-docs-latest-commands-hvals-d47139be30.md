---
title: HVALS
url: https://redis.io/docs/latest/commands/hvals/
retrieved_utc: '2026-04-09T20:46:04.728332+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/hvals/index.html.md
---

# HVALS

```json metadata
{
  "title": "HVALS",
  "description": "Returns all values in a hash.",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"display_text":"key","key_spec_index":0,"name":"key","type":"key"}],
  "syntax_fmt": "HVALS key",
  "complexity": "O(N) where N is the size of the hash.",
  "group": "hash",
  "command_flags": ["readonly"],
  "acl_categories": ["@read","@hash","@slow"],
  "since": "2.0.0",
  "arity": 2,
  "key_specs": [{"RO":true,"access":true,"begin_search":{"spec":{"index":1},"type":"index"},"find_keys":{"spec":{"keystep":1,"lastkey":0,"limit":0},"type":"range"}}],
  "tableOfContents": {"sections":[{"id":"examples","title":"Examples"},{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": [{"codetabsId":"cmds_hash-stephvals","commands":[{"acl_categories":["@write","@hash","@fast"],"complexity":"O(1)","name":"HSET"},{"acl_categories":["@read","@hash","@slow"],"complexity":"O(N)","name":"HVALS"}],"description":"Foundational: Retrieve all values from a hash using HVALS (returns only values without field names, useful when you only need the data)","difficulty":"beginner","id":"hvals","languages":[{"id":"redis-cli","panelId":"panel_redis-cli_cmds_hash-stephvals"},{"clientId":"redis-py","clientName":"redis-py","id":"Python","langId":"python","panelId":"panel_Python_cmds_hash-stephvals"},{"id":"Node-js","panelId":"panel_Nodejs_cmds_hash-stephvals"},{"clientId":"ioredis","clientName":"ioredis","id":"ioredis","langId":"javascript","panelId":"panel_ioredis_cmds_hash-stephvals"},{"clientId":"jedis","clientName":"Jedis","id":"Java-Sync","langId":"java","panelId":"panel_Java-Sync_cmds_hash-stephvals"},{"clientId":"lettuce","clientName":"Lettuce","id":"Java-Async","langId":"java","panelId":"panel_Java-Async_cmds_hash-stephvals"},{"clientId":"lettuce","clientName":"Lettuce","id":"Java-Reactive","langId":"java","panelId":"panel_Java-Reactive_cmds_hash-stephvals"},{"clientId":"go-redis","clientName":"go-redis","id":"Go","langId":"go","panelId":"panel_Go_cmds_hash-stephvals"},{"clientId":"hiredis","clientName":"hiredis","id":"C","langId":"c","panelId":"panel_C_cmds_hash-stephvals"},{"id":"dotnet-Sync","panelId":"panel_Csharp-Sync_cmds_hash-stephvals"},{"clientId":"predis","clientName":"Predis","id":"PHP","langId":"php","panelId":"panel_PHP_cmds_hash-stephvals"},{"clientId":"redis-rs","clientName":"redis-rs","id":"Rust-Sync","langId":"rust","panelId":"panel_Rust-Sync_cmds_hash-stephvals"},{"clientId":"redis-rs","clientName":"redis-rs","id":"Rust-Async","langId":"rust","panelId":"panel_Rust-Async_cmds_hash-stephvals"}]}]
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

Returns all values in the hash stored at `key`.

## Examples

#### Code Examples

Foundational: Retrieve all values from a hash using HVALS (returns only values without field names, useful when you only need the data)

**Difficulty:** Beginner

**Commands:** HSET, HVALS

**Complexity:**
- HSET: O(1)
- HVALS: O(N)

**Redis CLI:**

```
redis> HSET myhash field1 "Hello"
(integer) 1
redis> HSET myhash field2 "World"
(integer) 1
redis> HVALS myhash
1) "Hello"
2) "World"
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
        db.HashSet("myhash",
            [
                new("field1", "Hello"),
                new("field2", "World")
            ]
        );

        RedisValue[] hValsResult = db.HashValues("myhash");
        Array.Sort(hValsResult);
        Console.WriteLine(string.Join(", ", hValsResult));
        // >>> Hello, World
```

**Go:**

```go
	hValsResult1, err := rdb.HSet(ctx, "myhash",
		"field1", "Hello",
		"field2", "World",
	).Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(hValsResult1) // >>> 2

	hValsResult2, err := rdb.HVals(ctx, "myhash").Result()

	if err != nil {
		panic(err)
	}

	sort.Strings(hValsResult2)

	fmt.Println(hValsResult2) // >>> [Hello World]
```

**Java (Asynchronous - Lettuce):**

```java
            Map<String, String> hValsExampleParams = new HashMap<>();
            hValsExampleParams.put("field1", "Hello");
            hValsExampleParams.put("field2", "World");

            CompletableFuture<Void> hValsExample = asyncCommands.hset("myhash", hValsExampleParams).thenCompose(res1 -> {
                return asyncCommands.hvals("myhash");
            }).thenAccept(res2 -> {
                List<String> sortedValues = new ArrayList<>(res2);
                Collections.sort(sortedValues);
                System.out.println(sortedValues);
                // >>> [Hello, World]
            }).toCompletableFuture();
```

**Java (Reactive - Lettuce):**

```java
            Map<String, String> hValsExampleParams = new HashMap<>();
            hValsExampleParams.put("field1", "Hello");
            hValsExampleParams.put("field2", "World");

            Mono<Long> hValsExample1 = reactiveCommands.hset("myhash", hValsExampleParams).doOnNext(result -> {
            });

            hValsExample1.block();

            Mono<List<String>> hValsExample2 = reactiveCommands.hvals("myhash").collectList().doOnNext(result -> {
                List<String> sortedValues = new ArrayList<>(result);
                Collections.sort(sortedValues);
                System.out.println(sortedValues);
                // >>> [Hello, World]
            });
```

**Java (Synchronous - Jedis):**

```java
        Map<String, String> hValsExampleParams = new HashMap<>();
        hValsExampleParams.put("field1", "Hello");
        hValsExampleParams.put("field2", "World");

        long hValsResult1 = jedis.hset("myhash", hValsExampleParams);
        System.out.println(hValsResult1); // >>> 2

        List<String> hValsResult2 = jedis.hvals("myhash");
        Collections.sort(hValsResult2);
        System.out.println(hValsResult2);
        // >>> [Hello, World]
```

**JavaScript (Node.js):**

```javascript
const res12 = await client.hSet(
  'myhash',
  {
    'field1': 'Hello',
    'field2': 'World'
  }
)

const res13 = await client.hVals('myhash')
console.log(res13) // [ 'Hello', 'World' ]

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
const res12 = await client.hSet(
  'myhash',
  {
    'field1': 'Hello',
    'field2': 'World'
  }
)

const res13 = await client.hVals('myhash')
console.log(res13) // [ 'Hello', 'World' ]

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

        $hValsResult1 = $this->redis->hmset('myhash', ['field1' => 'Hello', 'field2' => 'World']);
        echo "HMSET myhash field1 Hello field2 World: " . ($hValsResult1 ? 'OK' : 'FAIL') . "\n"; // >>> OK

        $hValsResult2 = $this->redis->hvals('myhash');
        echo "HVALS myhash: " . json_encode($hValsResult2) . "\n"; // >>> ["Hello","World"]
```

**Python:**

```python
res10 = r.hset("myhash", mapping={"field1": "Hello", "field2": "World"})

res11 = r.hvals("myhash")
print(res11) # >>> [ "Hello", "World" ]

```

**Rust (Asynchronous):**

```rust
        let hash_fields = [
            ("field1", "Hello"),
            ("field2", "World"),
        ];

        if let Ok(_) = r.hset_multiple::<&str, &str, &str, String>("myhash", &hash_fields).await {
            // Fields set successfully
        }

        match r.hvals("myhash").await {
            Ok(res11) => {
                let res11: Vec<String> = res11;
                println!("{res11:?}");    // >>> ["Hello", "World"]
            },
            Err(e) => {
                println!("Error getting hash values: {e}");
                return;
            }
        }

```

**Rust (Synchronous):**

```rust
        let hash_fields = [
            ("field1", "Hello"),
            ("field2", "World"),
        ];

        if let Ok(_) = r.hset_multiple::<&str, &str, &str, String>("myhash", &hash_fields) {
            // Fields set successfully
        }

        match r.hvals("myhash") {
            Ok(res11) => {
                let res11: Vec<String> = res11;
                println!("{res11:?}");    // >>> ["Hello", "World"]
            },
            Err(e) => {
                println!("Error getting hash values: {e}");
                return;
            }
        }

```



Give these commands a try in the interactive console:


HSET myhash field1 "Hello"
HSET myhash field2 "World"
HVALS myhash


## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |

## Return information

**RESP2:**

[Array reply](../../develop/reference/protocol-spec#arrays): a list of values in the hash, or an empty list when the key does not exist

**RESP3:**

[Array reply](../../develop/reference/protocol-spec#arrays): a list of values in the hash, or an empty list when the key does not exist.


