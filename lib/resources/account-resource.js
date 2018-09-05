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
function AccountResource({ apiHandler }) {
    return {
        signUp({ data }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.post(`signup`, data, { authenticate: false });
            });
        },
        signIn({ data }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.post(`signin`, data, { authenticate: false });
            });
        },
        logout() {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.post(`logout`);
            });
        },
        activate({ token }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.post(`activation/${token}`, null, { authenticate: false });
            });
        },
        forgotPassword({ data }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.post(`forgot-password`, data, { authenticate: false });
            });
        },
        resetSandbox() {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.post(`reset-sandbox`);
            });
        }
    };
}
exports.default = AccountResource;
;
//# sourceMappingURL=account-resource.js.map