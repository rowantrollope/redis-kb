---
title: Security
url: https://redis.io/docs/latest/operate/kubernetes/security/
retrieved_utc: '2026-04-09T20:45:58.219442+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/kubernetes/security/index.html.md
---

# Security

```json metadata
{
  "title": "Security",
  "description": "Configure security settings for Redis Enterprise clusters and databases on Kubernetes.",
  "categories": ["docs","operate","kubernetes"],
  "tableOfContents": {"sections":[{"id":"credentials-and-authentication","title":"Credentials and authentication"},{"id":"certificates-and-encryption","title":"Certificates and encryption"},{"id":"secret-management","title":"Secret management"},{"id":"resource-management","title":"Resource management"}]}

,
  "codeExamples": []
}
```
Configure security settings for your Redis Enterprise deployment on Kubernetes. Redis Enterprise for Kubernetes provides comprehensive security features including TLS encryption, authentication, access control, and certificate management.

## Credentials and authentication

Manage cluster credentials and authentication settings:

- [Manage REC credentials]() - Configure and manage Redis Enterprise cluster credentials
- [Configuration secrets]() - Store Redis Enterprise configuration items in Kubernetes Secrets for automatic updates and secure management
- [LDAP authentication]() - Integrate with LDAP for centralized authentication
- [SSO authentication]() - Enable SAML-based single sign-on for Cluster Manager UI access

## Certificates and encryption

Configure TLS certificates and encryption for secure communications:

- [Manage REC certificates]() - Configure cluster certificates for TLS encryption
- [Add client certificates]() - Set up client certificate authentication for databases
- [Internode encryption]() - Enable encryption between cluster nodes and configure custom certificates

## Secret management

Configure external secret management systems:

- [HashiCorp Vault integration]() - Configure HashiCorp Vault as the centralized secret management system for Redis Enterprise for Kubernetes

## Resource management

Configure security-related resource settings:

- [Allow resource adjustment]() - Enable automatic adjustment of system resources for security compliance
