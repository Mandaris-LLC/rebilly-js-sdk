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
function CouponsResource({ apiHandler }) {
    return {
        getAll({ limit = null, offset = null, sort = null, filter = null } = {}) {
            return __awaiter(this, void 0, void 0, function* () {
                const params = {
                    limit,
                    offset,
                    sort,
                    filter
                };
                return yield apiHandler.getAll(`coupons`, params);
            });
        },
        get({ redemptionCode }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.get(`coupons/${redemptionCode}`);
            });
        },
        create({ redemptionCode = '', data }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.create(`coupons/${redemptionCode}`, redemptionCode, data);
            });
        },
        update({ redemptionCode, data }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.put(`coupons/${redemptionCode}`, data);
            });
        },
        getAllRedemptions({ limit = null, offset = null, sort = null, filter = null } = {}) {
            return __awaiter(this, void 0, void 0, function* () {
                const params = {
                    limit,
                    offset,
                    sort,
                    filter
                };
                return yield apiHandler.getAll(`coupons-redemptions`, params);
            });
        },
        getRedemption({ id }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.get(`coupons-redemptions/${id}`);
            });
        },
        cancelRedemption({ id }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.post(`coupons-redemptions/${id}/cancel`);
            });
        },
        redeem({ data }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.post(`coupons-redemptions`, data);
            });
        },
        setExpiry({ redemptionCode, data }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.post(`coupons/${redemptionCode}/expiration`, data);
            });
        }
    };
}
exports.default = CouponsResource;
;
//# sourceMappingURL=coupons-resource.js.map