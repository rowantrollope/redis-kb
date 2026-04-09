---
title: HGET
url: https://redis.io/docs/latest/commands/hget/
retrieved_utc: '2026-04-09T20:46:04.536191+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/hget/index.html.md
---

# HGET

```json metadata
{
  "title": "HGET",
  "description": "Returns the value of a field in a hash.",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"display_text":"key","key_spec_index":0,"name":"key","type":"key"},{"display_text":"field","name":"field","type":"string"}],
  "syntax_fmt": "HGET key field",
  "complexity": "O(1)",
  "group": "hash",
  "command_flags": ["readonly","fast"],
  "acl_categories": ["@read","@hash","@fast"],
  "since": "2.0.0",
  "arity": 3,
  "key_specs": [{"RO":true,"access":true,"begin_search":{"spec":{"index":1},"type":"index"},"find_keys":{"spec":{"keystep":1,"lastkey":0,"limit":0},"type":"range"}}],
  "tableOfContents": {"sections":[{"id":"examples","title":"Examples"},{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": [{"codetabsId":"cmds_hash-stephget","commands":[{"acl_categories":["@write","@hash","@fast"],"complexity":"O(1)","name":"HSET"},{"acl_categories":["@read","@hash","@fast"],"complexity":"O(1)","name":"HGET"}],"description":"Foundational: Retrieve a single field value from a hash using HGET (returns nil if field or key doesn\u0026amp;#39;t exist)","difficulty":"beginner","id":"hget","languages":[{"id":"redis-cli","panelId":"panel_redis-cli_cmds_hash-stephget"},{"clientId":"redis-py","clientName":"redis-py","id":"Python","langId":"python","panelId":"panel_Python_cmds_hash-stephget"},{"id":"Node-js","panelId":"panel_Nodejs_cmds_hash-stephget"},{"clientId":"ioredis","clientName":"ioredis","id":"ioredis","langId":"javascript","panelId":"panel_ioredis_cmds_hash-stephget"},{"clientId":"jedis","clientName":"Jedis","id":"Java-Sync","langId":"java","panelId":"panel_Java-Sync_cmds_hash-stephget"},{"clientId":"lettuce","clientName":"Lettuce","id":"Java-Async","langId":"java","panelId":"panel_Java-Async_cmds_hash-stephget"},{"clientId":"lettuce","clientName":"Lettuce","id":"Java-Reactive","langId":"java","panelId":"panel_Java-Reactive_cmds_hash-stephget"},{"clientId":"go-redis","clientName":"go-redis","id":"Go","langId":"go","panelId":"panel_Go_cmds_hash-stephget"},{"clientId":"hiredis","clientName":"hiredis","id":"C","langId":"c","panelId":"panel_C_cmds_hash-stephget"},{"id":"dotnet-Sync","panelId":"panel_Csharp-Sync_cmds_hash-stephget"},{"clientId":"predis","clientName":"Predis","id":"PHP","langId":"php","panelId":"panel_PHP_cmds_hash-stephget"},{"clientId":"redis-rs","clientName":"redis-rs","id":"Rust-Sync","langId":"rust","panelId":"panel_Rust-Sync_cmds_hash-stephget"},{"clientId":"redis-rs","clientName":"redis-rs","id":"Rust-Async","langId":"rust","panelId":"panel_Rust-Async_cmds_hash-stephget"}]}]
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

Returns the value associated with `field` in the hash stored at `key`.

## Examples

#### Code Examples

Foundational: Retrieve a single field value from a hash using HGET (returns nil if field or key doesn't exist)

**Difficulty:** Beginner

**Commands:** HSET, HGET

**Complexity:**
- HSET: O(1)
- HGET: O(1)

**Redis CLI:**

```
> HSET myhash field1 "foo"
(integer) 1
> HGET myhash field1
"foo"
> HGET myhash field2
(nil)
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
        bool hgetRes1 = db.HashSet("myhash", "field1", "foo");

        RedisValue hgetRes2 = db.HashGet("myhash", "field1");
        Console.WriteLine(hgetRes2);    // >>> foo

        RedisValue hgetRes3 = db.HashGet("myhash", "field2");
        Console.WriteLine(hgetRes3);    // >>> Null
```

**Go:**

```go
	res7, err := rdb.HSet(ctx, "myhash", "field1", "foo").Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(res7) // >>> 1

	res8, err := rdb.HGet(ctx, "myhash", "field1").Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(res8) // >>> foo

	res9, err := rdb.HGet(ctx, "myhash", "field2").Result()

	if err != nil {
		fmt.Println(err)
	}

	fmt.Println(res9) // >>> <empty string>
```

**Java (Asynchronous - Lettuce):**

```java
            Map<String, String> hGetExampleParams = new HashMap<>();
            hGetExampleParams.put("field1", "foo");

            CompletableFuture<Void> hGetExample = asyncCommands.hset("myhash", hGetExampleParams).thenCompose(res1 -> {
                System.out.println(res1); // >>> 1
                return asyncCommands.hget("myhash", "field1");
            }).thenCompose(res2 -> {
                System.out.println(res2); // >>> foo
                return asyncCommands.hget("myhash", "field2");
            }).thenAccept(res3 -> {
                System.out.println(res3); // >>> null
            }).toCompletableFuture();
```

**Java (Reactive - Lettuce):**

```java
            Map<String, String> hGetExampleParams = new HashMap<>();
            hGetExampleParams.put("field1", "foo");

            Mono<Long> hGetExample1 = reactiveCommands.hset("myhash", hGetExampleParams).doOnNext(result -> {
                System.out.println(result); // >>> 1
            });

            hGetExample1.block();

            Mono<String> hGetExample2 = reactiveCommands.hget("myhash", "field1").doOnNext(result -> {
                System.out.println(result); // >>> foo
            });

            hGetExample2.block();

            Mono<String> hGetExample3 = reactiveCommands.hget("myhash", "field2").doOnNext(result -> {
                System.out.println(result); // >>> null
            });
```

**Java (Synchronous - Jedis):**

```java
        Map<String, String> hGetExampleParams = new HashMap<>();
        hGetExampleParams.put("field1", "foo");

        long hGetResult1 = jedis.hset("myhash", hGetExampleParams);
        System.out.println(hGetResult1);    // >>> 1

        String hGetResult2 = jedis.hget("myhash", "field1");
        System.out.println(hGetResult2);    // >>> foo

        String hGetResult3 = jedis.hget("myhash", "field2");
        System.out.println(hGetResult3);    // >>> null
```

**JavaScript (Node.js):**

```javascript
const res7 = await client.hSet('myhash', 'field1', 'foo')
console.log(res7) // 1

const res8 = await client.hGet('myhash', 'field1')
console.log(res8) // foo

const res9 = await client.hGet('myhash', 'field2')
console.log(res9) // null

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
const res7 = await client.hSet('myhash', 'field1', 'foo')
console.log(res7) // 1

const res8 = await client.hGet('myhash', 'field1')
console.log(res8) // foo

const res9 = await client.hGet('myhash', 'field2')
console.log(res9) // null

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
        $hGetResult1 = $this->redis->hset('myhash', 'field1', 'foo');
        echo "HSET myhash field1 foo: " . $hGetResult1 . "\n"; // >>> 1

        $hGetResult2 = $this->redis->hget('myhash', 'field1');
        echo "HGET myhash field1: " . ($hGetResult2 ?? 'null') . "\n"; // >>> foo

        $hGetResult3 = $this->redis->hget('myhash', 'field2');
        echo "HGET myhash field2: " . ($hGetResult3 ?? 'null') . "\n"; // >>> null
```

**Python:**

```python
res7 = r.hset("myhash", "field1", "foo")
print(res7)
# >>> 1

res8 = r.hget("myhash", "field1")
print(res8)
# >>> foo

res9 = r.hget("myhash", "field2")
print(res9)
# >>> None

```

**Rust (Asynchronous):**

```rust
        match r.hset("myhash", "field1", "foo").await {
            Ok(res7) => {
                let res7: i32 = res7;
                println!("{res7}");    // >>> 1
            },
            Err(e) => {
                println!("Error setting hash field: {e}");
                return;
            }
        }

        match r.hget("myhash", "field1").await {
            Ok(res8) => {
                let res8: Option<String> = res8;
                match res8 {
                    Some(value) => {
                        println!("{value}");    // >>> foo
                    },
                    None => {
                        println!("None");
                    }
                }
            },
            Err(e) => {
                println!("Error getting hash field: {e}");
                return;
            }
        }

        match r.hget("myhash", "field2").await {
            Ok(res9) => {
                let res9: Option<String> = res9;
                match res9 {
                    Some(_) => {
                        println!("Some value");
                    },
                    None => {
                        println!("None");    // >>> None
                    }
                }
            },
            Err(e) => {
                println!("Error getting hash field: {e}");
                return;
            }
        }

```

**Rust (Synchronous):**

```rust
        match r.hset("myhash", "field1", "foo") {
            Ok(res7) => {
                let res7: i32 = res7;
                println!("{res7}");    // >>> 1
            },
            Err(e) => {
                println!("Error setting hash field: {e}");
                return;
            }
        }

        match r.hget("myhash", "field1") {
            Ok(res8) => {
                let res8: Option<String> = res8;
                match res8 {
                    Some(value) => {
                        println!("{value}");    // >>> foo
                    },
                    None => {
                        println!("None");
                    }
                }
            },
            Err(e) => {
                println!("Error getting hash field: {e}");
                return;
            }
        }

        match r.hget("myhash", "field2") {
            Ok(res9) => {
                let res9: Option<String> = res9;
                match res9 {
                    Some(_) => {
                        println!("Some value");
                    },
                    None => {
                        println!("None");    // >>> None
                    }
                }
            },
            Err(e) => {
                println!("Error getting hash field: {e}");
                return;
            }
        }

```



Give these commands a try in the interactive console:


HSET myhash field1 "foo"
HGET myhash field1
HGET myhash field2


## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |

## Return information

**RESP2:**

One of the following:
* [Bulk string reply](../../develop/reference/protocol-spec#bulk-strings): The value associated with the field.
* [Nil reply](../../develop/reference/protocol-spec#bulk-strings): If the field is not present in the hash or key does not exist.

**RESP3:**

One of the following:
* [Bulk string reply](../../develop/reference/protocol-spec#bulk-strings): The value associated with the field.
* [Null reply](../../develop/reference/protocol-spec#nulls): If the field is not present in the hash or key does not exist.


