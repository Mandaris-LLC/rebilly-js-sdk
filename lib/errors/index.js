"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rebilly_error_1 = require("./rebilly-error");
class RebillyRequestError extends rebilly_error_1.default {
    constructor(error) {
        super({ error, name: 'RebillyRequestError' });
    }
}
class RebillyValidationError extends rebilly_error_1.default {
    constructor(error) {
        super({ error, name: 'RebillyValidationError' });
    }
}
class RebillyNotFoundError extends rebilly_error_1.default {
    constructor(error) {
        super({ error, name: 'RebillyNotFoundError' });
    }
}
class RebillyConflictError extends rebilly_error_1.default {
    constructor(error) {
        super({ error, name: 'RebillyConflictError' });
    }
}
class RebillyForbiddenError extends rebilly_error_1.default {
    constructor(error) {
        super({ error, name: 'RebillyForbiddenError' });
    }
}
class RebillyMethodNotAllowedError extends rebilly_error_1.default {
    constructor(error) {
        super({ error, name: 'RebillyMethodNotAllowedError' });
    }
}
class RebillyTimeoutError extends rebilly_error_1.default {
    constructor(error) {
        super({ error, name: 'RebillyTimeoutError' });
    }
}
class RebillyCanceledError extends rebilly_error_1.default {
    constructor(error) {
        super({ error, name: 'RebillyCanceledError' });
    }
}
const Errors = {
    RebillyError: rebilly_error_1.default,
    RebillyRequestError,
    RebillyValidationError,
    RebillyNotFoundError,
    RebillyConflictError,
    RebillyForbiddenError,
    RebillyMethodNotAllowedError,
    RebillyTimeoutError,
    RebillyCanceledError: RebillyCanceledError
};
exports.default = Errors;
//# sourceMappingURL=index.js.map