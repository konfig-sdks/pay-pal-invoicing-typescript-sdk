/*
Invoices

Use the Invoicing API to create, send, and manage invoices. You can also use the API or webhooks to track invoice payments. When you send an invoice to a customer, the invoice moves from draft to payable state. PayPal then emails the customer a link to the invoice on the PayPal website. Customers with a PayPal account can log in and pay the invoice with PayPal. Alternatively, customers can pay as a guest with a debit card or credit card. For more information, see the <a href=\"/docs/invoicing/\">Invoicing Overview</a> and the <a href=\"/docs/invoicing/basic-integration/\">Invoicing Integration Guide</a>.

The version of the OpenAPI document: 2.3


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ErrorDetails } from './error-details';
import { ErrorLinkDescription } from './error-link-description';

/**
 * The server has detected a conflict while processing this request.
 * @export
 * @interface Error409
 */
export interface Error409 {
    /**
     * 
     * @type {string}
     * @memberof Error409
     */
    'name'?: Error409NameEnum;
    /**
     * 
     * @type {string}
     * @memberof Error409
     */
    'message'?: Error409MessageEnum;
    /**
     * 
     * @type {Array<ErrorDetails>}
     * @memberof Error409
     */
    'details'?: Array<ErrorDetails>;
    /**
     * The PayPal internal ID. Used for correlation purposes.
     * @type {string}
     * @memberof Error409
     */
    'debug_id'?: string;
    /**
     * An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).
     * @type {Array<ErrorLinkDescription>}
     * @memberof Error409
     */
    'links'?: Array<ErrorLinkDescription>;
}

type Error409NameEnum = 'RESOURCE_CONFLICT'
type Error409MessageEnum = 'The server has detected a conflict while processing this request.'


