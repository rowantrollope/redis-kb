---
title: The RedisVL CLI
url: https://redis.io/docs/latest/develop/ai/redisvl/overview/cli/
retrieved_utc: '2026-04-09T20:45:34.883678+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/develop/ai/redisvl/overview/cli/index.html.md
---

# The RedisVL CLI

```json metadata
{
  "title": "The RedisVL CLI",
  "description": "",
  "categories": null,
  "tableOfContents": {"sections":[{"id":"commands","title":"Commands"},{"id":"index","title":"Index"},{"id":"stats","title":"Stats"},{"children":[{"id":"choosing-your-redis-instance","title":"Choosing your Redis instance"},{"id":"using-ssl-encryption","title":"Using SSL encryption"}],"id":"optional-arguments","title":"Optional arguments"}]}

,
  "codeExamples": []
}
```

RedisVL is a Python library with a dedicated CLI to help load and create vector search indices within Redis.

This notebook will walk through how to use the Redis Vector Library CLI (``rvl``).

Before running this notebook, be sure to
1. Have installed ``redisvl`` and have that environment active for this notebook.
2. Have a running Redis instance with the Search and Query capability


```python
# First, see if the rvl tool is installed
!rvl version
```

    11:20:38 [RedisVL] INFO   RedisVL version 0.8.2


## Commands
Here's a table of all the rvl commands and options. We'll go into each one in detail below.

| Command       | Options                  | Description |
|---------------|--------------------------|-------------|
| `rvl version` |                          | display the redisvl library version|
| `rvl index`   | `create --schema` or `-s <schema.yaml>`| create a redis index from the specified schema file|
| `rvl index`   | `listall`                | list all the existing search indices|
| `rvl index`   | `info --index` or ` -i <index_name>`   | display the index definition in tabular format|
| `rvl index`   | `delete --index` or `-i <index_name>` | remove the specified index, leaving the data still in Redis|
| `rvl index`   | `destroy --index` or `-i <index_name>`| remove the specified index, as well as the associated data|
| `rvl stats`   | `--index` or `-i <index_name>`        | display the index statistics, including number of docs, average bytes per record, indexing time, etc|
| `rvl stats`   | `--schema` or `-s <schema.yaml>`        | display the index statistics of a schema defined in <schema.yaml>. The index must have already been created within Redis|

## Index

The ``rvl index`` command can be used for a number of tasks related to creating and managing indices. Whether you are working in Python or another language, this cli tool can still be useful for managing and inspecting your indices.

First, we will create an index from a yaml schema that looks like the following:



```python
%%writefile schema.yaml

version: '0.1.0'

index:
    name: vectorizers
    prefix: doc
    storage_type: hash

fields:
    - name: sentence
      type: text
    - name: embedding
      type: vector
      attrs:
        dims: 768
        algorithm: flat
        distance_metric: cosine
```

    Overwriting schema.yaml



```python
# Create an index from a yaml schema
!rvl index create -s schema.yaml
```

    12:42:45 [RedisVL] INFO   Index created successfully



```python
# list the indices that are available
!rvl index listall
```

    12:42:47 [RedisVL] INFO   Indices:
    12:42:47 [RedisVL] INFO   1. vectorizers



```python
# inspect the index fields
!rvl index info -i vectorizers
```

    
    
    Index Information:
    â­ââââââââââââââââ¬ââââââââââââââââ¬ââââââââââââââââ¬ââââââââââââââââ¬ââââââââââââââââ®
    â Index Name    â Storage Type  â Prefixes      â Index Options â Indexing      â
    âââââââââââââââââ¼ââââââââââââââââ¼ââââââââââââââââ¼ââââââââââââââââ¼ââââââââââââââââ¤
    | vectorizers   | HASH          | ['doc']       | []            | 0             |
    â°ââââââââââââââââ´ââââââââââââââââ´ââââââââââââââââ´ââââââââââââââââ´ââââââââââââââââ¯
    Index Fields:
    â­ââââââââââââââââââ¬ââââââââââââââââââ¬ââââââââââââââââââ¬ââââââââââââââââââ¬ââââââââââââââââââ¬ââââââââââââââââââ¬ââââââââââââââââââ¬ââââââââââââââââââ¬ââââââââââââââââââ¬ââââââââââââââââââ¬ââââââââââââââââââ®
    â Name            â Attribute       â Type            â Field Option    â Option Value    â Field Option    â Option Value    â Field Option    â Option Value    â Field Option    â Option Value    â
    âââââââââââââââââââ¼ââââââââââââââââââ¼ââââââââââââââââââ¼ââââââââââââââââââ¼ââââââââââââââââââ¼ââââââââââââââââââ¼ââââââââââââââââââ¼ââââââââââââââââââ¼ââââââââââââââââââ¼ââââââââââââââââââ¼ââââââââââââââââââ¤
    â sentence        â sentence        â TEXT            â WEIGHT          â 1               â                 â                 â                 â                 â                 â                 â
    â embedding       â embedding       â VECTOR          â algorithm       â FLAT            â data_type       â FLOAT32         â dim             â 768             â distance_metric â COSINE          â
    â°ââââââââââââââââââ´ââââââââââââââââââ´ââââââââââââââââââ´ââââââââââââââââââ´ââââââââââââââââââ´ââââââââââââââââââ´ââââââââââââââââââ´ââââââââââââââââââ´ââââââââââââââââââ´ââââââââââââââââââ´ââââââââââââââââââ¯



```python
# delete an index without deleting the data within it
!rvl index delete -i vectorizers
```

    12:42:54 [RedisVL] INFO   Index deleted successfully



```python
# see the indices that still exist
!rvl index listall
```

    12:42:56 [RedisVL] INFO   Indices:


## Stats

The ``rvl stats`` command will return some basic information about the index. This is useful for checking the status of an index, or for getting information about the index to use in other commands.


```python
# create a new index with the same schema
# recreating the index will reindex the documents
!rvl index create -s schema.yaml
```

    12:42:59 [RedisVL] INFO   Index created successfully



```python
# list the indices that are available
!rvl index listall
```

    12:43:01 [RedisVL] INFO   Indices:
    12:43:01 [RedisVL] INFO   1. vectorizers



```python
# see all the stats for the index
!rvl stats -i vectorizers
```

    
    Statistics:
    â­ââââââââââââââââââââââââââââââ¬âââââââââââââ®
    â Stat Key                    â Value      â
    âââââââââââââââââââââââââââââââ¼âââââââââââââ¤
    â num_docs                    â 0          â
    â num_terms                   â 0          â
    â max_doc_id                  â 0          â
    â num_records                 â 0          â
    â percent_indexed             â 1          â
    â hash_indexing_failures      â 0          â
    â number_of_uses              â 1          â
    â bytes_per_record_avg        â nan        â
    â doc_table_size_mb           â 0          â
    â inverted_sz_mb              â 0          â
    â key_table_size_mb           â 0          â
    â offset_bits_per_record_avg  â nan        â
    â offset_vectors_sz_mb        â 0          â
    â offsets_per_term_avg        â nan        â
    â records_per_doc_avg         â nan        â
    â sortable_values_size_mb     â 0          â
    â total_indexing_time         â 0          â
    â total_inverted_index_blocks â 0          â
    â vector_index_sz_mb          â 0.00818634 â
    â°ââââââââââââââââââââââââââââââ´âââââââââââââ¯


## Optional arguments
You can modify these commands with the below optional arguments

| Argument       | Description | Default |
|----------------|-------------|---------|
| `-u --url`     | The full Redis URL to connect to | `redis://localhost:6379` |
| `--host`       | Redis host to connect to | `localhost` |
| `-p --port`    | Redis port to connect to. Must be an integer | `6379` |
| `--user`       | Redis username, if one is required   | `default` |
| `--ssl`        | Boolean flag indicating if ssl is required. If set the Redis base url changes to `rediss://` | None |
| `-a --password`| Redis password, if one is required| `""` |

### Choosing your Redis instance
By default rvl first checks if you have `REDIS_URL` environment variable defined and tries to connect to that. If not, it then falls back to `localhost:6379`, unless you pass the `--host` or `--port` arguments


```python
# specify your Redis instance to connect to
!rvl index listall --host localhost --port 6379
```

    12:43:06 [RedisVL] INFO   Indices:
    12:43:06 [RedisVL] INFO   1. vectorizers


### Using SSL encryption
If your Redis instance is configured to use SSL encryption then set the `--ssl` flag.
You can similarly specify the username and password to construct the full Redis URL


```python
# connect to rediss://jane_doe:password123@localhost:6379
!rvl index listall --user jane_doe -a password123 --ssl
```


```python
!rvl index destroy -i vectorizers
```

    12:43:09 [RedisVL] INFO   Index deleted successfully

