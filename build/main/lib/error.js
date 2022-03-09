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
            { id: '2002', message: 'unable_to_sign_transaction' },
            { id: '2003', message: 'transaction_signing_rejected' },
            { id: '2004', message: 'sign_in_rejected' },
            { id: '2005', message: 'transaction_cancelled' }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL2Vycm9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLE1BQWEsY0FBZSxTQUFRLEtBQUs7SUFDdkM7OztPQUdHO0lBRUgsWUFBbUIsTUFBYyxFQUFTLFdBQW1CO1FBQzNELEtBQUssRUFBRSxDQUFDO1FBRFMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFTLGdCQUFXLEdBQVgsV0FBVyxDQUFRO1FBRTNELElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN0QyxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVEOztPQUVHO0lBRUksTUFBTSxDQUFDLGFBQWE7UUFDekIsT0FBTztZQUNMLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUU7WUFDNUMsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSw2QkFBNkIsRUFBRTtZQUN0RCxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLDZCQUE2QixFQUFFO1lBQ3RELEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUU7WUFDM0MsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRTtZQUNuRCxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLDRCQUE0QixFQUFFO1lBQ3JELEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsd0NBQXdDLEVBQUU7WUFDakUsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRTtZQUM5QyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFO1lBQzdDLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsNEJBQTRCLEVBQUU7WUFDckQsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSw4QkFBOEIsRUFBRTtZQUN2RCxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFO1lBQzNDLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUU7U0FDakQsQ0FBQztJQUNKLENBQUM7SUFFRDs7O09BR0c7SUFFSSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBZTtRQUM1QyxPQUFPLGNBQWMsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLE9BQU8sQ0FBRSxDQUFDLE9BQU8sQ0FBQztJQUM3RSxDQUFDO0lBRUQ7OztPQUdHO0lBRUksTUFBTSxDQUFDLHFCQUFxQixDQUFDLE9BQWU7UUFDakQsT0FBTyxjQUFjLENBQUMsYUFBYSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sS0FBSyxPQUFPLENBQUUsQ0FBQyxFQUFFLENBQUM7SUFDN0UsQ0FBQztJQUVEOzs7T0FHRztJQUVJLFNBQVMsQ0FBQyxPQUFlO1FBQzlCLE9BQU8sY0FBYyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2xELENBQUM7Q0FDRjtBQTdERCx3Q0E2REMifQ==