---
title: SCAN
url: https://redis.io/docs/latest/commands/scan/
retrieved_utc: '2026-04-09T20:46:07.216243+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/scan/index.html.md
---

# SCAN

```json metadata
{
  "title": "SCAN",
  "description": "Iterates over the key names in the database.",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"display_text":"cursor","name":"cursor","type":"integer"},{"display_text":"pattern","name":"pattern","optional":true,"token":"MATCH","type":"pattern"},{"display_text":"count","name":"count","optional":true,"token":"COUNT","type":"integer"},{"display_text":"type","name":"type","optional":true,"since":"6.0.0","token":"TYPE","type":"string"}],
  "syntax_fmt": "SCAN cursor [MATCHÂ pattern] [COUNTÂ count] [TYPEÂ type]",
  "complexity": "O(1) for every call. O(N) for a complete iteration, including enough command calls for the cursor to return back to 0. N is the number of elements inside the collection.",
  "group": "generic",
  "command_flags": ["readonly"],
  "acl_categories": ["@keyspace","@read","@slow"],
  "since": "2.8.0",
  "arity": -2,
  "tableOfContents": {"sections":[{"id":"scan-basic-usage","title":"SCAN basic usage"},{"id":"return-value","title":"Return value"},{"id":"scan-guarantees","title":"Scan guarantees"},{"id":"number-of-elements-returned-at-every-scan-call","title":"Number of elements returned at every SCAN call"},{"id":"the-count-option","title":"The COUNT option"},{"id":"the-match-option","title":"The MATCH option"},{"id":"the-type-option","title":"The TYPE option"},{"id":"the-novalues-option","title":"The NOVALUES option"},{"id":"multiple-parallel-iterations","title":"Multiple parallel iterations"},{"id":"terminating-iterations-in-the-middle","title":"Terminating iterations in the middle"},{"id":"calling-scan-with-a-corrupted-cursor","title":"Calling SCAN with a corrupted cursor"},{"id":"guarantee-of-termination","title":"Guarantee of termination"},{"id":"why-scan-may-return-all-the-items-of-an-aggregate-data-type-in-a-single-call","title":"Why SCAN may return all the items of an aggregate data type in a single call?"},{"id":"further-reading","title":"Further reading"},{"id":"additional-examples","title":"Additional examples"},{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": [{"codetabsId":"cmds_generic-stepscan1","commands":[{"acl_categories":["@write","@set","@fast"],"complexity":"O(1)","name":"SADD"},{"acl_categories":["@read","@set","@slow"],"complexity":"O(1)","name":"SSCAN"}],"description":"Set iteration: Iterate set members with pattern matching using SSCAN MATCH (cursor-based iteration, non-blocking)","difficulty":"intermediate","id":"scan1","languages":[{"id":"redis-cli","panelId":"panel_redis-cli_cmds_generic-stepscan1"},{"clientId":"redis-py","clientName":"redis-py","id":"Python","langId":"python","panelId":"panel_Python_cmds_generic-stepscan1"},{"id":"Node-js","panelId":"panel_Nodejs_cmds_generic-stepscan1"},{"clientId":"ioredis","clientName":"ioredis","id":"ioredis","langId":"javascript","panelId":"panel_ioredis_cmds_generic-stepscan1"},{"clientId":"jedis","clientName":"Jedis","id":"Java-Sync","langId":"java","panelId":"panel_Java-Sync_cmds_generic-stepscan1"},{"clientId":"lettuce","clientName":"Lettuce","id":"Java-Async","langId":"java","panelId":"panel_Java-Async_cmds_generic-stepscan1"},{"clientId":"lettuce","clientName":"Lettuce","id":"Java-Reactive","langId":"java","panelId":"panel_Java-Reactive_cmds_generic-stepscan1"},{"clientId":"go-redis","clientName":"go-redis","id":"Go","langId":"go","panelId":"panel_Go_cmds_generic-stepscan1"},{"clientId":"hiredis","clientName":"hiredis","id":"C","langId":"c","panelId":"panel_C_cmds_generic-stepscan1"},{"id":"dotnet-Sync","panelId":"panel_Csharp-Sync_cmds_generic-stepscan1"},{"clientId":"predis","clientName":"Predis","id":"PHP","langId":"php","panelId":"panel_PHP_cmds_generic-stepscan1"},{"clientId":"redis-rs","clientName":"redis-rs","id":"Rust-Sync","langId":"rust","panelId":"panel_Rust-Sync_cmds_generic-stepscan1"},{"clientId":"redis-rs","clientName":"redis-rs","id":"Rust-Async","langId":"rust","panelId":"panel_Rust-Async_cmds_generic-stepscan1"}]},{"codetabsId":"cmds_generic-stepscan2","commands":[{"acl_categories":["@keyspace","@read","@slow"],"complexity":"O(1)","name":"SCAN"}],"description":"Keyspace iteration: Iterate database keys with pattern matching using SCAN MATCH and COUNT (demonstrates cursor iteration with sparse results)","difficulty":"intermediate","id":"scan2","languages":[{"id":"redis-cli","panelId":"panel_redis-cli_cmds_generic-stepscan2"},{"clientId":"redis-py","clientName":"redis-py","id":"Python","langId":"python","panelId":"panel_Python_cmds_generic-stepscan2"},{"id":"Node-js","panelId":"panel_Nodejs_cmds_generic-stepscan2"},{"clientId":"ioredis","clientName":"ioredis","id":"ioredis","langId":"javascript","panelId":"panel_ioredis_cmds_generic-stepscan2"},{"clientId":"jedis","clientName":"Jedis","id":"Java-Sync","langId":"java","panelId":"panel_Java-Sync_cmds_generic-stepscan2"},{"clientId":"lettuce","clientName":"Lettuce","id":"Java-Async","langId":"java","panelId":"panel_Java-Async_cmds_generic-stepscan2"},{"clientId":"lettuce","clientName":"Lettuce","id":"Java-Reactive","langId":"java","panelId":"panel_Java-Reactive_cmds_generic-stepscan2"},{"clientId":"go-redis","clientName":"go-redis","id":"Go","langId":"go","panelId":"panel_Go_cmds_generic-stepscan2"},{"clientId":"hiredis","clientName":"hiredis","id":"C","langId":"c","panelId":"panel_C_cmds_generic-stepscan2"},{"id":"dotnet-Sync","panelId":"panel_Csharp-Sync_cmds_generic-stepscan2"},{"clientId":"predis","clientName":"Predis","id":"PHP","langId":"php","panelId":"panel_PHP_cmds_generic-stepscan2"},{"clientId":"redis-rs","clientName":"redis-rs","id":"Rust-Sync","langId":"rust","panelId":"panel_Rust-Sync_cmds_generic-stepscan2"},{"clientId":"redis-rs","clientName":"redis-rs","id":"Rust-Async","langId":"rust","panelId":"panel_Rust-Async_cmds_generic-stepscan2"}]},{"codetabsId":"cmds_generic-stepscan3","commands":[{"acl_categories":["@write","@geo","@slow"],"complexity":"O(log(N)","name":"GEOADD"},{"acl_categories":["@write","@sortedset","@fast"],"complexity":"O(log(N)","name":"ZADD"},{"acl_categories":["@keyspace","@read","@fast"],"complexity":"O(1)","name":"TYPE"},{"acl_categories":["@keyspace","@read","@slow"],"complexity":"O(1)","name":"SCAN"}],"description":"Iterate keyspace by type: Iterate database keys filtered by type using SCAN TYPE (filters keys by data type, useful for type-specific operations)","difficulty":"intermediate","id":"scan3","languages":[{"id":"redis-cli","panelId":"panel_redis-cli_cmds_generic-stepscan3"},{"clientId":"redis-py","clientName":"redis-py","id":"Python","langId":"python","panelId":"panel_Python_cmds_generic-stepscan3"},{"id":"Node-js","panelId":"panel_Nodejs_cmds_generic-stepscan3"},{"clientId":"ioredis","clientName":"ioredis","id":"ioredis","langId":"javascript","panelId":"panel_ioredis_cmds_generic-stepscan3"},{"clientId":"jedis","clientName":"Jedis","id":"Java-Sync","langId":"java","panelId":"panel_Java-Sync_cmds_generic-stepscan3"},{"clientId":"lettuce","clientName":"Lettuce","id":"Java-Async","langId":"java","panelId":"panel_Java-Async_cmds_generic-stepscan3"},{"clientId":"lettuce","clientName":"Lettuce","id":"Java-Reactive","langId":"java","panelId":"panel_Java-Reactive_cmds_generic-stepscan3"},{"clientId":"go-redis","clientName":"go-redis","id":"Go","langId":"go","panelId":"panel_Go_cmds_generic-stepscan3"},{"clientId":"hiredis","clientName":"hiredis","id":"C","langId":"c","panelId":"panel_C_cmds_generic-stepscan3"},{"id":"dotnet-Sync","panelId":"panel_Csharp-Sync_cmds_generic-stepscan3"},{"clientId":"predis","clientName":"Predis","id":"PHP","langId":"php","panelId":"panel_PHP_cmds_generic-stepscan3"},{"clientId":"redis-rs","clientName":"redis-rs","id":"Rust-Sync","langId":"rust","panelId":"panel_Rust-Sync_cmds_generic-stepscan3"},{"clientId":"redis-rs","clientName":"redis-rs","id":"Rust-Async","langId":"rust","panelId":"panel_Rust-Async_cmds_generic-stepscan3"}]},{"codetabsId":"cmds_generic-stepscan4","commands":[{"acl_categories":["@write","@hash","@fast"],"complexity":"O(1)","name":"HSET"},{"acl_categories":["@read","@hash","@slow"],"complexity":"O(1)","name":"HSCAN"}],"description":"Hash iteration: Iterate hash fields with optional NOVALUES using HSCAN (returns field-value pairs or fields only)","difficulty":"intermediate","id":"scan4","languages":[{"id":"redis-cli","panelId":"panel_redis-cli_cmds_generic-stepscan4"},{"clientId":"redis-py","clientName":"redis-py","id":"Python","langId":"python","panelId":"panel_Python_cmds_generic-stepscan4"},{"id":"Node-js","panelId":"panel_Nodejs_cmds_generic-stepscan4"},{"clientId":"ioredis","clientName":"ioredis","id":"ioredis","langId":"javascript","panelId":"panel_ioredis_cmds_generic-stepscan4"},{"clientId":"jedis","clientName":"Jedis","id":"Java-Sync","langId":"java","panelId":"panel_Java-Sync_cmds_generic-stepscan4"},{"clientId":"lettuce","clientName":"Lettuce","id":"Java-Async","langId":"java","panelId":"panel_Java-Async_cmds_generic-stepscan4"},{"clientId":"lettuce","clientName":"Lettuce","id":"Java-Reactive","langId":"java","panelId":"panel_Java-Reactive_cmds_generic-stepscan4"},{"clientId":"go-redis","clientName":"go-redis","id":"Go","langId":"go","panelId":"panel_Go_cmds_generic-stepscan4"},{"clientId":"hiredis","clientName":"hiredis","id":"C","langId":"c","panelId":"panel_C_cmds_generic-stepscan4"},{"id":"dotnet-Sync","panelId":"panel_Csharp-Sync_cmds_generic-stepscan4"},{"clientId":"predis","clientName":"Predis","id":"PHP","langId":"php","panelId":"panel_PHP_cmds_generic-stepscan4"},{"clientId":"redis-rs","clientName":"redis-rs","id":"Rust-Sync","langId":"rust","panelId":"panel_Rust-Sync_cmds_generic-stepscan4"},{"clientId":"redis-rs","clientName":"redis-rs","id":"Rust-Async","langId":"rust","panelId":"panel_Rust-Async_cmds_generic-stepscan4"}]}]
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



The `SCAN` command and the closely related commands [`SSCAN`](), [`HSCAN`]() and [`ZSCAN`]() are used in order to incrementally iterate over a collection of elements.

* `SCAN` iterates the set of keys in the currently selected Redis database.
* [`SSCAN`]() iterates elements of Sets types.
* [`HSCAN`]() iterates fields of Hash types and their associated values.
* [`ZSCAN`]() iterates elements of Sorted Set types and their associated scores.

Since these commands allow for incremental iteration, returning only a small number of elements per call, they can be used in production without the downside of commands like [`KEYS`]() or [`SMEMBERS`]() that may block the server for a long time (even several seconds) when called against big collections of keys or elements.

However while blocking commands like [`SMEMBERS`]() are able to provide all the elements that are part of a Set in a given moment, The SCAN family of commands only offer limited guarantees about the returned elements since the collection that we incrementally iterate can change during the iteration process.

Note that `SCAN`, [`SSCAN`](), [`HSCAN`]() and [`ZSCAN`]() all work very similarly, so this documentation covers all four commands. However an obvious difference is that in the case of [`SSCAN`](), [`HSCAN`]() and [`ZSCAN`]() the first argument is the name of the key holding the Set, Hash or Sorted Set value. The `SCAN` command does not need any key name argument as it iterates keys in the current database, so the iterated object is the database itself.

## SCAN basic usage

SCAN is a cursor based iterator. This means that at every call of the command, the server returns an updated cursor that the user needs to use as the cursor argument in the next call.

An iteration starts when the cursor is set to 0, and terminates when the cursor returned by the server is 0. The following is an example of SCAN iteration:

```
> scan 0
1) "17"
2)  1) "key:12"
    2) "key:8"
    3) "key:4"
    4) "key:14"
    5) "key:16"
    6) "key:17"
    7) "key:15"
    8) "key:10"
    9) "key:3"
   10) "key:7"
   11) "key:1"
> scan 17
1) "0"
2) 1) "key:5"
   2) "key:18"
   3) "key:0"
   4) "key:2"
   5) "key:19"
   6) "key:13"
   7) "key:6"
   8) "key:9"
   9) "key:11"
```

In the example above, the first call uses zero as a cursor, to start the iteration. The second call uses the cursor returned by the previous call as the first element of the reply, that is, 17.

As you can see the **SCAN return value** is an array of two values: the first value is the new cursor to use in the next call, the second value is an array of elements.

Since in the second call the returned cursor is 0, the server signaled to the caller that the iteration finished, and the collection was completely explored. Starting an iteration with a cursor value of 0, and calling `SCAN` until the returned cursor is 0 again is called a **full iteration**.

## Return value

`SCAN`, [`SSCAN`](), [`HSCAN`]() and [`ZSCAN`]() return a two element multi-bulk reply, where the first element is a string representing an unsigned 64 bit number (the cursor), and the second element is a multi-bulk with an array of elements.

* `SCAN` array of elements is a list of keys.
* [`SSCAN`]() array of elements is a list of Set members.
* [`HSCAN`]() array of elements contain two elements, a field and a value, for every returned element of the Hash.
* [`ZSCAN`]() array of elements contain two elements, a member and its associated score, for every returned element of the Sorted Set.

## Scan guarantees

The `SCAN` command, and the other commands in the `SCAN` family, are able to provide to the user a set of guarantees associated to full iterations.

* A full iteration always retrieves all the elements that were present in the collection from the start to the end of a full iteration. This means that if a given element is inside the collection when an iteration is started, and is still there when an iteration terminates, then at some point `SCAN` returned it to the user.
* A full iteration never returns any element that was NOT present in the collection from the start to the end of a full iteration. So if an element was removed before the start of an iteration, and is never added back to the collection for all the time an iteration lasts, `SCAN` ensures that this element will never be returned.

However because `SCAN` has very little state associated (just the cursor) it has the following drawbacks:

* A given element may be returned multiple times. It is up to the application to handle the case of duplicated elements, for example only using the returned elements in order to perform operations that are safe when re-applied multiple times.
* Elements that were not constantly present in the collection during a full iteration, may be returned or not: it is undefined.

## Number of elements returned at every SCAN call

`SCAN` family functions do not guarantee that the number of elements returned per call are in a given range. The commands are also allowed to return zero elements, and the client should not consider the iteration complete as long as the returned cursor is not zero.

However the number of returned elements is reasonable, that is, in practical terms `SCAN` may return a maximum number of elements in the order of a few tens of elements when iterating a large collection, or may return all the elements of the collection in a single call when the iterated collection is small enough to be internally represented as an encoded data structure (this happens for small Sets, Hashes and Sorted Sets).

However there is a way for the user to tune the order of magnitude of the number of returned elements per call using the **COUNT** option.

## The COUNT option

While `SCAN` does not provide guarantees about the number of elements returned at every iteration, it is possible to empirically adjust the behavior of `SCAN` using the **COUNT** option. Basically with COUNT the user specifies the *amount of work that should be done at every call in order to retrieve elements from the collection*. This is **just a hint** for the implementation, however generally speaking this is what you could expect most of the times from the implementation.

* The default `COUNT` value is 10.
* When iterating the key space, or a Set, Hash or Sorted Set that is big enough to be represented by a hash table, assuming no **MATCH** option is used, the server will usually return *count* or a few more than *count* elements per call. Please check the *why SCAN may return all the elements at once* section later in this document.
* When iterating Sets encoded as intsets (small sets composed of just integers), or Hashes and Sorted Sets encoded as ziplists (small hashes and sets composed of small individual values), usually all the elements are returned in the first `SCAN` call regardless of the `COUNT` value.

Important: **there is no need to use the same COUNT value** for every iteration. The caller is free to change the count from one iteration to the other as required, as long as the cursor passed in the next call is the one obtained in the previous call to the command.

## The MATCH option

It is possible to only iterate elements matching a given glob-style pattern, similarly to the behavior of the [`KEYS`]() command that takes a pattern as its only argument.

To do so, just append the `MATCH <pattern>` arguments at the end of the `SCAN` command (it works with all the `SCAN` family commands).

This is an example of iteration using **MATCH**:

#### Code Examples

Set iteration: Iterate set members with pattern matching using SSCAN MATCH (cursor-based iteration, non-blocking)

**Difficulty:** Intermediate

**Commands:** SADD, SSCAN

**Complexity:**
- SADD: O(1)
- SSCAN: O(1)

**Redis CLI:**

```
> sadd myset 1 2 3 foo foobar feelsgood
(integer) 6
> sscan myset 0 match f*
1) "0"
2) 1) "foo"
   2) "feelsgood"
   3) "foobar"
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

```

**Go:**

```go
package example_commands_test

import (
	"context"
	"fmt"
	"math"
	"sort"
	"time"

	"github.com/redis/go-redis/v9"
)


func ExampleClient_del_cmd() {
	ctx := context.Background()

	rdb := redis.NewClient(&redis.Options{
		Addr:     "localhost:6379",
		Password: "", // no password docs
		DB:       0,  // use default DB
	})


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

}

func ExampleClient_exists_cmd() {
	ctx := context.Background()

	rdb := redis.NewClient(&redis.Options{
		Addr:     "localhost:6379",
		Password: "", // no password docs
		DB:       0,  // use default DB
	})


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

}

func ExampleClient_expire_cmd() {
	ctx := context.Background()

	rdb := redis.NewClient(&redis.Options{
		Addr:     "localhost:6379",
		Password: "", // no password docs
		DB:       0,  // use default DB
	})


	expireResult1, err := rdb.Set(ctx, "mykey", "Hello", 0).Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(expireResult1) // >>> OK

	expireResult2, err := rdb.Expire(ctx, "mykey", 10*time.Second).Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(expireResult2) // >>> true

	expireResult3, err := rdb.TTL(ctx, "mykey").Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(math.Round(expireResult3.Seconds())) // >>> 10

	expireResult4, err := rdb.Set(ctx, "mykey", "Hello World", 0).Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(expireResult4) // >>> OK

	expireResult5, err := rdb.TTL(ctx, "mykey").Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(expireResult5) // >>> -1ns

	expireResult6, err := rdb.ExpireXX(ctx, "mykey", 10*time.Second).Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(expireResult6) // >>> false

	expireResult7, err := rdb.TTL(ctx, "mykey").Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(expireResult7) // >>> -1ns

	expireResult8, err := rdb.ExpireNX(ctx, "mykey", 10*time.Second).Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(expireResult8) // >>> true

	expireResult9, err := rdb.TTL(ctx, "mykey").Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(math.Round(expireResult9.Seconds())) // >>> 10

}

func ExampleClient_keys_cmd() {
	ctx := context.Background()

	rdb := redis.NewClient(&redis.Options{
		Addr:     "localhost:6379",
		Password: "", // no password docs
		DB:       0,  // use default DB
	})


	keysResult1, err := rdb.MSet(ctx, "firstname", "Jack", "lastname", "Stuntman", "age", "35").Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(keysResult1) // >>> OK

	keysResult2, err := rdb.Keys(ctx, "*name*").Result()

	if err != nil {
		panic(err)
	}

	sort.Strings(keysResult2)
	fmt.Println(keysResult2) // >>> [firstname lastname]

	keysResult3, err := rdb.Keys(ctx, "a??").Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(keysResult3) // >>> [age]

	keysResult4, err := rdb.Keys(ctx, "*").Result()

	if err != nil {
		panic(err)
	}

	sort.Strings(keysResult4)
	fmt.Println(keysResult4) // >>> [age firstname lastname]

}

func ExampleClient_ttl_cmd() {
	ctx := context.Background()

	rdb := redis.NewClient(&redis.Options{
		Addr:     "localhost:6379",
		Password: "", // no password docs
		DB:       0,  // use default DB
	})


	ttlResult1, err := rdb.Set(ctx, "mykey", "Hello", 10*time.Second).Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(ttlResult1) // >>> OK

	ttlResult2, err := rdb.TTL(ctx, "mykey").Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(math.Round(ttlResult2.Seconds())) // >>> 10

}

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

import redis.clients.jedis.RedisClient;
import redis.clients.jedis.args.ExpiryOption;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Set;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class CmdsGenericExample {

    public void run() {
        RedisClient jedis = RedisClient.create("redis://localhost:6379");


        String delResult1 = jedis.set("key1", "Hello");
        System.out.println(delResult1); // >>> OK

        String delResult2 = jedis.set("key2", "World");
        System.out.println(delResult2); // >>> OK

        long delResult3 = jedis.del("key1", "key2", "key3");
        System.out.println(delResult3); // >>> 2

        // Tests for 'del' step.


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

        // Tests for 'exists' step.


        String expireResult1 = jedis.set("mykey", "Hello");
        System.out.println(expireResult1);  // >>> OK

        long expireResult2 = jedis.expire("mykey", 10);
        System.out.println(expireResult2);  // >>> 1

        long expireResult3 = jedis.ttl("mykey");
        System.out.println(expireResult3);  // >>> 10

        String expireResult4 = jedis.set("mykey", "Hello World");
        System.out.println(expireResult4);  // >>> OK

        long expireResult5 = jedis.ttl("mykey");
        System.out.println(expireResult5);  // >>> -1

        long expireResult6 = jedis.expire("mykey", 10, ExpiryOption.XX);
        System.out.println(expireResult6);  // >>> 0

        long expireResult7 = jedis.ttl("mykey");
        System.out.println(expireResult7);  // >>> -1

        long expireResult8 = jedis.expire("mykey", 10, ExpiryOption.NX);
        System.out.println(expireResult8);  // >>> 1

        long expireResult9 = jedis.ttl("mykey");
        System.out.println(expireResult9);  // >>> 10

        // Tests for 'expire' step.


        String ttlResult1 = jedis.set("mykey", "Hello");
        System.out.println(ttlResult1); // >>> OK

        long ttlResult2 = jedis.expire("mykey", 10);
        System.out.println(ttlResult2); // >>> 1

        long ttlResult3 = jedis.ttl("mykey");
        System.out.println(ttlResult3); // >>> 10

        // Tests for 'ttl' step.


        String keysResult1 = jedis.mset("firstname", "Jack", "lastname", "Stuntman", "age", "35");
        System.out.println(keysResult1); // >>> OK

        Set<String> keysResult2 = jedis.keys("*name*");
        ArrayList<String> keysResult2List = new ArrayList<>(keysResult2);
        Collections.sort(keysResult2List);
        System.out.println(keysResult2List); // >>> [firstname, lastname]

        Set<String> keysResult3 = jedis.keys("a??");
        System.out.println(keysResult3); // >>> [age]

        Set<String> keysResult4 = jedis.keys("*");
        ArrayList<String> keysResult4List = new ArrayList<>(keysResult4);
        Collections.sort(keysResult4List);
        System.out.println(keysResult4List); // >>> [age, firstname, lastname]

        // Tests for 'keys' step.

        jedis.close();
    }
}

```

**JavaScript (Node.js):**

```javascript
const scan1Res1 = await client.sAdd('myset', ['1', '2', '3', 'foo', 'foobar', 'feelsgood']);
console.log(scan1Res1); // 6

let scan1Res2 = [];
for await (const values of client.sScanIterator('myset', { MATCH: 'f*' })) {
    scan1Res2 = scan1Res2.concat(values);
}
console.log(scan1Res2); // ['foo', 'foobar', 'feelsgood']
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
const scan1Res1 = await client.sAdd('myset', ['1', '2', '3', 'foo', 'foobar', 'feelsgood']);
console.log(scan1Res1); // 6

let scan1Res2 = [];
for await (const values of client.sScanIterator('myset', { MATCH: 'f*' })) {
    scan1Res2 = scan1Res2.concat(values);
}
console.log(scan1Res2); // ['foo', 'foobar', 'feelsgood']
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
res = r.sadd("myset", *set([1, 2, 3, "foo", "foobar", "feelsgood"]))
print(res)
# >>> 6

res = list(r.sscan_iter("myset", match="f*"))
print(res)
# >>> ['foobar', 'foo', 'feelsgood']
```

**Rust (Asynchronous):**

```rust
        match r.sadd("myset", &["1", "2", "3", "foo", "foobar", "feelsgood"]).await {
            Ok(res) => {
                let res: i32 = res;
                println!("{res}");    // >>> 6
            },
            Err(e) => {
                println!("Error adding to set: {e}");
                return;
            }
        }

        let res = match r.sscan_match("myset", "f*").await {
            Ok(iter) => {
                let res: Vec<Result<String, _>> = iter.collect().await;
                res.into_iter().filter_map(|r| r.ok()).collect::<Vec<String>>()
            },
            Err(e) => {
                println!("Error scanning set: {e}");
                return;
            }
        };

        println!("{res:?}");    // >>> ["foo", "foobar", "feelsgood"]
```

**Rust (Synchronous):**

```rust
        match r.sadd("myset", &["1", "2", "3", "foo", "foobar", "feelsgood"]) {
            Ok(res) => {
                let res: i32 = res;
                println!("{res}");    // >>> 6
            },
            Err(e) => {
                println!("Error adding to set: {e}");
                return;
            }
        }

        match r.sscan_match("myset", "f*") {
            Ok(iter) => {
                let res: Vec<String> = iter.filter_map(|r| r.ok()).collect();
                println!("{res:?}");    // >>> ["foo", "foobar", "feelsgood"]
            },
            Err(e) => {
                println!("Error scanning set: {e}");
                return;
            }
        }
```



It is important to note that the **MATCH** filter is applied after elements are retrieved from the collection, just before returning data to the client. This means that if the pattern matches very little elements inside the collection, `SCAN` will likely return no elements in most iterations. An example is shown below:

#### Code Examples

Keyspace iteration: Iterate database keys with pattern matching using SCAN MATCH and COUNT (demonstrates cursor iteration with sparse results)

**Difficulty:** Intermediate

**Commands:** SCAN

**Complexity:**
- SCAN: O(1)

**Redis CLI:**

```
> scan 0 MATCH *11*
1) "288"
2) 1) "key:911"
> scan 288 MATCH *11*
1) "224"
2) (empty list or set)
> scan 224 MATCH *11*
1) "80"
2) (empty list or set)
> scan 80 MATCH *11*
1) "176"
2) (empty list or set)
> scan 176 MATCH *11* COUNT 1000
1) "0"
2)  1) "key:611"
    2) "key:711"
    3) "key:118"
    4) "key:117"
    5) "key:311"
    6) "key:112"
    7) "key:111"
    8) "key:110"
    9) "key:113"
   10) "key:211"
   11) "key:411"
   12) "key:115"
   13) "key:116"
   14) "key:114"
   15) "key:119"
   16) "key:811"
   17) "key:511"
   18) "key:11"
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

```

**Go:**

```go
package example_commands_test

import (
	"context"
	"fmt"
	"math"
	"sort"
	"time"

	"github.com/redis/go-redis/v9"
)


func ExampleClient_del_cmd() {
	ctx := context.Background()

	rdb := redis.NewClient(&redis.Options{
		Addr:     "localhost:6379",
		Password: "", // no password docs
		DB:       0,  // use default DB
	})


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

}

func ExampleClient_exists_cmd() {
	ctx := context.Background()

	rdb := redis.NewClient(&redis.Options{
		Addr:     "localhost:6379",
		Password: "", // no password docs
		DB:       0,  // use default DB
	})


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

}

func ExampleClient_expire_cmd() {
	ctx := context.Background()

	rdb := redis.NewClient(&redis.Options{
		Addr:     "localhost:6379",
		Password: "", // no password docs
		DB:       0,  // use default DB
	})


	expireResult1, err := rdb.Set(ctx, "mykey", "Hello", 0).Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(expireResult1) // >>> OK

	expireResult2, err := rdb.Expire(ctx, "mykey", 10*time.Second).Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(expireResult2) // >>> true

	expireResult3, err := rdb.TTL(ctx, "mykey").Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(math.Round(expireResult3.Seconds())) // >>> 10

	expireResult4, err := rdb.Set(ctx, "mykey", "Hello World", 0).Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(expireResult4) // >>> OK

	expireResult5, err := rdb.TTL(ctx, "mykey").Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(expireResult5) // >>> -1ns

	expireResult6, err := rdb.ExpireXX(ctx, "mykey", 10*time.Second).Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(expireResult6) // >>> false

	expireResult7, err := rdb.TTL(ctx, "mykey").Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(expireResult7) // >>> -1ns

	expireResult8, err := rdb.ExpireNX(ctx, "mykey", 10*time.Second).Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(expireResult8) // >>> true

	expireResult9, err := rdb.TTL(ctx, "mykey").Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(math.Round(expireResult9.Seconds())) // >>> 10

}

func ExampleClient_keys_cmd() {
	ctx := context.Background()

	rdb := redis.NewClient(&redis.Options{
		Addr:     "localhost:6379",
		Password: "", // no password docs
		DB:       0,  // use default DB
	})


	keysResult1, err := rdb.MSet(ctx, "firstname", "Jack", "lastname", "Stuntman", "age", "35").Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(keysResult1) // >>> OK

	keysResult2, err := rdb.Keys(ctx, "*name*").Result()

	if err != nil {
		panic(err)
	}

	sort.Strings(keysResult2)
	fmt.Println(keysResult2) // >>> [firstname lastname]

	keysResult3, err := rdb.Keys(ctx, "a??").Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(keysResult3) // >>> [age]

	keysResult4, err := rdb.Keys(ctx, "*").Result()

	if err != nil {
		panic(err)
	}

	sort.Strings(keysResult4)
	fmt.Println(keysResult4) // >>> [age firstname lastname]

}

func ExampleClient_ttl_cmd() {
	ctx := context.Background()

	rdb := redis.NewClient(&redis.Options{
		Addr:     "localhost:6379",
		Password: "", // no password docs
		DB:       0,  // use default DB
	})


	ttlResult1, err := rdb.Set(ctx, "mykey", "Hello", 10*time.Second).Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(ttlResult1) // >>> OK

	ttlResult2, err := rdb.TTL(ctx, "mykey").Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(math.Round(ttlResult2.Seconds())) // >>> 10

}

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

import redis.clients.jedis.RedisClient;
import redis.clients.jedis.args.ExpiryOption;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Set;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class CmdsGenericExample {

    public void run() {
        RedisClient jedis = RedisClient.create("redis://localhost:6379");


        String delResult1 = jedis.set("key1", "Hello");
        System.out.println(delResult1); // >>> OK

        String delResult2 = jedis.set("key2", "World");
        System.out.println(delResult2); // >>> OK

        long delResult3 = jedis.del("key1", "key2", "key3");
        System.out.println(delResult3); // >>> 2

        // Tests for 'del' step.


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

        // Tests for 'exists' step.


        String expireResult1 = jedis.set("mykey", "Hello");
        System.out.println(expireResult1);  // >>> OK

        long expireResult2 = jedis.expire("mykey", 10);
        System.out.println(expireResult2);  // >>> 1

        long expireResult3 = jedis.ttl("mykey");
        System.out.println(expireResult3);  // >>> 10

        String expireResult4 = jedis.set("mykey", "Hello World");
        System.out.println(expireResult4);  // >>> OK

        long expireResult5 = jedis.ttl("mykey");
        System.out.println(expireResult5);  // >>> -1

        long expireResult6 = jedis.expire("mykey", 10, ExpiryOption.XX);
        System.out.println(expireResult6);  // >>> 0

        long expireResult7 = jedis.ttl("mykey");
        System.out.println(expireResult7);  // >>> -1

        long expireResult8 = jedis.expire("mykey", 10, ExpiryOption.NX);
        System.out.println(expireResult8);  // >>> 1

        long expireResult9 = jedis.ttl("mykey");
        System.out.println(expireResult9);  // >>> 10

        // Tests for 'expire' step.


        String ttlResult1 = jedis.set("mykey", "Hello");
        System.out.println(ttlResult1); // >>> OK

        long ttlResult2 = jedis.expire("mykey", 10);
        System.out.println(ttlResult2); // >>> 1

        long ttlResult3 = jedis.ttl("mykey");
        System.out.println(ttlResult3); // >>> 10

        // Tests for 'ttl' step.


        String keysResult1 = jedis.mset("firstname", "Jack", "lastname", "Stuntman", "age", "35");
        System.out.println(keysResult1); // >>> OK

        Set<String> keysResult2 = jedis.keys("*name*");
        ArrayList<String> keysResult2List = new ArrayList<>(keysResult2);
        Collections.sort(keysResult2List);
        System.out.println(keysResult2List); // >>> [firstname, lastname]

        Set<String> keysResult3 = jedis.keys("a??");
        System.out.println(keysResult3); // >>> [age]

        Set<String> keysResult4 = jedis.keys("*");
        ArrayList<String> keysResult4List = new ArrayList<>(keysResult4);
        Collections.sort(keysResult4List);
        System.out.println(keysResult4List); // >>> [age, firstname, lastname]

        // Tests for 'keys' step.

        jedis.close();
    }
}

```

**JavaScript (Node.js):**

```javascript

let cursor = '0';
let scanResult;

scanResult = await client.scan(cursor, { MATCH: '*11*' });
console.log(scanResult.cursor, scanResult.keys);

scanResult = await client.scan(scanResult.cursor, { MATCH: '*11*' });
console.log(scanResult.cursor, scanResult.keys);

scanResult = await client.scan(scanResult.cursor, { MATCH: '*11*' });
console.log(scanResult.cursor, scanResult.keys);

scanResult = await client.scan(scanResult.cursor, { MATCH: '*11*' });
console.log(scanResult.cursor, scanResult.keys);

scanResult = await client.scan(scanResult.cursor, { MATCH: '*11*', COUNT: 1000 });
console.log(scanResult.cursor, scanResult.keys);
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

let cursor = '0';
let scanResult;

scanResult = await client.scan(cursor, { MATCH: '*11*' });
console.log(scanResult.cursor, scanResult.keys);

scanResult = await client.scan(scanResult.cursor, { MATCH: '*11*' });
console.log(scanResult.cursor, scanResult.keys);

scanResult = await client.scan(scanResult.cursor, { MATCH: '*11*' });
console.log(scanResult.cursor, scanResult.keys);

scanResult = await client.scan(scanResult.cursor, { MATCH: '*11*' });
console.log(scanResult.cursor, scanResult.keys);

scanResult = await client.scan(scanResult.cursor, { MATCH: '*11*', COUNT: 1000 });
console.log(scanResult.cursor, scanResult.keys);
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

cursor, key = r.scan(cursor=0, match='*11*')
print(cursor, key)

cursor, key = r.scan(cursor, match='*11*')
print(cursor, key)

cursor, key = r.scan(cursor, match='*11*')
print(cursor, key)

cursor, key = r.scan(cursor, match='*11*')
print(cursor, key)

cursor, keys = r.scan(cursor, match='*11*', count=1000)
print(cursor, keys)

```

**Rust (Asynchronous):**

```rust

        // Note: Rust redis client scan_match returns an iterator, not cursor-based
        // This simulates the Python cursor-based output but uses the available API
        let keys = match r.scan_match("*11*").await {
            Ok(iter) => {
                let keys: Vec<Result<String, _>> = iter.collect().await;
                keys.into_iter().filter_map(|r| r.ok()).collect::<Vec<String>>()
            },
            Err(e) => {
                println!("Error scanning keys: {e}");
                return;
            }
        };

```

**Rust (Synchronous):**

```rust

        // Note: Rust redis client scan_match returns an iterator, not cursor-based
        // This simulates the Python cursor-based output but uses the available API
        match r.scan_match("*11*") {
            Ok(iter) => {
                let keys: Vec<String> = iter.filter_map(|r| r.ok()).collect();
            },
            Err(e) => {
                println!("Error scanning keys: {e}");
                return;
            }
        }
```



As you can see most of the calls returned zero elements, but the last call where a `COUNT` of 1000 was used in order to force the command to do more scanning for that iteration.

When using [Redis Cluster](), the search is optimized for patterns that imply a single slot.
If a pattern can only match keys of one slot,
Redis only iterates over keys in that slot, rather than the whole database,
when searching for keys matching the pattern.
For example, with the pattern `{a}h*llo`, Redis would only try to match it with the keys in slot 15495, which hash tag `{a}` implies.
To use pattern with hash tag, see [Hash tags]() in the Cluster specification for more information.

## The TYPE option

You can use the `TYPE` option to ask `SCAN` to only return objects that match a given `type`, allowing you to iterate through the database looking for keys of a specific type. The **TYPE** option is only available on the whole-database `SCAN`, not [`HSCAN`]() or [`ZSCAN`]() etc.

The `type` argument is the same string name that the [`TYPE`]() command returns. Note a quirk where some Redis types, such as GeoHashes, HyperLogLogs, Bitmaps, and Bitfields, may internally be implemented using other Redis types, such as a string or zset, so can't be distinguished from other keys of that same type by `SCAN`. For example, a ZSET and GEOHASH:

#### Code Examples

Iterate keyspace by type: Iterate database keys filtered by type using SCAN TYPE (filters keys by data type, useful for type-specific operations)

**Difficulty:** Intermediate

**Commands:** GEOADD, ZADD, TYPE, SCAN

**Complexity:**
- GEOADD: O(log(N)
- ZADD: O(log(N)
- TYPE: O(1)
- SCAN: O(1)

**Redis CLI:**

```
> GEOADD geokey 0 0 value
(integer) 1
> ZADD zkey 1000 value
(integer) 1
> TYPE geokey
zset
> TYPE zkey
zset
> SCAN 0 TYPE zset
1) "0"
2) 1) "geokey"
   2) "zkey"
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

```

**Go:**

```go
package example_commands_test

import (
	"context"
	"fmt"
	"math"
	"sort"
	"time"

	"github.com/redis/go-redis/v9"
)


func ExampleClient_del_cmd() {
	ctx := context.Background()

	rdb := redis.NewClient(&redis.Options{
		Addr:     "localhost:6379",
		Password: "", // no password docs
		DB:       0,  // use default DB
	})


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

}

func ExampleClient_exists_cmd() {
	ctx := context.Background()

	rdb := redis.NewClient(&redis.Options{
		Addr:     "localhost:6379",
		Password: "", // no password docs
		DB:       0,  // use default DB
	})


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

}

func ExampleClient_expire_cmd() {
	ctx := context.Background()

	rdb := redis.NewClient(&redis.Options{
		Addr:     "localhost:6379",
		Password: "", // no password docs
		DB:       0,  // use default DB
	})


	expireResult1, err := rdb.Set(ctx, "mykey", "Hello", 0).Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(expireResult1) // >>> OK

	expireResult2, err := rdb.Expire(ctx, "mykey", 10*time.Second).Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(expireResult2) // >>> true

	expireResult3, err := rdb.TTL(ctx, "mykey").Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(math.Round(expireResult3.Seconds())) // >>> 10

	expireResult4, err := rdb.Set(ctx, "mykey", "Hello World", 0).Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(expireResult4) // >>> OK

	expireResult5, err := rdb.TTL(ctx, "mykey").Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(expireResult5) // >>> -1ns

	expireResult6, err := rdb.ExpireXX(ctx, "mykey", 10*time.Second).Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(expireResult6) // >>> false

	expireResult7, err := rdb.TTL(ctx, "mykey").Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(expireResult7) // >>> -1ns

	expireResult8, err := rdb.ExpireNX(ctx, "mykey", 10*time.Second).Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(expireResult8) // >>> true

	expireResult9, err := rdb.TTL(ctx, "mykey").Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(math.Round(expireResult9.Seconds())) // >>> 10

}

func ExampleClient_keys_cmd() {
	ctx := context.Background()

	rdb := redis.NewClient(&redis.Options{
		Addr:     "localhost:6379",
		Password: "", // no password docs
		DB:       0,  // use default DB
	})


	keysResult1, err := rdb.MSet(ctx, "firstname", "Jack", "lastname", "Stuntman", "age", "35").Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(keysResult1) // >>> OK

	keysResult2, err := rdb.Keys(ctx, "*name*").Result()

	if err != nil {
		panic(err)
	}

	sort.Strings(keysResult2)
	fmt.Println(keysResult2) // >>> [firstname lastname]

	keysResult3, err := rdb.Keys(ctx, "a??").Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(keysResult3) // >>> [age]

	keysResult4, err := rdb.Keys(ctx, "*").Result()

	if err != nil {
		panic(err)
	}

	sort.Strings(keysResult4)
	fmt.Println(keysResult4) // >>> [age firstname lastname]

}

func ExampleClient_ttl_cmd() {
	ctx := context.Background()

	rdb := redis.NewClient(&redis.Options{
		Addr:     "localhost:6379",
		Password: "", // no password docs
		DB:       0,  // use default DB
	})


	ttlResult1, err := rdb.Set(ctx, "mykey", "Hello", 10*time.Second).Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(ttlResult1) // >>> OK

	ttlResult2, err := rdb.TTL(ctx, "mykey").Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(math.Round(ttlResult2.Seconds())) // >>> 10

}

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

import redis.clients.jedis.RedisClient;
import redis.clients.jedis.args.ExpiryOption;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Set;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class CmdsGenericExample {

    public void run() {
        RedisClient jedis = RedisClient.create("redis://localhost:6379");


        String delResult1 = jedis.set("key1", "Hello");
        System.out.println(delResult1); // >>> OK

        String delResult2 = jedis.set("key2", "World");
        System.out.println(delResult2); // >>> OK

        long delResult3 = jedis.del("key1", "key2", "key3");
        System.out.println(delResult3); // >>> 2

        // Tests for 'del' step.


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

        // Tests for 'exists' step.


        String expireResult1 = jedis.set("mykey", "Hello");
        System.out.println(expireResult1);  // >>> OK

        long expireResult2 = jedis.expire("mykey", 10);
        System.out.println(expireResult2);  // >>> 1

        long expireResult3 = jedis.ttl("mykey");
        System.out.println(expireResult3);  // >>> 10

        String expireResult4 = jedis.set("mykey", "Hello World");
        System.out.println(expireResult4);  // >>> OK

        long expireResult5 = jedis.ttl("mykey");
        System.out.println(expireResult5);  // >>> -1

        long expireResult6 = jedis.expire("mykey", 10, ExpiryOption.XX);
        System.out.println(expireResult6);  // >>> 0

        long expireResult7 = jedis.ttl("mykey");
        System.out.println(expireResult7);  // >>> -1

        long expireResult8 = jedis.expire("mykey", 10, ExpiryOption.NX);
        System.out.println(expireResult8);  // >>> 1

        long expireResult9 = jedis.ttl("mykey");
        System.out.println(expireResult9);  // >>> 10

        // Tests for 'expire' step.


        String ttlResult1 = jedis.set("mykey", "Hello");
        System.out.println(ttlResult1); // >>> OK

        long ttlResult2 = jedis.expire("mykey", 10);
        System.out.println(ttlResult2); // >>> 1

        long ttlResult3 = jedis.ttl("mykey");
        System.out.println(ttlResult3); // >>> 10

        // Tests for 'ttl' step.


        String keysResult1 = jedis.mset("firstname", "Jack", "lastname", "Stuntman", "age", "35");
        System.out.println(keysResult1); // >>> OK

        Set<String> keysResult2 = jedis.keys("*name*");
        ArrayList<String> keysResult2List = new ArrayList<>(keysResult2);
        Collections.sort(keysResult2List);
        System.out.println(keysResult2List); // >>> [firstname, lastname]

        Set<String> keysResult3 = jedis.keys("a??");
        System.out.println(keysResult3); // >>> [age]

        Set<String> keysResult4 = jedis.keys("*");
        ArrayList<String> keysResult4List = new ArrayList<>(keysResult4);
        Collections.sort(keysResult4List);
        System.out.println(keysResult4List); // >>> [age, firstname, lastname]

        // Tests for 'keys' step.

        jedis.close();
    }
}

```

**JavaScript (Node.js):**

```javascript
const scan3Res1 = await client.geoAdd('geokey', { longitude: 0, latitude: 0, member: 'value' });
console.log(scan3Res1); // 1

const scan3Res2 = await client.zAdd('zkey', [{ score: 1000, value: 'value' }]);
console.log(scan3Res2); // 1

const scan3Res3 = await client.type('geokey');
console.log(scan3Res3); // zset

const scan3Res4 = await client.type('zkey');
console.log(scan3Res4); // zset

const scan3Res5 = await client.scan('0', { TYPE: 'zset' });
console.log(scan3Res5.keys); // ['zkey', 'geokey']
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
const scan3Res1 = await client.geoAdd('geokey', { longitude: 0, latitude: 0, member: 'value' });
console.log(scan3Res1); // 1

const scan3Res2 = await client.zAdd('zkey', [{ score: 1000, value: 'value' }]);
console.log(scan3Res2); // 1

const scan3Res3 = await client.type('geokey');
console.log(scan3Res3); // zset

const scan3Res4 = await client.type('zkey');
console.log(scan3Res4); // zset

const scan3Res5 = await client.scan('0', { TYPE: 'zset' });
console.log(scan3Res5.keys); // ['zkey', 'geokey']
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
res = r.geoadd("geokey", (0, 0, "value"))
print(res)
# >>> 1

res = r.zadd("zkey", {"value": 1000})
print(res)
# >>> 1

res = r.type("geokey")
print(res)
# >>> zset

res = r.type("zkey")
print(res)
# >>> zset

cursor, keys = r.scan(cursor=0, _type="zset")
print(keys)
# >>> ['zkey', 'geokey']
```

**Rust (Asynchronous):**

```rust
        match r.geo_add("geokey", &[(0.0, 0.0, "value")]).await {
            Ok(res) => {
                let res: i32 = res;
                println!("{res}");    // >>> 1
            },
            Err(e) => {
                println!("Error adding geo location: {e}");
                return;
            }
        }

        match r.zadd("zkey", "value", 1000).await {
            Ok(res) => {
                let res: i32 = res;
                println!("{res}");    // >>> 1
            },
            Err(e) => {
                println!("Error adding to sorted set: {e}");
                return;
            }
        }

        match r.key_type::<&str, redis::ValueType>("geokey").await {
            Ok(res) => {
                println!("{res:?}");    // >>> zset
            },
            Err(e) => {
                println!("Error getting key type: {e}");
                return;
            }
        }

        match r.key_type::<&str, redis::ValueType>("zkey").await {
            Ok(res) => {
                println!("{res:?}");    // >>> zset
            },
            Err(e) => {
                println!("Error getting key type: {e}");
                return;
            }
        }

        // Note: Rust redis client doesn't support scan by type directly
        // We'll manually check the types of our known keys
        let mut zset_keys = Vec::new();
        for key in &["geokey", "zkey"] {
            match r.key_type::<&str, redis::ValueType>(key).await {
                Ok(key_type) => {
                    if format!("{key_type:?}") == "ZSet" {
                        zset_keys.push(key.to_string());
                    }
                },
                Err(_) => {},
            }
        }
        println!("{:?}", zset_keys);    // >>> ["zkey", "geokey"]
```

**Rust (Synchronous):**

```rust
        match r.geo_add("geokey", &[(0.0, 0.0, "value")]) {
            Ok(res) => {
                let res: i32 = res;
                println!("{res}");    // >>> 1
            },
            Err(e) => {
                println!("Error adding geo location: {e}");
                return;
            }
        }

        match r.zadd("zkey", "value", 1000) {
            Ok(res) => {
                let res: i32 = res;
                println!("{res}");    // >>> 1
            },
            Err(e) => {
                println!("Error adding to sorted set: {e}");
                return;
            }
        }

        match r.key_type::<&str, redis::ValueType>("geokey") {
            Ok(res) => {
                println!("{res:?}");    // >>> zset
            },
            Err(e) => {
                println!("Error getting key type: {e}");
                return;
            }
        }

        match r.key_type::<&str, redis::ValueType>("zkey") {
            Ok(res) => {
                println!("{res:?}");    // >>> zset
            },
            Err(e) => {
                println!("Error getting key type: {e}");
                return;
            }
        }

        // Note: Rust redis client doesn't support scan by type directly
        // We'll manually check the types of our known keys
        let mut zset_keys = Vec::new();
        for key in &["geokey", "zkey"] {
            match r.key_type::<&str, redis::ValueType>(key) {
                Ok(key_type) => {
                    if format!("{key_type:?}") == "ZSet" {
                        zset_keys.push(key.to_string());
                    }
                },
                Err(_) => {},
            }
        }
        println!("{:?}", zset_keys);    // >>> ["zkey", "geokey"]
```



It is important to note that the **TYPE** filter is also applied after elements are retrieved from the database, so the option does not reduce the amount of work the server has to do to complete a full iteration, and for rare types you may receive no elements in many iterations.

## The NOVALUES option

When using [`HSCAN`](), you can use the `NOVALUES` option to make Redis return only the keys in the hash table without their corresponding values.

#### Code Examples

Hash iteration: Iterate hash fields with optional NOVALUES using HSCAN (returns field-value pairs or fields only)

**Difficulty:** Intermediate

**Commands:** HSET, HSCAN

**Complexity:**
- HSET: O(1)
- HSCAN: O(1)

**Redis CLI:**

```
> HSET myhash a 1 b 2
OK
> HSCAN myhash 0
1) "0"
2) 1) "a"
   2) "1"
   3) "b"
   4) "2"
> HSCAN myhash 0 NOVALUES
1) "0"
2) 1) "a"
   2) "b"
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

```

**Go:**

```go
package example_commands_test

import (
	"context"
	"fmt"
	"math"
	"sort"
	"time"

	"github.com/redis/go-redis/v9"
)


func ExampleClient_del_cmd() {
	ctx := context.Background()

	rdb := redis.NewClient(&redis.Options{
		Addr:     "localhost:6379",
		Password: "", // no password docs
		DB:       0,  // use default DB
	})


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

}

func ExampleClient_exists_cmd() {
	ctx := context.Background()

	rdb := redis.NewClient(&redis.Options{
		Addr:     "localhost:6379",
		Password: "", // no password docs
		DB:       0,  // use default DB
	})


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

}

func ExampleClient_expire_cmd() {
	ctx := context.Background()

	rdb := redis.NewClient(&redis.Options{
		Addr:     "localhost:6379",
		Password: "", // no password docs
		DB:       0,  // use default DB
	})


	expireResult1, err := rdb.Set(ctx, "mykey", "Hello", 0).Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(expireResult1) // >>> OK

	expireResult2, err := rdb.Expire(ctx, "mykey", 10*time.Second).Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(expireResult2) // >>> true

	expireResult3, err := rdb.TTL(ctx, "mykey").Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(math.Round(expireResult3.Seconds())) // >>> 10

	expireResult4, err := rdb.Set(ctx, "mykey", "Hello World", 0).Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(expireResult4) // >>> OK

	expireResult5, err := rdb.TTL(ctx, "mykey").Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(expireResult5) // >>> -1ns

	expireResult6, err := rdb.ExpireXX(ctx, "mykey", 10*time.Second).Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(expireResult6) // >>> false

	expireResult7, err := rdb.TTL(ctx, "mykey").Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(expireResult7) // >>> -1ns

	expireResult8, err := rdb.ExpireNX(ctx, "mykey", 10*time.Second).Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(expireResult8) // >>> true

	expireResult9, err := rdb.TTL(ctx, "mykey").Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(math.Round(expireResult9.Seconds())) // >>> 10

}

func ExampleClient_keys_cmd() {
	ctx := context.Background()

	rdb := redis.NewClient(&redis.Options{
		Addr:     "localhost:6379",
		Password: "", // no password docs
		DB:       0,  // use default DB
	})


	keysResult1, err := rdb.MSet(ctx, "firstname", "Jack", "lastname", "Stuntman", "age", "35").Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(keysResult1) // >>> OK

	keysResult2, err := rdb.Keys(ctx, "*name*").Result()

	if err != nil {
		panic(err)
	}

	sort.Strings(keysResult2)
	fmt.Println(keysResult2) // >>> [firstname lastname]

	keysResult3, err := rdb.Keys(ctx, "a??").Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(keysResult3) // >>> [age]

	keysResult4, err := rdb.Keys(ctx, "*").Result()

	if err != nil {
		panic(err)
	}

	sort.Strings(keysResult4)
	fmt.Println(keysResult4) // >>> [age firstname lastname]

}

func ExampleClient_ttl_cmd() {
	ctx := context.Background()

	rdb := redis.NewClient(&redis.Options{
		Addr:     "localhost:6379",
		Password: "", // no password docs
		DB:       0,  // use default DB
	})


	ttlResult1, err := rdb.Set(ctx, "mykey", "Hello", 10*time.Second).Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(ttlResult1) // >>> OK

	ttlResult2, err := rdb.TTL(ctx, "mykey").Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(math.Round(ttlResult2.Seconds())) // >>> 10

}

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

import redis.clients.jedis.RedisClient;
import redis.clients.jedis.args.ExpiryOption;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Set;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class CmdsGenericExample {

    public void run() {
        RedisClient jedis = RedisClient.create("redis://localhost:6379");


        String delResult1 = jedis.set("key1", "Hello");
        System.out.println(delResult1); // >>> OK

        String delResult2 = jedis.set("key2", "World");
        System.out.println(delResult2); // >>> OK

        long delResult3 = jedis.del("key1", "key2", "key3");
        System.out.println(delResult3); // >>> 2

        // Tests for 'del' step.


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

        // Tests for 'exists' step.


        String expireResult1 = jedis.set("mykey", "Hello");
        System.out.println(expireResult1);  // >>> OK

        long expireResult2 = jedis.expire("mykey", 10);
        System.out.println(expireResult2);  // >>> 1

        long expireResult3 = jedis.ttl("mykey");
        System.out.println(expireResult3);  // >>> 10

        String expireResult4 = jedis.set("mykey", "Hello World");
        System.out.println(expireResult4);  // >>> OK

        long expireResult5 = jedis.ttl("mykey");
        System.out.println(expireResult5);  // >>> -1

        long expireResult6 = jedis.expire("mykey", 10, ExpiryOption.XX);
        System.out.println(expireResult6);  // >>> 0

        long expireResult7 = jedis.ttl("mykey");
        System.out.println(expireResult7);  // >>> -1

        long expireResult8 = jedis.expire("mykey", 10, ExpiryOption.NX);
        System.out.println(expireResult8);  // >>> 1

        long expireResult9 = jedis.ttl("mykey");
        System.out.println(expireResult9);  // >>> 10

        // Tests for 'expire' step.


        String ttlResult1 = jedis.set("mykey", "Hello");
        System.out.println(ttlResult1); // >>> OK

        long ttlResult2 = jedis.expire("mykey", 10);
        System.out.println(ttlResult2); // >>> 1

        long ttlResult3 = jedis.ttl("mykey");
        System.out.println(ttlResult3); // >>> 10

        // Tests for 'ttl' step.


        String keysResult1 = jedis.mset("firstname", "Jack", "lastname", "Stuntman", "age", "35");
        System.out.println(keysResult1); // >>> OK

        Set<String> keysResult2 = jedis.keys("*name*");
        ArrayList<String> keysResult2List = new ArrayList<>(keysResult2);
        Collections.sort(keysResult2List);
        System.out.println(keysResult2List); // >>> [firstname, lastname]

        Set<String> keysResult3 = jedis.keys("a??");
        System.out.println(keysResult3); // >>> [age]

        Set<String> keysResult4 = jedis.keys("*");
        ArrayList<String> keysResult4List = new ArrayList<>(keysResult4);
        Collections.sort(keysResult4List);
        System.out.println(keysResult4List); // >>> [age, firstname, lastname]

        // Tests for 'keys' step.

        jedis.close();
    }
}

```

**JavaScript (Node.js):**

```javascript
const scan4Res1 = await client.hSet('myhash', { a: 1, b: 2 });
console.log(scan4Res1); // 2

const scan4Res2 = await client.hScan('myhash', '0');
console.log(scan4Res2.entries); // [{field: 'a', value: '1'}, {field: 'b', value: '2'}]

const scan4Res3 = await client.hScan('myhash', '0', { COUNT: 10 });
const items = scan4Res3.entries.map((item) => item.field)
console.log(items); // ['a', 'b']
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
const scan4Res1 = await client.hSet('myhash', { a: 1, b: 2 });
console.log(scan4Res1); // 2

const scan4Res2 = await client.hScan('myhash', '0');
console.log(scan4Res2.entries); // [{field: 'a', value: '1'}, {field: 'b', value: '2'}]

const scan4Res3 = await client.hScan('myhash', '0', { COUNT: 10 });
const items = scan4Res3.entries.map((item) => item.field)
console.log(items); // ['a', 'b']
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
res = r.hset("myhash", mapping={"a": 1, "b": 2})
print(res)
# >>> 2

cursor, keys = r.hscan("myhash", 0)
print(keys)
# >>> {'a': '1', 'b': '2'}

cursor, keys = r.hscan("myhash", 0, no_values=True)
print(keys)
# >>> ['a', 'b']

```

**Rust (Asynchronous):**

```rust
        match r.hset("myhash", "a", "1").await {
            Ok(res) => {
                let res: i32 = res;
                println!("{res}");    // >>> 1
            },
            Err(e) => {
                println!("Error setting hash field: {e}");
                return;
            }
        }

        match r.hset("myhash", "b", "2").await {
            Ok(res) => {
                let res: i32 = res;
                println!("{res}");    // >>> 1
            },
            Err(e) => {
                println!("Error setting hash fields: {e}");
                return;
            }
        }

        let fields = match r.hscan("myhash").await {
            Ok(iter) => {
                let items: Vec<Result<(String, String), _>> = iter.collect().await;
                items.into_iter().filter_map(|r| r.ok()).collect::<std::collections::HashMap<String, String>>()
            },
            Err(e) => {
                println!("Error scanning hash: {e}");
                return;
            }
        };

        println!("{fields:?}");    // >>> {"a": "1", "b": "2"}

        // Scan hash keys only (no values)
        match r.hkeys("myhash").await {
            Ok(keys) => {
                let keys: Vec<String> = keys;
                println!("{keys:?}");    // >>> ["a", "b"]
            },
            Err(e) => {
                println!("Error getting hash keys: {e}");
                return;
            }
        }
```

**Rust (Synchronous):**

```rust
        match r.hset("myhash", "a", "1") {
            Ok(res) => {
                let res: i32 = res;
                println!("{res}");    // >>> 1
            },
            Err(e) => {
                println!("Error setting hash field: {e}");
                return;
            }
        }

        match r.hset("myhash", "b", "2") {
            Ok(res) => {
                let res: i32 = res;
                println!("{res}");    // >>> 1
            },
            Err(e) => {
                println!("Error setting hash fields: {e}");
                return;
            }
        }

        match r.hscan("myhash") {
            Ok(iter) => {
                let fields: std::collections::HashMap<String, String> = iter.filter_map(|r| r.ok()).collect();
                println!("{fields:?}");    // >>> {"a": "1", "b": "2"}
            },
            Err(e) => {
                println!("Error scanning hash: {e}");
                return;
            }
        }

        // Scan hash keys only (no values)
        match r.hkeys("myhash") {
            Ok(keys) => {
                let keys: Vec<String> = keys;
                println!("{keys:?}");    // >>> ["a", "b"]
            },
            Err(e) => {
                println!("Error getting hash keys: {e}");
                return;
            }
        }
```



## Multiple parallel iterations

It is possible for an infinite number of clients to iterate the same collection at the same time, as the full state of the iterator is in the cursor, that is obtained and returned to the client at every call. No server side state is taken at all.

## Terminating iterations in the middle

Since there is no state server side, but the full state is captured by the cursor, the caller is free to terminate an iteration half-way without signaling this to the server in any way. An infinite number of iterations can be started and never terminated without any issue.

## Calling SCAN with a corrupted cursor

Calling `SCAN` with a broken, negative, out of range, or otherwise invalid cursor, will result in undefined behavior but never in a crash. What will be undefined is that the guarantees about the returned elements can no longer be ensured by the `SCAN` implementation.

The only valid cursors to use are:

* The cursor value of 0 when starting an iteration.
* The cursor returned by the previous call to SCAN in order to continue the iteration.

## Guarantee of termination

The `SCAN` algorithm is guaranteed to terminate only if the size of the iterated collection remains bounded to a given maximum size, otherwise iterating a collection that always grows may result into `SCAN` to never terminate a full iteration.

This is easy to see intuitively: if the collection grows there is more and more work to do in order to visit all the possible elements, and the ability to terminate the iteration depends on the number of calls to `SCAN` and its COUNT option value compared with the rate at which the collection grows.

## Why SCAN may return all the items of an aggregate data type in a single call?

In the `COUNT` option documentation, we state that sometimes this family of commands may return all the elements of a Set, Hash or Sorted Set at once in a single call, regardless of the `COUNT` option value. The reason why this happens is that the cursor-based iterator can be implemented, and is useful, only when the aggregate data type that we are scanning is represented as a hash table. However Redis uses a [memory optimization]() where small aggregate data types, until they reach a given amount of items or a given max size of single elements, are represented using a compact single-allocation packed encoding. When this is the case, `SCAN` has no meaningful cursor to return, and must iterate the whole data structure at once, so the only sane behavior it has is to return everything in a call.

However once the data structures are bigger and are promoted to use real hash tables, the `SCAN` family of commands will resort to the normal behavior. Note that since this special behavior of returning all the elements is true only for small aggregates, it has no effects on the command complexity or latency. However the exact limits to get converted into real hash tables are [user configurable](), so the maximum number of elements you can see returned in a single call depends on how big an aggregate data type could be and still use the packed representation.

Also note that this behavior is specific of [`SSCAN`](), [`HSCAN`]() and [`ZSCAN`](). `SCAN` itself never shows this behavior because the key space is always represented by hash tables.

## Further reading

For more information about managing keys, please refer to the [The Redis Keyspace]() tutorial.

## Additional examples

Give the following commands, showing iteration of a hash key, a try in the interactive console:


HMSET hash name Jack age 33
HSCAN hash 0


## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |

## Return information

**RESP2:**

[Array reply](../../develop/reference/protocol-spec#arrays): specifically, an array with two elements.
* The first element is a [Bulk string reply](../../develop/reference/protocol-spec#bulk-strings) that represents an unsigned 64-bit number, the cursor.
* The second element is an [Array reply](../../develop/reference/protocol-spec#arrays) with the names of scanned keys.

**RESP3:**

[Array reply](../../develop/reference/protocol-spec#arrays): specifically, an array with two elements.
* The first element is a [Bulk string reply](../../develop/reference/protocol-spec#bulk-strings) that represents an unsigned 64-bit number, the cursor.
* The second element is an [Array reply](../../develop/reference/protocol-spec#arrays) with the names of scanned keys.


