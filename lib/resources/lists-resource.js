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
function ListsResource({ apiHandler }) {
    return {
        getAll({ limit = null, offset = null, sort = null, filter = null, q = null, criteria = null, fields = null } = {}) {
            return __awaiter(this, void 0, void 0, function* () {
                const params = {
                    limit,
                    offset,
                    sort,
                    filter,
                    q,
                    criteria,
                    fields
                };
                return yield apiHandler.getAll(`lists`, params);
            });
        },
        get({ id, version = '' }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.get(`lists/${id}/${version}`);
            });
        },
        create({ id = '', data }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.create(`lists/${id}`, id, data);
            });
        },
        update({ id, data }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.put(`lists/${id}`, data);
            });
        },
        delete({ id }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.delete(`lists/${id}`);
            });
        }
    };
}
exports.default = ListsResource;
;
//# sourceMappingURL=lists-resource.js.map