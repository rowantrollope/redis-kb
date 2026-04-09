---
title: Encrypt private keys
url: https://redis.io/docs/latest/operate/rs/security/encryption/pem-encryption/
retrieved_utc: '2026-04-09T20:45:57.833591+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/security/encryption/pem-encryption/index.html.md
---

# Encrypt private keys

```json metadata
{
  "title": "Encrypt private keys",
  "description": "Enable PEM encryption to encrypt all private keys on disk.",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[{"id":"enable-pem-encryption","title":"Enable PEM encryption"},{"id":"deactivate-pem-encryption","title":"Deactivate PEM encryption"}]}

,
  "codeExamples": []
}
```
Enable PEM encryption to automatically encrypt all private keys on disk. Public keys (`.cert` files) are not encrypted.

When certificates are rotated, the encrypted private keys are also rotated.

## Enable PEM encryption

To enable PEM encryption and encrypt private keys on the disk, use [`rladmin`]() or the [REST API]().


- [`rladmin cluster config`]():

    ```sh
    rladmin cluster config encrypt_pkeys enabled
    ```

- [Update cluster settings]() REST API request:

    ```sh
    PUT /v1/cluster
    { "encrypt_pkeys": true }
    ```

## Deactivate PEM encryption

To deactivate PEM encryption and decrypt private keys on the disk, use [`rladmin`]() or the [REST API]().

- [`rladmin cluster config`]():

    ```sh
    rladmin cluster config encrypt_pkeys disabled
    ```

- [Update cluster settings]() REST API request:

    ```sh
    PUT /v1/cluster
    { "encrypt_pkeys": false }
    ```
