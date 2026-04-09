---
title: Vector set embeddings
url: https://redis.io/docs/latest/develop/clients/nodejs/vecsets/
retrieved_utc: '2026-04-09T20:45:53.022014+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/develop/clients/nodejs/vecsets/index.html.md
---

# Vector set embeddings

```json metadata
{
  "title": "Vector set embeddings",
  "description": "Index and query embeddings with Redis vector sets",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "topics": ["vector sets","vectors"],
  "relatedPages": ["/develop/clients/nodejs/vecsearch"],
  "scope": "example",
  "tableOfContents": {"sections":[{"id":"initialize","title":"Initialize"},{"id":"create-the-data","title":"Create the data"},{"id":"add-the-data-to-a-vector-set","title":"Add the data to a vector set"},{"id":"query-the-vector-set","title":"Query the vector set"},{"id":"more-information","title":"More information"}]}

,
  "codeExamples": [{"codetabsId":"home_vecsets-stepimport","description":"Foundational: Import Redis client and transformer modules for vector set operations","difficulty":"beginner","id":"import","languages":[{"id":"Node-js","panelId":"panel_Nodejs_home_vecsets-stepimport"}]},{"codetabsId":"home_vecsets-stepmodel","description":"Foundational: Configure a transformer pipeline to generate text embeddings for vector set operations","difficulty":"beginner","id":"model","languages":[{"id":"Node-js","panelId":"panel_Nodejs_home_vecsets-stepmodel"}]},{"codetabsId":"home_vecsets-stepdata","description":"Foundational: Define sample data structures with descriptions for vector set examples","difficulty":"beginner","id":"data","languages":[{"id":"Node-js","panelId":"panel_Nodejs_home_vecsets-stepdata"}]},{"codetabsId":"home_vecsets-stepadd_data","description":"Practical pattern: Generate embeddings and add elements to a vector set with vAdd() and attribute metadata","difficulty":"intermediate","id":"add_data","languages":[{"id":"Node-js","panelId":"panel_Nodejs_home_vecsets-stepadd_data"}]},{"codetabsId":"home_vecsets-stepbasic_query","description":"Vector set query: Execute a basic vector similarity search using vSim() to find semantically similar elements","difficulty":"intermediate","id":"basic_query","languages":[{"id":"Node-js","panelId":"panel_Nodejs_home_vecsets-stepbasic_query"}]},{"codetabsId":"home_vecsets-steplimited_query","description":"Restrict results: Limit vector search results using the COUNT parameter to return only the most relevant matches","difficulty":"intermediate","id":"limited_query","languages":[{"id":"Node-js","panelId":"panel_Nodejs_home_vecsets-steplimited_query"}]},{"codetabsId":"home_vecsets-stepentertainer_query","description":"Semantic search: Find elements with similar meaning despite different text","difficulty":"intermediate","id":"entertainer_query","languages":[{"id":"Node-js","panelId":"panel_Nodejs_home_vecsets-stepentertainer_query"}]},{"codetabsId":"home_vecsets-stepfiltered_query","description":"Pre-filtering: Combine vector similarity search with filter expressions to restrict results based on attribute metadata","difficulty":"advanced","id":"filtered_query","languages":[{"id":"Node-js","panelId":"panel_Nodejs_home_vecsets-stepfiltered_query"}]}]
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


A Redis [vector set]() lets
you store a set of unique keys, each with its own associated vector.
You can then retrieve keys from the set according to the similarity between
their stored vectors and a query vector that you specify.

You can use vector sets to store any type of numeric vector but they are
particularly optimized to work with text embedding vectors (see
[Redis for AI]() to learn more about text
embeddings). The example below shows how to use the
[`@xenova/transformers`](https://www.npmjs.com/package/@xenova/transformers)
library to generate vector embeddings and then
store and retrieve them using a vector set with `node-redis`.

## Initialize

Start by [installing]() `node-redis`
if you haven't already done so. Also, install `@xenova/transformers`:

```bash
npm install @xenova/transformers
```

In your JavaScript source file, import the required classes:

#### Code Examples

**Redis CLI:**

```

```

**Available in:** Redis CLI, C# (Synchronous), Go, Java (Asynchronous - Lettuce), Java (Reactive - Lettuce), Java (Synchronous - Jedis), JavaScript (Node.js), Python

**C# (Synchronous):**

```csharp
// Suppress experimental API warnings for VectorSet
#pragma warning disable SER001

using StackExchange.Redis;

using Microsoft.ML;
using Microsoft.ML.Transforms.Text;
```

**Go:**

```go
package main

import (
	"context"
	"fmt"
	"strings"

	"github.com/knights-analytics/hugot"
	"github.com/redis/go-redis/v9"
)

```

**Java (Asynchronous - Lettuce):**

```java
// Lettuce client and Redis Search classes.
import io.lettuce.core.*;
import io.lettuce.core.api.StatefulRedisConnection;
import io.lettuce.core.api.async.RedisAsyncCommands;

// Standard library classes for data manipulation and
// asynchronous programming.
import java.util.*;
import java.util.concurrent.CompletableFuture;

// DJL classes for model loading and inference.
import ai.djl.huggingface.translator.TextEmbeddingTranslatorFactory;
import ai.djl.inference.Predictor;
import ai.djl.repository.zoo.Criteria;
import ai.djl.training.util.ProgressBar;
```

**Java (Reactive - Lettuce):**

```java
// Lettuce client and Redis Search classes.
import io.lettuce.core.*;
import io.lettuce.core.api.StatefulRedisConnection;
import io.lettuce.core.api.reactive.RedisReactiveCommands;

// Standard library classes for data manipulation and
// reactive programming.
import java.util.*;
import reactor.core.publisher.Mono;

// DJL classes for model loading and inference.
import ai.djl.huggingface.translator.TextEmbeddingTranslatorFactory;
import ai.djl.inference.Predictor;
import ai.djl.repository.zoo.Criteria;
import ai.djl.training.util.ProgressBar;
```

**Java (Synchronous - Jedis):**

```java
import redis.clients.jedis.RedisClient;
import redis.clients.jedis.params.VAddParams;
import redis.clients.jedis.params.VSimParams;

import java.util.*;

// DJL classes for model loading and inference.
import ai.djl.huggingface.translator.TextEmbeddingTranslatorFactory;
import ai.djl.inference.Predictor;
import ai.djl.repository.zoo.Criteria;
import ai.djl.training.util.ProgressBar;
```

**JavaScript (Node.js):**

```javascript
import * as transformers from '@xenova/transformers';
import { createClient } from 'redis';
```

**Python:**

```python
from sentence_transformers import SentenceTransformer

import redis
import numpy as np
```



The first of these imports is the
`@xenova/transformers` class, which generates an embedding from a section of text.
This example uses `transformers.pipeline` with the
[`all-MiniLM-L6-v2`](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2)
model for the embeddings. This model generates vectors with 384 dimensions, regardless
of the length of the input text, but note that the input is truncated to 256
tokens (see
[Word piece tokenization](https://huggingface.co/learn/nlp-course/en/chapter6/6)
at the [Hugging Face](https://huggingface.co/) docs to learn more about the way tokens
are related to the original text).

The output from `transformers.pipeline` is a function (called `pipe` in the examples)
that you can call to generate embeddings. The `pipeOptions` object is a parameter for
`pipe` that specifies how to generate sentence embeddings from token embeddings (see the
[`all-MiniLM-L6-v2`](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2)
documentation for details).

#### Code Examples

**Redis CLI:**

```

```

**Available in:** Redis CLI, C# (Synchronous), Go, Java (Asynchronous - Lettuce), Java (Reactive - Lettuce), Java (Synchronous - Jedis), JavaScript (Node.js), Python

**C# (Synchronous):**

```csharp
static PredictionEngine<TextData, TransformedTextData> GetPredictionEngine()
{
    // Create a new ML context, for ML.NET operations. It can be used for
    // exception tracking and logging, as well as the source of randomness.
    var mlContext = new MLContext();

    // Create an empty list as the dataset
    var emptySamples = new List<TextData>();

    // Convert sample list to an empty IDataView.
    var emptyDataView = mlContext.Data.LoadFromEnumerable(emptySamples);

    // A pipeline for converting text into a 150-dimension embedding vector
    var textPipeline = mlContext.Transforms.Text.NormalizeText("Text")
        .Append(mlContext.Transforms.Text.TokenizeIntoWords("Tokens",
            "Text"))
        .Append(mlContext.Transforms.Text.ApplyWordEmbedding("Features",
            "Tokens", WordEmbeddingEstimator.PretrainedModelKind
            .SentimentSpecificWordEmbedding));

    // Fit to data.
    var textTransformer = textPipeline.Fit(emptyDataView);

    // Create the prediction engine to get the embedding vector from the input text/string.
    var predictionEngine = mlContext.Model.CreatePredictionEngine<TextData,
        TransformedTextData>(textTransformer);

    return predictionEngine;
}
```

**Go:**

```go
	// Create a new Hugot session
	session, err := hugot.NewGoSession()
	if err != nil {
		panic(err)
	}
	defer func() {
		err := session.Destroy()
		if err != nil {
			panic(err)
		}
	}()

	// Download the model.
	downloadOptions := hugot.NewDownloadOptions()
	downloadOptions.OnnxFilePath = "onnx/model.onnx"
	modelPath, err := hugot.DownloadModel(
		"sentence-transformers/all-MiniLM-L6-v2",
		"./models/",
		downloadOptions,
	)
	if err != nil {
		panic(err)
	}

	// Create feature extraction pipeline configuration
	config := hugot.FeatureExtractionConfig{
		ModelPath: modelPath,
		Name:      "embeddingPipeline",
	}

	// Create the feature extraction pipeline
	embeddingPipeline, err := hugot.NewPipeline(session, config)
	if err != nil {
		panic(err)
	}
```

**Java (Asynchronous - Lettuce):**

```java
        Predictor<String, float[]> predictor = null;

        try {
            Criteria<String, float[]> criteria = Criteria.builder().setTypes(String.class, float[].class)
                    .optModelUrls("djl://ai.djl.huggingface.pytorch/sentence-transformers/all-MiniLM-L6-v2")
                    .optEngine("PyTorch").optTranslatorFactory(new TextEmbeddingTranslatorFactory())
                    .optProgress(new ProgressBar()).build();

            predictor = criteria.loadModel().newPredictor();
        } catch (Exception e) {
            // ...
        }
```

**Java (Reactive - Lettuce):**

```java
        Predictor<String, float[]> predictor = null;

        try {
            Criteria<String, float[]> criteria = Criteria.builder().setTypes(String.class, float[].class)
                    .optModelUrls("djl://ai.djl.huggingface.pytorch/sentence-transformers/all-MiniLM-L6-v2")
                    .optEngine("PyTorch").optTranslatorFactory(new TextEmbeddingTranslatorFactory())
                    .optProgress(new ProgressBar()).build();

            predictor = criteria.loadModel().newPredictor();
        } catch (Exception e) {
            // ...
        }
```

**Java (Synchronous - Jedis):**

```java
        Predictor<String, float[]> predictor = null;

        try {
            Criteria<String, float[]> criteria = Criteria.builder().setTypes(String.class, float[].class)
                    .optModelUrls("djl://ai.djl.huggingface.pytorch/sentence-transformers/all-MiniLM-L6-v2")
                    .optEngine("PyTorch").optTranslatorFactory(new TextEmbeddingTranslatorFactory())
                    .optProgress(new ProgressBar()).build();

            predictor = criteria.loadModel().newPredictor();
        } catch (Exception e) {
            // ...
        }
```

**JavaScript (Node.js):**

```javascript
const pipe = await transformers.pipeline(
    'feature-extraction', 'Xenova/all-MiniLM-L6-v2'
);

const pipeOptions = {
    pooling: 'mean',
    normalize: true,
};
```

**Python:**

```python
model = SentenceTransformer("sentence-transformers/all-MiniLM-L6-v2")
```



## Create the data

The example data is contained in an object with some brief
descriptions of famous people:

#### Code Examples

**Redis CLI:**

```

```

**Available in:** Redis CLI, C# (Synchronous), Go, Java (Asynchronous - Lettuce), Java (Reactive - Lettuce), Java (Synchronous - Jedis), JavaScript (Node.js), Python

**C# (Synchronous):**

```csharp
Dictionary<string, dynamic> peopleData = new Dictionary<string, dynamic>
{
    ["Marie Curie"] = new
    {
        born = 1867,
        died = 1934,
        description = @"
        Polish-French chemist and physicist. The only person ever to win
        two Nobel prizes for two different sciences.
        "
    },
    ["Linus Pauling"] = new
    {
        born = 1901,
        died = 1994,
        description = @"
        American chemist and peace activist. One of only two people to win two
        Nobel prizes in different fields (chemistry and peace).
        "
    },
    ["Freddie Mercury"] = new
    {
        born = 1946,
        died = 1991,
        description = @"
        British musician, best known as the lead singer of the rock band
        Queen.
        "
    },
    ["Marie Fredriksson"] = new
    {
        born = 1958,
        died = 2019,
        description = @"
        Swedish multi-instrumentalist, mainly known as the lead singer and
        keyboardist of the band Roxette.
        "
    },
    ["Paul Erdos"] = new
    {
        born = 1913,
        died = 1996,
        description = @"
        Hungarian mathematician, known for his eccentric personality almost
        as much as his contributions to many different fields of mathematics.
        "
    },
    ["Maryam Mirzakhani"] = new
    {
        born = 1977,
        died = 2017,
        description = @"
        Iranian mathematician. The first woman ever to win the Fields medal
        for her contributions to mathematics.
        "
    },
    ["Masako Natsume"] = new
    {
        born = 1957,
        died = 1985,
        description = @"
        Japanese actress. She was very famous in Japan but was primarily
        known elsewhere in the world for her portrayal of Tripitaka in the
        TV series Monkey.
        "
    },
    ["Chaim Topol"] = new
    {
        born = 1935,
        died = 2023,
        description = @"
        Israeli actor and singer, usually credited simply as 'Topol'. He was
        best known for his many appearances as Tevye in the musical Fiddler
        on the Roof.
        "
    }
};
```

**Go:**

```go
type PersonData struct {
	Born        int
	Died        int
	Description string
}

var peopleData = map[string]PersonData{
	"Marie Curie": {
		Born: 1867, Died: 1934,
		Description: `Polish-French chemist and physicist. The only person ever to win
		two Nobel prizes for two different sciences.
		`,
	},
	"Linus Pauling": {
		Born: 1901, Died: 1994,
		Description: `American chemist and peace activist. One of only two people to win two
		Nobel prizes in different fields (chemistry and peace).
		`,
	},
	"Freddie Mercury": {
		Born: 1946, Died: 1991,
		Description: `British musician, best known as the lead singer of the rock band
		Queen.
		`,
	},
	"Marie Fredriksson": {
		Born: 1958, Died: 2019,
		Description: `Swedish multi-instrumentalist, mainly known as the lead singer and
		keyboardist of the band Roxette.
		`,
	},
	"Paul Erdos": {
		Born: 1913, Died: 1996,
		Description: `Hungarian mathematician, known for his eccentric personality almost
		as much as his contributions to many different fields of mathematics.
		`,
	},
	"Maryam Mirzakhani": {
		Born: 1977, Died: 2017,
		Description: `Iranian mathematician. The first woman ever to win the Fields medal
		for her contributions to mathematics.
		`,
	},
	"Masako Natsume": {
		Born: 1957, Died: 1985,
		Description: `Japanese actress. She was very famous in Japan but was primarily
		known elsewhere in the world for her portrayal of Tripitaka in the
		TV series Monkey.
		`,
	},
	"Chaim Topol": {
		Born: 1935, Died: 2023,
		Description: `Israeli actor and singer, usually credited simply as 'Topol'. He was
		best known for his many appearances as Tevye in the musical Fiddler
		on the Roof.
		`,
	},
}

```

**Java (Asynchronous - Lettuce):**

```java
        final class Person {
            final String name;
            final int born;
            final int died;
            final String description;
            Person(String name, int born, int died, String description) {
                this.name = name; this.born = born; this.died = died; this.description = description;
            }
        }

        List<Person> people = Arrays.asList(
            new Person(
                "Marie Curie",
                1867, 1934,
                "Polish-French chemist and physicist. The only person ever to win" +
                " two Nobel prizes for two different sciences."
            ),
            new Person(
                "Linus Pauling",
                1901, 1994,
                "American chemist and peace activist. One of only two people to" +
                " win two Nobel prizes in different fields (chemistry and peace)."
            ),
            new Person(
                "Freddie Mercury",
                1946, 1991,
                "British musician, best known as the lead singer of the rock band Queen."
            ),
            new Person(
                "Marie Fredriksson",
                1958, 2019,
                "Swedish multi-instrumentalist, mainly known as the lead singer and" +
                " keyboardist of the band Roxette."
            ),
            new Person(
                "Paul Erdos",
                1913, 1996,
                "Hungarian mathematician, known for his eccentric personality almost" +
                " as much as his contributions to many different fields of mathematics."
            ),
            new Person(
                "Maryam Mirzakhani",
                1977, 2017,
                "Iranian mathematician. The first woman ever to win the Fields medal" +
                " for her contributions to mathematics."
            ),
            new Person(
                "Masako Natsume",
                1957, 1985,
                "Japanese actress. She was very famous in Japan but was primarily" +
                " known elsewhere in the world for her portrayal of Tripitaka in the" +
                " TV series Monkey."
            ),
            new Person(
                "Chaim Topol",
                1935, 2023,
                "Israeli actor and singer, usually credited simply as 'Topol'. He was" +
                " best known for his many appearances as Tevye in the musical Fiddler" +
                " on the Roof."
            )
        );
```

**Java (Reactive - Lettuce):**

```java
        final class Person {
            final String name;
            final int born;
            final int died;
            final String description;
            Person(String name, int born, int died, String description) {
                this.name = name; this.born = born; this.died = died; this.description = description;
            }
        }

        List<Person> people = Arrays.asList(
            new Person(
                "Marie Curie",
                1867, 1934,
                "Polish-French chemist and physicist. The only person ever to win" +
                " two Nobel prizes for two different sciences."
            ),
            new Person(
                "Linus Pauling",
                1901, 1994,
                "American chemist and peace activist. One of only two people to" +
                " win two Nobel prizes in different fields (chemistry and peace)."
            ),
            new Person(
                "Freddie Mercury",
                1946, 1991,
                "British musician, best known as the lead singer of the rock band Queen."
            ),
            new Person(
                "Marie Fredriksson",
                1958, 2019,
                "Swedish multi-instrumentalist, mainly known as the lead singer and" +
                " keyboardist of the band Roxette."
            ),
            new Person(
                "Paul Erdos",
                1913, 1996,
                "Hungarian mathematician, known for his eccentric personality almost" +
                " as much as his contributions to many different fields of mathematics."
            ),
            new Person(
                "Maryam Mirzakhani",
                1977, 2017,
                "Iranian mathematician. The first woman ever to win the Fields medal" +
                " for her contributions to mathematics."
            ),
            new Person(
                "Masako Natsume",
                1957, 1985,
                "Japanese actress. She was very famous in Japan but was primarily" +
                " known elsewhere in the world for her portrayal of Tripitaka in the" +
                " TV series Monkey."
            ),
            new Person(
                "Chaim Topol",
                1935, 2023,
                "Israeli actor and singer, usually credited simply as 'Topol'. He was" +
                " best known for his many appearances as Tevye in the musical Fiddler" +
                " on the Roof."
            )
        );
```

**Java (Synchronous - Jedis):**

```java
        final class Person {
            final String name;
            final int born;
            final int died;
            final String description;
            Person(String name, int born, int died, String description) {
                this.name = name; this.born = born; this.died = died; this.description = description;
            }
        }

        List<Person> people = Arrays.asList(
            new Person(
                "Marie Curie",
                1867, 1934,
                "Polish-French chemist and physicist. The only person ever to win" +
                " two Nobel prizes for two different sciences."
            ),
            new Person(
                "Linus Pauling",
                1901, 1994,
                "American chemist and peace activist. One of only two people to" +
                " win two Nobel prizes in different fields (chemistry and peace)."
            ),
            new Person(
                "Freddie Mercury",
                1946, 1991,
                "British musician, best known as the lead singer of the rock band Queen."
            ),
            new Person(
                "Marie Fredriksson",
                1958, 2019,
                "Swedish multi-instrumentalist, mainly known as the lead singer and" +
                " keyboardist of the band Roxette."
            ),
            new Person(
                "Paul Erdos",
                1913, 1996,
                "Hungarian mathematician, known for his eccentric personality almost" +
                " as much as his contributions to many different fields of mathematics."
            ),
            new Person(
                "Maryam Mirzakhani",
                1977, 2017,
                "Iranian mathematician. The first woman ever to win the Fields medal" +
                " for her contributions to mathematics."
            ),
            new Person(
                "Masako Natsume",
                1957, 1985,
                "Japanese actress. She was very famous in Japan but was primarily" +
                " known elsewhere in the world for her portrayal of Tripitaka in the" +
                " TV series Monkey."
            ),
            new Person(
                "Chaim Topol",
                1935, 2023,
                "Israeli actor and singer, usually credited simply as 'Topol'. He was" +
                " best known for his many appearances as Tevye in the musical Fiddler" +
                " on the Roof."
            )
        );
```

**JavaScript (Node.js):**

```javascript
const peopleData = {
    "Marie Curie": {
        "born": 1867, "died": 1934,
        "description": `
        Polish-French chemist and physicist. The only person ever to win
        two Nobel prizes for two different sciences.
        `
    },
    "Linus Pauling": {
        "born": 1901, "died": 1994,
        "description": `
        American chemist and peace activist. One of only two people to win two
        Nobel prizes in different fields (chemistry and peace).
        `
    },
    "Freddie Mercury": {
        "born": 1946, "died": 1991,
        "description": `
        British musician, best known as the lead singer of the rock band
        Queen.
        `
    },
    "Marie Fredriksson": {
        "born": 1958, "died": 2019,
        "description": `
        Swedish multi-instrumentalist, mainly known as the lead singer and
        keyboardist of the band Roxette.
        `
    },
    "Paul Erdos": {
        "born": 1913, "died": 1996,
        "description": `
        Hungarian mathematician, known for his eccentric personality almost
        as much as his contributions to many different fields of mathematics.
        `
    },
    "Maryam Mirzakhani": {
        "born": 1977, "died": 2017,
        "description": `
        Iranian mathematician. The first woman ever to win the Fields medal
        for her contributions to mathematics.
        `
    },
    "Masako Natsume": {
        "born": 1957, "died": 1985,
        "description": `
        Japanese actress. She was very famous in Japan but was primarily
        known elsewhere in the world for her portrayal of Tripitaka in the
        TV series Monkey.
        `
    },
    "Chaim Topol": {
        "born": 1935, "died": 2023,
        "description": `
        Israeli actor and singer, usually credited simply as 'Topol'. He was
        best known for his many appearances as Tevye in the musical Fiddler
        on the Roof.
        `
    }
};
```

**Python:**

```python
peopleData = {
    "Marie Curie": {
        "born": 1867, "died": 1934,
        "description": """
        Polish-French chemist and physicist. The only person ever to win
        two Nobel prizes for two different sciences.
        """
    },
    "Linus Pauling": {
        "born": 1901, "died": 1994,
        "description": """
        American chemist and peace activist. One of only two people to win two
        Nobel prizes in different fields (chemistry and peace).
        """
    },
    "Freddie Mercury": {
        "born": 1946, "died": 1991,
        "description": """
        British musician, best known as the lead singer of the rock band
        Queen.
        """
    },
    "Marie Fredriksson": {
        "born": 1958, "died": 2019,
        "description": """
        Swedish multi-instrumentalist, mainly known as the lead singer and
        keyboardist of the band Roxette.
        """
    },
    "Paul Erdos": {
        "born": 1913, "died": 1996,
        "description": """
        Hungarian mathematician, known for his eccentric personality almost
        as much as his contributions to many different fields of mathematics.
        """
    },
    "Maryam Mirzakhani": {
        "born": 1977, "died": 2017,
        "description": """
        Iranian mathematician. The first woman ever to win the Fields medal
        for her contributions to mathematics.
        """
    },
    "Masako Natsume": {
        "born": 1957, "died": 1985,
        "description": """
        Japanese actress. She was very famous in Japan but was primarily
        known elsewhere in the world for her portrayal of Tripitaka in the
        TV series Monkey.
        """
    },
    "Chaim Topol": {
        "born": 1935, "died": 2023,
        "description": """
        Israeli actor and singer, usually credited simply as 'Topol'. He was
        best known for his many appearances as Tevye in the musical Fiddler
        on the Roof.
        """
    }
}
```



## Add the data to a vector set

The next step is to connect to Redis and add the data to a new vector set.

The code below iterates through all the key-value pairs in the `peopleData` object
and adds corresponding elements to a vector set called `famousPeople`.

Use the `pipe()` function created above to generate the
embedding and then use `Array.from()` to convert the embedding to an array
of `float32` values that you can pass to the
[`vAdd()`]() command to set the embedding.

The call to `vAdd()` also adds the `born` and `died` values from the
`peopleData` object as attribute data. You can access this during a query
or by using the [`vGetAttr()`]() method.

#### Code Examples

**Redis CLI:**

```

```

**Available in:** Redis CLI, C# (Synchronous), Go, Java (Asynchronous - Lettuce), Java (Reactive - Lettuce), Java (Synchronous - Jedis), JavaScript (Node.js), Python

**C# (Synchronous):**

```csharp
ConnectionMultiplexer muxer = ConnectionMultiplexer.Connect("localhost:6379");
IDatabase db = muxer.GetDatabase();

PredictionEngine<TextData, TransformedTextData> model = GetPredictionEngine();

foreach (KeyValuePair<string, dynamic> person in peopleData)
{
    string name = person.Key;
    dynamic details = person.Value;
    float[] embedding = GetEmbedding(model, details.description);

    VectorSetAddRequest addRequest = VectorSetAddRequest.Member(name, embedding, null);
    db.VectorSetAdd("famousPeople", addRequest);

    // Set attributes separately
    string attributesJson = $"{{\"born\": {details.born}, \"died\": {details.died}}}";
    db.VectorSetSetAttributesJson("famousPeople", name, attributesJson);
}
```

**Go:**

```go
	for name, details := range peopleData {
		// Generate embeddings using Hugot
		result, err := embeddingPipeline.RunPipeline([]string{details.Description})
		if err != nil {
			panic(err)
		}

		// Convert embedding to float64 slice
		embFloat32 := result.Embeddings[0]
		embFloat64 := make([]float64, len(embFloat32))
		for i, v := range embFloat32 {
			embFloat64[i] = float64(v)
		}

		// Add vector to vector set
		_, err = rdb.VAdd(ctx, "famousPeople", name, &redis.VectorValues{Val: embFloat64}).Result()
		if err != nil {
			panic(err)
		}

		// Set attributes for the element
		_, err = rdb.VSetAttr(ctx, "famousPeople", name, map[string]interface{}{
			"born": details.Born,
			"died": details.Died,
		}).Result()
		if err != nil {
			panic(err)
		}
	}
```

**Java (Asynchronous - Lettuce):**

```java
        RedisClient redisClient = RedisClient.create("redis://localhost:6379");

        try (StatefulRedisConnection<String, String> connection = redisClient.connect()) {
            RedisAsyncCommands<String, String> asyncCommands = connection.async();

            CompletableFuture<?>[] vaddFutures = new CompletableFuture[people.size()];

            for (int i = 0; i < people.size(); i++) {
                Person person = people.get(i);
                Double[] embedding = null;

                try {
                    embedding = convertFloatsToDoubles(predictor.predict(person.description));
                } catch (Exception e) {
                    // ...
                }

                VAddArgs personArgs = VAddArgs.Builder.attributes(String.format("{\"born\": %d, \"died\": %d}", person.born, person.died));
                
                vaddFutures[i] = asyncCommands.vadd("famousPeople", person.name, personArgs, embedding)
                        .thenApply(result -> {
                            System.out.println(result); // >>> true
                            return result;
                        }).toCompletableFuture();
            }
            
            CompletableFuture.allOf(vaddFutures).join();
```

**Java (Reactive - Lettuce):**

```java
        RedisClient redisClient = RedisClient.create("redis://localhost:6379");

        try (StatefulRedisConnection<String, String> connection = redisClient.connect()) {
            RedisReactiveCommands<String, String> reactiveCommands = connection.reactive();

            Mono<?>[] vaddFutures = new Mono[people.size()];

            for (int i = 0; i < people.size(); i++) {
                Person person = people.get(i);
                Double[] embedding = null;

                try {
                    embedding = convertFloatsToDoubles(predictor.predict(person.description));
                } catch (Exception e) {
                    // ...
                }

                VAddArgs personArgs = VAddArgs.Builder.attributes(String.format("{\"born\": %d, \"died\": %d}", person.born, person.died));

                vaddFutures[i] = reactiveCommands.vadd("famousPeople", person.name, personArgs, embedding)
                        .doOnNext(result -> {
                            System.out.println(result); // >>> true
                        });
            }

            Mono.when(vaddFutures).block();
```

**Java (Synchronous - Jedis):**

```java
        RedisClient jedis = new RedisClient("redis://localhost:6379");

        for (Person person : people) {
            float[] embedding;
            try {
                embedding = predictor.predict(person.description);
            } catch (Exception e) {
                // This just allows the code to compile without errors.
                // In a real-world scenario, you would handle the exception properly.
                embedding = new float[384];
            }

            // Add element with attributes using VAddParams
            String attrs = String.format("{\"born\": %d, \"died\": %d}", person.born, person.died);
            boolean added = jedis.vadd("famousPeople", embedding, person.name, new VAddParams().setAttr(attrs));
            System.out.println(added); // >>> true
        }
```

**JavaScript (Node.js):**

```javascript
const client = createClient({ url: 'redis://localhost:6379' });

client.on('error', err => console.log('Redis Client Error', err));
await client.connect();

for (const [name, details] of Object.entries(peopleData)) {
    const embedding = await pipe(details.description, pipeOptions);
    const embeddingArray = Array.from(embedding.data);

    await client.vAdd('famousPeople', embeddingArray, name);
    await client.vSetAttr('famousPeople', name, JSON.stringify({
        born: details.born,
        died: details.died
    }));
}
```

**Python:**

```python
r = redis.Redis(decode_responses=True)

for name, details in peopleData.items():
    emb = model.encode(details["description"]).astype(np.float32).tobytes()

    r.vset().vadd(
        "famousPeople",
        emb,
        name,
        attributes={
            "born": details["born"],
            "died": details["died"]
        }
    )
```



## Query the vector set

You can now query the data in the set. The basic approach is to use the
`pipe()` function to generate another embedding vector for the query text.
(This is the same method used to add the elements to the set.) Then, pass
the query vector to [`vSim()`]() to return elements
of the set, ranked in order of similarity to the query.

Start with a simple query for "actors":

#### Code Examples

**Redis CLI:**

```

```

**Available in:** Redis CLI, C# (Synchronous), Go, Java (Asynchronous - Lettuce), Java (Reactive - Lettuce), Java (Synchronous - Jedis), JavaScript (Node.js), Python

**C# (Synchronous):**

```csharp
string queryValue = "actors";

float[] queryEmbedding = GetEmbedding(model, queryValue);

VectorSetSimilaritySearchRequest basicQuery = VectorSetSimilaritySearchRequest.ByVector(queryEmbedding);
using (Lease<VectorSetSimilaritySearchResult>? actorsResults = db.VectorSetSimilaritySearch("famousPeople", basicQuery))
{
    IEnumerable<string> resultIds = actorsResults!.Span.ToArray()
        .Select(r => (string?)r.Member)
        .Where(id => id != null)
        .Select(id => $"'{id!}'");
    Console.WriteLine($"'actors': [{string.Join(", ", resultIds)}]");
}
```

**Go:**

```go
	queryValue := "actors"

	queryResult, err := embeddingPipeline.RunPipeline([]string{queryValue})
	if err != nil {
		panic(err)
	}

	// Convert embedding to float64 slice
	queryFloat32 := queryResult.Embeddings[0]
	queryFloat64 := make([]float64, len(queryFloat32))
	for i, v := range queryFloat32 {
		queryFloat64[i] = float64(v)
	}

	actorsResults, err := rdb.VSim(ctx, "famousPeople", &redis.VectorValues{Val: queryFloat64}).Result()
	if err != nil {
		panic(err)
	}

	fmt.Printf("'actors': %v\n", strings.Join(actorsResults, ", "))
	// >>> 'actors': Masako Natsume, Chaim Topol, Linus Pauling,
	// Marie Fredriksson, Maryam Mirzakhani, Marie Curie, Freddie Mercury,
	// Paul Erdos
```

**Java (Asynchronous - Lettuce):**

```java
            Double[] actorsEmbedding = null;
            
            try {
                actorsEmbedding = convertFloatsToDoubles(predictor.predict("actors"));
            } catch (Exception e) {
                // ...
            }

            CompletableFuture<List<String>> basicQuery = asyncCommands.vsim("famousPeople", actorsEmbedding)
                    .thenApply(result -> {
                        System.out.println(result);
                        // >>> [Masako Natsume, Chaim Topol, Linus Pauling, Marie Fredriksson, Maryam Mirzakhani, Marie Curie, Freddie Mercury, Paul Erdos]
                        return result;
                    }).toCompletableFuture();
```

**Java (Reactive - Lettuce):**

```java
            Double[] actorsEmbedding = null;

            try {
                actorsEmbedding = convertFloatsToDoubles(predictor.predict("actors"));
            } catch (Exception e) {
                // ...
            }

            Mono<java.util.List<String>> basicQuery = reactiveCommands.vsim("famousPeople", actorsEmbedding)
                    .collectList().doOnNext(result -> {
                        System.out.println(result);
                        // >>> [Masako Natsume, Chaim Topol, Linus Pauling, Marie Fredriksson, Maryam Mirzakhani, Marie Curie, Freddie Mercury, Paul Erdos]
                    });
```

**Java (Synchronous - Jedis):**

```java
        float[] actorsEmbedding;
        try {
            actorsEmbedding = predictor.predict("actors");
        } catch (Exception e) {
            actorsEmbedding = new float[384];
        }

        List<String> basicResults = jedis.vsim("famousPeople", actorsEmbedding);
        System.out.println(basicResults);
        // >>> [Masako Natsume, Chaim Topol, Linus Pauling, Marie Fredriksson,
        // >>> Maryam Mirzakhani, Marie Curie, Freddie Mercury, Paul Erdos]
```

**JavaScript (Node.js):**

```javascript
const queryValue = "actors";

const queryEmbedding = await pipe(queryValue, pipeOptions);
const queryArray = Array.from(queryEmbedding.data);

const actorsResults = await client.vSim('famousPeople', queryArray);

console.log(`'actors': ${JSON.stringify(actorsResults)}`);
// >>> 'actors': ["Masako Natsume","Chaim Topol","Linus Pauling",
// "Marie Fredriksson","Maryam Mirzakhani","Freddie Mercury",
// "Marie Curie","Paul Erdos"]
```

**Python:**

```python
query_value = "actors"

actors_results = r.vset().vsim(
    "famousPeople",
    model.encode(query_value).astype(np.float32).tobytes(),
)

print(f"'actors': {actors_results}")
```



This returns the following list of elements (formatted slightly for clarity):

```
'actors': ["Masako Natsume","Chaim Topol","Linus Pauling",
    "Marie Fredriksson","Maryam Mirzakhani","Freddie Mercury",
    "Marie Curie","Paul Erdos"]
```

The first two people in the list are the two actors, as expected, but none of the
people from Linus Pauling onward was especially well-known for acting (and there certainly
isn't any information about that in the short description text).
As it stands, the search attempts to rank all the elements in the set, based
on the information contained in the embedding model.
You can use the `COUNT` parameter of `vSim()` to limit the list of elements
to just the most relevant few items:

#### Code Examples

**Redis CLI:**

```

```

**Available in:** Redis CLI, C# (Synchronous), Go, Java (Asynchronous - Lettuce), Java (Reactive - Lettuce), Java (Synchronous - Jedis), JavaScript (Node.js), Python

**C# (Synchronous):**

```csharp
queryValue = "actors";

queryEmbedding = GetEmbedding(model, queryValue);

VectorSetSimilaritySearchRequest limitedQuery = VectorSetSimilaritySearchRequest.ByVector(queryEmbedding);
limitedQuery.Count = 2;
using (Lease<VectorSetSimilaritySearchResult>? twoActorsResults = db.VectorSetSimilaritySearch("famousPeople", limitedQuery))
{
    IEnumerable<string> resultIds = twoActorsResults!.Span.ToArray()
        .Select(r => (string?)r.Member)
        .Where(id => id != null)
        .Select(id => $"'{id!}'");
    Console.WriteLine($"'actors (2)': [{string.Join(", ", resultIds)}]");
    // >>> 'actors (2)': ['Masako Natsume', 'Chaim Topol']
}
```

**Go:**

```go
	queryValue = "actors"

	queryResult, err = embeddingPipeline.RunPipeline([]string{queryValue})
	if err != nil {
		panic(err)
	}

	// Convert embedding to float64 slice
	queryFloat32 = queryResult.Embeddings[0]
	queryFloat64 = make([]float64, len(queryFloat32))
	for i, v := range queryFloat32 {
		queryFloat64[i] = float64(v)
	}

	twoActorsResults, err := rdb.VSimWithArgs(ctx, "famousPeople",
		&redis.VectorValues{Val: queryFloat64},
		&redis.VSimArgs{Count: 2}).Result()
	if err != nil {
		panic(err)
	}

	fmt.Printf("'actors (2)': %v\n", strings.Join(twoActorsResults, ", "))
	// >>> 'actors (2)': Masako Natsume, Chaim Topol
```

**Java (Asynchronous - Lettuce):**

```java
            VSimArgs limitArgs = VSimArgs.Builder.count(2L);
            
            CompletableFuture<List<String>> limitedQuery = asyncCommands.vsim("famousPeople", limitArgs, actorsEmbedding)
                    .thenApply(result -> {
                        System.out.println(result);
                        // >>> [Masako Natsume, Chaim Topol]
                        return result;
                    }).toCompletableFuture();
```

**Java (Reactive - Lettuce):**

```java
            VSimArgs limitArgs = VSimArgs.Builder.count(2L);

            Mono<java.util.List<String>> limitedQuery = reactiveCommands.vsim("famousPeople", limitArgs, actorsEmbedding)
                    .collectList().doOnNext(result -> {
                        System.out.println(result);
                        // >>> [Masako Natsume, Chaim Topol]
                    });
```

**Java (Synchronous - Jedis):**

```java
        VSimParams limitParams = new VSimParams().count(2);
        List<String> limitedResults = jedis.vsim("famousPeople", actorsEmbedding, limitParams);
        System.out.println(limitedResults);
        // >>> [Masako Natsume, Chaim Topol]
```

**JavaScript (Node.js):**

```javascript
const queryValue2 = "actors";

const queryEmbedding2 = await pipe(queryValue2, pipeOptions);
const queryArray2 = Array.from(queryEmbedding2.data);

const twoActorsResults = await client.vSim('famousPeople', queryArray2, {
    COUNT: 2
});

console.log(`'actors (2)': ${JSON.stringify(twoActorsResults)}`);
// >>> 'actors (2)': ["Masako Natsume","Chaim Topol"]
```

**Python:**

```python
query_value = "actors"

two_actors_results = r.vset().vsim(
    "famousPeople",
    model.encode(query_value).astype(np.float32).tobytes(),
    count=2
)

print(f"'actors (2)': {two_actors_results}")
# >>> 'actors (2)': ['Masako Natsume', 'Chaim Topol']
```



The reason for using text embeddings rather than simple text search
is that the embeddings represent semantic information. This allows a query
to find elements with a similar meaning even if the text is
different. For example, the word "entertainer" doesn't appear in any of the
descriptions but if you use it as a query, the actors and musicians are ranked
highest in the results list:

#### Code Examples

**Redis CLI:**

```

```

**Available in:** Redis CLI, C# (Synchronous), Go, Java (Asynchronous - Lettuce), Java (Reactive - Lettuce), Java (Synchronous - Jedis), JavaScript (Node.js), Python

**C# (Synchronous):**

```csharp
queryValue = "entertainer";

queryEmbedding = GetEmbedding(model, queryValue);

VectorSetSimilaritySearchRequest entertainerQuery = VectorSetSimilaritySearchRequest.ByVector(queryEmbedding);
using (Lease<VectorSetSimilaritySearchResult>? entertainerResults = db.VectorSetSimilaritySearch("famousPeople", entertainerQuery))
{
    IEnumerable<string> resultIds = entertainerResults!.Span.ToArray()
        .Select(r => (string?)r.Member)
        .Where(id => id != null)
        .Select(id => $"'{id!}'");
    Console.WriteLine($"'entertainer': [{string.Join(", ", resultIds)}]");
    // >>> 'entertainer': ['Chaim Topol', 'Freddie Mercury',
    // 'Marie Fredriksson', 'Masako Natsume', 'Linus Pauling',
    // 'Paul Erdos', 'Maryam Mirzakhani', 'Marie Curie']
}
```

**Go:**

```go
	queryValue = "entertainer"

	queryResult, err = embeddingPipeline.RunPipeline([]string{queryValue})
	if err != nil {
		panic(err)
	}

	// Convert embedding to float64 slice
	queryFloat32 = queryResult.Embeddings[0]
	queryFloat64 = make([]float64, len(queryFloat32))
	for i, v := range queryFloat32 {
		queryFloat64[i] = float64(v)
	}

	entertainerResults, err := rdb.VSim(ctx, "famousPeople", &redis.VectorValues{Val: queryFloat64}).Result()
	if err != nil {
		panic(err)
	}

	fmt.Printf("'entertainer': %v\n", strings.Join(entertainerResults, ", "))
	// >>> 'entertainer': Chaim Topol, Freddie Mercury, Marie Fredriksson,
	// Linus Pauling, Masako Natsume, Paul Erdos,
	// Maryam Mirzakhani, Marie Curie
```

**Java (Asynchronous - Lettuce):**

```java
            Double[] entertainerEmbedding = null;

            try {
                entertainerEmbedding = convertFloatsToDoubles(predictor.predict("entertainers"));
            } catch (Exception e) {
                // ...
            }

            CompletableFuture<List<String>> entertainerQuery = asyncCommands.vsim("famousPeople", entertainerEmbedding)
                    .thenApply(result -> {
                        System.out.println(result);
                        // >>> [Freddie Mercury, Chaim Topol, Linus Pauling, Marie Fredriksson, Masako Natsume, Paul Erdos, Maryam Mirzakhani, Marie Curie]
                        return result;
                    }).toCompletableFuture();
```

**Java (Reactive - Lettuce):**

```java
            Double[] entertainerEmbedding = null;

            try {
                entertainerEmbedding = convertFloatsToDoubles(predictor.predict("entertainers"));
            } catch (Exception e) {
                // ...
            }

            Mono<java.util.List<String>> entertainerQuery = reactiveCommands.vsim("famousPeople", entertainerEmbedding)
                    .collectList().doOnNext(result -> {
                        System.out.println(result);
                        // >>> [Freddie Mercury, Chaim Topol, Linus Pauling, Marie Fredriksson, Masako Natsume, Paul Erdos, Maryam Mirzakhani, Marie Curie]
                    });
```

**Java (Synchronous - Jedis):**

```java
        float[] entertainerEmbedding;
        try {
            entertainerEmbedding = predictor.predict("entertainers");
        } catch (Exception e) {
            entertainerEmbedding = new float[384];
        }

        List<String> entertainerResults = jedis.vsim("famousPeople", entertainerEmbedding);
        System.out.println(entertainerResults);
        // >>> [Freddie Mercury, Chaim Topol, Linus Pauling, Marie Fredriksson,
        // >>> Masako Natsume, Paul Erdos, Maryam Mirzakhani, Marie Curie]
```

**JavaScript (Node.js):**

```javascript
const queryValue3 = "entertainer";

const queryEmbedding3 = await pipe(queryValue3, pipeOptions);
const queryArray3 = Array.from(queryEmbedding3.data);

const entertainerResults = await client.vSim('famousPeople', queryArray3);

console.log(`'entertainer': ${JSON.stringify(entertainerResults)}`);
// >>> 'actors': ["Masako Natsume","Chaim Topol","Linus Pauling",
// "Marie Fredriksson","Maryam Mirzakhani","Freddie Mercury",
// "Marie Curie","Paul Erdos"]
```

**Python:**

```python
query_value = "entertainer"

entertainer_results = r.vset().vsim(
    "famousPeople",
    model.encode(query_value).astype(np.float32).tobytes()
)

print(f"'entertainer': {entertainer_results}")
# >>> 'entertainer': ['Chaim Topol', 'Freddie Mercury',
# 'Marie Fredriksson', 'Masako Natsume', 'Linus Pauling',
# 'Paul Erdos', 'Maryam Mirzakhani', 'Marie Curie']
```



Similarly, if you use "science" as a query, you get the following results:

```
'science': ["Linus Pauling","Marie Curie","Maryam Mirzakhani","Paul Erdos",
"Marie Fredriksson","Masako Natsume","Freddie Mercury","Chaim Topol"]
```

The scientists are ranked highest but they are then followed by the
mathematicians. This seems reasonable given the connection between mathematics
and science.

You can also use
[filter expressions]()
with `vSim()` to restrict the search further. For example,
repeat the "science" query, but this time limit the results to people
who died before the year 2000:

#### Code Examples

**Redis CLI:**

```

```

**Available in:** Redis CLI, C# (Synchronous), Go, Java (Asynchronous - Lettuce), Java (Reactive - Lettuce), Java (Synchronous - Jedis), JavaScript (Node.js), Python

**C# (Synchronous):**

```csharp
queryValue = "science";

queryEmbedding = GetEmbedding(model, queryValue);

VectorSetSimilaritySearchRequest filteredQuery = VectorSetSimilaritySearchRequest.ByVector(queryEmbedding);
filteredQuery.FilterExpression = ".died < 2000";
using (Lease<VectorSetSimilaritySearchResult>? science2000Results = db.VectorSetSimilaritySearch("famousPeople", filteredQuery))
{
    IEnumerable<string> resultIds = science2000Results!.Span.ToArray()
        .Select(r => (string?)r.Member)
        .Where(id => id != null)
        .Select(id => $"'{id!}'");
    Console.WriteLine($"'science2000': [{string.Join(", ", resultIds)}]");
    // >>> 'science2000': ['Marie Curie', 'Linus Pauling',
    // 'Paul Erdos', 'Freddie Mercury', 'Masako Natsume']
}
```

**Go:**

```go
	queryValue = "science"

	queryResult, err = embeddingPipeline.RunPipeline([]string{queryValue})
	if err != nil {
		panic(err)
	}

	// Convert embedding to float64 slice
	queryFloat32 = queryResult.Embeddings[0]
	queryFloat64 = make([]float64, len(queryFloat32))
	for i, v := range queryFloat32 {
		queryFloat64[i] = float64(v)
	}

	science2000Results, err := rdb.VSimWithArgs(ctx, "famousPeople",
		&redis.VectorValues{Val: queryFloat64},
		&redis.VSimArgs{Filter: ".died < 2000"}).Result()
	if err != nil {
		panic(err)
	}

	fmt.Printf("'science2000': %v\n", strings.Join(science2000Results, ", "))
	// >>> 'science2000': Marie Curie, Linus Pauling, Paul Erdos, Freddie Mercury,
	// Masako Natsume
```

**Java (Asynchronous - Lettuce):**

```java
            Double[] science2000Embedding = null;

            try {
                science2000Embedding = convertFloatsToDoubles(predictor.predict("science"));
            } catch (Exception e) {
                // ...
            }

            VSimArgs filterArgs = VSimArgs.Builder.filter(".died < 2000");

            CompletableFuture<List<String>> filteredQuery = asyncCommands.vsim("famousPeople", filterArgs, science2000Embedding)
                    .thenApply(result -> {
                        System.out.println(result);
                        // >>> [Marie Curie, Linus Pauling, Paul Erdos, Freddie Mercury, Masako Natsume]
                        return result;
                    }).toCompletableFuture();
```

**Java (Reactive - Lettuce):**

```java
            Double[] science2000Embedding = null;

            try {
                science2000Embedding = convertFloatsToDoubles(predictor.predict("science"));
            } catch (Exception e) {
                // ...
            }

            VSimArgs filterArgs = VSimArgs.Builder.filter(".died < 2000");

            Mono<java.util.List<String>> filteredQuery = reactiveCommands.vsim("famousPeople", filterArgs, science2000Embedding)
                    .collectList().doOnNext(result -> {
                        System.out.println(result);
                        // >>> [Marie Curie, Linus Pauling, Paul Erdos, Freddie Mercury, Masako Natsume]
                    });
```

**Java (Synchronous - Jedis):**

```java
        float[] science2000Embedding;
        try {
            science2000Embedding = predictor.predict("science");
        } catch (Exception e) {
            science2000Embedding = new float[384];
        }

        VSimParams filterParams = new VSimParams().filter(".died < 2000");
        List<String> filteredResults = jedis.vsim("famousPeople", science2000Embedding, filterParams);
        System.out.println(filteredResults);
        // >>> [Marie Curie, Linus Pauling, Paul Erdos, Freddie Mercury, Masako Natsume]
```

**JavaScript (Node.js):**

```javascript
const queryValue5 = "science";

const queryEmbedding5 = await pipe(queryValue5, pipeOptions);
const queryArray5 = Array.from(queryEmbedding5.data);

const science2000Results = await client.vSim('famousPeople', queryArray5, {
    FILTER: '.died < 2000'
});

console.log(`'science2000': ${JSON.stringify(science2000Results)}`);
// >>> 'science2000': ["Linus Pauling","Marie Curie","Paul Erdos",
// "Masako Natsume","Freddie Mercury"]
```

**Python:**

```python
query_value = "science"

science2000_results = r.vset().vsim(
    "famousPeople",
    model.encode(query_value).astype(np.float32).tobytes(),
    filter=".died < 2000"
)

print(f"'science2000': {science2000_results}")
# >>> 'science2000': ['Marie Curie', 'Linus Pauling',
# 'Paul Erdos', 'Freddie Mercury', 'Masako Natsume']
```



Note that the boolean filter expression is applied to items in the list
before the vector distance calculation is performed. Items that don't
pass the filter test are removed from the results completely, rather
than just reduced in rank. This can help to improve the performance of the
search because there is no need to calculate the vector distance for
elements that have already been filtered out of the search.

## More information

See the [vector sets]()
docs for more information and code examples. See the
[Redis for AI]() section for more details
about text embeddings and other AI techniques you can use with Redis.

You may also be interested in
[vector search]().
This is a feature of
[Redis Search]()
that lets you retrieve
[JSON]() and
[hash]() documents based on
vector data stored in their fields.
