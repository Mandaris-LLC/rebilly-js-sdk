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
function ThreeDSecureResource({ apiHandler }) {
    return {
        getAll({ limit = null, offset = null } = {}) {
            return __awaiter(this, void 0, void 0, function* () {
                const params = {
                    limit,
                    offset
                };
                return yield apiHandler.getAll(`3dsecure`, params);
            });
        },
        get({ id }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.get(`3dsecure/${id}`);
            });
        },
        create({ data }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.post(`3dsecure`, data);
            });
        }
    };
}
exports.default = ThreeDSecureResource;
;
//# sourceMappingURL=three-d-secure-resource.js.map