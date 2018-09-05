"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const request_headers_1 = require("../request-headers");
function InvoicesResource({ apiHandler }) {
    return {
        getAll({ limit = null, offset = null, sort = null, expand = null, filter = null, q = null, criteria = null } = {}) {
            return __awaiter(this, void 0, void 0, function* () {
                const params = {
                    limit,
                    offset,
                    sort,
                    expand,
                    filter,
                    q,
                    criteria
                };
                return yield apiHandler.getAll(`invoices`, params);
            });
        },
        getAllMatchedRules({ id }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.getAll(`invoices/${id}/matched-rules`);
            });
        },
        get({ id, expand = null }) {
            return __awaiter(this, void 0, void 0, function* () {
                const params = {
                    expand
                };
                return yield apiHandler.get(`invoices/${id}`, params);
            });
        },
        downloadPDF({ id }) {
            return __awaiter(this, void 0, void 0, function* () {
                const config = {
                    headers: request_headers_1.pdfHeader,
                    responseType: 'arraybuffer'
                };
                return yield apiHandler.download(`invoices/${id}`, config);
            });
        },
        downloadCSV({ limit = null, offset = null, sort = null, expand = null, filter = null, q = null, criteria = null } = {}) {
            return __awaiter(this, void 0, void 0, function* () {
                const config = {
                    params: {
                        limit,
                        offset,
                        sort,
                        expand,
                        filter,
                        q,
                        criteria
                    },
                    headers: request_headers_1.csvHeader
                };
                return yield apiHandler.download(`invoices`, config);
            });
        },
        create({ id = '', data }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.create(`invoices/${id}`, id, data);
            });
        },
        update({ id, data }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.put(`invoices/${id}`, data);
            });
        },
        issue({ id, data = {} }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.post(`invoices/${id}/issue`, data);
            });
        },
        abandon({ id }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.post(`invoices/${id}/abandon`, null);
            });
        },
        void({ id }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.post(`invoices/${id}/void`, null);
            });
        },
        getAllInvoiceItems({ id, limit = null, offset = null }) {
            return __awaiter(this, void 0, void 0, function* () {
                const params = {
                    limit,
                    offset
                };
                return yield apiHandler.getAll(`invoices/${id}/items`, params);
            });
        },
        createInvoiceItem({ id, data }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.post(`invoices/${id}/items`, data);
            });
        },
        getLeadSource({ id }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.get(`invoices/${id}/lead-source`);
            });
        },
        createLeadSource({ id, data }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.put(`invoices/${id}/lead-source`, data);
            });
        },
        updateLeadSource({ id, data }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.put(`invoices/${id}/lead-source`, data);
            });
        },
        deleteLeadSource({ id }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.delete(`invoices/${id}/lead-source`);
            });
        }
    };
}
exports.default = InvoicesResource;
;
//# sourceMappingURL=invoices-resource.js.map