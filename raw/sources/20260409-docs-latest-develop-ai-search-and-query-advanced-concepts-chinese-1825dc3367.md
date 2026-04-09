---
title: Chinese support
url: https://redis.io/docs/latest/develop/ai/search-and-query/advanced-concepts/chinese/
retrieved_utc: '2026-04-09T20:45:58.362377+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/develop/ai/search-and-query/advanced-concepts/chinese/index.html.md
---

# Chinese support

```json metadata
{
  "title": "Chinese support",
  "description": "Chinese support for searching and querying in Redis Open Source",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "tableOfContents": {"sections":[{"id":"example-using-chinese-in-queries","title":"Example: using chinese in queries"},{"id":"using-custom-dictionaries","title":"Using custom dictionaries"}]}

,
  "codeExamples": []
}
```
Support for adding documents in Chinese is available starting at version 0.99.0.

Chinese support allows Chinese documents to be added and tokenized using segmentation
rather than simple tokenization using whitespace and/or punctuation.

Indexing a Chinese document is different than indexing a document in most other
languages because of how tokens are extracted. While most languages can have
their tokens distinguished by separation characters and whitespace, this
is not common in Chinese.

Chinese tokenization is done by scanning the input text and checking every
character or sequence of characters against a dictionary of predefined terms,
and determining the most likely match based on the surrounding terms and characters.

Redis makes use of the [Friso](https://github.com/lionsoul2014/friso)
Chinese tokenization library for this purpose. This is largely transparent to
the user and often no additional configuration is required.

## Example: using chinese in queries

In pseudo-code:

```
FT.CREATE idx ON HASH SCHEMA txt TEXT
HSET docCn txt "Redisæ¯æä¸»ä»åæ­¥ãæ°æ®å¯ä»¥ä»ä¸»æå¡å¨åä»»ææ°éçä»æå¡å¨ä¸åæ­¥ï¼ä»æå¡å¨å¯ä»¥æ¯å³èå¶ä»ä»æå¡å¨çä¸»æå¡å¨ãè¿ä½¿å¾Rediså¯æ§è¡åå±æ å¤å¶ãä»çå¯ä»¥æææ æçå¯¹æ°æ®è¿è¡åæä½ãç±äºå®å¨å®ç°äºåå¸/è®¢éæºå¶ï¼ä½¿å¾ä»æ°æ®åºå¨ä»»ä½å°æ¹åæ­¥æ æ¶ï¼å¯è®¢éä¸ä¸ªé¢éå¹¶æ¥æ¶ä¸»æå¡å¨å®æ´çæ¶æ¯åå¸è®°å½ãåæ­¥å¯¹è¯»åæä½çå¯æ©å±æ§åæ°æ®åä½å¾æå¸®å©ã[8]"
FT.SEARCH idx "æ°æ®" LANGUAGE chinese HIGHLIGHT SUMMARIZE
# Outputs:
# <b>æ°æ®</b>?... <b>æ°æ®</b>è¿è¡åæä½ãç±äºå®å¨å®ç°äºåå¸... <b>æ°æ®</b>åä½å¾æå¸®å©ã[8...
```

Using the Python client:

```
# -*- coding: utf-8 -*-

from redisearch.client import Client, Query
from redisearch import TextField

client = Client('idx')
try:
    client.drop_index()
except:
    pass

client.create_index([TextField('txt')])

# Add a document
client.add_document('docCn1',
                    txt='Redisæ¯æä¸»ä»åæ­¥ãæ°æ®å¯ä»¥ä»ä¸»æå¡å¨åä»»ææ°éçä»æå¡å¨ä¸åæ­¥ä»æå¡å¨å¯ä»¥æ¯å³èå¶ä»ä»æå¡å¨çä¸»æå¡å¨ãè¿ä½¿å¾Rediså¯æ§è¡åå±æ å¤å¶ãä»çå¯ä»¥æææ æçå¯¹æ°æ®è¿è¡åæä½ãç±äºå®å¨å®ç°äºåå¸/è®¢éæºå¶ï¼ä½¿å¾ä»æ°æ®åºå¨ä»»ä½å°æ¹åæ­¥æ æ¶ï¼å¯è®¢éä¸ä¸ªé¢éå¹¶æ¥æ¶ä¸»æå¡å¨å®æ´çæ¶æ¯åå¸è®°å½ãåæ­¥å¯¹è¯»åæä½çå¯æ©å±æ§åæ°æ®åä½å¾æå¸®å©ã[8]',
                    language='chinese')
print client.search(Query('æ°æ®').summarize().highlight().language('chinese')).docs[0].txt
# Outputs:
# <b>æ°æ®</b>?... <b>æ°æ®</b>è¿è¡åæä½ãç±äºå®å¨å®ç°äºåå¸... <b>æ°æ®</b>åä½å¾æå¸®å©ã[8...
```

## Using custom dictionaries

If you wish to use a custom dictionary, you can do so at the module level when
loading the module. The `FRISOINI` setting can point to the location of a
`friso.ini` file that contains the relevant settings and paths to the dictionary
files.

Note that there is no default `friso.ini` file location. RediSearch comes with
its own `friso.ini` and dictionary files, which are compiled into the module
binary at build-time.
