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
function CredentialHashesResource({ apiHandler }) {
    return {
        getEmailCredential({ hash }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.get(`credential-hashes/emails/${hash}`);
            });
        },
        getWebhookCredential({ hash }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.get(`credential-hashes/webhooks/${hash}`);
            });
        },
        getMailgunCredential({ hash }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.get(`credential-hashes/mailgun/${hash}`);
            });
        },
        createEmailCredential({ data }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.post(`credential-hashes/emails`, data);
            });
        },
        createWebhookCredential({ data }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.post(`credential-hashes/webhooks`, data);
            });
        },
        createMailgunCredential({ data }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield apiHandler.post(`credential-hashes/mailgun`, data);
            });
        }
    };
}
exports.default = CredentialHashesResource;
;
//# sourceMappingURL=credential-hashes-resource.js.map