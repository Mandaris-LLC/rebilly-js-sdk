"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const customers_resource_1 = require("./customers-resource");
const data_exports_resource_1 = require("./data-exports-resource");
const histograms_resource_1 = require("./histograms-resource");
const reports_resource_1 = require("./reports-resource");
const subscriptions_resource_1 = require("./subscriptions-resource");
const timelines_resource_1 = require("./timelines-resource");
const transactions_resource_1 = require("./transactions-resource");
const ExperimentalResources = {
    CustomersResource: customers_resource_1.default,
    DataExportsResource: data_exports_resource_1.default,
    HistogramsResource: histograms_resource_1.default,
    ReportsResource: reports_resource_1.default,
    SubscriptionsResource: subscriptions_resource_1.default,
    TimelinesResource: timelines_resource_1.default,
    TransactionsResource: transactions_resource_1.default
};
exports.default = ExperimentalResources;
//# sourceMappingURL=index.js.map