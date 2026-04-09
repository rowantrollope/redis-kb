---
title: Billing & payments
url: https://redis.io/docs/latest/operate/rc/billing-and-payments/
retrieved_utc: '2026-04-09T20:45:56.996406+00:00'
tags:
- official
- docs
- sitemap
fetched_url: https://redis.io/docs/latest/operate/rc/billing-and-payments/index.html.md
---

# Billing & payments

```json metadata
{
  "title": "Billing \u0026 payments",
  "description": "Describes how to view billing transactions and manage payment methods for Redis Cloud subscriptions.",
  "categories": ["docs","operate","rc"],
  "tableOfContents": {"sections":[{"id":"download-invoice","title":"Download invoice"},{"id":"add-credit-card","title":"Add credit card"},{"id":"add-marketplace-account","title":"Add marketplace account"},{"id":"apply-coupon","title":"Apply coupon"},{"id":"download-cost-report","title":"Download cost report"},{"id":"troubleshoot","title":"Troubleshoot"}]}

,
  "codeExamples": []
}
```
The **Billing & Payments** screen:

- Shows recent transactions for your account
- Helps you manage your payment methods
- Applies coupon credits to your account



The following tabs are available:

- The **Billing History** tab displays recent charges and payments.  Each transaction includes the following details:

    | Detail | Description |
    |:-------|:------------|
    | Date   | Date the transaction was recorded |
    | Description | Description of the transaction |
    | Reference | Reference number |
    | Amount    | Transaction amount |

    Billing details may vary between regions.

    You can [download invoices](#download-invoice) on this tab.

    A **Pay Now** button appears in selected regions.

     
    
    Select this button to pay your invoice.

- The **Payment Methods** tab lists your current payment methods.  You can add a new payment method, associate different payment methods with specific subscriptions, and remove payment methods.

    

    Select **Add credit card** to enter new credit card details, or **Add marketplace account** to add a [Google Cloud Marketplace]() or [AWS Marketplace]() account.

- The **Credits** tab shows coupon credits that have been applied to your account, if any.

    

    | Detail | Description |
    |:-------|:------------|
    | Code   | Coupon code |
    | Coupon Amount | Amount credited to your account |
    | Current Balance | Amount left |
    | Date added | Date applied to your account |
    | Expiration Date | Date the amount expires |

    You can [apply a coupon](#apply-coupon) on this tab.

## Download invoice

To download an invoice:

1. In the [Redis Cloud console](https://cloud.redis.io/), select **Billing & Payments**.

2.  From the **Billing History** tab, locate and select the invoice.

3.  Select the **Download invoice** icon displayed to the right of the invoice amount.

    

The invoice is downloaded as an Acrobat PDF file.  Use your browser's download features to manage the file.

## Add credit card

To add a new credit card:

1. In the [Redis Cloud console](https://cloud.redis.io/), select **Billing & Payments > Payment Methods**.

2.  Select **Add credit card** and add the credit card details.

     

3.  Select the **Add Credit Card** button to save your changes.

    

## Add marketplace account

If you have a [Google Cloud Marketplace]() or [AWS Marketplace]() account already associated with another Redis Account that you own, you can add it to your current account. 



## Apply coupon

Coupons apply credits to your Redis Cloud account.  To redeem a coupon:

1. In the [Redis Cloud console](https://cloud.redis.io/), select **Billing & Payments** and then select the **Credits** tab.

2.  Enter the coupon code and then select the **Apply** button.

    

    The value of the coupon is applied to your account when accepted.  

For help, contact [Support](https://redis.io/support/).


Generally, charges are non-refundable.

For any special circumstances that may warrant a refund, please contact [Support](https://redis.io/support/) and be sure to provide detail about the reasons for the refund request.


## Download cost report



See [Cost report]() and [How to download and visualize the cost report](https://support.redislabs.com/hc/en-us/articles/30042563097874-How-to-Download-and-Visualize-Redis-Cloud-Cost-Report) for more information.

## Troubleshoot

See [Billing](https://support.redislabs.com/hc/en-us/categories/26174537325842-Billing) on the Redis knowledge base for help troubleshooting billing issues:
- [Resolving payment failures in Redis Cloud](https://support.redislabs.com/hc/en-us/articles/26266042933522-Resolving-Payment-Failures-in-Redis-Cloud)
- [Credit card retry behavior and troubleshooting](https://support.redislabs.com/hc/en-us/articles/27697187187986-Credit-Card-Retry-Behavior-and-Troubleshooting)
- [Access invoices and payment links](https://support.redislabs.com/hc/en-us/articles/26265945230226-Access-Invoices-and-Payment-Links-in-the-Portal)
- [How to find payment information](https://support.redislabs.com/hc/en-us/articles/26266104144914-How-to-Find-Payment-Information)