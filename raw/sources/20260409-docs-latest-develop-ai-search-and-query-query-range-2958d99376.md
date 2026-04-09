---
title: Range queries
url: https://redis.io/docs/latest/develop/ai/search-and-query/query/range/
retrieved_utc: '2026-04-09T20:45:52.443028+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/develop/ai/search-and-query/query/range/index.html.md
---

# Range queries

```json metadata
{
  "title": "Range queries",
  "description": "Perform numeric range queries",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "tableOfContents": {"sections":[{"id":"start-and-end-values","title":"Start and end values"},{"id":"result-set","title":"Result set"},{"id":"examples","title":"Examples"},{"id":"non-numeric-range-queries","title":"Non-numeric range queries"}]}

,
  "codeExamples": [{"codetabsId":"query_range-steprange1","commands":[{"complexity":"O(N)","name":"FT.SEARCH"}],"description":"Foundational: Query numeric fields with inclusive range syntax when you need to find documents with values between two bounds","difficulty":"beginner","id":"range1","languages":[{"id":"redis-cli","panelId":"panel_redis-cli_query_range-steprange1"},{"clientId":"redis-py","clientName":"redis-py","id":"Python","langId":"python","panelId":"panel_Python_query_range-steprange1"},{"id":"Node-js","panelId":"panel_Nodejs_query_range-steprange1"},{"clientId":"jedis","clientName":"Jedis","id":"Java-Sync","langId":"java","panelId":"panel_Java-Sync_query_range-steprange1"},{"clientId":"lettuce","clientName":"Lettuce","id":"Java-Async","langId":"java","panelId":"panel_Java-Async_query_range-steprange1"},{"clientId":"lettuce","clientName":"Lettuce","id":"Java-Reactive","langId":"java","panelId":"panel_Java-Reactive_query_range-steprange1"},{"clientId":"go-redis","clientName":"go-redis","id":"Go","langId":"go","panelId":"panel_Go_query_range-steprange1"},{"id":"dotnet-Sync","panelId":"panel_Csharp-Sync_query_range-steprange1"}]},{"codetabsId":"query_range-steprange2","commands":[{"complexity":"O(N)","name":"FT.SEARCH"}],"description":"Foundational: Query numeric fields using a FILTER clause when you need an alternative syntax for range queries with different query execution semantics","difficulty":"beginner","id":"range2","languages":[{"id":"redis-cli","panelId":"panel_redis-cli_query_range-steprange2"},{"clientId":"redis-py","clientName":"redis-py","id":"Python","langId":"python","panelId":"panel_Python_query_range-steprange2"},{"id":"Node-js","panelId":"panel_Nodejs_query_range-steprange2"},{"clientId":"jedis","clientName":"Jedis","id":"Java-Sync","langId":"java","panelId":"panel_Java-Sync_query_range-steprange2"},{"clientId":"lettuce","clientName":"Lettuce","id":"Java-Async","langId":"java","panelId":"panel_Java-Async_query_range-steprange2"},{"clientId":"lettuce","clientName":"Lettuce","id":"Java-Reactive","langId":"java","panelId":"panel_Java-Reactive_query_range-steprange2"},{"clientId":"go-redis","clientName":"go-redis","id":"Go","langId":"go","panelId":"panel_Go_query_range-steprange2"},{"id":"dotnet-Sync","panelId":"panel_Csharp-Sync_query_range-steprange2"}]},{"codetabsId":"query_range-steprange3","commands":[{"complexity":"O(N)","name":"FT.SEARCH"}],"description":"Open ranges: Query numeric fields with open ranges using infinity notation and exclusive bounds when you need to find documents above or below a threshold","difficulty":"intermediate","id":"range3","languages":[{"id":"redis-cli","panelId":"panel_redis-cli_query_range-steprange3"},{"clientId":"redis-py","clientName":"redis-py","id":"Python","langId":"python","panelId":"panel_Python_query_range-steprange3"},{"id":"Node-js","panelId":"panel_Nodejs_query_range-steprange3"},{"clientId":"jedis","clientName":"Jedis","id":"Java-Sync","langId":"java","panelId":"panel_Java-Sync_query_range-steprange3"},{"clientId":"lettuce","clientName":"Lettuce","id":"Java-Async","langId":"java","panelId":"panel_Java-Async_query_range-steprange3"},{"clientId":"lettuce","clientName":"Lettuce","id":"Java-Reactive","langId":"java","panelId":"panel_Java-Reactive_query_range-steprange3"},{"clientId":"go-redis","clientName":"go-redis","id":"Go","langId":"go","panelId":"panel_Go_query_range-steprange3"},{"id":"dotnet-Sync","panelId":"panel_Csharp-Sync_query_range-steprange3"}]},{"codetabsId":"query_range-steprange4","commands":[{"complexity":"O(N)","name":"FT.SEARCH"}],"description":"Sorting and pagination: Combine range queries with SORTBY and LIMIT to retrieve sorted results in pages when you need to handle large result sets efficiently","difficulty":"intermediate","id":"range4","languages":[{"id":"redis-cli","panelId":"panel_redis-cli_query_range-steprange4"},{"clientId":"redis-py","clientName":"redis-py","id":"Python","langId":"python","panelId":"panel_Python_query_range-steprange4"},{"id":"Node-js","panelId":"panel_Nodejs_query_range-steprange4"},{"clientId":"jedis","clientName":"Jedis","id":"Java-Sync","langId":"java","panelId":"panel_Java-Sync_query_range-steprange4"},{"clientId":"lettuce","clientName":"Lettuce","id":"Java-Async","langId":"java","panelId":"panel_Java-Async_query_range-steprange4"},{"clientId":"lettuce","clientName":"Lettuce","id":"Java-Reactive","langId":"java","panelId":"panel_Java-Reactive_query_range-steprange4"},{"clientId":"go-redis","clientName":"go-redis","id":"Go","langId":"go","panelId":"panel_Go_query_range-steprange4"},{"id":"dotnet-Sync","panelId":"panel_Csharp-Sync_query_range-steprange4"}]}]
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


A range query on a numeric field returns the values that are in between a given start and end value:

```
FT.SEARCH index "@field:[start end]"
```

You can also use the `FILTER` argument, but you need to know that the query execution plan is different because the filter is applied after the query string (e.g., `*`) is evaluated:

```
FT.SEARCH index "*" FILTER field start end
```

## Start and end values

Start and end values are by default inclusive, but you can prepend `(` to a value to exclude it from the range.

The values `-inf`, `inf`, and `+inf` are valid values that allow you to define open ranges.

## Result set

An open-range query can lead to a large result set. 

By default, [`FT.SEARCH`]() returns only the first ten results. The `LIMIT` argument helps you to scroll through the result set. The `SORTBY` argument ensures that the documents in the result set are returned in the specified order.

```
FT.SEARCH index "@field:[start end]" SORTBY field LIMIT page_start page_end
```

You can find further details about using the `LIMIT` and `SORTBY` in the [[`FT.SEARCH`]() command reference](/commands/ft.search/).

## Examples

The examples in this section use a schema with the following fields:

| Field name | Field type |
| ---------- | ---------- |
| `price` | `NUMERIC` |

The following query finds bicycles within a price range greater than or equal to 500 USD and smaller than or equal to 1000 USD (`500 <= price <= 1000`):

#### Code Examples

Foundational: Query numeric fields with inclusive range syntax when you need to find documents with values between two bounds

**Difficulty:** Beginner

**Commands:** FT.SEARCH

**Complexity:**
- FT.SEARCH: O(N)

**Redis CLI:**

```
> FT.SEARCH idx:bicycle "@price:[500 1000]"
1) (integer) 3
2) "bicycle:2"
3) 1) "$"
   2) "{\"pickup_zone\":\"POLYGON((-87.6848 41.9331, -87.5748 41.9331, -87.5748 41.8231, -87.6848 41.8231, -87.6848 41.9331))\",\"store_location\":\"-87.6298,41.8781\",\"brand\":\"Nord\",\"model\":\"Chook air 5\",\"price\":815,\"description\":\"The Chook Air 5  gives kids aged six years and older a durable and uberlight mountain bike for their first experience on tracks and easy cruising through forests and fields. The lower  top tube makes it easy to mount and dismount in any situation, giving your kids greater safety on the trails.\",\"condition\":\"used\"}"
4) "bicycle:5"
5) 1) "$"
   2) "{\"pickup_zone\":\"POLYGON((-0.1778 51.5524, 0.0822 51.5524, 0.0822 51.4024, -0.1778 51.4024, -0.1778 51.5524))\",\"store_location\":\"-0.1278,51.5074\",\"brand\":\"Breakout\",\"model\":\"XBN 2.1 Alloy\",\"price\":810,\"description\":\"The XBN 2.1 Alloy is our entry-level road bike \xe2\x80\x93 but that\xe2\x80\x99s not to say that it\xe2\x80\x99s a basic machine. With an internal weld aluminium frame, a full carbon fork, and the slick-shifting Claris gears from Shimano\xe2\x80\x99s, this is a bike which doesn\xe2\x80\x99t break the bank and delivers craved performance.\",\"condition\":\"new\"}"
6) "bicycle:9"
7) 1) "$"
   2) "{\"pickup_zone\":\"POLYGON((12.4464 42.1028, 12.5464 42.1028, 12.5464 41.7028, 12.4464 41.7028, 12.4464 42.1028))\",\"store_location\":\"12.4964,41.9028\",\"model\":\"ThrillCycle\",\"brand\":\"BikeShind\",\"price\":815,\"description\":\"An artsy,  retro-inspired bicycle that\xe2\x80\x99s as functional as it is pretty: The ThrillCycle steel frame offers a smooth ride. A 9-speed drivetrain has enough gears for coasting in the city, but we wouldn\xe2\x80\x99t suggest taking it to the mountains. Fenders protect you from mud, and a rear basket lets you transport groceries, flowers and books. The ThrillCycle comes with a limited lifetime warranty, so this little guy will last you long past graduation.\",\"condition\":\"refurbished\"}"
```

**Available in:** Redis CLI, C# (Synchronous), Go, Java (Asynchronous - Lettuce), Java (Reactive - Lettuce), Java (Synchronous - Jedis), JavaScript (Node.js), Python

**C# (Synchronous):**

```csharp
        SearchResult res1 = db.FT().Search(
            "idx:bicycle",
            new("@price:[500 1000]")
        );
        Console.WriteLine(res1.TotalResults);   // >>> 3
```

**Go:**

```go
	res1, err := rdb.FTSearchWithArgs(ctx,
		"idx:bicycle", "@price:[500 1000]",
		&redis.FTSearchOptions{
			Return: []redis.FTSearchReturn{
				{
					FieldName: "price",
				},
			},
			SortBy: []redis.FTSearchSortBy{
				{
					FieldName: "price",
					Asc:       true,
				},
			},
		},
	).Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(res1.Total) // >>> 3

	for _, doc := range res1.Docs {
		fmt.Printf("%v : price %v\n", doc.ID, doc.Fields["price"])
	}
	// >>> bicycle:2 : price 815
	// >>> bicycle:5 : price 810
	// >>> bicycle:9 : price 815
```

**Java (Asynchronous - Lettuce):**

```java
            CompletableFuture<SearchReply<String, String>> priceResults = asyncCommands
                    .ftSearch("idx:bicycle", "@price:[500 1000]").thenApply(res -> {
                        res.getResults().stream().sorted((doc1, doc2) -> doc1.getId().compareTo(doc2.getId())).forEach(doc -> {
                            System.out.printf("ID: %s\n", doc.getId());
                        });
                        // >>> ID: bicycle:2
                        // >>> ID: bicycle:5
                        // >>> ID: bicycle:9
                        return res;
                    }).toCompletableFuture();
```

**Java (Reactive - Lettuce):**

```java
            Mono<SearchReply<String, String>> priceResults = reactiveCommands.ftSearch("idx:bicycle", "@price:[500 1000]")
                    .doOnNext(res -> {
                        res.getResults().stream().sorted((doc1, doc2) -> doc1.getId().compareTo(doc2.getId())).forEach(doc -> {
                            System.out.printf("ID: %s\n", doc.getId());
                        });
                        // >>> ID: bicycle:2
                        // >>> ID: bicycle:5
                        // >>> ID: bicycle:9
                    });
```

**Java (Synchronous - Jedis):**

```java
        SearchResult res1 = jedis.ftSearch(
            "idx:bicycle", "@price:[500 1000]",
            FTSearchParams.searchParams().returnFields("price"));
        System.out.println(res1.getTotalResults()); // >>> 3

        List<Document> docs1 = res1.getDocuments();

        for (Document document : docs1) {
            System.out.println(document.getId() + " : price " + document.getString("price"));
        }
        // >>> bicycle:2 : price 815
        // >>> bicycle:5 : price 810
        // >>> bicycle:9 : price 815
```

**JavaScript (Node.js):**

```javascript
const res1 = await client.ft.search('idx:bicycle', '@price:[500 1000]');
console.log(res1.total); // >>> 3
```

**Python:**

```python
res = index.search(Query("@price:[500 1000]"))
print(res.total)
# >>> 3
```



This is semantically equivalent to:

#### Code Examples

Foundational: Query numeric fields using a FILTER clause when you need an alternative syntax for range queries with different query execution semantics

**Difficulty:** Beginner

**Commands:** FT.SEARCH

**Complexity:**
- FT.SEARCH: O(N)

**Redis CLI:**

```
> FT.SEARCH idx:bicycle "*" FILTER price 500 1000
1) (integer) 3
2) "bicycle:2"
3) 1) "$"
   2) "{\"pickup_zone\":\"POLYGON((-87.6848 41.9331, -87.5748 41.9331, -87.5748 41.8231, -87.6848 41.8231, -87.6848 41.9331))\",\"store_location\":\"-87.6298,41.8781\",\"brand\":\"Nord\",\"model\":\"Chook air 5\",\"price\":815,\"description\":\"The Chook Air 5  gives kids aged six years and older a durable and uberlight mountain bike for their first experience on tracks and easy cruising through forests and fields. The lower  top tube makes it easy to mount and dismount in any situation, giving your kids greater safety on the trails.\",\"condition\":\"used\"}"
4) "bicycle:5"
5) 1) "$"
   2) "{\"pickup_zone\":\"POLYGON((-0.1778 51.5524, 0.0822 51.5524, 0.0822 51.4024, -0.1778 51.4024, -0.1778 51.5524))\",\"store_location\":\"-0.1278,51.5074\",\"brand\":\"Breakout\",\"model\":\"XBN 2.1 Alloy\",\"price\":810,\"description\":\"The XBN 2.1 Alloy is our entry-level road bike \xe2\x80\x93 but that\xe2\x80\x99s not to say that it\xe2\x80\x99s a basic machine. With an internal weld aluminium frame, a full carbon fork, and the slick-shifting Claris gears from Shimano\xe2\x80\x99s, this is a bike which doesn\xe2\x80\x99t break the bank and delivers craved performance.\",\"condition\":\"new\"}"
6) "bicycle:9"
7) 1) "$"
   2) "{\"pickup_zone\":\"POLYGON((12.4464 42.1028, 12.5464 42.1028, 12.5464 41.7028, 12.4464 41.7028, 12.4464 42.1028))\",\"store_location\":\"12.4964,41.9028\",\"model\":\"ThrillCycle\",\"brand\":\"BikeShind\",\"price\":815,\"description\":\"An artsy,  retro-inspired bicycle that\xe2\x80\x99s as functional as it is pretty: The ThrillCycle steel frame offers a smooth ride. A 9-speed drivetrain has enough gears for coasting in the city, but we wouldn\xe2\x80\x99t suggest taking it to the mountains. Fenders protect you from mud, and a rear basket lets you transport groceries, flowers and books. The ThrillCycle comes with a limited lifetime warranty, so this little guy will last you long past graduation.\",\"condition\":\"refurbished\"}"
```

**Available in:** Redis CLI, C# (Synchronous), Go, Java (Asynchronous - Lettuce), Java (Reactive - Lettuce), Java (Synchronous - Jedis), JavaScript (Node.js), Python

**C# (Synchronous):**

```csharp
        SearchResult res2 = db.FT().Search(
            "idx:bicycle",
            new Query().AddFilter(
                new Query.NumericFilter("price", 500, 1000)
            )
        );
        Console.WriteLine(res2.TotalResults);   // >>> 3
```

**Go:**

```go
	res2, err := rdb.FTSearchWithArgs(ctx,
		"idx:bicycle", "*",
		&redis.FTSearchOptions{
			Filters: []redis.FTSearchFilter{
				{
					FieldName: "price",
					Min:       500,
					Max:       1000,
				},
			},
			Return: []redis.FTSearchReturn{
				{
					FieldName: "price",
				},
			},
			SortBy: []redis.FTSearchSortBy{
				{
					FieldName: "price",
					Asc:       true,
				},
			},
		},
	).Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(res2.Total) // >>> 3

	for _, doc := range res2.Docs {
		fmt.Printf("%v : price %v\n", doc.ID, doc.Fields["price"])
	}
	// >>> bicycle:2 : price 815
	// >>> bicycle:5 : price 810
	// >>> bicycle:9 : price 815
```

**Java (Asynchronous - Lettuce):**

```java

            // `Filter` is not supported.

```

**Java (Reactive - Lettuce):**

```java

            // `Filter` is not supported.

```

**Java (Synchronous - Jedis):**

```java
        SearchResult res2 = jedis.ftSearch("idx:bicycle",
            "*",
            FTSearchParams.searchParams()
                .returnFields("price")
                .filter("price", 500, 1000)
        );
        System.out.println(res2.getTotalResults()); // >>> 3

        List<Document> docs2 = res2.getDocuments();

        for (Document document : docs2) {
            System.out.println(document.getId() + " : price " + document.getString("price"));
        }
        // >>> bicycle:2 : price 815
        // >>> bicycle:5 : price 810
        // >>> bicycle:9 : price 815
```

**JavaScript (Node.js):**

```javascript
// FILTER is not supported
// const res2 = await client.ft.search('idx:bicycle', '*', {
//   FILTER: {
//     field: 'price',
//     min: 500,
//     max: 1000,
//   }
// });
// console.log(res2.total); // >>> 3
```

**Python:**

```python
query = Query("*").add_filter(NumericFilter("price", 500, 1000))
res = index.search(query)
print(res.total)
# >>> 3
```



For bicycles with a price greater than 1000 USD (`price > 1000`), you can use:

#### Code Examples

Open ranges: Query numeric fields with open ranges using infinity notation and exclusive bounds when you need to find documents above or below a threshold

**Difficulty:** Intermediate

**Commands:** FT.SEARCH

**Complexity:**
- FT.SEARCH: O(N)

**Redis CLI:**

```
> FT.SEARCH idx:bicycle "@price:[(1000 +inf]"
 1) (integer) 5
 2) "bicycle:1"
 3) 1) "$"
    2) "{\"pickup_zone\":\"POLYGON((-118.2887 34.0972, -118.1987 34.0972, -118.1987 33.9872, -118.2887 33.9872, -118.2887 34.0972))\",\"store_location\":\"-118.2437,34.0522\",\"brand\":\"Bicyk\",\"model\":\"Hillcraft\",\"price\":1200,\"description\":\"Kids want to ride with as little weight as possible. Especially on an incline! They may be at the age when a 27.5\\\" wheel bike is just too clumsy coming off a 24\\\" bike. The Hillcraft 26 is just the solution they need!\",\"condition\":\"used\"}"
 4) "bicycle:4"
 5) 1) "$"
    2) "{\"pickup_zone\":\"POLYGON((-122.4644 37.8199, -122.3544 37.8199, -122.3544 37.7099, -122.4644 37.7099, -122.4644 37.8199))\",\"store_location\":\"-122.4194,37.7749\",\"brand\":\"Noka Bikes\",\"model\":\"Kahuna\",\"price\":3200,\"description\":\"Whether you want to try your hand at XC racing or are looking for a lively trail bike that's just as inspiring on the climbs as it is over rougher ground, the Wilder is one heck of a bike built specifically for short women. Both the frames and components have been tweaked to include a women\xe2\x80\x99s saddle, different bars and unique colourway.\",\"condition\":\"used\"}"
 6) "bicycle:3"
 7) 1) "$"
    2) "{\"pickup_zone\":\"POLYGON((-80.2433 25.8067, -80.1333 25.8067, -80.1333 25.6967, -80.2433 25.6967, -80.2433 25.8067))\",\"store_location\":\"-80.1918,25.7617\",\"brand\":\"Eva\",\"model\":\"Eva 291\",\"price\":3400,\"description\":\"The sister company to Nord, Eva launched in 2005 as the first and only women-dedicated bicycle brand. Designed by women for women, allEva bikes are optimized for the feminine physique using analytics from a body metrics database. If you like 29ers, try the Eva 291. It\xe2\x80\x99s a brand new bike for 2022.. This full-suspension, cross-country ride has been designed for velocity. The 291 has 100mm of front and rear travel, a superlight aluminum frame and fast-rolling 29-inch wheels. Yippee!\",\"condition\":\"used\"}"
 8) "bicycle:6"
 9) 1) "$"
    2) "{\"pickup_zone\":\"POLYGON((2.1767 48.9016, 2.5267 48.9016, 2.5267 48.5516, 2.1767 48.5516, 2.1767 48.9016))\",\"store_location\":\"2.3522,48.8566\",\"brand\":\"ScramBikes\",\"model\":\"WattBike\",\"price\":2300,\"description\":\"The WattBike is the best e-bike for people who still feel young at heart. It has a Bafang 1000W mid-drive system and a 48V 17.5AH Samsung Lithium-Ion battery, allowing you to ride for more than 60 miles on one charge. It\xe2\x80\x99s great for tackling hilly terrain or if you just fancy a more leisurely ride. With three working modes, you can choose between E-bike, assisted bicycle, and normal bike modes.\",\"condition\":\"new\"}"
10) "bicycle:8"
11) 1) "$"
    2) "{\"pickup_zone\":\"POLYGON((1.9450 41.4301, 2.4018 41.4301, 2.4018 41.1987, 1.9450 41.1987, 1.9450 41.4301))\",\"store_location\":\"2.1734, 41.3851\",\"brand\":\"nHill\",\"model\":\"Summit\",\"price\":1200,\"description\":\"This budget mountain bike from nHill performs well both on bike paths and on the trail. The fork with 100mm of travel absorbs rough terrain. Fat Kenda Booster tires give you grip in corners and on wet trails. The Shimano Tourney drivetrain offered enough gears for finding a comfortable pace to ride uphill, and the Tektro hydraulic disc brakes break smoothly. Whether you want an affordable bike that you can take to work, but also take trail in mountains on the weekends or you\xe2\x80\x99re just after a stable, comfortable ride for the bike path, the Summit gives a good value for money.\",\"condition\":\"new\"}"
```

**Available in:** Redis CLI, C# (Synchronous), Go, Java (Asynchronous - Lettuce), Java (Reactive - Lettuce), Java (Synchronous - Jedis), JavaScript (Node.js), Python

**C# (Synchronous):**

```csharp
        SearchResult res3 = db.FT().Search(
            "idx:bicycle",
            new Query("*").AddFilter(new Query.NumericFilter(
                    "price", 1000, true, Double.PositiveInfinity, false
                )
            )
        );
        Console.WriteLine(res3.TotalResults);   // >>> 5
```

**Go:**

```go
	res3, err := rdb.FTSearchWithArgs(ctx,
		"idx:bicycle", "*",
		&redis.FTSearchOptions{
			Return: []redis.FTSearchReturn{
				{
					FieldName: "price",
				},
			},
			SortBy: []redis.FTSearchSortBy{
				{
					FieldName: "price",
					Asc:       true,
				},
			},
			Filters: []redis.FTSearchFilter{
				{
					FieldName: "price",
					Min:       "(1000",
					Max:       "+inf",
				},
			},
		},
	).Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(res3.Total) // >>> 5

	for _, doc := range res3.Docs {
		fmt.Printf("%v : price %v\n", doc.ID, doc.Fields["price"])
	}
	// >>> bicycle:1 : price 1200
	// >>> bicycle:4 : price 3200
	// >>> bicycle:6 : price 2300
	// >>> bicycle:3 : price 3400
	// >>> bicycle:8 : price 1200
```

**Java (Asynchronous - Lettuce):**

```java
            SearchArgs<String, String> priceSearchArgs2 = SearchArgs.<String, String> builder().returnField("price").build();

            CompletableFuture<SearchReply<String, String>> priceResults2 = asyncCommands
                    .ftSearch("idx:bicycle", "@price:[(1000 +inf]", priceSearchArgs2).thenApply(res -> {
                        res.getResults().stream().sorted((doc1, doc2) -> doc1.getId().compareTo(doc2.getId())).forEach(doc -> {
                            System.out.printf("ID: %s, price: %s\n", doc.getId(), doc.getFields().get("price"));
                        });
                        // >>> ID: bicycle:1, price: 1200
                        // >>> ID: bicycle:3, price: 3400
                        // >>> ID: bicycle:4, price: 3200
                        // >>> ID: bicycle:6, price: 2300
                        // >>> ID: bicycle:8, price: 1200
                        return res;
                    }).toCompletableFuture();
```

**Java (Reactive - Lettuce):**

```java
            SearchArgs<String, String> priceSearchArgs2 = SearchArgs.<String, String> builder().returnField("price").build();

            Mono<SearchReply<String, String>> priceResults2 = reactiveCommands
                    .ftSearch("idx:bicycle", "@price:[(1000 +inf]", priceSearchArgs2).doOnNext(res -> {
                        res.getResults().stream().sorted((doc1, doc2) -> doc1.getId().compareTo(doc2.getId())).forEach(doc -> {
                            System.out.printf("ID: %s, price: %s\n", doc.getId(), doc.getFields().get("price"));
                        });
                        // >>> ID: bicycle:1, price: 1200
                        // >>> ID: bicycle:3, price: 3400
                        // >>> ID: bicycle:4, price: 3200
                        // >>> ID: bicycle:6, price: 2300
                        // >>> ID: bicycle:8, price: 1200
                    });
```

**Java (Synchronous - Jedis):**

```java
        SearchResult res3 = jedis.ftSearch("idx:bicycle",
            "*",
            FTSearchParams.searchParams()
                .returnFields("price")
                .filter("price", 1000, true, Double.POSITIVE_INFINITY, false)
        );
        System.out.println(res3.getTotalResults()); // >>> 5

        List<Document> docs3 = res3.getDocuments();

        for (Document document : docs3) {
            System.out.println(document.getId() + " : price " + document.getString("price"));
        }
        // >>> bicycle:1 : price 1200
        // >>> bicycle:4 : price 3200
        // >>> bicycle:6 : price 2300
        // >>> bicycle:3 : price 3400
        // >>> bicycle:8 : price 1200
```

**JavaScript (Node.js):**

```javascript
// FILTER is not supported
// const res3 = await client.ft.search('idx:bicycle', '*', {
//   FILTER: {
//     field: 'price',
//     min: '(1000',
//     max: '+inf,
//   }
// });
// console.log(res3.total); // >>> 5
```

**Python:**

```python
query = Query("*").add_filter(NumericFilter("price", "(1000", "+inf"))
res = index.search(query)
print(res.total)
# >>> 5
```



The example below returns bicycles with a price lower than or equal to 2000 USD (`price <= 2000`) by returning the five cheapest bikes:

#### Code Examples

Sorting and pagination: Combine range queries with SORTBY and LIMIT to retrieve sorted results in pages when you need to handle large result sets efficiently

**Difficulty:** Intermediate

**Commands:** FT.SEARCH

**Complexity:**
- FT.SEARCH: O(N)

**Redis CLI:**

```
> FT.SEARCH idx:bicycle "@price:[-inf 2000]" SORTBY price LIMIT 0 5
 1) (integer) 7
 2) "bicycle:0"
 3) 1) "price"
    2) "270"
    3) "$"
    4) "{\"pickup_zone\":\"POLYGON((-74.0610 40.7578, -73.9510 40.7578, -73.9510 40.6678, -74.0610 40.6678, -74.0610 40.7578))\",\"store_location\":\"-74.0060,40.7128\",\"brand\":\"Velorim\",\"model\":\"Jigger\",\"price\":270,\"description\":\"Small and powerful, the Jigger is the best ride for the smallest of tikes! This is the tiniest kids\xe2\x80\x99 pedal bike on the market available without a coaster brake, the Jigger is the vehicle of choice for the rare tenacious little rider raring to go.\",\"condition\":\"new\"}"
 4) "bicycle:7"
 5) 1) "price"
    2) "430"
    3) "$"
    4) "{\"pickup_zone\":\"POLYGON((13.3260 52.5700, 13.6550 52.5700, 13.6550 52.2700, 13.3260 52.2700, 13.3260 52.5700))\",\"store_location\":\"13.4050,52.5200\",\"brand\":\"Peaknetic\",\"model\":\"Secto\",\"price\":430,\"description\":\"If you struggle with stiff fingers or a kinked neck or back after a few minutes on the road, this lightweight, aluminum bike alleviates those issues and allows you to enjoy the ride. From the ergonomic grips to the lumbar-supporting seat position, the Roll Low-Entry offers incredible comfort. The rear-inclined seat tube facilitates stability by allowing you to put a foot on the ground to balance at a stop, and the low step-over frame makes it accessible for all ability and mobility levels. The saddle is very soft, with a wide back to support your hip joints and a cutout in the center to redistribute that pressure. Rim brakes deliver satisfactory braking control, and the wide tires provide a smooth, stable ride on paved roads and gravel. Rack and fender mounts facilitate setting up the Roll Low-Entry as your preferred commuter, and the BMX-like handlebar offers space for mounting a flashlight, bell, or phone holder.\",\"condition\":\"new\"}"
 6) "bicycle:5"
 7) 1) "price"
    2) "810"
    3) "$"
    4) "{\"pickup_zone\":\"POLYGON((-0.1778 51.5524, 0.0822 51.5524, 0.0822 51.4024, -0.1778 51.4024, -0.1778 51.5524))\",\"store_location\":\"-0.1278,51.5074\",\"brand\":\"Breakout\",\"model\":\"XBN 2.1 Alloy\",\"price\":810,\"description\":\"The XBN 2.1 Alloy is our entry-level road bike \xe2\x80\x93 but that\xe2\x80\x99s not to say that it\xe2\x80\x99s a basic machine. With an internal weld aluminium frame, a full carbon fork, and the slick-shifting Claris gears from Shimano\xe2\x80\x99s, this is a bike which doesn\xe2\x80\x99t break the bank and delivers craved performance.\",\"condition\":\"new\"}"
 8) "bicycle:2"
 9) 1) "price"
    2) "815"
    3) "$"
    4) "{\"pickup_zone\":\"POLYGON((-87.6848 41.9331, -87.5748 41.9331, -87.5748 41.8231, -87.6848 41.8231, -87.6848 41.9331))\",\"store_location\":\"-87.6298,41.8781\",\"brand\":\"Nord\",\"model\":\"Chook air 5\",\"price\":815,\"description\":\"The Chook Air 5  gives kids aged six years and older a durable and uberlight mountain bike for their first experience on tracks and easy cruising through forests and fields. The lower  top tube makes it easy to mount and dismount in any situation, giving your kids greater safety on the trails.\",\"condition\":\"used\"}"
10) "bicycle:9"
11) 1) "price"
    2) "815"
    3) "$"
    4) "{\"pickup_zone\":\"POLYGON((12.4464 42.1028, 12.5464 42.1028, 12.5464 41.7028, 12.4464 41.7028, 12.4464 42.1028))\",\"store_location\":\"12.4964,41.9028\",\"model\":\"ThrillCycle\",\"brand\":\"BikeShind\",\"price\":815,\"description\":\"An artsy,  retro-inspired bicycle that\xe2\x80\x99s as functional as it is pretty: The ThrillCycle steel frame offers a smooth ride. A 9-speed drivetrain has enough gears for coasting in the city, but we wouldn\xe2\x80\x99t suggest taking it to the mountains. Fenders protect you from mud, and a rear basket lets you transport groceries, flowers and books. The ThrillCycle comes with a limited lifetime warranty, so this little guy will last you long past graduation.\",\"condition\":\"refurbished\"}"
```

**Available in:** Redis CLI, C# (Synchronous), Go, Java (Asynchronous - Lettuce), Java (Reactive - Lettuce), Java (Synchronous - Jedis), JavaScript (Node.js), Python

**C# (Synchronous):**

```csharp
        SearchResult res4 = db.FT().Search(
            "idx:bicycle",
            new Query("@price:[-inf 2000]")
                .SetSortBy("price")
                .Limit(0, 5)
        );
        Console.WriteLine(res4.TotalResults);   // >>> 7
        Console.WriteLine($"Prices: {string.Join(", ", res4.Documents.Select(d => d["price"]))}");
        // >>> Prices: 270, 430, 810, 815, 815
```

**Go:**

```go
	res4, err := rdb.FTSearchWithArgs(ctx,
		"idx:bicycle",
		"@price:[-inf 2000]",
		&redis.FTSearchOptions{
			Return: []redis.FTSearchReturn{
				{
					FieldName: "price",
				},
			},
			SortBy: []redis.FTSearchSortBy{
				{
					FieldName: "price",
					Asc:       true,
				},
			},
			LimitOffset: 0,
			Limit:       5,
		},
	).Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(res4.Total) // >>> 7

	for _, doc := range res4.Docs {
		fmt.Printf("%v : price %v\n", doc.ID, doc.Fields["price"])
	}
	// >>> bicycle:0 : price 270
	// >>> bicycle:7 : price 430
	// >>> bicycle:5 : price 810
	// >>> bicycle:2 : price 815
	// >>> bicycle:9 : price 815
```

**Java (Asynchronous - Lettuce):**

```java
            SearchArgs<String, String> priceSearchArgs3 = SearchArgs.<String, String> builder().returnField("price")
                    .sortBy(SortByArgs.<String> builder().attribute("price").build()).limit(0, 5).build();

            CompletableFuture<SearchReply<String, String>> priceResults3 = asyncCommands
                    .ftSearch("idx:bicycle", "@price:[-inf 2000]", priceSearchArgs3).thenApply(res -> {
                        res.getResults().stream().sorted((doc1, doc2) -> doc1.getId().compareTo(doc2.getId())).forEach(doc -> {
                            System.out.printf("ID: %s, price: %s\n", doc.getId(), doc.getFields().get("price"));
                        });
                        // >>> ID: bicycle:0, price: 270
                        // >>> ID: bicycle:2, price: 815
                        // >>> ID: bicycle:5, price: 810
                        // >>> ID: bicycle:7, price: 430
                        // >>> ID: bicycle:9, price: 815
                        return res;
                    }).toCompletableFuture();
```

**Java (Reactive - Lettuce):**

```java
            SearchArgs<String, String> priceSearchArgs3 = SearchArgs.<String, String> builder().returnField("price")
                    .sortBy(SortByArgs.<String> builder().attribute("price").build()).limit(0, 5).build();

            Mono<SearchReply<String, String>> priceResults3 = reactiveCommands
                    .ftSearch("idx:bicycle", "@price:[-inf 2000]", priceSearchArgs3).doOnNext(res -> {
                        res.getResults().stream().sorted((doc1, doc2) -> doc1.getId().compareTo(doc2.getId())).forEach(doc -> {
                            System.out.printf("ID: %s, price: %s\n", doc.getId(), doc.getFields().get("price"));
                        });
                        // >>> ID: bicycle:0, price: 270
                        // >>> ID: bicycle:2, price: 815
                        // >>> ID: bicycle:5, price: 810
                        // >>> ID: bicycle:7, price: 430
                        // >>> ID: bicycle:9, price: 815
                    });
```

**Java (Synchronous - Jedis):**

```java
        SearchResult res4 = jedis.ftSearch("idx:bicycle",
            "@price:[-inf 2000]",
            FTSearchParams.searchParams()
                    .returnFields("price")
                    .sortBy("price", SortingOrder.ASC)
                    .limit(0, 5) 
        );
        System.out.println(res4.getTotalResults()); // >>> 7

        List<Document> docs4 = res4.getDocuments();

        for (Document document : docs4) {
            System.out.println(document.getId() + " : price " + document.getString("price"));
        }
        // >>> bicycle:0 : price 270
        // >>> bicycle:7 : price 430
        // >>> bicycle:5 : price 810
        // >>> bicycle:2 : price 815
        // >>> bicycle:9 : price 815
```

**JavaScript (Node.js):**

```javascript
const res4 = await client.ft.search(
  'idx:bicycle',
  '@price:[-inf 2000]',
  {
    SORTBY: 'price',
    LIMIT: { from: 0, size: 5 }
  }
);
console.log(res4.total); // >>> 7
console.log(res4); // >>> { total: 7, documents: [ { id: 'bicycle:0', value: [Object: null prototype] }, { id: 'bicycle:7', value: [Object: null prototype] }, { id: 'bicycle:5', value: [Object: null prototype] }, { id: 'bicycle:2', value: [Object: null prototype] }, { id: 'bicycle:9', value: [Object: null prototype] } ] }
```

**Python:**

```python
query = Query('@price:[-inf 2000]').sort_by('price').paging(0, 5)
res = index.search(query)
print(res.total)
print(res)
# >>> Result{7 total, docs: [Document {'id': 'bicycle:0', ... }, Document {'id': 'bicycle:7', ... }, Document {'id': 'bicycle:5', ... }, ...]
```



## Non-numeric range queries

You can learn more about non-numeric range queries, such as [geospatial]() or [vector search]() queries, in their dedicated articles.