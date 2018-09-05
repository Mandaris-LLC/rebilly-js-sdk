"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const member_1 = require("./member");
const pagination_headers_1 = require("./pagination-headers");
const deep_freeze_1 = require("./deep-freeze");
/**
 * A collection of read-only entity members.
 * @typedef Collection
 * @readonly
 * @prop limit {number}
 * @prop offset {number}
 * @prop total {number}
 * @prop items {Array<Member>}
 * @prop response {Object}
 * @prop getJSON {Function: Object}
 * @prop config {Object} original request configuration
 * @example
 * const api = RebillyAPI();
 * const customers = api.customers.getAll();
 * const rawData = customers.getJSON();
 * const totalCount = customers.total;
 */
class Collection {
    constructor({ data, status, statusText, headers }, config = {}) {
        Object.keys(pagination_headers_1.default).forEach((header) => {
            const value = headers[pagination_headers_1.default[header]];
            this[header] = value ? Number(value) : null;
        });
        this.response = { status, statusText, headers };
        this.items = data.map(member => new member_1.default({ data: member, status, statusText, headers }));
        this.config = config;
        deep_freeze_1.default(this);
    }
    /**
     * Returns a mutable JSON representation of the Collection.
     * @returns {Object}
     */
    getJSON() {
        return JSON.parse(JSON.stringify({ items: this.items }));
    }
}
exports.default = Collection;
//# sourceMappingURL=collection.js.map