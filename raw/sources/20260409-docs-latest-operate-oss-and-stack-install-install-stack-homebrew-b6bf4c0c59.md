---
title: Install Redis Open Source on macOS
url: https://redis.io/docs/latest/operate/oss_and_stack/install/install-stack/homebrew/
retrieved_utc: '2026-04-09T20:45:53.388677+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/oss_and_stack/install/install-stack/homebrew/index.html.md
---

# Install Redis Open Source on macOS

```json metadata
{
  "title": "Install Redis Open Source on macOS",
  "description": "How to install Redis Open Source on macOS using Homebrew",
  "categories": ["docs","operate","stack","oss"],
  "tableOfContents": {"sections":[{"id":"install-redis-open-source-on-macos-using-homebrew","title":"Install Redis Open Source on macOS using Homebrew"},{"id":"remove-any-existing-redis-installation-files","title":"Remove any existing Redis installation files"},{"id":"install-using-homebrew-install-using-homebrew","title":"Install using Homebrew {#install-using-homebrew}"},{"id":"run-redis","title":"Run Redis"},{"children":[{"id":"verify-that-all-modules-are-loaded-correctly","title":"Verify that all modules are loaded correctly"}],"id":"connect-to-redis","title":"Connect to Redis"},{"id":"stop-redis","title":"Stop Redis"},{"id":"uninstall-redis-open-source","title":"Uninstall Redis Open Source"},{"id":"next-steps","title":"Next steps"}]}

,
  "codeExamples": []
}
```
## Install Redis Open Source on macOS using Homebrew

Installation using Homebrew is only supported on macOS.

To install Redis Open Source on macOS, use [Homebrew](https://brew.sh/).
Make sure that you have [Homebrew installed](https://docs.brew.sh/Installation) before starting on the installation instructions below.

## Remove any existing Redis installation files

If you had previously installed Redis on your system using the default Homebrew formula called "redis", you need to remove it before installing Redis Open Source 8.x.

Follow these steps to remove any existing Redis installation files:

1. Uninstall Redis:
    ```bash
    brew uninstall redis
    ```
1. Next check if the `redis.conf` file is still installed:
    ```bash
    ls -l $(brew --prefix)/etc/redis.conf
    ```

    If you get output similar to the following, then itâs still there:

    ```bash
    -rw-r--r--@ 1 user  admin  122821  2 Oct 16:07 /opt/homebrew/etc/redis.conf
    ```

    Run this command to remove the file:

    ```bash
    rm -iv $(brew --prefix)/etc/redis.conf
    ```

Next, follow the instructions in the [next section](#install-using-homebrew) to install Redis Open Source 8.x using the Redis Homebrew cask.

## Install using Homebrew {#install-using-homebrew}

First, tap the Redis Homebrew cask:


brew tap redis/redis


Next, run `brew install`:


brew install --cask redis


## Run Redis

If this is the first time you've installed Redis on your system, you need to be sure that your `PATH` variable includes the Redis installation location. This location is either `/opt/homebrew/bin` for Apple silicon Macs or `/usr/local/bin` for Intel-based Macs.

To check this, run:


echo $PATH


Next, confirm that the output contains `/opt/homebrew/bin` (Apple silicon Macs) or `/usr/local/bin` (Intel Mac). If neither `/opt/homebrew/bin` nor `/usr/local/bin` are in the output, add them.

Open the file `~/.bashrc` or `~/.zshrc` (depending on your shell), and add the following line.


export PATH=$(brew --prefix)/bin:$PATH


You can now start the Redis server as follows:


redis-server $(brew --prefix)/etc/redis.conf


The server will run in the background.


Because Redis is installed using a Homebrew cask with the `brew tap` command, it will not be integrated with the `brew services` command.


## Connect to Redis

Once Redis is running, you can test it by running `redis-cli`:


redis-cli


Test the connection with the `ping` command:


127.0.0.1:6379> PING
PONG


### Verify that all modules are loaded correctly

If you had previously installed earlier versions of Redis using Homebrew, for example 7.2.x or 7.4.x, you should test to see if all the modules are loaded correctly by running the following command. Your output should look similar to the following:


$ redis-cli MODULE LIST
1) 1) "name"
   2) "bf"
   3) "ver"
   4) (integer) 80200
   5) "path"
   6) "/usr/local/lib/redis/modules//redisbloom.so"
   7) "args"
   8) (empty array)
2) 1) "name"
   2) "timeseries"
   3) "ver"
   4) (integer) 80200
   5) "path"
   6) "/usr/local/lib/redis/modules//redistimeseries.so"
   7) "args"
   8) (empty array)
3) 1) "name"
   2) "search"
   3) "ver"
   4) (integer) 80201
   5) "path"
   6) "/usr/local/lib/redis/modules//redisearch.so"
   7) "args"
   8) (empty array)
4) 1) "name"
   2) "vectorset"
   3) "ver"
   4) (integer) 1
   5) "path"
   6) ""
   7) "args"
   8) (empty array)
5) 1) "name"
   2) "ReJSON"
   3) "ver"
   4) (integer) 80200
   5) "path"
   6) "/usr/local/lib/redis/modules//rejson.so"
   7) "args"
   8) (empty array)


## Stop Redis

Run the following command:


redis-cli SHUTDOWN


## Uninstall Redis Open Source

To uninstall Redis, run:


brew uninstall redis
brew untap redis/redis


## Next steps

Once you have a running Redis instance, you may want to:

* Try the [Redis CLI tutorial]()
* Connect using one of the [Redis clients]()
* Connect using [Redis Insight]()
