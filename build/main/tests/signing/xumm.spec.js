"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const xumm_1 = require("../../lib/signing/xumm");
const account_1 = __importDefault(require("../../lib/account"));
const test = ava_1.default;
const MOCK_XUMM_SIGN_REQUEST_RESPONSE = `
{
  uuid: '0ea14bb7-6054-44a9-bcfc-5bff6b132261',
  next: {
    always: 'https://xumm.app/sign/0ea14bb7-6054-44a9-bcfc-5bff6b132261'
  },
  refs: {
    qr_png: 'https://xumm.app/sign/0ea14bb7-6054-44a9-bcfc-5bff6b132261_q.png',
    qr_matrix: 'https://xumm.app/sign/0ea14bb7-6054-44a9-bcfc-5bff6b132261_q.json',
    qr_uri_quality_opts: [ 'm', 'q', 'h' ],
    websocket_status: 'wss://xumm.app/sign/0ea14bb7-6054-44a9-bcfc-5bff6b132261'
  },
  pushed: false
}
`;
const MOCK_XUMM_VERIFY_REQUEST_RESPONSE = `
{
  meta: {
    exists: true,
    uuid: '0ea14bb7-6054-44a9-bcfc-5bff6b132261',
    multisign: false,
    submit: false,
    destination: '',
    resolved_destination: '',
    resolved: true,
    signed: true,
    cancelled: false,
    expired: false,
    pushed: false,
    app_opened: true,
    return_url_app: null,
    return_url_web: null
  },
  application: {
    name: 'sologenic-xrpl-stream-js',
    description: 'Sologenic XRPL Stream',
    disabled: 0,
    uuidv4: 'be29f4b8-7d12-4646-8145-584954fd7b7e',
    icon_url: 'https://xumm-cdn.imgix.net/app-logo/e41dc88d-0426-44c3-99a6-a075329e8550.png',
    issued_user_token: 'ee9d788d-2de7-4d27-8afd-7829490f21bf'
  },
  payload: {
    tx_type: 'AccountSet',
    tx_destination: '',
    tx_destination_tag: null,
    request_json: {
      Account: 'rEj9X3pz7JCTsAmEqLh4NC6ahk2JbCbVmt',
      TransactionType: 'AccountSet',
      SetFlag: 5
    },
    created_at: '2020-04-25T17:55:07Z',
    expires_at: '2020-04-25T17:57:07Z',
    expires_in_seconds: 77
  },
  response: {
    hex: '1200032280000000240000008320210000000568400000000000000C7321028F2278D083264AF4A9098966DD868809908DE98778EA1F8F0620CD9C6DF3C94974473045022100B345FD048E9CC994375B9240A5CD468F0A384C3AD589732431F6B8BA8BDF61E602203CD6F714C8F02F30BAA20525CDF80BBDE6BBE244985CD4DB685D3C1507E9B4918114A18A57CB7B1112537A2D39777590EAE34911222B',
    txid: '2F42AB1673FD749099801478137A4D3F1BAE184A64A30219CCB116C051BE7544',
    resolved_at: '2020-04-25T17:55:49.000Z',
    dispatched_to: 'wss://s2.ripple.com',
    dispatched_result: '',
    dispatched_nodetype: '',
    multisign_account: '',
    account: 'rEj9X3pz7JCTsAmEqLh4NC6ahk2JbCbVmt'
  },
  custom_meta: { identifier: null, blob: null, instruction: null }
}
`;
test.skip("signing of a request, with an issued user token (push notification should be received)", async (t) => {
    // This is a visual test, just make sure you receive the push notification on
    // your mobile test.  Again, we'll eventually use some mocks here.
    /*
      XUMM PAYLOAD (with app_url)
      {
        uuid: '7ab07133-d1f5-49c7-968f-14d03e889bb8',
        next: {
          always: 'https://xumm.app/sign/7ab07133-d1f5-49c7-968f-14d03e889bb8',
          no_push_msg_received: 'https://xumm.app/sign/7ab07133-d1f5-49c7-968f-14d03e889bb8/qr'
        },
        refs: {
          qr_png: 'https://xumm.app/sign/7ab07133-d1f5-49c7-968f-14d03e889bb8_q.png',
          qr_matrix: 'https://xumm.app/sign/7ab07133-d1f5-49c7-968f-14d03e889bb8_q.json',
          qr_uri_quality_opts: [ 'm', 'q', 'h' ],
          websocket_status: 'wss://xumm.app/sign/7ab07133-d1f5-49c7-968f-14d03e889bb8'
        },
        pushed: true
      }
    */
    const xs = new xumm_1.XummSigner({
        xummApiKey: process.env.XUMM_API_KEY,
        xummApiSecret: process.env.XUMM_API_SECRET,
        // Gives us 10 seconds to react as this is a manual test, just so we can verify
        // the push notification was received.
        maximumExecutionTime: 10000
    });
    const account = new account_1.default("rEj9X3pz7JCTsAmEqLh4NC6ahk2JbCbVmt", undefined, "", "");
    const tx = {
        Account: 'rEj9X3pz7JCTsAmEqLh4NC6ahk2JbCbVmt',
        TransactionType: 'AccountSet',
        SetFlag: 5,
        TransactionMetadata: {
            xummMeta: {
                // This is a test account so I am not worried about the push
                // notifications on this device.
                issued_user_token: 'ee9d788d-2de7-4d27-8afd-7829490f21bf'
            }
        }
    };
    try {
        // Should immmediately throw an error because we have set our maximum execution time to 1ms
        const error = await xs.sign(tx, "1234", account, undefined);
        // Should not get here
        t.fail();
    }
    catch (error) {
        // Should throw an exception because our promise times out before we can complete the
        // request for testing.  We should probably use some mocks to actually test this
        // eventually.
        t.pass();
    }
});
test.skip("signing of a request, without an issued user token (app_url should be manually accessed on mobile device)", async (t) => {
    /*
    XUMM PAYLOAD (with app_url)
    {
      uuid: 'd1a3fb57-96b1-4f8b-8314-411d9fb652aa',
      next: {
        always: 'https://xumm.app/sign/d1a3fb57-96b1-4f8b-8314-411d9fb652aa'
      },
      refs: {
        qr_png: 'https://xumm.app/sign/d1a3fb57-96b1-4f8b-8314-411d9fb652aa_q.png',
        qr_matrix: 'https://xumm.app/sign/d1a3fb57-96b1-4f8b-8314-411d9fb652aa_q.json',
        qr_uri_quality_opts: [ 'm', 'q', 'h' ],
        websocket_status: 'wss://xumm.app/sign/d1a3fb57-96b1-4f8b-8314-411d9fb652aa'
      },
      pushed: false
    }
    */
    const xs = new xumm_1.XummSigner({
        xummApiKey: process.env.XUMM_API_KEY,
        xummApiSecret: process.env.XUMM_API_SECRET,
        // Gives us 5 seconds to react as this is a manual test
        maximumExecutionTime: 5000
    });
    const account = new account_1.default("rEj9X3pz7JCTsAmEqLh4NC6ahk2JbCbVmt", undefined, "", "");
    const tx = {
        Account: 'rEj9X3pz7JCTsAmEqLh4NC6ahk2JbCbVmt',
        TransactionType: 'AccountSet',
        SetFlag: 5
    };
    try {
        /*
        tx.TransactionMetadata = {
          xummMeta: issued_user_token
        };
        */
        // Should immmediately throw an error because we have set our maximum execution time to 1ms
        const error = await xs.sign(tx, "1234", account, undefined);
        t.fail();
    }
    catch (error) {
        t.pass();
    }
});
test.skip("time out a signing a request with xumm", async (t) => {
    const xs = new xumm_1.XummSigner({
        xummApiKey: process.env.XUMM_API_KEY,
        xummApiSecret: process.env.XUMM_API_SECRET,
        maximumExecutionTime: 1000
    });
    const account = new account_1.default("rEj9X3pz7JCTsAmEqLh4NC6ahk2JbCbVmt", undefined, "", "");
    const tx = {
        Account: 'rEj9X3pz7JCTsAmEqLh4NC6ahk2JbCbVmt',
        TransactionType: 'AccountSet',
        SetFlag: 5
    };
    try {
        // Should immmediately throw an error because we have set our maximum execution time to 1ms
        const error = await xs.sign(tx, "1234", account, undefined);
        // Should not get here
        t.fail();
    }
    catch (error) {
        // Should throw an exception
        t.pass();
    }
});
test.skip("valid signing a request with xumm", async (t) => {
    const xs = new xumm_1.XummSigner({
        xummApiKey: process.env.XUMM_API_KEY,
        xummApiSecret: process.env.XUMM_API_SECRET
    });
    const account = new account_1.default("rEj9X3pz7JCTsAmEqLh4NC6ahk2JbCbVmt", undefined, "", "");
    const tx = {
        Account: 'rEj9X3pz7JCTsAmEqLh4NC6ahk2JbCbVmt',
        TransactionType: 'AccountSet',
        SetFlag: 5
    };
    // Should immmediately throw an error because we have set our maximum execution time to 1ms
    await xs.sign(tx, "1234", account, undefined);
    t.pass();
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieHVtbS5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3Rlc3RzL3NpZ25pbmcveHVtbS5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsOENBQTJDO0FBRTNDLGlEQUFvRDtBQUNwRCxnRUFBNEM7QUFHNUMsTUFBTSxJQUFJLEdBQUcsYUFHWCxDQUFDO0FBRUgsTUFBTSwrQkFBK0IsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Q0FjdkMsQ0FBQztBQUVGLE1BQU0saUNBQWlDLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQW1EekMsQ0FBQztBQUVGLElBQUksQ0FBQyxJQUFJLENBQUMsd0ZBQXdGLEVBQUUsS0FBSyxFQUFDLENBQUMsRUFBQyxFQUFFO0lBQzVHLDZFQUE2RTtJQUM3RSxrRUFBa0U7SUFFbEU7Ozs7Ozs7Ozs7Ozs7Ozs7TUFnQkU7SUFFRixNQUFNLEVBQUUsR0FBRyxJQUFJLGlCQUFVLENBQUM7UUFDeEIsVUFBVSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWTtRQUNwQyxhQUFhLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlO1FBQzFDLCtFQUErRTtRQUMvRSxzQ0FBc0M7UUFDdEMsb0JBQW9CLEVBQUUsS0FBSztLQUM1QixDQUFDLENBQUM7SUFFSCxNQUFNLE9BQU8sR0FBRyxJQUFJLGlCQUFXLENBQzdCLG9DQUFvQyxFQUNwQyxTQUFTLEVBQ1QsRUFBRSxFQUNGLEVBQUUsQ0FBQyxDQUFDO0lBRU4sTUFBTSxFQUFFLEdBQXNCO1FBQzVCLE9BQU8sRUFBRSxvQ0FBb0M7UUFDN0MsZUFBZSxFQUFFLFlBQVk7UUFDN0IsT0FBTyxFQUFFLENBQUM7UUFDVixtQkFBbUIsRUFBRTtZQUNuQixRQUFRLEVBQUU7Z0JBQ1IsNERBQTREO2dCQUM1RCxnQ0FBZ0M7Z0JBQ2hDLGlCQUFpQixFQUFFLHNDQUFzQzthQUMxRDtTQUNG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