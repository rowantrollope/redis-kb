---
title: Install on Docker
url: https://redis.io/docs/latest/operate/redisinsight/install/install-on-docker/
retrieved_utc: '2026-04-09T20:45:52.281839+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/redisinsight/install/install-on-docker/index.html.md
---

# Install on Docker

```json metadata
{
  "title": "Install on Docker",
  "description": "How to install Redis Insight on Docker",
  "categories": ["docs","operate","redisinsight"],
  "tableOfContents": {"sections":[{"id":"install-docker","title":"Install Docker"},{"id":"run-redis-insight-docker-image","title":"Run Redis Insight Docker image"}]}

,
  "codeExamples": []
}
```This tutorial shows how to install Redis Insight on [Docker](https://www.docker.com/) so you can use Redis Insight in development.
See a separate guide for installing [Redis Insight on AWS]().

## Install Docker

The first step is to [install Docker for your operating system](https://docs.docker.com/install/). 

## Run Redis Insight Docker image

You can install Redis Insight using one of the options described below.

1. If you do not want to persist your Redis Insight data:

```bash
docker run -d --name redisinsight -p 5540:5540 redis/redisinsight:latest
```
2. If you want to persist your Redis Insight data, first attach the Docker volume to the `/data` path and then run the following command:

```bash
docker run -d --name redisinsight -p 5540:5540 -v redisinsight:/data redis/redisinsight:latest
```

If the previous command returns a permission error, ensure that the user with `ID = 1000` has the necessary permissions to access the volume provided (`redisinsight` in the command above).

Next, point your browser to `http://localhost:5540`.

Redis Insight also provides a health check endpoint at `http://localhost:5540/api/health/` to monitor the health of the running container.
