"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const deep_freeze_1 = require("./deep-freeze");
/**
 * A single read-only entity member.
 * @typedef Member
 * @readonly
 * @prop response {Object}
 * @prop fields {Object}
 * @prop getJSON {Function: Object}
 * @prop config {Object} original request configuration
 */
class Member {
    constructor({ data, status, statusText, headers }, config = {}) {
        this.response = { status, statusText, headers };
        this.fields = Object.assign({}, data);
        this.config = config;
        deep_freeze_1.default(this);
    }
    /**
     * Returns a mutable JSON representation of the Member.
     * @returns {Object}
     */
    getJSON() {
        return JSON.parse(JSON.stringify({ fields: this.fields }));
    }
}
exports.default = Member;
//# sourceMappingURL=member.js.map