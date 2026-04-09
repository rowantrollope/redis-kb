---
title: Rerankers
url: https://redis.io/docs/latest/develop/ai/redisvl/api/reranker/
retrieved_utc: '2026-04-09T20:46:06.975544+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/develop/ai/redisvl/api/reranker/index.html.md
---

# Rerankers

```json metadata
{
  "title": "Rerankers",
  "description": "",
  "categories": null,
  "tableOfContents": {"sections":[{"children":[{"id":"class-coherererankermodelrerank-english-v30-rankbynone-limit5-returnscoretrue-apiconfignone","title":"class CohereReranker(model='rerank-english-v3.0', rankby=None, limit=5, returnscore=True, api_config=None)"}],"id":"coherereranker","title":"CohereReranker"},{"children":[{"id":"class-hfcrossencoderrerankermodelcross-encoderms-marco-minilm-l-6-v2-limit3-returnscoretrue-rankbynone","title":"class HFCrossEncoderReranker(model='cross-encoder/ms-marco-MiniLM-L-6-v2', limit=3, returnscore=True, *, rankby=None)"}],"id":"hfcrossencoderreranker","title":"HFCrossEncoderReranker"},{"children":[{"id":"class-voyageairerankermodel-rankbynone-limit5-returnscoretrue-apiconfignone","title":"class VoyageAIReranker(model, rankby=None, limit=5, returnscore=True, api_config=None)"}],"id":"voyageaireranker","title":"VoyageAIReranker"}]}

,
  "codeExamples": [{"id":"coherereranker-api"},{"id":"hfcrossencoderreranker-api"},{"id":"voyageaireranker-api"}]
}
```

## CohereReranker

<a id="coherereranker-api"></a>

### `class CohereReranker(model='rerank-english-v3.0', rank_by=None, limit=5, return_score=True, api_config=None)`

Bases: `BaseReranker`

The CohereReranker class uses Cohereâs API to rerank documents based on an
input query.

This reranker is designed to interact with Cohereâs /rerank API,
requiring an API key for authentication. The key can be provided
directly in the api_config dictionary or through the COHERE_API_KEY
environment variable. User must obtain an API key from Cohereâs website
([https://dashboard.cohere.com/](https://dashboard.cohere.com/)). Additionally, the cohere python
client must be installed with pip install cohere.

```python
from redisvl.utils.rerank import CohereReranker

# set up the Cohere reranker with some configuration
reranker = CohereReranker(rank_by=["content"], limit=2)
# rerank raw search results based on user input/query
results = reranker.rank(
    query="your input query text here",
    docs=[
        {"content": "document 1"},
        {"content": "document 2"},
        {"content": "document 3"}
    ]
)
```

Initialize the CohereReranker with specified model, ranking criteria,
and API configuration.

* **Parameters:**
  * **model** (*str*) â The identifier for the Cohere model used for reranking.
    Defaults to ârerank-english-v3.0â.
  * **rank_by** (*Optional* *[* *List* *[* *str* *]* *]*) â Optional list of keys specifying the
    attributes in the documents that should be considered for
    ranking. None means ranking will rely on the modelâs default
    behavior.
  * **limit** (*int*) â The maximum number of results to return after
    reranking. Must be a positive integer.
  * **return_score** (*bool*) â Whether to return scores alongside the
    reranked results.
  * **api_config** (*Optional* *[* *Dict* *]* *,* *optional*) â Dictionary containing the API key.
    Defaults to None.
* **Raises:**
  * **ImportError** â If the cohere library is not installed.
  * **ValueError** â If the API key is not provided.

#### `async arank(query, docs, **kwargs)`

Rerank documents based on the provided query using the Cohere rerank API.

This method processes the userâs query and the provided documents to
rerank them in a manner that is potentially more relevant to the
queryâs context.

* **Parameters:**
  * **query** (*str*) â The userâs search query.
  * **docs** (*Union* *[* *List* *[* *Dict* *[* *str* *,* *Any* *]* *]* *,* *List* *[* *str* *]* *]*) â The list of documents
    to be ranked, either as dictionaries or strings.
* **Returns:**
  The reranked list of documents and optionally associated scores.
* **Return type:**
  Union[Tuple[Union[List[Dict[str, Any]], List[str]], float], List[Dict[str, Any]]]

#### `model_post_init(context, /)`

This function is meant to behave like a BaseModel method to initialise private attributes.

It takes context as an argument since thatâs what pydantic-core passes when calling it.

* **Parameters:**
  * **self** (*BaseModel*) â The BaseModel instance.
  * **context** (*Any*) â The context.
* **Return type:**
  None

#### `rank(query, docs, **kwargs)`

Rerank documents based on the provided query using the Cohere rerank API.

This method processes the userâs query and the provided documents to
rerank them in a manner that is potentially more relevant to the
queryâs context.

* **Parameters:**
  * **query** (*str*) â The userâs search query.
  * **docs** (*Union* *[* *List* *[* *Dict* *[* *str* *,* *Any* *]* *]* *,* *List* *[* *str* *]* *]*) â The list of documents
    to be ranked, either as dictionaries or strings.
* **Returns:**
  The reranked list of documents and optionally associated scores.
* **Return type:**
  Union[Tuple[Union[List[Dict[str, Any]], List[str]], float], List[Dict[str, Any]]]

#### `model_config: ClassVar[ConfigDict] = {}`

Configuration for the model, should be a dictionary conforming to [ConfigDict][pydantic.config.ConfigDict].

## HFCrossEncoderReranker

<a id="hfcrossencoderreranker-api"></a>

### `class HFCrossEncoderReranker(model='cross-encoder/ms-marco-MiniLM-L-6-v2', limit=3, return_score=True, *, rank_by=None)`

Bases: `BaseReranker`

The HFCrossEncoderReranker class uses a cross-encoder models from Hugging Face
to rerank documents based on an input query.

This reranker loads a cross-encoder model using the CrossEncoder class
from the sentence_transformers library. It requires the
sentence_transformers library to be installed.

```python
from redisvl.utils.rerank import HFCrossEncoderReranker

# set up the HFCrossEncoderReranker with a specific model
reranker = HFCrossEncoderReranker(model_name="cross-encoder/ms-marco-MiniLM-L-6-v2", limit=3)
# rerank raw search results based on user input/query
results = reranker.rank(
    query="your input query text here",
    docs=[
        {"content": "document 1"},
        {"content": "document 2"},
        {"content": "document 3"}
    ]
)
```

Initialize the HFCrossEncoderReranker with a specified model and ranking criteria.

* **Parameters:**
  * **model** (*str*) â The name or path of the cross-encoder model to use for reranking.
    Defaults to âcross-encoder/ms-marco-MiniLM-L-6-v2â.
  * **limit** (*int*) â The maximum number of results to return after reranking. Must be a positive integer.
  * **return_score** (*bool*) â Whether to return scores alongside the reranked results.
  * **rank_by** (*List* *[* *str* *]*  *|* *None*)

#### `async arank(query, docs, **kwargs)`

Asynchronously rerank documents based on the provided query using the loaded cross-encoder model.

This method processes the userâs query and the provided documents to rerank them
in a manner that is potentially more relevant to the queryâs context.

* **Parameters:**
  * **query** (*str*) â The userâs search query.
  * **docs** (*Union* *[* *List* *[* *Dict* *[* *str* *,* *Any* *]* *]* *,* *List* *[* *str* *]* *]*) â The list of documents to be ranked,
    either as dictionaries or strings.
* **Returns:**
  The reranked list of documents and optionally associated scores.
* **Return type:**
  Union[Tuple[List[Dict[str, Any]], List[float]], List[Dict[str, Any]]]

#### `model_post_init(context, /)`

This function is meant to behave like a BaseModel method to initialise private attributes.

It takes context as an argument since thatâs what pydantic-core passes when calling it.

* **Parameters:**
  * **self** (*BaseModel*) â The BaseModel instance.
  * **context** (*Any*) â The context.
* **Return type:**
  None

#### `rank(query, docs, **kwargs)`

Rerank documents based on the provided query using the loaded cross-encoder model.

This method processes the userâs query and the provided documents to rerank them
in a manner that is potentially more relevant to the queryâs context.

* **Parameters:**
  * **query** (*str*) â The userâs search query.
  * **docs** (*Union* *[* *List* *[* *Dict* *[* *str* *,* *Any* *]* *]* *,* *List* *[* *str* *]* *]*) â The list of documents to be ranked,
    either as dictionaries or strings.
* **Returns:**
  The reranked list of documents and optionally associated scores.
* **Return type:**
  Union[Tuple[List[Dict[str, Any]], List[float]], List[Dict[str, Any]]]

#### `model_config: ClassVar[ConfigDict] = {}`

Configuration for the model, should be a dictionary conforming to [ConfigDict][pydantic.config.ConfigDict].

## VoyageAIReranker

<a id="voyageaireranker-api"></a>

### `class VoyageAIReranker(model, rank_by=None, limit=5, return_score=True, api_config=None)`

Bases: `BaseReranker`

The VoyageAIReranker class uses VoyageAIâs API to rerank documents based on an
input query.

This reranker is designed to interact with VoyageAIâs /rerank API,
requiring an API key for authentication. The key can be provided
directly in the api_config dictionary or through the VOYAGE_API_KEY
environment variable. User must obtain an API key from VoyageAIâs website
([https://dash.voyageai.com/](https://dash.voyageai.com/)). Additionally, the voyageai python
client must be installed with pip install voyageai.

```python
from redisvl.utils.rerank import VoyageAIReranker

# set up the VoyageAI reranker with some configuration
reranker = VoyageAIReranker(rank_by=["content"], limit=2)
# rerank raw search results based on user input/query
results = reranker.rank(
    query="your input query text here",
    docs=[
        {"content": "document 1"},
        {"content": "document 2"},
        {"content": "document 3"}
    ]
)
```

Initialize the VoyageAIReranker with specified model, ranking criteria,
and API configuration.

* **Parameters:**
  * **model** (*str*) â The identifier for the VoyageAI model used for reranking.
  * **rank_by** (*Optional* *[* *List* *[* *str* *]* *]*) â Optional list of keys specifying the
    attributes in the documents that should be considered for
    ranking. None means ranking will rely on the modelâs default
    behavior.
  * **limit** (*int*) â The maximum number of results to return after
    reranking. Must be a positive integer.
  * **return_score** (*bool*) â Whether to return scores alongside the
    reranked results.
  * **api_config** (*Optional* *[* *Dict* *]* *,* *optional*) â Dictionary containing the API key.
    Defaults to None.
* **Raises:**
  * **ImportError** â If the voyageai library is not installed.
  * **ValueError** â If the API key is not provided.

#### `async arank(query, docs, **kwargs)`

Rerank documents based on the provided query using the VoyageAI rerank API.

This method processes the userâs query and the provided documents to
rerank them in a manner that is potentially more relevant to the
queryâs context.

* **Parameters:**
  * **query** (*str*) â The userâs search query.
  * **docs** (*Union* *[* *List* *[* *Dict* *[* *str* *,* *Any* *]* *]* *,* *List* *[* *str* *]* *]*) â The list of documents
    to be ranked, either as dictionaries or strings.
* **Returns:**
  The reranked list of documents and optionally associated scores.
* **Return type:**
  Union[Tuple[Union[List[Dict[str, Any]], List[str]], float], List[Dict[str, Any]]]

#### `model_post_init(context, /)`

This function is meant to behave like a BaseModel method to initialise private attributes.

It takes context as an argument since thatâs what pydantic-core passes when calling it.

* **Parameters:**
  * **self** (*BaseModel*) â The BaseModel instance.
  * **context** (*Any*) â The context.
* **Return type:**
  None

#### `rank(query, docs, **kwargs)`

Rerank documents based on the provided query using the VoyageAI rerank API.

This method processes the userâs query and the provided documents to
rerank them in a manner that is potentially more relevant to the
queryâs context.

* **Parameters:**
  * **query** (*str*) â The userâs search query.
  * **docs** (*Union* *[* *List* *[* *Dict* *[* *str* *,* *Any* *]* *]* *,* *List* *[* *str* *]* *]*) â The list of documents
    to be ranked, either as dictionaries or strings.
* **Returns:**
  The reranked list of documents and optionally associated scores.
* **Return type:**
  Union[Tuple[Union[List[Dict[str, Any]], List[str]], float], List[Dict[str, Any]]]

#### `model_config: ClassVar[ConfigDict] = {}`

Configuration for the model, should be a dictionary conforming to [ConfigDict][pydantic.config.ConfigDict].
