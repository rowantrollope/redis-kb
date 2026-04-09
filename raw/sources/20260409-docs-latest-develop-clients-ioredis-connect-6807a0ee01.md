---
title: Connect to the server
url: https://redis.io/docs/latest/develop/clients/ioredis/connect/
retrieved_utc: '2026-04-09T20:45:55.439580+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/develop/clients/ioredis/connect/index.html.md
---

# Connect to the server

```json metadata
{
  "title": "Connect to the server",
  "description": "Connect your Python application to a Redis database",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "tableOfContents": {"sections":[{"id":"basic-connection","title":"Basic connection"},{"id":"connect-to-a-redis-cluster","title":"Connect to a Redis cluster"},{"id":"connect-to-your-production-redis-with-tls","title":"Connect to your production Redis with TLS"}]}

,
  "codeExamples": []
}
```
## Basic connection

Connect to localhost on port 6379:

```js
const redis = new Redis();
```

You can also specify a full set of connection options:

```js
const redis = new Redis({
  port: 6379,
  host: "127.0.0.1",
  username: "default",
  password: "my-password",
  db: 0,
});
```

Store and retrieve a simple string.

```js
await redis.set('foo', 'bar');
const value = await redis.get('foo');
console.log(value); // >>> bar
```

## Connect to a Redis cluster

To connect to a Redis cluster, use `Redis.Cluster()`, passing an array of
endpoints.

```js
const redis = new Redis.Cluster([
    {
        host: '127.0.0.1',
        port: 6380,
        password: 'my-password',
        username: 'default',
    },
    {
        host: '127.0.0.1',
        port: 6381,
        password: 'my-other-password',
        username: 'default',
    },
    // ...
]);
```

## Connect to your production Redis with TLS

When you deploy your application, use TLS and follow the [Redis security]() guidelines.

```js
const redis = new Redis({
  host: "localhost",
  //...
  tls: {
    key: readFileSync('./redis_user_private.key'),
    cert: readFileSync('./redis_user.crt'),
    ca: fs.readFileSync('./redis_ca.pem'),
  },
});
```
