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
const axios_1 = require("axios");
const member_1 = require("./member");
const collection_1 = require("./collection");
const file_1 = require("./file");
const errors_1 = require("./errors");
const clone_deep_1 = require("clone-deep");
const js_base64_1 = require("js-base64");
const create_hmac_1 = require("create-hmac");
const package_json_1 = require("../package.json");
/**
 * Creates an API handler for the current instance with the provided options.
 * @param options
 * @returns {{addRequestInterceptor: addRequestInterceptor, removeRequestInterceptor: removeRequestInterceptor, addResponseInterceptor: addResponseInterceptor, removeResponseInterceptor: removeResponseInterceptor, setTimeout: setTimeout, setProxyAgent: setProxyAgent, setSessionToken: setSessionToken, setEndpoints: setEndpoints, getCancellationToken: getCancellationToken, get: get, getAll: getAll, post: post, put: put, patch: patch, delete: del, create: create}}
 */
function createApiHandler({ options }) {
    const instance = createInstance();
    let cancellationToken = null;
    /**
     * Create an Axios instance for Rebilly.
     * @returns {AxiosInstance}
     */
    function createInstance() {
        return axios_1.default.create(getInstanceOptions());
    }
    /**
     * Get the current Axios instance for this API handler.
     * @returns {Object} axios instance
     */
    function getInstance() {
        return instance;
    }
    /**
     * Generate the minimum configuration options for the current Axios instance.
     * @returns {Object}
     */
    function getInstanceOptions() {
        return {
            baseURL: getBaseURL(),
            timeout: options.requestTimeout,
            headers: getRequestHeaders()
        };
    }
    /**
     * Get the base URL for API calls for the current environment selection (live/sandbox) including the version.
     * @returns {string}
     */
    function getBaseURL() {
        const url = options.isSandbox ? options.apiEndpoints.sandbox : options.apiEndpoints.live;
        return `${url}/${options.apiVersion}`;
    }
    /**
     * Generate the request headers at instantiation with the `REB-APIKEY` if present.
     * @returns {Object}
     */
    function getRequestHeaders() {
        const headers = {
            'REB-API-CONSUMER': `RebillySDK/JS-SDK ${package_json_1.version}`
        };
        if (options.apiKey) {
            headers['REB-APIKEY'] = options.apiKey;
        }
        return headers;
    }
    /**
     * Return a clone of the axios instance headers to prevent shared configuration between all instances.
     * Affects axios 0.16.2.
     * @link https://github.com/mzabriskie/axios/issues/385
     * @returns {*}
     */
    function cloneInstanceHeaders() {
        //axios instance share their configuration as of 0.16.2
        //see axios issue https://github.com/mzabriskie/axios/issues/385
        return clone_deep_1.default(instance.defaults.headers);
    }
    /**
     * Define the default timeout delay in milliseconds for the current API instance.
     * @param timeout number timeout delay in milliseconds
     */
    function setTimeout(timeout) {
        options.requestTimeout = Number(timeout);
        instance.defaults.timeout = options.requestTimeout;
    }
    /**
     * Use a JWT session token to identify API request. This removes the private API key header if present.
     * @param token string
     */
    function setSessionToken(token) {
        const headers = cloneInstanceHeaders();
        options.apiKey = null;
        options.jwt = token;
        delete headers.common['REB-APIKEY'];
        headers.common['Authorization'] = `Bearer ${token}`;
        instance.defaults.headers = headers;
    }
    /**
     * Define a proxy for the current API instance.
     * @param host {string}
     * @param port {number}
     * @param auth {Object}
     * @prop auth.username {string}
     * @prop auth.password {string}
     */
    function setProxyAgent({ host, port, auth }) {
        instance.defaults.proxy = {
            host,
            port,
            auth
        };
    }
    /**
     * Update the endpoints URL for live, sandbox or both environments in the current API instance's active URL.
     * @param live {string}
     * @param sandbox
     * @example
     * const api = RebillyAPI();
     * api.setEndpoints({live: 'https://api-test.rebilly.com'});
     */
    function setEndpoints({ live = null, sandbox = null }) {
        if (live) {
            options.apiEndpoints.live = live;
        }
        if (sandbox) {
            options.apiEndpoints.sandbox = sandbox;
        }
        //after changing the endpoints, update the Axios instance URL too
        instance.defaults.baseURL = getBaseURL();
    }
    /**
     * Returns a cancellation token for the active instance. Based on the withdrawn cancelable promises proposal.
     * @returns {axios.CancelToken}
     */
    function getCancellationToken() {
        const tokenFactory = axios_1.default.CancelToken;
        cancellationToken = tokenFactory.source();
        return cancellationToken;
    }
    /**
     * Generate an authentication signature for payment token creation.
     * @since 1.1.0
     * @param apiUser {string} your API user value found in Rebilly
     * @param apiKey {string} your secret API key found in Rebilly
     * @deprecated
     * @returns {string}
     */
    function generateSignature({ apiUser, apiKey }) {
        const randomString = (strLength) => {
            const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            return Array.from(new Array(strLength)).reduce((text) => {
                return text = `${text}${alphabet.charAt(Math.floor(Math.random() * alphabet.length))}`;
            }, '');
        };
        const nonce = randomString(30);
        const timestamp = Date.now();
        const data = `${apiUser}${nonce}${timestamp}`;
        const signature = create_hmac_1.default('sha1', apiKey).update(data).digest('hex');
        const payload = {
            'REB-APIUSER': apiUser,
            'REB-NONCE': nonce,
            'REB-TIMESTAMP': timestamp,
            'REB-SIGNATURE': signature
        };
        return js_base64_1.default.Base64.encode(JSON.stringify(payload));
    }
    /**
     * Adds a request interceptor to the current API instance.
     * @param thenDelegate {Function} defines the delegate logic to run when the request is completed
     * @param catchDelegate {Function} (optional) defines a callback to run before the catch block of the request is executed for this interceptor
     */
    function addRequestInterceptor({ thenDelegate, catchDelegate = () => { } }) {
        instance.interceptors.request.use(thenDelegate, catchDelegate);
    }
    /**
     * Removes a specific request interceptor from the current API instance.
     * @param interceptor {Function} defines the interceptor delegate to remove
     */
    function removeRequestInterceptor(interceptor) {
        instance.interceptors.request.eject(interceptor);
    }
    /**
     * Adds a request response to the current API instance.
     * @param thenDelegate {Function} defines the delegate logic to run before the response is completed
     * @param catchDelegate {Function} (optional) defines a callback to run before the catch block of the response is executed for this interceptor
     */
    function addResponseInterceptor({ thenDelegate, catchDelegate = () => { } }) {
        instance.interceptors.response.use(thenDelegate, catchDelegate);
    }
    /**
     * Removes a specific response interceptor from the current API instance.
     * @param interceptor {Function} defines the interceptor delegate to remove
     */
    function removeResponseInterceptor(interceptor) {
        instance.interceptors.response.eject(interceptor);
    }
    /**
     * Wraps an Axios request to handle both the response and errors and return wrapped objects.
     * @param request {Function}
     * @param isCollection {boolean} defines whether the request is done to a collection or a member of the API
     * @param params {Object} a hash of parameters or configuration options to
     * apply to the request after cleanup
     * @returns {Promise.<*>}
     */
    function wrapRequest({ request, isCollection, config }) {
        return __awaiter(this, void 0, void 0, function* () {
            const cleanedConfig = getRequestConfig(config);
            try {
                const response = yield request(cleanedConfig);
                return processResponse({ response, isCollection, config: cleanedConfig });
            }
            catch (error) {
                return processError({ error, config: cleanedConfig });
            }
        });
    }
    /**
     * Creates a Member or Collection from the response based on the type flag `isCollection`.
     * @param response {Object} raw API response
     * @param isCollection {boolean}
     * @param config {Object} original request configuration
     * @returns {Member|Collection}
     */
    function processResponse({ response, isCollection, config }) {
        if (isCollection) {
            return new collection_1.default(response, config);
        }
        return new member_1.default(response, config);
    }
    /**
     * Throws an instance of a Rebilly Error from the base Axios error.
     * @param error {Object}
     * @param config {Object} original request configuration
     */
    function processError({ error, config }) {
        if (axios_1.default.isCancel(error)) {
            //the request was manually cancelled by a token
            throw new errors_1.default.RebillyCanceledError(error);
        }
        else if (error.response) {
            switch (Number(error.response.status)) {
                case 401: //unauthorized
                    throw new errors_1.default.RebillyForbiddenError(error);
                case 404: //not found
                    throw new errors_1.default.RebillyNotFoundError(error);
                case 405: //method not allowed
                    throw new errors_1.default.RebillyMethodNotAllowedError(error);
                case 409: //conflict
                    throw new errors_1.default.RebillyConflictError(error);
                case 422: //validation error
                    throw new errors_1.default.RebillyValidationError(error);
                default:
                    //for anything else we will use the default error
                    throw new errors_1.default.RebillyRequestError(error);
            }
        }
        else if (error.code === 'ECONNABORTED') {
            throw new errors_1.default.RebillyTimeoutError(error);
        }
        else {
            throw new errors_1.default.RebillyRequestError(error);
        }
    }
    /**
     * Remove null or empty string parameters from the provided configuration parameters and return only defined values.
     * @param configuration {object}
     * @returns {Object}
     */
    function cleanUpParameters(configuration) {
        if (configuration.params !== undefined) {
            configuration.params = Object
                .keys(configuration.params)
                .filter(key => configuration.params[key] !== null && configuration.params[key] !== '')
                .reduce((cleaned, key) => {
                cleaned[key] = configuration.params[key];
                return cleaned;
            }, {});
        }
        return configuration;
    }
    /**
     * Combines parameters with other configurations settings for all requests. If present the cancellation token will be injected.
     * @param configuration
     * @returns {Object}
     */
    function getRequestConfig(configuration = {}) {
        let config = cleanUpParameters(configuration);
        if (cancellationToken) {
            config = Object.assign({}, config, { cancelToken: cancellationToken.token });
        }
        return config;
    }
    /**
     * Trigger a GET request on the target URL and return the member received in the response.
     * @param url {string}
     * @param params {Object=}
     * @returns {Member} member
     */
    function get(url, params = {}) {
        return wrapRequest({
            request: config => instance.get(url, config),
            config: { params },
        });
    }
    /**
     * Trigger a GET request on the target URL and return the collection received in the response.
     * @param url {string}
     * @param params {Object}
     * @returns {Collection} collection
     */
    function getAll(url, params) {
        return wrapRequest({
            request: config => instance.get(url, config),
            config: { params },
            isCollection: true,
        });
    }
    /**
     * Trigger a POST request on the target URL with the provided data payload, and return the member received in the response.
     * @param url {string}
     * @param data {Object}
     * @param options {Object}
     * @returns {Member} member
     */
    function post(url, data, options = {}) {
        let params = {};
        //enable support for POST without authentication, specifically for login, sign up and other guest actions
        if (options.authenticate === false) {
            //copy headers from default config
            params = { headers: cloneInstanceHeaders() };
            //temporarily remove authentication headers
            delete params.headers.common['REB-APIKEY'];
            delete params.headers.common['Authorization'];
        }
        // allow param definition for particular POST cases
        if (options.params) {
            params.params = Object.assign({}, options.params);
        }
        return wrapRequest({
            request: config => instance.post(url, data, config),
            params,
        });
    }
    /**
     * Trigger a PUT request on the target URL with the provided data payload, and return the member received in the response.
     * @param url {string}
     * @param data {Object}
     * @returns {Member} member
     */
    function put(url, data) {
        return wrapRequest({ request: config => instance.put(url, data, config) });
    }
    /**
     * Trigger a PATCH request on the target URL with the provided data payload, and return the member received in the response.
     * @param url {string}
     * @param data {Object}
     * @returns {Member} member
     */
    function patch(url, data) {
        return wrapRequest({ request: config => instance.patch(url, data, config) });
    }
    /**
     * Trigger a DELETE request on the target URL.
     * @param url {string}
     * @returns {null|*}
     */
    function del(url) {
        return wrapRequest({ request: config => instance.delete(url, config) });
    }
    /**
     * Create a new member for the current resource using the data payload if no ID is provided, otherwise verify if the ID already exists and create the member with the specified ID. Throws RebillyInvalidOperationError if the ID already exists.
     * @param url {string}
     * @param id {string}
     * @param data {Object}
     * @throws Errors.RebillyConflictError
     * @returns {Member} member
     */
    function create(url, id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            if (id === '') {
                return post(url, data);
            }
            else {
                try {
                    const item = yield get(url);
                    if (item.response.status === 200) {
                        throw new errors_1.default.RebillyConflictError({ message: 'Member already exists. Please use a different ID.' });
                    }
                }
                catch (error) {
                    if (error.name === 'RebillyNotFoundError') {
                        return put(url, data);
                    }
                    //throw unexpected errors
                    throw error;
                }
            }
        });
    }
    /**
     * Returns a File by triggering a get call to the specified URL without converting the response into a Member. Use the config object to specify headers and desired response type.
     * @link https://github.com/mzabriskie/axios#request-config
     * @param url {string}
     * @param config {Object}
     * @returns {Promise.<*>}
     */
    function download(url, config) {
        return __awaiter(this, void 0, void 0, function* () {
            const cleanedConfig = getRequestConfig(config);
            try {
                const response = yield instance.get(url, cleanedConfig);
                return new file_1.default(response, cleanedConfig);
            }
            catch (error) {
                return processError({ error, config: cleanedConfig });
            }
        });
    }
    return {
        getInstance,
        addRequestInterceptor,
        removeRequestInterceptor,
        addResponseInterceptor,
        removeResponseInterceptor,
        setTimeout,
        setProxyAgent,
        setSessionToken,
        setEndpoints,
        getCancellationToken,
        generateSignature,
        get,
        getAll,
        post,
        put,
        patch,
        delete: del,
        create,
        download
    };
}
exports.default = createApiHandler;
;
//# sourceMappingURL=create-api-handler.js.map