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
function FilesResource({ apiHandler }) {
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
                return yield apiHandler.getAll(`files`, params);
            });
        },
        get({ id }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.get(`files/${id}`);
            });
        },
        upload({ fileObject }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.post(`files`, fileObject);
            });
        },
        uploadAndUpdate({ fileObject, data = { description: '', tags: [''] } }) {
            return __awaiter(this, void 0, void 0, function* () {
                const file = yield this.upload({ fileObject });
                const params = {
                    name: file.name,
                    extension: file.extension,
                    description: data.description,
                    tags: data.tags,
                    url: ''
                };
                return yield this.update({ id: file.fields.id, data: params });
            });
        },
        update({ id, data }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.put(`files/${id}`, data);
            });
        },
        delete({ id }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.delete(`files/${id}`);
            });
        },
        detachAndDelete({ id }) {
            return __awaiter(this, void 0, void 0, function* () {
                const params = {
                    filter: `fileId:${id}`
                };
                const attachments = yield this.getAllAttachments(params);
                const promises = attachments.items.map(attachment => this.detach({ id: attachment.fields.id }));
                yield Promise.all(promises);
                return yield apiHandler.delete(`files/${id}`);
            });
        },
        download({ id }) {
            return __awaiter(this, void 0, void 0, function* () {
                const config = {
                    responseType: 'arraybuffer'
                };
                return yield apiHandler.download(`files/${id}/download`, config);
            });
        },
        getAllAttachments({ limit = null, offset = null, sort = null, filter = null, q = null } = {}) {
            return __awaiter(this, void 0, void 0, function* () {
                const params = {
                    limit,
                    offset,
                    sort,
                    filter,
                    q
                };
                return yield apiHandler.getAll(`attachments`, params);
            });
        },
        getAttachment({ id }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.get(`attachments${id}`);
            });
        },
        updateAttachment({ id, data }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.put(`attachments/${id}`, data);
            });
        },
        attach({ data }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.post(`attachments`, data);
            });
        },
        detach({ id }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.delete(`attachments/${id}`);
            });
        }
    };
}
exports.default = FilesResource;
;
//# sourceMappingURL=files-resource.js.map