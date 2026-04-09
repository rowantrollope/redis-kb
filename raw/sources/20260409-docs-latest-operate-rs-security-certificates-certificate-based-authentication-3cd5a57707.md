---
title: Certificate-based authentication
url: https://redis.io/docs/latest/operate/rs/security/certificates/certificate-based-authentication/
retrieved_utc: '2026-04-09T20:45:59.129803+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/security/certificates/certificate-based-authentication/index.html.md
---

# Certificate-based authentication

```json metadata
{
  "title": "Certificate-based authentication",
  "description": "Certificate-based authentication allows secure, passwordless access to the REST API and databases.",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[{"children":[{"id":"set-up-certificate-based-authentication-for-the-rest-api","title":"Set up certificate-based authentication for the REST API"},{"id":"authenticate-rest-api-requests","title":"Authenticate REST API requests"}],"id":"certificate-based-authentication-for-the-rest-api","title":"Certificate-based authentication for the REST API"},{"children":[{"id":"set-up-certificate-based-authentication-for-databases","title":"Set up certificate-based authentication for databases"},{"id":"authenticate-database-connections","title":"Authenticate database connections"}],"id":"certificate-based-authentication-for-databases","title":"Certificate-based authentication for databases"},{"id":"limitations","title":"Limitations"}]}

,
  "codeExamples": []
}
```
You can set up certificate-based authentication for specific users to enable secure, passwordless access to the Redis Software [REST API]() and databases.

## Certificate-based authentication for the REST API

### Set up certificate-based authentication for the REST API

To set up certificate-based authentication:

1. Add a trusted CA certificate `mtls_trusted_ca` to the cluster using an [update cluster certificates]() request:

    **Redis Software v7.22.2 and later:**

For Redis Software versions 7.22.2 and later, use:

```sh
PUT /v1/cluster/certificates
{
  "certificates": [
    {
      "name": "mtls_trusted_ca",
      "certificate": "<content of certificate PEM file>"
    }
  ]
}
```

**Redis Software v7.22.0 and earlier:**

For Redis Software versions 7.22.0 and earlier, use:

```sh
PUT /v1/cluster/update_cert
{
  "name": "mtls_trusted_ca",
  "certificate": "<content of certificate PEM file>"
}
```



1. [Update cluster settings]() with mutual TLS (mTLS) configuration using one of the following options:

    **Without subject validation:**

Additional certificate validation is optional. To enable mutual TLS without subject validation, use:

```sh
PUT /v1/cluster
{
  "mtls_certificate_authentication": true,
  "mtls_client_cert_subject_validation_type": "disabled"
}
```

**With SAN validation:**

For certificate validation by Subject Alternative Name (SAN), use:

```sh
PUT /v1/cluster
{
  "mtls_certificate_authentication": true,
  "mtls_client_cert_subject_validation_type": "san_cn",
  "mtls_authorized_subjects": [{
    "CN": "<Subject Common Name or SAN DNS entry>"
  }]
}
```

Replace the placeholder value `<>` with your client certificate's Subject Common Name or SAN DNS entry.

**Example certificate and mTLS settings**

If a client certificate has:

- Subject: `CN=client.example.com`

- SAN: `DNS:app1.example.com, DNS:client.example.com, DNS:app1-prod.example.com`

You can use any of these values for the CN in `mtls_authorized_subjects`:

```sh
PUT /v1/cluster
{
  "mtls_certificate_authentication": true,
  "mtls_client_cert_subject_validation_type": "san_cn",
  "mtls_authorized_subjects": [
    {"CN": "client.example.com"},   // Subject CN
    {"CN": "app1.example.com"},     // SAN DNS entry
    {"CN": "app1-prod.example.com"} // Another SAN DNS entry
  ]
}
```

**With Full Subject Name validation:**

For certificate validation by full Subject Name, use:

```sh
PUT /v1/cluster
{
  "mtls_certificate_authentication": true,
  "mtls_client_cert_subject_validation_type": "full_subject",
  "mtls_authorized_subjects": [{
    "CN": "<Common Name>",
    "OU": [<array of Organizational Unit strings>],
    "O": "<Organization>",
    "C": "<2-letter country code>",
    "L": "<Locality (city)>",
    "ST": "<State/Province>"
  }]
}
```

Replace the placeholder values `<>` with your client certificate's subject values.

**Example certificate and mTLS settings**

If a client certificate has:

- Subject: `CN=client.example.com`

- SAN: `DNS:app1.example.com, DNS:client.example.com, DNS:app1-prod.example.com`

You can use any of these values for the CN in `mtls_authorized_subjects`:

```sh
PUT /v1/cluster
{
  "mtls_certificate_authentication": true,
  "mtls_client_cert_subject_validation_type": "san_cn",
  "mtls_authorized_subjects": [
    {"CN": "client.example.com"},   // Subject CN
    {"CN": "app1.example.com"},     // SAN DNS entry
    {"CN": "app1-prod.example.com"} // Another SAN DNS entry
  ]
}
```



1. When you [create new users](), include `"auth_method": "certificate"` and `certificate_subject_line` in the request body:

    ```sh
    POST /v1/users
    {
      "auth_method": "certificate",
      "certificate_subject_line": "CN=<Common Name>, OU=<Organization Unit>, O=<Organization>, L=<Locality>, ST=<State/Province>, C=<Country>"
    }
    ```

    Replace the placeholder values `<>` with your client certificate's subject values.

### Authenticate REST API requests

To use the REST API with certificate-based authentication, you must provide a client certificate, signed by the trusted CA `mtls_trusted_ca`, and a private key.

The following example uses [cURL](https://curl.se/) to send a [REST API request]():

```sh
curl --request <METHOD> --url https://<hostname-or-IP-address>:9443/<API-version>/<API-path> --cert client.pem --key client.key
```

## Certificate-based authentication for databases

### Set up certificate-based authentication for databases

To set up certificate-based authentication for databases:

1. Enable mutual TLS for the relevant databases. See [Enable TLS]() for detailed instructions.

1. When you [create new users](), include `"auth_method": "certificate"` and `certificate_subject_line` in the request body :

    ```sh
    POST /v1/users
    {
      "auth_method": "certificate",
      "certificate_subject_line": "CN=<Common Name>, OU=<Organization Unit>, O=<Organization>, L=<Locality>, ST=<State/Province>, C=<Country>"
    }
    ```

    Replace the placeholder values `<>` with your client certificate's subject values.

### Authenticate database connections

To connect to a database with certificate-based authentication, you must provide a client certificate, signed by the trusted CA `mtls_trusted_ca`, and a private key.

The following example shows how to connect to a Redis database with [`redis-cli`]():

```sh
redis-cli -h <hostname-or-IP-address> -p <port> --tls --cacert <redis_cert>.pem --cert redis_user.crt --key redis_user_private.key
```

## Limitations

- Certificate-based authentication is not implemented for the Cluster Manager UI.