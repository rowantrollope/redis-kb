---
title: PingIdentity SAML integration guide
url: https://redis.io/docs/latest/operate/rc/security/access-control/saml-sso/saml-integration-ping-identity/
retrieved_utc: '2026-04-09T20:45:54.398219+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rc/security/access-control/saml-sso/saml-integration-ping-identity/index.html.md
---

# PingIdentity SAML integration guide

```json metadata
{
  "title": "PingIdentity SAML integration guide",
  "description": "This integration guide shows how to set up PingIndentity as a SAML single sign-on provider for your Redis Cloud account.",
  "categories": ["docs","operate","rc"],
  "tableOfContents": {"sections":[{"children":[{"id":"add-the-redisaccountmapping-attribute","title":"Add the redisAccountMapping attribute"},{"id":"add-the-user-who-will-activate-saml-in-service-manager-redis-cloud","title":"Add the user who will activate SAML in Service Manager (Redis Cloud)"},{"id":"create-the-ping-identity-saml-application","title":"Create the Ping Identity SAML application"}],"id":"step-1-set-up-your-identity-provider-idp","title":"Step 1: Set up your identity provider (IdP)"},{"children":[{"id":"sign-in-to-redis-cloud","title":"Sign in to Redis Cloud"},{"id":"activate-saml-in-access-management","title":"Activate SAML in access management"}],"id":"step-2-configure-saml-support-in-redis-cloud","title":"Step 2: Configure SAML support in Redis Cloud"},{"id":"step-3-finish-saml-configuration-in-ping-identity","title":"Step 3: Finish SAML configuration in Ping Identity"},{"id":"step-4-return-to-redis-cloud-console","title":"Step 4: Return to Redis Cloud console"},{"id":"idp-initiated-sso","title":"IdP-initiated SSO"}]}

,
  "codeExamples": []
}
```
This guide shows how to configure [PingIdentity](https://docs.pingidentity.com/) as a SAML single sign-on identity provider (IdP) for your Redis Cloud account.

To learn more about Redis Cloud support for SAML, see [SAML single sign-on]().

Before completing this guide, you must [verify ownership of any domains]() you want to associate with your SAML setup.

## Step 1: Set up your identity provider (IdP)

### Add the `redisAccountMapping` attribute

1. Log in into your Ping Identity account. Open **Administrators > Identities > User Attributes** and select **Add Attribute**.

    

2. Select the **DECLARED** attribute type.

    

3. Fill in the fields with the following values:

    * **Name**: `redisAccountMapping`
    * **Display name**: `redisAccountMapping`
    * **Description**: `redisAccountMapping`

    

    Select **Save and Close**. Then, verify that the attribute was created successfully.

    

### Add the user who will activate SAML in Service Manager (Redis Cloud)

1. Go to **Administrators > Identities > Users** and select **Add User**.

    

1. Fill in the following information:

    * **redisAccountMapping**: `{accountID}={role}`
     
    **accountID** is the account ID from [account settings]() and **role** represents the role that the user will be assigned in Redis Cloud console (owner, member, manager, billing_admin, or viewer):

    

    Save and check that the user was added successfully.

### Create the Ping Identity SAML application

1. Go to **Administrators > Connections > Applications** and select **+** to add a new application.

    

1. Choose a name for the application, select **SAML Application Type** and select **Configure**.

    

1. In the ACS URLs and Entity ID field add for now some dummy data, like https://example.com
   
    * This data will be updated with the correct data in a subsequent step.

    

    Select **Save**.

1. Go to the **Configuration** tab and save the following information:
   
    * Issuer ID
    * Single Logout Service
    * Single Signon Service

    This information will be needed once we configure SAML in the Redis Cloud console.

    * Select **Download Metadata**. An XML file will be downloaded. Open it and copy the certificate, which is required for the configuration in Redis Cloud console.

    

5. Go to the **Attribute Mappings** tab. Add the following attributes:

    * saml_subject
    * Email
    * FirstName
    * LastName
    * redisAccountMapping

    

## Step 2: Configure SAML support in Redis Cloud

Now that we have our Ping Identity IdP server ready, we need to configure support for SAML in Redis Cloud.

### Sign in to Redis Cloud

Sign in to your account on the [Redis Cloud console](https://cloud.redis.io/#/login).

### Activate SAML in access management

To activate SAML, you must have a local user (or social sign-on user) with the **owner** role. If you have the correct permissions, you will see the **Single Sign-On** tab.

1. Fill in the information you copied previously, including:

    * **Issuer (IdP Entity ID)**: `Issuer ID`
    * **IdP server URL**: `Single Signon Service`
    * **Single logout URL**: `Single Logout Service`
    * **Assertion signing certificate**: Certificate info you copied from the Ping Identity XML file

    Also add:

    * **Email domain binding**: The domain used in your company's email addresses

    

    Select **Enable** and wait a few seconds for the status to change.

1. You will then be able to **Download** the service provider (SP) metadata. Save the file to your local hard disk.

    

1. Open the file in any text editor. Save the following text from the metadata:

    * **EntityID**: The unique name of the service provider (SP)

    

    * **Location**: The location of the assertion consumer service

    

## Step 3: Finish SAML configuration in Ping Identity

1. In Ping Identity, go to **Administrators > Connections > Applications** and select your application name. Select the **Configuration** tab and select **Edit**.

    This is where we had entered mock data. We will now enter the correct data for this step:

    * Paste **EntityID** information in the **Entity ID** field.

    * Paste **Location** link in the ACS URLS field.

    * For the **Sign on URL** field, add URL `https://cloud.redis.io/#/login/?idpId=`, where you need to add the ID from the Reply URL ID, for example, `https://cloud.redis.io/#/login/?idpId=0oa5pwatz2JfpfCb91d7`.

    Select **Save**.

    

1. Select the slider to enable the app.

    

## Step 4: Return to Redis Cloud console

1. Return to the Redis Cloud console and select **Activate**.

    

1. A popup appears, explaining that to test the SAML connection, you need to log in with credentials of a user defined in Ping Federate. Select **Continue** to go to the Ping Federate login screen.

1. The Ping Federate login screen will appear. Enter the credentials and select **Sign In**.

    

If everything is configured correctly, you will see the the Redis Cloud console screen. Your local account is now considered a SAML account. 

To log in to the Redis Cloud console from now on, click on **Sign in with SSO**.



## IdP-initiated SSO

`https://cloud.redis.io/#/login/?idpId=`

1. In Ping Identity, go to **Administrators > Connections > Applications** and select your application name. Select the **Configuration** tab and select **Edit**.

1. Go to **Target Application URL** and enter: **https://{enviroment}/#/login/?idpId={idpId}**, where idpId is the ID found in the Location field, after the last '/'

1. Select **Save**.

    

1. Go to **https://apps.pingone.com/{environment}/myapps/#**, where environment is the environment ID, found in **Administrators -> Environment** for your app.

    

   You are redirected to the Redis Cloud console.

