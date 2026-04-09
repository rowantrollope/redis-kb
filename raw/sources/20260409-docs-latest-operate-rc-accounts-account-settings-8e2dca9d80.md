---
title: Manage account settings
url: https://redis.io/docs/latest/operate/rc/accounts/account-settings/
retrieved_utc: '2026-04-09T20:46:01.605158+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rc/accounts/account-settings/index.html.md
---

# Manage account settings

```json metadata
{
  "title": "Manage account settings",
  "description": "Describes the settings for a Redis Cloud account.",
  "categories": ["docs","operate","rc"],
  "tableOfContents": {"sections":[{"id":"redis-account-info-settings","title":"Redis account info settings"},{"id":"contacts-business-information","title":"Contacts \u0026 Business information"},{"id":"security-settings","title":"Security settings"},{"id":"time-zone-settings","title":"Time zone settings"},{"id":"integration-settings","title":"Integration settings"}]}

,
  "codeExamples": []
}
```
To review or manage the settings associated with your Redis Cloud account, sign in to the [Redis Cloud console](https://cloud.redis.io/) and then select **Account Settings** from the menu.

This displays the **Account Settings** screen:



The available tabs depend on your account, and may include:

- The **Account** tab displays basic information associated with your account, including general info, address details, time zone setting, security settings, and provider integration details.

- The **Cloud Account** tab is displayed for Redis Cloud Pro subscriptions hosted on Amazon Web Services (AWS).  To learn more, see [Bring your own Cloud]().

- The **Integrations** tab lets you manage certain integrations.

You can change some settings by selecting **Edit**. For help changing other settings, [contact Support](https://redis.io/support/).


    
## Redis account info settings

The **Redis Account Info** section provides basic details about your account, including:

| Setting          | Description |
|------------------|-------------|
| _Redis account name_   | Name associated with the Redis Cloud account | 
| _Redis account number_ | Internal ID of the Redis account |
| _Date created_   | Date the user's Redis Cloud account was created, which may differ from the organization account creation date |
| _Last updated_   | Date of the last administrative change to the owner's account, typically reflects access changes or other administrative updates | 

Select **Edit** to change the Redis Account name.



After changing the account name, use the **Save changes** button to save changes or **Discard changes** to revert them.

 

You cannot change the email address associated with a Redis Cloud account.  Instead, create a new account with the updated email address, assign it as an administrator to the organization account, and then use the new account to delete the account with the invalid email address.

## Contacts & Business information 

The **Contacts & Business information** section shows the company name and business address associated with the current Redis Cloud account. Redis uses the company name and business address for invoice and tax purposes.

In addition, this section may include fields unique to your location.  For example, certain regions require tax IDs or other regulatory details.

Select **Edit** to change the account's company name and business address.

   

   

When you change your business address, you must approve the use of the information in this section for communication and billing purposes before you can save. After approving, select **Save changes** to save your changes or **Discard changes** to revert them. 



## Security settings

The **Security** section lets you:

- Manage [multi-factor authentication]() (MFA) for your Redis Cloud account.

- Download the [Redis Cloud certificate authority (CA) bundle]() as a [PEM](https://en.wikipedia.org/wiki/Privacy-Enhanced_Mail) file, which contains the certificates associated with your Redis Cloud account.

## Time zone settings

To change the time zone settings, select **Edit** and then select the desired time zone from the **Time zone** drop-down.

Select **Save changes** to save your changes or **Discard changes** to revert them. 



## Integration settings

The **Integrations** tab includes settings that help you manage integrations of your Redis Cloud account with other services.

For more details, see:
- [Use the Redis Sink Confluent Connector]()
- [Prometheus and Grafana with Redis Cloud]()

