"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Simple structure for handling file payloads from the API.
 * @prop response {Object}
 * @prop data {ArrayBuffer}
 * @prop config {Object} original request configuration
 */
class File {
    constructor({ data, status, statusText, headers }, config = {}) {
        this.response = { status, statusText, headers };
        this.data = data;
        this.config = config;
    }
}
exports.default = File;
//# sourceMappingURL=file.js.map