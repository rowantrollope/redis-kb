# Redis KB Log

## [2026-04-08] build | automated refresh
- Rebuilt wiki digests from 3 raw source files.
- Refreshed index and overview pages.

## [2026-04-08] build | automated refresh
- Rebuilt wiki digests from 3 raw source files.
- Refreshed index and overview pages.

## [2026-04-09] build | automated refresh
- Rebuilt wiki digests from 3 raw source files.
- Refreshed index and overview pages.

## [2026-04-09] build | automated refresh
- Rebuilt wiki digests from 3 raw source files.
- Refreshed index and overview pages.

## [2026-04-09] build | automated refresh
- Rebuilt wiki digests from 8 raw source files.
- Refreshed index and overview pages.

## [2026-04-09] docs | official redis.io enrichment
- Added official Redis Open Source source pages for persistence, replication, Sentinel, latency diagnosis, and cluster scaling.
- Authored detailed wiki notes for persistence strategy, replication safety, Sentinel operations, latency diagnosis, and cluster scaling.
- Rebuilt digests to add cluster, persistence, sentinels, and troubleshooting topic coverage.
## [2026-04-09] build | automated refresh
- Rebuilt wiki digests from 8 raw source files.
- Refreshed index and overview pages.

## [2026-04-09] build | automated refresh
- Rebuilt wiki digests from 2324 raw source files.
- Refreshed index and overview pages.

## [2026-04-09] ingest | redis docs sitemap import
- Imported the Redis `docs/latest` knowledge base into `raw/sources` using the official sitemap and markdown endpoints where available.
- Refreshed the synthesized wiki from the enlarged raw corpus, keeping `wiki/` as the maintained layer rather than a raw mirror.
- Verified the rebuilt wiki with `scripts/lint_wiki.py`; a small tail of sitemap pages hit Redis rate limits during retry sweeps, but the corpus now contains 2324 raw source files.
