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
function PaymentCardsResource({ apiHandler }) {
    return {
        getAll({ limit = null, offset = null, sort = null, filter = null, q = null } = {}) {
            return __awaiter(this, void 0, void 0, function* () {
                const params = {
                    limit,
                    offset,
                    sort,
                    filter,
                    q
                };
                return yield apiHandler.getAll(`payment-cards`, params);
            });
        },
        getAllMatchedRules({ id }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.getAll(`payment-cards/${id}/matched-rules`);
            });
        },
        get({ id }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.get(`payment-cards/${id}`);
            });
        },
        create({ id = '', data }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.create(`payment-cards/${id}`, id, data);
            });
        },
        patch({ id = '', data }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.patch(`payment-cards/${id}`, data);
            });
        },
        authorize({ id, data }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.post(`payment-cards/${id}/authorization`, data);
            });
        },
        deactivate({ id }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.post(`payment-cards/${id}/deactivation`);
            });
        },
        getAllMigratable({ limit = null, offset = null, sort = null, filter = null } = {}) {
            return __awaiter(this, void 0, void 0, function* () {
                const params = {
                    limit,
                    offset,
                    sort,
                    filter
                };
                return yield apiHandler.getAll(`payment-cards-migrations`, params);
            });
        },
        migrate({ data }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.post(`payment-cards-migrations/migrate`, data);
            });
        }
    };
}
exports.default = PaymentCardsResource;
;
//# sourceMappingURL=payment-cards-resource.js.map