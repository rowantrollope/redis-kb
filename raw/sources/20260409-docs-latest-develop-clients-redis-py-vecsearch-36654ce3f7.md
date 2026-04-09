---
title: Index and query vectors
url: https://redis.io/docs/latest/develop/clients/redis-py/vecsearch/
retrieved_utc: '2026-04-09T20:45:57.168737+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/develop/clients/redis-py/vecsearch/index.html.md
---

# Index and query vectors

```json metadata
{
  "title": "Index and query vectors",
  "description": "Learn how to index and query vector embeddings with Redis",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "topics": ["Redis Search","JSON","hash","vectors"],
  "relatedPages": ["/develop/clients/redis-py/queryjson","/develop/clients/redis-py/vecsets","/develop/ai/search-and-query"],
  "scope": "example",
  "tableOfContents": {"sections":[{"id":"initialize","title":"Initialize"},{"id":"create-the-index","title":"Create the index"},{"id":"add-data","title":"Add data"},{"id":"run-a-query","title":"Run a query"},{"id":"differences-with-json-documents","title":"Differences with JSON documents"},{"id":"learn-more","title":"Learn more"}]}

,
  "codeExamples": [{"codetabsId":"home_query_vec-stepimport","description":"Foundational: Import required libraries for vector embeddings, Redis operations, and search functionality","difficulty":"beginner","id":"import","languages":[{"clientId":"redis-py","clientName":"redis-py","id":"Python","langId":"python","panelId":"panel_Python_home_query_vec-stepimport"}]},{"codetabsId":"home_query_vec-stepmodel","description":"Foundational: Initialize a SentenceTransformer model to generate vector embeddings from text","difficulty":"beginner","id":"model","languages":[{"clientId":"redis-py","clientName":"redis-py","id":"Python","langId":"python","panelId":"panel_Python_home_query_vec-stepmodel"}]},{"codetabsId":"home_query_vec-stepconnect","description":"Foundational: Connect to a Redis server and clean up existing vector indexes","difficulty":"beginner","id":"connect","languages":[{"clientId":"redis-py","clientName":"redis-py","id":"Python","langId":"python","panelId":"panel_Python_home_query_vec-stepconnect"}]},{"codetabsId":"home_query_vec-stepcreate_index","description":"Foundational: Create a vector search index for hash documents with HNSW algorithm and L2 distance metric","difficulty":"intermediate","id":"create_index","languages":[{"clientId":"redis-py","clientName":"redis-py","id":"Python","langId":"python","panelId":"panel_Python_home_query_vec-stepcreate_index"}]},{"codetabsId":"home_query_vec-stepadd_data","description":"Foundational: Store hash documents with vector embeddings generated from text content","difficulty":"beginner","id":"add_data","languages":[{"clientId":"redis-py","clientName":"redis-py","id":"Python","langId":"python","panelId":"panel_Python_home_query_vec-stepadd_data"}]},{"codetabsId":"home_query_vec-stepquery","description":"Vector similarity search: Find semantically similar documents by comparing query embeddings with indexed vectors using L2 distance","difficulty":"intermediate","id":"query","languages":[{"clientId":"redis-py","clientName":"redis-py","id":"Python","langId":"python","panelId":"panel_Python_home_query_vec-stepquery"}]},{"codetabsId":"home_query_vec-stepjson_index","description":"Foundational: Create a vector search index for JSON documents with JSON paths and field aliases","difficulty":"intermediate","id":"json_index","languages":[{"clientId":"redis-py","clientName":"redis-py","id":"Python","langId":"python","panelId":"panel_Python_home_query_vec-stepjson_index"}]},{"codetabsId":"home_query_vec-stepjson_data","description":"Foundational: Store JSON documents with vector embeddings as lists (different from hash binary format)","difficulty":"beginner","id":"json_data","languages":[{"clientId":"redis-py","clientName":"redis-py","id":"Python","langId":"python","panelId":"panel_Python_home_query_vec-stepjson_data"}]},{"codetabsId":"home_query_vec-stepjson_query","description":"Vector similarity search: Query JSON documents using vector embeddings with field aliases for simplified syntax","difficulty":"intermediate","id":"json_query","languages":[{"clientId":"redis-py","clientName":"redis-py","id":"Python","langId":"python","panelId":"panel_Python_home_query_vec-stepjson_query"}]}]
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


[Redis Search]()
lets you index vector fields in [hash]()
or [JSON]() objects (see the
[Vectors]() 
reference page for more information).
Among other things, vector fields can store *text embeddings*, which are AI-generated vector
representations of the semantic information in pieces of text. The
[vector distance]()
between two embeddings indicates how similar they are semantically. By comparing the
similarity of an embedding generated from some query text with embeddings stored in hash
or JSON fields, Redis can retrieve documents that closely match the query in terms
of their meaning.

The example below uses the
[`sentence-transformers`](https://pypi.org/project/sentence-transformers/)
library to generate vector embeddings to store and index with
Redis Search. The code is first demonstrated for hash documents with a
separate section to explain the
[differences with JSON documents](#differences-with-json-documents).

From [v6.0.0](https://github.com/redis/redis-py/releases/tag/v6.0.0) onwards,
`redis-py` uses query dialect 2 by default.
Redis Search methods such as [`ft().search()`]()
will explicitly request this dialect, overriding the default set for the server.
See
[Query dialects]()
for more information.


## Initialize

Install [`redis-py`]() if you
have not already done so. Also, install `sentence-transformers` with the
following command:

```bash
pip install sentence-transformers
```

In a new Python source file, start by importing the required classes:

#### Code Examples

**Redis CLI:**

```

```

**Available in:** Redis CLI, Go, Java (Asynchronous - Lettuce), Java (Reactive - Lettuce), JavaScript (Node.js), Python

**Go:**

```go
package main

import (
	"context"
	"encoding/binary"
	"fmt"
	"math"

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
import io.lettuce.core.search.arguments.*;
import io.lettuce.core.search.SearchReply;
import io.lettuce.core.json.JsonParser;
import io.lettuce.core.json.JsonObject;
import io.lettuce.core.json.JsonPath;

// Standard library classes for data manipulation and
// asynchronous programming.
import java.nio.ByteBuffer;
import java.nio.ByteOrder;
import java.nio.charset.StandardCharsets;
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
import io.lettuce.core.search.arguments.*;
import io.lettuce.core.search.SearchReply;
import io.lettuce.core.json.JsonParser;
import io.lettuce.core.json.JsonObject;
import io.lettuce.core.json.JsonPath;

// Standard library classes for data manipulation and
// reactive programming.
import java.nio.ByteBuffer;
import java.nio.ByteOrder;
import java.nio.charset.StandardCharsets;
import java.util.*;
import reactor.core.publisher.Mono;

// DJL classes for model loading and inference.
import ai.djl.huggingface.translator.TextEmbeddingTranslatorFactory;
import ai.djl.inference.Predictor;
import ai.djl.repository.zoo.Criteria;
import ai.djl.training.util.ProgressBar;
```

**JavaScript (Node.js):**

```javascript
import * as transformers from '@xenova/transformers';
import {
    VectorAlgorithms,
    createClient,
    SchemaFieldTypes,
} from 'redis';
```

**Python:**

```python
from sentence_transformers import SentenceTransformer
from redis.commands.search.query import Query
from redis.commands.search.field import TextField, TagField, VectorField
from redis.commands.search.indexDefinition import IndexDefinition, IndexType
from redis.commands.json.path import Path

import numpy as np
import redis
```



The first of these imports is the
`SentenceTransformer` class, which generates an embedding from a section of text.
Here, we create an instance of `SentenceTransformer` that uses the
[`all-MiniLM-L6-v2`](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2)
model for the embeddings. This model generates vectors with 384 dimensions, regardless
of the length of the input text, but note that the input is truncated to 256
tokens (see
[Word piece tokenization](https://huggingface.co/learn/nlp-course/en/chapter6/6)
at the [Hugging Face](https://huggingface.co/) docs to learn more about the way tokens
are related to the original text).

#### Code Examples

**Redis CLI:**

```

```

**Available in:** Redis CLI, Go, Java (Asynchronous - Lettuce), Java (Reactive - Lettuce), JavaScript (Node.js), Python

**Go:**

```go
package main

import (
	"context"
	"encoding/binary"
	"fmt"
	"math"

	"github.com/knights-analytics/hugot"
	"github.com/redis/go-redis/v9"
)


func floatsToBytes(fs []float32) []byte {
	buf := make([]byte, len(fs)*4)

	for i, f := range fs {
		u := math.Float32bits(f)
		binary.NativeEndian.PutUint32(buf[i*4:], u)
	}

	return buf
}


func main() {
	ctx := context.Background()
	rdb := redis.NewClient(&redis.Options{
		Addr:     "localhost:6379",
		Password: "", // no password docs
		DB:       0,  // use default DB
		Protocol: 2,
	})

	rdb.FTDropIndexWithArgs(ctx,
		"vector_idx",
		&redis.FTDropIndexOptions{
			DeleteDocs: true,
		},
	)

	_, err := rdb.FTCreate(ctx,
		"vector_idx",
		&redis.FTCreateOptions{
			OnHash: true,
			Prefix: []any{"doc:"},
		},
		&redis.FieldSchema{
			FieldName: "content",
			FieldType: redis.SearchFieldTypeText,
		},
		&redis.FieldSchema{
			FieldName: "genre",
			FieldType: redis.SearchFieldTypeTag,
		},
		&redis.FieldSchema{
			FieldName: "embedding",
			FieldType: redis.SearchFieldTypeVector,
			VectorArgs: &redis.FTVectorArgs{
				HNSWOptions: &redis.FTHNSWOptions{
					Dim:            384,
					DistanceMetric: "L2",
					Type:           "FLOAT32",
				},
			},
		},
	).Result()
	if err != nil {
		panic(err)
	}

	// Create a Hugot session
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

	// Download the model
	downloadOptions := hugot.NewDownloadOptions()
	downloadOptions.OnnxFilePath = "onnx/model.onnx" // Specify which ONNX file to use
	modelPath, err := hugot.DownloadModel("sentence-transformers/all-MiniLM-L6-v2", "./models/", downloadOptions)
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

	sentences := []string{
		"That is a very happy person",
		"That is a happy dog",
		"Today is a sunny day",
	}

	tags := []string{
		"persons", "pets", "weather",
	}

	// Generate embeddings using Hugot
	embeddingResult, err := embeddingPipeline.RunPipeline(sentences)
	if err != nil {
		panic(err)
	}

	// Extract the embeddings from the result
	embeddings := embeddingResult.Embeddings

	for i, emb := range embeddings {
		buffer := floatsToBytes(emb)

		_, err = rdb.HSet(ctx,
			fmt.Sprintf("doc:%v", i),
			map[string]any{
				"content":   sentences[i],
				"genre":     tags[i],
				"embedding": buffer,
			},
		).Result()

		if err != nil {
			panic(err)
		}
	}

	// Generate query embedding using Hugot
	queryResult, err := embeddingPipeline.RunPipeline([]string{
		"That is a happy person",
	})

	if err != nil {
		panic(err)
	}

	buffer := floatsToBytes(queryResult.Embeddings[0])

	results, err := rdb.FTSearchWithArgs(ctx,
		"vector_idx",
		"*=>[KNN 3 @embedding $vec AS vector_distance]",
		&redis.FTSearchOptions{
			Return: []redis.FTSearchReturn{
				{FieldName: "vector_distance"},
				{FieldName: "content"},
			},
			DialectVersion: 2,
			Params: map[string]any{
				"vec": buffer,
			},
		},
	).Result()

	if err != nil {
		panic(err)
	}

	for _, doc := range results.Docs {
		fmt.Printf(
			"ID: %v, Distance:%v, Content:'%v'\n",
			doc.ID, doc.Fields["vector_distance"], doc.Fields["content"],
		)
	}

	rdb.FTDropIndexWithArgs(ctx,
		"vector_json_idx",
		&redis.FTDropIndexOptions{
			DeleteDocs: true,
		},
	)

	_, err = rdb.FTCreate(ctx,
		"vector_json_idx",
		&redis.FTCreateOptions{
			OnJSON: true,
			Prefix: []any{"jdoc:"},
		},
		&redis.FieldSchema{
			FieldName: "$.content",
			As:        "content",
			FieldType: redis.SearchFieldTypeText,
		},
		&redis.FieldSchema{
			FieldName: "$.genre",
			As:        "genre",
			FieldType: redis.SearchFieldTypeTag,
		},
		&redis.FieldSchema{
			FieldName: "$.embedding",
			As:        "embedding",
			FieldType: redis.SearchFieldTypeVector,
			VectorArgs: &redis.FTVectorArgs{
				HNSWOptions: &redis.FTHNSWOptions{
					Dim:            384,
					DistanceMetric: "L2",
					Type:           "FLOAT32",
				},
			},
		},
	).Result()
	if err != nil {
		panic(err)
	}

	for i, emb := range embeddings {
		_, err = rdb.JSONSet(ctx,
			fmt.Sprintf("jdoc:%v", i),
			"$",
			map[string]any{
				"content":   sentences[i],
				"genre":     tags[i],
				"embedding": emb,
			},
		).Result()

		if err != nil {
			panic(err)
		}
	}

	// Generate query embedding for JSON search using Hugot
	jsonQueryResult, err := embeddingPipeline.RunPipeline([]string{
		"That is a happy person",
	})

	if err != nil {
		panic(err)
	}

	jsonBuffer := floatsToBytes(jsonQueryResult.Embeddings[0])

	jsonResults, err := rdb.FTSearchWithArgs(ctx,
		"vector_json_idx",
		"*=>[KNN 3 @embedding $vec AS vector_distance]",
		&redis.FTSearchOptions{
			Return: []redis.FTSearchReturn{
				{FieldName: "vector_distance"},
				{FieldName: "content"},
			},
			DialectVersion: 2,
			Params: map[string]any{
				"vec": jsonBuffer,
			},
		},
	).Result()

	if err != nil {
		panic(err)
	}

	for _, doc := range jsonResults.Docs {
		fmt.Printf(
			"ID: %v, Distance:%v, Content:'%v'\n",
			doc.ID, doc.Fields["vector_distance"], doc.Fields["content"],
		)
	}
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

**JavaScript (Node.js):**

```javascript
import * as transformers from '@xenova/transformers';
import {
    VectorAlgorithms,
    createClient,
    SchemaFieldTypes,
} from 'redis';

let pipe = await transformers.pipeline(
    'feature-extraction', 'Xenova/all-distilroberta-v1'
);

const pipeOptions = {
    pooling: 'mean',
    normalize: true,
};

const client = createClient({url: 'redis://localhost:6379'});
await client.connect();

try { 
    await client.ft.dropIndex('vector_idx'); 
} catch (e) {
    // Index doesn't exist, which is fine
}

await client.ft.create('vector_idx', {
    'content': {
        type: SchemaFieldTypes.TEXT,
    },
    'genre': {
        type: SchemaFieldTypes.TAG,
    },
    'embedding': {
        type: SchemaFieldTypes.VECTOR,
        TYPE: 'FLOAT32',
        ALGORITHM: VectorAlgorithms.HNSW,
        DISTANCE_METRIC: 'L2',
        DIM: 768,
    }
}, {
    ON: 'HASH',
    PREFIX: 'doc:'
});

const sentence1 = 'That is a very happy person';
const doc1 = {
    'content': sentence1, 
    'genre': 'persons', 
    'embedding': Buffer.from(
        (await pipe(sentence1, pipeOptions)).data.buffer
    ),
};

const sentence2 = 'That is a happy dog';
const doc2 = {
    'content': sentence2, 
    'genre': 'pets', 
    'embedding': Buffer.from(
        (await pipe(sentence2, pipeOptions)).data.buffer
    )
};

const sentence3 = 'Today is a sunny day';
const doc3 = {
    'content': sentence3, 
    'genre': 'weather', 
    'embedding': Buffer.from(
        (await pipe(sentence3, pipeOptions)).data.buffer
    )
};

await Promise.all([
    client.hSet('doc:1', doc1),
    client.hSet('doc:2', doc2),
    client.hSet('doc:3', doc3)
]);

const similar = await client.ft.search(
    'vector_idx',
    '*=>[KNN 3 @embedding $B AS score]',
    {
        'PARAMS': {
            B: Buffer.from(
                (await pipe('That is a happy person', pipeOptions)).data.buffer
            ),
        },
        'RETURN': ['score', 'content'],
        'DIALECT': '2'
    },
);

for (const doc of similar.documents) {
    console.log(`${doc.id}: '${doc.value.content}', Score: ${doc.value.score}`);
}

try { 
    await client.ft.dropIndex('vector_json_idx'); 
} catch (e) {
    // Index doesn't exist, which is fine
}

await client.ft.create('vector_json_idx', {
    '$.content': {
        type: SchemaFieldTypes.TEXT,
        AS: 'content',
    },
    '$.genre': {
        type: SchemaFieldTypes.TAG,
        AS: 'genre',
    },
    '$.embedding': {
        type: SchemaFieldTypes.VECTOR,
        TYPE: 'FLOAT32',
        ALGORITHM: VectorAlgorithms.HNSW,
        DISTANCE_METRIC: 'L2',
        DIM: 768,
        AS: 'embedding',
    }
}, {
    ON: 'JSON',
    PREFIX: 'jdoc:'
});

const jSentence1 = 'That is a very happy person';
const jdoc1 = {
    'content': jSentence1,
    'genre': 'persons',
    'embedding': [...(await pipe(jSentence1, pipeOptions)).data],
};

const jSentence2 = 'That is a happy dog';
const jdoc2 = {
    'content': jSentence2,
    'genre': 'pets',
    'embedding': [...(await pipe(jSentence2, pipeOptions)).data],
};

const jSentence3 = 'Today is a sunny day';
const jdoc3 = {
    'content': jSentence3,
    'genre': 'weather',
    'embedding': [...(await pipe(jSentence3, pipeOptions)).data],
};

await Promise.all([
    client.json.set('jdoc:1', '$', jdoc1),
    client.json.set('jdoc:2', '$', jdoc2),
    client.json.set('jdoc:3', '$', jdoc3)
]);

const jsons = await client.ft.search(
    'vector_json_idx',
    '*=>[KNN 3 @embedding $B AS score]',
    {
        "PARAMS": {
            B: Buffer.from(
                (await pipe('That is a happy person', pipeOptions)).data.buffer
            ),
        },
        'RETURN': ['score', 'content'],
        'DIALECT': '2'
    },
);

await client.quit();

```

**Python:**

```python
model = SentenceTransformer("sentence-transformers/all-MiniLM-L6-v2")
```



## Create the index

Connect to Redis and delete any index previously created with the
name `vector_idx`. (The `dropindex()` call throws an exception if
the index doesn't already exist, which is why you need the
`try: except:` block.)

#### Code Examples

**Redis CLI:**

```

```

**Available in:** Redis CLI, Go, Java (Asynchronous - Lettuce), Java (Reactive - Lettuce), JavaScript (Node.js), Python

**Go:**

```go
	ctx := context.Background()
	rdb := redis.NewClient(&redis.Options{
		Addr:     "localhost:6379",
		Password: "", // no password docs
		DB:       0,  // use default DB
		Protocol: 2,
	})

	rdb.FTDropIndexWithArgs(ctx,
		"vector_idx",
		&redis.FTDropIndexOptions{
			DeleteDocs: true,
		},
	)
```

**Java (Asynchronous - Lettuce):**

```java
        RedisClient redisClient = RedisClient.create("redis://localhost:6379");

        try (StatefulRedisConnection<String, String> connection = redisClient.connect();
                StatefulRedisConnection<ByteBuffer, ByteBuffer> binConnection = redisClient.connect(new ByteBufferCodec())) {
            RedisAsyncCommands<String, String> asyncCommands = connection.async();
            RedisAsyncCommands<ByteBuffer, ByteBuffer> binAsyncCommands = binConnection.async();
            // ...
```

**Java (Reactive - Lettuce):**

```java
        RedisClient redisClient = RedisClient.create("redis://localhost:6379");

        try (StatefulRedisConnection<String, String> connection = redisClient.connect();
                StatefulRedisConnection<ByteBuffer, ByteBuffer> binConnection = redisClient.connect(new ByteBufferCodec())) {
            RedisReactiveCommands<String, String> reactiveCommands = connection.reactive();
            RedisReactiveCommands<ByteBuffer, ByteBuffer> binReactiveCommands = binConnection.reactive();
            // ...
```

**JavaScript (Node.js):**

```javascript
const client = createClient({url: 'redis://localhost:6379'});
await client.connect();

try { 
    await client.ft.dropIndex('vector_idx'); 
} catch (e) {
    // Index doesn't exist, which is fine
}
```

**Python:**

```python
r = redis.Redis(decode_responses=True)

try:
    r.ft("vector_idx").dropindex(True)
except redis.exceptions.ResponseError:
    pass
```



Next, create the index.
The schema in the example below specifies hash objects for storage and includes
three fields: the text content to index, a
[tag]()
field to represent the "genre" of the text, and the embedding vector generated from
the original text content. The `embedding` field specifies
[HNSW]()
indexing, the
[L2]()
vector distance metric, `Float32` values to represent the vector's components,
and 384 dimensions, as required by the `all-MiniLM-L6-v2` embedding model.

#### Code Examples

**Redis CLI:**

```

```

**Available in:** Redis CLI, Go, Java (Asynchronous - Lettuce), Java (Reactive - Lettuce), JavaScript (Node.js), Python

**Go:**

```go
	_, err := rdb.FTCreate(ctx,
		"vector_idx",
		&redis.FTCreateOptions{
			OnHash: true,
			Prefix: []any{"doc:"},
		},
		&redis.FieldSchema{
			FieldName: "content",
			FieldType: redis.SearchFieldTypeText,
		},
		&redis.FieldSchema{
			FieldName: "genre",
			FieldType: redis.SearchFieldTypeTag,
		},
		&redis.FieldSchema{
			FieldName: "embedding",
			FieldType: redis.SearchFieldTypeVector,
			VectorArgs: &redis.FTVectorArgs{
				HNSWOptions: &redis.FTHNSWOptions{
					Dim:            384,
					DistanceMetric: "L2",
					Type:           "FLOAT32",
				},
			},
		},
	).Result()
	if err != nil {
		panic(err)
	}
```

**Java (Asynchronous - Lettuce):**

```java
            List<FieldArgs<String>> schema = Arrays.asList(TextFieldArgs.<String> builder().name("content").build(),
                    TagFieldArgs.<String> builder().name("genre").build(),
                    VectorFieldArgs.<String> builder().name("embedding").hnsw().type(VectorFieldArgs.VectorType.FLOAT32)
                            .dimensions(384).distanceMetric(VectorFieldArgs.DistanceMetric.L2).build());

            CreateArgs<String, String> createArgs = CreateArgs.<String, String> builder().on(CreateArgs.TargetType.HASH)
                    .withPrefix("doc:").build();

            CompletableFuture<Void> createIndex = asyncCommands.ftCreate("vector_idx", createArgs, schema)
                    .thenAccept(System.out::println).toCompletableFuture();
```

**Java (Reactive - Lettuce):**

```java
            List<FieldArgs<String>> schema = Arrays.asList(TextFieldArgs.<String> builder().name("content").build(),
                    TagFieldArgs.<String> builder().name("genre").build(),
                    VectorFieldArgs.<String> builder().name("embedding").hnsw().type(VectorFieldArgs.VectorType.FLOAT32)
                            .dimensions(384).distanceMetric(VectorFieldArgs.DistanceMetric.L2).build());

            CreateArgs<String, String> createArgs = CreateArgs.<String, String> builder().on(CreateArgs.TargetType.HASH)
                    .withPrefix("doc:").build();

            Mono<Void> createIndex = reactiveCommands.ftCreate("vector_idx", createArgs, schema).doOnNext(result -> {
                System.out.println(result); // >>> OK
            }).then();
```

**JavaScript (Node.js):**

```javascript
await client.ft.create('vector_idx', {
    'content': {
        type: SchemaFieldTypes.TEXT,
    },
    'genre': {
        type: SchemaFieldTypes.TAG,
    },
    'embedding': {
        type: SchemaFieldTypes.VECTOR,
        TYPE: 'FLOAT32',
        ALGORITHM: VectorAlgorithms.HNSW,
        DISTANCE_METRIC: 'L2',
        DIM: 768,
    }
}, {
    ON: 'HASH',
    PREFIX: 'doc:'
});
```

**Python:**

```python
schema = (
    TextField("content"),
    TagField("genre"),
    VectorField("embedding", "HNSW", {
        "TYPE": "FLOAT32",
        "DIM": 384,
        "DISTANCE_METRIC":"L2"
    })
)

r.ft("vector_idx").create_index(
    schema,
    definition=IndexDefinition(
        prefix=["doc:"], index_type=IndexType.HASH
    )
)
```



## Add data

You can now supply the data objects, which will be indexed automatically
when you add them with [`hset()`](), as long as
you use the `doc:` prefix specified in the index definition.

Use the `model.encode()` method of `SentenceTransformer`
as shown below to create the embedding that represents the `content` field.
The `astype()` option that follows the `model.encode()` call specifies that
we want a vector of `float32` values. The `tobytes()` option encodes the
vector components together as a single binary string.
Use the binary string representation when you are indexing hashes
or running a query (but use a list of `float` for
[JSON documents](#differences-with-json-documents)).

#### Code Examples

**Redis CLI:**

```

```

**Available in:** Redis CLI, Go, Java (Asynchronous - Lettuce), Java (Reactive - Lettuce), JavaScript (Node.js), Python

**Go:**

```go
	sentences := []string{
		"That is a very happy person",
		"That is a happy dog",
		"Today is a sunny day",
	}

	tags := []string{
		"persons", "pets", "weather",
	}

	// Generate embeddings using Hugot
	embeddingResult, err := embeddingPipeline.RunPipeline(sentences)
	if err != nil {
		panic(err)
	}

	// Extract the embeddings from the result
	embeddings := embeddingResult.Embeddings

	for i, emb := range embeddings {
		buffer := floatsToBytes(emb)

		_, err = rdb.HSet(ctx,
			fmt.Sprintf("doc:%v", i),
			map[string]any{
				"content":   sentences[i],
				"genre":     tags[i],
				"embedding": buffer,
			},
		).Result()

		if err != nil {
			panic(err)
		}
	}
```

**Java (Asynchronous - Lettuce):**

```java
            String sentence1 = "That is a very happy person";

            Map<ByteBuffer, ByteBuffer> doc1 = new HashMap<>();
            doc1.put(ByteBuffer.wrap("content".getBytes()), ByteBuffer.wrap(sentence1.getBytes()));
            doc1.put(ByteBuffer.wrap("genre".getBytes()), ByteBuffer.wrap("persons".getBytes()));

            try {
                doc1.put(ByteBuffer.wrap("embedding".getBytes()), floatArrayToByteBuffer(predictor.predict(sentence1)));
            } catch (Exception e) {
                // ...
            }

            CompletableFuture<Long> addDoc1 = binAsyncCommands.hset(ByteBuffer.wrap("doc:1".getBytes()), doc1)
                    .thenApply(result -> {
                        System.out.println(result); // >>> 3
                        return result;
                    }).toCompletableFuture();

            String sentence2 = "That is a happy dog";

            Map<ByteBuffer, ByteBuffer> doc2 = new HashMap<>();
            doc2.put(ByteBuffer.wrap("content".getBytes()), ByteBuffer.wrap(sentence2.getBytes()));
            doc2.put(ByteBuffer.wrap("genre".getBytes()), ByteBuffer.wrap("pets".getBytes()));

            try {
                doc2.put(ByteBuffer.wrap("embedding".getBytes()), floatArrayToByteBuffer(predictor.predict(sentence2)));
            } catch (Exception e) {
                // ...
            }

            CompletableFuture<Long> addDoc2 = binAsyncCommands.hset(ByteBuffer.wrap("doc:2".getBytes()), doc2)
                    .thenApply(result -> {
                        System.out.println(result); // >>> 3
                        return result;
                    }).toCompletableFuture();

            String sentence3 = "Today is a sunny day";

            Map<ByteBuffer, ByteBuffer> doc3 = new HashMap<>();
            doc3.put(ByteBuffer.wrap("content".getBytes()), ByteBuffer.wrap(sentence3.getBytes()));
            doc3.put(ByteBuffer.wrap("genre".getBytes()), ByteBuffer.wrap("weather".getBytes()));

            try {
                doc3.put(ByteBuffer.wrap("embedding".getBytes()), floatArrayToByteBuffer(predictor.predict(sentence3)));
            } catch (Exception e) {
                // ...
            }

            CompletableFuture<Long> addDoc3 = binAsyncCommands.hset(ByteBuffer.wrap("doc:3".getBytes()), doc3)
                    .thenApply(result -> {
                        System.out.println(result); // >>> 3
                        return result;
                    }).toCompletableFuture();
```

**Java (Reactive - Lettuce):**

```java
            String sentence1 = "That is a very happy person";

            Map<ByteBuffer, ByteBuffer> doc1 = new HashMap<>();
            doc1.put(ByteBuffer.wrap("content".getBytes()), ByteBuffer.wrap(sentence1.getBytes()));
            doc1.put(ByteBuffer.wrap("genre".getBytes()), ByteBuffer.wrap("persons".getBytes()));

            try {
                doc1.put(ByteBuffer.wrap("embedding".getBytes()), floatArrayToByteBuffer(predictor.predict(sentence1)));
            } catch (Exception e) {
                // ...
            }

            Mono<Long> addDoc1 = binReactiveCommands.hset(ByteBuffer.wrap("doc:1".getBytes()), doc1).doOnNext(result -> {
                System.out.println(result); // >>> 3
            });

            String sentence2 = "That is a happy dog";

            Map<ByteBuffer, ByteBuffer> doc2 = new HashMap<>();
            doc2.put(ByteBuffer.wrap("content".getBytes()), ByteBuffer.wrap(sentence2.getBytes()));
            doc2.put(ByteBuffer.wrap("genre".getBytes()), ByteBuffer.wrap("pets".getBytes()));

            try {
                doc2.put(ByteBuffer.wrap("embedding".getBytes()), floatArrayToByteBuffer(predictor.predict(sentence2)));
            } catch (Exception e) {
                // ...
            }

            Mono<Long> addDoc2 = binReactiveCommands.hset(ByteBuffer.wrap("doc:2".getBytes()), doc2).doOnNext(result -> {
                System.out.println(result); // >>> 3
            });

            String sentence3 = "Today is a sunny day";

            Map<ByteBuffer, ByteBuffer> doc3 = new HashMap<>();
            doc3.put(ByteBuffer.wrap("content".getBytes()), ByteBuffer.wrap(sentence3.getBytes()));
            doc3.put(ByteBuffer.wrap("genre".getBytes()), ByteBuffer.wrap("weather".getBytes()));

            try {
                doc3.put(ByteBuffer.wrap("embedding".getBytes()), floatArrayToByteBuffer(predictor.predict(sentence3)));
            } catch (Exception e) {
                // ...
            }

            Mono<Long> addDoc3 = binReactiveCommands.hset(ByteBuffer.wrap("doc:3".getBytes()), doc3).doOnNext(result -> {
                System.out.println(result); // >>> 3
            });
```

**JavaScript (Node.js):**

```javascript
const sentence1 = 'That is a very happy person';
const doc1 = {
    'content': sentence1, 
    'genre': 'persons', 
    'embedding': Buffer.from(
        (await pipe(sentence1, pipeOptions)).data.buffer
    ),
};

const sentence2 = 'That is a happy dog';
const doc2 = {
    'content': sentence2, 
    'genre': 'pets', 
    'embedding': Buffer.from(
        (await pipe(sentence2, pipeOptions)).data.buffer
    )
};

const sentence3 = 'Today is a sunny day';
const doc3 = {
    'content': sentence3, 
    'genre': 'weather', 
    'embedding': Buffer.from(
        (await pipe(sentence3, pipeOptions)).data.buffer
    )
};

await Promise.all([
    client.hSet('doc:1', doc1),
    client.hSet('doc:2', doc2),
    client.hSet('doc:3', doc3)
]);
```

**Python:**

```python
content = "That is a very happy person"

r.hset("doc:0", mapping={
    "content": content,
    "genre": "persons",
    "embedding": model.encode(content).astype(np.float32).tobytes(),
})

content = "That is a happy dog"

r.hset("doc:1", mapping={
    "content": content,
    "genre": "pets",
    "embedding": model.encode(content).astype(np.float32).tobytes(),
})

content = "Today is a sunny day"

r.hset("doc:2", mapping={
    "content": content,
    "genre": "weather",
    "embedding": model.encode(content).astype(np.float32).tobytes(),
})
```



## Run a query

After you have created the index and added the data, you are ready to run a query.
To do this, you must create another embedding vector from your chosen query
text. Redis calculates the similarity between the query vector and each
embedding vector in the index as it runs the query. It then ranks the
results in order of this numeric similarity value.

The code below creates the query embedding using `model.encode()`, as with
the indexing, and passes it as a parameter when the query executes
(see
[Vector search]()
for more information about using query parameters with embeddings).

#### Code Examples

**Redis CLI:**

```

```

**Available in:** Redis CLI, Go, Java (Asynchronous - Lettuce), Java (Reactive - Lettuce), JavaScript (Node.js), Python

**Go:**

```go
	// Generate query embedding using Hugot
	queryResult, err := embeddingPipeline.RunPipeline([]string{
		"That is a happy person",
	})

	if err != nil {
		panic(err)
	}

	buffer := floatsToBytes(queryResult.Embeddings[0])

	results, err := rdb.FTSearchWithArgs(ctx,
		"vector_idx",
		"*=>[KNN 3 @embedding $vec AS vector_distance]",
		&redis.FTSearchOptions{
			Return: []redis.FTSearchReturn{
				{FieldName: "vector_distance"},
				{FieldName: "content"},
			},
			DialectVersion: 2,
			Params: map[string]any{
				"vec": buffer,
			},
		},
	).Result()

	if err != nil {
		panic(err)
	}

	for _, doc := range results.Docs {
		fmt.Printf(
			"ID: %v, Distance:%v, Content:'%v'\n",
			doc.ID, doc.Fields["vector_distance"], doc.Fields["content"],
		)
	}
```

**Java (Asynchronous - Lettuce):**

```java
            String query = "That is a happy person";
            float[] queryEmbedding = null;

            try {
                queryEmbedding = predictor.predict(query);
            } catch (Exception e) {
                // ...
            }

            SearchArgs<ByteBuffer, ByteBuffer> searchArgs = SearchArgs.<ByteBuffer, ByteBuffer> builder()
                    .param(ByteBuffer.wrap("vec".getBytes()), floatArrayToByteBuffer(queryEmbedding))
                    .returnField(ByteBuffer.wrap("content".getBytes()))
                    .returnField(ByteBuffer.wrap("vector_distance".getBytes()))
                    .sortBy(SortByArgs.<ByteBuffer> builder().attribute(ByteBuffer.wrap("vector_distance".getBytes())).build())
                    .build();

            CompletableFuture<SearchReply<ByteBuffer, ByteBuffer>> hashQuery = binAsyncCommands
                    .ftSearch(ByteBuffer.wrap("vector_idx".getBytes()),
                            ByteBuffer.wrap("*=>[KNN 3 @embedding $vec AS vector_distance]".getBytes()), searchArgs)
                    .thenApply(result -> {
                        List<SearchReply.SearchResult<ByteBuffer, ByteBuffer>> results = result.getResults();

                        results.forEach(r -> {
                            String id = StandardCharsets.UTF_8.decode(r.getId()).toString();
                            String content = StandardCharsets.UTF_8
                                    .decode(r.getFields().get(ByteBuffer.wrap("content".getBytes()))).toString();
                            String distance = StandardCharsets.UTF_8
                                    .decode(r.getFields().get(ByteBuffer.wrap("vector_distance".getBytes()))).toString();

                            System.out.println("ID: " + id + ", Content: " + content + ", Distance: " + distance);
                        });
                        // >>> ID: doc:1, Content: That is a very happy person, Distance: 0.114169836044
                        // >>> ID: doc:2, Content: That is a happy dog, Distance: 0.610845506191
                        // >>> ID: doc:3, Content: Today is a sunny day, Distance: 1.48624765873

                        return result;
                    }).toCompletableFuture();
```

**Java (Reactive - Lettuce):**

```java
            String query = "That is a happy person";
            float[] queryEmbedding = null;

            try {
                queryEmbedding = predictor.predict(query);
            } catch (Exception e) {
                // ...
            }

            SearchArgs<ByteBuffer, ByteBuffer> searchArgs = SearchArgs.<ByteBuffer, ByteBuffer> builder()
                    .param(ByteBuffer.wrap("vec".getBytes()), floatArrayToByteBuffer(queryEmbedding))
                    .returnField(ByteBuffer.wrap("content".getBytes()))
                    .returnField(ByteBuffer.wrap("vector_distance".getBytes()))
                    .sortBy(SortByArgs.<ByteBuffer> builder().attribute(ByteBuffer.wrap("vector_distance".getBytes())).build())
                    .build();

            Mono<SearchReply<ByteBuffer, ByteBuffer>> hashQuery = binReactiveCommands
                    .ftSearch(ByteBuffer.wrap("vector_idx".getBytes()),
                            ByteBuffer.wrap("*=>[KNN 3 @embedding $vec AS vector_distance]".getBytes()), searchArgs)
                    .doOnNext(result -> {
                        List<SearchReply.SearchResult<ByteBuffer, ByteBuffer>> results = result.getResults();

                        results.forEach(r -> {
                            String id = StandardCharsets.UTF_8.decode(r.getId()).toString();
                            String content = StandardCharsets.UTF_8
                                    .decode(r.getFields().get(ByteBuffer.wrap("content".getBytes()))).toString();
                            String distance = StandardCharsets.UTF_8
                                    .decode(r.getFields().get(ByteBuffer.wrap("vector_distance".getBytes()))).toString();

                            System.out.println("ID: " + id + ", Content: " + content + ", Distance: " + distance);
                        });
                        // >>> ID: doc:1, Content: That is a very happy person, Distance: 0.114169836044
                        // >>> ID: doc:2, Content: That is a happy dog, Distance: 0.610845506191
                        // >>> ID: doc:3, Content: Today is a sunny day, Distance: 1.48624765873
                    });
```

**JavaScript (Node.js):**

```javascript
const similar = await client.ft.search(
    'vector_idx',
    '*=>[KNN 3 @embedding $B AS score]',
    {
        'PARAMS': {
            B: Buffer.from(
                (await pipe('That is a happy person', pipeOptions)).data.buffer
            ),
        },
        'RETURN': ['score', 'content'],
        'DIALECT': '2'
    },
);

for (const doc of similar.documents) {
    console.log(`${doc.id}: '${doc.value.content}', Score: ${doc.value.score}`);
}
```

**Python:**

```python
q = Query(
    "*=>[KNN 3 @embedding $vec AS vector_distance]"
).return_field("vector_distance").return_field("content").dialect(2)

query_text = "That is a happy person"

res = r.ft("vector_idx").search(
    q, query_params={
        "vec": model.encode(query_text).astype(np.float32).tobytes()
    }
)

print(res)
```



The code is now ready to run, but note that it may take a while to complete when
you run it for the first time (which happens because RedisVL must download the
`all-MiniLM-L6-v2` model data before it can
generate the embeddings). When you run the code, it outputs the following result
object (slightly formatted here for clarity):

```
Result{
    3 total,
    docs: [
        Document {
            'id': 'doc:0',
            'payload': None,
            'vector_distance': '0.114169985056',
            'content': 'That is a very happy person'
        },
        Document {
            'id': 'doc:1',
            'payload': None,
            'vector_distance': '0.610845386982',
            'content': 'That is a happy dog'
        },
        Document {
            'id': 'doc:2',
            'payload': None,
            'vector_distance': '1.48624813557',
            'content': 'Today is a sunny day'
        }
    ]
}
```

Note that the results are ordered according to the value of the `vector_distance`
field, with the lowest distance indicating the greatest similarity to the query.
As you would expect, the result for `doc:0` with the content text *"That is a very happy person"*
is the result that is most similar in meaning to the query text
*"That is a happy person"*.

## Differences with JSON documents

Indexing JSON documents is similar to hash indexing, but there are some
important differences. JSON allows much richer data modelling with nested fields, so
you must supply a [path]() in the schema
to identify each field you want to index. However, you can declare a short alias for each
of these paths (using the `as_name` keyword argument) to avoid typing it in full for
every query. Also, you must specify `IndexType.JSON` when you create the index.

The code below shows these differences, but the index is otherwise very similar to
the one created previously for hashes:

#### Code Examples

**Redis CLI:**

```

```

**Available in:** Redis CLI, Go, Java (Asynchronous - Lettuce), Java (Reactive - Lettuce), JavaScript (Node.js), Python

**Go:**

```go
	rdb.FTDropIndexWithArgs(ctx,
		"vector_json_idx",
		&redis.FTDropIndexOptions{
			DeleteDocs: true,
		},
	)

	_, err = rdb.FTCreate(ctx,
		"vector_json_idx",
		&redis.FTCreateOptions{
			OnJSON: true,
			Prefix: []any{"jdoc:"},
		},
		&redis.FieldSchema{
			FieldName: "$.content",
			As:        "content",
			FieldType: redis.SearchFieldTypeText,
		},
		&redis.FieldSchema{
			FieldName: "$.genre",
			As:        "genre",
			FieldType: redis.SearchFieldTypeTag,
		},
		&redis.FieldSchema{
			FieldName: "$.embedding",
			As:        "embedding",
			FieldType: redis.SearchFieldTypeVector,
			VectorArgs: &redis.FTVectorArgs{
				HNSWOptions: &redis.FTHNSWOptions{
					Dim:            384,
					DistanceMetric: "L2",
					Type:           "FLOAT32",
				},
			},
		},
	).Result()
	if err != nil {
		panic(err)
	}
```

**Java (Asynchronous - Lettuce):**

```java
package io.redis.examples.async;

// Lettuce client and Redis Search classes.
import io.lettuce.core.*;
import io.lettuce.core.api.StatefulRedisConnection;
import io.lettuce.core.api.async.RedisAsyncCommands;
import io.lettuce.core.search.arguments.*;
import io.lettuce.core.search.SearchReply;
import io.lettuce.core.json.JsonParser;
import io.lettuce.core.json.JsonObject;
import io.lettuce.core.json.JsonPath;

// Standard library classes for data manipulation and
// asynchronous programming.
import java.nio.ByteBuffer;
import java.nio.ByteOrder;
import java.nio.charset.StandardCharsets;
import java.util.*;
import java.util.concurrent.CompletableFuture;

// DJL classes for model loading and inference.
import ai.djl.huggingface.translator.TextEmbeddingTranslatorFactory;
import ai.djl.inference.Predictor;
import ai.djl.repository.zoo.Criteria;
import ai.djl.training.util.ProgressBar;

public class HomeQueryVecExample {

    private ByteBuffer floatArrayToByteBuffer(float[] vector) {
        ByteBuffer buffer = ByteBuffer.allocate(vector.length * 4).order(ByteOrder.LITTLE_ENDIAN);
        for (float value : vector) {
            buffer.putFloat(value);
        }
        return (ByteBuffer) buffer.flip();
    }

    public void run() {
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

        RedisClient redisClient = RedisClient.create("redis://localhost:6379");

        try (StatefulRedisConnection<String, String> connection = redisClient.connect();
                StatefulRedisConnection<ByteBuffer, ByteBuffer> binConnection = redisClient.connect(new ByteBufferCodec())) {
            RedisAsyncCommands<String, String> asyncCommands = connection.async();
            RedisAsyncCommands<ByteBuffer, ByteBuffer> binAsyncCommands = binConnection.async();
            // ...

            List<FieldArgs<String>> schema = Arrays.asList(TextFieldArgs.<String> builder().name("content").build(),
                    TagFieldArgs.<String> builder().name("genre").build(),
                    VectorFieldArgs.<String> builder().name("embedding").hnsw().type(VectorFieldArgs.VectorType.FLOAT32)
                            .dimensions(384).distanceMetric(VectorFieldArgs.DistanceMetric.L2).build());

            CreateArgs<String, String> createArgs = CreateArgs.<String, String> builder().on(CreateArgs.TargetType.HASH)
                    .withPrefix("doc:").build();

            CompletableFuture<Void> createIndex = asyncCommands.ftCreate("vector_idx", createArgs, schema)
                    .thenAccept(System.out::println).toCompletableFuture();
            createIndex.join();

            String sentence1 = "That is a very happy person";

            Map<ByteBuffer, ByteBuffer> doc1 = new HashMap<>();
            doc1.put(ByteBuffer.wrap("content".getBytes()), ByteBuffer.wrap(sentence1.getBytes()));
            doc1.put(ByteBuffer.wrap("genre".getBytes()), ByteBuffer.wrap("persons".getBytes()));

            try {
                doc1.put(ByteBuffer.wrap("embedding".getBytes()), floatArrayToByteBuffer(predictor.predict(sentence1)));
            } catch (Exception e) {
                // ...
            }

            CompletableFuture<Long> addDoc1 = binAsyncCommands.hset(ByteBuffer.wrap("doc:1".getBytes()), doc1)
                    .thenApply(result -> {
                        System.out.println(result); // >>> 3
                        return result;
                    }).toCompletableFuture();

            String sentence2 = "That is a happy dog";

            Map<ByteBuffer, ByteBuffer> doc2 = new HashMap<>();
            doc2.put(ByteBuffer.wrap("content".getBytes()), ByteBuffer.wrap(sentence2.getBytes()));
            doc2.put(ByteBuffer.wrap("genre".getBytes()), ByteBuffer.wrap("pets".getBytes()));

            try {
                doc2.put(ByteBuffer.wrap("embedding".getBytes()), floatArrayToByteBuffer(predictor.predict(sentence2)));
            } catch (Exception e) {
                // ...
            }

            CompletableFuture<Long> addDoc2 = binAsyncCommands.hset(ByteBuffer.wrap("doc:2".getBytes()), doc2)
                    .thenApply(result -> {
                        System.out.println(result); // >>> 3
                        return result;
                    }).toCompletableFuture();

            String sentence3 = "Today is a sunny day";

            Map<ByteBuffer, ByteBuffer> doc3 = new HashMap<>();
            doc3.put(ByteBuffer.wrap("content".getBytes()), ByteBuffer.wrap(sentence3.getBytes()));
            doc3.put(ByteBuffer.wrap("genre".getBytes()), ByteBuffer.wrap("weather".getBytes()));

            try {
                doc3.put(ByteBuffer.wrap("embedding".getBytes()), floatArrayToByteBuffer(predictor.predict(sentence3)));
            } catch (Exception e) {
                // ...
            }

            CompletableFuture<Long> addDoc3 = binAsyncCommands.hset(ByteBuffer.wrap("doc:3".getBytes()), doc3)
                    .thenApply(result -> {
                        System.out.println(result); // >>> 3
                        return result;
                    }).toCompletableFuture();
            CompletableFuture.allOf(addDoc1, addDoc2, addDoc3).join();

            String query = "That is a happy person";
            float[] queryEmbedding = null;

            try {
                queryEmbedding = predictor.predict(query);
            } catch (Exception e) {
                // ...
            }

            SearchArgs<ByteBuffer, ByteBuffer> searchArgs = SearchArgs.<ByteBuffer, ByteBuffer> builder()
                    .param(ByteBuffer.wrap("vec".getBytes()), floatArrayToByteBuffer(queryEmbedding))
                    .returnField(ByteBuffer.wrap("content".getBytes()))
                    .returnField(ByteBuffer.wrap("vector_distance".getBytes()))
                    .sortBy(SortByArgs.<ByteBuffer> builder().attribute(ByteBuffer.wrap("vector_distance".getBytes())).build())
                    .build();

            CompletableFuture<SearchReply<ByteBuffer, ByteBuffer>> hashQuery = binAsyncCommands
                    .ftSearch(ByteBuffer.wrap("vector_idx".getBytes()),
                            ByteBuffer.wrap("*=>[KNN 3 @embedding $vec AS vector_distance]".getBytes()), searchArgs)
                    .thenApply(result -> {
                        List<SearchReply.SearchResult<ByteBuffer, ByteBuffer>> results = result.getResults();

                        results.forEach(r -> {
                            String id = StandardCharsets.UTF_8.decode(r.getId()).toString();
                            String content = StandardCharsets.UTF_8
                                    .decode(r.getFields().get(ByteBuffer.wrap("content".getBytes()))).toString();
                            String distance = StandardCharsets.UTF_8
                                    .decode(r.getFields().get(ByteBuffer.wrap("vector_distance".getBytes()))).toString();

                            System.out.println("ID: " + id + ", Content: " + content + ", Distance: " + distance);
                        });
                        // >>> ID: doc:1, Content: That is a very happy person, Distance: 0.114169836044
                        // >>> ID: doc:2, Content: That is a happy dog, Distance: 0.610845506191
                        // >>> ID: doc:3, Content: Today is a sunny day, Distance: 1.48624765873

                        return result;
                    }).toCompletableFuture();
            hashQuery.join();

            List<FieldArgs<String>> jsonSchema = Arrays.asList(
                    TextFieldArgs.<String> builder().name("$.content").as("content").build(),
                    TagFieldArgs.<String> builder().name("$.genre").as("genre").build(),
                    VectorFieldArgs.<String> builder().name("$.embedding").as("embedding").hnsw()
                            .type(VectorFieldArgs.VectorType.FLOAT32).dimensions(384)
                            .distanceMetric(VectorFieldArgs.DistanceMetric.L2).build());

            CreateArgs<String, String> jsonCreateArgs = CreateArgs.<String, String> builder().on(CreateArgs.TargetType.JSON)
                    .withPrefix("jdoc:").build();

            CompletableFuture<Void> jsonCreateIndex = asyncCommands.ftCreate("vector_json_idx", jsonCreateArgs, jsonSchema)
                    .thenAccept(System.out::println).toCompletableFuture();
            jsonCreateIndex.join();

            JsonParser parser = asyncCommands.getJsonParser();

            String jSentence1 = "\"That is a very happy person\"";

            JsonObject jDoc1 = parser.createJsonObject();
            jDoc1.put("content", parser.createJsonValue(jSentence1));
            jDoc1.put("genre", parser.createJsonValue("\"persons\""));

            try {
                jDoc1.put("embedding", parser.createJsonValue(Arrays.toString(predictor.predict(jSentence1))));
            } catch (Exception e) {
                // ...
            }

            CompletableFuture<String> jsonAddDoc1 = asyncCommands.jsonSet("jdoc:1", JsonPath.ROOT_PATH, jDoc1)
                    .thenApply(result -> {
                        System.out.println(result); // >>> OK
                        return result;
                    }).toCompletableFuture();

            String jSentence2 = "\"That is a happy dog\"";

            JsonObject jDoc2 = parser.createJsonObject();
            jDoc2.put("content", parser.createJsonValue(jSentence2));
            jDoc2.put("genre", parser.createJsonValue("\"pets\""));

            try {
                jDoc2.put("embedding", parser.createJsonValue(Arrays.toString(predictor.predict(jSentence2))));
            } catch (Exception e) {
                // ...
            }

            CompletableFuture<String> jsonAddDoc2 = asyncCommands.jsonSet("jdoc:2", JsonPath.ROOT_PATH, jDoc2)
                    .thenApply(result -> {
                        System.out.println(result); // >>> OK
                        return result;
                    }).toCompletableFuture();

            String jSentence3 = "\"Today is a sunny day\"";

            JsonObject jDoc3 = parser.createJsonObject();
            jDoc3.put("content", parser.createJsonValue(jSentence3));
            jDoc3.put("genre", parser.createJsonValue("\"weather\""));

            try {
                jDoc3.put("embedding", parser.createJsonValue(Arrays.toString(predictor.predict(jSentence3))));
            } catch (Exception e) {
                // ...
            }

            CompletableFuture<String> jsonAddDoc3 = asyncCommands.jsonSet("jdoc:3", JsonPath.ROOT_PATH, jDoc3)
                    .thenApply(result -> {
                        System.out.println(result); // >>> OK
                        return result;
                    }).toCompletableFuture();
            CompletableFuture.allOf(jsonAddDoc1, jsonAddDoc2, jsonAddDoc3).join();

            String jQuery = "That is a happy person";
            float[] jsonQueryEmbedding = null;

            try {
                jsonQueryEmbedding = predictor.predict(jQuery);
            } catch (Exception e) {
                // ...
            }

            SearchArgs<ByteBuffer, ByteBuffer> jsonSearchArgs = SearchArgs.<ByteBuffer, ByteBuffer> builder()
                    .param(ByteBuffer.wrap("vec".getBytes()), floatArrayToByteBuffer(jsonQueryEmbedding))
                    .returnField(ByteBuffer.wrap("content".getBytes()))
                    .returnField(ByteBuffer.wrap("vector_distance".getBytes()))
                    .sortBy(SortByArgs.<ByteBuffer> builder().attribute(ByteBuffer.wrap("vector_distance".getBytes())).build())
                    .build();

            CompletableFuture<SearchReply<ByteBuffer, ByteBuffer>> jsonQuery = binAsyncCommands
                    .ftSearch(ByteBuffer.wrap("vector_json_idx".getBytes()),
                            ByteBuffer.wrap("*=>[KNN 3 @embedding $vec AS vector_distance]".getBytes()), jsonSearchArgs)
                    .thenApply(result -> {
                        List<SearchReply.SearchResult<ByteBuffer, ByteBuffer>> results = result.getResults();

                        results.forEach(r -> {
                            String id = StandardCharsets.UTF_8.decode(r.getId()).toString();
                            String content = StandardCharsets.UTF_8
                                    .decode(r.getFields().get(ByteBuffer.wrap("content".getBytes()))).toString();
                            String distance = StandardCharsets.UTF_8
                                    .decode(r.getFields().get(ByteBuffer.wrap("vector_distance".getBytes()))).toString();

                            System.out.println("ID: " + id + ", Content: " + content + ", Distance: " + distance);
                        });
                        // >>> ID: jdoc:1, Content: "That is a very happy person", Distance:0.628328084946
                        // >>> ID: jdoc:2, Content: That is a happy dog, Distance: 0.895147025585
                        // >>> ID: jdoc:3, Content: "Today is a sunny day", Distance: 1.49569523335

                        return result;
                    }).toCompletableFuture();
            jsonQuery.join();
        } finally {
            redisClient.shutdown();
        }
    }

}

```

**Java (Reactive - Lettuce):**

```java
package io.redis.examples.reactive;

// Lettuce client and Redis Search classes.
import io.lettuce.core.*;
import io.lettuce.core.api.StatefulRedisConnection;
import io.lettuce.core.api.reactive.RedisReactiveCommands;
import io.lettuce.core.search.arguments.*;
import io.lettuce.core.search.SearchReply;
import io.lettuce.core.json.JsonParser;
import io.lettuce.core.json.JsonObject;
import io.lettuce.core.json.JsonPath;

// Standard library classes for data manipulation and
// reactive programming.
import java.nio.ByteBuffer;
import java.nio.ByteOrder;
import java.nio.charset.StandardCharsets;
import java.util.*;
import reactor.core.publisher.Mono;

// DJL classes for model loading and inference.
import ai.djl.huggingface.translator.TextEmbeddingTranslatorFactory;
import ai.djl.inference.Predictor;
import ai.djl.repository.zoo.Criteria;
import ai.djl.training.util.ProgressBar;

public class HomeQueryVecExample {

    private ByteBuffer floatArrayToByteBuffer(float[] vector) {
        ByteBuffer buffer = ByteBuffer.allocate(vector.length * 4).order(ByteOrder.LITTLE_ENDIAN);
        for (float value : vector) {
            buffer.putFloat(value);
        }
        return (ByteBuffer) buffer.flip();
    }

    public void run() {
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

        RedisClient redisClient = RedisClient.create("redis://localhost:6379");

        try (StatefulRedisConnection<String, String> connection = redisClient.connect();
                StatefulRedisConnection<ByteBuffer, ByteBuffer> binConnection = redisClient.connect(new ByteBufferCodec())) {
            RedisReactiveCommands<String, String> reactiveCommands = connection.reactive();
            RedisReactiveCommands<ByteBuffer, ByteBuffer> binReactiveCommands = binConnection.reactive();
            // ...

            List<FieldArgs<String>> schema = Arrays.asList(TextFieldArgs.<String> builder().name("content").build(),
                    TagFieldArgs.<String> builder().name("genre").build(),
                    VectorFieldArgs.<String> builder().name("embedding").hnsw().type(VectorFieldArgs.VectorType.FLOAT32)
                            .dimensions(384).distanceMetric(VectorFieldArgs.DistanceMetric.L2).build());

            CreateArgs<String, String> createArgs = CreateArgs.<String, String> builder().on(CreateArgs.TargetType.HASH)
                    .withPrefix("doc:").build();

            Mono<Void> createIndex = reactiveCommands.ftCreate("vector_idx", createArgs, schema).doOnNext(result -> {
                System.out.println(result); // >>> OK
            }).then();
            createIndex.block();

            String sentence1 = "That is a very happy person";

            Map<ByteBuffer, ByteBuffer> doc1 = new HashMap<>();
            doc1.put(ByteBuffer.wrap("content".getBytes()), ByteBuffer.wrap(sentence1.getBytes()));
            doc1.put(ByteBuffer.wrap("genre".getBytes()), ByteBuffer.wrap("persons".getBytes()));

            try {
                doc1.put(ByteBuffer.wrap("embedding".getBytes()), floatArrayToByteBuffer(predictor.predict(sentence1)));
            } catch (Exception e) {
                // ...
            }

            Mono<Long> addDoc1 = binReactiveCommands.hset(ByteBuffer.wrap("doc:1".getBytes()), doc1).doOnNext(result -> {
                System.out.println(result); // >>> 3
            });

            String sentence2 = "That is a happy dog";

            Map<ByteBuffer, ByteBuffer> doc2 = new HashMap<>();
            doc2.put(ByteBuffer.wrap("content".getBytes()), ByteBuffer.wrap(sentence2.getBytes()));
            doc2.put(ByteBuffer.wrap("genre".getBytes()), ByteBuffer.wrap("pets".getBytes()));

            try {
                doc2.put(ByteBuffer.wrap("embedding".getBytes()), floatArrayToByteBuffer(predictor.predict(sentence2)));
            } catch (Exception e) {
                // ...
            }

            Mono<Long> addDoc2 = binReactiveCommands.hset(ByteBuffer.wrap("doc:2".getBytes()), doc2).doOnNext(result -> {
                System.out.println(result); // >>> 3
            });

            String sentence3 = "Today is a sunny day";

            Map<ByteBuffer, ByteBuffer> doc3 = new HashMap<>();
            doc3.put(ByteBuffer.wrap("content".getBytes()), ByteBuffer.wrap(sentence3.getBytes()));
            doc3.put(ByteBuffer.wrap("genre".getBytes()), ByteBuffer.wrap("weather".getBytes()));

            try {
                doc3.put(ByteBuffer.wrap("embedding".getBytes()), floatArrayToByteBuffer(predictor.predict(sentence3)));
            } catch (Exception e) {
                // ...
            }

            Mono<Long> addDoc3 = binReactiveCommands.hset(ByteBuffer.wrap("doc:3".getBytes()), doc3).doOnNext(result -> {
                System.out.println(result); // >>> 3
            });
            Mono.when(addDoc1, addDoc2, addDoc3).block();

            String query = "That is a happy person";
            float[] queryEmbedding = null;

            try {
                queryEmbedding = predictor.predict(query);
            } catch (Exception e) {
                // ...
            }

            SearchArgs<ByteBuffer, ByteBuffer> searchArgs = SearchArgs.<ByteBuffer, ByteBuffer> builder()
                    .param(ByteBuffer.wrap("vec".getBytes()), floatArrayToByteBuffer(queryEmbedding))
                    .returnField(ByteBuffer.wrap("content".getBytes()))
                    .returnField(ByteBuffer.wrap("vector_distance".getBytes()))
                    .sortBy(SortByArgs.<ByteBuffer> builder().attribute(ByteBuffer.wrap("vector_distance".getBytes())).build())
                    .build();

            Mono<SearchReply<ByteBuffer, ByteBuffer>> hashQuery = binReactiveCommands
                    .ftSearch(ByteBuffer.wrap("vector_idx".getBytes()),
                            ByteBuffer.wrap("*=>[KNN 3 @embedding $vec AS vector_distance]".getBytes()), searchArgs)
                    .doOnNext(result -> {
                        List<SearchReply.SearchResult<ByteBuffer, ByteBuffer>> results = result.getResults();

                        results.forEach(r -> {
                            String id = StandardCharsets.UTF_8.decode(r.getId()).toString();
                            String content = StandardCharsets.UTF_8
                                    .decode(r.getFields().get(ByteBuffer.wrap("content".getBytes()))).toString();
                            String distance = StandardCharsets.UTF_8
                                    .decode(r.getFields().get(ByteBuffer.wrap("vector_distance".getBytes()))).toString();

                            System.out.println("ID: " + id + ", Content: " + content + ", Distance: " + distance);
                        });
                        // >>> ID: doc:1, Content: That is a very happy person, Distance: 0.114169836044
                        // >>> ID: doc:2, Content: That is a happy dog, Distance: 0.610845506191
                        // >>> ID: doc:3, Content: Today is a sunny day, Distance: 1.48624765873
                    });
            hashQuery.block();

            List<FieldArgs<String>> jsonSchema = Arrays.asList(
                    TextFieldArgs.<String> builder().name("$.content").as("content").build(),
                    TagFieldArgs.<String> builder().name("$.genre").as("genre").build(),
                    VectorFieldArgs.<String> builder().name("$.embedding").as("embedding").hnsw()
                            .type(VectorFieldArgs.VectorType.FLOAT32).dimensions(384)
                            .distanceMetric(VectorFieldArgs.DistanceMetric.L2).build());

            CreateArgs<String, String> jsonCreateArgs = CreateArgs.<String, String> builder().on(CreateArgs.TargetType.JSON)
                    .withPrefix("jdoc:").build();

            Mono<Void> jsonCreateIndex = reactiveCommands.ftCreate("vector_json_idx", jsonCreateArgs, jsonSchema)
                    .doOnNext(result -> {
                        System.out.println(result); // >>> OK
                    }).then();
            jsonCreateIndex.block();

            JsonParser parser = reactiveCommands.getJsonParser();

            String jSentence1 = "\"That is a very happy person\"";
            JsonObject jDoc1 = parser.createJsonObject();
            jDoc1.put("content", parser.createJsonValue(jSentence1));
            jDoc1.put("genre", parser.createJsonValue("\"persons\""));

            try {
                jDoc1.put("embedding", parser.createJsonValue(Arrays.toString(predictor.predict(jSentence1))));
            } catch (Exception e) {
                // ...
            }

            Mono<Void> jsonAddDoc1 = reactiveCommands.jsonSet("jdoc:1", JsonPath.ROOT_PATH, jDoc1).doOnNext(result -> {
                System.out.println(result); // >>> OK
            }).then();

            String jSentence2 = "\"That is a happy dog\"";
            JsonObject jDoc2 = parser.createJsonObject();
            jDoc2.put("content", parser.createJsonValue(jSentence2));
            jDoc2.put("genre", parser.createJsonValue("\"pets\""));

            try {
                jDoc2.put("embedding", parser.createJsonValue(Arrays.toString(predictor.predict(jSentence2))));
            } catch (Exception e) {
                // ...
            }

            Mono<Void> jsonAddDoc2 = reactiveCommands.jsonSet("jdoc:2", JsonPath.ROOT_PATH, jDoc2).doOnNext(result -> {
                System.out.println(result); // >>> OK
            }).then();

            String jSentence3 = "\"Today is a sunny day\"";
            JsonObject jDoc3 = parser.createJsonObject();
            jDoc3.put("content", parser.createJsonValue(jSentence3));
            jDoc3.put("genre", parser.createJsonValue("\"weather\""));

            try {
                jDoc3.put("embedding", parser.createJsonValue(Arrays.toString(predictor.predict(jSentence3))));
            } catch (Exception e) {
                // ...
            }

            Mono<Void> jsonAddDoc3 = reactiveCommands.jsonSet("jdoc:3", JsonPath.ROOT_PATH, jDoc3).doOnNext(result -> {
                System.out.println(result); // >>> OK
            }).then();
            Mono.when(jsonAddDoc1, jsonAddDoc2, jsonAddDoc3).block();

            String jQuery = "That is a happy person";
            float[] jsonQueryEmbedding = null;

            try {
                jsonQueryEmbedding = predictor.predict(jQuery);
            } catch (Exception e) {
                // ...
            }

            SearchArgs<ByteBuffer, ByteBuffer> jsonSearchArgs = SearchArgs.<ByteBuffer, ByteBuffer> builder()
                    .param(ByteBuffer.wrap("vec".getBytes()), floatArrayToByteBuffer(jsonQueryEmbedding))
                    .returnField(ByteBuffer.wrap("content".getBytes()))
                    .returnField(ByteBuffer.wrap("vector_distance".getBytes()))
                    .sortBy(SortByArgs.<ByteBuffer> builder().attribute(ByteBuffer.wrap("vector_distance".getBytes())).build())
                    .build();

            Mono<SearchReply<ByteBuffer, ByteBuffer>> jsonQuery = binReactiveCommands
                    .ftSearch(ByteBuffer.wrap("vector_json_idx".getBytes()),
                            ByteBuffer.wrap("*=>[KNN 3 @embedding $vec AS vector_distance]".getBytes()), jsonSearchArgs)
                    .doOnNext(result -> {
                        List<SearchReply.SearchResult<ByteBuffer, ByteBuffer>> results = result.getResults();

                        results.forEach(r -> {
                            String id = StandardCharsets.UTF_8.decode(r.getId()).toString();
                            String content = StandardCharsets.UTF_8
                                    .decode(r.getFields().get(ByteBuffer.wrap("content".getBytes()))).toString();
                            String distance = StandardCharsets.UTF_8
                                    .decode(r.getFields().get(ByteBuffer.wrap("vector_distance".getBytes()))).toString();

                            System.out.println("ID: " + id + ", Content: " + content + ", Distance: " + distance);
                        });
                        // >>> ID: jdoc:1, Content: "That is a very happy person", Distance: 0.628328084946
                        // >>> ID: jdoc:2, Content: "That is a happy dog", Distance: 0.895147025585
                        // >>> ID: jdoc:3, Content: "Today is a sunny day", Distance: 1.49569523335
                    });
            jsonQuery.block();
        } finally {
            redisClient.shutdown();
        }
    }

}

```

**JavaScript (Node.js):**

```javascript
await client.ft.create('vector_json_idx', {
    '$.content': {
        type: SchemaFieldTypes.TEXT,
        AS: 'content',
    },
    '$.genre': {
        type: SchemaFieldTypes.TAG,
        AS: 'genre',
    },
    '$.embedding': {
        type: SchemaFieldTypes.VECTOR,
        TYPE: 'FLOAT32',
        ALGORITHM: VectorAlgorithms.HNSW,
        DISTANCE_METRIC: 'L2',
        DIM: 768,
        AS: 'embedding',
    }
}, {
    ON: 'JSON',
    PREFIX: 'jdoc:'
});
```

**Python:**

```python
schema = (
    TextField("$.content", as_name="content"),
    TagField("$.genre", as_name="genre"),
    VectorField(
        "$.embedding", "HNSW", {
            "TYPE": "FLOAT32",
            "DIM": 384,
            "DISTANCE_METRIC": "L2"
        },
        as_name="embedding"
    )
)

r.ft("vector_json_idx").create_index(
    schema,
    definition=IndexDefinition(
        prefix=["jdoc:"], index_type=IndexType.JSON
    )
)
```



Use [`json().set()`]() to add the data
instead of [`hset()`](). The dictionaries
that specify the fields have the same structure as the ones used for `hset()`
but `json().set()` receives them in a positional argument instead of
the `mapping` keyword argument.

An important difference with JSON indexing is that the vectors are
specified using lists instead of binary strings. Generate the list
using the `tolist()` method instead of `tobytes()` as you would with a
hash.

#### Code Examples

**Redis CLI:**

```

```

**Available in:** Redis CLI, Go, Java (Asynchronous - Lettuce), Java (Reactive - Lettuce), JavaScript (Node.js), Python

**Go:**

```go
	for i, emb := range embeddings {
		_, err = rdb.JSONSet(ctx,
			fmt.Sprintf("jdoc:%v", i),
			"$",
			map[string]any{
				"content":   sentences[i],
				"genre":     tags[i],
				"embedding": emb,
			},
		).Result()

		if err != nil {
			panic(err)
		}
	}
```

**Java (Asynchronous - Lettuce):**

```java
            JsonParser parser = asyncCommands.getJsonParser();

            String jSentence1 = "\"That is a very happy person\"";

            JsonObject jDoc1 = parser.createJsonObject();
            jDoc1.put("content", parser.createJsonValue(jSentence1));
            jDoc1.put("genre", parser.createJsonValue("\"persons\""));

            try {
                jDoc1.put("embedding", parser.createJsonValue(Arrays.toString(predictor.predict(jSentence1))));
            } catch (Exception e) {
                // ...
            }

            CompletableFuture<String> jsonAddDoc1 = asyncCommands.jsonSet("jdoc:1", JsonPath.ROOT_PATH, jDoc1)
                    .thenApply(result -> {
                        System.out.println(result); // >>> OK
                        return result;
                    }).toCompletableFuture();

            String jSentence2 = "\"That is a happy dog\"";

            JsonObject jDoc2 = parser.createJsonObject();
            jDoc2.put("content", parser.createJsonValue(jSentence2));
            jDoc2.put("genre", parser.createJsonValue("\"pets\""));

            try {
                jDoc2.put("embedding", parser.createJsonValue(Arrays.toString(predictor.predict(jSentence2))));
            } catch (Exception e) {
                // ...
            }

            CompletableFuture<String> jsonAddDoc2 = asyncCommands.jsonSet("jdoc:2", JsonPath.ROOT_PATH, jDoc2)
                    .thenApply(result -> {
                        System.out.println(result); // >>> OK
                        return result;
                    }).toCompletableFuture();

            String jSentence3 = "\"Today is a sunny day\"";

            JsonObject jDoc3 = parser.createJsonObject();
            jDoc3.put("content", parser.createJsonValue(jSentence3));
            jDoc3.put("genre", parser.createJsonValue("\"weather\""));

            try {
                jDoc3.put("embedding", parser.createJsonValue(Arrays.toString(predictor.predict(jSentence3))));
            } catch (Exception e) {
                // ...
            }

            CompletableFuture<String> jsonAddDoc3 = asyncCommands.jsonSet("jdoc:3", JsonPath.ROOT_PATH, jDoc3)
                    .thenApply(result -> {
                        System.out.println(result); // >>> OK
                        return result;
                    }).toCompletableFuture();
```

**Java (Reactive - Lettuce):**

```java
            JsonParser parser = reactiveCommands.getJsonParser();

            String jSentence1 = "\"That is a very happy person\"";
            JsonObject jDoc1 = parser.createJsonObject();
            jDoc1.put("content", parser.createJsonValue(jSentence1));
            jDoc1.put("genre", parser.createJsonValue("\"persons\""));

            try {
                jDoc1.put("embedding", parser.createJsonValue(Arrays.toString(predictor.predict(jSentence1))));
            } catch (Exception e) {
                // ...
            }

            Mono<Void> jsonAddDoc1 = reactiveCommands.jsonSet("jdoc:1", JsonPath.ROOT_PATH, jDoc1).doOnNext(result -> {
                System.out.println(result); // >>> OK
            }).then();

            String jSentence2 = "\"That is a happy dog\"";
            JsonObject jDoc2 = parser.createJsonObject();
            jDoc2.put("content", parser.createJsonValue(jSentence2));
            jDoc2.put("genre", parser.createJsonValue("\"pets\""));

            try {
                jDoc2.put("embedding", parser.createJsonValue(Arrays.toString(predictor.predict(jSentence2))));
            } catch (Exception e) {
                // ...
            }

            Mono<Void> jsonAddDoc2 = reactiveCommands.jsonSet("jdoc:2", JsonPath.ROOT_PATH, jDoc2).doOnNext(result -> {
                System.out.println(result); // >>> OK
            }).then();

            String jSentence3 = "\"Today is a sunny day\"";
            JsonObject jDoc3 = parser.createJsonObject();
            jDoc3.put("content", parser.createJsonValue(jSentence3));
            jDoc3.put("genre", parser.createJsonValue("\"weather\""));

            try {
                jDoc3.put("embedding", parser.createJsonValue(Arrays.toString(predictor.predict(jSentence3))));
            } catch (Exception e) {
                // ...
            }

            Mono<Void> jsonAddDoc3 = reactiveCommands.jsonSet("jdoc:3", JsonPath.ROOT_PATH, jDoc3).doOnNext(result -> {
                System.out.println(result); // >>> OK
            }).then();
```

**JavaScript (Node.js):**

```javascript
const jSentence1 = 'That is a very happy person';
const jdoc1 = {
    'content': jSentence1,
    'genre': 'persons',
    'embedding': [...(await pipe(jSentence1, pipeOptions)).data],
};

const jSentence2 = 'That is a happy dog';
const jdoc2 = {
    'content': jSentence2,
    'genre': 'pets',
    'embedding': [...(await pipe(jSentence2, pipeOptions)).data],
};

const jSentence3 = 'Today is a sunny day';
const jdoc3 = {
    'content': jSentence3,
    'genre': 'weather',
    'embedding': [...(await pipe(jSentence3, pipeOptions)).data],
};

await Promise.all([
    client.json.set('jdoc:1', '$', jdoc1),
    client.json.set('jdoc:2', '$', jdoc2),
    client.json.set('jdoc:3', '$', jdoc3)
]);
```

**Python:**

```python
content = "That is a very happy person"

r.json().set("jdoc:0", Path.root_path(), {
    "content": content,
    "genre": "persons",
    "embedding": model.encode(content).astype(np.float32).tolist(),
})

content = "That is a happy dog"

r.json().set("jdoc:1", Path.root_path(), {
    "content": content,
    "genre": "pets",
    "embedding": model.encode(content).astype(np.float32).tolist(),
})

content = "Today is a sunny day"

r.json().set("jdoc:2", Path.root_path(), {
    "content": content,
    "genre": "weather",
    "embedding": model.encode(content).astype(np.float32).tolist(),
})
```



The query is almost identical to the one for the hash documents. This
demonstrates how the right choice of aliases for the JSON paths can
save you having to write complex queries. An important thing to notice
is that the vector parameter for the query is still specified as a
binary string (using the `tobytes()` method), even though the data for
the `embedding` field of the JSON was specified as a list.

#### Code Examples

**Redis CLI:**

```

```

**Available in:** Redis CLI, Go, Java (Asynchronous - Lettuce), Java (Reactive - Lettuce), JavaScript (Node.js), Python

**Go:**

```go
	// Generate query embedding for JSON search using Hugot
	jsonQueryResult, err := embeddingPipeline.RunPipeline([]string{
		"That is a happy person",
	})

	if err != nil {
		panic(err)
	}

	jsonBuffer := floatsToBytes(jsonQueryResult.Embeddings[0])

	jsonResults, err := rdb.FTSearchWithArgs(ctx,
		"vector_json_idx",
		"*=>[KNN 3 @embedding $vec AS vector_distance]",
		&redis.FTSearchOptions{
			Return: []redis.FTSearchReturn{
				{FieldName: "vector_distance"},
				{FieldName: "content"},
			},
			DialectVersion: 2,
			Params: map[string]any{
				"vec": jsonBuffer,
			},
		},
	).Result()

	if err != nil {
		panic(err)
	}

	for _, doc := range jsonResults.Docs {
		fmt.Printf(
			"ID: %v, Distance:%v, Content:'%v'\n",
			doc.ID, doc.Fields["vector_distance"], doc.Fields["content"],
		)
	}
```

**Java (Asynchronous - Lettuce):**

```java
            String jQuery = "That is a happy person";
            float[] jsonQueryEmbedding = null;

            try {
                jsonQueryEmbedding = predictor.predict(jQuery);
            } catch (Exception e) {
                // ...
            }

            SearchArgs<ByteBuffer, ByteBuffer> jsonSearchArgs = SearchArgs.<ByteBuffer, ByteBuffer> builder()
                    .param(ByteBuffer.wrap("vec".getBytes()), floatArrayToByteBuffer(jsonQueryEmbedding))
                    .returnField(ByteBuffer.wrap("content".getBytes()))
                    .returnField(ByteBuffer.wrap("vector_distance".getBytes()))
                    .sortBy(SortByArgs.<ByteBuffer> builder().attribute(ByteBuffer.wrap("vector_distance".getBytes())).build())
                    .build();

            CompletableFuture<SearchReply<ByteBuffer, ByteBuffer>> jsonQuery = binAsyncCommands
                    .ftSearch(ByteBuffer.wrap("vector_json_idx".getBytes()),
                            ByteBuffer.wrap("*=>[KNN 3 @embedding $vec AS vector_distance]".getBytes()), jsonSearchArgs)
                    .thenApply(result -> {
                        List<SearchReply.SearchResult<ByteBuffer, ByteBuffer>> results = result.getResults();

                        results.forEach(r -> {
                            String id = StandardCharsets.UTF_8.decode(r.getId()).toString();
                            String content = StandardCharsets.UTF_8
                                    .decode(r.getFields().get(ByteBuffer.wrap("content".getBytes()))).toString();
                            String distance = StandardCharsets.UTF_8
                                    .decode(r.getFields().get(ByteBuffer.wrap("vector_distance".getBytes()))).toString();

                            System.out.println("ID: " + id + ", Content: " + content + ", Distance: " + distance);
                        });
                        // >>> ID: jdoc:1, Content: "That is a very happy person", Distance:0.628328084946
                        // >>> ID: jdoc:2, Content: That is a happy dog, Distance: 0.895147025585
                        // >>> ID: jdoc:3, Content: "Today is a sunny day", Distance: 1.49569523335

                        return result;
                    }).toCompletableFuture();
```

**Java (Reactive - Lettuce):**

```java
            String jQuery = "That is a happy person";
            float[] jsonQueryEmbedding = null;

            try {
                jsonQueryEmbedding = predictor.predict(jQuery);
            } catch (Exception e) {
                // ...
            }

            SearchArgs<ByteBuffer, ByteBuffer> jsonSearchArgs = SearchArgs.<ByteBuffer, ByteBuffer> builder()
                    .param(ByteBuffer.wrap("vec".getBytes()), floatArrayToByteBuffer(jsonQueryEmbedding))
                    .returnField(ByteBuffer.wrap("content".getBytes()))
                    .returnField(ByteBuffer.wrap("vector_distance".getBytes()))
                    .sortBy(SortByArgs.<ByteBuffer> builder().attribute(ByteBuffer.wrap("vector_distance".getBytes())).build())
                    .build();

            Mono<SearchReply<ByteBuffer, ByteBuffer>> jsonQuery = binReactiveCommands
                    .ftSearch(ByteBuffer.wrap("vector_json_idx".getBytes()),
                            ByteBuffer.wrap("*=>[KNN 3 @embedding $vec AS vector_distance]".getBytes()), jsonSearchArgs)
                    .doOnNext(result -> {
                        List<SearchReply.SearchResult<ByteBuffer, ByteBuffer>> results = result.getResults();

                        results.forEach(r -> {
                            String id = StandardCharsets.UTF_8.decode(r.getId()).toString();
                            String content = StandardCharsets.UTF_8
                                    .decode(r.getFields().get(ByteBuffer.wrap("content".getBytes()))).toString();
                            String distance = StandardCharsets.UTF_8
                                    .decode(r.getFields().get(ByteBuffer.wrap("vector_distance".getBytes()))).toString();

                            System.out.println("ID: " + id + ", Content: " + content + ", Distance: " + distance);
                        });
                        // >>> ID: jdoc:1, Content: "That is a very happy person", Distance: 0.628328084946
                        // >>> ID: jdoc:2, Content: "That is a happy dog", Distance: 0.895147025585
                        // >>> ID: jdoc:3, Content: "Today is a sunny day", Distance: 1.49569523335
                    });
```

**JavaScript (Node.js):**

```javascript
const jsons = await client.ft.search(
    'vector_json_idx',
    '*=>[KNN 3 @embedding $B AS score]',
    {
        "PARAMS": {
            B: Buffer.from(
                (await pipe('That is a happy person', pipeOptions)).data.buffer
            ),
        },
        'RETURN': ['score', 'content'],
        'DIALECT': '2'
    },
);
```

**Python:**

```python
q = Query(
    "*=>[KNN 3 @embedding $vec AS vector_distance]"
).return_field("vector_distance").return_field("content").dialect(2)

query_text = "That is a happy person"

res = r.ft("vector_json_idx").search(
    q, query_params={
        "vec": model.encode(query_text).astype(np.float32).tobytes()
    }
)

print(repr(res))
```



Apart from the `jdoc:` prefixes for the keys, the result from the JSON
query is the same as for hash:

```
Result{
    3 total,
    docs: [
        Document {
            'id': 'jdoc:0',
            'payload': None,
            'vector_distance': '0.114169985056',
            'content': 'That is a very happy person'
        },
            .
            .
            .
```

## Learn more

See
[Vector search]()
for more information about the indexing options, distance metrics, and query format
for vectors.
