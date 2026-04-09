---
title: OCSP status object
url: https://redis.io/docs/latest/operate/rs/references/rest-api/objects/ocsp_status/
retrieved_utc: '2026-04-09T20:46:05.988723+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/references/rest-api/objects/ocsp_status/index.html.md
---

# OCSP status object

```json metadata
{
  "title": "OCSP status object",
  "description": "An object that represents the cluster's OCSP status",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[]}

,
  "codeExamples": []
}
```
An API object that represents the cluster's OCSP status.

| Name | Type/Value | Description |
|------|------------|-------------|
| cert_status | string | Indicates the proxy certificate's status: GOOD/REVOKED/UNKNOWN (read-only) |
| responder_url | string | The OCSP responder URL this status came from (read-only) |
| next_update | string | The expected date and time of the next certificate status update (read-only) |
| produced_at | string | The date and time when the OCSP responder signed this response (read-only) |
| revocation_time | string | The date and time when the certificate was revoked or placed on hold (read-only) |
| this_update | string | The most recent time that the responder confirmed the current status (read-only) |
