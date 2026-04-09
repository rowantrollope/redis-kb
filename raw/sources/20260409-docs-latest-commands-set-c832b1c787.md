---
title: SET
url: https://redis.io/docs/latest/commands/set/
retrieved_utc: '2026-04-09T20:46:07.367249+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/set/index.html.md
---

# SET

```json metadata
{
  "title": "SET",
  "description": "Sets the string value of a key, ignoring its type. The key is created if it doesn't exist.",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"display_text":"key","key_spec_index":0,"name":"key","type":"key"},{"display_text":"value","name":"value","type":"string"},{"arguments":[{"display_text":"nx","name":"nx","token":"NX","type":"pure-token"},{"display_text":"xx","name":"xx","token":"XX","type":"pure-token"},{"display_text":"ifeq-value","name":"ifeq-value","since":"8.4.0","token":"IFEQ","type":"string"},{"display_text":"ifne-value","name":"ifne-value","since":"8.4.0","token":"IFNE","type":"string"},{"display_text":"ifdeq-digest","name":"ifdeq-digest","since":"8.4.0","token":"IFDEQ","type":"integer"},{"display_text":"ifdne-digest","name":"ifdne-digest","since":"8.4.0","token":"IFDNE","type":"integer"}],"name":"condition","optional":true,"since":"2.6.12","type":"oneof"},{"display_text":"get","name":"get","optional":true,"since":"6.2.0","token":"GET","type":"pure-token"},{"arguments":[{"display_text":"seconds","name":"seconds","since":"2.6.12","token":"EX","type":"integer"},{"display_text":"milliseconds","name":"milliseconds","since":"2.6.12","token":"PX","type":"integer"},{"display_text":"unix-time-seconds","name":"unix-time-seconds","since":"6.2.0","token":"EXAT","type":"unix-time"},{"display_text":"unix-time-milliseconds","name":"unix-time-milliseconds","since":"6.2.0","token":"PXAT","type":"unix-time"},{"display_text":"keepttl","name":"keepttl","since":"6.0.0","token":"KEEPTTL","type":"pure-token"}],"name":"expiration","optional":true,"type":"oneof"}],
  "syntax_fmt": "SET key value [NX | XX | IFEQÂ ifeq-value | IFNEÂ ifne-value |\n  IFDEQÂ ifdeq-digest | IFDNEÂ ifdne-digest] [GET] [EXÂ seconds |\n  PXÂ milliseconds | EXATÂ unix-time-seconds |\n  PXATÂ unix-time-milliseconds | KEEPTTL]",
  "complexity": "O(1)",
  "group": "string",
  "command_flags": ["write","denyoom"],
  "acl_categories": ["@write","@string","@slow"],
  "since": "1.0.0",
  "arity": -3,
  "key_specs": [{"RW":true,"access":true,"begin_search":{"spec":{"index":1},"type":"index"},"find_keys":{"spec":{"keystep":1,"lastkey":0,"limit":0},"type":"range"},"notes":"RW and ACCESS due to the optional `GET` argument","update":true,"variable_flags":true}],
  "tableOfContents": {"sections":[{"id":"options","title":"Options"},{"id":"hash-digest","title":"Hash Digest"},{"children":[{"id":"code-examples","title":"Code examples"}],"id":"examples","title":"Examples"},{"id":"patterns","title":"Patterns"},{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": [{"codetabsId":"set_and_get-stepset","description":"Foundational: Set the string value of a key using SET (creates key if needed, overwrites existing value, supports expiration options)","difficulty":"beginner","id":"set","languages":[{"clientId":"redis-py","clientName":"redis-py","id":"Python","langId":"python","panelId":"panel_Python_set_and_get-stepset"},{"id":"Node-js","panelId":"panel_Nodejs_set_and_get-stepset"},{"clientId":"jedis","clientName":"Jedis","id":"Java-Sync","langId":"java","panelId":"panel_Java-Sync_set_and_get-stepset"},{"clientId":"go-redis","clientName":"go-redis","id":"Go","langId":"go","panelId":"panel_Go_set_and_get-stepset"},{"id":"dotnet-Sync","panelId":"panel_Csharp-Sync_set_and_get-stepset"}]}]
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


Set `key` to hold the string `value`.
If `key` already holds a value, it is overwritten, regardless of its type.
Any previous time to live associated with the key is discarded on successful `SET` operation.

## Options

The `SET` command supports a set of options that modify its behavior:

* `NX` -- Only set the key if it does not already exist.
* `XX` -- Only set the key if it already exists.
* `IFEQ ifeq-value` -- Set the keyâs value and expiration only if its current value is equal to `ifeq-value`. If the key doesnât exist, it wonât be created.
* `IFNE ifne-value` -- Set the keyâs value and expiration only if its current value is not equal to `ifne-value`. If the key doesnât exist, it will be created.
* `IFDEQ ifeq-digest` -- Set the keyâs value and expiration only if the hash digest of its current value is equal to `ifeq-digest`. If the key doesnât exist, it wonât be created. See the [Hash Digest](#hash-digest) section below for more information.
* `IFDNE ifne-digest` -- Set the keyâs value and expiration only if the hash digest of its current value is not equal to `ifne-digest`. If the key doesnât exist, it will be created. See the [Hash Digest](#hash-digest) section below for more information.
* `GET` -- Return the old string stored at key, or nil if key did not exist. An error is returned and `SET` aborted if the value stored at key is not a string.
* `EX` *seconds* -- Set the specified expire time, in seconds (a positive integer).
* `PX` *milliseconds* -- Set the specified expire time, in milliseconds (a positive integer).
* `EXAT` *timestamp-seconds* -- Set the specified Unix time at which the key will expire, in seconds (a positive integer).
* `PXAT` *timestamp-milliseconds* -- Set the specified Unix time at which the key will expire, in milliseconds (a positive integer).
* `KEEPTTL` -- Retain the time to live associated with the key.

Note: Since the `SET` command options can replace [`SETNX`](), [`SETEX`](), [`PSETEX`](), [`GETSET`](), it is possible that in future versions of Redis these commands will be deprecated and finally removed.

## Hash Digest

A hash digest is a fixed-size numerical representation of a string value, computed using the XXH3 hash algorithm. Redis uses this hash digest for efficient comparison operations without needing to compare the full string content. You can retrieve a key's hash digest using the [`DIGEST`]() command, which returns it as a hexadecimal string that you can use with the `IFDEQ` and `IFDNE` options, and also the [`DELEX`]() command's `IFDEQ` and `IFDNE` options.

## Examples


SET mykey "Hello"
GET mykey

SET anotherkey "will expire in a minute" EX 60


### Code examples

#### Code Examples

Foundational: Set the string value of a key using SET (creates key if needed, overwrites existing value, supports expiration options)

**Difficulty:** Beginner

**Available in:** Python, JavaScript (Node.js), Java (Synchronous - Jedis), Go, C# (Synchronous)

**Python:**

```python
"""
Code samples for data structure store quickstart pages:
    https://redis.io/docs/latest/develop/get-started/data-store/
"""

import redis

r = redis.Redis(host="localhost", port=6379, db=0, decode_responses=True)

res = r.set("bike:1", "Process 134")
print(res)
# >>> True

res = r.get("bike:1")
print(res)
# >>> "Process 134"

```

**JavaScript (Node.js):**

```javascript

import { createClient } from 'redis';

const client = createClient();

client.on('error', err => console.log('Redis Client Error', err));

await client.connect().catch(console.error);

await client.set('bike:1', 'Process 134');
const value = await client.get('bike:1');
console.log(value);
// returns 'Process 134'

await client.close();

```

**Java (Synchronous - Jedis):**

```java
package io.redis.examples;

import redis.clients.jedis.RedisClient;


public class SetGetExample {

  public void run() {

    RedisClient jedis = RedisClient.create("redis://localhost:6379");

    String status = jedis.set("bike:1", "Process 134");

    if ("OK".equals(status)) System.out.println("Successfully added a bike.");

    String value = jedis.get("bike:1");

    if (value != null) System.out.println("The name of the bike is: " + value + ".");


    jedis.close();
  }
}

```

**Go:**

```go
package example_commands_test

import (
	"context"
	"fmt"

	"github.com/redis/go-redis/v9"
)

func ExampleClient_Set_and_get() {
	ctx := context.Background()

	rdb := redis.NewClient(&redis.Options{
		Addr:     "localhost:6379",
		Password: "", // no password docs
		DB:       0,  // use default DB
	})



	err := rdb.Set(ctx, "bike:1", "Process 134", 0).Err()
	if err != nil {
		panic(err)
	}

	fmt.Println("OK")

	value, err := rdb.Get(ctx, "bike:1").Result()
	if err != nil {
		panic(err)
	}
	fmt.Printf("The name of the bike is %s", value)

}


```

**C# (Synchronous):**

```csharp

using NRedisStack.Tests;
using StackExchange.Redis;

public class SetGetExample
{
    public void Run()
    {
        var muxer = ConnectionMultiplexer.Connect("localhost:6379");
        var db = muxer.GetDatabase();

        bool status = db.StringSet("bike:1", "Process 134");

        if (status)
            Console.WriteLine("Successfully added a bike.");

        var value = db.StringGet("bike:1");

        if (value.HasValue)
            Console.WriteLine("The name of the bike is: " + value + ".");

    }
}

```



## Patterns

**Note:** The following pattern is discouraged in favor of [the Redlock algorithm]() which is only a bit more complex to implement, but offers better guarantees and is fault tolerant.

The command `SET resource-name anystring NX EX max-lock-time` is a simple way to implement a locking system with Redis.

A client can acquire the lock if the above command returns `OK` (or retry after some time if the command returns Nil), and remove the lock just using [`DEL`]().

The lock will be auto-released after the expire time is reached.

It is possible to make this system more robust modifying the unlock schema as follows:

* Instead of setting a fixed string, set a non-guessable large random string, called token.
* Instead of releasing the lock with [`DEL`](), send a script that only removes the key if the value matches.

This avoids that a client will try to release the lock after the expire time deleting the key created by another client that acquired the lock later.

An example of unlock script would be similar to the following:

    if redis.call("get",KEYS[1]) == ARGV[1]
    then
        return redis.call("del",KEYS[1])
    else
        return 0
    end

The script should be called with `EVAL ...script... 1 resource-name token-value`

## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |

## Return information

**RESP2:**

* If `GET` was not specified, one of the following:
  * [Null bulk string reply](../../develop/reference/protocol-spec#bulk-strings) in the following two cases.
    * The key doesnât exist and `XX/IFEQ/IFDEQ` was specified. The key was not created.
    * The key exists, and `NX` was specified or a specified `IFEQ/IFNE/IFDEQ/IFDNE` condition is false. The key was not set.
  * [Simple string reply](../../develop/reference/protocol-spec#simple-strings): `OK`: The key was set.
* If `GET` was specified, one of the following:
  * [Null bulk string reply](../../develop/reference/protocol-spec#bulk-strings): The key didn't exist before the `SET` operation, whether the key was created of not.
  * [Bulk string reply](../../develop/reference/protocol-spec#bulk-strings): The previous value of the key, whether the key was set or not.

**RESP3:**

* If `GET` was not specified, one of the following:
  * [Null reply](../../develop/reference/protocol-spec#nulls) in the following two cases.
    * The key doesnât exist and `XX/IFEQ/IFDEQ` was specified. The key was not created.
    * The key exists, and `NX` was specified or a specified `IFEQ/IFNE/IFDEQ/IFDNE` condition is false. The key was not set.
  * [Simple string reply](../../develop/reference/protocol-spec#simple-strings): `OK`: The key was set.
* If `GET` was specified, one of the following:
  * [Null reply](../../develop/reference/protocol-spec#nulls): The key didn't exist before the `SET` operation, whether the key was created of not.
  * [Bulk string reply](../../develop/reference/protocol-spec#bulk-strings): The previous value of the key, whether the key was set or not.


