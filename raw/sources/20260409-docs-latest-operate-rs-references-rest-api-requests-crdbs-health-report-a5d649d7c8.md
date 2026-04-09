---
title: CRDB health report requests
url: https://redis.io/docs/latest/operate/rs/references/rest-api/requests/crdbs/health_report/
retrieved_utc: '2026-04-09T20:46:04.463411+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/references/rest-api/requests/crdbs/health_report/index.html.md
---

# CRDB health report requests

```json metadata
{
  "title": "CRDB health report requests",
  "description": "Active-Active database health report requests",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[{"children":[{"id":"request-get-request","title":"Request {#get-request}"},{"id":"response-get-response","title":"Response {#get-response}"},{"id":"status-codes-get-status-codes","title":"Status codes {#get-status-codes}"}],"id":"get-health-report-get-crdbs-health","title":"Get health report {#get-crdbs-health}"}]}

,
  "codeExamples": []
}
```
| Method | Path | Description |
|--------|------|-------------|
| [GET](#get-crdbs-health) | `/v1/crdbs/{crdb_guid}/health_report` | Get a health report for an Active-Active database |

## Get health report {#get-crdbs-health}

	GET /v1/crdbs/{crdb_guid}/health_report

Get a health report for an Active-Active database.

### Request {#get-request} 

#### Example HTTP request

    GET /v1/crdbs/{crdb_guid}/health_report

#### URL parameters

| Field | Type | Description |
|-------|------|-------------|
| crdb_guid | string | Globally unique Active-Active database ID (GUID) |

#### Query parameters

| Field | Type | Description |
|-------|------|-------------|
| instance_id | integer | The request retrieves information from the specified Active-Active database instance. If this instance doesnât exist, the request retrieves information from all instances. (optional) |

### Response {#get-response} 

Returns a JSON array of [CRDB health report objects]().

### Status codes {#get-status-codes} 

| Code | Description |
|------|-------------|
| [200 OK](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.2.1) | Action was successful. |
| [404 Not Found](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.4.5) | Configuration or Active-Active database not found. |
