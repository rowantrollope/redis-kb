---
title: Pipelines and transactions
url: https://redis.io/docs/latest/develop/clients/dotnet/transpipe/
retrieved_utc: '2026-04-09T20:45:58.135431+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/develop/clients/dotnet/transpipe/index.html.md
---

# Pipelines and transactions

```json metadata
{
  "title": "Pipelines and transactions",
  "description": "Learn how to use Redis pipelines and transactions",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "tableOfContents": {"sections":[{"id":"execute-a-pipeline","title":"Execute a pipeline"},{"id":"execute-a-transaction","title":"Execute a transaction"},{"id":"watch-keys-for-changes","title":"Watch keys for changes"}]}

,
  "codeExamples": [{"codetabsId":"pipe_trans_tutorial-stepbasic_pipe","description":"Foundational: Use pipelines to batch multiple commands together and reduce network round trips","difficulty":"beginner","id":"basic_pipe","languages":[{"id":"dotnet-Sync","panelId":"panel_Csharp-Sync_pipe_trans_tutorial-stepbasic_pipe"}]},{"codetabsId":"pipe_trans_tutorial-stepbasic_trans","description":"Foundational: Use transactions to execute multiple commands atomically without interruption from other clients","difficulty":"beginner","id":"basic_trans","languages":[{"id":"dotnet-Sync","panelId":"panel_Csharp-Sync_pipe_trans_tutorial-stepbasic_trans"}]},{"codetabsId":"pipe_trans_tutorial-steptrans_watch","description":"Optimistic locking: Use conditions to monitor keys for changes and abort transactions when conflicts occur","difficulty":"intermediate","id":"trans_watch","languages":[{"id":"dotnet-Sync","panelId":"panel_Csharp-Sync_pipe_trans_tutorial-steptrans_watch"}]}]
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


Redis lets you send a sequence of commands to the server together in a batch.
There are two types of batch that you can use:

-   **Pipelines** avoid network and processing overhead by sending several commands
    to the server together in a single communication. The server then sends back
    a single communication with all the responses. See the
    [Pipelining]() page for more
    information.
-   **Transactions** guarantee that all the included commands will execute
    to completion without being interrupted by commands from other clients.
    See the [Transactions]()
    page for more information.

## Execute a pipeline

To execute commands in a pipeline, you first create a pipeline object
and then add commands to it using methods that resemble the *asynchronous*
versions of the standard command methods
(for example, `StringSetAsync()` and `StringGetAsync()`). The commands are
buffered in the pipeline and only execute when you call the `Execute()`
method on the pipeline object.

#### Code Examples

**Redis CLI:**

```

```

**Available in:** Redis CLI, C# (Synchronous), Go, Java (Synchronous - Jedis), Python, Rust (Synchronous)

**C# (Synchronous):**

```csharp
        var pipeline = new Pipeline(db);

        for (int i = 0; i < 5; i++)
        {
            _ = pipeline.Db.StringSetAsync($"seat:{i}", $"#{i}");
        }
        pipeline.Execute();

        var resp1 = db.StringGet("seat:0");
        Console.WriteLine(resp1); // >>> #0

        var resp2 = db.StringGet("seat:3");
        Console.WriteLine(resp2); // >>> #3

        var resp3 = db.StringGet("seat:4");
        Console.WriteLine(resp2); // >>> #4
```

**Go:**

```go
	pipe := rdb.Pipeline()

	for i := 0; i < 5; i++ {
		pipe.Set(ctx, fmt.Sprintf("seat:%v", i), fmt.Sprintf("#%v", i), 0)
	}

	cmds, err := pipe.Exec(ctx)

	if err != nil {
		panic(err)
	}

	for _, c := range cmds {
		fmt.Printf("%v;", c.(*redis.StatusCmd).Val())
	}

	fmt.Println("")
	// >>> OK;OK;OK;OK;OK;

	pipe = rdb.Pipeline()

	get0Result := pipe.Get(ctx, "seat:0")
	get3Result := pipe.Get(ctx, "seat:3")
	get4Result := pipe.Get(ctx, "seat:4")

	cmds, err = pipe.Exec(ctx)

	// The results are available only after the pipeline
	// has finished executing.
	fmt.Println(get0Result.Val()) // >>> #0
	fmt.Println(get3Result.Val()) // >>> #3
	fmt.Println(get4Result.Val()) // >>> #4
```

**Java (Synchronous - Jedis):**

```java
        // Make sure you close the pipeline after use to release resources
        // and return the connection to the pool.
        try (AbstractPipeline pipe = jedis.pipelined()) {

            for (int i = 0; i < 5; i++) {
                pipe.set(String.format("seat:%d", i), String.format("#%d", i));
            }

            pipe.sync();
        }

        try (AbstractPipeline pipe = jedis.pipelined()) {

            Response<String> resp0 = pipe.get("seat:0");
            Response<String> resp3 = pipe.get("seat:3");
            Response<String> resp4 = pipe.get("seat:4");

            pipe.sync();

            // Responses are available after the pipeline has executed.
            System.out.println(resp0.get()); // >>> #0
            System.out.println(resp3.get()); // >>> #3
            System.out.println(resp4.get()); // >>> #4


        }
```

**Python:**

```python
r = redis.Redis(decode_responses=True)

pipe = r.pipeline()

for i in range(5):
    pipe.set(f"seat:{i}", f"#{i}")

set_5_result = pipe.execute()
print(set_5_result)  # >>> [True, True, True, True, True]

pipe = r.pipeline()

# "Chain" pipeline commands together.
get_3_result = pipe.get("seat:0").get("seat:3").get("seat:4").execute()
print(get_3_result)  # >>> ['#0', '#3', '#4']
```

**Rust (Synchronous):**

```rust
        // Check the success of the pipeline without checking the results
        // individually.
        match redis::pipe()
            .set("seat:0", "#0")
            .set("seat:1", "#1")
            .set("seat:2", "#2")
            .set("seat:3", "#3")
            .set("seat:4", "#4")
            .exec(&mut r)
        {
            Ok(_) => {
                println!("Pipe executed successfully");
            },
            Err(e) => {
                println!("Error executing pipe: {e}");
                return;
            }
        };
        
        // Check the success of the pipeline and the results individually.
        let (seat_0, seat_1, seat_2, seat_3, seat_4) :
        (String, String, String, String, String) = match redis::pipe()
            .get("seat:0")
            .get("seat:1")
            .get("seat:2")
            .get("seat:3")
            .get("seat:4")
            .query(&mut r) {
                Ok(res) => res,
                Err(e) => {
                    println!("Error executing pipe: {e}");
                    return;
                }
            };

        println!("{seat_0}, {seat_1}, {seat_2}, {seat_3}, {seat_4}");
        // >>> #0, #1, #2, #3, #4

        // Use `ignore()` to ignore the result of specific commands.
        let (seat_5, seat_6, seat_7) :
            (String, String, String) = match redis::pipe()
            .set("seat:5", "#5").ignore()
            .set("seat:6", "#6").ignore()
            .set("seat:7", "#7").ignore()
            .get("seat:5")
            .get("seat:6")
            .get("seat:7")
            .query(&mut r) {
                Ok(res) => res,
                Err(e) => {
                    println!("Error executing pipe: {e}");
                    return;
                }
            };

        println!("{seat_5}, {seat_6}, {seat_7}");
        // >>> #5, #6, #7
```



## Execute a transaction

A transaction works in a similar way to a pipeline. Create an
instance of the `Transaction` class, call async command methods
on that object, and then call the transaction object's
`Execute()` method to execute it.

#### Code Examples

**Redis CLI:**

```

```

**Available in:** Redis CLI, C# (Synchronous), Go, Java (Synchronous - Jedis), Python, Rust (Synchronous)

**C# (Synchronous):**

```csharp
        var trans = new Transaction(db);

        _ = trans.Db.StringIncrementAsync("counter:1", 1);
        _ = trans.Db.StringIncrementAsync("counter:2", 2);
        _ = trans.Db.StringIncrementAsync("counter:3", 3);

        trans.Execute();

        var resp4 = db.StringGet("counter:1");
        Console.WriteLine(resp4); // >>> 1

        var resp5 = db.StringGet("counter:2");
        Console.WriteLine(resp5); // >>> 2

        var resp6 = db.StringGet("counter:3");
        Console.WriteLine(resp6);  // >>> 3
```

**Go:**

```go
	trans := rdb.TxPipeline()

	trans.IncrBy(ctx, "counter:1", 1)
	trans.IncrBy(ctx, "counter:2", 2)
	trans.IncrBy(ctx, "counter:3", 3)

	cmds, err = trans.Exec(ctx)

	for _, c := range cmds {
		fmt.Println(c.(*redis.IntCmd).Val())
	}
	// >>> 1
	// >>> 2
	// >>> 3
```

**Java (Synchronous - Jedis):**

```java
        try ( AbstractTransaction trans = jedis.multi()) {

           trans.incrBy("counter:1", 1);
           trans.incrBy("counter:2", 2);
           trans.incrBy("counter:3", 3);

           trans.exec();
        }
        System.out.println(jedis.get("counter:1")); // >>> 1
        System.out.println(jedis.get("counter:2")); // >>> 2
        System.out.println(jedis.get("counter:3")); // >>> 3
```

**Python:**

```python
"""
Code samples for vector database quickstart pages:
    https://redis.io/docs/latest/develop/get-started/vector-database/
"""
import redis

r = redis.Redis(decode_responses=True)

pipe = r.pipeline()

for i in range(5):
    pipe.set(f"seat:{i}", f"#{i}")

set_5_result = pipe.execute()
print(set_5_result)  # >>> [True, True, True, True, True]

pipe = r.pipeline()

# "Chain" pipeline commands together.
get_3_result = pipe.get("seat:0").get("seat:3").get("seat:4").execute()
print(get_3_result)  # >>> ['#0', '#3', '#4']

r.set("shellpath", "/usr/syscmds/")

with r.pipeline() as pipe:
    # Repeat until successful.
    while True:
        try:
            # Watch the key we are about to change.
            pipe.watch("shellpath")

            # The pipeline executes commands directly (instead of
            # buffering them) from immediately after the `watch()`
            # call until we begin the transaction.
            current_path = pipe.get("shellpath")
            new_path = current_path + ":/usr/mycmds/"

            # Start the transaction, which will enable buffering
            # again for the remaining commands.
            pipe.multi()

            pipe.set("shellpath", new_path)

            pipe.execute()

            # The transaction succeeded, so break out of the loop.
            break
        except redis.WatchError:
            # The transaction failed, so continue with the next attempt.
            continue

get_path_result = r.get("shellpath")
print(get_path_result)  # >>> '/usr/syscmds/:/usr/mycmds/'

r.set("shellpath", "/usr/syscmds/")


def watched_sequence(pipe):
    current_path = pipe.get("shellpath")
    new_path = current_path + ":/usr/mycmds/"

    pipe.multi()

    pipe.set("shellpath", new_path)


trans_result = r.transaction(watched_sequence, "shellpath")
print(trans_result)  # True

get_path_result = r.get("shellpath")
print(get_path_result)  # >>> '/usr/syscmds/:/usr/mycmds/'

```

**Rust (Synchronous):**

```rust
        match redis::pipe()
            .atomic()
            .incr("counter:1", 1)
            .incr("counter:2", 2)
            .incr("counter:3", 3)
            .exec(&mut r)
        {
            Ok(_) => {
                println!("Transaction executed successfully");
            },
            Err(e) => {
                println!("Error executing transaction: {e}");
                return;
            }
        };
```



## Watch keys for changes

Redis supports *optimistic locking* to avoid inconsistent updates
to different keys. The basic idea is to watch for changes to any
keys that you use in a transaction while you are are processing the
updates. If the watched keys do change, you must restart the updates
with the latest data from the keys. See
[Transactions]()
for more information about optimistic locking.

The approach to optimistic locking that other clients use
(adding the [`WATCH`]() command
explicitly to a transaction) doesn't work well with the
[multiplexing]()
system that `NRedisStack` uses.
Instead, `NRedisStack` relies on conditional execution of commands
to get a similar effect.

Use the `AddCondition()` method to abort a transaction if a particular
condition doesn't hold throughout its execution. If the transaction
does abort then the `Execute()` method returns a `false` value,
but otherwise returns `true`.

For example, the `KeyNotExists` condition aborts the transaction
if a specified key exists or is added by another client while the
transaction executes:

#### Code Examples

**Redis CLI:**

```

```

**Available in:** Redis CLI, C# (Synchronous), Go, Java (Synchronous - Jedis), Python, Rust (Synchronous)

**C# (Synchronous):**

```csharp
        var watchedTrans = new Transaction(db);

        watchedTrans.AddCondition(Condition.KeyNotExists("customer:39182"));

        _ = watchedTrans.Db.HashSetAsync(
            "customer:39182",
            [
                new("name", "David"),
                new("age", "27")
            ]
        );

        bool succeeded = watchedTrans.Execute();
        Console.WriteLine(succeeded); // >>> true
```

**Go:**

```go
	// Set initial value of `shellpath`.
	rdb.Set(ctx, "shellpath", "/usr/syscmds/", 0)

	const maxRetries = 1000

	// Retry if the key has been changed.
	for i := 0; i < maxRetries; i++ {
		err := rdb.Watch(ctx,
			func(tx *redis.Tx) error {
				currentPath, err := rdb.Get(ctx, "shellpath").Result()
				newPath := currentPath + ":/usr/mycmds/"

				_, err = tx.TxPipelined(ctx, func(pipe redis.Pipeliner) error {
					pipe.Set(ctx, "shellpath", newPath, 0)
					return nil
				})

				return err
			},
			"shellpath",
		)

		if err == nil {
			// Success.
			break
		} else if err == redis.TxFailedErr {
			// Optimistic lock lost. Retry the transaction.
			continue
		} else {
			// Panic for any other error.
			panic(err)
		}
	}

	fmt.Println(rdb.Get(ctx, "shellpath").Val())
	// >>> /usr/syscmds/:/usr/mycmds/
```

**Java (Synchronous - Jedis):**

```java
        // Set initial value of `shellpath`.
        jedis.set("shellpath", "/usr/syscmds/");

        // Start the transaction and watch the key we are about to update.
        try (AbstractTransaction trans = jedis.transaction(false)) { // create a Transaction object without sending MULTI command
            trans.watch("shellpath"); // send WATCH command(s)
            trans.multi(); // send MULTI command

            String currentPath = jedis.get("shellpath");
            String newPath = currentPath + ":/usr/mycmds/";

            // Commands added to the `trans` object
            // will be buffered until `trans.exec()` is called.
            Response<String> setResult = trans.set("shellpath", newPath);
            List<Object> transResults = trans.exec();

            // The `exec()` call returns null if the transaction failed.
            if (transResults != null) {
                // Responses are available if the transaction succeeded.
                System.out.println(setResult.get()); // >>> OK

                // You can also get the results from the list returned by
                // `trans.exec()`.
                for (Object item: transResults) {
                    System.out.println(item);
                }
                // >>> OK

                System.out.println(jedis.get("shellpath"));
                // >>> /usr/syscmds/:/usr/mycmds/
            }
        }
```

**Python:**

```python
r.set("shellpath", "/usr/syscmds/")

with r.pipeline() as pipe:
    # Repeat until successful.
    while True:
        try:
            # Watch the key we are about to change.
            pipe.watch("shellpath")

            # The pipeline executes commands directly (instead of
            # buffering them) from immediately after the `watch()`
            # call until we begin the transaction.
            current_path = pipe.get("shellpath")
            new_path = current_path + ":/usr/mycmds/"

            # Start the transaction, which will enable buffering
            # again for the remaining commands.
            pipe.multi()

            pipe.set("shellpath", new_path)

            pipe.execute()

            # The transaction succeeded, so break out of the loop.
            break
        except redis.WatchError:
            # The transaction failed, so continue with the next attempt.
            continue

get_path_result = r.get("shellpath")
print(get_path_result)  # >>> '/usr/syscmds/:/usr/mycmds/'
```

**Rust (Synchronous):**

```rust
        let key = "shellpath";
        let _: () = r.set(key, "/usr/syscmds/").unwrap();
        
        let Ok(_,): Result<((),), _> = redis::transaction(&mut r, &[key], |r, pipe| {
            let mut path: String = r.get(key).unwrap();
            path.push_str(":/usr/mycmds/");
            pipe.set(key, path).query(r)
        }) else {
            println!("Error executing transaction");
            return;
        };

        match r.get("shellpath") {
            Ok(res) => {
                let res: String = res;
                println!("{res}");
                // >>> /usr/syscmds/:/usr/mycmds/
            },
            Err(e) => {
                println!("Error getting shellpath: {e}");
                return;
            }
        };
```



You can also use a `When` condition on certain individual commands to
specify that they only execute when a certain condition holds
(for example, the command does not change an existing key).
See
[Conditional execution]()
for a full description of transaction and command conditions.
