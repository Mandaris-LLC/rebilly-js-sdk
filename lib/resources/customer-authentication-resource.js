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
function CustomerAuthenticationResource({ apiHandler }) {
    return {
        getAuthOptions() {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.get(`authentication-options`);
            });
        },
        updateAuthOptions({ data }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.put(`authentication-options`, data);
            });
        },
        getAllAuthTokens({ limit = null, offset = null } = {}) {
            return __awaiter(this, void 0, void 0, function* () {
                const params = {
                    limit,
                    offset
                };
                return yield apiHandler.getAll(`authentication-tokens`, params);
            });
        },
        verify({ token }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.get(`authentication-tokens/${token}`);
            });
        },
        login({ data }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.post(`authentication-tokens`, data);
            });
        },
        logout({ token }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.delete(`authentication-tokens/${token}`);
            });
        },
        getAllCredentials({ limit = null, offset = null } = {}) {
            return __awaiter(this, void 0, void 0, function* () {
                const params = {
                    limit,
                    offset
                };
                return yield apiHandler.getAll(`credentials`, params);
            });
        },
        getCredential({ id }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.get(`credentials/${id}`);
            });
        },
        createCredential({ id = '', data }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.create(`credentials/${id}`, id, data);
            });
        },
        updateCredential({ id, data }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.put(`credentials/${id}`, data);
            });
        },
        deleteCredential({ id }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.delete(`credentials/${id}`);
            });
        },
        getAllResetPasswordTokens({ limit = null, offset = null } = {}) {
            return __awaiter(this, void 0, void 0, function* () {
                const params = {
                    limit,
                    offset
                };
                return yield apiHandler.getAll(`password-tokens`, params);
            });
        },
        getResetPasswordToken({ id }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.getAll(`password-tokens/${id}`);
            });
        },
        createResetPasswordToken({ data }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.post(`password-tokens`, data);
            });
        },
        deleteResetPasswordToken({ id }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.delete(`password-tokens/${id}`);
            });
        }
    };
}
exports.default = CustomerAuthenticationResource;
;
//# sourceMappingURL=customer-authentication-resource.js.map