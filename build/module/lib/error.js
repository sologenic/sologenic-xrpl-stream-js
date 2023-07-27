export class SologenicError extends Error {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL2Vycm9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sT0FBTyxjQUFlLFNBQVEsS0FBSztJQUN2Qzs7O09BR0c7SUFFSCxZQUFtQixNQUFjLEVBQVMsV0FBbUI7UUFDM0QsS0FBSyxFQUFFLENBQUM7UUFEUyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVMsZ0JBQVcsR0FBWCxXQUFXLENBQVE7UUFFM0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RDLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUQ7O09BRUc7SUFFSSxNQUFNLENBQUMsYUFBYTtRQUN6QixPQUFPO1lBQ0wsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRTtZQUM1QyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLDZCQUE2QixFQUFFO1lBQ3RELEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsNkJBQTZCLEVBQUU7WUFDdEQsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRTtZQUMzQyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLDBCQUEwQixFQUFFO1lBQ25ELEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsNEJBQTRCLEVBQUU7WUFDckQsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSx3Q0FBd0MsRUFBRTtZQUNqRSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFO1lBQzlDLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUU7WUFDN0MsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRTtTQUN0RCxDQUFBO0lBQ0gsQ0FBQztJQUVEOzs7T0FHRztJQUVJLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFlO1FBQzVDLE9BQU8sY0FBYyxDQUFDLGFBQWEsRUFBRSxDQUFDLElBQUksQ0FDeEMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLE9BQU8sQ0FBRSxDQUFDLE9BQU8sQ0FBQztJQUNwQyxDQUFDO0lBRUQ7OztPQUdHO0lBRUksTUFBTSxDQUFDLHFCQUFxQixDQUFDLE9BQWU7UUFDakQsT0FBTyxjQUFjLENBQUMsYUFBYSxFQUFFLENBQUMsSUFBSSxDQUN4QyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLEtBQUssT0FBTyxDQUFFLENBQUMsRUFBRSxDQUFDO0lBQ3BDLENBQUM7SUFFRDs7O09BR0c7SUFFSSxTQUFTLENBQUMsT0FBZTtRQUM5QixPQUFPLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNsRCxDQUFDO0NBQ0YifQ==