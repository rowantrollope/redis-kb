---
title: Redis Strings
url: https://redis.io/docs/latest/develop/data-types/strings/
retrieved_utc: '2026-04-09T20:45:54.951518+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/develop/data-types/strings/index.html.md
---

# Redis Strings

```json metadata
{
  "title": "Redis Strings",
  "description": "Introduction to Redis strings",
  "categories": ["docs","develop","stack","oss","rs","rc","kubernetes","clients"],
  "tableOfContents": {"sections":[{"id":"strings-as-counters","title":"Strings as counters"},{"id":"limits","title":"Limits"},{"id":"bitwise-and-bitfield-operations","title":"Bitwise and bitfield operations"},{"id":"performance","title":"Performance"},{"id":"alternatives","title":"Alternatives"},{"id":"learn-more","title":"Learn more"}]}

,
  "codeExamples": [{"codetabsId":"set_tutorial-stepset_get","commands":[{"acl_categories":["@write","@string","@slow"],"complexity":"O(1)","name":"SET"},{"acl_categories":["@read","@string","@fast"],"complexity":"O(1)","name":"GET"}],"description":"Foundational: Set and retrieve string values using SET and GET (overwrites existing values)","difficulty":"beginner","id":"set_get","languages":[{"id":"redis-cli","panelId":"panel_redis-cli_set_tutorial-stepset_get"},{"clientId":"redis-py","clientName":"redis-py","id":"Python","langId":"python","panelId":"panel_Python_set_tutorial-stepset_get"},{"id":"Node-js","panelId":"panel_Nodejs_set_tutorial-stepset_get"},{"clientId":"jedis","clientName":"Jedis","id":"Java-Sync","langId":"java","panelId":"panel_Java-Sync_set_tutorial-stepset_get"},{"clientId":"lettuce","clientName":"Lettuce","id":"Java-Async","langId":"java","panelId":"panel_Java-Async_set_tutorial-stepset_get"},{"clientId":"lettuce","clientName":"Lettuce","id":"Java-Reactive","langId":"java","panelId":"panel_Java-Reactive_set_tutorial-stepset_get"},{"clientId":"go-redis","clientName":"go-redis","id":"Go","langId":"go","panelId":"panel_Go_set_tutorial-stepset_get"},{"id":"dotnet-Sync","panelId":"panel_Csharp-Sync_set_tutorial-stepset_get"},{"clientId":"predis","clientName":"Predis","id":"PHP","langId":"php","panelId":"panel_PHP_set_tutorial-stepset_get"},{"clientId":"redis-rs","clientName":"redis-rs","id":"Rust-Sync","langId":"rust","panelId":"panel_Rust-Sync_set_tutorial-stepset_get"},{"clientId":"redis-rs","clientName":"redis-rs","id":"Rust-Async","langId":"rust","panelId":"panel_Rust-Async_set_tutorial-stepset_get"}]},{"buildsUpon":["set_get"],"codetabsId":"set_tutorial-stepsetnx_xx","commands":[{"acl_categories":["@write","@string","@slow"],"complexity":"O(1)","name":"SET"}],"description":"Conditional SET operations: Use NX and XX options to control key existence when you need atomic compare-and-set behavior","difficulty":"intermediate","id":"setnx_xx","languages":[{"id":"redis-cli","panelId":"panel_redis-cli_set_tutorial-stepsetnx_xx"},{"clientId":"redis-py","clientName":"redis-py","id":"Python","langId":"python","panelId":"panel_Python_set_tutorial-stepsetnx_xx"},{"id":"Node-js","panelId":"panel_Nodejs_set_tutorial-stepsetnx_xx"},{"clientId":"jedis","clientName":"Jedis","id":"Java-Sync","langId":"java","panelId":"panel_Java-Sync_set_tutorial-stepsetnx_xx"},{"clientId":"lettuce","clientName":"Lettuce","id":"Java-Async","langId":"java","panelId":"panel_Java-Async_set_tutorial-stepsetnx_xx"},{"clientId":"lettuce","clientName":"Lettuce","id":"Java-Reactive","langId":"java","panelId":"panel_Java-Reactive_set_tutorial-stepsetnx_xx"},{"clientId":"go-redis","clientName":"go-redis","id":"Go","langId":"go","panelId":"panel_Go_set_tutorial-stepsetnx_xx"},{"id":"dotnet-Sync","panelId":"panel_Csharp-Sync_set_tutorial-stepsetnx_xx"},{"clientId":"predis","clientName":"Predis","id":"PHP","langId":"php","panelId":"panel_PHP_set_tutorial-stepsetnx_xx"},{"clientId":"redis-rs","clientName":"redis-rs","id":"Rust-Sync","langId":"rust","panelId":"panel_Rust-Sync_set_tutorial-stepsetnx_xx"},{"clientId":"redis-rs","clientName":"redis-rs","id":"Rust-Async","langId":"rust","panelId":"panel_Rust-Async_set_tutorial-stepsetnx_xx"}]},{"buildsUpon":["set_get"],"codetabsId":"set_tutorial-stepmset","commands":[{"acl_categories":["@write","@string","@slow"],"complexity":"O(N)","name":"MSET"},{"acl_categories":["@read","@string","@fast"],"complexity":"O(N)","name":"MGET"}],"description":"Set and retrieve multiple values using MSET and MGET when you need to reduce round trips to the server","difficulty":"beginner","id":"mset","languages":[{"id":"redis-cli","panelId":"panel_redis-cli_set_tutorial-stepmset"},{"clientId":"redis-py","clientName":"redis-py","id":"Python","langId":"python","panelId":"panel_Python_set_tutorial-stepmset"},{"id":"Node-js","panelId":"panel_Nodejs_set_tutorial-stepmset"},{"clientId":"jedis","clientName":"Jedis","id":"Java-Sync","langId":"java","panelId":"panel_Java-Sync_set_tutorial-stepmset"},{"clientId":"lettuce","clientName":"Lettuce","id":"Java-Async","langId":"java","panelId":"panel_Java-Async_set_tutorial-stepmset"},{"clientId":"lettuce","clientName":"Lettuce","id":"Java-Reactive","langId":"java","panelId":"panel_Java-Reactive_set_tutorial-stepmset"},{"clientId":"go-redis","clientName":"go-redis","id":"Go","langId":"go","panelId":"panel_Go_set_tutorial-stepmset"},{"id":"dotnet-Sync","panelId":"panel_Csharp-Sync_set_tutorial-stepmset"},{"clientId":"predis","clientName":"Predis","id":"PHP","langId":"php","panelId":"panel_PHP_set_tutorial-stepmset"},{"clientId":"redis-rs","clientName":"redis-rs","id":"Rust-Sync","langId":"rust","panelId":"panel_Rust-Sync_set_tutorial-stepmset"},{"clientId":"redis-rs","clientName":"redis-rs","id":"Rust-Async","langId":"rust","panelId":"panel_Rust-Async_set_tutorial-stepmset"}]},{"buildsUpon":["set_get"],"codetabsId":"set_tutorial-stepincr","commands":[{"acl_categories":["@write","@string","@slow"],"complexity":"O(1)","name":"SET"},{"acl_categories":["@write","@string","@fast"],"complexity":"O(1)","name":"INCR"},{"acl_categories":["@write","@string","@fast"],"complexity":"O(1)","name":"INCRBY"}],"description":"Atomic counters: Increment string values using INCR and INCRBY when you need thread-safe operations (initializes to 0 if key doesn\u0026amp;#39;t exist)","difficulty":"beginner","id":"incr","languages":[{"id":"redis-cli","panelId":"panel_redis-cli_set_tutorial-stepincr"},{"clientId":"redis-py","clientName":"redis-py","id":"Python","langId":"python","panelId":"panel_Python_set_tutorial-stepincr"},{"id":"Node-js","panelId":"panel_Nodejs_set_tutorial-stepincr"},{"clientId":"jedis","clientName":"Jedis","id":"Java-Sync","langId":"java","panelId":"panel_Java-Sync_set_tutorial-stepincr"},{"clientId":"lettuce","clientName":"Lettuce","id":"Java-Async","langId":"java","panelId":"panel_Java-Async_set_tutorial-stepincr"},{"clientId":"lettuce","clientName":"Lettuce","id":"Java-Reactive","langId":"java","panelId":"panel_Java-Reactive_set_tutorial-stepincr"},{"clientId":"go-redis","clientName":"go-redis","id":"Go","langId":"go","panelId":"panel_Go_set_tutorial-stepincr"},{"id":"dotnet-Sync","panelId":"panel_Csharp-Sync_set_tutorial-stepincr"},{"clientId":"predis","clientName":"Predis","id":"PHP","langId":"php","panelId":"panel_PHP_set_tutorial-stepincr"},{"clientId":"redis-rs","clientName":"redis-rs","id":"Rust-Sync","langId":"rust","panelId":"panel_Rust-Sync_set_tutorial-stepincr"},{"clientId":"redis-rs","clientName":"redis-rs","id":"Rust-Async","langId":"rust","panelId":"panel_Rust-Async_set_tutorial-stepincr"}]}]
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


### String command summary

**25 commands in this group:**

[View all string commands](https://redis.io/commands/?group=string)

| Command | Summary | Complexity | Since |
|---------|---------|------------|-------|
| [APPEND](https://redis.io/commands/append/) | Appends a string to the value of a key. Creates the key if it doesn't exist. | O(1). The amortized time complexity is O(1) ass... | 2.0.0 |
| [DECR](https://redis.io/commands/decr/) | Decrements the integer value of a key by one. Uses 0 as initial value if the key doesn't exist. | O(1) | 1.0.0 |
| [DECRBY](https://redis.io/commands/decrby/) | Decrements a number from the integer value of a key. Uses 0 as initial value if the key doesn't exist. | O(1) | 1.0.0 |
| [DELEX](https://redis.io/commands/delex/) | Conditionally removes the specified key based on value or digest comparison. | O(1) for IFEQ/IFNE, O(N) for IFDEQ/IFDNE where ... | 8.4.0 |
| [DIGEST](https://redis.io/commands/digest/) | Returns the XXH3 hash of a string value. | O(N) where N is the length of the string value. | 8.4.0 |
| [GET](https://redis.io/commands/get/) | Returns the string value of a key. | O(1) | 1.0.0 |
| [GETDEL](https://redis.io/commands/getdel/) | Returns the string value of a key after deleting the key. | O(1) | 6.2.0 |
| [GETEX](https://redis.io/commands/getex/) | Returns the string value of a key after setting its expiration time. | O(1) | 6.2.0 |
| [GETRANGE](https://redis.io/commands/getrange/) | Returns a substring of the string stored at a key. | O(N) where N is the length of the returned stri... | 2.4.0 |
| [GETSET](https://redis.io/commands/getset/) | Returns the previous string value of a key after setting it to a new value. | O(1) | 1.0.0 |
| [INCR](https://redis.io/commands/incr/) | Increments the integer value of a key by one. Uses 0 as initial value if the key doesn't exist. | O(1) | 1.0.0 |
| [INCRBY](https://redis.io/commands/incrby/) | Increments the integer value of a key by a number. Uses 0 as initial value if the key doesn't exist. | O(1) | 1.0.0 |
| [INCRBYFLOAT](https://redis.io/commands/incrbyfloat/) | Increment the floating point value of a key by a number. Uses 0 as initial value if the key doesn't exist. | O(1) | 2.6.0 |
| [LCS](https://redis.io/commands/lcs/) | Finds the longest common substring. | O(N*M) where N and M are the lengths of s1 and ... | 7.0.0 |
| [MGET](https://redis.io/commands/mget/) | Atomically returns the string values of one or more keys. | O(N) where N is the number of keys to retrieve. | 1.0.0 |
| [MSET](https://redis.io/commands/mset/) | Atomically creates or modifies the string values of one or more keys. | O(N) where N is the number of keys to set. | 1.0.1 |
| [MSETEX](https://redis.io/commands/msetex/) | Atomically sets multiple string keys with a shared expiration in a single operation. Supports flexible argument parsing where condition and expiration flags can appear in any order. | O(N) where N is the number of keys to set. | 8.4.0 |
| [MSETNX](https://redis.io/commands/msetnx/) | Atomically modifies the string values of one or more keys only when all keys don't exist. | O(N) where N is the number of keys to set. | 1.0.1 |
| [PSETEX](https://redis.io/commands/psetex/) | Sets both string value and expiration time in milliseconds of a key. The key is created if it doesn't exist. | O(1) | 2.6.0 |
| [SET](https://redis.io/commands/set/) | Sets the string value of a key, ignoring its type. The key is created if it doesn't exist. | O(1) | 1.0.0 |
| [SETEX](https://redis.io/commands/setex/) | Sets the string value and expiration time of a key. Creates the key if it doesn't exist. | O(1) | 2.0.0 |
| [SETNX](https://redis.io/commands/setnx/) | Set the string value of a key only when the key doesn't exist. | O(1) | 1.0.0 |
| [SETRANGE](https://redis.io/commands/setrange/) | Overwrites a part of a string value with another by an offset. Creates the key if it doesn't exist. | O(1), not counting the time taken to copy the n... | 2.2.0 |
| [STRLEN](https://redis.io/commands/strlen/) | Returns the length of a string value. | O(1) | 2.2.0 |
| [SUBSTR](https://redis.io/commands/substr/) | Returns a substring from a string value. | O(N) where N is the length of the returned stri... | 1.0.0 |



Redis strings store sequences of bytes, including text, serialized objects, and binary arrays.
As such, strings are the simplest type of value you can associate with a Redis key.
They're often used for caching, but they support additional functionality that lets you implement counters and perform bitwise operations, too.

Since Redis keys are strings, when we use the string type as a value too,
we are mapping a string to another string. The string data type is useful
for a number of use cases, like caching HTML fragments or pages.

#### Code Examples

Foundational: Set and retrieve string values using SET and GET (overwrites existing values)

**Commands:** SET, GET

**Complexity:**
- SET: O(1)
- GET: O(1)

**Redis CLI:**

```
> SET bike:1 Deimos
OK
> GET bike:1
"Deimos"
```

**Available in:** Redis CLI, C# (Synchronous), Go, Java (Asynchronous - Lettuce), Java (Reactive - Lettuce), Java (Synchronous - Jedis), JavaScript (Node.js), PHP, Python, Rust (Asynchronous), Rust (Synchronous)

**C# (Synchronous):**

```csharp
        var res1 = db.StringSet("bike:1", "Deimos");
        Console.WriteLine(res1); // true
        var res2 = db.StringGet("bike:1");
        Console.WriteLine(res2); // Deimos
```

**Go:**

```go
	res1, err := rdb.Set(ctx, "bike:1", "Deimos", 0).Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(res1) // >>> OK

	res2, err := rdb.Get(ctx, "bike:1").Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(res2) // >>> Deimos
```

**Java (Asynchronous - Lettuce):**

```java
            CompletableFuture<Void> setAndGet = asyncCommands.set("bike:1", "Deimos").thenCompose(v -> {
                System.out.println(v); // >>> OK
                return asyncCommands.get("bike:1");
            })
                    .thenAccept(System.out::println) // >>> Deimos
                    .toCompletableFuture();
```

**Java (Reactive - Lettuce):**

```java
            Mono<Void> setAndGet = reactiveCommands.set("bike:1", "Deimos").doOnNext(v -> {
                System.out.println(v); // OK
            }).flatMap(v -> reactiveCommands.get("bike:1")).doOnNext(res -> {
                System.out.println(res); // Deimos
            }).then();
```

**Java (Synchronous - Jedis):**

```java
      String res1 = jedis.set("bike:1", "Deimos");
      System.out.println(res1); // OK
      String res2 = jedis.get("bike:1");
      System.out.println(res2); // Deimos
```

**JavaScript (Node.js):**

```javascript
const res1 = await client.set("bike:1", "Deimos");
console.log(res1);  // OK
const res2 = await client.get("bike:1");
console.log(res2);  // Deimos
```

**PHP:**

```php
        $res1 = $r->set('bike:1', 'Deimos');
        echo "$res1" . PHP_EOL;
        // >>> OK

        $res2 = $r->get('bike:1');
        echo "$res2" . PHP_EOL;
        // >>> Deimos
```

**Python:**

```python
res1 = r.set("bike:1", "Deimos")
print(res1)  # True
res2 = r.get("bike:1")
print(res2)  # Deimos
```

**Rust (Asynchronous):**

```rust
        if let Ok(res) = r.set("bike:1", "Deimos").await {
            let res: String = res;
            println!("{res}");    // >>> OK
        }

        match r.get("bike:1").await {
            Ok(res) => {
                let res: String = res;
                println!("{res}");   // >>> Deimos
            },
            Err(e) => {
                println!("Error getting foo: {e}");
                return;
            }
        };
```

**Rust (Synchronous):**

```rust
        if let Ok(res) = r.set("bike:1", "Deimos") {
            let res: String = res;
            println!("{res}");    // >>> OK
        }

        match r.get("bike:1") {
            Ok(res) => {
                let res: String = res;
                println!("{res}");   // >>> Deimos
            },
            Err(e) => {
                println!("Error getting bike:1: {e}");
                return;
            }
        };
```



As you can see using the [`SET`]() and the [`GET`]() commands are the way we set
and retrieve a string value. Note that [`SET`]() will replace any existing value
already stored into the key, in the case that the key already exists, even if
the key is associated with a non-string value. So [`SET`]() performs an assignment.

Values can be strings (including binary data) of every kind, for instance you
can store a jpeg image inside a value. A value can't be bigger than 512 MB.

The [`SET`]() command has interesting options that are provided as additional
arguments. For example, I may ask [`SET`]() to fail if the key already exists,
or the opposite, that it only succeed if the key already exists:

#### Code Examples

Conditional SET operations: Use NX and XX options to control key existence when you need atomic compare-and-set behavior

**Difficulty:** Intermediate

**Builds upon:** set_get

**Commands:** SET

**Complexity:**
- SET: O(1)

**Redis CLI:**

```
> SET bike:1 bike NX
(nil)
> SET bike:1 bike XX
OK
```

**Available in:** Redis CLI, C# (Synchronous), Go, Java (Asynchronous - Lettuce), Java (Reactive - Lettuce), Java (Synchronous - Jedis), JavaScript (Node.js), PHP, Python, Rust (Asynchronous), Rust (Synchronous)

**C# (Synchronous):**

```csharp
        var res3 = db.StringSet("bike:1", "bike", when: When.NotExists);
        Console.WriteLine(res3); // false
        Console.WriteLine(db.StringGet("bike:1"));
        var res4 = db.StringSet("bike:1", "bike", when: When.Exists);
        Console.WriteLine(res4); // true
```

**Go:**

```go
	res3, err := rdb.SetNX(ctx, "bike:1", "bike", 0).Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(res3) // >>> false

	res4, err := rdb.Get(ctx, "bike:1").Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(res4) // >>> Deimos

	res5, err := rdb.SetXX(ctx, "bike:1", "bike", 0).Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(res5) // >>> OK
```

**Java (Asynchronous - Lettuce):**

```java
            CompletableFuture<Void> setnx = asyncCommands.setnx("bike:1", "bike").thenCompose(v -> {
                System.out.println(v); // >>> false (because key already exists)
                return asyncCommands.get("bike:1");
            })
                    .thenAccept(System.out::println) // >>> Deimos (value is unchanged)
                    .toCompletableFuture();
            setnx.join();

            // set the value to "bike" if it already exists
            CompletableFuture<Void> setxx = asyncCommands.set("bike:1", "bike", SetArgs.Builder.xx())
                    .thenAccept(System.out::println) // >>> OK
                    .toCompletableFuture();
            setxx.join();
```

**Java (Reactive - Lettuce):**

```java
            Mono<Void> setnx = reactiveCommands.setnx("bike:1", "bike").doOnNext(v -> {
                System.out.println(v); // false (because key already exists)
            }).flatMap(v -> reactiveCommands.get("bike:1")).doOnNext(res -> {
                System.out.println(res); // Deimos (value is unchanged)
            }).then();

            Mono<Void> setxx = reactiveCommands.set("bike:1", "bike", SetArgs.Builder.xx()).doOnNext(res -> {
                System.out.println(res); // OK
            }).then();
```

**Java (Synchronous - Jedis):**

```java
      Long res3 = jedis.setnx("bike:1", "bike");
      System.out.println(res3); // 0 (because key already exists)
      System.out.println(jedis.get("bike:1")); // Deimos (value is unchanged)
      String res4 = jedis.set("bike:1", "bike", SetParams.setParams().xx()); // set the value to "bike" if it
      // already
      // exists
      System.out.println(res4); // OK
```

**JavaScript (Node.js):**

```javascript
const res3 = await client.set("bike:1", "bike", {'NX': true});
console.log(res3);  // null
console.log(await client.get("bike:1"));  // Deimos
const res4 = await client.set("bike:1", "bike", {'XX': true});
console.log(res4);  // OK
```

**PHP:**

```php
        $res3 = $r->set('bike:1', 'bike', 'nx');
        echo "$res3" . PHP_EOL;
        // >>> (null)
        
        echo $r->get('bike:1') . PHP_EOL;
        // >>> Deimos

        $res4 = $r->set('bike:1', 'bike', 'xx');
        echo "$res4" . PHP_EOL;
        // >>> OK
```

**Python:**

```python
res3 = r.set("bike:1", "bike", nx=True)
print(res3)  # None
print(r.get("bike:1"))  # Deimos
res4 = r.set("bike:1", "bike", xx=True)
print(res4)  # True
```

**Rust (Asynchronous):**

```rust
        if let Ok(res) = r.set_options("bike:1", "bike", redis::SetOptions::default().conditional_set(ExistenceCheck::NX)).await {
            let res: bool = res;
            println!("{res}");    // >>> false
        }

        match r.get("bike:1").await {
            Ok(res) => {
                let res: String = res;
                println!("{res}");   // >>> Deimos
            },
            Err(e) => {
                println!("Error getting foo: {e}");
                return;
            }
        };

        if let Ok(res) = r.set_options("bike:1", "bike", redis::SetOptions::default().conditional_set(ExistenceCheck::XX)).await {
            let res: String = res;
            println!("{res}");    // >>> OK
        }

        match r.get("bike:1").await {
            Ok(res) => {
                let res: String = res;
                println!("{res}");   // >>> bike
            },
            Err(e) => {
                println!("Error getting foo: {e}");
                return;
            }
        };
```

**Rust (Synchronous):**

```rust
        if let Ok(res) = r.set_options("bike:1", "bike", redis::SetOptions::default().conditional_set(ExistenceCheck::NX)) {
            let res: bool = res;
            println!("{res}");    // >>> false
        }

        match r.get("bike:1") {
            Ok(res) => {
                let res: String = res;
                println!("{res}");   // >>> Deimos
            },
            Err(e) => {
                println!("Error getting bike:1: {e}");
                return;
            }
        };

        if let Ok(res) = r.set_options("bike:1", "bike", redis::SetOptions::default().conditional_set(ExistenceCheck::XX)) {
            let res: String = res;
            println!("{res}");    // >>> OK
        }
        
        match r.get("bike:1") {
            Ok(res) => {
                let res: String = res;
                println!("{res}");   // >>> bike
            },
            Err(e) => {
                println!("Error getting bike:1: {e}");
                return;
            }
        };
```



There are a number of other commands for operating on strings. For example
the [`GETSET`]() command sets a key to a new value, returning the old value as the
result. You can use this command, for example, if you have a
system that increments a Redis key using [`INCR`]()
every time your web site receives a new visitor. You may want to collect this
information once every hour, without losing a single increment.
You can [`GETSET`]() the key, assigning it the new value of "0" and reading the
old value back.

The ability to set or retrieve the value of multiple keys in a single
command is also useful for reduced latency. For this reason there are
the [`MSET`]() and [`MGET`]() commands:

#### Code Examples

Set and retrieve multiple values using MSET and MGET when you need to reduce round trips to the server

**Builds upon:** set_get

**Commands:** MSET, MGET

**Complexity:**
- MSET: O(N)
- MGET: O(N)

**Redis CLI:**

```
> MSET bike:1 "Deimos" bike:2 "Ares" bike:3 "Vanth"
OK
> MGET bike:1 bike:2 bike:3
1) "Deimos"
2) "Ares"
3) "Vanth"
```

**Available in:** Redis CLI, C# (Synchronous), Go, Java (Asynchronous - Lettuce), Java (Reactive - Lettuce), Java (Synchronous - Jedis), JavaScript (Node.js), PHP, Python, Rust (Asynchronous), Rust (Synchronous)

**C# (Synchronous):**

```csharp
        var res5 = db.StringSet([
            new ("bike:1", "Deimos"), new("bike:2", "Ares"), new("bike:3", "Vanth")
        ]);
        Console.WriteLine(res5);
        var res6 = db.StringGet(["bike:1", "bike:2", "bike:3"]);
        Console.WriteLine(string.Join(", ", res6));
```

**Go:**

```go
	res6, err := rdb.MSet(ctx, "bike:1", "Deimos", "bike:2", "Ares", "bike:3", "Vanth").Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(res6) // >>> OK

	res7, err := rdb.MGet(ctx, "bike:1", "bike:2", "bike:3").Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(res7) // >>> [Deimos Ares Vanth]
```

**Java (Asynchronous - Lettuce):**

```java
            Map<String, String> bikeMap = new HashMap<>();
            bikeMap.put("bike:1", "Deimos");
            bikeMap.put("bike:2", "Ares");
            bikeMap.put("bike:3", "Vanth");

            CompletableFuture<Void> mset = asyncCommands.mset(bikeMap).thenCompose(v -> {
                System.out.println(v); // >>> OK
                return asyncCommands.mget("bike:1", "bike:2", "bike:3");
            })
                    .thenAccept(System.out::println)
                    // >>> [KeyValue[bike:1, Deimos], KeyValue[bike:2, Ares], KeyValue[bike:3,
                    // Vanth]]
                    .toCompletableFuture();
```

**Java (Reactive - Lettuce):**

```java
            Map<String, String> bikeMap = new HashMap<>();
            bikeMap.put("bike:1", "Deimos");
            bikeMap.put("bike:2", "Ares");
            bikeMap.put("bike:3", "Vanth");

            Mono<Void> mset = reactiveCommands.mset(bikeMap).doOnNext(System.out::println) // OK
                    .flatMap(v -> reactiveCommands.mget("bike:1", "bike:2", "bike:3").collectList()).doOnNext(res -> {
                        System.out.println(res); // [KeyValue[bike:1, Deimos], KeyValue[bike:2, Ares], KeyValue[bike:3, Vanth]]
                    }).then();
```

**Java (Synchronous - Jedis):**

```java
      String res5 = jedis.mset("bike:1", "Deimos", "bike:2", "Ares", "bike:3", "Vanth");
      System.out.println(res5); // OK
      List<String> res6 = jedis.mget("bike:1", "bike:2", "bike:3");
      System.out.println(res6); // [Deimos, Ares, Vanth]
```

**JavaScript (Node.js):**

```javascript
const res5 = await client.mSet([
  ["bike:1", "Deimos"],
  ["bike:2", "Ares"],
  ["bike:3", "Vanth"]
]);

console.log(res5);  // OK
const res6 = await client.mGet(["bike:1", "bike:2", "bike:3"]);
console.log(res6);  // ['Deimos', 'Ares', 'Vanth']
```

**PHP:**

```php
        $res5 = $r->mset([
            'bike:1' => 'Deimos', 'bike:2' => 'Ares', 'bike:3' => 'Vanth'
        ]);
        echo "$res5" . PHP_EOL;
        // >>> OK

        $res6 = $r->mget(['bike:1', 'bike:2', 'bike:3']);
        echo json_encode($res6) . PHP_EOL;
        // >>> ["Deimos","Ares","Vanth"]
```

**Python:**

```python
res5 = r.mset({"bike:1": "Deimos", "bike:2": "Ares", "bike:3": "Vanth"})
print(res5)  # True
res6 = r.mget(["bike:1", "bike:2", "bike:3"])
print(res6)  # ['Deimos', 'Ares', 'Vanth']
```

**Rust (Asynchronous):**

```rust
        if let Ok(res) = r.mset(&[("bike:1", "Deimos"), ("bike:2", "Ares"), ("bike:3", "Vanth")]).await {
            let res: String = res;
            println!("{res}");    // >>> OK
        }

        match r.mget(&["bike:1", "bike:2", "bike:3"]).await {
            Ok(res) => {
                let res: Vec<String> = res;
                println!("{res:?}");   // >>> ["Deimos", "Ares", "Vanth"]
            },
            Err(e) => {
                println!("Error getting foo: {e}");
                return;
            }
        };
```

**Rust (Synchronous):**

```rust
        if let Ok(res) = r.mset(&[("bike:1", "Deimos"), ("bike:2", "Ares"), ("bike:3", "Vanth")]) {
            let res: String = res;
            println!("{res}");    // >>> OK
        }

        match r.mget(&["bike:1", "bike:2", "bike:3"]) {
            Ok(res) => {
                let res: Vec<String> = res;
                println!("{res:?}");   // >>> ["Deimos", "Ares", "Vanth"]
            },
            Err(e) => {
                println!("Error getting values: {e}");
                return;
            }
        };
```



When [`MGET`]() is used, Redis returns an array of values.

## Strings as counters
Even if strings are the basic values of Redis, there are interesting operations
you can perform with them. For instance, one is atomic increment:

#### Code Examples

Atomic counters: Increment string values using INCR and INCRBY when you need thread-safe operations (initializes to 0 if key doesn't exist)

**Builds upon:** set_get

**Commands:** SET, INCR, INCRBY

**Complexity:**
- SET: O(1)
- INCR: O(1)
- INCRBY: O(1)

**Redis CLI:**

```
> SET total_crashes 0
OK
> INCR total_crashes
(integer) 1
> INCRBY total_crashes 10
(integer) 11
```

**Available in:** Redis CLI, C# (Synchronous), Go, Java (Asynchronous - Lettuce), Java (Reactive - Lettuce), Java (Synchronous - Jedis), JavaScript (Node.js), PHP, Python, Rust (Asynchronous), Rust (Synchronous)

**C# (Synchronous):**

```csharp
        db.StringSet("total_crashes", 0);
        var res7 = db.StringIncrement("total_crashes");
        Console.WriteLine(res7); // 1
        var res8 = db.StringIncrement("total_crashes", 10);
        Console.WriteLine(res8);
```

**Go:**

```go
	res8, err := rdb.Set(ctx, "total_crashes", "0", 0).Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(res8) // >>> OK

	res9, err := rdb.Incr(ctx, "total_crashes").Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(res9) // >>> 1

	res10, err := rdb.IncrBy(ctx, "total_crashes", 10).Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(res10) // >>> 11
```

**Java (Asynchronous - Lettuce):**

```java
            CompletableFuture<Void> incrby = asyncCommands.set("total_crashes", "0")
                    .thenCompose(v -> asyncCommands.incr("total_crashes")).thenCompose(v -> {
                        System.out.println(v); // >>> 1
                        return asyncCommands.incrby("total_crashes", 10);
                    })
                    .thenAccept(System.out::println) // >>> 11
                    .toCompletableFuture();
```

**Java (Reactive - Lettuce):**

```java
            Mono<Void> incrby = reactiveCommands.set("total_crashes", "0").flatMap(v -> reactiveCommands.incr("total_crashes"))
                    .doOnNext(v -> {
                        System.out.println(v); // 1
                    }).flatMap(v -> reactiveCommands.incrby("total_crashes", 10)).doOnNext(res -> {
                        System.out.println(res); // 11
                    }).then();
```

**Java (Synchronous - Jedis):**

```java
      jedis.set("total_crashes", "0");
      Long res7 = jedis.incr("total_crashes");
      System.out.println(res7); // 1
      Long res8 = jedis.incrBy("total_crashes", 10);
      System.out.println(res8); // 11
```

**JavaScript (Node.js):**

```javascript
await client.set("total_crashes", 0);
const res7 = await client.incr("total_crashes");
console.log(res7); // 1
const res8 = await client.incrBy("total_crashes", 10);
console.log(res8); // 11
```

**PHP:**

```php
        $r->set('total_crashes', 0);
        $res7 = $r->incr('total_crashes');
        echo "$res7" . PHP_EOL;
        // >>> 1

        $res8 = $r->incrby('total_crashes', 10);
        echo "$res8" . PHP_EOL;
        // >>> 11
```

**Python:**

```python
r.set("total_crashes", 0)
res7 = r.incr("total_crashes")
print(res7)  # 1
res8 = r.incrby("total_crashes", 10)
print(res8)  # 11
```

**Rust (Asynchronous):**

```rust
        if let Ok(res) = r.set("total_crashes", 0).await {
            let res: String = res;
            println!("{res}");    // >>> OK
        }

        if let Ok(res) = r.incr("total_crashes", 1).await {
            let res: i32 = res;
            println!("{res}");    // >>> 1
        }

        if let Ok(res) = r.incr("total_crashes", 10).await {
            let res: i32 = res;
            println!("{res}");    // >>> 11
        }
```

**Rust (Synchronous):**

```rust
        if let Ok(res) = r.set("total_crashes", 0) {
            let res: String = res;
            println!("{res}");    // >>> OK
        }

        if let Ok(res) = r.incr("total_crashes", 1) {
            let res: i32 = res;
            println!("{res}");    // >>> 1
        }

        if let Ok(res) = r.incr("total_crashes", 10) {
            let res: i32 = res;
            println!("{res}");    // >>> 11
        }
```



The [`INCR`]() command parses the string value as an integer,
increments it by one, and finally sets the obtained value as the new value.
There are other similar commands like [`INCRBY`](),
[`DECR`]() and [`DECRBY`](). Internally it's
always the same command, acting in a slightly different way.

What does it mean that INCR is atomic?
That even multiple clients issuing INCR against
the same key will never enter into a race condition. For instance, it will never
happen that client 1 reads "10", client 2 reads "10" at the same time, both
increment to 11, and set the new value to 11. The final value will always be
12 and the read-increment-set operation is performed while all the other
clients are not executing a command at the same time.


## Limits

By default, a single Redis string can be a maximum of 512 MB.

## Bitwise and bitfield operations

To perform bitwise operations on a string, see the [bitmaps data type]() docs. To store and manipulate integer values within a string, see the [bitfields data type]() docs.

## Performance

Most string operations are O(1), which means they're highly efficient.
However, be careful with the [`SUBSTR`](), [`GETRANGE`](), and [`SETRANGE`]() commands, which can be O(n).
These random-access string commands may cause performance issues when dealing with large strings.

## Alternatives

If you're storing structured data as a serialized string, you may also want to consider Redis [hashes]() or [JSON]().

## Learn more

* [Redis Strings Explained](https://www.youtube.com/watch?v=7CUt4yWeRQE) is a short, comprehensive video explainer on Redis strings.
* [Redis University's RU101](https://university.redis.com/courses/ru101/) covers Redis strings in detail.
