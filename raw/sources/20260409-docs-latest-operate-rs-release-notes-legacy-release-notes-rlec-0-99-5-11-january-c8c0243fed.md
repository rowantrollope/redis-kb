---
title: RLEC 0.99.5-11 Release Notes (January 5, 2015)
url: https://redis.io/docs/latest/operate/rs/release-notes/legacy-release-notes/rlec-0-99-5-11-january-2015/
retrieved_utc: '2026-04-09T20:46:01.599177+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/release-notes/legacy-release-notes/rlec-0-99-5-11-january-2015/index.html.md
---

# RLEC 0.99.5-11 Release Notes (January 5, 2015)

```json metadata
{
  "title": "RLEC 0.99.5-11 Release Notes (January 5, 2015)",
  "description": "",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[]}

,
  "codeExamples": []
}
```### New features

Initial release, everything is new!

### Changes

Initial release, no changes!

### Fixed issues

None.

### Known issues

- **Issue:** When taking a node offline or removing a node, if the
    node being taken offline or removed is currently serving as the web
    server for the web browser being used to view the management UI, the
    management UI appears down while the node is down.
    **Workaround:** If you are using the cluster name in order to
    connect to the management UI in the browser, and the cluster name is
    registered in your external DNS or you are using the mDNS option,
    then the DNS entries will be updated to point to another node in the
    cluster after a few seconds and the UI will open properly. If you
    are not using the cluster name but rather the node IP in order to
    connect to the management UI in the web browser, you have to use the
    IP of another node in the cluster to access the management UI.
