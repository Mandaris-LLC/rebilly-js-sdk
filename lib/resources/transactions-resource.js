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
function TransactionsResource({ apiHandler }) {
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
                return yield apiHandler.getAll(`transactions`, params);
            });
        },
        getAllMatchedRules({ id }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.getAll(`transactions/${id}/matched-rules`);
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
                return yield apiHandler.download(`transactions`, config);
            });
        },
        getAllScheduled({ limit = null, offset = null, sort = null, expand = null, filter = null, q = null, criteria = null } = {}) {
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
                return yield apiHandler.getAll(`queue/payments`, params);
            });
        },
        updateScheduled({ id, data }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.put(`queue/payments/${id}`, data);
            });
        },
        get({ id, expand = null }) {
            return __awaiter(this, void 0, void 0, function* () {
                const params = {
                    expand
                };
                return yield apiHandler.get(`transactions/${id}`, params);
            });
        },
        create({ id = '', data }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.create(`payments/${id}`, id, data);
            });
        },
        cancel({ id }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.post(`transactions/${id}/cancel`);
            });
        },
        refund({ id, data }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.post(`transactions/${id}/refund`, data);
            });
        },
        getGatewayLogs({ id }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.getAll(`transactions/${id}/gateway-logs`);
            });
        },
        getLeadSource({ id }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.get(`transactions/${id}/lead-source`);
            });
        },
        createLeadSource({ id, data }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.put(`transactions/${id}/lead-source`, data);
            });
        },
        updateLeadSource({ id, data }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.put(`transactions/${id}/lead-source`, data);
            });
        },
        deleteLeadSource({ id }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.delete(`transactions/${id}/lead-source`);
            });
        }
    };
}
exports.default = TransactionsResource;
;
//# sourceMappingURL=transactions-resource.js.map