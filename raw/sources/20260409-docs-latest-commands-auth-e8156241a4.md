---
title: AUTH
url: https://redis.io/docs/latest/commands/auth/
retrieved_utc: '2026-04-09T20:46:01.966817+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/commands/auth/index.html.md
---

# AUTH

```json metadata
{
  "title": "AUTH",
  "description": "Authenticates the connection.",
  "categories": ["docs","develop","stack","oss","rs","rc","oss","kubernetes","clients"],
  "arguments": [{"display_text":"username","name":"username","optional":true,"since":"6.0.0","type":"string"},{"display_text":"password","name":"password","type":"string"}],
  "syntax_fmt": "AUTH [username] password",
  "complexity": "O(N) where N is the number of passwords defined for the user",
  "group": "connection",
  "command_flags": ["noscript","loading","stale","fast","no_auth","allow_busy"],
  "acl_categories": ["@fast","@connection"],
  "since": "1.0.0",
  "arity": -2,
  "tableOfContents": {"sections":[{"id":"security-notice","title":"Security notice"},{"id":"redis-software-and-redis-cloud-compatibility","title":"Redis Software and Redis Cloud compatibility"},{"id":"return-information","title":"Return information"}]}

,
  "codeExamples": [{"codetabsId":"cmds_cnxmgmt-stepauth1","description":"Foundational: Authenticate with a password using AUTH when the Redis server is protected by requirepass","difficulty":"beginner","id":"auth1","languages":[{"id":"redis-cli","panelId":"panel_redis-cli_cmds_cnxmgmt-stepauth1"},{"clientId":"redis-py","clientName":"redis-py","id":"Python","langId":"python","panelId":"panel_Python_cmds_cnxmgmt-stepauth1"},{"id":"Node-js","panelId":"panel_Nodejs_cmds_cnxmgmt-stepauth1"},{"clientId":"jedis","clientName":"Jedis","id":"Java-Sync","langId":"java","panelId":"panel_Java-Sync_cmds_cnxmgmt-stepauth1"}]},{"codetabsId":"cmds_cnxmgmt-stepauth2","description":"ACL authentication: Authenticate with username and password using AUTH when Redis ACL system is enabled (Redis 6.0\u0026#43;)","difficulty":"intermediate","id":"auth2","languages":[{"id":"redis-cli","panelId":"panel_redis-cli_cmds_cnxmgmt-stepauth2"},{"clientId":"redis-py","clientName":"redis-py","id":"Python","langId":"python","panelId":"panel_Python_cmds_cnxmgmt-stepauth2"},{"id":"Node-js","panelId":"panel_Nodejs_cmds_cnxmgmt-stepauth2"},{"clientId":"jedis","clientName":"Jedis","id":"Java-Sync","langId":"java","panelId":"panel_Java-Sync_cmds_cnxmgmt-stepauth2"}]}]
}
```## Code Examples Legend

The code examples below show how to perform the same operations in different programming languages and client libraries:

- **Redis CLI**: Command-line interface for Redis
- **C# (Synchronous)**: StackExchange.Redis synchronous client
- **C# (Asynchronous)**: StackExchange.Redis asynchronous client
- **Go**: go-redis client
- **Java (Synchronous - Jedis)**: Jedis synchronous client
- **Java (Asynchronous - Lettuce)**: Lettuce asynchronous client
- **Java (Reactive - Lettuce)**: Lettuce reactive/streaming client
- **JavaScript (Node.js)**: node-redis client
- **PHP**: Predis client
- **Python**: redis-py client
- **Rust (Synchronous)**: redis-rs synchronous client
- **Rust (Asynchronous)**: redis-rs asynchronous client

Each code example demonstrates the same basic operation across different languages. The specific syntax and patterns vary based on the language and client library, but the underlying Redis commands and behavior remain consistent.

---

The AUTH command authenticates the current connection in two cases:

1. If the Redis server is password protected via the `requirepass` option.
2. A Redis 6.0 instance, or greater, is using the [Redis ACL system]().

Redis versions prior of Redis 6 were only able to understand the one argument
version of the command:

#### Code Examples

Foundational: Authenticate with a password using AUTH when the Redis server is protected by requirepass

**Difficulty:** Beginner

**Redis CLI:**

```
AUTH "temp-pass"
```

**Available in:** Redis CLI, Java (Synchronous - Jedis), JavaScript (Node.js), Python

**Java (Synchronous - Jedis):**

```java
        // Note: you must use the `Jedis` class rather than `RedisClient`
        // to access the `auth` commands.
        String authResult1 = jedis.auth("default",  "temp_pass");
        System.out.println(authResult1); // >>> OK
```

**JavaScript (Node.js):**

```javascript
const res1 = await client.auth({ password: 'temp_pass' });
console.log(res1); // OK

const res2 = await client.auth({ username: 'default', password: 'temp_pass' });
console.log(res2); // OK

```

**Python:**

```python
res1 = r.auth(password="temp_pass")
print(res1) # >>> True

res2 = r.auth(password="temp_pass", username="default")
print(res2) # >>> True

```



This form just authenticates against the password set with `requirepass`.
In this configuration Redis will deny any command executed by the just
connected clients, unless the connection gets authenticated via `AUTH`.

If the password provided via AUTH matches the password in the configuration file, the server replies with the `OK` status code and starts accepting commands.
Otherwise, an error is returned and the clients needs to try a new password.

When Redis ACLs are used, the command should be given in an extended way:

#### Code Examples

ACL authentication: Authenticate with username and password using AUTH when Redis ACL system is enabled (Redis 6.0+)

**Difficulty:** Intermediate

**Redis CLI:**

```
AUTH "test-user" "strong_password"
```

**Available in:** Redis CLI, Java (Synchronous - Jedis), JavaScript (Node.js), Python

**Java (Synchronous - Jedis):**

```java
        // Note: you must use the `Jedis` class rather than `RedisClient`
        // to access the `auth` commands.
        String authResult2 = jedis.auth("test-user", "strong_password");
        System.out.println(authResult2); // >>> OK
```

**JavaScript (Node.js):**

```javascript
const res3 = await client.auth({ username: 'test-user', password: 'strong_password' });
console.log(res3); // OK

```

**Python:**

```python
res = r.auth(username="test-user", password="strong_password")
print(res) # >>> True

```



In order to authenticate the current connection with one of the connections
defined in the ACL list (see [`ACL SETUSER`]()) and the official [ACL guide]() for more information.

When ACLs are used, the single argument form of the command, where only the password is specified, assumes that the implicit username is "default".

## Security notice

Because of the high performance nature of Redis, it is possible to try
a lot of passwords in parallel in very short time, so make sure to generate a
strong and very long password so that this attack is infeasible.
A good way to generate strong passwords is via the [`ACL GENPASS`]() command.

## Redis Software and Redis Cloud compatibility

| Redis<br />Software | Redis<br />Cloud | <span style="min-width: 9em; display: table-cell">Notes</span> |
|:----------------------|:-----------------|:------|
| <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> | <span title="Supported">&#x2705; Standard</span><br /><span title="Supported"><nobr>&#x2705; Active-Active</nobr></span> |  |

## Return information

**RESP2:**

[Simple string reply](../../develop/reference/protocol-spec#simple-strings): `OK`, or an error if the password, or username/password pair, is invalid.

**RESP3:**

[Simple string reply](../../develop/reference/protocol-spec#simple-strings): `OK`, or an error if the password, or username/password pair, is invalid.


