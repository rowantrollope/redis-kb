---
title: Redis Cloud changelog (August 2023)
url: https://redis.io/docs/latest/operate/rc/changelog/2023/august-2023/
retrieved_utc: '2026-04-09T20:45:59.572743+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rc/changelog/2023/august-2023/index.html.md
---

# Redis Cloud changelog (August 2023)

```json metadata
{
  "title": "Redis Cloud changelog (August 2023)",
  "description": "New features, enhancements, and other changes added to Redis Cloud during August 2023.",
  "categories": ["docs","operate","rc"],
  "tableOfContents": {"sections":[{"children":[{"id":"redis-72-flexible-opt-in","title":"Redis 7.2 flexible opt-in"},{"id":"triggers-and-functions-preview","title":"Triggers and functions preview"},{"id":"maintenance-windows","title":"Maintenance windows"}],"id":"new-features","title":"New features"},{"id":"known-issues","title":"Known issues"}]}

,
  "codeExamples": []
}
```
This changelog lists new features, enhancements, and other changes added to Redis Cloud during August 2023.

## New features

### Redis 7.2 flexible opt-in

You can opt in to Redis 7.2 on [Flexible subscriptions](). Redis 7.2 introduces several changes to existing Redis commands; see the [list of breaking changes]() published in June's changelog for more details.

### Triggers and functions preview

A preview of [triggers and functions]() (previously known as RedisGears) is now available in the following regions:

- AWS Asia Pacific - Singapore (`ap-southeast-1`)
- GCP Asia Pacific - Tokyo (`asia-northeast1`)

To use it, [create a fixed subscription]() in one of these regions. Then, [create your database]() and set the database Type to Redis and select Triggers and Functions in the drop-down. Or, set the database Type to Redis Stack to get all of our advanced capabilities.

If you'd like to use triggers and functions with a [Flexible subscription](), contact [support](https://redis.com/company/support/).

For more information about triggers and functions, see the [triggers and functions documentation]().


Triggers and functions is discontinued as of [May 2024]().


### Maintenance windows

You can now [set manual maintenance windows]() if you want to control when Redis can perform [maintenance]() for a Flexible subscription.

## Known issues

#### Invalid ACL rule causes failed state machine

Applying an invalid ACL rule to a database may cause a failed state machine. If this happens, use the [`PUT /v1/acl/redisRules/{aclRedisRuleId}`](https://api.redislabs.com/v1/swagger-ui/index.html#/Access%20Control%20List/updateRedisRule) API call to update the rule, and then delete it if necessary.

