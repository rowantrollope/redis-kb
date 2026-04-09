---
title: Streaming features in Featureform
url: https://redis.io/docs/latest/develop/ai/featureform/streaming/
retrieved_utc: '2026-04-09T20:45:59.241923+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/develop/ai/featureform/streaming/index.html.md
---

# Streaming features in Featureform

```json metadata
{
  "title": "Streaming features in Featureform",
  "description": "Build stream-backed features with Kafka, streaming transformations, and Redis serving.",
  "categories": null,
  "tableOfContents": {"sections":[{"id":"prerequisites","title":"Prerequisites"},{"id":"register-kafka","title":"Register Kafka"},{"id":"register-a-kafka-topic","title":"Register a Kafka topic"},{"id":"define-a-streaming-transformation","title":"Define a streaming transformation"},{"id":"define-features-from-a-stream","title":"Define features from a stream"},{"id":"backfill-from-batch-history","title":"Backfill from batch history"},{"id":"register-metadata-and-materialize","title":"Register metadata and materialize"},{"id":"serve-streaming-feature-values","title":"Serve streaming feature values"},{"id":"guidance","title":"Guidance"}]}

,
  "codeExamples": []
}
```
Featureform supports stream-backed feature workflows for use cases that need continuously updated online values while preserving historical correctness for training.

This page focuses on the documented SDK surface: register Kafka, define a streaming transformation, define features with `from_stream(...)`, optionally backfill from a batch source, materialize a feature view, and serve it from Redis.

## Prerequisites

Before you build streaming features, you need:

- a running Featureform deployment
- a registered Redis online store
- a stream-capable compute provider such as Spark or Databricks
- a Kafka topic that contains the events you want to transform into features

## Register Kafka

```python
from featureform.config.file_stores import KafkaConfig

kafka = ff.register_kafka(
    name="transactions-kafka",
    kafka_config=KafkaConfig(
        bootstrap_servers=["kafka-1:9092", "kafka-2:9092"],
        use_msk_iam_auth=False,
        options={
            "kafka.security.protocol": "SASL_SSL",
            "kafka.sasl.mechanism": "SCRAM-SHA-512",
        },
    ),
)
```

## Register a Kafka topic

```python
transactions_stream = kafka.register_kafka_topic(
    name="transactions-stream",
    topic="transactions",
    description="Raw transaction events from Kafka",
)
```

## Define a streaming transformation

```python
@spark.streaming_sql_transformation(
    name="parsed_transactions",
    inputs=[transactions_stream],
)
def parsed_transactions(source):
    return """
        SELECT
            get_json_object(CAST(value AS STRING), '$.user_id') AS user_id,
            CAST(get_json_object(CAST(value AS STRING), '$.amount') AS DOUBLE) AS amount,
            CAST(get_json_object(CAST(value AS STRING), '$.event_time') AS TIMESTAMP) AS event_time
        FROM {{ source }}
    """
```

## Define features from a stream

```python
from datetime import timedelta

window = timedelta(days=7)

@ff.entity
class User:
    rolling_amount = (
        ff.Feature()
        .from_stream(
            parsed_transactions,
            entity="user_id",
            values="amount",
            timestamp="event_time",
        )
        .aggregate(
            function=ff.AggregateFunction.SUM,
            windows=[window],
        )
    )
```

## Backfill from batch history

If the stream is the online source of truth but you already have historical data in batch storage, backfill the stream-backed feature:

```python
historical_transactions = spark.register_delta_table(
    name="historical_transactions",
    database="ml_catalog.featureform",
    table="historical_transactions",
)

@ff.entity
class User:
    rolling_amount = (
        ff.Feature()
        .from_stream(
            parsed_transactions,
            entity="user_id",
            values="amount",
            timestamp="event_time",
        )
        .backfill_from(
            source=historical_transactions,
            entity="user_id",
            values="amount",
            timestamp="event_time",
        )
        .aggregate(
            function=ff.AggregateFunction.SUM,
            windows=[window],
        )
    )
```

## Register metadata and materialize

```python
client.apply()

client.materialize_feature_view(
    view_name="user_streaming_features",
    inference_store=redis,
    features=[User.rolling_amount[window]],
)
```

## Serve streaming feature values

```python
result = client.serve_feature_view(
    view="user_streaming_features",
    entity_ids=["user_1", "user_2"],
)
```

## Guidance

- Parse and cast stream payloads in the transformation layer.
- Reuse one transformed stream for multiple features.
- Keep backfill semantics aligned with the stream definition so training and serving stay consistent.
- Avoid undocumented parameters or status names in production documentation and examples.
