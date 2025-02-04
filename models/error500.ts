/*
Invoices

Use the Invoicing API to create, send, and manage invoices. You can also use the API or webhooks to track invoice payments. When you send an invoice to a customer, the invoice moves from draft to payable state. PayPal then emails the customer a link to the invoice on the PayPal website. Customers with a PayPal account can log in and pay the invoice with PayPal. Alternatively, customers can pay as a guest with a debit card or credit card. For more information, see the <a href=\"/docs/invoicing/\">Invoicing Overview</a> and the <a href=\"/docs/invoicing/basic-integration/\">Invoicing Integration Guide</a>.

The version of the OpenAPI document: 2.3


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ErrorLinkDescription } from './error-link-description';

/**
 * This is either a system or application error, and generally indicates that although the client appeared to provide a correct request, something unexpected has gone wrong on the server.
 * @export
 * @interface Error500
 */
export interface Error500 {
    /**
     * 
     * @type {string}
     * @memberof Error500
     */
    'name'?: Error500NameEnum;
    /**
     * 
     * @type {string}
     * @memberof Error500
     */
    'message'?: Error500MessageEnum;
    /**
     * The PayPal internal ID. Used for correlation purposes.
     * @type {string}
     * @memberof Error500
     */
    'debug_id'?: string;
    /**
     * An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).
     * @type {Array<ErrorLinkDescription>}
     * @memberof Error500
     */
    'links'?: Array<ErrorLinkDescription>;
}

type Error500NameEnum = 'INTERNAL_SERVER_ERROR'
type Error500MessageEnum = 'An internal server error occurred.'


