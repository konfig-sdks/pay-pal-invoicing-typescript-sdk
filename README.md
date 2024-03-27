<div align="left">

[![Visit Paypal](./header.png)](https://www.paypal.com&#x2F;)

# [Paypal](https://www.paypal.com&#x2F;)<a id="paypal"></a>

Use the Invoicing API to create, send, and manage invoices. You can also use the API or webhooks to track invoice payments. When you send an invoice to a customer, the invoice moves from draft to payable state. PayPal then emails the customer a link to the invoice on the PayPal website. Customers with a PayPal account can log in and pay the invoice with PayPal. Alternatively, customers can pay as a guest with a debit card or credit card. For more information, see the <a href="/docs/invoicing/">Invoicing Overview</a> and the <a href="/docs/invoicing/basic-integration/">Invoicing Integration Guide</a>.

</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`paypalinvoicing.invoices.cancelSentInvoice`](#paypalinvoicinginvoicescancelsentinvoice)
  * [`paypalinvoicing.invoices.createDraftInvoice`](#paypalinvoicinginvoicescreatedraftinvoice)
  * [`paypalinvoicing.invoices.deleteDraftOrScheduledInvoice`](#paypalinvoicinginvoicesdeletedraftorscheduledinvoice)
  * [`paypalinvoicing.invoices.deleteExternalPayment`](#paypalinvoicinginvoicesdeleteexternalpayment)
  * [`paypalinvoicing.invoices.deleteExternalRefund`](#paypalinvoicinginvoicesdeleteexternalrefund)
  * [`paypalinvoicing.invoices.generateNextInvoiceNumber`](#paypalinvoicinginvoicesgeneratenextinvoicenumber)
  * [`paypalinvoicing.invoices.generateQrCode`](#paypalinvoicinginvoicesgenerateqrcode)
  * [`paypalinvoicing.invoices.getDetails`](#paypalinvoicinginvoicesgetdetails)
  * [`paypalinvoicing.invoices.getInvoices`](#paypalinvoicinginvoicesgetinvoices)
  * [`paypalinvoicing.invoices.recordPayment`](#paypalinvoicinginvoicesrecordpayment)
  * [`paypalinvoicing.invoices.recordRefund`](#paypalinvoicinginvoicesrecordrefund)
  * [`paypalinvoicing.invoices.sendInvoice`](#paypalinvoicinginvoicessendinvoice)
  * [`paypalinvoicing.invoices.sendReminder`](#paypalinvoicinginvoicessendreminder)
  * [`paypalinvoicing.invoices.updateFullInvoice`](#paypalinvoicinginvoicesupdatefullinvoice)
  * [`paypalinvoicing.searchInvoices.list`](#paypalinvoicingsearchinvoiceslist)
  * [`paypalinvoicing.templates.createTemplate`](#paypalinvoicingtemplatescreatetemplate)
  * [`paypalinvoicing.templates.deleteById`](#paypalinvoicingtemplatesdeletebyid)
  * [`paypalinvoicing.templates.listDetails`](#paypalinvoicingtemplateslistdetails)
  * [`paypalinvoicing.templates.showDetailsById`](#paypalinvoicingtemplatesshowdetailsbyid)
  * [`paypalinvoicing.templates.updateFullTemplate`](#paypalinvoicingtemplatesupdatefulltemplate)

<!-- tocstop -->

## Installation<a id="installation"></a>
<div align="center">
  <a href="https://konfigthis.com/sdk-sign-up?company=PayPal&serviceName=Invoicing&language=TypeScript">
    <img src="https://raw.githubusercontent.com/konfig-dev/brand-assets/HEAD/cta-images/typescript-cta.png" width="70%">
  </a>
</div>

## Getting Started<a id="getting-started"></a>

```typescript
import { PayPalInvoicing } from "pay-pal-invoicing-typescript-sdk";

const paypalinvoicing = new PayPalInvoicing({
  // Defining the base path is optional and defaults to https://api-m.sandbox.paypal.com
  // basePath: "https://api-m.sandbox.paypal.com",
  oauthClientId: "CLIENT_ID",
  oauthClientSecret: "CLIENT_SECRET",
});

const cancelSentInvoiceResponse =
  await paypalinvoicing.invoices.cancelSentInvoice({
    invoiceId: "invoiceId_example",
    send_to_invoicer: false,
    send_to_recipient: true,
  });

console.log(cancelSentInvoiceResponse);
```

## Reference<a id="reference"></a>


### `paypalinvoicing.invoices.cancelSentInvoice`<a id="paypalinvoicinginvoicescancelsentinvoice"></a>

Cancels a sent invoice, by ID, and, optionally, sends a notification about the cancellation to the payer, merchant, and CC: emails.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const cancelSentInvoiceResponse =
  await paypalinvoicing.invoices.cancelSentInvoice({
    invoiceId: "invoiceId_example",
    send_to_invoicer: false,
    send_to_recipient: true,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### invoiceId: `string`<a id="invoiceid-string"></a>

The ID of the draft invoice to delete.

##### subject: `string`<a id="subject-string"></a>

The subject of the email that is sent as a notification to the recipient.

##### note: `string`<a id="note-string"></a>

A note to the payer.

##### send_to_invoicer: `boolean`<a id="send_to_invoicer-boolean"></a>

Indicates whether to send a copy of the email to the merchant.

##### send_to_recipient: `boolean`<a id="send_to_recipient-boolean"></a>

Indicates whether to send a copy of the email to the recipient.

##### additional_recipients: `string`[]<a id="additional_recipients-string"></a>

An array of one or more CC: emails to which notifications are sent. If you omit this parameter, a notification is sent to all CC: email addresses that are part of the invoice.<blockquote><strong>Note:</strong> Valid values are email addresses in the `additional_recipients` value associated with the invoice.</blockquote>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/invoicing/invoices/{invoice_id}/cancel` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paypalinvoicing.invoices.createDraftInvoice`<a id="paypalinvoicinginvoicescreatedraftinvoice"></a>

Creates a draft invoice. To move the invoice from a draft to payable state, you must <a href="#invoices_send">send the invoice</a>.<br/><br/>In the JSON request body, include invoice details including merchant information. The <code>invoice</code> object must include an <code>items</code> array.<blockquote><strong>Note:</strong> The merchant that you specify in an invoice must have a PayPal account in good standing.</blockquote>.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createDraftInvoiceResponse =
  await paypalinvoicing.invoices.createDraftInvoice({
    status: "DRAFT",
    detail: {},
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### detail: [`InvoiceDetail`](./models/invoice-detail.ts)<a id="detail-invoicedetailmodelsinvoice-detailts"></a>

##### id: `string`<a id="id-string"></a>

The ID of the invoice.

##### parent_id: `string`<a id="parent_id-string"></a>

The parent ID to an invoice that defines the group invoice to which the invoice is related.

##### status: [`InvoiceStatus`](./models/invoice-status.ts)<a id="status-invoicestatusmodelsinvoice-statusts"></a>

The status of the invoice.

##### invoicer: [`InvoicerInfo`](./models/invoicer-info.ts)<a id="invoicer-invoicerinfomodelsinvoicer-infots"></a>

##### primary_recipients: [`RecipientInfo`](./models/recipient-info.ts)[]<a id="primary_recipients-recipientinfomodelsrecipient-infots"></a>

The billing and shipping information. Includes name, email, address, phone and language.

##### additional_recipients: `string`[]<a id="additional_recipients-string"></a>

An array of one or more CC: emails to which notifications are sent. If you omit this parameter, a notification is sent to all CC: email addresses that are part of the invoice.<blockquote><strong>Note:</strong> Valid values are email addresses in the `additional_recipients` value associated with the invoice.</blockquote>

##### items: [`Item`](./models/item.ts)[]<a id="items-itemmodelsitemts"></a>

An array of invoice line item information.

##### configuration: [`Configuration`](./models/configuration.ts)<a id="configuration-configurationmodelsconfigurationts"></a>

##### amount: [`AmountSummaryDetail`](./models/amount-summary-detail.ts)<a id="amount-amountsummarydetailmodelsamount-summary-detailts"></a>

##### due_amount: [`Money`](./models/money.ts)<a id="due_amount-moneymodelsmoneyts"></a>

##### gratuity: [`Money`](./models/money.ts)<a id="gratuity-moneymodelsmoneyts"></a>

##### payments: [`Payments`](./models/payments.ts)<a id="payments-paymentsmodelspaymentsts"></a>

##### refunds: [`Refunds`](./models/refunds.ts)<a id="refunds-refundsmodelsrefundsts"></a>

##### links: [`LinkDescription`](./models/link-description.ts)[]<a id="links-linkdescriptionmodelslink-descriptionts"></a>

An array of request-related [HATEOAS links](/docs/api/reference/api-responses/#hateoas-links).

#### 🔄 Return<a id="🔄-return"></a>

[Invoice](./models/invoice.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/invoicing/invoices` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paypalinvoicing.invoices.deleteDraftOrScheduledInvoice`<a id="paypalinvoicinginvoicesdeletedraftorscheduledinvoice"></a>

Deletes a draft or scheduled invoice, by ID. Deletes invoices in the draft or scheduled state only. For invoices that have already been sent, you can <a href="/docs/api/invoicing/v2/#invoices_cancel">cancel the invoice</a>. After you delete a draft or scheduled invoice, you can no longer use it or show its details. However, you can reuse its invoice number.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteDraftOrScheduledInvoiceResponse =
  await paypalinvoicing.invoices.deleteDraftOrScheduledInvoice({
    invoiceId: "invoiceId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### invoiceId: `string`<a id="invoiceid-string"></a>

The ID of the draft invoice to delete.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/invoicing/invoices/{invoice_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paypalinvoicing.invoices.deleteExternalPayment`<a id="paypalinvoicinginvoicesdeleteexternalpayment"></a>

Deletes an external payment, by invoice ID and transaction ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteExternalPaymentResponse =
  await paypalinvoicing.invoices.deleteExternalPayment({
    invoiceId: "invoiceId_example",
    transactionId: "transactionId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### invoiceId: `string`<a id="invoiceid-string"></a>

The ID of the draft invoice to delete.

##### transactionId: `string`<a id="transactionid-string"></a>

The ID of the external refund transaction to delete.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/invoicing/invoices/{invoice_id}/payments/{transaction_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paypalinvoicing.invoices.deleteExternalRefund`<a id="paypalinvoicinginvoicesdeleteexternalrefund"></a>

Deletes an external refund, by invoice ID and transaction ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteExternalRefundResponse =
  await paypalinvoicing.invoices.deleteExternalRefund({
    invoiceId: "invoiceId_example",
    transactionId: "transactionId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### invoiceId: `string`<a id="invoiceid-string"></a>

The ID of the draft invoice to delete.

##### transactionId: `string`<a id="transactionid-string"></a>

The ID of the external refund transaction to delete.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/invoicing/invoices/{invoice_id}/refunds/{transaction_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paypalinvoicing.invoices.generateNextInvoiceNumber`<a id="paypalinvoicinginvoicesgeneratenextinvoicenumber"></a>

Generates the next invoice number that is available to the merchant. The next invoice number uses the prefix and suffix from the last invoice number and increments the number by one. For example, the next invoice number after `INVOICE-1234` is `INVOICE-1235`.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const generateNextInvoiceNumberResponse =
  await paypalinvoicing.invoices.generateNextInvoiceNumber();
```

#### 🔄 Return<a id="🔄-return"></a>

[InvoiceNumber](./models/invoice-number.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/invoicing/generate-next-invoice-number` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paypalinvoicing.invoices.generateQrCode`<a id="paypalinvoicinginvoicesgenerateqrcode"></a>

Generates a QR code for an invoice, by ID. The QR code is a PNG image in <a href="https://www.base64encode.org/">Base64-encoded</a> format that corresponds to the invoice ID. You can generate a QR code for an invoice and add it to a paper or PDF invoice. When customers use their mobile devices to scan the QR code, they are redirected to the PayPal mobile payment flow where they can view the invoice and pay online with PayPal or a credit card. Before you get a QR code, you must <a href="#invoices_create">create an invoice</a> and <a href="#invoices_send">send an invoice</a> to move the invoice from a draft to payable state. Do not include an email address if you do not want the invoice emailed.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const generateQrCodeResponse = await paypalinvoicing.invoices.generateQrCode({
  invoiceId: "invoiceId_example",
  width: 500,
  height: 500,
  action: "pay",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### invoiceId: `string`<a id="invoiceid-string"></a>

The ID of the draft invoice to delete.

##### width: `number`<a id="width-number"></a>

The width, in pixels, of the QR code image. Value is from `150` to `500`.

##### height: `number`<a id="height-number"></a>

The height, in pixels, of the QR code image. Value is from `150` to `500`.

##### action: `string`<a id="action-string"></a>

The type of URL for which to generate a QR code. Valid values are `pay` and `details`.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/invoicing/invoices/{invoice_id}/generate-qr-code` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paypalinvoicing.invoices.getDetails`<a id="paypalinvoicinginvoicesgetdetails"></a>

Shows details for an invoice, by ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDetailsResponse = await paypalinvoicing.invoices.getDetails({
  invoiceId: "invoiceId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### invoiceId: `string`<a id="invoiceid-string"></a>

The ID of the draft invoice to delete.

#### 🔄 Return<a id="🔄-return"></a>

[Invoice](./models/invoice.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/invoicing/invoices/{invoice_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paypalinvoicing.invoices.getInvoices`<a id="paypalinvoicinginvoicesgetinvoices"></a>

Lists invoices. To filter the invoices that appear in the response, you can specify one or more optional query parameters.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getInvoicesResponse = await paypalinvoicing.invoices.getInvoices({
  page: 1,
  pageSize: 20,
  totalRequired: false,
  fields: "all",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### page: `number`<a id="page-number"></a>

The page number to be retrieved, for the list of templates. So, a combination of `page=1` and `page_size=20` returns the first 20 templates. A combination of `page=2` and `page_size=20` returns the next 20 templates.

##### pageSize: `number`<a id="pagesize-number"></a>

The maximum number of templates to return in the response.

##### totalRequired: `boolean`<a id="totalrequired-boolean"></a>

Indicates whether the to show <code>total_pages</code> and <code>total_items</code> in the response.

##### fields: `string`<a id="fields-string"></a>

The fields to return in the response. Value is `all` or `none`. To return only the template name, ID, and default attributes, specify `none`.

#### 🔄 Return<a id="🔄-return"></a>

[Invoices](./models/invoices.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/invoicing/invoices` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paypalinvoicing.invoices.recordPayment`<a id="paypalinvoicinginvoicesrecordpayment"></a>

Records a payment for the invoice. If no payment is due, the invoice is marked as `PAID`. Otherwise, the invoice is marked as `PARTIALLY PAID`.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const recordPaymentResponse = await paypalinvoicing.invoices.recordPayment({
  invoiceId: "invoiceId_example",
  type: "PAYPAL",
  method: "BANK_TRANSFER",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### method: [`PaymentMethod`](./models/payment-method.ts)<a id="method-paymentmethodmodelspayment-methodts"></a>

The payment mode or method through which the invoicer can accept the payments.

##### invoiceId: `string`<a id="invoiceid-string"></a>

The ID of the draft invoice to delete.

##### type: [`PaymentType`](./models/payment-type.ts)<a id="type-paymenttypemodelspayment-typets"></a>

The payment type. Can be PayPal or an external payment. Includes cash or a check.

##### payment_id: `string`<a id="payment_id-string"></a>

The ID for a PayPal payment transaction. Required for the `PAYPAL` payment type.

##### payment_date: `string`<a id="payment_date-string"></a>

The stand-alone date, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). To represent special legal values, such as a date of birth, you should use dates with no associated time or time-zone data. Whenever possible, use the standard `date_time` type. This regular expression does not validate all dates. For example, February 31 is valid and nothing is known about leap years.

##### note: `string`<a id="note-string"></a>

A note associated with an external cash or check payment.

##### amount: [`Money`](./models/money.ts)<a id="amount-moneymodelsmoneyts"></a>

##### shipping_info: [`ContactNameAddress`](./models/contact-name-address.ts)<a id="shipping_info-contactnameaddressmodelscontact-name-addressts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[PaymentReference](./models/payment-reference.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/invoicing/invoices/{invoice_id}/payments` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paypalinvoicing.invoices.recordRefund`<a id="paypalinvoicinginvoicesrecordrefund"></a>

Records a refund for the invoice. If all payments are refunded, the invoice is marked as `REFUNDED`. Otherwise, the invoice is marked as `PARTIALLY REFUNDED`.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const recordRefundResponse = await paypalinvoicing.invoices.recordRefund({
  invoiceId: "invoiceId_example",
  type: "PAYPAL",
  method: "BANK_TRANSFER",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### method: [`PaymentMethod`](./models/payment-method.ts)<a id="method-paymentmethodmodelspayment-methodts"></a>

The payment mode or method through which the invoicer can accept the payments.

##### invoiceId: `string`<a id="invoiceid-string"></a>

The ID of the draft invoice to delete.

##### type: [`PaymentType`](./models/payment-type.ts)<a id="type-paymenttypemodelspayment-typets"></a>

The payment type. Can be PayPal or an external payment. Includes cash or a check.

##### refund_id: `string`<a id="refund_id-string"></a>

The ID for a PayPal payment transaction. Required for the `PAYPAL` payment type.

##### refund_date: `string`<a id="refund_date-string"></a>

The stand-alone date, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). To represent special legal values, such as a date of birth, you should use dates with no associated time or time-zone data. Whenever possible, use the standard `date_time` type. This regular expression does not validate all dates. For example, February 31 is valid and nothing is known about leap years.

##### amount: [`Money`](./models/money.ts)<a id="amount-moneymodelsmoneyts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[RefundReference](./models/refund-reference.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/invoicing/invoices/{invoice_id}/refunds` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paypalinvoicing.invoices.sendInvoice`<a id="paypalinvoicinginvoicessendinvoice"></a>

Sends or schedules an invoice, by ID, to be sent to a customer. The action depends on the invoice issue date:<ul><li>If the invoice issue date is current or in the past, sends the invoice immediately.</li><li>If the invoice issue date is in the future, schedules the invoice to be sent on that date.</li></ul>To suppress the merchant's email notification, set the `send_to_invoicer` body parameter to `false`. To send the invoice through a share link and not through PayPal, set the <code>send_to_recipient</code> parameter to <code>false</code> in the <code>notification</code> object. The <code>send_to_recipient</code> parameter does not apply to a future issue date because the invoice is scheduled to be sent through PayPal on that date.<blockquote><strong>Notes:</strong><ul><li>After you send an invoice, resending it has no effect.</li><li>To send a notification for updates, <a href="#invoices_update">update the invoice</a> and set the <code>send_to_recipient</code> body parameter to <code>true</code>.</li></ul></blockquote>

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const sendInvoiceResponse = await paypalinvoicing.invoices.sendInvoice({
  invoiceId: "invoiceId_example",
  send_to_invoicer: false,
  send_to_recipient: true,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### invoiceId: `string`<a id="invoiceid-string"></a>

The ID of the draft invoice to delete.

##### subject: `string`<a id="subject-string"></a>

The subject of the email that is sent as a notification to the recipient.

##### note: `string`<a id="note-string"></a>

A note to the payer.

##### send_to_invoicer: `boolean`<a id="send_to_invoicer-boolean"></a>

Indicates whether to send a copy of the email to the merchant.

##### send_to_recipient: `boolean`<a id="send_to_recipient-boolean"></a>

Indicates whether to send a copy of the email to the recipient.

##### additional_recipients: `string`[]<a id="additional_recipients-string"></a>

An array of one or more CC: emails to which notifications are sent. If you omit this parameter, a notification is sent to all CC: email addresses that are part of the invoice.<blockquote><strong>Note:</strong> Valid values are email addresses in the `additional_recipients` value associated with the invoice.</blockquote>

#### 🔄 Return<a id="🔄-return"></a>

[LinkDescription](./models/link-description.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/invoicing/invoices/{invoice_id}/send` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paypalinvoicing.invoices.sendReminder`<a id="paypalinvoicinginvoicessendreminder"></a>

Sends a reminder to the payer about an invoice, by ID. In the JSON request body, include a `notification` object that defines the subject of the reminder and other details.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const sendReminderResponse = await paypalinvoicing.invoices.sendReminder({
  invoiceId: "invoiceId_example",
  send_to_invoicer: false,
  send_to_recipient: true,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### invoiceId: `string`<a id="invoiceid-string"></a>

The ID of the draft invoice to delete.

##### subject: `string`<a id="subject-string"></a>

The subject of the email that is sent as a notification to the recipient.

##### note: `string`<a id="note-string"></a>

A note to the payer.

##### send_to_invoicer: `boolean`<a id="send_to_invoicer-boolean"></a>

Indicates whether to send a copy of the email to the merchant.

##### send_to_recipient: `boolean`<a id="send_to_recipient-boolean"></a>

Indicates whether to send a copy of the email to the recipient.

##### additional_recipients: `string`[]<a id="additional_recipients-string"></a>

An array of one or more CC: emails to which notifications are sent. If you omit this parameter, a notification is sent to all CC: email addresses that are part of the invoice.<blockquote><strong>Note:</strong> Valid values are email addresses in the `additional_recipients` value associated with the invoice.</blockquote>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/invoicing/invoices/{invoice_id}/remind` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paypalinvoicing.invoices.updateFullInvoice`<a id="paypalinvoicinginvoicesupdatefullinvoice"></a>

Fully updates an invoice, by ID. In the JSON request body, include a complete `invoice` object. This call does not support partial updates.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateFullInvoiceResponse =
  await paypalinvoicing.invoices.updateFullInvoice({
    invoiceId: "invoiceId_example",
    sendToRecipient: true,
    sendToInvoicer: true,
    status: "DRAFT",
    detail: {},
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### detail: [`InvoiceDetail`](./models/invoice-detail.ts)<a id="detail-invoicedetailmodelsinvoice-detailts"></a>

##### invoiceId: `string`<a id="invoiceid-string"></a>

The ID of the draft invoice to delete.

##### id: `string`<a id="id-string"></a>

The ID of the invoice.

##### parent_id: `string`<a id="parent_id-string"></a>

The parent ID to an invoice that defines the group invoice to which the invoice is related.

##### status: [`InvoiceStatus`](./models/invoice-status.ts)<a id="status-invoicestatusmodelsinvoice-statusts"></a>

The status of the invoice.

##### invoicer: [`InvoicerInfo`](./models/invoicer-info.ts)<a id="invoicer-invoicerinfomodelsinvoicer-infots"></a>

##### primary_recipients: [`RecipientInfo`](./models/recipient-info.ts)[]<a id="primary_recipients-recipientinfomodelsrecipient-infots"></a>

The billing and shipping information. Includes name, email, address, phone and language.

##### additional_recipients: `string`[]<a id="additional_recipients-string"></a>

An array of one or more CC: emails to which notifications are sent. If you omit this parameter, a notification is sent to all CC: email addresses that are part of the invoice.<blockquote><strong>Note:</strong> Valid values are email addresses in the `additional_recipients` value associated with the invoice.</blockquote>

##### items: [`Item`](./models/item.ts)[]<a id="items-itemmodelsitemts"></a>

An array of invoice line item information.

##### configuration: [`Configuration`](./models/configuration.ts)<a id="configuration-configurationmodelsconfigurationts"></a>

##### amount: [`AmountSummaryDetail`](./models/amount-summary-detail.ts)<a id="amount-amountsummarydetailmodelsamount-summary-detailts"></a>

##### due_amount: [`Money`](./models/money.ts)<a id="due_amount-moneymodelsmoneyts"></a>

##### gratuity: [`Money`](./models/money.ts)<a id="gratuity-moneymodelsmoneyts"></a>

##### payments: [`Payments`](./models/payments.ts)<a id="payments-paymentsmodelspaymentsts"></a>

##### refunds: [`Refunds`](./models/refunds.ts)<a id="refunds-refundsmodelsrefundsts"></a>

##### links: [`LinkDescription`](./models/link-description.ts)[]<a id="links-linkdescriptionmodelslink-descriptionts"></a>

An array of request-related [HATEOAS links](/docs/api/reference/api-responses/#hateoas-links).

##### sendToRecipient: `boolean`<a id="sendtorecipient-boolean"></a>

Indicates whether to send the invoice update notification to the recipient.

##### sendToInvoicer: `boolean`<a id="sendtoinvoicer-boolean"></a>

Indicates whether to send the invoice update notification to the merchant.

#### 🔄 Return<a id="🔄-return"></a>

[Invoice](./models/invoice.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/invoicing/invoices/{invoice_id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paypalinvoicing.searchInvoices.list`<a id="paypalinvoicingsearchinvoiceslist"></a>

Searches for and lists invoices that match search criteria. If you pass multiple criteria, the response lists invoices that match all criteria.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listResponse = await paypalinvoicing.searchInvoices.list({
  page: 1,
  pageSize: 20,
  totalRequired: false,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### recipient_email: `string`<a id="recipient_email-string"></a>

Filters the search by the email address.

##### recipient_first_name: `string`<a id="recipient_first_name-string"></a>

Filters the search by the recipient first name.

##### recipient_last_name: `string`<a id="recipient_last_name-string"></a>

Filters the search by the recipient last name.

##### recipient_business_name: `string`<a id="recipient_business_name-string"></a>

Filters the search by the recipient business name.

##### invoice_number: `string`<a id="invoice_number-string"></a>

Filters the search by the invoice number.

##### status: [`InvoiceStatus`](./models/invoice-status.ts)[]<a id="status-invoicestatusmodelsinvoice-statusts"></a>

An array of status values.

##### reference: `string`<a id="reference-string"></a>

The reference data, such as a PO number.

##### currency_code: `string`<a id="currency_code-string"></a>

The [three-character ISO-4217 currency code](https://raw.githubusercontent.com) that identifies the currency.

##### memo: `string`<a id="memo-string"></a>

A private bookkeeping memo for the user.

##### total_amount_range: [`AmountRange`](./models/amount-range.ts)<a id="total_amount_range-amountrangemodelsamount-rangets"></a>

##### invoice_date_range: [`DateRange`](./models/date-range.ts)<a id="invoice_date_range-daterangemodelsdate-rangets"></a>

##### due_date_range: [`DateRange`](./models/date-range.ts)<a id="due_date_range-daterangemodelsdate-rangets"></a>

##### payment_date_range: [`DateTimeRange`](./models/date-time-range.ts)<a id="payment_date_range-datetimerangemodelsdate-time-rangets"></a>

##### creation_date_range: [`DateTimeRange`](./models/date-time-range.ts)<a id="creation_date_range-datetimerangemodelsdate-time-rangets"></a>

##### archived: `boolean`<a id="archived-boolean"></a>

Indicates whether to list merchant-archived invoices in the response. Value is:<ul><li><code>true</code>. Response lists only merchant-archived invoices.</li><li><code>false</code>. Response lists only unarchived invoices.</li><li><code>null</code>. Response lists all invoices.</li></ul>

##### fields: `string`[]<a id="fields-string"></a>

A CSV file of fields to return for the user, if available. Because the invoice object can be very large, field filtering is required. Valid collection fields are <code>items</code>, <code>payments</code>, <code>refunds</code>, <code>additional_recipients_info</code>, and <code>attachments</code>.

##### page: `number`<a id="page-number"></a>

The page number to be retrieved, for the list of templates. So, a combination of `page=1` and `page_size=20` returns the first 20 templates. A combination of `page=2` and `page_size=20` returns the next 20 templates.

##### pageSize: `number`<a id="pagesize-number"></a>

The maximum number of templates to return in the response.

##### totalRequired: `boolean`<a id="totalrequired-boolean"></a>

Indicates whether the to show <code>total_pages</code> and <code>total_items</code> in the response.

#### 🔄 Return<a id="🔄-return"></a>

[Invoices](./models/invoices.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/invoicing/search-invoices` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paypalinvoicing.templates.createTemplate`<a id="paypalinvoicingtemplatescreatetemplate"></a>

Creates an invoice template. You can use details from this template to create an invoice. You can create up to 50 templates.<blockquote><strong>Note:</strong> Every merchant starts with three PayPal system templates that are optimized for the unit type billed. The template includes `Quantity`, `Hours`, and `Amount`.</blockquote>

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createTemplateResponse = await paypalinvoicing.templates.createTemplate({
  unit_of_measure: "QUANTITY",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

The ID of the template.

##### name: `string`<a id="name-string"></a>

The template name.<blockquote><strong>Note:</strong> The template name must be unique.</blockquote>

##### default_template: `boolean`<a id="default_template-boolean"></a>

Indicates whether this template is the default template. A invoicer can have one default template.

##### template_info: [`TemplateInfo`](./models/template-info.ts)<a id="template_info-templateinfomodelstemplate-infots"></a>

##### settings: [`TemplateSettings`](./models/template-settings.ts)<a id="settings-templatesettingsmodelstemplate-settingsts"></a>

##### unit_of_measure: [`UnitOfMeasure`](./models/unit-of-measure.ts)<a id="unit_of_measure-unitofmeasuremodelsunit-of-measurets"></a>

The unit of measure for the invoiced item.

##### standard_template: `boolean`<a id="standard_template-boolean"></a>

Indicates whether this template is a invoicer-created custom template. The system generates non-custom templates.

##### links: [`LinkDescription`](./models/link-description.ts)[]<a id="links-linkdescriptionmodelslink-descriptionts"></a>

An array of request-related [HATEOAS links](/docs/api/reference/api-responses/#hateoas-links).

#### 🔄 Return<a id="🔄-return"></a>

[Template](./models/template.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/invoicing/templates` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paypalinvoicing.templates.deleteById`<a id="paypalinvoicingtemplatesdeletebyid"></a>

Deletes a template, by ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteByIdResponse = await paypalinvoicing.templates.deleteById({
  templateId: "templateId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### templateId: `string`<a id="templateid-string"></a>

The ID of the template to delete.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/invoicing/templates/{template_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paypalinvoicing.templates.listDetails`<a id="paypalinvoicingtemplateslistdetails"></a>

Lists merchant-created templates with associated details. The associated details include the emails, addresses, and phone numbers from the user's PayPal profile.<br/>The user can select which values to show in the business information section of their template.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listDetailsResponse = await paypalinvoicing.templates.listDetails({
  fields: "all",
  page: 1,
  pageSize: 20,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### fields: `string`<a id="fields-string"></a>

The fields to return in the response. Value is `all` or `none`. To return only the template name, ID, and default attributes, specify `none`.

##### page: `number`<a id="page-number"></a>

The page number to be retrieved, for the list of templates. So, a combination of `page=1` and `page_size=20` returns the first 20 templates. A combination of `page=2` and `page_size=20` returns the next 20 templates.

##### pageSize: `number`<a id="pagesize-number"></a>

The maximum number of templates to return in the response.

#### 🔄 Return<a id="🔄-return"></a>

[Templates](./models/templates.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/invoicing/templates` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paypalinvoicing.templates.showDetailsById`<a id="paypalinvoicingtemplatesshowdetailsbyid"></a>

Shows details for a template, by ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const showDetailsByIdResponse = await paypalinvoicing.templates.showDetailsById(
  {
    templateId: "templateId_example",
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### templateId: `string`<a id="templateid-string"></a>

The ID of the template to delete.

#### 🔄 Return<a id="🔄-return"></a>

[Template](./models/template.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/invoicing/templates/{template_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paypalinvoicing.templates.updateFullTemplate`<a id="paypalinvoicingtemplatesupdatefulltemplate"></a>

Fully updates a template, by ID. In the JSON request body, include a complete `template` object. This call does not support partial updates.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateFullTemplateResponse =
  await paypalinvoicing.templates.updateFullTemplate({
    templateId: "templateId_example",
    unit_of_measure: "QUANTITY",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### templateId: `string`<a id="templateid-string"></a>

The ID of the template to delete.

##### id: `string`<a id="id-string"></a>

The ID of the template.

##### name: `string`<a id="name-string"></a>

The template name.<blockquote><strong>Note:</strong> The template name must be unique.</blockquote>

##### default_template: `boolean`<a id="default_template-boolean"></a>

Indicates whether this template is the default template. A invoicer can have one default template.

##### template_info: [`TemplateInfo`](./models/template-info.ts)<a id="template_info-templateinfomodelstemplate-infots"></a>

##### settings: [`TemplateSettings`](./models/template-settings.ts)<a id="settings-templatesettingsmodelstemplate-settingsts"></a>

##### unit_of_measure: [`UnitOfMeasure`](./models/unit-of-measure.ts)<a id="unit_of_measure-unitofmeasuremodelsunit-of-measurets"></a>

The unit of measure for the invoiced item.

##### standard_template: `boolean`<a id="standard_template-boolean"></a>

Indicates whether this template is a invoicer-created custom template. The system generates non-custom templates.

##### links: [`LinkDescription`](./models/link-description.ts)[]<a id="links-linkdescriptionmodelslink-descriptionts"></a>

An array of request-related [HATEOAS links](/docs/api/reference/api-responses/#hateoas-links).

#### 🔄 Return<a id="🔄-return"></a>

[Template](./models/template.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/invoicing/templates/{template_id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)
