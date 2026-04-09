---
title: Bootstrap validation requests
url: https://redis.io/docs/latest/operate/rs/references/rest-api/requests/bootstrap/validate/
retrieved_utc: '2026-04-09T20:45:36.758472+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/references/rest-api/requests/bootstrap/validate/index.html.md
---

# Bootstrap validation requests

```json metadata
{
  "title": "Bootstrap validation requests",
  "description": "Boostrap validation requests",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[{"children":[{"id":"request-post-request","title":"Request {#post-request}"},{"id":"response-post-response","title":"Response {#post-response}"},{"id":"status-codes-post-status-codes","title":"Status codes {#post-status-codes}"}],"id":"bootstrap-validation-post-bootstrap-validate","title":"Bootstrap validation {#post-bootstrap-validate}"}]}

,
  "codeExamples": []
}
```
| Method | Path | Description |
|--------|------|-------------|
| [POST](#post-bootstrap-validate) | `/v1/bootstrap/validate/{action}` | Perform bootstrap validation |

## Bootstrap validation {#post-bootstrap-validate}

	POST /v1/bootstrap/validate/{action}

Perform bootstrap validation.

Unlike actual bootstrapping, this request blocks and immediately
returns with a response.

### Request {#post-request}

#### Example HTTP request

    POST /v1/bootstrap/validate/join_cluster

#### Request body

The request must contain a [bootstrap configuration object](), similar to the one used for actual bootstrapping.

### Response {#post-response} 

If an error occurs, the call returns a `bootstrap_status` JSON object that contains the following fields:

| Field | Description |
|-------|-------------|
| state | Current bootstrap state.<br></br>`idle`: No bootstrapping started.<br></br>`initiated`: Bootstrap request received.<br></br>`creating_cluster`: In the process of creating a new cluster.<br></br>`joining_cluster`: In the process of joining an existing cluster.<br></br>`error`: The last bootstrap action failed.<br></br>`completed`: The last bootstrap action completed successfully.|
| start_time | Bootstrap process start time |
| end_time | Bootstrap process end time |
| error_code | If state is `error`, this error code describes the type of error encountered. |
| error_details | An error-specific object that may contain additional information about the error. A common field in use is `message` which provides a more verbose error message.

### Status codes {#post-status-codes} 

| Code | Description |
|------|-------------|
| [200 OK](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.2.1) | No error, validation was successful. |
| [406 Not Acceptable](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.4.7) | Validation failed, bootstrap status is returned as body. |
