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
function EventsResource({ apiHandler }) {
    return {
        getAll({ limit = null, offset = null } = {}) {
            return __awaiter(this, void 0, void 0, function* () {
                const params = {
                    limit,
                    offset
                };
                return yield apiHandler.getAll(`events`, params);
            });
        },
        get({ eventType }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.get(`events/${eventType}`);
            });
        },
        getRules({ eventType }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.get(`events/${eventType}/rules`);
            });
        },
        createRules({ eventType, data }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.put(`events/${eventType}/rules`, data);
            });
        },
        updateRules({ eventType, data }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.put(`events/${eventType}/rules`, data);
            });
        },
        getRulesHistory({ eventType, limit = null, offset = null } = {}) {
            return __awaiter(this, void 0, void 0, function* () {
                const params = {
                    limit,
                    offset
                };
                return yield apiHandler.getAll(`events/${eventType}/rules/history`, params);
            });
        },
        getRulesVersionNumber({ eventType, version }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.get(`events/${eventType}/rules/history/${version}`);
            });
        },
        getRulesVersionDetail({ eventType, version }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.get(`events/${eventType}/rules/versions/${version}`);
            });
        }
    };
}
exports.default = EventsResource;
;
//# sourceMappingURL=events-resource.js.map