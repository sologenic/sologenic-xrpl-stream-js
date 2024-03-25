"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SologenicError = void 0;
class SologenicError extends Error {
    /**
     * @param status       Status code for error
     * @param rippleError  Inner error
     */
    constructor(status, rippleError) {
        super();
        this.status = status;
        this.rippleError = rippleError;
        this.status = status;
        this.message = this._getError(status);
        Object.setPrototypeOf(this, SologenicError.prototype);
    }
    /**
     * @returns  An array of error codes
     */
    static getErrorCodes() {
        return [
            { id: '1000', message: 'unspecified_error' },
            { id: '1001', message: 'sologenic_constructor_error' },
            { id: '1002', message: 'redis_initialization_failed' },
            { id: '1003', message: 'connection_error' },
            { id: '1004', message: 'unspecified_ripple_error' },
            { id: '1005', message: 'ripple_ws_connection_error' },
            { id: '1006', message: 'unable_to_validate_missed_transactions' },
            { id: '2000', message: 'invalid_xrp_address' },
            { id: '2001', message: 'invalid_xrp_secret' },
            { id: '2002', message: 'unable_to_sign_transaction' }
        ];
    }
    /**
     * @param errorId  An error 'id'
     * @returns        An error 'message' or undefined.
     */
    static getErrorCodeById(errorId) {
        return SologenicError.getErrorCodes().find(e => e.id === errorId).message;
    }
    /**
     * @param message  An error 'message'
     * @returns        An error 'id' or undefined.
     */
    static getErrorCodeByMessage(message) {
        return SologenicError.getErrorCodes().find(e => e.message === message).id;
    }
    /**
     * @param errorId  An error 'id'
     * @returns        An error 'message' or undefined.
     */
    _getError(errorId) {
        return SologenicError.getErrorCodeById(errorId);
    }
}
exports.SologenicError = SologenicError;