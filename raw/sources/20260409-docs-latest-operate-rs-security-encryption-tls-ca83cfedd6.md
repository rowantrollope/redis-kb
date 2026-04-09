---
title: Transport Layer Security (TLS)
url: https://redis.io/docs/latest/operate/rs/security/encryption/tls/
retrieved_utc: '2026-04-09T20:45:54.973198+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/security/encryption/tls/index.html.md
---

# Transport Layer Security (TLS)

```json metadata
{
  "title": "Transport Layer Security (TLS)",
  "description": "An overview of Transport Layer Security (TLS).",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[{"id":"protocols-and-ciphers","title":"Protocols and ciphers"},{"id":"troubleshooting","title":"Troubleshooting"}]}

,
  "codeExamples": []
}
```[Transport Layer Security (TLS)](https://en.wikipedia.org/wiki/Transport_Layer_Security), a successor to SSL, ensures the privacy of data sent between applications and Redis databases. TLS also secures connections between Redis Software nodes.

You can [use TLS authentication]() for the following types of communication:

- Communication from clients (applications) to your database
- Communication from your database to other clusters for replication using [Replica Of]()
- Communication to and from your database to other clusters for synchronization using [Active-Active]()

## Protocols and ciphers

TLS protocols and ciphers define the overall suite of algorithms that clients are able to connect to the servers with.

You can change the [TLS protocols]() and [ciphers]() to improve the security of your Redis Software cluster and databases. The default settings are in line with industry best practices, but you can customize them to match the security policy of your organization.

## Troubleshooting

For help troubleshooting TLS failures, see the following knowledge base guides:

- [Troubleshooting TLS Failures](https://support.redislabs.com/hc/en-us/articles/26867190871314-Troubleshooting-TLS-Failures)

- [Troubleshooting TLS Connection Failures Caused by Certificate Expiration](https://support.redislabs.com/hc/en-us/articles/27021922067090-Troubleshooting-TLS-Connection-Failures-Caused-by-Certificate-Expiration)
