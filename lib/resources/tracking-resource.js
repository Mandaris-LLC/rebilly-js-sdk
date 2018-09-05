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
function TrackingResource({ apiHandler }) {
    return {
        getAllApiLogs({ limit = null, offset = null, sort = null, filter = null, q = null, criteria = null } = {}) {
            return __awaiter(this, void 0, void 0, function* () {
                const params = {
                    limit,
                    offset,
                    sort,
                    filter,
                    q,
                    criteria
                };
                return yield apiHandler.getAll(`tracking/api`, params);
            });
        },
        downloadApiLogsCSV({ limit = null, offset = null, sort = null, filter = null, q = null, criteria = null } = {}) {
            return __awaiter(this, void 0, void 0, function* () {
                const config = {
                    params: {
                        limit,
                        offset,
                        sort,
                        filter,
                        q,
                        criteria
                    },
                    headers: request_headers_1.csvHeader
                };
                return yield apiHandler.download(`tracking/api`, config);
            });
        },
        getApiLog({ id }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.get(`tracking/api/${id}`);
            });
        },
        getAllSubscriptionLogs({ limit = null, offset = null, sort = null, filter = null } = {}) {
            return __awaiter(this, void 0, void 0, function* () {
                const params = {
                    limit,
                    offset,
                    sort,
                    filter
                };
                return yield apiHandler.getAll(`tracking/subscriptions`, params);
            });
        },
        getSubscriptionLog({ id }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.get(`tracking/subscriptions/${id}`);
            });
        },
        getAllWebhookNotificationLogs({ limit = null, offset = null, sort = null, filter = null } = {}) {
            return __awaiter(this, void 0, void 0, function* () {
                const params = {
                    limit,
                    offset,
                    sort,
                    filter
                };
                return yield apiHandler.getAll(`tracking/website-webhooks`, params);
            });
        },
        getWebhookNotificationLog({ id }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.get(`tracking/website-webhooks/${id}`);
            });
        },
        getAllListsChangesHistory({ limit = null, offset = null, sort = null, filter = null, q = null } = {}) {
            return __awaiter(this, void 0, void 0, function* () {
                const params = {
                    limit,
                    offset,
                    sort,
                    filter,
                    q
                };
                return yield apiHandler.getAll(`tracking/lists`, params);
            });
        },
        getAllWebhookTrackingLogs({ limit = null, offset = null, sort = null, filter = null, q = null, criteria = null } = {}) {
            return __awaiter(this, void 0, void 0, function* () {
                const params = {
                    limit,
                    offset,
                    sort,
                    filter,
                    q,
                    criteria
                };
                return yield apiHandler.getAll(`tracking/webhooks`, params);
            });
        },
        getWebhookTrackingLog({ id }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.get(`tracking/webhooks/${id}`);
            });
        },
        /**
         * Retrieve a list of tracking email notifications
         * @param limit
         * @param offset
         * @param sort
         * @param filter
         * @param criteria
         * @returns {Promise}
         */
        getAllEmailNotifications({ limit = null, offset = null, sort = null, filter = null, criteria = null } = {}) {
            return __awaiter(this, void 0, void 0, function* () {
                const params = {
                    limit,
                    offset,
                    sort,
                    filter,
                    criteria
                };
                return yield apiHandler.getAll(`tracking/email-notifications`, params);
            });
        },
        /**
         * Retrieve a tracking email notification with specified identifier string
         * @param id
         * @returns {Promise}
         */
        getEmailNotification({ id }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.get(`tracking/email-notifications/${id}`);
            });
        }
    };
}
exports.default = TrackingResource;
;
//# sourceMappingURL=tracking-resource.js.map