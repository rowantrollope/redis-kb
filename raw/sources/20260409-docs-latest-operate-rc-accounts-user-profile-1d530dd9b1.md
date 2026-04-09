---
title: Manage user account and profile
url: https://redis.io/docs/latest/operate/rc/accounts/user-profile/
retrieved_utc: '2026-04-09T20:45:36.516938+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rc/accounts/user-profile/index.html.md
---

# Manage user account and profile

```json metadata
{
  "title": "Manage user account and profile",
  "description": "Describes the how to manage your user account profile and how to switch between Redis Cloud accounts.",
  "categories": ["docs","operate","rc"],
  "tableOfContents": {"sections":[{"id":"manage-user-profile","title":"Manage user profile"},{"id":"sign-out","title":"Sign out"},{"id":"switch-redis-cloud-accounts","title":"Switch Redis cloud accounts"},{"id":"save-or-discard-changes","title":"Save or discard changes"}]}

,
  "codeExamples": []
}
```When you sign in to the [Redis Cloud console](https://cloud.redis.io/), you use a profile associated with one or more Redis Cloud accounts.  

This account has a profile with settings that you can manage using the Profile control located near the top, right corner of the Redis Cloud console:



When you open the Profile control, you can:

- Review and manage your user account profile.

- Sign out from the Redis Cloud console.

- Switch between Redis Cloud subscriptions administered by your user account.

## Manage user profile

To review your user profile settings, select **User profile** from the Profile control.  This displays the **User Profile** screen:



This screen contains up to three sections, including:

- The *User details* section includes basic information about your account, including _First name_, _Last name_, _Job title_, _Email_, and the date the account was created.  The names and job title can be edited; other settings are read-only.

- The *Password* section lets you change the password for accounts created and managed by Redis Cloud. 

    If you're using single sign-on authentication, you cannot change the password using the *User Profile* screen.  Such accounts are managed by an identity provider (IdP).  For help changing (or recovering) the passwords for these accounts, consult your identity provider docs.

- The **Multi-factor authentication (MFA)** section lets you [manage MFA settings]() for the current user account.  

    When you activate a mobile device, you can use SMS MFA as a second authentication factor.

    To use an authentication app as the factor, you need to activate a mobile device and then use that device to enable the app.

## Sign out 

To sign out from the Redis Cloud console, select **Logout** from the profile control.

## Switch Redis cloud accounts

When your user account is authorized to manage multiple Redis Cloud accounts, each account is displayed in the Profile control.



To switch accounts, select the desired account from the list shown in the Profile control.


To create another Redis Cloud account associated with the same email address, you need to [sign up for Redis Cloud]() again with a plus address of the email address. For many email providers, you can do this by adding `+` and any string to the end of your username. For example, if your address is `example@example.com`, enter `example+account2@example.com`.


## Save or discard changes

Use the **Discard changes** button to cancel user profile setting changes or the **Save changes** button to save changes.