---
title: HDEL
url: https://redis.io/docs/latest/commands/hdel/
retrieved_utc: '2026-04-09T20:46:04.444641+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/hdel/index.html.md
---

# HDEL

```json metadata
{
  "title": "HDEL",
  "description": "Deletes one or more fields and their values from a hash. Deletes the hash if no fields remain.",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"display_text":"key","key_spec_index":0,"name":"key","type":"key"},{"display_text":"field","multiple":true,"name":"field","type":"string"}],
  "syntax_fmt": "HDEL key field [field ...]",
  "complexity": "O(N) where N is the number of fields to be removed.",
  "group": "hash",
  "command_flags": ["write","fast"],
  "acl_categories": ["@write","@hash","@fast"],
  "since": "2.0.0",
  "arity": -3,
  "key_specs": [{"RW":true,"begin_search":{"spec":{"index":1},"type":"index"},"delete":true,"find_keys":{"spec":{"keystep":1,"lastkey":0,"limit":0},"type":"range"}}],
  "tableOfContents": {"sections":[{"id":"examples","title":"Examples"},{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": [{"codetabsId":"cmds_hash-stephdel","description":"Foundational: Delete one or more fields from a hash using HDEL (returns count of deleted fields, ignores non-existent fields)","difficulty":"beginner","id":"hdel","languages":[{"id":"redis-cli","panelId":"panel_redis-cli_cmds_hash-stephdel"},{"clientId":"redis-py","clientName":"redis-py","id":"Python","langId":"python","panelId":"panel_Python_cmds_hash-stephdel"},{"id":"Node-js","panelId":"panel_Nodejs_cmds_hash-stephdel"},{"clientId":"ioredis","clientName":"ioredis","id":"ioredis","langId":"javascript","panelId":"panel_ioredis_cmds_hash-stephdel"},{"clientId":"jedis","clientName":"Jedis","id":"Java-Sync","langId":"java","panelId":"panel_Java-Sync_cmds_hash-stephdel"},{"clientId":"lettuce","clientName":"Lettuce","id":"Java-Async","langId":"java","panelId":"panel_Java-Async_cmds_hash-stephdel"},{"clientId":"lettuce","clientName":"Lettuce","id":"Java-Reactive","langId":"java","panelId":"panel_Java-Reactive_cmds_hash-stephdel"},{"clientId":"go-redis","clientName":"go-redis","id":"Go","langId":"go","panelId":"panel_Go_cmds_hash-stephdel"},{"clientId":"hiredis","clientName":"hiredis","id":"C","langId":"c","panelId":"panel_C_cmds_hash-stephdel"},{"id":"dotnet-Sync","panelId":"panel_Csharp-Sync_cmds_hash-stephdel"},{"clientId":"predis","clientName":"Predis","id":"PHP","langId":"php","panelId":"panel_PHP_cmds_hash-stephdel"},{"clientId":"redis-rs","clientName":"redis-rs","id":"Rust-Sync","langId":"rust","panelId":"panel_Rust-Sync_cmds_hash-stephdel"},{"clientId":"redis-rs","clientName":"redis-rs","id":"Rust-Async","langId":"rust","panelId":"panel_Rust-Async_cmds_hash-stephdel"}]}]
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

Removes the specified fields from the hash stored at `key`.
Specified fields that do not exist within this hash are ignored.
Deletes the hash if no fields remain.
If `key` does not exist, it is treated as an empty hash and this command returns
`0`.

## Examples

#### Code Examples

Foundational: Delete one or more fields from a hash using HDEL (returns count of deleted fields, ignores non-existent fields)

**Difficulty:** Beginner

**Redis CLI:**

```
HSET myhash field1 "foo"
(integer) 1
HDEL myhash field1
(integer) 1
HDEL myhash field2
(integer) 0
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
        bool hdelRes1 = db.HashSet("myhash", "field1", "foo");

        RedisValue hdelRes2 = db.HashDelete("myhash", "field1");
        Console.WriteLine(hdelRes2);    // >>> 1

        RedisValue hdelRes3 = db.HashDelete("myhash", "field1");
        Console.WriteLine(hdelRes3);    // >>> 0
```

**Go:**

```go
	hdel1, err := rdb.HSet(ctx, "myhash", "field1", "foo").Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(hdel1) // >>> 1

	hdel2, err := rdb.HDel(ctx, "myhash", "field1").Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(hdel2) // >>> 1

	hdel3, err := rdb.HDel(ctx, "myhash", "field2").Result()

	if err != nil {
		fmt.Println(err)
	}

	fmt.Println(hdel3) // >>> 0
```

**Java (Asynchronous - Lettuce):**

```java
            Map<String, String> hDelExampleParams = new HashMap<>();
            hDelExampleParams.put("field1", "foo");

            CompletableFuture<Void> hDelExample = asyncCommands.hset("myhash", hDelExampleParams).thenCompose(res1 -> {
                System.out.println(res1); // >>> 1
                return asyncCommands.hdel("myhash", "field1");
            }).thenCompose(res2 -> {
                System.out.println(res2); // >>> 1
                return asyncCommands.hdel("myhash", "field2");
            }).thenAccept(res3 -> {
                System.out.println(res3); // >>> 0
            }).toCompletableFuture();
```

**Java (Reactive - Lettuce):**

```java
            Map<String, String> hDelExampleParams = new HashMap<>();
            hDelExampleParams.put("field1", "foo");

            Mono<Long> hDelExample1 = reactiveCommands.hset("myhash", hDelExampleParams).doOnNext(result -> {
                System.out.println(result); // >>> 1
            });

            hDelExample1.block();

            Mono<Long> hDelExample2 = reactiveCommands.hdel("myhash", "field1").doOnNext(result -> {
                System.out.println(result); // >>> 1
            });

            hDelExample2.block();

            Mono<Long> hDelExample3 = reactiveCommands.hdel("myhash", "field2").doOnNext(result -> {
                System.out.println(result); // >>> 0
            });
```

**Java (Synchronous - Jedis):**

```java
        Map<String, String> hDelExampleParams = new HashMap<>();
        hDelExampleParams.put("field1", "foo");

        long hDelResult1 = jedis.hset("myhash", hDelExampleParams);
        System.out.println(hDelResult1);    // >>> 1

        long hDelResult2 = jedis.hdel("myhash", "field1");
        System.out.println(hDelResult2);    // >>> 1

        long hDelResult3 = jedis.hdel("myhash", "field2");
        System.out.println(hDelResult3);    // >>> 0
```

**JavaScript (Node.js):**

```javascript
const hDel1 = await client.hSet('myhash', 'field1', 'Hello')
console.log(hDel1) // 1

const hDel2 = await client.hDel('myhash', 'field1')
console.log(hDel2) // 1

const hDel3 = await client.hDel('myhash', 'field2')
console.log(hDel3) // 0

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
const hDel1 = await client.hSet('myhash', 'field1', 'Hello')
console.log(hDel1) // 1

const hDel2 = await client.hDel('myhash', 'field1')
console.log(hDel2) // 1

const hDel3 = await client.hDel('myhash', 'field2')
console.log(hDel3) // 0

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
        $hDelResult1 = $this->redis->hset('myhash', 'field1', 'foo');
        echo "HSET myhash field1 foo: " . $hDelResult1 . "\n"; // >>> 1

        $hDelResult2 = $this->redis->hdel('myhash', 'field1');
        echo "HDEL myhash field1: " . $hDelResult2 . "\n"; // >>> 1

        $hDelResult3 = $this->redis->hdel('myhash', 'field2');
        echo "HDEL myhash field2: " . $hDelResult3 . "\n"; // >>> 0
```

**Python:**

```python
hdel1 = r.hset("myhash", "field1", "foo")
print(hdel1)
# >>> 1

hdel2 = r.hdel("myhash", "field1")
print(hdel2)
# >>> 1

hdel3 = r.hdel("myhash", "field2")
print(hdel3)
# >>> 0

```

**Rust (Asynchronous):**

```rust
        match r.hset("myhash", "field1", "foo").await {
            Ok(hdel1) => {
                let hdel1: i32 = hdel1;
                println!("{hdel1}");    // >>> 1
            },
            Err(e) => {
                println!("Error setting hash field: {e}");
                return;
            }
        }

        match r.hdel("myhash", "field1").await {
            Ok(hdel2) => {
                let hdel2: Option<i32> = hdel2;
                match hdel2 {
                    Some(value) => {
                        println!("{value}");    // >>> 1
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

        match r.hdel("myhash", "field2").await {
            Ok(hdel3) => {
                let hdel3: Option<i32> = hdel3;
                match hdel3 {
                    Some(value) => {
                        println!("{value}");    // >>> 0
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

```

**Rust (Synchronous):**

```rust
        match r.hset("myhash", "field1", "foo") {
            Ok(hdel1) => {
                let hdel1: i32 = hdel1;
                println!("{hdel1}");    // >>> 1
            },
            Err(e) => {
                println!("Error setting hash field: {e}");
                return;
            }
        }

        match r.hdel("myhash", "field1") {
            Ok(hdel2) => {
                let hdel2: Option<i32> = hdel2;
                match hdel2 {
                    Some(value) => {
                        println!("{value}");    // >>> 1
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

        match r.hdel("myhash", "field2") {
            Ok(hdel3) => {
                let hdel3: Option<i32> = hdel3;
                match hdel3 {
                    Some(value) => {
                        println!("{value}");    // >>> 0
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

```



Give these commands a try in the interactive console:


HSET myhash field1 "foo"
HDEL myhash field1
HDEL myhash field2


## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |

## Return information

**RESP2:**

[Integer reply](../../develop/reference/protocol-spec#integers): the number of fields that were removed from the hash, excluding any specified but non-existing fields.

**RESP3:**

[Integer reply](../../develop/reference/protocol-spec#integers): The number of fields that were removed from the hash, excluding any specified but non-existing fields.


