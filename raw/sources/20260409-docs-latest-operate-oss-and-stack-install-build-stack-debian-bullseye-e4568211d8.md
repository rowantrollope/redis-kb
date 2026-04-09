---
title: Build and run Redis Open Source on Debian 11 (Bullseye)
url: https://redis.io/docs/latest/operate/oss_and_stack/install/build-stack/debian-bullseye/
retrieved_utc: '2026-04-09T20:45:55.491445+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/oss_and_stack/install/build-stack/debian-bullseye/index.html.md
---

# Build and run Redis Open Source on Debian 11 (Bullseye)

```json metadata
{
  "title": "Build and run Redis Open Source on Debian 11 (Bullseye)",
  "description": "",
  "categories": ["docs","operate","stack","oss"],
  "tableOfContents": {"sections":[{"id":"1-install-required-dependencies","title":"1. Install required dependencies"},{"id":"2-download-and-extract-the-redis-source","title":"2. Download and extract the Redis source"},{"id":"3-build-redis","title":"3. Build Redis"},{"id":"4-optional-verify-the-installation","title":"4. (Optional) Verify the installation"},{"id":"5-start-redis","title":"5. Start Redis"},{"id":"6-optional-install-redis-to-its-default-location","title":"6. (Optional) Install Redis to its default location"}]}

,
  "codeExamples": []
}
```
Follow the steps below to build and run Redis Open Source from its source code on a system running Debian 11 (Bullseye).


Docker images used to produce these build notes:
- debian:bullseye
- debian:bullseye-slim


## 1. Install required dependencies

First, update your package lists and install the development tools and libraries needed to build Redis:

```bash
apt-get update
apt-get install -y sudo
sudo apt-get install -y --no-install-recommends \
    ca-certificates \
    wget \
    dpkg-dev \
    gcc \
    g++ \
    libc6-dev \
    libssl-dev \
    make \
    git \
    cmake \
    python3 \
    python3-pip \
    python3-venv \
    python3-dev \
    unzip \
    rsync \
    clang \
    automake \
    autoconf \
    libtool
```

## 2. Download and extract the Redis source

The Redis source code is available from [the Redis GitHub site](https://github.com/redis/redis/releases). Select the release you want to build and then select the .tar.gz file from the **Assets** drop down menu. You can verify the integrity of these downloads by checking them against the digests in the [redis-hashes GitHub repository](https://github.com/redis/redis-hashes).

Copy the tar(1) file to `/usr/src`.

Alternatively, you can download the file directly using the `wget` command, as shown below.

```
cd /usr/src
wget -O redis-<version>.tar.gz https://github.com/redis/redis/archive/refs/tags/<version>.tar.gz
```

Replace `<version>` with the three-digit Redis release number, for example `8.0.0`.

Extract the source:

```bash
cd /usr/src
tar xvf redis-<version>.tar.gz
rm redis-<version>.tar.gz
```

## 3. Build Redis

Set the appropriate environment variables to enable TLS, modules, and other build options, then compile and install Redis:

```bash
cd /usr/src/redis-<version>
export BUILD_TLS=yes
export BUILD_WITH_MODULES=yes
export INSTALL_RUST_TOOLCHAIN=yes
export DISABLE_WERRORS=yes

make -j "$(nproc)" all
```

This builds the Redis server, CLI, and any included modules.

## 4. (Optional) Verify the installation

You can confirm that Redis has been built and installed successfully by checking the version:

```bash
./src/redis-server --version
./src/redis-cli --version
```

## 5. Start Redis

To start Redis, use the following command:

```bash
./src/redis-server redis-full.conf
```

To validate that the available modules have been installed, run the [`INFO`] command and look for lines similar to the following:

```
./src/redis-cli INFO
...
# Modules
module:name=ReJSON,ver=20803,api=1,filters=0,usedby=[search],using=[],options=[handle-io-errors]
module:name=search,ver=21005,api=1,filters=0,usedby=[],using=[ReJSON],options=[handle-io-errors]
module:name=bf,ver=20802,api=1,filters=0,usedby=[],using=[],options=[]
module:name=timeseries,ver=11202,api=1,filters=0,usedby=[],using=[],options=[handle-io-errors]
module:name=RedisCompat,ver=1,api=1,filters=0,usedby=[],using=[],options=[]
module:name=vectorset,ver=1,api=1,filters=0,usedby=[],using=[],options=[]
...
```

## 6. (Optional) Install Redis to its default location

```
cd /usr/src/redis-<version>
sudo make install
```
