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
function GatewayAccountsResource({ apiHandler }) {
    return {
        getAll({ limit = null, offset = null, sort = null, filter = null, q = null, criteria = null } = {}) {
            return __awaiter(this, void 0, void 0, function* () {
                const params = {
                    limit,
                    offset,
                    sort,
                    filter,
                    q,
                    criteria
                };
                return yield apiHandler.getAll(`gateway-accounts`, params);
            });
        },
        get({ id }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.get(`gateway-accounts/${id}`);
            });
        },
        create({ id = '', data }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.create(`gateway-accounts/${id}`, id, data);
            });
        },
        update({ id, data }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.patch(`gateway-accounts/${id}`, data);
            });
        },
        delete({ id }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.delete(`gateway-accounts/${id}`);
            });
        },
        enable({ id }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.post(`gateway-accounts/${id}/enable`);
            });
        },
        disable({ id }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.post(`gateway-accounts/${id}/disable`);
            });
        },
        getAllDowntimeSchedules({ id, limit = null, offset = null, filter = null } = {}) {
            return __awaiter(this, void 0, void 0, function* () {
                const params = {
                    limit,
                    offset,
                    filter,
                };
                return yield apiHandler.getAll(`gateway-accounts/${id}/downtime-schedules`, params);
            });
        },
        getDowntimeSchedule({ id, downtimeScheduleId }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.get(`gateway-accounts/${id}/downtime-schedules/${downtimeScheduleId}`);
            });
        },
        createDowntimeSchedule({ id, data }) {
            return __awaiter(this, void 0, void 0, function* () {
                // Id for a downtime-schedules cannot be set, is read only.
                return yield apiHandler.create(`gateway-accounts/${id}/downtime-schedules`, '', data);
            });
        },
        updateDowntimeSchedule({ id, downtimeScheduleId, data }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.put(`gateway-accounts/${id}/downtime-schedules/${downtimeScheduleId}`, data);
            });
        },
        deleteDowntimeSchedule({ id, downtimeScheduleId }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.delete(`gateway-accounts/${id}/downtime-schedules/${downtimeScheduleId}`);
            });
        },
        getAllTimelineEvents({ id, limit = null, offset = null, sort = null, filter = null } = {}) {
            return __awaiter(this, void 0, void 0, function* () {
                const params = {
                    limit,
                    offset,
                    sort,
                    filter,
                };
                return yield apiHandler.getAll(`gateway-accounts/${id}/timeline`, params);
            });
        },
        getTimelineEvent({ id, eventId = '' } = {}) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.get(`gateway-accounts/${id}/timeline/${eventId}`);
            });
        },
    };
}
exports.default = GatewayAccountsResource;
;
//# sourceMappingURL=gateway-accounts-resource.js.map