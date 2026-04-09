---
title: ZADD
url: https://redis.io/docs/latest/commands/zadd/
retrieved_utc: '2026-04-09T20:45:38.376364+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/zadd/index.html.md
---

# ZADD

```json metadata
{
  "title": "ZADD",
  "description": "Adds one or more members to a sorted set, or updates their scores. Creates the key if it doesn't exist.",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"display_text":"key","key_spec_index":0,"name":"key","type":"key"},{"arguments":[{"display_text":"nx","name":"nx","token":"NX","type":"pure-token"},{"display_text":"xx","name":"xx","token":"XX","type":"pure-token"}],"name":"condition","optional":true,"since":"3.0.2","type":"oneof"},{"arguments":[{"display_text":"gt","name":"gt","token":"GT","type":"pure-token"},{"display_text":"lt","name":"lt","token":"LT","type":"pure-token"}],"name":"comparison","optional":true,"since":"6.2.0","type":"oneof"},{"display_text":"change","name":"change","optional":true,"since":"3.0.2","token":"CH","type":"pure-token"},{"display_text":"increment","name":"increment","optional":true,"since":"3.0.2","token":"INCR","type":"pure-token"},{"arguments":[{"display_text":"score","name":"score","type":"double"},{"display_text":"member","name":"member","type":"string"}],"multiple":true,"name":"data","type":"block"}],
  "syntax_fmt": "ZADD key [NX | XX] [GT | LT] [CH] [INCR] score member [score member\n  ...]",
  "complexity": "O(log(N)) for each item added, where N is the number of elements in the sorted set.",
  "group": "sorted-set",
  "command_flags": ["write","denyoom","fast"],
  "acl_categories": ["@write","@sortedset","@fast"],
  "since": "1.2.0",
  "arity": -4,
  "key_specs": [{"RW":true,"begin_search":{"spec":{"index":1},"type":"index"},"find_keys":{"spec":{"keystep":1,"lastkey":0,"limit":0},"type":"range"},"update":true}],
  "tableOfContents": {"sections":[{"id":"examples","title":"Examples"},{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": [{"codetabsId":"cmds_sorted_set-stepzadd","commands":[{"acl_categories":["@write","@sortedset","@fast"],"complexity":"O(log(N)","name":"ZADD"},{"acl_categories":["@read","@sortedset","@slow"],"complexity":"O(log(N)","name":"ZRANGE"}],"description":"Foundational: Add one or more members to a sorted set with scores using ZADD (creates sorted set if needed, updates scores if member exists)","difficulty":"beginner","id":"zadd","languages":[{"id":"redis-cli","panelId":"panel_redis-cli_cmds_sorted_set-stepzadd"},{"clientId":"redis-py","clientName":"redis-py","id":"Python","langId":"python","panelId":"panel_Python_cmds_sorted_set-stepzadd"},{"id":"Node-js","panelId":"panel_Nodejs_cmds_sorted_set-stepzadd"},{"clientId":"jedis","clientName":"Jedis","id":"Java-Sync","langId":"java","panelId":"panel_Java-Sync_cmds_sorted_set-stepzadd"},{"clientId":"go-redis","clientName":"go-redis","id":"Go","langId":"go","panelId":"panel_Go_cmds_sorted_set-stepzadd"},{"id":"dotnet-Sync","panelId":"panel_Csharp-Sync_cmds_sorted_set-stepzadd"}]}]
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

Adds all the specified members with the specified scores to the sorted set
stored at `key`.
It is possible to specify multiple score / member pairs.
If a specified member is already a member of the sorted set, the score is
updated and the element reinserted at the right position to ensure the correct
ordering.

If `key` does not exist, a new sorted set with the specified members as sole
members is created, like if the sorted set was empty. If the key exists but does not hold a sorted set, an error is returned.

The score values should be the string representation of a double precision floating point number. `+inf` and `-inf` values are valid values as well.

ZADD options
---

ZADD supports a list of options, specified after the name of the key and before
the first score argument. Options are:

* **XX**: Only update elements that already exist. Don't add new elements.
* **NX**: Only add new elements. Don't update already existing elements.
* **LT**: Only update existing elements if the new score is **less than** the current score. This flag doesn't prevent adding new elements.
* **GT**: Only update existing elements if the new score is **greater than** the current score. This flag doesn't prevent adding new elements.
* **CH**: Modify the return value from the number of new elements added, to the total number of elements changed (CH is an abbreviation of *changed*). Changed elements are **new elements added** and elements already existing for which **the score was updated**. So elements specified in the command line having the same score as they had in the past are not counted. Note: normally the return value of `ZADD` only counts the number of new elements added.
* **INCR**: When this option is specified `ZADD` acts like [`ZINCRBY`](). Only one score-element pair can be specified in this mode.

Note: The **GT**, **LT** and **NX** options are mutually exclusive.

Range of integer scores that can be expressed precisely
---

Redis sorted sets use a *double 64-bit floating point number* to represent the score. In all the architectures we support, this is represented as an **IEEE 754 floating point number**, that is able to represent precisely integer numbers between `-(2^53)` and `+(2^53)` included. In more practical terms, all the integers between -9007199254740992 and 9007199254740992 are perfectly representable. Larger integers, or fractions, are internally represented in exponential form, so it is possible that you get only an approximation of the decimal number, or of the very big integer, that you set as score.

Sorted sets 101
---

Sorted sets are sorted by their score in an ascending way.
The same element only exists a single time, no repeated elements are
permitted. The score can be modified both by `ZADD` that will update the
element score, and as a side effect, its position on the sorted set, and
by [`ZINCRBY`]() that can be used in order to update the score relatively to its
previous value.

The current score of an element can be retrieved using the [`ZSCORE`]() command,
that can also be used to verify if an element already exists or not.

For an introduction to sorted sets, see the data types page on [sorted
sets][tdtss].

[tdtss]: /develop/data-types#sorted-sets

Elements with the same score
---

While the same element can't be repeated in a sorted set since every element
is unique, it is possible to add multiple different elements *having the same score*. When multiple elements have the same score, they are *ordered lexicographically* (they are still ordered by score as a first key, however, locally, all the elements with the same score are relatively ordered lexicographically).

The lexicographic ordering used is binary, it compares strings as array of bytes.

If the user inserts all the elements in a sorted set with the same score (for example 0), all the elements of the sorted set are sorted lexicographically, and range queries on elements are possible using the command [`ZRANGEBYLEX`]() (Note: it is also possible to query sorted sets by range of scores using [`ZRANGEBYSCORE`]()).

## Examples

#### Code Examples

Foundational: Add one or more members to a sorted set with scores using ZADD (creates sorted set if needed, updates scores if member exists)

**Difficulty:** Beginner

**Commands:** ZADD, ZRANGE

**Complexity:**
- ZADD: O(log(N)
- ZRANGE: O(log(N)

**Redis CLI:**

```
> ZADD myzset 1 "one"
(integer) 1
> ZADD myzset 1 "uno"
(integer) 1
> ZADD myzset 2 "two" 3 "three"
(integer) 2
> ZRANGE myzset 0 -1 WITHSCORES
1) "one"
2) "1"
3) "uno"
4) "1"
5) "two"
6) "2"
7) "three"
8) "3"
```

**Available in:** Redis CLI, C# (Synchronous), Go, Java (Synchronous - Jedis), JavaScript (Node.js), Python

**C# (Synchronous):**

```csharp
        bool zAddResult1 = db.SortedSetAdd("myzset", "one", 1);
        Console.WriteLine(zAddResult1); // >>> True

        bool zAddResult2 = db.SortedSetAdd("myzset", "uno", 1);
        Console.WriteLine(zAddResult2); // >>> True

        long zAddResult3 = db.SortedSetAdd(
            "myzset",
            [
                new("two", 2),
                new("three", 3)
            ]
        );
        Console.WriteLine(zAddResult3); // >>> 2

        SortedSetEntry[] zAddResult4 = db.SortedSetRangeByRankWithScores("myzset", 0, -1);
        Console.WriteLine($"{string.Join(", ", zAddResult4.Select(b => $"{b.Element}: {b.Score}"))}");
        // >>> one: 1, uno: 1, two: 2, three: 3
```

**Go:**

```go
	zAddResult1, err := rdb.ZAdd(ctx, "myzset",
		redis.Z{Member: "one", Score: 1},
	).Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(zAddResult1) // >>> 1

	zAddResult2, err := rdb.ZAdd(ctx, "myzset",
		redis.Z{Member: "uno", Score: 1},
	).Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(zAddResult2)

	zAddResult3, err := rdb.ZAdd(ctx, "myzset",
		redis.Z{Member: "two", Score: 2},
		redis.Z{Member: "three", Score: 3},
	).Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(zAddResult3) // >>> 2

	zAddResult4, err := rdb.ZRangeWithScores(ctx, "myzset", 0, -1).Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(zAddResult4) // >>> [{1 one} {1 uno} {2 two} {3 three}]
```

**Java (Synchronous - Jedis):**

```java
        Map<String, Double> zAddExampleParams = new HashMap<>();
        zAddExampleParams.put("one", 1.0);
        long zAddResult1 = jedis.zadd("myzset", zAddExampleParams);
        System.out.println(zAddResult1);    // >>> 1

        zAddExampleParams.clear();
        zAddExampleParams.put("uno", 1.0);
        long zAddResult2 = jedis.zadd("myzset", zAddExampleParams);
        System.out.println(zAddResult2);    // >>> 1

        zAddExampleParams.clear();
        zAddExampleParams.put("two", 2.0);
        zAddExampleParams.put("three", 3.0);
        long zAddResult3 = jedis.zadd("myzset", zAddExampleParams);
        System.out.println(zAddResult3);    // >>> 2

        List<Tuple> zAddResult4 = jedis.zrangeWithScores("myzset", new ZRangeParams(0, -1));

        for (Tuple item: zAddResult4) {
            System.out.println("Element: " + item.getElement() + ", Score: " + item.getScore());
        }
        // >>> Element: one, Score: 1.0
        // >>> Element: uno, Score: 1.0
        // >>> Element: two, Score: 2.0
        // >>> Element: three, Score: 3.0
```

**JavaScript (Node.js):**

```javascript
const val1 = await client.zAdd("myzset", [{ value: 'one', score: 1 }]);
console.log(val1);
// returns 1

const val2 = await client.zAdd("myzset", [{ value: 'uno', score: 1 }]);
console.log(val2);
// returns 1

const val3 = await client.zAdd("myzset", [{ value: 'two', score: 2 }, { value: 'three', score: 3 }]);
console.log(val3);
// returns 2

const val4 = await client.zRangeWithScores("myzset", 0, -1);
console.log(val4);
// returns [{value: 'one', score: 1}, {value: 'uno', score: 1}, {value: 'two', score: 2}, {value: 'three', score: 3} ]

```

**Python:**

```python
res = r.zadd("myzset", {"one": 1})
print(res)
# >>> 1

res = r.zadd("myzset", {"uno": 1})
print(res)
# >>> 1

res = r.zadd("myzset", {"two": 2, "three": 3})
print(res)
# >>> 2

res = r.zrange("myzset", 0, -1, withscores=True)
# >>> [('one', 1.0), ('uno', 1.0), ('two', 2.0), ('three', 3.0)]

```



Give these commands a try in the interactive console:


ZADD myzset 1 "one"
ZADD myzset 1 "uno"
ZADD myzset 2 "two" 3 "three"
ZRANGE myzset 0 -1 WITHSCORES


## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |

## Return information

**RESP2:**

Any of the following:
* [Nil reply](../../develop/reference/protocol-spec#bulk-strings): if the operation was aborted because of a conflict with one of the _XX/NX/LT/GT_ options.
* [Integer reply](../../develop/reference/protocol-spec#integers): the number of new members when the _CH_ option is not used.
* [Integer reply](../../develop/reference/protocol-spec#integers): the number of new or updated members when the _CH_ option is used.
* [Bulk string reply](../../develop/reference/protocol-spec#bulk-strings): the updated score of the member when the _INCR_ option is used.

**RESP3:**

Any of the following:
* [Null reply](../../develop/reference/protocol-spec#nulls): if the operation was aborted because of a conflict with one of the _XX/NX/LT/GT_ options.
* [Integer reply](../../develop/reference/protocol-spec#integers): the number of new members when the _CH_ option is not used.
* [Integer reply](../../develop/reference/protocol-spec#integers): the number of new or updated members when the _CH_ option is used.
* [Double reply](../../develop/reference/protocol-spec#doubles): the updated score of the member when the _INCR_ option is used.


