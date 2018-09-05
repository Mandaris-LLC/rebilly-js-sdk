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
function EmailNotificationsResource({ apiHandler }) {
    return {
        /**
         * Retrieve a list of email notifications
         * @returns {Promise}
         */
        getAll() {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.getAll('email-notifications');
            });
        },
        /**
         * Retrieve a email notification
         * @param id
         * @returns {Promise}
         */
        get({ id }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.get(`email-notifications/${id}`);
            });
        },
        /**
         * Create a email notification
         * @param id
         * @param data
         * @returns {Promise}
         */
        create({ id = '', data }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.create(`email-notifications/${id}`, id, data);
            });
        },
        /**
         * Update a email notification
         * @param id
         * @param data
         * @returns {Promise}
         */
        update({ id, data }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.put(`email-notifications/${id}`, data);
            });
        },
    };
}
exports.default = EmailNotificationsResource;
;
//# sourceMappingURL=email-notifications-resource.js.map