/*
Invoices

Use the Invoicing API to create, send, and manage invoices. You can also use the API or webhooks to track invoice payments. When you send an invoice to a customer, the invoice moves from draft to payable state. PayPal then emails the customer a link to the invoice on the PayPal website. Customers with a PayPal account can log in and pay the invoice with PayPal. Alternatively, customers can pay as a guest with a debit card or credit card. For more information, see the <a href=\"/docs/invoicing/\">Invoicing Overview</a> and the <a href=\"/docs/invoicing/basic-integration/\">Invoicing Integration Guide</a>.

The version of the OpenAPI document: 2.3


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Error400 } from './error400';
import { ErrorLinkDescription } from './error-link-description';
import { InvoicesPayments400 } from './invoices-payments400';
import { InvoicesPayments400DetailsInner } from './invoices-payments400-details-inner';

/**
 * @type InvoicesRecordPaymentResponse
 * @export
 */
export type InvoicesRecordPaymentResponse = Error400 & InvoicesPayments400;


