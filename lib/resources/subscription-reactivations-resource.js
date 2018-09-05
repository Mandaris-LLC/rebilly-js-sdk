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
function SubscriptionReactivationsResource({ apiHandler }) {
    return {
        getAll({ limit = null, offset = null, sort = null, filter = null } = {}) {
            return __awaiter(this, void 0, void 0, function* () {
                const params = {
                    limit,
                    offset,
                    sort,
                    filter,
                };
                return yield apiHandler.getAll(`subscription-reactivations`, params);
            });
        },
        get({ id }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.get(`subscription-reactivations/${id}`);
            });
        },
        reactivate({ data }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.post(`subscription-reactivations`, data);
            });
        }
    };
}
exports.default = SubscriptionReactivationsResource;
;
//# sourceMappingURL=subscription-reactivations-resource.js.map