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
function TimelinesResource({ apiHandler }) {
    return {
        getActivityFeed({ eventTypes = null, limit = 1000, offset = 0 }) {
            return __awaiter(this, void 0, void 0, function* () {
                const params = {
                    eventTypes,
                    limit,
                    offset
                };
                return yield apiHandler.getAll(`activity-feed`, params);
            });
        },
        getTransaction({ id = '', eventTypes = null, limit = 1000, offset = 0 }) {
            return __awaiter(this, void 0, void 0, function* () {
                const params = {
                    eventTypes,
                    limit,
                    offset
                };
                return yield apiHandler.getAll(`transactions/${id}/timeline`, params);
            });
        },
        getCustomer({ id = '', eventTypes = null, limit = 1000, offset = 0 }) {
            return __awaiter(this, void 0, void 0, function* () {
                const params = {
                    eventTypes,
                    limit,
                    offset
                };
                return yield apiHandler.getAll(`customers/${id}/timeline`, params);
            });
        }
    };
}
exports.default = TimelinesResource;
;
//# sourceMappingURL=timelines-resource.js.map