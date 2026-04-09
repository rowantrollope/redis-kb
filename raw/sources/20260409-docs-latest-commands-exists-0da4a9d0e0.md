---
title: EXISTS
url: https://redis.io/docs/latest/commands/exists/
retrieved_utc: '2026-04-09T20:46:03.862655+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/exists/index.html.md
---

# EXISTS

```json metadata
{
  "title": "EXISTS",
  "description": "Determines whether one or more keys exist.",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"display_text":"key","key_spec_index":0,"multiple":true,"name":"key","type":"key"}],
  "syntax_fmt": "EXISTS key [key ...]",
  "complexity": "O(N) where N is the number of keys to check.",
  "group": "generic",
  "command_flags": ["readonly","fast"],
  "acl_categories": ["@keyspace","@read","@fast"],
  "since": "1.0.0",
  "arity": -2,
  "key_specs": [{"RO":true,"begin_search":{"spec":{"index":1},"type":"index"},"find_keys":{"spec":{"keystep":1,"lastkey":-1,"limit":0},"type":"range"}}],
  "tableOfContents": {"sections":[{"id":"examples","title":"Examples"},{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": [{"codetabsId":"cmds_generic-stepexists","description":"Foundational: Check if one or more keys exist using EXISTS (returns count of existing keys, useful for conditional logic)","difficulty":"beginner","id":"exists","languages":[{"id":"redis-cli","panelId":"panel_redis-cli_cmds_generic-stepexists"},{"clientId":"redis-py","clientName":"redis-py","id":"Python","langId":"python","panelId":"panel_Python_cmds_generic-stepexists"},{"id":"Node-js","panelId":"panel_Nodejs_cmds_generic-stepexists"},{"clientId":"ioredis","clientName":"ioredis","id":"ioredis","langId":"javascript","panelId":"panel_ioredis_cmds_generic-stepexists"},{"clientId":"jedis","clientName":"Jedis","id":"Java-Sync","langId":"java","panelId":"panel_Java-Sync_cmds_generic-stepexists"},{"clientId":"lettuce","clientName":"Lettuce","id":"Java-Async","langId":"java","panelId":"panel_Java-Async_cmds_generic-stepexists"},{"clientId":"lettuce","clientName":"Lettuce","id":"Java-Reactive","langId":"java","panelId":"panel_Java-Reactive_cmds_generic-stepexists"},{"clientId":"go-redis","clientName":"go-redis","id":"Go","langId":"go","panelId":"panel_Go_cmds_generic-stepexists"},{"clientId":"hiredis","clientName":"hiredis","id":"C","langId":"c","panelId":"panel_C_cmds_generic-stepexists"},{"id":"dotnet-Sync","panelId":"panel_Csharp-Sync_cmds_generic-stepexists"},{"clientId":"predis","clientName":"Predis","id":"PHP","langId":"php","panelId":"panel_PHP_cmds_generic-stepexists"},{"clientId":"redis-rs","clientName":"redis-rs","id":"Rust-Sync","langId":"rust","panelId":"panel_Rust-Sync_cmds_generic-stepexists"},{"clientId":"redis-rs","clientName":"redis-rs","id":"Rust-Async","langId":"rust","panelId":"panel_Rust-Async_cmds_generic-stepexists"}]}]
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


This command's behavior varies in clustered Redis environments. See the [multi-key operations]() page for more information.



Returns if `key` exists.

The user should be aware that if the same existing key is mentioned in the arguments multiple times, it will be counted multiple times. So if `somekey` exists, `EXISTS somekey somekey` will return 2.

## Examples

#### Code Examples

Foundational: Check if one or more keys exist using EXISTS (returns count of existing keys, useful for conditional logic)

**Difficulty:** Beginner

**Redis CLI:**

```
SET key1 "Hello"
EXISTS key1
EXISTS nosuchkey
SET key2 "World"
EXISTS key1 key2 nosuchkey
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

    // Set up keys
    reply = redisCommand(c, "MSET %s %s %s %s %s %s",
        "firstname", "Jack", "lastname", "Stuntman", "age", "35");
    printf("MSET firstname Jack lastname Stuntman age 35: %s\n", reply->str);
    // >>> OK
    freeReplyObject(reply);

    // Keys matching *name*
    reply = redisCommand(c, "KEYS %s", "*name*");
    printf("KEYS *name*:\n");
    for (size_t i = 0; i < reply->elements; i++) {
        printf("  %s\n", reply->element[i]->str);
    }
    // >>> firstname
    // >>> lastname
    freeReplyObject(reply);

    // Keys matching a??
    reply = redisCommand(c, "KEYS %s", "a??");
    printf("KEYS a??:\n");
    for (size_t i = 0; i < reply->elements; i++) {
        printf("  %s\n", reply->element[i]->str);
    }
    // >>> age
    freeReplyObject(reply);

    // All keys
    reply = redisCommand(c, "KEYS %s", "*");
    printf("KEYS *:\n");
    for (size_t i = 0; i < reply->elements; i++) {
        printf("  %s\n", reply->element[i]->str);
    }
    // >>> age
    // >>> firstname
    // >>> lastname
    freeReplyObject(reply);


    redisFree(c);

    return 0;
}


```

**C# (Synchronous):**

```csharp
        bool existsResult1 = db.StringSet("key1", "Hello");
        Console.WriteLine(existsResult1);  // >>> true

        bool existsResult2 = db.KeyExists("key1");
        Console.WriteLine(existsResult2);  // >>> true

        bool existsResult3 = db.KeyExists("nosuchkey");
        Console.WriteLine(existsResult3);  // >>> false

        bool existsResult4 = db.StringSet("key2", "World");
        Console.WriteLine(existsResult4);  // >>> true

        long existsResult5 = db.KeyExists(["key1", "key2", "nosuchkey"]);
        Console.WriteLine(existsResult5);  // >>> 2
```

**Go:**

```go
	existsResult1, err := rdb.Set(ctx, "key1", "Hello", 0).Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(existsResult1) // >>> OK

	existsResult2, err := rdb.Exists(ctx, "key1").Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(existsResult2) // >>> 1

	existsResult3, err := rdb.Exists(ctx, "nosuchkey").Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(existsResult3) // >>> 0

	existsResult4, err := rdb.Set(ctx, "key2", "World", 0).Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(existsResult4) // >>> OK

	existsResult5, err := rdb.Exists(ctx, "key1", "key2", "nosuchkey").Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(existsResult5) // >>> 2
```

**Java (Asynchronous - Lettuce):**

```java
            CompletableFuture<Void> existsExample = asyncCommands.set("key1", "Hello").thenCompose(res1 -> {
                System.out.println(res1); // >>> OK

                return asyncCommands.exists("key1");
            }).thenCompose(res2 -> {
                System.out.println(res2); // >>> 1

                return asyncCommands.exists("nosuchkey");
            }).thenCompose(res3 -> {
                System.out.println(res3); // >>> 0

                return asyncCommands.set("key2", "World");
            }).thenCompose(res4 -> {
                System.out.println(res4); // >>> OK

                return asyncCommands.exists("key1", "key2", "nosuchkey");
            }).thenAccept(res5 -> {
                System.out.println(res5); // >>> 2
            }).toCompletableFuture();
```

**Java (Reactive - Lettuce):**

```java
            Mono<Void> existsExample = reactiveCommands.set("key1", "Hello").doOnNext(res1 -> {
                System.out.println(res1); // >>> OK
            }).then(reactiveCommands.exists("key1")).doOnNext(res2 -> {
                System.out.println(res2); // >>> 1
            }).then(reactiveCommands.exists("nosuchkey")).doOnNext(res3 -> {
                System.out.println(res3); // >>> 0
            }).then(reactiveCommands.set("key2", "World")).doOnNext(res4 -> {
                System.out.println(res4); // >>> OK
            }).then(reactiveCommands.exists("key1", "key2", "nosuchkey")).doOnNext(res5 -> {
                System.out.println(res5); // >>> 2
            }).then();
```

**Java (Synchronous - Jedis):**

```java
        String existsResult1 = jedis.set("key1", "Hello");
        System.out.println(existsResult1); // >>> OK

        boolean existsResult2 = jedis.exists("key1");
        System.out.println(existsResult2); // >>> true

        boolean existsResult3 = jedis.exists("nosuchkey");
        System.out.println(existsResult3); // >>> false

        String existsResult4 = jedis.set("key2", "World");
        System.out.println(existsResult4); // >>> OK

        long existsResult5 = jedis.exists("key1", "key2", "nosuchkey");
        System.out.println(existsResult5); // >>> 2
```

**JavaScript (Node.js):**

```javascript
const existsRes1 = await client.set('key1', 'Hello');
console.log(existsRes1); // OK

const existsRes2 = await client.exists('key1');
console.log(existsRes2); // 1

const existsRes3 = await client.exists('nosuchkey');
console.log(existsRes3); // 0

const existsRes4 = await client.set('key2', 'World');
console.log(existsRes4); // OK

const existsRes5 = await client.exists(['key1', 'key2', 'nosuchkey']);
console.log(existsRes5); // 2
```

**JavaScript (Node.js):**

```javascript

import assert from 'node:assert';
import { Redis } from 'ioredis';

const redis = new Redis();


const keysRes1 = await redis.mset({ firstname: 'Jack', lastname: 'Stuntman', age: '35' });
console.log(keysRes1); // >>> OK

const keysRes2 = await redis.keys('*name*');
console.log(keysRes2.sort()); // >>> ['firstname', 'lastname']

const keysRes3 = await redis.keys('a??');
console.log(keysRes3); // >>> ['age']

const keysRes4 = await redis.keys('*');
console.log(keysRes4.sort()); // >>> ['age', 'firstname', 'lastname']


redis.disconnect();


```

**JavaScript (Node.js):**

```javascript
const existsRes1 = await client.set('key1', 'Hello');
console.log(existsRes1); // OK

const existsRes2 = await client.exists('key1');
console.log(existsRes2); // 1

const existsRes3 = await client.exists('nosuchkey');
console.log(existsRes3); // 0

const existsRes4 = await client.set('key2', 'World');
console.log(existsRes4); // OK

const existsRes5 = await client.exists(['key1', 'key2', 'nosuchkey']);
console.log(existsRes5); // 2
```

**JavaScript (Node.js):**

```javascript

import assert from 'node:assert';
import { Redis } from 'ioredis';

const redis = new Redis();


const keysRes1 = await redis.mset({ firstname: 'Jack', lastname: 'Stuntman', age: '35' });
console.log(keysRes1); // >>> OK

const keysRes2 = await redis.keys('*name*');
console.log(keysRes2.sort()); // >>> ['firstname', 'lastname']

const keysRes3 = await redis.keys('a??');
console.log(keysRes3); // >>> ['age']

const keysRes4 = await redis.keys('*');
console.log(keysRes4.sort()); // >>> ['age', 'firstname', 'lastname']


redis.disconnect();


```

**PHP:**

```php
        $existsResult1 = $r->set('key1', 'Hello');
        echo $existsResult1 . PHP_EOL; // >>> OK

        $existsResult2 = $r->exists('key1');
        echo $existsResult2 . PHP_EOL; // >>> 1

        $existsResult3 = $r->exists('nosuchkey');
        echo $existsResult3 . PHP_EOL; // >>> 0

        $existsResult4 = $r->set('key2', 'World');
        echo $existsResult4 . PHP_EOL; // >>> OK

        $existsResult5 = $r->exists('key1', 'key2', 'nosuchkey');
        echo $existsResult5 . PHP_EOL; // >>> 2
```

**Python:**

```python
res = r.set("key1", "Hello")
print(res)
# >>> True

res = r.exists("key1")
print(res)
# >>> 1

res = r.exists("nosuchkey")
print(res)
# >>> 0

res = r.set("key2", "World")
print(res)
# >>> True

res = r.exists("key1", "key2", "nosuchkey")
print(res)
# >>> 2
```

**Rust (Asynchronous):**

```rust
        if let Ok(res) = r.set("key1", "Hello").await {
            let res: String = res;
            println!("{res}");    // >>> OK
        }

        match r.exists("key1").await {
            Ok(res) => {
                let res: i32 = res;
                println!("{res}");    // >>> 1
            },
            Err(e) => {
                println!("Error checking key existence: {e}");
                return;
            }
        }

        match r.exists("nosuchkey").await {
            Ok(res) => {
                let res: i32 = res;
                println!("{res}");    // >>> 0
            },
            Err(e) => {
                println!("Error checking key existence: {e}");
                return;
            }
        }

        if let Ok(res) = r.set("key2", "World").await {
            let res: String = res;
            println!("{res}");    // >>> OK
        }

        match r.exists(&["key1", "key2", "nosuchkey"]).await {
            Ok(res) => {
                let res: i32 = res;
                println!("{res}");    // >>> 2
            },
            Err(e) => {
                println!("Error checking key existence: {e}");
                return;
            }
        }
```

**Rust (Synchronous):**

```rust
        if let Ok(res) = r.set("key1", "Hello") {
            let res: String = res;
            println!("{res}");    // >>> OK
        }

        match r.exists("key1") {
            Ok(res) => {
                let res: i32 = res;
                println!("{res}");    // >>> 1
            },
            Err(e) => {
                println!("Error checking key existence: {e}");
                return;
            }
        }

        match r.exists("nosuchkey") {
            Ok(res) => {
                let res: i32 = res;
                println!("{res}");    // >>> 0
            },
            Err(e) => {
                println!("Error checking key existence: {e}");
                return;
            }
        }

        if let Ok(res) = r.set("key2", "World") {
            let res: String = res;
            println!("{res}");    // >>> OK
        }

        match r.exists(&["key1", "key2", "nosuchkey"]) {
            Ok(res) => {
                let res: i32 = res;
                println!("{res}");    // >>> 2
            },
            Err(e) => {
                println!("Error checking key existence: {e}");
                return;
            }
        }
```



Give these commands a try in the interactive console:


SET key1 "Hello"
EXISTS key1
EXISTS nosuchkey
SET key2 "World"
EXISTS key1 key2 nosuchkey


## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |

## Return information

**RESP2:**

[Integer reply](../../develop/reference/protocol-spec#integers): the number of keys that exist from those specified as arguments.

**RESP3:**

[Integer reply](../../develop/reference/protocol-spec#integers): the number of keys that exist from those specified as arguments.


