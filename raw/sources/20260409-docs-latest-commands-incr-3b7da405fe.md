---
title: INCR
url: https://redis.io/docs/latest/commands/incr/
retrieved_utc: '2026-04-09T20:46:04.841999+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/incr/index.html.md
---

# INCR

```json metadata
{
  "title": "INCR",
  "description": "Increments the integer value of a key by one. Uses 0 as initial value if the key doesn't exist.",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"display_text":"key","key_spec_index":0,"name":"key","type":"key"}],
  "syntax_fmt": "INCR key",
  "complexity": "O(1)",
  "group": "string",
  "command_flags": ["write","denyoom","fast"],
  "acl_categories": ["@write","@string","@fast"],
  "since": "1.0.0",
  "arity": 2,
  "key_specs": [{"RW":true,"access":true,"begin_search":{"spec":{"index":1},"type":"index"},"find_keys":{"spec":{"keystep":1,"lastkey":0,"limit":0},"type":"range"},"update":true}],
  "tableOfContents": {"sections":[{"id":"examples","title":"Examples"},{"id":"pattern-counter","title":"Pattern: Counter"},{"id":"pattern-rate-limiter","title":"Pattern: Rate limiter"},{"id":"pattern-rate-limiter-1","title":"Pattern: Rate limiter 1"},{"id":"pattern-rate-limiter-2","title":"Pattern: Rate limiter 2"},{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": [{"codetabsId":"cmds_string-stepincr","commands":[{"acl_categories":["@write","@string","@slow"],"complexity":"O(1)","name":"SET"},{"acl_categories":["@write","@string","@fast"],"complexity":"O(1)","name":"INCR"},{"acl_categories":["@read","@string","@fast"],"complexity":"O(1)","name":"GET"}],"description":"Foundational: Increment the integer value of a key by one using INCR (initializes to 0 if key doesn\u0026amp;#39;t exist)","difficulty":"beginner","id":"incr","languages":[{"id":"redis-cli","panelId":"panel_redis-cli_cmds_string-stepincr"},{"clientId":"redis-py","clientName":"redis-py","id":"Python","langId":"python","panelId":"panel_Python_cmds_string-stepincr"},{"id":"Node-js","panelId":"panel_Nodejs_cmds_string-stepincr"},{"clientId":"ioredis","clientName":"ioredis","id":"ioredis","langId":"javascript","panelId":"panel_ioredis_cmds_string-stepincr"},{"clientId":"jedis","clientName":"Jedis","id":"Java-Sync","langId":"java","panelId":"panel_Java-Sync_cmds_string-stepincr"},{"clientId":"lettuce","clientName":"Lettuce","id":"Java-Async","langId":"java","panelId":"panel_Java-Async_cmds_string-stepincr"},{"clientId":"lettuce","clientName":"Lettuce","id":"Java-Reactive","langId":"java","panelId":"panel_Java-Reactive_cmds_string-stepincr"},{"clientId":"go-redis","clientName":"go-redis","id":"Go","langId":"go","panelId":"panel_Go_cmds_string-stepincr"},{"clientId":"hiredis","clientName":"hiredis","id":"C","langId":"c","panelId":"panel_C_cmds_string-stepincr"},{"id":"dotnet-Sync","panelId":"panel_Csharp-Sync_cmds_string-stepincr"},{"clientId":"predis","clientName":"Predis","id":"PHP","langId":"php","panelId":"panel_PHP_cmds_string-stepincr"},{"clientId":"redis-rs","clientName":"redis-rs","id":"Rust-Sync","langId":"rust","panelId":"panel_Rust-Sync_cmds_string-stepincr"},{"clientId":"redis-rs","clientName":"redis-rs","id":"Rust-Async","langId":"rust","panelId":"panel_Rust-Async_cmds_string-stepincr"}]}]
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

Increments the number stored at `key` by one.
If the key does not exist, it is set to `0` before performing the operation.
An error is returned if the key contains a value of the wrong type or contains a
string that can not be represented as integer.
This operation is limited to 64 bit signed integers.

**Note**: this is a string operation because Redis does not have a dedicated
integer type.
The string stored at the key is interpreted as a base-10 **64 bit signed
integer** to execute the operation.

Redis stores integers in their integer representation, so for string values
that actually hold an integer, there is no overhead for storing the string
representation of the integer.

## Examples

#### Code Examples

Foundational: Increment the integer value of a key by one using INCR (initializes to 0 if key doesn't exist)

**Difficulty:** Beginner

**Commands:** SET, INCR, GET

**Complexity:**
- SET: O(1)
- INCR: O(1)
- GET: O(1)

**Redis CLI:**

```
> SET mykey "10"
"OK"
> INCR mykey
(integer) 11
> GET mykey
"11"
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


    redisReply *reply = redisCommand(c, "SET key1 Hello");
    freeReplyObject(reply);

    reply = redisCommand(c, "SET key2 World");
    freeReplyObject(reply);

    reply = redisCommand(c, "MGET key1 key2 nonexisting");

    for (size_t i = 0; i < reply->elements; i++) {
        if (i > 0) {
            printf(", ");
        }

        if (reply->element[i]->type == REDIS_REPLY_NIL) {
            printf("null");
        } else {
            printf("%s", reply->element[i]->str);
        }
    }
    printf("\n");
    // >>> Hello, World, null


    freeReplyObject(reply);
    redisReply *cleanup2 = redisCommand(c, "DEL key1 key2 nonexisting");
    freeReplyObject(cleanup2);

    redisFree(c);

    return 0;
}

```

**C# (Synchronous):**

```csharp
        bool incrResult1 = db.StringSet("mykey", "10");
        Console.WriteLine(incrResult1); // >>> true

        long incrResult2 = db.StringIncrement("mykey");
        Console.WriteLine(incrResult2); // >>> 11

        RedisValue incrResult3 = db.StringGet("mykey");
        Console.WriteLine(incrResult3); // >>> 11
```

**Go:**

```go
	incrResult1, err := rdb.Set(ctx, "mykey", "10", 0).Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(incrResult1) // >>> OK

	incrResult2, err := rdb.Incr(ctx, "mykey").Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(incrResult2) // >>> 11

	incrResult3, err := rdb.Get(ctx, "mykey").Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(incrResult3) // >>> 11
```

**Java (Asynchronous - Lettuce):**

```java
package io.redis.examples.async;

import io.lettuce.core.RedisClient;
import io.lettuce.core.api.StatefulRedisConnection;
import io.lettuce.core.api.async.RedisAsyncCommands;

import java.util.concurrent.CompletableFuture;

public class CmdsStringExample {

    public void run() {
        RedisClient redisClient = RedisClient.create("redis://localhost:6379");

        try (StatefulRedisConnection<String, String> connection = redisClient.connect()) {
            RedisAsyncCommands<String, String> asyncCommands = connection.async();


            CompletableFuture<Void> mgetExample = asyncCommands.set("key1", "Hello")
                    .thenCompose(res1 -> asyncCommands.set("key2", "World"))
                    .thenCompose(res2 -> asyncCommands.mget("key1", "key2", "nonexisting"))
                    .thenAccept(res3 -> {
                        System.out.println(res3);
                        // >>> [KeyValue[key1, Hello], KeyValue[key2, World], KeyValue[nonexisting, null]]
                    })
                    .toCompletableFuture();

            mgetExample.join();
        } finally {
            redisClient.shutdown();
        }
    }
}

```

**Java (Reactive - Lettuce):**

```java
package io.redis.examples.reactive;

import io.lettuce.core.RedisClient;
import io.lettuce.core.api.StatefulRedisConnection;
import io.lettuce.core.api.reactive.RedisReactiveCommands;


import reactor.core.publisher.Mono;

public class CmdsStringExample {

    public void run() {
        RedisClient redisClient = RedisClient.create("redis://localhost:6379");

        try (StatefulRedisConnection<String, String> connection = redisClient.connect()) {
            RedisReactiveCommands<String, String> reactiveCommands = connection.reactive();


            Mono<Void> mgetExample = reactiveCommands.set("key1", "Hello")
                    .flatMap(res1 -> reactiveCommands.set("key2", "World"))
                    .flatMap(res2 -> reactiveCommands.mget("key1", "key2", "nonexisting").collectList())
                    .doOnNext(res3 -> {
                        System.out.println(res3);
                        // >>> [KeyValue[key1, Hello], KeyValue[key2, World], KeyValue[nonexisting, null]]
                    })
                    .then();

            mgetExample.block();
        } finally {
            redisClient.shutdown();
        }
    }
}

```

**Java (Synchronous - Jedis):**

```java
        String incrResult1 = jedis.set("mykey", "10");
        System.out.println(incrResult1);    // >>> OK

        long incrResult2 = jedis.incr("mykey");
        System.out.println(incrResult2);    // >>> 11

        String incrResult3 = jedis.get("mykey");
        System.out.println(incrResult3);    // >>> 11
```

**JavaScript (Node.js):**

```javascript
import assert from 'node:assert';
import { createClient } from 'redis';

const client = createClient();
await client.connect().catch(console.error);


await client.set('key1', 'Hello');
await client.set('key2', 'World');

const mgetResult = await client.mGet(['key1', 'key2', 'nonexisting']);
console.log(mgetResult); // >>> [ 'Hello', 'World', null ]


await client.close();

```

**JavaScript (Node.js):**

```javascript

import assert from 'node:assert';
import { Redis } from 'ioredis';

const redis = new Redis();


await redis.set('key1', 'Hello');
await redis.set('key2', 'World');

const mgetResult = await redis.mget('key1', 'key2', 'nonexisting');
console.log(mgetResult); // >>> ['Hello', 'World', null]


redis.disconnect();

```

**JavaScript (Node.js):**

```javascript
import assert from 'node:assert';
import { createClient } from 'redis';

const client = createClient();
await client.connect().catch(console.error);


await client.set('key1', 'Hello');
await client.set('key2', 'World');

const mgetResult = await client.mGet(['key1', 'key2', 'nonexisting']);
console.log(mgetResult); // >>> [ 'Hello', 'World', null ]


await client.close();

```

**JavaScript (Node.js):**

```javascript

import assert from 'node:assert';
import { Redis } from 'ioredis';

const redis = new Redis();


await redis.set('key1', 'Hello');
await redis.set('key2', 'World');

const mgetResult = await redis.mget('key1', 'key2', 'nonexisting');
console.log(mgetResult); // >>> ['Hello', 'World', null]


redis.disconnect();

```

**PHP:**

```php
<?php
use PHPUnit\Framework\TestCase;
use Predis\Client as PredisClient;

class CmdsStringTest
{
    public function testCmdsString() {
        $r = new PredisClient([
            'scheme'   => 'tcp',
            'host'     => '127.0.0.1',
            'port'     => 6379,
            'password' => '',
            'database' => 0,
        ]);


        $r->set('key1', 'Hello');
        $r->set('key2', 'World');

        $mgetResult = $r->mget(['key1', 'key2', 'nonexisting']);
        echo json_encode($mgetResult) . PHP_EOL; // >>> ["Hello","World",null]

    }
}

```

**Python:**

```python
import redis

r = redis.Redis(decode_responses=True)


r.set("key1", "Hello")
r.set("key2", "World")

mget_result = r.mget("key1", "key2", "nonexisting")
print(mget_result)
# >>> ['Hello', 'World', None]


```

**Rust (Asynchronous):**

```rust
mod cmds_string_tests {
    use redis::AsyncCommands;

    async fn run() {
        let mut r = match redis::Client::open("redis://127.0.0.1") {
            Ok(client) => match client.get_multiplexed_async_connection().await {
                Ok(conn) => conn,
                Err(e) => {
                    println!("Failed to connect to Redis: {e}");
                    return;
                }
            },
            Err(e) => {
                println!("Failed to create Redis client: {e}");
                return;
            }
        };


        if let Ok(res) = r.set("key1", "Hello").await {
            let _: String = res;
        }

        if let Ok(res) = r.set("key2", "World").await {
            let _: String = res;
        }

        match r.mget(&["key1", "key2", "nonexisting"]).await {
            Ok(mget_result) => {
                let mget_result: Vec<Option<String>> = mget_result;
                println!("{mget_result:?}");    // >>> [Some("Hello"), Some("World"), None]
            }
            Err(e) => {
                println!("Error getting values: {e}");
            }
        }

    }
}

```

**Rust (Synchronous):**

```rust
mod cmds_string_tests {
    use redis::Commands;

    fn run() {
        let mut r = match redis::Client::open("redis://127.0.0.1") {
            Ok(client) => match client.get_connection() {
                Ok(conn) => conn,
                Err(e) => {
                    println!("Failed to connect to Redis: {e}");
                    return;
                }
            },
            Err(e) => {
                println!("Failed to create Redis client: {e}");
                return;
            }
        };


        if let Ok(res) = r.set("key1", "Hello") {
            let _: String = res;
        }

        if let Ok(res) = r.set("key2", "World") {
            let _: String = res;
        }

        match r.mget(&["key1", "key2", "nonexisting"]) {
            Ok(mget_result) => {
                let mget_result: Vec<Option<String>> = mget_result;
                println!("{mget_result:?}");    // >>> [Some("Hello"), Some("World"), None]
            }
            Err(e) => {
                println!("Error getting values: {e}");
            }
        }

    }
}

```



Give this command a try in the interactive console:


SET mykey "10"
INCR mykey
GET mykey


## Pattern: Counter

The counter pattern is the most obvious thing you can do with Redis atomic
increment operations.
The idea is simply send an `INCR` command to Redis every time an operation
occurs.
For instance in a web application we may want to know how many page views this
user did every day of the year.

To do so the web application may simply increment a key every time the user
performs a page view, creating the key name concatenating the User ID and a
string representing the current date.

This simple pattern can be extended in many ways:

* It is possible to use `INCR` and [`EXPIRE`]() together at every page view to have
  a counter counting only the latest N page views separated by less than the
  specified amount of seconds.
* A client may use GETSET in order to atomically get the current counter value
  and reset it to zero.
* Using other atomic increment/decrement commands like [`DECR`]() or [`INCRBY`]() it
  is possible to handle values that may get bigger or smaller depending on the
  operations performed by the user.
  Imagine for instance the score of different users in an online game.

## Pattern: Rate limiter

The rate limiter pattern is a special counter that is used to limit the rate at
which an operation can be performed.
The classical materialization of this pattern involves limiting the number of
requests that can be performed against a public API.

We provide two implementations of this pattern using `INCR`, where we assume
that the problem to solve is limiting the number of API calls to a maximum of
_ten requests per second per IP address_.

## Pattern: Rate limiter 1

The more simple and direct implementation of this pattern is the following:

```
FUNCTION LIMIT_API_CALL(ip)
ts = CURRENT_UNIX_TIME()
keyname = ip+":"+ts
MULTI
    INCR(keyname)
    EXPIRE(keyname,10)
EXEC
current = RESPONSE_OF_INCR_WITHIN_MULTI
IF current > 10 THEN
    ERROR "too many requests per second"
ELSE
    PERFORM_API_CALL()
END
```

Basically we have a counter for every IP, for every different second.
But these counters are always incremented setting an expire of 10 seconds so that
they'll be removed by Redis automatically when the current second is a different
one.

Note the used of [`MULTI`]() and [`EXEC`]() in order to make sure that we'll both
increment and set the expire at every API call.

## Pattern: Rate limiter 2

An alternative implementation uses a single counter, but is a bit more complex
to get it right without race conditions.
We'll examine different variants.

```
FUNCTION LIMIT_API_CALL(ip):
current = GET(ip)
IF current != NULL AND current > 10 THEN
    ERROR "too many requests per second"
ELSE
    value = INCR(ip)
    IF value == 1 THEN
        EXPIRE(ip,1)
    END
    PERFORM_API_CALL()
END
```

The counter is created in a way that it only will survive one second, starting
from the first request performed in the current second.
If there are more than 10 requests in the same second the counter will reach a
value greater than 10, otherwise it will expire and start again from 0.

**In the above code there is a race condition**.
If for some reason the client performs the `INCR` command but does not perform
the [`EXPIRE`]() the key will be leaked until we'll see the same IP address again.

This can be easily fixed by turning the `INCR` with optional [`EXPIRE`]() into a Lua
script that is then sent using the [`EVAL`]() command (only available since Redis version
2.6).

```
local current
current = redis.call("incr",KEYS[1])
if current == 1 then
    redis.call("expire",KEYS[1],1)
end
```

There is a different way to fix this issue without using scripting, by using
Redis lists instead of counters.
The implementation is more complex and uses more advanced features but has the
advantage of remembering the IP addresses of the clients currently performing an
API call, that may be useful or not depending on the application.

```
FUNCTION LIMIT_API_CALL(ip)
current = LLEN(ip)
IF current > 10 THEN
    ERROR "too many requests per second"
ELSE
    IF EXISTS(ip) == FALSE
        MULTI
            RPUSH(ip,ip)
            EXPIRE(ip,1)
        EXEC
    ELSE
        RPUSHX(ip,ip)
    END
    PERFORM_API_CALL()
END
```

The [`RPUSHX`]() command only pushes the element if the key already exists.

Note that we have a race here, but it is not a problem: [`EXISTS`]() may return
false but the key may be created by another client before we create it inside
the [`MULTI`]() / [`EXEC`]() block.
However this race will just miss an API call under rare conditions, so the rate
limiting will still work correctly.

## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |

## Return information

**RESP2:**

[Integer reply](../../develop/reference/protocol-spec#integers): the value of the key after the increment.

**RESP3:**

[Integer reply](../../develop/reference/protocol-spec#integers): the value of the key after the increment.


