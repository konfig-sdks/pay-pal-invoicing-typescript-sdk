/*
Invoices

Use the Invoicing API to create, send, and manage invoices. You can also use the API or webhooks to track invoice payments. When you send an invoice to a customer, the invoice moves from draft to payable state. PayPal then emails the customer a link to the invoice on the PayPal website. Customers with a PayPal account can log in and pay the invoice with PayPal. Alternatively, customers can pay as a guest with a debit card or credit card. For more information, see the <a href=\"/docs/invoicing/\">Invoicing Overview</a> and the <a href=\"/docs/invoicing/basic-integration/\">Invoicing Integration Guide</a>.

The version of the OpenAPI document: 2.3


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AmountSummaryDetail } from './amount-summary-detail';
import { Configuration } from './configuration';
import { InvoiceDetail } from './invoice-detail';
import { InvoiceStatus } from './invoice-status';
import { InvoicerInfo } from './invoicer-info';
import { Item } from './item';
import { LinkDescription } from './link-description';
import { Money } from './money';
import { Payments } from './payments';
import { RecipientInfo } from './recipient-info';
import { Refunds } from './refunds';

/**
 * The invoice details which includes all information of the invoice like items, billing information.
 * @export
 * @interface Invoice
 */
export interface Invoice {
    /**
     * The ID of the invoice.
     * @type {string}
     * @memberof Invoice
     */
    'id'?: string;
    /**
     * The parent ID to an invoice that defines the group invoice to which the invoice is related.
     * @type {string}
     * @memberof Invoice
     */
    'parent_id'?: string;
    /**
     * The status of the invoice.
     * @type {InvoiceStatus}
     * @memberof Invoice
     */
    'status'?: InvoiceStatus;
    /**
     * 
     * @type {InvoiceDetail}
     * @memberof Invoice
     */
    'detail': InvoiceDetail;
    /**
     * 
     * @type {InvoicerInfo}
     * @memberof Invoice
     */
    'invoicer'?: InvoicerInfo;
    /**
     * The billing and shipping information. Includes name, email, address, phone and language.
     * @type {Array<RecipientInfo>}
     * @memberof Invoice
     */
    'primary_recipients'?: Array<RecipientInfo>;
    /**
     * An array of one or more CC: emails to which notifications are sent. If you omit this parameter, a notification is sent to all CC: email addresses that are part of the invoice.<blockquote><strong>Note:</strong> Valid values are email addresses in the `additional_recipients` value associated with the invoice.</blockquote>
     * @type {Array<string>}
     * @memberof Invoice
     */
    'additional_recipients'?: Array<string>;
    /**
     * An array of invoice line item information.
     * @type {Array<Item>}
     * @memberof Invoice
     */
    'items'?: Array<Item>;
    /**
     * 
     * @type {Configuration}
     * @memberof Invoice
     */
    'configuration'?: Configuration;
    /**
     * 
     * @type {AmountSummaryDetail}
     * @memberof Invoice
     */
    'amount'?: AmountSummaryDetail;
    /**
     * 
     * @type {Money}
     * @memberof Invoice
     */
    'due_amount'?: Money;
    /**
     * 
     * @type {Money}
     * @memberof Invoice
     */
    'gratuity'?: Money;
    /**
     * 
     * @type {Payments}
     * @memberof Invoice
     */
    'payments'?: Payments;
    /**
     * 
     * @type {Refunds}
     * @memberof Invoice
     */
    'refunds'?: Refunds;
    /**
     * An array of request-related [HATEOAS links](/docs/api/reference/api-responses/#hateoas-links).
     * @type {Array<LinkDescription>}
     * @memberof Invoice
     */
    'links'?: Array<LinkDescription>;
}

