---
title: RPUSH
url: https://redis.io/docs/latest/commands/rpush/
retrieved_utc: '2026-04-09T20:46:07.155854+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/rpush/index.html.md
---

# RPUSH

```json metadata
{
  "title": "RPUSH",
  "description": "Appends one or more elements to a list. Creates the key if it doesn't exist.",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"display_text":"key","key_spec_index":0,"name":"key","type":"key"},{"display_text":"element","multiple":true,"name":"element","type":"string"}],
  "syntax_fmt": "RPUSH key element [element ...]",
  "complexity": "O(1) for each element added, so O(N) to add N elements when the command is called with multiple arguments.",
  "group": "list",
  "command_flags": ["write","denyoom","fast"],
  "acl_categories": ["@write","@list","@fast"],
  "since": "1.0.0",
  "arity": -3,
  "key_specs": [{"RW":true,"begin_search":{"spec":{"index":1},"type":"index"},"find_keys":{"spec":{"keystep":1,"lastkey":0,"limit":0},"type":"range"},"insert":true}],
  "tableOfContents": {"sections":[{"id":"examples","title":"Examples"},{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": [{"codetabsId":"cmds_list-steprpush","commands":[{"acl_categories":["@write","@list","@fast"],"complexity":"O(1)","name":"RPUSH"},{"acl_categories":["@read","@list","@slow"],"complexity":"O(S+N)","name":"LRANGE"}],"description":"Foundational: Add one or more elements to the tail of a list using RPUSH (creates list if needed, returns new list length)","difficulty":"beginner","id":"rpush","languages":[{"id":"redis-cli","panelId":"panel_redis-cli_cmds_list-steprpush"},{"clientId":"redis-py","clientName":"redis-py","id":"Python","langId":"python","panelId":"panel_Python_cmds_list-steprpush"},{"id":"Node-js","panelId":"panel_Nodejs_cmds_list-steprpush"},{"clientId":"jedis","clientName":"Jedis","id":"Java-Sync","langId":"java","panelId":"panel_Java-Sync_cmds_list-steprpush"},{"clientId":"lettuce","clientName":"Lettuce","id":"Java-Async","langId":"java","panelId":"panel_Java-Async_cmds_list-steprpush"},{"clientId":"lettuce","clientName":"Lettuce","id":"Java-Reactive","langId":"java","panelId":"panel_Java-Reactive_cmds_list-steprpush"},{"clientId":"go-redis","clientName":"go-redis","id":"Go","langId":"go","panelId":"panel_Go_cmds_list-steprpush"},{"id":"dotnet-Sync","panelId":"panel_Csharp-Sync_cmds_list-steprpush"},{"clientId":"predis","clientName":"Predis","id":"PHP","langId":"php","panelId":"panel_PHP_cmds_list-steprpush"}]}]
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

Insert all the specified values at the tail of the list stored at `key`.
If `key` does not exist, it is created as empty list before performing the push
operation.
When `key` holds a value that is not a list, an error is returned.

It is possible to push multiple elements using a single command call just
specifying multiple arguments at the end of the command.
Elements are inserted one after the other to the tail of the list, from the
leftmost element to the rightmost element.
So for instance the command `RPUSH mylist a b c` will result into a list
containing `a` as first element, `b` as second element and `c` as third element.

## Examples

#### Code Examples

Foundational: Add one or more elements to the tail of a list using RPUSH (creates list if needed, returns new list length)

**Difficulty:** Beginner

**Commands:** RPUSH, LRANGE

**Complexity:**
- RPUSH: O(1)
- LRANGE: O(S+N)

**Redis CLI:**

```
redis> RPUSH mylist "hello"
(integer) 1
redis> RPUSH mylist "world"
(integer) 2
redis> LRANGE mylist 0 -1
1) "hello"
2) "world"
```

**Available in:** Redis CLI, C# (Synchronous), Go, Java (Asynchronous - Lettuce), Java (Reactive - Lettuce), Java (Synchronous - Jedis), JavaScript (Node.js), PHP, Python

**C# (Synchronous):**

```csharp
        long rPushResult1 = db.ListRightPush("mylist", "hello");
        Console.WriteLine(rPushResult1); // >>> 1

        long rPushResult2 = db.ListRightPush("mylist", "world");
        Console.WriteLine(rPushResult2); // >>> 2

        RedisValue[] rPushResult3 = db.ListRange("mylist", 0, -1);
        Console.WriteLine($"[{string.Join(", ", rPushResult3)}]");
        // >>> [hello, world]
```

**Go:**

```go
	rPushResult1, err := rdb.RPush(ctx, "mylist", "Hello").Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(rPushResult1) // >>> 1

	rPushResult2, err := rdb.RPush(ctx, "mylist", "World").Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(rPushResult2) // >>> 2

	lRangeResult, err := rdb.LRange(ctx, "mylist", 0, -1).Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(lRangeResult) // >>> [Hello World]
```

**Java (Asynchronous - Lettuce):**

```java
            CompletableFuture<Void> rpush = asyncCommands.rpush("mylist", "hello").thenCompose(res14 -> {
                System.out.println(res14); // >>> 1

                return asyncCommands.rpush("mylist", "world");
            }).thenCompose(res15 -> {
                System.out.println(res15); // >>> 2

                return asyncCommands.lrange("mylist", 0, -1);
            })
                    .thenAccept(res16 -> System.out.println(res16)) // >>> [hello, world]
                    .toCompletableFuture();
```

**Java (Reactive - Lettuce):**

```java
            Mono<Void> rpush = reactiveCommands.rpush("mylist", "hello").doOnNext(res14 -> {
                System.out.println(res14); // >>> 1
            }).flatMap(res14 -> reactiveCommands.rpush("mylist", "world")).doOnNext(res15 -> {
                System.out.println(res15); // >>> 2
            }).flatMap(res15 -> reactiveCommands.lrange("mylist", 0, -1).collectList()).doOnNext(res16 -> {
                System.out.println(res16); // >>> [hello, world]
            }).then();
```

**Java (Synchronous - Jedis):**

```java
        long rPushResult1 = jedis.rpush("mylist", "hello");
        System.out.println(rPushResult1); // >>> 1

        long rPushResult2 = jedis.rpush("mylist", "world");
        System.out.println(rPushResult2); // >>> 2

        List<String> rPushResult3 = jedis.lrange("mylist", 0, -1);
        System.out.println(rPushResult3); // >>> [hello, world]
```

**JavaScript (Node.js):**

```javascript
const res14 = await client.rPush('mylist', 'hello');
console.log(res14); // 1

const res15 = await client.rPush('mylist', 'world');
console.log(res15); // 2

const res16 = await client.lRange('mylist', 0, -1);
console.log(res16); // [ 'hello', 'world' ]

```

**PHP:**

```php
        $res14 = $r->rpush('mylist', 'hello');
        echo $res14 . PHP_EOL;
        // >>> 1

        $res15 = $r->rpush('mylist', 'world');
        echo $res15 . PHP_EOL;
        // >>> 2

        $res16 = $r->lrange('mylist', 0, -1);
        echo json_encode($res16) . PHP_EOL;
        // >>> ["hello","world"]
```

**Python:**

```python
res14 = r.rpush("mylist", "hello")
print(res14) # >>> 1

res15 = r.rpush("mylist", "world")
print(res15) # >>> 2

res16 = r.lrange("mylist", 0, -1)
print(res16)  # >>> [ "hello", "world" ]

```



Give these commands a try in the interactive console:


RPUSH mylist "hello"
RPUSH mylist "world"
LRANGE mylist 0 -1


## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |

## Return information

**RESP2:**

[Integer reply](../../develop/reference/protocol-spec#integers): the length of the list after the push operation.

**RESP3:**

[Integer reply](../../develop/reference/protocol-spec#integers): the length of the list after the push operation.


