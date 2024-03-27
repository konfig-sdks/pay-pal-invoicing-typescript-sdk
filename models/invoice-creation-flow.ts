/*
Invoices

Use the Invoicing API to create, send, and manage invoices. You can also use the API or webhooks to track invoice payments. When you send an invoice to a customer, the invoice moves from draft to payable state. PayPal then emails the customer a link to the invoice on the PayPal website. Customers with a PayPal account can log in and pay the invoice with PayPal. Alternatively, customers can pay as a guest with a debit card or credit card. For more information, see the <a href=\"/docs/invoicing/\">Invoicing Overview</a> and the <a href=\"/docs/invoicing/basic-integration/\">Invoicing Integration Guide</a>.

The version of the OpenAPI document: 2.3


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * The frequency at which the invoice is sent:<ul><li>Multiple recipient. Sent to multiple recipients.</li><li>Batch. Sent in a batch.</li><li>Regular single. Sent one time to a single recipient.</li></ul>
 * @export
 * @enum {string}
 */
export type InvoiceCreationFlow = 'MULTIPLE_RECIPIENTS_GROUP' | 'BATCH' | 'REGULAR_SINGLE'

