/*
Invoices

Use the Invoicing API to create, send, and manage invoices. You can also use the API or webhooks to track invoice payments. When you send an invoice to a customer, the invoice moves from draft to payable state. PayPal then emails the customer a link to the invoice on the PayPal website. Customers with a PayPal account can log in and pay the invoice with PayPal. Alternatively, customers can pay as a guest with a debit card or credit card. For more information, see the <a href=\"/docs/invoicing/\">Invoicing Overview</a> and the <a href=\"/docs/invoicing/basic-integration/\">Invoicing Integration Guide</a>.

The version of the OpenAPI document: 2.3


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * The currency and amount for a financial transaction, such as a balance or payment due.
 * @export
 * @interface Money
 */
export interface Money {
    /**
     * The [three-character ISO-4217 currency code](https://raw.githubusercontent.com) that identifies the currency.
     * @type {string}
     * @memberof Money
     */
    'currency_code': string;
    /**
     * The value, which might be:<ul><li>An integer for currencies like `JPY` that are not typically fractional.</li><li>A decimal fraction for currencies like `TND` that are subdivided into thousandths.</li></ul>For the required number of decimal places for a currency code, see [Currency Codes](https://raw.githubusercontent.com).
     * @type {string}
     * @memberof Money
     */
    'value': string;
}

