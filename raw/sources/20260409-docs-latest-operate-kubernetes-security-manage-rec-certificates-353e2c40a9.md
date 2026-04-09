---
title: Manage Redis Enterprise cluster (REC) certificates
url: https://redis.io/docs/latest/operate/kubernetes/security/manage-rec-certificates/
retrieved_utc: '2026-04-09T20:46:00.582295+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/kubernetes/security/manage-rec-certificates/index.html.md
---

# Manage Redis Enterprise cluster (REC) certificates

```json metadata
{
  "title": "Manage Redis Enterprise cluster (REC) certificates",
  "description": "Install your own certificates to be used by the Redis Enterprise cluster's operator.",
  "categories": ["docs","operate","kubernetes"],
  "tableOfContents": {"sections":[{"id":"create-a-secret-to-hold-the-new-certificate","title":"Create a secret to hold the new certificate"},{"children":[{"id":"update-certificates-through-the-api","title":"Update certificates through the API"},{"id":"verify-the-certificate-was-updated","title":"Verify the certificate was updated"}],"id":"update-certificates-in-the-rec-custom-resource","title":"Update certificates in the REC custom resource"},{"id":"more-info","title":"More info"}]}

,
  "codeExamples": []
}
```
By default, Redis Enterprise Software for Kubernetes generates TLS certificates for the cluster during creation. These self-signed certificates are generated on the first node of each Redis Enterprise cluster (REC) and are copied to all other nodes added to the cluster. For the list of of certificates used by Redis Enterprise Software and the traffic they encrypt, see the [certificates table]().

To install and use your own certificates with Kubernetes on your Redis Enterprise cluster, they need to be stored in [secrets](https://kubernetes.io/docs/concepts/configuration/secret/). The REC custom resource also needs to be configured with those secret names to read and use the certificates.

## Create a secret to hold the new certificate

Create the [secret](https://kubernetes.io/docs/tasks/configmap-secret/managing-secret-using-kubectl/) with the required fields shown below.

  ```sh
  kubectl create secret generic <secret-name> \
    --from-file=certificate=</PATH/TO/certificate.pem> \
    --from-file=key=</PATH/TO/key.pem> \
    --from-literal=name=<proxy | api | cm | syncer | metrics_exporter | cp_internode_encryption | dp_internode_encryption>
  ```

For internode encryption certificates, see [Internode encryption]() for detailed configuration instructions.

## Update certificates in the REC custom resource

Edit the Redis Enterprise cluster (REC) custom resource to add a `certificates` subsection under the `spec` section. You are only required to add the fields for the certificates you are installing.

```yaml
spec:
  certificates:
    apiCertificateSecretName: <apicert-secret-name>
    cmCertificateSecretName: <cmcert-secret-name>
    syncerCertificateSecretName: <syncercert-secret-name>
    metricsExporterCertificateSecretName: <metricscert-secret-name>
    proxyCertificateSecretName: <proxycert-secret-name>
    cpInternodeEncryptionCertificateSecretName: <cpine-secret-name>
    dpInternodeEncryptionCertificateSecretName: <dpine-secret-name>
```

### Update certificates through the API

Alternatively, you can also update the REC certificates via the API:

```API
PUT /v1/cluster/update_cert
{
   "certificate": <certificate>, 
   "key": <cert-key>,
   "name": <cert-name> 
}
```

### Verify the certificate was updated

Check the operator logs and use the API to verify the certificate has been updated.

  ```api
  GET /v1/cluster/certificates
  ```

## More info

- [Update certificates]()
- [Install your own certificates]()
- [Glossary/Transport Layer Security (TLS)]()
