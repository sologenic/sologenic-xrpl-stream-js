export declare class SologenicError extends Error {
    status: string;
    rippleError?: Error;
    /**
     * @param status       Status code for error
     * @param rippleError  Inner error
     */
    constructor(status: string, rippleError?: Error);
    /**
     * @returns  An array of error codes
     */
    static getErrorCodes(): Array<any>;
    /**
     * @param errorId  An error 'id'
     * @returns        An error 'message' or undefined.
     */
    static getErrorCodeById(errorId: string): string;
    /**
     * @param message  An error 'message'
     * @returns        An error 'id' or undefined.
     */
    static getErrorCodeByMessage(message: string): string;
    /**
     * @param errorId  An error 'id'
     * @returns        An error 'message' or undefined.
     */
    _getError(errorId: string): string;
}
