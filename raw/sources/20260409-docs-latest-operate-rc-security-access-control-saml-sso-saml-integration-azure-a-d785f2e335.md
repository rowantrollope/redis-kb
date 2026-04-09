---
title: Microsoft Entra (formerly Azure Active Directory) SAML integration guide
url: https://redis.io/docs/latest/operate/rc/security/access-control/saml-sso/saml-integration-azure-ad/
retrieved_utc: '2026-04-09T20:45:54.378017+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rc/security/access-control/saml-sso/saml-integration-azure-ad/index.html.md
---

# Microsoft Entra (formerly Azure Active Directory) SAML integration guide

```json metadata
{
  "title": "Microsoft Entra (formerly Azure Active Directory) SAML integration guide",
  "description": "This integration guide shows how to set up Microsoft Entra as a SAML single sign on provider for your Redis Cloud account.",
  "categories": ["docs","operate","rc"],
  "tableOfContents": {"sections":[{"id":"step-1-set-up-your-identity-provider-idp","title":"Step 1: Set up your identity provider (IdP)"},{"children":[{"id":"sign-in-to-redis-cloud","title":"Sign in to Redis Cloud"},{"id":"activate-saml-in-access-management","title":"Activate SAML in access management"}],"id":"step-2-configure-saml-support-in-redis-cloud","title":"Step 2: Configure SAML support in Redis Cloud"},{"id":"step-3-finish-saml-configuration-in-microsoft-entra-id","title":"Step 3: Finish SAML configuration in Microsoft Entra ID"},{"id":"step-4-return-to-redis-cloud-console","title":"Step 4: Return to Redis Cloud console"},{"id":"claim-conditions-and-user-groups","title":"Claim conditions and user groups"},{"id":"idp-initiated-sso","title":"IdP initiated SSO"}]}

,
  "codeExamples": []
}
```
This guide shows how to configure [Microsoft Entra](https://learn.microsoft.com/en-us/azure/active-directory/fundamentals/active-directory-architecture) (formerly Azure Active Directory) as a SAML single sign-on identity provider (IdP) for your Redis Cloud account.

To learn more about Redis Cloud support for SAML, see [SAML single sign on]().

Before completing this guide, you must [verify ownership of any domains]() you want to associate with your SAML setup.

## Step 1: Set up your identity provider (IdP)

To create the Microsoft Entra SAML Toolkit integration application:

1. Sign in to your Microsoft Azure account.

1. From the main menu, select **Microsoft Entra ID > Enterprise Applications**. Select **New application** to add a new application.

    

1. Select **Microsoft Entra SAML Toolkit** from the list of apps.

    

1. Name the application **Redis Cloud** and then select **Create**. 

    

1. Select **Properties** and upload the Redis logo. 

    

    Select **Save**.

1. Once you've created the application, go to the **Application Overview** and select **Set up single sign on**.

    

1. Select **SAML** as the single sign-on method.

    

1. Go to **Step 1** in the configuration screen and select **Edit**.

    Enter some mock data in the required fields.

    

    Select **Save** to save your changes.

1. Go to **Step 3** in the configuration screen.

   * Certificate (Base 64) is required to complete SAML configuration in the Redis Cloud console. Select **Download** to download it.

     

1. Go to **Step 4** in the configuration screen, and note down or copy the following information:

   * **Login URL** is used as the "IdP server URL" in the SAML configuration in admin console.
   * **Microsoft Entra Identifier** is used as the "Issuer (IdP Entity ID)" in the SAML configuration in admin console.
  
    

## Step 2: Configure SAML support in Redis Cloud

Now that you have your Entra IdP server ready, configure support for SAML in Redis Cloud.

### Sign in to Redis Cloud

Sign in to your account on the [Redis Cloud console](https://cloud.redis.io/#/login).

### Activate SAML in access management

To activate SAML, you must have a local user (or social sign-on user) with the **owner** role. If you have the correct permissions, you will see the **Single Sign-On** tab.

1. Fill in the information you saved previously in the **setup** form. This includes :

   * **Issuer (IdP Entity ID)**: Microsoft Entra Identifier
   * **IdP server URL**: Login URL
   * **Assertion signing certificate**: Drag-and-drop the certificate file you downloaded to disk in the form text area

     

   Once you click the **Enable** button, wait a few seconds for the status to change.

1. You will then be able to **download** the service provider (SP) metadata. Save the file to your local hard disk.

    

1. Open the file in any text editor. Save the following text from the metadata:

   * **EntityID**: The unique name of the service provider (SP)

    

   * **Location**: The location of the assertion consumer service

    

## Step 3: Finish SAML configuration in Microsoft Entra ID

1. Go back to Microsoft Entra ID setup and **Edit** the Basic SAML Configuration in **Step 1**. 
   
   This is where you entered mock data. Let's now enter the correct data for this step.

   
   For the `EntityID` and `Location` fields below you can directly upload the metadata file using the option at the top of the page. However, you will still need to manually    add the **Sign on URL**.
   

    * Paste `EntityID` information in the `Identifier (Entity ID)` field.
  
    * Paste `Location` link in `Reply URL (Assertion Consumer Service URL)` field.

    * For the `Sign on URL` field, add URL `https://cloud.redis.io/#/login/?idpId=` where you need to add the ID from the Reply URL ID, for example,    `https://cloud.redis.io/#/login/?idpId=0oa5pwatz2JfpfCb91d7`.

    Select **Save**.

      

1. Go to step 2, **Attributes & Claims** and select **Edit**.

    

1. Configure these attributes and claims:

    * Modify Unique User Identifier (Name ID) to **user.mail**
  
    * Modify additional claims to match SAML assertion as follows:
  
        * **Email**: user.mail
        * **FirstName**: user.givenname
        * **LastName**: user.surname
        * **redisAccountMapping**: "<sm_account_id>=owner"
            * The `redisAccountMapping` contains Redis Cloud account IDs and user roles pairs. The key-value pair consists of the lowercase role name (owner, member, manager, billing_admin, or viewer) and your **Redis Cloud Account ID** found in the [account settings](). 

          
        
        
Make sure the **Namespace** field is empty when modifying these claims.


        

1. To add a user to the application, select **User and Groups > Add user/group**.

    

1. Add the user and select **Assign**.

    

## Step 4: Return to Redis Cloud console

1. Return to Redis Cloud console and select **Activate**.

    

1. A popup appears, explaining that you must log in with the credentials of a Microsoft Entra user to test the SAML connection. Select **Continue** to go to the Microsoft login screen.

1. The Microsoft login screen will appear. Enter the credentials and click **Sign In**.

    

If everything is configured correctly, you will see the the Redis Cloud console screen. Your local account is now considered a SAML account. 

To log in to the Redis Cloud console from now on, click on **Sign in with SSO**.



## Claim conditions and user groups

If your users are going to be part of different Groups, you can create a Claim Condition for the `redisAccountMapping` attribute.



## IdP initiated SSO

If you correctly set the up the **Sign on URL**, the SAML application appears by default on the user's **My Apps** panel.



While assigning the user to the app, a notification will appear:



Therefore, if you sign into `https://myapplications.microsoft.com/`, the application will be available.

If the app is not available, make sure that the App is registered. It should be done automatically.





You can also access the app directly by using the **User access Url** from App Properties.
