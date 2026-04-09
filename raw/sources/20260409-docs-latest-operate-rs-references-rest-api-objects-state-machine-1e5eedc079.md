---
title: State machine object
url: https://redis.io/docs/latest/operate/rs/references/rest-api/objects/state-machine/
retrieved_utc: '2026-04-09T20:46:07.691795+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/references/rest-api/objects/state-machine/index.html.md
---

# State machine object

```json metadata
{
  "title": "State machine object",
  "description": "An object that represents a state machine.",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[]}

,
  "codeExamples": []
}
```
A state machine object tracks the status of database actions.

A state machine contains the following attributes:

| Name        | Type/Value | Description |
|-------------|------------|-------------|
| action_uid  | string     | A globally unique identifier of the action |
| object_name | string     | Name of the object being manipulated by the state machine |
| status      | pending    | Requested state machine has not started |
|             | active     | State machine is currently running |
|             | completed  | Operation complete |
|             | failed     | Operation or state machine failed |
| name        | string     | Name of the running (or failed) state machine |
| state       | string     | Current state within the state machine, when known |
| error       | string     | A descriptive error string for failed state machine, when known |
