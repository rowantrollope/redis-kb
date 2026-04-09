---
title: Redis hashes
url: https://redis.io/docs/latest/develop/data-types/hashes/
retrieved_utc: '2026-04-09T20:45:57.178053+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/develop/data-types/hashes/index.html.md
---

# Redis hashes

```json metadata
{
  "title": "Redis hashes",
  "description": "Introduction to Redis hashes",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "tableOfContents": {"sections":[{"id":"examples","title":"Examples"},{"children":[{"id":"common-field-expiration-use-cases","title":"Common field expiration use cases"},{"id":"field-expiration-examples","title":"Field expiration examples"}],"id":"field-expiration","title":"Field expiration"},{"id":"performance","title":"Performance"},{"id":"limits","title":"Limits"},{"id":"learn-more","title":"Learn more"}]}

,
  "codeExamples": [{"codetabsId":"hash_tutorial-stepset_get_all","commands":[{"acl_categories":["@write","@hash","@fast"],"complexity":"O(1)","name":"HSET"},{"acl_categories":["@read","@hash","@fast"],"complexity":"O(1)","name":"HGET"},{"acl_categories":["@read","@hash","@slow"],"complexity":"O(N)","name":"HGETALL"}],"description":"Foundational: Set and retrieve hash fields using HSET and HGET (overwrites existing field values)","difficulty":"beginner","id":"set_get_all","languages":[{"id":"redis-cli","panelId":"panel_redis-cli_hash_tutorial-stepset_get_all"},{"clientId":"redis-py","clientName":"redis-py","id":"Python","langId":"python","panelId":"panel_Python_hash_tutorial-stepset_get_all"},{"id":"Node-js","panelId":"panel_Nodejs_hash_tutorial-stepset_get_all"},{"clientId":"jedis","clientName":"Jedis","id":"Java-Sync","langId":"java","panelId":"panel_Java-Sync_hash_tutorial-stepset_get_all"},{"clientId":"lettuce","clientName":"Lettuce","id":"Java-Async","langId":"java","panelId":"panel_Java-Async_hash_tutorial-stepset_get_all"},{"clientId":"lettuce","clientName":"Lettuce","id":"Java-Reactive","langId":"java","panelId":"panel_Java-Reactive_hash_tutorial-stepset_get_all"},{"clientId":"go-redis","clientName":"go-redis","id":"Go","langId":"go","panelId":"panel_Go_hash_tutorial-stepset_get_all"},{"id":"dotnet-Sync","panelId":"panel_Csharp-Sync_hash_tutorial-stepset_get_all"},{"clientId":"predis","clientName":"Predis","id":"PHP","langId":"php","panelId":"panel_PHP_hash_tutorial-stepset_get_all"},{"clientId":"redis-rs","clientName":"redis-rs","id":"Rust-Sync","langId":"rust","panelId":"panel_Rust-Sync_hash_tutorial-stepset_get_all"},{"clientId":"redis-rs","clientName":"redis-rs","id":"Rust-Async","langId":"rust","panelId":"panel_Rust-Async_hash_tutorial-stepset_get_all"}]},{"buildsUpon":["set_get_all"],"codetabsId":"hash_tutorial-stephmget","commands":[{"acl_categories":["@read","@hash","@fast"],"complexity":"O(N)","name":"HMGET"}],"description":"Retrieve multiple field values from a hash using HMGET when you need to reduce round trips to the server","difficulty":"beginner","id":"hmget","languages":[{"id":"redis-cli","panelId":"panel_redis-cli_hash_tutorial-stephmget"},{"clientId":"redis-py","clientName":"redis-py","id":"Python","langId":"python","panelId":"panel_Python_hash_tutorial-stephmget"},{"id":"Node-js","panelId":"panel_Nodejs_hash_tutorial-stephmget"},{"clientId":"jedis","clientName":"Jedis","id":"Java-Sync","langId":"java","panelId":"panel_Java-Sync_hash_tutorial-stephmget"},{"clientId":"lettuce","clientName":"Lettuce","id":"Java-Async","langId":"java","panelId":"panel_Java-Async_hash_tutorial-stephmget"},{"clientId":"lettuce","clientName":"Lettuce","id":"Java-Reactive","langId":"java","panelId":"panel_Java-Reactive_hash_tutorial-stephmget"},{"clientId":"go-redis","clientName":"go-redis","id":"Go","langId":"go","panelId":"panel_Go_hash_tutorial-stephmget"},{"id":"dotnet-Sync","panelId":"panel_Csharp-Sync_hash_tutorial-stephmget"},{"clientId":"predis","clientName":"Predis","id":"PHP","langId":"php","panelId":"panel_PHP_hash_tutorial-stephmget"},{"clientId":"redis-rs","clientName":"redis-rs","id":"Rust-Sync","langId":"rust","panelId":"panel_Rust-Sync_hash_tutorial-stephmget"},{"clientId":"redis-rs","clientName":"redis-rs","id":"Rust-Async","langId":"rust","panelId":"panel_Rust-Async_hash_tutorial-stephmget"}]},{"buildsUpon":["set_get_all"],"codetabsId":"hash_tutorial-stephincrby","commands":[{"acl_categories":["@write","@hash","@fast"],"complexity":"O(1)","name":"HINCRBY"}],"description":"Increment hash field values for counters using HINCRBY (creates field if missing, initializes to 0)","difficulty":"beginner","id":"hincrby","languages":[{"id":"redis-cli","panelId":"panel_redis-cli_hash_tutorial-stephincrby"},{"clientId":"redis-py","clientName":"redis-py","id":"Python","langId":"python","panelId":"panel_Python_hash_tutorial-stephincrby"},{"id":"Node-js","panelId":"panel_Nodejs_hash_tutorial-stephincrby"},{"clientId":"jedis","clientName":"Jedis","id":"Java-Sync","langId":"java","panelId":"panel_Java-Sync_hash_tutorial-stephincrby"},{"clientId":"lettuce","clientName":"Lettuce","id":"Java-Async","langId":"java","panelId":"panel_Java-Async_hash_tutorial-stephincrby"},{"clientId":"lettuce","clientName":"Lettuce","id":"Java-Reactive","langId":"java","panelId":"panel_Java-Reactive_hash_tutorial-stephincrby"},{"clientId":"go-redis","clientName":"go-redis","id":"Go","langId":"go","panelId":"panel_Go_hash_tutorial-stephincrby"},{"id":"dotnet-Sync","panelId":"panel_Csharp-Sync_hash_tutorial-stephincrby"},{"clientId":"predis","clientName":"Predis","id":"PHP","langId":"php","panelId":"panel_PHP_hash_tutorial-stephincrby"},{"clientId":"redis-rs","clientName":"redis-rs","id":"Rust-Sync","langId":"rust","panelId":"panel_Rust-Sync_hash_tutorial-stephincrby"},{"clientId":"redis-rs","clientName":"redis-rs","id":"Rust-Async","langId":"rust","panelId":"panel_Rust-Async_hash_tutorial-stephincrby"}]},{"buildsUpon":["hincrby","hmget"],"codetabsId":"hash_tutorial-stepincrby_get_mget","commands":[{"acl_categories":["@write","@hash","@fast"],"complexity":"O(1)","name":"HINCRBY"},{"acl_categories":["@read","@hash","@fast"],"complexity":"O(1)","name":"HGET"},{"acl_categories":["@read","@hash","@fast"],"complexity":"O(N)","name":"HMGET"}],"description":"Practical pattern: Combine HINCRBY and HMGET to track multiple counters when you need atomic updates across multiple fields","difficulty":"intermediate","id":"incrby_get_mget","languages":[{"id":"redis-cli","panelId":"panel_redis-cli_hash_tutorial-stepincrby_get_mget"},{"clientId":"redis-py","clientName":"redis-py","id":"Python","langId":"python","panelId":"panel_Python_hash_tutorial-stepincrby_get_mget"},{"id":"Node-js","panelId":"panel_Nodejs_hash_tutorial-stepincrby_get_mget"},{"clientId":"jedis","clientName":"Jedis","id":"Java-Sync","langId":"java","panelId":"panel_Java-Sync_hash_tutorial-stepincrby_get_mget"},{"clientId":"lettuce","clientName":"Lettuce","id":"Java-Async","langId":"java","panelId":"panel_Java-Async_hash_tutorial-stepincrby_get_mget"},{"clientId":"lettuce","clientName":"Lettuce","id":"Java-Reactive","langId":"java","panelId":"panel_Java-Reactive_hash_tutorial-stepincrby_get_mget"},{"clientId":"go-redis","clientName":"go-redis","id":"Go","langId":"go","panelId":"panel_Go_hash_tutorial-stepincrby_get_mget"},{"id":"dotnet-Sync","panelId":"panel_Csharp-Sync_hash_tutorial-stepincrby_get_mget"},{"clientId":"predis","clientName":"Predis","id":"PHP","langId":"php","panelId":"panel_PHP_hash_tutorial-stepincrby_get_mget"},{"clientId":"redis-rs","clientName":"redis-rs","id":"Rust-Sync","langId":"rust","panelId":"panel_Rust-Sync_hash_tutorial-stepincrby_get_mget"},{"clientId":"redis-rs","clientName":"redis-rs","id":"Rust-Async","langId":"rust","panelId":"panel_Rust-Async_hash_tutorial-stepincrby_get_mget"}]}]
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


### Hash command summary

**28 commands in this group:**

[View all hash commands](https://redis.io/commands/?group=hash)

| Command | Summary | Complexity | Since |
|---------|---------|------------|-------|
| [HDEL](https://redis.io/commands/hdel/) | Deletes one or more fields and their values from a hash. Deletes the hash if no fields remain. | O(N) where N is the number of fields to be remo... | 2.0.0 |
| [HEXISTS](https://redis.io/commands/hexists/) | Determines whether a field exists in a hash. | O(1) | 2.0.0 |
| [HEXPIRE](https://redis.io/commands/hexpire/) | Set expiry for hash field using relative time to expire (seconds) | O(N) where N is the number of specified fields | 7.4.0 |
| [HEXPIREAT](https://redis.io/commands/hexpireat/) | Set expiry for hash field using an absolute Unix timestamp (seconds) | O(N) where N is the number of specified fields | 7.4.0 |
| [HEXPIRETIME](https://redis.io/commands/hexpiretime/) | Returns the expiration time of a hash field as a Unix timestamp, in seconds. | O(N) where N is the number of specified fields | 7.4.0 |
| [HGET](https://redis.io/commands/hget/) | Returns the value of a field in a hash. | O(1) | 2.0.0 |
| [HGETALL](https://redis.io/commands/hgetall/) | Returns all fields and values in a hash. | O(N) where N is the size of the hash. | 2.0.0 |
| [HGETDEL](https://redis.io/commands/hgetdel/) | Returns the value of a field and deletes it from the hash. | O(N) where N is the number of specified fields | 8.0.0 |
| [HGETEX](https://redis.io/commands/hgetex/) | Get the value of one or more fields of a given hash key, and optionally set their expiration. | O(N) where N is the number of specified fields | 8.0.0 |
| [HINCRBY](https://redis.io/commands/hincrby/) | Increments the integer value of a field in a hash by a number. Uses 0 as initial value if the field doesn't exist. | O(1) | 2.0.0 |
| [HINCRBYFLOAT](https://redis.io/commands/hincrbyfloat/) | Increments the floating point value of a field by a number. Uses 0 as initial value if the field doesn't exist. | O(1) | 2.6.0 |
| [HKEYS](https://redis.io/commands/hkeys/) | Returns all fields in a hash. | O(N) where N is the size of the hash. | 2.0.0 |
| [HLEN](https://redis.io/commands/hlen/) | Returns the number of fields in a hash. | O(1) | 2.0.0 |
| [HMGET](https://redis.io/commands/hmget/) | Returns the values of all fields in a hash. | O(N) where N is the number of fields being requ... | 2.0.0 |
| [HMSET](https://redis.io/commands/hmset/) | Sets the values of multiple fields. | O(N) where N is the number of fields being set. | 2.0.0 |
| [HPERSIST](https://redis.io/commands/hpersist/) | Removes the expiration time for each specified field | O(N) where N is the number of specified fields | 7.4.0 |
| [HPEXPIRE](https://redis.io/commands/hpexpire/) | Set expiry for hash field using relative time to expire (milliseconds) | O(N) where N is the number of specified fields | 7.4.0 |
| [HPEXPIREAT](https://redis.io/commands/hpexpireat/) | Set expiry for hash field using an absolute Unix timestamp (milliseconds) | O(N) where N is the number of specified fields | 7.4.0 |
| [HPEXPIRETIME](https://redis.io/commands/hpexpiretime/) | Returns the expiration time of a hash field as a Unix timestamp, in msec. | O(N) where N is the number of specified fields | 7.4.0 |
| [HPTTL](https://redis.io/commands/hpttl/) | Returns the TTL in milliseconds of a hash field. | O(N) where N is the number of specified fields | 7.4.0 |
| [HRANDFIELD](https://redis.io/commands/hrandfield/) | Returns one or more random fields from a hash. | O(N) where N is the number of fields returned | 6.2.0 |
| [HSCAN](https://redis.io/commands/hscan/) | Iterates over fields and values of a hash. | O(1) for every call. O(N) for a complete iterat... | 2.8.0 |
| [HSET](https://redis.io/commands/hset/) | Creates or modifies the value of a field in a hash. | O(1) for each field/value pair added, so O(N) t... | 2.0.0 |
| [HSETEX](https://redis.io/commands/hsetex/) | Set the value of one or more fields of a given hash key, and optionally set their expiration. | O(N) where N is the number of fields being set. | 8.0.0 |
| [HSETNX](https://redis.io/commands/hsetnx/) | Sets the value of a field in a hash only when the field doesn't exist. | O(1) | 2.0.0 |
| [HSTRLEN](https://redis.io/commands/hstrlen/) | Returns the length of the value of a field. | O(1) | 3.2.0 |
| [HTTL](https://redis.io/commands/httl/) | Returns the TTL in seconds of a hash field. | O(N) where N is the number of specified fields | 7.4.0 |
| [HVALS](https://redis.io/commands/hvals/) | Returns all values in a hash. | O(N) where N is the size of the hash. | 2.0.0 |



Redis hashes are record types structured as collections of field-value pairs.
You can use hashes to represent basic objects and to store groupings of counters, among other things.

#### Code Examples

Foundational: Set and retrieve hash fields using HSET and HGET (overwrites existing field values)

**Commands:** HSET, HGET, HGETALL

**Complexity:**
- HSET: O(1)
- HGET: O(1)
- HGETALL: O(N)

**Redis CLI:**

```
> HSET bike:1 model Deimos brand Ergonom type 'Enduro bikes' price 4972
(integer) 4
> HGET bike:1 model
"Deimos"
> HGET bike:1 price
"4972"
> HGETALL bike:1
1) "model"
2) "Deimos"
3) "brand"
4) "Ergonom"
5) "type"
6) "Enduro bikes"
7) "price"
8) "4972"
```

**Available in:** Redis CLI, C# (Synchronous), Go, Java (Asynchronous - Lettuce), Java (Reactive - Lettuce), Java (Synchronous - Jedis), JavaScript (Node.js), PHP, Python, Rust (Asynchronous), Rust (Synchronous)

**C# (Synchronous):**

```csharp
        db.HashSet("bike:1", [
            new("model", "Deimos"),
            new("brand", "Ergonom"),
            new("type", "Enduro bikes"),
            new("price", 4972)
        ]);

        Console.WriteLine("Hash Created");
        // Hash Created

        var model = db.HashGet("bike:1", "model");
        Console.WriteLine($"Model: {model}");
        // Model: Deimos

        var price = db.HashGet("bike:1", "price");
        Console.WriteLine($"Price: {price}");
        // Price: 4972

        var bike = db.HashGetAll("bike:1");
        Console.WriteLine("bike:1");
        Console.WriteLine(string.Join("\n", bike.Select(b => $"{b.Name}: {b.Value}")));
        // Bike:1:
        // model: Deimos
        // brand: Ergonom
        // type: Enduro bikes
        // price: 4972
```

**Go:**

```go
	hashFields := []string{
		"model", "Deimos",
		"brand", "Ergonom",
		"type", "Enduro bikes",
		"price", "4972",
	}

	res1, err := rdb.HSet(ctx, "bike:1", hashFields).Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(res1) // >>> 4

	res2, err := rdb.HGet(ctx, "bike:1", "model").Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(res2) // >>> Deimos

	res3, err := rdb.HGet(ctx, "bike:1", "price").Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(res3) // >>> 4972

	cmdReturn := rdb.HGetAll(ctx, "bike:1")
	res4, err := cmdReturn.Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(res4)
	// >>> map[brand:Ergonom model:Deimos price:4972 type:Enduro bikes]

	type BikeInfo struct {
		Model string `redis:"model"`
		Brand string `redis:"brand"`
		Type  string `redis:"type"`
		Price int    `redis:"price"`
	}

	var res4a BikeInfo

	if err := cmdReturn.Scan(&res4a); err != nil {
		panic(err)
	}

	fmt.Printf("Model: %v, Brand: %v, Type: %v, Price: $%v\n",
		res4a.Model, res4a.Brand, res4a.Type, res4a.Price)
	// >>> Model: Deimos, Brand: Ergonom, Type: Enduro bikes, Price: $4972
```

**Java (Asynchronous - Lettuce):**

```java
            Map<String, String> bike1 = new HashMap<>();
            bike1.put("model", "Deimos");
            bike1.put("brand", "Ergonom");
            bike1.put("type", "Enduro bikes");
            bike1.put("price", "4972");

            CompletableFuture<Void> setGetAll = asyncCommands.hset("bike:1", bike1).thenCompose(res1 -> {
                System.out.println(res1); // >>> 4
                return asyncCommands.hget("bike:1", "model");
            }).thenCompose(res2 -> {
                System.out.println(res2); // >>> Deimos
                return asyncCommands.hget("bike:1", "price");
            }).thenCompose(res3 -> {
                System.out.println(res3); // >>> 4972
                return asyncCommands.hgetall("bike:1");
            })
                    .thenAccept(System.out::println)
                    // >>> {type=Enduro bikes, brand=Ergonom, price=4972, model=Deimos}
                    .toCompletableFuture();
```

**Java (Reactive - Lettuce):**

```java
            Map<String, String> bike1 = new HashMap<>();
            bike1.put("model", "Deimos");
            bike1.put("brand", "Ergonom");
            bike1.put("type", "Enduro bikes");
            bike1.put("price", "4972");

            Mono<Long> setGetAll = reactiveCommands.hset("bike:1", bike1).doOnNext(result -> {
                System.out.println(result); // >>> 4
            });

            setGetAll.block();

            Mono<String> getModel = reactiveCommands.hget("bike:1", "model").doOnNext(result -> {
                System.out.println(result); // >>> Deimos
            });

            Mono<String> getPrice = reactiveCommands.hget("bike:1", "price").doOnNext(result -> {
                System.out.println(result); // >>> 4972
            });

            Mono<List<KeyValue<String, String>>> getAll = reactiveCommands.hgetall("bike:1").collectList().doOnNext(result -> {
                System.out.println(result);
                // >>> [KeyValue[type, Enduro bikes], KeyValue[brand, Ergonom],
                // KeyValue[price, 4972], KeyValue[model, Deimos]]
            });
```

**Java (Synchronous - Jedis):**

```java
      Map<String, String> bike1 = new HashMap<>();
      bike1.put("model", "Deimos");
      bike1.put("brand", "Ergonom");
      bike1.put("type", "Enduro bikes");
      bike1.put("price", "4972");

      Long res1 = jedis.hset("bike:1", bike1);
      System.out.println(res1); // 4

      String res2 = jedis.hget("bike:1", "model");
      System.out.println(res2); // Deimos

      String res3 = jedis.hget("bike:1", "price");
      System.out.println(res3); // 4972

      Map<String, String> res4 = jedis.hgetAll("bike:1");
      System.out.println(res4); // {type=Enduro bikes, brand=Ergonom, price=4972, model=Deimos}
```

**JavaScript (Node.js):**

```javascript
const res1 = await client.hSet(
  'bike:1',
  {
    'model': 'Deimos',
    'brand': 'Ergonom',
    'type': 'Enduro bikes',
    'price': 4972,
  }
)
console.log(res1) // 4

const res2 = await client.hGet('bike:1', 'model')
console.log(res2)  // 'Deimos'

const res3 = await client.hGet('bike:1', 'price')
console.log(res3)  // '4972'

const res4 = await client.hGetAll('bike:1')
console.log(res4)  
/*
{
  brand: 'Ergonom',
  model: 'Deimos',
  price: '4972',
  type: 'Enduro bikes'
}
*/
```

**PHP:**

```php
        $res1 = $r->hmset('bike:1', [
            'model' => 'Deimos',
            'brand' => 'Ergonom',
            'type' => 'Enduro bikes',
            'price' => 4972,
        ]);

        echo $res1 . PHP_EOL;
        // >>> 4

        $res2 = $r->hget('bike:1', 'model');
        echo $res2 . PHP_EOL;
        // >>> Deimos

        $res3 = $r->hget('bike:1', 'price');
        echo $res3 . PHP_EOL;
        // >>> 4972

        $res4 = $r->hgetall('bike:1');
        echo json_encode($res3) . PHP_EOL;
        // >>> {"name":"Deimos","brand":"Ergonom","type":"Enduro bikes","price":"4972"}
```

**Python:**

```python
res1 = r.hset(
    "bike:1",
    mapping={
        "model": "Deimos",
        "brand": "Ergonom",
        "type": "Enduro bikes",
        "price": 4972,
    },
)
print(res1)
# >>> 4

res2 = r.hget("bike:1", "model")
print(res2)
# >>> 'Deimos'

res3 = r.hget("bike:1", "price")
print(res3)
# >>> '4972'

res4 = r.hgetall("bike:1")
print(res4)
# >>> {'model': 'Deimos', 'brand': 'Ergonom', 'type': 'Enduro bikes', 'price': '4972'}

```

**Rust (Asynchronous):**

```rust
        let hash_fields = [
            ("model", "Deimos"),
            ("brand", "Ergonom"),
            ("type", "Enduro bikes"),
            ("price", "4972"),
        ];

        if let Ok(res) = r.hset_multiple("bike:1", &hash_fields).await {
            let res: String = res;
            println!("{res}");    // >>> OK
        }

        match r.hget("bike:1", "model").await {
            Ok(res) => {
                let res: String = res;
                println!("{res}");   // >>> Deimos
            },
            Err(e) => {
                println!("Error getting bike:1 model: {e}");
                return;
            }
        };

        match r.hget("bike:1", "price").await {
            Ok(res) => {
                let res: String = res;
                println!("{res}");   // >>> 4972
            },
            Err(e) => {
                println!("Error getting bike:1 price: {e}");
                return;
            }
        };

        match r.hgetall("bike:1").await {
            Ok(res) => {
                let res: Vec<(String, String)> = res;
                println!("{res:?}");
                // >>> [("model", "Deimos"), ("brand", "Ergonom"), ("type", "Enduro bikes"), ("price", "4972")]
            },
            Err(e) => {
                println!("Error getting bike:1: {e}");
                return;
            }
        };
```

**Rust (Synchronous):**

```rust
        let hash_fields = [
            ("model", "Deimos"),
            ("brand", "Ergonom"),
            ("type", "Enduro bikes"),
            ("price", "4972"),
        ];

        if let Ok(res) = r.hset_multiple("bike:1", &hash_fields) {
            let res: String = res;
            println!("{res}");    // >>> OK
        }

        match r.hget("bike:1", "model") {
            Ok(res) => {
                let res: String = res;
                println!("{res}");   // >>> Deimos
            },
            Err(e) => {
                println!("Error getting bike:1 model: {e}");
                return;
            }
        };

        match r.hget("bike:1", "price") {
            Ok(res) => {
                let res: String = res;
                println!("{res}");   // >>> 4972
            },
            Err(e) => {
                println!("Error getting bike:1 price: {e}");
                return;
            }
        };

        match r.hgetall("bike:1") {
            Ok(res) => {
                let res: Vec<(String, String)> = res;
                println!("{res:?}");
                // >>> [("model", "Deimos"), ("brand", "Ergonom"), ("type", "Enduro bikes"), ("price", "4972")]
            },
            Err(e) => {
                println!("Error getting bike:1: {e}");
                return;
            }
        };
```



While hashes are handy to represent *objects*, actually the number of fields you can
put inside a hash has no practical limits (other than available memory), so you can use
hashes in many different ways inside your application.

The command [`HSET`]() sets multiple fields of the hash, while [`HGET`]() retrieves
a single field. [`HMGET`]() is similar to [`HGET`]() but returns an array of values:

#### Code Examples

Retrieve multiple field values from a hash using HMGET when you need to reduce round trips to the server

**Builds upon:** set_get_all

**Commands:** HMGET

**Complexity:**
- HMGET: O(N)

**Redis CLI:**

```
> HMGET bike:1 model price no-such-field
1) "Deimos"
2) "4972"
3) (nil)
```

**Available in:** Redis CLI, C# (Synchronous), Go, Java (Asynchronous - Lettuce), Java (Reactive - Lettuce), Java (Synchronous - Jedis), JavaScript (Node.js), PHP, Python, Rust (Asynchronous), Rust (Synchronous)

**C# (Synchronous):**

```csharp
        var values = db.HashGet("bike:1", ["model", "price"]);
        Console.WriteLine(string.Join(" ", values));
        // Deimos 4972
```

**Go:**

```go
	cmdReturn := rdb.HMGet(ctx, "bike:1", "model", "price")
	res5, err := cmdReturn.Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(res5) // >>> [Deimos 4972]

	type BikeInfo struct {
		Model string `redis:"model"`
		Brand string `redis:"-"`
		Type  string `redis:"-"`
		Price int    `redis:"price"`
	}

	var res5a BikeInfo

	if err := cmdReturn.Scan(&res5a); err != nil {
		panic(err)
	}

	fmt.Printf("Model: %v, Price: $%v\n", res5a.Model, res5a.Price)
	// >>> Model: Deimos, Price: $4972
```

**Java (Asynchronous - Lettuce):**

```java
            CompletableFuture<Void> hmGet = setGetAll.thenCompose(res4 -> {
                return asyncCommands.hmget("bike:1", "model", "price");
            })
                    .thenAccept(System.out::println)
                    // [KeyValue[model, Deimos], KeyValue[price, 4972]]
                    .toCompletableFuture();
```

**Java (Reactive - Lettuce):**

```java
            Mono<List<KeyValue<String, String>>> hmGet = reactiveCommands.hmget("bike:1", "model", "price").collectList()
                    .doOnNext(result -> {
                        System.out.println(result);
                        // >>> [KeyValue[model, Deimos], KeyValue[price, 4972]]
                    });
```

**Java (Synchronous - Jedis):**

```java
      List<String> res5 = jedis.hmget("bike:1", "model", "price");
      System.out.println(res5); // [Deimos, 4972]
```

**JavaScript (Node.js):**

```javascript
const res5 = await client.hmGet('bike:1', ['model', 'price'])
console.log(res5)  // ['Deimos', '4972']
```

**PHP:**

```php
        $res5 = $r->hmget('bike:1', ['model', 'price']);
        echo json_encode($res5) . PHP_EOL;
        // >>> ["Deimos","4972"]
```

**Python:**

```python
res5 = r.hmget("bike:1", ["model", "price"])
print(res5)
# >>> ['Deimos', '4972']
```

**Rust (Asynchronous):**

```rust
        match r.hmget("bike:1", &["model", "price"]).await {
            Ok(res) => {
                let res: Vec<String> = res;
                println!("{res:?}");   // >>> ["Deimos", "4972"]
            },
            Err(e) => {
                println!("Error getting bike:1: {e}");
                return;
            }
        };
```

**Rust (Synchronous):**

```rust
        match r.hmget("bike:1", &["model", "price"]) {
            Ok(res) => {
                let res: Vec<String> = res;
                println!("{res:?}");   // >>> ["Deimos", "4972"]
            },
            Err(e) => {
                println!("Error getting bike:1: {e}");
                return;
            }
        };
```



There are commands that are able to perform operations on individual fields
as well, like [`HINCRBY`]():

#### Code Examples

Increment hash field values for counters using HINCRBY (creates field if missing, initializes to 0)

**Builds upon:** set_get_all

**Commands:** HINCRBY

**Complexity:**
- HINCRBY: O(1)

**Redis CLI:**

```
> HINCRBY bike:1 price 100
(integer) 5072
> HINCRBY bike:1 price -100
(integer) 4972
```

**Available in:** Redis CLI, C# (Synchronous), Go, Java (Asynchronous - Lettuce), Java (Reactive - Lettuce), Java (Synchronous - Jedis), JavaScript (Node.js), PHP, Python, Rust (Asynchronous), Rust (Synchronous)

**C# (Synchronous):**

```csharp
        var newPrice = db.HashIncrement("bike:1", "price", 100);
        Console.WriteLine($"New price: {newPrice}");
        // New price: 5072

        newPrice = db.HashIncrement("bike:1", "price", -100);
        Console.WriteLine($"New price: {newPrice}");
        // New price: 4972
```

**Go:**

```go
	res6, err := rdb.HIncrBy(ctx, "bike:1", "price", 100).Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(res6) // >>> 5072

	res7, err := rdb.HIncrBy(ctx, "bike:1", "price", -100).Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(res7) // >>> 4972
```

**Java (Asynchronous - Lettuce):**

```java
            CompletableFuture<Void> hIncrBy = hmGet.thenCompose(r -> {
                return asyncCommands.hincrby("bike:1", "price", 100);
            }).thenCompose(res6 -> {
                System.out.println(res6); // >>> 5072
                return asyncCommands.hincrby("bike:1", "price", -100);
            })
                    .thenAccept(System.out::println)
                    // >>> 4972
                    .toCompletableFuture();
```

**Java (Reactive - Lettuce):**

```java
            Mono<Void> hIncrBy = reactiveCommands.hincrby("bike:1", "price", 100).doOnNext(result -> {
                System.out.println(result); // >>> 5072
            }).flatMap(v -> reactiveCommands.hincrby("bike:1", "price", -100)).doOnNext(result -> {
                System.out.println(result); // >>> 4972
            }).then();
```

**Java (Synchronous - Jedis):**

```java
      Long res6 = jedis.hincrBy("bike:1", "price", 100);
      System.out.println(res6); // 5072
      Long res7 = jedis.hincrBy("bike:1", "price", -100);
      System.out.println(res7); // 4972
```

**JavaScript (Node.js):**

```javascript
const res6 = await client.hIncrBy('bike:1', 'price', 100)
console.log(res6)  // 5072
const res7 = await client.hIncrBy('bike:1', 'price', -100)
console.log(res7)  // 4972
```

**PHP:**

```php
        $res6 = $r->hincrby('bike:1', 'price', 100);
        echo $res6 . PHP_EOL;
        // >>> 5072

        $res7 = $r->hincrby('bike:1', 'price', -100);
        echo $res7 . PHP_EOL;
        // >>> 4972
```

**Python:**

```python
res6 = r.hincrby("bike:1", "price", 100)
print(res6)
# >>> 5072
res7 = r.hincrby("bike:1", "price", -100)
print(res7)
# >>> 4972
```

**Rust (Asynchronous):**

```rust
        if let Ok(res) = r.hincr("bike:1", "price", 100).await {
            let res: i32 = res;
            println!("{res}");    // >>> 5072
        }

        if let Ok(res) = r.hincr("bike:1", "price", -100).await {
            let res: i32 = res;
            println!("{res}");    // >>> 4972
        }
```

**Rust (Synchronous):**

```rust
        if let Ok(res) = r.hincr("bike:1", "price", 100) {
            let res: i32 = res;
            println!("{res}");    // >>> 5072
        }

        if let Ok(res) = r.hincr("bike:1", "price", -100) {
            let res: i32 = res;
            println!("{res}");    // >>> 4972
        }
```



You can find the [full list of hash commands in the documentation]().

It is worth noting that small hashes (i.e., a few elements with small values) are
encoded in special way in memory that make them very memory efficient.

## Examples

* Store counters for the number of times bike:1 has been ridden, has crashed, or has changed owners:
#### Code Examples

Practical pattern: Combine HINCRBY and HMGET to track multiple counters when you need atomic updates across multiple fields

**Difficulty:** Intermediate

**Builds upon:** hincrby, hmget

**Commands:** HINCRBY, HGET, HMGET

**Complexity:**
- HINCRBY: O(1)
- HGET: O(1)
- HMGET: O(N)

**Redis CLI:**

```
> HINCRBY bike:1:stats rides 1
(integer) 1
> HINCRBY bike:1:stats rides 1
(integer) 2
> HINCRBY bike:1:stats rides 1
(integer) 3
> HINCRBY bike:1:stats crashes 1
(integer) 1
> HINCRBY bike:1:stats owners 1
(integer) 1
> HGET bike:1:stats rides
"3"
> HMGET bike:1:stats owners crashes
1) "1"
2) "1"
```

**Available in:** Redis CLI, C# (Synchronous), Go, Java (Asynchronous - Lettuce), Java (Reactive - Lettuce), Java (Synchronous - Jedis), JavaScript (Node.js), PHP, Python, Rust (Asynchronous), Rust (Synchronous)

**C# (Synchronous):**

```csharp
        var rides = db.HashIncrement("bike:1", "rides");
        Console.WriteLine($"Rides: {rides}");
        // Rides: 1

        rides = db.HashIncrement("bike:1", "rides");
        Console.WriteLine($"Rides: {rides}");
        // Rides: 2

        rides = db.HashIncrement("bike:1", "rides");
        Console.WriteLine($"Rides: {rides}");
        // Rides: 3

        var crashes = db.HashIncrement("bike:1", "crashes");
        Console.WriteLine($"Crashes: {crashes}");
        // Crashes: 1

        var owners = db.HashIncrement("bike:1", "owners");
        Console.WriteLine($"Owners: {owners}");
        // Owners: 1

        var stats = db.HashGet("bike:1", ["crashes", "owners"]);
        Console.WriteLine($"Bike stats: crashes={stats[0]}, owners={stats[1]}");
        // Bike stats: crashes=1, owners=1
```

**Go:**

```go
	res8, err := rdb.HIncrBy(ctx, "bike:1:stats", "rides", 1).Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(res8) // >>> 1

	res9, err := rdb.HIncrBy(ctx, "bike:1:stats", "rides", 1).Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(res9) // >>> 2

	res10, err := rdb.HIncrBy(ctx, "bike:1:stats", "rides", 1).Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(res10) // >>> 3

	res11, err := rdb.HIncrBy(ctx, "bike:1:stats", "crashes", 1).Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(res11) // >>> 1

	res12, err := rdb.HIncrBy(ctx, "bike:1:stats", "owners", 1).Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(res12) // >>> 1

	res13, err := rdb.HGet(ctx, "bike:1:stats", "rides").Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(res13) // >>> 3

	res14, err := rdb.HMGet(ctx, "bike:1:stats", "crashes", "owners").Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(res14) // >>> [1 1]
```

**Java (Asynchronous - Lettuce):**

```java
            CompletableFuture<Void> incrByGetMget = asyncCommands.hincrby("bike:1:stats", "rides", 1).thenCompose(res7 -> {
                System.out.println(res7); // >>> 1
                return asyncCommands.hincrby("bike:1:stats", "rides", 1);
            }).thenCompose(res8 -> {
                System.out.println(res8); // >>> 2
                return asyncCommands.hincrby("bike:1:stats", "rides", 1);
            }).thenCompose(res9 -> {
                System.out.println(res9); // >>> 3
                return asyncCommands.hincrby("bike:1:stats", "crashes", 1);
            }).thenCompose(res10 -> {
                System.out.println(res10); // >>> 1
                return asyncCommands.hincrby("bike:1:stats", "owners", 1);
            }).thenCompose(res11 -> {
                System.out.println(res11); // >>> 1
                return asyncCommands.hget("bike:1:stats", "rides");
            }).thenCompose(res12 -> {
                System.out.println(res12); // >>> 3
                return asyncCommands.hmget("bike:1:stats", "crashes", "owners");
            })
                    .thenAccept(System.out::println)
                    // >>> [KeyValue[crashes, 1], KeyValue[owners, 1]]
                    .toCompletableFuture();
```

**Java (Reactive - Lettuce):**

```java
            Mono<Void> incrByGetMget = reactiveCommands.hincrby("bike:1:stats", "rides", 1).doOnNext(result -> {
                System.out.println(result); // >>> 1
            }).flatMap(v -> reactiveCommands.hincrby("bike:1:stats", "rides", 1)).doOnNext(result -> {
                System.out.println(result); // >>> 2
            }).flatMap(v -> reactiveCommands.hincrby("bike:1:stats", "rides", 1)).doOnNext(result -> {
                System.out.println(result); // >>> 3
            }).flatMap(v -> reactiveCommands.hincrby("bike:1:stats", "crashes", 1)).doOnNext(result -> {
                System.out.println(result); // >>> 1
            }).flatMap(v -> reactiveCommands.hincrby("bike:1:stats", "owners", 1)).doOnNext(result -> {
                System.out.println(result); // >>> 1
            }).then();

            incrByGetMget.block();

            Mono<String> getRides = reactiveCommands.hget("bike:1:stats", "rides").doOnNext(result -> {
                System.out.println(result); // >>> 3
            });

            Mono<List<KeyValue<String, String>>> getCrashesOwners = reactiveCommands.hmget("bike:1:stats", "crashes", "owners")
                    .collectList().doOnNext(result -> {
                        System.out.println(result);
                        // >>> [KeyValue[crashes, 1], KeyValue[owners, 1]]
                    });
```

**Java (Synchronous - Jedis):**

```java
      Long res8 = jedis.hincrBy("bike:1:stats", "rides", 1);
      System.out.println(res8); // 1
      Long res9 = jedis.hincrBy("bike:1:stats", "rides", 1);
      System.out.println(res9); // 2
      Long res10 = jedis.hincrBy("bike:1:stats", "rides", 1);
      System.out.println(res10); // 3
      Long res11 = jedis.hincrBy("bike:1:stats", "crashes", 1);
      System.out.println(res11); // 1
      Long res12 = jedis.hincrBy("bike:1:stats", "owners", 1);
      System.out.println(res12); // 1
      String res13 = jedis.hget("bike:1:stats", "rides");
      System.out.println(res13); // 3
      List<String> res14 = jedis.hmget("bike:1:stats", "crashes", "owners");
      System.out.println(res14); // [1, 1]
```

**JavaScript (Node.js):**

```javascript
import assert from 'assert';
import { createClient } from 'redis';

const client = createClient();
await client.connect();
const res1 = await client.hSet(
  'bike:1',
  {
    'model': 'Deimos',
    'brand': 'Ergonom',
    'type': 'Enduro bikes',
    'price': 4972,
  }
)
console.log(res1) // 4

const res2 = await client.hGet('bike:1', 'model')
console.log(res2)  // 'Deimos'

const res3 = await client.hGet('bike:1', 'price')
console.log(res3)  // '4972'

const res4 = await client.hGetAll('bike:1')
console.log(res4)  
/*
{
  brand: 'Ergonom',
  model: 'Deimos',
  price: '4972',
  type: 'Enduro bikes'
}
*/


const res5 = await client.hmGet('bike:1', ['model', 'price'])
console.log(res5)  // ['Deimos', '4972']


const res6 = await client.hIncrBy('bike:1', 'price', 100)
console.log(res6)  // 5072
const res7 = await client.hIncrBy('bike:1', 'price', -100)
console.log(res7)  // 4972


const res11 = await client.hIncrBy('bike:1:stats', 'rides', 1)
console.log(res11)  // 1
const res12 = await client.hIncrBy('bike:1:stats', 'rides', 1)
console.log(res12)  // 2
const res13 = await client.hIncrBy('bike:1:stats', 'rides', 1)
console.log(res13)  // 3
const res14 = await client.hIncrBy('bike:1:stats', 'crashes', 1)
console.log(res14)  // 1
const res15 = await client.hIncrBy('bike:1:stats', 'owners', 1)
console.log(res15)  // 1
const res16 = await client.hGet('bike:1:stats', 'rides')
console.log(res16)  // 3
const res17 = await client.hmGet('bike:1:stats', ['crashes', 'owners'])
console.log(res17)  // ['1', '1']


```

**PHP:**

```php
        $res8 = $r->hincrby('bike:1:stats', 'rides', 1);
        echo $res8 . PHP_EOL;
        // >>> 1

        $res9 = $r->hincrby('bike:1:stats', 'rides', 1);
        echo $res9 . PHP_EOL;
        // >>> 2

        $res10 = $r->hincrby('bike:1:stats', 'rides', 1);
        echo $res10 . PHP_EOL;
        // >>> 3

        $res11 = $r->hincrby('bike:1:stats', 'crashes', 1);
        echo $res11 . PHP_EOL;
        // >>> 1

        $res12 = $r->hincrby('bike:1:stats', 'owners', 1);
        echo $res12 . PHP_EOL;
        // >>> 1

        $res13 = $r->hget('bike:1:stats', 'rides');
        echo $res13 . PHP_EOL;
        // >>> 3

        $res14 = $r->hmget('bike:1:stats', ['crashes', 'owners']);
        echo json_encode($res14) . PHP_EOL;
        // >>> ["1","1"]
```

**Python:**

```python
res11 = r.hincrby("bike:1:stats", "rides", 1)
print(res11)
# >>> 1
res12 = r.hincrby("bike:1:stats", "rides", 1)
print(res12)
# >>> 2
res13 = r.hincrby("bike:1:stats", "rides", 1)
print(res13)
# >>> 3
res14 = r.hincrby("bike:1:stats", "crashes", 1)
print(res14)
# >>> 1
res15 = r.hincrby("bike:1:stats", "owners", 1)
print(res15)
# >>> 1
res16 = r.hget("bike:1:stats", "rides")
print(res16)
# >>> 3
res17 = r.hmget("bike:1:stats", ["crashes", "owners"])
print(res17)
# >>> ['1', '1']
```

**Rust (Asynchronous):**

```rust
        if let Ok(res) = r.hincr("bike:1:stats", "rides", 1).await {
            let res: i32 = res;
            println!("{res}");    // >>> 1
        }

        if let Ok(res) = r.hincr("bike:1:stats", "rides", 1).await {
            let res: i32 = res;
            println!("{res}");    // >>> 2
        }

        if let Ok(res) = r.hincr("bike:1:stats", "rides", 1).await {
            let res: i32 = res;
            println!("{res}");    // >>> 3
        }

        if let Ok(res) = r.hincr("bike:1:stats", "crashes", 1).await {
            let res: i32 = res;
            println!("{res}");    // >>> 1
        }

        if let Ok(res) = r.hincr("bike:1:stats", "owners", 1).await {
            let res: i32 = res;
            println!("{res}");    // >>> 1
        }

        match r.hget("bike:1:stats", "rides").await {
            Ok(res) => {
                let res: i32 = res;
                println!("{res}");   // >>> 3
            },
            Err(e) => {
                println!("Error getting bike:1:stats rides: {e}");
                return;
            }
        };

        match r.hmget("bike:1:stats", &["crashes", "owners"]).await {
            Ok(res) => {
                let res: Vec<i32> = res;
                println!("{res:?}");   // >>> [1, 1]
            },
            Err(e) => {
                println!("Error getting bike:1:stats crashes and owners: {e}");
                return;
            }
        };
```

**Rust (Synchronous):**

```rust
        if let Ok(res) = r.hincr("bike:1:stats", "rides", 1) {
            let res: i32 = res;
            println!("{res}");    // >>> 1
        }

        if let Ok(res) = r.hincr("bike:1:stats", "rides", 1) {
            let res: i32 = res;
            println!("{res}");    // >>> 2
        }

        if let Ok(res) = r.hincr("bike:1:stats", "rides", 1) {
            let res: i32 = res;
            println!("{res}");    // >>> 3
        }

        if let Ok(res) = r.hincr("bike:1:stats", "crashes", 1) {
            let res: i32 = res;
            println!("{res}");    // >>> 1
        }

        if let Ok(res) = r.hincr("bike:1:stats", "owners", 1) {
            let res: i32 = res;
            println!("{res}");    // >>> 1
        }

        match r.hget("bike:1:stats", "rides") {
            Ok(res) => {
                let res: i32 = res;
                println!("{res}");   // >>> 3
            },
            Err(e) => {
                println!("Error getting bike:1:stats rides: {e}");
                return;
            }
        };

        match r.hmget("bike:1:stats", &["crashes", "owners"]) {
            Ok(res) => {
                let res: Vec<i32> = res;
                println!("{res:?}");   // >>> [1, 1]
            },
            Err(e) => {
                println!("Error getting bike:1:stats crashes and owners: {e}");
                return;
            }
        };
```



## Field expiration

Redis 7.4 introduced the ability to specify an expiration time or a time-to-live (TTL) value for individual hash fields.
This capability is comparable to [key expiration]() and includes a number of similar commands.

Use the following commands to set either an exact expiration time or a TTL value for specific fields:

* [`HEXPIRE`](): set the remaining TTL in seconds.
* [`HPEXPIRE`](): set the remaining TTL in milliseconds.
* [`HEXPIREAT`](): set the expiration time to a timestamp[^1] specified in seconds.
* [`HPEXPIREAT`](): set the expiration time to a timestamp specified in milliseconds.

[^1]: all timestamps are specified in seconds or milliseconds since the [Unix epoch](https://en.wikipedia.org/wiki/Unix_time).

Use the following commands to retrieve either the exact time when or the remaining TTL until specific fields will expire:

* [`HEXPIRETIME`](): get the expiration time as a timestamp in seconds.
* [`HPEXPIRETIME`](): get the expiration time as a timestamp in milliseconds.
* [`HTTL`](): get the remaining TTL in seconds.
* [`HPTTL`](): get the remaining TTL in milliseconds.

Use the following command to remove the expiration of specific fields:

* [`HPERSIST`](): remove the expiration.

Redis 8.0 introduced the following commands:

* [`HGETEX`](): Get the value of one or more fields of a given hash key and optionally set their expiration time or time-to-live (TTL).
* [`HSETEX`](): Set the value of one or more fields of a given hash key and optionally set their expiration time or time-to-live (TTL).

### Common field expiration use cases

1. **Event Tracking**: Use a hash key to store events from the last hour. Set each event's TTL to one hour. Use `HLEN` to count events from the past hour.

1. **Fraud Detection**: Create a hash with hourly counters for events. Set each field's TTL to 48 hours. Query the hash to get the number of events per hour for the last 48 hours.

1. **Customer Session Management**: Store customer data in hash keys. Create a new hash key for each session and add a session field to the customerâs hash key. Expire both the session key and the session field in the customerâs hash key automatically when the session expires.

1. **Active Session Tracking**: Store all active sessions in a hash key. Set each session's TTL to expire automatically after inactivity. Use `HLEN` to count active sessions.

### Field expiration examples

Support for hash field expiration in the official client libraries is not yet available, but you can test hash field expiration now with beta versions of the [Python (redis-py)](https://github.com/redis/redis-py) and [Java (Jedis)](https://github.com/redis/jedis) client libraries.

Following are some Python examples that demonstrate how to use field expiration.

Consider a hash data set for storing sensor data that has the following structure:

```python
event = {
    'air_quality': 256,
    'battery_level':89
}

r.hset('sensor:sensor1', mapping=event)
```

In the examples below, you will likely need to refresh the `sensor:sensor1` key after its fields expire.

Set and retrieve the TTL for multiple fields in a hash:

```python
# set the TTL for two hash fields to 60 seconds
r.hexpire('sensor:sensor1', 60, 'air_quality', 'battery_level')
ttl = r.httl('sensor:sensor1', 'air_quality', 'battery_level')
print(ttl)
# prints [60, 60]
```

Set and retrieve a hash field's TTL in milliseconds:

```python
# set the TTL of the 'air_quality' field in milliseconds
r.hpexpire('sensor:sensor1', 60000, 'air_quality')
# and retrieve it
pttl = r.hpttl('sensor:sensor1', 'air_quality')
print(pttl)
# prints [59994] # your actual value may vary
```

Set and retrieve a hash fieldâs expiration timestamp:

```python
# set the expiration of 'air_quality' to now + 24 hours
# (similar to setting the TTL to 24 hours)
r.hexpireat('sensor:sensor1', 
    datetime.now() + timedelta(hours=24), 
    'air_quality')
# and retrieve it
expire_time = r.hexpiretime('sensor:sensor1', 'air_quality')
print(expire_time)
# prints [1717668041] # your actual value may vary
```

## Performance

Most Redis hash commands are O(1).

A few commands, such as [`HKEYS`](), [`HVALS`](), [`HGETALL`](), and most of the expiration-related commands, are O(n), where _n_ is the number of field-value pairs.

## Limits

Every hash can store up to 4,294,967,295 (2^32 - 1) field-value pairs.
In practice, your hashes are limited only by the overall memory on the VMs hosting your Redis deployment.

## Learn more

* [Redis Hashes Explained](https://www.youtube.com/watch?v=-KdITaRkQ-U) is a short, comprehensive video explainer covering Redis hashes.
* [Redis University's RU101](https://university.redis.com/courses/ru101/) covers Redis hashes in detail.
