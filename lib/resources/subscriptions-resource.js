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
function SubscriptionsResource({ apiHandler }) {
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
                return yield apiHandler.getAll(`subscriptions`, params);
            });
        },
        getAllMatchedRules({ id }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.getAll(`subscriptions/${id}/matched-rules`);
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
                return yield apiHandler.download(`subscriptions`, config);
            });
        },
        get({ id, expand = null }) {
            return __awaiter(this, void 0, void 0, function* () {
                const params = {
                    expand
                };
                return yield apiHandler.get(`subscriptions/${id}`, params);
            });
        },
        create({ id = '', data }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.create(`subscriptions/${id}`, id, data);
            });
        },
        update({ id, data }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.put(`subscriptions/${id}`, data);
            });
        },
        /**
         * Use resource `subscriptionCancellations` instead.
         * @deprecated
         * @param id
         * @param data
         * @returns {Promise<any>}
         */
        cancel({ id, data }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.post(`subscriptions/${id}/cancel`, data);
            });
        },
        switch({ id, data }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.post(`subscriptions/${id}/switch`, data);
            });
        },
        getLeadSource({ id }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.get(`subscriptions/${id}/lead-source`);
            });
        },
        createLeadSource({ id, data }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.put(`subscriptions/${id}/lead-source`, data);
            });
        },
        deleteLeadSource({ id }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.delete(`subscriptions/${id}/lead-source`);
            });
        }
    };
}
exports.default = SubscriptionsResource;
;
//# sourceMappingURL=subscriptions-resource.js.map