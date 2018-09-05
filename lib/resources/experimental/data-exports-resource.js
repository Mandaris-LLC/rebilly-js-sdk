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
function DataExportsResource({ apiHandler }) {
    return {
        getAll({ limit = null, offset = null, sort = null, expand = null, filter = null, q = null, criteria = null } = {}) {
            return __awaiter(this, void 0, void 0, function* () {
                const params = {
                    limit,
                    offset,
                    sort,
                    expand,
                    filter,
                    q,
                    criteria
                };
                return yield apiHandler.getAll('data-exports', params);
            });
        },
        get({ id }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.get(`data-exports/${id}`);
            });
        },
        queue({ data }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.post('data-exports', data);
            });
        },
        update({ id, data }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.put(`data-exports/${id}`, data);
            });
        },
        delete({ id }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.delete(`data-exports/${id}`);
            });
        }
    };
}
exports.default = DataExportsResource;
;
//# sourceMappingURL=data-exports-resource.js.map