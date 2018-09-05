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
function CustomEventsResource({ apiHandler }) {
    return {
        getAll({ limit = null, offset = null, sort = null } = {}) {
            return __awaiter(this, void 0, void 0, function* () {
                const params = {
                    limit,
                    offset,
                    sort
                };
                return yield apiHandler.getAll(`custom-events`, params);
            });
        },
        get({ id }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.get(`custom-events/${id}`);
            });
        },
        create({ id = '', data }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.create(`custom-events/${id}`, id, data);
            });
        },
        delete({ id }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.delete(`custom-events/${id}`);
            });
        },
        getRules({ id }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.get(`custom-events/${id}/rules`);
            });
        },
        createRules({ id, data }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.put(`custom-events/${id}/rules`, data);
            });
        },
        updateRules({ id, data }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.put(`custom-events/${id}/rules`, data);
            });
        },
        getRulesHistory({ id, limit = null, offset = null } = {}) {
            return __awaiter(this, void 0, void 0, function* () {
                const params = {
                    limit,
                    offset
                };
                return yield apiHandler.getAll(`custom-events/${id}/rules/history`, params);
            });
        },
        getRulesVersionNumber({ id, version }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.get(`custom-events/${id}/rules/history/${version}`);
            });
        },
        getRulesVersionDetail({ id, version }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.get(`custom-events/${id}/rules/versions/${version}`);
            });
        },
        getAllScheduled({ limit = null, offset = null } = {}) {
            return __awaiter(this, void 0, void 0, function* () {
                const params = {
                    limit,
                    offset
                };
                return yield apiHandler.getAll(`queue/custom-events`, params);
            });
        },
        getScheduled({ id }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.get(`queue/custom-events/${id}`);
            });
        },
        deleteScheduled({ id }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.delete(`queue/custom-events/${id}`);
            });
        }
    };
}
exports.default = CustomEventsResource;
;
//# sourceMappingURL=custom-events-resource.js.map