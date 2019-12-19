export class SologenicError extends Error {
  constructor(public status: string, public rippleError?: Error) {
    super();
    this.status = status;
    this.message = this._getError(status);
    Object.setPrototypeOf(this, SologenicError.prototype);
  }
  
  public static getErrorCodes(): Array<any> {
    return [
      { id: '1000', message: 'unspecified_error' },
      { id: '1001', message: 'sologenic_constructor_error' },
      { id: '1002', message: 'redis_initialization_failed' },
      { id: '1003', message: 'connection_error' },
      { id: '1004', message: 'unspecified_ripple_error' },
      { id: '1005', message: 'ripple_ws_connection_error' },
      { id: '1006', message: 'unable_to_validate_missed_transactions' },
      { id: '2000', message: 'invalid_xrp_address' },
      { id: '2001', message: 'invalid_xrp_secret' }
    ]
  }

  public static getErrorCodeById(errorId: string): string {
    return SologenicError.getErrorCodes().find(
      e => e.id === errorId)!.message;
  }

  public static getErrorCodeByMessage(message: string): string {
    return SologenicError.getErrorCodes().find(
      e => e.message === message)!.id;
  }

  public _getError(errorId: string): string {
    return SologenicError.getErrorCodeById(errorId);
  }
}
