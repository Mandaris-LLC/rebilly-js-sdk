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
function KycDocumentsResource({ apiHandler }) {
    return {
        getAll({ limit = null, offset = null, sort = null, expand = null, filter = null, q = null } = {}) {
            return __awaiter(this, void 0, void 0, function* () {
                const params = {
                    limit,
                    offset,
                    sort,
                    expand,
                    filter,
                    q
                };
                return yield apiHandler.getAll(`kyc-documents`, params);
            });
        },
        get({ id, expand = null }) {
            return __awaiter(this, void 0, void 0, function* () {
                const params = {
                    expand
                };
                return yield apiHandler.get(`kyc-documents/${id}`, params);
            });
        },
        create({ data }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.create(`kyc-documents`, '', data);
            });
        },
        update({ id, data }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.put(`kyc-documents/${id}`, data);
            });
        },
        accept({ id }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.post(`kyc-documents/${id}/acceptance`);
            });
        },
        reject({ id, data }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.post(`kyc-documents/${id}/rejection`, data);
            });
        }
    };
}
exports.default = KycDocumentsResource;
;
//# sourceMappingURL=kyc-documents-resource.js.map