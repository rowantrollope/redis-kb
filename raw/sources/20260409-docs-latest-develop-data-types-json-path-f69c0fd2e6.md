---
title: Path
url: https://redis.io/docs/latest/develop/data-types/json/path/
retrieved_utc: '2026-04-09T20:45:52.738471+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/develop/data-types/json/path/index.html.md
---

# Path

```json metadata
{
  "title": "Path",
  "description": "Access specific elements within a JSON document",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "tableOfContents": {"sections":[{"id":"jsonpath-support","title":"JSONPath support"},{"id":"jsonpath-syntax","title":"JSONPath syntax"},{"children":[{"id":"access-examples","title":"Access examples"},{"id":"filter-examples","title":"Filter examples"},{"id":"update-examples","title":"Update examples"}],"id":"jsonpath-examples","title":"JSONPath examples"},{"children":[{"id":"json-key-names-and-path-compatibility","title":"JSON key names and path compatibility"}],"id":"legacy-path-syntax","title":"Legacy path syntax"},{"id":"time-complexity-of-path-evaluation","title":"Time complexity of path evaluation"}]}

,
  "codeExamples": [{"codetabsId":"json_tutorial-stepset_bikes","commands":[{"complexity":"O(M+N)","name":"JSON.SET"}],"description":"Setup: Create a complex JSON document with nested objects and arrays to use in JSONPath examples","difficulty":"beginner","id":"set_bikes","languages":[{"id":"redis-cli","panelId":"panel_redis-cli_json_tutorial-stepset_bikes"},{"clientId":"redis-py","clientName":"redis-py","id":"Python","langId":"python","panelId":"panel_Python_json_tutorial-stepset_bikes"},{"id":"Node-js","panelId":"panel_Nodejs_json_tutorial-stepset_bikes"},{"clientId":"jedis","clientName":"Jedis","id":"Java-Sync","langId":"java","panelId":"panel_Java-Sync_json_tutorial-stepset_bikes"},{"clientId":"lettuce","clientName":"Lettuce","id":"Java-Async","langId":"java","panelId":"panel_Java-Async_json_tutorial-stepset_bikes"},{"clientId":"lettuce","clientName":"Lettuce","id":"Java-Reactive","langId":"java","panelId":"panel_Java-Reactive_json_tutorial-stepset_bikes"},{"clientId":"go-redis","clientName":"go-redis","id":"Go","langId":"go","panelId":"panel_Go_json_tutorial-stepset_bikes"},{"id":"dotnet-Sync","panelId":"panel_Csharp-Sync_json_tutorial-stepset_bikes"},{"clientId":"predis","clientName":"Predis","id":"PHP","langId":"php","panelId":"panel_PHP_json_tutorial-stepset_bikes"}]},{"buildsUpon":["set_bikes"],"codetabsId":"json_tutorial-stepget_bikes","commands":[{"complexity":"O(N)","name":"JSON.GET"}],"description":"Wildcard queries: Use the * operator to retrieve all items in a collection when you need to access all elements at a specific level","difficulty":"beginner","id":"get_bikes","languages":[{"id":"redis-cli","panelId":"panel_redis-cli_json_tutorial-stepget_bikes"},{"clientId":"redis-py","clientName":"redis-py","id":"Python","langId":"python","panelId":"panel_Python_json_tutorial-stepget_bikes"},{"id":"Node-js","panelId":"panel_Nodejs_json_tutorial-stepget_bikes"},{"clientId":"jedis","clientName":"Jedis","id":"Java-Sync","langId":"java","panelId":"panel_Java-Sync_json_tutorial-stepget_bikes"},{"clientId":"lettuce","clientName":"Lettuce","id":"Java-Async","langId":"java","panelId":"panel_Java-Async_json_tutorial-stepget_bikes"},{"clientId":"lettuce","clientName":"Lettuce","id":"Java-Reactive","langId":"java","panelId":"panel_Java-Reactive_json_tutorial-stepget_bikes"},{"clientId":"go-redis","clientName":"go-redis","id":"Go","langId":"go","panelId":"panel_Go_json_tutorial-stepget_bikes"},{"id":"dotnet-Sync","panelId":"panel_Csharp-Sync_json_tutorial-stepget_bikes"},{"clientId":"predis","clientName":"Predis","id":"PHP","langId":"php","panelId":"panel_PHP_json_tutorial-stepget_bikes"}]},{"buildsUpon":["get_bikes"],"codetabsId":"json_tutorial-stepget_mtnbikes","commands":[{"complexity":"O(N)","name":"JSON.GET"}],"description":"Array element access: Use bracket notation and array subscripts to access specific array elements or all elements with [*] when you need to retrieve values from arrays","difficulty":"intermediate","id":"get_mtnbikes","languages":[{"id":"redis-cli","panelId":"panel_redis-cli_json_tutorial-stepget_mtnbikes"},{"clientId":"redis-py","clientName":"redis-py","id":"Python","langId":"python","panelId":"panel_Python_json_tutorial-stepget_mtnbikes"},{"id":"Node-js","panelId":"panel_Nodejs_json_tutorial-stepget_mtnbikes"},{"clientId":"jedis","clientName":"Jedis","id":"Java-Sync","langId":"java","panelId":"panel_Java-Sync_json_tutorial-stepget_mtnbikes"},{"clientId":"lettuce","clientName":"Lettuce","id":"Java-Async","langId":"java","panelId":"panel_Java-Async_json_tutorial-stepget_mtnbikes"},{"clientId":"lettuce","clientName":"Lettuce","id":"Java-Reactive","langId":"java","panelId":"panel_Java-Reactive_json_tutorial-stepget_mtnbikes"},{"clientId":"go-redis","clientName":"go-redis","id":"Go","langId":"go","panelId":"panel_Go_json_tutorial-stepget_mtnbikes"},{"id":"dotnet-Sync","panelId":"panel_Csharp-Sync_json_tutorial-stepget_mtnbikes"},{"clientId":"predis","clientName":"Predis","id":"PHP","langId":"php","panelId":"panel_PHP_json_tutorial-stepget_mtnbikes"}]},{"buildsUpon":["get_mtnbikes"],"codetabsId":"json_tutorial-stepget_models","commands":[{"complexity":"O(N)","name":"JSON.GET"}],"description":"Recursive descent: Use the .. operator to search for a field at any depth in the JSON document when you need to find values across multiple nesting levels","difficulty":"intermediate","id":"get_models","languages":[{"id":"redis-cli","panelId":"panel_redis-cli_json_tutorial-stepget_models"},{"clientId":"redis-py","clientName":"redis-py","id":"Python","langId":"python","panelId":"panel_Python_json_tutorial-stepget_models"},{"id":"Node-js","panelId":"panel_Nodejs_json_tutorial-stepget_models"},{"clientId":"jedis","clientName":"Jedis","id":"Java-Sync","langId":"java","panelId":"panel_Java-Sync_json_tutorial-stepget_models"},{"clientId":"lettuce","clientName":"Lettuce","id":"Java-Async","langId":"java","panelId":"panel_Java-Async_json_tutorial-stepget_models"},{"clientId":"lettuce","clientName":"Lettuce","id":"Java-Reactive","langId":"java","panelId":"panel_Java-Reactive_json_tutorial-stepget_models"},{"clientId":"go-redis","clientName":"go-redis","id":"Go","langId":"go","panelId":"panel_Go_json_tutorial-stepget_models"},{"id":"dotnet-Sync","panelId":"panel_Csharp-Sync_json_tutorial-stepget_models"},{"clientId":"predis","clientName":"Predis","id":"PHP","langId":"php","panelId":"panel_PHP_json_tutorial-stepget_models"}]},{"buildsUpon":["get_mtnbikes"],"codetabsId":"json_tutorial-stepget2mtnbikes","commands":[{"complexity":"O(N)","name":"JSON.GET"}],"description":"Array slicing: Use [start:end] syntax to select a range of array elements when you need to retrieve a subset of items from an array","difficulty":"intermediate","id":"get2mtnbikes","languages":[{"id":"redis-cli","panelId":"panel_redis-cli_json_tutorial-stepget2mtnbikes"},{"clientId":"redis-py","clientName":"redis-py","id":"Python","langId":"python","panelId":"panel_Python_json_tutorial-stepget2mtnbikes"},{"id":"Node-js","panelId":"panel_Nodejs_json_tutorial-stepget2mtnbikes"},{"clientId":"jedis","clientName":"Jedis","id":"Java-Sync","langId":"java","panelId":"panel_Java-Sync_json_tutorial-stepget2mtnbikes"},{"clientId":"lettuce","clientName":"Lettuce","id":"Java-Async","langId":"java","panelId":"panel_Java-Async_json_tutorial-stepget2mtnbikes"},{"clientId":"lettuce","clientName":"Lettuce","id":"Java-Reactive","langId":"java","panelId":"panel_Java-Reactive_json_tutorial-stepget2mtnbikes"},{"clientId":"go-redis","clientName":"go-redis","id":"Go","langId":"go","panelId":"panel_Go_json_tutorial-stepget2mtnbikes"},{"id":"dotnet-Sync","panelId":"panel_Csharp-Sync_json_tutorial-stepget2mtnbikes"},{"clientId":"predis","clientName":"Predis","id":"PHP","langId":"php","panelId":"panel_PHP_json_tutorial-stepget2mtnbikes"}]},{"buildsUpon":["get_models"],"codetabsId":"json_tutorial-stepfilter1","commands":[{"complexity":"O(N)","name":"JSON.GET"}],"description":"Filter expressions: Use ?() with comparison and logical operators to select elements matching specific conditions when you need to query based on multiple criteria","difficulty":"advanced","id":"filter1","languages":[{"id":"redis-cli","panelId":"panel_redis-cli_json_tutorial-stepfilter1"},{"clientId":"redis-py","clientName":"redis-py","id":"Python","langId":"python","panelId":"panel_Python_json_tutorial-stepfilter1"},{"id":"Node-js","panelId":"panel_Nodejs_json_tutorial-stepfilter1"},{"clientId":"jedis","clientName":"Jedis","id":"Java-Sync","langId":"java","panelId":"panel_Java-Sync_json_tutorial-stepfilter1"},{"clientId":"lettuce","clientName":"Lettuce","id":"Java-Async","langId":"java","panelId":"panel_Java-Async_json_tutorial-stepfilter1"},{"clientId":"lettuce","clientName":"Lettuce","id":"Java-Reactive","langId":"java","panelId":"panel_Java-Reactive_json_tutorial-stepfilter1"},{"clientId":"go-redis","clientName":"go-redis","id":"Go","langId":"go","panelId":"panel_Go_json_tutorial-stepfilter1"},{"id":"dotnet-Sync","panelId":"panel_Csharp-Sync_json_tutorial-stepfilter1"},{"clientId":"predis","clientName":"Predis","id":"PHP","langId":"php","panelId":"panel_PHP_json_tutorial-stepfilter1"}]},{"buildsUpon":["filter1"],"codetabsId":"json_tutorial-stepfilter2","commands":[{"complexity":"O(N)","name":"JSON.GET"}],"description":"Equality filters: Use == operator in filter expressions to select elements with specific field values when you need to find items matching exact criteria","difficulty":"advanced","id":"filter2","languages":[{"id":"redis-cli","panelId":"panel_redis-cli_json_tutorial-stepfilter2"},{"clientId":"redis-py","clientName":"redis-py","id":"Python","langId":"python","panelId":"panel_Python_json_tutorial-stepfilter2"},{"id":"Node-js","panelId":"panel_Nodejs_json_tutorial-stepfilter2"},{"clientId":"jedis","clientName":"Jedis","id":"Java-Sync","langId":"java","panelId":"panel_Java-Sync_json_tutorial-stepfilter2"},{"clientId":"lettuce","clientName":"Lettuce","id":"Java-Async","langId":"java","panelId":"panel_Java-Async_json_tutorial-stepfilter2"},{"clientId":"lettuce","clientName":"Lettuce","id":"Java-Reactive","langId":"java","panelId":"panel_Java-Reactive_json_tutorial-stepfilter2"},{"clientId":"go-redis","clientName":"go-redis","id":"Go","langId":"go","panelId":"panel_Go_json_tutorial-stepfilter2"},{"id":"dotnet-Sync","panelId":"panel_Csharp-Sync_json_tutorial-stepfilter2"},{"clientId":"predis","clientName":"Predis","id":"PHP","langId":"php","panelId":"panel_PHP_json_tutorial-stepfilter2"}]},{"buildsUpon":["filter2"],"codetabsId":"json_tutorial-stepfilter3","description":"Regex filters: Use =~ operator with regular expressions in filter expressions to match patterns in string values when you need flexible pattern-based filtering","difficulty":"advanced","id":"filter3","languages":[{"id":"redis-cli","panelId":"panel_redis-cli_json_tutorial-stepfilter3"},{"clientId":"redis-py","clientName":"redis-py","id":"Python","langId":"python","panelId":"panel_Python_json_tutorial-stepfilter3"},{"id":"Node-js","panelId":"panel_Nodejs_json_tutorial-stepfilter3"},{"clientId":"jedis","clientName":"Jedis","id":"Java-Sync","langId":"java","panelId":"panel_Java-Sync_json_tutorial-stepfilter3"},{"clientId":"lettuce","clientName":"Lettuce","id":"Java-Async","langId":"java","panelId":"panel_Java-Async_json_tutorial-stepfilter3"},{"clientId":"lettuce","clientName":"Lettuce","id":"Java-Reactive","langId":"java","panelId":"panel_Java-Reactive_json_tutorial-stepfilter3"},{"clientId":"go-redis","clientName":"go-redis","id":"Go","langId":"go","panelId":"panel_Go_json_tutorial-stepfilter3"},{"id":"dotnet-Sync","panelId":"panel_Csharp-Sync_json_tutorial-stepfilter3"},{"clientId":"predis","clientName":"Predis","id":"PHP","langId":"php","panelId":"panel_PHP_json_tutorial-stepfilter3"}]},{"buildsUpon":["filter3"],"codetabsId":"json_tutorial-stepfilter4","commands":[{"complexity":"O(M+N)","name":"JSON.SET"},{"complexity":"O(N)","name":"JSON.GET"}],"description":"Dynamic regex filters: Use regex patterns stored in JSON properties to filter elements when you need to apply patterns defined within the document itself","difficulty":"advanced","id":"filter4","languages":[{"id":"redis-cli","panelId":"panel_redis-cli_json_tutorial-stepfilter4"},{"clientId":"redis-py","clientName":"redis-py","id":"Python","langId":"python","panelId":"panel_Python_json_tutorial-stepfilter4"},{"id":"Node-js","panelId":"panel_Nodejs_json_tutorial-stepfilter4"},{"clientId":"jedis","clientName":"Jedis","id":"Java-Sync","langId":"java","panelId":"panel_Java-Sync_json_tutorial-stepfilter4"},{"clientId":"lettuce","clientName":"Lettuce","id":"Java-Async","langId":"java","panelId":"panel_Java-Async_json_tutorial-stepfilter4"},{"clientId":"lettuce","clientName":"Lettuce","id":"Java-Reactive","langId":"java","panelId":"panel_Java-Reactive_json_tutorial-stepfilter4"},{"clientId":"go-redis","clientName":"go-redis","id":"Go","langId":"go","panelId":"panel_Go_json_tutorial-stepfilter4"},{"id":"dotnet-Sync","panelId":"panel_Csharp-Sync_json_tutorial-stepfilter4"},{"clientId":"predis","clientName":"Predis","id":"PHP","langId":"php","panelId":"panel_PHP_json_tutorial-stepfilter4"}]},{"buildsUpon":["get_bikes"],"codetabsId":"json_tutorial-stepupdate_bikes","commands":[{"complexity":"O(N)","name":"JSON.GET"},{"complexity":"O(1)","name":"JSON.NUMINCRBY"}],"description":"Bulk updates: Use JSONPath with JSON.NUMINCRBY to update multiple numeric values across the document when you need to apply arithmetic operations to multiple fields","difficulty":"intermediate","id":"update_bikes","languages":[{"id":"redis-cli","panelId":"panel_redis-cli_json_tutorial-stepupdate_bikes"},{"clientId":"redis-py","clientName":"redis-py","id":"Python","langId":"python","panelId":"panel_Python_json_tutorial-stepupdate_bikes"},{"id":"Node-js","panelId":"panel_Nodejs_json_tutorial-stepupdate_bikes"},{"clientId":"jedis","clientName":"Jedis","id":"Java-Sync","langId":"java","panelId":"panel_Java-Sync_json_tutorial-stepupdate_bikes"},{"clientId":"lettuce","clientName":"Lettuce","id":"Java-Async","langId":"java","panelId":"panel_Java-Async_json_tutorial-stepupdate_bikes"},{"clientId":"lettuce","clientName":"Lettuce","id":"Java-Reactive","langId":"java","panelId":"panel_Java-Reactive_json_tutorial-stepupdate_bikes"},{"clientId":"go-redis","clientName":"go-redis","id":"Go","langId":"go","panelId":"panel_Go_json_tutorial-stepupdate_bikes"},{"id":"dotnet-Sync","panelId":"panel_Csharp-Sync_json_tutorial-stepupdate_bikes"},{"clientId":"predis","clientName":"Predis","id":"PHP","langId":"php","panelId":"panel_PHP_json_tutorial-stepupdate_bikes"}]},{"buildsUpon":["filter1"],"codetabsId":"json_tutorial-stepupdate_filters1","commands":[{"complexity":"O(M+N)","name":"JSON.SET"},{"complexity":"O(N)","name":"JSON.GET"}],"description":"Conditional updates: Use filter expressions with JSON.SET to update only elements matching specific conditions when you need selective modifications","difficulty":"advanced","id":"update_filters1","languages":[{"id":"redis-cli","panelId":"panel_redis-cli_json_tutorial-stepupdate_filters1"},{"clientId":"redis-py","clientName":"redis-py","id":"Python","langId":"python","panelId":"panel_Python_json_tutorial-stepupdate_filters1"},{"id":"Node-js","panelId":"panel_Nodejs_json_tutorial-stepupdate_filters1"},{"clientId":"jedis","clientName":"Jedis","id":"Java-Sync","langId":"java","panelId":"panel_Java-Sync_json_tutorial-stepupdate_filters1"},{"clientId":"lettuce","clientName":"Lettuce","id":"Java-Async","langId":"java","panelId":"panel_Java-Async_json_tutorial-stepupdate_filters1"},{"clientId":"lettuce","clientName":"Lettuce","id":"Java-Reactive","langId":"java","panelId":"panel_Java-Reactive_json_tutorial-stepupdate_filters1"},{"clientId":"go-redis","clientName":"go-redis","id":"Go","langId":"go","panelId":"panel_Go_json_tutorial-stepupdate_filters1"},{"id":"dotnet-Sync","panelId":"panel_Csharp-Sync_json_tutorial-stepupdate_filters1"},{"clientId":"predis","clientName":"Predis","id":"PHP","langId":"php","panelId":"panel_PHP_json_tutorial-stepupdate_filters1"}]},{"buildsUpon":["update_filters1"],"codetabsId":"json_tutorial-stepupdate_filters2","commands":[{"complexity":"O(1)","name":"JSON.ARRAPPEND"}],"description":"Array updates with filters: Use JSON.ARRAPPEND with filter expressions to add elements to arrays matching conditions when you need to modify collections selectively","difficulty":"advanced","id":"update_filters2","languages":[{"id":"redis-cli","panelId":"panel_redis-cli_json_tutorial-stepupdate_filters2"},{"clientId":"redis-py","clientName":"redis-py","id":"Python","langId":"python","panelId":"panel_Python_json_tutorial-stepupdate_filters2"},{"id":"Node-js","panelId":"panel_Nodejs_json_tutorial-stepupdate_filters2"},{"clientId":"jedis","clientName":"Jedis","id":"Java-Sync","langId":"java","panelId":"panel_Java-Sync_json_tutorial-stepupdate_filters2"},{"clientId":"lettuce","clientName":"Lettuce","id":"Java-Async","langId":"java","panelId":"panel_Java-Async_json_tutorial-stepupdate_filters2"},{"clientId":"lettuce","clientName":"Lettuce","id":"Java-Reactive","langId":"java","panelId":"panel_Java-Reactive_json_tutorial-stepupdate_filters2"},{"clientId":"go-redis","clientName":"go-redis","id":"Go","langId":"go","panelId":"panel_Go_json_tutorial-stepupdate_filters2"},{"id":"dotnet-Sync","panelId":"panel_Csharp-Sync_json_tutorial-stepupdate_filters2"},{"clientId":"predis","clientName":"Predis","id":"PHP","langId":"php","panelId":"panel_PHP_json_tutorial-stepupdate_filters2"}]}]
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


Paths let you access specific elements within a JSON document. Since no standard for JSON path syntax exists, Redis JSON implements its own. JSON's syntax is based on common best practices and intentionally resembles [JSONPath](http://goessner.net/articles/JsonPath/).

JSON supports two query syntaxes: [JSONPath syntax](#jsonpath-syntax) and the [legacy path syntax](#legacy-path-syntax) from the first version of JSON.

JSON knows which syntax to use depending on the first character of the path query. If the query starts with the character `$`, it uses JSONPath syntax. Otherwise, it defaults to the legacy path syntax.

The returned value is a JSON string with a top-level array of JSON serialized strings. 
And if multi-paths are used, the return value is a JSON string with a top-level object with values that are arrays of serialized JSON values.

## JSONPath support

RedisJSON v2.0 introduced [JSONPath](http://goessner.net/articles/JsonPath/) support. It follows the syntax described by Goessner in his [article](http://goessner.net/articles/JsonPath/).

A JSONPath query can resolve to several locations in a JSON document. In this case, the JSON commands apply the operation to every possible location. This is a major improvement over [legacy path](#legacy-path-syntax) queries, which only operate on the first path.

Notice that the structure of the command response often differs when using JSONPath. See the [Commands](?group=json) page for more details.

The new syntax supports bracket notation, which allows the use of special characters like colon ":" or whitespace in key names.

If you want to include double quotes in a query from the CLI, enclose the JSONPath within single quotes. For example:

```bash
JSON.GET store '$.inventory["mountain_bikes"]'
```

## JSONPath syntax

The following JSONPath syntax table was adapted from Goessner's [path syntax comparison](https://goessner.net/articles/JsonPath/index.html#e2).

| Syntax&nbsp;element | Description |
|----------------|-------------|
| $ | The root (outermost JSON element), starts the path. |
| . or [] | Selects a child element. |
| .. | Recursively descends through the JSON document. |
| * | Wildcard, returns all elements. |
| [] | Subscript operator, accesses an array element. |
| [,] | Union, selects multiple elements. |
| [start\:end\:step] | Array slice where *start*, *end*, and *step* are index values. You can omit values from the slice (for example, `[3:]`, `[:8:2]`) to use the default values: *start* defaults to the first index, *end* defaults to the last index, and *step* defaults to `1`. Use `[*]` or `[:]` to select all elements. |
| ?() | Filters a JSON object or array. Supports comparison operators <nobr>(`==`, `!=`, `<`, `<=`, `>`, `>=`, `=~`)</nobr>, logical operators <nobr>(`&&`, `\|\|`)</nobr>, and parenthesis <nobr>(`(`, `)`)</nobr>. |
| () | Script expression. |
| @ | The current element, used in filter or script expressions. |

## JSONPath examples

The following JSONPath examples use this JSON document, which stores details about items in a store's inventory:

```json
{
    "inventory": {
        "mountain_bikes": [
            {
                "id": "bike:1",
                "model": "Phoebe",
                "description": "This is a mid-travel trail slayer that is a fantastic daily driver or one bike quiver. The Shimano Claris 8-speed groupset gives plenty of gear range to tackle hills and there\u2019s room for mudguards and a rack too.  This is the bike for the rider who wants trail manners with low fuss ownership.",
                "price": 1920,
                "specs": {"material": "carbon", "weight": 13.1},
                "colors": ["black", "silver"],
            },
            {
                "id": "bike:2",
                "model": "Quaoar",
                "description": "Redesigned for the 2020 model year, this bike impressed our testers and is the best all-around trail bike we've ever tested. The Shimano gear system effectively does away with an external cassette, so is super low maintenance in terms of wear and tear. All in all it's an impressive package for the price, making it very competitive.",
                "price": 2072,
                "specs": {"material": "aluminium", "weight": 7.9},
                "colors": ["black", "white"],
            },
            {
                "id": "bike:3",
                "model": "Weywot",
                "description": "This bike gives kids aged six years and older a durable and uberlight mountain bike for their first experience on tracks and easy cruising through forests and fields. A set of powerful Shimano hydraulic disc brakes provide ample stopping ability. If you're after a budget option, this is one of the best bikes you could get.",
                "price": 3264,
                "specs": {"material": "alloy", "weight": 13.8},
            },
        ],
        "commuter_bikes": [
            {
                "id": "bike:4",
                "model": "Salacia",
                "description": "This bike is a great option for anyone who just wants a bike to get about on With a slick-shifting Claris gears from Shimano\u2019s, this is a bike which doesn\u2019t break the bank and delivers craved performance.  It\u2019s for the rider who wants both efficiency and capability.",
                "price": 1475,
                "specs": {"material": "aluminium", "weight": 16.6},
                "colors": ["black", "silver"],
            },
            {
                "id": "bike:5",
                "model": "Mimas",
                "description": "A real joy to ride, this bike got very high scores in last years Bike of the year report. The carefully crafted 50-34 tooth chainset and 11-32 tooth cassette give an easy-on-the-legs bottom gear for climbing, and the high-quality Vittoria Zaffiro tires give balance and grip.It includes a low-step frame , our memory foam seat, bump-resistant shocks and conveniently placed thumb throttle. Put it all together and you get a bike that helps redefine what can be done for this price.",
                "price": 3941,
                "specs": {"material": "alloy", "weight": 11.6},
            },
        ],
    }
}
```

First, create the JSON document in your database:

#### Code Examples

Setup: Create a complex JSON document with nested objects and arrays to use in JSONPath examples

**Commands:** JSON.SET

**Complexity:**
- JSON.SET: O(M+N)

**Redis CLI:**

```
> JSON.SET bikes:inventory $ '{ "inventory": { "mountain_bikes": [ { "id": "bike:1", "model": "Phoebe", "description": "This is a mid-travel trail slayer that is a fantastic daily driver or one bike quiver. The Shimano Claris 8-speed groupset gives plenty of gear range to tackle hills and there\'s room for mudguards and a rack too. This is the bike for the rider who wants trail manners with low fuss ownership.", "price": 1920, "specs": {"material": "carbon", "weight": 13.1}, "colors": ["black", "silver"] }, { "id": "bike:2", "model": "Quaoar", "description": "Redesigned for the 2020 model year, this bike impressed our testers and is the best all-around trail bike we\'ve ever tested. The Shimano gear system effectively does away with an external cassette, so is super low maintenance in terms of wear and tear. All in all it\'s an impressive package for the price, making it very competitive.", "price": 2072, "specs": {"material": "aluminium", "weight": 7.9}, "colors": ["black", "white"] }, { "id": "bike:3", "model": "Weywot", "description": "This bike gives kids aged six years and older a durable and uberlight mountain bike for their first experience on tracks and easy cruising through forests and fields. A set of powerful Shimano hydraulic disc brakes provide ample stopping ability. If you\'re after a budget option, this is one of the best bikes you could get.", "price": 3264, "specs": {"material": "alloy", "weight": 13.8} } ], "commuter_bikes": [ { "id": "bike:4", "model": "Salacia", "description": "This bike is a great option for anyone who just wants a bike to get about on With a slick-shifting Claris gears from Shimano\'s, this is a bike which doesn\'t break the bank and delivers craved performance. It\'s for the rider who wants both efficiency and capability.", "price": 1475, "specs": {"material": "aluminium", "weight": 16.6}, "colors": ["black", "silver"] }, { "id": "bike:5", "model": "Mimas", "description": "A real joy to ride, this bike got very high scores in last years Bike of the year report. The carefully crafted 50-34 tooth chainset and 11-32 tooth cassette give an easy-on-the-legs bottom gear for climbing, and the high-quality Vittoria Zaffiro tires give balance and grip.It includes a low-step frame , our memory foam seat, bump-resistant shocks and conveniently placed thumb throttle. Put it all together and you get a bike that helps redefine what can be done for this price.", "price": 3941, "specs": {"material": "alloy", "weight": 11.6} } ] }}'
```

**Available in:** Redis CLI, C# (Synchronous), Go, Java (Asynchronous - Lettuce), Java (Reactive - Lettuce), Java (Synchronous - Jedis), JavaScript (Node.js), PHP, Python

**C# (Synchronous):**

```csharp
        string inventoryJson = @"
{
    ""inventory"": {
        ""mountain_bikes"": [
            {
                ""id"": ""bike:1"",
                ""model"": ""Phoebe"",
                ""description"": ""This is a mid-travel trail slayer that is a fantastic daily driver or one bike quiver. The Shimano Claris 8-speed groupset gives plenty of gear range to tackle hills and there\u2019s room for mudguards and a rack too.  This is the bike for the rider who wants trail manners with low fuss ownership."",
                ""price"": 1920,
                ""specs"": {""material"": ""carbon"", ""weight"": 13.1},
                ""colors"": [""black"", ""silver""]
            },
            {
                ""id"": ""bike:2"",
                ""model"": ""Quaoar"",
                ""description"": ""Redesigned for the 2020 model year, this bike impressed our testers and is the best all-around trail bike we've ever tested. The Shimano gear system effectively does away with an external cassette, so is super low maintenance in terms of wear and tear. All in all it's an impressive package for the price, making it very competitive."",
                ""price"": 2072,
                ""specs"": {""material"": ""aluminium"", ""weight"": 7.9},
                ""colors"": [""black"", ""white""]
            },
            {
                ""id"": ""bike:3"",
                ""model"": ""Weywot"",
                ""description"": ""This bike gives kids aged six years and older a durable and uberlight mountain bike for their first experience on tracks and easy cruising through forests and fields. A set of powerful Shimano hydraulic disc brakes provide ample stopping ability. If you're after a budget option, this is one of the best bikes you could get."",
                ""price"": 3264,
                ""specs"": {""material"": ""alloy"", ""weight"": 13.8}
            }
        ],
        ""commuter_bikes"": [
            {
                ""id"": ""bike:4"",
                ""model"": ""Salacia"",
                ""description"": ""This bike is a great option for anyone who just wants a bike to get about on With a slick-shifting Claris gears from Shimano\u2019s, this is a bike which doesn\u2019t break the bank and delivers craved performance.  It\u2019s for the rider who wants both efficiency and capability."",
                ""price"": 1475,
                ""specs"": {""material"": ""aluminium"", ""weight"": 16.6},
                ""colors"": [""black"", ""silver""]
            },
            {
                ""id"": ""bike:5"",
                ""model"": ""Mimas"",
                ""description"": ""A real joy to ride, this bike got very high scores in last years Bike of the year report. The carefully crafted 50-34 tooth chainset and 11-32 tooth cassette give an easy-on-the-legs bottom gear for climbing, and the high-quality Vittoria Zaffiro tires give balance and grip.It includes a low-step frame , our memory foam seat, bump-resistant shocks and conveniently placed thumb throttle. Put it all together and you get a bike that helps redefine what can be done for this price."",
                ""price"": 3941,
                ""specs"": {""material"": ""alloy"", ""weight"": 11.6}
            }
        ]
    }
}";

        bool res28 = db.JSON().Set("bikes:inventory", "$", inventoryJson);
        Console.WriteLine(res28);   // >>> True
```

**Go:**

```go
	var inventory_json = map[string]interface{}{
		"inventory": map[string]interface{}{
			"mountain_bikes": []interface{}{
				map[string]interface{}{
					"id":    "bike:1",
					"model": "Phoebe",
					"description": "This is a mid-travel trail slayer that is a fantastic " +
						"daily driver or one bike quiver. The Shimano Claris 8-speed groupset " +
						"gives plenty of gear range to tackle hills and there\u2019s room for " +
						"mudguards and a rack too.  This is the bike for the rider who wants " +
						"trail manners with low fuss ownership.",
					"price":  1920,
					"specs":  map[string]interface{}{"material": "carbon", "weight": 13.1},
					"colors": []interface{}{"black", "silver"},
				},
				map[string]interface{}{
					"id":    "bike:2",
					"model": "Quaoar",
					"description": "Redesigned for the 2020 model year, this bike " +
						"impressed our testers and is the best all-around trail bike we've " +
						"ever tested. The Shimano gear system effectively does away with an " +
						"external cassette, so is super low maintenance in terms of wear " +
						"and tear. All in all it's an impressive package for the price, " +
						"making it very competitive.",
					"price":  2072,
					"specs":  map[string]interface{}{"material": "aluminium", "weight": 7.9},
					"colors": []interface{}{"black", "white"},
				},
				map[string]interface{}{
					"id":    "bike:3",
					"model": "Weywot",
					"description": "This bike gives kids aged six years and older " +
						"a durable and uberlight mountain bike for their first experience " +
						"on tracks and easy cruising through forests and fields. A set of " +
						"powerful Shimano hydraulic disc brakes provide ample stopping " +
						"ability. If you're after a budget option, this is one of the best " +
						"bikes you could get.",
					"price": 3264,
					"specs": map[string]interface{}{"material": "alloy", "weight": 13.8},
				},
			},
			"commuter_bikes": []interface{}{
				map[string]interface{}{
					"id":    "bike:4",
					"model": "Salacia",
					"description": "This bike is a great option for anyone who just " +
						"wants a bike to get about on With a slick-shifting Claris gears " +
						"from Shimano\u2019s, this is a bike which doesn\u2019t break the " +
						"bank and delivers craved performance.  It\u2019s for the rider " +
						"who wants both efficiency and capability.",
					"price":  1475,
					"specs":  map[string]interface{}{"material": "aluminium", "weight": 16.6},
					"colors": []interface{}{"black", "silver"},
				},
				map[string]interface{}{
					"id":    "bike:5",
					"model": "Mimas",
					"description": "A real joy to ride, this bike got very high " +
						"scores in last years Bike of the year report. The carefully " +
						"crafted 50-34 tooth chainset and 11-32 tooth cassette give an " +
						"easy-on-the-legs bottom gear for climbing, and the high-quality " +
						"Vittoria Zaffiro tires give balance and grip.It includes " +
						"a low-step frame , our memory foam seat, bump-resistant shocks and " +
						"conveniently placed thumb throttle. Put it all together and you " +
						"get a bike that helps redefine what can be done for this price.",
					"price": 3941,
					"specs": map[string]interface{}{"material": "alloy", "weight": 11.6},
				},
			},
		},
	}

	res1, err := rdb.JSONSet(ctx, "bikes:inventory", "$", inventory_json).Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(res1) // >>> OK
```

**Java (Asynchronous - Lettuce):**

```java
            String inventory_json_str = "{" + "    \"inventory\": {" + "        \"mountain_bikes\": [" + "            {"
                    + "                \"id\": \"bike:1\"," + "                \"model\": \"Phoebe\","
                    + "                \"description\": \"This is a mid-travel trail slayer that is a "
                    + "fantastic daily driver or one bike quiver. The Shimano Claris 8-speed groupset "
                    + "gives plenty of gear range to tackle hills and there\u2019s room for mudguards "
                    + "and a rack too.  This is the bike for the rider who wants trail manners with " + "low fuss ownership.\","
                    + "                \"price\": 1920,"
                    + "                \"specs\": {\"material\": \"carbon\", \"weight\": 13.1},"
                    + "                \"colors\": [\"black\", \"silver\"]" + "            }," + "            {"
                    + "                \"id\": \"bike:2\"," + "                \"model\": \"Quaoar\","
                    + "                \"description\": \"Redesigned for the 2020 model year, this "
                    + "bike impressed our testers and is the best all-around trail bike we've ever "
                    + "tested. The Shimano gear system effectively does away with an external cassette, "
                    + "so is super low maintenance in terms of wear and tear. All in all it's an "
                    + "impressive package for the price, making it very competitive.\"," + "                \"price\": 2072,"
                    + "                \"specs\": {\"material\": \"aluminium\", \"weight\": 7.9},"
                    + "                \"colors\": [\"black\", \"white\"]" + "            }," + "            {"
                    + "                \"id\": \"bike:3\"," + "                \"model\": \"Weywot\","
                    + "                \"description\": \"This bike gives kids aged six years and older "
                    + "a durable and uberlight mountain bike for their first experience on tracks and easy "
                    + "cruising through forests and fields. A set of powerful Shimano hydraulic disc brakes "
                    + "provide ample stopping ability. If you're after a budget option, this is one of the "
                    + "best bikes you could get.\"," + "                \"price\": 3264,"
                    + "                \"specs\": {\"material\": \"alloy\", \"weight\": 13.8}" + "            }" + "        ],"
                    + "        \"commuter_bikes\": [" + "            {" + "                \"id\": \"bike:4\","
                    + "                \"model\": \"Salacia\","
                    + "                \"description\": \"This bike is a great option for anyone who just "
                    + "wants a bike to get about on With a slick-shifting Claris gears from Shimano\u2019s, "
                    + "this is a bike which doesn\u2019t break the bank and delivers craved performance.  "
                    + "It\u2019s for the rider who wants both efficiency and capability.\","
                    + "                \"price\": 1475,"
                    + "                \"specs\": {\"material\": \"aluminium\", \"weight\": 16.6},"
                    + "                \"colors\": [\"black\", \"silver\"]" + "            }," + "            {"
                    + "                \"id\": \"bike:5\"," + "                \"model\": \"Mimas\","
                    + "                \"description\": \"A real joy to ride, this bike got very high scores "
                    + "in last years Bike of the year report. The carefully crafted 50-34 tooth chainset "
                    + "and 11-32 tooth cassette give an easy-on-the-legs bottom gear for climbing, and the "
                    + "high-quality Vittoria Zaffiro tires give balance and grip.It includes a low-step "
                    + "frame , our memory foam seat, bump-resistant shocks and conveniently placed thumb "
                    + "throttle. Put it all together and you get a bike that helps redefine what can be "
                    + "done for this price.\"," + "                \"price\": 3941,"
                    + "                \"specs\": {\"material\": \"alloy\", \"weight\": 11.6}" + "            }" + "        ]"
                    + "    }" + "}";

            Charset charset = Charset.forName("UTF-8");
            ByteBuffer inventory_json = charset.encode(inventory_json_str);

            CompletableFuture<Void> setBikes = asyncCommands
                    .jsonSet("bikes:inventory", JsonPath.ROOT_PATH, parser.loadJsonValue(inventory_json))
                    .thenAccept(System.out::println) // >>> OK
                    .toCompletableFuture();
```

**Java (Reactive - Lettuce):**

```java
            String inventory_json_str = "{" + "    \"inventory\": {" + "        \"mountain_bikes\": [" + "            {"
                    + "                \"id\": \"bike:1\"," + "                \"model\": \"Phoebe\","
                    + "                \"description\": \"This is a mid-travel trail slayer that is a "
                    + "fantastic daily driver or one bike quiver. The Shimano Claris 8-speed groupset "
                    + "gives plenty of gear range to tackle hills and there\u2019s room for mudguards "
                    + "and a rack too.  This is the bike for the rider who wants trail manners with " + "low fuss ownership.\","
                    + "                \"price\": 1920,"
                    + "                \"specs\": {\"material\": \"carbon\", \"weight\": 13.1},"
                    + "                \"colors\": [\"black\", \"silver\"]" + "            }," + "            {"
                    + "                \"id\": \"bike:2\"," + "                \"model\": \"Quaoar\","
                    + "                \"description\": \"Redesigned for the 2020 model year, this "
                    + "bike impressed our testers and is the best all-around trail bike we've ever "
                    + "tested. The Shimano gear system effectively does away with an external cassette, "
                    + "so is super low maintenance in terms of wear and tear. All in all it's an "
                    + "impressive package for the price, making it very competitive.\"," + "                \"price\": 2072,"
                    + "                \"specs\": {\"material\": \"aluminium\", \"weight\": 7.9},"
                    + "                \"colors\": [\"black\", \"white\"]" + "            }," + "            {"
                    + "                \"id\": \"bike:3\"," + "                \"model\": \"Weywot\","
                    + "                \"description\": \"This bike gives kids aged six years and older "
                    + "a durable and uberlight mountain bike for their first experience on tracks and easy "
                    + "cruising through forests and fields. A set of powerful Shimano hydraulic disc brakes "
                    + "provide ample stopping ability. If you're after a budget option, this is one of the "
                    + "best bikes you could get.\"," + "                \"price\": 3264,"
                    + "                \"specs\": {\"material\": \"alloy\", \"weight\": 13.8}" + "            }" + "        ],"
                    + "        \"commuter_bikes\": [" + "            {" + "                \"id\": \"bike:4\","
                    + "                \"model\": \"Salacia\","
                    + "                \"description\": \"This bike is a great option for anyone who just "
                    + "wants a bike to get about on With a slick-shifting Claris gears from Shimano\u2019s, "
                    + "this is a bike which doesn\u2019t break the bank and delivers craved performance.  "
                    + "It\u2019s for the rider who wants both efficiency and capability.\","
                    + "                \"price\": 1475,"
                    + "                \"specs\": {\"material\": \"aluminium\", \"weight\": 16.6},"
                    + "                \"colors\": [\"black\", \"silver\"]" + "            }," + "            {"
                    + "                \"id\": \"bike:5\"," + "                \"model\": \"Mimas\","
                    + "                \"description\": \"A real joy to ride, this bike got very high scores "
                    + "in last years Bike of the year report. The carefully crafted 50-34 tooth chainset "
                    + "and 11-32 tooth cassette give an easy-on-the-legs bottom gear for climbing, and the "
                    + "high-quality Vittoria Zaffiro tires give balance and grip.It includes a low-step "
                    + "frame , our memory foam seat, bump-resistant shocks and conveniently placed thumb "
                    + "throttle. Put it all together and you get a bike that helps redefine what can be "
                    + "done for this price.\"," + "                \"price\": 3941,"
                    + "                \"specs\": {\"material\": \"alloy\", \"weight\": 11.6}" + "            }" + "        ]"
                    + "    }" + "}";

            Charset charset = Charset.forName("UTF-8");
            ByteBuffer inventory_json = charset.encode(inventory_json_str);

            Mono<Void> setBikes = reactiveCommands
                    .jsonSet("bikes:inventory", JsonPath.ROOT_PATH, parser.loadJsonValue(inventory_json))
                    .doOnNext(System.out::println) // >>> OK
                    .then();
```

**Java (Synchronous - Jedis):**

```java
        String inventory_json = "{"
        + "    \"inventory\": {"
        + "        \"mountain_bikes\": ["
        + "            {"
        + "                \"id\": \"bike:1\","
        + "                \"model\": \"Phoebe\","
        + "                \"description\": \"This is a mid-travel trail slayer that is a "
        + "fantastic daily driver or one bike quiver. The Shimano Claris 8-speed groupset "
        + "gives plenty of gear range to tackle hills and there\u2019s room for mudguards "
        + "and a rack too.  This is the bike for the rider who wants trail manners with "
        + "low fuss ownership.\","
        + "                \"price\": 1920,"
        + "                \"specs\": {\"material\": \"carbon\", \"weight\": 13.1},"
        + "                \"colors\": [\"black\", \"silver\"]"
        + "            },"
        + "            {"
        + "                \"id\": \"bike:2\","
        + "                \"model\": \"Quaoar\","
        + "                \"description\": \"Redesigned for the 2020 model year, this "
        + "bike impressed our testers and is the best all-around trail bike we've ever "
        + "tested. The Shimano gear system effectively does away with an external cassette, "
        + "so is super low maintenance in terms of wear and tear. All in all it's an "
        + "impressive package for the price, making it very competitive.\","
        + "                \"price\": 2072,"
        + "                \"specs\": {\"material\": \"aluminium\", \"weight\": 7.9},"
        + "                \"colors\": [\"black\", \"white\"]"
        + "            },"
        + "            {"
        + "                \"id\": \"bike:3\","
        + "                \"model\": \"Weywot\","
        + "                \"description\": \"This bike gives kids aged six years and older "
        + "a durable and uberlight mountain bike for their first experience on tracks and easy "
        + "cruising through forests and fields. A set of powerful Shimano hydraulic disc brakes "
        + "provide ample stopping ability. If you're after a budget option, this is one of the "
        + "best bikes you could get.\","
        + "                \"price\": 3264,"
        + "                \"specs\": {\"material\": \"alloy\", \"weight\": 13.8}"
        + "            }"
        + "        ],"
        + "        \"commuter_bikes\": ["
        + "            {"
        + "                \"id\": \"bike:4\","
        + "                \"model\": \"Salacia\","
        + "                \"description\": \"This bike is a great option for anyone who just "
        + "wants a bike to get about on With a slick-shifting Claris gears from Shimano\u2019s, "
        + "this is a bike which doesn\u2019t break the bank and delivers craved performance.  "
        + "It\u2019s for the rider who wants both efficiency and capability.\","
        + "                \"price\": 1475,"
        + "                \"specs\": {\"material\": \"aluminium\", \"weight\": 16.6},"
        + "                \"colors\": [\"black\", \"silver\"]"
        + "            },"
        + "            {"
        + "                \"id\": \"bike:5\","
        + "                \"model\": \"Mimas\","
        + "                \"description\": \"A real joy to ride, this bike got very high scores "
        + "in last years Bike of the year report. The carefully crafted 50-34 tooth chainset "
        + "and 11-32 tooth cassette give an easy-on-the-legs bottom gear for climbing, and the "
        + "high-quality Vittoria Zaffiro tires give balance and grip.It includes a low-step "
        + "frame , our memory foam seat, bump-resistant shocks and conveniently placed thumb "
        + "throttle. Put it all together and you get a bike that helps redefine what can be "
        + "done for this price.\","
        + "                \"price\": 3941,"
        + "                \"specs\": {\"material\": \"alloy\", \"weight\": 11.6}"
        + "            }"
        + "        ]"
        + "    }"
        + "}";

        String res28 = jedis.jsonSet("bikes:inventory", new Path2("$"), inventory_json);
        System.out.println(res28);  // >>> OK
```

**JavaScript (Node.js):**

```javascript
const inventoryJSON = {
  "inventory": {
    "mountain_bikes": [{
        "id": "bike:1",
        "model": "Phoebe",
        "description": "This is a mid-travel trail slayer that is a fantastic daily driver or one bike quiver. The Shimano Claris 8-speed groupset gives plenty of gear range to tackle hills and there\u2019s room for mudguards and a rack too.  This is the bike for the rider who wants trail manners with low fuss ownership.",
        "price": 1920,
        "specs": {
          "material": "carbon",
          "weight": 13.1
        },
        "colors": ["black", "silver"],
      },
      {
        "id": "bike:2",
        "model": "Quaoar",
        "description": "Redesigned for the 2020 model year, this bike impressed our testers and is the best all-around trail bike we've ever tested. The Shimano gear system effectively does away with an external cassette, so is super low maintenance in terms of wear and teaawait client. All in all it's an impressive package for the price, making it very competitive.",
        "price": 2072,
        "specs": {
          "material": "aluminium",
          "weight": 7.9
        },
        "colors": ["black", "white"],
      },
      {
        "id": "bike:3",
        "model": "Weywot",
        "description": "This bike gives kids aged six years and older a durable and uberlight mountain bike for their first experience on tracks and easy cruising through forests and fields. A set of powerful Shimano hydraulic disc brakes provide ample stopping ability. If you're after a budget option, this is one of the best bikes you could get.",
        "price": 3264,
        "specs": {
          "material": "alloy",
          "weight": 13.8
        },
      },
    ],
    "commuter_bikes": [{
        "id": "bike:4",
        "model": "Salacia",
        "description": "This bike is a great option for anyone who just wants a bike to get about on With a slick-shifting Claris gears from Shimano\u2019s, this is a bike which doesn\u2019t break the bank and delivers craved performance.  It\u2019s for the rider who wants both efficiency and capability.",
        "price": 1475,
        "specs": {
          "material": "aluminium",
          "weight": 16.6
        },
        "colors": ["black", "silver"],
      },
      {
        "id": "bike:5",
        "model": "Mimas",
        "description": "A real joy to ride, this bike got very high scores in last years Bike of the year report. The carefully crafted 50-34 tooth chainset and 11-32 tooth cassette give an easy-on-the-legs bottom gear for climbing, and the high-quality Vittoria Zaffiro tires give balance and grip.It includes a low-step frame , our memory foam seat, bump-resistant shocks and conveniently placed thumb throttle. Put it all together and you get a bike that helps redefine what can be done for this price.",
        "price": 3941,
        "specs": {
          "material": "alloy",
          "weight": 11.6
        },
      },
    ],
  }
};

const res28 = await client.json.set("bikes:inventory", "$", inventoryJSON);
console.log(res28); //  OK
```

**PHP:**

```php
        $inventory = [
            'inventory' => [
                'mountain_bikes' => [
                    [
                        'id' => 'bike:1',
                        'model' => 'Phoebe',
                        'description' => 'This is a mid-travel trail slayer that is a fantastic daily driver or one bike quiver. The Shimano Claris 8-speed groupset gives plenty of gear range to tackle hills and thereâs room for mudguards and a rack too.  This is the bike for the rider who wants trail manners with low fuss ownership.',
                        'price' => 1920,
                        'specs' => ['material' => 'carbon', 'weight' => 13.1],
                        'colors' => ['black', 'silver'],
                    ],
                    [
                        'id' => 'bike:2',
                        'model' => 'Quaoar',
                        'description' => "Redesigned for the 2020 model year, this bike impressed our testers and is the best all-around trail bike we've ever tested. The Shimano gear system effectively does away with an external cassette, so is super low maintenance in terms of wear and tear. All in all it's an impressive package for the price, making it very competitive.",
                        'price' => 2072,
                        'specs' => ['material' => 'aluminium', 'weight' => 7.9],
                        'colors' => ['black', 'white'],
                    ],
                    [
                        'id' => 'bike:3',
                        'model' => 'Weywot',
                        'description' => 'This bike gives kids aged six years and older a durable and uberlight mountain bike for their first experience on tracks and easy cruising through forests and fields. A set of powerful Shimano hydraulic disc brakes provide ample stopping ability. If you\'re after a budget option, this is one of the best bikes you could get.',
                        'price' => 3264,
                        'specs' => ['material' => 'alloy', 'weight' => 13.8],
                    ],
                ],
                'commuter_bikes' => [
                    [
                        'id' => 'bike:4',
                        'model' => 'Salacia',
                        'description' => 'This bike is a great option for anyone who just wants a bike to get about on With a slick-shifting Claris gears from Shimanoâs, this is a bike which doesnât break the bank and delivers craved performance.  Itâs for the rider who wants both efficiency and capability.',
                        'price' => 1475,
                        'specs' => ['material' => 'aluminium', 'weight' => 16.6],
                        'colors' => ['black', 'silver'],
                    ],
                    [
                        'id' => 'bike:5',
                        'model' => 'Mimas',
                        'description' => 'A real joy to ride, this bike got very high scores in last years Bike of the year report. The carefully crafted 50-34 tooth chainset and 11-32 tooth cassette give an easy-on-the-legs bottom gear for climbing, and the high-quality Vittoria Zaffiro tires give balance and grip.It includes a low-step frame , our memory foam seat, bump-resistant shocks and conveniently placed thumb throttle. Put it all together and you get a bike that helps redefine what can be done for this price.',
                        'price' => 3941,
                        'specs' => ['material' => 'alloy', 'weight' => 11.6],
                    ],
                ],
            ],
        ];
        $res1b = $r->jsonset('bikes:inventory', '$', json_encode($inventory, JSON_THROW_ON_ERROR));
        echo $res1b . PHP_EOL;
        // >>> OK
```

**Python:**

```python
inventory_json = {
    "inventory": {
        "mountain_bikes": [
            {
                "id": "bike:1",
                "model": "Phoebe",
                "description": "This is a mid-travel trail slayer that is a fantastic "
                "daily driver or one bike quiver. The Shimano Claris 8-speed groupset "
                "gives plenty of gear range to tackle hills and there\u2019s room for "
                "mudguards and a rack too.  This is the bike for the rider who wants "
                "trail manners with low fuss ownership.",
                "price": 1920,
                "specs": {"material": "carbon", "weight": 13.1},
                "colors": ["black", "silver"],
            },
            {
                "id": "bike:2",
                "model": "Quaoar",
                "description": "Redesigned for the 2020 model year, this bike "
                "impressed our testers and is the best all-around trail bike we've "
                "ever tested. The Shimano gear system effectively does away with an "
                "external cassette, so is super low maintenance in terms of wear "
                "and tear. All in all it's an impressive package for the price, "
                "making it very competitive.",
                "price": 2072,
                "specs": {"material": "aluminium", "weight": 7.9},
                "colors": ["black", "white"],
            },
            {
                "id": "bike:3",
                "model": "Weywot",
                "description": "This bike gives kids aged six years and older "
                "a durable and uberlight mountain bike for their first experience "
                "on tracks and easy cruising through forests and fields. A set of "
                "powerful Shimano hydraulic disc brakes provide ample stopping "
                "ability. If you're after a budget option, this is one of the best "
                "bikes you could get.",
                "price": 3264,
                "specs": {"material": "alloy", "weight": 13.8},
            },
        ],
        "commuter_bikes": [
            {
                "id": "bike:4",
                "model": "Salacia",
                "description": "This bike is a great option for anyone who just "
                "wants a bike to get about on With a slick-shifting Claris gears "
                "from Shimano\u2019s, this is a bike which doesn\u2019t break the "
                "bank and delivers craved performance.  It\u2019s for the rider "
                "who wants both efficiency and capability.",
                "price": 1475,
                "specs": {"material": "aluminium", "weight": 16.6},
                "colors": ["black", "silver"],
            },
            {
                "id": "bike:5",
                "model": "Mimas",
                "description": "A real joy to ride, this bike got very high "
                "scores in last years Bike of the year report. The carefully "
                "crafted 50-34 tooth chainset and 11-32 tooth cassette give an "
                "easy-on-the-legs bottom gear for climbing, and the high-quality "
                "Vittoria Zaffiro tires give balance and grip.It includes "
                "a low-step frame , our memory foam seat, bump-resistant shocks and "
                "conveniently placed thumb throttle. Put it all together and you "
                "get a bike that helps redefine what can be done for this price.",
                "price": 3941,
                "specs": {"material": "alloy", "weight": 11.6},
            },
        ],
    }
}

res1 = r.json().set("bikes:inventory", "$", inventory_json)
print(res1)  # >>> True
```



### Access examples

The following examples use the [`JSON.GET`]() command to retrieve data from various paths in the JSON document.

You can use the wildcard operator `*` to return a list of all items in the inventory:

#### Code Examples

Wildcard queries: Use the * operator to retrieve all items in a collection when you need to access all elements at a specific level

**Builds upon:** set_bikes

**Commands:** JSON.GET

**Complexity:**
- JSON.GET: O(N)

**Redis CLI:**

```
> JSON.GET bikes:inventory $.inventory.*
"[[{\"id\":\"bike:1\",\"model\":\"Phoebe\",\"description\":\"This is a mid-travel trail slayer...
```

**Available in:** Redis CLI, C# (Synchronous), Go, Java (Asynchronous - Lettuce), Java (Reactive - Lettuce), Java (Synchronous - Jedis), JavaScript (Node.js), PHP, Python

**C# (Synchronous):**

```csharp
        RedisResult res29 = db.JSON().Get("bikes:inventory", path: "$.inventory.*");
        Console.WriteLine(res29);   // >>> {[[{"id":"bike:1","model":"Phoebe", ...
```

**Go:**

```go
	res2, err := rdb.JSONGetWithArgs(ctx, "bikes:inventory",
		&redis.JSONGetArgs{Indent: "  ", Newline: "\n", Space: " "},
		"$.inventory.*",
	).Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(res2)
	// >>>
	// [
	//   [
	//     {
	//       "colors": [
	//         "black",
	//         "silver"
	// ...
```

**Java (Asynchronous - Lettuce):**

```java
            CompletableFuture<Void> getBikes = asyncCommands.jsonGet("bikes:inventory", JsonPath.of("$.inventory.*"))
                    .thenAccept(System.out::println)
                    // >>> [[[{"id":"bike:1","model":"Phoebe",...
                    .toCompletableFuture();
```

**Java (Reactive - Lettuce):**

```java
            Mono<Void> getBikes = reactiveCommands.jsonGet("bikes:inventory", JsonPath.of("$.inventory.*")).collectList()
                    .doOnNext(System.out::println) // >>> [[[{"id":"bike:1","model":"Phoebe",...
                    .then();
```

**Java (Synchronous - Jedis):**

```java
        Object res29 = jedis.jsonGet("bikes:inventory", new Path2("$.inventory.*"));
        System.out.println(res29);
        // >>> [[{"specs":{"material":"carbon","weight":13.1},"price":1920, ...
```

**JavaScript (Node.js):**

```javascript
const res29 = await client.json.get("bikes:inventory", {
  path: "$.inventory.*"
});
console.log(res29);
/*
[
  [
    {
      id: 'bike:1',
      model: 'Phoebe',
      description: 'This is a mid-travel trail slayer that is a fantastic daily driver or one bike quiver. The Shimano Claris 8-speed groupset gives plenty of gear range to tackle hills and thereâs room for mudguards and a rack too.  This is the bike for the rider who wants trail manners with low fuss ownership.',
      price: 1920,
      specs: [Object],
      colors: [Array]
    },
    {
      id: 'bike:2',
      model: 'Quaoar',
      description: "Redesigned for the 2020 model year, this bike impressed our testers and is the best all-around trail bike we've ever tested. The Shimano gear system effectively does away with an external cassette, so is super low maintenance in terms of wear and teaawait client. All in all it's an impressive package for the price, making it very competitive.",
      price: 2072,
      specs: [Object],
      colors: [Array]
    },
    {
      id: 'bike:3',
      model: 'Weywot',
      description: "This bike gives kids aged six years and older a durable and uberlight mountain bike for their first experience on tracks and easy cruising through forests and fields. A set of powerful Shimano hydraulic disc brakes provide ample stopping ability. If you're after a budget option, this is one of the best bikes you could get.",
      price: 3264,
      specs: [Object]
    }
  ],
  [
    {
      id: 'bike:4',
      model: 'Salacia',
      description: 'This bike is a great option for anyone who just wants a bike to get about on With a slick-shifting Claris gears from Shimanoâs, this is a bike which doesnât break the bank and delivers craved performance.  Itâs for the rider who wants both efficiency and capability.',
      price: 1475,
      specs: [Object],
      colors: [Array]
    },
    {
      id: 'bike:5',
      model: 'Mimas',
      description: 'A real joy to ride, this bike got very high scores in last years Bike of the year report. The carefully crafted 50-34 tooth chainset and 11-32 tooth cassette give an easy-on-the-legs bottom gear for climbing, and the high-quality Vittoria Zaffiro tires give balance and grip.It includes a low-step frame , our memory foam seat, bump-resistant shocks and conveniently placed thumb throttle. Put it all together and you get a bike that helps redefine what can be done for this price.',
      price: 3941,
      specs: [Object]
    }
  ]
]
*/
```

**PHP:**

```php
        $res2b = $r->jsonget('bikes:inventory', '', '', '', '$.inventory.*');
        echo $res2b . PHP_EOL;
        // >>> [{'id': 'bike:1', 'model': 'Phoebe',
```

**Python:**

```python
res2 = r.json().get("bikes:inventory", "$.inventory.*")
print(res2)
# >>>    [[{'id': 'bike:1', 'model': 'Phoebe',
# >>>       'description': 'This is a mid-travel trail slayer...
```



For some queries, multiple paths can produce the same results. For example, the following paths return the names of all mountain bikes:

#### Code Examples

Array element access: Use bracket notation and array subscripts to access specific array elements or all elements with [*] when you need to retrieve values from arrays

**Difficulty:** Intermediate

**Builds upon:** get_bikes

**Commands:** JSON.GET

**Complexity:**
- JSON.GET: O(N)

**Redis CLI:**

```
> JSON.GET bikes:inventory $.inventory.mountain_bikes[*].model
"[\"Phoebe\",\"Quaoar\",\"Weywot\"]"
> JSON.GET bikes:inventory '$.inventory["mountain_bikes"][*].model'
"[\"Phoebe\",\"Quaoar\",\"Weywot\"]"
> JSON.GET bikes:inventory '$..mountain_bikes[*].model'
"[\"Phoebe\",\"Quaoar\",\"Weywot\"]"
```

**Available in:** Redis CLI, C# (Synchronous), Go, Java (Asynchronous - Lettuce), Java (Reactive - Lettuce), Java (Synchronous - Jedis), JavaScript (Node.js), PHP, Python

**C# (Synchronous):**

```csharp
        RedisResult res30 = db.JSON().Get("bikes:inventory", path: "$.inventory.mountain_bikes[*].model");
        Console.WriteLine(res30);   // >>> ["Phoebe","Quaoar","Weywot"]

        RedisResult res31 = db.JSON().Get("bikes:inventory", path: "$.inventory[\"mountain_bikes\"][*].model");
        Console.WriteLine(res31);   // >>> ["Phoebe","Quaoar","Weywot"]

        RedisResult res32 = db.JSON().Get("bikes:inventory", path: "$..mountain_bikes[*].model");
        Console.WriteLine(res32);   // >>> ["Phoebe","Quaoar","Weywot"]
```

**Go:**

```go
	res3, err := rdb.JSONGet(ctx, "bikes:inventory",
		"$.inventory.mountain_bikes[*].model",
	).Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(res3)
	// >>> ["Phoebe","Quaoar","Weywot"]

	res4, err := rdb.JSONGet(ctx,
		"bikes:inventory", "$.inventory[\"mountain_bikes\"][*].model",
	).Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(res4)
	// >>> ["Phoebe","Quaoar","Weywot"]

	res5, err := rdb.JSONGet(ctx,
		"bikes:inventory", "$..mountain_bikes[*].model",
	).Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(res5)
	// >>> ["Phoebe","Quaoar","Weywot"]
```

**Java (Asynchronous - Lettuce):**

```java
            CompletableFuture<Void> getMtnBikes = asyncCommands
                    .jsonGet("bikes:inventory", JsonPath.of("$.inventory.mountain_bikes[*].model")).thenCompose(res19 -> {
                        System.out.println(res19); // >>> [["Phoebe","Quaoar","Weywot"]]
                        return asyncCommands.jsonGet("bikes:inventory",
                                JsonPath.of("$.inventory[\"mountain_bikes\"][*].model"));
                    }).thenCompose(res20 -> {
                        System.out.println(res20); // >>> [["Phoebe","Quaoar","Weywot"]]
                        return asyncCommands.jsonGet("bikes:inventory", JsonPath.of("$..mountain_bikes[*].model"));
                    })
                    .thenAccept(System.out::println)
                    // >>> [["Phoebe","Quaoar","Weywot"]]
                    .toCompletableFuture();
```

**Java (Reactive - Lettuce):**

```java
            Mono<Void> getMtnBikes = reactiveCommands
                    .jsonGet("bikes:inventory", JsonPath.of("$.inventory.mountain_bikes[*].model")).collectList()
                    .doOnNext(res19 -> {
                        System.out.println(res19); // >>> [["Phoebe","Quaoar","Weywot"]]
                    })
                    .flatMap(res19 -> reactiveCommands
                            .jsonGet("bikes:inventory", JsonPath.of("$.inventory[\"mountain_bikes\"][*].model")).collectList())
                    .doOnNext(res20 -> {
                        System.out.println(res20); // >>> [["Phoebe","Quaoar","Weywot"]]
                    })
                    .flatMap(res20 -> reactiveCommands.jsonGet("bikes:inventory", JsonPath.of("$..mountain_bikes[*].model"))
                            .collectList())
                    .doOnNext(System.out::println) // >>> [["Phoebe","Quaoar","Weywot"]]
                    .then();
```

**Java (Synchronous - Jedis):**

```java
        Object res30 = jedis.jsonGet(
            "bikes:inventory", new Path2("$.inventory.mountain_bikes[*].model")
        );
        System.out.println(res30);  // >>> ["Phoebe","Quaoar","Weywot"]

        Object res31 = jedis.jsonGet(
            "bikes:inventory", new Path2("$.inventory[\"mountain_bikes\"][*].model")
        );
        System.out.println(res31);  // >>> ["Phoebe","Quaoar","Weywot"]

        Object res32 = jedis.jsonGet(
            "bikes:inventory", new Path2("$..mountain_bikes[*].model")
        );
        System.out.println(res32);  // >>> ["Phoebe","Quaoar","Weywot"]
```

**JavaScript (Node.js):**

```javascript
const res30 = await client.json.get("bikes:inventory", {
  path: "$.inventory.mountain_bikes[*].model"
});
console.log(res30); //  ['Phoebe', 'Quaoar', 'Weywot']

const res31 = await client.json.get("bikes:inventory", {
  path: '$.inventory["mountain_bikes"][*].model'
});
console.log(res31); //  ['Phoebe', 'Quaoar', 'Weywot']

const res32 = await client.json.get("bikes:inventory", {
  path: "$..mountain_bikes[*].model"
});
console.log(res32); //  ['Phoebe', 'Quaoar', 'Weywot']
```

**PHP:**

```php
        $res3b = $r->jsonget('bikes:inventory', '', '', '', '$.inventory.mountain_bikes[*].model');
        echo $res3b . PHP_EOL;
        // >>> ["Phoebe","Quaoar","Weywot"]

        $res4b = $r->jsonget('bikes:inventory', '', '', '', '$.inventory["mountain_bikes"][*].model');
        echo $res4b . PHP_EOL;
        // >>> ["Phoebe","Quaoar","Weywot"]

        $res5b = $r->jsonget('bikes:inventory', '', '', '', '$..mountain_bikes[*].model');
        echo $res5b . PHP_EOL;
        // >>> ["Phoebe","Quaoar","Weywot"]
```

**Python:**

```python
res3 = r.json().get("bikes:inventory", "$.inventory.mountain_bikes[*].model")
print(res3)  # >>> [['Phoebe', 'Quaoar', 'Weywot']]

res4 = r.json().get("bikes:inventory", '$.inventory["mountain_bikes"][*].model')
print(res4)  # >>> [['Phoebe', 'Quaoar', 'Weywot']]

res5 = r.json().get("bikes:inventory", "$..mountain_bikes[*].model")
print(res5)  # >>> [['Phoebe', 'Quaoar', 'Weywot']]
```



The recursive descent operator `..` can retrieve a field from multiple sections of a JSON document. The following example returns the names of all inventory items:

#### Code Examples

Recursive descent: Use the .. operator to search for a field at any depth in the JSON document when you need to find values across multiple nesting levels

**Difficulty:** Intermediate

**Builds upon:** get_mtnbikes

**Commands:** JSON.GET

**Complexity:**
- JSON.GET: O(N)

**Redis CLI:**

```
> JSON.GET bikes:inventory $..model
"[\"Phoebe\",\"Quaoar\",\"Weywot\",\"Salacia\",\"Mimas\"]"
```

**Available in:** Redis CLI, C# (Synchronous), Go, Java (Asynchronous - Lettuce), Java (Reactive - Lettuce), Java (Synchronous - Jedis), JavaScript (Node.js), PHP, Python

**C# (Synchronous):**

```csharp
        RedisResult res33 = db.JSON().Get("bikes:inventory", path: "$..model");
        Console.WriteLine(res33);   // >>> ["Phoebe","Quaoar","Weywot","Salacia","Mimas"]
```

**Go:**

```go
	res6, err := rdb.JSONGet(ctx, "bikes:inventory", "$..model").Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(res6) // >>> ["Salacia","Mimas","Phoebe","Quaoar","Weywot"]
```

**Java (Asynchronous - Lettuce):**

```java
            CompletableFuture<Void> getModels = asyncCommands.jsonGet("bikes:inventory", JsonPath.of("$..model"))
                    .thenAccept(System.out::println)
                    // >>> [["Phoebe","Quaoar","Weywot","Salacia","Mimas"]]
                    .toCompletableFuture();
```

**Java (Reactive - Lettuce):**

```java
            Mono<Void> getModels = reactiveCommands.jsonGet("bikes:inventory", JsonPath.of("$..model")).collectList()
                    .doOnNext(System.out::println) // >>> [["Phoebe","Quaoar","Weywot","Salacia","Mimas"]]
                    .then();
```

**Java (Synchronous - Jedis):**

```java
        Object res33 = jedis.jsonGet("bikes:inventory", new Path2("$..model"));
        System.out.println(res33);
        // >>> ["Phoebe","Quaoar","Weywot","Salacia","Mimas"]
```

**JavaScript (Node.js):**

```javascript
const res33 = await client.json.get("bikes:inventory", {
  path: "$..model"
});
console.log(res33); //  ['Phoebe', 'Quaoar', 'Weywot', 'Salacia', 'Mimas']
```

**PHP:**

```php
        $res6b = $r->jsonget('bikes:inventory', '', '', '', '$..model');
        echo $res6b . PHP_EOL;
        // >>> ["Phoebe","Quaoar","Weywot","Salacia","Mimas"]
```

**Python:**

```python
res6 = r.json().get("bikes:inventory", "$..model")
print(res6)  # >>> [['Phoebe', 'Quaoar', 'Weywot', 'Salacia', 'Mimas']]
```



You can use an array slice to select a range of elements from an array. This example returns the names of the first 2 mountain bikes:

#### Code Examples

Array slicing: Use [start:end] syntax to select a range of array elements when you need to retrieve a subset of items from an array

**Difficulty:** Intermediate

**Builds upon:** get_mtnbikes

**Commands:** JSON.GET

**Complexity:**
- JSON.GET: O(N)

**Redis CLI:**

```
> JSON.GET bikes:inventory $..mountain_bikes[0:2].model
"[\"Phoebe\",\"Quaoar\"]"
```

**Available in:** Redis CLI, C# (Synchronous), Go, Java (Asynchronous - Lettuce), Java (Reactive - Lettuce), Java (Synchronous - Jedis), JavaScript (Node.js), PHP, Python

**C# (Synchronous):**

```csharp
        RedisResult res34 = db.JSON().Get("bikes:inventory", path: "$..mountain_bikes[0:2].model");
        Console.WriteLine(res34);   // >>> ["Phoebe","Quaoar"]
```

**Go:**

```go
	res7, err := rdb.JSONGet(ctx, "bikes:inventory", "$..mountain_bikes[0:2].model").Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(res7) // >>> ["Phoebe","Quaoar"]
```

**Java (Asynchronous - Lettuce):**

```java
            CompletableFuture<Void> get2MtnBikes = asyncCommands
                    .jsonGet("bikes:inventory", JsonPath.of("$..mountain_bikes[0:2].model"))
                    .thenAccept(System.out::println)
                    // >>> [["Phoebe","Quaoar"]]
                    .toCompletableFuture();
```

**Java (Reactive - Lettuce):**

```java
            Mono<Void> get2MtnBikes = reactiveCommands.jsonGet("bikes:inventory", JsonPath.of("$..mountain_bikes[0:2].model"))
                    .collectList()
                    .doOnNext(System.out::println) // >>> [["Phoebe","Quaoar"]]
                    .then();
```

**Java (Synchronous - Jedis):**

```java
        Object res34 = jedis.jsonGet(
            "bikes:inventory", new Path2("$..mountain_bikes[0:2].model")
        );
        System.out.println(res34);  // >>> ["Phoebe","Quaoar"]
```

**JavaScript (Node.js):**

```javascript
const res34 = await client.json.get("bikes:inventory", {
  path: "$..mountain_bikes[0:2].model"
});
console.log(res34); //  ['Phoebe', 'Quaoar']
```

**PHP:**

```php
        $res7b = $r->jsonget('bikes:inventory', '', '', '', '$..mountain_bikes[0:2].model');
        echo $res7b . PHP_EOL;
        // >>> ["Phoebe","Quaoar"]
```

**Python:**

```python
res7 = r.json().get("bikes:inventory", "$..mountain_bikes[0:2].model")
print(res7)  # >>> [['Phoebe', 'Quaoar']]
```



Filter expressions `?()` let you select JSON elements based on certain conditions. You can use comparison operators (`==`, `!=`, `<`, `<=`, `>`, `>=`, and starting with version v2.4.2, also `=~`), logical operators (`&&`, `||`), and parenthesis (`(`, `)`) within these expressions. A filter expression can be applied on an array or on an object, iterating over all the **elements** in the array or all the **values** in the object, retrieving only the ones that match the filter condition. 

Paths within the filter condition use the dot notation with either `@` to denote the current array element or the current object value, or `$` to denote the top-level element. For example, use `@.key_name` to refer to a nested value and `$.top_level_key_name` to refer to a top-level value.

From version v2.4.2 onward, you can use the comparison operator `=~` to match a path of a string value on the left side against a regular expression pattern on the right side. For more information, see the [supported regular expression syntax docs](https://docs.rs/regex/latest/regex/#syntax).

Non-string values do not match. A match can only occur when the left side is a path of a string value and the right side is either a hard-coded string, or a path of a string value. See [examples](#json-filter-examples) below.

The regex match is partial, meaning a regex pattern like `"foo"` matches a string such as `"barefoots"`.
To make the match exact, use the regex pattern `"^foo$"`.

Other JSONPath engines may use regex patterns between slashes (for example, `/foo/`),
and their match is exact. They can perform partial matches using a regex pattern such
as `/.*foo.*/`.

### Filter examples

In the following example, the filter only returns mountain bikes with a price less than 3000 and
a weight less than 10:

#### Code Examples

Filter expressions: Use ?() with comparison and logical operators to select elements matching specific conditions when you need to query based on multiple criteria

**Difficulty:** Advanced

**Builds upon:** get_models

**Commands:** JSON.GET

**Complexity:**
- JSON.GET: O(N)

**Redis CLI:**

```
> JSON.GET bikes:inventory '$..mountain_bikes[?(@.price < 3000 && @.specs.weight < 10)]'
"[{\"id\":\"bike:2\",\"model\":\"Quaoar\",\"description\":\"Redesigned for the 2020 model year...
```

**Available in:** Redis CLI, C# (Synchronous), Go, Java (Asynchronous - Lettuce), Java (Reactive - Lettuce), Java (Synchronous - Jedis), JavaScript (Node.js), PHP, Python

**C# (Synchronous):**

```csharp
        RedisResult res35 = db.JSON().Get(
            "bikes:inventory",
            path: "$..mountain_bikes[?(@.price < 3000 && @.specs.weight < 10)]"
        );
        Console.WriteLine(res35);
        // >>> [{"id":"bike:2","model":"Quaoar","description":"Redesigned for the 2020 model year...
```

**Go:**

```go
	res8, err := rdb.JSONGetWithArgs(ctx, "bikes:inventory",
		&redis.JSONGetArgs{Indent: "  ", Newline: "\n", Space: " "},
		"$..mountain_bikes[?(@.price < 3000 && @.specs.weight < 10)]",
	).Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(res8)
	// >>>
	// [
	//   {
	//     "colors": [
	//       "black",
	//       "white"
	//     ],
	//     "description": "Redesigned for the 2020 model year
	// ...
```

**Java (Asynchronous - Lettuce):**

```java
            CompletableFuture<Void> filter1 = asyncCommands
                    .jsonGet("bikes:inventory", JsonPath.of("$..mountain_bikes[?(@.price < 3000 && @.specs.weight < 10)]"))
                    .thenAccept(System.out::println)
                    // >>> [[{"id":"bike:2","model":"Quaoar","description":...
                    .toCompletableFuture();
```

**Java (Reactive - Lettuce):**

```java
            Mono<Void> filter1 = reactiveCommands
                    .jsonGet("bikes:inventory", JsonPath.of("$..mountain_bikes[?(@.price < 3000 && @.specs.weight < 10)]"))
                    .collectList()
                    .doOnNext(System.out::println) // >>> [[{"id":"bike:2","model":"Quaoar","description":...
                    .then();
```

**Java (Synchronous - Jedis):**

```java
        Object res35 = jedis.jsonGet(
            "bikes:inventory",
            new Path2("$..mountain_bikes[?(@.price < 3000 && @.specs.weight < 10)]")
        );
        System.out.println(res35);
        // >>> [{"specs":{"material":"aluminium","weight":7.9},"price":2072,...
```

**JavaScript (Node.js):**

```javascript
const res35 = await client.json.get("bikes:inventory", {
  path: "$..mountain_bikes[?(@.price < 3000 && @.specs.weight < 10)]"
});
console.log(res35);
/*
[
  {
    id: 'bike:2',
    model: 'Quaoar',
    description: "Redesigned for the 2020 model year, this bike impressed our testers and is the best all-around trail bike we've ever tested. The Shimano gear system effectively does away with an external cassette, so is super low maintenance in terms of wear and teaawait client. All in all it's an impressive package for the price, making it very competitive.",
    price: 2072,
    specs: { material: 'aluminium', weight: 7.9 },
    colors: [ 'black', 'white' ]
  }
]
*/
```

**PHP:**

```php
        $res8b = $r->jsonget(
            'bikes:inventory',
            '',
            '',
            '',
            '$..mountain_bikes[?(@.price < 3000 && @.specs.weight < 10)]'
        );
        echo $res8b . PHP_EOL;
        // >>> [{"id":"bike:2","model":"Quaoar",...}]
```

**Python:**

```python
res8 = r.json().get(
    "bikes:inventory",
    "$..mountain_bikes[?(@.price < 3000 && @.specs.weight < 10)]",
)
print(res8)
# >>> [{'id': 'bike:2', 'model': 'Quaoar',
#           'description': "Redesigned for the 2020 model year...
```



This example filters the inventory for the model names of bikes made from alloy:

#### Code Examples

Equality filters: Use == operator in filter expressions to select elements with specific field values when you need to find items matching exact criteria

**Difficulty:** Advanced

**Builds upon:** filter1

**Commands:** JSON.GET

**Complexity:**
- JSON.GET: O(N)

**Redis CLI:**

```
> JSON.GET bikes:inventory '$..[?(@.specs.material == "alloy")].model'
"[\"Weywot\",\"Mimas\"]"
```

**Available in:** Redis CLI, C# (Synchronous), Go, Java (Asynchronous - Lettuce), Java (Reactive - Lettuce), Java (Synchronous - Jedis), JavaScript (Node.js), PHP, Python

**C# (Synchronous):**

```csharp
        RedisResult res36 = db.JSON().Get(
            "bikes:inventory",
            path: "$..[?(@.specs.material == 'alloy')].model"
        );
        Console.WriteLine(res36);   // >>> ["Weywot","Mimas"]
```

**Go:**

```go
	res9, err := rdb.JSONGet(ctx,
		"bikes:inventory",
		"$..[?(@.specs.material == 'alloy')].model",
	).Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(res9) // >>> ["Mimas","Weywot"]
```

**Java (Asynchronous - Lettuce):**

```java
            CompletableFuture<Void> filter2 = asyncCommands
                    .jsonGet("bikes:inventory", JsonPath.of("$..[?(@.specs.material == 'alloy')].model"))
                    .thenAccept(System.out::println)
                    // >>> [["Weywot","Mimas"]]
                    .toCompletableFuture();
```

**Java (Reactive - Lettuce):**

```java
            Mono<Void> filter2 = reactiveCommands
                    .jsonGet("bikes:inventory", JsonPath.of("$..[?(@.specs.material == 'alloy')].model")).collectList()
                    .doOnNext(System.out::println) // >>> [["Weywot","Mimas"]]
                    .then();
```

**Java (Synchronous - Jedis):**

```java
        Object res36 = jedis.jsonGet(
            "bikes:inventory", new Path2("$..[?(@.specs.material == 'alloy')].model")
        );
        System.out.println(res36);  // >>> ["Weywot","Mimas"]
```

**JavaScript (Node.js):**

```javascript
//  names of bikes made from an alloy
const res36 = await client.json.get("bikes:inventory", {
  path: "$..[?(@.specs.material == 'alloy')].model"
});
console.log(res36); //  ['Weywot', 'Mimas']
```

**PHP:**

```php
        $res9b = $r->jsonget('bikes:inventory', '', '', '', "$..[?(@.specs.material == 'alloy')].model");
        echo $res9b . PHP_EOL;
        // >>> ["Weywot","Mimas"]
```

**Python:**

```python
res9 = r.json().get("bikes:inventory", "$..[?(@.specs.material == 'alloy')].model")
print(res9)  # >>> ['Weywot', 'Mimas']
```



This example, valid from version v2.4.2 onwards, filters only bikes whose material begins with
"al-" using regex match. Note that this match is case-insensitive because of the prefix `(?i)` in
the regular expression pattern `"(?i)al"`:

#### Code Examples

Regex filters: Use =~ operator with regular expressions in filter expressions to match patterns in string values when you need flexible pattern-based filtering

**Difficulty:** Advanced

**Builds upon:** filter2

**Redis CLI:**

```
JSON.GET bikes:inventory '$..[?(@.specs.material =~ "(?i)al")].model'
"[\"Quaoar\",\"Weywot\",\"Salacia\",\"Mimas\"]"
```

**Available in:** Redis CLI, C# (Synchronous), Go, Java (Asynchronous - Lettuce), Java (Reactive - Lettuce), Java (Synchronous - Jedis), JavaScript (Node.js), PHP, Python

**C# (Synchronous):**

```csharp
        RedisResult res37 = db.JSON().Get(
            "bikes:inventory",
            path: "$..[?(@.specs.material =~ '(?i)al')].model"
        );
        Console.WriteLine(res37);   // >>> ["Quaoar","Weywot","Salacia","Mimas"]
```

**Go:**

```go
	res10, err := rdb.JSONGet(ctx,
		"bikes:inventory",
		"$..[?(@.specs.material =~ '(?i)al')].model",
	).Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(res10) // >>> ["Salacia","Mimas","Quaoar","Weywot"]
```

**Java (Asynchronous - Lettuce):**

```java
            CompletableFuture<Void> filter3 = asyncCommands
                    .jsonGet("bikes:inventory", JsonPath.of("$..[?(@.specs.material =~ '(?i)al')].model"))
                    .thenAccept(System.out::println)
                    // >>> [["Quaoar","Weywot","Salacia","Mimas"]]
                    .toCompletableFuture();
```

**Java (Reactive - Lettuce):**

```java
            Mono<Void> filter3 = reactiveCommands
                    .jsonGet("bikes:inventory", JsonPath.of("$..[?(@.specs.material =~ '(?i)al')].model")).collectList()
                    .doOnNext(System.out::println) // >>> [["Quaoar","Weywot","Salacia","Mimas"]]
                    .then();
```

**Java (Synchronous - Jedis):**

```java
        Object res37 = jedis.jsonGet(
            "bikes:inventory", new Path2("$..[?(@.specs.material =~ '(?i)al')].model")
        );
        System.out.println(res37);
        // >>> ["Quaoar","Weywot","Salacia","Mimas"]
```

**JavaScript (Node.js):**

```javascript
const res37 = await client.json.get("bikes:inventory", {
  path: "$..[?(@.specs.material =~ '(?i)al')].model"
});
console.log(res37); //  ['Quaoar', 'Weywot', 'Salacia', 'Mimas']
```

**PHP:**

```php
        $res10b = $r->jsonget('bikes:inventory', '', '', '', "$..[?(@.specs.material =~ '(?i)al')].model");
        echo $res10b . PHP_EOL;
        // >>> ["Quaoar","Weywot","Salacia","Mimas"]
```

**Python:**

```python
res10 = r.json().get("bikes:inventory", "$..[?(@.specs.material =~ '(?i)al')].model")
print(res10)  # >>> ['Quaoar', 'Weywot', 'Salacia', 'Mimas']
```



You can also specify a regex pattern using a property from the JSON object itself.
For example, we can add a string property named `regex_pat` to each mountain bike,
with the value `"(?i)al"` to match the material, as in the previous example. We
can then match `regex_pat` against the bike's material: 

#### Code Examples

Dynamic regex filters: Use regex patterns stored in JSON properties to filter elements when you need to apply patterns defined within the document itself

**Difficulty:** Advanced

**Builds upon:** filter3

**Commands:** JSON.SET, JSON.GET

**Complexity:**
- JSON.SET: O(M+N)
- JSON.GET: O(N)

**Redis CLI:**

```
> JSON.SET bikes:inventory $.inventory.mountain_bikes[0].regex_pat '"(?i)al"'
OK
> JSON.SET bikes:inventory $.inventory.mountain_bikes[1].regex_pat '"(?i)al"'
OK
> JSON.SET bikes:inventory $.inventory.mountain_bikes[2].regex_pat '"(?i)al"'
OK
> JSON.GET bikes:inventory '$.inventory.mountain_bikes[?(@.specs.material =~ @.regex_pat)].model'
"[\"Quaoar\",\"Weywot\"]"
```

**Available in:** Redis CLI, C# (Synchronous), Go, Java (Asynchronous - Lettuce), Java (Reactive - Lettuce), Java (Synchronous - Jedis), JavaScript (Node.js), PHP, Python

**C# (Synchronous):**

```csharp
        bool res38 = db.JSON().Set(
            "bikes:inventory",
            "$.inventory.mountain_bikes[0].regex_pat",
            "\"(?i)al\""
        );
        Console.WriteLine(res38);   // >>> True

        bool res39 = db.JSON().Set(
            "bikes:inventory",
            "$.inventory.mountain_bikes[1].regex_pat",
            "\"(?i)al\""
        );
        Console.WriteLine(res39);   // >>> True

        bool res40 = db.JSON().Set(
            "bikes:inventory",
            "$.inventory.mountain_bikes[2].regex_pat",
            "\"(?i)al\""
        );
        Console.WriteLine(res40);   // >>> True

        RedisResult res41 = db.JSON().Get(
            "bikes:inventory",
            path: "$.inventory.mountain_bikes[?(@.specs.material =~ @.regex_pat)].model"
        );
        Console.WriteLine(res41);   // >>> ["Quaoar","Weywot"]
```

**Go:**

```go
	res11, err := rdb.JSONSet(ctx,
		"bikes:inventory",
		"$.inventory.mountain_bikes[0].regex_pat",
		"\"(?i)al\"",
	).Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(res11) // >>> OK

	res12, err := rdb.JSONSet(ctx,
		"bikes:inventory",
		"$.inventory.mountain_bikes[1].regex_pat",
		"\"(?i)al\"",
	).Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(res12) // >>> OK

	res13, err := rdb.JSONSet(ctx,
		"bikes:inventory",
		"$.inventory.mountain_bikes[2].regex_pat",
		"\"(?i)al\"",
	).Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(res13) // >>> OK

	res14, err := rdb.JSONGet(ctx,
		"bikes:inventory",
		"$.inventory.mountain_bikes[?(@.specs.material =~ @.regex_pat)].model",
	).Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(res14) // >>> ["Quaoar","Weywot"]
```

**Java (Asynchronous - Lettuce):**

```java
            CompletableFuture<Void> filter4 = asyncCommands.jsonSet("bikes:inventory",
                    JsonPath.of("$.inventory.mountain_bikes[0].regex_pat"), parser.createJsonValue("\"(?i)al\""))
                    .thenCompose(r -> {
                        System.out.println(r); // >>> OK

                        return asyncCommands.jsonSet("bikes:inventory", JsonPath.of("$.inventory.mountain_bikes[1].regex_pat"),
                                parser.createJsonValue("\"(?i)al\""));
                    }).thenCompose(r -> {
                        System.out.println(r); // >>> OK

                        return asyncCommands.jsonSet("bikes:inventory", JsonPath.of("$.inventory.mountain_bikes[2].regex_pat"),
                                parser.createJsonValue("\"(?i)al\""));
                    }).thenCompose(res22 -> {
                        System.out.println(res22); // >>> OK

                        return asyncCommands.jsonGet("bikes:inventory",
                                JsonPath.of("$.inventory.mountain_bikes[?(@.specs.material =~ @.regex_pat)].model"));
                    })
                    .thenAccept(System.out::println)
                    // >>> [["Quaoar","Weywot"]]
                    .toCompletableFuture();
```

**Java (Reactive - Lettuce):**

```java
            Mono<Void> filter4 = reactiveCommands.jsonSet("bikes:inventory",
                    JsonPath.of("$.inventory.mountain_bikes[0].regex_pat"), parser.createJsonValue("\"(?i)al\""))
                    .doOnNext(r -> {
                        System.out.println(r); // >>> OK
                    })
                    .flatMap(r -> reactiveCommands.jsonSet("bikes:inventory",
                            JsonPath.of("$.inventory.mountain_bikes[1].regex_pat"), parser.createJsonValue("\"(?i)al\"")))
                    .doOnNext(r -> {
                        System.out.println(r); // >>> OK
                    })
                    .flatMap(r -> reactiveCommands.jsonSet("bikes:inventory",
                            JsonPath.of("$.inventory.mountain_bikes[2].regex_pat"), parser.createJsonValue("\"(?i)al\"")))
                    .doOnNext(res22 -> {
                        System.out.println(res22); // >>> OK
                    })
                    .flatMap(res22 -> reactiveCommands
                            .jsonGet("bikes:inventory",
                                    JsonPath.of("$.inventory.mountain_bikes[?(@.specs.material =~ @.regex_pat)].model"))
                            .collectList())
                    .doOnNext(System.out::println) // >>> [["Quaoar","Weywot"]]
                    .then();
```

**Java (Synchronous - Jedis):**

```java
        jedis.jsonSet(
            "bikes:inventory", new Path2("$.inventory.mountain_bikes[0].regex_pat"),
            "\"(?i)al\""
        );
        jedis.jsonSet(
            "bikes:inventory", new Path2("$.inventory.mountain_bikes[1].regex_pat"),
            "\"(?i)al\""
        );
        jedis.jsonSet(
            "bikes:inventory", new Path2("$.inventory.mountain_bikes[2].regex_pat"),
            "\"(?i)al\""
        );
        
        Object res38 = jedis.jsonGet(
            "bikes:inventory",
            new Path2("$.inventory.mountain_bikes[?(@.specs.material =~ @.regex_pat)].model")
        );
        System.out.println(res38);  // >>> ["Quaoar","Weywot"]
```

**JavaScript (Node.js):**

```javascript
const res37a = await client.json.set(
  'bikes:inventory', 
  '$.inventory.mountain_bikes[0].regex_pat', 
  '(?i)al'
);

const res37b = await client.json.set(
  'bikes:inventory', 
  '$.inventory.mountain_bikes[1].regex_pat', 
  '(?i)al'
);

const res37c = await client.json.set(
  'bikes:inventory', 
  '$.inventory.mountain_bikes[2].regex_pat', 
  '(?i)al'
);

const res37d = await client.json.get(
  'bikes:inventory',
  { path: '$.inventory.mountain_bikes[?(@.specs.material =~ @.regex_pat)].model' }
);
console.log(res37d); // ['Quaoar', 'Weywot']
```

**PHP:**

```php
        $r->jsonset('bikes:inventory', '$.inventory.mountain_bikes[0].regex_pat', '"(?i)al"');
        $r->jsonset('bikes:inventory', '$.inventory.mountain_bikes[1].regex_pat', '"(?i)al"');
        $r->jsonset('bikes:inventory', '$.inventory.mountain_bikes[2].regex_pat', '"(?i)al"');

        $res14b = $r->jsonget(
            'bikes:inventory',
            '',
            '',
            '',
            '$.inventory.mountain_bikes[?(@.specs.material =~ @.regex_pat)].model'
        );
        echo $res14b . PHP_EOL;
        // >>> ["Quaoar","Weywot"]
```

**Python:**

```python
res11 = r.json().set(
    "bikes:inventory", "$.inventory.mountain_bikes[0].regex_pat", "(?i)al"
)
res12 = r.json().set(
    "bikes:inventory", "$.inventory.mountain_bikes[1].regex_pat", "(?i)al"
)
res13 = r.json().set(
    "bikes:inventory", "$.inventory.mountain_bikes[2].regex_pat", "(?i)al"
)

res14 = r.json().get(
    "bikes:inventory",
    "$.inventory.mountain_bikes[?(@.specs.material =~ @.regex_pat)].model",
)
print(res14)  # >>> ['Quaoar', 'Weywot']
```



### Update examples

You can also use JSONPath queries when you want to update specific sections of a JSON document.

For example, you can pass a JSONPath to the [`JSON.SET`]() command to update a specific field. This example changes the price of the first item in the headphones list:

#### Code Examples

Bulk updates: Use JSONPath with JSON.NUMINCRBY to update multiple numeric values across the document when you need to apply arithmetic operations to multiple fields

**Difficulty:** Intermediate

**Builds upon:** get_bikes

**Commands:** JSON.GET, JSON.NUMINCRBY

**Complexity:**
- JSON.GET: O(N)
- JSON.NUMINCRBY: O(1)

**Redis CLI:**

```
> JSON.GET bikes:inventory $..price
"[1920,2072,3264,1475,3941]"
> JSON.NUMINCRBY bikes:inventory $..price -100
"[1820,1972,3164,1375,3841]"
> JSON.NUMINCRBY bikes:inventory $..price 100
"[1920,2072,3264,1475,3941]"
```

**Available in:** Redis CLI, C# (Synchronous), Go, Java (Asynchronous - Lettuce), Java (Reactive - Lettuce), Java (Synchronous - Jedis), JavaScript (Node.js), PHP, Python

**C# (Synchronous):**

```csharp
        RedisResult res42 = db.JSON().Get("bikes:inventory", path: "$..price");
        Console.WriteLine(res42);   // >>> [1920,2072,3264,1475,3941]

        double?[] res43 = db.JSON().NumIncrby("bikes:inventory", "$..price", -100);
        Console.WriteLine(string.Join(", ", res43));    // >>> 1820, 1972, 3164, 1375, 3841

        double?[] res44 = db.JSON().NumIncrby("bikes:inventory", "$..price", 100);
        Console.WriteLine(string.Join(", ", res44));    // >>> 1920, 2072, 3264, 1475, 3941
```

**Go:**

```go
	res15, err := rdb.JSONGet(ctx, "bikes:inventory", "$..price").Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(res15) // >>> [1475,3941,1920,2072,3264]

	res16, err := rdb.JSONNumIncrBy(ctx, "bikes:inventory", "$..price", -100).Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(res16) // >>> [1375,3841,1820,1972,3164]

	res17, err := rdb.JSONNumIncrBy(ctx, "bikes:inventory", "$..price", 100).Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(res17) // >>> [1475,3941,1920,2072,3264]
```

**Java (Asynchronous - Lettuce):**

```java
            CompletableFuture<Void> updateBikes = asyncCommands.jsonGet("bikes:inventory", JsonPath.of("$..price"))
                    .thenCompose(r -> {
                        System.out.println(r); // >>> [[1920,2072,3264,1475,3941]]

                        return asyncCommands.jsonNumincrby("bikes:inventory", JsonPath.of("$..price"), -100);
                    }).thenCompose(res23 -> {
                        System.out.println(res23); // >>> [1820, 1972, 3164, 1375, 3841]

                        return asyncCommands.jsonNumincrby("bikes:inventory", JsonPath.of("$..price"), 100);
                    })
                    .thenAccept(System.out::println)
                    // >>> [1920, 2072, 3264, 1475, 3941]
                    .toCompletableFuture();
```

**Java (Reactive - Lettuce):**

```java
            Mono<Void> updateBikes = reactiveCommands.jsonGet("bikes:inventory", JsonPath.of("$..price")).collectList()
                    .doOnNext(r -> {
                        System.out.println(r); // >>> [[1920,2072,3264,1475,3941]]
                    })
                    .flatMap(
                            r -> reactiveCommands.jsonNumincrby("bikes:inventory", JsonPath.of("$..price"), -100).collectList())
                    .doOnNext(res23 -> {
                        System.out.println(res23); // >>> [1820, 1972, 3164, 1375, 3841]
                    })
                    .flatMap(res23 -> reactiveCommands.jsonNumincrby("bikes:inventory", JsonPath.of("$..price"), 100)
                            .collectList())
                    .doOnNext(System.out::println) // >>> [1920, 2072, 3264, 1475, 3941]
                    .then();
```

**Java (Synchronous - Jedis):**

```java
        Object res39 = jedis.jsonGet("bikes:inventory", new Path2("$..price"));
        System.out.println(res39);
        // >>> [1920,2072,3264,1475,3941]

        Object res40 = jedis.jsonNumIncrBy("bikes:inventory", new Path2("$..price"), -100);
        System.out.println(res40);  // >>> [1820,1972,3164,1375,3841]

        Object res41 = jedis.jsonNumIncrBy("bikes:inventory", new Path2("$..price"), 100);
        System.out.println(res41);  // >>> [1920,2072,3264,1475,3941]
```

**JavaScript (Node.js):**

```javascript
const res38 = await client.json.get("bikes:inventory", {
  path: "$..price"
});
console.log(res38);  //  [1920, 2072, 3264, 1475, 3941]

const res39 = await client.json.numIncrBy("bikes:inventory", "$..price", -100);
console.log(res39);  //  [1820, 1972, 3164, 1375, 3841]

const res40 = await client.json.numIncrBy("bikes:inventory", "$..price", 100);
console.log(res40);  //  [1920, 2072, 3264, 1475, 3941]
```

**PHP:**

```php
        $res15b = $r->jsonget('bikes:inventory', '', '', '', '$..price');
        echo $res15b . PHP_EOL;
        // >>> [1920,2072,3264,1475,3941]

        $res16b = $r->jsonnumincrby('bikes:inventory', '$..price', -100);
        echo json_encode($res16b) . PHP_EOL;
        // >>> [1820,1972,3164,1375,3841]

        $res17b = $r->jsonnumincrby('bikes:inventory', '$..price', 100);
        echo json_encode($res17b) . PHP_EOL;
        // >>> [1920,2072,3264,1475,3941]
```

**Python:**

```python
res15 = r.json().get("bikes:inventory", "$..price")
print(res15)  # >>> [1920, 2072, 3264, 1475, 3941]

res16 = r.json().numincrby("bikes:inventory", "$..price", -100)
print(res16)  # >>> [1820, 1972, 3164, 1375, 3841]

res17 = r.json().numincrby("bikes:inventory", "$..price", 100)
print(res17)  # >>> [1920, 2072, 3264, 1475, 3941]
```



You can use filter expressions to update only JSON elements that match certain conditions. The following example sets the price of any bike to 1500 if its price is already less than 2000:

#### Code Examples

Conditional updates: Use filter expressions with JSON.SET to update only elements matching specific conditions when you need selective modifications

**Difficulty:** Advanced

**Builds upon:** filter1

**Commands:** JSON.SET, JSON.GET

**Complexity:**
- JSON.SET: O(M+N)
- JSON.GET: O(N)

**Redis CLI:**

```
> JSON.SET bikes:inventory '$.inventory.*[?(@.price<2000)].price' 1500
OK
> JSON.GET bikes:inventory $..price
"[1500,2072,3264,1500,3941]"
```

**Available in:** Redis CLI, C# (Synchronous), Go, Java (Asynchronous - Lettuce), Java (Reactive - Lettuce), Java (Synchronous - Jedis), JavaScript (Node.js), PHP, Python

**C# (Synchronous):**

```csharp
        bool res45 = db.JSON().Set(
            "bikes:inventory",
            "$.inventory.*[?(@.price<2000)].price",
            1500
        );
        Console.WriteLine(res45);   // >>> True

        RedisResult res46 = db.JSON().Get("bikes:inventory", path: "$..price");
        Console.WriteLine(res46);   // >>> [1500,2072,3264,1500,3941]
```

**Go:**

```go
	res18, err := rdb.JSONSet(ctx,
		"bikes:inventory",
		"$.inventory.*[?(@.price<2000)].price",
		1500,
	).Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(res18) // >>> OK

	res19, err := rdb.JSONGet(ctx, "bikes:inventory", "$..price").Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(res19) // >>> [1500,3941,1500,2072,3264]
```

**Java (Asynchronous - Lettuce):**

```java
            CompletableFuture<Void> updateFilters1 = asyncCommands.jsonSet("bikes:inventory",
                    JsonPath.of("$.inventory.*[?(@.price<2000)].price"), parser.createJsonValue("1500")).thenCompose(r -> {
                        System.out.println(r); // >>> OK

                        return asyncCommands.jsonGet("bikes:inventory", JsonPath.of("$..price"));
                    })
                    .thenAccept(System.out::println)
                    // >>> [[1500,2072,3264,1500,3941]]
                    .toCompletableFuture();
```

**Java (Reactive - Lettuce):**

```java
            Mono<Void> updateFilters1 = reactiveCommands.jsonSet("bikes:inventory",
                    JsonPath.of("$.inventory.*[?(@.price<2000)].price"), parser.createJsonValue("1500")).doOnNext(r -> {
                        System.out.println(r); // >>> OK
                    }).flatMap(r -> reactiveCommands.jsonGet("bikes:inventory", JsonPath.of("$..price")).collectList())
                    .doOnNext(System.out::println) // >>> [[1500,2072,3264,1500,3941]]
                    .then();
```

**Java (Synchronous - Jedis):**

```java
        jedis.jsonSet("bikes:inventory", new Path2("$.inventory.*[?(@.price<2000)].price"), 1500);
        Object res42 = jedis.jsonGet("bikes:inventory", new Path2("$..price"));
        System.out.println(res42);  // >>> [1500,2072,3264,1500,3941]
```

**JavaScript (Node.js):**

```javascript
const res40a = await client.json.set(
  'bikes:inventory', 
  '$.inventory.*[?(@.price<2000)].price', 
  1500
);

// Get all prices from the inventory
const res40b = await client.json.get(
  'bikes:inventory',
  { path: "$..price" }
);
console.log(res40b); // [1500, 2072, 3264, 1500, 3941]
```

**PHP:**

```php
        $res18b = $r->jsonset('bikes:inventory', '$.inventory.*[?(@.price<2000)].price', '1500');
        $res19b = $r->jsonget('bikes:inventory', '', '', '', '$..price');
        echo $res19b . PHP_EOL;
        // >>> [1500,2072,3264,1500,3941]
```

**Python:**

```python
res18 = r.json().set("bikes:inventory", "$.inventory.*[?(@.price<2000)].price", 1500)
res19 = r.json().get("bikes:inventory", "$..price")
print(res19)  # >>> [1500, 2072, 3264, 1500, 3941]
```



JSONPath queries also work with other JSON commands that accept a path as an argument. For example, you can add a new color option for a set of headphones with [`JSON.ARRAPPEND`]():

#### Code Examples

Array updates with filters: Use JSON.ARRAPPEND with filter expressions to add elements to arrays matching conditions when you need to modify collections selectively

**Difficulty:** Advanced

**Builds upon:** update_filters1

**Commands:** JSON.ARRAPPEND

**Complexity:**
- JSON.ARRAPPEND: O(1)

**Redis CLI:**

```
> JSON.ARRAPPEND bikes:inventory '$.inventory.*[?(@.price<2000)].colors' '"pink"'
1) (integer) 3
2) (integer) 3
127.0.0.1:6379> JSON.GET bikes:inventory $..[*].colors
"[[\"black\",\"silver\",\"pink\"],[\"black\",\"white\"],[\"black\",\"silver\",\"pink\"]]"
```

**Available in:** Redis CLI, C# (Synchronous), Go, Java (Asynchronous - Lettuce), Java (Reactive - Lettuce), Java (Synchronous - Jedis), JavaScript (Node.js), PHP, Python

**C# (Synchronous):**

```csharp
        long?[] res47 = db.JSON().ArrAppend(
            "bikes:inventory", "$.inventory.*[?(@.price<2000)].colors", "pink"
        );
        Console.WriteLine(string.Join(", ", res47));    // >>> 3, 3

        RedisResult res48 = db.JSON().Get("bikes:inventory", path: "$..[*].colors");
        Console.WriteLine(res48);   // >>> [["black","silver","pink"],["black","white"],["black","silver","pink"]]
```

**Go:**

```go
	res20, err := rdb.JSONArrAppend(ctx,
		"bikes:inventory",
		"$.inventory.*[?(@.price<2000)].colors",
		"\"pink\"",
	).Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(res20) // >>> [3 3]

	res21, err := rdb.JSONGet(ctx, "bikes:inventory", "$..[*].colors").Result()

	if err != nil {
		panic(err)
	}

	fmt.Println(res21)
	// >>> [["black","silver","pink"],["black","silver","pink"],["black","white"]]
```

**Java (Asynchronous - Lettuce):**

```java
            CompletableFuture<Void> updateFilters2 = asyncCommands.jsonArrappend("bikes:inventory",
                    JsonPath.of("$.inventory.*[?(@.price<2000)].colors"), parser.createJsonValue("\"pink\"")).thenCompose(r -> {
                        System.out.println(r); // >>> [3, 3]

                        return asyncCommands.jsonGet("bikes:inventory", JsonPath.of("$..[*].colors"));
                    })
                    .thenAccept(System.out::println)
                    // >>> [[["black","silver","pink"],["black","white"],["black","silver","pink"]]]
                    .toCompletableFuture();
```

**Java (Reactive - Lettuce):**

```java
            Mono<Void> updateFilters2 = reactiveCommands.jsonArrappend("bikes:inventory",
                    JsonPath.of("$.inventory.*[?(@.price<2000)].colors"), parser.createJsonValue("\"pink\"")).collectList()
                    .doOnNext(r -> {
                        System.out.println(r); // >>> [3, 3]
                    }).flatMap(r -> reactiveCommands.jsonGet("bikes:inventory", JsonPath.of("$..[*].colors")).collectList())
                    .doOnNext(System.out::println) // >>>
                                                   // [[["black","silver","pink"],["black","white"],["black","silver","pink"]]]
                    .then();
```

**Java (Synchronous - Jedis):**

```java
        List<Long> res43 = jedis.jsonArrAppendWithEscape(
            "bikes:inventory", new Path2("$.inventory.*[?(@.price<2000)].colors"),
            "\"pink\""
        );
        System.out.println(res43);  // >>> [3, 3]

        Object res44 = jedis.jsonGet("bikes:inventory", new Path2("$..[*].colors"));
        System.out.println(res44);
        // >>> [["black","silver","\"pink\""],["black","white"],["black","silver","\"pink\""]]
```

**JavaScript (Node.js):**

```javascript
const res41 = await client.json.arrAppend(
    "bikes:inventory", "$.inventory.*[?(@.price<2000)].colors", "pink"
);
console.log(res41);  //  [3, 3]

const res42 = await client.json.get("bikes:inventory", {
  path: "$..[*].colors"
});
console.log(res42);  //  [['black', 'silver', 'pink'], ['black', 'white'], ['black', 'silver', 'pink']]
```

**PHP:**

```php
        $res20b = $r->jsonarrappend('bikes:inventory', '$.inventory.*[?(@.price<2000)].colors', '"pink"');
        echo json_encode($res20b) . PHP_EOL;
        // >>> [3,3]

        $res21b = $r->jsonget('bikes:inventory', '', '', '', '$..[*].colors');
        echo $res21b . PHP_EOL;
        // >>> [["black","silver","pink"],["black","white"],["black","silver","pink"]]
```

**Python:**

```python
res20 = r.json().arrappend(
    "bikes:inventory", "$.inventory.*[?(@.price<2000)].colors", "pink"
)
print(res20)  # >>> [3, 3]

res21 = r.json().get("bikes:inventory", "$..[*].colors")
print(
    res21
)  # >>> [['black', 'silver', 'pink'], ['black', 'white'], ['black', 'silver', 'pink']]
```



## Legacy path syntax

RedisJSON v1 had the following path implementation. JSON v2 still supports this legacy path in addition to JSONPath.

Paths always begin at the root of a Redis JSON value. The root is denoted by a period character (`.`). For paths that reference the root's children, it is optional to prefix the path with the root.

Redis JSON supports both dot notation and bracket notation for object key access. The following paths refer to _headphones_, which is a child of _inventory_ under the root:

*   `.inventory.headphones`
*   `inventory["headphones"]`
*   `['inventory']["headphones"]`

To access an array element, enclose its index within a pair of square brackets. The index is 0-based, with 0 being the first element of the array, 1 being the next element, and so on. You can use negative offsets to access elements starting from the end of the array. For example, -1 is the last element in the array, -2 is the second to last element, and so on.

### JSON key names and path compatibility

By definition, a JSON key can be any valid JSON string. Paths, on the other hand, are traditionally based on JavaScript's (and Java's) variable naming conventions.

Although JSON can store objects that contain arbitrary key names, you can only use a legacy path to access these keys if they conform to these naming syntax rules:

1.  Names must begin with a letter, a dollar sign (`$`), or an underscore (`_`) character
2.  Names can contain letters, digits, dollar signs, and underscores
3.  Names are case-sensitive

## Time complexity of path evaluation

The time complexity of searching (navigating to) an element in the path is calculated from:

1. Child level - every level along the path adds an additional search
2. Key search - O(N)<sup>&#8224;</sup>, where N is the number of keys in the parent object
3. Array search - O(1)

This means that the overall time complexity of searching a path is _O(N*M)_, where N is the depth and M is the number of parent object keys.

<sup>&#8224;</sup> While this is acceptable for objects where N is small, access can be optimized for larger objects.
