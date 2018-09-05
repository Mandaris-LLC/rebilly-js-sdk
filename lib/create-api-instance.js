"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resources_1 = require("./resources");
const experimental_1 = require("./resources/experimental");
/**
 * Create an API instance using the provided API handler.
 * @param apiHandler {Object}
 * @returns {Object}
 */
function createApiInstance({ apiHandler }) {
    return {
        account: resources_1.default.AccountResource({ apiHandler }),
        apiKeys: resources_1.default.ApiKeysResource({ apiHandler }),
        bankAccounts: resources_1.default.BankAccountsResource({ apiHandler }),
        blacklists: resources_1.default.BlacklistsResource({ apiHandler }),
        checkoutPages: resources_1.default.CheckoutPagesResource({ apiHandler }),
        contacts: resources_1.default.ContactsResource({ apiHandler }),
        coupons: resources_1.default.CouponsResource({ apiHandler }),
        customers: resources_1.default.CustomersResource({ apiHandler }),
        customerAuthentication: resources_1.default.CustomerAuthenticationResource({ apiHandler }),
        customEvents: resources_1.default.CustomEventsResource({ apiHandler }),
        customFields: resources_1.default.CustomFieldsResource({ apiHandler }),
        credentialHashes: resources_1.default.CredentialHashesResource({ apiHandler }),
        disputes: resources_1.default.DisputesResource({ apiHandler }),
        events: resources_1.default.EventsResource({ apiHandler }),
        emailNotifications: resources_1.default.EmailNotificationsResource({ apiHandler }),
        files: resources_1.default.FilesResource({ apiHandler }),
        gatewayAccounts: resources_1.default.GatewayAccountsResource({ apiHandler }),
        invoices: resources_1.default.InvoicesResource({ apiHandler }),
        kycDocuments: resources_1.default.KycDocumentsResource({ apiHandler }),
        layouts: resources_1.default.LayoutsResource({ apiHandler }),
        lists: resources_1.default.ListsResource({ apiHandler }),
        notes: resources_1.default.NotesResource({ apiHandler }),
        organizations: resources_1.default.OrganizationsResource({ apiHandler }),
        paymentCards: resources_1.default.PaymentCardsResource({ apiHandler }),
        paymentTokens: resources_1.default.PaymentTokensResource({ apiHandler }),
        paypalAccounts: resources_1.default.PayPalAccountsResource({ apiHandler }),
        plans: resources_1.default.PlansResource({ apiHandler }),
        previews: resources_1.default.PreviewsResource({ apiHandler }),
        products: resources_1.default.ProductsResource({ apiHandler }),
        profile: resources_1.default.ProfileResource({ apiHandler }),
        sessions: resources_1.default.SessionsResource({ apiHandler }),
        shippingZones: resources_1.default.ShippingZonesResource({ apiHandler }),
        status: resources_1.default.StatusResource({ apiHandler }),
        subscriptions: resources_1.default.SubscriptionsResource({ apiHandler }),
        subscriptionCancellations: resources_1.default.SubscriptionCancellationsResource({ apiHandler }),
        subscriptionReactivations: resources_1.default.SubscriptionReactivationsResource({ apiHandler }),
        tracking: resources_1.default.TrackingResource({ apiHandler }),
        transactions: resources_1.default.TransactionsResource({ apiHandler }),
        threeDSecure: resources_1.default.ThreeDSecureResource({ apiHandler }),
        users: resources_1.default.UsersResource({ apiHandler }),
        webhooks: resources_1.default.WebhooksResource({ apiHandler }),
        websites: resources_1.default.WebsitesResource({ apiHandler }),
        //expose apiHandler methods to the API instance
        addRequestInterceptor: apiHandler.addRequestInterceptor,
        removeRequestInterceptor: apiHandler.removeRequestInterceptor,
        addResponseInterceptor: apiHandler.addResponseInterceptor,
        removeResponseInterceptor: apiHandler.removeResponseInterceptor,
        setTimeout: apiHandler.setTimeout,
        setProxyAgent: apiHandler.setProxyAgent,
        setSessionToken: apiHandler.setSessionToken,
        setEndpoints: apiHandler.setEndpoints,
        getCancellationToken: apiHandler.getCancellationToken,
        generateSignature: apiHandler.generateSignature
    };
}
exports.default = createApiInstance;
function createExperimentalApiInstance({ apiHandler }) {
    return {
        customers: experimental_1.default.CustomersResource({ apiHandler }),
        dataExports: experimental_1.default.DataExportsResource({ apiHandler }),
        histograms: experimental_1.default.HistogramsResource({ apiHandler }),
        reports: experimental_1.default.ReportsResource({ apiHandler }),
        subscriptions: experimental_1.default.SubscriptionsResource({ apiHandler }),
        timelines: experimental_1.default.TimelinesResource({ apiHandler }),
        transactions: experimental_1.default.TransactionsResource({ apiHandler }),
        //expose apiHandler methods to the API instance
        addRequestInterceptor: apiHandler.addRequestInterceptor,
        removeRequestInterceptor: apiHandler.removeRequestInterceptor,
        addResponseInterceptor: apiHandler.addResponseInterceptor,
        removeResponseInterceptor: apiHandler.removeResponseInterceptor,
        setTimeout: apiHandler.setTimeout,
        setProxyAgent: apiHandler.setProxyAgent,
        setSessionToken: apiHandler.setSessionToken,
        setEndpoints: apiHandler.setEndpoints,
        getCancellationToken: apiHandler.getCancellationToken
    };
}
exports.createExperimentalApiInstance = createExperimentalApiInstance;
//# sourceMappingURL=create-api-instance.js.map