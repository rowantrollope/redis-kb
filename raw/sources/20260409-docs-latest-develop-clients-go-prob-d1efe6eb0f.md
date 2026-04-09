---
title: Probabilistic data types
url: https://redis.io/docs/latest/develop/clients/go/prob/
retrieved_utc: '2026-04-09T20:45:57.555019+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/develop/clients/go/prob/index.html.md
---

# Probabilistic data types

```json metadata
{
  "title": "Probabilistic data types",
  "description": "Learn how to use approximate calculations with Redis.",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "tableOfContents": {"sections":[{"children":[{"id":"set-membership","title":"Set membership"},{"id":"set-cardinality","title":"Set cardinality"}],"id":"set-operations","title":"Set operations"},{"children":[{"id":"frequency","title":"Frequency"},{"id":"quantiles","title":"Quantiles"},{"id":"ranking","title":"Ranking"}],"id":"statistics","title":"Statistics"}]}

,
  "codeExamples": [{"codetabsId":"home_prob_dts-stepbloom","description":"Set membership: Use Bloom filter to efficiently track item presence with minimal memory overhead","difficulty":"beginner","id":"bloom","languages":[{"clientId":"go-redis","clientName":"go-redis","id":"Go","langId":"go","panelId":"panel_Go_home_prob_dts-stepbloom"}]},{"codetabsId":"home_prob_dts-stepcuckoo","description":"Set membership with deletion: Use Cuckoo filter for membership testing with support for item removal","difficulty":"beginner","id":"cuckoo","languages":[{"clientId":"go-redis","clientName":"go-redis","id":"Go","langId":"go","panelId":"panel_Go_home_prob_dts-stepcuckoo"}]},{"codetabsId":"home_prob_dts-stephyperloglog","description":"Set cardinality: Estimate distinct item count using HyperLogLog with minimal memory usage","difficulty":"beginner","id":"hyperloglog","languages":[{"clientId":"go-redis","clientName":"go-redis","id":"Go","langId":"go","panelId":"panel_Go_home_prob_dts-stephyperloglog"}]},{"codetabsId":"home_prob_dts-stepcms","description":"Frequency estimation: Track approximate item frequencies using Count-min sketch with configurable accuracy","difficulty":"intermediate","id":"cms","languages":[{"clientId":"go-redis","clientName":"go-redis","id":"Go","langId":"go","panelId":"panel_Go_home_prob_dts-stepcms"}]},{"codetabsId":"home_prob_dts-steptdigest","description":"Quantile estimation: Calculate percentiles and quantiles from data streams using t-digest","difficulty":"intermediate","id":"tdigest","languages":[{"clientId":"go-redis","clientName":"go-redis","id":"Go","langId":"go","panelId":"panel_Go_home_prob_dts-steptdigest"}]},{"codetabsId":"home_prob_dts-steptopk","description":"Ranking by frequency: Track top k most frequent items in a data stream using Top-K","difficulty":"intermediate","id":"topk","languages":[{"clientId":"go-redis","clientName":"go-redis","id":"Go","langId":"go","panelId":"panel_Go_home_prob_dts-steptopk"}]}]
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


Redis supports several
[probabilistic data types]()
that let you calculate values approximately rather than exactly.
The types fall into two basic categories:

-   [Set operations](#set-operations): These types let you calculate (approximately)
    the number of items in a set of distinct values, and whether or not a given value is
    a member of a set.
-   [Statistics](#statistics): These types give you an approximation of
    statistics such as the quantiles, ranks, and frequencies of numeric data points in
    a list.

To see why these approximate calculations would be useful, consider the task of
counting the number of distinct IP addresses that access a website in one day.

Assuming that you already have code that supplies you with each IP
address as a string, you could record the addresses in Redis using
a [set]():

```go
rdb.SAdd(ctx, "ip_tracker", new_ip_address)
```

The set can only contain each key once, so if the same address
appears again during the day, the new instance will not change
the set. At the end of the day, you could get the exact number of
distinct addresses using the `scard()` function:

```go
num_distinct_ips, err := rdb.SCard(ctx, "ip_tracker").Result()
```

This approach is simple, effective, and precise but if your website
is very busy, the `ip_tracker` set could become very large and consume
a lot of memory.

You would probably round the count of distinct IP addresses to the
nearest thousand or more to deliver the usage statistics, so
getting it exactly right is not important. It would be useful
if you could trade off some accuracy in exchange for lower memory
consumption. The probabilistic data types provide exactly this kind of
trade-off. Specifically, you can count the approximate number of items in a
set using the [HyperLogLog](#set-cardinality) data type, as described below.

In general, the probabilistic data types let you perform approximations with a
bounded degree of error that have much lower memory consumption or execution
time than the equivalent precise calculations.

## Set operations

Redis supports the following approximate set operations:

-   [Membership](#set-membership): The
    [Bloom filter]() and
    [Cuckoo filter]()
    data types let you track whether or not a given item is a member of a set.
-   [Cardinality](#set-cardinality): The
    [HyperLogLog]()
    data type gives you an approximate value for the number of items in a set, also
    known as the *cardinality* of the set.

The sections below describe these operations in more detail.

### Set membership

[Bloom filter]() and
[Cuckoo filter]()
objects provide a set membership operation that lets you track whether or not a
particular item has been added to a set. These two types provide different
trade-offs for memory usage and speed, so you can select the best one for your
use case. Note that for both types, there is an asymmetry between presence and
absence of items in the set. If an item is reported as absent, then it is definitely
absent, but if it is reported as present, then there is a small chance it may really be
absent.

Instead of storing strings directly, like a [set](),
a Bloom filter records the presence or absence of the
[hash value](https://en.wikipedia.org/wiki/Hash_function) of a string.
This gives a very compact representation of the
set's membership with a fixed memory size, regardless of how many items you
add. The following example adds some names to a Bloom filter representing
a list of users and checks for the presence or absence of users in the list.

#### Code Examples

**Redis CLI:**

```

```

**Available in:** Redis CLI, C# (Synchronous), Go, Java (Synchronous - Jedis), Python

**C# (Synchronous):**

```csharp
        bool[] res1 = db.BF().MAdd(
            "recorded_users", "andy", "cameron", "david", "michelle"
        );
        Console.WriteLine(string.Join(", ", res1));
        // >>> true, true, true, true

        bool res2 = db.BF().Exists("recorded_users", "cameron");
        Console.WriteLine(res2); // >>> true

        bool res3 = db.BF().Exists("recorded_users", "kaitlyn");
        Console.WriteLine(res3); // >>> false
```

**Go:**

```go
	res1, err := rdb.BFMAdd(
		ctx,
		"recorded_users",
		"andy", "cameron", "david", "michelle",
	).Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(res1) // >>> [true true true true]

	res2, err := rdb.BFExists(ctx,
		"recorded_users", "cameron",
	).Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(res2) // >>> true

	res3, err := rdb.BFExists(ctx, "recorded_users", "kaitlyn").Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(res3) // >>> false
```

**Java (Synchronous - Jedis):**

```java
        List<Boolean> res1 = jedis.bfMAdd(
            "recorded_users",
            "andy", "cameron", "david", "michelle"
        );
        System.out.println(res1);  // >>> [true, true, true, true]

        boolean res2 = jedis.bfExists("recorded_users", "cameron");
        System.out.println(res2);  // >>> true

        boolean res3 = jedis.bfExists("recorded_users", "kaitlyn");
        System.out.println(res3);  // >>> false
```

**Python:**

```python
res1 = r.bf().madd("recorded_users", "andy", "cameron", "david", "michelle")
print(res1)  # >>> [1, 1, 1, 1]

res2 = r.bf().exists("recorded_users", "cameron")
print(res2)  # >>> 1

res3 = r.bf().exists("recorded_users", "kaitlyn")
print(res3)  # >>> 0
```



A Cuckoo filter has similar features to a Bloom filter, but also supports
a deletion operation to remove hashes from a set, as shown in the example below.

#### Code Examples

**Redis CLI:**

```

```

**Available in:** Redis CLI, C# (Synchronous), Go, Java (Synchronous - Jedis), Python

**C# (Synchronous):**

```csharp
        bool res4 = db.CF().Add("other_users", "paolo");
        Console.WriteLine(res4); // >>> true

        bool res5 = db.CF().Add("other_users", "kaitlyn");
        Console.WriteLine(res5); // >>> true

        bool res6 = db.CF().Add("other_users", "rachel");
        Console.WriteLine(res6); // >>> true

        bool[] res7 = db.CF().MExists("other_users", "paolo", "rachel", "andy");
        Console.WriteLine(string.Join(", ", res7));
        // >>> true, true, false

        bool res8 = db.CF().Del("other_users", "paolo");
        Console.WriteLine(res8); // >>> true

        bool res9 = db.CF().Exists("other_users", "paolo");
        Console.WriteLine(res9); // >>> false
```

**Go:**

```go
	res4, err := rdb.CFAdd(ctx, "other_users", "paolo").Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(res4) // >>> true

	res5, err := rdb.CFAdd(ctx, "other_users", "kaitlyn").Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(res5) // >>> true

	res6, err := rdb.CFAdd(ctx, "other_users", "rachel").Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(res6) // >>> true

	res7, err := rdb.CFMExists(ctx,
		"other_users", "paolo", "rachel", "andy",
	).Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(res7) // >>> [true true false]

	res8, err := rdb.CFDel(ctx, "other_users", "paolo").Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(res8) // >>> true

	res9, err := rdb.CFExists(ctx, "other_users", "paolo").Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(res9) // >>> false
```

**Java (Synchronous - Jedis):**

```java
        boolean res4 = jedis.cfAdd("other_users", "paolo");
        System.out.println(res4);  // >>> true

        boolean res5 = jedis.cfAdd("other_users", "kaitlyn");
        System.out.println(res5);  // >>> true

        boolean res6 = jedis.cfAdd("other_users", "rachel");
        System.out.println(res6);  // >>> true

        List<Boolean> res7 = jedis.cfMExists(
            "other_users",
            "paolo", "rachel", "andy"
        );
        System.out.println(res7);  // >>> [true, true, false]

        boolean res8 = jedis.cfDel("other_users", "paolo");
        System.out.println(res8);  // >>> true

        boolean res9 = jedis.cfExists("other_users", "paolo");
        System.out.println(res9);  // >>> false
```

**Python:**

```python
res4 = r.cf().add("other_users", "paolo")
print(res4)  # >>> 1

res5 = r.cf().add("other_users", "kaitlyn")
print(res5)  # >>> 1

res6 = r.cf().add("other_users", "rachel")
print(res6)  # >>> 1

res7 = r.cf().mexists("other_users", "paolo", "rachel", "andy")
print(res7)  # >>> [1, 1, 0]

res8 = r.cf().delete("other_users", "paolo")
print(res8)  # >>> 1

res9 = r.cf().exists("other_users", "paolo")
print(res9)  # >>> 0
```



Which of these two data types you choose depends on your use case.
Bloom filters are generally faster than Cuckoo filters when adding new items,
and also have better memory usage. Cuckoo filters are generally faster
at checking membership and also support the delete operation. See the
[Bloom filter]() and
[Cuckoo filter]()
reference pages for more information and comparison between the two types.

### Set cardinality

A [HyperLogLog]()
object calculates the cardinality of a set. As you add
items, the HyperLogLog tracks the number of distinct set members but
doesn't let you retrieve them or query which items have been added.
You can also merge two or more HyperLogLogs to find the cardinality of the
[union](https://en.wikipedia.org/wiki/Union_(set_theory)) of the sets they
represent.

#### Code Examples

**Redis CLI:**

```

```

**Available in:** Redis CLI, C# (Synchronous), Go, Java (Synchronous - Jedis), Python

**C# (Synchronous):**

```csharp
        bool res10 = db.HyperLogLogAdd(
            "group:1",
            ["andy", "cameron", "david"]
        );
        Console.WriteLine(res10); // >>> true

        long res11 = db.HyperLogLogLength("group:1");
        Console.WriteLine(res11); // >>> 3

        bool res12 = db.HyperLogLogAdd(
            "group:2",
            ["kaitlyn", "michelle", "paolo", "rachel"]
        );
        Console.WriteLine(res12); // >>> true

        long res13 = db.HyperLogLogLength("group:2");
        Console.WriteLine(res13); // >>> 4

        db.HyperLogLogMerge(
            "both_groups",
            "group:1", "group:2"
        );

        long res14 = db.HyperLogLogLength("both_groups");
        Console.WriteLine(res14); // >>> 7
```

**Go:**

```go
	res10, err := rdb.PFAdd(
		ctx,
		"group:1",
		"andy", "cameron", "david",
	).Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(res10) // >>> 1

	res11, err := rdb.PFCount(ctx, "group:1").Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(res11) // >>> 3

	res12, err := rdb.PFAdd(ctx,
		"group:2",
		"kaitlyn", "michelle", "paolo", "rachel",
	).Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(res12) // >>> 1

	res13, err := rdb.PFCount(ctx, "group:2").Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(res13) // >>> 4

	res14, err := rdb.PFMerge(
		ctx,
		"both_groups",
		"group:1", "group:2",
	).Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(res14) // >>> OK

	res15, err := rdb.PFCount(ctx, "both_groups").Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(res15) // >>> 7
```

**Java (Synchronous - Jedis):**

```java
        long res10 = jedis.pfadd("group:1", "andy", "cameron", "david");
        System.out.println(res10);  // >>> 1

        long res11 = jedis.pfcount("group:1");
        System.out.println(res11);  // >>> 3

        long res12 = jedis.pfadd(
            "group:2",
            "kaitlyn", "michelle", "paolo", "rachel"
        );
        System.out.println(res12);  // >>> 1

        long res13 = jedis.pfcount("group:2");
        System.out.println(res13);  // >>> 4

        String res14 = jedis.pfmerge("both_groups", "group:1", "group:2");
        System.out.println(res14);  // >>> OK

        long res15 = jedis.pfcount("both_groups");
        System.out.println(res15);  // >>> 7
```

**Python:**

```python
res10 = r.pfadd("group:1", "andy", "cameron", "david")
print(res10)  # >>> 1

res11 = r.pfcount("group:1")
print(res11)  # >>> 3

res12 = r.pfadd("group:2", "kaitlyn", "michelle", "paolo", "rachel")
print(res12)  # >>> 1

res13 = r.pfcount("group:2")
print(res13)  # >>> 4

res14 = r.pfmerge("both_groups", "group:1", "group:2")
print(res14)  # >>> True

res15 = r.pfcount("both_groups")
print(res15)  # >>> 7
```



The main benefit that HyperLogLogs offer is their very low
memory usage. They can count up to 2^64 items with less than
1% standard error using a maximum 12KB of memory. This makes
them very useful for counting things like the total of distinct
IP addresses that access a website or the total of distinct
bank card numbers that make purchases within a day.

## Statistics

Redis supports several approximate statistical calculations
on numeric data sets:

-   [Frequency](#frequency): The
    [Count-min sketch]()
    data type lets you find the approximate frequency of a labeled item in a data stream.
-   [Quantiles](#quantiles): The
    [t-digest]()
    data type estimates the quantile of a query value in a data stream.
-   [Ranking](#ranking): The
    [Top-K]() data type
    estimates the ranking of labeled items by frequency in a data stream.

The sections below describe these operations in more detail.

### Frequency

A [Count-min sketch]()
(CMS) object keeps count of a set of related items represented by
string labels. The count is approximate, but you can specify
how close you want to keep the count to the true value (as a fraction)
and the acceptable probability of failing to keep it in this
desired range. For example, you can request that the count should
stay within 0.1% of the true value and have a 0.05% probability
of going outside this limit. The example below shows how to create
a Count-min sketch object, add data to it, and then query it.

#### Code Examples

**Redis CLI:**

```

```

**Available in:** Redis CLI, C# (Synchronous), Go, Java (Synchronous - Jedis), Python

**C# (Synchronous):**

```csharp
        // Specify that you want to keep the counts within 0.01
        // (0.1%) of the true value with a 0.005 (0.05%) chance
        // of going outside this limit.
        bool res15 = db.CMS().InitByProb("items_sold", 0.01, 0.005);
        Console.WriteLine(res15); // >>> true

        long[] res16 = db.CMS().IncrBy(
            "items_sold",
            [
                new("bread", 300),
                new("tea", 200),
                new("coffee", 200),
                new("beer", 100)
            ]
        );
        Console.WriteLine(string.Join(", ", res16));
        // >>> 300, 200, 200, 100

        long[] res17 = db.CMS().IncrBy(
            "items_sold",
            [
                new("bread", 100),
                new("coffee", 150)
            ]
        );
        Console.WriteLine(string.Join(", ", res17));
        // >>> 400, 350

        long[] res18 = db.CMS().Query(
            "items_sold",
            "bread", "tea", "coffee", "beer"
        );
        Console.WriteLine(string.Join(", ", res18));
        // >>> 400, 200, 350, 100
```

**Go:**

```go
	// Specify that you want to keep the counts within 0.01
	// (0.1%) of the true value with a 0.005 (0.05%) chance
	// of going outside this limit.
	res16, err := rdb.CMSInitByProb(ctx, "items_sold", 0.01, 0.005).Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(res16) // >>> OK

	// The parameters for `CMSIncrBy()` are two lists. The count
	// for each item in the first list is incremented by the
	// value at the same index in the second list.
	res17, err := rdb.CMSIncrBy(ctx, "items_sold",
		"bread", 300,
		"tea", 200,
		"coffee", 200,
		"beer", 100,
	).Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(res17) // >>> [300 200 200 100]

	res18, err := rdb.CMSIncrBy(ctx, "items_sold",
		"bread", 100,
		"coffee", 150,
	).Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(res18) // >>> [400 350]

	res19, err := rdb.CMSQuery(ctx,
		"items_sold",
		"bread", "tea", "coffee", "beer",
	).Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(res19) // >>> [400 200 350 100]
```

**Java (Synchronous - Jedis):**

```java
        // Specify that you want to keep the counts within 0.01
        // (0.1%) of the true value with a 0.005 (0.05%) chance
        // of going outside this limit.
        String res16 = jedis.cmsInitByProb("items_sold", 0.01, 0.005);
        System.out.println(res16);  // >>> OK

        Map<String, Long> firstItemIncrements = new HashMap<>();
        firstItemIncrements.put("bread", 300L);
        firstItemIncrements.put("tea", 200L);
        firstItemIncrements.put("coffee", 200L);
        firstItemIncrements.put("beer", 100L);

        List<Long> res17 = jedis.cmsIncrBy("items_sold",
            firstItemIncrements
        );
        res17.sort(null);
        System.out.println();  // >>> [100, 200, 200, 300]

        Map<String, Long> secondItemIncrements = new HashMap<>();
        secondItemIncrements.put("bread", 100L);
        secondItemIncrements.put("coffee", 150L);

        List<Long> res18 = jedis.cmsIncrBy("items_sold",
            secondItemIncrements
        );
        res18.sort(null);
        System.out.println(res18);  // >>> [350, 400]

        List<Long> res19 = jedis.cmsQuery(
            "items_sold",
            "bread", "tea", "coffee", "beer"
        );
        res19.sort(null);
        System.out.println(res19);  // >>> [100, 200, 350, 400]
```

**Python:**

```python
# Specify that you want to keep the counts within 0.01
# (1%) of the true value with a 0.005 (0.5%) chance
# of going outside this limit.
res16 = r.cms().initbyprob("items_sold", 0.01, 0.005)
print(res16)  # >>> True

# The parameters for `incrby()` are two lists. The count
# for each item in the first list is incremented by the
# value at the same index in the second list.
res17 = r.cms().incrby(
    "items_sold",
    ["bread", "tea", "coffee", "beer"],  # Items sold
    [300, 200, 200, 100]
)
print(res17)  # >>> [300, 200, 200, 100]

res18 = r.cms().incrby(
    "items_sold",
    ["bread", "coffee"],
    [100, 150]
)
print(res18)  # >>> [400, 350]

res19 = r.cms().query("items_sold", "bread", "tea", "coffee", "beer")
print(res19)  # >>> [400, 200, 350, 100]
```



The advantage of using a CMS over keeping an exact count with a
[sorted set]()
is that that a CMS has very low and fixed memory usage, even for
large numbers of items. Use CMS objects to keep daily counts of
items sold, accesses to individual web pages on your site, and
other similar statistics.

### Quantiles

A [quantile](https://en.wikipedia.org/wiki/Quantile) is the value
below which a certain fraction of samples lie. For example, with
a set of measurements of people's heights, the quantile of 0.75 is
the value of height below which 75% of all people's heights lie.
[Percentiles](https://en.wikipedia.org/wiki/Percentile) are equivalent
to quantiles, except that the fraction is expressed as a percentage.

A [t-digest]()
object can estimate quantiles from a set of values added to it
without having to store each value in the set explicitly. This can
save a lot of memory when you have a large number of samples.

The example below shows how to add data samples to a t-digest
object and obtain some basic statistics, such as the minimum and
maximum values, the quantile of 0.75, and the
[cumulative distribution function](https://en.wikipedia.org/wiki/Cumulative_distribution_function)
(CDF), which is effectively the inverse of the quantile function. It also
shows how to merge two or more t-digest objects to query the combined
data set.

#### Code Examples

**Redis CLI:**

```

```

**Available in:** Redis CLI, C# (Synchronous), Go, Java (Synchronous - Jedis), Python

**C# (Synchronous):**

```csharp
        bool res19 = db.TDIGEST().Create("male_heights");
        Console.WriteLine(res19); // >>> true

        bool res20 = db.TDIGEST().Add(
            "male_heights",
            175.5, 181, 160.8, 152, 177, 196, 164
        );
        Console.WriteLine(res20); // >>> true

        double res21 = db.TDIGEST().Min("male_heights");
        Console.WriteLine(res21); // >>> 152.0

        double res22 = db.TDIGEST().Max("male_heights");
        Console.WriteLine(res22); // >>> 196.0

        double[] res23 = db.TDIGEST().Quantile("male_heights", 0.75);
        Console.WriteLine(string.Join(", ", res23)); // >>> 181.0

        // Note that the CDF value for 181.0 is not exactly
        // 0.75. Both values are estimates.
        double[] res24 = db.TDIGEST().CDF("male_heights", 181.0);
        Console.WriteLine(string.Join(", ", res24)); // >>> 0.7857142857142857

        bool res25 = db.TDIGEST().Create("female_heights");
        Console.WriteLine(res25); // >>> true

        bool res26 = db.TDIGEST().Add(
            "female_heights",
            155.5, 161, 168.5, 170, 157.5, 163, 171
        );
        Console.WriteLine(res26); // >>> true

        double[] res27 = db.TDIGEST().Quantile("female_heights", 0.75);
        Console.WriteLine(string.Join(", ", res27)); // >>> 170.0

        // Specify 0 for `compression` and false for `override`.
        bool res28 = db.TDIGEST().Merge(
            "all_heights", 0, false, "male_heights", "female_heights"
        );
        Console.WriteLine(res28); // >>> true

        double[] res29 = db.TDIGEST().Quantile("all_heights", 0.75);
        Console.WriteLine(string.Join(", ", res29)); // >>> 175.5
```

**Go:**

```go
	res20, err := rdb.TDigestCreate(ctx, "male_heights").Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(res20) // >>> OK

	res21, err := rdb.TDigestAdd(ctx, "male_heights",
		175.5, 181, 160.8, 152, 177, 196, 164,
	).Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(res21) // >>> OK

	res22, err := rdb.TDigestMin(ctx, "male_heights").Result()
	if err != nil {
		panic(err)
	}
	fmt.Println(res22) // >>> 152

	res23, err := rdb.TDigestMax(ctx, "male_heights").Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(res23) // >>> 196

	res24, err := rdb.TDigestQuantile(ctx, "male_heights", 0.75).Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(res24) // >>> [181]

	// Note that the CDF value for 181 is not exactly
	// 0.75. Both values are estimates.
	res25, err := rdb.TDigestCDF(ctx, "male_heights", 181).Result()

	if err != nil {
		panic(err)
	}

	fmt.Printf("%.4f\n", res25[0]) // >>> 0.7857

	res26, err := rdb.TDigestCreate(ctx, "female_heights").Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(res26) // >>> OK

	res27, err := rdb.TDigestAdd(ctx, "female_heights",
		155.5, 161, 168.5, 170, 157.5, 163, 171,
	).Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(res27) // >>> OK

	res28, err := rdb.TDigestQuantile(ctx, "female_heights", 0.75).Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(res28) // >>> [170]

	res29, err := rdb.TDigestMerge(ctx, "all_heights",
		nil,
		"male_heights", "female_heights",
	).Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(res29) // >>> OK

	res30, err := rdb.TDigestQuantile(ctx, "all_heights", 0.75).Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(res30) // >>> [175.5]
```

**Java (Synchronous - Jedis):**

```java
        String res20 = jedis.tdigestCreate("male_heights");
        System.out.println(res20);  // >>> OK

        String res21 = jedis.tdigestAdd("male_heights", 
            175.5, 181, 160.8, 152, 177, 196, 164);
        System.out.println(res21);  // >>> OK

        double res22 = jedis.tdigestMin("male_heights");
        System.out.println(res22);  // >>> 152.0

        double res23 = jedis.tdigestMax("male_heights");
        System.out.println(res23);  // >>> 196.0

        List<Double> res24 = jedis.tdigestQuantile("male_heights", 0.75);
        System.out.println(res24);  // >>> [181.0]

        // Note that the CDF value for 181 is not exactly 0.75.
        // Both values are estimates.
        List<Double> res25 = jedis.tdigestCDF("male_heights", 181);
        System.out.println(res25);  // >>> [0.7857142857142857]

        String res26 = jedis.tdigestCreate("female_heights");
        System.out.println(res26);  // >>> OK

        String res27 = jedis.tdigestAdd("female_heights",
            155.5, 161, 168.5, 170, 157.5, 163, 171);
        System.out.println(res27);  // >>> OK

        List<Double> res28 = jedis.tdigestQuantile("female_heights", 0.75);
        System.out.println(res28);  // >>> [170.0]

        String res29 = jedis.tdigestMerge(
            "all_heights",
            "male_heights", "female_heights"
        );
        System.out.println(res29);  // >>> OK
        List<Double> res30 = jedis.tdigestQuantile("all_heights", 0.75);
        System.out.println(res30);  // >>> [175.5]
```

**Python:**

```python
res20 = r.tdigest().create("male_heights")
print(res20)  # >>> True

res21 = r.tdigest().add(
    "male_heights",
    [175.5, 181, 160.8, 152, 177, 196, 164]
)
print(res21)  # >>> OK

res22 = r.tdigest().min("male_heights")
print(res22)  # >>> 152.0

res23 = r.tdigest().max("male_heights")
print(res23)  # >>> 196.0

res24 = r.tdigest().quantile("male_heights", 0.75)
print(res24)  # >>> 181

# Note that the CDF value for 181 is not exactly
# 0.75. Both values are estimates.
res25 = r.tdigest().cdf("male_heights", 181)
print(res25)  # >>> [0.7857142857142857]

res26 = r.tdigest().create("female_heights")
print(res26)  # >>> True

res27 = r.tdigest().add(
    "female_heights",
    [155.5, 161, 168.5, 170, 157.5, 163, 171]
)
print(res27)  # >>> OK

res28 = r.tdigest().quantile("female_heights", 0.75)
print(res28)  # >>> [170]

res29 = r.tdigest().merge(
    "all_heights", 2, "male_heights", "female_heights"
)
print(res29)  # >>> OK

res30 = r.tdigest().quantile("all_heights", 0.75)
print(res30)  # >>> [175.5]
```



A t-digest object also supports several other related commands, such
as querying by rank. See the
[t-digest]()
reference for more information.

### Ranking

A [Top-K]()
object estimates the rankings of different labeled items in a data
stream according to frequency. For example, you could use this to
track the top ten most frequently-accessed pages on a website, or the
top five most popular items sold.

The example below adds several different items to a Top-K object
that tracks the top three items (this is the second parameter to
the `topk().reserve()` method). It also shows how to list the
top *k* items and query whether or not a given item is in the
list.

#### Code Examples

**Redis CLI:**

```

```

**Available in:** Redis CLI, C# (Synchronous), Go, Java (Synchronous - Jedis), Python

**C# (Synchronous):**

```csharp
        bool res30 = db.TOPK().Reserve("top_3_songs", 3, 7, 8, 0.9);
        Console.WriteLine(res30); // >>> true

        RedisResult[] res31 = db.TOPK().IncrBy(
            "top_3_songs",
            new Tuple<RedisValue, long>[] {
                new("Starfish Trooper", 3000),
                new("Only one more time", 1850),
                new("Rock me, Handel", 1325),
                new("How will anyone know?", 3890),
                new("Average lover", 4098),
                new("Road to everywhere", 770)
            }
        );
        Console.WriteLine(
            string.Join(
                ", ",
                string.Join(
                    ", ",
                    res31.Select(
                        r => $"{(r.IsNull ? "Null" : r)}"
                    )
                )
            )
        );
        // >>> Null, Null, Null, Rock me, Handel, Only one more time, Null

        RedisResult[] res32 = db.TOPK().List("top_3_songs");
        Console.WriteLine(
            string.Join(
                ", ",
                string.Join(
                    ", ",
                    res32.Select(
                        r => $"{(r.IsNull ? "Null" : r)}"
                    )
                )
            )
        );
        // >>> Average lover, How will anyone know?, Starfish Trooper

        bool[] res33 = db.TOPK().Query(
            "top_3_songs",
            "Starfish Trooper", "Road to everywhere"
        );
        Console.WriteLine(string.Join(", ", res33));
        // >>> true, false
```

**Go:**

```go
	// Create a TopK filter that keeps track of the top 3 items
	res31, err := rdb.TopKReserve(ctx, "top_3_songs", 3).Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(res31) // >>> OK

	// Add some items to the filter
	res32, err := rdb.TopKIncrBy(ctx,
		"top_3_songs",
		"Starfish Trooper", 3000,
		"Only one more time", 1850,
		"Rock me, Handel", 1325,
		"How will anyone know?", 3890,
		"Average lover", 4098,
		"Road to everywhere", 770,
	).Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(res32)
	// >>> [   Rock me, Handel Only one more time ]

	res33, err := rdb.TopKList(ctx, "top_3_songs").Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(res33)
	// >>> [Average lover How will anyone know? Starfish Trooper]

	// Query the count for specific items
	res34, err := rdb.TopKQuery(
		ctx,
		"top_3_songs",
		"Starfish Trooper", "Road to everywhere",
	).Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(res34) // >>> [true false]
```

**Java (Synchronous - Jedis):**

```java
        String res31 = jedis.topkReserve("top_3_songs", 3L, 2000L, 7L, 0.925D);
        System.out.println(res31);  // >>> OK

        Map<String, Long> songIncrements = new HashMap<>();
        songIncrements.put("Starfish Trooper", 3000L);
        songIncrements.put("Only one more time", 1850L);
        songIncrements.put("Rock me, Handel", 1325L);
        songIncrements.put("How will anyone know?", 3890L);
        songIncrements.put("Average lover", 4098L);
        songIncrements.put("Road to everywhere", 770L);

        List<String> res32 = jedis.topkIncrBy("top_3_songs",
            songIncrements
        );
        System.out.println(res32);
        // >>> [null, null, null, null, null, Rock me, Handel]

        List<String> res33 = jedis.topkList("top_3_songs");
        System.out.println(res33);
        // >>> [Average lover, How will anyone know?, Starfish Trooper]

        List<Boolean> res34 = jedis.topkQuery("top_3_songs",
            "Starfish Trooper", "Road to everywhere"
        );
        System.out.println(res34);
        // >>> [true, false]
```

**Python:**

```python
# The `reserve()` method creates the Top-K object with
# the given key. The parameters are the number of items
# in the ranking and values for `width`, `depth`, and
# `decay`, described in the Top-K reference page.
res31 = r.topk().reserve("top_3_songs", 3, 7, 8, 0.9)
print(res31)  # >>> True

# The parameters for `incrby()` are two lists. The count
# for each item in the first list is incremented by the
# value at the same index in the second list.
res32 = r.topk().incrby(
    "top_3_songs",
    [
        "Starfish Trooper",
        "Only one more time",
        "Rock me, Handel",
        "How will anyone know?",
        "Average lover",
        "Road to everywhere"
    ],
    [
        3000,
        1850,
        1325,
        3890,
        4098,
        770
    ]
)
print(res32)
# >>> [None, None, None, 'Rock me, Handel', 'Only one more time', None]

res33 = r.topk().list("top_3_songs")
print(res33)
# >>> ['Average lover', 'How will anyone know?', 'Starfish Trooper']

res34 = r.topk().query(
    "top_3_songs", "Starfish Trooper", "Road to everywhere"
)
print(res34)  # >>> [1, 0]
```


