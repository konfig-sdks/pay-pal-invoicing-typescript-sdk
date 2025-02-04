/*
Invoices

Use the Invoicing API to create, send, and manage invoices. You can also use the API or webhooks to track invoice payments. When you send an invoice to a customer, the invoice moves from draft to payable state. PayPal then emails the customer a link to the invoice on the PayPal website. Customers with a PayPal account can log in and pay the invoice with PayPal. Alternatively, customers can pay as a guest with a debit card or credit card. For more information, see the <a href=\"/docs/invoicing/\">Invoicing Overview</a> and the <a href=\"/docs/invoicing/basic-integration/\">Invoicing Integration Guide</a>.

The version of the OpenAPI document: 2.3


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AddressDetailsProperty } from './address-details-property';

/**
 * The portable international postal address. Maps to [AddressValidationMetadata](https://github.com/googlei18n/libaddressinput/wiki/AddressValidationMetadata) and HTML 5.1 [Autofilling form controls: the autocomplete attribute](https://www.w3.org/TR/html51/sec-forms.html#autofilling-form-controls-the-autocomplete-attribute).
 * @export
 * @interface AddressPortable
 */
export interface AddressPortable {
    /**
     * The first line of the address. For example, number or street. For example, `173 Drury Lane`. Required for data entry and compliance and risk checks. Must contain the full address.
     * @type {string}
     * @memberof AddressPortable
     */
    'address_line_1'?: string;
    /**
     * The second line of the address. For example, suite or apartment number.
     * @type {string}
     * @memberof AddressPortable
     */
    'address_line_2'?: string;
    /**
     * The third line of the address, if needed. For example, a street complement for Brazil, direction text, such as `next to Walmart`, or a landmark in an Indian address.
     * @type {string}
     * @memberof AddressPortable
     */
    'address_line_3'?: string;
    /**
     * The neighborhood, ward, or district. Smaller than `admin_area_level_3` or `sub_locality`. Value is:<ul><li>The postal sorting code for Guernsey and many French territories, such as French Guiana.</li><li>The fine-grained administrative levels in China.</li></ul>
     * @type {string}
     * @memberof AddressPortable
     */
    'admin_area_4'?: string;
    /**
     * A sub-locality, suburb, neighborhood, or district. Smaller than `admin_area_level_2`. Value is:<ul><li>Brazil. Suburb, bairro, or neighborhood.</li><li>India. Sub-locality or district. Street name information is not always available but a sub-locality or district can be a very small area.</li></ul>
     * @type {string}
     * @memberof AddressPortable
     */
    'admin_area_3'?: string;
    /**
     * A city, town, or village. Smaller than `admin_area_level_1`.
     * @type {string}
     * @memberof AddressPortable
     */
    'admin_area_2'?: string;
    /**
     * The highest level sub-division in a country, which is usually a province, state, or ISO-3166-2 subdivision. Format for postal delivery. For example, `CA` and not `California`. Value, by country, is:<ul><li>UK. A county.</li><li>US. A state.</li><li>Canada. A province.</li><li>Japan. A prefecture.</li><li>Switzerland. A kanton.</li></ul>
     * @type {string}
     * @memberof AddressPortable
     */
    'admin_area_1'?: string;
    /**
     * The postal code, which is the zip code or equivalent. Typically required for countries with a postal code or an equivalent. See [postal code](https://en.wikipedia.org/wiki/Postal_code).
     * @type {string}
     * @memberof AddressPortable
     */
    'postal_code'?: string;
    /**
     * The [two-character ISO 3166-1 code](https://raw.githubusercontent.com) that identifies the country or region.<blockquote><strong>Note:</strong> The country code for Great Britain is <code>GB</code> and not <code>UK</code> as used in the top-level domain names for that country. Use the `C2` country code for China worldwide for comparable uncontrolled price (CUP) method, bank card, and cross-border transactions.</blockquote>
     * @type {string}
     * @memberof AddressPortable
     */
    'country_code': string;
    /**
     * 
     * @type {AddressDetailsProperty}
     * @memberof AddressPortable
     */
    'address_details'?: AddressDetailsProperty;
}

