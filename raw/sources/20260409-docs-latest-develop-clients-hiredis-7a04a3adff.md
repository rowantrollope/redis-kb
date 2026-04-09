---
title: hiredis guide (C)
url: https://redis.io/docs/latest/develop/clients/hiredis/
retrieved_utc: '2026-04-09T20:45:54.267048+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/develop/clients/hiredis/index.html.md
---

# hiredis guide (C)

```json metadata
{
  "title": "hiredis guide (C)",
  "description": "Connect your C application to a Redis database.",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "tableOfContents": {"sections":[{"id":"build-and-install","title":"Build and install"},{"id":"connect-and-test","title":"Connect and test"},{"id":"more-information","title":"More information"}]}

,
  "codeExamples": [{"codetabsId":"landing-stepconnect","description":"Foundational: Connect to a Redis server, set and retrieve string values using SET and GET, then close the connection","difficulty":"beginner","id":"connect","languages":[{"clientId":"hiredis","clientName":"hiredis","id":"C","langId":"c","panelId":"panel_C_landing-stepconnect"}]}]
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


[`hiredis`](https://github.com/redis/hiredis) is the
[C language](https://en.wikipedia.org/wiki/C_(programming_language))
client for Redis.
The sections below explain how to install `hiredis` and connect your application
to a Redis database.

`hiredis` requires a running Redis or [Redis Stack]() server. See [Getting started]() for Redis installation instructions.

## Build and install

Clone or download the `hiredis` source from the [Github repository](https://github.com/redis/hiredis).
Then, in a terminal, go into the `hiredis` folder and run the `make` command to build
the dynamically-loaded library for `hiredis` (this has the name `libhiredis.dylib` on
MacOS and `libhiredis.so` on Linux). You can copy this library to your
project folder or run `sudo make install` to install it to `/usr/local/lib`.

## Connect and test

The code in the example below connects to the server, stores and retrieves
a string key using [`SET`]() and
[`GET`](), and then finally closes the
connection. An explanation of the code follows the example.

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



For a real project, you would build your code with a makefile, but for
this simple test, you can just place it in a file called `main.c` and
build it with the following command. (If you didn't install `hiredis`
using `make install`, then you should also use the `-I` option to
specify the folder that contains the `hiredis` headers.)

```bash
cc main.c -L/usr/local/lib -lhiredis
```

The default executable filename is `a.out`. If you run this file from
the terminal, you should see the following output:

```
% ./a.out                             
Reply: OK
Reply: bar
```

The code first uses `redisConnect()` to open the connection for
all subsequent commands to use. See
[Connect]() for
more information about connecting to Redis.

The `redisCommand()` function
issues commands to the server, each of which returns a
`redisReply` pointer. Here, the reply is a string, which you can
access using the `str` field of the reply. The `redisCommand()`
call allocates memory for the reply, so you should free this
with `freeReplyObject()` when you have finished using it.
See [Issue commands]()
and [Handle replies]()
for more information.

Finally, you should close the connection to Redis with a
call to `redisFree()`. This is not strictly necessary
for this short test program, but real-world code will typically
open and use many connections. You must free them after using them
to prevent errors.

## More information

The [`hiredis`](https://github.com/redis/hiredis) Github repository contains
examples and details that may be useful if you are using `hiredis` to
implement a higher-level client for another programming language. There are
also examples showing how to use `hiredis` adapter headers to integrate with
various event handling frameworks.

See the other pages in this section for more information and examples.
