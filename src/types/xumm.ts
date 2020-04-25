export interface IXummSubmitAdditional {
  issued_user_token: string;
};

export interface IXummSubmitPayload {
  uuid: string,
  next: {
    always: string;
    no_push_msg_received: string;
  },
  refs: {
    qr_png: string,
    qr_matrix: string,
    qr_uri_quality_opts: []
  },
  websocket_status: string,
  pushed: boolean
};

export interface IXummQueryPayload {
  meta: {
    exists: boolean,
    uuid: any,
    multisign: boolean,
    submit: boolean,
    destination: any,
    resolved_destination: any,
    resolved: boolean,
    signed: boolean,
    cancelled: boolean,
    expired: boolean,
    pushed: boolean,
    app_opened: any,
    return_url_app: any
    return_url_web?: any
  },

  custom_meta?: {
    identifier: any,
    blob: any,
    instruction: any
  },

  application: {
    name: any,
    description: any,
    disabled: any,
    uuidv4: any,
    icon_url: any,
    issued_user_token: any
  }

  payload: {
    tx_type: any,
    tx_destination: any,
    tx_destination_tag: any
    request_json?: any
    created_at: any,
    expires_at: any,
    expires_in_seconds: any
  },

  response: {
    hex: any,
    txid: any,
    resolved_at: any,
    dispatched_to: any,
    dispatched_result: any,
    multisign_account: any,
    account: any
  }
}
