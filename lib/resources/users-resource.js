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
function UsersResource({ apiHandler }) {
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
                return yield apiHandler.getAll(`users`, params);
            });
        },
        get({ id }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.get(`users/${id}`);
            });
        },
        create({ id = '', data }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.create(`users/${id}`, id, data);
            });
        },
        update({ id = '', data }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.put(`users/${id}`, data);
            });
        },
        delete({ id }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.delete(`users/${id}`);
            });
        },
        updatePassword({ id, data }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.post(`users/${id}/password`, data);
            });
        },
        resetPassword({ token, data }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.post(`reset-password/${token}`, data);
            });
        },
        resetTotp({ id }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.post(`users/${id}/totp-reset`);
            });
        }
    };
}
exports.default = UsersResource;
;
//# sourceMappingURL=users-resource.js.map