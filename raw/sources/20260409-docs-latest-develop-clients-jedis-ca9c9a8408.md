---
title: Jedis guide (Java)
url: https://redis.io/docs/latest/develop/clients/jedis/
retrieved_utc: '2026-04-09T20:45:53.175819+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/develop/clients/jedis/index.html.md
---

# Jedis guide (Java)

```json metadata
{
  "title": "Jedis guide (Java)",
  "description": "Connect your Java application to a Redis database",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "tableOfContents": {"sections":[{"id":"install","title":"Install"},{"id":"connect-and-test","title":"Connect and test"},{"id":"more-information","title":"More information"}]}

,
  "codeExamples": [{"codetabsId":"landing-stepimport","description":"Foundational: Import required Jedis classes for Redis client functionality","difficulty":"beginner","id":"import","languages":[{"clientId":"jedis","clientName":"Jedis","id":"Java-Sync","langId":"java","panelId":"panel_Java-Sync_landing-stepimport"}]},{"codetabsId":"landing-stepconnect","description":"Foundational: Connect to a Redis server and establish a client connection","difficulty":"beginner","id":"connect","languages":[{"clientId":"jedis","clientName":"Jedis","id":"Java-Sync","langId":"java","panelId":"panel_Java-Sync_landing-stepconnect"}]},{"codetabsId":"landing-stepset_get_string","description":"Foundational: Set and retrieve string values using SET and GET commands","difficulty":"beginner","id":"set_get_string","languages":[{"clientId":"jedis","clientName":"Jedis","id":"Java-Sync","langId":"java","panelId":"panel_Java-Sync_landing-stepset_get_string"}]},{"codetabsId":"landing-stepset_get_hash","description":"Foundational: Store and retrieve hash data structures using HSET and HGETALL","difficulty":"beginner","id":"set_get_hash","languages":[{"clientId":"jedis","clientName":"Jedis","id":"Java-Sync","langId":"java","panelId":"panel_Java-Sync_landing-stepset_get_hash"}]},{"codetabsId":"landing-stepclose","description":"Foundational: Properly close a Redis client connection to release resources","difficulty":"beginner","id":"close","languages":[{"clientId":"jedis","clientName":"Jedis","id":"Java-Sync","langId":"java","panelId":"panel_Java-Sync_landing-stepclose"}]}]
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


[Jedis](https://github.com/redis/jedis) is a synchronous Java client for Redis.
Use [Lettuce]() if you need
a more advanced Java client that also supports asynchronous and reactive connections.
The sections below explain how to install `Jedis` and connect your application
to a Redis database.

Jedis 7.2.0 introduced a new client connection API:

| New API class | Replaces | Use case |
| :-- | :-- | :-- |
| `RedisClient` | `UnifiedJedis`, `JedisPool`, `JedisPooled` | Single connection (with connection pooling) |
| `RedisClusterClient` | `JedisCluster` | Redis Cluster connections |
| `RedisSentinelClient` | `JedisSentinelPool` | Redis Sentinel connections |

The old client classes are now considered deprecated.


`Jedis` requires a running Redis server. See [here]() for Redis Open Source installation instructions.

## Install

To include `Jedis` as a dependency in your application, edit the dependency file, as follows.

* If you use **Maven**:   

  ```xml
  <dependency>
      <groupId>redis.clients</groupId>
      <artifactId>jedis</artifactId>
      <version>7.2.0</version>
  </dependency>
  ```

* If you use **Gradle**: 

  ```
  repositories {
      mavenCentral()
  }
  //...
  dependencies {
      implementation 'redis.clients:jedis:7.2.0'
      //...
  }
  ```

* If you use the JAR files, download the latest Jedis and Apache Commons Pool2 JAR files from [Maven Central](https://central.sonatype.com/) or any other Maven repository.

* Build from [source](https://github.com/redis/jedis)


## Connect and test

Add the following imports to your source file:

#### Code Examples

**Redis CLI:**

```

```

**Available in:** Redis CLI, C, C# (Asynchronous), C# (Synchronous), Go, Java, Java (Synchronous - Jedis), JavaScript (Node.js), JavaScript (Node.js), PHP, Python, Ruby, Rust (Asynchronous), Rust (Synchronous)

**C:**

```c
#include <stdio.h>
#include <stdlib.h>

#include <hiredis/hiredis.h>

int main() {
    // The `redisContext` type represents the connection
    // to the Redis server. Here, we connect to the
    // default host and port.
    redisContext *c = redisConnect("127.0.0.1", 6379);

    // Check if the context is null or if a specific
    // error occurred.
    if (c == NULL || c->err) {
        if (c != NULL) {
            printf("Error: %s\n", c->errstr);
            // handle error
        } else {
            printf("Can't allocate redis context\n");
        }

        exit(1);
    }

    // Set a string key.
    redisReply *reply = redisCommand(c, "SET foo bar");
    printf("Reply: %s\n", reply->str); // >>> Reply: OK
    freeReplyObject(reply);

    // Get the key we have just stored.
    reply = redisCommand(c, "GET foo");
    printf("Reply: %s\n", reply->str); // >>> Reply: bar
    freeReplyObject(reply);

    // Close the connection.
    redisFree(c);
}

```

**C# (Asynchronous):**

```csharp
using NRedisStack;
using NRedisStack.RedisStackCommands;
using StackExchange.Redis;
```

**C# (Synchronous):**

```csharp
using NRedisStack;
using NRedisStack.RedisStackCommands;
using StackExchange.Redis;
```

**Go:**

```go
import (
	"context"
	"fmt"

	"github.com/redis/go-redis/v9"
)

```

**Java:**

```java
import io.lettuce.core.*;
import io.lettuce.core.api.StatefulRedisConnection;
import io.lettuce.core.api.sync.RedisCommands;
```

**Java (Synchronous - Jedis):**

```java
import redis.clients.jedis.RedisClient;
import java.util.HashMap;
import java.util.Map;
```

**JavaScript (Node.js):**

```javascript
import { createClient } from 'redis';

const client = createClient();

client.on('error', err => console.log('Redis Client Error', err));

await client.connect();

await client.set('key', 'value');
const value = await client.get('key');
console.log(value); // >>> value

await client.hSet('user-session:123', {
    name: 'John',
    surname: 'Smith',
    company: 'Redis',
    age: 29
})

let userSession = await client.hGetAll('user-session:123');
console.log(JSON.stringify(userSession, null, 2));
/* >>>
{
  "surname": "Smith",
  "name": "John",
  "company": "Redis",
  "age": "29"
}
 */

await client.quit();

```

**JavaScript (Node.js):**

```javascript
import { Redis } from 'ioredis';

const redis = new Redis();

await redis.set('key', 'value');
const value = await redis.get('key');
console.log(value); // >>> value

await redis.hset('user-session:123', {
    name: 'John',
    surname: 'Smith',
    company: 'Redis',
    age: 29
});

const userSession = await redis.hgetall('user-session:123');
console.log(JSON.stringify(userSession, null, 2));
/* >>>
{
  "surname": "Smith",
  "name": "John",
  "company": "Redis",
  "age": "29"
}
 */

redis.disconnect();

```

**JavaScript (Node.js):**

```javascript
import { createClient } from 'redis';

const client = createClient();

client.on('error', err => console.log('Redis Client Error', err));

await client.connect();

await client.set('key', 'value');
const value = await client.get('key');
console.log(value); // >>> value

await client.hSet('user-session:123', {
    name: 'John',
    surname: 'Smith',
    company: 'Redis',
    age: 29
})

let userSession = await client.hGetAll('user-session:123');
console.log(JSON.stringify(userSession, null, 2));
/* >>>
{
  "surname": "Smith",
  "name": "John",
  "company": "Redis",
  "age": "29"
}
 */

await client.quit();

```

**JavaScript (Node.js):**

```javascript
import { Redis } from 'ioredis';

const redis = new Redis();

await redis.set('key', 'value');
const value = await redis.get('key');
console.log(value); // >>> value

await redis.hset('user-session:123', {
    name: 'John',
    surname: 'Smith',
    company: 'Redis',
    age: 29
});

const userSession = await redis.hgetall('user-session:123');
console.log(JSON.stringify(userSession, null, 2));
/* >>>
{
  "surname": "Smith",
  "name": "John",
  "company": "Redis",
  "age": "29"
}
 */

redis.disconnect();

```

**PHP:**

```php
<?php

require 'vendor/autoload.php';

use Predis\Client as PredisClient;

$r = new PredisClient([
                'scheme'   => 'tcp',
                'host'     => '127.0.0.1',
                'port'     => 6379,
                'password' => '',
                'database' => 0,
            ]);

echo $r->set('foo', 'bar'), PHP_EOL;
// >>> OK

echo $r->get('foo'), PHP_EOL;
// >>> bar

$r->hset('user-session:123', 'name', 'John');
$r->hset('user-session:123', 'surname', 'Smith');
$r->hset('user-session:123', 'company', 'Redis');
$r->hset('user-session:123', 'age', 29);

echo var_export($r->hgetall('user-session:123')), PHP_EOL;
/* >>>
array (
  'name' => 'John',
  'surname' => 'Smith',
  'company' => 'Redis',
  'age' => '29',
)
*/

```

**Python:**

```python

import redis
r = redis.Redis(host='localhost', port=6379, decode_responses=True)

r.set('foo', 'bar')
# True
r.get('foo')
# bar

r.hset('user-session:123', mapping={
    'name': 'John',
    "surname": 'Smith',
    "company": 'Redis',
    "age": 29
})
# True

r.hgetall('user-session:123')
# {'surname': 'Smith', 'name': 'John', 'company': 'Redis', 'age': '29'}

r.close()

```

**Ruby:**

```ruby
require 'redis'
```

**Rust (Asynchronous):**

```rust
    use redis::AsyncCommands;
```

**Rust (Synchronous):**

```rust
    use redis::Commands;
```



Connect to localhost on port 6379:

#### Code Examples

**Redis CLI:**

```

```

**Available in:** Redis CLI, C, C# (Asynchronous), C# (Synchronous), Go, Java, Java (Synchronous - Jedis), JavaScript (Node.js), JavaScript (Node.js), PHP, Python, Ruby, Rust (Asynchronous), Rust (Synchronous)

**C:**

```c
#include <stdio.h>
#include <stdlib.h>

#include <hiredis/hiredis.h>

int main() {
    // The `redisContext` type represents the connection
    // to the Redis server. Here, we connect to the
    // default host and port.
    redisContext *c = redisConnect("127.0.0.1", 6379);

    // Check if the context is null or if a specific
    // error occurred.
    if (c == NULL || c->err) {
        if (c != NULL) {
            printf("Error: %s\n", c->errstr);
            // handle error
        } else {
            printf("Can't allocate redis context\n");
        }

        exit(1);
    }

    // Set a string key.
    redisReply *reply = redisCommand(c, "SET foo bar");
    printf("Reply: %s\n", reply->str); // >>> Reply: OK
    freeReplyObject(reply);

    // Get the key we have just stored.
    reply = redisCommand(c, "GET foo");
    printf("Reply: %s\n", reply->str); // >>> Reply: bar
    freeReplyObject(reply);

    // Close the connection.
    redisFree(c);
}
```

**C# (Asynchronous):**

```csharp
        var muxer = await ConnectionMultiplexer.ConnectAsync("localhost:6379");
        var db = muxer.GetDatabase();
```

**C# (Synchronous):**

```csharp
        var muxer = ConnectionMultiplexer.Connect("localhost:6379");
        var db = muxer.GetDatabase();
```

**Go:**

```go
	rdb := redis.NewClient(&redis.Options{
		Addr:     "localhost:6379",
		Password: "", // no password
		DB:       0,  // use default DB
		Protocol: 2,
	})

	ctx := context.Background()
```

**Java:**

```java
        RedisURI uri = RedisURI.Builder
                .redis("localhost", 6379)
                .build();

        RedisClient client = RedisClient.create(uri);
        StatefulRedisConnection<String, String> connection = client.connect();
        RedisCommands<String, String> commands = connection.sync();
```

**Java (Synchronous - Jedis):**

```java
        RedisClient jedis = new RedisClient("redis://localhost:6379");
```

**JavaScript (Node.js):**

```javascript
import { createClient } from 'redis';

const client = createClient();

client.on('error', err => console.log('Redis Client Error', err));

await client.connect();
```

**JavaScript (Node.js):**

```javascript
import { Redis } from 'ioredis';

const redis = new Redis();
```

**JavaScript (Node.js):**

```javascript
import { createClient } from 'redis';

const client = createClient();

client.on('error', err => console.log('Redis Client Error', err));

await client.connect();
```

**JavaScript (Node.js):**

```javascript
import { Redis } from 'ioredis';

const redis = new Redis();
```

**PHP:**

```php
<?php

require 'vendor/autoload.php';

use Predis\Client as PredisClient;

$r = new PredisClient([
                'scheme'   => 'tcp',
                'host'     => '127.0.0.1',
                'port'     => 6379,
                'password' => '',
                'database' => 0,
            ]);
```

**Python:**

```python
import redis
r = redis.Redis(host='localhost', port=6379, decode_responses=True)
```

**Ruby:**

```ruby
r = Redis.new
```

**Rust (Asynchronous):**

```rust
        let mut r = match redis::Client::open("redis://127.0.0.1") {
            Ok(client) => {
                match client.get_multiplexed_async_connection().await {
                    Ok(conn) => conn,
                    Err(e) => {
                        println!("Failed to connect to Redis: {e}");
                        return;
                    }
                }
            },
            Err(e) => {
                println!("Failed to create Redis client: {e}");
                return;
            }
        };
```

**Rust (Synchronous):**

```rust
        let mut r = match redis::Client::open("redis://127.0.0.1") {
            Ok(client) => {
                match client.get_connection() {
                    Ok(conn) => conn,
                    Err(e) => {
                        println!("Failed to connect to Redis: {e}");
                        return;
                    }
                }
            },
            Err(e) => {
                println!("Failed to create Redis client: {e}");
                return;
            }
        };
```



After you have connected, you can check the connection by storing and
retrieving a simple [string]() value:

#### Code Examples

**Redis CLI:**

```

```

**Available in:** Redis CLI, C, C# (Asynchronous), C# (Synchronous), Go, Java, Java (Synchronous - Jedis), JavaScript (Node.js), JavaScript (Node.js), PHP, Python, Ruby, Rust (Asynchronous), Rust (Synchronous)

**C:**

```c
#include <stdio.h>
#include <stdlib.h>

#include <hiredis/hiredis.h>

int main() {
    // The `redisContext` type represents the connection
    // to the Redis server. Here, we connect to the
    // default host and port.
    redisContext *c = redisConnect("127.0.0.1", 6379);

    // Check if the context is null or if a specific
    // error occurred.
    if (c == NULL || c->err) {
        if (c != NULL) {
            printf("Error: %s\n", c->errstr);
            // handle error
        } else {
            printf("Can't allocate redis context\n");
        }

        exit(1);
    }

    // Set a string key.
    redisReply *reply = redisCommand(c, "SET foo bar");
    printf("Reply: %s\n", reply->str); // >>> Reply: OK
    freeReplyObject(reply);

    // Get the key we have just stored.
    reply = redisCommand(c, "GET foo");
    printf("Reply: %s\n", reply->str); // >>> Reply: bar
    freeReplyObject(reply);

    // Close the connection.
    redisFree(c);
}

```

**C# (Asynchronous):**

```csharp
        await db.StringSetAsync("foo", "bar");
        string? fooResult = await db.StringGetAsync("foo");
        Console.WriteLine(fooResult); // >>> bar
```

**C# (Synchronous):**

```csharp
        db.StringSet("foo", "bar");
        Console.WriteLine(db.StringGet("foo")); // >>> bar
```

**Go:**

```go
	err := rdb.Set(ctx, "foo", "bar", 0).Err()
	if err != nil {
		panic(err)
	}

	val, err := rdb.Get(ctx, "foo").Result()
	if err != nil {
		panic(err)
	}
	fmt.Println("foo", val) // >>> foo bar
```

**Java:**

```java
        commands.set("foo", "bar");
        String result = commands.get("foo");
        System.out.println(result); // >>> bar
```

**Java (Synchronous - Jedis):**

```java
        String res1 = jedis.set("bike:1", "Deimos");
        System.out.println(res1); // >>> OK

        String res2 = jedis.get("bike:1");
        System.out.println(res2); // >>> Deimos
```

**JavaScript (Node.js):**

```javascript
await client.set('key', 'value');
const value = await client.get('key');
console.log(value); // >>> value
```

**JavaScript (Node.js):**

```javascript
await redis.set('key', 'value');
const value = await redis.get('key');
console.log(value); // >>> value
```

**JavaScript (Node.js):**

```javascript
await client.set('key', 'value');
const value = await client.get('key');
console.log(value); // >>> value
```

**JavaScript (Node.js):**

```javascript
await redis.set('key', 'value');
const value = await redis.get('key');
console.log(value); // >>> value
```

**PHP:**

```php
echo $r->set('foo', 'bar'), PHP_EOL;
// >>> OK

echo $r->get('foo'), PHP_EOL;
// >>> bar
```

**Python:**

```python
r.set('foo', 'bar')
# True
r.get('foo')
# bar
```

**Ruby:**

```ruby
r.set 'foo', 'bar'
value = r.get('foo')
puts value # >>> bar
```

**Rust (Asynchronous):**

```rust
        if let Ok(res) = r.set("foo", "bar").await {
            let res: String = res;
            println!("{res}"); // >>> OK
        } else {
            println!("Error setting foo");
        }

        match r.get("foo").await {
            Ok(res) => {
                let res: String = res;
                println!("{res}"); // >>> bar
            },
            Err(e) => {
                println!("Error getting foo: {e}");
                return;
            }
        };
```

**Rust (Synchronous):**

```rust
        if let Ok(res) = r.set("foo", "bar") {
            let res: String = res;
            println!("{res}");    // >>> OK
        } else {
            println!("Error setting foo");
        }
        
        match r.get("foo") {
            Ok(res) => {
                let res: String = res;
                println!("{res}");   // >>> bar
            },
            Err(e) => {
                println!("Error getting foo: {e}");
                return;
            }
        };
```



Store and retrieve a [hash]():

#### Code Examples

**Redis CLI:**

```

```

**Available in:** Redis CLI, C, C# (Asynchronous), C# (Synchronous), Go, Java, Java (Synchronous - Jedis), JavaScript (Node.js), JavaScript (Node.js), PHP, Python, Ruby, Rust (Asynchronous), Rust (Synchronous)

**C:**

```c
#include <stdio.h>
#include <stdlib.h>

#include <hiredis/hiredis.h>

int main() {
    // The `redisContext` type represents the connection
    // to the Redis server. Here, we connect to the
    // default host and port.
    redisContext *c = redisConnect("127.0.0.1", 6379);

    // Check if the context is null or if a specific
    // error occurred.
    if (c == NULL || c->err) {
        if (c != NULL) {
            printf("Error: %s\n", c->errstr);
            // handle error
        } else {
            printf("Can't allocate redis context\n");
        }

        exit(1);
    }

    // Set a string key.
    redisReply *reply = redisCommand(c, "SET foo bar");
    printf("Reply: %s\n", reply->str); // >>> Reply: OK
    freeReplyObject(reply);

    // Get the key we have just stored.
    reply = redisCommand(c, "GET foo");
    printf("Reply: %s\n", reply->str); // >>> Reply: bar
    freeReplyObject(reply);

    // Close the connection.
    redisFree(c);
}

```

**C# (Asynchronous):**

```csharp
        var hash = new HashEntry[] { 
            new HashEntry("name", "John"), 
            new HashEntry("surname", "Smith"),
            new HashEntry("company", "Redis"),
            new HashEntry("age", "29"),
            };
        await db.HashSetAsync("user-session:123", hash);

        var hashFields = await db.HashGetAllAsync("user-session:123");
        Console.WriteLine(String.Join("; ", hashFields));
        // >>> name: John; surname: Smith; company: Redis; age: 29
```

**C# (Synchronous):**

```csharp
        var hash = new HashEntry[] {
            new HashEntry("name", "John"),
            new HashEntry("surname", "Smith"),
            new HashEntry("company", "Redis"),
            new HashEntry("age", "29"),
        };
        db.HashSet("user-session:123", hash);

        var hashFields = db.HashGetAll("user-session:123");
        Console.WriteLine(String.Join("; ", hashFields));
        // >>> name: John; surname: Smith; company: Redis; age: 29
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

	res4, err := rdb.HGetAll(ctx, "bike:1").Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(res4)
	// >>> map[brand:Ergonom model:Deimos price:4972 type:Enduro bikes]
```

**Java:**

```java
import io.lettuce.core.*;
import io.lettuce.core.api.StatefulRedisConnection;
import io.lettuce.core.api.sync.RedisCommands;


public class ConnectBasicTest {

    public void connectBasic() {
        RedisURI uri = RedisURI.Builder
                .redis("localhost", 6379)
                .build();

        RedisClient client = RedisClient.create(uri);
        StatefulRedisConnection<String, String> connection = client.connect();
        RedisCommands<String, String> commands = connection.sync();

        commands.set("foo", "bar");
        String result = commands.get("foo");
        System.out.println(result); // >>> bar

        connection.close();
        client.shutdown();
    }
}
```

**Java (Synchronous - Jedis):**

```java
        Map<String, String> hash = new HashMap<>();
        hash.put("name", "John");
        hash.put("surname", "Smith");
        hash.put("company", "Redis");
        hash.put("age", "29");

        Long res3 = jedis.hset("user-session:123", hash);
        System.out.println(res3); // >>> 4

        Map<String, String> res4 = jedis.hgetAll("user-session:123");
        System.out.println(res4);
        // >>> {name=John, surname=Smith, company=Redis, age=29}
```

**JavaScript (Node.js):**

```javascript
await client.hSet('user-session:123', {
    name: 'John',
    surname: 'Smith',
    company: 'Redis',
    age: 29
})

let userSession = await client.hGetAll('user-session:123');
console.log(JSON.stringify(userSession, null, 2));
/* >>>
{
  "surname": "Smith",
  "name": "John",
  "company": "Redis",
  "age": "29"
}
 */
```

**JavaScript (Node.js):**

```javascript
await redis.hset('user-session:123', {
    name: 'John',
    surname: 'Smith',
    company: 'Redis',
    age: 29
});

const userSession = await redis.hgetall('user-session:123');
console.log(JSON.stringify(userSession, null, 2));
/* >>>
{
  "surname": "Smith",
  "name": "John",
  "company": "Redis",
  "age": "29"
}
 */
```

**JavaScript (Node.js):**

```javascript
await client.hSet('user-session:123', {
    name: 'John',
    surname: 'Smith',
    company: 'Redis',
    age: 29
})

let userSession = await client.hGetAll('user-session:123');
console.log(JSON.stringify(userSession, null, 2));
/* >>>
{
  "surname": "Smith",
  "name": "John",
  "company": "Redis",
  "age": "29"
}
 */
```

**JavaScript (Node.js):**

```javascript
await redis.hset('user-session:123', {
    name: 'John',
    surname: 'Smith',
    company: 'Redis',
    age: 29
});

const userSession = await redis.hgetall('user-session:123');
console.log(JSON.stringify(userSession, null, 2));
/* >>>
{
  "surname": "Smith",
  "name": "John",
  "company": "Redis",
  "age": "29"
}
 */
```

**PHP:**

```php
$r->hset('user-session:123', 'name', 'John');
$r->hset('user-session:123', 'surname', 'Smith');
$r->hset('user-session:123', 'company', 'Redis');
$r->hset('user-session:123', 'age', 29);

echo var_export($r->hgetall('user-session:123')), PHP_EOL;
/* >>>
array (
  'name' => 'John',
  'surname' => 'Smith',
  'company' => 'Redis',
  'age' => '29',
)
*/
```

**Python:**

```python

import redis
r = redis.Redis(host='localhost', port=6379, decode_responses=True)

r.set('foo', 'bar')
# True
r.get('foo')
# bar

r.hset('user-session:123', mapping={
    'name': 'John',
    "surname": 'Smith',
    "company": 'Redis',
    "age": 29
})
# True

r.hgetall('user-session:123')
# {'surname': 'Smith', 'name': 'John', 'company': 'Redis', 'age': '29'}

r.close()

```

**Ruby:**

```ruby
require 'redis'

r = Redis.new

r.set 'foo', 'bar'
value = r.get('foo')
puts value # >>> bar

r.hset 'user-session:123', 'name', 'John'
r.hset 'user-session:123', 'surname', 'Smith'
r.hset 'user-session:123', 'company', 'Redis'
r.hset 'user-session:123', 'age', 29

hash_value = r.hgetall('user-session:123')
puts hash_value
# >>> {"name"=>"John", "surname"=>"Smith", "company"=>"Redis", "age"=>"29"}

r.close()

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
            println!("{res}"); // >>> OK
        } else {
            println!("Error setting bike:1");
        }

        match r.hget("bike:1", "model").await {
            Ok(res) => {
                let res: String = res;
                println!("{res}"); // >>> Deimos
            },
            Err(e) => {
                println!("Error getting bike:1 model: {e}");
                return;
            }
        }

        match r.hget("bike:1", "price").await {
            Ok(res) => {
                let res: String = res;
                println!("{res}"); // >>> 4972
            },
            Err(e) => {
                println!("Error getting bike:1 price: {e}");
                return;
            }
        }

        match r.hgetall("bike:1").await {
            Ok(res) => {
                let res: Vec<(String, String)> = res;

                for (key, value) in res {
                    println!("{key}: {value}");
                }
                // >>> model: Deimos
                // >>> brand: Ergonom
                // >>> type: Enduro bikes
                // >>> price: 4972
            },
            Err(e) => {
                println!("Error getting bike:1: {e}");
                return;
            }
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
            println!("{res}"); // >>> OK
        } else {
            println!("Error setting bike:1");
        }
    
        match r.hget("bike:1", "model") {
            Ok(res) => {
                let res: String = res;
                println!("{res}"); // >>> Deimos
            },
            Err(e) => {
                println!("Error getting bike:1 model: {e}");
                return;
            }   
        }
    
        match r.hget("bike:1", "price") {
            Ok(res) => {
                let res: String = res;
                println!("{res}"); // >>> 4972
            },
            Err(e) => {
                println!("Error getting bike:1 price: {e}");
                return;
            }   
        }
    
        match r.hgetall("bike:1") {
            Ok(res) => {
                let res: Vec<(String, String)> = res;
                
                for (key, value) in res {
                    println!("{key}: {value}");
                }
                // >>> model: Deimos
                // >>> brand: Ergonom
                // >>> type: Enduro bikes
                // >>> price: 4972
            },
            Err(e) => {
                println!("Error getting bike:1: {e}");
                return;
            }   
        }
```



Close the connection when you're done:

#### Code Examples

**Redis CLI:**

```

```

**Available in:** Redis CLI, C, C# (Asynchronous), C# (Synchronous), Go, Java, Java (Synchronous - Jedis), JavaScript (Node.js), JavaScript (Node.js), PHP, Python, Ruby, Rust (Asynchronous), Rust (Synchronous)

**C:**

```c
#include <stdio.h>
#include <stdlib.h>

#include <hiredis/hiredis.h>

int main() {
    // The `redisContext` type represents the connection
    // to the Redis server. Here, we connect to the
    // default host and port.
    redisContext *c = redisConnect("127.0.0.1", 6379);

    // Check if the context is null or if a specific
    // error occurred.
    if (c == NULL || c->err) {
        if (c != NULL) {
            printf("Error: %s\n", c->errstr);
            // handle error
        } else {
            printf("Can't allocate redis context\n");
        }

        exit(1);
    }

    // Set a string key.
    redisReply *reply = redisCommand(c, "SET foo bar");
    printf("Reply: %s\n", reply->str); // >>> Reply: OK
    freeReplyObject(reply);

    // Get the key we have just stored.
    reply = redisCommand(c, "GET foo");
    printf("Reply: %s\n", reply->str); // >>> Reply: bar
    freeReplyObject(reply);

    // Close the connection.
    redisFree(c);
}

```

**C# (Asynchronous):**

```csharp
using NRedisStack;
using NRedisStack.RedisStackCommands;
using StackExchange.Redis;

public class AsyncLandingExample
{
    public async Task Run()
    {
        var muxer = await ConnectionMultiplexer.ConnectAsync("localhost:6379");
        var db = muxer.GetDatabase();

        await db.StringSetAsync("foo", "bar");
        string? fooResult = await db.StringGetAsync("foo");
        Console.WriteLine(fooResult); // >>> bar

        var hash = new HashEntry[] { 
            new HashEntry("name", "John"), 
            new HashEntry("surname", "Smith"),
            new HashEntry("company", "Redis"),
            new HashEntry("age", "29"),
            };
        await db.HashSetAsync("user-session:123", hash);

        var hashFields = await db.HashGetAllAsync("user-session:123");
        Console.WriteLine(String.Join("; ", hashFields));
        // >>> name: John; surname: Smith; company: Redis; age: 29
    }
}


```

**C# (Synchronous):**

```csharp
using NRedisStack;
using NRedisStack.RedisStackCommands;
using StackExchange.Redis;

public class SyncLandingExample
{
    public void Run()
    {
        var muxer = ConnectionMultiplexer.Connect("localhost:6379");
        var db = muxer.GetDatabase();

        db.StringSet("foo", "bar");
        Console.WriteLine(db.StringGet("foo")); // >>> bar

        var hash = new HashEntry[] {
            new HashEntry("name", "John"),
            new HashEntry("surname", "Smith"),
            new HashEntry("company", "Redis"),
            new HashEntry("age", "29"),
        };
        db.HashSet("user-session:123", hash);

        var hashFields = db.HashGetAll("user-session:123");
        Console.WriteLine(String.Join("; ", hashFields));
        // >>> name: John; surname: Smith; company: Redis; age: 29
    }
}


```

**Go:**

```go
	rdb.Close()
```

**Java:**

```java
        connection.close();
        client.shutdown();
```

**Java (Synchronous - Jedis):**

```java
        jedis.close();
```

**JavaScript (Node.js):**

```javascript
await client.quit();
```

**JavaScript (Node.js):**

```javascript
redis.disconnect();
```

**JavaScript (Node.js):**

```javascript
await client.quit();
```

**JavaScript (Node.js):**

```javascript
redis.disconnect();
```

**PHP:**

```php
<?php

require 'vendor/autoload.php';

use Predis\Client as PredisClient;

$r = new PredisClient([
                'scheme'   => 'tcp',
                'host'     => '127.0.0.1',
                'port'     => 6379,
                'password' => '',
                'database' => 0,
            ]);

echo $r->set('foo', 'bar'), PHP_EOL;
// >>> OK

echo $r->get('foo'), PHP_EOL;
// >>> bar

$r->hset('user-session:123', 'name', 'John');
$r->hset('user-session:123', 'surname', 'Smith');
$r->hset('user-session:123', 'company', 'Redis');
$r->hset('user-session:123', 'age', 29);

echo var_export($r->hgetall('user-session:123')), PHP_EOL;
/* >>>
array (
  'name' => 'John',
  'surname' => 'Smith',
  'company' => 'Redis',
  'age' => '29',
)
*/

```

**Python:**

```python
r.close()
```

**Ruby:**

```ruby
r.close()
```

**Rust (Asynchronous):**

```rust
mod tests {
    use redis::AsyncCommands;

    async fn run() {
        let mut r = match redis::Client::open("redis://127.0.0.1") {
            Ok(client) => {
                match client.get_multiplexed_async_connection().await {
                    Ok(conn) => conn,
                    Err(e) => {
                        println!("Failed to connect to Redis: {e}");
                        return;
                    }
                }
            },
            Err(e) => {
                println!("Failed to create Redis client: {e}");
                return;
            }
        };

        if let Ok(res) = r.set("foo", "bar").await {
            let res: String = res;
            println!("{res}"); // >>> OK
        } else {
            println!("Error setting foo");
        }

        match r.get("foo").await {
            Ok(res) => {
                let res: String = res;
                println!("{res}"); // >>> bar
            },
            Err(e) => {
                println!("Error getting foo: {e}");
                return;
            }
        };

        let hash_fields = [
            ("model", "Deimos"),
            ("brand", "Ergonom"),
            ("type", "Enduro bikes"),
            ("price", "4972"),
        ];

        if let Ok(res) = r.hset_multiple("bike:1", &hash_fields).await {
            let res: String = res;
            println!("{res}"); // >>> OK
        } else {
            println!("Error setting bike:1");
        }

        match r.hget("bike:1", "model").await {
            Ok(res) => {
                let res: String = res;
                println!("{res}"); // >>> Deimos
            },
            Err(e) => {
                println!("Error getting bike:1 model: {e}");
                return;
            }
        }

        match r.hget("bike:1", "price").await {
            Ok(res) => {
                let res: String = res;
                println!("{res}"); // >>> 4972
            },
            Err(e) => {
                println!("Error getting bike:1 price: {e}");
                return;
            }
        }

        match r.hgetall("bike:1").await {
            Ok(res) => {
                let res: Vec<(String, String)> = res;

                for (key, value) in res {
                    println!("{key}: {value}");
                }
                // >>> model: Deimos
                // >>> brand: Ergonom
                // >>> type: Enduro bikes
                // >>> price: 4972
            },
            Err(e) => {
                println!("Error getting bike:1: {e}");
                return;
            }
        }
    }
}

```

**Rust (Synchronous):**

```rust
mod landing_tests {
    use redis::Commands;

    fn run() {
        let mut r = match redis::Client::open("redis://127.0.0.1") {
            Ok(client) => {
                match client.get_connection() {
                    Ok(conn) => conn,
                    Err(e) => {
                        println!("Failed to connect to Redis: {e}");
                        return;
                    }
                }
            },
            Err(e) => {
                println!("Failed to create Redis client: {e}");
                return;
            }
        };

        if let Ok(res) = r.set("foo", "bar") {
            let res: String = res;
            println!("{res}");    // >>> OK
        } else {
            println!("Error setting foo");
        }
        
        match r.get("foo") {
            Ok(res) => {
                let res: String = res;
                println!("{res}");   // >>> bar
            },
            Err(e) => {
                println!("Error getting foo: {e}");
                return;
            }
        };
    
        let hash_fields = [
            ("model", "Deimos"),
            ("brand", "Ergonom"),
            ("type", "Enduro bikes"),
            ("price", "4972"),
        ];
    
        if let Ok(res) = r.hset_multiple("bike:1", &hash_fields) {
            let res: String = res;
            println!("{res}"); // >>> OK
        } else {
            println!("Error setting bike:1");
        }
    
        match r.hget("bike:1", "model") {
            Ok(res) => {
                let res: String = res;
                println!("{res}"); // >>> Deimos
            },
            Err(e) => {
                println!("Error getting bike:1 model: {e}");
                return;
            }   
        }
    
        match r.hget("bike:1", "price") {
            Ok(res) => {
                let res: String = res;
                println!("{res}"); // >>> 4972
            },
            Err(e) => {
                println!("Error getting bike:1 price: {e}");
                return;
            }   
        }
    
        match r.hgetall("bike:1") {
            Ok(res) => {
                let res: Vec<(String, String)> = res;
                
                for (key, value) in res {
                    println!("{key}: {value}");
                }
                // >>> model: Deimos
                // >>> brand: Ergonom
                // >>> type: Enduro bikes
                // >>> price: 4972
            },
            Err(e) => {
                println!("Error getting bike:1: {e}");
                return;
            }   
        }
    }
}

```



## More information

`Jedis` has a complete [API reference](https://www.javadoc.io/doc/redis.clients/jedis/latest/index.html) available on [javadoc.io/](https://javadoc.io/).
The `Jedis` [GitHub repository](https://github.com/redis/jedis) also has useful docs
and examples including a page about handling
[failover with Jedis](https://github.com/redis/jedis/blob/master/docs/failover.md)

See also the other pages in this section for more information and examples:
