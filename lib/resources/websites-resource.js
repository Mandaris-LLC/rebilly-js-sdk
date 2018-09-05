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
const request_headers_1 = require("../request-headers");
function WebsitesResource({ apiHandler }) {
    return {
        getAll({ limit = null, offset = null, sort = null, filter = null, q = null, criteria = null } = {}) {
            return __awaiter(this, void 0, void 0, function* () {
                const params = {
                    limit,
                    offset,
                    sort,
                    filter,
                    q,
                    criteria
                };
                return yield apiHandler.getAll(`websites`, params);
            });
        },
        downloadCSV({ limit = null, offset = null, sort = null, filter = null, q = null, criteria = null } = {}) {
            return __awaiter(this, void 0, void 0, function* () {
                const config = {
                    params: {
                        limit,
                        offset,
                        sort,
                        expand,
                        filter,
                        q,
                        criteria
                    },
                    headers: request_headers_1.csvHeader
                };
                return yield apiHandler.download(`websites`, config);
            });
        },
        get({ id }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.get(`websites/${id}`);
            });
        },
        create({ id = '', data }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.create(`websites/${id}`, id, data);
            });
        },
        update({ id, data }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.put(`websites/${id}`, data);
            });
        },
        delete({ id }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.delete(`websites/${id}`);
            });
        }
    };
}
exports.default = WebsitesResource;
;
//# sourceMappingURL=websites-resource.js.map