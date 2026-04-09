---
title: DEL
url: https://redis.io/docs/latest/commands/del/
retrieved_utc: '2026-04-09T20:46:03.709337+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/del/index.html.md
---

# DEL

```json metadata
{
  "title": "DEL",
  "description": "Deletes one or more keys.",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"display_text":"key","key_spec_index":0,"multiple":true,"name":"key","type":"key"}],
  "syntax_fmt": "DEL key [key ...]",
  "complexity": "O(N) where N is the number of keys that will be removed. When a key to remove holds a value other than a string, the individual complexity for this key is O(M) where M is the number of elements in the list, set, sorted set or hash. Removing a single key that holds a string value is O(1).",
  "group": "generic",
  "command_flags": ["write"],
  "acl_categories": ["@keyspace","@write","@slow"],
  "since": "1.0.0",
  "arity": -2,
  "key_specs": [{"RM":true,"begin_search":{"spec":{"index":1},"type":"index"},"delete":true,"find_keys":{"spec":{"keystep":1,"lastkey":-1,"limit":0},"type":"range"}}],
  "tableOfContents": {"sections":[{"id":"examples","title":"Examples"},{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": [{"codetabsId":"cmds_generic-stepdel","commands":[{"acl_categories":["@write","@string","@slow"],"complexity":"O(1)","name":"SET"},{"acl_categories":["@keyspace","@write","@slow"],"complexity":"O(N)","name":"DEL"}],"description":"Foundational: Delete one or more keys using DEL (ignores non-existent keys, returns count of deleted keys)","difficulty":"beginner","id":"del","languages":[{"id":"redis-cli","panelId":"panel_redis-cli_cmds_generic-stepdel"},{"clientId":"redis-py","clientName":"redis-py","id":"Python","langId":"python","panelId":"panel_Python_cmds_generic-stepdel"},{"id":"Node-js","panelId":"panel_Nodejs_cmds_generic-stepdel"},{"clientId":"ioredis","clientName":"ioredis","id":"ioredis","langId":"javascript","panelId":"panel_ioredis_cmds_generic-stepdel"},{"clientId":"jedis","clientName":"Jedis","id":"Java-Sync","langId":"java","panelId":"panel_Java-Sync_cmds_generic-stepdel"},{"clientId":"lettuce","clientName":"Lettuce","id":"Java-Async","langId":"java","panelId":"panel_Java-Async_cmds_generic-stepdel"},{"clientId":"lettuce","clientName":"Lettuce","id":"Java-Reactive","langId":"java","panelId":"panel_Java-Reactive_cmds_generic-stepdel"},{"clientId":"go-redis","clientName":"go-redis","id":"Go","langId":"go","panelId":"panel_Go_cmds_generic-stepdel"},{"clientId":"hiredis","clientName":"hiredis","id":"C","langId":"c","panelId":"panel_C_cmds_generic-stepdel"},{"id":"dotnet-Sync","panelId":"panel_Csharp-Sync_cmds_generic-stepdel"},{"clientId":"predis","clientName":"Predis","id":"PHP","langId":"php","panelId":"panel_PHP_cmds_generic-stepdel"},{"clientId":"redis-rs","clientName":"redis-rs","id":"Rust-Sync","langId":"rust","panelId":"panel_Rust-Sync_cmds_generic-stepdel"},{"clientId":"redis-rs","clientName":"redis-rs","id":"Rust-Async","langId":"rust","panelId":"panel_Rust-Async_cmds_generic-stepdel"}]}]
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



Removes the specified keys.
A key is ignored if it does not exist.

## Examples

#### Code Examples

Foundational: Delete one or more keys using DEL (ignores non-existent keys, returns count of deleted keys)

**Difficulty:** Beginner

**Commands:** SET, DEL

**Complexity:**
- SET: O(1)
- DEL: O(N)

**Redis CLI:**

```
> SET key1 "Hello"
"OK"
> SET key2 "World"
"OK"
> DEL key1 key2 key3
(integer) 2
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
        bool delResult1 = db.StringSet("key1", "Hello");
        Console.WriteLine(delResult1);  // >>> true

        bool delResult2 = db.StringSet("key2", "World");
        Console.WriteLine(delResult2);  // >>> true

        long delResult3 = db.KeyDelete(["key1", "key2", "key3"]);
        Console.WriteLine(delResult3);  // >>> 2
```

**Go:**

```go
	delResult1, err := rdb.Set(ctx, "key1", "Hello", 0).Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(delResult1) // >>> OK

	delResult2, err := rdb.Set(ctx, "key2", "World", 0).Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(delResult2) // >>> OK

	delResult3, err := rdb.Del(ctx, "key1", "key2", "key3").Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(delResult3) // >>> 2
```

**Java (Asynchronous - Lettuce):**

```java
package io.redis.examples.async;

import io.lettuce.core.*;

import io.lettuce.core.api.async.RedisAsyncCommands;

import io.lettuce.core.api.StatefulRedisConnection;

import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.concurrent.CompletableFuture;

public class CmdsGenericExample {

    public void run() {

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
            existsExample.join();

            CompletableFuture<Void> keysExample = asyncCommands.mset(Map.of(
                    "firstname", "Jack",
                    "lastname", "Stuntman",
                    "age", "35"
            )).thenCompose(res1 -> {
                System.out.println(res1); // >>> OK

                return asyncCommands.keys("*name*");
            }).thenCompose(res2 -> {
                Collections.sort(res2);
                System.out.println(res2); // >>> [firstname, lastname]

                return asyncCommands.keys("a??");
            }).thenCompose(res3 -> {
                System.out.println(res3); // >>> [age]

                return asyncCommands.keys("*");
            }).thenAccept(res4 -> {
                Collections.sort(res4);
                System.out.println(res4); // >>> [age, firstname, lastname]
            }).toCompletableFuture();
            keysExample.join();
        } finally {
            redisClient.shutdown();
        }
    }
}

```

**Java (Reactive - Lettuce):**

```java
package io.redis.examples.reactive;

import io.lettuce.core.*;
import io.lettuce.core.api.reactive.RedisReactiveCommands;
import io.lettuce.core.api.StatefulRedisConnection;
import reactor.core.publisher.Mono;

import java.util.Collections;
import java.util.Map;


public class CmdsGenericExample {

    public void run() {
        RedisClient redisClient = RedisClient.create("redis://localhost:6379");

        try (StatefulRedisConnection<String, String> connection = redisClient.connect()) {
            RedisReactiveCommands<String, String> reactiveCommands = connection.reactive();

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

            Mono.when(existsExample).block();

            Mono<Void> keysExample = reactiveCommands.mset(Map.of(
                    "firstname", "Jack",
                    "lastname", "Stuntman",
                    "age", "35"
            )).doOnNext(res1 -> {
                System.out.println(res1); // >>> OK
            }).then(reactiveCommands.keys("*name*").collectList()).doOnNext(res2 -> {
                Collections.sort(res2);
                System.out.println(res2); // >>> [firstname, lastname]
            }).then(reactiveCommands.keys("a??").collectList()).doOnNext(res3 -> {
                System.out.println(res3); // >>> [age]
            }).then(reactiveCommands.keys("*").collectList()).doOnNext(res4 -> {
                Collections.sort(res4);
                System.out.println(res4); // >>> [age, firstname, lastname]
            }).then();

            Mono.when(keysExample).block();

        } finally {
            redisClient.shutdown();
        }
    }

}

```

**Java (Synchronous - Jedis):**

```java
        String delResult1 = jedis.set("key1", "Hello");
        System.out.println(delResult1); // >>> OK

        String delResult2 = jedis.set("key2", "World");
        System.out.println(delResult2); // >>> OK

        long delResult3 = jedis.del("key1", "key2", "key3");
        System.out.println(delResult3); // >>> 2
```

**JavaScript (Node.js):**

```javascript
const delRes1 = await client.set('key1', 'Hello');
console.log(delRes1); // OK

const delRes2 = await client.set('key2', 'World');
console.log(delRes2); // OK

const delRes3 = await client.del(['key1', 'key2', 'key3']);
console.log(delRes3); // 2
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
const delRes1 = await client.set('key1', 'Hello');
console.log(delRes1); // OK

const delRes2 = await client.set('key2', 'World');
console.log(delRes2); // OK

const delRes3 = await client.del(['key1', 'key2', 'key3']);
console.log(delRes3); // 2
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
<?php
use PHPUnit\Framework\TestCase;
use Predis\Client as PredisClient;

class CmdsGenericTest
{
    public function testCmdsGeneric() {
        $r = new PredisClient([
            'scheme'   => 'tcp',
            'host'     => '127.0.0.1',
            'port'     => 6379,
            'password' => '',
            'database' => 0,
        ]);

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

        $keysResult1 = $r->mset(['firstname' => 'Jack', 'lastname' => 'Stuntman', 'age' => '35']);
        echo $keysResult1 . PHP_EOL; // >>> OK

        $keysResult2 = $r->keys('*name*');
        sort($keysResult2);
        echo implode(', ', $keysResult2) . PHP_EOL; // >>> firstname, lastname

        $keysResult3 = $r->keys('a??');
        echo implode(', ', $keysResult3) . PHP_EOL; // >>> age

        $keysResult4 = $r->keys('*');
        sort($keysResult4);
        echo implode(', ', $keysResult4) . PHP_EOL; // >>> age, firstname, lastname

    }
}

```

**Python:**

```python
res = r.set("key1", "Hello")
print(res)
# >>> True

res = r.set("key2", "World")
print(res)
# >>> True

res = r.delete("key1", "key2", "key3")
print(res)
# >>> 2
```

**Rust (Asynchronous):**

```rust
        if let Ok(res) = r.set("key1", "Hello").await {
            let res: String = res;
            println!("{res}");    // >>> OK
        }

        if let Ok(res) = r.set("key2", "World").await {
            let res: String = res;
            println!("{res}");    // >>> OK
        }

        match r.del(&["key1", "key2", "key3"]).await {
            Ok(res) => {
                let res: i32 = res;
                println!("{res}");    // >>> 2
            },
            Err(e) => {
                println!("Error deleting keys: {e}");
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

        if let Ok(res) = r.set("key2", "World") {
            let res: String = res;
            println!("{res}");    // >>> OK
        }

        match r.del(&["key1", "key2", "key3"]) {
            Ok(res) => {
                let res: i32 = res;
                println!("{res}");    // >>> 2
            },
            Err(e) => {
                println!("Error deleting keys: {e}");
                return;
            }
        }
```



Give these commands a try in the interactive console:


SET key1 "Hello"
SET key2 "World"
DEL key1 key2 key3


## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |

## Return information

**RESP2:**

[Integer reply](../../develop/reference/protocol-spec#integers): the number of keys that were removed.

**RESP3:**

[Integer reply](../../develop/reference/protocol-spec#integers): the number of keys that were removed.


