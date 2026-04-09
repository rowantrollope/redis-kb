---
title: Redis Software release notes 7.22.x
url: https://redis.io/docs/latest/operate/rs/release-notes/rs-7-22-releases/
retrieved_utc: '2026-04-09T20:45:59.003815+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rs/release-notes/rs-7-22-releases/index.html.md
---

# Redis Software release notes 7.22.x

```json metadata
{
  "title": "Redis Software release notes 7.22.x",
  "description": "Diagnostic logging service. Call home client to send daily usage statistics to Redis. Usage reports in support packages. Revamp database API. Migration status API. Two-dimensional rack awareness. New version for actions API. Additional REST API enhancements.",
  "categories": ["docs","operate","rs"],
  "tableOfContents": {"sections":[{"id":"highlights","title":"Highlights"},{"id":"detailed-release-notes","title":"Detailed release notes"},{"children":[{"id":"breaking-changes","title":"Breaking changes"},{"id":"reserved-ports","title":"Reserved ports"},{"id":"deprecations","title":"Deprecations"},{"id":"supported-platforms","title":"Supported platforms"}],"id":"version-changes","title":"Version changes"},{"id":"known-issues","title":"Known issues"},{"id":"known-limitations","title":"Known limitations"}]}

,
  "codeExamples": []
}
```
ââRedis Software version 7.22 is now available!

## Highlights

This version offers:

- Performance improvements

- Diagnostic logging service

- Call home client to send daily usage statistics to Redis

- Usage reports in support packages

- Revamp database API

- Migration status API

- Two-dimensional rack awareness

- New version for actions API

- Additional REST API enhancements

## Detailed release notes

For more detailed release notes, select a build version from the following table:



## Version changes

- The fully qualified domain name is now validated using the FQDN library instead of a regex during cluster creation.

### Breaking changes

- Redis Software installation script changes:

    - Added `--skip-updating-env-path` option to [`install.sh`]().

    - Added `skip_updating_env_path` parameter to the [installation answers file]().

### Reserved ports

Make sure the following ports are open before upgrading Redis Software.

Ports reserved as of Redis Software version 7.22.0:

| Port | Process name | Usage | 
|------|--------------|-------|
| 3346 | cluster_api_internal | Cluster API internal port |
| 3351 | cluster_watchdog_grpc_api | Cluster watchdog now supports gRPC |
| 3352 | grpc_service_mesh | gRPC communication between nodes |
| 3353 | local_grpc_service_mesh | Local gRPC services |
| 3354 | grpc_gossip_envoy | gRPC gossip protocol communication between nodes |
| 3355 | authentication_service | Authentication service internal port |

Ports reserved as of Redis Software version 7.8.2:

| Port | Process name | Usage | 
|------|--------------|-------|
| 3347 | cert_exporter | Reports cluster certificate metrics |
| 3348 | process_exporter | Reports process metrics for DMC and Redis processes |
| 3349 | cluster_wd_exporter | Reports cluster watchdog metrics |
| 3350 | db_controller | Internode communication |
| 9091 | node_exporter | Reports host node metrics related to CPU, memory, disk, and more |
| 9125 | statsd_exporter | Reports push metrics related to the DMC and syncer, and some cluster and node metrics |

See [Ports and port ranges used by Redis Software]() for a complete list.

### Deprecations

#### API deprecations

- Deprecated [`GET /v1/bdbs/<uid>/actions/optimize_shards_placement`]() REST API request. Use [`PUT /v1/bdbs/<uid>/actions/revamp?dry_run=true`]() to get an optimized shard placement blueprint for a database instead.

- Deprecated the `data_files` option for the `recovery_plan` specified in [`POST /v2/bdbs`]() requests. Use the new `original_bdb_shards` option to recover a database from the provided list of shards instead.

- Deprecated [`PUT /v1/cluster/update_cert`]() REST API requests as of Redis Software version 7.22.2. Use [`PUT /v1/cluster/certificates`]() to update cluster certificates instead.

#### Internal monitoring and v1 Prometheus metrics deprecation

The existing [internal monitoring engine]() is deprecated. We recommend transitioning to the new [metrics stream engine]() for improved performance, enhanced integration capabilities, and modernized metrics streaming.

V1 Prometheus metrics are deprecated but still available. To transition to the new metrics stream engine, either migrate your existing dashboards using [this guide]() now, or wait to use new preconfigured dashboards when they become available in a future release.

### Supported platforms

The following table provides a snapshot of supported platforms as of this Redis Software release. See the [supported platforms reference]() for more details about operating system compatibility.

<span title="Check mark icon">&#x2705;</span> Supported â The platform is supported for this version of Redis Software and Redis Stack modules.

<span title="Warning icon" class="font-serif">:warning:</span> Deprecation warning â The platform is still supported for this version of Redis Software, but support will be removed in a future release.

| Redis Software<br />major versions | 8.0 | 7.22 | 7.8 | 7.4 | 7.2 | 6.4 | 6.2 |
|---------------------------------|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|
| **Release date** | Oct 2025 | May 2025 | Nov 2024 | Feb 2024 | Aug 2023 | Feb 2023 | Aug 2021 |
| [**End-of-life date**]() | Determined after<br />next major release | Oct 2027 | May 2027 | Nov 2026 | Feb 2026 | Aug 2025 | Feb 2025 |
| **Platforms** | | | | | | | |
| RHEL 9 &<br />compatible distros<sup>[1](#table-note-1)</sup> | <span title="Supported">&#x2705;</span> | <span title="Supported">&#x2705;</span> | <span title="Supported">&#x2705;</span> | <span title="Supported">&#x2705;</span> | â | â | â |
| RHEL 9<br />FIPS mode<sup>[5](#table-note-5)</sup> | <span title="Supported">&#x2705;</span> | <span title="Supported">&#x2705;</span> | <span title="Supported">&#x2705;</span> | â | â | â | â |
| RHEL 8 &<br />compatible distros<sup>[1](#table-note-1)</sup> | <span title="Supported">&#x2705;</span> | <span title="Supported">&#x2705;</span> | <span title="Supported">&#x2705;</span> | <span title="Supported">&#x2705;</span> | <span title="Supported">&#x2705;</span> | <span title="Supported">&#x2705;</span> | <span title="Supported">&#x2705;</span> |
| RHEL 7 &<br />compatible distros<sup>[1](#table-note-1)</sup> | â | â | â | â | <span title="Deprecated" class="font-serif">:warning:</span> | <span title="Deprecated" class="font-serif">:warning:</span> | <span title="Deprecated" class="font-serif">:warning:</span> |
| Ubuntu 22.04<sup>[2](#table-note-2)</sup> | <span title="Supported">&#x2705;</span> | <span title="Supported">&#x2705;</span> | <span title="Supported">&#x2705;</span> | â | â | â | â |
| Ubuntu 20.04<sup>[2](#table-note-2)</sup> | <span title="Supported">&#x2705;</span> | <span title="Supported">&#x2705;</span> | <span title="Supported">&#x2705;</span> | <span title="Supported">&#x2705;</span> | <span title="Supported">&#x2705;</span> | <span title="Supported">&#x2705;</span> | â |
| Ubuntu 18.04<sup>[2](#table-note-2)</sup> | â | â | â | <span title="Deprecated" class="font-serif">:warning:</span> | <span title="Deprecated" class="font-serif">:warning:</span> | <span title="Deprecated" class="font-serif">:warning:</span> | <span title="Deprecated" class="font-serif">:warning:</span> |
| Ubuntu 16.04<sup>[2](#table-note-2)</sup> | â | â | â | â | <span title="Deprecated" class="font-serif">:warning:</span> | <span title="Deprecated" class="font-serif">:warning:</span> | <span title="Deprecated" class="font-serif">:warning:</span> |
| Amazon Linux 2 | <span title="Supported">&#x2705;</span> | <span title="Supported">&#x2705;</span> | <span title="Supported">&#x2705;</span> | <span title="Supported">&#x2705;</span> | <span title="Supported">&#x2705;</span> | <span title="Supported">&#x2705;</span> | â |
| Amazon Linux 1 | â | â | â | â | <span title="Deprecated" class="font-serif">:warning:</span> | <span title="Deprecated" class="font-serif">:warning:</span> | <span title="Deprecated" class="font-serif">:warning:</span> |
| Kubernetes<sup>[3](#table-note-3)</sup> | <span title="Supported">&#x2705;</span> | <span title="Supported">&#x2705;</span> | <span title="Supported">&#x2705;</span> | <span title="Supported">&#x2705;</span> | <span title="Supported">&#x2705;</span> | <span title="Supported">&#x2705;</span> | <span title="Supported">&#x2705;</span> |
| Docker<sup>[4](#table-note-4)</sup> | <span title="Supported">&#x2705;</span> | <span title="Supported">&#x2705;</span> | <span title="Supported">&#x2705;</span> | <span title="Supported">&#x2705;</span> | <span title="Supported">&#x2705;</span> | <span title="Supported">&#x2705;</span> | <span title="Supported">&#x2705;</span> |

1. <a name="table-note-1"></a>The RHEL-compatible distributions CentOS, CentOS Stream, Alma, and Rocky are supported if they have full RHEL compatibility. Oracle Linux running the Red Hat Compatible Kernel (RHCK) is supported, but the Unbreakable Enterprise Kernel (UEK) is not supported.

2. <a name="table-note-2"></a>The server version of Ubuntu is recommended for production installations. The desktop version is only recommended for development deployments.

3. <a name="table-note-3"></a>See the [Redis Enterprise for Kubernetes documentation]() for details about support per version and Kubernetes distribution.

4. <a name="table-note-4"></a>[Docker images]() of Redis Software are certified for development and testing only.

5. <a name="table-note-5"></a>Supported only if [FIPS was enabled during RHEL installation](https://docs.redhat.com/en/documentation/red_hat_enterprise_linux/9/html/security_hardening/switching-rhel-to-fips-mode_security-hardening#proc_installing-the-system-with-fips-mode-enabled_switching-rhel-to-fips-mode) to ensure FIPS compliance.

## Known issues

- RS131972: Creating an ACL that contains a line break in the Cluster Manager UI can cause shard migration to fail due to ACL errors.

- RS155734: Endpoint availability metrics do not work as expected due to a calculation error.

- RS156391: The `job_scheduler`'s memory usage can increase significantly when the diagnostic logging service is enabled.

- RS153589: The metrics stream engine preview reports incorrect latency metrics.

## Known limitations

#### Upload modules before OS upgrade

If the cluster contains any databases that use modules, you must upload module packages for the target OS version to a node in the existing cluster before you upgrade the cluster's operating system.

See [Upgrade a cluster's operating system]() for detailed upgrade instructions.

#### New Cluster Manager UI limitations

The following legacy UI features are not yet available in the new Cluster Manager UI:

- Purge an Active-Active instance.

    Use [`crdb-cli crdb purge-instance`]() instead.

- Search and export the log.

#### RedisGraph prevents upgrade to RHEL 9 

You cannot upgrade from a prior RHEL version to RHEL 9 if the Redis Software cluster contains a RedisGraph module, even if unused by any database. The [RedisGraph module has reached end-of-life](https://redis.com/blog/redisgraph-eol/) and is completely unavailable in RHEL 9.

#### Query results might include hash keys with lazily expired fields

If one or more fields of a hash key expire after an `FT.SEARCH` or `FT.AGGREGATE` query begins, Redis does not account for these lazily expired fields. As a result, keys with expired fields might still be included in the query results, leading to potentially incorrect or inconsistent results.

#### Active defragmentation does not stop mid-key for JSON

Active defragmentation does not stop mid-key for JSON data. Large keys are defragmented in full, which might cause latency spikes.
