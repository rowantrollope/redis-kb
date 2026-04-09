---
title: Build and run Redis Open Source on AlmaLinux/Rocky Linux 8.10
url: https://redis.io/docs/latest/operate/oss_and_stack/install/build-stack/almalinux-rocky-8/
retrieved_utc: '2026-04-09T20:45:53.078808+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/oss_and_stack/install/build-stack/almalinux-rocky-8/index.html.md
---

# Build and run Redis Open Source on AlmaLinux/Rocky Linux 8.10

```json metadata
{
  "title": "Build and run Redis Open Source on AlmaLinux/Rocky Linux 8.10",
  "description": "",
  "categories": ["docs","operate","stack","oss"],
  "tableOfContents": {"sections":[{"id":"1-prepare-the-system","title":"1. Prepare the system"},{"id":"2-install-required-packages","title":"2. Install required packages"},{"id":"3-install-cmake","title":"3. Install CMake"},{"id":"4-download-and-extract-the-redis-source","title":"4. Download and extract the Redis source"},{"id":"5-build-redis","title":"5. Build Redis"},{"id":"6-optional-verify-the-installation","title":"6. (Optional) Verify the installation"},{"id":"7-start-redis","title":"7. Start Redis"},{"id":"8-optional-install-redis-to-its-default-location","title":"8. (Optional) Install Redis to its default location"}]}

,
  "codeExamples": []
}
```
Follow the steps below to build and run Redis Open Source from its source code on a system running AlmaLinux and Rocky Linux 8.10.


Docker images used to produce these build notes:
- AlmaLinux:
    - almalinux:8.10
    - almalinux:8.10-minimal
- Rocky Linux:
    - rockylinux/rockylinux:8.10
    - rockylinux/rockylinux:8.10-minimal


## 1. Prepare the system


For 8.10-minimal, you'll need to install `sudo` and `dnf` as follows:

```bash
microdnf install dnf sudo -y
```

For 8.10 (regular), you'll need to install `sudo` as follows:

```bash
dnf install sudo -y
```


Clean the package metadata, enable required repositories, and install development tools:

```bash
sudo dnf clean all

# Add GoReleaser repo
sudo tee /etc/yum.repos.d/goreleaser.repo > /dev/null <<EOF
[goreleaser]
name=GoReleaser
baseurl=https://repo.goreleaser.com/yum/
enabled=1
gpgcheck=0
EOF

sudo dnf update -y
sudo dnf groupinstall "Development Tools" -y
sudo dnf config-manager --set-enabled powertools
sudo dnf install -y epel-release
```

## 2. Install required packages

Install the build dependencies, Python 3.11, and supporting tools:

```bash
sudo dnf install -y --nobest --skip-broken \
    pkg-config \
    wget \
    gcc-toolset-13-gcc \
    gcc-toolset-13-gcc-c++ \
    git \
    make \
    openssl \
    openssl-devel \
    python3.11 \
    python3.11-pip \
    python3.11-devel \
    unzip \
    rsync \
    clang \
    curl \
    libtool \
    automake \
    autoconf \
    jq \
    systemd-devel
```

Create a Python virtual environment:

```bash
python3.11 -m venv /opt/venv
```

Enable the GCC toolset:

```bash
sudo cp /opt/rh/gcc-toolset-13/enable /etc/profile.d/gcc-toolset-13.sh
echo "source /etc/profile.d/gcc-toolset-13.sh" | sudo tee -a /etc/bashrc
```

## 3. Install CMake

Install CMake 3.25.1 manually:

```bash
CMAKE_VERSION=3.25.1
ARCH=$(uname -m)

if [ "$ARCH" = "x86_64" ]; then
  CMAKE_FILE=cmake-${CMAKE_VERSION}-linux-x86_64.sh
else
  CMAKE_FILE=cmake-${CMAKE_VERSION}-linux-aarch64.sh
fi

wget https://github.com/Kitware/CMake/releases/download/v${CMAKE_VERSION}/${CMAKE_FILE}
chmod +x ${CMAKE_FILE}
./${CMAKE_FILE} --skip-license --prefix=/usr/local --exclude-subdir
rm ${CMAKE_FILE}

cmake --version
```

## 4. Download and extract the Redis source

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

## 5. Build Redis

Enable the GCC toolset and build Redis with support for TLS and modules:

```bash
source /etc/profile.d/gcc-toolset-13.sh
cd /usr/src/redis-<version>

export BUILD_TLS=yes
export BUILD_WITH_MODULES=yes
export INSTALL_RUST_TOOLCHAIN=yes
export DISABLE_WERRORS=yes

make -j "$(nproc)" all
```

## 6. (Optional) Verify the installation

Check the installed Redis server and CLI versions:

```bash
./src/redis-server --version
./src/redis-cli --version
```

## 7. Start Redis

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

## 8. (Optional) Install Redis to its default location

```
cd /usr/src/redis-<version>
sudo make install
```
