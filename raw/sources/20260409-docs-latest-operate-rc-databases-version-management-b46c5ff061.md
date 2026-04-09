---
title: Redis version management
url: https://redis.io/docs/latest/operate/rc/databases/version-management/
retrieved_utc: '2026-04-09T20:45:56.954358+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rc/databases/version-management/index.html.md
---

# Redis version management

```json metadata
{
  "title": "Redis version management",
  "description": "Describes Redis Cloud supported database versions and upgrade options.",
  "categories": ["docs","operate","rc"],
  "tableOfContents": {"sections":[{"id":"redis-version-structure","title":"Redis version structure"},{"id":"version-support-models","title":"Version support models"},{"id":"supported-database-versions","title":"Supported database versions"},{"children":[{"id":"plan-differences","title":"Plan differences"}],"id":"version-selection","title":"Version selection"},{"id":"manual-upgrades","title":"Manual upgrades"},{"id":"faq","title":"FAQ"}]}

,
  "codeExamples": []
}
```
Redis Cloud provides comprehensive database version management that prioritizes customer control over major changes. 


This page describes database version management for Redis Cloud. Redis Cloud manages the cluster version for you automatically.


## Redis version structure

Redis uses a **MAJOR.MINOR.PATCH** versioning scheme:

- **Major versions**: Significant changes that may include breaking changes (e.g., Redis 7 â Redis 8)
- **Minor versions**: New features and improvements within a major version (e.g., 8.2 â 8.4 â 8.6)
- **Patch versions**: Bug fixes and security updates (e.g., 8.2.1 â 8.2.2)

## Version support models

Redis Cloud supports the following version support models:

- **Long-Term Support (LTS)** versions are the second and last minor versions in a major version. LTS versions on Redis Cloud get 5 years of extended support, including security updates and major bug fixes.
- **Short-Term Support (STS)** versions are all minor releases except the second and last minor versions in a major version. STS versions on Redis Cloud are supported for 6 months after the release of the following version.

When a Redis version reaches **End-of-Life (EOL)**, Redis Cloud will automatically upgrade your database to the next minor version during maintenance windows if you do not manually upgrade before EOL.

## Supported database versions


**We strongly recommend using the latest available database version** to benefit from the newest features, performance improvements, and security updates.


| Version | Support model | Status | EOL Date | Plans |
|---------|--------|--------|----------|-------|
| **Redis 8.4** | STS | GA | TBD | Essentials, Pro | 
| **Redis 8.2** | LTS | GA | TBD | Essentials, Pro |
| **Redis 8.0** | STS | Preview | TBD | Essentials<sup>[1](#table-note-1)</sup> |
| **Redis 7.4** | LTS | GA | December 1, 2029 | Essentials, Pro |
| **Redis 7.2** | LTS | GA | December 1, 2029 | Essentials, Pro |
| **Redis 6.2** | LTS | GA | April 1, 2027 | Pro |

1. <a name="table-note-1" style="display: block; height: 80px; margin-top: -80px;"></a> Redis 8.0 is not available for new databases.

When a database version reaches End-of-Life (EOL), Redis Cloud will automatically upgrade your database to the following minor version during maintenance windows if you do not manually upgrade before EOL.

## Version selection

When creating a database, you select the database version (e.g., Redis 8.2). Redis Cloud automatically provides the latest patch version within that version.

For existing databases: 

- **Redis 8.4+**: Minor version auto-upgrades are available (with opt-out for Pro users)
- **Redis 8.2 and earlier**: Auto-upgrade for minor versions is not supported; all upgrades must be done manually. See [Upgrade database version]() for more details.

### Plan differences

| Feature | Essentials | Pro |
|---------|------------|-----|
| Minor version auto-upgrades (Redis 8.4+) | Always enabled, upgrades to latest minor version | Default enabled, can disable |
| Major version upgrades | Customer controlled | Customer controlled |
| Manual upgrades | Yes | Yes |
| [Automatic upgrade time]() | Standard - between 12 AM and 6 AM region time | Configurable - [Set maintenance windows]() |

## Manual upgrades

You can update your databases to a later version if by selecting **More actions** > **Version upgrade** from the database list or database page.

Before upgrading, you should:

- Review the [release notes]() for your target version and all versions in between to ensure compatibility with your applications.
- [Back up your data](), review [breaking changes]().
- Upgrade your staging or QA database before upgrading your production database.

See [Upgrade database version]() for detailed instructions.

## FAQ

**Can I prevent minor version auto-upgrades?**
Pro users can opt out of minor version auto-upgrades for Redis 8.4+. 

**What if I don't upgrade before EOL?**
Redis Cloud will force upgrade after notifications during your next maintenance window to ensure security and support.

**Can I downgrade?**
Automatically reverting to a previous Redis version is not supported on Redis Cloud. See [Manually revert upgrade]() for more details.

**How do I identify LTS vs STS?**
Check the [supported versions table](#supported-versions).