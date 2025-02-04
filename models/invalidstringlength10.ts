/*
Invoices

Use the Invoicing API to create, send, and manage invoices. You can also use the API or webhooks to track invoice payments. When you send an invoice to a customer, the invoice moves from draft to payable state. PayPal then emails the customer a link to the invoice on the PayPal website. Customers with a PayPal account can log in and pay the invoice with PayPal. Alternatively, customers can pay as a guest with a debit card or credit card. For more information, see the <a href=\"/docs/invoicing/\">Invoicing Overview</a> and the <a href=\"/docs/invoicing/basic-integration/\">Invoicing Integration Guide</a>.

The version of the OpenAPI document: 2.3


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface INVALIDSTRINGLENGTH10
 */
export interface INVALIDSTRINGLENGTH10 {
    /**
     * 
     * @type {string}
     * @memberof INVALIDSTRINGLENGTH10
     */
    'description'?: INVALIDSTRINGLENGTH10DescriptionEnum;
    /**
     * 
     * @type {string}
     * @memberof INVALIDSTRINGLENGTH10
     */
    'issue'?: INVALIDSTRINGLENGTH10IssueEnum;
}

type INVALIDSTRINGLENGTH10DescriptionEnum = 'the value of a field is either too short or too long.'
type INVALIDSTRINGLENGTH10IssueEnum = 'INVALID_STRING_LENGTH'


